/**
 * Custom Live Search for Signal Pilot Docs
 * Provides instant search results as you type
 */
(function() {
  'use strict';

  let searchIndex = null;
  let searchInput = null;
  let searchResultList = null;
  let searchResultMeta = null;

  // Load search index
  async function loadSearchIndex() {
    try {
      const response = await fetch('/search/search_index.json');
      const data = await response.json();
      searchIndex = data.docs || [];
      console.log('[Custom Search] Loaded', searchIndex.length, 'documents');
      return true;
    } catch (error) {
      console.error('[Custom Search] Failed to load search index:', error);
      return false;
    }
  }

  // Simple fuzzy search scoring
  function calculateScore(doc, query) {
    const lowerQuery = query.toLowerCase();
    const title = (doc.title || '').toLowerCase();
    const text = (doc.text || '').toLowerCase();
    const location = (doc.location || '').toLowerCase();

    let score = 0;

    // Exact title match - highest priority
    if (title === lowerQuery) {
      score += 1000;
    } else if (title.includes(lowerQuery)) {
      score += 500;
    }

    // Title word match
    const queryWords = lowerQuery.split(/\s+/);
    queryWords.forEach(word => {
      if (title.includes(word)) score += 100;
      if (text.includes(word)) score += 10;
    });

    // Boost main pages (no hash)
    if (!location.includes('#')) {
      score *= 2;
    }

    // Penalize very short content
    if (text.length < 50) {
      score *= 0.3;
    }

    return score;
  }

  // Perform search
  function performSearch(query) {
    if (!searchIndex || query.length < 2) {
      return [];
    }

    const results = searchIndex
      .map(doc => ({
        ...doc,
        score: calculateScore(doc, query)
      }))
      .filter(doc => doc.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 15);

    return results;
  }

  // Create result HTML
  function createResultHTML(doc, query) {
    const title = doc.title || 'Untitled';
    const location = doc.location || '';
    const text = (doc.text || '').substring(0, 150);

    // Extract page name from location for sections
    let contextHint = '';
    if (location.includes('#')) {
      const match = location.match(/([^\/]+)\//);
      if (match) {
        contextHint = `<span style="display: inline-block; margin-left: 8px; padding: 2px 6px; font-size: 0.75em; color: var(--md-default-fg-color--light); background: var(--md-code-bg-color); border-radius: 3px; opacity: 0.8;">in ${match[1].replace(/-/g, ' ')}</span>`;
      }
    }

    const isMainPage = !location.includes('#');
    const mainPageClass = isMainPage ? ' style="border-left: 3px solid var(--md-primary-fg-color); background: rgba(0,0,0,0.02);"' : '';

    return `
      <li class="md-search-result__item"${mainPageClass}>
        <a href="/${location}" class="md-search-result__link" tabindex="0">
          <article class="md-search-result__article md-typeset">
            <h1 class="md-search-result__title" style="${isMainPage ? 'font-weight: 600; color: var(--md-primary-fg-color);' : ''}">${title}${contextHint}</h1>
            ${text ? `<p class="md-search-result__teaser">${text}...</p>` : ''}
          </article>
        </a>
      </li>
    `;
  }

  // Display results
  function displayResults(results, query) {
    if (!searchResultList || !searchResultMeta) return;

    if (results.length === 0) {
      searchResultMeta.textContent = 'No matching documents';
      searchResultList.innerHTML = '';
      return;
    }

    searchResultMeta.textContent = `${results.length} matching document${results.length !== 1 ? 's' : ''}`;
    searchResultList.innerHTML = results.map(doc => createResultHTML(doc, query)).join('');

    console.log('[Custom Search] Displayed', results.length, 'results for:', query);

    // FIX: Inject CSS to force search containers to be visible
    let fixStyle = document.getElementById('sp-search-fix');
    if (!fixStyle) {
      fixStyle = document.createElement('style');
      fixStyle.id = 'sp-search-fix';
      fixStyle.textContent = `
        .md-search__output {
          height: auto !important;
          min-height: 300px !important;
        }
        .md-search__scrollwrap {
          height: auto !important;
          max-height: calc(100vh - 16rem) !important;
        }
        .md-search__inner {
          z-index: 9999 !important;
        }
      `;
      document.head.appendChild(fixStyle);
      console.log('[Custom Search] Injected CSS fix');
    }

    // DEBUG: Check visibility
    setTimeout(() => {
      const resultItems = document.querySelectorAll('.md-search-result__item');
      console.log('[Custom Search] Result items in DOM:', resultItems.length);
      if (resultItems.length > 0) {
        const firstItem = resultItems[0];
        const styles = window.getComputedStyle(firstItem);
        const rect = firstItem.getBoundingClientRect();

        console.log('[Custom Search] First result CSS:', {
          display: styles.display,
          opacity: styles.opacity,
          visibility: styles.visibility,
          height: styles.height,
          zIndex: styles.zIndex
        });

        console.log('[Custom Search] First result position:', {
          top: rect.top,
          left: rect.left,
          bottom: rect.bottom,
          right: rect.right,
          width: rect.width,
          height: rect.height,
          isInViewport: rect.top >= 0 && rect.bottom <= window.innerHeight
        });

        // Check parents
        const scrollWrap = document.querySelector('.md-search__scrollwrap');
        const output = document.querySelector('.md-search__output');
        const searchModal = document.querySelector('.md-search');

        if (scrollWrap) {
          const swStyles = window.getComputedStyle(scrollWrap);
          const swRect = scrollWrap.getBoundingClientRect();
          console.log('[Custom Search] Scrollwrap:', {
            display: swStyles.display,
            height: swStyles.height,
            maxHeight: swStyles.maxHeight,
            overflow: swStyles.overflow,
            position: swRect
          });
        }

        if (output) {
          const outStyles = window.getComputedStyle(output);
          console.log('[Custom Search] Output:', {
            display: outStyles.display,
            height: outStyles.height
          });
        }

        if (searchModal) {
          const modalStyles = window.getComputedStyle(searchModal);
          console.log('[Custom Search] Search modal:', {
            display: modalStyles.display,
            zIndex: modalStyles.zIndex
          });
        }

        // Check what element is at the search result position
        const elementAtPoint = document.elementFromPoint(rect.left + 10, rect.top + 10);
        console.log('[Custom Search] Element covering results:', elementAtPoint);
      }
    }, 100);
  }

  // Handle search input
  let searchTimeout = null;
  function handleSearchInput(e) {
    const query = e.target.value.trim();

    clearTimeout(searchTimeout);

    if (query.length < 2) {
      if (searchResultMeta) {
        searchResultMeta.textContent = 'Type to start searching';
      }
      if (searchResultList) {
        searchResultList.innerHTML = '';
      }
      return;
    }

    // Show searching state
    if (searchResultMeta) {
      searchResultMeta.textContent = 'Searching...';
    }

    // Debounce search
    searchTimeout = setTimeout(() => {
      const results = performSearch(query);
      displayResults(results, query);
    }, 150);
  }

  // Initialize
  async function init() {
    console.log('[Custom Search] Initializing...');

    // Load search index
    const loaded = await loadSearchIndex();
    if (!loaded) {
      console.error('[Custom Search] Failed to initialize - could not load index');
      return;
    }

    // Wait for search input to be available
    function attachToSearch() {
      searchInput = document.querySelector('.md-search__input');
      searchResultList = document.querySelector('.md-search-result__list');
      searchResultMeta = document.querySelector('.md-search-result__meta');

      if (!searchInput || !searchResultList || !searchResultMeta) {
        setTimeout(attachToSearch, 100);
        return;
      }

      console.log('[Custom Search] Attached to search input');

      // Attach input handler
      searchInput.addEventListener('input', handleSearchInput);

      // Set initial state
      searchResultMeta.textContent = 'Type to start searching';

      console.log('[Custom Search] ✅ Ready - live results enabled!');
    }

    attachToSearch();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-initialize on page navigation (for SPA-like behavior)
  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => {
      setTimeout(init, 100);
    });
  }
})();

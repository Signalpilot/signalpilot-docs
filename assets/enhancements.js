/**
 * SignalPilot Docs - Enhancement Scripts
 * Adds breadcrumbs, scroll indicators, ARIA landmarks, and keyboard navigation
 */

(function() {
  'use strict';

  /* ========================================
     1. BREADCRUMB NAVIGATION
     ======================================== */

  function addBreadcrumbs() {
    // Wait for page to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addBreadcrumbs);
      return;
    }

    const contentElement = document.querySelector('.md-content__inner');
    if (!contentElement) return;

    // Check if breadcrumbs already exist - prevent duplicates
    if (contentElement.querySelector('.sp-breadcrumb')) {
      return;
    }

    // Get page title from h1
    const h1 = contentElement.querySelector('h1');
    if (!h1) return;

    const pageTitle = h1.textContent.trim();
    const currentPath = window.location.pathname;

    // Skip breadcrumbs on homepage
    if (currentPath === '/' || currentPath === '/index.html') return;

    // Parse path to create breadcrumb trail
    const pathParts = currentPath.split('/').filter(p => p && p !== 'index.html');

    if (pathParts.length === 0) return;

    // Create breadcrumb container
    const breadcrumb = document.createElement('div');
    breadcrumb.className = 'sp-breadcrumb';
    breadcrumb.setAttribute('role', 'navigation');
    breadcrumb.setAttribute('aria-label', 'Breadcrumb');

    const nav = document.createElement('nav');

    // Add Home link
    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = 'Home';
    nav.appendChild(homeLink);

    // Build breadcrumb trail
    const breadcrumbMap = {
      'suite-index': 'Suite Overview',
      'pentarch-v10': 'Pentarch v1.0',
      'janus-atlas-v10': 'Janus Atlas v1.0',
      'omnideck-v10': 'Omnideck v1.0',
      'augury-grid-v10': 'Augury Grid v1.0',
      'minimal-flow-v10': 'Volume Oracle v1.0',
      'harmonic-oscillator-v10': 'Harmonic Oscillator v1.0',
      'plutus-flow-v10': 'Plutus Flow v1.0',
      'start-quick': 'Quick Start',
      'start-prerequisites': 'Prerequisites',
      'start-onboarding': 'Onboarding Guide',
      'start-quickstart': 'Quickstart',
      'how-to-alerts': 'Setting Up Alerts',
      'how-to-webhooks': 'Using Webhooks',
      'how-to-screener': 'Screener Setup',
      'ref-best-practices': 'Best Practices',
      'ref-comparison': 'Comparison Guide',
      'ref-glossary': 'Glossary',
      'ref-non-repaint': 'Non-Repaint Explained',
      'ref-troubleshooting': 'Troubleshooting',
      'ref-workflow': 'Workflow Guide',
      'about-faq': 'FAQ',
      'about-support': 'Support',
      'about-changelog': 'Changelog',
      'compliance-language-guide': 'Compliance Language Guide'
    };

    let currentHref = '/';

    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i];

      // Add separator
      const separator = document.createElement('span');
      separator.className = 'separator';
      separator.textContent = ' › ';
      separator.setAttribute('aria-hidden', 'true');
      nav.appendChild(separator);

      currentHref += part + '/';

      // Last item (current page)
      if (i === pathParts.length - 1) {
        const currentSpan = document.createElement('span');
        currentSpan.className = 'current';
        currentSpan.textContent = breadcrumbMap[part] || pageTitle;
        currentSpan.setAttribute('aria-current', 'page');
        nav.appendChild(currentSpan);
      } else {
        // Parent links
        const link = document.createElement('a');
        link.href = currentHref;
        link.textContent = breadcrumbMap[part] || capitalize(part.replace(/-/g, ' '));
        nav.appendChild(link);
      }
    }

    breadcrumb.appendChild(nav);

    // Insert breadcrumb after h1
    h1.parentNode.insertBefore(breadcrumb, h1.nextSibling);
  }

  function capitalize(str) {
    return str.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  /* ========================================
     2. TABLE SCROLL INDICATORS
     ======================================== */

  function addTableScrollIndicators() {
    const tables = document.querySelectorAll('.md-typeset table');

    tables.forEach(table => {
      function checkScroll() {
        const hasScroll = table.scrollWidth > table.clientWidth;
        const isScrolledToEnd = table.scrollLeft >= (table.scrollWidth - table.clientWidth - 5);

        if (hasScroll && !isScrolledToEnd) {
          table.classList.add('has-scroll');
        } else {
          table.classList.remove('has-scroll');
        }
      }

      // Check on load and resize
      checkScroll();
      window.addEventListener('resize', checkScroll);
      table.addEventListener('scroll', checkScroll);

      // Add visual hint for mobile users
      if (window.innerWidth <= 768) {
        const hasScroll = table.scrollWidth > table.clientWidth;
        if (hasScroll && !table.dataset.hintShown) {
          table.dataset.hintShown = 'true';

          // Show a temporary hint
          const hint = document.createElement('div');
          hint.className = 'table-scroll-hint';
          hint.textContent = '← Swipe to see more →';
          hint.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--md-primary-fg-color);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.85rem;
            font-weight: 600;
            pointer-events: none;
            z-index: 10;
            opacity: 0;
            transition: opacity 0.3s;
          `;

          table.parentElement.style.position = 'relative';
          table.parentElement.appendChild(hint);

          setTimeout(() => { hint.style.opacity = '1'; }, 100);
          setTimeout(() => { hint.style.opacity = '0'; }, 3000);
          setTimeout(() => { hint.remove(); }, 3300);
        }
      }
    });
  }

  /* ========================================
     3. ARIA LANDMARKS
     ======================================== */

  function addAriaLandmarks() {
    // Add main landmark
    const mainContent = document.querySelector('.md-content__inner');
    if (mainContent && !mainContent.closest('[role="main"]')) {
      const main = mainContent.closest('.md-content');
      if (main) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }
    }

    // Add navigation landmarks
    const nav = document.querySelector('.md-sidebar--primary');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Primary navigation');
    }

    const tocNav = document.querySelector('.md-sidebar--secondary');
    if (tocNav && !tocNav.getAttribute('role')) {
      tocNav.setAttribute('role', 'navigation');
      tocNav.setAttribute('aria-label', 'Table of contents');
    }

    // Add search landmark
    const search = document.querySelector('.md-search');
    if (search && !search.getAttribute('role')) {
      search.setAttribute('role', 'search');
    }

    // Add complementary landmark for aside content
    const asides = document.querySelectorAll('.md-typeset .admonition');
    asides.forEach(aside => {
      if (!aside.getAttribute('role')) {
        aside.setAttribute('role', 'complementary');

        const title = aside.querySelector('.admonition-title');
        if (title) {
          const id = 'aside-' + Math.random().toString(36).substr(2, 9);
          title.id = id;
          aside.setAttribute('aria-labelledby', id);
        }
      }
    });
  }

  /* ========================================
     4. ENHANCED KEYBOARD NAVIGATION
     ======================================== */

  function enhanceKeyboardNavigation() {
    // Add keyboard shortcuts info
    const shortcuts = {
      '/': 'Focus search',
      's': 'Focus search',
      'Escape': 'Close search/drawer',
      '?': 'Show this help',
      'n': 'Next page',
      'p': 'Previous page'
    };

    // Keyboard shortcuts handler
    document.addEventListener('keydown', (e) => {
      // Don't trigger if typing in input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      switch(e.key.toLowerCase()) {
        case '/':
        case 's':
          e.preventDefault();
          const searchInput = document.querySelector('.md-search__input');
          if (searchInput) searchInput.focus();
          break;

        case '?':
          e.preventDefault();
          showKeyboardHelp();
          break;

        case 'n':
          e.preventDefault();
          const nextLink = document.querySelector('a[title="Next"]');
          if (nextLink) nextLink.click();
          break;

        case 'p':
          e.preventDefault();
          const prevLink = document.querySelector('a[title="Previous"]');
          if (prevLink) prevLink.click();
          break;
      }
    });

    // Add visible focus indicators for keyboard navigation
    let mouseUsed = false;

    document.addEventListener('mousedown', () => {
      mouseUsed = true;
      document.body.classList.add('using-mouse');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        mouseUsed = false;
        document.body.classList.remove('using-mouse');
      }
    });
  }

  function showKeyboardHelp() {
    // Check if help already exists
    if (document.querySelector('.keyboard-help-modal')) return;

    const modal = document.createElement('div');
    modal.className = 'keyboard-help-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'keyboard-help-title');

    modal.innerHTML = `
      <div class="keyboard-help-overlay"></div>
      <div class="keyboard-help-content">
        <h2 id="keyboard-help-title">Keyboard Shortcuts</h2>
        <table>
          <tr><td><kbd>/</kbd> or <kbd>s</kbd></td><td>Focus search</td></tr>
          <tr><td><kbd>Esc</kbd></td><td>Close search/drawer</td></tr>
          <tr><td><kbd>n</kbd></td><td>Next page</td></tr>
          <tr><td><kbd>p</kbd></td><td>Previous page</td></tr>
          <tr><td><kbd>?</kbd></td><td>Show this help</td></tr>
        </table>
        <button class="close-help">Close</button>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-help-modal {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .keyboard-help-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
      }
      .keyboard-help-content {
        position: relative;
        background: var(--md-default-bg-color);
        border-radius: 12px;
        padding: 2rem;
        max-width: 500px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }
      .keyboard-help-content h2 {
        margin-top: 0;
        color: var(--md-primary-fg-color);
      }
      .keyboard-help-content table {
        width: 100%;
        margin: 1.5rem 0;
      }
      .keyboard-help-content td {
        padding: 0.5rem 0;
      }
      .keyboard-help-content kbd {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        background: var(--md-code-bg-color);
        border: 1px solid var(--md-default-fg-color);
        border-radius: 4px;
        font-family: var(--md-code-font);
        font-size: 0.85em;
        opacity: 0.8;
      }
      .keyboard-help-content .close-help {
        padding: 0.5rem 1.5rem;
        background: var(--md-primary-fg-color);
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s;
      }
      .keyboard-help-content .close-help:hover {
        transform: translateY(-2px);
      }
      .using-mouse *:focus {
        outline: none;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Close handlers
    const closeHelp = () => {
      modal.remove();
      style.remove();
    };

    modal.querySelector('.close-help').addEventListener('click', closeHelp);
    modal.querySelector('.keyboard-help-overlay').addEventListener('click', closeHelp);

    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeHelp();
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  /* ========================================
     5. EMOJI TO ICON REPLACEMENT
     ======================================== */

  function replaceEmojisWithIcons() {
    // Comprehensive emoji to Material Icon mapping
    const emojiMap = {
      // Common section markers
      '📊': 'assessment',           // Charts/analytics
      '🎯': 'gps_fixed',            // Target/goals
      '⭐': 'star',                  // Featured/important
      '📖': 'menu_book',            // Documentation
      '📚': 'library_books',        // Multiple docs
      '💡': 'lightbulb',            // Ideas/tips
      '🚀': 'rocket_launch',        // Launch/start
      '🔧': 'build',                // Tools/setup
      '⚙️': 'settings',             // Configuration
      '✨': 'auto_awesome',         // Special/magic
      '📈': 'trending_up',          // Growth/bullish
      '📉': 'trending_down',        // Decline/bearish
      '🎨': 'palette',              // Design/styling
      '⚡': 'flash_on',             // Fast/performance
      '🔍': 'search',               // Search/find
      '📝': 'edit_note',            // Notes/writing
      '✅': 'check_circle',         // Success/completed
      '❌': 'cancel',               // Error/remove
      '⚠️': 'warning',              // Warning
      '🔔': 'notifications',        // Alerts
      '📱': 'smartphone',           // Mobile
      '💻': 'computer',             // Desktop
      '🌐': 'public',               // Web/global
      '🔒': 'lock',                 // Security/private
      '🔓': 'lock_open',            // Unlocked
      '👤': 'person',               // User
      '👥': 'group',                // Multiple users
      '💰': 'attach_money',         // Money/pricing
      '📦': 'inventory_2',          // Package/product
      '🎁': 'card_giftcard',        // Gift/bonus
      '🏆': 'emoji_events',         // Trophy/achievement
      '❓': 'help',                 // Question/help
      '❗': 'priority_high',        // Important/exclamation
      '➡️': 'arrow_forward',        // Next/forward
      '⬅️': 'arrow_back',           // Previous/back
      '⬆️': 'arrow_upward',         // Up
      '⬇️': 'arrow_downward',       // Down
      '🔄': 'sync',                 // Refresh/sync
      '📅': 'calendar_today',       // Calendar/date
      '⏰': 'alarm',                // Time/deadline
      '🎓': 'school',               // Education/learning
      '🌟': 'grade',                // Featured/highlighted
      '🔥': 'whatshot',             // Hot/trending
      '💪': 'fitness_center',       // Strength/power
      '🎭': 'theater_comedy',       // Entertainment
      '🎮': 'sports_esports',       // Gaming/interactive
      '📞': 'phone',                // Contact/call
      '📧': 'email',                // Email
      '🌙': 'nightlight',           // Night/dark mode
      '☀️': 'wb_sunny',             // Day/light mode
      '🎬': 'movie',                // Video/media
      '🖼️': 'image',                // Picture/visual
      '📂': 'folder',               // Directory/folder
      '📄': 'description',          // Document/file
      '🔗': 'link'                  // Hyperlink
    };

    // Find all text nodes containing emojis (headings, paragraphs, list items)
    const selectors = 'h1, h2, h3, h4, h5, h6, p, li, td, th, span';
    const elements = document.querySelectorAll(selectors);

    elements.forEach(element => {
      // Skip if already processed
      if (element.dataset.emojisReplaced) return;

      // Get all child nodes (text and elements)
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      const textNodes = [];
      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node);
      }

      // Process each text node
      textNodes.forEach(textNode => {
        let text = textNode.textContent;
        let modified = false;

        // Replace each emoji with icon
        Object.keys(emojiMap).forEach(emoji => {
          if (text.includes(emoji)) {
            const iconName = emojiMap[emoji];
            const iconHTML = `<span class="material-icons sp-icon" aria-hidden="true" data-emoji="${emoji}">${iconName}</span>`;

            // Create a placeholder that we can replace
            text = text.replace(new RegExp(emoji, 'g'), `__ICON_${iconName}__`);
            modified = true;
          }
        });

        if (modified) {
          // Create a new element with the replaced content
          const span = document.createElement('span');
          span.innerHTML = text;

          // Replace placeholders with actual icon HTML
          Object.keys(emojiMap).forEach(emoji => {
            const iconName = emojiMap[emoji];
            const placeholder = `__ICON_${iconName}__`;
            if (span.innerHTML.includes(placeholder)) {
              const iconHTML = `<span class="material-icons sp-icon" aria-hidden="true" data-emoji="${emoji}">${iconName}</span>`;
              span.innerHTML = span.innerHTML.replace(new RegExp(placeholder, 'g'), iconHTML);
            }
          });

          // Replace the text node with the new content
          textNode.parentNode.replaceChild(span, textNode);
        }
      });

      // Mark as processed
      element.dataset.emojisReplaced = 'true';
    });

    // Add screen reader improvements
    addIconScreenReaderSupport();
  }

  function addIconScreenReaderSupport() {
    // Add descriptive labels for screen readers
    const iconLabels = {
      'assessment': 'Chart icon',
      'gps_fixed': 'Target icon',
      'star': 'Star icon',
      'menu_book': 'Book icon',
      'library_books': 'Library icon',
      'lightbulb': 'Idea icon',
      'rocket_launch': 'Rocket icon',
      'trending_up': 'Trending up icon',
      'trending_down': 'Trending down icon'
      // Add more as needed
    };

    document.querySelectorAll('.sp-icon').forEach(icon => {
      const iconName = icon.textContent.trim();
      if (iconLabels[iconName]) {
        icon.setAttribute('title', iconLabels[iconName]);
      }
    });
  }

  /* ========================================
     6. INITIALIZATION
     ======================================== */

  function init() {
    addBreadcrumbs();
    addTableScrollIndicators();
    addAriaLandmarks();
    enhanceKeyboardNavigation();
    replaceEmojisWithIcons();

    // Re-run on page navigation (for SPA-like behavior)
    if (typeof document$ !== 'undefined') {
      document$.subscribe(() => {
        setTimeout(() => {
          addBreadcrumbs();
          addTableScrollIndicators();
          addAriaLandmarks();
          replaceEmojisWithIcons();
        }, 100);
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

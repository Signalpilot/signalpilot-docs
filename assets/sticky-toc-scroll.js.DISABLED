/**
 * Sticky TOC Auto-Scroll
 * Scrolls TOC container to show active link when sidebars are sticky
 */
(function() {
  'use strict';

  function scrollActiveIntoView() {
    // Find the TOC container
    const tocContainer = document.querySelector('.md-sidebar--secondary .md-sidebar__scrollwrap');
    if (!tocContainer) return;

    // Find the active TOC link
    const activeLink = tocContainer.querySelector('.md-nav__link--active');
    if (!activeLink) return;

    // Scroll it into view with smooth behavior
    activeLink.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  // Watch for active link changes using MutationObserver
  function initObserver() {
    const tocContainer = document.querySelector('.md-sidebar--secondary');
    if (!tocContainer) return;

    const observer = new MutationObserver(() => {
      scrollActiveIntoView();
    });

    observer.observe(tocContainer, {
      attributes: true,
      attributeFilter: ['class'],
      subtree: true
    });

    // Initial scroll
    setTimeout(scrollActiveIntoView, 500);
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
  } else {
    initObserver();
  }

  // Re-init on page navigation
  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => {
      setTimeout(initObserver, 100);
    });
  }
})();

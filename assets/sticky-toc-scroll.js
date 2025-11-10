/**
 * Sticky TOC Auto-Scroll
 * Scrolls TOC container to show active link when sidebars are sticky
 */
(function() {
  'use strict';

  function scrollActiveIntoView() {
    // Find the TOC container (the scrollable element)
    const tocContainer = document.querySelector('.md-sidebar--secondary .md-sidebar__scrollwrap');
    if (!tocContainer) return;

    // Find the active TOC link
    const activeLink = tocContainer.querySelector('.md-nav__link--active');
    if (!activeLink) return;

    // CRITICAL: Scroll ONLY the TOC container, NOT the page
    // Calculate the active link's position relative to the container
    const containerRect = tocContainer.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    // Calculate how much to scroll to center the active link in the container
    const containerCenter = containerRect.height / 2;
    const linkCenter = linkRect.top - containerRect.top + (linkRect.height / 2);
    const scrollOffset = linkCenter - containerCenter;

    // Scroll the container smoothly (NOT the page!)
    tocContainer.scrollBy({
      top: scrollOffset,
      behavior: 'smooth'
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

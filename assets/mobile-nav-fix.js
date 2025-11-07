/**
 * Mobile Navigation Fix
 * Simple toggle behavior for mobile:
 * - Click the arrow (→) to expand/collapse nested items
 * - Browse and select specific pages from the expanded list
 */

(function() {
  'use strict';

  // Only run on mobile/tablet (same breakpoint as CSS)
  function isMobileView() {
    return window.matchMedia('(max-width: 76.24em)').matches;
  }

  function setupMobileNavigation() {
    if (!isMobileView()) return;

    // Get the primary sidebar
    const primarySidebar = document.querySelector('.md-sidebar--primary');
    if (!primarySidebar) return;

    // Find all top-level navigation items that are labels (section headers)
    const topLevelLabels = primarySidebar.querySelectorAll('.md-nav--primary > .md-nav__list > .md-nav__item > label.md-nav__link');

    topLevelLabels.forEach(label => {
      // Make it clear the toggle is clickable
      label.style.cursor = 'pointer';
    });
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMobileNavigation);
  } else {
    setupMobileNavigation();
  }

  // Re-run on window resize (if user rotates device or resizes window)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupMobileNavigation, 250);
  });
})();

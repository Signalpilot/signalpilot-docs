/**
 * Mobile Navigation Fix
 * Handles top-level section navigation on mobile:
 * - Clicking the label text navigates to the first link in that section
 * - Clicking the arrow (→) expands/collapses the nested items
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
      // Make it clear these are clickable
      label.style.cursor = 'pointer';

      // Find the parent nav item
      const navItem = label.closest('.md-nav__item');
      if (!navItem) return;

      // Find the nested navigation (even though we hide it)
      const nestedNav = navItem.querySelector('.md-nav');
      if (!nestedNav) return;

      // Find the first actual link in the nested navigation
      const firstLink = nestedNav.querySelector('a.md-nav__link[href]');

      if (firstLink) {
        // When the label TEXT is clicked (not the arrow), navigate to the first link
        label.addEventListener('click', function(e) {
          // Get the click position relative to the label
          const labelRect = label.getBoundingClientRect();
          const clickX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);

          // The toggle button is positioned on the right with width of 56px
          // If click is in the rightmost 56px, it's the toggle - let it work
          const toggleZoneWidth = 56;
          const clickOffset = labelRect.right - clickX;

          // Only navigate if click is NOT in the toggle zone (arrow area)
          if (clickOffset > toggleZoneWidth) {
            e.preventDefault();
            e.stopPropagation();

            const href = firstLink.getAttribute('href');
            if (href) {
              // Close the drawer first
              const drawer = document.getElementById('__drawer');
              if (drawer) {
                drawer.checked = false;
              }

              // Small delay to allow drawer close animation
              setTimeout(() => {
                window.location.href = href;
              }, 150);
            }
          }
          // If click is in toggle zone, do nothing - let the CSS toggle work
        });

        // Add visual feedback only to the text area (not toggle area)
        label.addEventListener('touchstart', function(e) {
          const labelRect = label.getBoundingClientRect();
          const touchX = e.touches && e.touches[0] ? e.touches[0].clientX : 0;
          const toggleZoneWidth = 56;
          const touchOffset = labelRect.right - touchX;

          // Only show feedback if touching the text area
          if (touchOffset > toggleZoneWidth) {
            label.style.opacity = '0.7';
          }
        });

        label.addEventListener('touchend', function() {
          label.style.opacity = '1';
        });
      }
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

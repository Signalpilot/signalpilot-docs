/**
 * Remove title tooltips from sidebar navigation links
 * Prevents duplicate text appearing on hover in mobile navigation
 */

(function() {
  'use strict';

  function removeTooltips() {
    // Remove title attributes from all sidebar links
    const sidebarLinks = document.querySelectorAll('.md-sidebar--primary .md-nav__link[title]');

    sidebarLinks.forEach(link => {
      // Store original title for accessibility if needed
      const originalTitle = link.getAttribute('title');

      // Remove the title attribute to prevent browser tooltips
      link.removeAttribute('title');

      // Optional: Keep aria-label for screen readers if title was meaningful
      if (originalTitle && !link.hasAttribute('aria-label')) {
        link.setAttribute('aria-label', originalTitle);
      }
    });
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeTooltips);
  } else {
    removeTooltips();
  }

  // Re-run when navigation changes (for SPA-like behavior)
  const observer = new MutationObserver(removeTooltips);

  // Observe the sidebar for changes
  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.md-sidebar--primary');
    if (sidebar) {
      observer.observe(sidebar, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['title']
      });
    }
  });
})();

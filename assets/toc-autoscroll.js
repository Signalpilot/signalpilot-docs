/**
 * SignalPilot Docs - TOC Auto-Scroll
 * Automatically scrolls the Table of Contents to keep the current section visible
 * Works with sticky sidebars and custom overflow settings
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    tocSelector: '.md-sidebar--secondary .md-sidebar__scrollwrap',
    navListSelector: '.md-nav--secondary .md-nav__list',
    tocLinkSelector: '.md-nav--secondary .md-nav__link',
    contentSelector: '.md-content__inner',
    headingSelector: 'h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]',
    scrollOffset: 100, // Pixels from top to consider a heading "active"
    scrollMargin: 80,  // Margin when scrolling TOC items into view
    throttleMs: 100    // Throttle scroll events
  };

  let currentActiveLink = null;
  let tocScrollContainer = null;
  let headings = [];
  let throttleTimer = null;

  /**
   * Throttle function to limit scroll event processing
   */
  function throttle(func, wait) {
    return function() {
      if (!throttleTimer) {
        func.apply(this, arguments);
        throttleTimer = setTimeout(() => {
          throttleTimer = null;
        }, wait);
      }
    };
  }

  /**
   * Find the currently active heading based on scroll position
   */
  function findActiveHeading() {
    const scrollPos = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Find the heading that's currently in view
    let activeHeading = null;

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      const rect = heading.getBoundingClientRect();
      const headingTop = scrollPos + rect.top;

      // Check if this heading is above the scroll offset
      if (headingTop <= scrollPos + CONFIG.scrollOffset) {
        activeHeading = heading;
        break;
      }
    }

    // If no heading found above, use the first one
    if (!activeHeading && headings.length > 0) {
      activeHeading = headings[0];
    }

    return activeHeading;
  }

  /**
   * Update TOC active state and scroll to active item
   */
  function updateTOC() {
    if (!tocScrollContainer || headings.length === 0) return;

    const activeHeading = findActiveHeading();
    if (!activeHeading) return;

    const headingId = activeHeading.getAttribute('id');
    if (!headingId) return;

    // Find the corresponding TOC link
    const tocLink = document.querySelector(
      `${CONFIG.tocLinkSelector}[href="#${headingId}"]`
    );

    if (!tocLink) return;

    // Skip if this is already the active link
    if (tocLink === currentActiveLink) return;

    // Remove old active class
    if (currentActiveLink) {
      currentActiveLink.classList.remove('md-nav__link--active');
      const oldParent = currentActiveLink.closest('.md-nav__item');
      if (oldParent) {
        oldParent.classList.remove('md-nav__item--active');
      }
    }

    // Add new active class
    tocLink.classList.add('md-nav__link--active');
    const newParent = tocLink.closest('.md-nav__item');
    if (newParent) {
      newParent.classList.add('md-nav__item--active');
    }

    currentActiveLink = tocLink;

    // Scroll the TOC to show the active link
    scrollTOCToLink(tocLink);
  }

  /**
   * Scroll the TOC container to show the active link
   */
  function scrollTOCToLink(link) {
    if (!tocScrollContainer || !link) return;

    const containerRect = tocScrollContainer.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    // Calculate the link's position relative to the container
    const linkTop = linkRect.top - containerRect.top + tocScrollContainer.scrollTop;
    const linkBottom = linkTop + linkRect.height;

    const containerScrollTop = tocScrollContainer.scrollTop;
    const containerHeight = tocScrollContainer.clientHeight;
    const containerScrollBottom = containerScrollTop + containerHeight;

    // Check if link is already fully visible
    const isLinkVisible = (
      linkTop >= containerScrollTop + CONFIG.scrollMargin &&
      linkBottom <= containerScrollBottom - CONFIG.scrollMargin
    );

    if (isLinkVisible) return;

    // Calculate optimal scroll position (center the link in the container)
    const optimalScrollTop = linkTop - (containerHeight / 2) + (linkRect.height / 2);

    // Smooth scroll to position
    tocScrollContainer.scrollTo({
      top: Math.max(0, optimalScrollTop),
      behavior: 'smooth'
    });
  }

  /**
   * Initialize the TOC auto-scroll system
   */
  function init() {
    // Find the TOC scroll container
    tocScrollContainer = document.querySelector(CONFIG.tocSelector);
    if (!tocScrollContainer) {
      console.warn('TOC auto-scroll: TOC container not found');
      return;
    }

    // Find all headings with IDs
    const contentArea = document.querySelector(CONFIG.contentSelector);
    if (!contentArea) {
      console.warn('TOC auto-scroll: Content area not found');
      return;
    }

    headings = Array.from(contentArea.querySelectorAll(CONFIG.headingSelector));
    if (headings.length === 0) {
      console.warn('TOC auto-scroll: No headings found');
      return;
    }

    // Sort headings by their position in the document
    headings.sort((a, b) => {
      const rectA = a.getBoundingClientRect();
      const rectB = b.getBoundingClientRect();
      return rectA.top - rectB.top;
    });

    // Set up scroll listener with throttling
    const throttledUpdate = throttle(updateTOC, CONFIG.throttleMs);
    window.addEventListener('scroll', throttledUpdate, { passive: true });

    // Initial update
    setTimeout(updateTOC, 300);

    console.log('TOC auto-scroll initialized:', {
      headings: headings.length,
      container: tocScrollContainer
    });
  }

  /**
   * Re-initialize on page navigation (Material's instant loading)
   */
  function reinit() {
    currentActiveLink = null;
    headings = [];
    init();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-initialize on Material's instant navigation
  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => {
      setTimeout(reinit, 100);
    });
  }

})();

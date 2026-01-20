/**
 * Lenis Smooth Scroll Initialization
 * Butter-smooth scrolling for Signal Pilot Docs
 * https://lenis.darkroom.engineering/
 */
(function() {
  'use strict';

  // Global Lenis instance
  let lenis = null;

  function initLenis() {
    // Destroy existing instance if present
    if (lenis) {
      lenis.destroy();
    }

    // Initialize Lenis with optimized settings
    lenis = new Lenis({
      duration: 3,           // Scroll animation duration (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
      orientation: 'vertical', // Vertical scroll only
      gestureOrientation: 'vertical',
      smoothWheel: true,       // Smooth mousewheel scrolling
      wheelMultiplier: 1,      // Wheel scroll speed multiplier
      touchMultiplier: 2,      // Touch scroll speed multiplier
      infinite: false,         // No infinite scroll
      autoResize: true,        // Handle resize automatically
    });

    // Expose globally for other scripts
    window.lenis = lenis;

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links with smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, {
            offset: -80, // Account for sticky header
            duration: 3,
          });

          // Update URL without jumping
          history.pushState(null, '', href);
        }
      });
    });

    // Handle initial hash on page load
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        // Delay to ensure page is fully rendered
        setTimeout(() => {
          lenis.scrollTo(target, {
            offset: -80,
            duration: 0.01, // Near-instant on page load
            immediate: true,
          });
        }, 100);
      }
    }

    // Add data-lenis-prevent to elements that need native scroll
    const preventElements = document.querySelectorAll(
      '.md-sidebar__scrollwrap, .md-search__scrollwrap, .md-search-result, .md-search__output'
    );
    preventElements.forEach(el => {
      el.setAttribute('data-lenis-prevent', '');
    });

    console.log('Lenis smooth scroll initialized');
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLenis);
  } else {
    initLenis();
  }

  // Re-initialize on MkDocs instant navigation (if enabled)
  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => {
      // Re-bind anchor handlers after page navigation
      setTimeout(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          // Remove old listeners by cloning
          const newAnchor = anchor.cloneNode(true);
          anchor.parentNode.replaceChild(newAnchor, anchor);

          newAnchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || !window.lenis) return;

            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              window.lenis.scrollTo(target, {
                offset: -80,
                duration: 3,
              });
              history.pushState(null, '', href);
            }
          });
        });
      }, 100);
    });
  }

  // Utility: Scroll to top (for back-to-top button)
  window.lenisScrollToTop = function() {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Utility: Scroll to element
  window.lenisScrollTo = function(target, options = {}) {
    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: options.offset || -80,
        duration: options.duration || 1.2,
        ...options,
      });
    } else {
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Utility: Stop/start Lenis (useful for modals)
  window.lenisStop = function() {
    if (window.lenis) window.lenis.stop();
  };

  window.lenisStart = function() {
    if (window.lenis) window.lenis.start();
  };

})();

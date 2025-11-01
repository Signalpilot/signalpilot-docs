/**
 * Scroll Diagnostic Tool
 * Logs wheel events to help diagnose why mouse scrolling isn't working
 */
(function() {
  'use strict';

  console.log('🔍 Scroll Diagnostic: Loaded');

  // Listen for wheel events on the window
  window.addEventListener('wheel', function(e) {
    console.log('🎡 Wheel event detected:', {
      deltaY: e.deltaY,
      deltaX: e.deltaX,
      target: e.target.tagName,
      defaultPrevented: e.defaultPrevented
    });
  }, { passive: false });

  // Listen for scroll events on the window
  window.addEventListener('scroll', function(e) {
    console.log('📜 Scroll event detected:', {
      scrollY: window.scrollY,
      scrollX: window.scrollX
    });
  }, { passive: true });

  // Check if body/html has correct overflow
  setTimeout(() => {
    const htmlStyle = window.getComputedStyle(document.documentElement);
    const bodyStyle = window.getComputedStyle(document.body);

    console.log('📊 HTML overflow:', {
      overflowY: htmlStyle.overflowY,
      overflowX: htmlStyle.overflowX,
      height: htmlStyle.height
    });

    console.log('📊 BODY overflow:', {
      overflowY: bodyStyle.overflowY,
      overflowX: bodyStyle.overflowX,
      height: bodyStyle.height
    });
  }, 1000);
})();

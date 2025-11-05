/**
 * Text Sizing Controls
 * Allows users to adjust font size for better readability
 */

(function() {
  'use strict';

  // Font size configuration
  const FONT_SIZES = {
    small: 14,
    normal: 16,
    large: 18
  };

  const STORAGE_KEY = 'sp-font-size';
  let currentSize = 'normal';

  // Initialize text sizing
  function init() {
    // Load saved preference
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && FONT_SIZES[saved]) {
      currentSize = saved;
    }

    createControls();
    applyFontSize(currentSize);
    console.log('[Text Sizing] Initialized with size:', currentSize);
  }

  // Create text sizing controls
  function createControls() {
    const controls = document.createElement('div');
    controls.className = 'text-size-controls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Text size controls');
    controls.innerHTML = `
      <button class="text-size-btn" data-size="small" aria-label="Decrease text size" title="Smaller text (14px)">
        A-
      </button>
      <button class="text-size-btn active" data-size="normal" aria-label="Normal text size" title="Normal text (16px)">
        A
      </button>
      <button class="text-size-btn" data-size="large" aria-label="Increase text size" title="Larger text (18px)">
        A+
      </button>
    `;

    // Find appropriate place to insert controls
    const header = document.querySelector('.md-header__inner');
    if (header) {
      header.appendChild(controls);
    } else {
      // Fallback: add to body
      document.body.appendChild(controls);
    }

    // Add event listeners
    const buttons = controls.querySelectorAll('.text-size-btn');
    buttons.forEach(button => {
      button.addEventListener('click', handleSizeChange);
    });

    // Update active state
    updateActiveButton();
  }

  // Handle size change
  function handleSizeChange(e) {
    const size = e.currentTarget.dataset.size;
    if (FONT_SIZES[size]) {
      currentSize = size;
      applyFontSize(size);
      localStorage.setItem(STORAGE_KEY, size);
      updateActiveButton();
      console.log('[Text Sizing] Changed to:', size);
    }
  }

  // Apply font size
  function applyFontSize(size) {
    const fontSize = FONT_SIZES[size];
    document.documentElement.style.fontSize = fontSize + 'px';

    // Also update chatbot if present
    const chatbot = document.querySelector('.sp-chatbot-container');
    if (chatbot) {
      chatbot.style.fontSize = fontSize + 'px';
    }
  }

  // Update active button state
  function updateActiveButton() {
    const buttons = document.querySelectorAll('.text-size-btn');
    buttons.forEach(button => {
      if (button.dataset.size === currentSize) {
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
      } else {
        button.classList.remove('active');
        button.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for programmatic control
  window.SignalPilotTextSizing = {
    setSize: function(size) {
      if (FONT_SIZES[size]) {
        currentSize = size;
        applyFontSize(size);
        localStorage.setItem(STORAGE_KEY, size);
        updateActiveButton();
      }
    },
    getSize: function() {
      return currentSize;
    },
    getSizes: function() {
      return Object.keys(FONT_SIZES);
    }
  };

})();

/**
 * CUSTOM BOTTOM SHEET NAVIGATION
 * Fire custom navigation built from scratch
 * Replaces mkdocs sidebar completely
 */

(function() {
  'use strict';

  // Navigation structure - customize this to match your docs
  const navigationData = {
    sections: [
      {
        title: 'Getting Started',
        items: [
          { text: 'Quick Start', url: '/start-quick/', icon: '⚡' },
          { text: 'Quickstart Guide', url: '/start-quickstart/', icon: '🚀' },
          { text: 'Prerequisites', url: '/start-prerequisites/', icon: '📋' },
          { text: 'Onboarding', url: '/start-onboarding/', icon: '👋' }
        ]
      },
      {
        title: 'Signal Pilot Suite',
        items: [
          { text: 'Suite Overview', url: '/suite-index/', icon: '📦' },
          { text: 'Pentarch v1.0', url: '/pentarch-v10/', icon: '🎯' },
          { text: 'Janus Atlas v1.0', url: '/janus-atlas-v10/', icon: '🗺️' },
          { text: 'Omnideck v1.0', url: '/omnideck-v10/', icon: '⚙️' },
          { text: 'Augury Grid v1.0', url: '/augury-grid-v10/', icon: '🔍' },
          { text: 'Volume Oracle v1.0', url: '/volume-oracle-v10/', icon: '💧' },
          { text: 'Harmonic Oscillator v1.0', url: '/harmonic-oscillator-v10/', icon: '〰️' },
          { text: 'Plutus Flow v1.0', url: '/plutus-flow-v10/', icon: '📈' }
        ]
      },
      {
        title: 'How-To Guides',
        items: [
          { text: 'Alerts Setup', url: '/how-to-alerts/', icon: '🔔' },
          { text: 'Screener Usage', url: '/how-to-screener/', icon: '📊' },
          { text: 'Webhooks', url: '/how-to-webhooks/', icon: '🔗' }
        ]
      },
      {
        title: 'Reference',
        items: [
          { text: 'Best Practices', url: '/ref-best-practices/', icon: '✨' },
          { text: 'Product Comparison', url: '/ref-comparison/', icon: '⚖️' },
          { text: 'Glossary', url: '/ref-glossary/', icon: '📖' },
          { text: 'Non-Repaint Guide', url: '/ref-non-repaint/', icon: '🛡️' },
          { text: 'Troubleshooting', url: '/ref-troubleshooting/', icon: '🔧' },
          { text: 'Workflow Guide', url: '/ref-workflow/', icon: '🔄' }
        ]
      },
      {
        title: 'Settings & Compliance',
        items: [
          { text: 'Alert Settings', url: '/_settings-alerts/', icon: '⚙️' },
          { text: 'Compliance Language', url: '/compliance-language-guide/', icon: '📜' },
          { text: 'Code Examples', url: '/_code-examples-guide/', icon: '💻' }
        ]
      },
      {
        title: 'About',
        items: [
          { text: 'FAQ', url: '/about-faq/', icon: '❓' },
          { text: 'Changelog', url: '/about-changelog/', icon: '📝' },
          { text: 'Support', url: '/about-support/', icon: '💬' }
        ]
      }
    ]
  };

  class CustomBottomSheet {
    constructor() {
      this.isOpen = false;
      this.startY = 0;
      this.currentY = 0;
      this.isDragging = false;

      this.init();
    }

    init() {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.create());
      } else {
        this.create();
      }
    }

    create() {
      // Create floating button
      this.createButton();

      // Create overlay
      this.createOverlay();

      // Create bottom sheet
      this.createBottomSheet();

      // Setup event listeners
      this.setupEventListeners();

      console.log('🔥 Custom Bottom Sheet Navigation initialized');
    }

    createButton() {
      const button = document.createElement('button');
      button.className = 'custom-nav-button';
      button.setAttribute('aria-label', 'Open navigation');
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      `;

      document.body.appendChild(button);
      this.button = button;
    }

    createOverlay() {
      const overlay = document.createElement('div');
      overlay.className = 'custom-nav-overlay';
      document.body.appendChild(overlay);
      this.overlay = overlay;
    }

    createBottomSheet() {
      const sheet = document.createElement('div');
      sheet.className = 'custom-bottom-sheet';

      // Build content
      let html = `
        <div class="custom-sheet-handle">
          <div class="custom-sheet-handle-bar"></div>
        </div>
        <div class="custom-sheet-header">
          <h2 class="custom-sheet-title">Signal Pilot Docs</h2>
          <p class="custom-sheet-subtitle">Navigate the documentation</p>
        </div>
        <div class="custom-sheet-content">
          <nav>
      `;

      // Add navigation sections
      navigationData.sections.forEach(section => {
        html += `<div class="custom-nav-section">${section.title}</div>`;
        html += '<ul class="custom-nav-list">';

        section.items.forEach(item => {
          const isActive = this.isCurrentPage(item.url);
          const activeClass = isActive ? 'active' : '';

          html += `
            <li class="custom-nav-item">
              <a href="${item.url}" class="custom-nav-link ${activeClass}">
                <span class="custom-nav-icon">${item.icon}</span>
                ${item.text}
              </a>
            </li>
          `;
        });

        html += '</ul>';
      });

      html += `
          </nav>
        </div>
      `;

      sheet.innerHTML = html;
      document.body.appendChild(sheet);
      this.sheet = sheet;
    }

    isCurrentPage(url) {
      // Check if the URL matches current page
      const currentPath = window.location.pathname;
      // Normalize paths for comparison
      const normalizedUrl = url.endsWith('/') ? url : url + '/';
      const normalizedCurrent = currentPath.endsWith('/') ? currentPath : currentPath + '/';
      return normalizedCurrent === normalizedUrl || normalizedCurrent.includes(normalizedUrl);
    }

    setupEventListeners() {
      // Button click - open sheet
      this.button.addEventListener('click', () => this.open());

      // Overlay click - close sheet
      this.overlay.addEventListener('click', () => this.close());

      // Handle swipe down to dismiss
      this.setupSwipeGestures();

      // Close on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });

      // Close sheet when clicking a link
      const links = this.sheet.querySelectorAll('.custom-nav-link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          // Small delay so user sees the click
          setTimeout(() => this.close(), 100);
        });
      });
    }

    setupSwipeGestures() {
      const handle = this.sheet.querySelector('.custom-sheet-handle');

      handle.addEventListener('touchstart', (e) => {
        this.startY = e.touches[0].clientY;
        this.isDragging = true;
      }, { passive: true });

      handle.addEventListener('touchmove', (e) => {
        if (!this.isDragging) return;

        this.currentY = e.touches[0].clientY;
        const deltaY = this.currentY - this.startY;

        // Only allow dragging down
        if (deltaY > 0) {
          this.sheet.style.transform = `translateY(${Math.min(deltaY, 200)}px)`;
          this.sheet.style.transition = 'none';
        }
      }, { passive: true });

      handle.addEventListener('touchend', () => {
        if (!this.isDragging) return;

        const deltaY = this.currentY - this.startY;

        // If dragged down more than 80px, close
        if (deltaY > 80) {
          this.close();
        } else {
          // Snap back
          this.sheet.style.transform = '';
          this.sheet.style.transition = '';
        }

        this.isDragging = false;
        this.startY = 0;
        this.currentY = 0;
      }, { passive: true });
    }

    open() {
      this.isOpen = true;
      this.overlay.classList.add('active');
      this.sheet.classList.add('active');

      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      console.log('🔥 Bottom sheet opened');
    }

    close() {
      this.isOpen = false;
      this.overlay.classList.remove('active');
      this.sheet.classList.remove('active');

      // Restore body scroll
      document.body.style.overflow = '';

      // Reset transform if it was changed by swipe
      this.sheet.style.transform = '';
      this.sheet.style.transition = '';

      console.log('🔥 Bottom sheet closed');
    }
  }

  // Initialize when ready
  new CustomBottomSheet();

})();

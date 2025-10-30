/* Automatic Keyword Highlighting System
 * Scans for important keywords in bold text and adds color-coded styling
 */

(function() {
  'use strict';

  // Keyword categories and their patterns
  const keywordPatterns = {
    // Pentarch Signals
    signal: {
      td: /\b(TD|Touchdown)\b/gi,
      ign: /\b(IGN|Ignition)\b/gi,
      wrn: /\b(WRN|Warning)\b/gi,
      cap: /\b(CAP|Climax)\b/gi,
      bdn: /\b(BDN|Breakdown)\b/gi
    },

    // Technical Indicators
    tech: /\b(VWAP|ATR|OBV|MACD|RSI|Stoch|StochRSI|EMA|SMA|SuperTrend|Bollinger|Fibonacci)\b/gi,

    // Levels/Structure
    level: /\b(Support|Resistance|Daily High|Daily Low|Weekly High|Weekly Low|Monthly High|Monthly Low|Session High|Session Low|VWAP|POC|VAH|VAL)\b/gi,

    // Action terms
    action: /\b(Entry|Exit|Stop Loss|Take Profit|Stop|Target|Position|Risk)\b/gi,

    // Quality terms
    quality: /\b(Elite|Premium|Standard|⭐⭐⭐|⭐⭐)\b/gi,

    // Divergence
    divergence: /\b(Divergence|Bullish Divergence|Bearish Divergence|Hidden Divergence|Regular Divergence)\b/gi,

    // Volume
    volume: /\b(Volume Spike|Volume|Flow|Liquidity|Sweep)\b/gi
  };

  function highlightKeywords() {
    // Find all strong/bold elements in the content
    const strongElements = document.querySelectorAll('.md-typeset strong, .md-typeset b');

    strongElements.forEach(element => {
      // Skip if already processed
      if (element.dataset.kwProcessed) return;

      const text = element.textContent;
      let matched = false;

      // Check Pentarch signals first (they're most specific)
      for (const [signal, pattern] of Object.entries(keywordPatterns.signal)) {
        if (pattern.test(text)) {
          element.classList.add('kw-signal', signal);
          element.dataset.kwProcessed = 'true';
          matched = true;
          break;
        }
      }

      // If not a signal, check other categories
      if (!matched) {
        for (const [category, pattern] of Object.entries(keywordPatterns)) {
          if (category === 'signal') continue; // Already checked

          if (pattern.test(text)) {
            element.classList.add(`kw-${category}`);
            element.dataset.kwProcessed = 'true';
            break;
          }
        }
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightKeywords);
  } else {
    highlightKeywords();
  }

  // Re-run when navigation happens (for SPA behavior)
  document.addEventListener('DOMContentLoaded', function() {
    // Watch for content changes
    const observer = new MutationObserver(function(mutations) {
      highlightKeywords();
    });

    const content = document.querySelector('.md-content');
    if (content) {
      observer.observe(content, {
        childList: true,
        subtree: true
      });
    }
  });
})();

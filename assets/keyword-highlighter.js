/* Automatic Keyword Highlighting System
 * Scans for important keywords in bold text and adds color-coded styling
 * EXCLUDES indicator names - only highlights technical terms in context
 */

(function() {
  'use strict';

  // Indicator names and structural terms to EXCLUDE (never highlight these)
  const indicatorNames = [
    'Pentarch',
    'Janus Atlas',
    'Omnideck',
    'Augury Grid',
    'Minimal Flow',
    'Harmonic Oscillator',
    'Plutus Flow',
    'Signal Pilot'
  ];

  // Structural labels to EXCLUDE (these are section headers, not keywords)
  const structuralLabels = [
    'Visual:',
    'Cycle Position:',
    'What Pentarch Detects:',
    'Common Usage:',
    'Example:',
    'Interpretation:',
    'Result:',
    'A:',
    'Q:'
  ];

  // Keyword categories and their patterns
  const keywordPatterns = {
    // Pentarch Signals (most specific - highest priority)
    signal: {
      td: /\b(TD|Touchdown)\b/gi,
      ign: /\b(IGN|Ignition)\b/gi,
      wrn: /\b(WRN|Warning)\b/gi,
      cap: /\b(CAP|Climax)\b/gi,
      bdn: /\b(BDN|Breakdown)\b/gi
    },

    // Product-Specific Core Elements (SignalPilot terminology)
    core: /\b(Pilot Line|Event Signals?|Event Candles?|Regime|Close-Confirmed|Bar Close)\b/gi,

    // Cycle Phases (Pentarch-specific market cycle terminology)
    phase: /\b(Accumulation Phases?|Markup Phases?|Distribution Phases?|Decline Phases?|Climax Phases?|Early-Cycle|Late-Cycle|Mid-Cycle)\b/gi,

    // Levels/Structure
    level: /\b(Support|Resistance|Daily High|Daily Low|Weekly High|Weekly Low|Monthly High|Monthly Low|Session High|Session Low|POC|VAH|VAL)\b/gi,

    // Action terms (trading positions and actions - but NOT "Cycle Position")
    action: /\b(Entry|Exit|Stop Loss|Take Profit|Targets?|Long Positions?|Short Positions?|Position Sizing)\b/gi,

    // Quality/Grade terms
    quality: /\b(Elite|Premium|Standard|High-Quality|Low-Quality)\b/gi,

    // Divergence terms
    divergence: /\b(Divergences?|Bullish Divergences?|Bearish Divergences?|Hidden Divergences?|Regular Divergences?)\b/gi,

    // Volume/Flow (specific institutional terms)
    volume: /\b(Volume Spikes?|Liquidity Sweeps?|Institutional Flow|Smart Money)\b/gi
  };

  function isIndicatorName(text) {
    // Check if the text is an indicator name or contains an indicator name
    return indicatorNames.some(name =>
      text.includes(name) || text.trim() === name
    );
  }

  function isStructuralLabel(text) {
    // Check if the text is a structural label (section header)
    const trimmed = text.trim();
    return structuralLabels.some(label =>
      trimmed === label || trimmed.endsWith(label)
    );
  }

  function highlightKeywords() {
    // Find all strong/bold elements in the content
    const strongElements = document.querySelectorAll('.md-typeset strong, .md-typeset b');

    strongElements.forEach(element => {
      // Skip if already processed
      if (element.dataset.kwProcessed) return;

      const text = element.textContent;

      // SKIP if this is an indicator name
      if (isIndicatorName(text)) {
        element.dataset.kwProcessed = 'true';
        return;
      }

      // SKIP if this is a structural label (section header)
      if (isStructuralLabel(text)) {
        element.dataset.kwProcessed = 'true';
        return;
      }

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

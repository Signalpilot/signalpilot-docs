# Complete Screenshot Placeholder Guide

**Total Screenshots Needed:** 54
**Pages Affected:** 9

---

## Quick Summary by Page

| Page | Count | Status |
|------|-------|--------|
| Janus Atlas v1.0 | 11 | ⬜ |
| OmniDeck v1.0 | 12 | ⬜ |
| Pentarch v1.0 | 9 | ⬜ |
| Plutus Flow v1.0 | 4 | ⬜ |
| Harmonic Oscillator v1.0 | 4 | ⬜ |
| Augury Grid v1.0 | 1 | ⬜ |
| How to Set Up Alerts | 5 | ⬜ |
| How to Use Screener | 4 | ⬜ |
| How to Set Up Webhooks | 3 | ⬜ |
| **TOTAL** | **54** | |

---

## Directory Setup

Create these folders:
```
assets/images/janus-atlas/
assets/images/indicators/
assets/images/how-to/
```

---

# INDICATOR PAGES

---

## Janus Atlas v1.0

**Page:** `https://docs.signalpilot.io/janus-atlas-v10/`

### 1. Beginner 5-Level Setup
| Property | Value |
|----------|-------|
| **Filename** | `janus-atlas-beginner-5-levels.png` |
| **Section** | New to Trading? Start Here |

**What to capture:**
- Chart with ONLY 5 levels enabled
- Show: Daily High, Daily Low, Weekly High, Weekly Low, POC
- All other levels DISABLED

**Annotations needed:**
- Label each of the 5 levels on the chart
- Add text: "Clean and readable"
- Emphasize this is the beginner setup

---

### 2. 5 Levels vs 60+ Levels Comparison
| Property | Value |
|----------|-------|
| **Filename** | `janus-atlas-5-vs-60-levels.png` |
| **Section** | Core Functionality |

**What to capture:**
- Side-by-side OR split-screen comparison
- LEFT: 5 levels (clean chart)
- RIGHT: Many levels enabled (cluttered chart)
- Same symbol, same timeframe

**Annotations needed:**
- Add "❌ Too Many Levels" on cluttered chart
- Add "✅ Perfect for Beginners" on clean chart

---

### 3. Settings Panel ⚠️ LOW PRIORITY
| Property | Value |
|----------|-------|
| **Filename** | `janus-atlas-settings-panel.png` |
| **Section** | Settings Panel Organization |
| **Priority** | LOW - users find settings themselves |

**What to capture:**
- TradingView settings panel for Janus Atlas
- Show ONLY top portion (first 4-5 groups visible)
- Caption will say "scroll for more options"

**Note:** Settings panels scroll vertically - impossible to show all 19 groups. Just capture what fits naturally.

---

### 4. Different Level Types Labeled
| Property | Value |
|----------|-------|
| **Filename** | `janus-atlas-level-types-labeled.png` |
| **Section** | Level Types Overview |

**What to capture:**
- Chart showing 5-7 different level types (don't overload)
- Pick a mix: dH, dL, POC, VWAP, one session level

**Annotations needed:**
- Point to 4-5 key levels only
- Keep it readable, not cluttered

---

### 5. Opening Range Levels
| Property | Value |
|----------|-------|
| **Filename** | `opening-range-levels.png` |
| **Save to** | `assets/images/janus-atlas/` |
| **Section** | Opening Range (OR) |

**What to capture:**
- Chart showing OR feature active
- Clear `orH` label (Opening Range High)
- Clear `orL` label (Opening Range Low)
- Horizontal lines extending right
- First 30 minutes of NY session visible

**Ideal setup:**
- Symbol: ES or NQ futures
- Timeframe: 5-minute
- Show price breaking above/below OR after it forms

---

### 6. Killzone Background Shading
| Property | Value |
|----------|-------|
| **Filename** | `killzone-background.png` |
| **Save to** | `assets/images/janus-atlas/` |
| **Section** | Killzones |

**What to capture:**
- Subtle, semi-transparent background shading (~90% transparent)
- At least ONE killzone visible (NY Open: 8:30-11:00 AM preferred)
- Price candles clearly visible THROUGH the shading
- Multiple killzones if possible

---

### 7. Gap Levels with Fill
| Property | Value |
|----------|-------|
| **Filename** | `gap-levels-fill.png` |
| **Save to** | `assets/images/janus-atlas/` |
| **Section** | Gap Levels |

**What to capture:**
- `gapH` and `gapL` labels visible
- Gap zone between previous close and current open
- **CRITICAL:** Show price FILLING the gap
- Gap fill marker/label if indicator shows it

**Ideal scenario:**
- Gap UP: Previous close $100, open $103, price drops back to $100
- Find a real example showing the gap fill event

---

### 8. Fair Value Gaps (FVG)
| Property | Value |
|----------|-------|
| **Filename** | `janus-atlas-fvg.png` |
| **Section** | Fair Value Gaps |

**What to capture:**
- FVG boxes/zones on chart
- Show both bullish and bearish FVGs if possible
- FVG mitigation example (price returning to fill gap)

---

### 9. Confluence Zone Highlight
| Property | Value |
|----------|-------|
| **Filename** | `confluence-zone.png` |
| **Save to** | `assets/images/janus-atlas/` |
| **Section** | Confluence Zones |

**What to capture:**
- Semi-transparent highlighted box on chart
- At least 3 levels converging within the zone
- Visible level labels (e.g., dH, wVWAP, pdH clustering)
- Zone label showing count if enabled

**Ideal setup:**
- Find spot where Daily High + Weekly VWAP + Previous Day High cluster
- Yellow/distinctive color (~80% transparent)

---

### 10. Distance Table Display
| Property | Value |
|----------|-------|
| **Filename** | `distance-table.png` |
| **Save to** | `assets/images/janus-atlas/` |
| **Section** | Distance Table |

**What to capture:**
- Table widget in corner of chart (default: top right)
- "Level" and "Dist" columns visible
- At least 4 levels listed
- ↑ arrows for levels ABOVE current price
- ↓ arrows for levels BELOW current price
- Distance values (ticks/points/%)

---

### 11. Fibonacci Levels
| Property | Value |
|----------|-------|
| **Filename** | `janus-atlas-fibonacci.png` |
| **Section** | Fibonacci Levels |

**What to capture:**
- Fibonacci retracement levels on chart
- Show at least 3-4 fib levels (0.382, 0.5, 0.618, etc.)
- Labels showing fib level values

---

## OmniDeck v1.0

**Page:** `https://docs.signalpilot.io/omnideck-v10/`

### 12. Beginner 4-System Setup
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-beginner-4-systems.png` |
| **Section** | New to Trading? Start Here |

**What to capture:**
- Chart with ONLY 4 systems enabled:
  - Regime Box
  - EMA Trio
  - SuperTrend
  - Supply/Demand Zones
- Other 6 systems DISABLED

**Annotations needed:**
- Label each system on chart
- Add text: "Start with these 4 systems"

---

### 13. All 10 Systems (Overload Example)
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-all-10-systems-overload.png` |
| **Section** | Core Functionality |

**What to capture:**
- Chart with ALL 10 OmniDeck systems enabled
- Show how cluttered/overwhelming it looks
- This is a "what NOT to do" example

**Annotations needed:**
- Add warning text: "⚠️ Too Much! Don't Do This"

---

### 14. Settings Panel ⚠️ LOW PRIORITY
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-settings-panel.png` |
| **Section** | Settings |
| **Priority** | LOW - users find settings themselves |

**What to capture:**
- TradingView settings panel for OmniDeck
- Show top portion with first 4-5 system toggles
- Don't try to fit all 10 - just what's visible without scrolling

---

### 15. Liquidity Sweeps
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-liquidity-sweeps.png` |
| **Section** | Liquidity Sweeps |

**What to capture:**
- Chart showing liquidity sweep markers/labels
- Show stop-hunt pattern detection
- Price spiking above/below a level then reversing

---

### 16. EMA Trio
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-ema-trio.png` |
| **Section** | EMA Trio |

**What to capture:**
- Three moving average lines on chart
- Show crossover or trend alignment
- Label the 3 EMAs

---

### 17. SuperTrend
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-supertrend.png` |
| **Section** | SuperTrend |

**What to capture:**
- SuperTrend ribbon/line on chart
- Show color change at trend reversal
- Adaptive trend-following display

---

### 18. BMSB (Support Band)
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-bmsb.png` |
| **Section** | BMSB |

**What to capture:**
- BMSB support band on chart
- Show price interacting with the band
- Band color changes

---

### 19. Regime Box
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-regime-box.png` |
| **Section** | Regime Box |

**What to capture:**
- Regime Box display on chart
- Show market mood classification (bullish/bearish/neutral)
- Label showing current regime

---

### 20. Supply/Demand Zones
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-supply-demand.png` |
| **Section** | Supply/Demand Zones |

**What to capture:**
- Supply and demand zones marked on chart
- Show both supply (resistance) and demand (support) zones
- Price reacting to zones

---

### 21. RCS Candlestick Patterns
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-candlestick-patterns.png` |
| **Section** | Candlestick Patterns |

**What to capture:**
- Candlestick pattern labels on chart
- Show at least 2-3 different pattern types detected
- Label showing pattern name

---

### 22. Key Systems Example (Regime + TD)
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-key-systems-example.png` |
| **Section** | Key Systems |

**What to capture:**
- Chart showing Regime Box + TD Sequential working together
- Show how systems complement each other

---

### 23. Confluence Score Panel
| Property | Value |
|----------|-------|
| **Filename** | `omnideck-confluence-score.png` |
| **Section** | Confluence Score |

**What to capture:**
- Confluence score display/panel
- Show score value and contributing factors
- Multiple systems agreeing/disagreeing

---

## Pentarch v1.0

**Page:** `https://docs.signalpilot.io/pentarch-v10/`

### 24. Signal Types on Chart
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-signals-labeled.png` |
| **Section** | Core Functionality |

**What to capture:**
- Bitcoin or S&P 500 chart (4H or Daily)
- Show 2-3 different signal types (whatever naturally appears)
- Don't force all 5 - rare to have all 5 visible at once

**Annotations needed:**
- Label visible signals with their names
- Color coding visible in the signals themselves

---

### 25. Settings Panel ⚠️ LOW PRIORITY
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-settings-panel.png` |
| **Section** | Settings |
| **Priority** | LOW - users find settings themselves |

**What to capture:**
- TradingView settings panel for Pentarch
- Focus on signal toggles section (TD, IGN, WRN, CAP, BDN)
- Just capture what fits - don't scroll/stitch

---

### 26. Complete Signal Sequence
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-signal-sequence.png` |
| **Section** | The Five Cycle Events |

**What to capture:**
- Chart showing complete or partial signal sequence
- TD→IGN→WRN→CAP→BDN progression (at least 3-4 signals)

**Annotations needed:**
- Number the signals: 1. TD, 2. IGN, 3. WRN, etc.
- Draw arrow showing progression

---

### 27. TD Signal (Touchdown)
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-td-signal.png` |
| **Section** | TD — Touchdown |

**What to capture:**
- Purple "TD" label below a candle
- Appears at accumulation/oversold point
- After a decline

---

### 28. IGN Signal (Ignition)
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-ign-signal.png` |
| **Section** | IGN — Ignition |

**What to capture:**
- Teal/green "IGN" label
- Appears at reversal starting point
- New trend developing

---

### 29. WRN Signal (Warning)
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-wrn-signal.png` |
| **Section** | WRN — Warning |

**What to capture:**
- Yellow "WRN" label
- Late cycle approaching
- Trend maturing

---

### 30. CAP Signal (Capitulation)
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-cap-signal.png` |
| **Section** | CAP — Capitulation |

**What to capture:**
- Orange "CAP" label
- Climax/exhaustion point
- Trend ending

---

### 31. BDN Signal (Breakdown)
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-bdn-signal.png` |
| **Section** | BDN — Breakdown |

**What to capture:**
- Red "BDN" label
- Trend breakdown
- Cycle complete

---

### 32. Pilot Line and Regime Bar
| Property | Value |
|----------|-------|
| **Filename** | `pentarch-pilot-line-regime.png` |
| **Section** | Pilot Line |

**What to capture:**
- Pilot Line (dynamic moving average baseline)
- Regime bar colors
- Price distance from Pilot Line

---

## Plutus Flow v1.0

**Page:** `https://docs.signalpilot.io/plutus-flow-v10/`

### 33. All Components (OBV + Ribbons + Divergence)
| Property | Value |
|----------|-------|
| **Filename** | `plutus-flow-all-components.png` |
| **Section** | Core Functionality |

**What to capture:**
- Full chart with Plutus Flow panel below
- OBV line visible
- Trend ribbons (colored bands)
- Divergence markers/labels

**Annotations needed:**
- Point to OBV line
- Point to trend ribbons
- Point to divergence markers

---

### 34. Settings Panel ⚠️ LOW PRIORITY
| Property | Value |
|----------|-------|
| **Filename** | `plutus-flow-settings.png` |
| **Section** | Settings |
| **Priority** | LOW - users find settings themselves |

**What to capture:**
- TradingView settings for Plutus Flow
- Show top portion only - whatever fits without scrolling

---

### 35. Bullish Divergence Example
| Property | Value |
|----------|-------|
| **Filename** | `plutus-flow-bullish-divergence.png` |
| **Section** | Divergence Detection |

**What to capture:**
- Price making lower low
- OBV making higher low
- "Bull Div" label visible
- Clear divergence pattern

---

### 36. Cross Signals (Green/Red Dots)
| Property | Value |
|----------|-------|
| **Filename** | `plutus-flow-cross-signals.png` |
| **Section** | Cross Signals |

**What to capture:**
- Green dots (bullish cross)
- Red dots (bearish cross)
- Statistical band breaches (white/yellow dots)

---

## Harmonic Oscillator v1.0

**Page:** `https://docs.signalpilot.io/harmonic-oscillator-v10/`

### 37. Status Panel and Composite Oscillator
| Property | Value |
|----------|-------|
| **Filename** | `harmonic-oscillator-status-panel.png` |
| **Section** | Core Functionality |

**What to capture:**
- Oscillator panel showing composite line
- Regime label (TRENDING/BIAS/RANGING)
- Vote count (X/7)

**Annotations needed:**
- Label regime states
- Point to vote count

---

### 38. Panel Location Below Chart
| Property | Value |
|----------|-------|
| **Filename** | `harmonic-oscillator-panel-location.png` |
| **Section** | Visual Display |

**What to capture:**
- Full chart view
- Price candles above
- Oscillator panel below
- Show relationship between price and oscillator

**Annotations needed:**
- Arrow from price to oscillator
- Label "Harmonic Oscillator Panel"

---

### 39. Settings Panel ⚠️ LOW PRIORITY
| Property | Value |
|----------|-------|
| **Filename** | `harmonic-oscillator-settings.png` |
| **Section** | Settings |
| **Priority** | LOW - users find settings themselves |

**What to capture:**
- TradingView settings for Harmonic Oscillator
- Show top portion only - whatever fits without scrolling

---

### 40. Regime Transitions Over Time
| Property | Value |
|----------|-------|
| **Filename** | `harmonic-oscillator-regime-transitions.png` |
| **Section** | Regime Classification |

**What to capture:**
- Chart showing multiple regime changes
- TRENDING → BIAS → RANGING transitions
- Show how regime adapts to market conditions

---

## Augury Grid v1.0

**Page:** `https://docs.signalpilot.io/augury-grid-v10/`

### 41. Full Table View
| Property | Value |
|----------|-------|
| **Filename** | `augury-grid-full-table.png` |
| **Section** | Core Functionality |

**What to capture:**
- Complete Augury Grid table on chart
- 7 symbols × 3 timeframes visible
- Show signals, scores, prices, TP levels, age, P&L columns
- Mix of BUY/SELL/neutral signals

---

# HOW-TO GUIDES

---

## How to Set Up Alerts

**Page:** `https://docs.signalpilot.io/how-to-alerts/`

### 42. Alert Button Location
| Property | Value |
|----------|-------|
| **Filename** | `alerts-button-location.png` |
| **Section** | Step 1: Open Alert Dialog |

**What to capture:**
- TradingView chart
- Alert button location highlighted
- Right-click context menu showing "Add alert..." option

---

### 43. Condition Dropdown Menu
| Property | Value |
|----------|-------|
| **Filename** | `alerts-condition-dropdown.png` |
| **Section** | Step 2-3: Select Indicator & Event |

**What to capture:**
- Alert dialog open
- Condition dropdown expanded
- Signal Pilot indicators visible (Pentarch, OmniDeck, Janus)
- Event options visible

---

### 44. "Once Per Bar Close" Setting
| Property | Value |
|----------|-------|
| **Filename** | `alerts-once-per-bar-close.png` |
| **Section** | Step 4: Configure Options (CRITICAL) |

**What to capture:**
- Alert options panel
- "Once Per Bar Close" setting HIGHLIGHTED
- Notification method checkboxes visible
- Expiration options visible

**Annotations needed:**
- Circle or highlight "Once Per Bar Close"
- Add "⚠️ MOST IMPORTANT SETTING"

---

### 45. Active Alerts List
| Property | Value |
|----------|-------|
| **Filename** | `alerts-active-list.png` |
| **Section** | What Success Looks Like |

**What to capture:**
- TradingView Alerts panel open
- List of active alerts visible
- Status showing "Active"
- Good alert naming examples

---

### 46. Mobile Notification Settings
| Property | Value |
|----------|-------|
| **Filename** | `alerts-mobile-settings.png` |
| **Section** | Mobile Notifications |

**What to capture:**
- iOS or Android notification settings
- TradingView app permission configuration
- Show notifications enabled

---

## How to Use Screener (Augury Grid)

**Page:** `https://docs.signalpilot.io/how-to-screener/`

### 47. Adding Augury Grid Indicator
| Property | Value |
|----------|-------|
| **Filename** | `screener-add-indicator.png` |
| **Section** | Step 1: Add Augury Grid |

**What to capture:**
- TradingView indicators search panel
- Search for "Augury Grid"
- Search results showing SP — Augury Grid v1.0

---

### 48. Symbol Configuration Settings
| Property | Value |
|----------|-------|
| **Filename** | `screener-symbol-config.png` |
| **Section** | Step 2: Configure Symbols |

**What to capture:**
- Augury Grid settings panel
- Symbol Configuration section visible
- Show 3-4 symbol input fields (whatever fits without scrolling)
- At least one example ticker entered (BINANCE:BTCUSDT)

---

### 49. Fully Populated Grid
| Property | Value |
|----------|-------|
| **Filename** | `screener-populated-grid.png` |
| **Section** | Step 3 Complete |

**What to capture:**
- Complete Augury Grid with all 7 symbols
- Multiple signals showing
- Quality ratings (stars) visible
- Mix of signal types and scores

---

### 50. Elite Signal Example (Annotated)
| Property | Value |
|----------|-------|
| **Filename** | `screener-elite-signal.png` |
| **Section** | Workflow: Finding Opportunities |

**What to capture:**
- Single row showing Elite (★★★) signal
- Score 80+ visible
- Fresh age (0-5 bars)

**Annotations needed:**
- Point to score: "Elite Quality (87)"
- Point to age: "Fresh Signal (2 bars)"
- Point to P&L: "Already Profitable"

---

## How to Set Up Webhooks

**Page:** `https://docs.signalpilot.io/how-to-webhooks/`

### 51. Discord Webhook Creation
| Property | Value |
|----------|-------|
| **Filename** | `webhooks-discord-creation.png` |
| **Section** | Step 1: Get Webhook URL |

**What to capture:**
- Discord Integrations → Webhooks panel
- Show the webhook URL field OR the "Copy Webhook URL" button
- Don't need to show entire Discord settings - just the webhook section

---

### 52. TradingView Webhook URL Field
| Property | Value |
|----------|-------|
| **Filename** | `webhooks-tradingview-field.png` |
| **Section** | Step 2: Configure Alert |

**What to capture:**
- TradingView alert dialog
- Notifications tab open
- "Webhook URL" checkbox and input field
- URL pasted in field

---

### 53. Discord Success Message
| Property | Value |
|----------|-------|
| **Filename** | `webhooks-discord-success.png` |
| **Section** | Step 4: Test Webhook |

**What to capture:**
- Discord channel
- Webhook message received
- Signal Pilot alert data formatted correctly
- Embed with ticker, price, timeframe, etc.

---

# JANUS ATLAS SOURCE FILE (Markdown)

Additional images needed for `docs/janus-atlas-v10.md`:

| # | Filename | Notes |
|---|----------|-------|
| 54 | `custom-session-setup.png` | Settings - show custom session section only |
| 55 | `label-with-price.png` | Chart labels showing `dH • 245.50` format |
| 56 | `alert-dropdown-format.png` | Alert dropdown with `code • name` format |

**Note:** `settings-panel-overview.png` SKIPPED - same problem as #3, use the same screenshot if needed.

### 54. Custom Session Setup
| Property | Value |
|----------|-------|
| **Filename** | `custom-session-setup.png` |
| **Save to** | `assets/images/janus-atlas/` |

**What to capture:**
- Janus Atlas settings panel
- Scroll to Custom Sessions section
- Show just that section (name field, time field, toggles)

---

### 55. Label with Price Format
| Property | Value |
|----------|-------|
| **Filename** | `label-with-price.png` |
| **Save to** | `assets/images/janus-atlas/` |

**What to capture:**
- "Show Price on Labels" setting ENABLED
- Labels showing format: `code • price`
- Examples: `dH • 4525.50`, `wVWAP • 4512.00`

---

### 56. Alert Dropdown Format
| Property | Value |
|----------|-------|
| **Filename** | `alert-dropdown-format.png` |
| **Save to** | `assets/images/janus-atlas/` |

**What to capture:**
- TradingView "Create Alert" dialog
- Condition dropdown EXPANDED for Janus Atlas
- Show 5-6 alert options visible (don't need all 57)
- Format visible: `code • Full Name`

---

# Master Checklist

## HIGH PRIORITY - Chart Screenshots (Feature demos)

- [ ] 1. janus-atlas-beginner-5-levels.png
- [ ] 2. janus-atlas-5-vs-60-levels.png
- [ ] 4. janus-atlas-level-types-labeled.png
- [ ] 5. opening-range-levels.png
- [ ] 6. killzone-background.png
- [ ] 7. gap-levels-fill.png
- [ ] 8. janus-atlas-fvg.png
- [ ] 9. confluence-zone.png
- [ ] 10. distance-table.png
- [ ] 11. janus-atlas-fibonacci.png
- [ ] 12. omnideck-beginner-4-systems.png
- [ ] 13. omnideck-all-10-systems-overload.png
- [ ] 15. omnideck-liquidity-sweeps.png
- [ ] 16. omnideck-ema-trio.png
- [ ] 17. omnideck-supertrend.png
- [ ] 18. omnideck-bmsb.png
- [ ] 19. omnideck-regime-box.png
- [ ] 20. omnideck-supply-demand.png
- [ ] 21. omnideck-candlestick-patterns.png
- [ ] 22. omnideck-key-systems-example.png
- [ ] 23. omnideck-confluence-score.png
- [ ] 24. pentarch-signals-labeled.png
- [ ] 26. pentarch-signal-sequence.png
- [ ] 27. pentarch-td-signal.png
- [ ] 28. pentarch-ign-signal.png
- [ ] 29. pentarch-wrn-signal.png
- [ ] 30. pentarch-cap-signal.png
- [ ] 31. pentarch-bdn-signal.png
- [ ] 32. pentarch-pilot-line-regime.png
- [ ] 33. plutus-flow-all-components.png
- [ ] 35. plutus-flow-bullish-divergence.png
- [ ] 36. plutus-flow-cross-signals.png
- [ ] 37. harmonic-oscillator-status-panel.png
- [ ] 38. harmonic-oscillator-panel-location.png
- [ ] 40. harmonic-oscillator-regime-transitions.png
- [ ] 41. augury-grid-full-table.png

## MEDIUM PRIORITY - How-To Screenshots

- [ ] 42. alerts-button-location.png
- [ ] 43. alerts-condition-dropdown.png
- [ ] 44. alerts-once-per-bar-close.png ⭐ IMPORTANT
- [ ] 45. alerts-active-list.png
- [ ] 47. screener-add-indicator.png
- [ ] 48. screener-symbol-config.png
- [ ] 49. screener-populated-grid.png
- [ ] 50. screener-elite-signal.png
- [ ] 51. webhooks-discord-creation.png
- [ ] 52. webhooks-tradingview-field.png
- [ ] 53. webhooks-discord-success.png

## LOW PRIORITY - Settings Panels (users find these themselves)

- [ ] 3. janus-atlas-settings-panel.png
- [ ] 14. omnideck-settings-panel.png
- [ ] 25. pentarch-settings-panel.png
- [ ] 34. plutus-flow-settings.png
- [ ] 39. harmonic-oscillator-settings.png
- [ ] 46. alerts-mobile-settings.png

## Janus Atlas Markdown Source

- [ ] 54. custom-session-setup.png
- [ ] 55. label-with-price.png
- [ ] 56. alert-dropdown-format.png

---

*Generated: 2026-01-06*
*Total: ~50 screenshots (settings panels marked low priority)*

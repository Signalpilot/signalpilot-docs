---
title: Pentarch v1.0 - Five Cycle Events
description: Close-confirmed cycle detection across accumulation, markup, distribution, climax, and decline phases. Four-layer detection system tracks market structure through TD, IGN, WRN, CAP, and BDN events.
---

# Pentarch v1.0 - Five Cycle Events

<div class="admonition tip" style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4;">
<p class="admonition-title" style="color: #06b6d4; font-weight: 600;">📚 Want to Master Pentarch?</p>
<p><a href="learning.html" style="color: #06b6d4; font-weight: 600; text-decoration: none;">→ Advanced Learning Guide</a> — Emotional recovery protocols, decision trees, beginner traps, and real trading examples</p>
</div>

## 🎯 Cycle-Aware Detection
<span style="color: #0aa1d5; font-weight: 600;">Core Functionality</span>

Most indicators show signals. Pentarch shows cycles.

Markets move in cycles. Every asset. Every timeframe. Pentarch identifies cycle position across five distinct events: accumulation, markup, distribution, climax, and decline.

**The Five Cycle Events:** TD → IGN → WRN → CAP → BDN

**Four-layer detection system:** Regime classification → Pilot Line filter → NanoFlow momentum → Event signals. All layers confirm at bar close before signals fire.

---

## 🔢 The Five Cycle Events
<span style="color: #10b981; font-weight: 600;">Complete Cycle Framework</span>

### 🔵 TD - Touchdown (Accumulation Phase)

**Visual:** Blue "TD" label below the candle

**Cycle Position:** Early-cycle accumulation. Identifies potential reversal from decline into accumulation phase.

**What Pentarch Detects:**
- Price extended below Pilot Line (oversold conditions)
- Multi-factor confirmation across regime, distance, and momentum
- Close-confirmed signal at bar close

**Common Usage:**
- Accumulation phase marker
- IGN signal often follows for markup confirmation
- TD functions as cycle awareness rather than immediate entry trigger

**Example:** Stock declines from $100 to $85, TD fires → Accumulation phase identified

---

### 🟢 IGN - Ignition (Markup Phase)

**Visual:** Green "IGN" label below the candle

**Cycle Position:** Markup phase beginning. Identifies transition from accumulation into bullish momentum expansion.

**What Pentarch Detects:**
- Momentum breakout conditions confirmed
- Price structure shifting bullish
- All four layers aligned at bar close

**Common Usage:**
- Markup phase entry marker
- Evaluated at bar close or following bar
- Stop placement typically below recent structural low

**Example:** After TD at $85, IGN fires at $87 → Markup phase identified, commonly used for long entry

---

### 🟡 WRN - Warning (Distribution Phase)

**Visual:** Yellow "WRN" label above the candle

**Cycle Position:** Distribution phase. Identifies potential transition from markup into distribution.

**What Pentarch Detects:**
- Price extended above Pilot Line
- Weakening momentum conditions
- Distribution characteristics emerging

**Common Usage:**
- Distribution phase warning
- Risk management adjustments (stop tightening)
- Position sizing consideration for new entries

**Example:** Stock rallies to $115, WRN fires → Distribution phase identified

---

### 🔴 CAP - Climax (Climax Phase)

**Visual:** Red "CAP" label above the candle

**Cycle Position:** Climax exhaustion. Identifies late-cycle peak before potential decline.

**What Pentarch Detects:**
- Extreme extension from Pilot Line
- Exhaustion characteristics across all layers
- Climax conditions confirmed at close

**Common Usage:**
- Climax phase marker
- Long position exit consideration
- Short position preparation for experienced traders

**Example:** After WRN at $115, CAP fires at $120 → Climax phase identified

---

### ⚫ BDN - Breakdown (Decline Phase)

**Visual:** Dark "BDN" label above the candle

**Cycle Position:** Decline phase initiation. Identifies structural breakdown into bearish cycle.

**What Pentarch Detects:**
- Bearish structure break confirmed
- Transition from climax into decline phase
- Four-layer bearish alignment at close

**Common Usage:**
- Decline phase confirmation
- Long position exit if not already completed
- Short position entry for directional traders

**Example:** After CAP at $120, BDN fires at $113 → Decline phase confirmed

---

## 📚 Common Usage Patterns
<span style="color: #8b5cf6; font-weight: 600;">How Traders Use It</span>

### Signal Observation

Adding Pentarch to your chart displays labels automatically when events occur.

### Typical Signal Flow Patterns

**For Long Positions:**
1. TD appears → Often interpreted as preparation signal
2. IGN appears → Commonly used as potential long entry signal
3. WRN appears → Many traders begin monitoring for exits
4. CAP or BDN appears → Often interpreted as exit signal

**For Short Positions:**
1. WRN appears → Often interpreted as preparation signal
2. CAP appears → Many traders prepare for potential short opportunities
3. BDN appears → Commonly used as potential short entry signal
4. TD or IGN appears → Often interpreted as exit signal for shorts

### Risk Management Considerations

Stop loss usage is a standard risk management practice:
- For long positions: Common stop placement is below the TD low
- For short positions: Common stop placement is above the CAP high

---

## Educational Example (Bitcoin)

**The Setup:**
- Price: $35,000, falling for weeks
- **TD** appears at $32,500 → "Early-cycle conditions developing"
- **IGN** fires at $33,800 → "Potential reversal indicated" ✅
- Hypothetical entry at $33,900

**The Trade:**
- Price rallies to $42,000
- **WRN** appears at $41,500 → "Monitoring phase begins"
- **CAP** fires at $42,800 → "Late-cycle exhaustion indicated" ✅
- Hypothetical exit at $42,500

**Educational Result:** $8,600 potential gain per coin (25%) in this theoretical scenario

---

## 🎯 The Pilot Line - Your Trend Compass
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">⭐ Core Component - Primary Reference for All Signals</span>

### What Is It?

The **Pilot Line** is a smooth trend line that acts as your primary reference point. Think of it as the "center of gravity" for price action. Every one of the 5 event signals is positioned relative to this line.

**Visual:** A thick line on your chart that changes color:
- **🟢 Green** = Strong uptrend (slope rising, momentum strong)
- **🔴 Red** = Strong downtrend (slope falling, momentum strong)
- **🟠 Orange** = Transitional phase (momentum easing or flat)

**The Ribbon:** You'll also see two semi-transparent bands above and below the line. This is the "influence zone" (±0.25 ATR). Price within the ribbon = balanced. Price outside the ribbon = extended.

### Why It Matters

The Pilot Line serves multiple purposes:

1. **Trend Filter** - Shows you the current trend direction at a glance
2. **Reference Point** - All event signals measure their distance FROM the Pilot Line
3. **Dynamic Support/Resistance** - Price tends to react when approaching or crossing the line
4. **Regime Component** - One of 3 factors that determine regime state (more below)

### How to Read It

| Pilot Line Color | Market State | What Traders Often Look For |
|------------------|--------------|------------------------------|
| 🟢 **Green** | Strong uptrend | Pullback opportunities (TD/IGN signals) |
| 🔴 **Red** | Strong downtrend | Rally reversals (WRN/CAP/BDN signals) |
| 🟠 **Orange** | Transitional/Uncertain | Trend weakening, exercise caution |

**Key Insight:** The Pilot Line doesn't give direct entry signals. Instead, it provides context for the 5 event candles. An IGN signal above a green Pilot Line has different implications than an IGN signal below a red Pilot Line.

### Common Usage Patterns

**Distance Context:**
- TD signals typically appear near or below the Pilot Line (potential bottoms)
- WRN/CAP signals typically appear above the Pilot Line (potential tops)
- Distance from PL measured in ATR units (normalized for volatility)

**Pilot Line Crosses:**
- Price crossing above PL = Potential bullish structural shift
- Price crossing below PL = Potential bearish structural shift
- You can set alerts for PL crosses if desired

**Color Transitions:**
- Green → Orange = Uptrend losing momentum
- Orange → Red = Downtrend establishing
- Watching for color changes can provide early warning of trend shifts

### Technical Note

The Pilot Line is a double-smoothed EMA (34-period EMA, then 3-period EMA of that result). This makes it:
- Fast enough to catch reversals early
- Smooth enough to filter out noise
- Non-repainting (locked in after bar close)

---

## 🎨 Regime Bar Colors - Know Your Market Structure
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">📊 Visual Context - Instant Market Structure Feedback</span>

### What Is It?

Pentarch automatically **colors every candle** on your chart to show the current market regime. This provides instant visual feedback about trend structure without reading any indicator values.

**You'll see:**
- **🟢 Green Candles** = Bull regime active (uptrend structure)
- **🔴 Red Candles** = Bear regime active (downtrend structure)
- **Colored Event Candles** = When TD/IGN/WRN/CAP/BDN fires, that specific candle shows the event color instead

### How Regime Is Determined

Regime uses a **3-factor voting system**:

1. **EMA Structure:** Is the 34-period EMA above the 55-period EMA? (+1 vote for bull)
2. **Price vs Pilot Line:** Is price above the Pilot Line? (+1 vote for bull)
3. **Slope Direction:** Is the Pilot Line sloping up? (+1 vote for bull)

**Regime Changes When:**
- 2 out of 3 factors vote for the opposite direction
- AND this condition holds for 2-4 bars (prevents whipsaw on single spikes)

### Why It Matters

**Trading Bias:** The regime colors guide your directional bias:
- **Green regime** → Many traders look for long opportunities (TD/IGN)
- **Red regime** → Many traders look for short opportunities (WRN/CAP/BDN)

**Signal Context:** The same price level can have different implications depending on regime:
- $50,000 BTC in green regime = Potential support (pullback opportunity)
- $50,000 BTC in red regime = Potential resistance (rally reversal area)

**Trend Strength:**
- Long streaks of same color = Strong, sustained trend
- Frequent color changes = Choppy market, low conviction

### How Event Signals Relate to Regime

Most event signals require the "correct" regime to fire:

| Signal | Typical Regime Required | Exception Cases |
|--------|-------------------------|-----------------|
| **TD** | Bear regime (red) | Can fire in bull regime if conditions are extreme |
| **IGN** | Bear regime (red) | Can fire in bull regime during pullbacks |
| **WRN** | Bull regime (green) | Can fire in bear regime if rally is strong enough |
| **CAP** | Bull regime (green) | Can fire in bear regime if conditions are extreme |
| **BDN** | Follows WRN/CAP | Regime-dependent on prior signal |

**Key Concept:** Regime acts as a filter. The indicator is "pickier" about firing counter-regime signals, requiring more extreme conditions to confirm them.

### Common Usage Patterns

**Regime Flips as Signals:**
- First green candle after red streak = Potential trend change to bullish
- First red candle after green streak = Potential trend change to bearish
- You can set alerts for regime flips

**Regime Confirmation:**
- Event signal + matching regime = Higher conviction
  - Example: IGN in red regime (standard reversal) vs IGN in green regime (pullback long entry)
  - Example: CAP in green regime (standard top) vs CAP in red regime (bear rally exhaustion)

**Whipsaw Considerations:**
- Regime doesn't flip on every bar - it requires sustained evidence
- This prevents false structural changes during normal noise
- Adjustable via settings if you want more/less sensitivity

---

## ⚡ NanoFlow - The Momentum Heartbeat
<span style="color: #a855f7; font-weight: 600; font-size: 1.1em;">🔍 Context Tool - NOT a Primary Trade Signal</span>

### What Is It?

**NanoFlow** is a high-frequency micro-momentum indicator that shows small-scale trend shifts between the main event signals. While TD/IGN/WRN/CAP/BDN fire 3-8 times per day (on 1H charts), NanoFlow can fire 10-30 times per day.

**Visual:** Small cross marks on your chart:
- **🟢 Green cross BELOW the candle low** = Micro bullish momentum detected
- **🔴 Red cross ABOVE the candle high** = Micro bearish momentum detected

**Style:** Subtle and semi-transparent (90% transparent) so they don't overwhelm the chart

### What It Shows

NanoFlow fires when ALL these conditions align:

**Bullish NanoFlow (Green Cross):**
- Fast EMA (9) is above Slow EMA (21) = Micro uptrend
- Current candle is green (close ≥ open)
- Price is above the Pilot Line
- → **Interpretation:** Bulls have micro-level control right now

**Bearish NanoFlow (Red Cross):**
- Fast EMA (9) is below Slow EMA (21) = Micro downtrend
- Current candle is red (close ≤ open)
- Price is below the Pilot Line
- → **Interpretation:** Bears have micro-level control right now

### Key Differences from Main Signals

| Feature | NanoFlow | Main Events (TD/IGN/WRN/CAP/BDN) |
|---------|----------|----------------------------------|
| **Frequency** | High (10-30/day on 1H) | Low (3-8/day on 1H) |
| **Sensitivity** | Very sensitive (9 vs 21 EMA) | Multi-factor confirmation required |
| **Purpose** | Micro momentum tracking | Major reversal/continuation detection |
| **Visual** | Small subtle crosses | Large colored labels |
| **Actionability** | Context/confirmation tool | Primary trade signals |
| **Regime Dependent?** | No (can fire anytime) | Yes (mostly regime-specific) |

### How Traders Use NanoFlow

**❌ NOT a Trade Signal**
NanoFlow is NOT designed to be traded directly. It's too sensitive and fires too often.

**✅ Context & Confirmation Tool**
NanoFlow helps you evaluate the quality and health of main event signals:

**1. Trend Health Check:**
- During uptrend: Lots of green NanoFlow = Healthy momentum
- During uptrend: No green NanoFlow = Momentum dying, trend weakening
- During downtrend: Lots of red NanoFlow = Healthy downside momentum
- During downtrend: No red NanoFlow = Weakness, potential reversal coming

**2. Event Signal Confirmation:**
- TD fires → Green NanoFlow appears next bar = Good confirmation
- WRN fires → Red NanoFlow appears next bar = Good confirmation
- IGN fires → No green NanoFlow for 5+ bars = Weak signal, exercise caution

**3. Chop Detection:**
- NanoFlow flipping green/red/green/red rapidly = Choppy conditions where trading is often avoided
- NanoFlow absent entirely = Low volatility zone where traders typically await clearer setups

**4. Continuation Monitoring:**
- Many NanoFlow crosses in same direction = Strong trend, momentum sustained
- NanoFlow crosses stopping = Potential exhaustion, prepare for reversal

### Example Scenario

**Bitcoin 1H Chart:**

**Bars 1-10:** Green regime, green Pilot Line, green NanoFlow crosses every 2-3 bars
- **Interpretation:** Healthy uptrend with strong micro momentum

**Bar 11:** WRN fires (yellow label above candle), no green NanoFlow cross
- **Interpretation:** Warning signal + no bullish micro momentum = Top may be forming

**Bars 12-14:** Pilot Line turns orange, red NanoFlow crosses appear
- **Interpretation:** Momentum shifting bearish, transition phase

**Bar 15:** BDN fires (breakdown signal), red regime, red NanoFlow
- **Interpretation:** Full bearish structure confirmed

**Result:** NanoFlow helped confirm the quality of the WRN→BDN sequence by showing momentum dying (green crosses stopped) then shifting (red crosses appeared).

### Settings

NanoFlow can be toggled on/off in TradingView settings:
- **Show NanoFlow Crosses** - Check to display, uncheck to hide
- **Useful for:** 5m, 15m, 1H charts (shows micro structure clearly)
- **Less useful for:** Daily+ charts (too many crosses, can add visual noise)

### Common Questions

**Q: Should I trade every NanoFlow cross?**
A: No. NanoFlow is confirmation for the main event signals, not a standalone entry trigger.

**Q: Why don't I see NanoFlow sometimes?**
A: NanoFlow only appears when ALL conditions are met (micro trend + candle color + correct side of Pilot Line). If any condition fails, no cross renders.

**Q: Can I use NanoFlow alone without the main signals?**
A: Not recommended. NanoFlow is designed to work WITH the 5 event signals, providing momentum context for them.

**Q: Does NanoFlow repaint?**
A: No. Like all Pentarch components, NanoFlow only renders on confirmed bars. What you see is locked in.

---

## 🔄 Four-Layer Detection System
<span style="color: #f59e0b; font-weight: 600; font-size: 1.1em;">🎓 Transparency - How Pentarch Identifies Cycle Events</span>

### The Complete Detection Hierarchy

Pentarch uses a four-layer detection system to identify cycle events. All layers confirm at bar close before signals fire.

**Layer 1: Regime Bar Colors (Bull/Bear Classification)**
- Classifies every candle as bull regime (green) or bear regime (red)
- Three-factor voting system: EMA structure + Price vs Pilot + Pilot slope
- Provides directional bias for event detection
- Locks at bar close (non-repainting)

**Layer 2: Pilot Line (Momentum Trend Filter)**
- Dynamic trend reference line (green/red/orange)
- Measures price distance in ATR-normalized units
- Acts as filter for event detection (overbought/oversold relative to trend)
- Updates at bar close only

**Layer 3: NanoFlow Crosses (High-Frequency Momentum)**
- Micro-level momentum tracking (9 EMA vs 21 EMA)
- Provides momentum confirmation context
- Fires 10-30x more frequently than main events
- Validates trend health between events

**Layer 4: Event Signals (Five Cycle Markers)**
- TD/IGN/WRN/CAP/BDN cycle event labels
- Lowest frequency, highest conviction signals
- Requires alignment across all previous layers
- **Transparency guarantee:** All layers confirm at close = signal fires

### Example: Reading a Full Signal Sequence

**Setup Phase (Green Regime):**
- Candles: 🟢🟢🟢🟢🟢🟢🟢 (all green - bull regime)
- Pilot Line: Green, sloping up
- NanoFlow: Green crosses every 2-3 bars (healthy momentum)
- Events: None yet
- **Interpretation:** Strong uptrend, look for pullback opportunities (TD/IGN)

**Warning Phase:**
- Candles: 🟢🟢🟢🟢🟢🟢🟡 (WRN fires, yellow candle)
- Pilot Line: Still green but starting to ease (losing momentum)
- NanoFlow: No green crosses (bullish momentum died)
- Events: WRN signal (potential early top)
- **Interpretation:** Top warning, momentum fading, prepare for exit consideration

**Transition Phase:**
- Candles: 🟠🟠 (orange - regime transitioning)
- Pilot Line: Orange (easing slope)
- NanoFlow: Red cross appears (bearish micro momentum)
- Events: None
- **Interpretation:** Trend weakening, bearish pressure building

**Breakdown Phase:**
- Candles: 🔴 (first red candle - regime flipped to bear)
- Pilot Line: Now red
- NanoFlow: Red crosses
- Events: BDN fires (breakdown confirmed)
- **Interpretation:** Full structural breakdown, bearish regime active

**Result:** All four layers worked together to identify and confirm the top-to-breakdown sequence.

### Decision Flow: What Each Layer Tells You

**When analyzing a bar:**

1. **Check candle color** → What's the current regime/bias?
2. **Check Pilot Line** → What's the trend direction and strength?
3. **Check NanoFlow** → Is there micro momentum aligned with trend?
4. **Check for event labels** → Is there a trade signal this bar?

**Action:** Only take action on event labels. Everything else is context to evaluate signal quality.

---

## ⚙️ Settings (Configuration Approach)
<span style="color: #10b981; font-weight: 600;">Configuration Options</span>

Minimal configuration changes are typically required. Default settings perform well.

**Available adjustments:**
- **Show/Hide Events:** Individual event types can be toggled
- **Colors:** Color schemes are customizable
- **Pilot Line:** Trend line visibility can be adjusted

Most traders maintain default settings.

---

## 🔔 Alert Configuration
<span style="color: #0aa1d5; font-weight: 600;">Notification Setup</span>

**Commonly monitored alerts:**
1. **IGN Event** → Indicates potential long entry conditions
2. **CAP Event** → Indicates potential exit conditions
3. **BDN Event** → Indicates potential breakdown/exit conditions

**Configuration steps:**
1. Alarm icon on TradingView is clicked
2. "Pentarch v1.0" is selected
3. Event type is chosen
4. "Once Per Bar Close" is set

---

## Common Learning Points

❌ **Entering on TD signal alone**
→ ✅ TD typically functions as a warning signal. IGN often provides additional confirmation.

❌ **Overlooking CAP signals**
→ ✅ CAP indicates late-cycle exhaustion. Exit consideration is common at CAP signals.

❌ **Trading signals without context**
→ ✅ Higher-quality signals often occur at key support/resistance levels (Janus Atlas combination can enhance signal quality)

❌ **Trading without stop losses**
→ ✅ Stop loss usage is standard risk management practice. Signal outcomes are not guaranteed.

❌ **Beginning analysis on 1-minute charts**
→ ✅ Higher timeframes (1H or Daily) are associated with more reliable signals for learning purposes.

---

## ❓ Frequently Asked Questions
<span style="color: #10b981; font-weight: 600;">Common Questions</span>

**Q: How often do signals appear?**
**A:** Depends on timeframe:
- Daily chart: 2-4 complete cycles per month
- 1H chart: 1-2 cycles per week
- 15m chart: Multiple per day

**Q: Does Pentarch work standalone?**
**A:** Pentarch functions independently. Combining with Janus Atlas (structural levels) or Volume Oracle (institutional flow) often enhances cycle event quality.

**Q: What performance characteristics are typical?**
**A:** With disciplined risk management and proper signal evaluation, traders commonly report 60-70% win rates. Performance typically improves when cycle events align with key structural levels.

**Q: Which timeframes work with Pentarch?**
**A:** All timeframes display cycle events. Lower timeframes (1m-15m) show more frequent signals with increased noise. Higher timeframes (4H-Daily) show fewer signals with stronger structural significance.

**Q: What timeframe characteristics exist?**
**A:**
- Daily/4H: Lower frequency, stronger structural significance
- 1H/15m: Moderate frequency, balanced for intraday
- 5m/15m: Higher frequency, requires faster decision-making

**Q: Does it repaint?**
**A:** No. Once a signal appears, it stays. What you see is what you get.

**Q: What if IGN entry timing is missed?**
**A:** Chasing entries after initial signal typically reduces favorable risk/reward ratios. Cycle events occur continuously across timeframes, creating recurring opportunities.

---

## Common Practices

1. **Higher timeframe learning** - Daily or 4H charts are often recommended for initial signal pattern learning

2. **Janus Atlas combination** - Signals occurring at key levels are associated with improved success rates

3. **Alert configuration** - Alert setup helps ensure signal observation opportunities aren't missed

4. **Partial position management** - Some traders implement partial exits at WRN while maintaining remainder through CAP

5. **Trade journaling** - Recording signal performance patterns can inform future analytical decisions

6. **Pattern recognition** - Complete sequences like TD→IGN or WRN→CAP→BDN are often associated with higher-quality setups

---

## Quick Reference Guide

| Signal | Meaning | Common Interpretation |
|--------|---------|----------------------|
| TD 🔵 | Early-cycle warning | Often viewed as preparation signal (not entry) |
| IGN 🟢 | Potential reversal up indicated | Commonly used as potential long entry signal |
| WRN 🟡 | Late-cycle warning | Monitoring typically begins, stop tightening is considered |
| CAP 🔴 | Late-cycle exhaustion | Often interpreted as long exit signal |
| BDN ⚫ | Potential breakdown | Often interpreted as exit signal (or potential short entry) |

---

## Support

Additional resources available:
- [<span class="signal-pilot-brand">Signal Pilot</span> Suite Overview](https://docs.signalpilot.io/suite-index/) - Indicator combination strategies
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Support resources

---

**Summary:** Pentarch identifies cycle position across five events (TD → IGN → WRN → CAP → BDN). Four-layer detection system confirms at bar close before signals fire. When combined with Janus Atlas for structural levels, cycle event quality often improves.

**When you see where you are in the cycle, timing becomes clearer. Risk becomes manageable. Noise becomes filterable.** 🎯

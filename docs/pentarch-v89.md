# Pentarch v1.0 - Potential Reversal Signals Made Simple

## What Does It Do?

Pentarch shows you **5 simple signals** that indicate when price may potentially reverse. Think of it like traffic lights for potential reversals - it shows you when to get ready, when to go, and when to exit.

**The 5-Phase System:** TD → IGN → WRN → CAP → BDN

**Best for:** Anyone who wants to identify potential reversals without guessing

---

## The 5 Signals (Easy to Understand)

### 🔵 TD - Touchdown (Early-Cycle Warning)

**What you see:** Blue "TD" label below the candle

**What it means:** Price has pulled back hard and is getting oversold. Early-cycle reversal conditions may be developing.

**Common interpretation:**
- Many traders watch for potential long entry setups
- IGN signal often provides additional confirmation
- TD is typically viewed as an early warning rather than an entry trigger

**Example:** Stock drops from $100 to $85, TD appears → early-cycle conditions may be developing

---

### 🟢 IGN - "GO! Potential Reversal Signal"

**What you see:** Green "IGN" label below the candle

**What it means:** Potential reversal indication. Bulls may be taking over.

**Example usage:**
- This is a potential entry signal for longs
- Example entry timing: this bar or next bar
- Example stop placement: below the recent low

**Example:** After TD at $85, IGN fires at $87 → Potential reversal indicated, commonly interpreted as long entry signal

---

### 🟡 WRN - Warning (Late-Cycle Alert)

**What you see:** Yellow "WRN" label above the candle

**What it means:** Price is getting extended. Late-cycle conditions may be developing.

**Common interpretation:**
- Many traders consider risk management adjustments (tightening stops if long)
- Often viewed as preparation for potential exits
- Educational note: Late entry typically reduces favorable risk/reward ratios

**Example:** Stock rallied to $115, WRN appears → often interpreted as exit preparation signal

---

### 🔴 CAP - Climax (Late-Cycle Exhaustion)

**What you see:** Red "CAP" label above the candle

**What it means:** Final exhaustion. This often indicates late-cycle exhaustion conditions.

**Common interpretation:**
- Many traders consider exiting long positions
- Often viewed as a potential exit signal
- Advanced traders may evaluate short opportunities

**Example:** After WRN at $115, CAP fires at $120 → late-cycle exhaustion indicated, commonly used as exit signal

---

### ⚫ BDN - "Potential Breakdown Signal"

**What you see:** Dark "BDN" label above the candle

**What it means:** Potential breakdown indication. Bears may be taking over. Indicates a potential bearish structure break.

**Common interpretation:**
- Many traders consider exiting any remaining long positions
- Short sellers often view this as a potential entry signal
- Typically interpreted as potential breakdown and reversal down

**Example:** After CAP at $120, BDN fires at $113 → Potential breakdown and downtrend indicated

---

## Common Usage Patterns

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
| 🟢 **Green** | Strong uptrend | Dips to buy (TD/IGN signals) |
| 🔴 **Red** | Strong downtrend | Rallies to fade (WRN/CAP/BDN signals) |
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
- $50,000 BTC in green regime = Potential support (dip buy)
- $50,000 BTC in red regime = Potential resistance (fade the bounce)

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
  - Example: IGN in red regime (standard reversal) vs IGN in green regime (pullback buy)
  - Example: CAP in green regime (standard top) vs CAP in red regime (bear rally exhaustion)

**Avoiding Whipsaw:**
- Regime doesn't flip on every bar - it requires sustained evidence
- This prevents false structural changes during normal noise
- Adjustable via settings if you want more/less sensitivity

---

## ⚡ NanoFlow - The Momentum Heartbeat

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

## 🔄 How All Components Work Together

### The Complete Visual Hierarchy

When you look at a Pentarch chart, you see four layers working together:

**Layer 1: Regime Bar Colors (Structural Foundation)**
- Every candle colored green (bull) or red (bear)
- Shows the current market structure/bias
- Overridden by event colors when signals fire

**Layer 2: Pilot Line (Trend Reference)**
- Thick colored line (green/red/orange)
- Central reference point for all measurements
- Shows trend direction and strength

**Layer 3: NanoFlow Crosses (Micro Momentum)**
- Small crosses below/above candles
- High-frequency momentum feedback
- Confirms or questions trend health

**Layer 4: Event Candles (Reversal Signals)**
- TD/IGN/WRN/CAP/BDN colored labels
- The actual trade signals
- Lowest frequency, highest conviction

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

## Settings (Keep It Simple)

You don't need to change much. The defaults work great.

**Optional tweaks:**
- **Show/Hide Events:** Turn off events you don't use
- **Colors:** Pick your favorite color scheme
- **Pilot Line:** The blue trend line (turn on/off as you like)

Most traders just use the default settings.

---

## Alerts (Set These!)

**Must-have alerts:**
1. **IGN Event** → Potential buy signal
2. **CAP Event** → Potential sell signal
3. **BDN Event** → Potential breakdown/exit signal

**How to set:**
1. Click the alarm icon on TradingView
2. Select "Pentarch v1.0"
3. Choose which event
4. Set it to "Once Per Bar Close"

---

## Common Learning Points

❌ **Entering on TD alone**
→ ✅ TD is typically viewed as a warning signal. IGN often provides additional confirmation.

❌ **Overlooking CAP signals**
→ ✅ CAP indicates late-cycle exhaustion. Many traders use this as an exit consideration signal.

❌ **Taking every signal without context**
→ ✅ Higher-quality signals often occur at key support/resistance levels (combining with Janus Atlas can improve signal quality)

❌ **Trading without stops**
→ ✅ Stop loss usage is standard risk management practice. Not every signal results in the expected move.

❌ **Starting on 1-minute charts**
→ ✅ Higher timeframes (1H or Daily) are associated with more reliable signals for learning purposes.

---

## Frequently Asked Questions

**Q: How often do signals appear?**
**A:** Depends on timeframe:
- Daily chart: 2-4 complete cycles per month
- 1H chart: 1-2 cycles per week
- 15m chart: Multiple per day

**Q: Do I need other indicators?**
**A:** Pentarch works standalone, but combining with Janus Atlas (for levels) or Minimal Flow (for volume) increases win rate significantly.

**Q: What's the win rate?**
**A:** When you follow the signals properly and use stops, most traders see 60-70% win rate. Higher when combined with key levels.

**Q: Can I use this for day trading?**
**A:** Yes! Works on any timeframe. Just know that lower timeframes (1m-15m) have more signals but also more noise.

**Q: What timeframe is best?**
**A:**
- Beginners: Daily or 4H
- Day traders: 1H or 15m
- Scalpers: 5m or 15m

**Q: Does it repaint?**
**A:** No. Once a signal appears, it stays. What you see is what you get.

**Q: What if I miss the IGN entry?**
**A:** Chasing missed entries is generally associated with poor risk/reward. Many traders look for the next TD→IGN setup as opportunities are continuous.

---

## Common Practices

1. **Higher timeframe learning** - Daily or 4H charts are often recommended for learning signal patterns

2. **Combination with Janus Atlas** - Signals occurring at key levels are associated with improved success rates

3. **Alert configuration** - Setting alerts helps ensure signals aren't missed

4. **Partial position management** - Some traders exit portions at WRN while letting remainder run to CAP

5. **Trade journaling** - Recording which signals perform best can inform future decisions

6. **Pattern recognition** - Complete sequences like TD→IGN or WRN→CAP→BDN are often associated with higher-quality setups

---

## Quick Reference Guide

| Signal | Meaning | Common Interpretation |
|--------|---------|----------------------|
| TD 🔵 | Early-cycle warning | Often viewed as preparation signal (not entry) |
| IGN 🟢 | Potential reversal up indicated | Commonly used as potential long entry signal |
| WRN 🟡 | Late-cycle warning | Many traders begin monitoring, consider tightening stops |
| CAP 🔴 | Late-cycle exhaustion | Often interpreted as long exit signal |
| BDN ⚫ | Potential breakdown | Often interpreted as exit signal (or potential short entry) |

---

## Support

Need help? Check out:
- [Signal Pilot Suite Overview](v6-suite-index/) - How to combine with other indicators
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Get help

---

**Remember:** Pentarch indicates WHEN potential reversals may be forming. Combine it with Janus Atlas (shows you WHERE - at which levels) for best results.

**Trade smart, use stops, and let the signals guide you!** 🎯

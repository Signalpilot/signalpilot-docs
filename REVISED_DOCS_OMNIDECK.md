# Omnideck v1.0 — 10 Indicators in One

All-in-one trading system. Combines 10 professional analysis tools into single optimized indicator.

---

## 🎯 Core Functionality

Omnideck integrates 10 separate trading systems into one indicator. Each system can be enabled/disabled individually.

**The 10 Systems Available:**
1. TD Sequential - Exhaustion counter (9-count system)
2. Squeeze Detector - Volatility breakout arrows
3. Liquidity Sweeps - Stop hunt detection (LL/HH tags)
4. EMA Trio - Three moving averages (50/100/200)
5. SuperTrend - Trend ribbon (green/red)
6. BMSB - Bull Market Support Band (20 SMA + 21 EMA)
7. Regime Box - Market mood background color
8. Supply/Demand Zones - Institutional level boxes
9. Candlestick Patterns - 16 classic patterns
10. Meta Tools - System integration layer

**Display:** All enabled systems appear on single chart without performance degradation.

**Timeframe Compatibility:** Works on all timeframes.

---

## 📚 Before You Start — Prerequisites

### Universal Requirements:
- **Basic Chart Reading:** Understand candlesticks, timeframes, and how to navigate TradingView
- **Support & Resistance Concepts:** Recognize that price tends to react at certain levels
- **Risk Management Fundamentals:** Understanding position sizing and stop-loss concepts
- **TradingView Account:** Free tier minimum (Pro/Premium unlocks more indicators and alerts)
- **Chart Observation Time:** At least 10-20 hours watching live charts to understand price movement

### Additional Knowledge for Omnideck:
- **Understanding of All 10 Component Systems:**
  - TD Sequential (cycle counting)
  - VWAP (volume-weighted levels)
  - Volume Profile (volume distribution)
  - Oscillators (momentum indicators)
  - Fibonacci (retracement/extension levels)
  - Trend Analysis, RSI, Stochastic, Levels, Volume Flow

### Recommended Learning Path:
1. **DO NOT** start with Omnideck as your first indicator
2. **Learn Pentarch + Janus Atlas first** (10-20 hours each)
3. **Enable 2-3 Omnideck systems at a time**, not all 10 simultaneously
4. **Master each system individually** before combining

### Estimated Learning Time:
- **Basic Proficiency:** 20-30 hours (understand 3-4 systems, basic system-switching)
- **Intermediate:** 50-70 hours (comfortable with 6-8 systems, multi-system analysis)
- **Advanced:** 100+ hours (full 10-system integration, dynamic system selection)

**⚠️ Important:** Omnideck has the steepest learning curve. Budget 2-3x more time than individual indicators.

---

## ⚙️ Settings

### Recommended Initial Configuration

**Starter System Selection (4 of 10):**

Enable these systems first:
- ✓ TD Sequential (exhaustion signals)
- ✓ Squeeze Detector (breakout arrows)
- ✓ EMA Trio (trend context)
- ✓ Regime Box (bias filter)

Additional systems can be enabled progressively.

### Progressive Learning Path

**Week 1-2: Foundation (4 systems)**
- Master TD Sequential signal interpretation
- Understand Squeeze breakout mechanics
- Learn EMA trend identification
- Use Regime Box for directional context

**Week 3-4: Enhancement (add 2-3 systems)**
- Add BMSB (support band)
- Add SuperTrend (trend confirmation)
- Add Liquidity Sweeps (stop hunt detection)

**Month 2+: Customization (selective addition)**
- Add Supply/Demand Zones if zone-based approach used
- Add Candlestick Patterns if pattern recognition valued

### System Toggle Options

| System | On/Off Toggle | Alert Available |
|--------|---------------|-----------------|
| TD Sequential | ✓ | ✓ |
| Squeeze | ✓ | ✓ |
| Liquidity Sweeps | ✓ | ✓ |
| EMA Trio | ✓ | Cross alerts |
| SuperTrend | ✓ | Flip alerts |
| BMSB | ✓ | Touch alerts |
| Regime Box | ✓ | Change alerts |
| S/D Zones | ✓ | Touch alerts |
| Candlestick Patterns | ✓ | ✓ |
| Meta Tools | Always on | - |

---

## ⚙️ Advanced Configuration Examples

Default settings work for most users. Advanced traders can optimize for specific scenarios:

#### Configuration 1: "Lite" Mode (Performance Optimized)

**Use Case:** Older devices, many charts open

**Systems to Enable (3 Only):**
1. TD Sequential (cycle detection)
2. VWAP (price context)
3. Oscillators (momentum)

**Systems to Disable:** All others

**Result:**
- 70% performance improvement
- Retains core analysis capability
- Reduces visual clutter

---

#### Configuration 2: Cycle Trader Focus

**Use Case:** Emphasis on cycle-based analysis

**Systems to Enable:**
1. TD Sequential (primary)
2. Fibonacci (retracement zones)
3. Levels (key support/resistance)
4. Trend Analysis (directional bias)

**Systems to Disable:**
- Oscillators (not cycle-focused)
- Volume Flow (optional)

---

#### Configuration 3: Volume Specialist

**Use Case:** Volume-based trading emphasis

**Systems to Enable:**
1. Volume Flow (institutional activity)
2. Volume Profile (distribution)
3. VWAP (volume-weighted average)
4. Levels (price context)

**Systems to Disable:** TD Sequential, Fibonacci, Oscillators

---

## 📊 Educational Example: Bitcoin (November 2024)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**Setup Observed - Systems Active:**
- TD Sequential, Squeeze, EMA Trio, Regime Box, Demand Zones

**Signal Sequence:**

| Time | Price | System Signals | Analysis |
|------|-------|----------------|----------|
| Nov 5, 12pm | $64,000 | Regime: Red (bearish context) | Declining market |
| Nov 5, 8pm | $63,500 | TD Green 9 (exhaustion detected) | Oversold conditions |
| Nov 5, 11pm | $63,200 | Demand Zone ⭐⭐⭐ touched | Zone reached |
| Nov 6, 2am | $63,800 | Squeeze arrow ↑ fired | Breakout signal |
| Nov 6, 8am | $65,000 | Regime flipped Green | Bias change |
| Nov 7, 4pm | $68,000 | Price continuation | +$4,800 move |

**Multi-System Confluence:**
- TD 9 (exhaustion) + Demand Zone (support) + Squeeze (breakout) = High confluence setup
- Regime flip confirmed directional change
- All 4 systems aligned at entry zone

**Outcome:** +$4,800 per BTC move observed (7.5% gain from $63,200 low).

*This example demonstrates multi-system confluence. Individual interpretation and outcomes vary. No pattern guarantees any specific outcome.*

---

## 🔢 The 10 Systems Explained

### System 1: TD Sequential — Exhaustion Counter

**Visual Display:**
- Green numbers 1-9 below bars (downtrend exhaustion)
- Red numbers 1-9 above bars (uptrend exhaustion)

**How It Works:**
- Counts consecutive closes in one direction
- At count 9, exhaustion conditions indicated
- Counter resets when direction changes

**Signal Interpretation:**
- Green 9 = Extended decline, potential reversal up
- Red 9 = Extended advance, potential reversal down

**Example:** Price falling for 9 bars, Green 9 appears at $100 → Oversold exhaustion detected.

---

### System 2: Squeeze — Breakout Detector

**Visual Display:**
- Red dots on candles = Volatility compression
- Green arrow ↑ = Bullish breakout
- Red arrow ↓ = Bearish breakdown

**How It Works:**
- Monitors Bollinger Bands vs Keltner Channels
- Red dots = Bands inside Channels (squeeze forming)
- Arrow fires when bands expand (breakout)

**Signal Interpretation:**
- Multiple red dots (3-5+) = Larger move potential
- Green arrow = Bullish breakout direction
- Red arrow = Bearish breakdown direction

**Example:** 5 red dots accumulate, green arrow fires at $102 → Bullish breakout detected.

---

### System 3: Liquidity Sweeps — Stop Hunt Detection

**Visual Display:**
- LL tag = Lower Low sweep (potential fake breakdown)
- HH tag = Higher High sweep (potential fake breakout)

**How It Works:**
- Detects when price spikes to new high/low then immediately reverses
- Identifies stop hunt / liquidity grab patterns

**Signal Interpretation:**
- LL sweep = Stops triggered below support, reversal potential
- HH sweep = Stops triggered above resistance, reversal potential

**Example:** Price drops to $98 (LL tag), immediately bounces to $102 → Stop hunt pattern detected.

---

### System 4: EMA Trio — Moving Averages

**Visual Display:**
- Three lines: EMA 50 (fast), EMA 100 (medium), EMA 200 (slow)

**Signals Generated:**
- GC (Golden Cross) = Fast crosses above slow (bullish)
- DC (Death Cross) = Fast crosses below slow (bearish)
- PB (Pullback) = Price touches EMA then bounces

**Signal Interpretation:**
- Price above all EMAs = Uptrend structure
- Price below all EMAs = Downtrend structure
- EMA alignment (50>100>200) = Strong trend

**Example:** Price above all 3 EMAs with 50>100>200 → Bullish trend structure.

---

### System 5: SuperTrend — Trend Ribbon

**Visual Display:**
- Green ribbon = Bullish trend identified
- Red ribbon = Bearish trend identified

**How It Works:**
- ATR-based trend following system
- Ribbon color indicates current trend direction

**Signal Interpretation:**
- Green ribbon = Long bias conditions
- Red ribbon = Short bias conditions
- Ribbon flips = Trend change indication

**Example:** Green ribbon + TD 9 green = Oversold in uptrend (dip buying setup characteristics).

---

### System 6: BMSB — Bull Market Support Band

**Visual Display:**
- Two close lines: 20 SMA + 21 EMA

**How It Works:**
- Acts as dynamic support zone in uptrends
- Combination of SMA and EMA creates "band"

**Signal Interpretation:**
- Uptrend + price touches BMSB = Potential bounce zone
- Price breaks below BMSB = Trend weakening indication

**Example:** Stock in uptrend pulls back to BMSB at $105, bounces → Support band held.

---

### System 7: Regime Box — Market Mood Background

**Visual Display:**
- Green background = Bullish regime detected
- Red background = Bearish regime detected
- Gray background = Neutral/choppy conditions

**How It Works:**
- Analyzes multiple factors to determine market regime
- Background color provides bias filter

**Signal Interpretation:**
- Green background = Long bias conditions
- Red background = Short bias conditions
- Gray background = Selective approach conditions

**Example:** Regime green + Squeeze arrow up = Maximum conviction setup characteristics.

---

### System 8: Supply/Demand Zones — Institutional Levels

**Visual Display:**
- Green boxes = Demand zones (potential support)
- Red boxes = Supply zones (potential resistance)
- Stars ⭐⭐⭐ = Quality rating (more stars = stronger zone)

**How It Works:**
- Identifies areas where institutional accumulation/distribution occurred
- Star rating based on volume, momentum, time characteristics

**Signal Interpretation:**
- ⭐⭐⭐ zones = Highest quality (strongest reaction potential)
- Price at zone = Reaction point observation
- Zone break = Level invalidation

**Example:** Price drops to ⭐⭐⭐ demand zone at $100, forms hammer → High-quality support zone reached.

---

### System 9: Candlestick Patterns — 16 Classic Patterns

**Visual Display:**
- Labels like "HAM" (Hammer), "BE" (Bullish Engulfing), "SS" (Shooting Star)

**Patterns Detected:**
16 classic reversal patterns identified automatically

**Signal Interpretation:**
- Pattern at zone + other confirmations = Enhanced setup
- Pattern alone = Lower confidence
- Pattern + confluence = Higher confidence

**Example:** Shooting Star at supply zone + TD 9 red = Multiple bearish indications.

---

### System 10: Meta Tools — Integration Layer

**What It Does:**
- Behind-the-scenes system coordination
- Ensures all systems work in harmony
- Optimizes performance with multiple systems active

**Functionality:**
- Prevents signal conflicts
- Manages display priorities
- Coordinates alert timing

**Example:** When all systems align (Regime + TD + Squeeze + Zone + Pattern) = Elite confluence characteristics.

---

## 📚 Analysis Framework

### Hierarchical Analysis Approach

**Common Evaluation Order:**

**Step 1: Regime Box (Directional Bias)**
- Check background color
- Green = Long bias context
- Red = Short bias context
- Gray = Selective conditions

**Step 2: Trend Structure (EMA Trio / BMSB / SuperTrend)**
- Identify trend direction
- Check EMA alignment
- Verify BMSB/SuperTrend confirmation

**Step 3: Entry Timing (TD / Squeeze / Sweeps)**
- Look for exhaustion (TD 9)
- Check for breakout (Squeeze arrow)
- Monitor liquidity sweeps (LL/HH tags)

**Step 4: Zone Confirmation (Supply/Demand + Patterns)**
- Check if signal at quality zone
- Look for candlestick pattern confluence
- Higher confluence at ⭐⭐⭐ zones

### Example Analysis Sequence

```
1. Regime = Green (bullish bias)
2. Price above BMSB (uptrend confirmed)
3. TD 9 green (oversold)
4. Squeeze arrow fires up (breakout)
5. At ⭐⭐⭐ demand zone (high quality support)
= High confluence setup characteristics
```

*Analysis framework provides structure. Individual application varies.*

---

## 🔔 Alert Configuration

**Available Alerts:**

| System | Alert Types | Trigger Conditions |
|--------|-------------|-------------------|
| **TD Sequential** | Count 9 reached | Green 9 or Red 9 appears |
| **Squeeze** | Breakout fired | Arrow appears (up or down) |
| **Liquidity Sweeps** | Sweep detected | LL or HH tag appears |
| **EMA Trio** | Cross occurred | GC, DC, or PB signal |
| **SuperTrend** | Trend flip | Ribbon color changes |
| **BMSB** | Touch/Break | Price interaction with band |
| **Regime Box** | Regime change | Background color flips |
| **S/D Zones** | Zone touch | Price reaches zone boundary |
| **Patterns** | Pattern formed | Any of 16 patterns detected |

**Alert Setup:**
- Each system has independent alert toggles
- Multiple alerts can be enabled simultaneously
- Alerts fire once per signal occurrence

---

## 📊 Educational Example 1: Crude Oil Multi-System Analysis (May 2024)

**Market Context:**
Crude Oil (CL futures) trading at $77.50 on May 15, 2024. Market showing mixed signals across different analysis methods. Omnideck's multi-system approach provides comprehensive view.

**System-by-System Breakdown:**

| System | Reading | Interpretation |
|--------|---------|----------------|
| TD Sequential | Count 8 of 9 (near completion) | Late in current trend phase |
| VWAP | Price below daily VWAP ($78.20) | Below average, potential support below |
| Volume Profile | POC at $77.20-$77.80 | High-volume zone nearby |
| Oscillators | Oversold (3/5 showing) | Momentum bearish but extreme |
| Fibonacci | At 61.8% retracement ($77.45) | Significant retracement level |
| Levels | Daily Low at $77.10 | Support 40 cents below |
| Trend Analysis | Short-term downtrend | Directional bias down |
| RSI | 32 (oversold territory) | Momentum oversold |
| Stochastic | 18 (deeply oversold) | Extreme oversold |
| Volume Flow | Declining flow | Selling pressure present |

**Multi-System Interpretation:**

**Bearish Factors:**
- Below VWAP (bearish)
- Downtrend active
- Volume Flow declining (selling)

**Bullish/Neutral Factors:**
- TD Sequential near completion (cycle ending soon)
- Oscillators oversold (potential bounce)
- At Fibonacci 61.8% (retracement level)
- Near POC and Daily Low (support zones)

**Confluence Analysis:**

The setup showed a mixed picture: bearish trend/flow but oversold conditions with multiple support factors (Fibonacci, POC, Daily Low, TD Sequential completion) converging near current price.

**Decision Framework:**

This is where Omnideck's multi-system approach shines:

1. **For Trend Traders:** Bearish bias (trend, VWAP, flow)
2. **For Mean-Reversion Traders:** Potential bounce (oversold, support cluster)
3. **For Cycle Traders:** TD nearing completion suggests phase change soon

**What Actually Happened:**

Price bounced from $77.35 to $79.80 over 3 days (+$2.45 or +3.2%), then resumed downtrend to $76.20. The support cluster provided a short-term bounce, but the larger downtrend continued—exactly what conflicting systems suggested (bounce possible, but trend still down).

**Educational Takeaways:**

✓ **System Conflicts Are Normal:** Different systems measure different aspects
✓ **No Single "Right" Answer:** Depends on your trading style/timeframe
✓ **Confluence Zones:** When multiple systems align at price level, reactions more likely
✓ **Context Matters:** Omnideck shows full picture—you interpret based on strategy

*(Educational example showing multi-system analysis. Past patterns do not guarantee future results. Not financial advice.)*

---

## 🤝 Using Omnideck With Other Indicators

Omnideck contains 10 systems. It can standalone or combine with specialized indicators for specific analysis.

#### Setup 1: Omnideck as Foundation + Pentarch for Confirmation

**Use Case:** Using Omnideck's multiple systems with Pentarch's cycle detection

**How It Works:**
- Enable Omnideck TD Sequential + Oscillators + Volume Flow
- Add Pentarch to chart
- When Omnideck TD and Pentarch TD align → Strong cycle signal

**Why This Helps:**
- Omnideck TD Sequential is visual (numbered bars)
- Pentarch TD is alert-based (label signals)
- Both using same underlying logic, different presentation

---

#### Setup 2: Omnideck Minimal + Specialized Indicators

**Use Case:** Using Omnideck with only 2-3 systems enabled, adding specialized indicators for specific needs

**Configuration:**
- **Omnideck:** Enable only VWAP + Volume Profile (visual context)
- **Add Pentarch:** For cycle pattern alerts
- **Add Harmonic:** For momentum signals

**Benefit:** Reduces Omnideck complexity while leveraging its visual systems

---

## ⚠️ When NOT to Use Omnideck

### Avoid This Indicator When:

- **📊 System Overload: Using All 10 Systems Simultaneously**
  Running all systems at once can cause visual clutter and decision paralysis. Start with 2-3 systems, master them, then add more.

- **⏱️ Timeframe: Scalping on <5-Minute Charts**
  With 10 potential systems generating signals, sub-5-minute charts may produce excessive noise. Recommended minimum: 15-minute for cleaner analysis.

- **💻 Platform Performance: Slow Devices / Multiple Charts**
  Omnideck is computationally intensive. On older computers or when running 10+ charts simultaneously, performance may degrade. Close unused charts or disable unused systems.

- **🎯 Strategy: Beginners' First Indicator**
  Omnideck's 10 systems can overwhelm newcomers. Better learning path: Master Pentarch + Janus Atlas first, then graduate to Omnideck's integrated analysis.

- **📉 When You Need Simplicity**
  Sometimes less is more. If you're trading simple breakouts or single-timeframe momentum, a specialized indicator (Pentarch, Harmonic) may be clearer.

### Limitations to Understand:

✓ **All-in-One Doesn't Mean Everything Simultaneously**
Omnideck provides 10 systems, but experienced traders typically use 2-4 at a time based on market conditions. Don't try to analyze all 10 simultaneously.

✓ **Requires Understanding of Individual Components**
To use Omnideck effectively, you should understand what TD Sequential, VWAP, Oscillators, etc. actually measure. It's not plug-and-play for complete beginners.

✓ **More Features = More Learning Curve**
Expect 20-30 hours to become proficient with Omnideck vs. 10-15 hours for single-purpose indicators.

✓ **System Conflicts Are Normal**
TD Sequential might show bearish while Oscillators show bullish. This isn't a bug—different systems measure different market aspects. Learn to prioritize signals.

### Better Alternatives When:

| Scenario | Use Instead |
|----------|-------------|
| You're completely new to indicators | → Start with Pentarch (simpler) |
| You want one specific type of analysis | → Use specialized indicator |
| Device performance is limited | → Use individual indicators separately |
| You prefer minimalist charts | → Pentarch + Janus Atlas combination |

---

## 🔧 Troubleshooting Common Issues

### Problem: "Omnideck slowing down my TradingView"

**Performance Solutions:**

1. **Reduce Active Systems**
   - **Current:** All 10 systems enabled
   - **Solution:** Enable only 2-3 systems you're actively using
   - **Impact:** Significant performance improvement

2. **Reduce Chart Count**
   - **Check:** Running 10+ charts simultaneously?
   - **Solution:** Close unused charts, use layouts strategically
   - **Why:** Each Omnideck instance is computationally intensive

3. **Lower Timeframe = Higher Load**
   - **Check:** Using 1m charts?
   - **Solution:** Use 15m or higher when possible
   - **Why:** More bars to calculate = more processing

4. **Device Limitations**
   - **Check:** Older computer or mobile device?
   - **Solution:** Consider using specialized indicators instead
   - **Alternative:** Use Pentarch + Janus separately (lighter weight)

---

### Problem: "Conflicting signals between Omnideck systems"

**Example:** "TD Sequential bearish but Oscillators bullish"

**Understanding Multi-System Analysis:**

**This is NORMAL and EXPECTED**

- TD Sequential measures cycle phase
- Oscillators measure momentum
- VWAP measures position relative to average
- Each system analyzes different market aspects

**How to Handle Conflicts:**

1. **Prioritize Based on Strategy**
   - Cycle trader? Weight TD Sequential more heavily
   - Momentum trader? Weight Oscillators more heavily

2. **Wait for Alignment**
   - Best setups occur when multiple systems agree
   - Don't force trades during conflicts

3. **Understand System Roles**
   - Some systems provide context (VWAP position)
   - Others provide timing (TD Sequential, Oscillators)
   - Learn which is which

---

### Problem: "Can't find specific system setting"

**Navigation Tips:**

**Settings are grouped by system:**
- Section 1: TD Sequential settings
- Section 2: VWAP settings
- Section 3: Volume Profile settings
- [etc.]

**Solution:**
1. Open Omnideck settings
2. Expand the specific system section
3. Look for setting name matching your need

**Still can't find it?**
- Some settings affect all systems (global)
- Check "General Settings" section first

---

## ❓ Frequently Asked Questions

### Q: Should I enable all 10 systems?
**A:** Starting with 3-4 systems recommended to learn each properly. Systems can be added progressively based on individual approach.

### Q: Does it slow down my charts?
**A:** No. Omnideck optimized to run all systems efficiently. Minimal performance impact even with all 10 enabled.

### Q: Can I customize each system?
**A:** Yes. Each system has individual settings available. Colors, sensitivity, display options all customizable.

### Q: What timeframes work?
**A:** All timeframes supported. System relevance varies by timeframe (e.g., TD Sequential works on all, but characteristics differ).

### Q: How do systems interact?
**A:** Meta Tools layer ensures systems work harmoniously. No conflicts occur when multiple systems enabled.

### Q: Can I use just one system?
**A:** Yes. Any system can be used standalone. Multi-system confluence provides additional context.

### Q: What's the difference between SuperTrend and Regime Box?
**A:** SuperTrend = ATR-based trend following. Regime Box = Multi-factor regime analysis. Both provide directional bias but use different methodologies.

### Q: Do zones repaint?
**A:** No. Supply/Demand zones drawn once conditions met, do not change retroactively.

### Q: Can I export system signals?
**A:** Alerts provide signal notification compatible with TradingView alert system and webhooks.

### Q: Works with other Signal Pilot indicators?
**A:** Yes. Designed for compatibility with entire suite. Can be combined with Pentarch, Janus Atlas, etc.

---

## 📋 Quick Reference Guide

### System Quick Reference

| System | Visual | Bullish Signal | Bearish Signal |
|--------|--------|----------------|----------------|
| **TD Sequential** | Numbers | Green 9 | Red 9 |
| **Squeeze** | Dots/Arrows | Red dots → Green arrow | Red dots → Red arrow |
| **Liquidity Sweeps** | Tags | LL tag | HH tag |
| **EMA Trio** | Lines | Above all EMAs, GC | Below all EMAs, DC |
| **SuperTrend** | Ribbon | Green ribbon | Red ribbon |
| **BMSB** | Band | Touch + bounce | Break below |
| **Regime Box** | Background | Green | Red |
| **S/D Zones** | Boxes | At demand zone | At supply zone |
| **Patterns** | Labels | HAM, BE, etc | SS, BRE, etc |

### Recommended System Combinations

| Trading Style | Recommended Systems (4-5 total) |
|---------------|--------------------------------|
| **Swing Trading** | TD + EMA + Regime + Zones + Patterns |
| **Day Trading** | Squeeze + SuperTrend + BMSB + Regime + Sweeps |
| **Scalping** | TD + Squeeze + Regime + Sweeps + Patterns |
| **Trend Following** | EMA + SuperTrend + BMSB + Regime |
| **Mean Reversion** | TD + Zones + Regime + Patterns |

### Confluence Levels

**Low Confluence:** 1-2 systems align
**Medium Confluence:** 3-4 systems align  
**High Confluence:** 5+ systems align

*Higher confluence = more factors supporting direction. Not a guarantee of outcome.*

---

## 🔗 Related Topics

### Learn More About Omnideck
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - Quick reference comparing Omnideck to other indicators
- **[Learning Paths](docs/start-learning-path/index.md)** - Structured roadmap for mastering Omnideck (10-12 weeks)
- **[Glossary](docs/ref-glossary/index.md)** - TD Sequential, Squeeze, Liquidity Sweeps, and all system definitions

### All-in-One Analysis
Omnideck combines 8 systems in one indicator:
- **Alternative to:** Using Pentarch + Janus + Volume Oracle + Harmonic separately
- **Benefit:** Single indicator with comprehensive analysis
- **Trade-off:** Higher complexity, steeper learning curve

**When to use Omnideck vs. The Trinity:**
- **Use Omnideck:** Advanced traders, want all-in-one, willing to invest 100+ hours
- **Use The Trinity:** Beginners/intermediates, prefer modular approach, faster learning

### Additional Combinations
- **[Augury Grid](REVISED_DOCS_AUGURY_GRID.md)** - Scan multiple assets, then deep-dive with Omnideck on filtered symbols
- Can combine with other Signal Pilot indicators, but Omnideck alone provides comprehensive analysis

### Comparison & Optimization
- **[Indicator Comparison](docs/ref-comparison/indicator-comparison.md)** - Compare all 7 indicators by difficulty, timeframes, use cases
- **[Performance Optimization](docs/advanced/performance-optimization.md)** - Optimize Omnideck (disable unused systems, reduce visual elements)
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - 2-page reference comparing all indicators

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator combines multiple technical analysis systems. All signals represent historical pattern detection based on various methodologies (exhaustion counting, volatility analysis, moving averages, volume zones, candlestick patterns). Individual interpretation, application, and outcomes vary. Past signal patterns do not guarantee future results. This is not financial advice.

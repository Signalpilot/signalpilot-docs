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
- Most users report using 3-5 systems long-term

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

## ❓ Frequently Asked Questions

### Q: Should I enable all 10 systems?
**A:** Starting with 3-4 systems recommended to learn each properly. Most users report using 3-5 systems long-term based on individual approach.

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

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator combines multiple technical analysis systems. All signals represent historical pattern detection based on various methodologies (exhaustion counting, volatility analysis, moving averages, volume zones, candlestick patterns). Individual interpretation, application, and outcomes vary. Past signal patterns do not guarantee future results. This is not financial advice.

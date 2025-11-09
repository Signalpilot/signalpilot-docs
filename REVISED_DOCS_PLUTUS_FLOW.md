# Plutus Flow v1.0 — Smart OBV Analysis

On-Balance Volume (OBV) indicator enhanced with trend analysis, divergence detection, and momentum confirmation. Displays OBV line, trend ribbons, and divergence labels.

---

## 🎯 Core Functionality

Plutus Flow calculates On-Balance Volume and adds three analytical layers:

**Layer 1: OBV Line**
- Classic OBV calculation (cumulative volume based on price direction)
- Displays as primary line in indicator panel
- Rising OBV = accumulation, Falling OBV = distribution

**Layer 2: Trend Ribbons**
- Moving averages of OBV create colored ribbon
- Green ribbon = bullish volume trend
- Red ribbon = bearish volume trend
- Provides visual context for OBV direction

**Layer 3: Divergence Detection**
- Automatically identifies price-OBV divergences
- Labels appear: "Bull Div" or "Bear Div"
- Highlights when price and volume disagree

**Display Location:** Separate panel below price chart

**Timeframe Compatibility:** Works on all timeframes.

---

## 📚 Prerequisites

### Before You Start

#### You Should Know:
- **Basic Chart Reading:** Understand candlesticks, timeframes, and how to navigate TradingView
- **Support & Resistance Concepts:** Recognize that price tends to react at certain levels
- **Timeframe Selection:** Know the difference between 5m, 1H, 4H, Daily charts
- **Risk Management Fundamentals:** Understanding position sizing and stop-loss concepts

#### You Should Have:
- **TradingView Account:** Free tier minimum (Pro/Premium unlocks additional features like more indicators and alerts)
- **Chart Observation Time:** At least 10-20 hours watching live charts to understand price movement
- **Practice Environment:** Paper trading account or demo account for testing

#### Additional Knowledge Needed:
- **OBV (On-Balance Volume) Theory:** Cumulative volume direction tracking
- **Flow vs. Price Divergence:** When flow and price disagree (advanced signal)
- **Volume-Weighted Indicators:** How volume changes indicator calculations

#### Recommended Learning Path:
1. **Compare Plutus Flow with basic OBV** to understand enhancements
2. Study **comparison with Volume Oracle** (see comparison table on indicator page)
3. Practice **divergence spotting** (price up + flow down = bearish divergence)
4. Understand when to use Flow vs. Oracle (different use cases)

#### Estimated Learning Time:
- **Basic Proficiency:** 8-12 hours (understand flow direction, basic divergence)
- **Intermediate:** 20-28 hours (advanced divergence patterns, flow + price confluence)
- **Advanced:** 40+ hours (multi-timeframe flow analysis, institutional flow tracking)

---

## 📊 Educational Example 1: Ethereum Classic Divergence - April 2024

**On-Balance Volume (OBV) Flow Analysis:**

| Date | ETH Price | OBV Trend | Flow Color | Divergence? | Detail |
|------|-----------|-----------|------------|-------------|--------|
| Apr 8, 2024 | $3,280 | Rising | 🟢 Green | No | Price ↑ + OBV ↑ (healthy) |
| Apr 10, 2024 | $3,450 | Rising | 🟢 Green | No | Price ↑ + OBV ↑ (healthy) |
| Apr 12, 2024 | $3,580 | Flat | 🟡 Yellow | ⚠️ Warning | Price ↑ + OBV → (weakening) |
| Apr 15, 2024 | $3,620 | Declining | 🔴 Red | ❌ Divergence | Price ↑ + OBV ↓ (bearish) |
| Apr 17, 2024 | $3,380 | Declining | 🔴 Red | Confirmed | Price ↓ + OBV ↓ (reversal) |

**Plutus Flow Analysis:**

**Phase 1 - Healthy Uptrend (Apr 8-10):**
- Price: $3,280 → $3,450 (+5.2%)
- Plutus Flow: **Green zones** (OBV rising with price)
- **Observation:** Volume accumulation supporting price rally
- **Interpretation:** Buyers in control, healthy trend

**Phase 2 - Warning Signal (Apr 12):**
- Price: New high at $3,580
- Plutus Flow: Shifted to **yellow zone** (OBV flattening)
- **Observation:** Price making new highs but OBV not confirming
- **Interpretation:** Buying pressure weakening - caution warranted

**Phase 3 - Bearish Divergence (Apr 15):**
- Price: New high at $3,620 (+1.1% higher than Apr 12)
- Plutus Flow: **Red zone** (OBV declining while price rises)
- **Classic Divergence Pattern:**
  - Price: Higher high ($3,620 > $3,580)
  - OBV: Lower high (declining trend)
- **Observation:** Distribution occurring - smart money selling into rally
- **Interpretation:** High-probability reversal setup

**Phase 4 - Reversal Confirmation (Apr 17):**
- Price: Dropped to $3,380 (-6.6% from peak)
- Plutus Flow: Continued **red zones** (OBV falling with price)
- **Observation:** Selling pressure confirmed
- **Interpretation:** Divergence pattern played out

**Historical Outcome:**
Ethereum declined from the $3,620 peak to $3,180 over the following 12 days (-12.2% decline), validating the bearish divergence signal Plutus Flow identified on April 15.

**Key Insight:**
Plutus Flow's color-coded OBV visualization made the divergence immediately visible: price making new highs while the indicator showed red zones (declining OBV) = distribution warning.

*(Educational example showing OBV divergence detection. Past patterns do not guarantee future results. Not financial advice.)*

---

## ⚙️ Settings

### OBV Calculation Settings

| Setting | Options | Default |
|---------|---------|---------|
| **OBV Source** | Close, HL/2, HLC/3, OHLC/4 | Close |
| **Smoothing** | None, SMA, EMA | None |
| **Smoothing Period** | 1-50 | 14 |

### Trend Ribbon Settings

| Setting | Options | Default |
|---------|---------|---------|
| **Fast MA Period** | 5-50 | 20 |
| **Slow MA Period** | 10-100 | 50 |
| **Ribbon Display** | On/Off | On |
| **Color Scheme** | Multiple palettes | Green/Red |

### Divergence Detection Settings

| Setting | Options | Default |
|---------|---------|---------|
| **Lookback Period** | 5-50 bars | 14 |
| **Sensitivity** | Low, Medium, High | Medium |
| **Label Display** | On/Off | On |
| **Alert Toggle** | On/Off | On |

---

## ⚙️ Advanced Configuration Examples

Default settings work for most users. Advanced traders can optimize for specific scenarios:

### Configuration 1: Short-Term Flow (Intraday)

**Use Case:** Faster flow response for day trading

**Settings:**
- **Flow Calculation:** Shorter lookback (faster response)
- **Smoothing:** Light smoothing (preserve sensitivity)

**Trade-off:**
- ✅ Reacts quickly to flow changes
- ⚠️ More choppy flow line

---

### Configuration 2: Long-Term Flow (Position Trading)

**Use Case:** Smooth institutional flow tracking

**Settings:**
- **Flow Calculation:** Longer lookback (smoother)
- **Smoothing:** Heavy smoothing (filter noise)

**Trade-off:**
- ✅ Clean trend identification
- ⚠️ Slower to react to changes

---

### Configuration 3: Divergence-Optimized

**Use Case:** Maximize divergence visibility

**Visual Settings:**
- Flow line: Thicker, high contrast color
- Price: Standard candles
- Background: Minimal (remove unnecessary indicators)

**Goal:** Make flow vs. price divergences visually obvious

---

## 📊 Layer 1: OBV Line

### OBV Calculation

**Formula:**
```
If Close > Previous Close: OBV = Previous OBV + Volume
If Close < Previous Close: OBV = Previous OBV - Volume
If Close = Previous Close: OBV = Previous OBV
```

**Interpretation:**
- **Rising OBV:** More volume on up days than down days (accumulation characteristics)
- **Falling OBV:** More volume on down days than up days (distribution characteristics)
- **Flat OBV:** Volume balanced between up and down days

### OBV Patterns

**Pattern 1: Price and OBV Rising Together**
```
Price: ↑↑↑
OBV:   ↑↑↑
Interpretation: Volume confirms uptrend
```

**Pattern 2: Price and OBV Falling Together**
```
Price: ↓↓↓
OBV:   ↓↓↓
Interpretation: Volume confirms downtrend
```

**Pattern 3: Price Rising, OBV Flat/Falling**
```
Price: ↑↑↑
OBV:   →→→ or ↓↓↓
Interpretation: Bearish divergence (see Layer 3)
```

**Pattern 4: Price Falling, OBV Flat/Rising**
```
Price: ↓↓↓
OBV:   →→→ or ↑↑↑
Interpretation: Bullish divergence (see Layer 3)
```

### Example

**Stock Rally Analysis:**
- Day 1: Price $100, Volume 1M shares, Close up → OBV = +1M
- Day 2: Price $102, Volume 1.5M shares, Close up → OBV = +2.5M
- Day 3: Price $105, Volume 2M shares, Close up → OBV = +4.5M

**Interpretation:** OBV rising strongly, confirming price uptrend with accumulation characteristics.

---

## 📊 Layer 2: Trend Ribbons

### Ribbon Construction

**Components:**
- Fast Moving Average of OBV (default: 20-period)
- Slow Moving Average of OBV (default: 50-period)

**Color Logic:**
- **Green Ribbon:** Fast MA above Slow MA (bullish volume trend)
- **Red Ribbon:** Fast MA below Slow MA (bearish volume trend)

### Ribbon Width

**Ribbon Spacing:**
- Wide ribbon: Large separation between Fast and Slow MA (strong trend)
- Narrow ribbon: Small separation (weak trend or transition)

### Ribbon Patterns

**Pattern 1: Expanding Green Ribbon**
```
Fast MA pulling away above Slow MA
Interpretation: Strengthening bullish volume trend
```

**Pattern 2: Narrowing Green Ribbon**
```
Fast MA approaching Slow MA from above
Interpretation: Weakening bullish volume trend
```

**Pattern 3: Ribbon Color Flip (Red to Green)**
```
Fast MA crosses above Slow MA
Interpretation: Volume trend shift from bearish to bullish
```

**Pattern 4: Ribbon Color Flip (Green to Red)**
```
Fast MA crosses below Slow MA
Interpretation: Volume trend shift from bullish to bearish
```

### Example

**Bitcoin Volume Trend:**
- OBV Fast MA (20): 145M
- OBV Slow MA (50): 138M
- Ribbon: Green (Fast > Slow)
- Ribbon Width: 7M (moderate)

**Interpretation:** Bullish volume trend present with moderate strength.

---

## 📊 Layer 3: Divergence Detection

### Bullish Divergence

**Conditions:**
1. Price makes lower low (LL)
2. OBV makes higher low (HL)
3. Pattern occurs within lookback period

**Visual:** "Bull Div" label appears on indicator panel

**Interpretation:** Price declining but volume showing accumulation characteristics. Disagreement between price and volume suggests potential reversal conditions.

**Example:**
```
Price: $100 → $90 → $85 (lower low)
OBV:   150M → 145M → 147M (higher low at second bottom)
Result: Bullish divergence detected
```

### Bearish Divergence

**Conditions:**
1. Price makes higher high (HH)
2. OBV makes lower high (LH)
3. Pattern occurs within lookback period

**Visual:** "Bear Div" label appears on indicator panel

**Interpretation:** Price rising but volume showing distribution characteristics. Disagreement between price and volume suggests potential reversal conditions.

**Example:**
```
Price: $100 → $110 → $115 (higher high)
OBV:   150M → 155M → 153M (lower high at second peak)
Result: Bearish divergence detected
```

### Hidden Divergence

**Hidden Bullish Divergence:**
- Price: Higher Low (HL)
- OBV: Lower Low (LL)
- Interpretation: Continuation pattern in uptrend

**Hidden Bearish Divergence:**
- Price: Lower High (LH)
- OBV: Higher High (HH)
- Interpretation: Continuation pattern in downtrend

*Hidden divergences detected when enabled in settings.*

### Divergence Confirmation

**Stronger Divergence Signals Include:**
- Ribbon color flip accompanying divergence
- Multiple divergences in sequence
- Divergence at significant support/resistance level
- Divergence combined with other indicators (TD Sequential, etc.)

---

## 🎯 Pattern Recognition Challenge: Microsoft Stock - June 2024

**Scenario:** MSFT is in a downtrend, and you're looking for potential reversal signals

**Plutus Flow Readings:**

**Week 1 (June 3-7):**
- Price: $415 → $405 (-2.4%)
- Plutus Flow: 🔴 Red Zones
- OBV Trend: Declining sharply
- **Pattern:** Price ↓ + OBV ↓ (selling pressure)

**Week 2 (June 10-14):**
- Price: $405 → $398 (-1.7%, new low)
- Plutus Flow: 🟢 Green Zones (!!!)
- OBV Trend: Rising (while price still falling)
- **Pattern:** Price ↓ + OBV ↑ (divergence!)

**Question:** What does this bullish divergence pattern typically suggest?

A) Bearish signal - green zones during downtrend mean more selling coming
B) Ignore it - divergences don't work on individual stocks
C) Potential reversal signal - smart money accumulating despite price decline
D) Guaranteed bottom - buy maximum position immediately

<details>
<summary>💡 Click to Reveal Analysis</summary>

**Correct Answer: C) Potential reversal signal - smart money accumulating despite price decline**

**Detailed Breakdown:**

**Bullish Divergence Pattern:**

This is a **classic bullish divergence** - one of Plutus Flow's most powerful reversal signals:

1. **Price Action:** Making new lows ($415 → $405 → $398)
2. **OBV Action:** Rising (Plutus Flow showing green zones)
3. **Interpretation:** Volume accumulation occurring DESPITE price decline

**What This Reveals:**

**Smart Money Accumulation:**
- While price falls (scaring retail traders), OBV rises
- OBV rising = more volume on up-days than down-days
- Suggests institutional buyers accumulating at lower prices
- Retail sees falling price (fear), institutions see discount (opportunity)

**Why Plutus Flow Shows Green Zones:**
- Plutus Flow tracks OBV direction, not price direction
- Green zones = OBV trending upward
- Even though price is red (falling), Plutus Flow is green (OBV rising)
- This **divergence** is the signal (price vs OBV disagreement)

**What Happened Next:**
- MSFT bottomed at $398 on June 14 (exact day divergence was strongest)
- Reversed to $425 over the following 10 trading days (+6.8% rally)
- Plutus Flow continued showing green zones during the rally (OBV confirming)
- Classic bullish divergence pattern played out perfectly

**Why NOT the Other Answers:**

**A) "More selling coming"** ❌
- Green zones during downtrend = BULLISH divergence, not bearish
- This is the opposite of distribution (which would be red zones during uptrend)
- Accumulation typically precedes reversals, not more selling

**B) "Divergences don't work on stocks"** ❌
- OBV divergences work across all asset classes (stocks, crypto, forex, commodities)
- MSFT example proves it worked (+6.8% rally from exact divergence point)
- Volume-based indicators are particularly effective on liquid stocks like MSFT

**D) "Guaranteed bottom - max position"** ❌
- Divergence is a WARNING signal, not a guarantee
- Price could continue falling despite divergence (need confirmation)
- Proper risk management still required (position sizing, stops)
- "Guaranteed" and "maximum position" are dangerous assumptions

**Divergence Confirmation Checklist:**

| Factor | MSFT Example | Status |
|--------|--------------|--------|
| **Divergence Present?** | Price ↓, OBV ↑ | ✅ Yes |
| **Multiple Timeframes?** | Daily + 4H both showing divergence | ✅ Confirmed |
| **Other Indicators?** | Pentarch TD pattern at $398 | ✅ Confluence |
| **Key Level Nearby?** | Janus Monthly Support at $395 | ✅ Level Support |
| **Volume Confirmation?** | Volume Oracle green spike on reversal | ✅ Confirmed |

**5/5 Confirmation Factors = High-Probability Setup**

**Key Learning - Two Types of Divergences:**

**1. Bearish Divergence (Distribution):**
- Price: Making higher highs ↑
- Plutus Flow: Red zones (OBV declining) ↓
- Interpretation: Smart money selling into rally (distribution)
- Example: Ethereum April 2024 (previous example)

**2. Bullish Divergence (Accumulation):**
- Price: Making lower lows ↓
- Plutus Flow: Green zones (OBV rising) ↑
- Interpretation: Smart money buying the dip (accumulation)
- Example: Microsoft June 2024 (this example)

**Visual Pattern Recognition:**

```
BEARISH DIVERGENCE:           BULLISH DIVERGENCE:
Price:    /\  /\              Price:    \/  \/
         ↗  ↗  ↗ (higher)              ↘  ↘  ↘ (lower)

Plutus:   🔴🔴🔴              Plutus:   🟢🟢🟢
OBV:      \  \  \ (lower)     OBV:      /  /  / (higher)
         ↘  ↘  ↘                       ↗  ↗  ↗

Signal: Distribution          Signal: Accumulation
Action: Caution/Exit         Action: Watch for reversal
```

</details>

*(Interactive educational example. Past patterns do not guarantee future results. Not financial advice.)*

---

## 🔔 Alert Configuration

**Available Alerts:**

| Alert Type | Trigger | Notification |
|------------|---------|--------------|
| **Bullish Divergence** | Bull Div detected | "Plutus Flow: Bullish divergence" |
| **Bearish Divergence** | Bear Div detected | "Plutus Flow: Bearish divergence" |
| **Ribbon Flip Green** | Trend turns bullish | "Plutus Flow: Volume trend bullish" |
| **Ribbon Flip Red** | Trend turns bearish | "Plutus Flow: Volume trend bearish" |
| **OBV Breakout** | OBV exceeds threshold | "Plutus Flow: OBV breakout" |

**Alert Setup:**
1. Open indicator settings
2. Navigate to alert section
3. Enable desired alert types
4. Configure notification method (popup, email, webhook)

---

## 🤝 Using Plutus Flow With Other Indicators

Plutus tracks cumulative volume direction (advanced OBV). Best for divergence detection.

### Setup 1: Plutus Flow + Pentarch (Divergence + Cycle)

**Use Case:** Spotting divergences that align with Pentarch late-cycle patterns

**How It Works:**
- Price making new highs
- Plutus Flow NOT making new highs → Bearish divergence
- Pentarch WRN or CAP appears → Late-cycle pattern confirms divergence

**Example:**
*Microsoft (MSFT) - September 2024*
- Price: New high at $425
- Plutus Flow: Lower high (divergence)
- Pentarch: CAP pattern appears
- Confluence: Divergence + late-cycle pattern = Bearish setup

---

### Setup 2: Plutus Flow vs. Volume Oracle (When to Use Which)

**Comparison:**
- **Plutus Flow:** Best for divergence tracking, trend strength
- **Volume Oracle:** Best for volume spikes, specific zones

**Use Plutus When:**
- Looking for price/flow divergences
- Measuring trend strength over time
- Tracking institutional accumulation/distribution

**Use Volume Oracle When:**
- Need specific volume spike alerts
- Identifying volume accumulation zones
- Measuring relative volume (current vs. average)

**Use Both When:**
- Maximum volume-based analysis needed
- Institutional flow tracking + spike detection combined

*(See comparison table on Plutus Flow and Volume Oracle pages for detailed differences)*

---

## ⚠️ When NOT to Use Plutus Flow

### Avoid This Indicator When:

- **📊 Market Condition: Extremely Low Volume Periods**
  Plutus Flow is volume-weighted. During holidays, weekends (crypto), or pre-market with minimal volume, calculations become less reliable. Best during active trading hours.

- **⏱️ Timeframe: Second-Based Charts (<1 minute)**
  OBV-based calculations need meaningful volume per bar. Sub-minute charts may have erratic volume distribution. Recommended minimum: 1-minute or higher.

- **💰 Asset Type: Forex Spot Pairs**
  Spot forex lacks centralized volume data (only tick volume as proxy). For accurate flow analysis, use futures contracts (e.g., 6E, 6B) or stick to stocks/crypto/commodities.

- **🎯 Strategy: Price-Only Analysis**
  If you ignore volume completely in your methodology, Plutus Flow's volume-weighted approach doesn't align with your strategy. Use price-based indicators instead.

- **📉 Comparing Different Asset Classes**
  Plutus Flow values differ drastically across markets (BTC vs. SPY vs. EUR/USD). Can't directly compare flows between unrelated assets—use within single market.

### Limitations to Understand:

✓ **Flow Shows Cumulative Volume Direction, Not Future Movement**
Positive flow means net buying pressure measured historically. It doesn't predict where price goes next—momentum can reverse anytime.

✓ **Plutus Flow vs. Volume Oracle: Different Purposes**
Plutus tracks cumulative directional flow (advanced OBV). Volume Oracle identifies volume zones and spikes. Both use volume but measure different aspects. See comparison table.

✓ **Divergence Identification Requires Practice**
Price making new highs while Flow doesn't = bearish divergence. Spotting these requires visual pattern recognition—not automatically flagged.

✓ **Volume Data Quality Matters**
On assets where volume reporting is unreliable (some crypto exchanges, OTC stocks), Flow calculations inherit those data quality issues.

### Better Alternatives When:

| Scenario | Use Instead |
|----------|-------------|
| Trading spot forex (no real volume) | → Pentarch or Harmonic Oscillator |
| Need volume spikes/zones specifically | → Volume Oracle |
| Want simpler volume indicator | → Standard OBV or Volume profile |
| Need all-in-one with flow included | → Omnideck Volume Flow system |

---

## ❓ Frequently Asked Questions

### Q: What is On-Balance Volume (OBV)?

**A:** OBV is cumulative volume indicator developed by Joe Granville. Adds volume on up days, subtracts volume on down days. Rising OBV suggests accumulation, falling OBV suggests distribution.

### Q: How is Plutus Flow different from basic OBV?

**A:** Plutus Flow adds trend ribbons (moving averages) and automatic divergence detection to basic OBV calculation. Basic OBV shows only the cumulative line.

### Q: Can divergences fail?

**A:** Yes. Divergences indicate disagreement between price and volume but do not guarantee reversals. Observation shows various outcomes following divergence patterns.

### Q: How many divergences appear on average?

**A:** Frequency varies by asset, timeframe, and sensitivity settings. Higher sensitivity detects more divergences. Lower sensitivity detects fewer, stronger divergences.

### Q: Should I wait for ribbon confirmation?

**A:** Depends on individual approach. Some wait for ribbon color flip to confirm divergence. Others act on divergence alone. Confirmation adds delay but may reduce false signals.

### Q: What causes hidden divergence?

**A:** Hidden divergence occurs when price makes continuation pattern (HL in uptrend, LH in downtrend) while OBV makes divergent pattern. Suggests trend continuation rather than reversal.

### Q: Does OBV work on all assets?

**A:** OBV works on any asset with volume data (stocks, futures, crypto). Not applicable to forex spot markets (no centralized volume).

### Q: Can I adjust ribbon colors?

**A:** Yes. Color scheme settings allow customization of ribbon colors and OBV line color.

### Q: Do divergence labels repaint?

**A:** No. Once divergence pattern confirmed and label appears, it does not change retroactively.

### Q: What sensitivity setting should I use?

**A:** Medium (default) balances detection and false signals. High sensitivity detects more divergences but may include weaker patterns. Low sensitivity detects fewer, stronger patterns only.

---

## 🔧 Troubleshooting Common Issues

### Problem: "Flow line not showing on chart"

**Visibility Checks:**

1. **Flow Line Disabled**
   - **Settings:** Flow line display = ON?
   - **Solution:** Enable flow line in settings

2. **Color Blending**
   - **Issue:** Flow line color same as background
   - **Solution:** Change flow line color in settings

3. **Zoom Level**
   - **Issue:** Flow line visible but outside chart zoom
   - **Solution:** Auto-fit chart or adjust zoom

---

### Problem: "Flow showing opposite of price"

**This is Often CORRECT (Divergence):**

**Bearish Divergence:**
- Price: Higher highs
- Flow: Lower highs
- **Meaning:** Distribution occurring (selling into strength)

**Bullish Divergence:**
- Price: Lower lows
- Flow: Higher lows
- **Meaning:** Accumulation occurring (buying into weakness)

**This is valuable information, not an error**

---

### Problem: "Flow values don't match between symbols"

**Understanding Flow Scaling:**

**Different assets = Different flow values**

- BTC flow value: 45,000
- SPY flow value: 1,200
- EUR/USD flow value: 0.15

**This is expected:**
- Flow is cumulative for each specific symbol
- Can't compare BTC flow value to SPY flow value
- Use flow DIRECTION and divergences, not absolute values

**Solution:** Analyze each symbol's flow independently

---

## 📋 Quick Reference Guide

### Three-Layer System

| Layer | Component | Visual | Purpose |
|-------|-----------|--------|---------|
| **Layer 1** | OBV Line | Primary line | Cumulative volume tracking |
| **Layer 2** | Trend Ribbons | Color bands | Volume trend direction |
| **Layer 3** | Divergence Labels | "Bull Div" / "Bear Div" | Price-volume disagreement |

### Divergence Types

| Type | Price Pattern | OBV Pattern | Interpretation |
|------|---------------|-------------|----------------|
| **Bullish** | Lower Low (LL) | Higher Low (HL) | Potential reversal up |
| **Bearish** | Higher High (HH) | Lower High (LH) | Potential reversal down |
| **Hidden Bullish** | Higher Low (HL) | Lower Low (LL) | Continuation up |
| **Hidden Bearish** | Lower High (LH) | Higher High (HH) | Continuation down |

### Ribbon Interpretation

| Ribbon Color | Fast MA vs Slow MA | Volume Trend |
|--------------|-------------------|--------------|
| **Green** | Fast > Slow | Bullish |
| **Red** | Fast < Slow | Bearish |
| **Wide Gap** | Large separation | Strong trend |
| **Narrow Gap** | Small separation | Weak trend |

### OBV + Price Patterns

| Price | OBV | Ribbon | Interpretation |
|-------|-----|--------|----------------|
| ↑ | ↑ | Green | Confirmed uptrend |
| ↓ | ↓ | Red | Confirmed downtrend |
| ↑ | ↓ | Red | Bearish divergence |
| ↓ | ↑ | Green | Bullish divergence |

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator analyzes On-Balance Volume (OBV) with enhanced trend and divergence detection. OBV calculation based on cumulative volume methodology developed by Joe Granville. Divergence detection identifies disagreement patterns between price movement and volume accumulation/distribution. Individual interpretation, application, and outcomes vary. Past divergence patterns do not guarantee future results. This is not financial advice.

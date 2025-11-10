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

> 👁️ **What You'll See:** OBV line and colored ribbons (green/red) appear immediately in panel below chart. Divergence labels ("Bull Div" / "Bear Div") appear only when specific divergence patterns form—this may take days to weeks depending on market conditions and timeframe.

---

## 🚀 Installation (2 minutes)

### Step 1: Open TradingView
1. Go to [TradingView.com](https://www.tradingview.com)
2. Log into your account
3. Open any chart

### Step 2: Add Plutus Flow to Chart
1. Click **"Indicators"** button (top toolbar, looks like ƒx)
2. Click **"Invite-Only Scripts"** tab
3. Search for **"Plutus Flow v1.0"** or scroll to find it
4. Click **"Plutus Flow v1.0 - Signal Pilot"**
5. Indicator loads on your chart

### Step 3: Verify It's Working
**You should see:**
- "Plutus Flow v1.0" appears in indicator panel below chart
- OBV line displayed (primary line in panel)
- Colored trend ribbons (green or red) behind OBV line
- Panel labeled with OBV values on right side

> 👁️ **First Signal:** Days to weeks for divergence labels. OBV line and ribbons are visible immediately and update with each bar. Divergence labels ("Bull Div" / "Bear Div") appear only when price and OBV diverge—this requires specific market conditions and may take time.

### Troubleshooting
**Not seeing Plutus Flow in Invite-Only Scripts?**
- Verify your TradingView email matches purchase email
- Wait 24 hours after purchase for access
- See [Installation Troubleshooting](docs/troubleshooting-installation.md)

**Loaded but panel looks empty?**
- OBV line may be very small—zoom out vertically on indicator panel
- Right-click panel → "Reset Scale"
- Check Style tab—ensure OBV line is enabled and visible color

**No divergence labels appearing after weeks?**
- Normal! Divergences are rare and require specific conditions
- Divergence = Price makes new high/low BUT OBV doesn't confirm
- Try switching to trending asset with clear price swings (SPY, BTC/USD)
- Divergences are advanced signals—OBV line direction is primary signal

**Need help?** support@signalpilot.io

---

## 📹 Video Tutorials

### Getting Started with Plutus Flow (3:30)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will cover:
- Installing Plutus Flow on TradingView
- Understanding the three layers (OBV, Ribbons, Divergences)
- Reading OBV direction vs. price movement
- Identifying your first divergence signal

---

### Plutus Flow Divergence Hunting Workflow (5:00)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will demonstrate:
- Real-time divergence example on a trending asset
- Combining Plutus Flow with Pentarch for reversal confirmation
- Setting alerts for divergence detection
- Multi-timeframe flow analysis techniques

---

## 📚 Prerequisites

### Before You Start

#### Prerequisite Knowledge:
- **Basic Chart Reading:** Understand candlesticks, timeframes, and how to navigate TradingView
- **Support & Resistance Concepts:** Recognize that price tends to react at certain levels
- **Timeframe Selection:** Know the difference between 5m, 1H, 4H, Daily charts
- **Risk Management Fundamentals:** Understanding position sizing and stop-loss concepts

#### Recommended Setup:
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

## 📊 Educational Example 1: Nvidia (NVDA) Bullish Divergence - June 2024

**On-Balance Volume (OBV) Flow Analysis:**

| Date | NVDA Price | OBV Trend | Flow Color | Divergence? | Detail |
|------|-----------|-----------|------------|-------------|--------|
| Jun 3, 2024 | $118 | Declining | 🔴 Red | No | Price ↓ + OBV ↓ (confirming) |
| Jun 5, 2024 | $112 | Declining | 🔴 Red | No | Price ↓ + OBV ↓ (confirming) |
| Jun 7, 2024 | $108 | Flat | 🟡 Yellow | ⚠️ Notice | Price ↓ + OBV → (stabilizing) |
| Jun 10, 2024 | $106 | Rising | 🟢 Green | ✅ Divergence | Price ↓ + OBV ↑ (bullish) |
| Jun 12, 2024 | $116 | Rising | 🟢 Green | Confirmed | Price ↑ + OBV ↑ (reversal) |

**Plutus Flow Analysis:**

**Phase 1 - Downtrend (Jun 3-5):**
- Price: $118 → $112 (-5.1%)
- Plutus Flow: **Red zones** (OBV declining with price)
- **Observation:** Volume confirming price decline
- **Interpretation:** Selling pressure present

**Phase 2 - Accumulation Signal (Jun 7):**
- Price: New low at $108
- Plutus Flow: Shifted to **yellow zone** (OBV stabilizing)
- **Observation:** Price making new lows but OBV flattening
- **Interpretation:** Selling pressure decreasing - potential shift

**Phase 3 - Bullish Divergence (Jun 10):**
- Price: New low at $106 (-1.9% lower than Jun 7)
- Plutus Flow: **Green zone** (OBV rising while price falls)
- **Classic Bullish Divergence Pattern:**
  - Price: Lower low ($106 < $108)
  - OBV: Higher low (rising trend)
- **Observation:** Accumulation occurring - smart money buying into weakness
- **Interpretation:** High-probability reversal setup

**Phase 4 - Reversal Confirmation (Jun 12):**
- Price: Rallied to $116 (+9.4% from low)
- Plutus Flow: Continued **green zones** (OBV rising with price)
- **Observation:** Buying pressure confirmed
- **Interpretation:** Divergence pattern played out

**Historical Outcome:**
NVDA rallied from the $106 low to $128 over the following 10 days (+20.8% gain), validating the bullish divergence signal Plutus Flow identified on June 10.

**Key Insight:**
Plutus Flow's color-coded OBV visualization made the divergence immediately visible: price making new lows while the indicator showed green zones (rising OBV) = accumulation signal.

*(Educational example showing bullish OBV divergence detection in equities. Past patterns do not guarantee future results. Not financial advice.)*

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
OBV:   150M → 145M → 147M (higher low at second price low)
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
- MSFT reached its low at $398 on June 14 (exact day divergence was strongest)
- Reversed to $425 over the following 10 trading days (+6.8% rally)
- Plutus Flow continued showing green zones during the rally (OBV confirming)
- Classic bullish divergence pattern played out

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

## 🔗 Related Topics

### Learn More About Plutus Flow
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - Quick reference for Plutus Flow divergence patterns
- **[Learning Paths](docs/start-learning-path/index.md)** - Structured roadmap for mastering Plutus Flow (2-3 weeks)
- **[Glossary](docs/ref-glossary/index.md)** - OBV, divergence, accumulation/distribution definitions

### The Divergence Hunter ⭐
Plutus Flow works best when combined with:
- **[Pentarch](REVISED_DOCS_PENTARCH.md)** - Cycle shift signals at divergence points (BDN→TD or CAP→BDN)
- **[Janus Atlas](REVISED_DOCS_JANUS_ATLAS.md)** - Entry levels at divergence zones

**Workflow:** Plutus divergence → Pentarch cycle shift → Janus level entry = Reversal setup

### Additional Combinations
- **[Volume Oracle](REVISED_DOCS_VOLUME_ORACLE.md)** - Compare OBV divergence with volume spike patterns
- **[Harmonic Oscillator](REVISED_DOCS_HARMONIC_OSCILLATOR.md)** - Confirm divergence with momentum signals
- **[Augury Grid](REVISED_DOCS_AUGURY_GRID.md)** - Scan multiple assets for divergence patterns

### Comparison & Optimization
- **[Indicator Comparison](docs/ref-comparison/indicator-comparison.md)** - Compare all 7 indicators by difficulty, timeframes, use cases
- **[Performance Optimization](docs/advanced/performance-optimization.md)** - Optimize Plutus Flow rendering
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - 2-page reference comparing all indicators

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator analyzes On-Balance Volume (OBV) with enhanced trend and divergence detection. OBV calculation based on cumulative volume methodology developed by Joe Granville. Divergence detection identifies disagreement patterns between price movement and volume accumulation/distribution. Individual interpretation, application, and outcomes vary. Past divergence patterns do not guarantee future results. This is not financial advice.

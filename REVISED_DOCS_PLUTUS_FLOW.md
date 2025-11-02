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

## 📊 Educational Example: Bitcoin (November 2024)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**4-Hour Chart Observation:**

| Date | Price | OBV Line | Trend Ribbon | Divergence | Analysis |
|------|-------|----------|--------------|------------|----------|
| Nov 4 | $64,500 | 150M | Green | None | Price + volume aligned |
| Nov 5 | $63,200 | 148M | Red | None | Price down, OBV down |
| Nov 6 | $62,800 | 149M | Red | Bull Div | Price lower low, OBV higher low |
| Nov 7 | $64,000 | 152M | Green | None | Price + volume rise together |
| Nov 8 | $66,200 | 156M | Green | None | Uptrend continues |

**Pattern Observed:** Bullish divergence appeared Nov 6 when price made lower low ($62,800 < $63,200) but OBV made higher low (149M > 148M). This indicated accumulation despite lower price.

**Outcome:** +$3,400 rally observed from divergence point ($62,800 → $66,200).

*This example demonstrates divergence detection. Individual interpretation and outcomes vary.*

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

## 📖 Educational Example: S&P 500 Futures (January 2025)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**1-Hour Chart - Complete Analysis:**

### Initial Conditions (Jan 8, 10:00 AM)

**Price:** 4,780 (local high)  
**OBV:** 850M  
**Ribbon:** Green (bullish volume trend)

### Sequence Observed

| Date/Time | Price | OBV | Ribbon | Pattern | Analysis |
|-----------|-------|-----|--------|---------|----------|
| Jan 8, 10am | 4,780 | 850M | Green | Peak | Price and volume at highs |
| Jan 8, 6pm | 4,760 | 845M | Green | Decline | Price down, OBV down |
| Jan 9, 10am | 4,785 | 840M | Red | Bear Div | Price higher high, OBV lower high |
| Jan 9, 4pm | 4,770 | 835M | Red | Confirmed | Ribbon flipped red |
| Jan 10, 10am | 4,740 | 825M | Red | Decline | Downtrend continues |
| Jan 10, 4pm | 4,730 | 826M | Red | Bull Div | Price lower low, OBV higher low |
| Jan 11, 12pm | 4,755 | 832M | Green | Reversal | Ribbon flipped green |

### Key Observations

**Bearish Divergence (Jan 9):**
- Price made higher high: 4,785 > 4,780
- OBV made lower high: 840M < 850M
- Ribbon flipped red confirming volume weakness
- Result: -45 point decline to 4,740

**Bullish Divergence (Jan 10):**
- Price made lower low: 4,730 < 4,740
- OBV made higher low: 826M > 825M
- Ribbon flipped green confirming volume strength
- Result: +25 point bounce to 4,755

**Complete Cycle:** Two divergences correctly identified transitions at both trend change points.

*This example demonstrates complete divergence cycle. Individual interpretation and outcomes vary.*

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

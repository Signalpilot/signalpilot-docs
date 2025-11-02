# Pentarch v1.0 — Five Cycle Events

Cycle phase detection indicator. Identifies market position across five distinct phases: accumulation, markup, distribution, climax, and decline.

---

## 🎯 Core Functionality

Pentarch displays signal labels when four-layer detection conditions align at bar close. Five event types appear as colored labels on the chart:

- **TD (Touchdown)** - Label below candle
- **IGN (Ignition)** - Label below candle
- **WRN (Warning)** - Label above candle
- **CAP (Climax)** - Label above candle
- **BDN (Breakdown)** - Label above candle

**Color Customization:** Multiple color palettes available in settings. Default palette: TD (purple), IGN (teal), WRN (yellow), CAP (orange), BDN (red). All event colors can be customized to individual preferences.

**Detection Method:** Four-layer confirmation system analyzes regime classification, pilot line distance, momentum validation, and bar close confirmation. Signals appear only when all layers align.

**Timeframe Compatibility:** Works on all timeframes.

---

## ⚙️ Settings

Available configuration options:

| Setting | Options | Default |
|---------|---------|---------|
| **Alert Toggles** | TD, IGN, WRN, CAP, BDN (individual on/off) | All enabled |
| **Color Palette** | 5 preset schemes available | Scheme 1 |
| **Label Position** | Above/Below candle | Auto-positioned |
| **Label Size** | Small, Medium, Large | Medium |

**Note:** Color customization available for all five event types in indicator settings.

---

## 📊 Educational Example: Bitcoin (December 2024)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**Observed Signal Sequence:**

| Date | Signal | Price | Phase |
|------|--------|-------|-------|
| Dec 15 | TD | $42,500 | Accumulation conditions detected |
| Dec 18 | IGN | $43,800 | Markup conditions detected |
| Dec 22 | WRN | $47,200 | Distribution conditions detected |
| Dec 26 | Price | $44,900 | Price change observed |

**Pattern Observed:** TD → IGN → WRN → Price decline

**Outcome:** +$4,700 move from TD to WRN peak, then -$2,300 decline from WRN.

*This example shows historical signal appearance. Individual interpretation and outcomes vary. No pattern guarantees any specific outcome.*

---

## 🔢 The Five Cycle Events

**Note on Colors:** Pentarch includes multiple color palettes for the five event labels. Default palette: TD (purple), IGN (teal), WRN (yellow), CAP (orange), BDN (red). Colors can be customized in indicator settings.

---

### 🟣 TD — Touchdown (Accumulation Phase)

**Visual Display:** "TD" label appears below candle
**Default Color:** Purple (customizable)

**Detection Conditions:**
- Price extended below Pilot Line threshold
- Oversold regime conditions present
- NanoFlow momentum validates
- All conditions confirm at bar close

**Phase Indication:** Accumulation phase conditions detected. Signals potential transition from decline into accumulation.

**Example:** Stock declines from $100 to $85, TD signal appears → Accumulation phase identified.

---

### 🩵 IGN — Ignition (Markup Phase)

**Visual Display:** "IGN" label appears below candle
**Default Color:** Teal (customizable)

**Detection Conditions:**
- Momentum breakout conditions met
- Bullish structure shift confirmed
- All four detection layers aligned
- Bar close confirmation

**Phase Indication:** Markup phase beginning detected. Signals potential transition from accumulation into bullish momentum.

**Example:** After TD at $85, IGN appears at $87 → Markup phase identified.

---

### 🟡 WRN — Warning (Distribution Phase)

**Visual Display:** "WRN" label appears above candle
**Default Color:** Yellow (customizable)

**Detection Conditions:**
- Price extended above Pilot Line threshold
- Overbought regime conditions present
- Momentum weakening characteristics
- Distribution phase indicators present

**Phase Indication:** Distribution phase conditions detected. Signals potential transition from markup into distribution.

**Example:** Stock rallies to $115, WRN appears → Distribution phase identified.

---

### 🟠 CAP — Climax (Climax Phase)

**Visual Display:** "CAP" label appears above candle
**Default Color:** Orange (customizable)

**Detection Conditions:**
- Extreme extension from Pilot Line
- Climax exhaustion across all layers
- Peak momentum characteristics
- Bar close confirmation

**Phase Indication:** Climax phase conditions detected. Signals late-cycle exhaustion characteristics.

**Example:** After WRN at $115, CAP appears at $120 → Climax phase identified.

---

### 🔴 BDN — Breakdown (Decline Phase)

**Visual Display:** "BDN" label appears above candle
**Default Color:** Red (customizable)

**Detection Conditions:**
- Bearish structure break confirmed
- Decline phase characteristics present
- Four-layer bearish alignment
- Bar close confirmation

**Phase Indication:** Decline phase initiation detected. Signals transition from climax into decline cycle.

**Example:** After CAP at $120, BDN appears at $113 → Decline phase identified.

---

## 📚 Signal Sequence Patterns

Pentarch displays various signal sequences. Some observed patterns include:

**Full Cycle Pattern:**
```
TD → IGN → WRN → CAP → BDN
(Complete cycle: Accumulation through Decline)
```

**Partial Cycle Patterns:**
```
TD → IGN (Early cycle only)
WRN → CAP (Late cycle only)
IGN → WRN (Markup to distribution)
```

**Reversal Patterns:**
```
BDN → TD → IGN (Decline to markup reversal)
CAP → BDN → TD (Climax to accumulation)
```

*Interpretation of these patterns varies based on individual methodology. No pattern guarantees any specific outcome.*

---

## 📖 Educational Example: S&P 500 Futures (January 2025)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**4-Hour Chart — Full Cycle Observation:**

| Date/Time | Signal | Price | Phase | Notes |
|-----------|--------|-------|-------|-------|
| Jan 5, 8am | TD | 4,650 | Accumulation | Oversold conditions |
| Jan 6, 4pm | IGN | 4,685 | Markup | Momentum breakout |
| Jan 9, 12pm | WRN | 4,755 | Distribution | Extended conditions |
| Jan 10, 8am | CAP | 4,780 | Climax | Exhaustion detected |
| Jan 11, 4pm | BDN | 4,720 | Decline | Structure break |

**Observed Move:** TD to CAP = +130 points, CAP to BDN = -60 points

**Pattern Type:** Complete five-event cycle observed over 6 trading days.

*This example demonstrates signal appearance sequence. Individual interpretation and subsequent actions vary.*

---

## 🎯 The Pilot Line — Trend Reference

**Visual Display:** Line on chart tracking dynamic trend position

**Functionality:**
- Adaptive trend line adjusts to price movement
- Serves as reference for signal distance calculations
- Changes color based on regime classification
- Updates continuously with each bar

**Distance Measurement:**
- TD signals: Price extended below line
- IGN signals: Price structure shifts bullish relative to line
- WRN signals: Price extended above line
- CAP signals: Extreme extension above line
- BDN signals: Price breaks below line bearishly

**Color States:**
- Blue = Bearish regime identified
- Green = Bullish regime identified
- Gray = Neutral/transitional conditions

*Pilot Line provides visual reference for cycle position. Interpretation varies by individual approach.*

---

## 🎨 Regime Bar Colors — Market Structure Visualization

**Visual Display:** Candle body colors change based on regime classification

**Color Meanings:**

| Color | Regime | Conditions |
|-------|--------|------------|
| **Green** | Bullish | Price structure shows bullish characteristics |
| **Red** | Bearish | Price structure shows bearish characteristics |
| **Gray** | Neutral | Transitional or unclear structure |

**Functionality:**
- Updates every bar based on regime analysis
- Provides visual context for signal appearance
- Independent of signal generation

**Relationship to Signals:**
- IGN signals appear during bullish regime transitions
- BDN signals appear during bearish regime transitions
- TD/WRN/CAP can appear in various regimes

*Regime colors provide structure context. Individual interpretation varies.*

---

## ⚡ NanoFlow — Momentum Component

**Visual Display:** Momentum oscillator in separate panel below chart

**Functionality:**
- Measures short-term momentum characteristics
- Oscillates between -100 and +100
- Color-coded: Green (bullish momentum), Red (bearish momentum)
- Updates each bar

**Signal Relationship:**
- IGN signals require bullish momentum validation
- BDN signals require bearish momentum validation
- TD/WRN/CAP require specific momentum thresholds

**Zero Line:**
- Above zero = Bullish momentum characteristics
- Below zero = Bearish momentum characteristics
- Crosses provide momentum shift indication

*NanoFlow contributes to detection system. Not intended as standalone analysis tool.*

---

## 🔄 Four-Layer Detection System

**Technical Methodology:**

### Layer 1: Regime Classification
- Analyzes price structure patterns
- Identifies bullish, bearish, or neutral conditions
- Provides foundational context for signals

### Layer 2: Pilot Line Distance
- Measures price extension from adaptive trend line
- Calculates relative distance thresholds
- Determines oversold/overbought conditions

### Layer 3: NanoFlow Momentum
- Validates momentum characteristics
- Confirms directional bias
- Checks threshold requirements

### Layer 4: Bar Close Confirmation
- All conditions must hold at bar close
- Prevents mid-bar false signals
- Ensures stability before signal display

**Signal Generation:** Signals appear only when all four layers confirm simultaneously at bar close. No mid-bar signals occur.

---

## 🔔 Alert Configuration

**Available Alert Options:**

| Alert Type | Trigger Condition | Notification |
|------------|-------------------|--------------|
| **TD Alert** | TD signal appears at bar close | "Pentarch: TD signal" |
| **IGN Alert** | IGN signal appears at bar close | "Pentarch: IGN signal" |
| **WRN Alert** | WRN signal appears at bar close | "Pentarch: WRN signal" |
| **CAP Alert** | CAP signal appears at bar close | "Pentarch: CAP signal" |
| **BDN Alert** | BDN signal appears at bar close | "Pentarch: BDN signal" |

**Configuration:**
- Each alert can be enabled/disabled individually
- Alerts fire once per signal appearance
- No duplicate alerts for same signal
- Compatible with TradingView alert system

---

## ❓ Frequently Asked Questions

### Q: When do signals appear?
**A:** Signals appear when all four detection layers confirm simultaneously at bar close. No mid-bar signals occur.

### Q: Can signals repaint?
**A:** No. All signals confirm at bar close and do not change retroactively.

### Q: How many signals appear on average?
**A:** Signal frequency varies by asset, timeframe, and market conditions. Some periods show frequent signals, others show sparse signals.

### Q: Do all five signals always appear?
**A:** No. Partial cycles occur more often than complete cycles. Complete five-event cycles appear less often than partial sequences.

### Q: What timeframes work?
**A:** All timeframes supported. Signal characteristics may vary across different timeframe selections.

### Q: Can multiple signals appear on same bar?
**A:** No. Only one signal type appears per bar close.

### Q: What if I miss a signal?
**A:** Signals remain on chart after appearance. Historical signals visible on past bars.

### Q: How do I customize colors?
**A:** Open indicator settings → Navigate to color section → Select from 5 preset palettes or customize individual event colors.

### Q: Does Pentarch work on futures/forex/crypto?
**A:** Yes. Compatible with all asset types available on TradingView.

### Q: Can I use Pentarch with other indicators?
**A:** Yes. Pentarch can be combined with other analysis tools. Compatibility with entire Signal Pilot suite available.

---

## 📋 Quick Reference Guide

### Signal Quick Reference

| Signal | Position | Default Color | Phase | Key Characteristics |
|--------|----------|---------------|-------|---------------------|
| **TD** | Below candle | Purple | Accumulation | Oversold, below Pilot Line |
| **IGN** | Below candle | Teal | Markup | Momentum breakout, structure shift |
| **WRN** | Above candle | Yellow | Distribution | Extended, momentum weakening |
| **CAP** | Above candle | Orange | Climax | Extreme extension, exhaustion |
| **BDN** | Above candle | Red | Decline | Structure break, bearish shift |

**Note:** Colors shown are default palette. All colors customizable in indicator settings.

### Component Quick Reference

| Component | Location | Function |
|-----------|----------|----------|
| **Signal Labels** | On chart | Show cycle phase detection |
| **Pilot Line** | On chart | Dynamic trend reference |
| **Regime Colors** | Candle bodies | Structure visualization |
| **NanoFlow** | Bottom panel | Momentum oscillator |

### Common Signal Sequences

```
Early Cycle:  TD → IGN
Full Cycle:   TD → IGN → WRN → CAP → BDN
Late Cycle:   WRN → CAP → BDN
Reversal:     BDN → TD → IGN
```

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator provides cycle phase detection based on technical analysis methodology. All signals represent historical condition detection. Individual interpretation, application, and outcomes vary. Past signal patterns do not guarantee future results. This is not financial advice.

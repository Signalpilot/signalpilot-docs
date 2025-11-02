# Harmonic Oscillator v1.0 — Five-Oscillator Consensus System

Momentum indicator combining five technical oscillators into unified signal system. Displays BUY, SELL, NEUT, and STRONG signals based on multi-oscillator agreement.

---

## 🎯 Core Functionality

Harmonic Oscillator analyzes five separate momentum oscillators simultaneously and generates signals when multiple oscillators agree on direction.

**The Five Oscillators:**
1. RSI (Relative Strength Index)
2. Stochastic Oscillator
3. CCI (Commodity Channel Index)
4. Williams %R
5. MFI (Money Flow Index)

**Voting System:** Each oscillator "votes" bullish, bearish, or neutral. Signals appear based on vote counts:

- **BUY Signal:** 3+ oscillators vote bullish
- **SELL Signal:** 3+ oscillators vote bearish  
- **STRONG Signal:** 4-5 oscillators vote same direction (enhanced agreement)
- **NEUT Signal:** No clear agreement (2 or fewer either direction)

**Visual Display:** Signal labels appear below (BUY/STRONG bullish) or above (SELL/STRONG bearish) candles at bar close.

**Timeframe Compatibility:** Works on all timeframes.

---

## 📊 Educational Example: Bitcoin (November 2024)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**4-Hour Chart Observation:**

| Date/Time | Price | Oscillator Votes | Signal | Analysis |
|-----------|-------|------------------|--------|----------|
| Nov 5, 8pm | $63,500 | RSI: Bullish, Stoch: Bullish, CCI: Bullish, Williams: Neutral, MFI: Bullish | **BUY** | 4 of 5 vote bullish |
| Nov 6, 4am | $64,200 | All 5 oscillators: Bullish | **STRONG** | Unanimous agreement |
| Nov 7, 12pm | $67,800 | RSI: Bearish, Stoch: Bearish, CCI: Bearish, Williams: Neutral, MFI: Neutral | **SELL** | 3 of 5 vote bearish |
| Nov 8, 8am | $66,100 | Votes split: 2 bullish, 2 bearish, 1 neutral | **NEUT** | No consensus |

**Pattern Observed:** BUY signal at $63,500 preceded +$4,300 rally to $67,800 where SELL signal appeared.

**Outcome:** +6.8% move from BUY to SELL signal.

*This example demonstrates signal sequence. Individual interpretation and outcomes vary.*

---

## ⚙️ Settings

### Oscillator Configuration

Each of the five oscillators can be customized individually:

| Oscillator | Adjustable Parameters | Default |
|------------|----------------------|---------|
| **RSI** | Period, Overbought, Oversold | 14, 70, 30 |
| **Stochastic** | %K Period, %D Period, Smooth | 14, 3, 3 |
| **CCI** | Period | 20 |
| **Williams %R** | Period | 14 |
| **MFI** | Period | 14 |

### Signal Configuration

| Setting | Options | Default |
|---------|---------|---------|
| **Vote Threshold** | 3, 4, or 5 required votes | 3 |
| **Strong Threshold** | 4 or 5 required votes | 4 |
| **Signal Display** | Labels on/off | On |
| **Alert Toggles** | Individual signal alerts | All enabled |

### Display Options

| Setting | Options | Default |
|---------|---------|---------|
| **Signal Labels** | On chart or panel | On chart |
| **Oscillator Panel** | Show/Hide individual oscillators | Hidden |
| **Color Scheme** | Multiple palettes | Scheme 1 |

---

## 🔢 The Four Signal Types

### 🟢 BUY Signal

**Visual Display:** "BUY" label below candle (green)

**Voting Conditions:**
- 3 or more oscillators indicate bullish momentum
- Maximum 2 oscillators vote bearish or neutral
- Confirms at bar close

**Interpretation:** Multiple momentum indicators show bullish characteristics simultaneously.

**Example:** RSI bullish (45), Stochastic bullish (K>D), CCI bullish (>0), Williams neutral, MFI neutral → 3 bullish votes = BUY signal

---

### 🔴 SELL Signal

**Visual Display:** "SELL" label above candle (red)

**Voting Conditions:**
- 3 or more oscillators indicate bearish momentum
- Maximum 2 oscillators vote bullish or neutral
- Confirms at bar close

**Interpretation:** Multiple momentum indicators show bearish characteristics simultaneously.

**Example:** RSI bearish (55), Stochastic bearish (K<D), CCI bearish (<0), Williams bearish, MFI neutral → 4 bearish votes = SELL signal

---

### ⚡ STRONG Signal

**Visual Display:** "STRONG" label below candle (bright green) or above candle (bright red)

**Voting Conditions:**
- 4 or 5 oscillators agree on same direction
- Near-unanimous or unanimous consensus
- Enhanced agreement compared to regular BUY/SELL

**Interpretation:** Exceptional multi-oscillator alignment indicating strong momentum consensus.

**Example Bullish:** All 5 oscillators vote bullish → STRONG signal (green)

**Example Bearish:** 4 oscillators vote bearish, 1 neutral → STRONG signal (red)

---

### ⚪ NEUT Signal

**Visual Display:** "NEUT" label on candle (gray)

**Voting Conditions:**
- No clear majority (2 or fewer votes either direction)
- Oscillators show divergent or conflicting readings
- Lack of momentum consensus

**Interpretation:** Oscillators disagree on direction, suggesting choppy or transitional conditions.

**Example:** RSI neutral, Stoch bullish, CCI bearish, Williams neutral, MFI bearish → 2 bearish, 1 bullish, 2 neutral = NEUT signal

---

## 📚 Understanding the Voting System

### Vote Assignment Logic

Each oscillator "votes" based on its current reading:

**RSI (Relative Strength Index):**
- Bullish vote: RSI rising and below overbought (< 70)
- Bearish vote: RSI falling and above oversold (> 30)
- Neutral vote: RSI in middle range without clear direction

**Stochastic Oscillator:**
- Bullish vote: %K crosses above %D
- Bearish vote: %K crosses below %D
- Neutral vote: No recent cross, lines parallel

**CCI (Commodity Channel Index):**
- Bullish vote: CCI > 0 (above average price)
- Bearish vote: CCI < 0 (below average price)
- Neutral vote: CCI near zero (-20 to +20)

**Williams %R:**
- Bullish vote: Williams > -80 (above oversold)
- Bearish vote: Williams < -20 (below overbought)
- Neutral vote: Williams in middle range

**MFI (Money Flow Index):**
- Bullish vote: MFI rising with positive volume flow
- Bearish vote: MFI falling with negative volume flow
- Neutral vote: MFI range-bound without clear volume bias

### Agreement Threshold

**3-Vote Threshold (Default):**
- Most responsive setting
- More signals appear
- Requires simple majority (3 of 5)

**4-Vote Threshold:**
- More selective
- Fewer signals, higher agreement requirement
- Requires strong majority (4 of 5)

**5-Vote Threshold:**
- Most selective
- Rare signals, unanimous agreement required
- Only triggers when all oscillators align

*Threshold selection varies by individual approach. Higher thresholds provide fewer but higher-agreement signals.*

---

## 📖 Educational Example: S&P 500 Futures (January 2025)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**15-Minute Chart - Full Signal Sequence:**

| Time | Price | RSI | Stoch | CCI | Williams | MFI | Votes | Signal |
|------|-------|-----|-------|-----|----------|-----|-------|--------|
| 9:30am | 4,720 | Bullish | Bullish | Neutral | Bullish | Bearish | 3 Bull | **BUY** |
| 10:45am | 4,735 | Bullish | Bullish | Bullish | Bullish | Bullish | 5 Bull | **STRONG** |
| 1:15pm | 4,755 | Bearish | Neutral | Bearish | Bearish | Neutral | 3 Bear | **SELL** |
| 2:30pm | 4,748 | Bearish | Neutral | Neutral | Bullish | Bearish | 2 Bear | **NEUT** |
| 3:45pm | 4,742 | Bearish | Bearish | Bearish | Bearish | Bearish | 5 Bear | **STRONG** |

**Sequence Analysis:**

1. **BUY at 4,720:** Three oscillators agreed bullish (RSI, Stoch, Williams). Entry conditions identified.

2. **STRONG at 4,735:** All five oscillators aligned bullish. Maximum confidence conditions (+15 points from BUY).

3. **SELL at 4,755:** Three oscillators shifted bearish. Momentum reversal detected (+35 points from BUY, +20 from STRONG).

4. **NEUT at 4,748:** Oscillators diverged, no clear consensus. Transitional period identified.

5. **STRONG bearish at 4,742:** All five oscillators aligned bearish. Strong downside momentum conditions.

**Total Move:** +35 points from BUY to SELL signal.

*This example demonstrates complete signal cycle. Individual interpretation and outcomes vary.*

---

## 🎯 Signal Interpretation Patterns

### Pattern 1: BUY → STRONG Bullish Progression

**Sequence:** BUY signal followed by STRONG signal in same direction

**Interpretation:** Momentum strengthening, more oscillators joining bullish consensus

**Example:** 3 oscillators bullish (BUY) → 5 oscillators bullish (STRONG) = Momentum acceleration pattern

---

### Pattern 2: Direct STRONG Signal

**Sequence:** STRONG signal appears without preceding BUY/SELL

**Interpretation:** Rapid multi-oscillator alignment, immediate high-conviction conditions

**Example:** Neutral conditions → All oscillators suddenly align → STRONG signal = Swift momentum shift pattern

---

### Pattern 3: BUY/SELL → NEUT Transition

**Sequence:** Directional signal followed by NEUT

**Interpretation:** Consensus breaking down, momentum diverging

**Example:** SELL (3 bearish) → NEUT (oscillators diverge) = Momentum loss or consolidation pattern

---

### Pattern 4: NEUT → BUY/SELL Emergence

**Sequence:** NEUT signal followed by directional signal

**Interpretation:** Consensus forming after period of disagreement

**Example:** NEUT (choppy) → BUY (3+ bullish) = Direction emerging from neutral conditions

---

### Pattern 5: Signal Clusters

**Sequence:** Multiple signals in short time period

**Interpretation:** High volatility, oscillators responding to rapid price changes

**Example:** BUY → SELL → BUY within 1 hour = Choppy volatile conditions, whipsaw characteristics

---

## 🔔 Alert Configuration

**Available Alerts:**

| Alert Type | Trigger Condition | Notification |
|------------|-------------------|--------------|
| **BUY Signal** | 3+ oscillators vote bullish | "Harmonic: BUY signal" |
| **SELL Signal** | 3+ oscillators vote bearish | "Harmonic: SELL signal" |
| **STRONG Bullish** | 4-5 oscillators vote bullish | "Harmonic: STRONG bullish" |
| **STRONG Bearish** | 4-5 oscillators vote bearish | "Harmonic: STRONG bearish" |
| **NEUT Signal** | No clear consensus | "Harmonic: NEUT signal" |
| **Any Signal** | Any of the four signal types | "Harmonic: Signal detected" |

**Alert Setup:**
1. Open indicator settings
2. Navigate to alert section
3. Enable desired signal alerts
4. Configure notification method (popup, email, webhook)

---

## ❓ Frequently Asked Questions

### Q: Why use five oscillators instead of one?

**A:** Multiple oscillators provide consensus view. Single oscillator may give false signal while others disagree. Multi-oscillator agreement reduces single-indicator noise.

### Q: Can I disable specific oscillators?

**A:** No. All five oscillators contribute to voting system. However, individual oscillator parameters can be adjusted to change vote behavior.

### Q: What if all oscillators are neutral?

**A:** NEUT signal appears, indicating lack of directional momentum across all measurements.

### Q: How does this differ from looking at five separate indicators?

**A:** Harmonic Oscillator automates agreement analysis. Manual monitoring of five indicators requires mental calculation of consensus. This indicator performs vote counting automatically and signals only when threshold met.

### Q: Can signals repaint?

**A:** No. All signals confirm at bar close and do not change retroactively.

### Q: What vote threshold should I use?

**A:** Depends on individual preference. 3-vote threshold (default) provides more signals with simple majority. 4-vote threshold provides fewer, higher-confidence signals. 5-vote threshold provides rare unanimous signals only.

### Q: Do STRONG signals perform better than regular BUY/SELL?

**A:** STRONG signals indicate higher oscillator agreement (4-5 vs 3). Historical observation shows various outcomes. No signal type guarantees specific results.

### Q: Can I see individual oscillator readings?

**A:** Yes. Enable "Oscillator Panel" in settings to display all five oscillators in separate panel below chart.

### Q: What causes NEUT signals?

**A:** Oscillators showing divergent readings - some bullish, some bearish, some neutral. No directional consensus present. Occurs during choppy markets, consolidation, or transitional periods.

### Q: How many signals appear on average?

**A:** Signal frequency varies by asset, timeframe, and market conditions. Volatile periods show more signals. Trending periods show fewer signals.

---

## 📋 Quick Reference Guide

### Signal Summary

| Signal | Label Color | Votes Required | Agreement Level |
|--------|-------------|----------------|-----------------|
| **BUY** | Green | 3+ bullish | Simple majority |
| **SELL** | Red | 3+ bearish | Simple majority |
| **STRONG** | Bright green/red | 4-5 same direction | Strong/unanimous |
| **NEUT** | Gray | <3 either direction | No consensus |

### Oscillator Quick Reference

| Oscillator | Measures | Bullish When | Bearish When |
|------------|----------|--------------|--------------|
| **RSI** | Price momentum | Rising, <70 | Falling, >30 |
| **Stochastic** | Price position in range | %K crosses above %D | %K crosses below %D |
| **CCI** | Deviation from average | CCI > 0 | CCI < 0 |
| **Williams %R** | Overbought/oversold | > -80 | < -20 |
| **MFI** | Volume-weighted momentum | Rising, positive flow | Falling, negative flow |

### Common Signal Patterns

```
Momentum Building:   BUY → STRONG (bullish)
Momentum Fading:     BUY → NEUT
Direction Emerging:  NEUT → BUY or SELL
Momentum Reversal:   BUY → SELL (or vice versa)
High Conviction:     Direct STRONG signal
Whipsaw Conditions:  Rapid BUY ↔ SELL alternation
```

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator combines five technical oscillators (RSI, Stochastic, CCI, Williams %R, MFI) into a consensus-based signal system. All signals represent multi-oscillator agreement detection based on momentum and volume analysis methodologies. Individual interpretation, application, and outcomes vary. Past signal patterns do not guarantee future results. This is not financial advice.

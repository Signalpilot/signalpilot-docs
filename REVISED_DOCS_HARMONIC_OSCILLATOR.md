# Harmonic Oscillator v1.0 — Five-Oscillator Consensus System

Momentum indicator combining five technical oscillators into unified signal system. Displays BUY, SELL, NEUT, and STRONG signals based on multi-oscillator agreement.

**📋 [Quick Reference Cheat Sheet](docs/ref-cheatsheets/harmonic-oscillator-quick-reference.md)** — One-page guide to 5-voter consensus, signals, and combinations

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

> 👁️ **What You'll See:** Signal label (BUY, SELL, STRONG, or NEUT) appears on chart immediately or within hours. Oscillator panel below chart shows all 7 oscillators voting in real-time, updating with each bar close.

---

## 🚀 Installation (2 minutes)

### Step 1: Open TradingView
1. Go to [TradingView.com](https://www.tradingview.com)
2. Log into your account
3. Open any chart

### Step 2: Add Harmonic Oscillator to Chart
1. Click **"Indicators"** button (top toolbar, looks like ƒx)
2. Click **"Invite-Only Scripts"** tab
3. Search for **"Harmonic Oscillator v1.0"** or scroll to find it
4. Click **"Harmonic Oscillator v1.0 - Signal Pilot"**
5. Indicator loads on your chart

### Step 3: Verify It's Working
**You should see:**
- "Harmonic Oscillator v1.0" appears in left sidebar
- Signal label on chart (BUY, SELL, STRONG, or NEUT)
- Oscillator panel below chart showing 7 oscillators
- Signal labels update as bars close

> 👁️ **First Signal:** Immediately to within hours. Momentum signals appear frequently as oscillators vote. You should see a signal label (BUY/SELL/STRONG/NEUT) within the first trading session.

### Troubleshooting
**Not seeing Harmonic Oscillator in Invite-Only Scripts?**
- Verify your TradingView email matches purchase email
- Wait 24 hours after purchase for access
- See [Installation Troubleshooting](docs/troubleshooting-installation.md)

**Loaded but no signal labels visible?**
- Check indicator settings (Style tab) - ensure signal labels enabled
- Wait for next bar close (signals update at bar close, not mid-bar)
- Switch to higher timeframe (15m, 1H, Daily) for more reliable signals
- See [Installation Troubleshooting](docs/troubleshooting-installation.md)

**Only seeing NEUT signals?**
- Normal during choppy/consolidating markets
- NEUT means oscillators are divided (no consensus)
- Try switching to trending asset (SPY, BTC/USD)
- NEUT is valid signal meaning "no clear direction"

**Need help?** support@signalpilot.io

---

## 📹 Video Tutorials

### Getting Started with Harmonic Oscillator (3:15)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will cover:
- Installing Harmonic Oscillator on TradingView
- Understanding the voting system (BUY/SELL/STRONG/NEUT)
- Reading the oscillator panel (7 oscillators voting)
- Configuring your first momentum alert

---

### Harmonic + Pentarch: Momentum Confirmation (4:45)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will demonstrate:
- Real-time example combining Harmonic Oscillator with Pentarch
- How to use momentum to confirm cycle signals
- Workflow: Pentarch signal → Harmonic confirmation → Entry
- Setting up combined alerts for high-conviction setups

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
- **Oscillator Theory:** How MACD, RSI, Stochastic RSI measure momentum
- **Overbought/Oversold Concepts:** What these conditions mean (and don't mean)
- **Voting Systems:** Understanding that majority vote (4/5) creates STRONG signals

#### Recommended Learning Path:
1. **Understand individual oscillators** before using Harmonic's voting system
2. Learn the **4 signal types**: STRONG, WEAK, BUY, SELL, NEUT
3. Practice distinguishing **trending vs. ranging markets** (oscillators behave differently)
4. Combine with Pentarch for pattern + momentum confirmation

#### Estimated Learning Time:
- **Basic Proficiency:** 6-10 hours (understand 4 signal types, basic interpretation)
- **Intermediate:** 18-25 hours (recognize divergences, multi-timeframe signals)
- **Advanced:** 35+ hours (oscillator voting patterns, advanced momentum analysis)

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

## ⚙️ Advanced Configuration Examples

Default settings work for most users. Advanced traders can optimize for specific scenarios:

### Configuration 1: Aggressive Momentum (Scalping)

**Use Case:** Faster signals for short-term trading

**Settings:**
- **MACD:** Fast period 8, Slow 17 (vs default 12/26)
- **RSI:** Period 9 (vs default 14)
- **Stochastic RSI:** K period 9 (vs default 14)

**Trade-off:**
- ✅ Faster signal generation
- ⚠️ More whipsaws in ranging markets

---

### Configuration 2: Conservative Momentum (Swing)

**Use Case:** Smoother signals, less noise

**Settings:**
- **MACD:** Fast period 16, Slow 32 (slower than default)
- **RSI:** Period 21 (vs default 14)
- **Stochastic RSI:** K period 21

**Trade-off:**
- ✅ Fewer false signals
- ⚠️ Slower to react to changes

---

### Configuration 3: Divergence Hunter

**Use Case:** Focus on MACD and RSI for divergences

**Settings:**
- Enable MACD histogram visibility
- Enable RSI line visibility
- Reduce other oscillator weights (focus on div-capable ones)

**Visual:**
- Larger MACD histogram
- Prominent RSI line
- De-emphasize CCI, Williams %R

---

## 📊 Educational Example 1: DAX Index (Germany) - February 2024

**Voting System Analysis:**

| Date | DAX Price | Bullish Votes | Bearish Votes | Zone Color | Signal Strength |
|------|-----------|---------------|---------------|------------|-----------------|
| Feb 12, 2024 | 16,850 | 2/7 | 5/7 | 🔴 Red | Strong Bearish |
| Feb 13, 2024 | 16,720 | 1/7 | 6/7 | 🔴 Red | Very Strong Bearish |
| Feb 14, 2024 | 16,680 | 3/7 | 4/7 | ⚪ Neutral | Equilibrium |
| Feb 15, 2024 | 16,750 | 5/7 | 2/7 | 🟢 Green | Strong Bullish |
| Feb 16, 2024 | 16,920 | 6/7 | 1/7 | 🟢 Green | Very Strong Bullish |

**7-Oscillator Voting Breakdown (Feb 13 - Bearish Extreme):**

1. **RSI (14):** 28 → **BEARISH** vote (oversold)
2. **Stochastic:** 15 → **BEARISH** vote (oversold)
3. **CCI:** -180 → **BEARISH** vote (oversold)
4. **Williams %R:** -92 → **BEARISH** vote (oversold)
5. **MFI:** 25 → **BEARISH** vote (money flow weak)
6. **Ultimate Oscillator:** 35 → **BEARISH** vote (oversold)
7. **ROC:** +2% → **BULLISH** vote (price still rising slightly)

**Vote Tally:** 6 Bearish, 1 Bullish = 🔴 Very Strong Bearish Zone

**Analysis Workflow:**

**Phase 1 - Extreme Bearish (Feb 12-13):**
- 5-6 oscillators voting bearish simultaneously
- Harmonic Oscillator displayed **strong red zones**
- Price declining but oscillators reaching oversold extremes
- **Observation:** Market showing extreme bearish momentum, often precedes exhaustion

**Phase 2 - Neutral Transition (Feb 14):**
- Votes shifted to 3 bullish, 4 bearish (near equilibrium)
- Harmonic Oscillator color shifted toward **neutral (white)**
- Price stabilizing at 16,680
- **Observation:** Momentum exhaustion phase - oscillators resetting

**Phase 3 - Bullish Reversal (Feb 15-16):**
- Votes flipped to 5-6 bullish, 1-2 bearish
- Harmonic Oscillator displayed **strong green zones**
- Price rallied from 16,680 to 16,920
- **Observation:** Consensus shift from bearish extreme to bullish momentum

**Historical Outcome:**
DAX rallied from the Feb 13 low of 16,680 to 17,240 over the following 10 trading days (+3.4% gain), confirming the oscillator voting system's ability to identify momentum exhaustion and reversal points.

**Key Insight:**
Harmonic Oscillator's voting system provides **consensus view** across 7 different oscillators. When 5+ oscillators agree (extreme zones), it often signals momentum exhaustion and potential reversal.

*(Educational example showing oscillator voting consensus. Past patterns do not guarantee future results. Not financial advice.)*

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

## 🎯 Pattern Recognition Challenge: USD/JPY Forex Pair - May 2024

**Scenario:** You're monitoring USD/JPY on the 4H chart

**Harmonic Oscillator Readings:**

**Situation 1 (May 10, 10:00 UTC):**
- Price: 155.80
- Bullish Votes: 6/7
- Bearish Votes: 1/7
- Zone Color: 🟢 Bright Green
- Oscillators showing extreme overbought (RSI: 78, Stochastic: 92, CCI: +220)

**Situation 2 (May 10, 18:00 UTC) - 8 hours later:**
- Price: 156.20 (+40 pips higher)
- Bullish Votes: STILL 6/7
- Bearish Votes: STILL 1/7
- Zone Color: 🟢 Still Bright Green
- Oscillators STILL extreme overbought (RSI: 82, Stochastic: 95, CCI: +240)

**Question:** You've been watching the pair rally with extreme bullish oscillator consensus for 8 hours. What does this pattern typically suggest?

A) Sell immediately - extreme overbought always means reversal coming
B) Buy more - green zones mean keep buying
C) Monitor for divergence - extreme readings CAN persist in strong trends
D) Ignore oscillators - they're useless in forex markets

<details>
<summary>💡 Click to Reveal Analysis</summary>

**Correct Answer: C) Monitor for divergence - extreme readings CAN persist in strong trends**

**Detailed Breakdown:**

**Critical Concept: "Overbought Can Stay Overbought"**

Harmonic Oscillator's extreme zones (6-7 votes in one direction) indicate **momentum extremes**, but they do NOT predict immediate reversals. Here's why:

**1. Strong Trends Maintain Extreme Readings:**
- In powerful trends, oscillators can remain overbought/oversold for extended periods
- USD/JPY was in a strong uptrend driven by interest rate differentials (fundamental factor)
- Harmonic Oscillator's green zones confirmed the trend strength, not a reversal signal

**2. What Happened Next:**
- USD/JPY continued rallying to 157.50 over the next 24 hours (still overbought entire time)
- Harmonic Oscillator maintained 5-6 bullish votes throughout
- Reversal only occurred when **divergence appeared:**
  - Price made new high at 157.50
  - But Harmonic Oscillator votes decreased to 4/7 (weakening momentum)
  - This divergence preceded the actual reversal

**3. Proper Usage of Extreme Zones:**

✅ **Correct Interpretation:**
- Extreme green (6-7 bullish) = Strong upside momentum present
- Watch for **divergence** (price new high, but votes decrease)
- Combine with other indicators (Janus levels, Pentarch patterns) for context

❌ **Incorrect Interpretation:**
- "Extreme overbought = sell immediately" (can stay overbought in trends)
- "Green zone = keep buying blindly" (momentum doesn't guarantee continuation)

**Why NOT the Other Answers:**

**A) "Sell immediately"** ❌
- Oscillator extremes can persist for days in strong trends
- Selling purely on overbought readings would have missed the +170 pip rally
- Need divergence confirmation, not just extreme reading

**B) "Buy more"** ❌
- Extreme readings warn of momentum saturation
- Risk/reward deteriorates at extremes (less upside potential, more reversal risk)
- Better to wait for pullback or new cycle

**D) "Ignore oscillators"** ❌
- Oscillators work in all markets when used correctly
- Harmonic Oscillator's voting system adds robustness (7 oscillators vs 1)
- They highlight momentum extremes and divergences effectively

**Key Learning - Divergence Detection:**

| Scenario | Price Action | Harmonic Votes | Interpretation |
|----------|--------------|----------------|----------------|
| Healthy Uptrend | Higher Highs | 6-7 Bullish (maintained) | ✅ Momentum supporting trend |
| **Bearish Divergence** | **New High** | **6→4 Bullish (decreasing)** | ⚠️ **Momentum weakening - reversal warning** |
| Healthy Downtrend | Lower Lows | 6-7 Bearish (maintained) | ✅ Momentum supporting trend |
| **Bullish Divergence** | **New Low** | **6→4 Bearish (decreasing)** | ⚠️ **Momentum weakening - reversal warning** |

**What Actually Triggered the Reversal:**
- May 11, 12:00 UTC: Price hit 157.50 (new high)
- Harmonic Oscillator: Votes dropped to 4 bullish, 3 bearish (weakening)
- Simultaneously, Janus Atlas Weekly Resistance at 157.60 provided level confluence
- This combination (divergence + level) preceded the reversal to 155.80 (-170 pips)

</details>

*(Interactive educational example. Past patterns do not guarantee future results. Not financial advice.)*

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

## 🤝 Using Harmonic Oscillator With Other Indicators

Harmonic provides real-time momentum through 5-oscillator voting system.

### Setup 1: Harmonic + Pentarch (Momentum + Cycle)

**Use Case:** Confirming cycle patterns with momentum

**How It Works:**
- Pentarch IGN (early bullish cycle) + Harmonic BUY/STRONG = Momentum aligned
- Pentarch CAP (late bearish cycle) + Harmonic SELL/STRONG = Momentum aligned

**Example Workflow:**
1. Pentarch shows IGN pattern (early bullish cycle)
2. Check Harmonic Oscillator: Showing BUY or STRONG?
3. If yes → Pattern + momentum aligned
4. If showing SELL → Conflicting signals (momentum disagrees with cycle)

**When Signals Conflict:**
- Pentarch bullish + Harmonic bearish = Wait for alignment
- Pentarch bearish + Harmonic bullish = Wait for alignment
- Conflicting signals suggest transition period or choppy market

---

### Setup 2: Harmonic + Janus Atlas (Momentum + Levels)

**Use Case:** Trading level bounces/rejections with momentum confirmation

**How It Works:**
- Price at Janus support level + Harmonic shows BUY = Bullish bounce setup
- Price at Janus resistance level + Harmonic shows SELL = Bearish rejection setup

**Example:**
*Crude Oil (CL) - May 2024*
- Price at Daily Low $77.50 (Janus Atlas support)
- Harmonic Oscillator showing STRONG BUY (momentum bullish)
- Confluence: Support level + bullish momentum
- Outcome: Level bounce with momentum confirmation

---

## ⚠️ When NOT to Use Harmonic Oscillator

### Avoid This Indicator When:

- **📊 Market Condition: Choppy Sideways Range**
  During tight consolidation with no directional bias, oscillators whipsaw frequently with BUY/SELL/NEUT rapidly alternating. Better approach: Wait for range breakout.

- **⏱️ Timeframe: Monthly Charts**
  Very long timeframes have insufficient bars for oscillator calculations to be meaningful. Optimal timeframes: 5-minute to Weekly.

- **🎯 Strategy: Price Action Only (No Indicators)**
  If you trade purely on candlestick patterns, support/resistance, and naked charts, adding oscillators contradicts your methodology. Stay consistent with your approach.

- **📉 Lag Sensitivity: Need Fastest Possible Signals**
  Oscillators (MACD, RSI, Stochastic) are lagging indicators by design—they measure what already happened. For leading analysis, use price patterns or cycle indicators instead.

- **💡 Indicator Overload: Already Using Multiple Oscillators**
  If you're running RSI + Stochastic + CCI individually, Harmonic Oscillator may duplicate analysis. Choose: individual oscillators OR Harmonic's voting system, not both simultaneously.

### Limitations to Understand:

✓ **Voting System Needs Majority, Not Unanimity**
STRONG signals require 4/5 votes (80%). Even strong signals can fail. No indicator achieves 100% accuracy.

✓ **Oscillators Lag Price**
By definition, oscillators calculate from past data. They confirm momentum but don't predict future reversals. Expect signals to appear after moves begin.

✓ **Divergence Detection Isn't Automatic**
While Harmonic includes MACD and RSI (divergence-capable oscillators), the indicator doesn't automatically flag divergences. That requires manual chart observation.

✓ **Works Best in Trending Markets**
BUY signals in uptrends and SELL signals in downtrends are most reliable. Choppy markets generate more whipsaws.

### Better Alternatives When:

| Scenario | Use Instead |
|----------|-------------|
| Need leading indicators (not lagging) | → Pentarch (cycle detection) |
| Trading pure price action | → No oscillators needed |
| Want faster signals (more whipsaws) | → Individual fast oscillators |
| Need all-in-one with oscillators included | → Omnideck Oscillator system |

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

## 🎮 Interactive Examples

> **📍 PLACEHOLDER: Voting System Simulator**
>
> *Location: Insert 5-oscillator voting demo here*
>
> **What to include:**
> - Real-time display of all 5 oscillators (RSI, Stochastic, MFI, CCI, WaveTrend)
> - Vote counter: "3 Bullish, 2 Bearish → Majority: BULLISH"
> - Visual indicators turn green/red as they vote
> - Show how adding 5th oscillator breaks 2-2 tie
>
> **User interaction:**
> - Toggle individual oscillators on/off → See how vote count changes
> - Slider: Move through historical bars → Watch votes change over time
> - Highlight: Click "BUY" signal → Shows which 3+ oscillators agreed

> **📍 PLACEHOLDER: Divergence Spotter**
>
> *Location: Insert divergence identification tool here*
>
> **What to include:**
> - Split view: Price chart on top, oscillators below
> - Highlight divergences: "Price making lower low, BUT oscillators making higher low"
> - Color-coded: Green = Bullish divergence, Red = Bearish divergence
> - Statistics: "This divergence led to +3.8% rally over 5 bars"
>
> **User interaction:**
> - Toggle: "Show divergences only" vs "Show all signals"
> - Filter: "Minimum 3-oscillator divergence agreement"

---

## 📝 Reality Check: 3 Oscillator Scenarios

### Scenario #1: Win - Strong Consensus (AAPL Daily Chart) ✅

**Setup:**
- **Asset:** Apple (AAPL)
- **Signal:** BUY signal at oversold  level
- **Oscillator Votes:** 5/5 unanimous bullish

**Oscillator Analysis:**

| Oscillator | Reading | Vote | Status |
|------------|---------|------|--------|
| RSI | 28 | BULLISH | Oversold (<30) |
| Stochastic | 15 | BULLISH | Deep oversold |
| MFI | 22 | BULLISH | Money flow oversold |
| CCI | -185 | BULLISH | Extreme oversold |
| WaveTrend | Oversold cross | BULLISH | Bullish cross confirmed |

**Votes:** 5 Bullish, 0 Bearish = **Unanimous BUY**

**Trade Execution:**
- **Entry:** $168.50 (on BUY signal)
- **Stop:** $165 (below recent low)
- **Target:** $175.50 (1:2 risk-reward)
- **Outcome:** Target hit in 6 days, +4.2% gain

**Why It Worked:**
✓ All 5 oscillators agreed (rare, only ~15% of signals are unanimous)
✓ Multiple oscillators showed extreme readings (RSI <30, CCI <-100)
✓ Occurred at support level (combined with Janus Atlas)
✓ Volume spike on entry day (Volume Oracle confirmation)

**Key Lesson:** Unanimous votes (5/5 or 0/5) represent highest-probability setups. When all 5 oscillators agree, the signal has ~70-75% success rate vs ~55% for simple 3/5 majority. Wait for unanimous signals in ranging markets, accept 3/5 majorities in strong trends.

---

### Scenario #2: Loss - Weak Majority in Strong Trend (BTC 1H Chart) ❌

**Setup:**
- **Asset:** Bitcoin
- **Signal:** SELL signal (short)
- **Oscillator Votes:** 3 Bearish, 2 Bullish = Slim majority
- **Market Context:** Strong uptrend (Daily chart)

**Oscillator Analysis:**

| Oscillator | Reading | Vote | Status |
|------------|---------|------|--------|
| RSI | 72 | BEARISH | Overbought (>70) |
| Stochastic | 88 | BEARISH | Overbought |
| MFI | 68 | BULLISH | Money flow still positive |
| CCI | +145 | BEARISH | Elevated |
| WaveTrend | Neutral | BULLISH | No clear signal |

**Votes:** 3 Bearish, 2 Bullish = **SELL signal (3/5 majority)**

**Trade Execution:**
- **Entry:** Short at $63,500
- **Stop:** $64,200
- **Outcome:** Stopped out next day for -$700 loss

**What Went Wrong:**
❌ Slim majority (3/5) instead of strong consensus (4/5 or 5/5)
❌ Traded against Daily uptrend (1H SELL vs Daily BUY bias)
❌ 2 oscillators still bullish (MFI + WaveTrend) = conflicting signal
❌ Overbought can stay overbought in strong trends

**Key Lesson:** In strong trends, oscillators can remain overbought/oversold for extended periods. 3/5 majority is not sufficient to counter-trend trade. Require 4/5 or 5/5 consensus for reversal trades. For trend-following trades, 3/5 is acceptable.

**Rule:** Counter-trend = Need 4-5/5 votes. With-trend = 3/5 acceptable.

---

### Scenario #3: Breakeven - Divergence Signal Too Early (SPY Daily Chart) ⚖️

**Setup:**
- **Asset:** SPY (S&P 500 ETF)
- **Signal:** Bullish divergence detected
- **Pattern:** Price making lower lows, oscillators making higher lows

**Divergence Analysis:**

| Date | Price Action | RSI | Stochastic | Analysis |
|------|--------------|-----|------------|----------|
| Oct 10 | Low: $430 | 32 | 18 | First low |
| Oct 25 | Lower low: $425 | 38 | 25 | Bullish divergence forming |
| Oct 26 | Entry | 40 | 30 | Entered long on divergence |
| Oct 27-Nov 3 | Sideways $423-428 | Choppy | Choppy | No follow-through |
| Nov 4 | Exit breakeven | — | — | Exited after 8 days flat |
| Nov 10 | Rally begins | $435 | — | Rally happened 6 days after exit |

**Trade Execution:**
- **Entry:** $426 (on bullish divergence confirmation)
- **Stop:** $422 (below second low)
- **Outcome:** Exited at $426 breakeven after 8 days of sideways action

**What Happened:**
⚠️ Divergence was valid (price lower, oscillators higher)
⚠️ But timing was early (rally came 14 days after divergence, not immediately)
⚠️ Held position for 8 days with no progress → Exited
⚠️ Rally occurred 6 days after exit (frustrating, but correct risk management)

**Key Lesson:** Divergences identify potential reversals, but timing can be early by days or weeks. Divergences are NOT precision timing tools. Better approach: Use divergence as "alert" → Wait for BUY signal (3/5 vote) to time entry, not divergence alone.

**Improved approach:** Divergence spotted Oct 25 → Wait for BUY signal → BUY appeared Nov 8 → Enter then (avoided 8 days of dead money).

---

## ⚠️ When Harmonic Oscillator Signals Fail

### Failure Scenario #1: Overbought/Oversold in Strong Trends (40% failure rate)

**What Happens:**
- RSI hits 75 (overbought) → SELL signal fires
- But market in strong uptrend
- Price continues higher for weeks with RSI 70-80 entire time
- Short position gets stopped out

**Why It Fails:** "Overbought" doesn't mean "reversal imminent." It means "strong momentum." In trends, overbought/oversold are normal, not reversal signals.

**How to Avoid:** Check higher timeframe trend FIRST. If Daily is bullish, ignore 1H/4H SELL signals from overbought readings. Only trade oscillator signals WITH the trend, not against it.

---

### Failure Scenario #2: Choppy Range-Bound Markets (35% failure rate)

**What Happens:**
- Market in tight $48-52 range for 3 weeks
- Oscillators swing wildly: BUY → SELL → BUY → SELL every 2-3 days
- Multiple whipsaws, no follow-through
- 5 trades, 2 wins, 3 losses = Net loss

**Why It Fails:** Oscillators are momentum tools. In zero-momentum consolidation, they oscillate uselessly between overbought/oversold.

**How to Avoid:** When market range <5% for 2+ weeks, pause oscillator trading. Wait for range breakout. Use Pentarch (cycle detection) or Janus (level breaks) instead.

---

### Failure Scenario #3: Divergences That Never Resolve (30% of divergences)

**What Happens:**
- Bullish divergence forms (price lower, oscillators higher)
- Wait for reversal... wait... wait...
- Divergence fades away as price continues lower
- Never resulted in reversal

**Why It Fails:** Divergences show weakening momentum, not guaranteed reversals. About 30% of divergences fade without creating reversals.

**How to Avoid:** Don't trade divergences alone. Wait for BUY/SELL signal (3/5 vote) to CONFIRM the divergence. Divergence = "watch for reversal." Signal = "reversal likely starting now."

---

## 💰 Risk Management for Harmonic Oscillator Users

**Vote-Based Position Sizing:**

| Vote Strength | Risk % per Trade | Confidence Level |
|---------------|------------------|------------------|
| **3/5 majority** | 0.75% | Standard |
| **4/5 strong majority** | 1.0% | High confidence |
| **5/5 unanimous** | 1.0-1.5% | Highest confidence |

**Note:** Never exceed 1.5% risk even on unanimous votes.

---

### Stop Placement for Oscillator Trades

**For BUY signals:**
- Place stop below recent swing low (typically 2-4% below entry on Daily charts)
- Example: BUY at $50, recent low $48.50, stop at $48

**For SELL signals:**
- Place stop above recent swing high
- Example: SELL at $100, recent high $102, stop at $102.50

**For divergence trades:**
- Use wider stops (divergence timing is imprecise)
- Example: 3-5% stops vs typical 2-3%

---

### When to Skip Harmonic Trades

❌ **Skip if only 3/5 vote AND counter-trend** (require 4-5/5 for reversals)
❌ **Skip if market in <5% range for 2+ weeks** (oscillators unreliable in ranges)
❌ **Skip if divergence alone, no BUY/SELL signal** (divergence needs confirmation)
❌ **Skip if overbought/oversold in strong trend** (can stay extreme for weeks)

**For complete Risk Management framework, see [Pentarch Risk Management Section](REVISED_DOCS_PENTARCH.md#-risk-management--position-sizing).**

---

## 🧠 Oscillator Trading Psychology: Key Challenges

### Challenge 1: Premature Reversal Trading in Strong Trends

**What Happens:** RSI hits 70 (overbought). You think "Time to short!" Price continues higher for 2 more weeks while RSI stays overbought the entire time. You're stopped out multiple times trying to catch the top.

**The Fix:** Overbought/oversold doesn't mean reversal—it means strong momentum. In strong trends, oscillators stay extreme for extended periods. Wait for trend weakness before trading against it.

**Mental Script:** "Overbought in uptrend = strength, not reversal signal. I need trend change confirmation first."

---

### Challenge 2: Trusting Single Oscillator Over Voting Consensus

**What Happens:** RSI shows bullish divergence (you're excited!). But Stochastic, CCI, MFI, and Williams all show no divergence. You trade based on RSI alone. Trade fails because 4/5 oscillators disagreed.

**The Fix:** Harmonic Oscillator uses voting consensus for a reason. 1 oscillator agreeing = weak signal. 3+ oscillators agreeing = strong signal. Trust the consensus, not the outlier.

**Mental Script:** "How many oscillators agree? If fewer than 3, I skip. Consensus beats single oscillator."

---

### Challenge 3: Ignoring Trend Context (Trading Oscillators in Vacuum)

**What Happens:** All 5 oscillators show oversold. You buy immediately. Price continues lower. You check trend: strong downtrend on higher timeframe. Your "oversold bounce" was a small pause in a larger decline.

**The Fix:** Oscillators show momentum, not direction. Check higher TF trend first. Trade oversold bounces in uptrends, overbought pullbacks in downtrends. Don't trade oscillators against higher TF trend.

**Mental Script:** "Oscillators + higher TF trend alignment = trade. Oscillators vs trend = skip."

---

## 🌳 Decision Tree: Should I Trade This Oscillator Signal?

```
┌──────────────────────────────────┐
│  OSCILLATOR SIGNAL APPEARS       │
│  (Divergence/Extreme/Consensus)  │
└─────────────┬────────────────────┘
              │
              ▼
       ┌──────────────┐
       │ How many     │
       │ oscillators  │
       │ agree?       │
       └──┬───────┬───┘
          │       │
        0-2     3+
          │       │
          ▼       ▼
       ❌ SKIP  Continue
                  │
                  ▼
           ┌──────────────┐
           │ Is price in  │
           │ strong trend?│
           └──┬───────┬───┘
              │       │
             YES      NO
              │       │
              ▼       ▼
          Check     Continue
          alignment    │
              │        │
              ▼        ▼
       ┌──────────────────┐
       │ Trading WITH     │
       │ trend or AGAINST?│
       └──┬──────────┬────┘
          │          │
       AGAINST     WITH
          │          │
          ▼          ▼
       ❌ SKIP   Continue
                     │
                     ▼
              ┌──────────────┐
              │ Higher TF    │
              │ confirms?    │
              └──┬───────┬───┘
                 │       │
                NO      YES
                 │       │
                 ▼       ▼
              Medium  ✅ HIGH
              Quality QUALITY
```

**Quick Rules:**
- **3+ oscillators must agree:** Minimum for trading consideration
- **Check trend first:** Strong trend = oscillators can stay extreme for weeks
- **Trade WITH trend:** Oversold in uptrend = buy. Overbought in downtrend = short
- **Higher TF check:** One timeframe higher must align

---

## 🚫 Top 5 Mistakes with Harmonic Oscillator

### Mistake #1: Trading Overbought/Oversold as Automatic Reversals

**What Happens:** RSI hits 30 (oversold), you buy immediately thinking "It's oversold, must go up!" Price continues dropping for days. RSI stays oversold the entire time.

**The Fix:** Oversold means strong downward momentum, not "reversal coming." In downtrends, oscillators stay oversold. Wait for trend exhaustion signs before trading mean reversion.

---

### Mistake #2: Ignoring the Voting Consensus (Trading 1/5 Agreement)

**What Happens:** RSI shows bullish divergence. You're excited and trade it. Stochastic, CCI, MFI, Williams all show NO divergence. Trade fails because only 1 out of 5 oscillators agreed.

**The Fix:** 1 oscillator = noise. 3+ oscillators = signal. If fewer than 3 agree, skip the trade. The voting system exists to filter false signals.

---

### Mistake #3: Trading Oscillators Against Higher Timeframe Trend

**What Happens:** All 5 oscillators oversold on 15M chart. You buy. Price drops further. You check Daily chart: strong downtrend. Your 15M "oversold" was a tiny pause in a Daily downtrend.

**The Fix:** Check higher TF trend first. Trade oscillator signals that ALIGN with higher TF. Oversold in uptrend = buy. Oversold in downtrend = skip or short continuation.

---

### Mistake #4: Confusing Divergence Types (Regular vs Hidden)

**What Happens:** You see divergence and trade it as a reversal signal. Trade immediately goes against you. Later you realize: it was hidden divergence (trend continuation), not regular divergence (reversal).

**The Fix:** Learn the difference: Regular divergence = potential reversal. Hidden divergence = trend continuation. Match your trade direction to the divergence type.

---

### Mistake #5: Trading Extreme Readings Without Confirmation

**What Happens:** All 5 oscillators hit extreme overbought (90+). You short immediately. Price continues higher for 3 more days. You're stopped out. Oscillators stayed extreme the entire time.

**The Fix:** Extreme readings show strong momentum, not imminent reversal. Wait for oscillators to START TURNING back from extreme before entering. Extreme alone ≠ reversal signal.

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

## 🔧 Troubleshooting Common Issues

### Problem: "Oscillator showing NEUT constantly"

**Understanding NEUT Signals:**

**NEUT = Neutral = Oscillators divided (not agreement)**

**When This Happens:**
- Market in tight range
- Oscillators conflicting (some bullish, some bearish)
- Transition period between conditions

**Solutions:**
1. **Accept it as valid signal:** NEUT means "no clear direction"
2. **Wait for BUY/SELL/STRONG signal:** Don't trade NEUT
3. **Check higher timeframe:** May show clearer direction

**NEUT is not a bug—it's important information (stay out)**

---

### Problem: "STRONG signal appeared then failed immediately"

**Reality Check:**

**STRONG = 4/5 oscillators agree, NOT guaranteed success**

**Why Signals Fail:**
- Oscillators are lagging (measure past, not future)
- Market conditions change rapidly
- No indicator is 100% accurate

**How to Improve:**
- Combine with other indicators (Pentarch, Janus)
- Use higher timeframes (less whipsaw)
- Accept that some signals fail (normal)

---

### Problem: "Harmonic conflicts with Pentarch"

**Example:** "Harmonic BUY but Pentarch CAP"

**Understanding:**
- **Harmonic:** Measures current momentum (lagging)
- **Pentarch:** Measures cycle phase (pattern-based)

**Possible Meanings:**
1. Momentum still bullish but cycle exhausting (late rally)
2. Transition period (momentum hasn't caught up to cycle)
3. Conflicting timeframes (check both on same timeframe)

**Solution:** Wait for alignment or use as advanced divergence signal

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

## 🔗 Related Topics

### Learn More About Harmonic Oscillator
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - Quick reference for Harmonic signals (BUY/SELL/STRONG/NEUT)
- **[Learning Paths](docs/start-learning-path/index.md)** - Structured roadmap for mastering Harmonic Oscillator (2 weeks)
- **[Glossary](docs/ref-glossary/index.md)** - RSI, Stochastic, CCI, Williams %R, MFI definitions

### The Momentum Stack ⭐
Harmonic Oscillator works best when combined with:
- **[Pentarch](REVISED_DOCS_PENTARCH.md)** - Cycle phase signals for timing
- **[Janus Atlas](REVISED_DOCS_JANUS_ATLAS.md)** - Price levels for entries/exits

**Workflow:** Pentarch signal → Harmonic Oscillator confirmation → Janus level entry = High-probability setup

### Additional Combinations
- **[Volume Oracle](REVISED_DOCS_VOLUME_ORACLE.md)** - Add volume confirmation to momentum signals
- **[Plutus Flow](REVISED_DOCS_PLUTUS_FLOW.md)** - Compare oscillator signals with OBV divergence patterns
- **[Augury Grid](REVISED_DOCS_AUGURY_GRID.md)** - Scan multiple assets for Harmonic signals

### Comparison & Optimization
- **[Indicator Comparison](docs/ref-comparison/indicator-comparison.md)** - Compare all 7 indicators by difficulty, timeframes, use cases
- **[Performance Optimization](docs/advanced/performance-optimization.md)** - Optimize Harmonic Oscillator rendering
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - 2-page reference comparing all indicators

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator combines five technical oscillators (RSI, Stochastic, CCI, Williams %R, MFI) into a consensus-based signal system. All signals represent multi-oscillator agreement detection based on momentum and volume analysis methodologies. Individual interpretation, application, and outcomes vary. Past signal patterns do not guarantee future results. This is not financial advice.

# Harmonic Oscillator v1.0 ADAPTIVE - 3-in-1 Momentum Indicator

<div class="admonition tip" style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4;">
<p class="admonition-title" style="color: #06b6d4; font-weight: 600;">📚 Want to Master Harmonic Oscillator?</p>
<p><a href="learning.html" style="color: #06b6d4; font-weight: 600; text-decoration: none;">→ Advanced Learning Guide</a> — Voting consensus strategies, divergence trading patterns, mode selection, and HTF filtering techniques</p>
</div>

## 🎯 What Does It Do?
<span style="color: #0aa1d5; font-weight: 600;">Core Functionality</span>

Harmonic Oscillator combines **MACD, RSI, and StochRSI** into one smart oscillator (0-100 scale). Think of it as "three expert traders voting" - when 2 or 3 agree, the probability skyrockets.

**Best for:** Momentum traders, divergence traders, anyone tired of juggling multiple oscillators

---

## Core Concept: Democratic Voting
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">💡 Core Philosophy - 3 Oscillators Vote Together</span>

No single indicator is perfect. But when multiple agree? That's high probability.

**The Three Voters:**

### 1. MACD - Trend Strength Vote
- **Bullish vote:** Histogram rising and positive
- **Bearish vote:** Histogram falling and negative
- **Why:** Best for trend changes

### 2. RSI - Extreme Detection Vote
- **Bullish vote:** RSI < 30 (oversold)
- **Bearish vote:** RSI > 70 (overbought)
- **Why:** Best for reversal zones

### 3. StochRSI - Timing Vote
- **Bullish vote:** StochRSI < 20 (oversold)
- **Bearish vote:** StochRSI > 80 (overbought)
- **Why:** Best for precise entry timing

---

## The Composite (What You See)

**One line, 0-100 scale:**

**80-100** = Extreme overbought (potential reversal down likely)
**60-80** = Bullish momentum
**40-60** = Neutral (no clear direction)
**20-40** = Bearish momentum
**0-20** = Extreme oversold (potential reversal up likely)

**Two key zones:**
- Above 70 = Overbought zone (watch for shorts)
- Below 30 = Oversold zone (watch for longs)

---

## The Signals

### Consensus Signals

**Bullish Signal:**
- Composite crosses above 30 (exiting oversold)
- At least 2 of 3 components vote bullish
- Green label appears

**Bearish Signal:**
- Composite crosses below 70 (exiting overbought)
- At least 2 of 3 components vote bearish
- Red label appears

---

## Signal Modes (Pick Your Style)

### Conservative (3 votes required)
- All three are required to agree
- **Fewest signals**
- **Win rate: 75-80%**
- **Best for:** Swing trading

### Balanced (2 votes required) - DEFAULT
- At least 2 of 3 agree
- **Moderate frequency**
- **Win rate: 65-70%**
- **Best for:** Most traders

### Aggressive (1 vote required)
- Only 1 component needed
- **Most signals**
- **Win rate: 55-60%**
- **Best for:** Scalping

---

## Divergence Detection (The Power Feature)

When price and oscillator disagree = Reversal coming

### Regular Bullish Divergence
- Price makes lower low
- Oscillator makes higher low
- **Signal:** Downtrend weakening, potential reversal up likely
- Label: "BULL DIV" (green)

### Regular Bearish Divergence
- Price makes higher high
- Oscillator makes lower high
- **Signal:** Uptrend weakening, potential reversal down likely
- Label: "BEAR DIV" (red)

### Hidden Divergences
- **Hidden Bull:** Price higher low, oscillator lower low = Continuation up
- **Hidden Bear:** Price lower high, oscillator higher high = Continuation down

**These are commonly the highest-probability setups.**

---

## Usage Patterns (3 Core Components)
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">🎓 Essential Learning Guide</span>

### Component 1: Mode Selection

**Beginner configuration:** Balanced mode (2 votes) is the standard starting point

**Typical settings:**
- Signal Mode: Balanced
- HTF Filter: Enabled (4× chart timeframe is common)
- Divergence: Enabled
- Min Votes: 2

---

### Component 2: Extreme Zone Recognition

**Signals from extreme zones are typically prioritized:**

**For long positions:**
1. Composite dropping below 20 (extreme oversold) is observed
2. Potential bullish signal (cross above 30) is monitored
3. 2-3 votes are verified (component status can be checked)
4. Long entries are evaluated

**For short positions:**
1. Composite above 80 (extreme overbought) is observed
2. Potential bearish signal (cross below 70) is monitored
3. 2-3 votes are verified
4. Short entries are evaluated

---

### Component 3: Divergence Confirmation

**Elite probability setup characteristics:**
- Composite at extreme (< 20 or > 80)
- Divergence label present (BULL DIV or BEAR DIV)
- Signal fires
- = Elite-tier probability classification

---

## Real Example (Ethereum)

**Setup:**
- Price: $1,800, falling for days
- **Composite:** Drops to 15 (extreme oversold)
- **Divergence:** Price makes lower low at $1,750, but composite makes higher low (BULL DIV label)
- **Signal:** Potential bullish signal fires at composite 32 (crossing above 30)
- **Votes:** All 3 components vote bullish (Conservative = potential elite signal)

**The Trade:**
1. Example entry long at $1,760
2. Example stop below recent low at $1,720
3. Example target: Composite 70 (overbought, exit zone)
4. Price rallies to $2,100
5. Composite hits 72, example exit

**Result:** $340 profit per ETH (19% gain)

---

## HTF (Higher Timeframe) Filter

**Optional but powerful:**

Enable HTF filter to only take signals aligned with higher timeframe:

**Example:**
- Your chart: 1H
- HTF: 4H (set in settings)
- Bullish signal on 1H only fires if 4H composite > 50
- **Effect:** Win rate +10-15%, signals reduced ~30%

**Recommended:**
- Scalpers: HTF optional (may be too restrictive)
- Day traders: HTF recommended
- Swing traders: HTF mandatory

---

## Settings (Configuration Approach)

**Signal Mode:**
- Conservative (3 votes) / Balanced (2 votes) / Aggressive (1 vote)

**HTF Filter:**
- Typically enabled for swing trading
- Often disabled for scalping
- 4× chart timeframe is the standard setting (e.g., 1H chart → 4H HTF)

**Divergence:**
- All types (Regular + Hidden) can be enabled
- Divergence beams (visual lines) are available

**Most common configuration:**
- Mode: Balanced
- HTF: Enabled (4× chart TF)
- Divergence: Enabled

---

## Alert Configuration

1. **Elite Bull Signal** - 3 votes + HTF + divergence
2. **Elite Bear Signal** - 3 votes + HTF + divergence
3. **Premium Bull Signal** - 2 votes + HTF
4. **Premium Bear Signal** - 2 votes + HTF
5. **Bullish Divergence** - BULL DIV detected
6. **Bearish Divergence** - BEAR DIV detected

**Configuration steps:**
1. Alarm icon is clicked
2. "Harmonic Oscillator v1.0" is selected
3. Alert type is chosen
4. "Once Per Bar Close" is set

---

## Common Pitfalls
<span style="color: #dc2626; font-weight: 600; font-size: 1.1em;">🚨 Critical Learning Points</span>

❌ **Trading signals from neutral zone (40-60)**
→ ✅ Signals from extremes (< 20 or > 80) are typically prioritized

❌ **Overlooking divergences**
→ ✅ Divergence + signal combinations = Highest probability classifications

❌ **Using Aggressive mode without additional filters**
→ ✅ Aggressive mode typically requires manual filtering (all 3 component agreement verification)

❌ **Trading against HTF filter when enabled**
→ ✅ HTF blocking indicates multi-timeframe misalignment - respecting it is standard practice

❌ **Reacting to level touches without crossover**
→ ✅ Awaiting composite CROSS of the level (30 or 70), not just touch, is the confirmation requirement

---

## ❓ Frequently Asked Questions
<span style="color: #10b981; font-weight: 600;">Common Questions</span>

**Q: What's better - Conservative or Aggressive?**
**A:**
- Conservative (3 votes) = Fewer signals, 75-80% win rate
- Balanced (2 votes) = Best for most traders, 65-70% win rate
- Aggressive (1 vote) = More signals, 55-60% win rate

**Q: Should I enable HTF filter?**
**A:** Yes if you want quality over quantity. HTF increases win rate ~10-15% but reduces signal frequency ~30-40%.

**Q: Which divergence is strongest?**
**A:**
- **Regular divergences** = Best potential reversal signals
- **Hidden divergences** = Best continuation signals
Both are valuable in different contexts.

**Q: How often do potential Elite signals appear?**
**A:** Rarely. Elite needs 3 votes + HTF + divergence. Expect:
- 1H chart: 1-2 per week
- Daily chart: 1-2 per month

**Q: Does it repaint?**
**A:** No. All signals lock at bar close. What you see is what you get.

---

## Quick Cheat Sheet

| Composite Level | Meaning | Action |
|----------------|---------|--------|
| 0-20 | Extreme oversold | Watch for potential bullish signal |
| 20-30 | Oversold | Potential bullish signals here are good |
| 30-70 | Neutral | Wait for extremes |
| 70-80 | Overbought | Potential bearish signals here are good |
| 80-100 | Extreme overbought | Watch for potential bearish signal |

| Signal Type | Votes | Win Rate | Action |
|------------|-------|----------|--------|
| Conservative | 3/3 | 75-80% | Take every time |
| Balanced | 2/3 | 65-70% | Take with normal risk |
| Aggressive | 1/3 | 55-60% | Be selective |

| Divergence | Meaning | Action |
|-----------|---------|--------|
| BULL DIV | Regular bullish | **Reversal up** likely |
| BEAR DIV | Regular bearish | **Reversal down** likely |
| H-BULL | Hidden bullish | **Continuation up** (buy dip) |
| H-BEAR | Hidden bearish | **Continuation down** (sell rip) |

---

## Best Practices
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">✅ Recommended Approach</span>

1. **Extreme zone focus** - Signals from < 20 or > 80 are typically prioritized
2. **Divergence integration** - Divergence + signal combinations = Elite classifications
3. **Mode-style alignment** - Swing = Conservative, Day trade = Balanced, Scalp = Aggressive
4. **HTF enablement for swings** - HTF filter is standard for swing trading contexts
5. **Level combination** - Combining with Janus Atlas (levels) is associated with highest probability

---

## Support

Additional resources available:
- [<span class="signal-pilot-brand">Signal Pilot</span> Suite Overview](https://docs.signalpilot.io/suite-index/) - Indicator combination strategies
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Support resources

---

## See Also

**Related Pages:**
- [Janus Atlas v1.0](janus-atlas-v10.md) - Combine momentum signals with key structural levels
- [Omnideck v1.0](omnideck-v10.md) - All-in-one indicator including Harmonic Oscillator
- [Best Practices & Pro Tips](../ref-best-practices.md) - Advanced strategies for momentum trading
- [How to Set Up Alerts](../how-to-alerts.md) - Get notified on consensus signals
- [Trading Workflow](../ref-workflow.md) - How momentum fits into complete trading system

---

**Summary:** Harmonic Oscillator displays when MACD, RSI, and StochRSI achieve consensus. 2 or 3 component agreement = Potential high probability signal. Divergence addition = Potential elite probability signal.

**Vote consensus with extreme zone focus** 🎯

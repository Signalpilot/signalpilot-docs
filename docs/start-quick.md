# Quick Start - Get Your First Signal in 5 Minutes

Get from zero to your first potential reversal signal in 5 minutes. We'll use **Pentarch v1.0** - the simplest and most impactful indicator in the suite.

---

## 🎯 What You'll Learn

By the end of this guide, you'll:
1. ✅ Have Pentarch installed on TradingView
2. ✅ Understand the 5 signal types
3. ✅ Set up your first alert
4. ✅ Know how to use the signals

**Time required:** 5 minutes
**Difficulty:** Beginner-friendly

---

## Step 1: Install Pentarch (1 minute)

### On TradingView:

1. **Open any chart** (Bitcoin, stocks, forex - any market works)
2. **Click "Indicators"** at the top of the chart
3. **Search for:** `"Pentarch v1.0"` or `"Signal Pilot"`
4. **Click to add** the indicator to your chart

**You should now see:**
- 5-phase system labels (TD, IGN, WRN, CAP, BDN) appearing on your chart
- Colored dots below/above candles when signals fire

---

## Step 2: Learn the 5 Signals (2 minutes)

Pentarch displays **5 simple signals** that indicate potential reversal conditions. Each signal represents a different phase in the potential trend cycle.

### The Early-Cycle Signals

**🔵 TD (Touchdown)** = Early Warning
- Indicates early-cycle reversal conditions
- Often interpreted as preparation phase
- Many traders watch for potential setups

**🟢 IGN (Ignition)** = Momentum Breakout
- Indicates momentum breakout conditions
- Commonly interpreted as potential long entry signal
- Often used as bullish reversal indication

### The Late-Cycle Signals

**🟡 WRN (Warning)** = Weakening Momentum
- Indicates weakening momentum
- Often triggers risk management review
- Many traders prepare for potential exits

**🔴 CAP (Climax)** = Late-Cycle Exhaustion
- Indicates late-cycle exhaustion conditions
- Commonly interpreted as potential exit signal for longs
- Often used as reversal preparation

**⚫ BDN (Breakdown)** = Bearish Breakdown
- Indicates bearish breakdown conditions
- Often triggers long position exits
- Commonly interpreted as potential short entry signal

---

## Step 3: Set Up Your First Alert (1 minute)

Setting up an alert for **IGN** (potential long entry signal):

1. **Right-click your chart** → "Add Alert"
2. **Condition:** Select "Pentarch v1.0"
3. **Event:** Choose `"IGN Event"`
4. **Options:** Set to **"Once Per Bar Close"** (important!)
5. **Name it:** "Pentarch IGN - Potential Long Entry Signal"
6. **Click "Create"**

**That's it!** You'll now get notified every time a potential reversal up is indicated.

### Commonly Monitored Alerts:
- ✅ IGN Event (potential long entry signal)
- ✅ CAP Event (potential long exit signal)
- ✅ BDN Event (potential short entry signal)

---

## Step 4: Example Trade Illustration (1 minute)

Example showing common Pentarch signal interpretation:

### Example: Bitcoin Long Trade Scenario

**The Setup:**
```
Price: $35,000, falling for 2 weeks
```

**The Signals:**
1. **TD appears at $32,500** 🔵
   - Signal interpretation: "Early-cycle conditions developing"
   - Common response: Observation phase begins, no entry yet

2. **IGN fires at $33,800** 🟢
   - Signal interpretation: "Potential reversal up indicated"
   - Common response: Long entry at $33,900
   - Typical stop placement: Below recent low at $32,000

**The Trade Progression:**
3. **WRN appears at $41,500** 🟡
   - Signal interpretation: "Late-cycle warning"
   - Common response: Exit preparation and monitoring

4. **CAP fires at $42,800** 🔴
   - Signal interpretation: "Potential exit signal"
   - Common response: Long exit at $42,500

**Result:** $8,600 gain per coin (25% gain)

---

## 📋 Quick Reference Cheat Sheet

| Signal | Color | Meaning | Common Interpretation |
|--------|-------|---------|----------------------|
| TD 🔵 | Blue | Early-cycle warning | Observation phase - preparation only |
| IGN 🟢 | Green | Momentum breakout | Potential long entry signal |
| WRN 🟡 | Yellow | Weakening momentum | Exit preparation monitoring |
| CAP 🔴 | Red | Late-cycle exhaustion | Potential long exit signal |
| BDN ⚫ | Black | Bearish breakdown | Long exit / potential short signal |

---

## 🚫 Common Mistakes to Avoid

### Mistake #1: Entering on TD (Blue Signal)

**❌ Common Error:** "TD appeared, buying now!"
**✅ Better Approach:** "TD appeared, watching for IGN signal"

**Why:** TD indicates early-cycle conditions, not entry. IGN typically provides momentum breakout confirmation.

---

### Mistake #2: Not Using "Once Per Bar Close" for Alerts
<span style="color: #ff6b35; font-weight: 600;">⚠️ Critical Setup Issue</span>

**❌ Common Error:** Alert fires mid-bar, entry occurs, signal disappears
**✅ Better Approach:** Alert set to "Once Per Bar Close", only closed-bar signals trigger notifications

**How to fix:**
- Delete incorrect alerts
- Create new ones with "Once Per Bar Close"
- See [Alert Setup Guide](how-to-alerts.md)

---

### Mistake #3: Trading Without Stop Losses
<span style="color: #dc2626; font-weight: 600;">🚨 Risk Management Essential</span>

**❌ Common Error:** "Will watch and exit if it goes against me"
**✅ Better Approach:** Stop loss determination before entry

**Common stop placement patterns:**
- **Longs:** Below IGN candle low or below TD low
- **Shorts:** Above BDN candle high or above CAP high

**Note:** Trading without predetermined stop levels is generally considered high-risk.

---

### Mistake #4: Ignoring Key Levels

**❌ Lower Quality:** Evaluating all IGN signals regardless of level context
**✅ Higher Quality:** Focusing on IGN signals at major support levels

**Why:**
- IGN at support often shows higher probability
- IGN without level confluence typically shows lower probability
- Janus Atlas can identify key levels

**Example:**
- ❌ IGN appears at $50,000 (no level) → Lower probability
- ✅ IGN appears at major support $48,500 → Higher confluence

---

### Mistake #5: Using Too Low Timeframe Initially

**❌ Wrong:** Starting on 5m or 15m charts as a beginner
**✅ Right:** Start with Daily or 4H charts

**Why:**
- Lower timeframes = more noise
- More signals = harder to learn which are good
- Higher timeframes = clearer, higher quality signals

**Beginner progression:**
1. Start: Daily chart (cleanest)
2. Then: 4H chart (still clean)
3. Then: 1H chart (moderate)
4. Finally: 15m-30m (only when experienced)

---

### Mistake #6: Revenge Trading After a Loss

**❌ Common Pattern:** Signal failed, immediately taking next signal to "make it back"
**✅ Better Approach:** Break after losses, review what occurred

**Why:**
- Emotional trading is associated with poor decisions
- Not all signals result in profitable trades
- Clear mindset is important for analysis

**Common practice:** Many traders pause after 2 losing trades to reassess.

---

### Mistake #7: Risking Too Much Per Trade

**❌ Higher Risk:** Risking 10-20% of account on one trade
**✅ Standard Practice:** Risk of 1-2% per trade

**Example calculation:**
- $10,000 account
- Risk 2% = $200 maximum risk per trade
- Entry: $50, Stop: $48, Risk per share: $2
- Position: $200 / $2 = 100 shares maximum

**Why:** Position sizing within 1-2% is a common risk management practice.

---

### Mistake #8: Expecting 100% Win Rate

**❌ Wrong:** "This signal should work every time!"
**✅ Right:** "Even with 50-60% win rate, I'm profitable with good R/R"

**Reality:**
- No indicator is perfect
- 50-60% win rate is excellent
- Profitable trading = win rate × average R/R
- 50% win rate + 3:1 R/R = very profitable

**Mindset:** Focus on process, not individual trade outcomes.

---

### Mistake #9: Not Paper Trading First
<span style="color: #0aa1d5; font-weight: 600;">💡 Important for Beginners</span>

**❌ Higher Risk:** Reading guide, immediately trading live with real money
**✅ Lower Risk:** Paper trading for 2-4 weeks until consistent results

**Common paper trading approach:**
- [ ] Execute 20+ paper trades
- [ ] Track win rate and R/R
- [ ] Maintain rule consistency
- [ ] Analyze winning and losing trades
- [ ] Achieve profitability over 2-4 weeks

**Progression:** Many traders start live with minimum position sizes after paper trading success.

---

### Mistake #10: Overcomplicating with Too Many Indicators

**❌ Common Error:** Loading all 7 Signal Pilot indicators + 10 other indicators on one chart
**✅ Simpler Approach:** Starting with Pentarch, gradually adding Janus

**Why:**
- More indicators can lead to analysis paralysis
- Conflicting signals create confusion
- Simplicity often provides clarity

**Common progression for beginners:**
- Week 1-4: Pentarch only
- Week 5-8: Pentarch + Janus Atlas
- Week 9+: Consider adding one more if needed (Minimal Flow or Harmonic)

---

## ✅ What's Next?

### Master Pentarch:
→ **[Full Pentarch Guide](pentarch-v89.md)** - Deep dive into all 5 signals

### Add Levels:
→ **[Janus Atlas Guide](janus-atlas-v3122.md)** - Identifies key price levels
**Why:** Pentarch shows timing, Janus shows levels

### Complete System:
→ **[Suite Workflow](ref-workflow.md)** - How all 7 indicators work together

---

## 💡 Common Best Practices

**1. Bar Close Evaluation**
- Signals appear during the bar but only finalize at close
- "Once Per Bar Close" alerts help avoid repaints

**2. Level Confluence**
- IGN at a key support level often shows higher probability
- Janus Atlas identifies key price levels

**3. Stop Loss Planning**
- Common stop for longs: Below the TD/IGN candle low
- Trading without predetermined stops is generally considered high-risk

**4. Timeframe Selection**
- Daily chart typically shows cleaner signals with less noise
- Many traders start with higher timeframes, then progress to lower ones

**5. Single Market Focus**
- Learning one market (e.g., Bitcoin or one stock) before expanding is common
- Each market has different behavioral characteristics

---

## 🆘 Need Help?

**Common Questions:**
- **"Signals appearing then disappearing?"** → Alerts set to "Once Per Bar Close" can help
- **"Too many signals?"** → Higher timeframes (4H, Daily) often show fewer, clearer signals
- **"Not enough signals?"** → Verify indicator version (v1.0)

**Resources:**
- **[FAQ](about-faq.md)** - Common questions answered
- **[Glossary](ref-glossary.md)** - Terms and definitions
- **[Support](about-support.md)** - Get help from the team

---

## 🎉 You've Learned:

- ✅ How to install and read Pentarch signals
- ✅ How to set up alerts
- ✅ Common signal interpretation patterns
- ✅ Risk management concepts

**Next:** Explore the full Pentarch guide for deeper understanding.

---

<div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, color-mix(in srgb, var(--md-primary-fg-color) 12%, transparent), color-mix(in srgb, var(--md-accent-fg-color) 12%, transparent)); border-radius: 16px; margin-top: 2rem;">
  <h3 style="color: var(--md-primary-fg-color); margin-bottom: 1rem;">Ready to Explore More Indicators?</h3>
  <p style="margin-bottom: 1.5rem;">Pentarch is just one of 7 professional indicators in the suite.</p>
  <a href="../v6-suite-index/" style="display: inline-block; padding: 0.75rem 2rem; background: linear-gradient(115deg, var(--md-primary-fg-color), var(--md-accent-fg-color)); color: white; border-radius: 999px; text-decoration: none; font-weight: 700;">Explore All 7 Indicators →</a>
</div>

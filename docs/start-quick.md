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

Pentarch shows you **5 simple signals** that indicate when price may potentially reverse. Think of it like **traffic lights for reversals:**

### The Early-Cycle Signals (Green Light - GO!)

**🔵 TD (Touchdown)** = "Get Ready"
- Early-cycle conditions developing
- Don't enter yet, just watch

**🟢 IGN (Ignition)** = "GO! Enter Long"
- Potential reversal up indicated
- This is your long entry signal

### The Late-Cycle Signals (Red Light - STOP!)

**🟡 WRN (Warning)** = "Watch Out"
- Late-cycle conditions developing
- Start tightening stops

**🔴 CAP (Climax)** = "Exit Now"
- Late-cycle exhaustion
- Exit your longs

**⚫ BDN (Breakdown)** = "Potential Downtrend"
- Potential bearish reversal
- Consider shorts (or stay out)

---

## Step 3: Set Up Your First Alert (1 minute)

Let's set up an alert for **IGN** (your buy signal):

1. **Right-click your chart** → "Add Alert"
2. **Condition:** Select "Pentarch v1.0"
3. **Event:** Choose `"IGN Event"`
4. **Options:** Set to **"Once Per Bar Close"** (important!)
5. **Name it:** "Pentarch IGN - Potential Buy Signal"
6. **Click "Create"**

**That's it!** You'll now get notified every time a potential reversal up is indicated.

### Recommended Alerts:
- ✅ IGN Event (potential long entry)
- ✅ CAP Event (potential exit longs)
- ✅ BDN Event (potential exit/short entry)

---

## Step 4: Your First Example Trade (1 minute)

Here's how to use Pentarch in a real trade:

### Example: Bitcoin Long Trade

**The Setup:**
```
Price: $35,000, falling for 2 weeks
```

**The Signals:**
1. **TD appears at $32,500** 🔵
   - "Early-cycle conditions developing"
   - You: Start watching, don't enter yet

2. **IGN fires at $33,800** 🟢
   - "Potential reversal up indicated"
   - You: Enter long at $33,900
   - Example stop: Below recent low at $32,000

**The Trade:**
3. **WRN appears at $41,500** 🟡
   - "Late-cycle warning"
   - You: Start watching exit

4. **CAP fires at $42,800** 🔴
   - "Potential exit signal"
   - You: Exit at $42,500

**Result:** $8,600 profit per coin (25% gain)

---

## 📋 Quick Reference Cheat Sheet

| Signal | Color | Meaning | Action |
|--------|-------|---------|--------|
| TD 🔵 | Blue | Early-cycle warning | Watch - don't enter yet |
| IGN 🟢 | Green | Potential reversal up | **Enter long** |
| WRN 🟡 | Yellow | Late-cycle warning | Start watching exit |
| CAP 🔴 | Red | Late-cycle exhaustion | **Exit longs** |
| BDN ⚫ | Black | Potential breakdown | Exit all longs (or short) |

---

## 🚫 Common Mistakes to Avoid

### Mistake #1: Entering on TD (Blue Signal)

**❌ Wrong:** "TD appeared, I'm buying now!"
**✅ Right:** "TD appeared, I'm watching for IGN confirmation"

**Why:** TD is a warning, not an entry. Wait for IGN to confirm the reversal.

---

### Mistake #2: Not Using "Once Per Bar Close" for Alerts

**❌ Wrong:** Alert fires mid-bar, you enter, signal disappears
**✅ Right:** Alert set to "Once Per Bar Close", only confirmed signals notify you

**Fix:**
- Delete incorrect alerts
- Create new ones with "Once Per Bar Close"
- See [Alert Setup Guide](how-to-alerts.md)

---

### Mistake #3: Trading Without Stop Losses

**❌ Wrong:** "I'll just watch it and exit if it goes against me"
**✅ Right:** Set stop loss IMMEDIATELY when entering

**Where to place stop:**
- **Longs:** Below IGN candle low or below TD low
- **Shorts:** Above BDN candle high or above CAP high

**Rule:** Never enter without knowing your exit price if wrong.

---

### Mistake #4: Ignoring Key Levels

**❌ Wrong:** Taking every IGN signal anywhere on the chart
**✅ Right:** Only taking IGN signals at major support levels

**Why:**
- IGN at support = 70%+ success
- IGN in middle of nowhere = 40% success
- Use Janus Atlas to find key levels

**Example:**
- ❌ IGN appears randomly at $50,000 → Skip
- ✅ IGN appears at major support $48,500 → Strong setup

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

**❌ Wrong:** Signal failed, immediately taking next signal to "make it back"
**✅ Right:** Take a break after 2 losses, review what went wrong

**Why:**
- Emotional trading = poor decisions
- Not all signals win (even good ones)
- Need clear head for next trade

**Rule:** If you lose 2 trades in a day, stop trading until tomorrow.

---

### Mistake #7: Risking Too Much Per Trade

**❌ Wrong:** Risking 10-20% of account on one trade
**✅ Right:** Risk maximum 1-2% per trade

**Example:**
- $10,000 account
- Risk 2% = $200 maximum risk per trade
- Entry: $50, Stop: $48, Risk per share: $2
- Position: $200 / $2 = 100 shares maximum

**Why:** Proper position sizing protects you from blowing up your account.

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

**❌ Wrong:** Reading guide, immediately trading live with real money
**✅ Right:** Paper trade for 2-4 weeks until consistently profitable

**Paper trading checklist:**
- [ ] Execute 20+ paper trades
- [ ] Track win rate and R/R
- [ ] Follow rules consistently
- [ ] Understand why trades win/lose
- [ ] Profitable over 2-4 weeks

**Only then:** Start live with MINIMUM position sizes.

---

### Mistake #10: Overcomplicating with Too Many Indicators

**❌ Wrong:** Loading all 7 Signal Pilot indicators + 10 other indicators on one chart
**✅ Right:** Start with Pentarch ONLY, add Janus later, keep it simple

**Why:**
- More indicators = analysis paralysis
- Conflicting signals = confusion
- Simple = clarity

**Beginner setup:**
- Week 1-4: Pentarch only
- Week 5-8: Pentarch + Janus Atlas
- Week 9+: Add ONE more if needed (Minimal Flow OR Harmonic)

---

## ✅ What's Next?

### Master Pentarch:
→ **[Full Pentarch Guide](pentarch-v89.md)** - Deep dive into all 5 signals

### Add Levels:
→ **[Janus Atlas Guide](janus-atlas-v3122.md)** - Know WHERE the key levels are
**Why:** Pentarch tells you WHEN, Janus tells you WHERE

### Complete System:
→ **[Suite Workflow](ref-workflow.md)** - How all 7 indicators work together

---

## 💡 Pro Tips

**1. Wait for Bar Close**
- Signals appear during the bar but only finalize at close
- Set alerts to "Once Per Bar Close" to avoid repaints

**2. Combine with Levels**
- IGN at a key support level = Higher probability
- Use Janus Atlas to see the levels

**3. Use Stops Always**
- Example stop for longs: Below the TD/IGN candle low
- Never trade without a stop loss

**4. Start with Higher Timeframes**
- Daily chart = cleaner signals, less noise
- Work your way down to lower timeframes as you gain experience

**5. Practice on One Market First**
- Master Bitcoin or one stock before expanding
- Each market has different personality

---

## 🆘 Need Help?

**Common Questions:**
- **"Signals appearing then disappearing?"** → Make sure alerts are set to "Once Per Bar Close"
- **"Too many signals?"** → Try higher timeframes (4H, Daily)
- **"Not enough signals?"** → Check you have correct indicator version (v1.0)

**Resources:**
- **[FAQ](about-faq.md)** - Common questions answered
- **[Glossary](ref-glossary.md)** - Terms and definitions
- **[Support](about-support.md)** - Get help from the team

---

## 🎉 Congratulations!

You now know how to:
- ✅ Install and read Pentarch signals
- ✅ Set up alerts
- ✅ Use signals in real trades
- ✅ Manage risk with stops

**You're ready to trade with Signal Pilot!**

---

<div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, color-mix(in srgb, var(--md-primary-fg-color) 12%, transparent), color-mix(in srgb, var(--md-accent-fg-color) 12%, transparent)); border-radius: 16px; margin-top: 2rem;">
  <h3 style="color: var(--md-primary-fg-color); margin-bottom: 1rem;">Ready to Explore More Indicators?</h3>
  <p style="margin-bottom: 1.5rem;">Pentarch is just one of 7 professional indicators in the suite.</p>
  <a href="../v6-suite-index/" style="display: inline-block; padding: 0.75rem 2rem; background: linear-gradient(115deg, var(--md-primary-fg-color), var(--md-accent-fg-color)); color: white; border-radius: 999px; text-decoration: none; font-weight: 700;">Explore All 7 Indicators →</a>
</div>

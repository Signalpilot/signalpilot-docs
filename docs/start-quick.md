# Quick Start - Get Your First Signal in 5 Minutes

Get from zero to your first potential reversal signal in 5 minutes. We'll use **Pentarch v8.9** - the simplest and most impactful indicator in the suite.

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
3. **Search for:** `"Pentarch v8.9"` or `"Signal Pilot"`
4. **Click to add** the indicator to your chart

**You should now see:**
- 5-phase system labels (TD, IGN, WRN, CAP, BDN) appearing on your chart
- Colored dots below/above candles when signals fire

---

## Step 2: Learn the 5 Signals (2 minutes)

Pentarch shows you **5 simple signals** that indicate when price may potentially reverse. Think of it like **traffic lights for reversals:**

### The Bottom Signals (Green Light - GO!)

**🔵 TD (Touchdown)** = "Get Ready"
- Potential bottom forming
- Don't enter yet, just watch

**🟢 IGN (Ignition)** = "GO! Enter Long"
- Potential reversal up indicated
- This is your long entry signal

### The Top Signals (Red Light - STOP!)

**🟡 WRN (Warning)** = "Watch Out"
- Potential top forming
- Start tightening stops

**🔴 CAP (Capitulation)** = "Exit Now"
- Potential top exhaustion
- Exit your longs

**⚫ BDN (Breakdown)** = "Potential Downtrend"
- Potential bearish reversal
- Consider shorts (or stay out)

---

## Step 3: Set Up Your First Alert (1 minute)

Let's set up an alert for **IGN** (your buy signal):

1. **Right-click your chart** → "Add Alert"
2. **Condition:** Select "Pentarch v8.9"
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
   - "Potential bottom might be coming"
   - You: Start watching, don't enter yet

2. **IGN fires at $33,800** 🟢
   - "Potential reversal up indicated"
   - You: Enter long at $33,900
   - Example stop: Below recent low at $32,000

**The Trade:**
3. **WRN appears at $41,500** 🟡
   - "Potential top warning"
   - You: Start watching exit

4. **CAP fires at $42,800** 🔴
   - "Potential exit signal"
   - You: Exit at $42,500

**Result:** $8,600 profit per coin (25% gain)

---

## 📋 Quick Reference Cheat Sheet

| Signal | Color | Meaning | Action |
|--------|-------|---------|--------|
| TD 🔵 | Blue | Potential bottom warning | Watch - don't enter yet |
| IGN 🟢 | Green | Potential reversal up | **Enter long** |
| WRN 🟡 | Yellow | Potential top warning | Start watching exit |
| CAP 🔴 | Red | Potential top exhaustion | **Exit longs** |
| BDN ⚫ | Black | Potential breakdown | Exit all longs (or short) |

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
- **"Not enough signals?"** → Check you have correct indicator version (v8.9)

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

---
title: "Use the Multi-Symbol Screener"
summary: "How to scan 8 symbols at once with Augury Grid to find fresh opportunities fast."
---

# Use the Multi-Symbol Screener (Augury Grid)

**Goal:** Monitor 8 different instruments simultaneously on one chart instead of flipping between watchlists.

**What You'll Learn:**
- Set up your 8-symbol watchlist
- Read the screener table
- Filter for high-quality signals
- Act on fresh opportunities

**Time:** 5-10 minutes

---

## What Is Augury Grid?

**Augury Grid v1.0** is your on-chart multi-symbol screener table. It monitors 8 tickers simultaneously and displays:

- **Live signals** (BUY/SELL) with quality scores (0-100)
- **Real-time prices** and profit targets
- **Signal age** (how fresh it is)
- **P&L tracking** (how the signal is performing)

**Best for:** Multi-asset traders, portfolio management, finding setups across your watchlist

📖 **Full documentation:** [Augury Grid v1.0 — Multi-Symbol Screener](augury-grid-v10.md)

---

## Quick Setup (3 Steps)

### Step 1: Add Augury Grid to Your Chart

1. Open any chart in TradingView
2. Click **Indicators** → Search "**Augury Grid**"
3. Add **"SP — Augury Grid v1.0"**

**What you'll see:** A table appears showing 8 symbol slots (initially empty or with default symbols)

---

### Step 2: Configure Your 8 Symbols

1. Click the indicator name → **Settings (gear icon)**
2. Scroll to **Symbol Configuration**
3. Enter your 8 tickers (use exact TradingView format):

**Example multi-asset watchlist:**
```
Symbol 1: BINANCE:BTCUSDT
Symbol 2: BINANCE:ETHUSDT
Symbol 3: NASDAQ:AAPL
Symbol 4: NYSE:SPY
Symbol 5: NASDAQ:QQQ
Symbol 6: NASDAQ:TSLA
Symbol 7: CME_MINI:ES1!
Symbol 8: CME_MINI:NQ1!
```

**Format requirements:**
- Include exchange prefix: `BINANCE:`, `NASDAQ:`, `NYSE:`, etc.
- Use exact TradingView ticker format
- Test each ticker on a chart first to verify it works

---

### Step 3: Set Quality Filter (Optional)

**Minimum Confluence Score:**
- **Default:** 40 (shows all decent signals)
- **Recommended for beginners:** 60 (Premium+ signals only)
- **Conservative:** 80 (Elite signals only)

**ADX Threshold:**
- **Default:** 20 (works for most traders)
- **Higher (25-30):** Only strong trends
- **Lower (15):** More signals, lower quality

Click **OK** to save.

---

## How to Read the Grid

The table displays 7 columns for each symbol:

| Column | What It Shows | How to Use It |
|--------|---------------|---------------|
| **SYMBOL** | Ticker name | Quick identification |
| **SIGNAL** | BUY / SELL / - | Current direction (green/red/gray) |
| **SCORE** | 0-100 quality rating | ⭐⭐⭐ Elite (80+), ⭐⭐ Premium (60-79), ⭐ Standard (40-59) |
| **PRICE** | Current price | Real-time market price |
| **TP1** | First target | Auto-calculated profit target (ATR-based) |
| **AGE** | Bars since signal | 0-5 = fresh, 6-15 = moderate, 16+ = stale |
| **P&L** | Performance since signal | Green = winning, red = losing |

---

## Workflow: Finding Opportunities

### 1. Glance at Grid (10 seconds)
Scan for:
- ⭐⭐⭐ **Elite** (80-100) or ⭐⭐ **Premium** (60-79) signals
- **AGE 0-10 bars** (fresh signals)
- **Green P&L** (if signal already triggered, it's working)

### 2. Identify Best Setup (30 seconds)
Example:
```
BTC/USD │ BUY │ 87 ⭐⭐⭐ │ $64,250 │ $65,800 │ 2 │ +0.3%
```
- Elite signal (87)
- Fresh (2 bars old)
- Already showing profit (+0.3%)
- **Action:** Investigate this setup

### 3. Verify on Chart (2 minutes)
Click on the chart to load **BTC/USD** and check:
- [ ] At support level or key zone? (use [Janus Atlas](janus-atlas-v10.md))
- [ ] Volume confirming? (use [Minimal Flow](minimal-flow-v10.md))
- [ ] No major resistance overhead?
- [ ] Aligns with your trading bias?

### 4. Enter Trade (if confirmed)
- Entry: Current price or limit order
- Stop loss: Below recent low (for BUY) or above recent high (for SELL)
- Target: Use TP1 from Grid as first target
- Monitor P&L column to track performance

---

## Quality Tiers (Know These!)

| Score | Quality | Symbol | Typical Win Rate | Action |
|-------|---------|--------|-----------------|--------|
| **80-100** | ⭐⭐⭐ Elite | Multiple factors aligned | ~70-80% | Take immediately (after verification) |
| **60-79** | ⭐⭐ Premium | Strong setup | ~60-70% | Take with normal risk |
| **40-59** | ⭐ Standard | Basic setup | ~50-60% | Be selective (only if matches your bias) |
| **0-39** | Weak | Poor confluence | <50% | Skip |

---

## Common Mistakes & Fixes

### Mistake #1: Wrong Ticker Format
**❌ Problem:** Symbols show no data or "N/A"

**✅ Fix:**
- Use exact TradingView format: `BINANCE:BTCUSDT` not `BTC` or `BTCUSD`
- Include exchange prefix
- Test ticker on chart first before adding to Grid

---

### Mistake #2: Trading Every Signal
**❌ Problem:** Taking too many trades, overtrading

**✅ Fix:**
- Focus on ⭐⭐⭐ Elite and ⭐⭐ Premium signals only
- Set Min Score to 60+ in settings
- Always verify on chart before entering

---

### Mistake #3: Chasing Old Signals
**❌ Problem:** Entering when AGE > 15 bars

**✅ Fix:**
- Check AGE column
- If >15 bars, signal is likely stale
- Look for fresh signals (0-10 bars) instead

---

### Mistake #4: Ignoring P&L Column
**❌ Problem:** Not checking if signal is working

**✅ Fix:**
- If P&L shows -5% and age is high, signal failed — skip it
- If P&L is green and signal is fresh, it's confirming — good sign
- Use P&L to validate signal quality

---

### Mistake #5: Not Verifying Context
**❌ Problem:** Blindly trading Grid signals without chart confirmation

**✅ Fix:**
- Always load the chart
- Check support/resistance levels
- Verify volume and structure
- Grid finds opportunities, YOU confirm quality

---

## Advanced Tips

### Tip #1: Mix Timeframes
You can set different timeframes for each symbol:
```
Symbol 1-2 (crypto): 1H
Symbol 3-4 (stocks): 4H
Symbol 5-6 (scalp): 15m
Symbol 7-8 (swing): Daily
```
**Why:** Scan multiple horizons simultaneously

---

### Tip #2: Scan Same Ticker, Multiple Timeframes
```
Symbol 1: SPY 15m (scalps)
Symbol 2: SPY 1H (day trades)
Symbol 3: SPY 4H (swings)
```
**Why:** See multi-timeframe confluence for one asset

---

### Tip #3: Use 2 Grid Instances
- **Grid 1:** 8 crypto pairs (1H)
- **Grid 2:** 8 stock tickers (4H)
- **Total:** 16 symbols monitored

**How:** Add Augury Grid twice to same chart

---

### Tip #4: Track Performance by Tier
After 20+ trades, calculate your win rate:
- How many Elite signals won?
- How many Premium signals won?
- Adjust Min Score filter based on YOUR results

---

## Workflow Example (Real Scenario)

**8:00 AM:** Check Grid

Grid shows:
```
AAPL │ BUY │ 91 ⭐⭐⭐ │ $175.20 │ $177.80 │ 1 │ +0.1%
TSLA │ SELL │ 43 ⭐ │ $245.90 │ $242.10 │ 18 │ -2.3%
BTC  │ BUY │ 78 ⭐⭐ │ $64,250 │ $65,800 │ 5 │ +0.8%
```

**Analysis:**
- **AAPL:** Elite signal (91), fresh (1 bar), already working (+0.1%) ✅
- **TSLA:** Standard signal (43), stale (18 bars), losing (-2.3%) ❌ Skip
- **BTC:** Premium signal (78), moderate age (5 bars), working (+0.8%) ✅

**Action:** Focus on **AAPL** and **BTC**

---

**8:05 AM:** Load AAPL Chart
- At Janus support: ✅
- Volume spike visible: ✅
- No resistance overhead: ✅
- **Decision:** Enter long AAPL at $175.50

---

**8:10 AM:** Load BTC Chart
- Breaking out of consolidation: ✅
- Higher timeframe aligned: ✅
- **Decision:** Enter long BTC at $64,300

---

**Throughout day:** Monitor P&L column to track trades

---

**4:00 PM:** Results
- AAPL hit TP1 at $177.80 (+1.3%)
- BTC still running, moved stop to breakeven

---

## Why This Matters

### Without Augury Grid:
- Manually flip through 8-20 charts
- Miss signals while looking at other symbols
- No systematic quality scoring
- Hard to track multiple setups

### With Augury Grid:
- See all 8 symbols in one glance (10 seconds)
- Quality scores show you what's worth investigating
- Track performance in real-time
- Focus on your best opportunities

**Bottom line:** Save 30+ minutes per scan, catch more opportunities, trade only the best setups.

---

## Common Questions

**Q: Can I add more than 8 symbols?**
**A:** Not in one Grid (performance limit). But you can add 2 Grid instances = 16 symbols total.

**Q: What if a symbol shows no data?**
**A:** Check: (1) Ticker format correct? (2) Exchange prefix included? (3) Available on your TradingView plan?

**Q: Should I trade every Elite signal?**
**A:** No. Elite = high quality potential, but still verify context, levels, and your trading plan. No system is 100%.

**Q: Can I get alerts from the Grid?**
**A:** No (table indicators can't create alerts). Workaround: When you see Elite signal, set manual alert on that symbol's chart.

**Q: How often does it update?**
**A:** Every bar close on configured timeframes. If Symbol 1 is set to 15m, it updates every 15 minutes.

---

## Next Steps

✅ **You've learned:** How to scan 8 symbols simultaneously with Augury Grid

**Continue learning:**
- 📖 [Full Augury Grid Documentation](augury-grid-v10.md) - Advanced settings, scoring system details
- 📊 [Janus Atlas (Support/Resistance)](janus-atlas-v10.md) - Verify key levels for Grid signals
- 🔔 [Set Up Alerts](how-to-alerts.md) - Alert on individual symbols when Grid shows Elite signals
- 📈 [Best Practices Guide](ref-best-practices.md) - Risk management, workflow optimization

---

**Remember:** Augury Grid is your opportunity scanner across multiple symbols. It highlights what to investigate — YOU verify and execute. Scan smart, trade better! 🎯

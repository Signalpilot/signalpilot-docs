---
title: "Use the Multi-Symbol Screener"
summary: "How to scan 8 symbols at once with Augury Grid to find fresh opportunities fast."
---

# Use the Multi-Symbol Screener (Augury Grid)

**Goal:** Monitor 8 different instruments simultaneously on one chart instead of flipping between watchlists.

**What Can Be Learned:**
- Setting up an 8-symbol watchlist
- Reading the screener table
- Filtering for high-quality signals
- Acting on fresh opportunities

**Time:** 5-10 minutes

---

## What Is Augury Grid?

**Augury Grid v1.0** is an on-chart multi-symbol screener table. It monitors 8 tickers simultaneously and displays:

- **Live signals** (BUY/SELL) with quality scores (0-100)
- **Real-time prices** and profit targets
- **Signal age** (how fresh it is)
- **P&L tracking** (how the signal is performing)

**Best for:** Multi-asset traders, portfolio management, finding setups across watchlists

📖 **Full documentation:** [Augury Grid v1.0 — Multi-Symbol Screener](augury-grid-v10.md)

---

## Quick Setup (3 Steps)

### Step 1: Add Augury Grid to Chart

1. Any chart in TradingView can be opened
2. **Indicators** can be clicked → "**Augury Grid**" can be searched
3. **"SP — Augury Grid v1.0"** can be added

**What will be seen:** A table appears showing 8 symbol slots (initially empty or with default symbols)

---

### Step 2: Configure 8 Symbols

1. The indicator name can be clicked → **Settings (gear icon)**
2. Scrolling to **Symbol Configuration** is available
3. 8 tickers can be entered (the exact TradingView format is commonly used):

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
- The exchange prefix is commonly included: `BINANCE:`, `NASDAQ:`, `NYSE:`, etc.
- The exact TradingView ticker format is commonly used
- Each ticker can be tested on a chart first to verify it works

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

**OK** can be clicked to save.

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
Signals can be scanned for:
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
- **Action:** This setup can be investigated

### 3. Verify on Chart (2 minutes)
The chart can be clicked to load **BTC/USD** and the following can be checked:
- [ ] At support level or key zone? ([Janus Atlas](janus-atlas-v10.md) can be used)
- [ ] Volume confirming? ([Minimal Flow](minimal-flow-v10.md) can be used)
- [ ] No major resistance overhead?
- [ ] Aligns with trading bias?

### 4. Enter Trade (if confirmed)
- Entry: Current price or limit order can be considered
- Stop loss: Below recent low (for BUY) or above recent high (for SELL) can be placed
- Target: TP1 from Grid can be used as first target
- P&L column can be monitored to track performance

---

## Quality Tiers (Reference Guide)

| Score | Quality | Symbol | Typical Win Rate | Common Approach |
|-------|---------|--------|-----------------|-----------------|
| **80-100** | ⭐⭐⭐ Elite | Multiple factors aligned | ~70-80% | Taken immediately (after verification) |
| **60-79** | ⭐⭐ Premium | Strong setup | ~60-70% | Taken with normal risk |
| **40-59** | ⭐ Standard | Basic setup | ~50-60% | Selective (only if matches bias) |
| **0-39** | Weak | Poor confluence | <50% | Typically skipped |

---

## Common Mistakes & Fixes

### Mistake #1: Wrong Ticker Format
**❌ Problem:** Symbols show no data or "N/A"

**✅ Fix:**
- The exact TradingView format is commonly used: `BINANCE:BTCUSDT` not `BTC` or `BTCUSD`
- The exchange prefix is commonly included
- Ticker can be tested on chart first before adding to Grid

---

### Mistake #2: Trading Every Signal
**❌ Problem:** Taking too many trades, overtrading

**✅ Fix:**
- Focus can be placed on ⭐⭐⭐ Elite and ⭐⭐ Premium signals only
- Min Score can be set to 60+ in settings
- Chart verification commonly occurs before entering

---

### Mistake #3: Chasing Old Signals
**❌ Problem:** Entering when AGE > 15 bars

**✅ Fix:**
- AGE column can be checked
- If >15 bars, signal is likely stale
- Fresh signals (0-10 bars) can be looked for instead

---

### Mistake #4: Ignoring P&L Column
**❌ Problem:** Not checking if signal is working

**✅ Fix:**
- If P&L shows -5% and age is high, signal failed—it can be skipped
- If P&L is green and signal is fresh, it's confirming—good sign
- P&L can be used to validate signal quality

---

### Mistake #5: Not Verifying Context
**❌ Problem:** Blindly trading Grid signals without chart confirmation

**✅ Fix:**
- The chart is typically loaded
- Support/resistance levels are commonly checked
- Volume and structure are commonly verified
- Grid finds opportunities, context confirmation is needed

---

## Advanced Tips

### Tip #1: Mix Timeframes
Different timeframes can be set for each symbol:
```
Symbol 1-2 (crypto): 1H
Symbol 3-4 (stocks): 4H
Symbol 5-6 (scalp): 15m
Symbol 7-8 (swing): Daily
```
**Why:** Multiple horizons can be scanned simultaneously

---

### Tip #2: Scan Same Ticker, Multiple Timeframes
```
Symbol 1: SPY 15m (scalps)
Symbol 2: SPY 1H (day trades)
Symbol 3: SPY 4H (swings)
```
**Why:** Multi-timeframe confluence can be seen for one asset

---

### Tip #3: Use 2 Grid Instances
- **Grid 1:** 8 crypto pairs (1H)
- **Grid 2:** 8 stock tickers (4H)
- **Total:** 16 symbols monitored

**How:** Augury Grid can be added twice to same chart

---

### Tip #4: Track Performance by Tier
After 20+ trades, win rate can be calculated:
- How many Elite signals won?
- How many Premium signals won?
- Min Score filter can be adjusted based on results

---

## Workflow Example (Real Scenario)

**8:00 AM:** Grid can be checked

Grid shows:
```
AAPL │ BUY │ 91 ⭐⭐⭐ │ $175.20 │ $177.80 │ 1 │ +0.1%
TSLA │ SELL │ 43 ⭐ │ $245.90 │ $242.10 │ 18 │ -2.3%
BTC  │ BUY │ 78 ⭐⭐ │ $64,250 │ $65,800 │ 5 │ +0.8%
```

**Analysis:**
- **AAPL:** Elite signal (91), fresh (1 bar), already working (+0.1%) ✅
- **TSLA:** Standard signal (43), stale (18 bars), losing (-2.3%) ❌ Can be skipped
- **BTC:** Premium signal (78), moderate age (5 bars), working (+0.8%) ✅

**Action:** Focus can be placed on **AAPL** and **BTC**

---

**8:05 AM:** AAPL Chart can be loaded
- At Janus support: ✅
- Volume spike visible: ✅
- No resistance overhead: ✅
- **Decision:** Long AAPL consideration at $175.50

---

**8:10 AM:** BTC Chart can be loaded
- Breaking out of consolidation: ✅
- Higher timeframe aligned: ✅
- **Decision:** Long BTC consideration at $64,300

---

**Throughout day:** P&L column can be monitored to track trades

---

**4:00 PM:** Results
- AAPL hit TP1 at $177.80 (+1.3%)
- BTC still running, stop moved to breakeven

---

## Why This Matters

### Without Augury Grid:
- Manual flipping through 8-20 charts is required
- Signals can be missed while looking at other symbols
- No systematic quality scoring available
- Multiple setups are hard to track

### With Augury Grid:
- All 8 symbols can be seen in one glance (10 seconds)
- Quality scores show what's worth investigating
- Performance can be tracked in real-time
- Focus can be placed on best opportunities

**Bottom line:** 30+ minutes per scan can be saved, more opportunities can be caught, only the best setups are traded.

---

## Common Questions

**Q: Can I add more than 8 symbols?**
**A:** Not in one Grid (performance limit). But 2 Grid instances can be added = 16 symbols total.

**Q: What if a symbol shows no data?**
**A:** The following can be checked: (1) Ticker format correct? (2) Exchange prefix included? (3) Available on TradingView plan?

**Q: Should I trade every Elite signal?**
**A:** No. Elite = high quality potential, but context, levels, and trading plan can be verified. No system is 100%.

**Q: Can I get alerts from the Grid?**
**A:** No (table indicators can't create alerts). Workaround: When Elite signal is seen, manual alert can be set on that symbol's chart.

**Q: How often does it update?**
**A:** Every bar close on configured timeframes. If Symbol 1 is set to 15m, it updates every 15 minutes.

---

## Next Steps

✅ **Learning achieved:** How to scan 8 symbols simultaneously with Augury Grid

**Continued learning available:**
- 📖 [Full Augury Grid Documentation](augury-grid-v10.md) - Advanced settings, scoring system details
- 📊 [Janus Atlas (Support/Resistance)](janus-atlas-v10.md) - Verify key levels for Grid signals
- 🔔 [Set Up Alerts](how-to-alerts.md) - Alert on individual symbols when Grid shows Elite signals
- 📈 [Best Practices Guide](ref-best-practices.md) - Risk management, workflow optimization

---

**Important consideration:** Augury Grid is an opportunity scanner across multiple symbols. It highlights what to investigate—context verification and execution decisions remain with the trader. Scan smart, trade better.

# Augury Grid v1.0 - Scan 8 Symbols at Once

## What Does It Do?

Augury Grid is your **multi-symbol screener table** that sits on your chart and monitors 8 different instruments simultaneously. Instead of flipping between charts, you get all the signals in one clean table.

**Best for:** Multi-asset traders, anyone managing watchlists

---

## How It Works (Simple Version)

**The Core Signal:**
Augury watches for MACD histogram crossing zero (momentum shift) on all 8 symbols

**The Smart Part:**
Not all MACD crosses are equal! Each signal gets a **quality score 0-100** based on 7 factors:

1. **ADX Strength** - Is there a strong trend?
2. **OBV Volume** - Does volume confirm the move?
3. **HTF Alignment** - Does higher timeframe agree?
4. **RSI Context** - Are we oversold/overbought (good) or chasing (bad)?
5. **Histogram Strength** - How powerful is the cross?
6. **Distance from Average** - Are we buying value or chasing tops?
7. **RSI Trend** - Is momentum confirming?

**Result:** Signals rated 0-100 with quality tiers

---

## The Grid Display (What You See)

```
┌──────────┬────────┬───────┬────────┬─────────┬──────┬──────┐
│ SYMBOL   │ SIGNAL │ SCORE │ PRICE  │ TP1     │ AGE  │ P&L  │
├──────────┼────────┼───────┼────────┼─────────┼──────┼──────┤
│ BTC/USD  │ BUY    │ 87 ⭐⭐⭐│ 43,250 │ 44,180  │ 3    │ +2.1%│
│ ETH/USD  │ SELL   │ 72 ⭐⭐ │ 2,245  │ 2,190   │ 8    │ -1.2%│
│ SPY      │ BUY    │ 58 ⭐  │ 445.20 │ 448.90  │ 15   │ +0.8%│
│ QQQ      │ -      │ -     │ 375.40 │ -       │ -    │ -    │
└──────────┴────────┴───────┴────────┴─────────┴──────┴──────┘
```

### What Each Column Means:

**SYMBOL** - The ticker you're watching (you configure these)

**SIGNAL** - Current direction
- **BUY** (green) = Bullish momentum shift
- **SELL** (red) = Bearish momentum shift
- **-** (gray) = No signal

**SCORE** - Quality rating 0-100
- ⭐⭐⭐ **Elite** (80-100) = Take immediately
- ⭐⭐ **Premium** (60-79) = High quality
- ⭐ **Standard** (40-59) = Acceptable
- **Weak** (0-39) = Skip

**PRICE** - Current price (real-time)

**TP1** - First target (calculated automatically from ATR)

**AGE** - Bars since signal fired
- 0-5 bars = Fresh (best)
- 6-15 bars = Moderate
- 16+ bars = Stale (probably too late)

**P&L** - How much profit/loss since signal
- Green = Winning
- Red = Losing
- Helps you track performance

---

## Setup (3 Simple Steps)

### Step 1: Configure Your Symbols

In settings, add your 8 tickers:

**Example crypto/stocks mix:**
```
Symbol 1: BTC/USD
Symbol 2: ETH/USD
Symbol 3: SPY
Symbol 4: QQQ
Symbol 5: AAPL
Symbol 6: TSLA
Symbol 7: ES1! (E-mini S&P)
Symbol 8: NQ1! (E-mini Nasdaq)
```

**Tips:**
- Use full TradingView format (e.g., "BINANCE:BTCUSDT", "NASDAQ:AAPL")
- Mix asset classes for diversification
- Test tickers first (wrong format = no data)

---

### Step 2: Set Timeframes (Optional)

Each symbol can have its own timeframe!

**Example:**
```
Symbol 1-2: 1H (crypto)
Symbol 3-4: 4H (stocks swing)
Symbol 5-6: 15m (stocks scalp)
Symbol 7-8: Daily (futures position)
```

**Why?** Scan multiple horizons simultaneously

---

### Step 3: Set Quality Filter

**Minimum Confluence Score** (default: 40)
- Set to 60+ = Only see potential Premium/Elite signals
- Set to 40+ = See all decent potential signals
- Higher = Fewer but potentially better signals

**ADX Threshold** (default: 20)
- Minimum trend strength required
- Higher = Stronger trends only

---

## How to Use It
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">🎓 Essential Learning Guide</span>

### Workflow: Active Scanning

1. **Glance at Grid** - Look for ⭐⭐⭐ potential Elite or ⭐⭐ potential Premium signals
2. **Check AGE** - Prefer fresh signals (0-10 bars)
3. **Click Symbol** - Load that chart to verify
4. **Confirm Setup** - Check levels, structure, context
5. **Execute** - Enter trade (for educational example)
6. **Example TP1** - Potential profit target at calculated level
7. **Monitor P&L** - Watch the Grid track your trade

**Repeat every hour/day** depending on your timeframes

---

## Real Example

**Grid showing:**
- **BTC/USD** = BUY, Score 91 ⭐⭐⭐, Age 2 bars
- Price: $64,200, TP1: $65,800

**You:**
1. See the potential Elite signal (91 score, fresh age)
2. Click to load BTC chart
3. Verify: Price at support + potential volume spike + no major resistance nearby
4. Enter long at $64,300
5. Set TP1 at $65,800 (from Grid)
6. Grid shows P&L updating in real-time

**Result:** Price hits $65,800 = +$1,500 profit per coin (2.5%)

---

## Quality Tiers (Know These!)

**⭐⭐⭐ Elite (80-100)**
- All factors aligned
- Multi-timeframe confirmation
- **Win Rate:** 70-80%
- **Action:** Take immediately

**⭐⭐ Premium (60-79)**
- Most factors aligned
- Strong core setup
- **Win Rate:** 60-70%
- **Action:** Take with normal stops

**⭐ Standard (40-59)**
- Basic setup confirmed
- **Win Rate:** 50-60%
- **Action:** Selective (only if matches your bias)

**Weak (0-39)**
- Poor confluence
- **Win Rate:** <50%
- **Action:** Skip

---

## Settings (Keep It Simple)

**Symbols:** Add your 8 tickers (use correct TradingView format)

**Timeframes:** Set each symbol's timeframe (or leave default = chart timeframe)

**Filters:**
- **ADX Threshold:** 20 (default, works for most)
- **Min Score:** 60 (recommended for beginners - Premium+ only)
- **HTF Alignment:** Enable for swing trading, disable for scalping

**Table Size:**
- Normal = Default (full info)
- Small = Less space
- Large = Bigger text

---

## Common Mistakes (Avoid These!)
<span style="color: #dc2626; font-weight: 600; font-size: 1.1em;">🚨 Critical Errors to Avoid</span>

❌ **Wrong ticker format**
→ ✅ Use exact TradingView format: "BINANCE:BTCUSDT" not "BTC" or "BTCUSD"

❌ **Trading every signal**
→ ✅ Focus on Elite ⭐⭐⭐ and Premium ⭐⭐ when learning

❌ **Chasing old signals**
→ ✅ If AGE > 15 bars, signal is stale - skip it

❌ **Ignoring P&L column**
→ ✅ If signal shows -5% P&L and age is high, it failed - don't enter

❌ **Not verifying on chart**
→ ✅ Always load the chart to confirm context before trading

---

## Frequently Asked Questions

**Q: Can I add more than 8 symbols?**
**A:** Not in one Grid (performance limit). But you can run 2 Grid instances = 16 symbols total.

**Q: Why doesn't my symbol show data?**
**A:** Check:
1. Ticker format correct?
2. Data available on your TradingView plan?
3. Exchange prefix included? (e.g., "BINANCE:" for crypto)

**Q: What's a "good" score?**
**A:**
- 80+ = Excellent
- 60-79 = Good
- 40-59 = Okay
- <40 = Skip

**Q: Should I trade every potential Elite signal?**
**A:** Not necessarily. Elite = potentially high quality, but still check:
- Market context
- Your trading plan
- Risk management
No system is 100%.

**Q: How often does it update?**
**A:** Every time a bar closes on the configured timeframes. If Symbol 1 is set to 15m, it updates every 15 minutes.

**Q: Can I get alerts?**
**A:** No (table-based indicators can't create alerts). Workaround: When you see potential Elite signal, set manual alert on that symbol's chart.

**Q: Can I scan different timeframes for same symbol?**
**A:** Yes! Example:
- Symbol 1: SPY 15m (scalps)
- Symbol 2: SPY 1H (day trades)
- Symbol 3: SPY 4H (swings)

---

## Quick Cheat Sheet

| Score | Quality | Win Rate | Action |
|-------|---------|----------|--------|
| 80-100 ⭐⭐⭐ | Elite | 70-80% | Take immediately |
| 60-79 ⭐⭐ | Premium | 60-70% | Take with normal risk |
| 40-59 ⭐ | Standard | 50-60% | Be selective |
| 0-39 | Weak | <50% | Skip |

| Age | Status | Action |
|-----|--------|--------|
| 0-5 bars | Fresh | Best entries |
| 6-15 bars | Moderate | Still acceptable if valid |
| 16+ bars | Stale | Probably too late, skip |

---

## Best Practices
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">✅ Recommended Approach</span>

1. **Start with 3-5 symbols** - Don't use all 8 slots immediately
2. **Set Min Score to 70** - Only see Premium/Elite as beginner
3. **Check AGE before entering** - Fresh signals (0-5 bars) have highest success
4. **Verify on chart** - Don't blindly trade Grid signals
5. **Diversify asset classes** - Don't fill all 8 slots with correlated assets (e.g., all crypto)
6. **Track performance** - After 20 trades, calculate your win rate by tier

---

## Support

Need help? Check out:
- [<span class="signal-pilot-brand">Signal Pilot</span> Suite Overview](suite-index/) - How to combine with other indicators
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Get help

---

**Remember:** Augury Grid finds the opportunities across multiple symbols. YOU verify context and execute. It's a scanner, not an auto-trader.

**Scan smart, trade better!** 🎯

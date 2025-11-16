# Augury Grid v1.0 - Scan 8 Symbols at Once

<div class="admonition tip" style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4;">
<p class="admonition-title" style="color: #06b6d4; font-weight: 600;">📚 Want to Master Augury Grid?</p>
<p><a href="learning.html" style="color: #06b6d4; font-weight: 600; text-decoration: none;">→ Advanced Learning Guide</a> — Quality scoring, symbol selection, watchlist strategies, and screening workflows</p>
</div>

## 🎯 What Does It Do?
<span style="color: #0aa1d5; font-weight: 600;">Core Functionality</span>

Augury Grid is a **multi-symbol screener table** that sits on charts and monitors 8 different instruments simultaneously. Instead of flipping between charts, all signals are displayed in one clean table.

**Best for:** Multi-asset traders, anyone managing watchlists

---

## How It Works (Simple Version)

**The Core Signal:**
Augury watches for MACD histogram crossing zero (momentum shift) on all 8 symbols

**The Smart Part:**
Not all MACD crosses are equal. Each signal gets a **quality score 0-100** based on 7 factors:

1. **ADX Strength** - Is there a strong trend?
2. **OBV Volume** - Does volume confirm the move?
3. **HTF Alignment** - Does higher timeframe agree?
4. **RSI Context** - Are we oversold/overbought (good) or chasing (bad)?
5. **Histogram Strength** - How powerful is the cross?
6. **Distance from Average** - Are we buying value or chasing tops?
7. **RSI Trend** - Is momentum confirming?

**Result:** Signals rated 0-100 with quality tiers

---

## The Grid Display (What Can Be Seen)

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

**SYMBOL** - The ticker being watched (these are configured by the user)

**SIGNAL** - Current direction
- **BUY** (green) = Bullish momentum shift
- **SELL** (red) = Bearish momentum shift
- **-** (gray) = No signal

**SCORE** - Quality rating 0-100
- ⭐⭐⭐ **Elite** (80-100) = Can be taken immediately
- ⭐⭐ **Premium** (60-79) = High quality
- ⭐ **Standard** (40-59) = Acceptable
- **Weak** (0-39) = Can be skipped

**PRICE** - Current price (real-time)

**TP1** - First target (calculated automatically from ATR)

**AGE** - Bars since signal fired
- 0-5 bars = Fresh (best)
- 6-15 bars = Moderate
- 16+ bars = Stale (probably too late)

**P&L** - How much profit/loss since signal
- Green = Winning
- Red = Losing
- Performance can be tracked

---

## Setup (3 Simple Steps)

### Step 1: Configure Symbols

In settings, 8 tickers can be added:

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
- Full TradingView format can be used (e.g., "BINANCE:BTCUSDT", "NASDAQ:AAPL")
- Asset classes can be mixed for diversification
- Tickers can be tested first (wrong format = no data)

---

### Step 2: Set Timeframes (Optional)

Each symbol can have its own timeframe.

**Example:**
```
Symbol 1-2: 1H (crypto)
Symbol 3-4: 4H (stocks swing)
Symbol 5-6: 15m (stocks scalp)
Symbol 7-8: Daily (futures position)
```

**Why?** Multiple horizons can be scanned simultaneously

---

### Step 3: Set Quality Filter

**Minimum Confluence Score** (default: 40)
- Setting to 60+ = Only potential Premium/Elite signals are seen
- Setting to 40+ = All decent potential signals are seen
- Higher = Fewer but potentially better signals

**ADX Threshold** (default: 20)
- Minimum trend strength required
- Higher = Stronger trends only

---

## How to Use It
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">🎓 Essential Learning Guide</span>

### Workflow: Active Scanning

1. **Grid can be glanced at** - ⭐⭐⭐ potential Elite or ⭐⭐ potential Premium signals can be looked for
2. **AGE can be checked** - Fresh signals (0-10 bars) are preferred
3. **Symbol can be clicked** - That chart can be loaded to verify
4. **Setup can be confirmed** - Levels, structure, context can be checked
5. **Execution can occur** - Trade can be entered (for educational example)
6. **Example TP1 consideration** - Potential profit target at calculated level
7. **P&L can be monitored** - The Grid tracks the trade

**This can be repeated every hour/day** depending on timeframes

---

## Real Example

**Grid showing:**
- **BTC/USD** = BUY, Score 91 ⭐⭐⭐, Age 2 bars
- Price: $64,200, TP1: $65,800

**What can be done:**
1. The potential Elite signal can be observed (91 score, fresh age)
2. BTC chart can be clicked to load
3. Verification can occur: Price at support + potential volume spike + no major resistance nearby
4. Long entry consideration at $64,300
5. TP1 at $65,800 can be set (from Grid)
6. P&L updating in real-time can be seen in Grid

**Result:** Price hits $65,800 = +$1,500 profit per coin (2.5%)

---

## Quality Tiers (Reference Guide)

**⭐⭐⭐ Elite (80-100)**
- All factors aligned
- Multi-timeframe confirmation
- **Win Rate:** 70-80%
- **Action:** Can be taken immediately

**⭐⭐ Premium (60-79)**
- Most factors aligned
- Strong core setup
- **Win Rate:** 60-70%
- **Action:** Can be taken with normal stops

**⭐ Standard (40-59)**
- Basic setup confirmed
- **Win Rate:** 50-60%
- **Action:** Selective (only if matches bias)

**Weak (0-39)**
- Poor confluence
- **Win Rate:** <50%
- **Action:** Can be skipped

---

## Settings (Keep It Simple)

**Symbols:** 8 tickers can be added (correct TradingView format can be used)

**Timeframes:** Each symbol's timeframe can be set (or default = chart timeframe can be left)

**Filters:**
- **ADX Threshold:** 20 (default, works for most)
- **Min Score:** 60 (recommended for beginners - Premium+ only)
- **HTF Alignment:** Can be enabled for swing trading, disabled for scalping

**Table Size:**
- Normal = Default (full info)
- Small = Less space
- Large = Bigger text

---

## Common Mistakes
<span style="color: #dc2626; font-weight: 600; font-size: 1.1em;">🚨 Critical Errors</span>

❌ **Wrong ticker format**
→ ✅ Exact TradingView format can be used: "BINANCE:BTCUSDT" not "BTC" or "BTCUSD"

❌ **Trading every signal**
→ ✅ Focus on Elite ⭐⭐⭐ and Premium ⭐⭐ when learning

❌ **Chasing old signals**
→ ✅ If AGE > 15 bars, signal is stale - can be skipped

❌ **Ignoring P&L column**
→ ✅ If signal shows -5% P&L and age is high, it failed - entry is not recommended

❌ **Not verifying on chart**
→ ✅ The chart is commonly loaded to confirm context before trading

---

## ❓ Frequently Asked Questions
<span style="color: #10b981; font-weight: 600;">Common Questions</span>

**Q: Can I add more than 8 symbols?**
**A:** Not in one Grid (performance limit). But 2 Grid instances can be run = 16 symbols total.

**Q: Why doesn't my symbol show data?**
**A:** The following can be checked:
1. Ticker format correct?
2. Data available on TradingView plan?
3. Exchange prefix included? (e.g., "BINANCE:" for crypto)

**Q: What's a "good" score?**
**A:**
- 80+ = Excellent
- 60-79 = Good
- 40-59 = Okay
- <40 = Can be skipped

**Q: Should I trade every potential Elite signal?**
**A:** Not necessarily. Elite = potentially high quality, but the following should still be checked:
- Market context
- Trading plan
- Risk management
No system is 100%.

**Q: How often does it update?**
**A:** Every time a bar closes on the configured timeframes. If Symbol 1 is set to 15m, it updates every 15 minutes.

**Q: Can I get alerts?**
**A:** No (table-based indicators can't create alerts). Workaround: When potential Elite signal is seen, manual alert can be set on that symbol's chart.

**Q: Can I scan different timeframes for same symbol?**
**A:** Yes. Example:
- Symbol 1: SPY 15m (scalps)
- Symbol 2: SPY 1H (day trades)
- Symbol 3: SPY 4H (swings)

---

## Quick Cheat Sheet

| Score | Quality | Win Rate | Action |
|-------|---------|----------|--------|
| 80-100 ⭐⭐⭐ | Elite | 70-80% | Can be taken immediately |
| 60-79 ⭐⭐ | Premium | 60-70% | Can be taken with normal risk |
| 40-59 ⭐ | Standard | 50-60% | Selectivity recommended |
| 0-39 | Weak | <50% | Can be skipped |

| Age | Status | Action |
|-----|--------|--------|
| 0-5 bars | Fresh | Best entries |
| 6-15 bars | Moderate | Still acceptable if valid |
| 16+ bars | Stale | Probably too late, can be skipped |

---

## Best Practices
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">✅ Recommended Approach</span>

1. **Starting with 3-5 symbols** - All 8 slots shouldn't be used immediately
2. **Min Score can be set to 70** - Only Premium/Elite seen as beginner
3. **AGE should be checked before entering** - Fresh signals (0-5 bars) have highest success
4. **Chart verification is recommended** - Grid signals shouldn't be blindly traded
5. **Asset classes can be diversified** - All 8 slots shouldn't be filled with correlated assets (e.g., all crypto)
6. **Performance can be tracked** - After 20 trades, win rate by tier can be calculated

---

## Support

Help is available at:
- [<span class="signal-pilot-brand">Signal Pilot</span> Suite Overview](https://docs.signalpilot.io/suite-index/) - How to combine with other indicators
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Get help

---

## See Also

**Related Pages:**
- [How to Use Screener](../how-to-screener.md) - Detailed guide for using Augury Grid
- [Pentarch v1.0](pentarch-v10.md) - One of the indicators available in screener
- [Harmonic Oscillator v1.0](harmonic-oscillator-v10.md) - Another indicator available in screener
- [Volume Oracle v1.0](minimal-flow-v10.md) - Volume intelligence in screener
- [All Indicators At A Glance](ref-cheatsheets/all-indicators-at-a-glance.md) - Quick reference for all screened indicators

---

**Important consideration:** Augury Grid finds the opportunities across multiple symbols. Context is verified and execution occurs by the trader. It's a scanner, not an auto-trader.

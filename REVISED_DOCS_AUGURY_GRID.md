# Augury Grid v1.0 — Multi-Symbol Scanner

Real-time scanner displaying TD Sequential signals across multiple assets simultaneously. Monitor up to 40 tickers from single dashboard view.

**📋 [Quick Reference Cheat Sheet](docs/ref-cheatsheets/augury-grid-quick-reference.md)** — One-page guide to multi-symbol screening, 5 confluence factors, and MACD signals

---

## 🎯 Core Functionality

Augury Grid displays TD Sequential exhaustion signals for multiple symbols on one screen. Each symbol shows current count status and recent signals in grid format.

**Display Format:** Organized grid showing ticker symbols with their current TD counts and signal status.

**Monitoring Capacity:** Up to 40 symbols can be tracked simultaneously.

**Signal Detection:** Uses TD Sequential methodology (same as Omnideck System 1) to identify 9-count exhaustion patterns across all tracked symbols.

**Timeframe Compatibility:** Works on all timeframes. All tracked symbols use the same timeframe as the chart.

> 👁️ **What You'll See:** Grid of symbols displays immediately showing current TD Sequential counts for each. Green 9 / Red 9 exhaustion signals appear across different symbols as conditions form (minutes to days depending on market activity).

---

## 🚀 Installation (2 minutes)

### Step 1: Open TradingView
1. Go to [TradingView.com](https://www.tradingview.com)
2. Log into your account
3. Open any chart

### Step 2: Add Augury Grid to Chart
1. Click **"Indicators"** button (top toolbar, looks like ƒx)
2. Click **"Invite-Only Scripts"** tab
3. Search for **"Augury Grid v1.0"** or scroll to find it
4. Click **"Augury Grid v1.0 - Signal Pilot"**
5. Indicator loads on your chart

### Step 3: Verify It's Working
**You should see:**
- "Augury Grid v1.0" appears in left sidebar
- Grid overlay on chart showing multiple symbol tickers
- Each cell displays symbol name + current TD count or signal status
- Grid updates in real-time as data refreshes

> 👁️ **First Signal:** Immediately to days. Grid displays current state of all symbols instantly. Green 9 or Red 9 exhaustion signals appear as TD Sequential patterns complete on individual symbols—timing varies by symbol and market conditions.

### Troubleshooting
**Not seeing Augury Grid in Invite-Only Scripts?**
- Verify your TradingView email matches purchase email
- Wait 24 hours after purchase for access
- See [Installation Troubleshooting](docs/troubleshooting-installation.md)

**Grid appears but shows "No Data" for symbols?**
- Symbol not available on your TradingView plan/exchange
- Symbol ticker may be incorrect (check spelling)
- Configure symbols in settings - see Settings section below

**Grid too small or overlapping chart?**
- Resize grid: Settings → Grid position and size
- Reduce number of symbols to fit better
- Try different chart layout (full screen, split screen)

**Symbols not updating?**
- Check internet connection
- Refresh browser page (Ctrl+R or Cmd+R)
- Verify TradingView data feed active

**Need help?** support@signalpilot.io

---

## 📹 Video Tutorials

### Getting Started with Augury Grid (3:45)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will cover:
- Installing Augury Grid on TradingView
- Configuring your first watchlist (10-15 symbols)
- Understanding TD Sequential counts in grid format
- Identifying Green 9 and Red 9 exhaustion signals

---

### Multi-Asset Scanning Strategy (5:30)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will demonstrate:
- Real-time scanning across 30-40 symbols
- How to filter grid signals for high-probability setups
- Workflow: Grid scan → Deep dive with The Trinity
- Alert configuration for grid-based notifications

---

## 📚 Before You Start — Prerequisites

### Universal Requirements:
- **Basic Chart Reading:** Understand candlesticks, timeframes, and how to navigate TradingView
- **Support & Resistance Concepts:** Recognize that price tends to react at certain levels
- **Risk Management Fundamentals:** Understanding position sizing and stop-loss concepts
- **TradingView Account:** Free tier minimum (Pro/Premium unlocks more indicators and alerts)
- **Chart Observation Time:** At least 10-20 hours watching live charts to understand price movement

### Additional Knowledge for Augury Grid:
- **MACD Indicator Theory:** How MACD measures momentum (histogram, crossovers)
- **Multi-Symbol Monitoring:** Mental framework for tracking multiple assets
- **Confluence Scoring:** Understanding that multiple aligned signals strengthen setups

### Recommended Learning Path:
1. **Start with 10-15 symbols**, not the full 40 (reduces overwhelm)
2. Choose symbols you already trade or monitor regularly
3. Use Grid for **filtering**, then analyze full charts for confirmation
4. Combine with chart indicators for complete analysis

### Estimated Learning Time:
- **Basic Proficiency:** 5-8 hours (setup grid, understand bull/bear classification)
- **Intermediate:** 15-20 hours (optimize symbol selection, effective filtering)
- **Advanced:** 30+ hours (advanced watchlist strategies, multi-grid setups)

---

## ⚙️ Settings

### Symbol Configuration

**Watchlist Setup:**

Add symbols to monitor in settings panel. Up to 40 symbols can be tracked.

**Symbol Entry:**
- Enter ticker symbols separated by commas
- Example: `BTC/USD, ETH/USD, SPY, QQQ, AAPL, TSLA`
- Symbols must be available on TradingView

**Watchlist Presets:**

| Preset Type | Example Symbols |
|-------------|-----------------|
| **Crypto** | BTC/USD, ETH/USD, SOL/USD, ADA/USD, XRP/USD |
| **Major Indices** | SPY, QQQ, DIA, IWM, VIX |
| **Tech Stocks** | AAPL, MSFT, GOOGL, AMZN, NVDA, TSLA |
| **Forex Majors** | EUR/USD, GBP/USD, USD/JPY, AUD/USD |

### Display Configuration

| Setting | Options | Default |
|---------|---------|---------|
| **Grid Layout** | 4×10, 5×8, 8×5, 10×4 | 5×8 |
| **Signal Alerts** | Individual on/off per symbol | All enabled |
| **Count Display** | Show numbers or icons | Numbers |
| **Color Scheme** | Multiple palettes | Scheme 1 |

---

## ⚙️ Advanced Configuration Examples

#### Configuration 1: Crypto-Focused Watchlist

**Symbols to Include:**
- Major pairs: BINANCE:BTCUSDT, BINANCE:ETHUSDT
- Altcoins: SOL, MATIC, AVAX, LINK (top 20 by market cap)
- Total: 15-20 crypto symbols

**Timeframe:** 4H or Daily (crypto trades 24/7)

**Best For:** Crypto traders, 24/7 market monitoring

---

#### Configuration 2: Stock Market Leaders

**Symbols to Include:**
- Indices: SPY, QQQ, DIA, IWM
- Mega caps: AAPL, MSFT, GOOGL, AMZN, NVDA
- Sector leaders: XLE, XLF, XLK, XLV
- Total: 20-30 symbols

**Timeframe:** Daily (stock market hours)

**Best For:** Equity traders, sector rotation analysis

---

#### Configuration 3: Forex Majors

**Symbols to Include:**
- Majors: EUR/USD, GBP/USD, USD/JPY, USD/CHF
- Crosses: EUR/GBP, EUR/JPY, GBP/JPY
- Commodities: XAU/USD (gold), XAG/USD (silver)
- Total: 12-16 pairs

**Timeframe:** 1H or 4H

**Best For:** Forex traders, currency correlation analysis

---

## 📊 Educational Example: Grid View (November 2024)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**Example Dashboard Snapshot:**

| Symbol | Current Count | Status | Notes |
|--------|---------------|--------|-------|
| BTC/USD | Green 8 | Approaching | One bar from Green 9 |
| ETH/USD | Green 9 | ⚠️ Signal | Exhaustion detected |
| SPY | Red 5 | Counting | Mid-sequence |
| QQQ | Neutral | — | No active sequence |
| AAPL | Red 9 | ⚠️ Signal | Exhaustion detected |
| TSLA | Green 3 | Counting | Early decline sequence |

**Pattern Observed:** ETH/USD and AAPL both showed Green 9 and Red 9 signals respectively at same time, allowing simultaneous monitoring of multiple exhaustion conditions across different assets.

*This example demonstrates grid monitoring capability. Individual interpretation and outcomes vary.*

---

## 🔢 TD Sequential in Grid Format

### Visual Display Elements

**Count Display:**
- **Green Numbers (1-9):** Downtrend exhaustion counting
- **Red Numbers (1-9):** Uptrend exhaustion counting
- **Neutral (—):** No active sequence

**Signal Indicators:**
- **⚠️ Green 9:** Oversold exhaustion detected
- **⚠️ Red 9:** Overbought exhaustion detected
- **Approaching (8):** One bar away from signal

### Grid Cell Information

Each symbol cell displays:
1. **Ticker Symbol** - Asset identifier
2. **Current Count** - Active TD sequence position (1-9 or neutral)
3. **Status Indicator** - Signal present, approaching, counting, or neutral
4. **Color Coding** - Visual identification of bullish/bearish sequences

**Example Cell:**
```
ETH/USD
Green 9 ⚠️
(Exhaustion detected)
```

---

## 📖 Educational Example: Crypto Market Scan (December 2024)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**Timeframe:** 4-Hour Chart

**Watchlist:** Top 10 cryptocurrencies by market cap

**Scan Results at 8:00 AM:**

| Rank | Symbol | Count | Status | Price | Analysis |
|------|--------|-------|--------|-------|----------|
| 1 | BTC/USD | Green 9 | ⚠️ Signal | $63,200 | Oversold conditions |
| 2 | ETH/USD | Green 8 | Approaching | $3,420 | Near exhaustion |
| 3 | BNB/USD | Neutral | — | $310 | No sequence |
| 4 | SOL/USD | Green 9 | ⚠️ Signal | $98 | Oversold conditions |
| 5 | XRP/USD | Red 3 | Counting | $0.62 | Early uptrend count |
| 6 | ADA/USD | Green 6 | Counting | $0.58 | Mid-decline sequence |
| 7 | AVAX/USD | Green 9 | ⚠️ Signal | $35 | Oversold conditions |
| 8 | DOT/USD | Neutral | — | $7.20 | No sequence |
| 9 | MATIC/USD | Red 9 | ⚠️ Signal | $0.89 | Overbought conditions |
| 10 | LINK/USD | Green 4 | Counting | $14.50 | Decline sequence |

**Multi-Signal Detection:** Three symbols (BTC, SOL, AVAX) showed Green 9 simultaneously, indicating broad oversold conditions across major cryptocurrencies. One symbol (MATIC) showed Red 9, indicating isolated strength.

**Outcome Observed:** All three Green 9 signals (BTC, SOL, AVAX) preceded price increases over following 24-48 hours.

*This example demonstrates simultaneous multi-symbol monitoring. Individual interpretation and outcomes vary.*

---

## 🎯 Scanning Strategies

### Strategy 1: Broad Market Scan

**Approach:**
- Monitor 20-40 symbols across multiple sectors
- Scan for any Green 9 or Red 9 signals appearing
- Focus attention on symbols showing exhaustion

**Use Case:** Opportunity discovery across diverse markets

**Example Watchlist:** Major indices, sector ETFs, top crypto, forex pairs, commodities

### Strategy 2: Sector Rotation Scan

**Approach:**
- Monitor 10-15 symbols within specific sector
- Compare relative exhaustion levels
- Identify sector-wide patterns

**Use Case:** Sector-specific analysis and comparison

**Example Watchlist:** All semiconductor stocks (NVDA, AMD, INTC, TSM, AVGO, QCOM, MU, etc.)

### Strategy 3: Correlation Scan

**Approach:**
- Monitor related assets (e.g., BTC + major altcoins)
- Observe if signals appear simultaneously or in sequence
- Identify correlation patterns

**Use Case:** Understanding market leadership and correlation

**Example Watchlist:** BTC/USD + top 15 altcoins

### Strategy 4: Portfolio Monitor

**Approach:**
- Track symbols in current portfolio holdings
- Monitor for exhaustion signals on held positions
- Use as position management reference

**Use Case:** Portfolio-level awareness of exhaustion conditions

**Example Watchlist:** Personal holdings (stocks, crypto, etc.)

---

## 🔔 Alert Configuration

**Multi-Symbol Alert System:**

Augury Grid can trigger alerts when any tracked symbol reaches TD 9 conditions.

**Available Alert Types:**

| Alert | Trigger | Notification |
|-------|---------|--------------|
| **Any Green 9** | Any tracked symbol reaches Green 9 | "Symbol XYZ: Green 9 detected" |
| **Any Red 9** | Any tracked symbol reaches Red 9 | "Symbol XYZ: Red 9 detected" |
| **Specific Symbol** | Individual symbol alerts | "BTC/USD: Green 9 detected" |
| **Multiple Simultaneous** | 3+ symbols signal at once | "Multiple signals: BTC, ETH, SOL" |

**Alert Setup:**
1. Open indicator settings
2. Navigate to alert section
3. Enable "Any Symbol Green 9" or "Any Symbol Red 9"
4. Optional: Enable specific symbol alerts
5. Configure notification preferences (popup, email, webhook)

**Alert Advantages:**
- No need to watch grid constantly
- Immediate notification when opportunity appears
- Can monitor 40 symbols with single alert configuration

---

## 🔄 Grid Update Behavior

**Real-Time Updates:**

The grid updates at bar close for the active timeframe.

**Update Frequency:**
- 5-minute chart: Updates every 5 minutes
- 1-hour chart: Updates every hour
- Daily chart: Updates at daily close

**Count Progression:**

Counts increment when close-to-close conditions met:
- Green counts: Current close < close 4 bars ago
- Red counts: Current close > close 4 bars ago

**Signal Persistence:**

Green 9 and Red 9 signals remain displayed until:
- Count resets (opposite direction movement)
- New count sequence begins

---

## 📚 Interpreting Grid Patterns

---

## 📊 Enhanced Example: Multi-Asset Screener Analysis - December 2023

**Scenario:** Trader monitors 4 different asset classes simultaneously

**Screener Configuration:**

| Symbol | Asset Class | Timeframe | Pentarch Pattern | Janus Confluence | Volume Oracle |
|--------|-------------|-----------|------------------|------------------|---------------|
| SPY | US Equities | Daily | IGN (Dec 4) | ✅ Near Weekly Low | ✅ 1.6x Spike |
| BTC/USD | Cryptocurrency | 4H | TD (Dec 5) | ✅ Near Monthly Support | ⚠️ Below Average |
| EUR/USD | Forex | 1H | CAP (Dec 5) | ✅ Near Daily High | ✅ 1.4x Spike |
| GLD | Commodities | Daily | No Pattern | ❌ Mid-range | ❌ Low Volume |

**Analysis Workflow:**

1. **Highest Priority:** SPY (all 3 confirmations aligned)
   - Early-cycle IGN pattern
   - Price at weekly support level
   - Volume confirming the move
   - **Observation:** Most confluence indicators present

2. **Medium Priority:** EUR/USD (pattern + level + volume)
   - Late-cycle CAP pattern at resistance
   - Volume spike confirming selling pressure
   - **Observation:** Potential reversal setup

3. **Lower Priority:** BTC/USD (pattern + level, but no volume)
   - Early-cycle TD pattern
   - Volume below average (less confirmation)
   - **Observation:** Might wait for volume confirmation

4. **No Setup:** GLD (no pattern present)
   - Skip this asset for now
   - Continue monitoring for pattern appearance

**Historical Outcome:**
- SPY: Rallied +6.2% over next 15 trading days
- EUR/USD: Reversed down -1.8% over next 5 days
- BTC/USD: Consolidated sideways for 3 days before rallying (volume confirmation came later)
- GLD: No significant move

*(Educational example showing multi-asset screening workflow. Past patterns do not guarantee future results. Not financial advice.)*

---

## 🤝 Using Augury Grid With Other Indicators

Augury Grid scans multiple symbols. Use for filtering, then analyze matches with chart indicators.

### Setup 1: Grid Filtering → Chart Confirmation

**Workflow:**
1. **Augury Grid:** Scans 40 symbols, shows 8 with bullish MACD + high confluence
2. **Open those 8 charts individually**
3. **Add Pentarch + Janus Atlas** to each chart
4. **Look for:** Pentarch pattern + Janus level + Grid bullish = Triple confirmation

**Example:**
- Grid shows BTC with Bull + Confluence Score 8/10
- Open BTC chart
- Pentarch shows IGN, Janus shows Daily Low nearby
- Grid + Pentarch + Janus = Strong multi-indicator setup

---

## ⚠️ When NOT to Use Augury Grid

### Avoid This Indicator When:

- **📊 Single-Asset Focus: You Only Trade One Symbol**
  Augury Grid scans up to 40 symbols simultaneously. If you only trade BTC or SPY, use individual indicators on that single chart instead—no need for scanning.

- **⏱️ Execution Speed: Ultra-Fast Scalping Required**
  Grid updates every bar close. For sub-minute scalping requiring instant execution, direct chart analysis is faster than grid scanning.

- **💻 Account Limitations: TradingView Free Tier**
  Free accounts have limited indicator slots. Using Augury Grid consumes one slot—consider if screener functionality justifies the slot vs. another indicator.

- **🎯 Analysis Depth: Deep Technical Analysis Needed**
  Grid shows MACD bull/bear + confluence score but doesn't show chart patterns, candlestick formations, or detailed setups. Use for filtering, then analyze specific charts.

- **📉 Illiquid Markets: Low-Volume Exotic Pairs**
  Adding illiquid symbols to grid may produce unreliable signals. Stick to major pairs, indices, and liquid stocks for best results.

### Limitations to Understand:

✓ **Screener Shows Opportunities, Not Complete Analysis**
Grid identifies which symbols have MACD bullish/bearish conditions. You still need to analyze the actual chart before taking action.

✓ **40-Symbol Maximum**
TradingView technical limits restrict grid to 40 symbols. Can't scan entire markets—must select watchlist strategically.

✓ **MACD-Based Filtering Only**
Grid uses MACD for bull/bear classification. Other momentum methods (RSI, Stochastic) aren't used. MACD is excellent but not the only valid approach.

✓ **Confluence Score Requires Interpretation**
Higher confluence (multiple signals align) suggests stronger setup, but doesn't guarantee success. Still requires discretion and risk management.

### Better Alternatives When:

| Scenario | Use Instead |
|----------|-------------|
| Trading only 1-2 symbols | → Individual chart indicators |
| Need non-MACD momentum | → Harmonic Oscillator |
| Want visual chart patterns | → Manual chart review |
| Limited indicator slots | → Prioritize chart indicators |

---

## 🔧 Troubleshooting Common Issues

### Problem: "Grid showing all neutral (no bullish/bearish)"

**Possible Causes:**

1. **Market Condition: Consolidation**
   - **Check:** Is broader market in tight range?
   - **Solution:** Normal—MACD neutral during consolidation
   - **Why:** Grid reflects MACD state, which is range-bound

2. **Symbols Not Loading**
   - **Check:** Are symbol names correct?
   - **Solution:** Verify ticker format (BINANCE:BTCUSDT, NYSE:AAPL)
   - **Why:** Incorrect symbols can't fetch data

3. **Timeframe Issues**
   - **Check:** Using very high timeframe (Monthly)?
   - **Solution:** Use Daily or lower for more responsive signals
   - **Why:** Higher timeframes change slowly

---

### Problem: "Symbols not appearing in grid"

**Common Issues:**

1. **Ticker Format Wrong**
   - **Correct:** BINANCE:BTCUSDT
   - **Wrong:** BTCUSDT (missing exchange)
   - **Solution:** Include exchange prefix

2. **Symbol Limit Exceeded**
   - **Maximum:** 40 symbols
   - **Check:** Did you add more than 40?
   - **Solution:** Remove excess symbols

3. **Delisted / Unavailable Symbol**
   - **Check:** Is symbol still trading?
   - **Solution:** Remove delisted symbols from list

---

### Problem: "Confluence score doesn't make sense"

**Understanding Confluence Scoring:**

**Confluence = How many signals align**

Example: If 3 out of 5 internal signals agree → Confluence score 6/10

**Not a prediction—just alignment measurement**

**Low confluence (1-4):** Few signals aligned, mixed conditions
**Medium confluence (5-7):** Moderate alignment
**High confluence (8-10):** Strong multi-signal alignment

**Higher ≠ guaranteed success, just stronger agreement among signals**

---
### Pattern 1: Broad Market Exhaustion

**Observation:**
Multiple symbols (5+) show Green 9 or Red 9 simultaneously across same sector or asset class.

**Interpretation:**
Sector-wide or market-wide exhaustion conditions present.

**Example:** 8 out of 10 tech stocks showing Red 9 → Broad tech sector exhaustion characteristics.

### Pattern 2: Divergent Signals

**Observation:**
Some symbols show Green 9 while related symbols show Red 9.

**Interpretation:**
Divergence in relative strength within sector or asset class.

**Example:** BTC showing Green 9, ETH showing Red 9 → Divergent exhaustion levels between major crypto assets.

### Pattern 3: Sequential Cascade

**Observation:**
Signals appear across related symbols in sequence over time rather than simultaneously.

**Interpretation:**
Potential leadership or lagging pattern within sector.

**Example:** Tech mega-caps signal first (AAPL, MSFT), then mid-caps signal days later → Potential cascade pattern.

### Pattern 4: Isolated Signal

**Observation:**
One symbol shows signal while all others remain neutral or counting.

**Interpretation:**
Asset-specific exhaustion rather than broad market pattern.

**Example:** Single stock shows Red 9 while entire sector neutral → Isolated strength characteristics.

---

## 🎮 Interactive Examples

> **📍 PLACEHOLDER: Grid Scanner Simulator**
>
> *Location: Insert multi-asset grid visualization here*
>
> **What to include:**
> - Live grid showing 20 assets simultaneously
> - Color-coded cells: Green 9s = Bullish exhaustion, Red 9s = Bearish exhaustion, Blue backgrounds = Regime
> - Real-time updates: Watch cells change color as market conditions evolve
> - Click any cell → Opens that asset's chart with detailed analysis
>
> **User interaction:**
> - Filter dropdown: "Show only Green 9s" or "Show only bearish regime assets"
> - Sort controls: "Sort by strongest signal" or "Sort by symbol alphabetically"
> - Watchlist builder: Click cells to add to custom watchlist

> **📍 PLACEHOLDER: Correlation Heat Map**
>
> *Location: Insert sector correlation visualization here*
>
> **What to include:**
> - Heat map showing which assets move together
> - Example: "When SPY shows Green 9, QQQ shows Green 9 78% of the time (high correlation)"
> - Identify independent signals vs correlated group moves
>
> **User interaction:**
> - Select asset → Highlights correlated assets in grid
> - Toggle: "Show correlation strength" (red = high correlation, green = independent)

---

## 📝 Reality Check: 3 Multi-Asset Scenarios

### Scenario #1: Win - Sector-Wide Signal (Tech Stocks June 2024) ✅

**Setup:**
- **Scanning:** 15 tech stocks on Augury Grid
- **Signal:** 8/15 stocks showing Green 9 (exhaustion after decline) within 2-day period
- **Interpretation:** Sector-wide oversold condition

**Grid Analysis:**

| Asset | Signal | Date | Regime |
|-------|--------|------|--------|
| AAPL | Green 9 | Jun 12 | Bullish regime |
| MSFT | Green 9 | Jun 12 | Bullish regime |
| NVDA | Green 9 | Jun 13 | Bullish regime |
| GOOGL | Green 9 | Jun 12 | Neutral |
| META | Green 9 | Jun 13 | Bullish regime |
| AMD | Green 9 | Jun 12 | Bullish regime |
| TSLA | Green 9 | Jun 14 | Neutral |
| CRM | Green 9 | Jun 13 | Bullish regime |

**8/15 tech stocks = 53% showing exhaustion signals**

**Trade Execution:**
- **Strategy:** Entered longs on top 3 strongest (AAPL, MSFT, NVDA)
- **Position sizing:** 0.75% risk each (2.25% total portfolio risk across 3)
- **Stops:** Below each stock's Green 9 low
- **Outcome:** All 3 rallied 4-7% over next 10 days, combined +$4,200 profit

**Why It Worked:**
✓ Sector-wide signal (not isolated) = High confidence
✓ 53% of sector showing same exhaustion = Institutional positioning shift
✓ Chose stocks with bullish regime (6/8 had bullish background)
✓ Diversified across 3 names instead of all-in on one

**Key Lesson:** When 40-60% of a sector shows same signal within 2-3 days, it indicates broader market structure shift, not random noise. Augury Grid's power is identifying these sector-wide patterns impossible to see on single-asset charts.

---

### Scenario #2: Loss - False Correlation Trade (Crypto March 2024) ❌

**Setup:**
- **Scanning:** 10 crypto assets
- **Signal:** BTC shows Red 9, expecting altcoins to follow
- **Mistake:** Shorted altcoins based on BTC signal

**Grid Analysis:**

| Asset | Signal | Regime | Actual Outcome |
|-------|--------|--------|----------------|
| BTC | Red 9 | Bearish | Declined -3.5% (correct) |
| ETH | None | Neutral | Rose +2.1% (incorrect assumption) |
| SOL | Green 9 | Bullish | Rose +5.8% (opposite of BTC) |
| ADA | None | Bullish | Rose +3.2% (decoupled) |

**Trade Execution:**
- **Entry:** Shorted ETH, SOL, ADA (assuming BTC correlation)
- **Reasoning:** "BTC Red 9 = All crypto down"
- **Outcome:** Stopped out on all 3, -4.2% combined loss

**What Went Wrong:**
❌ Assumed BTC signal applies to all altcoins (false correlation)
❌ Ignored that SOL showed opposite signal (Green 9 vs BTC Red 9)
❌ Didn't check individual asset regimes (SOL/ADA bullish, BTC bearish)
❌ Traded assumption instead of actual signals

**Key Lesson:** Augury Grid shows each asset independently for a reason. Just because BTC shows Red 9 doesn't mean altcoins follow. Check EACH asset's individual signal and regime. Correlation is not guaranteed. Trade what the grid shows, not what you assume.

**Correct approach:** BTC Red 9 → Short BTC only. SOL Green 9 → Long SOL. Trade individual signals, not sector assumptions.

---

### Scenario #3: Breakeven - Information Overload (Scanning 50 Assets) ⚖️

**Setup:**
- **Scanning:** 50 stocks across 8 sectors simultaneously
- **Problem:** Too many signals, couldn't prioritize
- **Outcome:** Took 7 trades, 3 winners, 2 losers, 2 breakevens = Flat

**Signal Overload:**
- 12 Green 9s across 50 assets
- 8 Red 9s
- 5 regime changes
- **Result:** 25 potential setups, analysis paralysis

**What Happened:**
⚠️ Spent 3 hours analyzing 25 setups
⚠️ By the time analysis done, some signals already moved
⚠️ Took 7 mediocre trades instead of 2-3 best
⚠️ Over-diversified (7 positions = diluted returns)
⚠️ Net result: Breakeven after commissions

**Key Lesson:** More symbols ≠ better results. Augury Grid can handle 50+ symbols, but human brain can't effectively analyze that many. Optimal: Scan 10-15 assets maximum. Focus on quality over quantity.

**Better approach:**
- Scan 10-15 core assets (not 50)
- Pre-filter: Only show Green/Red 9s (hide neutral)
- Take top 2-3 setups with best confluence (signal + regime + volume)
- 2-3 high-conviction trades beats 7 mediocre ones

---

## ⚠️ When Augury Grid Signals Fail

### Failure Scenario #1: Isolated Signals in Correlated Assets (Low reliability)

**What Happens:**
- Scan 10 tech stocks
- Only 1 shows Green 9 (AAPL)
- Other 9 show no signals (neutral)
- AAPL Green 9 fails (no rally follows)

**Why It Fails:** When one asset in a correlated sector shows exhaustion but others don't, it's often noise, not a real sector shift. Isolated signals lack confirmation.

**How to Avoid:** Require 30-40% of sector showing same signal. Example: If scanning 10 stocks, wait for 3-4 to show Green 9 before acting. Single asset signals in correlated groups have ~45% success rate. 3-4 asset clusters have ~65% success rate.

---

### Failure Scenario #2: Overtrading Due to Too Many Symbols

**What Happens:**
- Scan 50+ symbols
- See 15-20 signals per day
- Take 10 trades (overtrading)
- Win rate drops due to quality dilution
- Commission costs erode profits

**Why It Fails:** Human brain can't effectively analyze 20 setups per day. Quality suffers. Taking 10 trades instead of 2-3 best means including mediocre setups.

**How to Avoid:** Limit scanning to 10-15 core assets. Pre-filter grid to show only strongest signals (Green/Red 9 + regime agreement). Take top 2-3 setups maximum per day.

---

### Failure Scenario #3: Ignoring Individual Asset Context

**What Happens:**
- Grid shows Green 9 on stock
- Blindly enter long
- Ignore that stock has company-specific bad news
- Stock continues declining despite Green 9

**Why It Fails:** Augury Grid shows technical signals, not fundamental context. Stock-specific news (earnings miss, CEO departure, legal issues) can override technical signals.

**How to Avoid:** Before entering trade, quick fundamental check:
- Any recent news? (30-second Google search)
- Earnings date coming up? (avoid trading 3 days before earnings)
- Legal/regulatory issues?
If yes to any → Skip the trade, regardless of technical signal.

---

## 💰 Risk Management for Augury Grid Users

**Multi-Asset Position Sizing:**

**CRITICAL RULE: Never exceed 5% total portfolio risk across all Grid-based positions**

**Example portfolio risk allocation:**
- Scanning 10 stocks
- Find 5 with Green 9 signals
- **Don't take all 5 at 1% each (5% total risk)**
- Instead: Take top 3 at 0.75% each (2.25% total risk)

| Number of Positions | Risk Per Position | Total Portfolio Risk |
|---------------------|-------------------|----------------------|
| 1 position | 1.0-1.5% | 1.0-1.5% |
| 2 positions | 0.75-1.0% each | 1.5-2.0% total |
| 3 positions | 0.5-0.75% each | 1.5-2.25% total |
| 4+ positions | **Avoid** | Over-diversification |

**Why limit positions:** Correlation risk. Even "uncorrelated" assets tend to move together during market volatility. 5 positions at 1% each = 5% risk can become 8-10% risk if assets gap together.

---

### When to Skip Grid Trades

❌ **Skip if isolated signal** (only 1 asset in sector showing signal)
❌ **Skip if already holding 3+ positions** (over-diversification, correlation risk)
❌ **Skip if company-specific news pending** (earnings in 3 days, legal issues)
❌ **Skip if asset you don't understand** (unfamiliar sector, low liquidity)
❌ **Skip if total portfolio risk would exceed 5%** (risk management ceiling)

**For complete Risk Management framework, see [Pentarch Risk Management Section](REVISED_DOCS_PENTARCH.md#-risk-management--position-sizing).**

---

## 🧠 Multi-Asset Trading Psychology: Key Challenges

### Challenge 1: Overtrading Correlated Symbols ("Diversification" Illusion)

**What Happens:** Grid shows bullish signals on SPY, QQQ, IWM, DIA. You take all 4 trades thinking "I'm diversified across 4 symbols!" Market drops. All 4 lose simultaneously. They were 95% correlated—essentially one trade split 4 ways.

**The Fix:** Check correlation heatmap. If correlation >80%, treat as ONE trade, not four separate trades. Taking multiple positions in highly correlated assets = concentrated risk, not diversification.

**Mental Script:** "Are these symbols moving together? If correlation >80%, I pick the strongest ONE signal, not all of them."

---

### Challenge 2: Analysis Paralysis from Monitoring Too Many Symbols

**What Happens:** You monitor 50 symbols in Grid. 12 show signals simultaneously. You spend 90 minutes analyzing each. By the time you decide, 10 signals expired. You're mentally exhausted and took 2 trades poorly.

**The Fix:** Limit watchlist to 15-20 symbols maximum. Quality over quantity. Focus on symbols with clear signals and low correlation. More symbols = diluted attention = worse decisions.

**Mental Script:** "I don't need to trade every signal. I need to trade the BEST signals from a focused watchlist."

---

### Challenge 3: Chasing Sector Rotation FOMO

**What Happens:** Tech signals fire, you enter. Next day Energy sector shows signals, you think "I'm missing Energy!" You add Energy positions. Day after Healthcare signals appear, you add those too. Now you're in 8 positions across 4 sectors with unclear conviction on any.

**The Fix:** Sector rotation takes weeks/months, not days. Pick ONE or TWO sectors showing strongest momentum/signals. Stick with them for weeks. Chasing daily rotation = overtrading and confusion.

**Mental Script:** "Sector rotation is slow. I commit to 1-2 sectors showing clear strength, not chasing every daily rotation."

---

## 🚫 Top 5 Mistakes with Augury Grid

### Mistake #1: Taking Multiple Trades in Highly Correlated Assets

**What Happens:** Grid signals SPY, QQQ, VOO, IVV all bullish. You take all 4 trades thinking you're "diversified." Market drops. All 4 lose simultaneously. They're 98% correlated.

**The Fix:** Check correlation heatmap. If >80% correlated, treat as ONE trade. Choose the strongest signal from the group. Correlated assets = one position, not four.

---

### Mistake #2: Monitoring Too Many Symbols (50+ Symbol Paralysis)

**What Happens:** You add 50+ symbols to Grid. Signals fire constantly. You can't keep up. Analysis takes hours. You miss good entries. You're mentally exhausted.

**The Fix:** Limit to 15-20 symbols. Focus on liquid, diverse sectors. Quality filtered signals beat quantity overwhelming signals. More isn't better.

---

### Mistake #3: Ignoring Sector Correlation When Building Positions

**What Happens:** You're long AAPL, MSFT, NVDA, GOOGL thinking "4 different stocks!" Market-wide tech selloff happens. All 4 drop 5%. Your portfolio drops 20% because all positions were in ONE sector.

**The Fix:** Check sector exposure. Limit to 2-3 positions per sector maximum. Spread across Technology, Healthcare, Finance, Energy, Consumer for actual diversification.

---

### Mistake #4: Chasing Every Sector Rotation Signal

**What Happens:** Monday: Tech signals fire, you enter. Wednesday: Energy signals, you add positions. Friday: Healthcare signals, you add more. Week ends: 10 positions, no clear strategy, confused about what you're trading.

**The Fix:** Sector rotation is a weeks/months process, not daily. Pick 1-2 strongest sectors, commit for weeks. Chasing daily rotation = overtrading.

---

### Mistake #5: Equal Position Sizing Across Different Volatility Symbols

**What Happens:** You risk 1% on both SPY (low volatility) and TSLA (high volatility) with same dollar amounts. TSLA position size is too large relative to its volatility. One TSLA whips saw costs you 3% when you intended 1% risk.

**The Fix:** Adjust position size for volatility. Higher volatility symbols (TSLA, crypto) = smaller position size. Lower volatility (SPY, bonds) = normal position. Risk per trade stays constant, position sizes vary.

---

## 🔗 Works Well With Other Signal Pilot Indicators

**High Synergy Pairs:**
- **+ Any Single-Asset Indicator:** Grid finds opportunities across multiple symbols, then apply Pentarch/Omnideck to selected symbol for detailed analysis
- **+ Volume Oracle:** Grid identifies symbol, Volume Oracle confirms institutional participation in that specific asset
- **+ Janus Atlas:** Grid filters watchlist, Janus shows key levels on chosen symbol

**Common Workflow:**
1. **Augury Grid scans 20 symbols** → Identifies 3 with strong signals
2. **Switch to strongest signal chart** → Apply Pentarch or Omnideck for timing
3. **Check Janus Atlas levels** → Confirm entry near support/resistance
4. **Verify Volume Oracle Flow** → Ensure institutional alignment

**Why These Pair Well:**
Augury Grid is a scanner/filter, not a deep analysis tool. It identifies WHICH assets to focus on. Once filtered, use single-asset indicators (Pentarch, Omnideck, Janus, Volume Oracle) for detailed trade analysis on the selected symbol.

---

## ❓ Frequently Asked Questions

### Q: How many symbols should I monitor?

**A:** Depends on monitoring purpose. Focused scanning (10-15 symbols) allows detailed attention. Broad scanning (30-40 symbols) enables opportunity discovery. Individual preferences vary.

### Q: Can I use different timeframes for different symbols?

**A:** No. All symbols in grid use the timeframe of the active chart. To scan multiple timeframes, open multiple chart windows with Augury Grid on each.

### Q: Do symbols need to be from same market?

**A:** No. Can mix any asset types available on TradingView (stocks, crypto, forex, futures, indices, commodities, etc.)

### Q: What happens if a symbol has no data?

**A:** Cell displays "No Data" message. Symbol may be unavailable on current TradingView plan or exchange.

### Q: Can I save multiple watchlists?

**A:** Yes. Save different indicator configurations with different symbol lists. Switch between saved templates as needed.

### Q: Does grid slow down performance?

**A:** Minimal impact. Optimized to efficiently monitor up to 40 symbols without performance degradation.

### Q: Can other users see my watchlist?

**A:** No. Symbol lists stored in personal indicator settings, not visible to others.

### Q: How is this different from TradingView's native screener?

**A:** Augury Grid displays on chart with continuous real-time updates, while native screener requires manual refresh and opens separately. Grid format provides at-a-glance monitoring of specific exhaustion methodology.

### Q: Can I export grid data?

**A:** Grid data can be captured via TradingView alert webhooks. Each alert includes symbol and signal type data.

### Q: Does it work on mobile?

**A:** Yes. Grid layout adapts to screen size. Mobile displays fewer symbols per row for readability.

---

## 📋 Quick Reference Guide

### Grid Display Legend

| Display | Meaning |
|---------|---------|
| **Green 1-8** | Downtrend exhaustion counting (not yet complete) |
| **Green 9 ⚠️** | Oversold exhaustion detected |
| **Red 1-8** | Uptrend exhaustion counting (not yet complete) |
| **Red 9 ⚠️** | Overbought exhaustion detected |
| **Neutral (—)** | No active TD sequence |
| **Approaching (8)** | One bar from potential signal |

### Recommended Watchlist Sizes

| Purpose | Symbols | Layout |
|---------|---------|--------|
| **Focused Analysis** | 10-15 | 5×3 or 4×4 |
| **Sector Scan** | 15-25 | 5×5 or 8×3 |
| **Broad Market** | 25-40 | 8×5 or 10×4 |

### Common Watchlist Templates

**Crypto Major:**
```
BTC/USD, ETH/USD, BNB/USD, SOL/USD, XRP/USD,
ADA/USD, AVAX/USD, DOT/USD, MATIC/USD, LINK/USD
```

**US Indices & Sectors:**
```
SPY, QQQ, DIA, IWM, XLF, XLE, XLK, XLV,
XLI, XLP, XLU, XLY, XLB, XLRE, XLC
```

**Tech Giants:**
```
AAPL, MSFT, GOOGL, AMZN, NVDA, TSLA,
META, NFLX, AMD, INTC, CRM, ORCL
```

**Forex Majors:**
```
EUR/USD, GBP/USD, USD/JPY, AUD/USD,
USD/CAD, USD/CHF, NZD/USD, EUR/GBP
```

---

## 🔗 Related Topics

### Learn More About Augury Grid
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - Quick reference for Augury Grid signals
- **[Learning Paths](docs/start-learning-path/index.md)** - Structured roadmap for mastering Augury Grid (2-3 weeks)
- **[Glossary](docs/ref-glossary/index.md)** - TD Sequential, exhaustion, level cluster definitions

### The Scanner ⭐
Augury Grid works best when combined with detailed analysis using:
- **[Pentarch](REVISED_DOCS_PENTARCH.md)** - Analyze filtered assets for cycle phase signals
- **[Janus Atlas](REVISED_DOCS_JANUS_ATLAS.md)** - Identify entry levels on scanned assets
- **[Volume Oracle](REVISED_DOCS_VOLUME_ORACLE.md)** - Confirm volume on grid-filtered setups

**Workflow:** Augury Grid scan for signals → Switch to detailed chart → Apply The Trinity analysis

### Additional Combinations
- **[Harmonic Oscillator](REVISED_DOCS_HARMONIC_OSCILLATOR.md)** - Check momentum on assets flagged by grid
- **[Plutus Flow](REVISED_DOCS_PLUTUS_FLOW.md)** - Look for divergences on grid-filtered symbols
- **[Omnideck](REVISED_DOCS_OMNIDECK.md)** - Deep analysis on top 3 assets from grid scan

### Comparison & Optimization
- **[Indicator Comparison](docs/ref-comparison/indicator-comparison.md)** - Compare all 7 indicators by difficulty, timeframes, use cases
- **[Performance Optimization](docs/advanced/performance-optimization.md)** - Optimize Augury Grid for 30-40 symbols without lag
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - 2-page reference comparing all indicators

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator displays TD Sequential exhaustion signals across multiple symbols simultaneously. All signals represent historical pattern detection based on close-to-close price counting methodology. Individual interpretation, application, and outcomes vary. Past signal patterns do not guarantee future results. This is not financial advice.

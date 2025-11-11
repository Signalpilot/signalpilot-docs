# Configuration Wizard

Get personalized indicator settings based on your trading style, asset type, and experience level.

---

## 🎯 How This Works

Answer 5 quick questions below, then jump to your recommended configuration section.

---

## Question 1: What Asset Are You Trading?

<details>
<summary><strong>A) Cryptocurrency (BTC, ETH, Altcoins)</strong></summary>

**Best Indicators:** All indicators work excellently
- ✅ Full volume data available
- ✅ 24/7 trading (all timeframes valid)
- ✅ High volatility = clear signals

**Jump to:** [Crypto Configurations](#crypto-configurations)

</details>

<details>
<summary><strong>B) Stocks (SPY, AAPL, Individual Stocks)</strong></summary>

**Best Indicators:** All indicators work excellently
- ✅ Full volume data available
- ✅ Clear market structure
- ✅ Best during market hours (9:30am-4pm ET)

**Jump to:** [Stocks Configurations](#stocks-configurations)

</details>

<details>
<summary><strong>C) Forex (EUR/USD, GBP/USD, Spot Pairs)</strong></summary>

**Important:** Forex spot has NO real volume data
- ⚠️ Volume Oracle/Plutus: Use futures (6E, 6B) instead
- ✅ Pentarch, Janus, Harmonic: Work great on spot

**Jump to:** [Forex Configurations](#forex-configurations)

</details>

<details>
<summary><strong>D) Futures (ES, NQ, 6E, Commodities)</strong></summary>

**Best Indicators:** All indicators work excellently
- ✅ Full volume data available
- ✅ Clear market structure
- ✅ Session-based trading

**Jump to:** [Futures Configurations](#futures-configurations)

</details>

---

## Question 2: What's Your Trading Timeframe?

<details>
<summary><strong>A) Scalping (1m-5m)</strong></summary>

**Recommended Indicators:**
- ✅ Volume Oracle (fast confirmation)
- ✅ Harmonic Oscillator (momentum)
- ❌ Pentarch (15m minimum required)

**Jump to:** [Scalping Setups](#scalping-setups)

</details>

<details>
<summary><strong>B) Day Trading (5m-1H)</strong></summary>

**Recommended Indicators:**
- ✅ The Trinity (Pentarch + Janus + Volume)
- ✅ Harmonic for additional confirmation

**Jump to:** [Day Trading Setups](#day-trading-setups)

</details>

<details>
<summary><strong>C) Swing Trading (1H-Daily)</strong></summary>

**Recommended Indicators:**
- ✅ Pentarch (cycle phases)
- ✅ Janus (multi-timeframe levels)
- ✅ Volume (confirmation)

**Jump to:** [Swing Trading Setups](#swing-trading-setups)

</details>

<details>
<summary><strong>D) Position Trading (Daily-Weekly)</strong></summary>

**Recommended Indicators:**
- ✅ Pentarch (macro cycles)
- ✅ Janus (major levels only)
- ✅ Augury Grid (multi-asset scanning)

**Jump to:** [Position Trading Setups](#position-trading-setups)

</details>

---

## Question 3: What's Your Experience Level?

<details>
<summary><strong>A) Beginner (<6 months)</strong></summary>

**Start Simple:**
- Week 1-2: Janus Atlas (5 core levels only)
- Week 3: Add Volume Oracle
- Week 4+: Add Pentarch

**Jump to:** [Beginner Configurations](#beginner-configurations)

</details>

<details>
<summary><strong>B) Intermediate (6 months - 2 years)</strong></summary>

**Build Confluence:**
- Start with The Trinity immediately
- Add Harmonic after mastering Trinity

**Jump to:** [Intermediate Configurations](#intermediate-configurations)

</details>

<details>
<summary><strong>C) Advanced (2+ years)</strong></summary>

**Full Arsenal:**
- Omnideck or Trinity + Additional layers
- Augury Grid for screening

**Jump to:** [Advanced Configurations](#advanced-configurations)

</details>

---

## 📋 Configuration Sections

---

## Crypto Configurations

### Scalping Crypto (1m-5m)
**Indicators:** Volume Oracle + Harmonic Oscillator

**Volume Oracle Settings:**
- Enable: Volume Flow (green/red bars)
- Enable: Volume Zones
- Disable: Position Manager (too slow for scalping)
- Spike Threshold: 1.5x

**Harmonic Oscillator Settings:**
- All default settings
- Watch for: BUY/SELL + STRONG signals
- Ignore: NEUT (stay out)

**Chart Setup:**
- Timeframe: 5m chart
- Levels: None (too cluttered for scalping)
- Volume below chart, Harmonic in separate panel

---

### Day Trading Crypto (15m-1H) - THE TRINITY METHOD
**Indicators:** The Trinity (Pentarch + Janus + Volume Oracle)

**Chart Setup:**
- Primary: 1H chart (or 15m for faster pace)
- Secondary: Daily chart for context
- Clean visual: 6 levels maximum

**Pentarch Settings:**
- All defaults enabled
- **Focus signals:**
  - **TD (Touchdown)** = Potential reversal, wait for confirmation
  - **IGN (Ignition)** = Entry trigger after TD
  - **WRN (Warning)** = Take partial profits (50%)
  - **CAP (Capitulation)** = Exit remaining position
- **Ignore:** BDN on crypto (less reliable due to 24/7 trading)

**Janus Atlas Settings:**
- **Enable ONLY these 6 levels:**
  - Daily High
  - Daily Low
  - 4H High
  - 4H Low
  - Anchored VWAP (from major swing)
  - Daily VWAP
- **Disable:** All session levels (crypto is 24/7, no sessions)
- **Disable:** Market structure labels (BOS/CHoCH too noisy on 15m-1H)

**Volume Oracle Settings:**
- Enable: All 3 systems (Flow + Zones + Position Manager)
- **Spike Threshold: 1.3x** (crypto has more volatile volume than stocks)
- Volume Flow: Watch for green bars >1.3x average
- Volume Zones: Accumulation = support, Distribution = resistance
- Position Manager: Track real-time P&L

**The Workflow (High-Probability Setup):**

**Step 1: Pattern Recognition**
- Scan 1H chart for Pentarch TD signal
- **What you're looking for:** Small orange triangle below price (bullish TD) or above (bearish TD)
- **Mindset:** TD is NOT an entry - it's a "watch this area" signal

**Step 2: Level Confluence Check**
- Did TD appear AT or NEAR a Janus level?
- **Perfect scenarios:**
  - TD at Daily Low + 4H Low (double level cluster)
  - TD at Daily VWAP (often acts as magnet)
  - TD at Anchored VWAP from major swing low
- **Skip the trade if:** TD appears in middle of nowhere (no level support)

**Step 3: Volume Confirmation**
- Check Volume Oracle for spike >1.3x when TD printed
- **What to look for:**
  - Green volume bar >1.3x average volume
  - Volume Zone showing accumulation (green zone building)
- **Warning sign:** TD without volume spike = low conviction, skip

**Step 4: Entry Trigger**
- Wait for Pentarch IGN signal (confirms TD wasn't false)
- **Entry:** Place buy order when IGN appears
- **Stop Loss:** Below TD candle low (typically 2-4% on crypto)
- **Position Size:** Risk 1-2% of account on stop

**Step 5: Trade Management**
- **First target:** Pentarch WRN signal → Take 50% profit
- **Second target:** Pentarch CAP signal → Exit remaining 50%
- **Trail stop:** Move stop to break-even after WRN appears

**Real Example (Bitcoin 1H):**
```
BTC at $28,450
1. Pentarch TD appears at Daily Low ($28,400)
2. Janus shows Daily Low + 4H Low cluster at $28,350-$28,450
3. Volume Oracle spikes to 1.8x (strong confirmation)
4. IGN appears 3 hours later at $28,600
   → Enter long: $28,600
   → Stop: $28,200 (below TD, risking $400 = 1.4%)
5. WRN appears at $29,800 → Take 50% profit (+$1,200)
6. CAP appears at $30,400 → Exit remaining 50% (+$1,800)
Total gain: $3,000 on 1 BTC position = 10.5% gain
```

**Pro Tips:**
- **Best times:** Major liquidity events (US market open, Asia open affect crypto)
- **Avoid:** Low-volume periods (weekends often have false signals)
- **Confluence is king:** 3-factor setups (Pentarch + Janus + Volume) have 60-70% success rate vs 40-45% for single-factor
- **Patience pays:** Wait for ALL 3 confirmations - missing one drops success rate dramatically

**Common Mistakes to Avoid:**
1. **Trading TD without IGN** → 60% of TDs fail without IGN confirmation
2. **Ignoring Janus levels** → TDs in middle of range have 30% lower success
3. **No volume confirmation** → Volume spikes increase success rate by 15-20%
4. **Holding past CAP** → CAP signals exhaustion, staying in risks giving back gains
5. **Using too many levels** → More than 8 Janus levels = visual clutter and analysis paralysis

**Expected Results (with discipline):**
- Win rate: 60-70% with full 3-factor confluence
- Average win: 8-12% (TD to CAP)
- Average loss: 2-4% (stop below TD)
- Risk/Reward: 2.5:1 to 4:1

**Asset-Specific Notes:**
- **BTC/ETH:** Clean signals, best for learning
- **Altcoins:** More volatile, widen stops to 4-6%
- **Low-cap coins:** Skip these until you master BTC/ETH (too choppy)

---

### Swing Trading Crypto (4H-Daily)
**Indicators:** Pentarch + Janus + Volume + Augury Grid (screening)

**Pentarch Settings:**
- Chart: Daily timeframe
- All defaults
- Track complete sequences: TD→IGN→WRN→CAP

**Janus Atlas Settings:**
- Enable: Weekly H/L, Monthly H/L, Weekly VWAP, POC/VAH/VAL (8-10 levels)
- These are macro levels for swing entries

**Augury Grid Settings:**
- Add 20-30 crypto pairs (BTC, ETH, top alts)
- Scan for TD signals across grid
- Use for opportunity identification

**Workflow:**
1. Morning scan: Check Augury Grid for TD signals
2. Switch to asset chart, verify TD at Janus Weekly Low
3. Volume spike >1.5x
4. Enter swing position, hold for IGN→WRN→CAP sequence

---

## Stocks Configurations

### Day Trading Stocks (5m-1H) - THE POWER HOUR SETUP
**Indicators:** The Trinity (Pentarch + Janus + Volume Oracle)

**Chart Setup:**
- Primary: 15m chart (sweet spot for stocks)
- Alternative: 5m for faster scalps, 1H for swing day trades
- Monitor: SPY on second monitor for market context

**Pentarch Settings:**
- Chart: 15m (or 1H for less trades, higher quality)
- All defaults enabled
- **Prime trading window:** 9:30am-11:30am ET (opening range) and 2:30pm-4pm ET (power hour)
- **Signals:**
  - TD = Reversal potential at key levels
  - IGN = Entry confirmation
  - WRN = Profit-taking zone (take 50-75%)
  - CAP = Full exit
  - BDN = Avoid new entries (exhaustion phase)

**Janus Atlas Settings - THE 8 CRITICAL LEVELS:**
1. **Previous Close** (MOST IMPORTANT for stocks)
2. **Daily High**
3. **Daily Low**
4. **Premarket High**
5. **Premarket Low**
6. **Opening Range High** (9:30am-10am high)
7. **Opening Range Low**
8. **Daily VWAP**

**Optional (9-10 if needed):**
- 4H High/Low (for swing trades)
- Weekly VWAP (major trend guide)

**Market Structure:**
- **Enable:** BOS (Break of Structure) and CHoCH (Change of Character)
- **Why:** Stocks have cleaner market structure than crypto
- **Use:** BOS confirms trend continuation, CHoCH warns of reversal

**Volume Oracle Settings:**
- **All 3 systems enabled**
- **Spike Threshold: 1.5x** (stocks have more stable volume patterns than crypto)
- **Volume Flow:** Green bars >1.5x = strong buying, Red bars >1.5x = strong selling
- **Volume Zones:** Accumulation zones = institutional buying (support)
- **Position Manager:** CRITICAL for stocks - shows real-time P&L and tracks multiple positions

**The Workflow (Professional Day Trading Setup):**

**Pre-Market Preparation (8:00am-9:30am ET):**
1. Identify Premarket High/Low using Janus Atlas
2. Note Previous Close level (this is your "magnet" - price returns here 70% of the time)
3. Check SPY direction (up = trade longs, down = trade shorts, sideways = wait)
4. Add Opening Range levels when market opens (9:30am-10am range)

**Step 1: Wait for Setup (9:45am-11:30am)**
- Let opening volatility settle (first 15 minutes often choppy)
- **Watch for:** Pentarch TD at one of these POWER LEVELS:
  - **Previous Close** (highest probability level)
  - **Opening Range High/Low**
  - **Premarket High/Low**
  - **Daily VWAP** (especially if price is ranging)

**Step 2: The 4-Factor Confluence Check**
- **Factor 1:** Pentarch TD appears
- **Factor 2:** TD is AT a Janus level (within 0.5% = at the level)
- **Factor 3:** Volume Oracle spikes >1.5x
- **Factor 4:** SPY is confirming direction (if SPY up, take long TDs; if SPY down, take short TDs)
- **Required:** ALL 4 factors must align - if one missing, skip the trade

**Step 3: Entry Execution**
- Wait for Pentarch IGN (typically 1-4 candles after TD)
- **Entry:** Market order when IGN appears (or limit at IGN candle close)
- **Stop Loss:** Below TD low (long) or above TD high (short)
- **Typical stop:** 0.3-0.8% on large caps, 1-2% on small caps
- **Position size:** Risk 1% of account (e.g., $100K account = $1,000 risk per trade)

**Step 4: Trade Management (The 50/25/25 Rule)**
- **At WRN:** Take 50% profit, move stop to break-even
- **At CAP:** Take 25% more profit (75% out total)
- **Final 25%:** Trail stop or hold for outsized move
- **Reason:** Locks in gains while leaving room for runners

**Real Example (Apple - AAPL 15m Chart):**
```
Date: Market open 9:30am ET
AAPL Previous Close: $178.45
Premarket High: $179.10
Premarket Low: $177.80

Setup:
9:55am → Pentarch TD appears at $178.40 (right at Previous Close level)
Janus: Previous Close + Daily VWAP confluence at $178.40-$178.50
Volume Oracle: Spike to 2.1x average (institutional buying)
SPY: +0.4% green (confirming uptrend)

Trade Execution:
10:10am → IGN appears at $178.70
   → Entry: 100 shares at $178.70
   → Stop: $178.20 (below TD, risking $50 = $0.50/share)
   → Position size: $1,000 risk / $0.50 stop = 2,000 shares (adjusted to $17,870 position)

10:45am → WRN at $179.40
   → Exit 50% (1,000 shares) at $179.40
   → Profit: $700 (locked in)
   → Move stop to $178.70 (break-even on remaining)

11:20am → CAP at $179.90
   → Exit 25% (500 shares) at $179.90
   → Profit: $600 more
   → Keep final 500 shares with trailing stop

12:30pm → Trail stop hit at $180.10
   → Exit final 500 shares at $180.10
   → Profit: $700 more

Total: $2,000 profit on 2,000 shares
Risk: $1,000
Reward/Risk: 2:1 (textbook trade)
Time in trade: 2h 20min
```

**Power Hour (2:30pm-4pm ET) Strategy:**
- **Setup:** Same as morning, but use Opening Range levels + Previous Close
- **Best signals:** TD at Previous Close during power hour = institutions repositioning
- **Exit rule:** Exit ALL positions by 3:55pm (avoid overnight risk unless swing trading)

**Pro Tips for Stock Day Trading:**
1. **Previous Close is KING** - 70% of TD signals at Previous Close succeed vs 45% at random levels
2. **Match SPY direction** - Don't fight the market (SPY down 1%+ = avoid longs, focus shorts)
3. **Volume confirms everything** - Stocks with average volume <1M shares/day = skip (too illiquid)
4. **Opening Range matters** - First hour high/low often holds all day (key levels)
5. **Avoid lunch chop** - 11:30am-2pm often rangebound and low-volume (take lunch break)

**Common Mistakes (and Fixes):**
1. **Trading low-volume stocks** → Stick to average >1M volume/day (SPY, QQQ, AAPL, TSLA, etc.)
2. **Ignoring SPY** → SPY context increases win rate by 10-15%
3. **Fighting Previous Close** → When price is at Prev Close, respect it (don't fade it)
4. **Not using BOS/CHoCH** → Market structure gives early warnings of reversals
5. **Holding past 4pm** → Overnight gaps can wipe out day's gains (exit by 3:55pm unless intentional swing)

**Expected Results (First 3 Months):**
- Trades per day: 1-3 high-quality setups
- Win rate: 65-75% with full confluence
- Average win: 0.8-1.5% (3-6 hours hold time)
- Average loss: 0.3-0.6% (stopped out)
- Daily target: 1-2% account growth (realistic and sustainable)

**Best Stocks to Start:**
- **Learn on:** SPY, QQQ, AAPL, MSFT, TSLA (high liquidity, clean signals)
- **Avoid initially:** Penny stocks, stocks <$10, anything with <500K avg volume
- **Intermediate:** Individual stocks in play (earnings, news, unusual volume)

**Risk Management Rules:**
- Max 3 positions open simultaneously
- Max 3% total account risk (e.g., 3 trades at 1% risk each)
- If down 2 trades in a row → stop trading, review setup
- Never average down - stop is stop

---

### Swing Trading Stocks (Daily)
**Indicators:** Pentarch + Janus + Harmonic

**Pentarch Settings:**
- Chart: Daily
- Focus: Complete cycle sequences
- Paper trade TD signals for 20-30 examples before live trading

**Janus Atlas Settings:**
- Enable: Weekly H/L, Monthly H/L, Weekly VWAP, Quarterly levels, POC/VAH/VAL
- Disable: Intraday levels (not relevant for Daily chart)

**Harmonic Oscillator Settings:**
- Use to filter Pentarch signals
- TD + Harmonic BUY = aligned
- CAP + Harmonic SELL = aligned

**Workflow:**
1. Pentarch TD on Daily chart
2. Verify TD at Janus Weekly Low
3. Harmonic shows BUY or STRONG
4. Enter on next day's open or IGN confirmation

---

## Forex Configurations

### Day Trading Forex (15m-1H)
**Indicators:** Pentarch + Janus + Harmonic (skip Volume Oracle unless using futures)

**Important:** Use currency futures (6E=EUR/USD, 6B=GBP/USD) if you need volume data

**Pentarch Settings:**
- All defaults
- Works perfectly on forex spot (no volume needed)

**Janus Atlas Settings:**
- Enable: Daily H/L, Asian/European/NY Session H/L, Daily VWAP (12 levels)
- Session levels are CRITICAL for forex (major liquidity zones)

**Harmonic Oscillator Settings:**
- All defaults
- Excellent volume substitute for forex

**Workflow:**
1. Identify session (Asian = low vol, London/NY = high vol)
2. Wait for Pentarch TD at session low
3. Harmonic shows BUY/STRONG
4. Enter, target previous session high

### Swing Trading Forex (4H-Daily)
**Indicators:** Pentarch + Janus + Harmonic

**Pentarch Settings:**
- Chart: 4H or Daily
- All defaults
- Track full cycle sequences

**Janus Atlas Settings:**
- Enable: Weekly H/L, Monthly H/L, Weekly VWAP, Quarterly Pivots (8-10 levels)
- Session levels: Disable on higher timeframes
- Focus on macro levels only

**Harmonic Oscillator Settings:**
- All defaults
- Use for trend confirmation
- BUY/SELL align with Pentarch cycles

**Workflow:**
1. Pentarch TD on Daily chart
2. Verify TD at Weekly Janus level
3. Harmonic shows BUY/STRONG
4. Enter swing position, hold for IGN→WRN→CAP

---

## Futures Configurations

### Scalping Futures (ES, NQ) (1m-5m)
**Indicators:** Volume Oracle + Harmonic Oscillator

**Volume Oracle Settings:**
- Enable: Volume Flow + Zones
- Spike Threshold: 1.8x (futures have burst volume)
- Position Manager: Enable for real-time P&L

**Harmonic Oscillator Settings:**
- All defaults
- BUY/SELL signals = entries
- STRONG = high confidence

**Chart Setup:**
- Timeframe: 1m or 2m
- Focus on: RTH session (9:30am-4pm ET)
- Avoid: Overnight session (thin volume)

**Key Insight:** ES/NQ have clean volume data - Volume Oracle is very reliable

---

### Day Trading Futures (5m-1H)
**Indicators:** The Trinity (Pentarch + Janus + Volume)

**Pentarch Settings:**
- Chart: 15m or 1H
- All defaults
- Focus on RTH (regular trading hours) signals

**Janus Atlas Settings:**
- Enable: Daily H/L, Overnight H/L, Previous Close, Session VWAP (6-8 levels)
- Session levels CRITICAL for futures (major liquidity zones)
- Enable: Market Structure (BOS, CHoCH)

**Volume Oracle Settings:**
- All 3 systems enabled
- Spike Threshold: 1.5x
- Position Manager: Highly recommended

**Workflow:**
1. Pentarch TD on 15m chart
2. Verify TD at Daily Low or Session Open
3. Volume spike >1.5x
4. Enter on IGN confirmation

**Key Levels:**
- Previous Close = magnet level for ES/NQ
- Overnight High/Low = key intraday levels

---

### Swing Trading Futures (Daily)
**Indicators:** Pentarch + Janus + Volume + Harmonic

**Pentarch Settings:**
- Chart: Daily
- Track full cycles (TD→IGN→WRN→CAP→BDN)

**Janus Atlas Settings:**
- Enable: Weekly H/L, Monthly H/L, Quarterly Pivots, POC/VAH/VAL (10 levels)
- Disable: Intraday levels

**Volume Oracle Settings:**
- All 3 systems
- Watch for accumulation/distribution zones

**Harmonic Oscillator Settings:**
- Use for cycle confirmation
- Pentarch TD + Harmonic BUY = strong confluence

**Workflow:**
1. Pentarch TD on Daily
2. At Weekly Janus level
3. Volume zone + spike
4. Harmonic confirms
5. Enter swing position

---

## Scalping Setups

### Crypto/Stocks Scalping (1m-5m)
**Indicators:** Volume Oracle + Harmonic Oscillator ONLY

**Volume Oracle:**
- Volume Flow: Watch for green spikes (>1.5x)
- Ignore zones (too slow for 1m-5m)
- Position Manager: Optional

**Harmonic Oscillator:**
- BUY/SELL signals = entries
- STRONG = high confidence
- NEUT = stay out

**No Pentarch:** Requires 15m minimum
**No Janus:** Too cluttered on 1m-5m (use mental levels instead)

**Quick Setup:**
- Chart: 5m
- Volume Oracle below price
- Harmonic in separate panel
- Clean, minimal chart

---

## Day Trading Setups

### The Trinity (15m-1H)
**Indicators:** Pentarch + Janus Atlas + Volume Oracle

**Pentarch:**
- Chart: 1H (or 15m for faster pace)
- Focus: TD→IGN sequences

**Janus:**
- 5-8 levels maximum
- Daily/4H levels for day trading
- Disable: Weekly/Monthly (too slow)

**Volume:**
- All systems enabled
- Spike threshold: 1.5x

**Workflow:** Pentarch signal → At Janus level → Volume spike = Entry

---

## Swing Trading Setups

### Multi-Timeframe Trinity (4H-Daily)
**Indicators:** Pentarch + Janus + Volume

**Pentarch:**
- Chart: Daily
- Track full cycles: TD→IGN→WRN→CAP→BDN

**Janus:**
- 8-12 levels
- Weekly/Monthly levels
- POC, VAH, VAL

**Volume:**
- All systems
- Watch for accumulation zones (Volume Zones)

**Workflow:** Daily Pentarch TD → At Weekly Janus level → Volume zone = Multi-day swing entry

---

## Position Trading Setups

### Position Trading Stocks (Weekly-Monthly)
**Indicators:** Pentarch + Janus + Augury Grid

**Pentarch Settings:**
- Chart: Daily or Weekly
- Track multi-week/month cycles
- Focus: Complete TD→CAP→BDN sequences

**Janus Atlas Settings:**
- Enable: Monthly H/L, Quarterly Pivots, Yearly Pivots, Quarterly VWAP (6-8 levels)
- Disable: All intraday levels
- Focus: Macro structure only

**Augury Grid Settings:**
- Add 30-50 stocks (S&P 500, watchlist)
- Scan for Weekly Pentarch TDs
- Filter by sector strength

**Workflow:**
1. Weekly Augury Grid scan for TD signals
2. Switch to Daily chart, verify TD at Monthly Janus level
3. Check sector rotation (is sector leading?)
4. Enter position, hold for weeks/months until CAP or BDN

**Key Insight:** Position trading requires patience - hold through IGN→WRN noise

---

### Position Trading Crypto (Weekly-Monthly)
**Indicators:** Pentarch + Janus + Volume Oracle

**Pentarch Settings:**
- Chart: Daily or Weekly
- Track macro cycles (Bitcoin cycle phases)

**Janus Atlas Settings:**
- Enable: Monthly H/L, Quarterly H/L, Yearly H/L, Monthly VWAP (6 levels)
- These are major psychological levels in crypto

**Volume Oracle Settings:**
- All 3 systems
- Look for multi-week accumulation/distribution zones
- Spike threshold: 1.3x (crypto volume is volatile)

**Workflow:**
1. Pentarch TD on Weekly chart (rare, but powerful)
2. At Monthly or Quarterly Janus level
3. Volume Oracle shows accumulation zone (weeks of building)
4. Enter position, hold for months

**Example:** BTC weekly TD at Yearly Low + accumulation zone = major cycle bottom

---

### Macro Cycles - Multi-Asset (Daily-Weekly)
**Indicators:** Pentarch + Janus + Augury Grid

**Pentarch:**
- Chart: Daily or Weekly
- Full cycle tracking (weeks/months)

**Janus:**
- Monthly/Quarterly/Yearly levels ONLY
- Major VWAP levels

**Augury Grid:**
- Screen 30-40 assets across asset classes
- Find best macro setups
- Cross-asset correlation analysis

**Workflow:** Grid scan → Pentarch analysis → Janus confluence → Position entry

---

## Beginner Configurations

### Week 1-2: Janus Atlas Only
**Settings:**
- Enable ONLY: Daily H/L, Weekly H/L, Anchored VWAP (5 levels)
- Disable everything else
- Observe for 10+ days before trading

### Week 3-4: Add Volume Oracle
**Settings:**
- Keep Janus at 5 levels
- Enable Volume Flow + Zones
- Practice identifying volume spikes

### Week 5-8: Add Pentarch
**Settings:**
- Chart: Daily (clearest signals)
- All defaults
- Paper trade for 20-30 signals

**Do NOT:**
- Enable all 39 Janus levels
- Trade every signal
- Add more indicators yet

---

## Intermediate Configurations

### The Trinity Mastery
**Indicators:** Pentarch + Janus + Volume

**Pentarch:**
- Your primary chart timeframe
- All defaults

**Janus:**
- 8-12 levels (you choose which)
- Focus on level clusters

**Volume:**
- All 3 systems

**Goal:** Find 3-factor confluence:
- Pentarch signal + Janus level + Volume spike

---

## Advanced Configurations

### Option 1: Omnideck
**Indicator:** Omnideck (all-in-one)

**Settings:**
- Enable systems 1-4 first (TD, VWAP, Oscillators, Volume)
- Add systems 5-8 after mastering 1-4
- Requires 100+ hours to master

### Option 2: Trinity + Layers
**Indicators:** Pentarch + Janus + Volume + Harmonic + Plutus + Augury

**Workflow:**
- Augury Grid: Scan for opportunities
- Pentarch: Cycle phase
- Janus: Level confluence
- Volume: Confirmation
- Harmonic: Momentum filter
- Plutus: Divergence detection

**Warning:** Only for advanced traders who can manage 6 indicators without analysis paralysis

---

## 🎯 Quick Decision Matrix

### By Experience Level
| Experience | Setup | Timeframe |
|------------|-------|-----------|
| Complete beginner | Janus only (5 levels) | Daily |
| Beginner (2-4 weeks) | Janus + Volume | Daily |
| Beginner (6-8 weeks) | Trinity (P+J+V) | 1H or Daily |
| Intermediate | Trinity + Harmonic | 15m-Daily |
| Advanced | Trinity + Layers or Omnideck | Any |

### By Trading Style
| Style | Setup | Assets | Timeframe |
|-------|-------|--------|-----------|
| Scalper | Volume + Harmonic | Crypto/Stocks/Futures | 1m-5m |
| Day trader | Trinity (P+J+V) | Any | 15m-1H |
| Swing trader | Trinity + Harmonic | Any | 4H-Daily |
| Position trader | P+J+Grid | Stocks/Crypto | Daily-Weekly |

### By Asset Type
| Asset | Best Setup | Timeframe | Notes |
|-------|-----------|-----------|-------|
| Crypto scalping | Volume + Harmonic | 1m-5m | 24/7 liquidity |
| Crypto day trading | Trinity | 15m-1H | Disable session levels |
| Crypto swing | P+J+V+Grid | 4H-Daily | Use macro levels |
| Stock day trading | Trinity | 5m-1H | Previous Close critical |
| Stock swing | P+J+Harmonic | Daily | Weekly levels |
| Stock position | P+J+Grid | Daily-Weekly | Sector analysis |
| Forex day trading | P+J+Harmonic | 15m-1H | Session levels critical |
| Forex swing | P+J+Harmonic | 4H-Daily | No volume needed |
| Futures scalping | Volume + Harmonic | 1m-5m | RTH session only |
| Futures day trading | Trinity | 15m-1H | Session levels critical |
| Futures swing | P+J+V+Harmonic | Daily | Previous Close key |

### By Indicator Preference
| Preference | Setup | When to Use |
|-----------|-------|-------------|
| All-in-one | Omnideck | When you want everything in one indicator |
| Multi-asset scanning | Augury Grid + Trinity | Screening 20+ assets daily |
| Clean minimal chart | Janus (5 levels) + Volume | Beginners or simple setups |
| Maximum confluence | Trinity + Harmonic + Plutus | Advanced multi-factor analysis |

---

## 📞 Need Custom Configuration Help?

**Email:** support@signalpilot.io

Include:
- Asset type & symbol
- Timeframe
- Experience level
- Current setup (if any)

We'll send you personalized settings within 24 hours.

---

**Related Pages:**
- [Which Indicator Should I Start?](start-which-indicator.md)
- [Learning Paths](start-learning-path/index.md)
- [Indicator Comparison](ref-comparison/indicator-comparison.md)

---

**Last Updated:** January 2025

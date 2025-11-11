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
- Primary signals: BUY/SELL + STRONG (higher confidence)
- NEUT signals: Typically indicate neutral conditions (lower conviction for entries)

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
- Volume Flow: Green bars exceeding 1.3x average indicate heightened activity
- Volume Zones: Accumulation = support, Distribution = resistance
- Position Manager: Provides real-time P&L tracking

**Common Workflow (High-Probability Setup):**

**Step 1: Pattern Recognition**
- Traders typically scan the 1H chart for Pentarch TD signals
- **Signal appearance:** Small orange triangle below price (bullish TD) or above (bearish TD)
- **Common interpretation:** TD represents a "watch this area" signal rather than an immediate entry

**Step 2: Level Confluence Analysis**
- The analysis examines whether TD appeared at or near a Janus level
- **High-probability scenarios observed:**
  - TD at Daily Low + 4H Low (double level cluster)
  - TD at Daily VWAP (often acts as magnet)
  - TD at Anchored VWAP from major swing low
- **Lower-probability scenario:** TD appearing in middle of range with no level support

**Step 3: Volume Confirmation**
- Volume Oracle analysis looks for spikes >1.3x when TD printed
- **Confirmation signals:**
  - Green volume bar exceeding 1.3x average volume
  - Volume Zone showing accumulation (green zone building)
- **Lower-confidence signal:** TD without volume spike tends to have reduced reliability

**Step 4: Entry Signal**
- Traders commonly wait for Pentarch IGN signal (confirms TD validity)
- **Entry timing:** Orders typically placed when IGN appears
- **Stop placement:** Commonly positioned below TD candle low (typically 2-4% on crypto)
- **Position sizing:** Many traders risk 1-2% of account per trade

**Step 5: Trade Management**
- **First target:** WRN signal commonly triggers 50% profit-taking
- **Second target:** CAP signal often triggers exit of remaining 50%
- **Stop adjustment:** Stops frequently moved to break-even after WRN appears

**Illustrative Example - Historical Bitcoin Trade (For Educational Purposes Only):**
```
This example illustrates one specific past trade scenario. Past performance does not
indicate future results. Individual outcomes vary significantly.

BTC at $28,450
1. Pentarch TD appears at Daily Low ($28,400)
2. Janus shows Daily Low + 4H Low cluster at $28,350-$28,450
3. Volume Oracle spikes to 1.8x (strong confirmation)
4. IGN appears 3 hours later at $28,600
   → Entry occurred at: $28,600
   → Stop placed at: $28,200 (below TD, risking $400 = 1.4%)
5. WRN appears at $29,800 → 50% position closed (+$1,200)
6. CAP appears at $30,400 → Remaining 50% closed (+$1,800)
Result in this specific instance: $3,000 gain on 1 BTC position = 10.5%
```

**Observations from Experienced Traders:**
- **Higher-probability timing:** Major liquidity events (US market open, Asia open) tend to produce clearer signals
- **Lower-probability periods:** Weekends and low-volume periods often generate more false signals
- **Confluence value:** Combining multiple confirmation factors (Pentarch + Janus + Volume) is commonly emphasized
- **Confirmation approach:** Traders often prioritize setups where multiple factors align

**Common Patterns Observed:**
1. **TD without IGN** → TDs without IGN confirmation show higher failure rates
2. **TDs without level support** → TDs in middle of range tend to be less reliable
3. **Volume correlation** → Volume spikes are frequently cited as an important confirmation factor
4. **Holding past CAP** → CAP signals often mark exhaustion; continuing to hold tends to reduce gains
5. **Level overload** → Excessive Janus levels (more than 8) correlates with reduced clarity and decision quality

**Asset-Specific Notes:**
- **BTC/ETH:** Generally produce cleaner signals, commonly recommended for initial learning
- **Altcoins:** Higher volatility characteristics; stop distances commonly widened to 4-6%
- **Low-cap coins:** Generally avoided until proficiency is developed with major assets (increased choppiness)

---

### Swing Trading Crypto (4H-Daily)
**Indicators:** Pentarch + Janus + Volume + Augury Grid (screening)

**Pentarch Settings:**
- Chart: Daily timeframe
- All defaults
- Complete signal sequences observed: TD→IGN→WRN→CAP

**Janus Atlas Settings:**
- Enable: Weekly H/L, Monthly H/L, Weekly VWAP, POC/VAH/VAL (8-10 levels)
- These are macro levels for swing entries

**Augury Grid Settings:**
- Add 20-30 crypto pairs (BTC, ETH, top alts)
- Scan for TD signals across grid
- Commonly used for multi-asset opportunity identification

**Common Workflow:**
1. Morning scans using Augury Grid identify potential TD signals
2. Individual asset charts are analyzed to verify TD at Janus Weekly levels
3. Volume spikes exceeding 1.5x provide confirmation
4. Swing positions commonly held through complete IGN→WRN→CAP signal sequence

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

**Common Workflow (Professional Day Trading Approach):**

**Pre-Market Preparation (8:00am-9:30am ET):**
1. Traders commonly identify Premarket High/Low using Janus Atlas
2. Previous Close level is noted (price tends to return here in approximately 70% of sessions)
3. SPY direction is observed (uptrend favors longs, downtrend favors shorts, sideways suggests waiting)
4. Opening Range levels are tracked when market opens (9:30am-10am range)

**Step 1: Setup Recognition (9:45am-11:30am)**
- Opening volatility typically settles after the first 15 minutes
- **Traders commonly watch for:** Pentarch TD at these key levels:
  - **Previous Close** (historically shows highest probability)
  - **Opening Range High/Low**
  - **Premarket High/Low**
  - **Daily VWAP** (particularly in ranging conditions)

**Step 2: The 4-Factor Confluence Analysis**
- **Factor 1:** Pentarch TD signal appears
- **Factor 2:** TD occurs at a Janus level (within 0.5%)
- **Factor 3:** Volume Oracle shows spike >1.5x
- **Factor 4:** SPY confirms directional bias (SPY up supports longs; SPY down supports shorts)
- **Observation:** Setups with all 4 factors aligning are commonly prioritized by experienced traders

**Step 3: Entry Signal**
- Traders typically wait for Pentarch IGN (usually 1-4 candles after TD)
- **Entry timing:** Orders commonly placed when IGN appears (market or limit at candle close)
- **Stop placement:** Commonly positioned below TD low (long) or above TD high (short)
- **Typical stop distance:** 0.3-0.8% on large caps, 1-2% on small caps
- **Position sizing:** Common approach risks 1% of account (e.g., $100K account = $1,000 risk per trade)

**Step 4: Trade Management (The 50/25/25 Approach)**
- **At WRN:** 50% profit commonly taken, stop moved to break-even
- **At CAP:** Additional 25% commonly closed (75% total)
- **Final 25%:** Often held with trailing stop for extended moves
- **Rationale:** Balances locking gains with capturing potential larger moves

**Illustrative Example - Historical AAPL Trade (For Educational Purposes Only):**
```
This example illustrates one specific past trade scenario. Past performance does not
indicate future results. Individual outcomes vary significantly.

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
   → Entry occurred at: $178.70 (2,000 shares)
   → Stop placed at: $178.20 (risking $1,000 total)

10:45am → WRN at $179.40
   → 50% (1,000 shares) closed at $179.40
   → Realized: $700 on this portion
   → Stop moved to $178.70 (break-even on remaining)

11:20am → CAP at $179.90
   → 25% (500 shares) closed at $179.90
   → Realized: $600 on this portion

12:30pm → Trail stop hit at $180.10
   → Final 500 shares closed at $180.10
   → Realized: $700 on this portion

Result in this specific instance: $2,000 total
Time in trade: 2h 20min
```

**Power Hour (2:30pm-4pm ET) Observations:**
- **Setup similarities:** Same confluence analysis as morning, using Opening Range levels + Previous Close
- **High-probability pattern:** TD at Previous Close during power hour often indicates institutional repositioning
- **Session-end timing:** Many day traders close positions by 3:55pm to avoid overnight gap risk

**Observations from Experienced Stock Day Traders:**
1. **Previous Close significance** - TD signals at Previous Close are frequently noted as higher-probability setups
2. **Market correlation** - Aligning with SPY direction is commonly cited as beneficial
3. **Volume threshold** - Stocks averaging <1M shares/day tend to have wider spreads and increased slippage
4. **Opening Range relevance** - First hour high/low commonly acts as support/resistance throughout the session
5. **Mid-day patterns** - 11:30am-2pm period often shows reduced volume and tighter ranges

**Common Patterns Observed:**
1. **Low-volume stocks** → Stocks averaging <1M volume/day show increased slippage and false signals
2. **SPY divergence** → Trading against SPY direction tends to produce less favorable outcomes
3. **Previous Close dynamics** → Fading Previous Close (trading against it) tends to underperform
4. **Market structure signals** → BOS/CHoCH patterns often provide early reversal warnings
5. **Overnight holding** → Gap risk increases when holding past 4pm (unless intentionally swing trading)

**Commonly Recommended Learning Progression:**
- **Initial learning phase:** SPY, QQQ, AAPL, MSFT, TSLA tend to offer high liquidity and cleaner signals
- **Generally avoided initially:** Penny stocks, stocks <$10, or issues with <500K avg volume (higher risk characteristics)
- **Intermediate phase:** Individual stocks with catalysts (earnings, news, unusual volume)

**Common Risk Management Approaches:**
- Position limit: Maximum 3 simultaneous positions is a common practice
- Total risk limit: Maximum 3% total account risk (e.g., 3 trades at 1% risk each)
- Losing streak protocol: After 2 consecutive losses, many traders pause to review their setup
- Position averaging: Adding to losing positions tends to increase risk exposure significantly

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

**Common Workflow:**
1. Traders monitor for Pentarch TD signals on Daily chart
2. Analysis includes verification of TD proximity to Janus Weekly levels
3. Harmonic indicator assessed for BUY or STRONG signals
4. Entry commonly occurs at next day's open or upon IGN confirmation

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

**Common Workflow:**
1. Session context is identified (Asian typically shows lower volume, London/NY higher volume)
2. Traders watch for Pentarch TD signals near session lows
3. Harmonic indicator is assessed for BUY/STRONG confirmation
4. Entry commonly targets movement toward previous session high

### Swing Trading Forex (4H-Daily)
**Indicators:** Pentarch + Janus + Harmonic

**Pentarch Settings:**
- Chart: 4H or Daily
- All defaults
- Full cycle sequences are monitored

**Janus Atlas Settings:**
- Enable: Weekly H/L, Monthly H/L, Weekly VWAP, Quarterly Pivots (8-10 levels)
- Session levels: Disable on higher timeframes
- Analysis concentrates on macro levels

**Harmonic Oscillator Settings:**
- All defaults
- Commonly applied for trend confirmation analysis
- BUY/SELL align with Pentarch cycles

**Common Workflow:**
1. Traders monitor for Pentarch TD signals on Daily chart
2. TD proximity to Weekly Janus levels is analyzed
3. Harmonic indicator assessed for BUY/STRONG confirmation
4. Swing positions commonly held through IGN→WRN→CAP sequence

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

**Common Workflow:**
1. Traders monitor for Pentarch TD signals on 15m chart
2. TD proximity to Daily Low or Session Open is assessed
3. Volume spikes exceeding 1.5x are analyzed for confirmation
4. Entry commonly occurs upon IGN signal appearance

**Key Level Observations:**
- Previous Close often acts as a magnet level for ES/NQ (price frequently returns to this level)
- Overnight High/Low commonly serve as significant intraday support/resistance

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

**Common Workflow:**
1. Traders watch for Pentarch TD signals on Daily chart
2. TD occurrence at Weekly Janus levels is noted
3. Volume zones and spikes are analyzed
4. Harmonic confirmation is assessed
5. Swing positions commonly initiated when all factors align

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

**Pentarch limitation:** Requires 15m minimum timeframe for reliability
**Janus consideration:** Can appear cluttered on 1m-5m timeframes; traders often use mental key levels instead

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
- Primary pattern: TD→IGN signal sequences

**Janus:**
- 5-8 levels maximum
- Daily/4H levels for day trading
- Disable: Weekly/Monthly (too slow)

**Volume:**
- All systems enabled
- Spike threshold: 1.5x

**Common Workflow:** Entry signals commonly generated when Pentarch signal appears at Janus level with Volume spike confirmation

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
- Accumulation zones (Volume Zones) provide support/resistance insights

**Common Workflow:** Multi-day swing entries commonly occur when Daily Pentarch TD appears at Weekly Janus level within Volume accumulation zone

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

**Common Workflow:**
1. Weekly Augury Grid scans identify potential TD signals across multiple assets
2. Daily chart analysis verifies TD proximity to Monthly Janus levels
3. Sector rotation analysis assesses whether sector shows leadership characteristics
4. Positions commonly held for weeks/months until CAP or BDN signals appear

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

**Common Workflow:**
1. Weekly chart TD signals are monitored (less frequent but historically significant)
2. TD occurrence at Monthly or Quarterly Janus levels is noted
3. Volume Oracle accumulation zones (developing over weeks) are analyzed
4. Positions commonly held for months when all factors align

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

**Common Workflow:** Grid scans identify opportunities → Pentarch cycle analysis → Janus level confluence check → Position entry when factors align

---

## Beginner Configurations

### Week 1-2: Janus Atlas Only
**Settings:**
- Enable ONLY: Daily H/L, Weekly H/L, Anchored VWAP (5 levels)
- Disable everything else
- Observation period of 10+ days commonly recommended before trading

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

**Common Practices to Avoid:**
- Enabling all 39 Janus levels tends to create visual overload
- Trading without proper confluence analysis often produces less favorable results
- Adding more indicators prematurely often increases confusion

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

**Analytical Focus:** Identifying 3-factor confluence patterns:
- Pentarch signal + Janus level + Volume spike alignment

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

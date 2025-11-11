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

### Day Trading Crypto (15m-1H)
**Indicators:** The Trinity (Pentarch + Janus + Volume Oracle)

**Pentarch Settings:**
- All defaults
- Focus signals: TD (entries), IGN (confirmation), CAP (exits)
- Ignore BDN on crypto (less reliable due to 24/7 trading)

**Janus Atlas Settings:**
- Enable ONLY: Daily H/L, 4H H/L, Anchored VWAP (6 levels max)
- Disable: All session levels (crypto is 24/7)
- Disable: Market structure labels (too noisy on 15m-1H)

**Volume Oracle Settings:**
- Enable: All 3 systems
- Spike Threshold: 1.3x (crypto has volatile volume)

**Workflow:**
1. Wait for Pentarch TD on 1H
2. Check if TD at Janus Daily Low or 4H support
3. Confirm with Volume spike >1.3x
4. Enter on IGN confirmation

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

### Day Trading Stocks (5m-1H)
**Indicators:** The Trinity

**Pentarch Settings:**
- Chart: 15m or 1H
- All defaults
- Best during market hours: 9:30am-4pm ET

**Janus Atlas Settings:**
- Enable: Daily H/L, Previous Close, Daily VWAP, Premarket H/L (8 levels)
- Enable: Market Structure (BOS, CHoCH) - stocks have clear structure
- Session levels: Enable if trading extended hours

**Volume Oracle Settings:**
- All 3 systems enabled
- Spike Threshold: 1.5x
- Position Manager: Enable for real-time P&L

**Key Insight:** Previous Close is CRITICAL for stocks (often acts as magnetic level)

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

### Macro Cycles (Daily-Weekly)
**Indicators:** Pentarch + Janus + Augury Grid

**Pentarch:**
- Chart: Daily or Weekly
- Full cycle tracking (weeks/months)

**Janus:**
- Monthly/Quarterly/Yearly levels ONLY
- Major VWAP levels

**Augury Grid:**
- Screen 30-40 assets
- Find best macro setups

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

| If you are... | Use this setup | Timeframe |
|---------------|----------------|-----------|
| Complete beginner | Janus only (5 levels) | Daily |
| Learning indicators | Trinity (P+J+V) | 1H or Daily |
| Scalper | Volume + Harmonic | 1m-5m |
| Day trader | Trinity | 15m-1H |
| Swing trader | Trinity + Harmonic | 4H-Daily |
| Multi-asset trader | Augury Grid + Trinity | Any |
| All-in-one preference | Omnideck | 1H-Daily |

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

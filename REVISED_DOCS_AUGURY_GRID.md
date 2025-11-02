# Augury Grid v1.0 — Multi-Symbol Scanner

Real-time scanner displaying TD Sequential signals across multiple assets simultaneously. Monitor up to 40 tickers from single dashboard view.

---

## 🎯 Core Functionality

Augury Grid displays TD Sequential exhaustion signals for multiple symbols on one screen. Each symbol shows current count status and recent signals in grid format.

**Display Format:** Organized grid showing ticker symbols with their current TD counts and signal status.

**Monitoring Capacity:** Up to 40 symbols can be tracked simultaneously.

**Signal Detection:** Uses TD Sequential methodology (same as Omnideck System 1) to identify 9-count exhaustion patterns across all tracked symbols.

**Timeframe Compatibility:** Works on all timeframes. All tracked symbols use the same timeframe as the chart.

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

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator displays TD Sequential exhaustion signals across multiple symbols simultaneously. All signals represent historical pattern detection based on close-to-close price counting methodology. Individual interpretation, application, and outcomes vary. Past signal patterns do not guarantee future results. This is not financial advice.

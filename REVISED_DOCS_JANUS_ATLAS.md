# Janus Atlas v1.0 — Your Market Map

Price level visualization system. Displays 39 different level types across timeframes, sessions, volume analysis, and market structure.

---

## 🎯 Core Functionality

Janus Atlas displays price levels automatically on your chart. 39 level types available, all can be toggled individually.

**Level Categories:**
- **Timeframe Levels:** Daily, Weekly, Monthly highs/lows/opens/closes
- **Session Levels:** Asian, European, North American ranges
- **VWAP Lines:** Volume-weighted average prices (current and previous periods)
- **Volume Profile:** POC, VAH, VAL (point of control and value areas)
- **Market Structure:** Swing highs/lows, BOS, CHoCH labels

**Visual Display:** Lines and labels on chart showing level locations and names.

**Timeframe Compatibility:** Works on all timeframes.

---

## ⚙️ Settings

### Recommended Initial Configuration

**Starter Level Selection (to avoid visual overload):**

Enable these 5 level types first:
- ✓ Daily High/Low (dH, dL)
- ✓ Daily VWAP
- ✓ POC/VAH/VAL
- ✓ Weekly High/Low (WH, WL)
- ✓ Market Structure

Additional levels can be enabled progressively after familiarity with these core levels.

### All 39 Level Types Available

| Category | Levels Available |
|----------|------------------|
| **Daily** | High, Low, Open, Close, Midpoint |
| **Weekly** | High, Low, Open, Close, Midpoint |
| **Monthly** | High, Low, Open, Close, Midpoint |
| **Quarterly** | High, Low, Open, Close |
| **Yearly** | High, Low, Open, Close |
| **Session (Asian)** | High, Low, Open, Close |
| **Session (European)** | High, Low, Open, Close |
| **Session (North American)** | High, Low, Open, Close |
| **VWAP** | Daily, Weekly, Monthly (current + previous) |
| **Volume Profile** | POC, VAH, VAL, Developing POC |
| **Market Structure** | HH, HL, LH, LL, BOS, CHoCH |

### Configuration Options

| Setting | Options | Default |
|---------|---------|---------|
| **Level Visibility** | Individual on/off for each of 39 types | Starter set enabled |
| **Line Style** | Solid, Dashed, Dotted | Varies by type |
| **Label Display** | On/Off for each level type | On |
| **Color Scheme** | Multiple presets available | Scheme 1 |

---

## 📊 Educational Example: S&P 500 Futures (October 2024)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**Setup Observed:**

| Date | Price Action | Levels Present | Pattern |
|------|--------------|----------------|---------|
| Oct 10 | 4,250 | Weekly Low + POC + Monthly VWAP cluster | Multiple level confluence |
| Oct 11 | Bounce to 4,290 | Price reaction at cluster | +40 point move |
| Oct 12 | Continue to 4,350 | Above all cluster levels | +100 points total |

**Pattern Observed:** Three major levels converged at 4,250 (Weekly Low + POC + Monthly VWAP). Price showed bounce reaction from this zone.

**Outcome:** +100 point rally observed from cluster zone.

*This example demonstrates level clustering and price reaction patterns. Individual interpretation and outcomes vary. No pattern guarantees any specific outcome.*

---

## 📍 Level Type Descriptions

### 📅 Timeframe Levels (Daily/Weekly/Monthly)

**What Displays:**
- Lines labeled: dH, dL, WH, WL, MtH, MtL (plus opens, closes, midpoints)

**Level Definitions:**
- **Daily High/Low:** Today's price range extremes
- **Weekly High/Low:** Current week's price range extremes
- **Monthly High/Low:** Current month's price range extremes
- **Opens:** Period opening prices
- **Midpoints:** Calculated center of period range

**Characteristics:**
- Price reactions occur at these levels
- Weekly levels show stronger reactions than daily
- Monthly levels show strongest reactions
- Clusters of multiple levels indicate zones of interest

**Example:** Bitcoin declines to Weekly Low at $65,000 → Bounce reaction observed (support characteristics).

---

### 🕐 Session Levels (Asian/European/North American)

**What Displays:**
- Lines labeled: AH, AL (Asian), EH, EL (European), NAH, NAL (North American)

**Level Definitions:**
- **Asian Session:** Tokyo trading hours range
- **European Session:** London trading hours range
- **North American Session:** New York trading hours range
- Each shows: High, Low, Open, Close

**Characteristics:**
- Session highs/lows often tested during subsequent sessions
- Asian lows often swept during London open
- North American highs act as resistance levels
- Session breaks indicate liquidity characteristics

**Example:** Price spikes above Asian High at $66,500, immediately reverses → Session high sweep pattern (liquidity grab characteristics).

---

### 💰 VWAP Lines (Volume-Weighted Average Price)

**What Displays:**
- Lines labeled: VWAP-D (daily), VWAP-W (weekly), VWAP-M (monthly)
- Also shows previous period VWAP: pVWAP-D, pVWAP-W, pVWAP-M

**Level Definition:**
- VWAP = Volume-weighted average price
- Represents "true average" where most volume traded
- Calculated as cumulative (volume × price) / cumulative volume

**Characteristics:**
- Price above VWAP = Bullish positioning
- Price below VWAP = Bearish positioning
- Price returns to VWAP (magnet effect observed)
- Institutional reference level

**Example:** Price spikes to $68,000, VWAP at $66,000 → Pullback to VWAP level observed.

---

### 🎯 Volume Profile (POC, VAH, VAL)

**What Displays:**
- POC (Point of Control) - Horizontal line at highest volume price
- VAH (Value Area High) - Upper boundary of value zone
- VAL (Value Area Low) - Lower boundary of value zone

**Level Definitions:**
- **POC:** Price level with highest traded volume (strongest magnet effect)
- **VAH:** Top of value area (standard 70% of volume above VAL)
- **VAL:** Bottom of value area (standard 70% of volume below VAH)

**Characteristics:**
- POC acts as strong magnet (repeated price returns observed)
- Above VAH = Extended above fair value
- Below VAL = Extended below fair value
- Value area contains "fair value" zone

**Example:** Price at $69,000, POC at $67,000 → Pullback to POC observed (magnet effect).

---

### 📈 Market Structure (Swing Points & Breaks)

**What Displays:**
- **Labels at swing points:** HH (Higher High), HL (Higher Low), LH (Lower High), LL (Lower Low)
- **Break labels:** BOS (Break of Structure), CHoCH (Change of Character)

**Structure Definitions:**
- **HH/HL:** Uptrend swing pattern (higher highs, higher lows)
- **LH/LL:** Downtrend swing pattern (lower highs, lower lows)
- **BOS:** Structure break in trend direction (continuation signal)
- **CHoCH:** Structure change opposite to trend (reversal warning)

**Characteristics:**
- HH → HL → HH pattern = Uptrend structure
- LH → LL → LH pattern = Downtrend structure
- BOS labels indicate trend continuation
- CHoCH labels indicate potential reversal

**Example Pattern:**
```
Price: HL → HH → HL → HH (with BOS labels)
Structure: Strong uptrend characteristics
```

*Market structure provides trend context. Individual interpretation varies.*

---

## 📖 Educational Example: Bitcoin (November 2024)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**Chart: 4-Hour Timeframe**

**Levels Active:**
- Daily VWAP: $43,200
- Weekly Low: $42,800
- POC: $43,000
- Market Structure: Showing HL pattern (uptrend)

**Sequence Observed:**

| Time | Price | Level Interaction | Pattern |
|------|-------|-------------------|---------|
| Nov 5, 8am | $43,500 | Above VWAP cluster | Pullback begins |
| Nov 5, 8pm | $42,900 | Tests Weekly Low + POC zone | Cluster reached |
| Nov 6, 8am | $43,100 | Bounce from cluster | HL formed |
| Nov 7, 4pm | $44,800 | Rally continues | +$1,900 from cluster |

**Pattern Analysis:**
- Three levels clustered: Weekly Low ($42,800) + POC ($43,000) + VWAP ($43,200)
- Price pulled back to cluster zone
- Bounce occurred, HL structure formed
- Rally of $1,900 observed (4.4% move)

**Level Interaction:** Cluster created support zone where multiple levels converged. Price reaction observed at this confluence.

*This example demonstrates level clustering and structure formation. Individual interpretation and outcomes vary.*

---

## 🔄 Level Reaction Patterns

**Common Patterns Observed:**

### Pattern 1: Bounce (Support/Resistance)
```
Price approaches level → Reversal occurs
Interpretation: Support (bounce up) or Resistance (bounce down)
```

**Example:** Price declines to Weekly Low → Bounce to upside observed.

### Pattern 2: Break (Continuation)
```
Price approaches level → Penetrates through → Continues direction
Interpretation: Level broken, continuation pattern
```

**Example:** Price breaks above Daily High → Continues upward momentum.

### Pattern 3: Retest After Break
```
Price breaks level → Pulls back to test level → Continues original direction
Interpretation: Break confirmation, retest pattern
```

**Example:** Price breaks $100 level → Pulls back to $100 → Continues higher.

### Pattern 4: Cluster Zone (Multiple Levels)
```
Multiple levels converge → Enhanced reaction characteristics
Interpretation: High confluence zone, stronger reactions observed
```

**Example:** Weekly Low + VWAP + POC at $65,000 → Strong support characteristics at zone.

*Patterns provide context for level interactions. Individual interpretation varies.*

---

## 🎯 Level Usage by Trading Style

### For Scalping (5m-15m charts):
**Recommended Levels:**
- ✓ Session levels (Asian/Euro/NA)
- ✓ Daily VWAP
- ✓ Daily High/Low
- ✓ POC/VAH/VAL
- ✓ Market structure

**Rationale:** Intraday levels relevant for short-term positioning.

### For Day Trading (1H-4H charts):
**Recommended Levels:**
- ✓ Daily + Weekly levels
- ✓ Daily + Weekly VWAP
- ✓ POC/VAH/VAL
- ✓ Market structure
- ✓ Previous day levels

**Rationale:** Combination of intraday and swing levels.

### For Swing Trading (Daily charts):
**Recommended Levels:**
- ✓ Weekly + Monthly levels
- ✓ Weekly + Monthly VWAP
- ✓ Market structure
- ✓ Quarterly levels
- ✗ Session levels (too granular)

**Rationale:** Higher timeframe levels match swing holding periods.

*Level selection varies based on individual trading approach and timeframe.*

---

## 🔔 Alert Configuration

**Alert Capabilities:**

Janus Atlas can trigger alerts when price approaches or crosses specific levels.

**Available Alert Types:**
- Price crossing level (above/below)
- Price within distance of level
- Multiple levels clustering
- Structure break (BOS/CHoCH)

**Alert Setup:**
1. Open indicator settings
2. Navigate to alert section
3. Select desired level types for alerts
4. Set distance threshold
5. Configure notification preferences

**Example Alert:**
```
Alert: "Price crossed Daily VWAP"
Trigger: When price crosses above or below Daily VWAP line
```

*Alerts provide level notification. Subsequent action determined by individual trading approach.*

---

## ❓ Frequently Asked Questions

### Q: How many levels should I enable?
**A:** Starting with 5-7 key levels recommended to avoid visual overload. Additional levels can be added progressively based on individual approach.

### Q: Do all 39 levels appear at once?
**A:** No. Each level can be toggled on/off individually. Display exactly the levels relevant to your approach.

### Q: Can I customize colors?
**A:** Yes. Each level type has customizable color settings. Multiple preset color schemes available.

### Q: What timeframes work?
**A:** All timeframes supported. Level relevance varies by timeframe (e.g., session levels more relevant on intraday charts).

### Q: Do levels repaint?
**A:** Current period levels update in real-time (e.g., today's high adjusts as price moves). Historical levels do not change retroactively.

### Q: How are POC/VAH/VAL calculated?
**A:** Volume Profile calculations based on volume distribution across price levels. POC = highest volume node. VAH/VAL = value area boundaries (standard 70% volume distribution).

### Q: What's the difference between BOS and CHoCH?
**A:** BOS (Break of Structure) = break in trend direction (continuation). CHoCH (Change of Character) = break opposite to trend (potential reversal indication).

### Q: Can I use with other indicators?
**A:** Yes. Janus Atlas compatible with all other indicators. Designed to work with entire Signal Pilot suite.

### Q: Does it work on all assets?
**A:** Yes. Compatible with stocks, futures, forex, crypto - any asset on TradingView.

### Q: How often do levels update?
**A:** Real-time for current period levels. Historical levels fixed once period closes.

---

## 📋 Quick Reference Guide

### Essential Levels Quick Reference

| Level Type | Label | Best For | Key Characteristic |
|------------|-------|----------|-------------------|
| **Daily High/Low** | dH, dL | All styles | Today's range extremes |
| **Weekly High/Low** | WH, WL | Swing/Day | This week's range |
| **Monthly High/Low** | MtH, MtL | Swing | This month's range |
| **Daily VWAP** | VWAP-D | Day/Scalp | Intraday average price |
| **Weekly VWAP** | VWAP-W | Swing/Day | Weekly average price |
| **POC** | POC | All styles | Highest volume price |
| **VAH/VAL** | VAH, VAL | All styles | Value area boundaries |
| **Session Highs/Lows** | AH, AL, EH, EL, NAH, NAL | Scalp/Day | Session range extremes |
| **Market Structure** | HH, HL, LH, LL, BOS, CHoCH | All styles | Trend context |

### Level Interaction Quick Reference

| Pattern | Description | Observed Characteristic |
|---------|-------------|------------------------|
| **Bounce** | Price touches, reverses | Support/Resistance |
| **Break** | Price penetrates, continues | Level broken |
| **Retest** | Break → return → continue | Confirmation pattern |
| **Cluster** | Multiple levels converge | Enhanced reaction zone |

### Timeframe Relevance Guide

| Chart Timeframe | Most Relevant Levels |
|-----------------|---------------------|
| **5m-15m** | Session levels, Daily VWAP, POC |
| **1H-4H** | Daily/Weekly levels, Daily/Weekly VWAP, POC/VAH/VAL |
| **Daily** | Weekly/Monthly levels, Weekly/Monthly VWAP, Structure |
| **Weekly** | Monthly/Quarterly levels, Monthly VWAP |

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

**Additional Resources:**
- Signal Pilot Suite Overview
- Getting Started Guide
- Video Tutorials (if available)

---

**Disclaimer:** This indicator displays price levels based on various calculation methodologies (timeframe extremes, volume weighting, volume profile distribution, market structure analysis). All levels represent historical or current price data. Individual interpretation, application, and outcomes vary. Past level reactions do not guarantee future results. This is not financial advice.

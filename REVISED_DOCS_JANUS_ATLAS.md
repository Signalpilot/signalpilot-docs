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

## 📚 Before You Start — Prerequisites

### Universal Requirements:
- **Basic Chart Reading:** Understand candlesticks, timeframes, and how to navigate TradingView
- **Support & Resistance Concepts:** Recognize that price tends to react at certain levels
- **Risk Management Fundamentals:** Understanding position sizing and stop-loss concepts
- **TradingView Account:** Free tier minimum (Pro/Premium unlocks more indicators and alerts)
- **Chart Observation Time:** At least 10-20 hours watching live charts to understand price movement

### Additional Knowledge for Janus Atlas:
- **Support/Resistance Theory:** Understanding why price reacts at specific levels
- **Multiple Timeframe Analysis:** How Daily levels differ from Weekly levels
- **VWAP Basics:** What Volume-Weighted Average Price represents

### Recommended Learning Path:
1. Start with **5 Core Levels Only** (Daily High/Low, Weekly High/Low, Anchored VWAP)
2. Master these 5 before enabling additional level types
3. Practice identifying **level clusters** (where multiple levels converge)
4. Learn to combine with Pentarch patterns for confluence

### Estimated Learning Time:
- **Basic Proficiency:** 8-12 hours (understand 5 core levels, spot level reactions)
- **Intermediate:** 25-35 hours (use multiple timeframe levels, identify clusters)
- **Advanced:** 50+ hours (custom level configurations, multi-indicator confluence)

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

## ⚙️ Advanced Configuration Examples

Default settings work for most users. Advanced traders can optimize for specific scenarios:

#### Configuration 1: Minimalist Level Setup

**Use Case:** Clean charts, focus on key levels only

**Levels to Enable (5 Total):**
1. Daily High
2. Daily Low
3. Weekly High
4. Weekly Low
5. Anchored VWAP

**Levels to Disable:** All others (34 level types disabled)

**Visual Settings:**
- Line width: Thin
- Opacity: 70-80%
- Label size: Small

**Best For:** Scalpers, clean-chart traders, beginners

---

#### Configuration 2: Multi-Timeframe Power Setup

**Use Case:** Complete level picture across timeframes

**Levels to Enable:**
- **Intraday:** Hourly High/Low
- **Daily:** Daily High/Low, Daily Open
- **Weekly:** Weekly High/Low
- **Monthly:** Monthly High/Low
- **Special:** Anchored VWAP, Previous Day Close

**Visual Strategy:**
- Different colors per timeframe
- Daily levels: Thicker lines
- Intraday levels: Thinner lines

**Best For:** Swing traders analyzing multiple timeframes

---

#### Configuration 3: Volume-Weighted Levels Focus

**Use Case:** Institutional level tracking

**Levels to Enable:**
- Anchored VWAP (all variants)
- Volume-weighted zones
- POC (Point of Control)
- VAH/VAL (Value Area High/Low)

**Disable:** Time-based levels (just volume-based)

**Best For:** Volume traders, institutional footprint analysis

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

## 📊 Educational Example 1: EUR/USD Level Cluster Reaction (November 2023)

**Market Context:**
EUR/USD had rallied from 1.0500 to 1.0920 over 3 weeks (+4.2%). On November 15, 2023, price approached a significant level cluster on the daily timeframe.

**Level Cluster Identified:**

| Level Type | Price | Source |
|------------|-------|--------|
| Weekly High | 1.0915 | Previous week's high |
| Monthly High | 1.0928 | October 2023 monthly high |
| Anchored VWAP | 1.0922 | Volume-weighted average from rally start |
| Psychological | 1.0900 | Round number |

**Cluster Range:** 1.0900 to 1.0928 (28 pips wide)

**What Made This Cluster Significant:**

✓ **Multiple Timeframes:** Weekly AND Monthly levels converging
✓ **Volume Confirmation:** VWAP within cluster (volume accumulated here)
✓ **Psychological Level:** 1.0900 round number adding weight
✓ **Tight Range:** All levels within 28 pips = strong cluster

**Price Action at Cluster:**

- **Nov 14:** Approached cluster, reached 1.0905
- **Nov 15:** Tested 1.0918 (into cluster), rejected
- **Nov 16:** Second test to 1.0912, failed again
- **Nov 17-20:** Reversed to 1.0795 (-117 pips from cluster high)

**Educational Analysis:**

When multiple Janus Atlas levels cluster within a tight range (here: 28 pips), the zone often acts as stronger resistance/support than individual isolated levels. This example demonstrated:

1. **Level Confluence:** 4 different level types agreeing
2. **Rejection Pattern:** Two tests, two failures (cluster held)
3. **Timeframe Alignment:** Daily chart levels = Daily chart reaction

**Key Lessons:**

- **Clusters > Individual Levels:** Multiple levels together create zones
- **Test and Reject:** Levels don't prevent touches, they often cause rejections
- **Not Guaranteed:** Levels can break—clusters just increase reaction probability

*(Educational example. Past level reactions do not guarantee future behavior. Not financial advice.)*

---

### 🎯 Pattern Recognition Challenge: Tesla August 2024

**Your Task:** Evaluate this level setup.

**Scenario:**
Tesla (TSLA) is in a downtrend, declining from $265 to $216 over 6 weeks. On August 8, 2024, Janus Atlas shows a Daily Low at $215.50. Current price: $216.20.

**Additional Observation:**
- Previous swing low (July): $214.80
- Previous swing low (June): $216.90
- All three lows clustered within $2.10 range

**Question:** What does this level configuration suggest?

A) Strong support zone - likely bounce
B) Weak level - will break easily
C) No significance - random levels
D) Support zone possibility - watch for confirmation

<details>
<summary>💡 Click to Reveal Analysis</summary>

**Correct Answer: D) Support zone possibility - watch for confirmation**

**Level Analysis:**

This presents a potential support cluster:
- Janus Daily Low: $215.50
- Previous lows: $214.80, $216.90
- Range: $2.10 (tight clustering for TSLA)

**Why NOT Answer A (Strong support guaranteed):**

Levels show WHERE price MAY react, not WHERE it WILL react. Even strong clusters can fail during momentum moves. "Support zone possibility" is more accurate than "strong support guaranteed."

**What Actually Happened:**

Price declined to $216.10 on August 8, then bounced to $222.40 over the next 5 trading days (+$6.30 or +2.9%). The cluster acted as support, but this wasn't guaranteed—it was a probability-based zone.

**Educational Insights:**

✓ **Level Clusters Create Zones:** Multiple lows within $2 = potential support zone
✓ **Confirmation Needed:** Watch for actual rejection (higher low, volume, etc.)
✓ **Probability, Not Certainty:** Even good clusters can fail
✓ **Risk Management:** Use clusters for planning, not blind entries

**How Experienced Traders Used This:**

- Watched for price reaction near $215-217 zone
- Waited for confirmation (bounce, volume spike, or pattern)
- Set alerts at cluster levels rather than blind limit orders
- Had plan for both scenarios (bounce OR break)

</details>

*(Educational challenge. Past level reactions do not guarantee future behavior. Not financial advice.)*

---

## 🤝 Using Janus Atlas With Other Indicators

Janus Atlas maps 39 different price level types. Combining with pattern or momentum indicators adds directional context to levels.

#### Setup 1: Janus Atlas + Pentarch (Level + Pattern Confluence)

**Use Case:** Waiting for cycle patterns at key support/resistance levels

**How It Works:**
- Janus shows Daily Low at 50,000
- Price approaches 50,000
- Wait for Pentarch TD or IGN pattern to appear AT the level
- Pattern + level = High-probability entry zone

**Example Workflow:**
1. Identify key Janus level (e.g., Daily Low, Weekly High)
2. Set alert when price approaches level
3. When price reaches level, watch for Pentarch pattern
4. If pattern appears at level → Enter on level + pattern confluence

**Real Application:**
*Tesla (TSLA) - August 2024*
- **Janus Atlas:** Daily Low at $215.50
- **Price Action:** Declined to $216.20
- **Pentarch:** TD pattern appeared at $216.80 (near Daily Low)
- **Confluence:** Pattern appeared within 0.6% of level
- **Outcome:** Early-cycle pattern at support level

---

#### Setup 2: Janus Atlas + Volume Oracle (Level + Volume Confluence)

**Use Case:** Confirming level reactions with volume

**How It Works:**
- Janus shows Weekly High at 4,500
- Price approaches 4,500
- Volume Oracle shows spike as price reaches level
- Volume spike at level = Institutional interest at that zone

**Level Reaction Types:**
- **Bounce with volume:** Level acting as support/resistance
- **Break with volume:** Level being breached with conviction
- **Touch without volume:** Weak reaction, level test

**Example Workflow:**
1. Price approaches Janus level
2. Monitor Volume Oracle for spike
3. Volume spike + price rejection = Level holding
4. Volume spike + price break = Level broken with conviction

---

#### Setup 3: Janus Atlas + Harmonic Oscillator (Level + Momentum)

**Use Case:** Trading level bounces when momentum confirms

**How It Works:**
- Price at Janus support level + Harmonic shows BUY = Bullish bounce setup
- Price at Janus resistance level + Harmonic shows SELL = Bearish rejection setup

**Example:**
*Crude Oil (CL) - May 2024*
- Price at Daily Low $77.50 (Janus Atlas support)
- Harmonic Oscillator showing STRONG BUY (momentum bullish)
- Confluence: Support level + bullish momentum
- Outcome: Level bounce with momentum confirmation

---

## ⚠️ When NOT to Use Janus Atlas

### Avoid This Indicator When:

- **📊 Market Condition: Strong Trending Without Pullbacks**
  During parabolic moves with no retracements, price may not interact with levels for extended periods. Levels become less actionable when price is far from all mapped zones.

- **⏱️ Timeframe: Conflicting Multi-Timeframe Levels**
  When 5-minute, hourly, and daily levels all cluster in different zones, interpretation becomes complex. Start with single-timeframe analysis before combining timeframes.

- **💰 Asset Type: Newly Listed / Low History Assets**
  Assets with <6 months of price history lack sufficient data to establish reliable long-term levels. Wait for more historical data to accumulate.

- **🎯 Strategy Mismatch: Mean Reversion Only**
  If you only trade reversals at levels, you'll miss trend continuation opportunities. Janus shows where price MAY react, not guaranteed reversals.

- **📉 Gap-Heavy Markets**
  Markets that frequently gap (individual stocks with overnight gaps) may jump over multiple levels, reducing their practical use for entry/exit planning.

### Limitations to Understand:

✓ **Levels Show Where Price MAY React, Not WILL React**
Janus Atlas maps statistically significant price zones. Reactions at these levels are common but not guaranteed.

✓ **More Levels ≠ Better Analysis**
Beginners often enable all 39 level types, creating visual overload. Start with 5 core levels (Daily High/Low, Weekly High/Low, Anchored VWAP).

✓ **Levels Are Dynamic, Not Static**
Some levels (VWAP, Volume-weighted zones) recalculate with new data. What was resistance yesterday may shift today.

✓ **Level Clusters > Individual Levels**
Single isolated levels have less significance than clusters where multiple levels converge within tight ranges.

### Better Alternatives When:

| Scenario | Use Instead |
|----------|-------------|
| Need directional momentum signals | → Pentarch or Harmonic Oscillator |
| Want volume-based price zones | → Volume Oracle Volume Zones |
| Need all-in-one solution | → Omnideck (includes level system) |
| Trading breakouts only | → Combine with Pentarch IGN patterns |

---

## 🔧 Troubleshooting Common Issues

### Problem: "Too many levels on chart (visual overload)"

**Solutions:**

1. **Reduce Active Level Types**
   - **Default:** All 39 level types enabled
   - **Solution:** Start with 5 Core Levels only:
     - Daily High/Low
     - Weekly High/Low
     - Anchored VWAP
   - **How:** Disable all others in settings

2. **Use Level Type Filtering**
   - **Enable only what you need:**
     - Scalping: Daily/Weekly levels
     - Swing trading: Weekly/Monthly levels
     - Position trading: Monthly/Quarterly levels

3. **Adjust Visual Settings**
   - Reduce line opacity
   - Use thinner line widths
   - Enable only nearby levels (hide distant ones)

---

### Problem: "Price not reacting at my levels"

**Reality Check:**

**Levels show WHERE price MAY react, not WHERE it WILL react**

**Possible Reasons:**

1. **Level Not Significant Enough**
   - **Check:** Is it an isolated level or part of a cluster?
   - **Solution:** Focus on level clusters (multiple levels within 1-2%)
   - **Why:** Clusters have stronger magnetic effect than single levels

2. **Strong Trend Override**
   - **Check:** Is market in parabolic move?
   - **Solution:** Levels work best during retracements, not parabolic trends
   - **Why:** Strong momentum can ignore levels temporarily

3. **Timeframe Mismatch**
   - **Check:** Using Daily levels on 5m chart?
   - **Solution:** Match level timeframe to trading timeframe
   - **Why:** Daily levels more relevant on higher timeframes

4. **Insufficient Volume at Level**
   - **Check:** Did volume spike as price reached level?
   - **Solution:** Combine with Volume Oracle for volume confirmation
   - **Why:** Levels without volume often get run through

---

### Problem: "Levels changing/moving"

**Understanding Dynamic vs. Static Levels:**

**Dynamic Levels (Recalculate):**
- Anchored VWAP
- Volume-weighted levels
- Session-based levels

**Static Levels (Don't Change):**
- Daily/Weekly/Monthly High/Low (once session closes)
- Pivot points (once calculated)

**This is expected behavior for certain level types**

---

### Problem: "Same level type showing multiple lines"

**Example:** "Why do I see 3 different 'Daily High' lines?"

**Explanation:**
- Previous day's Daily High
- Current day's Daily High (forming)
- Next day's projected Daily High

**Solution:**
- Check level label descriptions
- Disable historical levels if you only want current
- Settings → Show only current session levels

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

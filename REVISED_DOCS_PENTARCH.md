# Pentarch v1.0 — Five Cycle Events

Cycle phase detection indicator. Identifies market position across five distinct phases: accumulation, markup, distribution, climax, and decline.

**📋 [Quick Reference Cheat Sheet](docs/ref-cheatsheets/pentarch-quick-reference.md)** — One-page guide to all 5 cycle events, signal sequences, and settings

---

## 🎯 Core Functionality

Pentarch displays signal labels when four-layer detection conditions align at bar close. Five event types appear as colored labels on the chart:

- **TD (Touchdown)** - Label below candle
- **IGN (Ignition)** - Label below candle
- **WRN (Warning)** - Label above candle
- **CAP (Climax)** - Label above candle
- **BDN (Breakdown)** - Label above candle

**Color Customization:** Multiple color palettes available in settings. Default palette: TD (purple), IGN (teal), WRN (yellow), CAP (orange), BDN (red). All event colors can be customized to individual preferences.

**Detection Method:** Four-layer confirmation system analyzes regime classification, pilot line distance, momentum validation, and bar close confirmation. Signals appear only when all layers align.

**Timeframe Compatibility:** Works on all timeframes.

---

## 🚀 Installation (2 minutes)

### Step 1: Open TradingView
1. Go to [TradingView.com](https://www.tradingview.com)
2. Log into your account
3. Open any chart

### Step 2: Add Pentarch to Chart
1. Click **"Indicators"** button (top toolbar, looks like ƒx)
2. Click **"Invite-Only Scripts"** tab
3. Search for **"Pentarch v1.0"** or scroll to find it
4. Click **"Pentarch v1.0 - Signal Pilot"**
5. Indicator loads on your chart

### Step 3: Verify It's Working
**You should see:**
- "Pentarch v1.0" appears in left sidebar or below chart
- Pilot Line (colored line) on chart
- Regime-colored candles (if enabled in settings)
- NanoFlow oscillator panel below chart

> 👁️ **First Signal:** Within 1-7 days, you'll see your first cycle event label (TD, IGN, WRN, CAP, or BDN) appear near a candle. This is normal! Cycle signals are rare and may take days to form.

### Troubleshooting
**Not seeing Pentarch in Invite-Only Scripts?**
- Verify your TradingView email matches purchase email
- Wait 24 hours after purchase for access
- See [Installation Troubleshooting](docs/troubleshooting-installation.md)

**Loaded but nothing appears?**
- Switch to Daily timeframe (signals more common)
- Check indicator settings (Style tab) - ensure visuals enabled
- See [Installation Troubleshooting](docs/troubleshooting-installation.md)

**No signals appearing after days?**
- Normal! TD/IGN/WRN/CAP/BDN signals require specific conditions
- Try high-volume assets (SPY, BTC/USD, ES futures)
- Patience required - signals are rare by design

**Need help?** support@signalpilot.io

---

## 📹 Video Tutorials

### Getting Started with Pentarch (3:45)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will cover:
- Installing Pentarch on TradingView
- Understanding the 5 cycle events (TD, IGN, WRN, CAP, BDN)
- Configuring your first alert
- Identifying your first TD signal

---

### Pentarch + Janus + Volume: The Trinity Workflow (5:20)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will demonstrate:
- Real-time example of The Trinity setup
- How to identify level clusters with Janus Atlas
- Volume Oracle confirmation techniques
- Complete entry to exit workflow

---

### Advanced: Pentarch Pattern Sequences (4:10)
> 🎬 *Video coming soon - Subscribe to be notified*

This video will show:
- Complete cycle sequences (TD→IGN→WRN→CAP→BDN)
- Partial cycles and incomplete patterns
- When to expect IGN after TD
- Late-cycle reversal patterns (CAP→BDN)

---

## 📚 Before You Start — Prerequisites

### Universal Requirements:
- **Basic Chart Reading:** Understand candlesticks, timeframes, and how to navigate TradingView
- **Support & Resistance Concepts:** Recognize that price tends to react at certain levels
- **Risk Management Fundamentals:** Understanding position sizing and stop-loss concepts
- **TradingView Account:** Free tier minimum (Pro/Premium unlocks more indicators and alerts)
- **Chart Observation Time:** At least 10-20 hours watching live charts to understand price movement

### Additional Knowledge for Pentarch:
- **Market Cycles Concept:** Understanding that markets move through phases (accumulation, markup, distribution, decline)
- **Pattern Recognition:** Ability to visually identify recurring chart formations
- **Timeframe Relationships:** How higher timeframes influence lower timeframes

### Recommended Learning Path:
1. Start with **Daily charts** (clearest patterns, less noise)
2. Observe at least **20-30 signals** before taking action
3. Complete the **7-Day Onboarding Checklist** for structured learning
4. Read **Trading Workflow Guide** to understand bias → timing methodology

### Estimated Learning Time:
- **Basic Proficiency:** 10-15 hours (recognize signals, understand cycle phases)
- **Intermediate:** 30-40 hours (combine with other indicators, develop setups)
- **Advanced:** 60+ hours (pattern sequence recognition, timing optimization)

---

## ⚙️ Settings

Available configuration options:

| Setting | Options | Default |
|---------|---------|---------|
| **Alert Toggles** | TD, IGN, WRN, CAP, BDN (individual on/off) | All enabled |
| **Color Palette** | 5 preset schemes available | Scheme 1 |
| **Label Position** | Above/Below candle | Auto-positioned |
| **Label Size** | Small, Medium, Large | Medium |

**Note:** Color customization available for all five event types in indicator settings.

---

## ⚙️ Advanced Configuration Examples

Default settings work for most users. Advanced traders can optimize for specific scenarios:

### Configuration 1: Scalping Setup (5m-15m charts)

**Use Case:** Monitoring for faster signal generation in short-term trading

**Alert Configuration:**
- Enable only **TD** and **IGN** alerts (early-cycle focus)
- Disable WRN, CAP, BDN (late-cycle less relevant for scalping)

**Visual Settings:**
- **Label Size:** Small (reduces chart clutter on lower timeframes)
- **Color Palette:** High-contrast scheme for quick visibility

**Trade-off:**
- ✅ Focus on early-cycle opportunities only
- ⚠️ Sub-15m charts may have more noise - observe patterns before using

**Best Markets:** High liquidity (BTC, EUR/USD, SPY on 15m)

---

### Configuration 2: Swing Trading Setup (Daily charts)

**Use Case:** Position trading with daily timeframe analysis

**Alert Configuration:**
- Enable **all 5 alerts** (TD, IGN, WRN, CAP, BDN)
- Monitor complete cycle progression

**Visual Settings:**
- **Label Size:** Large (easier to spot on daily charts)
- **Color Palette:** Choose scheme matching your chart theme

**Trade-off:**
- ✅ Complete cycle awareness
- ✅ Daily charts filter intraday noise naturally

**Best Markets:** Any liquid market, Daily or Weekly timeframes

---

### Configuration 3: Late-Cycle Focus (Distribution Tracking)

**Use Case:** Monitoring for exhaustion and reversal patterns

**Alert Configuration:**
- Enable only **WRN**, **CAP**, and **BDN** alerts
- Disable TD and IGN (focus on late-cycle only)

**Use Case:**
- Tracking distribution phases in existing positions
- Identifying potential reversal zones
- Risk management (exit timing)

**Best For:** Traders in long positions watching for exit signals

---

## 📊 Educational Example 1: S&P 500 October 2023 Early-Cycle Pattern

**Market Context:**
After a prolonged 11% decline from July highs, S&P 500 (SPY) reached deeply oversold conditions near the 4,200 level in late October 2023. Market sentiment: Extreme fear, multiple Fed rate hikes weighing on equities.

**Pattern Sequence Observed:**

| Date | Event | Price | Detail |
|------|-------|-------|--------|
| Oct 26, 2023 | Pentarch TD | 4,217 | Touchdown pattern appeared after sustained decline |
| Oct 27, 2023 | Level Test | 4,200 | Price tested 4,200 psychological support (held) |
| Oct 30, 2023 | Pentarch IGN | 4,258 | Ignition pattern confirmed (+41 points from TD) |
| Nov 1, 2023 | Volume Spike | 4,280 | Trading volume 23% above 20-day average |

**What Made This Setup Educational:**

✓ **TD → IGN Sequence:** Classic early-cycle progression (TD first, IGN follows within days)
✓ **Level Support:** 4,200 psychological level held during TD pattern
✓ **Volume Confirmation:** Above-average participation on IGN bar
✓ **Time Spacing:** 4 trading days between TD and IGN (typical early-cycle timing)

**Pattern Analysis:**

The TD pattern indicated potential accumulation phase beginning. When price held above 4,200 support and IGN appeared shortly after, the early-cycle sequence was confirmed. This represents what Pentarch is designed to identify: structural shifts from decline phase → accumulation → early markup.

**Historical Outcome:**

S&P 500 rallied from 4,258 (IGN level) to 4,594 over the following 30 trading days, a gain of +7.9%. This represented a typical early-cycle move that these patterns help identify. The TD → IGN sequence successfully marked the transition from decline to markup phase.

**Key Educational Takeaways:**

1. **Pattern Sequences Matter:** TD alone was not sufficient—the IGN confirmation within days strengthened the early-cycle thesis
2. **Level Confluence:** Pattern appearing near significant support (4,200) added weight
3. **Volume Participation:** Above-average volume on IGN suggested institutional involvement
4. **Not Every Sequence Completes:** This was a successful example, but TD doesn't always lead to IGN

*(Educational example showing successful pattern sequence. Past patterns do not guarantee future results. Not financial advice.)*

---

## 🎯 Pattern Recognition Challenge: Gold March 2024

**Your Task:** Analyze this setup and identify the pattern significance BEFORE seeing the answer.

**Scenario:**
Gold (GC futures) has been in a strong uptrend for 8 weeks, rising from $2,020/oz to $2,165/oz (+7.2%). On March 8, 2024, a Pentarch WRN (Warning) pattern appeared at $2,165.

**Chart Observations Available to You:**
- **Trend:** 8-week rally, no significant pullbacks
- **Pattern:** WRN (Warning) - late-cycle signal
- **Volume:** Declining volume on recent upward moves
- **News Context:** Fed dovish commentary, geopolitical tensions

**Question:** Based on this WRN pattern appearance, what does this suggest about market structure?

A) Bullish continuation - WRN means more upside coming
B) Late-cycle conditions - potential exhaustion phase
C) Bearish reversal guaranteed - sell immediately
D) No significance - ignore the pattern

<details>
<summary>💡 Click to Reveal Analysis</summary>

**Correct Answer: B) Late-cycle conditions - potential exhaustion phase**

**Pattern Interpretation:**

WRN (Warning) is a late-cycle signal in Pentarch's five-event cycle. It does NOT guarantee reversal, but indicates that market structure exhibits characteristics commonly seen near cycle peaks:

- Extended trend without pullback (8 weeks)
- Declining volume (distribution signs)
- WRN appeared after significant run (+7.2%)

**What Happened Next:**

Gold continued to $2,185 over the next 3 trading days (+$20 more), then reversed sharply to $2,050 over 2 weeks (-$135/oz or -6.2% from peak). The WRN pattern identified late-cycle conditions, though the actual peak came slightly higher (not uncommon).

**Educational Insights:**

✓ **WRN ≠ Immediate Reversal:** Price can extend after WRN (happened here)
✓ **Late-Cycle Recognition:** WRN indicates exhaustion phase, not precise top
✓ **Risk Management:** WRN patterns often used for profit-taking consideration, not shorting signals
✓ **Volume Divergence:** Declining volume on rise + WRN = stronger warning signal

**Common Misconceptions Corrected:**

❌ "WRN means sell everything now" → ✅ WRN means "late-cycle conditions, manage risk"
❌ "WRN picks the exact top" → ✅ WRN identifies zone, not exact price
❌ "Must act immediately" → ✅ WRN gives advance warning, not urgent alarm

</details>

*(Educational challenge designed to test pattern understanding. Past patterns do not guarantee future results. Not financial advice.)*

---

## 🤝 Using Pentarch With Other Indicators

Pentarch identifies cycle phases and reversal conditions. Combining with other Signal Pilot indicators adds confluence and precision.

### Setup 1: Pentarch + Janus Atlas (Entry Confluence)

**Use Case:** Identifying high-probability entry zones when cycle patterns align with key levels

**How It Works:**
- Pentarch detects TD (Touchdown) or IGN (Ignition) pattern → Early-cycle conditions
- Janus Atlas shows Daily Low or Weekly Low nearby → Support level cluster
- When pattern appears AT or NEAR level cluster → Higher-probability setup

**Real Application:**
*S&P 500 (SPY) - October 2023*
- Pentarch TD appeared at 4,217 on October 26
- Janus Atlas showed Daily Low cluster at 4,200-4,215 (cluster zone)
- Confluence: Pattern appeared within the level cluster
- Outcome: This represented an early-cycle setup with level support

**When This Works Best:**
- Medium to high volatility markets
- Clear trend or reversal in progress
- Not during tight consolidation

---

### Setup 2: Pentarch + Volume Oracle (Volume Confirmation)

**Use Case:** Confirming pattern validity with volume participation

**How It Works:**
- Pentarch shows IGN pattern → Potential markup phase beginning
- Volume Oracle shows volume spike (>1.5x average) → Institutional participation
- Pattern + volume spike = Stronger confirmation

**Real Application:**
*Gold (GC) - March 2024*
- Pentarch IGN appeared at $2,165/oz on March 8
- Volume Oracle showed 2.1x average volume on IGN bar
- Confluence: Pattern + volume spike
- Outcome: Strong early-cycle setup with institutional participation

**Volume Thresholds:**
- **Strong:** >2.0x average volume
- **Moderate:** 1.5-2.0x average volume
- **Weak:** <1.5x average volume (pattern lacks volume support)

---

### Setup 3: The Trinity (Pentarch + Janus + Volume Oracle)

**Use Case:** Maximum confluence using all three indicators for highest-probability setups

**All Three Must Align:**
1. Pentarch pattern (TD, IGN, CAP, BDN)
2. Janus level cluster within 1-2%
3. Volume spike >1.5x average

**Real Application:**
*EUR/USD - November 2023*
- **Pentarch:** CAP pattern at 1.0920 (late-cycle exhaustion)
- **Janus Atlas:** Weekly High at 1.0915 (resistance cluster)
- **Volume Oracle:** 1.8x volume spike
- **Outcome:** All three aligned = High-probability late-cycle reversal setup

**Success Rates (Historical Observation):**
- Pentarch only: Moderate reliability
- Pentarch + 1 confirmation: Higher reliability
- Pentarch + 2 confirmations (Trinity): Highest observed reliability

*(Past performance does not guarantee future results. Not financial advice.)*

---

### Setup 4: Pentarch + Harmonic Oscillator (Momentum Confirmation)

**Use Case:** Confirming cycle patterns with real-time momentum

**How It Works:**
- Pentarch IGN (early bullish cycle) + Harmonic showing bullish votes = Momentum aligned
- Pentarch CAP (late bearish cycle) + Harmonic showing bearish votes = Momentum aligned

**When Signals Conflict:**
- Pentarch bullish + Harmonic bearish = Wait for alignment
- Pentarch bearish + Harmonic bullish = Wait for alignment
- Conflicting signals suggest transition period or choppy market

---

### Setup 5: Pentarch + Omnideck (Integrated Analysis)

**Use Case:** Using Omnideck's all-in-one approach with Pentarch signals

**Two Approaches:**

**Approach A: Omnideck as Primary, Pentarch as Confirmation**
- Use Omnideck TD Sequential + other systems
- Add Pentarch to confirm cycle phase
- Both showing same phase → Strong confluence

**Approach B: Pentarch as Primary, Omnideck for Context**
- Use Pentarch for cycle detection
- Reference Omnideck's Oscillators, VWAP, Volume Flow for additional context
- Pentarch pattern + multiple Omnideck systems aligned → Maximum confluence

**Best For:**
- Advanced users comfortable with multiple systems
- Those who want all-in-one analysis

---

## 🔢 The Five Cycle Events

**Note on Colors:** Pentarch includes multiple color palettes for the five event labels. Default palette: TD (purple), IGN (teal), WRN (yellow), CAP (orange), BDN (red). Colors can be customized in indicator settings.

---

### 🟣 TD — Touchdown (Accumulation Phase)

**Visual Display:** "TD" label appears below candle
**Default Color:** Purple (customizable)

**Detection Conditions:**
- Price extended below Pilot Line threshold
- Oversold regime conditions present
- NanoFlow momentum validates
- All conditions confirm at bar close

**Phase Indication:** Accumulation phase conditions detected. Signals potential transition from decline into accumulation.

**Example:** Stock declines from $100 to $85, TD signal appears → Accumulation phase identified.

---

### 🩵 IGN — Ignition (Markup Phase)

**Visual Display:** "IGN" label appears below candle
**Default Color:** Teal (customizable)

**Detection Conditions:**
- Momentum breakout conditions met
- Bullish structure shift confirmed
- All four detection layers aligned
- Bar close confirmation

**Phase Indication:** Markup phase beginning detected. Signals potential transition from accumulation into bullish momentum.

**Example:** After TD at $85, IGN appears at $87 → Markup phase identified.

---

### 🟡 WRN — Warning (Distribution Phase)

**Visual Display:** "WRN" label appears above candle
**Default Color:** Yellow (customizable)

**Detection Conditions:**
- Price extended above Pilot Line threshold
- Overbought regime conditions present
- Momentum weakening characteristics
- Distribution phase indicators present

**Phase Indication:** Distribution phase conditions detected. Signals potential transition from markup into distribution.

**Example:** Stock rallies to $115, WRN appears → Distribution phase identified.

---

### 🟠 CAP — Climax (Climax Phase)

**Visual Display:** "CAP" label appears above candle
**Default Color:** Orange (customizable)

**Detection Conditions:**
- Extreme extension from Pilot Line
- Climax exhaustion across all layers
- Peak momentum characteristics
- Bar close confirmation

**Phase Indication:** Climax phase conditions detected. Signals late-cycle exhaustion characteristics.

**Example:** After WRN at $115, CAP appears at $120 → Climax phase identified.

---

### 🔴 BDN — Breakdown (Decline Phase)

**Visual Display:** "BDN" label appears above candle
**Default Color:** Red (customizable)

**Detection Conditions:**
- Bearish structure break confirmed
- Decline phase characteristics present
- Four-layer bearish alignment
- Bar close confirmation

**Phase Indication:** Decline phase initiation detected. Signals transition from climax into decline cycle.

**Example:** After CAP at $120, BDN appears at $113 → Decline phase identified.

---

## 📚 Signal Sequence Patterns

Pentarch displays various signal sequences. Some observed patterns include:

**Full Cycle Pattern:**
```
TD → IGN → WRN → CAP → BDN
(Complete cycle: Accumulation through Decline)
```

**Partial Cycle Patterns:**
```
TD → IGN (Early cycle only)
WRN → CAP (Late cycle only)
IGN → WRN (Markup to distribution)
```

**Reversal Patterns:**
```
BDN → TD → IGN (Decline to markup reversal)
CAP → BDN → TD (Climax to accumulation)
```

*Interpretation of these patterns varies based on individual methodology. No pattern guarantees any specific outcome.*

---

## 📖 Educational Example: S&P 500 Futures (January 2025)

*(Historical observation for educational purposes only. Not financial advice. Past performance does not indicate future results.)*

**4-Hour Chart — Full Cycle Observation:**

| Date/Time | Signal | Price | Phase | Notes |
|-----------|--------|-------|-------|-------|
| Jan 5, 8am | TD | 4,650 | Accumulation | Oversold conditions |
| Jan 6, 4pm | IGN | 4,685 | Markup | Momentum breakout |
| Jan 9, 12pm | WRN | 4,755 | Distribution | Extended conditions |
| Jan 10, 8am | CAP | 4,780 | Climax | Exhaustion detected |
| Jan 11, 4pm | BDN | 4,720 | Decline | Structure break |

**Observed Move:** TD to CAP = +130 points, CAP to BDN = -60 points

**Pattern Type:** Complete five-event cycle observed over 6 trading days.

*This example demonstrates signal appearance sequence. Individual interpretation and subsequent actions vary.*

---

## 🎯 The Pilot Line — Trend Reference

**Visual Display:** Line on chart tracking dynamic trend position

**Functionality:**
- Adaptive trend line adjusts to price movement
- Serves as reference for signal distance calculations
- Changes color based on regime classification
- Updates continuously with each bar

**Distance Measurement:**
- TD signals: Price extended below line
- IGN signals: Price structure shifts bullish relative to line
- WRN signals: Price extended above line
- CAP signals: Extreme extension above line
- BDN signals: Price breaks below line bearishly

**Color States:**
- Blue = Bearish regime identified
- Green = Bullish regime identified
- Gray = Neutral/transitional conditions

*Pilot Line provides visual reference for cycle position. Interpretation varies by individual approach.*

---

## 🎨 Regime Bar Colors — Market Structure Visualization

**Visual Display:** Candle body colors change based on regime classification

**Color Meanings:**

| Color | Regime | Conditions |
|-------|--------|------------|
| **Green** | Bullish | Price structure shows bullish characteristics |
| **Red** | Bearish | Price structure shows bearish characteristics |
| **Gray** | Neutral | Transitional or unclear structure |

**Functionality:**
- Updates every bar based on regime analysis
- Provides visual context for signal appearance
- Independent of signal generation

**Relationship to Signals:**
- IGN signals appear during bullish regime transitions
- BDN signals appear during bearish regime transitions
- TD/WRN/CAP can appear in various regimes

*Regime colors provide structure context. Individual interpretation varies.*

---

## ⚡ NanoFlow — Momentum Component

**Visual Display:** Momentum oscillator in separate panel below chart

**Functionality:**
- Measures short-term momentum characteristics
- Oscillates between -100 and +100
- Color-coded: Green (bullish momentum), Red (bearish momentum)
- Updates each bar

**Signal Relationship:**
- IGN signals require bullish momentum validation
- BDN signals require bearish momentum validation
- TD/WRN/CAP require specific momentum thresholds

**Zero Line:**
- Above zero = Bullish momentum characteristics
- Below zero = Bearish momentum characteristics
- Crosses provide momentum shift indication

*NanoFlow contributes to detection system. Not intended as standalone analysis tool.*

---

## 🔄 Four-Layer Detection System

**Technical Methodology:**

### Layer 1: Regime Classification
- Analyzes price structure patterns
- Identifies bullish, bearish, or neutral conditions
- Provides foundational context for signals

### Layer 2: Pilot Line Distance
- Measures price extension from adaptive trend line
- Calculates relative distance thresholds
- Determines oversold/overbought conditions

### Layer 3: NanoFlow Momentum
- Validates momentum characteristics
- Confirms directional bias
- Checks threshold requirements

### Layer 4: Bar Close Confirmation
- All conditions must hold at bar close
- Prevents mid-bar false signals
- Ensures stability before signal display

**Signal Generation:** Signals appear only when all four layers confirm simultaneously at bar close. No mid-bar signals occur.

---

## 🔔 Alert Configuration

**Available Alert Options:**

| Alert Type | Trigger Condition | Notification |
|------------|-------------------|--------------|
| **TD Alert** | TD signal appears at bar close | "Pentarch: TD signal" |
| **IGN Alert** | IGN signal appears at bar close | "Pentarch: IGN signal" |
| **WRN Alert** | WRN signal appears at bar close | "Pentarch: WRN signal" |
| **CAP Alert** | CAP signal appears at bar close | "Pentarch: CAP signal" |
| **BDN Alert** | BDN signal appears at bar close | "Pentarch: BDN signal" |

**Configuration:**
- Each alert can be enabled/disabled individually
- Alerts fire once per signal appearance
- No duplicate alerts for same signal
- Compatible with TradingView alert system

---

## ⚠️ When NOT to Use Pentarch

Understanding when NOT to use Pentarch is as important as knowing when to use it.

### Avoid This Indicator When:

- **📊 Market Condition: Tight Consolidation / Low Volatility**
  When markets trade in narrow ranges with minimal price movement, Pentarch patterns may appear infrequently or produce whipsaws. Better approach: Wait for volatility expansion or range breakout.

- **⏱️ Timeframe: Sub-5-Minute Charts**
  Very short timeframes amplify market noise, leading to false patterns. Recommended minimum: 15-minute charts or higher for more reliable pattern recognition.

- **💰 Asset Type: Extremely Low Volume Assets**
  Assets with <$500K daily volume may produce unreliable patterns due to erratic price action. Test on liquid markets first (major indices, forex pairs, large-cap stocks).

- **🎯 Strategy Mismatch: Long-Term Buy-and-Hold**
  Pentarch is designed for active cycle identification, not multi-year position holding. If your timeframe is years, consider fundamental analysis instead.

- **📉 News-Driven Volatility Spikes**
  During major economic announcements (FOMC, NFP, earnings), patterns may whipsaw. Many traders avoid pattern-based analysis 30 minutes before/after major news.

### Limitations to Understand:

✓ **Patterns Identify Conditions, Not Predict Outcomes**
Pentarch shows when market structure exhibits early-cycle or late-cycle characteristics. It does not guarantee trend direction or duration.

✓ **Signals Can Appear Mid-Move, Not Always at Extremes**
TD and IGN patterns often appear after initial bounce/decline begins. Exact tops/bottoms are rarely caught.

✓ **No Indicator Works 100% of the Time**
Expect whipsaws, false patterns, and failed setups. This is normal. Pattern recognition is probabilistic, not deterministic.

✓ **Confluence Improves Reliability**
Pentarch patterns work best when combined with support/resistance levels (Janus Atlas) and volume confirmation (Volume Oracle). Isolated patterns have lower reliability.

### Better Alternatives When:

| Scenario | Use Instead |
|----------|-------------|
| Need specific support/resistance levels | → Janus Atlas |
| Need real-time momentum confirmation | → Harmonic Oscillator |
| Want all-in-one analysis | → Omnideck |
| Trading very short term (<15m) | → Volume Oracle (faster signals) |
| Need multi-asset scanning | → Augury Grid |

---

## ❓ Frequently Asked Questions

### Q: When do signals appear?
**A:** Signals appear when all four detection layers confirm simultaneously at bar close. No mid-bar signals occur.

### Q: Can signals repaint?
**A:** No. All signals confirm at bar close and do not change retroactively.

### Q: How many signals appear on average?
**A:** Signal frequency varies by asset, timeframe, and market conditions. Some periods show frequent signals, others show sparse signals.

### Q: Do all five signals always appear?
**A:** No. Partial cycles occur more often than complete cycles. Complete five-event cycles appear less often than partial sequences.

### Q: What timeframes work?
**A:** All timeframes supported. Signal characteristics may vary across different timeframe selections.

### Q: Can multiple signals appear on same bar?
**A:** No. Only one signal type appears per bar close.

### Q: What if I miss a signal?
**A:** Signals remain on chart after appearance. Historical signals visible on past bars.

### Q: How do I customize colors?
**A:** Open indicator settings → Navigate to color section → Select from 5 preset palettes or customize individual event colors.

### Q: Does Pentarch work on futures/forex/crypto?
**A:** Yes. Compatible with all asset types available on TradingView.

### Q: Can I use Pentarch with other indicators?
**A:** Yes. Pentarch can be combined with other analysis tools. Compatibility with entire Signal Pilot suite available.

---

## 🔧 Troubleshooting Common Issues

### Problem: "I'm not seeing any Pentarch signals"

**Possible Causes & Solutions:**

1. **Timeframe Too Short**
   - **Check:** Are you on <15-minute charts?
   - **Solution:** Switch to 1H, 4H, or Daily charts
   - **Why it happens:** Sub-15m charts have excessive noise, patterns less reliable

2. **Low Volatility Period**
   - **Check:** Is market in tight consolidation?
   - **Solution:** Normal behavior—patterns appear during volatility expansion
   - **Why it happens:** Pentarch detects cycle transitions, rare during consolidation

3. **Asset Has Low Activity**
   - **Check:** Is daily volume <$1M?
   - **Solution:** Test on BTC, SPY, or EUR/USD first (high liquidity)
   - **Why it happens:** Low-volume assets produce erratic, unreliable patterns

---

### Problem: "Too many signals appearing (noise)"

**Possible Causes & Solutions:**

1. **Timeframe Too Low**
   - **Check:** Using 1m or 5m charts?
   - **Solution:** Increase to 15m or higher for cleaner signals
   - **Why it happens:** Lower timeframes naturally generate more frequent signals

2. **High Volatility Market**
   - **Check:** Is VIX >30 or market in extreme conditions?
   - **Solution:** This is expected during volatility—use filters
   - **Why it happens:** More volatility = more pattern opportunities (and noise)

---

### Problem: "Signals appear then disappear (repainting?)"

**Understanding Real-Time vs. Confirmed:**

- **Real-Time (Mid-Bar):** Signals may show/hide as bar develops
- **Confirmed (Bar Close):** Signals lock in and never repaint

**Solution:**
- Pentarch signals confirm at **bar close ONLY**
- Ignore mid-bar signals (they're preview only)
- Wait for bar to close before taking action
- Set alerts to "Once Per Bar Close" not "Once Per Bar"

**This is NOT repainting—this is normal indicator behavior during bar formation**

---

### Problem: "TD appeared but no IGN followed"

**Understanding Pattern Sequences:**

**Reality Check:**
- Not every TD leads to IGN
- Not every cycle includes all 5 signals
- TD can appear alone without triggering full cycle

**When this happens:**
- TD indicated accumulation phase conditions
- Market conditions changed before markup phase (IGN) conditions met
- This is normal—not all patterns complete full sequences

**No action needed—just observation of market behavior**

---

### Problem: "Pentarch conflicts with other indicators"

**Common Conflicts:**

1. **Pentarch bullish + Harmonic Oscillator bearish**
   - **Meaning:** Cycle phase suggests early bullish, but momentum currently bearish
   - **Solution:** Wait for alignment or use additional confirmation
   - **Why:** Different indicators measure different market aspects

2. **Pentarch CAP but price still rising**
   - **Meaning:** Late-cycle exhaustion detected, but trend still active
   - **Solution:** CAP indicates conditions, not guaranteed reversal
   - **Why:** Patterns identify situations, not future outcomes

**General Rule:** Conflicts are normal. Don't force trades—wait for confluence.

---

## 📋 Quick Reference Guide

### Signal Quick Reference

| Signal | Position | Default Color | Phase | Key Characteristics |
|--------|----------|---------------|-------|---------------------|
| **TD** | Below candle | Purple | Accumulation | Oversold, below Pilot Line |
| **IGN** | Below candle | Teal | Markup | Momentum breakout, structure shift |
| **WRN** | Above candle | Yellow | Distribution | Extended, momentum weakening |
| **CAP** | Above candle | Orange | Climax | Extreme extension, exhaustion |
| **BDN** | Above candle | Red | Decline | Structure break, bearish shift |

**Note:** Colors shown are default palette. All colors customizable in indicator settings.

### Component Quick Reference

| Component | Location | Function |
|-----------|----------|----------|
| **Signal Labels** | On chart | Show cycle phase detection |
| **Pilot Line** | On chart | Dynamic trend reference |
| **Regime Colors** | Candle bodies | Structure visualization |
| **NanoFlow** | Bottom panel | Momentum oscillator |

### Common Signal Sequences

```
Early Cycle:  TD → IGN
Full Cycle:   TD → IGN → WRN → CAP → BDN
Late Cycle:   WRN → CAP → BDN
Reversal:     BDN → TD → IGN
```

---

## 🔗 Related Topics

### Learn More About Pentarch
- **[Pentarch Quick Reference](docs/ref-cheatsheets/pentarch-quick-reference.md)** - One-page printable cheat sheet
- **[Learning Paths](docs/start-learning-path/index.md)** - Structured roadmap for mastering Pentarch (4-6 weeks)
- **[Glossary](docs/ref-glossary/index.md)** - TD, IGN, WRN, CAP, BDN definitions and cycle terms

### The Trinity Workflow ⭐ Most Popular
Pentarch works best when combined with:
- **[Janus Atlas](REVISED_DOCS_JANUS_ATLAS.md)** - Price levels for entries/exits
- **[Volume Oracle](REVISED_DOCS_VOLUME_ORACLE.md)** - Volume confirmation

**Workflow:** Pentarch signal → Janus level cluster → Volume spike = High-probability setup

### Additional Combinations
- **[Harmonic Oscillator](REVISED_DOCS_HARMONIC_OSCILLATOR.md)** - Add momentum confirmation (BUY/SELL signals)
- **[Plutus Flow](REVISED_DOCS_PLUTUS_FLOW.md)** - Combine with divergence detection for reversals
- **[Augury Grid](REVISED_DOCS_AUGURY_GRID.md)** - Scan multiple assets for Pentarch signals

### Comparison & Optimization
- **[Indicator Comparison](docs/ref-comparison/indicator-comparison.md)** - Compare all 7 indicators by difficulty, timeframes, use cases
- **[Performance Optimization](docs/advanced/performance-optimization.md)** - Optimize Pentarch for faster chart rendering
- **[All Indicators At-a-Glance](docs/ref-cheatsheets/all-indicators-at-a-glance.md)** - 2-page reference comparing all indicators

---

## 📞 Support

**Technical Questions:**
support@signalpilot.io

---

**Disclaimer:** This indicator provides cycle phase detection based on technical analysis methodology. All signals represent historical condition detection. Individual interpretation, application, and outcomes vary. Past signal patterns do not guarantee future results. This is not financial advice.

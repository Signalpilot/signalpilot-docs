# Signal Pilot Glossary

Comprehensive definitions of terms used across Signal Pilot indicators and documentation.

---

## 🔤 Quick Navigation

[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Y](#y) | [Z](#z)

---

## A

### Accumulation
**Definition:** A market phase where assets are bought steadily, typically after a decline. Price may consolidate or drift sideways as buying pressure builds.

**Used in:** [Pentarch](../indicators/pentarch-v10.md) (TD signal indicates accumulation phase conditions)

**Related terms:** [Distribution](#distribution), [Markup](#markup), [Market Cycle](#market-cycle)

---

### Alert
**Definition:** A notification triggered when specific indicator conditions occur. TradingView alerts can send notifications via email, SMS, webhook, or mobile app.

**Used in:** All Signal Pilot indicators

**Configuration:** Each indicator has customizable alert settings for different signal types.

---

### Anchored VWAP
**Definition:** Volume-Weighted Average Price calculated from a specific starting point (anchor) rather than the current period. Common anchors include session open, major swing high/low, or significant event.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (one of 39 level types)

**Related terms:** [VWAP](#vwap), [Volume-Weighted](#volume-weighted)

---

## B

### Bar Close Confirmation
**Definition:** A detection methodology where signals only finalize when the current price bar completes. Prevents mid-bar signals that may disappear before bar close.

**Used in:** [Pentarch](../indicators/pentarch-v10.md) (all signals confirm at bar close only)

**Related terms:** [Repainting](#repainting), [Non-Repainting](#non-repainting)

---

### BDN (Breakdown)
**Definition:** Pentarch's fifth cycle event. Indicates conditions commonly associated with decline phase initiation after climax exhaustion.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Default Color:** Red

**Related terms:** [CAP](#cap-climax), [WRN](#wrn-warning), [Five Cycle Events](#five-cycle-events)

---

### BOS (Break of Structure)
**Definition:** Price movement that breaks a recent swing high (bullish BOS) or swing low (bearish BOS), potentially indicating trend shift or continuation.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (Market Structure labels)

**Related terms:** [CHoCH](#choch-change-of-character), [Market Structure](#market-structure)

---

## C

### CAP (Climax)
**Definition:** Pentarch's fourth cycle event. Indicates conditions commonly associated with climax phase exhaustion characteristics.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Default Color:** Orange

**Related terms:** [WRN](#wrn-warning), [BDN](#bdn-breakdown), [Five Cycle Events](#five-cycle-events)

---

### CHoCH (Change of Character)
**Definition:** A shift in market behavior, often identified by changes in swing patterns, momentum, or structure. May indicate potential trend change.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (Market Structure labels)

**Related terms:** [BOS](#bos-break-of-structure), [Market Structure](#market-structure)

---

### Cluster (Level Cluster)
**Definition:** Multiple price levels converging within a tight range (typically 1-3%). Level clusters often create stronger support/resistance zones than individual levels.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md)

**Example:** Daily High at 50,000 + Weekly High at 50,200 + Monthly VWAP at 50,100 = Cluster zone 50,000-50,200

**Related terms:** [Confluence](#confluence), [Support](#support), [Resistance](#resistance)

---

### Confluence
**Definition:** Agreement between multiple independent indicators or analysis methods. Higher confluence typically associated with higher-probability setups.

**Example:** Pentarch IGN pattern + Janus Atlas support level + Volume Oracle spike = 3-factor confluence

**Used in:** All Signal Pilot indicators (Integration sections)

**Related terms:** [The Trinity](#the-trinity), [Cluster](#cluster-level-cluster)

---

## D

### Divergence
**Definition:** Disagreement between price action and an indicator. Bullish divergence: price makes lower low while indicator makes higher low. Bearish divergence: price makes higher high while indicator makes lower high.

**Used in:** [Plutus Flow](../indicators/plutus-flow-v10.md) (divergence detection system)

**Related terms:** [OBV](#obv-on-balance-volume), [Accumulation](#accumulation), [Distribution](#distribution)

---

### Distribution
**Definition:** A market phase where assets are sold steadily, typically after a rally. Price may consolidate or drift sideways as selling pressure builds.

**Used in:** [Pentarch](../indicators/pentarch-v10.md) (WRN signal indicates distribution phase conditions)

**Related terms:** [Accumulation](#accumulation), [Markup](#markup), [Market Cycle](#market-cycle)

---

## E

### Early-Cycle
**Definition:** The initial phases of a market cycle, typically accumulation and early markup. Pentarch's TD and IGN signals indicate early-cycle conditions.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Related terms:** [Late-Cycle](#late-cycle), [Market Cycle](#market-cycle), [TD](#td-touchdown), [IGN](#ign-ignition)

---

## F

### Five Cycle Events
**Definition:** Pentarch's complete signal set: TD (Touchdown), IGN (Ignition), WRN (Warning), CAP (Climax), BDN (Breakdown). Represents progression through market cycle phases.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Sequence:** TD → IGN → WRN → CAP → BDN (complete cycle)

**Related terms:** [Market Cycle](#market-cycle), [Early-Cycle](#early-cycle), [Late-Cycle](#late-cycle)

---

### Four-Layer Detection
**Definition:** Pentarch's methodology requiring four independent confirmations before signal appears: (1) Regime classification, (2) Pilot Line distance, (3) NanoFlow momentum, (4) Bar close confirmation.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Related terms:** [Bar Close Confirmation](#bar-close-confirmation), [Non-Repainting](#non-repainting)

---

## G

### Grid View
**Definition:** Augury Grid's tabular display showing multiple assets simultaneously with their respective Pentarch signals, Janus levels, and Volume Oracle data.

**Used in:** [Augury Grid](../indicators/augury-grid-v10.md)

**Related terms:** [Multi-Asset Screening](#multi-asset-screening), [Screener](#screener)

---

## H

### Harmonic Oscillator
**Definition:** Signal Pilot indicator using 7-oscillator voting system to generate consensus momentum signals: BUY, SELL, STRONG, NEUT.

**Documentation:** [Harmonic Oscillator v1.0](../indicators/harmonic-oscillator-v10.md)

**Related terms:** [Voting System](#voting-system), [Oscillator](#oscillator)

---

## I

### IGN (Ignition)
**Definition:** Pentarch's second cycle event. Indicates conditions commonly associated with markup phase beginning and bullish momentum breakout.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Default Color:** Teal

**Related terms:** [TD](#td-touchdown), [Markup](#markup), [Early-Cycle](#early-cycle)

---

## J

### Janus Atlas
**Definition:** Signal Pilot indicator mapping 39 different price level types across timeframes, sessions, volume analysis, and market structure.

**Documentation:** [Janus Atlas v1.0](../indicators/janus-atlas-v10.md)

**Related terms:** [Level](#level), [Support](#support), [Resistance](#resistance), [VWAP](#vwap)

---

## L

### Late-Cycle
**Definition:** The final phases of a market cycle, typically distribution, climax, and decline. Pentarch's WRN, CAP, and BDN signals indicate late-cycle conditions.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Related terms:** [Early-Cycle](#early-cycle), [Market Cycle](#market-cycle), [WRN](#wrn-warning), [CAP](#cap-climax)

---

### Level
**Definition:** A specific price point where historical trading activity occurred, potentially causing future price reactions. Janus Atlas identifies 39 different level types.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md)

**Types:** Daily High/Low, Weekly High/Low, Monthly High/Low, VWAP, POC, VAH, VAL, Session levels, etc.

**Related terms:** [Support](#support), [Resistance](#resistance), [Cluster](#cluster-level-cluster)

---

## M

### Market Cycle
**Definition:** The progression of market phases: accumulation → markup → distribution → climax → decline. Pentarch identifies position within this cycle.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Phases:** Accumulation (TD), Markup (IGN), Distribution (WRN), Climax (CAP), Decline (BDN)

**Related terms:** [Five Cycle Events](#five-cycle-events), [Early-Cycle](#early-cycle), [Late-Cycle](#late-cycle)

---

### Market Structure
**Definition:** The pattern of swing highs and swing lows that define trend direction and strength. Janus Atlas tracks structure breaks and changes.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (Market Structure labels: HH, HL, LH, LL, BOS, CHoCH)

**Related terms:** [BOS](#bos-break-of-structure), [CHoCH](#choch-change-of-character)

---

### Markup
**Definition:** A market phase where price rises after accumulation, characterized by increasing momentum and participation.

**Used in:** [Pentarch](../indicators/pentarch-v10.md) (IGN signal indicates markup phase beginning)

**Related terms:** [Accumulation](#accumulation), [Distribution](#distribution), [Market Cycle](#market-cycle)

---

### Multi-Asset Screening
**Definition:** Simultaneous analysis of multiple symbols/markets to identify setups meeting specific criteria.

**Used in:** [Augury Grid](../indicators/augury-grid-v10.md)

**Related terms:** [Grid View](#grid-view), [Screener](#screener)

---

## N

### NanoFlow
**Definition:** Pentarch's momentum component oscillating between -100 and +100. Contributes to Four-Layer Detection System by validating momentum characteristics.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Display:** Separate panel below chart

**Related terms:** [Four-Layer Detection](#four-layer-detection), [Oscillator](#oscillator)

---

### Non-Repainting
**Definition:** Indicator characteristic where confirmed signals never change retroactively. All Signal Pilot indicators are non-repainting (signals confirm at bar close and remain permanent).

**Used in:** All Signal Pilot indicators

**Related terms:** [Repainting](#repainting), [Bar Close Confirmation](#bar-close-confirmation)

---

## O

### OBV (On-Balance Volume)
**Definition:** Cumulative volume indicator adding volume on up-days and subtracting volume on down-days. Plutus Flow uses advanced OBV methodology for divergence detection.

**Used in:** [Plutus Flow](../indicators/plutus-flow-v10.md)

**Related terms:** [Divergence](#divergence), [Volume-Weighted](#volume-weighted)

---

### Omnideck
**Definition:** Signal Pilot's comprehensive all-in-one indicator containing 8 integrated systems: TD Sequential, VWAP, Oscillators, Volume Flow, Regime Classification, NanoFlow, Zones, and Levels.

**Documentation:** [Omnideck v1.0](../indicators/omnideck-v10.md)

**Difficulty:** Advanced (100+ hour learning curve)

**Related terms:** [TD Sequential](#td-sequential), [VWAP](#vwap)

---

### Oscillator
**Definition:** A technical indicator that fluctuates between defined boundaries (e.g., 0-100), typically used to identify overbought/oversold conditions or momentum shifts.

**Used in:** [Harmonic Oscillator](../indicators/harmonic-oscillator-v10.md) (7 oscillators: RSI, Stochastic, CCI, Williams %R, MFI, Ultimate Oscillator, ROC)

**Related terms:** [Momentum](#momentum), [Voting System](#voting-system)

---

## P

### Pentarch
**Definition:** Signal Pilot's cycle phase detection indicator. Identifies market position across five distinct cycle events (TD, IGN, WRN, CAP, BDN).

**Documentation:** [Pentarch v1.0](../indicators/pentarch-v10.md)

**Related terms:** [Five Cycle Events](#five-cycle-events), [Market Cycle](#market-cycle)

---

### Pilot Line
**Definition:** Pentarch's adaptive trend line serving as reference for signal distance calculations. Changes color based on regime classification.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Colors:** Blue (bearish regime), Green (bullish regime), Gray (neutral)

**Related terms:** [Regime Classification](#regime-classification), [Four-Layer Detection](#four-layer-detection)

---

### Plutus Flow
**Definition:** Signal Pilot's OBV-based divergence detection indicator. Tracks cumulative volume direction to identify accumulation/distribution and price-volume divergences.

**Documentation:** [Plutus Flow v1.0](../indicators/plutus-flow-v10.md)

**Related terms:** [OBV](#obv-on-balance-volume), [Divergence](#divergence)

---

### POC (Point of Control)
**Definition:** The price level with highest traded volume during a specified period. Represents area of greatest acceptance/agreement.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (one of 39 level types)

**Related terms:** [VAH](#vah-value-area-high), [VAL](#val-value-area-low), [Volume Profile](#volume-profile)

---

### Position Manager
**Definition:** Volume Oracle's position tracking system. Displays entry price, breakeven line, and real-time P&L on chart.

**Used in:** [Volume Oracle](../indicators/volume-oracle-v10.md) (System 3)

**Features:** Live P&L tracking, breakeven line, percentage/points display

---

## R

### Regime Classification
**Definition:** Pentarch's system for identifying market structure state: bullish, bearish, or neutral. First layer of Four-Layer Detection System.

**Used in:** [Pentarch](../indicators/pentarch-v10.md), [Omnideck](../indicators/omnideck-v10.md)

**Visual:** Candle body colors (Green=bullish, Red=bearish, Gray=neutral)

**Related terms:** [Four-Layer Detection](#four-layer-detection), [Market Structure](#market-structure)

---

### Repainting
**Definition:** Indicator behavior where historical signals change retroactively. **Signal Pilot indicators do NOT repaint** - all signals confirm at bar close and remain permanent.

**Related terms:** [Non-Repainting](#non-repainting), [Bar Close Confirmation](#bar-close-confirmation)

---

### Resistance
**Definition:** A price level where selling pressure historically exceeded buying pressure, potentially causing price to pause or reverse. Identified by Janus Atlas High levels.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md)

**Related terms:** [Support](#support), [Level](#level), [Cluster](#cluster-level-cluster)

---

## S

### Screener
**Definition:** Tool for filtering multiple assets based on specific criteria to identify trading opportunities.

**Used in:** [Augury Grid](../indicators/augury-grid-v10.md)

**Related terms:** [Multi-Asset Screening](#multi-asset-screening), [Grid View](#grid-view)

---

### Support
**Definition:** A price level where buying pressure historically exceeded selling pressure, potentially causing price to pause or reverse. Identified by Janus Atlas Low levels.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md)

**Related terms:** [Resistance](#resistance), [Level](#level), [Cluster](#cluster-level-cluster)

---

## T

### TD (Touchdown)
**Definition:** Pentarch's first cycle event. Indicates conditions commonly associated with accumulation phase beginning and oversold characteristics.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Default Color:** Purple

**Related terms:** [IGN](#ign-ignition), [Accumulation](#accumulation), [Early-Cycle](#early-cycle)

---

### TD Sequential
**Definition:** Tom DeMark's sequential counting system for identifying potential exhaustion points. Omnideck includes full TD Sequential implementation.

**Used in:** [Omnideck](../indicators/omnideck-v10.md)

**Counts:** Setup (1-9), Countdown (1-13)

**Related terms:** [Omnideck](#omnideck)

---

### The Trinity
**Definition:** The most popular Signal Pilot indicator combination: Pentarch + Janus Atlas + Volume Oracle. Provides cycle phase, price levels, and volume confirmation.

**Components:**
1. **Pentarch** - Cycle phase identification
2. **Janus Atlas** - Entry/exit levels
3. **Volume Oracle** - Volume confirmation

**Related terms:** [Confluence](#confluence), [Multi-Indicator Analysis](#multi-indicator-analysis)

---

## V

### VAH (Value Area High)
**Definition:** The upper boundary of the range containing 70% of traded volume during a specified period. Part of Volume Profile analysis.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (one of 39 level types)

**Related terms:** [VAL](#val-value-area-low), [POC](#poc-point-of-control), [Volume Profile](#volume-profile)

---

### VAL (Value Area Low)
**Definition:** The lower boundary of the range containing 70% of traded volume during a specified period. Part of Volume Profile analysis.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (one of 39 level types)

**Related terms:** [VAH](#vah-value-area-high), [POC](#poc-point-of-control), [Volume Profile](#volume-profile)

---

### Volume Oracle
**Definition:** Signal Pilot's three-system volume analysis indicator combining Volume Flow, Volume Zones, and Position Manager.

**Documentation:** [Volume Oracle v1.0](../indicators/volume-oracle-v10.md)

**Systems:** (1) Volume Flow bars, (2) Volume Zones boxes, (3) Position Manager P&L

**Related terms:** [Volume Spike](#volume-spike), [Volume Zone](#volume-zone)

---

### Volume Profile
**Definition:** Analysis method showing volume distribution across price levels. Identifies POC (most traded price), VAH, and VAL.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (POC, VAH, VAL levels)

**Related terms:** [POC](#poc-point-of-control), [VAH](#vah-value-area-high), [VAL](#val-value-area-low)

---

### Volume Spike
**Definition:** Volume significantly above average (typically >1.5x-2.0x). Volume Oracle highlights spikes to identify institutional participation.

**Used in:** [Volume Oracle](../indicators/volume-oracle-v10.md)

**Thresholds:** 1.5x (moderate), 2.0x (strong), 2.5x+ (very strong)

**Related terms:** [Volume Flow](#volume-flow), [Volume Zone](#volume-zone)

---

### Volume Zone
**Definition:** Price range where significant volume accumulated. Volume Oracle displays zones as horizontal boxes on chart.

**Used in:** [Volume Oracle](../indicators/volume-oracle-v10.md) (System 2)

**Related terms:** [Volume Spike](#volume-spike), [Support](#support), [Resistance](#resistance)

---

### Volume-Weighted
**Definition:** Calculation method giving more weight to periods with higher volume. Used in VWAP and related indicators.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (VWAP levels)

**Related terms:** [VWAP](#vwap), [Anchored VWAP](#anchored-vwap)

---

### Voting System
**Definition:** Harmonic Oscillator's methodology where 7 independent oscillators each "vote" bullish or bearish. Signal generated based on consensus (3+ votes).

**Used in:** [Harmonic Oscillator](../indicators/harmonic-oscillator-v10.md)

**Signals:**
- 3+ bullish votes = BUY
- 3+ bearish votes = SELL
- 5+ votes same direction = STRONG
- <3 votes either way = NEUT (neutral)

**Related terms:** [Oscillator](#oscillator), [Harmonic Oscillator](#harmonic-oscillator)

---

### VWAP (Volume-Weighted Average Price)
**Definition:** Average price weighted by volume. Represents the mean price at which an asset traded during the period, giving more importance to high-volume price levels.

**Used in:** [Janus Atlas](../indicators/janus-atlas-v10.md) (Daily, Weekly, Monthly VWAP levels), [Omnideck](../indicators/omnideck-v10.md)

**Related terms:** [Anchored VWAP](#anchored-vwap), [Volume-Weighted](#volume-weighted)

---

## W

### WRN (Warning)
**Definition:** Pentarch's third cycle event. Indicates conditions commonly associated with distribution phase and momentum weakening characteristics.

**Used in:** [Pentarch](../indicators/pentarch-v10.md)

**Default Color:** Yellow

**Related terms:** [CAP](#cap-climax), [Distribution](#distribution), [Late-Cycle](#late-cycle)

---

## 📚 Related Resources

- [Indicator Comparison Guide](../ref-comparison/indicator-comparison.md) - Choose the right indicator
- [Learning Paths](../start-learning-path/index.md) - Structured learning roadmap
- [Quick Start Guide](../start-quickstart/index.md) - Get started in 5 minutes
- [Workflow Examples](../ref-workflow/index.md) - Real-world usage scenarios

---

## 📞 Support

Can't find a term? **support@signalpilot.io**

---

**Last Updated:** January 2025

# Glossary

Complete reference of <span class="signal-pilot-brand">Signal Pilot</span> terms, signals, and trading concepts. Terms are organized alphabetically within categories.

---

## 🎯 Pentarch Signals (Core Reversal Events)

### TD (Touchdown)
**Type:** Early-cycle warning signal
**Color:** Blue 🔵
**Meaning:** Indicates early-cycle reversal conditions
**Common Usage:** Often viewed as preparation signal rather than entry trigger
**Typical Context:** Appears during downtrends when momentum starts exhausting
**Next Signal:** Usually followed by IGN if reversal develops

**Usage Note:** TD is typically interpreted as an advance warning signal. IGN often provides additional confirmation.

---

### IGN (Ignition)
**Type:** Bullish reversal indication
**Color:** Green 🟢
**Meaning:** Indicates momentum breakout conditions
**Common Usage:** Often used as potential long entry signal
**Typical Context:** Appears after TD or standalone at strong support
**Risk Management:** Common stop placement is below IGN candle low

**Usage Note:** Frequently used as primary long entry signal. Associated with higher conviction when appearing at key Janus levels.

---

### WRN (Warning)
**Type:** Late-cycle warning signal
**Color:** Yellow 🟡
**Meaning:** Indicates weakening momentum
**Common Usage:** Many traders tighten stops and monitor for potential exits
**Typical Context:** Appears during uptrends when momentum begins fading
**Next Signal:** May be followed by CAP if exhaustion develops

**Usage Note:** Often interpreted as preparation signal rather than immediate exit trigger. Used to anticipate potential late-cycle exhaustion.

---

### CAP (Climax)
**Type:** Bearish reversal warning
**Color:** Red 🔴
**Meaning:** Indicates late-cycle exhaustion conditions
**Common Usage:** Often interpreted as exit signal for longs or stop tightening trigger
**Typical Context:** Appears during late-cycle exhaustion after extended uptrends
**Risk Management:** Associated with elevated risk for long positions

**Usage Note:** Frequently used as exit signal for longs. Many traders take profits or move stops to protect gains.

---

### BDN (Breakdown)
**Type:** Bearish reversal indication
**Color:** Black ⚫
**Meaning:** Indicates bearish breakdown conditions
**Common Usage:** Often interpreted as long exit signal; potential short entry for advanced traders
**Typical Context:** Indicates bearish reversal after CAP or standalone at resistance
**Risk Management:** Common short stop placement is above BDN candle high

**Usage Note:** Frequently used as short entry signal or definitive long exit indication.

---

### Pilot Line (PL)
**Type:** Trend indicator / reference line
**Visual:** Thick colored line (green/red/orange) with semi-transparent ribbon
**Calculation:** Double-smoothed EMA (34-period EMA, then 3-period EMA of result)
**Purpose:** Primary trend filter and reference point for all event signals

**Colors:**
- 🟢 **Green:** Strong uptrend (slope rising, momentum strong)
- 🔴 **Red:** Strong downtrend (slope falling, momentum strong)
- 🟠 **Orange:** Transitional phase (momentum easing or flat)

**Function:**
- **Distance Reference:** All event signals measure distance from Pilot Line
- **Trend Filter:** Shows current trend direction and strength
- **Dynamic Support/Resistance:** Price tends to react at or near the line
- **Regime Component:** One of 3 factors in regime determination

**Common Usage:** Price above green PL = bullish bias. Price below red PL = bearish bias. Orange PL = transitional/uncertain.

**Non-Repainting:** Updates only on confirmed bars (locked after bar close).

---

### Regime (Bar Colors)
**Type:** Market structure classification system
**Visual:** Candle body colors (green for bull regime, red for bear regime)
**Determination:** 3-factor voting system requiring 2 of 3 votes
**Purpose:** Shows current market structural state (bull or bear)

**Voting Factors:**
1. **EMA Structure:** Is 34-period EMA above 55-period EMA? (+1 bull vote)
2. **Price vs Pilot Line:** Is close above Pilot Line? (+1 bull vote)
3. **Slope Direction:** Is Pilot Line sloping up? (+1 bull vote)

**Regime States:**
- **🟢 Bull Regime** (Green candles): 2+ bull votes, sustained for 2-4 bars
- **🔴 Bear Regime** (Red candles): 2+ bear votes, sustained for 2-4 bars

**Function:**
- **Trading Bias:** Green regime → many traders look for longs; Red regime → many traders look for shorts
- **Signal Filter:** Event signals are regime-aware (most require "correct" regime to fire)
- **Trend Confirmation:** Long color streaks = strong trend; frequent changes = choppy market

**Override:** When event candles fire (TD/IGN/WRN/CAP/BDN), that specific candle shows event color instead of regime color.

**Common Usage:** Regime provides directional bias. Same price level has different implications depending on regime (support in green, resistance in red).

---

### NanoFlow
**Type:** Micro-momentum indicator
**Visual:** Small cross marks (green below lows, red above highs)
**Frequency:** High (10-30 per day on 1H chart) vs main events (3-8 per day)
**Purpose:** Shows micro-scale momentum shifts between main event signals

**Conditions:**
- **🟢 Bullish NanoFlow:** Fast EMA (9) > Slow EMA (21) + green candle + price > Pilot Line
- **🔴 Bearish NanoFlow:** Fast EMA (9) < Slow EMA (21) + red candle + price < Pilot Line

**Function:**
- **Trend Health:** Many NanoFlow in same direction = healthy momentum
- **Event Confirmation:** NanoFlow after event signal confirms momentum quality
- **Chop Detection:** Rapidly flipping NanoFlow = choppy conditions
- **Early Warning:** NanoFlow often shifts before main event signals

**NOT a Trade Signal:** NanoFlow is context/confirmation tool, not standalone entry trigger. Too sensitive for direct trading.

**Common Usage:** Use NanoFlow to validate quality of TD/IGN/WRN/CAP/BDN signals. Absence of expected NanoFlow suggests weak signal.

**Non-Repainting:** Renders only on confirmed bars.

---

## 📍 Janus Atlas Terms (Levels System)

### Support Level
**Definition:** Price level where buying pressure historically overcomes selling
**Visual:** Horizontal line below current price
**Usage:** Target for long entries, stop loss placement
**Strength:** Determined by number of touches and reactions

---

### Resistance Level
**Definition:** Price level where selling pressure historically overcomes buying
**Visual:** Horizontal line above current price
**Usage:** Target for short entries or profit-taking
**Strength:** Multiple rejections = stronger resistance

---

### FVG (Fair Value Gap)
**Definition:** Price gap created by imbalance between buyers and sellers
**Visual:** Shaded rectangle on chart
**Behavior:** Price often returns to "fill" the gap
**Trading:** Entry zones when price returns to FVG
**Types:** Bullish FVG (gap up), Bearish FVG (gap down)

---

### OB (Order Block)
**Definition:** Pre-impulse candle where large orders accumulated
**Visual:** Highlighted candle or zone
**Behavior:** Price often revisits OB before continuing
**Trading:** High-probability entry zones
**Validity:** Remains valid until price trades through and closes beyond

---

### Breaker
**Definition:** Order Block that has been invalidated
**Visual:** OB marked as "breaker" after invalidation
**Behavior:** Can act as opposite-direction entry zone
**Trading:** Bullish OB becomes bearish breaker when broken down

---

### Swing High / Swing Low
**Definition:** Local peaks (high) or troughs (low) in price action
**Visual:** Marked with labels on chart
**Usage:** Reference points for structure breaks
**Importance:** Key levels for BOS and CHOCH identification

---

## 📊 Structure & Market Concepts

### BOS (Break of Structure)
**Definition:** Price breaks previous swing high (uptrend) or low (downtrend)
**Meaning:** Trend continuation indicated
**Bullish BOS:** Break above previous swing high
**Bearish BOS:** Break below previous swing low
**Trading:** Indicates trend strength, anticipate pullback entry

---

### CHOCH (Change of Character)
**Definition:** Structure break indicating potential trend reversal
**Meaning:** Market character shifting from bull to bear or vice versa
**Bullish CHOCH:** Low holds, breaks previous high
**Bearish CHOCH:** High holds, breaks previous low
**Common Usage:** Often viewed as early reversal warning where traders await signal development

---

### HTF (Higher Timeframe)
**Definition:** Timeframe higher than your current chart
**Example:** If on 1H, Daily is HTF
**Usage:** Check HTF for bias, major levels, and trend direction
**Importance:** HTF trumps LTF—trade with HTF bias

---

### LTF (Lower Timeframe)
**Definition:** Timeframe lower than your current chart
**Example:** If on Daily, 4H is LTF
**Usage:** Fine-tune entries within HTF structure
**Warning:** Can be noisy—use for precision only

---

### Confluence
**Definition:** Multiple signals or levels agreeing
**Examples:**
- IGN signal + major support level + bullish FVG
- CAP signal + resistance + bearish OB

**Importance:** Higher probability trades
**Best Practice:** Require 2-3 confluence factors minimum

---

### Bias
**Definition:** Directional preference based on HTF analysis
**Bullish Bias:** Looking for longs only
**Bearish Bias:** Looking for shorts only
**Neutral Bias:** No preference, stay out
**Source:** Determined by HTF trend, structure, momentum

---

## 🔄 Volume & Momentum Terms

### CLX (Climax)
**Definition:** Large range candle with strong body
**Meaning:** Aggressive directional move
**Visual:** Highlighted climax candle
**Bullish CLX:** Strong up move
**Bearish CLX:** Strong down move
**Trading:** Often precedes exhaustion or continuation

---

### ABS (Absorption)
**Definition:** Quiet range candle with opposing wick
**Meaning:** One side absorbing other's pressure
**Visual:** Small-bodied candle with notable wick
**Bullish ABS:** Lower wick, bulls absorbing sells
**Bearish ABS:** Upper wick, bears absorbing buys
**Trading:** Potential reversal indication

---

### OBV (On-Balance Volume)
**Definition:** Cumulative volume indicator
**Calculation:** Add volume on up days, subtract on down days
**Usage:** Indicates price trends
**Divergence:** OBV trending opposite to price = warning
**Indicator:** Plutus Flow is enhanced OBV

---

### Divergence
**Definition:** Price and indicator moving in opposite directions
**Bullish Divergence:** Price making lower lows, indicator making higher lows
**Bearish Divergence:** Price making higher highs, indicator making lower highs
**Significance:** Potential reversal warning
**Common Practice:** Often combined with price signals (IGN, BDN) for confirmation

---

### Triad Bull / Triad Bear
**Definition:** RSI-based composite momentum signal
**Triad Bull:** RSI crosses up through envelope with bullish slope
**Triad Bear:** RSI crosses down through envelope with bearish slope
**Components:** Base RSI + Fast/Slow envelopes + slope checks
**Usage:** Momentum indication for entries

---

## 🎛️ Filter & Regime Concepts

### LOK (Long OK)
**Definition:** Regime filter indicating long trades are favorable
**Criteria:** Trend-qualified AND not in squeeze
**Visual:** Green background or indicator state
**Usage:** Only take IGN signals when LOK active
**Override:** Experienced traders may trade against filter

---

### SOK (Short OK)
**Definition:** Regime filter indicating short trades are favorable
**Criteria:** Trend-qualified AND not in squeeze
**Visual:** Red background or indicator state
**Usage:** Only take BDN signals when SOK active
**Override:** Experienced traders may trade against filter

---

### Squeeze
**Definition:** Low volatility period (tight Bollinger Bands)
**Visual:** Narrowing bands, special indicator marking
**Meaning:** Consolidation before potential breakout
**Common Approach:** Trading during squeezes is often avoided; expansion phases are typically preferred
**After Squeeze:** Often produces strong directional move

---

## 🚀 Trading Execution Terms

### Bar Close / Close Confirmed
**Definition:** Signal that has finalized after candle closes
**Importance:** Only closed-bar signals are reliable
**Alerts:** Typically configured to "Once Per Bar Close"
**Intrabar vs Closed:** Intrabar = preliminary, closed = confirmed

---

### Repainting
**Definition:** Indicator changing historical signals
**<span class="signal-pilot-brand">Signal Pilot</span> Policy:** NO repainting—signals are final on close
**Intrabar Changes:** Normal and expected (not repainting)
**Historical Changes:** Would be repainting (<span class="signal-pilot-brand">Signal Pilot</span> doesn't do this)

---

### Stop Loss
**Definition:** Predetermined exit price to limit losses
**Placement:**
- Long: Below IGN candle or TD low
- Short: Above BDN candle or CAP high

**Movement:** Commonly trailed up (longs) or down (shorts); moving toward entry increases risk
**Importance:** Standard risk management practice in trading

---

### Risk/Reward Ratio
**Definition:** Potential profit divided by potential loss
**Example:** $200 risk for $600 profit = 3:1 R/R
**Minimum Recommended:** 2:1
**Calculation:** (Target - Entry) / (Entry - Stop)
**Usage:** Only take trades with favorable R/R

---

### Position Sizing
**Definition:** How much capital to risk per trade
**Common Rules:**
- 1% rule: Risk 1% of account per trade
- 2% rule: Risk 2% of account (aggressive)
- Fixed dollar: Risk same $ amount each trade

**Calculation:** Account Size × Risk % ÷ (Entry - Stop) = Position Size

---

### Confluence Trading
**Definition:** Waiting for multiple signals to align
**Example Setup:**
- Pentarch IGN signal
- At major Janus support level
- In bullish FVG zone
- Triad Bull signal
- LOK active

**Benefit:** Much higher win rate
**Trade-off:** Fewer opportunities

---

## 📈 Indicator-Specific Terms

### Omnideck
**Definition:** All-in-one indicator combining all suite tools
**Includes:** Pentarch + Janus + Minimal Flow + Harmonic + bias
**Benefit:** Everything on one chart
**Use Case:** Traders who want complete analysis

---

### Augury Grid
**Definition:** Multi-symbol screener table
**Function:** Scans multiple symbols simultaneously
**Display:** Table showing signals across watchlist
**Usage:** Find opportunities across market

---

### Minimal Flow
**Definition:** Volume-based strategy indicator
**Focus:** Order flow and volume patterns
**Signals:** Volume-based moves
**Use With:** Pentarch for confluence

---

### Harmonic Oscillator
**Definition:** Composite momentum indicator
**Components:** Multiple oscillators combined
**Usage:** Momentum and divergence detection
**Benefit:** Smoother than single oscillator

---

### Plutus Flow
**Definition:** Advanced On-Balance Volume indicator
**Enhancement:** Traditional OBV with improvements
**Usage:** Volume trend indication
**Divergence:** Key feature for reversals

---

## 🔄 General Trading Terms

### Timeframe
**Definition:** Duration of each candle on chart
**Examples:**
- 5m = 5 minutes per candle
- 1H = 1 hour per candle
- 1D = 1 day per candle

**Strategy:** Use multiple timeframes for analysis

---

### Long / Long Position
**Definition:** Position taken expecting price to rise
**Typical Entry:** Lower price levels
**Typical Exit:** Higher price levels
**Profit Mechanism:** Price increase
**Associated Signals:** IGN (potential entry), CAP/BDN (potential exit)

---

### Short / Short Position
**Definition:** Position taken expecting price to fall
**Typical Entry:** Higher price levels
**Typical Exit:** Lower price levels
**Profit Mechanism:** Price decrease
**Associated Signals:** BDN (potential entry), IGN (potential exit)

---

### Pullback
**Definition:** Temporary price retracement within larger trend
**Appearance:** Small counter-trend move
**Opportunity:** Entry point in direction of larger trend
**Common Approach:** Often involves awaiting pullback to key level combined with reversal signal

---

### Breakout
**Definition:** Price moving beyond established support/resistance
**Types:** Support breakout (bearish), resistance breakout (bullish)
**Volume:** Typically increases on valid breakouts
**False Breakout:** Returns inside range quickly
**Confirmation:** Many traders look for close beyond level to confirm breakout validity

---

### Range / Ranging Market
**Definition:** Price moving sideways between support and resistance
**Characteristics:** No clear trend, oscillating
**Common Approaches:** Support/resistance-based range trading strategies
**Pentarch Performance:** Fewer signals (awaiting reversal conditions)
**Breakout Monitoring:** Traders commonly await breakout before applying trending strategies

---

### Trend
**Definition:** Sustained directional price movement
**Uptrend:** Higher highs and higher lows
**Downtrend:** Lower highs and lower lows
**Identify:** Use HTF for overall trend
**Trade:** With trend = higher probability

---

### Volatility
**Definition:** Degree of price fluctuation
**High Volatility:** Large price swings
**Low Volatility:** Small price movements
**Impact on Signals:** Higher volatility = more signals
**Measurement:** ATR, Bollinger Band width

---

### Backtesting
**Definition:** Testing strategy on historical data
**Purpose:** Evaluate strategy before live trading
**Method:** Apply rules to past price action
**Limitation:** Past performance ≠ future results
**Best Practice:** Paper trade after backtesting

---

### Paper Trading
**Definition:** Simulated trading with fake money
**Purpose:** Practice without financial risk
**Duration:** Until consistently profitable
**Platforms:** TradingView, broker simulators
**Requirement:** Treat it like real money mentally

---

## 🔗 Quick Links

- [FAQ](about-faq.md) - Common questions
- [Troubleshooting](ref-troubleshooting.md) - Fix issues
- [Quick Start](start-quick.md) - Beginner guide
- [Workflow](ref-workflow.md) - Complete trading process
- [Best Practices](ref-best-practices.md) - Pro tips

**Need more help?** [Contact Support](about-support.md)

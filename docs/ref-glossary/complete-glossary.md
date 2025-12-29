# Complete SignalPilot Glossary

Your **comprehensive reference guide** to every term, signal, indicator, and visual element in the SignalPilot suite. Perfect for learning, quick reference, and explaining concepts.

---

<div class="mobile-nav" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1)); border-radius: 12px; padding: 16px; margin-bottom: 24px;">
<p style="font-weight: 600; margin-bottom: 12px; color: #06b6d4;">📱 Quick Jump</p>

[🎨 Visual Elements](#visual-elements-colors) | [📊 Indicators](#the-7-indicators) | [⚡ Signals](#signals-events) | [📈 Trading Terms](#trading-concepts) | [🔧 Technical](#technical-terms) | [🎯 Combos](#indicator-combinations)

</div>

---

## Visual Elements & Colors

Everything you **see on your chart** and what it means.

---

### Chart Colors (What They Mean)

<div style="display: grid; gap: 12px; margin: 16px 0;">

<div style="background: rgba(34, 197, 94, 0.15); border-left: 4px solid #22c55e; padding: 12px; border-radius: 8px;">
<strong style="color: #22c55e;">🟢 GREEN</strong><br>
<em>Bullish • Accumulation • Buy Pressure • Long Bias • Uptrend</em>
</div>

<div style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #ef4444; padding: 12px; border-radius: 8px;">
<strong style="color: #ef4444;">🔴 RED</strong><br>
<em>Bearish • Distribution • Sell Pressure • Short Bias • Downtrend</em>
</div>

<div style="background: rgba(234, 179, 8, 0.15); border-left: 4px solid #eab308; padding: 12px; border-radius: 8px;">
<strong style="color: #eab308;">🟡 YELLOW</strong><br>
<em>Warning • Caution • Distribution Phase • WRN Signal</em>
</div>

<div style="background: rgba(249, 115, 22, 0.15); border-left: 4px solid #f97316; padding: 12px; border-radius: 8px;">
<strong style="color: #f97316;">🟠 ORANGE</strong><br>
<em>Transitional • Climax Phase • Extreme Breach • CAP Signal</em>
</div>

<div style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8b5cf6; padding: 12px; border-radius: 8px;">
<strong style="color: #8b5cf6;">🟣 PURPLE</strong><br>
<em>Accumulation Start • TD Signal • Extreme Bearish Breach</em>
</div>

<div style="background: rgba(20, 184, 166, 0.15); border-left: 4px solid #14b8a6; padding: 12px; border-radius: 8px;">
<strong style="color: #14b8a6;">🔵 TEAL</strong><br>
<em>Ignition • Markup Start • IGN Signal</em>
</div>

<div style="background: rgba(107, 114, 128, 0.15); border-left: 4px solid #6b7280; padding: 12px; border-radius: 8px;">
<strong style="color: #6b7280;">⚪ GRAY</strong><br>
<em>Neutral • No Clear Direction • Choppy Market</em>
</div>

</div>

---

### Dots, Circles & Markers

| Visual | Name | Indicator | What It Means |
|:------:|------|-----------|---------------|
| 🟢 ● | **Green Circle** | Plutus Flow | OBV crossed UP (flow shift to buying) |
| 🔴 ● | **Red Circle** | Plutus Flow | OBV crossed DOWN (flow shift to selling) |
| 🟠 ● | **Orange Circle** | Plutus Flow | Extreme Bullish Breach (OBV above +2σ) |
| 🟣 ● | **Purple Circle** | Plutus Flow | Extreme Bearish Breach (OBV below -2σ) |
| 🔴 • | **Red Dots** | Omnideck Squeeze | Volatility compressing (big move building) |
| 🟢 ✕ | **Green Cross** | Pentarch NanoFlow | Micro bullish momentum detected |
| 🔴 ✕ | **Red Cross** | Pentarch NanoFlow | Micro bearish momentum detected |
| ⭐⭐⭐ | **Three Stars** | Volume Oracle / SD Zones | Elite quality (80-100 score) |
| ⭐⭐ | **Two Stars** | Volume Oracle / SD Zones | Premium quality (60-79 score) |
| ⭐ | **One Star** | Volume Oracle / SD Zones | Standard quality (40-59 score) |

---

### Lines & Ribbons

| Visual | Name | Indicator | What It Means |
|--------|------|-----------|---------------|
| **Thick colored line** | Pilot Line | Pentarch | Trend compass (green=up, red=down, orange=transitional) |
| **Green ribbon** | SuperTrend Up | Omnideck | Bullish trend active |
| **Red ribbon** | SuperTrend Down | Omnideck | Bearish trend active |
| **Two close lines** | BMSB | Omnideck | Bull Market Support Band (20 SMA + 21 EMA) |
| **Three EMAs** | EMA Trio | Omnideck | 50/100/200 EMAs for trend structure |
| **Horizontal dashed** | Take Profit Line | Volume Oracle | TP1 target level |
| **Horizontal dotted** | Stop Loss Line | Volume Oracle | Stop level |
| **Solid horizontal** | Entry Line | Volume Oracle | Entry price |

---

### Background Colors (Regime)

| Background | Name | What It Means |
|------------|------|---------------|
| **Green tint** | Bull Regime | Uptrend structure - look for longs |
| **Red tint** | Bear Regime | Downtrend structure - look for shorts |
| **Gray tint** | Neutral Regime | Choppy/unclear - be selective |
| **Gold tint** | Weakening Regime | Current trend losing strength |

---

### Boxes & Zones

| Visual | Name | Indicator | What It Means |
|--------|------|-----------|---------------|
| **Green box** | Demand Zone | Omnideck | Support area - potential bounce zone |
| **Red box** | Supply Zone | Omnideck | Resistance area - potential rejection zone |
| **Gray fill around line** | Influence Zone | Pentarch | ±0.25 ATR around Pilot Line |
| **Upper/Lower bands** | ±2σ Bands | Plutus Flow | Statistical extreme boundaries |

---

## The 7 Indicators

Complete breakdown of every SignalPilot indicator.

---

### Pentarch v1.0

**Purpose:** Cycle phase detection across 5 market stages

**What You See:**
- Colored candles (regime)
- Pilot Line (trend reference)
- NanoFlow crosses (micro momentum)
- Event labels (TD, IGN, WRN, CAP, BDN)

**The 5 Cycle Events:**

| Signal | Color | Phase | Meaning |
|--------|-------|-------|---------|
| **TD** | 🟣 Purple | Accumulation | Early-cycle, oversold conditions |
| **IGN** | 🔵 Teal | Markup | Bullish momentum breakout |
| **WRN** | 🟡 Yellow | Distribution | Late-cycle warning |
| **CAP** | 🟠 Orange | Climax | Exhaustion, potential top |
| **BDN** | ⚫ Dark | Decline | Breakdown confirmed |

**Key Components:**

- **Pilot Line** - Your trend compass. Green = uptrend, Red = downtrend, Orange = transitional
- **Regime Candles** - Green candles = bull regime, Red candles = bear regime
- **NanoFlow** - Subtle crosses showing micro momentum (not for trading directly)
- **Four-Layer Detection** - Regime → Pilot Line → NanoFlow → Event = Signal

---

### Janus Atlas v1.0

**Purpose:** 50+ price level types for support/resistance

**What You See:**
- Horizontal lines at key levels
- Labels (dH, wL, POC, etc.)
- Confluence zones (clustered levels)
- Market structure labels (HH, LL, BOS, CHoCH)

**Level Types:**

| Category | Examples | What They Are |
|----------|----------|---------------|
| **Timeframe Highs/Lows** | dH, dL, wH, wL, mH, mL | Daily/Weekly/Monthly extremes |
| **Session Levels** | asH, asL, euH, euL, naH, naL | Asian/European/NY session extremes |
| **VWAP Levels** | dVWAP, wVWAP, mVWAP | Volume-weighted averages |
| **Volume Profile** | POC, VAH, VAL | Volume distribution levels |
| **Previous Periods** | pdH, pdL, pwH, pwL | Yesterday's/Last week's levels |
| **Opening Range** | orH, orL | First X minutes high/low |
| **Gaps** | gapH, gapL | Overnight gap levels |

**Market Structure Labels:**

| Label | Name | Meaning |
|-------|------|---------|
| **HH** | Higher High | Uptrend continuation |
| **HL** | Higher Low | Uptrend support held |
| **LH** | Lower High | Downtrend resistance |
| **LL** | Lower Low | Downtrend extension |
| **BOS** | Break of Structure | Trend continuation confirmed |
| **CHoCH** | Change of Character | Potential trend reversal |

---

### Volume Oracle v1.0

**Purpose:** Volume spike detection + position management

**What You See:**
- Volume histogram (bottom pane)
- BUY/SELL labels with quality stars
- Entry/Stop/Target lines on chart
- P&L display

**Key Signals:**

| Signal | What It Means |
|--------|---------------|
| **BUY ⭐⭐⭐** | Elite long signal (80-100 quality) |
| **BUY ⭐⭐** | Premium long signal (60-79 quality) |
| **BUY ⭐** | Standard long signal (40-59 quality) |
| **SELL ⭐⭐⭐** | Elite short signal (80-100 quality) |
| **SELL ⭐⭐** | Premium short signal (60-79 quality) |
| **SELL ⭐** | Standard short signal (40-59 quality) |

**Quality Score (0-100):**

| Tier | Score | Win Rate | Action |
|------|-------|----------|--------|
| ⭐⭐⭐ Elite | 80-100 | 70-75% | Take every time |
| ⭐⭐ Premium | 60-79 | 65-70% | Take with confidence |
| ⭐ Standard | 40-59 | 55-60% | Be selective |
| Weak | 0-39 | <55% | Skip |

**Position Management Lines:**

| Line | Color/Style | What It Is |
|------|-------------|------------|
| Entry | Solid green/red | Your entry price |
| Stop Loss | Dotted | ATR-based stop (default 2× ATR) |
| TP1 | Dashed | First target (default 3× ATR) |

---

### Plutus Flow v1.0

**Purpose:** Smart OBV with divergence detection

**What You See:**
- OBV line (bottom pane)
- Color changes (green=rising, red=falling)
- ±2σ bands around the line
- Divergence labels (BULL DIV, BEAR DIV, H-BULL, H-BEAR)
- Circle markers at crosses/breaches

**Key Signals:**

| Signal | Visual | What It Means |
|--------|--------|---------------|
| **OBV Cross Up** | 🟢 Green circle | Flow shifted to accumulation |
| **OBV Cross Down** | 🔴 Red circle | Flow shifted to distribution |
| **Extreme Bullish Breach** | 🟠 Orange circle | OBV above +2σ (climax accumulation) |
| **Extreme Bearish Breach** | 🟣 Purple circle | OBV below -2σ (climax distribution) |
| **BULL DIV** | Green label | Price ↓, OBV ↑ = Reversal up likely |
| **BEAR DIV** | Red label | Price ↑, OBV ↓ = Reversal down likely |
| **H-BULL** | Light green label | Hidden bullish = Continuation up |
| **H-BEAR** | Light red label | Hidden bearish = Continuation down |

**Special Features:**

- **Spike-Clipping** - Caps extreme volume at 3× average (prevents distortion)
- **FlipGuard** - 5-bar cooldown prevents whipsaw signals

---

### Harmonic Oscillator v1.0

**Purpose:** 3-oscillator voting system for consensus signals

**What You See:**
- Single composite line (0-100 scale)
- Overbought zone (>70)
- Oversold zone (<30)
- Signal labels (BUY, SELL, STRONG, NEUT)
- Divergence labels

**The 3 Voters:**

| Oscillator | What It Measures | Vote Condition |
|------------|------------------|----------------|
| **MACD** | Trend strength | Histogram rising/positive = bullish |
| **RSI** | Extremes | <30 = bullish, >70 = bearish |
| **StochRSI** | Timing precision | <20 = bullish, >80 = bearish |

**Signal Modes:**

| Mode | Votes Needed | Win Rate | Best For |
|------|--------------|----------|----------|
| Conservative | 3/3 | 75-80% | Swing trading |
| Balanced | 2/3 | 65-70% | Most traders |
| Aggressive | 1/3 | 55-60% | Scalping |

**Composite Levels:**

| Level | Zone | What It Means |
|-------|------|---------------|
| 80-100 | Extreme Overbought | Watch for reversal DOWN |
| 70-80 | Overbought | Bearish signals good here |
| 40-60 | Neutral | Wait for extremes |
| 20-30 | Oversold | Bullish signals good here |
| 0-20 | Extreme Oversold | Watch for reversal UP |

---

### Omnideck v1.0

**Purpose:** 10 systems in one indicator

**The 10 Systems:**

| # | System | What You See | What It Does |
|---|--------|--------------|--------------|
| 1 | **TD Sequential** | Green/Red 1-9 numbers | Exhaustion counter |
| 2 | **Squeeze Detector** | Red dots + arrows | Breakout detection |
| 3 | **Liquidity Sweeps** | LL/HH tags | Stop hunt detection |
| 4 | **EMA Trio** | 3 moving average lines | Trend structure (50/100/200) |
| 5 | **SuperTrend** | Green/Red ribbon | Trend filter |
| 6 | **BMSB** | Two close lines | Bull Market Support Band |
| 7 | **Regime Box** | Background color | Market bias (most important!) |
| 8 | **Supply/Demand Zones** | Green/Red boxes with stars | Key reaction areas |
| 9 | **Candlestick Patterns** | Labels (HAM, BE, SS, etc.) | 16 classic patterns |
| 10 | **Meta Tools** | N/A | System integration |

**TD Sequential Numbers:**

| Number | Color | What It Means |
|--------|-------|---------------|
| Green 1-9 | Below candles | Counting down bars (oversold building) |
| Green 9 | Below candle | **Potential reversal UP** |
| Red 1-9 | Above candles | Counting up bars (overbought building) |
| Red 9 | Above candle | **Potential reversal DOWN** |

**Squeeze Signals:**

| Visual | What It Means |
|--------|---------------|
| Red dots on price | Volatility compressing (big move coming) |
| Green arrow ↑ | Bullish breakout |
| Red arrow ↓ | Bearish breakdown |

**Liquidity Sweep Tags:**

| Tag | What It Means |
|-----|---------------|
| **LL** | Lower Low sweep = Fake breakdown, potential long |
| **HH** | Higher High sweep = Fake breakout, potential short |

---

### Augury Grid v1.0

**Purpose:** Multi-symbol screener (8 assets at once)

**What You See:**
- Grid/table with 8 symbols
- Signal status for each
- Quality scores
- Current price and targets

**Grid Columns:**

| Column | What It Shows |
|--------|---------------|
| **SYMBOL** | Asset ticker |
| **SIGNAL** | BUY / SELL / - |
| **SCORE** | Quality rating (0-100) |
| **PRICE** | Current price |
| **TP1** | First target |
| **AGE** | Bars since signal |
| **P&L** | Profit/Loss tracking |

---

## Signals & Events

Every signal type explained.

---

### Pentarch Signals

| Signal | Full Name | Color | Phase | Action |
|--------|-----------|-------|-------|--------|
| **TD** | Touchdown | 🟣 Purple | Accumulation | Preparation (not entry) |
| **IGN** | Ignition | 🔵 Teal | Markup | **Potential long entry** |
| **WRN** | Warning | 🟡 Yellow | Distribution | Tighten stops, monitor |
| **CAP** | Climax | 🟠 Orange | Climax | **Exit longs** |
| **BDN** | Breakdown | ⚫ Dark | Decline | Exit or short entry |

---

### Plutus Flow Signals

| Signal | Visual | Meaning | Win Rate |
|--------|--------|---------|----------|
| **OBV Cross Up** | Green circle | Flow to accumulation | 60-65% |
| **OBV Cross Down** | Red circle | Flow to distribution | 60-65% |
| **BULL DIV** | Green label | Reversal up likely | 70-80% |
| **BEAR DIV** | Red label | Reversal down likely | 70-80% |
| **H-BULL** | Light green | Continuation up | 65-70% |
| **H-BEAR** | Light red | Continuation down | 65-70% |
| **Extreme Bullish** | Orange circle | Accumulation climax | Context-dependent |
| **Extreme Bearish** | Purple circle | Distribution climax | Context-dependent |

---

### Volume Oracle Signals

| Signal | Quality | Win Rate | Action |
|--------|---------|----------|--------|
| **BUY ⭐⭐⭐** | Elite (80-100) | 70-75% | Take every time |
| **BUY ⭐⭐** | Premium (60-79) | 65-70% | Take with confidence |
| **BUY ⭐** | Standard (40-59) | 55-60% | Be selective |
| **SELL ⭐⭐⭐** | Elite (80-100) | 70-75% | Take every time |
| **SELL ⭐⭐** | Premium (60-79) | 65-70% | Take with confidence |
| **SELL ⭐** | Standard (40-59) | 55-60% | Be selective |

---

### Harmonic Oscillator Signals

| Signal | Votes | Meaning |
|--------|-------|---------|
| **BUY** | 2+ bullish | Potential long entry |
| **SELL** | 2+ bearish | Potential short entry |
| **STRONG** | 5+ same direction | Very high conviction |
| **NEUT** | No consensus | No clear direction |

---

### Omnideck Signals

| System | Bullish Signal | Bearish Signal |
|--------|----------------|----------------|
| TD Sequential | Green 9 | Red 9 |
| Squeeze | Green arrow ↑ | Red arrow ↓ |
| Liquidity Sweep | LL tag | HH tag |
| EMA Trio | Golden Cross | Death Cross |
| SuperTrend | Green ribbon | Red ribbon |
| Regime Box | Green background | Red background |
| SD Zones | Price at demand ⭐⭐⭐ | Price at supply ⭐⭐⭐ |

---

## Trading Concepts

Key trading terminology used in SignalPilot.

---

### Market Phases

| Phase | Description | Pentarch Signal |
|-------|-------------|-----------------|
| **Accumulation** | Smart money buying quietly | TD |
| **Markup** | Price rising, trend beginning | IGN |
| **Distribution** | Smart money selling quietly | WRN |
| **Climax** | Exhaustion, extreme conditions | CAP |
| **Decline** | Price falling, trend reversing | BDN |

---

### Market Structure

| Term | Description |
|------|-------------|
| **Higher High (HH)** | Price makes new high above previous high (uptrend) |
| **Higher Low (HL)** | Price makes low above previous low (uptrend support) |
| **Lower High (LH)** | Price makes high below previous high (downtrend) |
| **Lower Low (LL)** | Price makes new low below previous low (downtrend) |
| **Break of Structure (BOS)** | Price breaks key level, confirming trend direction |
| **Change of Character (CHoCH)** | Shift in behavior suggesting potential trend change |
| **Uptrend** | Pattern of HH → HL repeating |
| **Downtrend** | Pattern of LH → LL repeating |

---

### Volume Concepts

| Term | Description |
|------|-------------|
| **Volume Spike** | Volume significantly above average (>1.5-2× typical) |
| **Buying Pressure** | More volume on up-moves (accumulation) |
| **Selling Pressure** | More volume on down-moves (distribution) |
| **OBV (On-Balance Volume)** | Cumulative volume: +vol on up days, -vol on down days |
| **Z-Score** | Statistical measure of how unusual volume is |
| **Flow** | Direction smart money is moving (accumulation vs distribution) |

---

### Divergence Types

| Type | Price Does | Indicator Does | Meaning |
|------|------------|----------------|---------|
| **Regular Bullish** | Lower low | Higher low | Reversal UP likely |
| **Regular Bearish** | Higher high | Lower high | Reversal DOWN likely |
| **Hidden Bullish** | Higher low | Lower low | Continuation UP |
| **Hidden Bearish** | Lower high | Higher high | Continuation DOWN |

---

### Support & Resistance

| Term | Description |
|------|-------------|
| **Support** | Price level where buying stops decline |
| **Resistance** | Price level where selling stops rally |
| **Confluence** | Multiple levels clustered together (stronger zone) |
| **Key Level** | Important S/R with historical reactions |
| **Dynamic S/R** | Moving levels (like EMAs or Pilot Line) |

---

### Entry & Exit

| Term | Description |
|------|-------------|
| **Entry Signal** | Trigger to open a position |
| **Stop Loss** | Pre-defined exit to limit losses |
| **Take Profit (TP)** | Pre-defined exit to lock profits |
| **TP1** | First profit target (usually take 50% off) |
| **Trailing Stop** | Stop that moves with price to protect profits |
| **Breakeven** | Moving stop to entry price (risk eliminated) |
| **Partial Exit** | Closing part of position (e.g., 50% at TP1) |

---

### Risk Management

| Term | Description |
|------|-------------|
| **Risk %** | Percentage of account risked per trade (1-2% typical) |
| **R:R (Risk:Reward)** | Ratio of potential profit to potential loss |
| **Position Size** | How much to buy/sell based on risk parameters |
| **ATR (Average True Range)** | Volatility measure used for stops/targets |

---

## Technical Terms

Indicator-specific terminology.

---

### Detection & Signals

| Term | Description |
|------|-------------|
| **Non-Repainting** | Signals never change after bar closes (ALL SignalPilot indicators) |
| **Bar Close Confirmation** | Signal only fires when candle completes |
| **Close-Confirmed** | What you see is permanent, won't disappear |
| **Four-Layer Detection** | Pentarch's 4-step confirmation (Regime → Pilot → NanoFlow → Event) |
| **Voting System** | Multiple components must agree (Harmonic Oscillator uses 3 voters) |
| **HTF Filter** | Higher timeframe must confirm direction |
| **Multi-Timeframe (MTF)** | Analysis across multiple chart timeframes |

---

### Plutus Flow Specific

| Term | Description |
|------|-------------|
| **Spike-Clipping** | Caps extreme volume at 3× average to prevent OBV distortion |
| **FlipGuard** | 5-bar cooldown period to prevent whipsaw signals |
| **Basis Line** | 20-period SMA that OBV crosses for signals |
| **±2σ Bands** | Statistical bands (2 standard deviations from average) |

---

### Volume Oracle Specific

| Term | Description |
|------|-------------|
| **Z-Threshold** | How unusual volume must be to trigger (default 2.5) |
| **Flow Ratio** | Directional consistency of volume (default 0.65) |
| **Quality Score** | 0-100 rating based on 7 factors |
| **Trend Following Mode** | Only trade WITH the regime |
| **Mean Reversion Mode** | Trade against extremes |
| **Hybrid Mode** | Adapts based on market conditions |

---

### Pentarch Specific

| Term | Description |
|------|-------------|
| **Pilot Line** | Dynamic trend reference line (double-smoothed EMA) |
| **Regime Classification** | Bull/Bear/Neutral market structure state |
| **NanoFlow** | High-frequency micro-momentum detector |
| **Influence Zone** | ±0.25 ATR ribbon around Pilot Line |
| **Regime Flip** | Change from bull to bear (or vice versa) |

---

### Janus Atlas Specific

| Term | Description |
|------|-------------|
| **POC (Point of Control)** | Price with highest traded volume |
| **VAH (Value Area High)** | Top of 70% volume range |
| **VAL (Value Area Low)** | Bottom of 70% volume range |
| **VWAP** | Volume-Weighted Average Price |
| **Killzone** | Institutional activity time window (London/NY open, etc.) |
| **Opening Range** | First X minutes high/low of session |
| **Session Levels** | Asian/European/NY session highs and lows |

---

### Omnideck Specific

| Term | Description |
|------|-------------|
| **TD Sequential** | Tom DeMark counting system (1-9 exhaustion) |
| **Squeeze** | Bollinger Bands inside Keltner Channels (compression) |
| **BMSB** | Bull Market Support Band (20 SMA + 21 EMA) |
| **Golden Cross** | 50 EMA crosses above 200 EMA (bullish) |
| **Death Cross** | 50 EMA crosses below 200 EMA (bearish) |
| **Liquidity Sweep** | Price spikes to grab stops then reverses |

---

## Indicator Combinations

Popular setups for maximum effectiveness.

---

### The Trinity ⭐⭐⭐⭐⭐

**Pentarch + Janus Atlas + Volume Oracle**

The most popular combination. Gives you:

- **Pentarch** → Which phase of the cycle
- **Janus Atlas** → Where to enter/exit (key levels)
- **Volume Oracle** → Volume confirmation + trade management

**Example Trade:**
1. Pentarch shows IGN (markup starting)
2. Janus Atlas shows price at weekly support
3. Volume Oracle fires BUY ⭐⭐⭐
4. = ELITE setup with all 3 confirming

---

### The Foundation ⭐⭐⭐⭐

**Janus Atlas + Volume Oracle**

Perfect for level traders:

- **Janus Atlas** → Key levels to watch
- **Volume Oracle** → Volume spike at level = confirmed entry

---

### The Momentum Stack ⭐⭐⭐⭐

**Pentarch + Harmonic Oscillator**

For momentum traders:

- **Pentarch** → Cycle phase (TD/IGN for entries)
- **Harmonic** → Oscillator confirmation (oversold + consensus)

---

### The Divergence Hunter ⭐⭐⭐⭐

**Plutus Flow + Pentarch + Janus Atlas**

For reversal traders:

- **Plutus Flow** → Divergence detection
- **Pentarch** → Cycle exhaustion (WRN/CAP)
- **Janus Atlas** → Key level for entry

---

### The Scanner ⭐⭐⭐⭐

**Augury Grid + Any Indicator**

For multi-asset traders:

- **Augury Grid** → Find signals across 8 symbols
- **Any indicator** → Confirm on individual chart

---

## Quick Reference Cards

Print-friendly summaries.

---

### Pentarch Cheat Sheet

```
TD  (Purple)  → Accumulation → PREPARE (not entry yet)
IGN (Teal)    → Markup      → LONG ENTRY
WRN (Yellow)  → Distribution → TIGHTEN STOPS
CAP (Orange)  → Climax      → EXIT LONGS
BDN (Dark)    → Decline     → EXIT or SHORT
```

---

### Volume Oracle Cheat Sheet

```
⭐⭐⭐ Elite (80-100)   → 70-75% win rate → TAKE IT
⭐⭐  Premium (60-79)  → 65-70% win rate → TAKE IT
⭐   Standard (40-59) → 55-60% win rate → BE PICKY
    Weak (0-39)      → <55% win rate   → SKIP IT
```

---

### Plutus Flow Cheat Sheet

```
Green Circle  → Flow UP    → Accumulation starting
Red Circle    → Flow DOWN  → Distribution starting
BULL DIV      → Reversal UP likely (70-80% win rate)
BEAR DIV      → Reversal DOWN likely (70-80% win rate)
Orange Circle → Extreme bullish breach → Watch for reaction
Purple Circle → Extreme bearish breach → Watch for reaction
```

---

### Color Meanings Cheat Sheet

```
🟢 GREEN  = Bullish, Buy, Long, Up
🔴 RED    = Bearish, Sell, Short, Down
🟡 YELLOW = Warning, Caution (WRN signal)
🟠 ORANGE = Transitional, Climax (CAP signal)
🟣 PURPLE = Accumulation start (TD signal)
🔵 TEAL   = Ignition, Markup (IGN signal)
⚪ GRAY   = Neutral, No clear direction
```

---

## Related Resources

- [Indicator Comparison Guide](../ref-comparison/indicator-comparison.md) - Choose the right indicator
- [Learning Paths](../start-learning-path/index.md) - Structured learning roadmap
- [Trading Workflow](../ref-workflow.md) - Complete trading system
- [All Indicators At A Glance](../ref-cheatsheets/all-indicators-at-a-glance.md) - Quick visual reference

---

## Support

Can't find a term? **support@signalpilot.io**

---

**Last Updated:** December 2024

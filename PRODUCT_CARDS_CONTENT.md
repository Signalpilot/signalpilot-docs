# ⚙️ Settings & Alerts — All Products

Complete settings, alerts, and configuration tables for all Signal Pilot indicators.

---

## 📑 Navigation

- [Pentarch v1.0](#pentarch-v10) — Five Cycle Events
- [Janus Atlas v1.0](#janus-atlas-v10) — Levels System
- [Omnideck v1.0](#omnideck-v10) — 7-System Suite
- [Augury Grid v1.0](#augury-grid-v10) — 8-Symbol Monitor
- [Volume Oracle v1.0](#volume-oracle-v10) — Volume Analysis
- [Harmonic Oscillator v1.0](#harmonic-oscillator-v10) — Triple Composite
- [Plutus Flow v1.0](#plutus-flow-v10) — OBV Analysis

---

## Pentarch v1.0

**Five Cycle Events: TD (Accumulation), IGN (Markup), WRN (Distribution), CAP (Climax), BDN (Decline)**

### Settings

| Setting | Options | Default |
|---------|---------|---------|
| **Alert Toggles** | TD, IGN, WRN, CAP, BDN (individual on/off) | All enabled |
| **Color Palette** | 5 preset schemes available | Scheme 1 |
| **Label Position** | Above/Below candle | Auto-positioned |
| **Label Size** | Small, Medium, Large | Medium |

### The Five Cycle Events

| Event | Full Name | Phase | What It Detects |
|-------|-----------|-------|-----------------|
| **TD** | Touchdown | Accumulation | Oversold conditions, potential reversal zone |
| **IGN** | Ignition | Markup | Momentum breakout, trend acceleration |
| **WRN** | Warning | Distribution | Overbought conditions, potential exhaustion |
| **CAP** | Capitulation | Climax | Extreme selling pressure, panic conditions |
| **BDN** | Breakdown | Decline | Bearish momentum acceleration |

### Alert Messages

| Alert Type | Message Format |
|------------|----------------|
| TD Alert | "Pentarch TD (Accumulation) detected at [price]" |
| IGN Alert | "Pentarch IGN (Markup) detected at [price]" |
| WRN Alert | "Pentarch WRN (Distribution) detected at [price]" |
| CAP Alert | "Pentarch CAP (Climax) detected at [price]" |
| BDN Alert | "Pentarch BDN (Decline) detected at [price]" |

---

## Janus Atlas v1.0

**Multi-Timeframe Levels System**

### Settings

| Setting | Options | Default |
|---------|---------|---------|
| **HTF Timeframe** | 1H, 4H, D, W, M | Daily |
| **Max Levels** | 1-20 per type | 10 |
| **Level Types** | Pivots, VWAP, Volume Nodes, Session | All enabled |
| **Display Mode** | Lines, Zones, Labels | Lines + Labels |
| **Line Width** | 1-5 pixels | 2px |

### Level Types

| Level Type | Description | Color (Default) |
|------------|-------------|-----------------|
| **HTF Pivots** | Higher timeframe pivot points | Teal |
| **VWAP** | Volume-weighted average price | Purple |
| **Volume Nodes** | High volume profile areas | Orange |
| **Session Open** | Daily/Weekly/Monthly open levels | Blue |
| **Swing Highs/Lows** | Key structural turning points | Cyan |

### Alert Configuration

| Alert Type | Trigger Condition |
|------------|------------------|
| Level Touch | Price touches any displayed level |
| Level Break | Price closes beyond level |
| New Level Added | HTF timeframe adds new level |

---

## Omnideck v1.0

**7-System Integrated Suite**

### Core Systems

| System | Function | Outputs |
|--------|----------|---------|
| **MFI Divergence** | Money Flow Index divergence detection | Bullish/Bearish divergence signals |
| **Volume Spikes** | Abnormal volume detection | Volume spike alerts |
| **Trend System** | Multi-timeframe trend alignment | Trend direction + strength |
| **RSI Extremes** | Overbought/Oversold detection | RSI threshold alerts |
| **MACD Crossovers** | MACD signal line crosses | Bullish/Bearish crosses |
| **Support/Resistance** | Auto-detected S/R zones | Key level lines |
| **Momentum Tracker** | Price momentum strength | Momentum score (0-100) |

### Settings

| Setting | Range | Default |
|---------|-------|---------|
| **Systems Enabled** | Toggle each of 7 systems | All enabled |
| **MFI Period** | 5-50 | 14 |
| **Volume Threshold** | 1.5x - 5x | 2.5x |
| **RSI Period** | 5-50 | 14 |
| **RSI Overbought** | 60-90 | 70 |
| **RSI Oversold** | 10-40 | 30 |
| **MACD Fast** | 5-20 | 12 |
| **MACD Slow** | 15-35 | 26 |
| **MACD Signal** | 5-15 | 9 |

### Alert Types

| Alert | Trigger |
|-------|---------|
| MFI Divergence | Bullish or bearish divergence confirmed |
| Volume Spike | Volume exceeds threshold |
| Trend Change | Multi-timeframe trend alignment shift |
| RSI Extreme | RSI enters overbought/oversold zone |
| MACD Cross | Signal line crossover |
| Level Touch | Price reaches S/R level |

---

## Augury Grid v1.0

**8-Symbol Multi-Asset Monitor**

### Settings

| Setting | Options | Default |
|---------|---------|---------|
| **Grid Layout** | 2x4, 4x2, 8x1 | 4x2 |
| **Symbols** | Any 8 TradingView symbols | User-defined |
| **Quality Score** | Show/Hide | Enabled |
| **Update Frequency** | 1min, 5min, 15min | 5min |
| **Color Coding** | Green/Red, Custom | Green/Red |

### Quality Score Components

| Component | Weight | Range |
|-----------|--------|-------|
| Trend Strength | 25% | 0-100 |
| Volume Quality | 25% | 0-100 |
| Volatility Level | 20% | 0-100 |
| Momentum Score | 20% | 0-100 |
| Divergence Check | 10% | 0-100 |
| **Total Score** | 100% | **0-100** |

### Score Interpretation

| Score Range | Rating | Meaning |
|-------------|--------|---------|
| 80-100 | Excellent | Strong setup quality |
| 60-79 | Good | Acceptable conditions |
| 40-59 | Fair | Mixed signals |
| 20-39 | Poor | Weak setup |
| 0-19 | Very Poor | Avoid |

---

## Volume Oracle v1.0

**Volume Spike Detection + Position Management**

### Settings

| Setting | Range | Default |
|---------|-------|---------|
| **Spike Threshold** | 1.5x - 5x | 2.5x average |
| **Lookback Period** | 10-100 bars | 20 bars |
| **Position Levels** | 1-5 levels | 3 levels |
| **Label Display** | On/Off | Enabled |
| **Alert Mode** | All, Major Only | All |

### Volume Spike Types

| Type | Threshold | Signal Strength |
|------|-----------|-----------------|
| Minor Spike | 1.5x - 2.0x | Low |
| Moderate Spike | 2.0x - 3.0x | Medium |
| Major Spike | 3.0x - 4.0x | High |
| Extreme Spike | 4.0x+ | Very High |

### Position Management Levels

| Level | Entry Condition | Exit Condition |
|-------|----------------|----------------|
| **Level 1** | Major volume spike + trend alignment | First target or opposite signal |
| **Level 2** | Continued momentum + no divergence | Second target or trend change |
| **Level 3** | Strong continuation + volume support | Final target or reversal signal |

### Alert Messages

| Alert Type | Message |
|------------|---------|
| Volume Spike | "Volume spike detected: [multiplier]x average" |
| Position Entry | "Position level [1/2/3] triggered at [price]" |
| Position Exit | "Exit level [1/2/3] reached at [price]" |

---

## Harmonic Oscillator v1.0

**3-in-1 Composite: MACD + RSI + Stochastic RSI**

### Settings

| Setting | Range | Default |
|---------|-------|---------|
| **MACD Fast** | 5-20 | 12 |
| **MACD Slow** | 15-35 | 26 |
| **MACD Signal** | 5-15 | 9 |
| **RSI Period** | 5-50 | 14 |
| **Stoch RSI Period** | 5-30 | 14 |
| **Stoch RSI Smooth K** | 1-10 | 3 |
| **Stoch RSI Smooth D** | 1-10 | 3 |
| **Display Mode** | All, MACD Only, RSI Only, Stoch Only | All |

### Composite Signal Matrix

| MACD | RSI | Stoch RSI | Composite Signal |
|------|-----|-----------|------------------|
| Bullish Cross | > 50 | > 20 | **Strong Buy** |
| Bullish Cross | > 50 | < 20 | Moderate Buy |
| Bullish Cross | < 50 | Any | Weak Buy |
| Bearish Cross | < 50 | < 80 | **Strong Sell** |
| Bearish Cross | < 50 | > 80 | Moderate Sell |
| Bearish Cross | > 50 | Any | Weak Sell |

### Threshold Zones

| Zone | RSI Range | Stoch RSI Range | Meaning |
|------|-----------|-----------------|---------|
| Extreme Overbought | > 80 | > 90 | Strong reversal risk |
| Overbought | 70-80 | 80-90 | Reversal warning |
| Neutral | 30-70 | 20-80 | Balanced conditions |
| Oversold | 20-30 | 10-20 | Reversal opportunity |
| Extreme Oversold | < 20 | < 10 | Strong reversal potential |

### Alert Types

| Alert | Trigger |
|-------|---------|
| MACD Bullish Cross | Fast line crosses above signal |
| MACD Bearish Cross | Fast line crosses below signal |
| RSI Overbought | RSI > 70 |
| RSI Oversold | RSI < 30 |
| Stoch Overbought | Stoch RSI > 80 |
| Stoch Oversold | Stoch RSI < 20 |
| Composite Extreme | All 3 indicators aligned in extreme zone |

---

## Plutus Flow v1.0

**Advanced OBV with Divergence Detection**

### Settings

| Setting | Range | Default |
|---------|-------|---------|
| **OBV Smoothing** | 1-50 | 1 (raw) |
| **Divergence Lookback** | 10-100 bars | 50 bars |
| **Sensitivity** | Low, Medium, High | Medium |
| **Display Mode** | Line, Histogram, Both | Line |
| **Divergence Lines** | Show/Hide | Enabled |

### Divergence Types

| Type | Price Action | OBV Action | Signal |
|------|--------------|------------|--------|
| **Bullish Regular** | Lower Low | Higher Low | Reversal up |
| **Bullish Hidden** | Higher Low | Lower Low | Continuation up |
| **Bearish Regular** | Higher High | Lower High | Reversal down |
| **Bearish Hidden** | Lower High | Higher High | Continuation down |

### Divergence Strength

| Strength | Criteria | Reliability |
|----------|----------|-------------|
| **Strong** | Clear price/OBV divergence over 30+ bars | High |
| **Moderate** | Visible divergence over 15-30 bars | Medium |
| **Weak** | Minor divergence over 10-15 bars | Low |

### Alert Configuration

| Alert Type | Trigger Condition |
|------------|------------------|
| Bullish Regular Divergence | Lower low in price, higher low in OBV |
| Bearish Regular Divergence | Higher high in price, lower high in OBV |
| Bullish Hidden Divergence | Higher low in price, lower low in OBV |
| Bearish Hidden Divergence | Lower high in price, higher high in OBV |
| OBV Trend Change | OBV crosses zero or changes slope significantly |

---

## 🔗 Quick Links

- [Pentarch Guide](../pentarch-v10/) — Five Cycle Events
- [Janus Atlas Guide](../janus-atlas-v10/) — Levels System
- [Omnideck Guide](../omnideck-v10/) — 7-System Suite
- [Augury Grid Guide](../augury-grid-v10/) — 8-Symbol Monitor
- [Volume Oracle Guide](../minimal-flow-v10/) — Volume Analysis
- [Harmonic Oscillator Guide](../harmonic-oscillator-v10/) — Triple Composite
- [Plutus Flow Guide](../plutus-flow-v10/) — OBV Analysis

---

**Note:** This quick reference contains all configuration tables and alert types. Refer to individual product guides for detailed usage instructions, examples, and educational content.

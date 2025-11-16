# Mermaid Diagrams for Signal Pilot Docs

This document contains ready-to-use Mermaid diagrams for the Signal Pilot documentation. Copy and paste these into your markdown or HTML pages.

---

## How to Use

1. Copy the diagram code below
2. Paste into your markdown file wrapped in ```` ```mermaid ```` blocks
3. The diagram will render automatically if Mermaid.js is enabled

**To enable Mermaid in MkDocs:**
Add to `mkdocs.yml`:
```yaml
markdown_extensions:
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
```

---

## 1. PENTARCH SIGNAL FLOW

**Use in:** `pentarch-v10/index.html`

```mermaid
graph TD
    A[Price Data] --> B[Four-Layer Detection System]

    B --> C{Layer 1:<br/>Regime Classification<br/><small>MOST CRITICAL</small>}
    B --> D{Layer 2:<br/>Pilot Line Distance}
    B --> E{Layer 3:<br/>NanoFlow Momentum}
    B --> F{Layer 4:<br/>Bar Close Confirmation}

    C --> G[Signal Conditions Met]
    D --> G
    E --> G
    F --> G

    G --> H{All Layers<br/>Confirmed at<br/>Bar Close?}
    H -->|Yes| I[🟢 Signal Fires]
    H -->|No| J[⏳ Wait for Next Bar]

    I --> K[Alert Sent]

    style C fill:#00bcd4,color:#fff,stroke:#0097a7,stroke-width:4px
    style I fill:#4caf50,color:#fff
    style J fill:#ff9800,color:#fff
    style K fill:#00bcd4,color:#fff
```

---

## 2. INDICATOR SELECTION DECISION TREE

**Use in:** `ref-comparison/index.html` or `index.html`

```mermaid
graph TD
    Start[What do you need?] --> Q1{Primary Goal?}

    Q1 -->|Reversal Detection| P1[Pentarch v1.0]
    Q1 -->|Trend Following| P2[Omnideck v1.0]
    Q1 -->|Volume Analysis| P3[Volume Oracle v1.0]
    Q1 -->|Levels & Structure| P4[Janus Atlas v1.0]
    Q1 -->|Momentum| P5[Harmonic Oscillator v1.0]

    P1 --> D1[Use for: Exhaustion,<br/>Cycle Phases, TD Sequential]
    P2 --> D2[Use for: Everything,<br/>10 Systems in One]
    P3 --> D3[Use for: Money Flow,<br/>Position Tracking]
    P4 --> D4[Use for: 39 Level Types,<br/>S/R Zones]
    P5 --> D5[Use for: Consensus Signals,<br/>Divergences]

    style P1 fill:#9c27b0,color:#fff
    style P2 fill:#ff5722,color:#fff
    style P3 fill:#4caf50,color:#fff
    style P4 fill:#2196f3,color:#fff
    style P5 fill:#ff9800,color:#fff
```

---

## 3. ALERT SETUP WORKFLOW

**Use in:** `how-to-alerts/index.html`

```mermaid
sequenceDiagram
    participant User
    participant TV as TradingView
    participant SP as Signal Pilot Indicator
    participant Alert as Alert System

    User->>TV: Open chart
    User->>TV: Add Signal Pilot indicator
    TV->>SP: Load indicator
    SP->>TV: Display on chart

    User->>TV: Right-click indicator name
    TV->>User: Show "Add Alert" option
    User->>TV: Click "Add Alert on Pentarch"

    TV->>Alert: Open Alert Dialog
    User->>Alert: Select alert condition
    User->>Alert: Set alert name
    User->>Alert: Configure notifications

    Alert->>TV: Save alert
    TV->>User: ✅ Alert Created

    Note over SP,Alert: Wait for signal...

    SP->>Alert: 🔔 Signal Triggered!
    Alert->>User: Send notification
```

---

## 4. HARMONIC OSCILLATOR VOTING SYSTEM

**Use in:** `harmonic-oscillator-v10/index.html`

```mermaid
graph TD
    A[Market Data] --> B1[RSI Triple Envelope<br/><small>7/14/28 periods</small>]
    A --> B2[MACD Histogram<br/><small>12/26/9 settings</small>]
    A --> B3[Stochastic RSI<br/><small>14/14/3/3 settings</small>]
    A --> B4[Volume Oscillator<br/><small>Short/Long periods</small>]
    A --> B5[Divergence Detector<br/><small>Price vs Oscillators</small>]

    B1 --> H[Democratic<br/>Voting System<br/><small>5 Oscillators</small>]
    B2 --> H
    B3 --> H
    B4 --> H
    B5 --> H

    H --> I{Vote Threshold}

    I -->|4-5 votes| J[STRONG Bull/Bear]
    I -->|3 votes| K[BULL/BEAR]
    I -->|Less than 3| L[NEUT - Neutral]

    J --> M[Signal Output]
    K --> M
    L --> M

    style H fill:#ff9800,color:#fff
    style J fill:#4caf50,color:#fff
    style K fill:#2196f3,color:#fff
    style L fill:#9e9e9e,color:#fff
    style M fill:#00bcd4,color:#fff
```

---

## 5. VOLUME ORACLE POSITION TRACKING

**Use in:** `volume-oracle-v10/index.html` (Volume Oracle)

```mermaid
graph TD
    Start([No Position]) --> Signal{VBS Signal?}

    Signal -->|VBS+ Long| Long[Long Position<br/><small>Entry Recorded</small>]
    Signal -->|VBS- Short| Short[Short Position<br/><small>Entry Recorded</small>]

    Long --> Track1[Position Tracking<br/><small>Real-time P&L</small>]
    Short --> Track2[Position Tracking<br/><small>Real-time P&L</small>]

    Track1 --> Exit1{Exit?}
    Track2 --> Exit2{Exit?}

    Exit1 -->|VBS- or Manual| Close[Position Closed]
    Exit2 -->|VBS+ or Manual| Close

    Close --> Start

    style Start fill:#37474f,color:#fff,stroke:#263238,stroke-width:3px
    style Long fill:#4caf50,color:#fff,stroke:#388e3c,stroke-width:3px
    style Short fill:#f44336,color:#fff,stroke:#c62828,stroke-width:3px
    style Track1 fill:#00bcd4,color:#fff
    style Track2 fill:#00bcd4,color:#fff
    style Close fill:#ff9800,color:#fff,stroke:#f57c00,stroke-width:3px
```

---

## 6. TRADING WORKFLOW (BIAS → TIMING)

**Use in:** `ref-workflow/index.html`

```mermaid
graph TD
    Start[Start Trading Session] --> HTF[1. Check Higher Timeframe]

    HTF --> Bias{Determine Bias}
    Bias -->|Bullish| Green[Green Regime ✅]
    Bias -->|Bearish| Red[Red Regime ❌]
    Bias -->|Neutral| Wait[⏸️ Wait for Clarity]

    Green --> LookLong[2. Look for LONG Setups]
    Red --> LookShort[2. Look for SHORT Setups]

    LookLong --> Levels1[3. Check Janus Atlas Levels]
    LookShort --> Levels2[3. Check Janus Atlas Levels]

    Levels1 --> Signal1[4. Wait for Pentarch Signal]
    Levels2 --> Signal2[4. Wait for Pentarch Signal]

    Signal1 --> Confirm1[5. Confirm with Harmonic/Volume]
    Signal2 --> Confirm2[5. Confirm with Harmonic/Volume]

    Confirm1 --> Entry1[6. Long Position Entry Example]
    Confirm2 --> Entry2[6. Short Position Entry Example]

    Entry1 --> Manage[7. Manage Position]
    Entry2 --> Manage

    Manage --> Exit[8. Position Close Example<br/>Opposite Signal or Target Reached]

    style Green fill:#4caf50,color:#fff
    style Red fill:#f44336,color:#fff
    style Entry1 fill:#4caf50,color:#fff
    style Entry2 fill:#f44336,color:#fff
```

---

## 7. OMNIDECK SYSTEM LAYERS

**Use in:** `omnideck-v10/index.html`

```mermaid
graph TB
    subgraph "Trend Layer"
        T1[EMA Trio<br/><small>Moving Averages</small>]
        T2[SuperTrend<br/><small>Trend Ribbon</small>]
        T3[BMSB<br/><small>Bull Market Support Band<br/>20 SMA + 21 EMA</small>]
    end

    subgraph "Entry Layer"
        E1[TD Sequential<br/><small>Exhaustion Counter</small>]
        E2[Squeeze Detector<br/><small>Breakout Detection</small>]
        E3[Candlestick Patterns<br/><small>16 Classic Patterns</small>]
    end

    subgraph "Management Layer"
        M1[Regime Box<br/><small>Market Mood Background</small>]
        M2[Supply/Demand Zones<br/><small>Institutional Levels</small>]
        M3[Liquidity Sweeps<br/><small>Stop Hunt Detection</small>]
    end

    subgraph "Meta Layer"
        META[System Integration<br/><small>10 Systems Combined</small>]
    end

    T1 & T2 & T3 --> META
    E1 & E2 & E3 --> META
    M1 & M2 & M3 --> META

    META --> Output[Unified Signal Output]

    style META fill:#ff5722,color:#fff
    style Output fill:#00bcd4,color:#fff
```

---

## 8. JANUS ATLAS LEVEL TYPES

**Use in:** `janus-atlas-v10/index.html`

```mermaid
graph TD
    Root[Janus Atlas<br/>39 Level Types] --> Cat1[VWAP Family]
    Root --> Cat2[Volume Profile]
    Root --> Cat3[Sessions]
    Root --> Cat4[Market Structure]
    Root --> Cat5[Classic Levels]

    Cat1 --> V1[Daily/Weekly/Monthly VWAP<br/><small>Volume Weighted Avg Price</small>]
    Cat1 --> V2[Custom Period VWAP]

    Cat2 --> VP1[POC - Point of Control]
    Cat2 --> VP2[VAH - Value Area High]
    Cat2 --> VP3[VAL - Value Area Low]
    Cat2 --> VP4[Value Area Range]

    Cat3 --> S1[Asia/London/NY Sessions]
    Cat3 --> S2[Custom Session H/L]

    Cat4 --> MS1[BOS - Break of Structure]
    Cat4 --> MS2[CHoCH - Change of Character]
    Cat4 --> MS3[Swing High/Low Points]
    Cat4 --> MS4[Liquidity Sweeps]

    Cat5 --> CL1[Daily/Weekly/Monthly H/L]
    Cat5 --> CL2[Pivot Points]
    Cat5 --> CL3[Fibonacci Levels]
    Cat5 --> CL4[Round Numbers]

    style Root fill:#9c27b0,color:#fff,stroke:#7b1fa2,stroke-width:3px
    style Cat1 fill:#00bcd4,color:#fff
    style Cat2 fill:#4caf50,color:#fff
    style Cat3 fill:#ff9800,color:#fff
    style Cat4 fill:#2196f3,color:#fff
    style Cat5 fill:#f44336,color:#fff
```

---

## 9. PLUTUS FLOW OBV ANALYSIS

**Use in:** `plutus-flow-v10/index.html`

```mermaid
graph TD
    A[Price & Volume Data] --> B[OBV Calculation<br/><small>On-Balance Volume</small>]

    B --> C[Adaptive Smoothing]

    C --> D{Smoothing Level?}
    D -->|Level 1-2| E[Fast Response<br/>More Signals]
    D -->|Level 3| F[Balanced<br/>Default]
    D -->|Level 4-5| G[Slow Response<br/>Clean Trends]

    E --> H[Trend Line Overlay]
    F --> H
    G --> H

    H --> I{OBV Analysis}

    I --> J[OBV Direction]
    I --> K[Divergences]
    I --> L[Trend Strength]

    J --> M[Signal Generation]
    K --> M
    L --> M

    M --> N[Entry/Exit Signals]

    style M fill:#9c27b0,color:#fff
    style N fill:#4caf50,color:#fff
```

---

## 10. AUGURY GRID WORKFLOW

**Use in:** `augury-grid-v10/index.html`

```mermaid
graph TD
    Start[Configure 8 Symbols] --> Scan[Augury Grid Scans All]

    Scan --> A1[Symbol 1: BTC]
    Scan --> A2[Symbol 2: ETH]
    Scan --> A3[Symbol 3: SOL]
    Scan --> A4[Symbol 4: ADA]
    Scan --> A5[Symbol 5: XRP]
    Scan --> A6[Symbol 6: DOT]
    Scan --> A7[Symbol 7: AVAX]
    Scan --> A8[Symbol 8: MATIC]

    A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 --> Analysis[Cycle Phase Analysis]

    Analysis --> Display{Grid Display}

    Display --> Green[🟢 IGN Signal<br/>Strong Setup]
    Display --> Yellow[🟡 WRN Signal<br/>Warning]
    Display --> Red[🔴 CAP/BDN<br/>Exhaustion]
    Display --> Gray[⚪ No Signal<br/>Neutral]

    Green --> Priority[High Priority<br/>for Review]
    Yellow --> Monitor[Monitor<br/>Closely]
    Red --> Caution[Exercise<br/>Caution]

    style Green fill:#4caf50,color:#fff
    style Yellow fill:#ff9800,color:#fff
    style Red fill:#f44336,color:#fff
    style Priority fill:#00bcd4,color:#fff
```

---

## 11. CONFIGURATION RECIPES FLOW

**Use in:** `ref-configuration-recipes/index.html`

```mermaid
graph TD
    Start[Choose Trading Style] --> S1{Timeframe?}

    S1 -->|1-15min| Scalper[Scalper Setup<br/><small>High Frequency: 20-50 signals/week</small>]
    S1 -->|15min-1H| Day[Day Trader Setup<br/><small>Medium Frequency: 5-15 signals/week</small>]
    S1 -->|4H-Daily| Swing[Swing Trader Setup<br/><small>Low Frequency: 2-8 signals/week</small>]
    S1 -->|Daily-Weekly| Position[Position Trader Setup<br/><small>Very Low Frequency: 1-4 signals/month</small>]

    Scalper --> Apply[Apply Configuration]
    Day --> Apply
    Swing --> Apply
    Position --> Apply

    Apply --> Backtest[Backtest on<br/>Historical Data]
    Backtest --> Optimize[Optimize if Needed]
    Optimize --> Live[Live Testing]

    style Apply fill:#00bcd4,color:#fff
    style Live fill:#4caf50,color:#fff
```

---

## Usage Instructions

### In Markdown Pages

````markdown
## How Pentarch Works

The signal detection process flows through four layers:

```mermaid
graph TD
    A[Price Data] --> B[Four-Layer Detection]
    B --> C[Signal Output]
```
````

### In HTML Pages

If using standalone HTML (not markdown), add Mermaid.js:

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({ startOnLoad: true, theme: 'dark' });
</script>

<div class="mermaid">
graph TD
    A[Price Data] --> B[Detection]
</div>
```

---

## Customization

**Change Colors:**
```mermaid
graph TD
    A[Start] --> B[End]
    style A fill:#ff5722,color:#fff
    style B fill:#4caf50,color:#fff
```

**Change Theme:**
```javascript
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark'  // or 'default', 'forest', 'neutral'
});
```

---

**Created:** November 2025
**For:** Signal Pilot Documentation Enhancement Project
**Version:** 1.0

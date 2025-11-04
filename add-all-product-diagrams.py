#!/usr/bin/env python3
"""
Add 7 Mermaid diagrams to product pages.
Each diagram is wrapped in a callout box and placed strategically.
"""

import re

# Define diagrams and their target pages
diagrams = {
    'harmonic-oscillator-v10/index.html': {
        'title': 'How the Voting System Works',
        'description': 'Three oscillators vote democratically to generate consensus signals:',
        'search_after': '<h2 id="core-functionality">',
        'diagram': '''graph LR
    A[Market Data] --> B[MACD]
    A --> C[RSI]
    A --> D[StochRSI]

    B --> E{MACD Vote}
    C --> F{RSI Vote}
    D --> G{StochRSI Vote}

    E --> H[Democratic<br/>Voting System]
    F --> H
    G --> H

    H --> I{Signal Mode?}

    I -->|Conservative| J[Require 3 votes]
    I -->|Balanced| K[Require 2 votes]
    I -->|Aggressive| L[Require 1 vote]

    J --> M[🟢 Signal Output]
    K --> M
    L --> M

    style H fill:#ff9800,color:#fff
    style M fill:#4caf50,color:#fff'''
    },

    'omnideck-v10/index.html': {
        'title': '10 Systems in 4 Layers',
        'description': 'Omnideck integrates multiple detection systems into a unified framework:',
        'search_after': '<h2 id="core-functionality">',
        'diagram': '''graph TB
    subgraph "Trend Layer"
        T1[EMA Trio]
        T2[SuperTrend]
        T3[BMSB]
    end

    subgraph "Entry Layer"
        E1[TD Sequential]
        E2[Squeeze Detector]
        E3[Candlestick Patterns]
    end

    subgraph "Management Layer"
        M1[Regime Box]
        M2[Supply/Demand Zones]
        M3[Liquidity Sweeps]
    end

    subgraph "Meta Layer"
        META[System Integration]
    end

    T1 & T2 & T3 --> META
    E1 & E2 & E3 --> META
    M1 & M2 & M3 --> META

    META --> Output[Unified Signal Output]

    style META fill:#ff5722,color:#fff
    style Output fill:#00bcd4,color:#fff'''
    },

    'janus-atlas-v10/index.html': {
        'title': '39 Level Types at a Glance',
        'description': 'Janus Atlas organizes 39 different level types into five main categories:',
        'search_after': '<h2 id="core-functionality">',
        'diagram': '''mindmap
  root((Janus Atlas<br/>39 Level Types))
    VWAP
      Daily VWAP
      Weekly VWAP
      Monthly VWAP
      Custom Period
    Volume Profile
      POC
      VAH
      VAL
      Value Area
    Sessions
      Asia High/Low
      London High/Low
      NY High/Low
      Custom Session
    Market Structure
      BOS
      CHoCH
      Swing High/Low
      Liquidity Sweeps
    Classic Levels
      Daily/Weekly/Monthly H/L
      Pivot Points
      Fibonacci Levels
      Round Numbers'''
    },

    'plutus-flow-v10/index.html': {
        'title': 'OBV Analysis Flow',
        'description': 'Plutus Flow uses adaptive smoothing to analyze On-Balance Volume:',
        'search_after': '<h2 id="core-functionality">',
        'diagram': '''graph TD
    A[Price & Volume Data] --> B[OBV Calculation]

    B --> C[Adaptive Smoothing]

    C --> D{Smoothing Level?}
    D -->|Level 1-2| E[Fast Response<br/>More Signals]
    D -->|Level 3| F[Balanced<br/>Default]
    D -->|Level 4-5| G[Slow Response<br/>Clean Trends]

    E --> H[Trend Line Overlay]
    F --> H
    G --> H

    H --> I{Analysis}

    I --> J[OBV Direction]
    I --> K[Divergences]
    I --> L[Trend Strength]

    J --> M[Signal Generation]
    K --> M
    L --> M

    M --> N[Entry/Exit Signals]

    style M fill:#9c27b0,color:#fff
    style N fill:#4caf50,color:#fff'''
    },

    'augury-grid-v10/index.html': {
        'title': 'Grid Scanning Workflow',
        'description': 'Augury Grid scans 8 symbols simultaneously and displays cycle phase analysis:',
        'search_after': '<h2 id="core-functionality">',
        'diagram': '''graph TD
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
    style Priority fill:#00bcd4,color:#fff'''
    },

    'minimal-flow-v10/index.html': {
        'title': 'Position Tracking State Machine',
        'description': 'Volume Oracle tracks positions from entry to exit with real-time P&L:',
        'search_after': '<h2 id="core-functionality">',
        'diagram': '''stateDiagram-v2
    [*] --> NoPosition: Waiting

    NoPosition --> LongPosition: VBS+ Signal
    NoPosition --> ShortPosition: VBS- Signal

    LongPosition --> Tracking: Position Opened
    Tracking --> ProfitCalc: Real-time P&L
    ProfitCalc --> ExitTarget: Show Target Line

    ExitTarget --> NoPosition: VBS- Exit Signal
    ExitTarget --> NoPosition: Manual Exit

    ShortPosition --> Tracking2: Position Opened
    Tracking2 --> ProfitCalc2: Real-time P&L
    ProfitCalc2 --> ExitTarget2: Show Target Line

    ExitTarget2 --> NoPosition: VBS+ Exit Signal
    ExitTarget2 --> NoPosition: Manual Exit

    note right of Tracking
        Features:
        - Entry price recorded
        - Unrealized P&L displayed
        - Risk/Reward calculated
        - Exit target shown
    end note'''
    },

    'ref-workflow/index.html': {
        'title': 'Complete Trading Workflow',
        'description': 'From bias determination to position management—here\'s the complete flow:',
        'search_after': '<h1 id="signal-pilot-suite-trading-workflow">',
        'diagram': '''graph TD
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

    Confirm1 --> Entry1[6. Enter Long]
    Confirm2 --> Entry2[6. Enter Short]

    Entry1 --> Manage[7. Manage Position]
    Entry2 --> Manage

    Manage --> Exit[8. Exit on Opposite Signal<br/>or Target Hit]

    style Green fill:#4caf50,color:#fff
    style Red fill:#f44336,color:#fff
    style Entry1 fill:#4caf50,color:#fff
    style Entry2 fill:#f44336,color:#fff'''
    }
}

def create_diagram_html(title, description, diagram):
    """Create HTML for a diagram wrapped in a callout box."""
    return f'''
<div class="sp-callout sp-callout--info" style="margin: 2rem 0;">
  <div class="sp-callout__icon">📊</div>
  <div class="sp-callout__content">
    <h4>{title}</h4>
    <p style="margin-bottom: 1rem;">{description}</p>
    <div class="mermaid">
{diagram}
    </div>
  </div>
</div>
'''

added_count = 0

for file_path, config in diagrams.items():
    try:
        # Read file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if diagram already exists
        if config['title'] in content:
            print(f"⏭️  Skipped (already exists): {file_path}")
            continue

        # Find insertion point
        search_pattern = config['search_after']

        if search_pattern in content:
            # Find the start position of the search pattern
            start_pos = content.find(search_pattern)
            if start_pos != -1:
                # Find the closing tag </h2> or </h1> after the start position
                close_tag_pos = content.find('</h', start_pos)
                if close_tag_pos != -1:
                    # Find the end of the closing tag (the '>')
                    insert_pos = content.find('>', close_tag_pos) + 1

                    # Create diagram HTML
                    diagram_html = create_diagram_html(
                        config['title'],
                        config['description'],
                        config['diagram']
                    )

                    # Insert diagram
                    new_content = content[:insert_pos] + diagram_html + content[insert_pos:]

                    # Write back
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)

                    added_count += 1
                    print(f"✅ Added diagram to: {file_path}")
                else:
                    print(f"⚠️  Could not find closing tag in: {file_path}")
            else:
                print(f"⚠️  Could not find start position in: {file_path}")
        else:
            print(f"⚠️  Could not find insertion point in: {file_path}")

    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎉 Added {added_count} diagrams!")

#!/usr/bin/env python3
"""
Add Mermaid diagrams to specific product pages
"""

import re

# Pentarch Signal Flow Diagram
PENTARCH_DIAGRAM = '''
<div class="sp-callout sp-callout--info" style="margin: 2rem 0;">
  <div class="sp-callout__title">📊 Visual Overview: Signal Detection Process</div>
  <div class="mermaid">
graph TD
    A[Price Data] --> B[Four-Layer Detection System]

    B --> C{Layer 1:<br/>Regime<br/>Classification}
    B --> D{Layer 2:<br/>Pilot Line<br/>Distance}
    B --> E{Layer 3:<br/>NanoFlow<br/>Momentum}
    B --> F{Layer 4:<br/>Bar Close<br/>Confirmation}

    C --> G[All Conditions Met]
    D --> G
    E --> G
    F --> G

    G --> H{Close<br/>Confirmed?}
    H -->|Yes| I[🟢 Signal Fires]
    H -->|No| J[⏳ Wait for Close]

    I --> K[Alert Sent]

    style I fill:#4caf50,color:#fff
    style J fill:#ff9800,color:#fff
    style K fill:#00bcd4,color:#fff
    style B fill:#2196f3,color:#fff
  </div>
  <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
    <strong>How to read:</strong> Price data flows through four independent validation layers.
    Only when all four layers confirm simultaneously at bar close does a signal appear.
  </p>
</div>
'''

# Indicator Decision Tree
DECISION_TREE_DIAGRAM = '''
<div class="sp-callout sp-callout--info" style="margin: 2rem 0;">
  <div class="sp-callout__title">🎯 Quick Selection Guide</div>
  <div class="mermaid">
graph TD
    Start[What do you need?] --> Q1{Primary Goal?}

    Q1 -->|Reversal Detection| P1[Pentarch v1.0]
    Q1 -->|Trend Following| P2[Omnideck v1.0]
    Q1 -->|Volume Analysis| P3[Volume Oracle v1.0]
    Q1 -->|Levels & Structure| P4[Janus Atlas v1.0]
    Q1 -->|Momentum Consensus| P5[Harmonic Oscillator v1.0]

    P1 --> D1[Exhaustion,<br/>Cycle Phases,<br/>TD Sequential]
    P2 --> D2[Everything,<br/>10 Systems,<br/>All-in-One]
    P3 --> D3[Money Flow,<br/>Position Tracking,<br/>Volume Signals]
    P4 --> D4[39 Level Types,<br/>Support/Resistance,<br/>Market Structure]
    P5 --> D5[3-Oscillator Voting,<br/>Divergences,<br/>Consensus Signals]

    style P1 fill:#9c27b0,color:#fff
    style P2 fill:#ff5722,color:#fff
    style P3 fill:#4caf50,color:#fff
    style P4 fill:#2196f3,color:#fff
    style P5 fill:#ff9800,color:#fff
  </div>
  <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
    <strong>How to read:</strong> Start with your primary trading goal and follow the path to
    find the indicator that best matches your needs.
  </p>
</div>
'''

# Alert Workflow
ALERT_WORKFLOW_DIAGRAM = '''
<div class="sp-callout sp-callout--info" style="margin: 2rem 0;">
  <div class="sp-callout__title">📋 Alert Setup Process</div>
  <div class="mermaid">
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
    User->>TV: Click "Add Alert"

    TV->>Alert: Open Alert Dialog
    User->>Alert: Select condition (e.g. "Any alert() call")
    User->>Alert: Set alert name
    User->>Alert: Configure notifications

    Alert->>TV: Save alert
    TV->>User: ✅ Alert Created

    Note over SP,Alert: Wait for signal...

    SP->>Alert: 🔔 Signal Triggered!
    Alert->>User: Send notification
  </div>
  <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
    <strong>How to read:</strong> Follow the sequence from top to bottom to set up your first alert.
    Each step shows the interaction between you, TradingView, and the indicator.
  </p>
</div>
'''

# Add Pentarch diagram
print("Adding diagram to pentarch-v10/index.html...")
with open('pentarch-v10/index.html', 'r') as f:
    content = f.read()

# Add diagram after the "Four-Layer Detection System" heading
content = content.replace(
    '<h2 id="four-layer-detection-system">🔄 Four-Layer Detection System<a class="headerlink" href="#four-layer-detection-system" title="Permanent link">&para;</a></h2>',
    '<h2 id="four-layer-detection-system">🔄 Four-Layer Detection System<a class="headerlink" href="#four-layer-detection-system" title="Permanent link">&para;</a></h2>\n' + PENTARCH_DIAGRAM
)

with open('pentarch-v10/index.html', 'w') as f:
    f.write(content)
print("✓ Added Pentarch Signal Flow diagram")

# Add decision tree to comparison page
print("\nAdding diagram to ref-comparison/index.html...")
with open('ref-comparison/index.html', 'r') as f:
    content = f.read()

# Find a good place - after the main title
content = content.replace(
    '<h1 id="indicator-comparison-guide">Indicator Comparison Guide<a class="headerlink" href="#indicator-comparison-guide" title="Permanent link">&para;</a></h1>',
    '<h1 id="indicator-comparison-guide">Indicator Comparison Guide<a class="headerlink" href="#indicator-comparison-guide" title="Permanent link">&para;</a></h1>\n' + DECISION_TREE_DIAGRAM
)

with open('ref-comparison/index.html', 'w') as f:
    f.write(content)
print("✓ Added Indicator Selection Decision Tree")

# Add alert workflow to alerts page
print("\nAdding diagram to how-to-alerts/index.html...")
with open('how-to-alerts/index.html', 'r') as f:
    content = f.read()

# Find the first h2 heading and add diagram after it
match = re.search(r'(<h2[^>]*>.*?</h2>)', content)
if match:
    first_h2 = match.group(1)
    content = content.replace(first_h2, first_h2 + '\n' + ALERT_WORKFLOW_DIAGRAM, 1)

with open('how-to-alerts/index.html', 'w') as f:
    f.write(content)
print("✓ Added Alert Setup Workflow diagram")

print("\n" + "="*42)
print("✅ All diagrams added!")
print("="*42)
print("\n📊 Diagrams added to:")
print("  • pentarch-v10/ - Signal Flow diagram")
print("  • ref-comparison/ - Decision Tree diagram")
print("  • how-to-alerts/ - Alert Workflow diagram")
print("\n💡 These diagrams will render automatically with Mermaid.js")
print("📝 To add more diagrams, see MERMAID_DIAGRAMS.md")

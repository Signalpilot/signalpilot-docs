# Simpler Alert Setup Diagram

The current sequence diagram might be too technical. Here are 2 alternative styles:

---

## Option 1: Simple Step Flow (Easier to Read)

```mermaid
graph TD
    Start([📊 You Have Chart Open]) --> Step1[1. Right-click Indicator Name]

    Step1 --> Step2[2. Click 'Add Alert on...' ]

    Step2 --> Step3[3. Alert Dialog Opens]

    Step3 --> Choice{Choose Condition}

    Choice --> Opt1[✅ 'Any alert() function call'<br/>RECOMMENDED]
    Choice --> Opt2['Pentarch: IGN Long'<br/>Individual Signals]

    Opt1 --> Step4[4. Name Your Alert]
    Opt2 --> Step4

    Step4 --> Step5[5. Set Notifications<br/>Mobile / Email / Webhook]

    Step5 --> Critical{⚠️ CRITICAL SETTING}

    Critical --> Step6[Set to 'Once Per Bar Close'<br/>NOT 'Once Per Bar']

    Step6 --> Done([✅ Alert Created!])

    Done --> Wait[🕐 Wait for Signal...]
    Wait --> Fire[🔔 Alert Fires When Signal Appears]

    style Opt1 fill:#4caf50,color:#fff
    style Critical fill:#ff5722,color:#fff
    style Done fill:#00bcd4,color:#fff
    style Fire fill:#4caf50,color:#fff
```

**Pros:** Clearer step-by-step flow, highlights critical settings
**Cons:** Less technical detail

---

## Option 2: Visual Checklist (Even Simpler)

```mermaid
graph LR
    subgraph "Setup Phase"
        A1[1️⃣ Right-click<br/>indicator]
        A2[2️⃣ Click<br/>'Add Alert']
        A3[3️⃣ Choose<br/>'Any alert()']
        A1 --> A2 --> A3
    end

    subgraph "Configuration Phase"
        B1[4️⃣ Name<br/>your alert]
        B2[5️⃣ Set<br/>notifications]
        B3[6️⃣ Choose<br/>'Bar Close']
        A3 --> B1 --> B2 --> B3
    end

    subgraph "Done"
        C1[✅ Save]
        C2[🔔 Alerts<br/>work!]
        B3 --> C1 --> C2
    end

    style A3 fill:#4caf50,color:#fff
    style B3 fill:#ff5722,color:#fff
    style C2 fill:#00bcd4,color:#fff
```

**Pros:** Super simple, numbered steps, visual progression
**Cons:** Very minimal detail

---

## Option 3: Numbered List with Icons (Non-Diagram)

Just replace the diagram with this visual list:

```html
<div class="sp-step-list">

  <div class="sp-step">
    <div class="sp-step__number">1</div>
    <div class="sp-step__content">
      <h4>Open Alert Dialog</h4>
      <p>Right-click your Signal Pilot indicator name → Select <strong>"Add Alert on Pentarch"</strong> (or whichever indicator you're using)</p>
    </div>
  </div>

  <div class="sp-step">
    <div class="sp-step__number">2</div>
    <div class="sp-step__content">
      <h4>Choose Alert Condition</h4>
      <p>Select <strong>"Any alert() function call"</strong> from the Condition dropdown (this catches ALL signals from the indicator)</p>
    </div>
  </div>

  <div class="sp-step">
    <div class="sp-step__number">3</div>
    <div class="sp-step__content">
      <h4>Name Your Alert</h4>
      <p>Give it a clear name like <code>Pentarch BTC 1H - All Signals</code></p>
    </div>
  </div>

  <div class="sp-step sp-step--critical">
    <div class="sp-step__number">4</div>
    <div class="sp-step__content">
      <h4>⚠️ CRITICAL: Set Frequency</h4>
      <p>Choose <strong>"Once Per Bar Close"</strong> (NOT "Once Per Bar"). This prevents false signals and repainting.</p>
    </div>
  </div>

  <div class="sp-step">
    <div class="sp-step__number">5</div>
    <div class="sp-step__content">
      <h4>Configure Notifications</h4>
      <p>Check: Mobile Push, Email, Webhook (as needed)</p>
    </div>
  </div>

  <div class="sp-step sp-step--success">
    <div class="sp-step__number">6</div>
    <div class="sp-step__content">
      <h4>✅ Create Alert</h4>
      <p>Click "Create" button. You'll now receive notifications when signals fire!</p>
    </div>
  </div>

</div>
```

**Pros:** No diagram confusion, very clear instructions, progressive numbering
**Cons:** Takes more vertical space

---

## My Recommendation

**Replace the sequence diagram with Option 1 (Simple Step Flow)** because:
1. Still visual (you liked diagrams!)
2. Much easier to follow than sequence diagram
3. Highlights the critical "Bar Close" setting
4. Shows the complete flow including "wait for signal" phase

---

## CSS for Option 3 (if you want numbered steps instead)

Add to `css/visual-enhancements.css`:

```css
.sp-step-list {
  margin: 2rem 0;
}

.sp-step {
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: rgba(0, 188, 212, 0.05);
  border-left: 4px solid var(--md-accent-fg-color);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.sp-step:hover {
  background: rgba(0, 188, 212, 0.1);
  transform: translateX(4px);
}

.sp-step__number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--md-accent-fg-color);
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 50%;
}

.sp-step__content h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: var(--md-accent-fg-color);
}

.sp-step__content p {
  margin: 0;
  opacity: 0.9;
}

.sp-step--critical {
  border-left-color: #ff5722;
  background: rgba(255, 87, 34, 0.08);
}

.sp-step--critical .sp-step__number {
  background: #ff5722;
  color: #fff;
}

.sp-step--success {
  border-left-color: #4caf50;
  background: rgba(76, 175, 80, 0.08);
}

.sp-step--success .sp-step__number {
  background: #4caf50;
  color: #fff;
}
```

---

**Which style do you prefer?**
1. Option 1: Simple flowchart (still a diagram)
2. Option 2: Visual checklist (minimal diagram)
3. Option 3: Numbered steps (no diagram, just styled list)

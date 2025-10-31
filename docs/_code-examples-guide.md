---
title: Interactive Code Examples Guide
description: Learn how to use interactive code features in Signal Pilot documentation - tabbed examples, highlighted lines, annotations, and more.
---

# Interactive Code Examples Guide

This page demonstrates the interactive code features available in our documentation. Use these patterns when contributing or reading technical content.

---

## ✨ Features Available

### 1. **Tabbed Code Examples**
Show multiple scenarios or languages side-by-side:

=== "Basic Alert Setup"

    ```pinescript linenums="1"
    //@version=5
    indicator("Basic Alert", overlay=true)

    // Simple moving average
    sma = ta.sma(close, 20)

    // Plot
    plot(sma, color=color.blue, linewidth=2)

    // Alert condition
    alertcondition(ta.crossover(close, sma),
                   title="Bullish Cross",
                   message="Price crossed above SMA20")
    ```

=== "Advanced Alert with Filters"

    ```pinescript linenums="1"
    //@version=5
    indicator("Advanced Alert", overlay=true)

    // Inputs
    length = input.int(20, "SMA Length")
    volumeFilter = input.bool(true, "Volume Filter")

    // Moving average
    sma = ta.sma(close, length)

    // Volume condition
    highVolume = volume > ta.sma(volume, 20) * 1.5

    // Alert condition with filter
    bullishCross = ta.crossover(close, sma)
    validSignal = volumeFilter ? (bullishCross and highVolume) : bullishCross

    // Plot
    plot(sma, color=color.blue, linewidth=2)
    plotshape(validSignal, style=shape.triangleup,
              location=location.belowbar, color=color.green)

    // Alert
    alertcondition(validSignal,
                   title="Filtered Bullish Cross",
                   message="Valid signal with volume confirmation")
    ```

=== "JSON Webhook Payload"

    ```json linenums="1"
    {
      "indicator": "Pentarch v1.0",
      "signal": "TD_SELL",
      "symbol": "{{ticker}}",
      "timeframe": "{{interval}}",
      "price": {{close}},
      "timestamp": "{{timenow}}",
      "confidence": "high"
    }
    ```

---

### 2. **Highlighted Lines**
Draw attention to specific lines:

```python linenums="1" hl_lines="5 8-10"
# Python webhook receiver example

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    data = request.json  # (1)

    # Validate signal
    if data['confidence'] == 'high':  # (2)
        symbol = data['symbol']
        signal = data['signal']
        process_trade(symbol, signal)  # (3)

    return jsonify({'status': 'received'})
```

1. Parse incoming JSON from TradingView
2. Check confidence level before processing
3. Execute trade logic if validation passes

---

### 3. **Line Numbers & Linking**
Click line numbers to link directly:

```javascript linenums="1"
// Discord webhook formatter
function formatAlert(data) {
  return {
    embeds: [{
      title: `${data.signal} Signal`,
      description: `${data.symbol} on ${data.timeframe}`,
      color: data.signal.includes('BUY') ? 0x00ff00 : 0xff0000,
      fields: [
        { name: 'Price', value: data.price.toString(), inline: true },
        { name: 'Confidence', value: data.confidence, inline: true }
      ],
      timestamp: new Date().toISOString()
    }]
  };
}
```

---

### 4. **Inline Code Highlighting**
Use `#!python def calculate():` for inline syntax highlighting, or emphasize with `#!javascript const value = 42` inline.

**Examples:**
- Alert condition: `#!pinescript ta.crossover(close, sma)`
- JSON key: `#!json "message": "{{close}}"`
- Python check: `#!python if signal == 'BUY':`

---

### 5. **Interactive Checklists**
Track your progress:

#### Alert Setup Checklist

- [x] TradingView Premium account (required for webhooks)
- [x] Signal Pilot indicator installed
- [ ] Alert created with "Once Per Bar Close" setting
- [ ] Webhook URL configured (if using automation)
- [ ] Test alert sent successfully
- [ ] Notification delivery confirmed

#### Webhook Integration

- [ ] Webhook endpoint created
- [ ] SSL certificate installed (https required)
- [ ] JSON parsing implemented
- [ ] Error handling added
- [ ] Logs monitoring setup
- [ ] Production testing completed

---

### 6. **Code Annotations**
Add numbered explanations:

```pinescript linenums="1"
//@version=5
indicator("Pentarch Simplified", overlay=true)

// Settings
tdLength = input.int(9, "TD Length")  // (1)
showLabels = input.bool(true, "Show Labels")  // (2)

// TD Sequential Logic
var int tdCount = 0  // (3)
tdBuy = close < close[4]  // (4)

if tdBuy
    tdCount := tdCount + 1
else
    tdCount := 0

// Display
if tdCount >= 9 and showLabels  // (5)
    label.new(bar_index, low, "TD",
              style=label.style_label_up,
              color=color.green)
```

1. **TD Length**: Number of bars to look back for TD Sequential
2. **Show Labels**: Toggle label display on/off
3. **tdCount**: Persistent variable tracks consecutive TD signals
4. **TD Buy Condition**: Price must close below close 4 bars ago
5. **Display Logic**: Only show label when count reaches 9 and labels enabled

---

### 7. **Multi-Language Tabs**
Show same concept in different languages:

=== "Python"

    ```python
    import requests

    def send_to_discord(webhook_url, message):
        payload = {
            'content': message,
            'username': 'Signal Pilot Bot'
        }
        response = requests.post(webhook_url, json=payload)
        return response.status_code == 204
    ```

=== "Node.js"

    ```javascript
    const axios = require('axios');

    async function sendToDiscord(webhookUrl, message) {
      const payload = {
        content: message,
        username: 'Signal Pilot Bot'
      };
      const response = await axios.post(webhookUrl, payload);
      return response.status === 204;
    }
    ```

=== "cURL"

    ```bash
    curl -X POST https://discord.com/api/webhooks/YOUR_WEBHOOK \
      -H "Content-Type: application/json" \
      -d '{
        "content": "TD_SELL signal on BTCUSDT",
        "username": "Signal Pilot Bot"
      }'
    ```

---

## 💡 Best Practices

!!! tip "When to Use Each Feature"
    - **Tabs**: Multiple approaches or languages
    - **Highlighting**: Draw attention to critical lines
    - **Annotations**: Explain complex logic step-by-step
    - **Checklists**: Setup guides and prerequisites
    - **Inline highlighting**: Quick syntax references

!!! example "Real-World Usage"
    See these features in action:
    - [How to Set Alerts](how-to-alerts.md) - Tabbed examples
    - [Pentarch v1.0](pentarch-v10.md) - Code annotations
    - [Prerequisites](start-prerequisites.md) - Interactive checklists

---

## 🎨 Syntax Support

Supported languages for syntax highlighting:

| Language | Code | Example |
|----------|------|---------|
| PineScript | `pinescript` | TradingView indicators |
| Python | `python` | Webhook receivers |
| JavaScript | `javascript`, `js` | Node.js automations |
| JSON | `json` | API payloads |
| Bash | `bash`, `sh` | Shell scripts |
| YAML | `yaml` | Configuration files |

---

**Need help?** Check the [MkDocs Material documentation](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/) for more advanced features.

# How to Set TradingView Alerts

This guide explains the process of setting up reliable, close-confirmed alerts for <span class="signal-pilot-brand">Signal Pilot</span> indicators. Proper alert configuration ensures signals are never missed and false intrabar notifications are avoided.

---

## 🎯 Why Alerts Matter
<span style="color: #0aa1d5; font-weight: 600;">Critical Setup</span>

**Alerts provide:**
- Instant notifications when signals fire
- The ability to trade without watching charts 24/7
- Automated signal notifications via webhooks
- Coverage of multiple markets simultaneously

**Key principle:** The "Once Per Bar Close" setting avoids repainting and false signals.

---

## 🔔 Quick Setup (Step-by-Step)

These steps work for **any <span class="signal-pilot-brand">Signal Pilot</span> indicator** (Pentarch, Omnideck, Janus, etc.).

### 1️⃣ Step 1: Open Alert Dialog

**The alert dialog can be opened** by right-clicking the chart and selecting **"Add alert..."**

The keyboard shortcut **Alt+A** (Windows) or **Cmd+A** (Mac) also opens the alert dialog.

---

### 2️⃣ Step 2: Select Indicator

**The Condition dropdown** displays available <span class="signal-pilot-brand">Signal Pilot</span> indicators.

Examples:
- "Pentarch v8.9"
- "Omnideck v1.0"
- "Janus Atlas v1.0"

**Note:** The indicator is typically already added to the chart before creating the alert.

---

### 3️⃣ Step 3: Choose Event

**The Event dropdown** displays available signals for the selected indicator.

**Common Pentarch events:**
- `IGN Event` - Potential long entry
- `CAP Event` - Potential exit long
- `BDN Event` - Potential short entry / exit long
- `TD Event` - Early-cycle warning
- `WRN Event` - Late-cycle warning

**Common Janus events:**
- `New Support Level`
- `New Resistance Level`
- `FVG Created`

**Common Omnideck events:**
- (Includes all Pentarch events plus more)

---

### 4️⃣ Step 4: Configure Options (CRITICAL)
<span style="color: #dc2626; font-weight: 600;">⚠️ Most Important Step</span>

**Options** → The setting **"Once Per Bar Close"** is commonly selected.

This is the **most important setting**:
- ✅ Alerts only fire when the signal is CONFIRMED (bar closed)
- ✅ No disappearing signals
- ✅ No repainting
- ❌ WITHOUT this: False intrabar alerts will occur

**Expiration:**
- "Don't expire" creates permanent alerts
- An expiration date can be set for temporary alerts

**Actions:**
- ✅ "Notify on App" enables mobile notifications
- ✅ "Show Popup" enables desktop notifications
- ✅ "Send Email" enables email notifications (optional)
- ✅ "Webhook URL" enables automation (optional)

---

### 5️⃣ Step 5: Name Your Alert

**The alert name field** allows for clear, descriptive identification.

**Good alert names:**
- "BTC Daily IGN - Long Entry"
- "ETH 4H CAP - Exit Signal"
- "SPY 1H BDN - Short Entry"

**Bad alert names:**
- "Alert 1"
- "Test"
- "Signal"

**Why naming matters:**
- Multiple alerts can accumulate
- Clear names enable quick action
- Organization and management become easier

---

### Step 6: (Optional) Customize Message

**The Message field** accepts custom text or placeholders.

**Simple message:**
```
Pentarch IGN signal fired on {{ticker}} {{interval}}
Time: {{timenow}}
Price: {{close}}
```

**JSON format (for webhooks/automation):**
```json
{
  "ticker": "{{ticker}}",
  "interval": "{{interval}}",
  "time": "{{timenow}}",
  "event": "{{alert_name}}",
  "price": {{close}},
  "high": {{high}},
  "low": {{low}}
}
```

**Available placeholders:**
- `{{ticker}}` - Symbol name (e.g., BTCUSD)
- `{{interval}}` - Timeframe (e.g., 1D, 4H)
- `{{timenow}}` - Timestamp
- `{{alert_name}}` - Your alert name
- `{{close}}` - Close price
- `{{high}}` - High price
- `{{low}}` - Low price
- `{{volume}}` - Volume

---

### Step 7: Create Alert

**The "Create" button** finalizes and activates the alert.

The alert becomes active immediately.

---

## ✅ What Success Looks Like

**When properly configured:**

1. **The alert appears in the alerts list**
   - The "Alerts" button is located in the top toolbar
   - Active alerts display in the list
   - Status shows as "Active"

2. **Notifications arrive only on bar close**
   - No mid-bar spam occurs
   - Only confirmed signals trigger notifications
   - Alerts remain reliable and actionable

3. **Notifications are delivered via chosen methods**
   - Phone notification (if enabled)
   - Email (if enabled)
   - Pop-up on screen (if enabled)
   - Webhook sent (if configured)

**Example notification:**
```
BTC Daily IGN - Long Entry

Pentarch IGN signal fired on BTCUSD 1D
Time: 2025-10-29 16:00:00
Price: 67,500
```

---

## 🎨 Alert Management Best Practices

### Organize Your Alerts

**By symbol:**
- BTC alerts
- ETH alerts
- Stock alerts

**By timeframe:**
- Daily alerts
- 4H alerts
- 1H alerts

**By signal type:**
- Entry alerts (IGN, BDN)
- Exit alerts (CAP, WRN)
- Level alerts (Support, Resistance)

---

### Considerations for Alert Volume

**Maximum recommended:** 10-15 active alerts

**Why:**
- Too many alerts can lead to alert fatigue
- Alerts may start being ignored
- Management becomes harder

**Better approach:**
- Focus on 3-5 main symbols
- Alert only on key signals (IGN, CAP, BDN)
- TD and WRN can be skipped (unless specifically wanted)
- Augury Grid provides scanning instead of alerting 20+ symbols

---

### Test Your Alerts

**Before relying on alerts:**

1. A test alert can be created on a low timeframe (5m or 15m)
2. The next signal typically arrives quickly
3. Notification receipt can be verified
4. Phone notification can be checked
5. Email arrival can be confirmed (if enabled)

**If not working:**
- TradingView notification settings can be checked
- Phone app permissions can be verified
- Email spam folder can be reviewed
- The [Troubleshooting Guide](ref-troubleshooting.md) provides additional help

---

## 🚨 Common Mistakes & Fixes

### Mistake #1: Not Using "Once Per Bar Close"

**Problem:** Alerts fire intrabar, then signals disappear

**Resolution:**
1. Incorrect alerts can be deleted
2. New alerts can be created
3. The **"Once Per Bar Close"** setting is commonly selected
4. Settings can be saved

**Why this matters:** Intrabar signals are preliminary and can change. Only closed-bar signals are final.

---

### Mistake #2: Vague Alert Names

**Problem:** An alert labeled "Signal 1" provides no context

**Resolution:**
- The symbol can be included: BTC, ETH, SPY
- The timeframe can be specified: Daily, 4H, 1H
- The event can be noted: IGN, CAP, BDN
- Example: "BTC 4H IGN Long"

---

### Mistake #3: Too Many Alerts

**Problem:** Alert spam creates overwhelming notifications

**Resolution:**
- Low-priority alerts can be deleted
- Focus can be narrowed to the best 3-5 markets
- Alerts can be limited to entry/exit signals
- Augury Grid can be used for scanning

---

### Mistake #4: Wrong Indicator Selected

**Problem:** Alerts don't fire or fire on wrong signals

**Resolution:**
- The indicator's presence on the chart can be verified
- Indicator version can be matched with alert settings
- Event name correctness can be confirmed
- Testing with a recent historical signal can be performed

---

### Mistake #5: Mobile Notifications Not Working

**Problem:** Alerts fire but phone notifications aren't received

**Resolution:**

**TradingView App:**
- App → Profile → Settings → Notifications → All options can be enabled

**iPhone:**
- Settings → Notifications → TradingView → Notifications can be allowed

**Android:**
- Settings → Apps → TradingView → Notifications → Notifications can be enabled

**Also worth checking:**
- Do Not Disturb mode status
- Phone internet connection
- TradingView app update status

See [Troubleshooting: Alerts Not Working](ref-troubleshooting.md#alerts-not-firing)

---

## 🔗 Webhook Automation (Advanced)

**For automating trades with bots:**

### Webhook URL Setup

1. A webhook URL can be obtained from your automation platform:
   - 3Commas
   - Alertatron
   - Custom trading bot

2. In alert settings:
   - "Webhook URL" can be checked
   - The webhook URL can be pasted
   - The message can be configured in JSON format

3. Webhook testing process:
   - An alert can be triggered (low timeframe provides quick testing)
   - Webhook receipt can be verified
   - Bot response can be checked

### Example Webhook Message

```json
{
  "signal": "{{alert_name}}",
  "ticker": "{{ticker}}",
  "interval": "{{interval}}",
  "price": {{close}},
  "timestamp": "{{timenow}}",
  "action": "enter_long",
  "stop_loss": {{low}},
  "take_profit": {{high}}
}
```

**Important:** Automated trading is commonly tested on paper/demo accounts first.

---

## 📱 Mobile App Alert Setup

### iOS (iPhone/iPad)

1. The TradingView app can be downloaded from the App Store
2. The same account credentials can be used to log in
3. Profile → Settings → Notifications can be accessed
4. "Push Notifications" can be enabled
5. Sound can be enabled
6. "Important Alerts First" can be enabled

**iPhone System Settings:**
- Settings → Notifications → TradingView
- Allow Notifications: can be turned ON
- Sounds: can be turned ON
- Badges: can be turned ON
- Show on Lock Screen: can be turned ON

---

### Android

1. The TradingView app can be downloaded from the Play Store
2. The same account credentials can be used to log in
3. Profile → Settings → Notifications can be accessed
4. "Push Notifications" can be enabled
5. Sound can be enabled

**Android System Settings:**
- Settings → Apps → TradingView → Notifications
- Allow notifications: can be turned ON
- Override Do Not Disturb: can be turned ON (optional)

---

## ✅ Alert Checklist

**Before considering your alert setup complete:**

- [ ] Alerts are set to "Once Per Bar Close"
- [ ] Alerts have clear, descriptive names
- [ ] Notification receipt has been tested and confirmed
- [ ] Mobile app notifications are working
- [ ] Email notifications are working (if enabled)
- [ ] Alert count remains manageable (10-15 max)
- [ ] Alerts are organized by symbol/timeframe/type
- [ ] Webhook has been configured and tested (if automating)

---

## 📚 Related Guides

**New to <span class="signal-pilot-brand">Signal Pilot</span>?**
- [Quick Start](start-quick.md) - Learn Pentarch in 5 minutes
- [Onboarding Checklist](start-onboarding.md) - Your first 7 days

**Having issues?**
- [Troubleshooting: Alerts](ref-troubleshooting.md#alert-issues)
- [FAQ: Alerts](about-faq.md#how-do-i-know-if-alerts-are-working)

**Want to automate?**
- [Webhook Guide](how-to-webhooks.md) - Automation setup
- [FAQ: Automation](about-faq.md#can-i-automate-trading-with-these-indicators)

**Need help?**
- [Support](about-support.md) - Contact information

---

## 🎓 Pro Tips

1. **Higher timeframe alerts** (Daily, 4H) tend to be cleaner and more reliable
2. **Testing alerts on a 15m chart** provides quick feedback before trusting them
3. **Descriptive names** make future management easier
4. **Selective alerting** - IGN, CAP, BDN is usually sufficient
5. **Monthly expiration reminders** help keep alerts current
6. **Screenshot documentation** of alert settings makes recreation easier
7. **Backup list maintenance** documents the alert strategy

---

**Alerts enable automated signal reception.** The setup process can begin now.

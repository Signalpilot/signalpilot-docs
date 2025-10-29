# How to Set TradingView Alerts

Learn how to set up reliable, close-confirmed alerts for Signal Pilot indicators. Proper alert configuration ensures you never miss a signal and never get false intrabar notifications.

---

## Why Alerts Matter

**Alerts let you:**
- Get notified instantly when signals fire
- Trade without watching charts 24/7
- Automate signal notifications via webhooks
- Stay on top of multiple markets simultaneously

**Key principle:** Always use "Once Per Bar Close" to avoid repainting and false signals.

---

## 🔔 Quick Setup (Step-by-Step)

These steps work for **any Signal Pilot indicator** (Pentarch, Omnideck, Janus, etc.).

### Step 1: Open Alert Dialog

**Right-click your chart** → Click **"Add alert..."**

Or use keyboard shortcut: **Alt+A** (Windows) or **Cmd+A** (Mac)

---

### Step 2: Select Indicator

**Condition dropdown** → Choose your Signal Pilot indicator

Examples:
- "Pentarch v8.9"
- "Omnideck v1.7.0"
- "Janus Atlas v3.12.2"

**Note:** Make sure the indicator is already added to your chart before creating the alert.

---

### Step 3: Choose Event

**Event dropdown** → Select specific signal

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

### Step 4: Configure Options (CRITICAL!)

**Options** → Set **"Once Per Bar Close"**

This is the **most important setting**:
- ✅ Only alerts when signal is CONFIRMED (bar closed)
- ✅ No disappearing signals
- ✅ No repainting
- ❌ WITHOUT this: You'll get false intrabar alerts

**Expiration:**
- Set to "Don't expire" for permanent alerts
- Or set expiration date if you want temporary alerts

**Actions:**
- ✅ Check "Notify on App" (mobile notifications)
- ✅ Check "Show Popup" (desktop notifications)
- ✅ Check "Send Email" (optional, email notifications)
- ✅ Check "Webhook URL" (optional, for automation)

---

### Step 5: Name Your Alert

**Alert name field** → Give it a clear, descriptive name

**Good alert names:**
- "BTC Daily IGN - Long Entry"
- "ETH 4H CAP - Exit Signal"
- "SPY 1H BDN - Short Entry"

**Bad alert names:**
- "Alert 1"
- "Test"
- "Signal"

**Why naming matters:**
- You'll have many alerts
- Clear names help you act quickly
- Easier to organize and manage

---

### Step 6: (Optional) Customize Message

**Message field** → Add custom text or use placeholders

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

**Click "Create" button**

Your alert is now active!

---

## ✅ What Success Looks Like

**When properly set up, you'll:**

1. **See alert in your alerts list**
   - Click "Alerts" button (top toolbar)
   - Your alert appears in the list
   - Status shows as "Active"

2. **Receive notifications only on bar close**
   - No mid-bar spam
   - Only confirmed signals
   - Reliable, actionable alerts

3. **Get notified via your chosen methods**
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

### Don't Over-Alert

**Maximum recommended:** 10-15 active alerts

**Why:**
- Too many = alert fatigue
- You'll start ignoring them
- Harder to manage

**Better approach:**
- Focus on 3-5 main symbols
- Only alert on key signals (IGN, CAP, BDN)
- Skip TD and WRN (unless you specifically want them)
- Use Augury Grid for scanning instead of alerting 20+ symbols

---

### Test Your Alerts

**Before relying on alerts:**

1. Create test alert on low timeframe (5m or 15m)
2. Wait for signal (shouldn't take long)
3. Verify you receive notification
4. Check notification on phone
5. Confirm email arrives (if enabled)

**If not working:**
- Check TradingView notification settings
- Check phone app permissions
- Check email spam folder
- See [Troubleshooting Guide](ref-troubleshooting.md)

---

## 🚨 Common Mistakes & Fixes

### Mistake #1: Not Using "Once Per Bar Close"

**Problem:** Alerts firing intrabar, then signals disappearing

**Fix:**
1. Delete incorrect alerts
2. Create new alerts
3. Set to **"Once Per Bar Close"**
4. Save

**Why this matters:** Intrabar signals are preliminary and can change. Only closed-bar signals are final.

---

### Mistake #2: Vague Alert Names

**Problem:** Getting alert "Signal 1" and not knowing what it means

**Fix:**
- Include symbol: BTC, ETH, SPY
- Include timeframe: Daily, 4H, 1H
- Include event: IGN, CAP, BDN
- Example: "BTC 4H IGN Long"

---

### Mistake #3: Too Many Alerts

**Problem:** Alert spam, overwhelming notifications

**Fix:**
- Delete low-priority alerts
- Focus on best 3-5 markets
- Only alert on entry/exit signals
- Use Augury Grid for scanning

---

### Mistake #4: Wrong Indicator Selected

**Problem:** Alert not firing or firing on wrong signals

**Fix:**
- Ensure indicator is on chart
- Check indicator version matches alert
- Confirm event name is correct
- Test with recent historical signal

---

### Mistake #5: Mobile Notifications Not Working

**Problem:** Alerts firing but not receiving phone notifications

**Fix:**

**TradingView App:**
- App → Profile → Settings → Notifications → Enable all

**iPhone:**
- Settings → Notifications → TradingView → Allow Notifications

**Android:**
- Settings → Apps → TradingView → Notifications → Enable

**Also check:**
- Do Not Disturb mode is off
- Phone has internet connection
- TradingView app is updated

See [Troubleshooting: Alerts Not Working](ref-troubleshooting.md#alerts-not-firing)

---

## 🔗 Webhook Automation (Advanced)

**For automating trades with bots:**

### Webhook URL Setup

1. Get webhook URL from your automation platform:
   - 3Commas
   - Alertatron
   - Custom trading bot

2. In alert settings:
   - Check "Webhook URL"
   - Paste your webhook URL
   - Configure message in JSON format

3. Test webhook:
   - Trigger alert (use low timeframe for quick test)
   - Verify webhook received
   - Check bot response

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

**Important:** Always test automated trading on paper/demo account first!

---

## 📱 Mobile App Alert Setup

### iOS (iPhone/iPad)

1. Download TradingView app from App Store
2. Log in with same account
3. Tap Profile → Settings → Notifications
4. Enable "Push Notifications"
5. Enable sound
6. Enable "Important Alerts First"

**iPhone System Settings:**
- Settings → Notifications → TradingView
- Allow Notifications: ON
- Sounds: ON
- Badges: ON
- Show on Lock Screen: ON

---

### Android

1. Download TradingView app from Play Store
2. Log in with same account
3. Tap Profile → Settings → Notifications
4. Enable "Push Notifications"
5. Enable sound

**Android System Settings:**
- Settings → Apps → TradingView → Notifications
- Allow notifications: ON
- Override Do Not Disturb: ON (optional)

---

## ✅ Alert Checklist

**Before considering your alert setup complete:**

- [ ] Alerts set to "Once Per Bar Close"
- [ ] Alerts have clear, descriptive names
- [ ] Tested and confirmed receiving notifications
- [ ] Mobile app notifications working
- [ ] Email notifications working (if enabled)
- [ ] Not overwhelmed with too many alerts (10-15 max)
- [ ] Organized alerts by symbol/timeframe/type
- [ ] Webhook configured and tested (if automating)

---

## 📚 Related Guides

**New to Signal Pilot?**
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

1. **Create alerts on higher timeframes first** (Daily, 4H) - cleaner, more reliable
2. **Test alerts on 15m chart** before trusting them - quick feedback
3. **Use descriptive names** - you'll thank yourself later
4. **Don't alert on every signal type** - just IGN, CAP, BDN is usually enough
5. **Set expiration reminders** - refresh monthly to stay current
6. **Screenshot your alert settings** - easy to recreate if needed
7. **Keep a backup list** - document your alert strategy

---

**Ready to receive signals automatically?** Set up your first alert now!

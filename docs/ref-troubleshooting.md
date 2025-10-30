# Troubleshooting Guide

Having issues with <span class="signal-pilot-brand">Signal Pilot</span> indicators? This guide covers common problems and their solutions. Can't find your issue? [Contact Support](about-support.md).

---

## 🚨 Quick Diagnostic Checklist

Before diving into specific issues, run through this quick checklist:

- [ ] TradingView paid subscription active (Essential, Pro, or Pro+)
- [ ] <span class="signal-pilot-brand">Signal Pilot</span> subscription active and access granted
- [ ] Using latest indicator version (check version number)
- [ ] Browser cache cleared recently
- [ ] Sufficient chart history loaded (at least 500 bars)
- [ ] Internet connection stable
- [ ] TradingView servers operational (check status.tradingview.com)

---

## 📊 Signal & Display Issues

### 🔍 Signals Not Appearing on Chart
<span style="color: #dc2626; font-weight: 600;">Critical Issue</span>

**Symptoms:** Indicator loaded but no signals showing

**Common Causes & Solutions:**

#### 1. Insufficient Chart History

**Problem:** Not enough historical data loaded for indicator calculations

**Solution:**
```
1. Scroll left on your chart to load more history
2. Aim for at least 500-1000 bars of data
3. Wait a few seconds for indicator to recalculate
4. Signals should appear after recalculation
```

#### 2. Wrong Timeframe for Current Market Conditions

**Problem:** Timeframe too high/low for current volatility

**Solution:**
```
Daily chart: Good for trending markets, sparse in ranges
4H chart: Balanced signal frequency
1H chart: More frequent signals
15m chart: Very frequent, best for active markets

Try switching timeframes to see if signals appear.
```

#### 3. Market in Tight Range

**Problem:** Pentarch detects reversals—no reversals in tight ranges

**Solution:**
```
This is NORMAL behavior. Indicators don't force signals.
- Check a different, more volatile symbol
- Wait for breakout or increased volatility
- Or use Janus Atlas for range-based level trading
```

#### 4. Indicator Not Fully Loaded

**Problem:** Indicator loaded but not calculating

**Solution:**
```
1. Remove indicator from chart
2. Refresh browser (Ctrl+F5 or Cmd+Shift+R)
3. Re-add indicator from Indicators menu
4. Wait 5-10 seconds for initial calculation
```

**Still not working?** Check indicator version—you might have an outdated version that was deprecated.

---

### ⚠️ Signals Appearing Then Disappearing
<span style="color: #f59e0b; font-weight: 600;">Common Confusion</span>

**Symptoms:** Signals show up during bar, vanish before you can act

**Root Cause:** This is NORMAL intrabar behavior—not a bug!

**Why It Happens:**
- Indicators calculate on every price tick
- Preliminary signals can appear mid-bar
- Only CLOSED bar signals are final
- This prevents repainting

**Solution:** Use proper alert settings

#### Fix Alert Settings:

```
1. Right-click chart → Add Alert
2. Condition: Select your indicator
3. Event: Choose specific event (e.g., "IGN Event")
4. Options: Set to "Once Per Bar Close" ← CRITICAL
5. Create alert
```

**What "Once Per Bar Close" does:**
- ✅ Only triggers on confirmed, closed bars
- ✅ No disappearing signals
- ✅ Reliable, actionable alerts
- ❌ Won't notify you of intrabar preliminary signals

**Remember:** Intrabar signals are "maybe" — closed bar signals are "confirmed."

---

### 🎨 Wrong Signal Colors / Visual Issues
<span style="color: #10b981; font-weight: 600;">Display Fix</span>

**Symptoms:** Signals showing but colors are off or hard to see

**Solutions:**

#### Light/Dark Mode Mismatch
```
1. Click indicator name on chart
2. Go to "Style" tab
3. Adjust colors manually
4. Or switch TradingView theme (top-right)
```

#### Overlapping Indicators
```
Problem: Multiple indicators using same colors
Solution:
- Change one indicator's color scheme
- Use different visual styles (shapes vs. text)
- Load fewer indicators on same chart
```

#### Tiny Signals / Can't See
```
1. Click indicator settings
2. "Style" tab
3. Increase "Size" setting
4. Enable/disable labels as needed
```

---

## 🔔 Alert Issues

### 🔕 Alerts Not Firing
<span style="color: #dc2626; font-weight: 600;">Critical Issue</span>

**Symptoms:** Alert created but no notifications received

**Diagnostic Steps:**

#### Step 1: Verify Alert Is Active

```
1. Click "Alert" button (top toolbar)
2. Check your alerts list
3. Look for your <span class="signal-pilot-brand">Signal Pilot</span> alert
4. Ensure it's not expired or paused
```

#### Step 2: Check Alert Trigger Condition

```
WRONG: "Any alert() function call"
WRONG: "Every time indicator plots"

RIGHT: "Once Per Bar Close"
RIGHT: Specific event selected (e.g., "IGN Event")
```

#### Step 3: Test on Lower Timeframe

```
1. Create test alert on 5m or 15m chart
2. Wait for next signal (shouldn't take long)
3. Verify you receive notification
4. If working: Your original alert was set up wrong
5. If not working: Notification settings issue
```

#### Step 4: Check Notification Settings

**On Desktop:**
```
1. TradingView → Profile Icon → Settings
2. Notifications tab
3. Ensure "Show pop-ups" enabled
4. Check email address is correct
5. Check email inbox AND spam folder
```

**On Mobile:**
```
1. Phone Settings → Apps → TradingView
2. Enable "Notifications"
3. Enable "Sound"
4. Enable "Banners/Alerts"
5. Check "Do Not Disturb" is off
```

---

### 🔊 Too Many Alerts / Alert Spam
<span style="color: #f59e0b; font-weight: 600;">Alert Management</span>

**Symptoms:** Constant notifications, overwhelming

**Solutions:**

#### 1. Change to Higher Timeframe
```
Currently on 15m? → Try 1H
Currently on 1H? → Try 4H
Currently on 4H? → Try Daily

Higher timeframes = fewer, higher-quality signals
```

#### 2. Be More Selective with Events
```
Instead of alerting on ALL events:

Longs only:
- Alert only on IGN (entry)
- Alert only on CAP (exit warning)

Shorts only:
- Alert only on WRN (exit warning)
- Alert only on BDN (short entry)
```

#### 3. Use Multiple Symbols Smart
```
Don't create same alert on 20 symbols!

Better approach:
- Use Augury Grid to scan multiple symbols
- Create alerts only for top 3-5 watchlist symbols
- Rotate symbols weekly based on volatility
```

#### 4. Add Level Filters
```
Combine Pentarch + Janus Atlas:
- Wait for signal AT key level
- Reduces false signals
- Improves quality

Example: Only take IGN signals within 2% of major support
```

---

### Alerts Triggering on Old Bars

**Symptoms:** Getting alerts for historical bars when indicator first loads

**Cause:** Alert condition set to "All" bars instead of "Once Per Bar Close"

**Solution:**
```
1. Delete the problematic alert
2. Create new alert
3. Set "Options" to "Once Per Bar Close"
4. Ensure "Only Once" is NOT checked (unless you want one-time alert)
5. Save alert
```

---

## 🔑 Access & Loading Issues

### ❌ "Indicator Not Found" in Search
<span style="color: #dc2626; font-weight: 600;">Access Issue</span>

**Symptoms:** Can't find <span class="signal-pilot-brand">Signal Pilot</span> indicators in TradingView search

**Possible Causes:**

#### 1. Access Not Yet Granted
```
Timeline:
- Purchase → Receive email → Provide TradingView username
- Access granted within 24 hours (usually faster)
- Check email for confirmation

Status check:
1. Log into signalpilot.io account dashboard
2. Check "Indicator Access" status
3. If still pending: Contact support with order number
```

#### 2. Wrong TradingView Account
```
Did you provide the correct username?

Check:
1. Log out of TradingView
2. Log in to the account you provided to <span class="signal-pilot-brand">Signal Pilot</span>
3. Search again for indicators
```

#### 3. Indicator Name Changed/Updated
```
Search terms that work:
- "<span class="signal-pilot-brand">Signal Pilot</span>"
- "Pentarch"
- "Janus Atlas"
- "Omnideck"

Try searching just "Pentarch" instead of "Pentarch v8.9"
```

#### 4. Private/Invite-Only Script
```
<span class="signal-pilot-brand">Signal Pilot</span> indicators are invite-only.
You must be explicitly granted access.

Cannot find in public indicator library.
Must appear in YOUR indicator list after invite.
```

---

### Indicator Shows "Loading..." Forever

**Symptoms:** Indicator added but stuck on "Loading..." or "Calculating..."

**Solutions:**

#### Quick Fix:
```
1. Remove indicator
2. Refresh browser (Ctrl+F5 / Cmd+Shift+R)
3. Clear browser cache
4. Add indicator again
5. Wait 30 seconds
```

#### If Quick Fix Doesn't Work:

**Check TradingView Server Status:**
- Visit status.tradingview.com
- Look for ongoing incidents
- Wait for resolution if servers are degraded

**Try Different Browser:**
```
Chrome → Try Firefox
Firefox → Try Edge
Safari → Try Chrome

Some browsers have conflicts with specific scripts
```

**Check Browser Extensions:**
```
Ad blockers and privacy extensions can interfere.

Test:
1. Open incognito/private window
2. Log in to TradingView
3. Try loading indicator
4. If works: Disable extensions one by one to find culprit
```

---

### Indicator Suddenly Disappeared from Chart

**Symptoms:** Indicator was working, now it's gone

**Common Causes:**

#### 1. Indicator Updated (New Version)
```
Old version deprecated → You need to add new version

Solution:
1. Check email for update notification
2. Search for latest version (e.g., "Pentarch v8.9" → "Pentarch v9.0")
3. Add new version to chart
4. Remove old alerts
5. Create new alerts with new version
```

#### 2. Chart Template Issue
```
If using chart templates/layouts:

1. Don't save templates with private indicators
2. Templates can't share invite-only scripts
3. Add indicators manually to each chart
```

#### 3. Access Revoked
```
Rare, but happens if:
- Subscription expired
- Payment failed
- Refund processed

Check:
1. Subscription status at signalpilot.io
2. Email for expiration notices
3. Payment method is current
```

#### 4. TradingView Account Change
```
Switched TradingView accounts?
- Access is per-account
- Need to request access for new account
- Contact support with new username
```

---

## ⚙️ Configuration Issues

### Settings Not Saving

**Symptoms:** Change indicator settings, they revert when you reload

**Solution:**

```
TradingView requires you to SAVE the layout:

1. Make your indicator changes
2. Click "Layouts" (top of chart)
3. Click "Save" or "Save As..."
4. Give it a name
5. Click "Save layout"

Alternative:
- Changes save automatically per-symbol if you don't change layouts
- But switching symbols may reset if not saved to layout
```

---

### Multiple Indicator Instances Showing Different Signals

**Symptoms:** Two instances of Pentarch showing different signals

**Cause:** Different settings or versions

**Solution:**

```
1. Click each indicator name
2. Check "Settings" → "About" for version number
3. Ensure both are same version
4. Check "Inputs" tab—ensure same settings
5. If different: Remove one and re-add with correct settings
```

---

## 📱 Mobile App Issues

### 📱 Indicators Not Showing on Mobile
<span style="color: #10b981; font-weight: 600;">Mobile Setup</span>

**Symptoms:** Work on desktop, not on TradingView mobile app

**Important:** TradingView mobile app has limitations

#### Limitations:
```
❌ Cannot ADD new indicators on mobile
❌ Cannot configure indicator settings on mobile
✅ CAN view indicators added on desktop
✅ CAN receive alerts
✅ CAN view charts with indicators
```

#### Workaround:
```
1. Add indicators on desktop/web
2. Save as layout (e.g., "BTC Pentarch")
3. Open TradingView mobile app
4. Load same symbol
5. Load your saved layout
6. Indicators will appear
```

---

### Alerts Not Working on Mobile

**Symptoms:** Receive alerts on desktop, not on phone

**Fix Mobile Notifications:**

**iPhone:**
```
1. Settings → Notifications → TradingView
2. Allow Notifications: ON
3. Sounds: ON
4. Badges: ON
5. Show in Notification Center: ON
6. Show on Lock Screen: ON
```

**Android:**
```
1. Settings → Apps → TradingView
2. Notifications: ON
3. Allow sound: ON
4. Pop on screen: ON
5. Override Do Not Disturb: ON (optional)
```

**In TradingView App:**
```
1. Open TradingView app
2. Profile → Settings
3. Notifications
4. Enable "Push notifications"
5. Enable sounds
6. Test by triggering an alert
```

---

## 🔄 Data & Calculation Issues

### Signals Different Than Expected

**Symptoms:** Signal fired but you disagree with it, or it seems wrong

**Remember:** Indicators use mathematics, not discretion

#### Common Misunderstandings:

**"IGN fired but price didn't go up"**
```
Indicators show POTENTIAL reversals, not guarantees.
- Some signals fail (normal in trading)
- Use risk management
- No indicator is 100% accurate
- Confluence improves odds (add Janus levels)
```

**"Signal happened but I don't see the pattern"**
```
Indicators calculate on multiple factors you may not see:
- Multi-timeframe confluence
- Momentum shifts
- Volume patterns
- Mathematical conditions

Trust the indicator or don't use it—picking and choosing defeats the purpose.
```

**"Signal seems late"**
```
By design! Wait for bar close = confirmation.
- Early signals = repainting
- Late signals = reliable
- Trade-off for accuracy
```

---

### Historical Signals Different Than Real-Time

**Symptoms:** Back-testing shows different signals than you remember

**Causes:**

#### 1. Indicator Updated
```
Newer versions may have improved calculations.
Historical recalculation with new logic = different signals.

This is IMPROVEMENT, not repainting.
- Repainting = changing past final signals
- Update = better algorithm applied to history
```

#### 2. Not Enough Historical Data
```
Indicator needs sufficient data to calculate properly.

Example:
- Indicator needs 100 bars
- You only load 50 bars
- First signals will be unreliable

Solution: Load at least 500-1000 bars before judging signals.
```

---

## 🌐 Browser & Performance Issues

### Chart Lagging/Slow with Indicators

**Symptoms:** Chart freezes, slow to respond when indicators loaded

**Solutions:**

#### Reduce Indicator Count
```
Don't load all 7 indicators on one chart!

Maximum recommended: 3 indicators

High performance combo:
- Just Omnideck (it includes everything)
OR
- Pentarch + Janus + one other
```

#### Optimize Browser
```
1. Close unused tabs
2. Clear browser cache
3. Disable unnecessary extensions
4. Update browser to latest version
5. Restart browser
```

#### Use Lower Timeframe on Clean Chart
```
If 15m chart lags with indicators:
- Move to 1H (fewer bars to calculate)
- Or remove visual indicators
- Keep only alerting indicators
```

#### Upgrade TradingView Plan
```
Free/Basic: Limited resources
Pro/Pro+: Better performance, faster data
Premium: Best performance
```

---

## 📞 When to Contact Support

Contact support if:

- ✅ None of these solutions worked
- ✅ Indicator showing clear calculation error
- ✅ Access issues persisting 48+ hours after purchase
- ✅ Alerts not working after all troubleshooting
- ✅ Billing/subscription questions

**How to Contact:**
- Visit [Support & Access](about-support.md) page
- Include in your message:
  - Indicator name and version
  - Screenshot of issue
  - What you've tried already
  - TradingView username
  - Order number (if access issue)

---

## 📚 Additional Resources

- [FAQ](about-faq.md) - Frequently Asked Questions
- [Quick Start Guide](start-quick.md) - Getting started tutorial
- [Glossary](ref-glossary.md) - Terms and definitions
- [Non-Repainting Policy](ref-non-repaint.md) - How signals work
- [Best Practices](ref-best-practices.md) - Pro tips

**Still stuck?** [Contact Support](about-support.md) - We're here to help!

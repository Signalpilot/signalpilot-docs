# Troubleshooting Guide

<span class="signal-pilot-brand">Signal Pilot</span> indicator issues are addressed in this guide. Common problems and their solutions are covered. Issue not found: [Contact Support](about-support.md) is available.

---

## 🚨 Quick Diagnostic Checklist

Before addressing specific issues, this quick checklist can be reviewed:

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
1. Scrolling left on chart loads more history
2. At least 500-1000 bars of data is recommended
3. A few seconds can be waited for indicator to recalculate
4. Signals are expected to appear after recalculation
```

#### 2. Wrong Timeframe for Current Market Conditions

**Problem:** Timeframe too high/low for current volatility

**Solution:**
```
Daily chart: Good for trending markets, sparse in ranges
4H chart: Balanced signal frequency
1H chart: More frequent signals
15m chart: Very frequent, best for active markets

Switching timeframes can be tried to see if signals appear.
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
1. The indicator can be removed from chart
2. The browser can be refreshed (Ctrl+F5 or Cmd+Shift+R)
3. The indicator can be re-added from Indicators menu
4. 5-10 seconds can be waited for initial calculation
```

**If this approach is still not effective:** Indicator version can be checked—outdated versions may have been deprecated.

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
1. Chart can be right-clicked → Add Alert
2. Condition: The indicator can be selected
3. Event: Specific event can be chosen (e.g., "IGN Event")
4. Options: Can be set to "Once Per Bar Close" ← CRITICAL
5. The alert can be created
```

**What "Once Per Bar Close" does:**
- ✅ Only triggers on confirmed, closed bars
- ✅ No disappearing signals
- ✅ Reliable, actionable alerts
- ❌ Won't notify you of intrabar preliminary signals

**Key information:** Intrabar signals are "maybe" — closed bar signals are "confirmed."

---

### 🎨 Wrong Signal Colors / Visual Issues
<span style="color: #10b981; font-weight: 600;">Display Fix</span>

**Symptoms:** Signals showing but colors are off or hard to see

**Solutions:**

#### Light/Dark Mode Mismatch
```
1. The indicator name on chart can be clicked
2. The "Style" tab can be accessed
3. Colors can be adjusted manually
4. Or the TradingView theme (top-right) can be switched
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
1. Indicator settings can be accessed
2. "Style" tab
3. "Size" setting can be increased
4. Labels can be enabled/disabled as needed
```

---

## 🔔 Alert Issues

### 🔕 Alerts Not Firing
<span style="color: #dc2626; font-weight: 600;">Critical Issue</span>

**Symptoms:** Alert created but no notifications received

**Diagnostic Steps:**

#### Step 1: Verify Alert Is Active

```
1. The "Alert" button (top toolbar) can be clicked
2. The alerts list can be checked
3. The <span class="signal-pilot-brand">Signal Pilot</span> alert can be found
4. It can be ensured it's not expired or paused
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
1. A test alert can be created on 5m or 15m chart
2. Next signal can be waited for (shouldn't take long)
3. Notification receipt can be verified
4. If working: Original alert was set up wrong
5. If not working: Notification settings issue exists
```

#### Step 4: Check Notification Settings

**On Desktop:**
```
1. TradingView → Profile Icon → Settings can be accessed
2. Notifications tab can be opened
3. "Show pop-ups" can be ensured enabled
4. Email address can be checked for correctness
5. Email inbox AND spam folder can be checked
```

**On Mobile:**
```
1. Phone Settings → Apps → TradingView can be accessed
2. "Notifications" can be enabled
3. "Sound" can be enabled
4. "Banners/Alerts" can be enabled
5. "Do Not Disturb" can be checked is off
```

---

### 🔊 Too Many Alerts / Alert Spam
<span style="color: #f59e0b; font-weight: 600;">Alert Management</span>

**Symptoms:** Constant notifications, overwhelming

**Solutions:**

#### 1. Change to Higher Timeframe
```
Currently on 15m? → 1H can be tried
Currently on 1H? → 4H can be tried
Currently on 4H? → Daily can be tried

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
Creating the same alert on 20 symbols is not recommended.

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
1. The problematic alert can be deleted
2. A new alert can be created
3. "Options" can be set to "Once Per Bar Close"
4. "Only Once" can be ensured NOT checked (unless one-time alert is wanted)
5. The alert can be saved
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
1. signalpilot.io account dashboard can be logged into
2. "Indicator Access" status can be checked
3. If still pending: Support can be contacted with order number
```

#### 2. Wrong TradingView Account
```
Was the correct username provided?

Check:
1. TradingView can be logged out of
2. The account provided to <span class="signal-pilot-brand">Signal Pilot</span> can be logged into
3. Indicators can be searched for again
```

#### 3. Indicator Name Changed/Updated
```
Search terms that work:
- "<span class="signal-pilot-brand">Signal Pilot</span>"
- "Pentarch"
- "Janus Atlas"
- "Omnideck"

Searching just "Pentarch" instead of "Pentarch v8.9" can be tried
```

#### 4. Private/Invite-Only Script
```
<span class="signal-pilot-brand">Signal Pilot</span> indicators are invite-only.
Explicit access grant is required.

Cannot be found in public indicator library.
Will appear in the user's indicator list after invite.
```

---

### Indicator Shows "Loading..." Forever

**Symptoms:** Indicator added but stuck on "Loading..." or "Calculating..."

**Solutions:**

#### Quick Fix:
```
1. The indicator can be removed
2. The browser can be refreshed (Ctrl+F5 / Cmd+Shift+R)
3. The browser cache can be cleared
4. The indicator can be added again
5. 30 seconds can be waited
```

#### If Quick Fix Doesn't Work:

**Check TradingView Server Status:**
- Visit status.tradingview.com
- Look for ongoing incidents
- Wait for resolution if servers are degraded

**Different Browser Can Be Tried:**
```
Chrome → Firefox can be tried
Firefox → Edge can be tried
Safari → Chrome can be tried

Some browsers have conflicts with specific scripts
```

**Check Browser Extensions:**
```
Ad blockers and privacy extensions can interfere.

Test:
1. An incognito/private window can be opened
2. TradingView can be logged into
3. The indicator can be tried loading
4. If it works: Extensions can be disabled one by one to find culprit
```

---

### Indicator Suddenly Disappeared from Chart

**Symptoms:** Indicator was working, now it's gone

**Common Causes:**

#### 1. Indicator Updated (New Version)
```
Old version deprecated → The new version needs to be added

Solution:
1. Email can be checked for update notification
2. Latest version can be searched for (e.g., "Pentarch v8.9" → "Pentarch v9.0")
3. The new version can be added to the chart
4. Old alerts can be removed
5. New alerts can be created with new version
```

#### 2. Chart Template Issue
```
If using chart templates/layouts:

1. Saving templates with private indicators is not recommended
2. Templates can't share invite-only scripts
3. Indicators can be added manually to each chart
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
TradingView requires layout SAVE:

1. Indicator changes can be made
2. "Layouts" (top of chart) can be clicked
3. "Save" or "Save As..." can be clicked
4. A name can be given
5. "Save layout" can be clicked

Alternative:
- Changes save automatically per-symbol if layouts aren't changed
- But switching symbols may reset if not saved to layout
```

---

### Multiple Indicator Instances Showing Different Signals

**Symptoms:** Two instances of Pentarch showing different signals

**Cause:** Different settings or versions

**Solution:**

```
1. Each indicator name can be clicked
2. "Settings" → "About" can be checked for version number
3. Both can be ensured are same version
4. "Inputs" tab can be checked—same settings can be ensured
5. If different: One can be removed and re-added with correct settings
```

---

## 📱 Mobile App Issues

### 📱 Indicators Not Showing on Mobile
<span style="color: #10b981; font-weight: 600;">Mobile Setup</span>

**Symptoms:** Work on desktop, not on TradingView mobile app

**Key information:** TradingView mobile app has limitations

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
1. Indicators can be added on desktop/web
2. Can be saved as layout (e.g., "BTC Pentarch")
3. The TradingView mobile app can be opened
4. Same symbol can be loaded
5. Saved layout can be loaded
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
1. TradingView app can be opened
2. Profile → Settings can be accessed
3. Notifications can be accessed
4. "Push notifications" can be enabled
5. Sounds can be enabled
6. Can be tested by triggering an alert
```

---

## 🔄 Data & Calculation Issues

### Signals Different Than Expected

**Symptoms:** Signal fired but you disagree with it, or it seems wrong

**Key information:** Indicators use mathematics, not discretion

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

Indicator consistency is typically valued—selective signal acceptance can reduce systematic effectiveness.
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
Loading all 7 indicators on one chart is not a recommended practice.

Commonly recommended maximum: 3 indicators

High performance combo:
- Just Omnideck (it includes everything)
OR
- Pentarch + Janus + one other
```

#### Optimize Browser
```
1. Unused tabs can be closed
2. Browser cache can be cleared
3. Unnecessary extensions can be disabled
4. Browser can be updated to latest version
5. Browser can be restarted
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

**Unresolved issues:** [Contact Support](about-support.md) - Assistance is available.

# Installation Troubleshooting

Resolve common issues when installing or loading Signal Pilot indicators.

---

## 🔍 Quick Diagnostic

### Problem: "I can't find the indicator in TradingView"

**Most likely cause:** Looking in wrong section or access issue

**Solution:** [Jump to: Indicator Not in Invite-Only Scripts](#indicator-not-in-invite-only-scripts)

---

### Problem: "Indicator loads but nothing appears on chart"

**Most likely cause:** Wrong timeframe or settings

**Solution:** [Jump to: Indicator Loaded but No Visuals](#indicator-loaded-but-no-visuals)

---

### Problem: "No signals appearing"

**Most likely cause:** Patience needed or wrong timeframe

**Solution:** [Jump to: Signals Not Appearing](#signals-not-appearing)

---

### Problem: "Can't add indicator - says too many indicators"

**Most likely cause:** TradingView tier limit reached

**Solution:** [Jump to: Too Many Indicators Error](#too-many-indicators-error)

---

### Problem: "Indicator showing 'Access Denied' or 'Not Authorized'"

**Most likely cause:** Email mismatch or license issue

**Solution:** [Jump to: Access Denied Error](#access-denied-error)

---

## 📋 Step-by-Step Installation Verification

Use this checklist to verify each step:

### Step 1: Verify TradingView Account
- [ ] Logged into TradingView.com
- [ ] Account email matches purchase email
- [ ] Account active (not suspended)

**How to check:** Click profile icon (top right) → Settings → Check email address

---

### Step 2: Locate Indicator
- [ ] Clicked "Indicators" button (top toolbar)
- [ ] Clicked "Invite-Only Scripts" tab
- [ ] Can see Signal Pilot indicators listed

**If not visible:** See [Indicator Not in Invite-Only Scripts](#indicator-not-in-invite-only-scripts)

---

### Step 3: Add to Chart
- [ ] Clicked indicator name
- [ ] Indicator appeared in indicator list (left side or below chart)
- [ ] Some visual element appeared on chart

**If nothing appears:** See [Indicator Loaded but No Visuals](#indicator-loaded-but-no-visuals)

---

### Step 4: Verify Functionality
- [ ] Can open indicator settings (gear icon)
- [ ] Understand what visual elements should appear
- [ ] Timeframe appropriate for indicator

**If no signals:** See [Signals Not Appearing](#signals-not-appearing)

---

## 🚨 Common Issues & Solutions

### Indicator Not in Invite-Only Scripts

**Symptoms:**
- Can't find Signal Pilot indicator in TradingView
- "Invite-Only Scripts" tab is empty or doesn't show your indicators
- Search returns no results

**Causes & Solutions:**

#### Cause 1: Email Mismatch
**Check:** TradingView account email matches purchase email
```
1. Click profile icon (top right)
2. Settings → Account
3. Verify email address
4. Compare to purchase confirmation email
```

**Fix:** If emails don't match:
- Option A: Change TradingView email to match purchase email
- Option B: Contact support@signalpilot.io to transfer license

---

#### Cause 2: Not Yet Granted Access
**Check:** How long since purchase?

**Fix:**
- Access granted within 24 hours of purchase (usually faster)
- Check spam/promotions folder for access email
- If >24 hours, contact support@signalpilot.io with order number

---

#### Cause 3: Looking in Wrong Section
**Check:** Are you in "Invite-Only Scripts" tab?

**Fix:**
```
1. Click "Indicators" button (top toolbar, looks like ƒx)
2. Click "Invite-Only Scripts" tab (not "Technicals" or "Community Scripts")
3. Scroll to find Signal Pilot indicators
```

---

#### Cause 4: Browser Cache Issue
**Fix:**
```
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Log out and log back into TradingView
4. Try incognito/private mode
```

---

### Indicator Loaded but No Visuals

**Symptoms:**
- Indicator name appears in left sidebar or below chart
- Chart looks unchanged
- No lines, labels, or panels visible

**Causes & Solutions:**

#### Cause 1: Wrong Timeframe
**Issue:** Some indicators don't show signals on all timeframes

**Fix:**
```
Pentarch: Use 15m-Weekly (not <15m)
Janus Atlas: Works on all timeframes
Volume Oracle: Best on 5m-Daily
Omnideck: Best on 1H-Daily
Harmonic: Use 15m-Daily
Plutus Flow: Best on 1H-Weekly
Augury Grid: Use same timeframe as monitored symbols
```

**Action:** Switch to Daily chart, reload indicator, verify something appears

---

#### Cause 2: Indicator Settings Disabled Visual Elements
**Issue:** Settings accidentally turned off key components

**Fix:**
```
1. Click gear icon next to indicator name
2. Check "Style" tab
3. Verify visual elements are enabled (checkboxes ticked)
4. Verify colors aren't set to chart background color
5. Click "OK" to save
```

---

#### Cause 3: Overlapping with Other Indicators
**Issue:** Indicator loaded but hidden behind other elements

**Fix:**
```
1. Temporarily hide other indicators (click eye icon)
2. Zoom in/out on chart (adjust scale)
3. Check if indicator panel is collapsed (for panel-based indicators)
4. Right-click chart → "Reset Chart"
```

---

#### Cause 4: Chart Scale Issue
**Issue:** Indicator rendering outside visible chart area

**Fix:**
```
1. Right-click on price scale (right side) → "Reset Scale"
2. Use mousewheel to zoom in/out
3. Check "Auto" scaling is enabled
```

---

### Signals Not Appearing

**Symptoms:**
- Indicator loaded and visible
- No signal labels, alerts, or pattern detection showing
- Waited several hours/days with no activity

**Causes & Solutions:**

#### Cause 1: Patience Required (MOST COMMON)
**Reality Check:**

| Indicator | Typical Wait Time for First Signal |
|-----------|-------------------------------------|
| **Janus Atlas** | Instant (levels always visible) |
| **Volume Oracle** | Minutes to hours (volume spikes) |
| **Harmonic Oscillator** | Instant to hours (momentum signals) |
| **Pentarch** | 1-7 days (cycle events are rare) |
| **Plutus Flow** | Days to weeks (divergences are rare) |
| **Augury Grid** | Minutes to days (depends on monitored symbols) |
| **Omnideck** | Varies by system (some instant, some days) |

**Fix:** Be patient. Pentarch TD signals may take 7+ days to appear depending on market conditions.

---

#### Cause 2: Wrong Timeframe for Signal Type
**Issue:** Using timeframe where signals don't typically occur

**Examples:**
- Pentarch on 1-minute chart: Signals extremely rare
- Plutus Flow on 5-minute chart: Divergences hard to spot

**Fix:** Use recommended timeframes (see each indicator's documentation)

---

#### Cause 3: Low-Volume Asset
**Issue:** Asset doesn't have enough activity to generate signals

**Examples:**
- Penny stocks with <10K daily volume
- Obscure crypto pairs
- Inactive futures contracts

**Fix:** Test on high-volume assets first:
- SPY, QQQ, AAPL (stocks)
- BTC/USD, ETH/USD (crypto)
- ES, NQ (futures)
- EUR/USD, GBP/USD (forex)

---

#### Cause 4: Market Conditions Not Right
**Issue:** Indicator waiting for specific conditions

**Examples:**
- Pentarch TD: Needs 9 consecutive closes in one direction
- Plutus divergence: Needs price and OBV to diverge
- Volume Oracle: Needs volume spike >1.5x average

**Fix:** Normal behavior. Indicators identify specific patterns, not present at all times.

---

###

 Too Many Indicators Error

**Symptoms:**
- TradingView error: "Maximum number of indicators reached"
- Can't add another indicator
- Chart already has several indicators loaded

**Cause:** TradingView tier limit reached

**Limits by Account Tier:**
- Free: 3 indicators max
- Essential ($14.95/mo): 5 indicators max
- Plus ($29.95/mo): 10 indicators max
- Premium ($59.95/mo): 25 indicators max

**Solutions:**

#### Option 1: Remove Unused Indicators
```
1. Find indicators you're not actively using
2. Click "X" next to indicator name (left sidebar)
3. Indicator removed, spot freed up
4. Add desired Signal Pilot indicator
```

---

#### Option 2: Upgrade TradingView Tier
```
1. Click profile icon → "Upgrade"
2. Choose Essential or higher
3. Restart browser after upgrading
4. Add indicators (new limit applied)
```

**Recommendation:** Essential tier ($14.95/mo) gives 5 indicators—enough for The Trinity (3) + 2 more.

---

#### Option 3: Use Omnideck Instead
```
If you want multiple Signal Pilot indicators but hit limit:
- Omnideck = 8 systems in 1 indicator
- Counts as only 1 toward TradingView limit
- Trade-off: More complex to learn
```

---

### Access Denied Error

**Symptoms:**
- "Access Denied" or "Not Authorized" error
- Indicator listed but won't load
- Error message when clicking indicator

**Causes & Solutions:**

#### Cause 1: Email Mismatch
**Most Common**

**Fix:**
```
1. Verify TradingView email matches purchase email
2. Contact support@signalpilot.io if mismatch
3. Provide both emails + order number
4. License transferred to correct account (usually <24 hours)
```

---

#### Cause 2: License Expired or Suspended
**Check:** Is this a subscription-based license?

**Fix:**
- Verify payment method current
- Check email for renewal failure notices
- Contact support if payment processed but access denied

---

#### Cause 3: License Revoked (Policy Violation)
**Rare but possible**

**Fix:**
- Contact support@signalpilot.io for details
- Review Terms of Service
- Resolve any account issues

---

### Indicator Disappeared After Working

**Symptoms:**
- Indicator was working yesterday
- Now missing from chart or won't load
- No changes made on your end

**Causes & Solutions:**

#### Cause 1: TradingView Layout Changed
**Fix:**
```
1. Click "Indicators" → "Invite-Only Scripts"
2. Re-add indicator to chart
3. Settings should be preserved
```

---

#### Cause 2: Browser Extension Conflict
**Fix:**
```
1. Disable ad blockers temporarily
2. Whitelist TradingView.com
3. Disable privacy extensions temporarily
4. Test in incognito mode (extensions usually off)
```

---

#### Cause 3: TradingView Maintenance
**Fix:**
- Check TradingView status page
- Wait 15-30 minutes
- Indicators usually auto-restore after maintenance

---

## 🔧 Advanced Troubleshooting

### Clear TradingView Data
**When:** Nothing else works, visual glitches persist

**Steps:**
```
1. Close all TradingView tabs
2. Clear browser cache: Ctrl+Shift+Delete
3. Select "Cached images and files"
4. Select "All time" range
5. Clear data
6. Restart browser
7. Log back into TradingView
8. Re-add indicators
```

**Warning:** May reset some TradingView preferences.

---

### Test in Different Browser
**When:** Suspect browser-specific issue

**Steps:**
```
1. Open TradingView in different browser:
   - Chrome → Try Firefox
   - Firefox → Try Edge
   - Safari → Try Chrome
2. Log into TradingView
3. Load indicator
4. If works: Original browser has issue (update/reinstall)
5. If doesn't work: Account or access issue (contact support)
```

---

### Check TradingView Console for Errors
**When:** Technical troubleshooting needed

**Steps:**
```
1. Press F12 (opens Developer Tools)
2. Click "Console" tab
3. Refresh page
4. Look for red error messages
5. Screenshot errors
6. Send to support@signalpilot.io
```

---

## 📞 When to Contact Support

### Contact support@signalpilot.io if:

- ✅ Tried all solutions above
- ✅ Verified TradingView account email matches purchase
- ✅ Waited 24+ hours since purchase
- ✅ Indicator was working, now broken (no changes on your end)
- ✅ Error messages you don't understand

### Include in Support Request:

1. **Order number** (from purchase confirmation)
2. **TradingView account email**
3. **Specific error message** (screenshot if possible)
4. **Indicator name** (Pentarch, Janus, etc.)
5. **What you've already tried** (saves time)
6. **Browser** (Chrome, Firefox, Safari, etc.)
7. **TradingView tier** (Free, Pro, Premium, etc.)

---

## ✅ Installation Verification Checklist

Before contacting support, verify:

- [ ] Logged into TradingView with correct email
- [ ] Can see "Invite-Only Scripts" tab
- [ ] Indicator appears in Invite-Only Scripts list
- [ ] Tried on Daily timeframe (universal compatibility)
- [ ] Waited appropriate time for signals (see table above)
- [ ] No TradingView indicator limit reached
- [ ] Cleared browser cache and refreshed
- [ ] Tested in incognito/private mode
- [ ] Checked indicator settings (Style tab)

If all checked and still not working → Contact support

---

## 🚀 Next Steps

**Got it working?**

1. **Configure settings:** See indicator documentation for optimal settings
2. **Set up alerts:** [How to Set TradingView Alerts](how-to-alerts/index.html)
3. **Learn the indicator:** [Learning Paths](start-learning-path/index.md)
4. **Join community:** [Community](../community/index.md)

**Still stuck?**

- Email: support@signalpilot.io
- Include: Order number, TradingView email, error details
- Response time: Usually <24 hours

---

**Related Guides:**
- [System Requirements](about-system-requirements.md)
- [Which Indicator Should I Start?](start-which-indicator.md)
- [Performance Optimization](../advanced/performance-optimization.md)
- [General Troubleshooting Guide](../ref-troubleshooting/index.html)

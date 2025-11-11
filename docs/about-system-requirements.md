# System Requirements

Everything you need to run Signal Pilot indicators smoothly.

---

## 🖥️ Platform Requirements

### TradingView Account

**Required:** TradingView account (any tier)

| Account Tier | Cost | Can Use Signal Pilot? | Notes |
|--------------|------|----------------------|-------|
| **Free** | $0/month | ✅ Yes | Limited to 3 indicators per chart |
| **Essential** | $14.95/month | ✅ Yes | Up to 5 indicators per chart |
| **Plus** | $29.95/month | ✅ Yes | Up to 10 indicators per chart |
| **Premium** | $59.95/month | ✅ Yes | Up to 25 indicators per chart |

**Recommendation:** Essential or higher if using multiple Signal Pilot indicators simultaneously (e.g., The Trinity = 3 indicators).

---

## 💻 Device Compatibility

### Desktop/Laptop

**Supported Browsers:**
- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Brave

**Operating Systems:**
- ✅ Windows 10/11
- ✅ macOS 10.15+
- ✅ Linux (Ubuntu, Fedora, etc.)

**Minimum Specs:**
- **RAM:** 4GB (8GB recommended for multiple indicators)
- **Processor:** Any modern dual-core CPU
- **Internet:** Stable broadband connection (5+ Mbps)

---

### Mobile & Tablet

**TradingView Mobile App:**
- ✅ iOS 13+ (iPhone, iPad)
- ✅ Android 8.0+

**Functionality:**
- ✅ View indicators and signals
- ✅ Receive alert notifications
- ⚠️ Limited customization compared to desktop
- ⚠️ Best for monitoring, not deep analysis

**Recommendation:** Use desktop for setup and analysis, mobile for monitoring and alerts.

---

## 📊 Performance Considerations

### Chart Performance

**Factors Affecting Speed:**

1. **Number of Indicators**
   - 1-2 indicators: Excellent performance
   - 3-4 indicators: Good performance
   - 5+ indicators: May slow rendering on older devices

2. **Bars Loaded**
   - Default: 20,000 bars
   - Recommended: 5,000-10,000 bars for faster performance
   - Settings → Chart Settings → Bars Back to Load

3. **Timeframe**
   - Lower timeframes (1m, 5m): More data = slower
   - Higher timeframes (4H, Daily): Less data = faster

**Performance Tips:**
- Use [Performance Optimization Guide](../advanced/performance-optimization.md) for detailed settings
- Close unused charts/indicators
- Enable hardware acceleration in browser settings

---

### Specific Indicator Performance

| Indicator | Performance Impact | Notes |
|-----------|-------------------|-------|
| **Pentarch** | Low | Lightweight, minimal visual elements |
| **Janus Atlas** | Medium | Increases with more levels enabled (39 max) |
| **Volume Oracle** | Low-Medium | Depends on zone count (5-15 typical) |
| **Omnideck** | High | 8 systems in one, disable unused systems |
| **Augury Grid** | Medium | Monitoring 30-40 symbols simultaneously |
| **Harmonic Oscillator** | Low | Single panel, simple voting system |
| **Plutus Flow** | Low-Medium | Three-layer system, minimal overhead |

**Optimization:** See [Performance Optimization Guide](../advanced/performance-optimization.md)

---

## 🌐 Internet Connection

### Minimum Requirements

- **Speed:** 5 Mbps download (broadband)
- **Stability:** Consistent connection (no frequent drops)
- **Type:** Any (cable, fiber, DSL, 4G/5G mobile)

### For Real-Time Trading

- **Recommended:** 25+ Mbps for real-time data without lag
- **Latency:** <100ms ping to TradingView servers
- **Mobile Data:** 4G LTE or 5G (3G not recommended)

**Note:** Signal Pilot indicators calculate based on data TradingView provides. Connection quality affects data timeliness, not indicator accuracy.

---

## 📱 Alert Notifications

### Mobile Push Notifications

**Requirements:**
- TradingView mobile app installed
- Account logged in on mobile device
- Alerts configured on desktop or mobile

**Works On:**
- ✅ iOS (iPhone, iPad)
- ✅ Android phones/tablets
- ✅ Even when app is closed (background notifications)

### Email Alerts

**Requirements:**
- Valid email address on TradingView account
- Email alerts enabled in TradingView settings

**Free Tier Limitations:**
- Free accounts: Limited alert capacity
- Paid accounts: More simultaneous active alerts

---

## 🔧 Browser Extensions & Ad Blockers

### Compatible

Most browser extensions work fine, but some may interfere:

**Known Issues:**
- ⚠️ Aggressive ad blockers may block TradingView scripts
- ⚠️ Privacy extensions (Privacy Badger, uBlock Origin) may need whitelisting

**If Indicator Not Loading:**
1. Disable ad blocker for TradingView.com
2. Whitelist TradingView in privacy extensions
3. Try incognito/private mode (extensions usually disabled)
4. Clear browser cache and cookies

---

## 💾 Data & Storage

### Browser Storage

Signal Pilot indicators use TradingView's storage system:
- Settings saved automatically per chart
- Templates saved to TradingView account
- No local storage required

### Offline Usage

**Not Supported:** Signal Pilot indicators require active TradingView connection
- Cannot use offline
- Cannot save for offline analysis
- Requires internet for real-time calculations

---

## 🌍 Regional Availability

### TradingView Platform Availability

Signal Pilot works wherever TradingView is accessible:
- ✅ North America
- ✅ Europe
- ✅ Asia-Pacific
- ✅ Latin America
- ✅ Middle East
- ✅ Africa

**Restrictions:** Some regions may have limited TradingView access due to local regulations. Check TradingView.com availability in your region.

---

## 🔐 Security Requirements

### Account Security

**Recommended:**
- Two-factor authentication (2FA) enabled on TradingView
- Strong password (12+ characters)
- Unique password (not reused from other sites)

**Note:** Signal Pilot indicators run within TradingView's secure environment. No separate login required.

---

## ⚡ Quick Compatibility Check

### ✅ You're Ready If:
- [ ] Have TradingView account (any tier)
- [ ] Modern browser (Chrome, Firefox, Safari, Edge)
- [ ] Stable internet connection (5+ Mbps)
- [ ] Device made in last 5-7 years

### ⚠️ Upgrade Recommended If:
- [ ] Using TradingView Free tier + want to use 3+ indicators simultaneously → Upgrade to Essential
- [ ] Computer slower than expected → See [Performance Optimization](../advanced/performance-optimization.md)
- [ ] Mobile-only user → Get desktop access for full functionality

---

## ❓ Common Questions

### Q: Do I need TradingView Pro/Premium to use Signal Pilot?
**A:** No. Signal Pilot works on all TradingView tiers, including Free. However, Free tier limits you to 3 indicators per chart. Essential ($14.95/mo) allows 5 indicators, recommended if using The Trinity (3 indicators).

### Q: Will Signal Pilot slow down my charts?
**A:** Minimal impact with 1-3 indicators. Performance depends on your device, number of indicators active, and bars loaded. See [Performance Guide](../advanced/performance-optimization.md) for optimization.

### Q: Can I use Signal Pilot on my phone?
**A:** Yes. Signal Pilot indicators work on TradingView mobile app (iOS/Android). Functionality is viewable but customization is limited compared to desktop. Best for monitoring, not primary analysis.

### Q: What if I have a slow internet connection?
**A:** Minimum 5 Mbps recommended. Slower connections may cause delayed data updates from TradingView, but won't affect indicator calculations. Indicators work with the data TradingView provides.

### Q: Does Signal Pilot work on Mac/Linux?
**A:** Yes. Signal Pilot runs in your browser on TradingView.com, so any operating system with a modern browser works (Windows, macOS, Linux, ChromeOS, etc.).

### Q: Can I use Signal Pilot without TradingView?
**A:** No. Signal Pilot indicators are built for the TradingView platform exclusively. TradingView account required (free tier acceptable).

---

## 🚀 Next Steps

**Ready to get started?**

1. Verify you meet requirements above ✅
2. Choose which indicator to start with: [Which Indicator Should I Start?](start-which-indicator.md)
3. Follow installation guide: [Installation](#) *(link to installation guide)*
4. Bookmark quick references: [All Indicators At-A-Glance](ref-cheatsheets/all-indicators-at-a-glance.md)
5. Join the community: [Community](../community/index.md)

---

**Need Help?**
- Installation issues: [Installation Troubleshooting](troubleshooting-installation.md)
- Performance issues: [Performance Optimization](../advanced/performance-optimization.md)
- Technical support: support@signalpilot.io

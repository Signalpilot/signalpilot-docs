# Frequently Asked Questions

Answers to common questions about <span class="signal-pilot-brand">Signal Pilot</span> indicators can be found here. For additional information, the [Troubleshooting Guide](ref-troubleshooting.md) or [Contact Support](about-support.md) pages are available.

---

## 🚀 Getting Started

### ⭐ Do I need all 7 indicators?
<span style="color: #0aa1d5; font-weight: 600;">Most Common Question</span>

Not necessarily. Starting with just **Pentarch** for reversal signals is a common approach. Most traders begin with 1-2 indicators and add more as they gain experience. The [Comparison Guide](ref-comparison.md) is available to help identify which indicators match different trading styles.

### ⭐ What's the difference between Pentarch and Omnideck?
<span style="color: #0aa1d5; font-weight: 600;">Key Comparison</span>

- **Pentarch**: Focused reversal detector with 5 distinct event types (TD, IGN, WRN, CAP, BDN). Best for catching turning points.
- **Omnideck**: All-in-one dashboard combining multiple indicators. Shows Pentarch signals PLUS levels, momentum, volume, and bias—everything on one chart.

**Pentarch is commonly used when:** Clean, focused reversal signals are desired
**Omnideck is commonly used when:** All analysis tools in one place are preferred

The [Indicator Comparison Guide](ref-comparison.md) provides detailed differences.

### ⚡ What timeframe should I start with?
<span style="color: #ff6b35; font-weight: 600;">Important for Beginners</span>

**Recommended starting timeframe:** Daily (1D)

**Why?**
- Cleaner signals with less noise
- Easier to learn signal patterns
- More time to make decisions
- Higher reliability

**Timeframe guidelines:**
- **Beginners**: Daily or 4H
- **Intermediate**: 1H to Daily
- **Advanced**: 15m to 4H for scalping
- **Swing traders**: Daily to Weekly

Any timeframe can be used, but starting higher and working down as confidence increases is a common progression.

### 🔧 Do I need a specific TradingView subscription?
<span style="color: #8b5cf6; font-weight: 600;">Required Setup</span>

**Minimum:** TradingView Essential (paid plan)

**Why?** The indicators use advanced features that require a paid TradingView subscription. Free accounts are not compatible.

**Recommended:** Pro or Pro+ for alert automation and faster data.

---

## ⚙️ Setup & Configuration

### 🔧 How do I get access?
<span style="color: #8b5cf6; font-weight: 600;">First Steps</span>

1. The suite can be **purchased** at [signalpilot.io](https://signalpilot.io/#pricing)
2. An **email** with access instructions will be received
3. TradingView username is **provided** to the service
4. Access to private indicators is **granted** (usually within 24 hours)
5. Indicators can be **added** from TradingView's Indicators menu

### ⚡ Why am I not seeing signals on my chart?
<span style="color: #ff6b35; font-weight: 600;">Common Issue</span>

**Common issues to check:**

1. **Wrong indicator version**
   - The latest version should be confirmed (e.g., "Pentarch v8.9")
   - Old versions may have been removed

2. **Timeframe too low**
   - Switching to 4H or Daily can be tried
   - Lower timeframes may have fewer signals during range periods

3. **Indicator not loaded properly**
   - The indicator can be removed and re-added
   - Browser refresh may be needed

4. **Market conditions**
   - Pentarch signals reversals—if market is ranging, signals will be sparse
   - This is normal and by design

5. **Chart data issues**
   - Sufficient historical data should be loaded
   - A different symbol can be tried for testing

The [Troubleshooting Guide](ref-troubleshooting.md) provides more detailed solutions.

### 🔔 How do I know if alerts are working?
<span style="color: #10b981; font-weight: 600;">Alert Testing</span>

**Alert testing approach:**

1. A test alert can be **created** on a low timeframe (5m or 15m)
2. The next signal can be **awaited** (shouldn't take long on lower timeframes)
3. Notification receipt can be **verified** via phone/email
4. Notification settings in TradingView mobile app can be **checked**

**Key setting:** "Once Per Bar Close" is recommended for alerts to avoid repainting.

### 📱 Can I use these on multiple devices?
<span style="color: #10b981; font-weight: 600;">Device Compatibility</span>

Yes. TradingView account and indicator access work on:
- Desktop browsers
- TradingView mobile app (iOS/Android)
- Multiple computers
- Tablet browsers

Indicators and settings sync automatically across all devices via TradingView.

---

## 📊 Usage & Trading

### ⭐ Does it repaint?
<span style="color: #0aa1d5; font-weight: 600;">Critical Question</span>

**No—signals are final on bar close.**

The indicators follow a strict non-repainting policy:
- Signals finalize when the candle closes
- HTF (higher timeframe) data confirms first
- What is seen is what remains—no disappearing signals
- Alerts trigger only on confirmed, closed bars

The [Non-Repainting Policy](ref-non-repaint.md) provides technical details.

### 🌍 Which markets and timeframes work?
<span style="color: #10b981; font-weight: 600;">Universal Compatibility</span>

**Markets:** Any market available on TradingView
- Crypto (Bitcoin, Ethereum, altcoins)
- Forex (EUR/USD, GBP/USD, etc.)
- Stocks (AAPL, TSLA, SPY, etc.)
- Indices (S&P 500, NASDAQ, etc.)
- Commodities (Gold, Oil, etc.)
- Futures

**Timeframes:** All timeframes from 1m to 1M
- Scalping: 1m - 15m
- Day trading: 15m - 1H
- Swing trading: 4H - Daily
- Position trading: Daily - Weekly

Indicators adapt automatically to any market or timeframe.

### ⚡ Why don't I see an event that happened intrabar?
<span style="color: #ff6b35; font-weight: 600;">Common Confusion</span>

**Events only print on closed bars by design.**

This is intentional and prevents repainting:
- Signals shown during a bar are "preliminary"
- Only confirmed signals (after bar close) are displayed
- This ensures reliability and prevents false signals

**What might be observed:**
- ❌ Signal appears mid-bar but disappears → Normal, bar didn't close
- ✅ Signal appears after bar close → Confirmed, this is real

**Best practice:** Alerts set to "Once Per Bar Close" will only receive confirmed signals.

### 🤖 Can I automate trading with these indicators?
<span style="color: #8b5cf6; font-weight: 600;">Automation Support</span>

**Yes.** Automation is fully supported.

**Automation approach:**
1. Alerts can be **set up** with "Once Per Bar Close"
2. Webhooks can be **used** to send alerts to trading platforms
3. Trading bots can be **configured** to act on webhook signals

Guides available:
- [How to Set Alerts](how-to-alerts.md)
- [Webhook Integration](how-to-webhooks.md)

**Popular automation platforms:**
- TradingView's built-in Paper Trading
- 3Commas
- Alertatron
- Custom bots via webhook

**Important:** Backtesting and paper trading automated strategies before using real money is strongly recommended.

### ⭐ How accurate are the signals?
<span style="color: #0aa1d5; font-weight: 600;">Understanding Expectations</span>

**<span class="signal-pilot-brand">Signal Pilot</span> indicators are tools, not crystal balls.**

**What they do:**
- Identify high-probability reversal zones
- Show key support/resistance levels
- Display momentum shifts
- Alert to potential opportunities

**What they don't do:**
- Guarantee profitable trades
- Predict the future with certainty
- Replace proper risk management

**Success depends on:**
- Trading plan
- Risk management
- Market selection
- Position sizing
- Entry/exit discipline

**Common approach:** Signals are often used as confirmation within an overall trading strategy, not as standalone decision triggers.

---

## 🔧 Technical Questions

### ⭐ What's the difference between TD and IGN signals?
<span style="color: #0aa1d5; font-weight: 600;">Signal Understanding</span>

**TD (Touchdown)** = Early warning
- Indicates early-cycle reversal conditions
- Typically viewed as observation signal, not entry trigger
- Often appears first in a reversal sequence

**IGN (Ignition)** = Momentum indication
- Indicates momentum breakout conditions
- Commonly interpreted as potential long entry signal
- Often follows TD signals

**Common pattern sequence:**
1. TD appears → Many traders begin observation
2. IGN appears → Often interpreted as entry consideration
3. Price moves up → Position monitoring phase
4. CAP/BDN appears → Often interpreted as exit consideration

The [Quick Start Guide](start-quick.md) explains all 5 signal types.

### 🎨 Can I customize indicator settings?
<span style="color: #f59e0b; font-weight: 600;">Advanced Settings</span>

**Yes, but carefully.**

Most indicators have customizable settings:
- Colors and visual styles
- Alert preferences
- Display options

**Recommendations:**
- **Beginners**: Default settings are recommended
- **Advanced**: Visual preferences can be adjusted
- **Very advanced**: Parameters can be experimented with on test charts first

**Warning:** Changing core calculation parameters may affect signal quality. Default settings have been optimized through extensive testing.

### 📊 How often do signals appear?
<span style="color: #10b981; font-weight: 600;">Signal Frequency</span>

**It depends on market conditions and timeframe.**

**Typical frequency:**
- **Daily chart**: 1-4 signals per month per signal type
- **4H chart**: 2-8 signals per month
- **1H chart**: Multiple signals per week

**More signals occur when:**
- Market is trending with pullbacks
- Volatility is moderate to high
- Clear support/resistance levels exist

**Fewer signals occur when:**
- Market is ranging/sideways
- Very low volatility
- No clear structure

This is normal. Quality over quantity—Pentarch waits for high-probability setups.

### 🔄 Do I need Janus Atlas if I have Omnideck?
<span style="color: #0aa1d5; font-weight: 600;">Indicator Overlap</span>

**No, Omnideck includes Janus Atlas levels.**

**What's included in Omnideck:**
- All Pentarch signals
- All Janus Atlas levels
- Minimal Flow volume analysis
- Harmonic Oscillator momentum
- Bias indicators
- Everything in one chart

**When Janus might be used separately:**
- Cleaner charts are desired (just levels, no signals)
- Only levels-based strategies are being traded
- A custom multi-indicator setup is being built

Most users choose either Omnideck (everything) OR individual indicators (custom setup).

---

## 🆘 Common Issues

### ⚠️ Signals appearing then disappearing?
<span style="color: #dc2626; font-weight: 600;">Critical Fix Required</span>

**This means alerts are NOT set to "Once Per Bar Close".**

**Fix:**
1. Existing alerts can be deleted
2. New alert can be created
3. Trigger should be set to **"Once Per Bar Close"**
4. Alert can be saved

Signals that appear mid-bar can change before close. This is normal and why close-confirmed alerts are used.

### 🔊 Too many alerts?
<span style="color: #f59e0b; font-weight: 600;">Alert Filtering</span>

**Solutions:**
1. **Higher timeframes can be used** (switch from 1H to 4H or Daily)
2. **More selectivity can be applied** (only trade IGN and CAP, ignore others)
3. **Market condition filtering can be implemented** (only trade during trending markets)
4. **Confluence can be used** (only take signals at key Janus levels)

### 🔇 Not enough signals?
<span style="color: #f59e0b; font-weight: 600;">Increasing Signal Frequency</span>

**Things to check:**
1. **Timeframe**: Lower timeframes = more signals
2. **Market state**: Ranging markets produce fewer reversal signals
3. **Indicator settings**: Default settings should be verified
4. **Symbol**: A more volatile asset can be tried

**Remember:** Fewer signals is often better—quality over quantity.

### ❌ Indicator disappeared from TradingView?
<span style="color: #dc2626; font-weight: 600;">Access Issue</span>

**Possible reasons:**

1. **Access expired** - Support can be contacted to verify subscription
2. **Indicator updated** - New version number can be looked for
3. **TradingView glitch** - Browser refresh or cache clear may help

**Solution:** TradingView's Indicators menu → Search "<span class="signal-pilot-brand">Signal Pilot</span>" or specific indicator name can be accessed

---

## 💡 Best Practices

### ⚡ Should I use all indicators at once?
<span style="color: #ff6b35; font-weight: 600;">Setup Advice</span>

**Most traders use 1-3 indicators maximum.**

**Recommended combinations:**

**Beginner:** Start simple
- Just Pentarch
- OR just Omnideck (has everything)

**Intermediate:** Add confluence
- Pentarch + Janus Atlas
- Pentarch + Minimal Flow

**Advanced:** Custom setups
- Pentarch + Janus + Harmonic Oscillator
- Omnideck + custom indicators

**Avoid:** Putting all 7 indicators on one chart—it's overwhelming and unnecessary.

### 📋 What's your recommended workflow?
<span style="color: #10b981; font-weight: 600;">Trading Process</span>

The complete [Trading Workflow Guide](ref-workflow.md) provides the step-by-step process.

**Common workflow pattern:**
1. **Higher timeframe analysis** (Daily) for bias and major levels
2. **Entry timeframe selection** (4H or 1H)
3. **Signal observation** at key levels
4. **Position entry considerations** with stop loss planning
5. **Trade monitoring** using warning signals
6. **Exit considerations** based on opposite signals

### ⭐ Should I take every signal?
<span style="color: #0aa1d5; font-weight: 600;">Filtering Approach</span>

**No. Selectivity is recommended.**

**Best signals have:**
- Confluence with major support/resistance (Janus levels)
- Alignment with higher timeframe trend
- Good risk/reward ratio (2:1 minimum)
- Clear invalidation point for stop loss

**Signals can be skipped when:**
- Against major trend
- In middle of nowhere (no key levels nearby)
- Poor risk/reward
- News events pending

**Remember:** The best trade is sometimes no trade.

---

## 📚 Additional Resources

**For additional questions:**

- [Troubleshooting Guide](ref-troubleshooting.md) - Solutions to common problems
- [Glossary](ref-glossary.md) - Definitions of all terms and signals
- [Support & Access](about-support.md) - Contact information
- [Quick Start Guide](start-quick.md) - 5-minute beginner tutorial

**For further learning:**

- [Trading Workflow](ref-workflow.md) - Complete trading process
- [Comparison Guide](ref-comparison.md) - Choose the right indicators
- [Best Practices](ref-best-practices.md) - Pro tips and guidelines
- [Education Portal](https://education.signalpilot.io/) - Video tutorials and courses

# Frequently Asked Questions

Find answers to common questions about Signal Pilot indicators. Can't find what you're looking for? Check our [Troubleshooting Guide](ref-troubleshooting.md) or [Contact Support](about-support.md).

---

## 🚀 Getting Started

### ⭐ Do I need all 7 indicators?
<span style="color: #0aa1d5; font-weight: 600;">Most Common Question</span>

No! You can start with just **Pentarch** for reversal signals. Most traders begin with 1-2 indicators and add more as they gain experience. See our [Comparison Guide](ref-comparison.md) to choose which indicators match your trading style.

### ⭐ What's the difference between Pentarch and Omnideck?
<span style="color: #0aa1d5; font-weight: 600;">Key Comparison</span>

- **Pentarch**: Focused reversal detector with 5 distinct event types (TD, IGN, WRN, CAP, BDN). Best for catching turning points.
- **Omnideck**: All-in-one dashboard combining multiple indicators. Shows Pentarch signals PLUS levels, momentum, volume, and bias—everything on one chart.

**Use Pentarch if:** You want clean, focused reversal signals
**Use Omnideck if:** You want all analysis tools in one place

See the [Indicator Comparison Guide](ref-comparison.md) for detailed differences.

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

You can use any timeframe, but start higher and work your way down as you gain confidence.

### 🔧 Do I need a specific TradingView subscription?
<span style="color: #8b5cf6; font-weight: 600;">Required Setup</span>

**Minimum:** TradingView Essential (paid plan)

**Why?** The indicators use advanced features that require a paid TradingView subscription. Free accounts won't work.

**Recommended:** Pro or Pro+ for alert automation and faster data.

---

## ⚙️ Setup & Configuration

### 🔧 How do I get access?
<span style="color: #8b5cf6; font-weight: 600;">First Steps</span>

1. **Purchase** the suite at [signalpilot.io](https://signalpilot.io/#pricing)
2. **Receive email** with access instructions
3. **Provide** your TradingView username
4. **Get invited** to private indicators (usually within 24 hours)
5. **Add indicators** from TradingView's Indicators menu

### ⚡ Why am I not seeing signals on my chart?
<span style="color: #ff6b35; font-weight: 600;">Common Issue</span>

**Check these common issues:**

1. **Wrong indicator version**
   - Make sure you're using the latest version (e.g., "Pentarch v8.9")
   - Old versions may have been removed

2. **Timeframe too low**
   - Try switching to 4H or Daily
   - Lower timeframes may have fewer signals during range periods

3. **Indicator not loaded properly**
   - Remove and re-add the indicator
   - Refresh your browser

4. **Market conditions**
   - Pentarch signals reversals—if market is ranging, signals will be sparse
   - This is normal and by design

5. **Chart data issues**
   - Ensure you have enough historical data loaded
   - Try a different symbol to test

See [Troubleshooting Guide](ref-troubleshooting.md) for more detailed solutions.

### How do I know if alerts are working?

**Test your alerts:**

1. **Create a test alert** on a low timeframe (5m or 15m)
2. **Wait for the next signal** (shouldn't take long on lower timeframes)
3. **Verify you received notification** via phone/email
4. **Check notification settings** in TradingView mobile app

**Key setting:** Always use "Once Per Bar Close" for alerts to avoid repainting.

### Can I use these on multiple devices?

Yes! Your TradingView account and indicator access work on:
- Desktop browsers
- TradingView mobile app (iOS/Android)
- Multiple computers
- Tablet browsers

Your indicators and settings sync automatically across all devices via TradingView.

---

## 📊 Usage & Trading

### ⭐ Does it repaint?
<span style="color: #0aa1d5; font-weight: 600;">Critical Question</span>

**No—signals are final on bar close.**

Our indicators follow a strict non-repainting policy:
- Signals finalize when the candle closes
- HTF (higher timeframe) data confirms first
- What you see is what you get—no disappearing signals
- Alerts trigger only on confirmed, closed bars

See our [Non-Repainting Policy](ref-non-repaint.md) for technical details.

### Which markets and timeframes work?

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

**What you might see:**
- ❌ Signal appears mid-bar but disappears → Normal, bar didn't close
- ✅ Signal appears after bar close → Confirmed, this is real

**Best practice:** Set alerts to "Once Per Bar Close" to only receive confirmed signals.

### Can I automate trading with these indicators?

**Yes!** Automation is fully supported.

**How to automate:**
1. **Set up alerts** with "Once Per Bar Close"
2. **Use webhooks** to send alerts to your trading platform
3. **Configure your trading bot** to act on webhook signals

See guides:
- [How to Set Alerts](how-to-alerts.md)
- [Webhook Integration](how-to-webhooks.md)

**Popular automation platforms:**
- TradingView's built-in Paper Trading
- 3Commas
- Alertatron
- Custom bots via webhook

**Important:** Always backtest and paper trade automated strategies before using real money.

### ⭐ How accurate are the signals?
<span style="color: #0aa1d5; font-weight: 600;">Understanding Expectations</span>

**Signal Pilot indicators are tools, not crystal balls.**

**What they do:**
- Identify high-probability reversal zones
- Show key support/resistance levels
- Display momentum shifts
- Alert you to potential opportunities

**What they don't do:**
- Guarantee profitable trades
- Predict the future with certainty
- Replace proper risk management

**Success depends on:**
- Your trading plan
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

See [Quick Start Guide](start-quick.md) for all 5 signal types explained.

### Can I customize indicator settings?

**Yes, but carefully.**

Most indicators have customizable settings:
- Colors and visual styles
- Alert preferences
- Display options

**What we recommend:**
- **Beginners**: Use default settings
- **Advanced**: Adjust visual preferences only
- **Very advanced**: Experiment with parameters on test charts first

**Warning:** Changing core calculation parameters may affect signal quality. Default settings have been optimized through extensive testing.

### How often do signals appear?

**It depends on market conditions and timeframe.**

**Typical frequency:**
- **Daily chart**: 1-4 signals per month per signal type
- **4H chart**: 2-8 signals per month
- **1H chart**: Multiple signals per week

**More signals when:**
- Market is trending with pullbacks
- Volatility is moderate to high
- Clear support/resistance levels exist

**Fewer signals when:**
- Market is ranging/sideways
- Very low volatility
- No clear structure

This is normal! Quality over quantity—Pentarch waits for high-probability setups.

### Do I need Janus Atlas if I have Omnideck?

**No, Omnideck includes Janus Atlas levels.**

**What's included in Omnideck:**
- All Pentarch signals
- All Janus Atlas levels
- Minimal Flow volume analysis
- Harmonic Oscillator momentum
- Bias indicators
- Everything in one chart

**When to use Janus separately:**
- You want cleaner charts (just levels, no signals)
- You're only trading levels-based strategies
- You're building a custom multi-indicator setup

Most users choose either Omnideck (everything) OR individual indicators (custom setup).

---

## 🆘 Common Issues

### Signals appearing then disappearing?

**This means alerts are NOT set to "Once Per Bar Close".**

**Fix:**
1. Delete existing alerts
2. Create new alert
3. Set trigger to **"Once Per Bar Close"**
4. Save alert

Signals that appear mid-bar can change before close. This is normal and why we use close-confirmed alerts.

### Too many alerts?

**Solutions:**
1. **Use higher timeframes** (switch from 1H to 4H or Daily)
2. **Be more selective** (only trade IGN and CAP, ignore others)
3. **Filter by market conditions** (only trade during trending markets)
4. **Use confluence** (only take signals at key Janus levels)

### Not enough signals?

**Check:**
1. **Timeframe**: Lower timeframes = more signals
2. **Market state**: Ranging markets produce fewer reversal signals
3. **Indicator settings**: Verify you're using default settings
4. **Symbol**: Try a more volatile asset

**Remember:** Fewer signals is often better—quality over quantity.

### Indicator disappeared from TradingView?

**Possible reasons:**

1. **Access expired** - Contact support to verify subscription
2. **Indicator updated** - Look for new version number
3. **TradingView glitch** - Refresh browser or clear cache

**Solution:** Go to TradingView's Indicators menu → Search "Signal Pilot" or specific indicator name

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

### What's your recommended workflow?

See our complete [Trading Workflow Guide](ref-workflow.md) for the step-by-step process.

**Common workflow pattern:**
1. **Higher timeframe analysis** (Daily) for bias and major levels
2. **Entry timeframe selection** (4H or 1H)
3. **Signal observation** at key levels
4. **Position entry considerations** with stop loss planning
5. **Trade monitoring** using warning signals
6. **Exit considerations** based on opposite signals

### ⭐ Should I take every signal?
<span style="color: #0aa1d5; font-weight: 600;">Filtering Approach</span>

**No! Be selective.**

**Best signals have:**
- Confluence with major support/resistance (Janus levels)
- Alignment with higher timeframe trend
- Good risk/reward ratio (2:1 minimum)
- Clear invalidation point for stop loss

**Skip signals when:**
- Against major trend
- In middle of nowhere (no key levels nearby)
- Poor risk/reward
- News events pending

**Remember:** The best trade is sometimes no trade.

---

## 📚 Additional Resources

**Still have questions?**

- [Troubleshooting Guide](ref-troubleshooting.md) - Solutions to common problems
- [Glossary](ref-glossary.md) - Definitions of all terms and signals
- [Support & Access](about-support.md) - Contact information
- [Quick Start Guide](start-quick.md) - 5-minute beginner tutorial

**Want to learn more?**

- [Trading Workflow](ref-workflow.md) - Complete trading process
- [Comparison Guide](ref-comparison.md) - Choose the right indicators
- [Best Practices](ref-best-practices.md) - Pro tips and guidelines
- [Education Portal](https://education.signalpilot.io/) - Video tutorials and courses

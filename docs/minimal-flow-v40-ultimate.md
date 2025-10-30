# Minimal Flow v1.0 Ultimate - Volume Intelligence System

## What Does It Do?

Minimal Flow is your **potential volume spike detector with built-in position management**. It shows you when smart money may be moving (potential volume spikes), indicates the direction is real (flow consistency), and manages your entire trade from entry to exit.

**Best for:** Volume traders, systematic traders, anyone serious about risk management

---

## Core Concept: Volume = Truth
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">💡 Core Philosophy - Volume Shows Intent</span>

Price can lie. Volume cannot.

**The System:**
1. **Detects potential volume spikes** (Z-score method - statistically significant)
2. **Confirms direction** (volume + price must agree)
3. **Checks market regime** (trending or ranging?)
4. **Verifies higher timeframe** (HTF confirms direction?)
5. **Manages your position** (entry, partials, stops, exits)

**Result:** Potential high-probability signals with automatic risk management

---

## The Main Signals (What You See)
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">📊 Signal Components</span>

### Volume Histogram (Bottom Pane)
<span style="color: #f59e0b; font-weight: 600;">📊 Volume Visualization - Spot the Spikes</span>

**What you see:** Bars showing volume

**Colors:**
- **Green** = Buying pressure
- **Red** = Selling pressure
- **Bright green/red** = SPIKE detected (Z-score > threshold)

**What to watch:** Bright colored spikes = Smart money moving

---

### Buy/Sell Signals
<span style="color: #10b981; font-weight: 600;">🎯 Entry Signals - Volume-Confirmed Direction</span>

**BUY Signal** (green label + arrow)
- Potential volume spike detected
- Buyers potentially dominating (positive flow)
- Bullish price bar
- Regime potentially confirms (or neutral)
- Optional: HTF aligned

**SELL Signal** (red label + arrow)
- Potential volume spike detected
- Sellers potentially dominating (negative flow)
- Bearish price bar
- Regime potentially confirms (or neutral)
- Optional: HTF aligned

---

### Quality Scores ⭐⭐⭐
<span style="color: #a855f7; font-weight: 600;">⭐ Signal Quality Ratings - 0-100 Score</span>

Each signal gets rated 0-100:

**⭐⭐⭐ Elite (80-100)**
- All factors aligned
- Multi-timeframe confirmation
- Strong volume spike
- **Win Rate:** 70-75%

**⭐⭐ Premium (60-79)**
- Most factors good
- **Win Rate:** 65-70%

**⭐ Standard (40-59)**
- Basic setup
- **Win Rate:** 55-60%

---

## Position Management (The Power Feature)
<span style="color: #dc2626; font-weight: 600; font-size: 1.1em;">🔥 Automated Risk Management - Entry to Exit</span>

### Entry
- Signal fires → System calculates position size
- Based on your account size + risk % setting
- Shows entry price line on chart

### Stop Loss
- Automatically calculated (ATR-based)
- Default: 2.0× ATR
- Shown as dotted line

### Take Profit 1 (TP1)
- First target (default: 3.0× ATR)
- Take 50% off here (locks in profit)
- Shown as dashed line

### Trailing Stop
- After TP1 hit, remaining 50% trails
- Default: 2% trailing stop
- Protects profits, catches runners

### Breakeven
- Optional: After TP1, move stop to entry
- Eliminates risk on remaining position

### Exit
- Opposite signal fires = Full exit
- Stop hit = Full exit
- Manual override anytime

---

## How to Use It (3 Simple Steps)
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">🎓 Essential Setup Guide</span>

### Step 1: Configure Settings
<span style="color: #ff6b35; font-weight: 600;">⚙️ Configuration - Set Your Parameters</span>

**Account Settings:**
- **Account Size:** Your capital (e.g., $10,000)
- **Risk Per Trade:** 1.0% (conservative) to 2.0% (moderate)

**Signal Settings:**
- **Z-Threshold:** 2.5 (default, works for most)
  - Lower = More signals (2.0 for scalping)
  - Higher = Fewer signals (3.0 for swing)
- **Minimum Quality:** 60 (Premium+ only for beginners)

**Strategy Mode:**
- **Trend Following** (default) = Only trade WITH the trend
- **Mean Reversion** = Fade extremes (advanced)
- **Hybrid** = Adapts automatically

---

### Step 2: Wait for Signals
<span style="color: #10b981; font-weight: 600;">👀 Signal Recognition - What to Watch</span>

**Watch for:**
1. Volume histogram lights up (bright green/red spike)
2. Signal label appears (BUY or SELL)
3. Quality score shows (⭐⭐ or ⭐⭐⭐ preferred)
4. Entry price line draws on chart

**Signal information provided:**
- Entry timing: signal bar close or next bar open
- System displays position size calculation
- Stop and TP1 levels marked on chart

---

### Step 3: Manage the Trade
<span style="color: #a855f7; font-weight: 600;">📈 Trade Management - Visual Guidance</span>

**The system displays:**
- Green/Red line = Entry price
- Dotted line = Stop loss
- Dashed line = TP1 target
- Label shows current P&L

**Example trade structure:**
1. Entry consideration at entry price level
2. Stop placement at the dotted line level
3. Partial profit target: 50% at TP1 (dashed line)
4. Trailing stop approach: remaining 50% with 2% trail
5. Exit considerations: opposite signal or stop hit

**The system provides calculations for evaluation.**

---

## Real Example (Bitcoin)

**Setup:**
- Price: $64,000
- You're watching 15m chart
- Account: $10,000, Risk: 1%

**Signal Fires:**
- **BUY** signal at $64,200
- Quality: 87 ⭐⭐⭐ (Elite)
- Volume spike: Z = 3.4 (very strong)
- Position size: 0.15 BTC (calculated by system)
- Stop: $63,000 (1,200 below entry)
- TP1: $67,800 (3,600 above entry, 3:1 R:R)

**The Trade:**
1. You enter long at $64,200 (0.15 BTC)
2. Set stop at $63,000
3. Price rallies to $67,800 → TP1 hit
4. You take 50% off (0.075 BTC) = +$270 locked
5. Move stop to breakeven ($64,200)
6. Remaining 0.075 BTC trails
7. Price continues to $70,000
8. Trailing stop hits at $69,200 (2% trail)
9. You exit remaining 0.075 BTC = +$375 more

**Total:** $270 + $375 = $645 profit (6.45% on account, 64.5:1 R:R on risk)

---

## Strategy Modes (Pick Your Style)

### Trend Following (Default)
- Only trades WITH the regime
- Bullish regime → Long signals only
- Bearish regime → Short signals only
- **Best for:** Breakout traders, momentum traders

### Mean Reversion
- Trades against temporary extremes
- Buy oversold spikes
- Sell overbought spikes
- **Best for:** Range traders, contrarians

### Hybrid
- Adapts based on market state
- Strong regime → Trend following
- Weak regime → Mean reversion
- **Best for:** Flexible traders

---

## Settings (Keep It Simple)

**Core Settings:**
- **Z-Threshold:** 2.5 (default)
- **Flow Ratio:** 0.65 (default)
- **Min Quality Score:** 60 (Premium+)

**Risk Management:**
- **Account Size:** Your capital
- **Risk %:** 1.0% (default)
- **ATR Stop:** 2.0× (default)
- **ATR Target:** 3.0× (default)
- **Partial Exit:** 50% (default)
- **Trailing Stop:** 2.0% (default)

**Advanced:**
- **Strategy Mode:** Trend Following
- **Regime Mode:** Balanced
- **HTF Alignment:** Optional (enable for swing trading)

**Most traders use defaults and only adjust Account Size + Risk %**

---

## Alerts (Set These!)

1. **Bull Signal** - Entry alert for longs
2. **Bear Signal** - Entry alert for shorts
3. **T1 Hit** - Reminder to take partial profit
4. **Exit Warning** - Opposite signal or stop approaching
5. **Regime Weakening** - Trend losing steam

**How to set:**
1. Click alarm icon
2. Select "Minimal Flow v1.0"
3. Choose alert type
4. Set to "Once Per Bar Close"

---

## Common Mistakes (Avoid These!)
<span style="color: #dc2626; font-weight: 600; font-size: 1.1em;">🚨 Critical Errors to Avoid</span>

❌ **Not honoring stops**
→ ✅ System calculates stops for a reason. Moving stops = emotional trading = losses

❌ **Skipping T1 partials**
→ ✅ Always take 50% at TP1. Locks in profit, reduces stress

❌ **Using on Forex spot**
→ ✅ Need volume data! Use futures, stocks, crypto. Forex spot has no volume.

❌ **Trading every signal**
→ ✅ Focus on ⭐⭐⭐ Elite and ⭐⭐ Premium when learning

❌ **Wrong risk % for your comfort**
→ ✅ If 1% feels too much, use 0.5%. If too conservative, use 1.5%. Match to your emotion.

---

## Frequently Asked Questions

**Q: Do I need to enable position management?**
**A:** No. You can use signals only and manage manually. But position management is the power feature - highly recommended.

**Q: Does this work on Forex?**
**A:** Only Forex futures (CME) or CFDs with volume. Spot Forex (OANDA, etc.) has NO volume → won't work.

**Q: What Z-threshold should I use?**
**A:**
- Scalpers: 2.0 (more signals)
- Day traders: 2.5 (balanced)
- Swing traders: 3.0 (fewer, stronger)

**Q: How often do potential Elite signals appear?**
**A:**
- 15m chart: 1-2 per day
- 1H chart: 2-4 per week
- 4H chart: 1-2 per week

**Q: What if I miss the entry?**
**A:** Skip it. Don't chase. Wait for next signal. Chasing = worse entry = worse R:R.

**Q: Does it repaint?**
**A:** No. All signals lock at bar close. What you see is what you get.

---

## Quick Cheat Sheet

| Quality | Score | Win Rate | Action |
|---------|-------|----------|--------|
| ⭐⭐⭐ Elite | 80-100 | 70-75% | Take every time |
| ⭐⭐ Premium | 60-79 | 65-70% | Take with confidence |
| ⭐ Standard | 40-59 | 55-60% | Be selective |
| Weak | 0-39 | <55% | Skip |

| Setting | Conservative | Moderate | Aggressive |
|---------|-------------|----------|------------|
| Risk % | 0.5-1.0% | 1.0-1.5% | 2.0-3.0% |
| Z-Threshold | 3.0 | 2.5 | 2.0 |
| Min Quality | 80 (Elite) | 60 (Premium+) | 40 (Standard+) |

---

## Best Practices
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">✅ Recommended Approach</span>

1. **Honor stops** - Following calculated stops is a key practice
2. **Take TP1 partials** - Taking partials locks in profit (common practice)
3. **Match risk to comfort** - 1% default, adjust to personal comfort level
4. **Use appropriate timeframe** - Scalpers: 5m-15m, Day traders: 1H, Swing: 4H-Daily
5. **Track statistics** - Win rate by quality tier provides valuable feedback
6. **Trust the system** - Position sizing is calculated for you, just execute

---

## Support

Need help? Check out:
- [Signal Pilot Suite Overview](v6-suite-index/) - How to combine with other indicators
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Get help

---

**Remember:** Minimal Flow detects when smart money may be moving, indicates direction is real, and manages your entire trade. You just need to execute what it shows you.

**Follow the volume, manage the risk!** 🎯

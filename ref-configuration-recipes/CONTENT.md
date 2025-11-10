# Configuration Recipes

**Pre-Built Setups for Different Trading Styles**

This page provides ready-to-use configuration templates for Signal Pilot indicators. Copy the settings below and apply them to your indicators based on your trading style and timeframe preferences.

---

## 📋 How to Use These Recipes

1. **Choose your trading style** below (Scalper, Day Trader, Swing Trader, Position Trader)
2. **Copy the settings** for your chosen indicator
3. **Open the indicator settings** in TradingView
4. **Apply the configuration** by matching each parameter
5. **Adjust as needed** based on your specific market and preferences

**Note:** These are starting points. Individual preferences and market conditions vary. Test configurations on historical data before applying to live conditions.

---

## 🏃 Recipe 1: SCALPER SETUP

**Best For:** 1-minute to 15-minute timeframes
**Goal:** Fast entries, quick exits, high frequency
**Suitable Markets:** Forex, Crypto, Futures with high liquidity

### Pentarch v1.0 - Scalper Settings

```
Signal Sensitivity: Aggressive
HTF Confirmation: OFF (too slow for scalping)
Pilot Line Period: 8 (faster response)
NanoFlow Display: ON (quick momentum checks)
Regime Box: ON (avoid counter-trend scalps)
Alert Configuration: TD Signals + IGN only (focus on strongest)
```

**Strategy Notes:**
- Watch for TD signals in 1min-5min
- IGN signals provide quick entry confirmation
- Exit on opposite color regime or first profit target
- Risk management critical at this speed

### Harmonic Oscillator v1.0 - Scalper Settings

```
Signal Mode: Aggressive (1 vote required)
HTF Filter: OFF
Divergence Detection: OFF (too slow for scalping)
Composite Smoothing: Fast
Overbought/Oversold: 75/25 (tighter zones)
```

**Strategy Notes:**
- Look for composite entering 25 or exiting 75 zones
- Fast reversals common
- Combine with 1-minute Regime Box for context

### Volume Oracle v1.0 - Scalper Settings

```
Strategy Mode: Mode 1 (highest frequency)
Position Tracking: ON
Exit Targets: Aggressive (quick profit taking)
Volume Spike Threshold: Low sensitivity
```

**Strategy Notes:**
- VBS+ and VBS- fire frequently in Mode 1
- Use position tracker for quick P&L visibility
- Set tight stops (volatility high at small timeframes)

---

## 📊 Recipe 2: DAY TRADER SETUP

**Best For:** 15-minute to 1-hour timeframes
**Goal:** Balanced frequency, intraday positions
**Suitable Markets:** Stocks, Index Futures, Major Crypto pairs

### Pentarch v1.0 - Day Trader Settings

```
Signal Sensitivity: Balanced
HTF Confirmation: 4H or Daily (for bias)
Pilot Line Period: 13 (default)
NanoFlow Display: ON
Regime Box: ON (critical for bias)
Alert Configuration: All cycle events (TD, IGN, WRN, CAP, BDN)
```

**Strategy Notes:**
- Wait for HTF confirmation before entry
- TD 9 signals on 15min/1H with Daily regime = high confidence
- WRN signals provide early exit warning
- CAP signals indicate potential trend exhaustion

### Janus Atlas v1.0 - Day Trader Settings

```
Level Types Active:
✓ Daily High/Low
✓ Daily VWAP
✓ Weekly High/Low
✓ POC/VAH/VAL (Volume Profile)
✓ Market Structure (BOS/CHoCH)
✓ Liquidity Sweeps

Extended Levels: 2-3 periods back
Label Size: Small (reduce clutter)
```

**Strategy Notes:**
- Plan trades around Daily VWAP and POC
- Weekly levels provide major S/R zones
- Market structure breaks confirm trend changes
- Liquidity sweeps often precede reversals

### Omnideck v1.0 - Day Trader Settings

```
Active Systems (recommended 4-6):
✓ TD Sequential
✓ Squeeze Detector
✓ EMA Trio (trend filter)
✓ Regime Box (bias)
✓ BMSB (Bull Market Support Band)
✓ SuperTrend

Candlestick Patterns: ON
Supply/Demand Zones: 3-star minimum
Liquidity Sweeps: ON
```

**Strategy Notes:**
- TD 9 + Squeeze release + Regime alignment = strong setup
- BMSB acts as dynamic support in uptrends
- SuperTrend provides clear trend direction
- Confluence of 3+ systems = highest probability setups

---

## 📈 Recipe 3: SWING TRADER SETUP

**Best For:** 4-hour to Daily timeframes
**Goal:** Multi-day holds, fewer but higher-quality setups
**Suitable Markets:** All markets (stocks, crypto, forex, commodities)

### Pentarch v1.0 - Swing Trader Settings

```
Signal Sensitivity: Conservative
HTF Confirmation: Weekly (for major bias)
Pilot Line Period: 21 (slower, cleaner)
NanoFlow Display: ON
Regime Box: ON (filter all trades)
Alert Configuration: TD + CAP + BDN only (exhaustion focus)
```

**Strategy Notes:**
- Daily TD 9 with Weekly confirmation = swing setup
- CAP signals on Daily = potential multi-day reversal
- BDN signals = trend decline phase, consider exits
- Hold through intraday noise, focus on daily closes

### Plutus Flow v1.0 - Swing Trader Settings

```
Smoothing Level: 4 (clean trends)
Trend Line: ON
Divergence Detection: ON (critical for swings)
Signal Display: Both entry/exit
HTF Analysis: Weekly OBV trend
```

**Strategy Notes:**
- Divergence on Daily + signal = high-probability reversal
- OBV trend confirms price trend health
- Rising price + flat/falling OBV = distribution warning
- Wait for OBV trend line cross for entries

### Janus Atlas v1.0 - Swing Trader Settings

```
Level Types Active:
✓ Weekly High/Low
✓ Monthly High/Low
✓ Weekly VWAP
✓ POC/VAH/VAL (Weekly profile)
✓ Pivot Points (Weekly/Monthly)
✓ Market Structure (Higher timeframe)

Extended Levels: 5-10 periods back
Fibonacci Levels: ON
```

**Strategy Notes:**
- Plan swings around Weekly/Monthly levels
- Monthly highs/lows = major reversal zones
- Weekly POC acts as magnet during consolidation
- Fibonacci confluences with Weekly levels = key zones

---

## 📆 Recipe 4: POSITION TRADER SETUP

**Best For:** Daily to Weekly timeframes
**Goal:** Multi-week/month holds, macro trend following
**Suitable Markets:** Stocks, Index ETFs, Major Forex pairs, BTC

### Pentarch v1.0 - Position Trader Settings

```
Signal Sensitivity: Conservative
HTF Confirmation: Monthly (macro view)
Pilot Line Period: 34 or 55 (Fibonacci periods)
NanoFlow Display: Optional (less relevant)
Regime Box: ON (only trade with macro trend)
Alert Configuration: TD on Weekly + CAP/BDN only
```

**Strategy Notes:**
- Weekly TD 9 with Monthly regime = position setup
- CAP on Weekly = major cycle peak forming
- Ignore daily/hourly noise completely
- Hold positions for weeks/months until regime changes

### Harmonic Oscillator v1.0 - Position Trader Settings

```
Signal Mode: Conservative (3 votes required)
HTF Filter: ON (use Monthly)
Divergence Detection: ON
Composite Smoothing: Slow
Timeframe: Weekly chart minimum
```

**Strategy Notes:**
- 3-vote signals on Weekly = rare but powerful
- Hidden divergences on Weekly = continuation setups
- Regular divergences on Weekly = major reversals
- Overbought/oversold on Weekly = significant extremes

### Volume Oracle v1.0 - Position Trader Settings

```
Strategy Mode: Mode 5 (lowest frequency, highest quality)
Position Tracking: ON
Exit Targets: Conservative (let winners run)
Timeframe: Weekly chart
```

**Strategy Notes:**
- Mode 5 signals on Weekly = very rare
- VBS+ on Weekly with volume surge = institutional accumulation
- Hold until VBS- appears on Weekly (may be months)
- Weekly volume patterns more reliable than daily

---

##Comparing All 4 Styles

| Style | Timeframe | Holding Period | Signals per Week | Complexity |
|-------|-----------|----------------|------------------|------------|
| **Scalper** | 1m-15m | Minutes-Hours | 20-50+ | High |
| **Day Trader** | 15m-1H | Hours-1 Day | 5-15 | Medium-High |
| **Swing Trader** | 4H-Daily | Days-Weeks | 2-8 | Medium |
| **Position Trader** | Daily-Weekly | Weeks-Months | 1-4 | Low |

---

## 🎯 Recipe 5: CONSERVATIVE SETUP (Any Timeframe)

**Best For:** Risk-averse traders, beginners, account preservation focus
**Goal:** Fewer signals, higher confirmation, lower risk

### Universal Conservative Settings

**Pentarch v1.0:**
```
Signal Sensitivity: Conservative
HTF Confirmation: ALWAYS ON (use 4× chart timeframe)
Pilot Line Period: 21+
Alert Configuration: TD + CAP only
Minimum Confluence: 3 layers confirmed
```

**Harmonic Oscillator v1.0:**
```
Signal Mode: Conservative (3 votes)
HTF Filter: ON
Divergence: Required for entry
Extreme Zones: 80/20 (wider)
```

**Omnideck v1.0:**
```
Active Systems: Maximum 3-4 (avoid complexity)
System Selection: TD + Regime + EMA Trio only
Candlestick Patterns: OFF (reduce noise)
Minimum Confluence: 3 systems aligned
```

**Strategy Approach:**
- Wait for all confirmations before entry
- Smaller position sizes
- Wider stops
- Accept missing some moves for higher win rate

---

## ⚡ Recipe 6: AGGRESSIVE SETUP (Any Timeframe)

**Best For:** Experienced traders, higher risk tolerance, active monitoring
**Goal:** Maximum signal frequency, fast execution, active management

### Universal Aggressive Settings

**Pentarch v1.0:**
```
Signal Sensitivity: Aggressive
HTF Confirmation: OFF (slower timeframe confirmation optional)
Pilot Line Period: 8
Alert Configuration: ALL events (TD, IGN, WRN, CAP, BDN)
Minimum Confluence: 2 layers minimum
```

**Harmonic Oscillator v1.0:**
```
Signal Mode: Aggressive (1 vote)
HTF Filter: OFF
Divergence: Helpful but not required
Extreme Zones: 70/30 (standard)
```

**Volume Oracle v1.0:**
```
Strategy Mode: Mode 1 or 2
Exit Targets: Aggressive
Position Tracking: ON (essential for active management)
```

**Strategy Approach:**
- Act on signals quickly
- Tighter stops (signals more frequent)
- Active position management
- Higher signal frequency = more opportunities but more noise

---

## 🔄 Recipe 7: COMBINATION STRATEGY

**Best For:** Advanced traders using multiple indicators together
**Timeframe:** Flexible (but keep all indicators on same timeframe)

### Setup 1: TREND + REVERSAL COMBO

**Primary:** Omnideck (trend identification)
**Secondary:** Pentarch (reversal timing)
**Support:** Janus Atlas (key levels)

**Omnideck Settings:**
```
Focus: EMA Trio + Regime Box + SuperTrend
Purpose: Identify current trend direction
```

**Pentarch Settings:**
```
Focus: TD Sequential signals
Purpose: Time entries at exhaustion within trend
```

**Janus Atlas Settings:**
```
Focus: Daily/Weekly VWAP + Market Structure
Purpose: Plan entries at key support/resistance
```

**Strategy:**
- Omnideck shows trend (Regime = green/red)
- Pentarch TD 9 appears counter to recent move
- Entry near Janus Atlas level (VWAP, POC, structure)
- Result: Reversal entry in direction of larger trend

### Setup 2: VOLUME + MOMENTUM CONFIRMATION

**Primary:** Volume Oracle (volume-based entries)
**Secondary:** Harmonic Oscillator (momentum confirmation)
**Support:** Pentarch Regime Box (bias filter)

**Volume Oracle Settings:**
```
Strategy Mode: Mode 3 (balanced)
Focus: VBS+ and VBS- signals
```

**Harmonic Oscillator Settings:**
```
Signal Mode: Balanced (2 votes)
Divergence: ON
```

**Pentarch Settings (Regime Box only):**
```
Purpose: Background bias filter
Entry Rule: Only take VBS+ in green regime, VBS- in red regime
```

**Strategy:**
- Wait for VBS+ signal (volume surge)
- Confirm with Harmonic Oscillator bullish signal
- Check Pentarch Regime = green
- All 3 align = high-probability long entry

---

## 🧪 Recipe 8: BACKTEST & OPTIMIZATION TEMPLATE

**How to Test Any Configuration:**

### Step 1: Choose Configuration
- Pick one recipe above as starting point

### Step 2: Historical Review (Manual Backtest)
```
1. Set chart to historical date (3-6 months ago)
2. Apply indicator with chosen settings
3. Scroll forward bar-by-bar
4. Note each signal and hypothetical outcome
5. Track:
   - Total signals
   - Winning signals
   - Losing signals
   - Average gain/loss
   - Maximum drawdown
```

### Step 3: Optimization
```
If too many signals:
- Increase signal sensitivity to Conservative
- Add HTF filter
- Require more confluence

If too few signals:
- Decrease to Aggressive mode
- Remove HTF filter
- Lower confluence requirements

If too many false signals:
- Add divergence requirement (Harmonic/Plutus)
- Filter by Regime Box
- Require level confluence (Janus Atlas)
```

### Step 4: Forward Test
```
1. Apply optimized settings
2. Test on NEW data (not the data you optimized on)
3. Paper trade for 20-30 signals
4. Evaluate performance
5. Refine further if needed
```

---

## 📚 Common Configuration Questions

### Q: Can I use Scalper settings on a Daily chart?
**A:** Not recommended. Settings are optimized for their timeframe range. Scalper settings on Daily will produce too many signals and noise.

### Q: Should I change settings for different markets (stocks vs crypto)?
**A:** Minor adjustments may help. Crypto (24/7) may need slightly faster settings than stocks (market hours only). Test both.

### Q: How many indicators should I use together?
**A:** Start with 1-2, maximum 3. More indicators = more complexity = more confusion. Master one first.

### Q: Can I combine settings from different recipes?
**A:** Yes! These are starting points. Many traders use "Day Trader timeframe with Conservative settings" or "Swing timeframe with Aggressive settings." Experiment.

### Q: How often should I change my configuration?
**A:** Rarely. Constant changes prevent pattern recognition. Test for 50-100 signals before changing. Consistency beats optimization.

### Q: What if my market is very choppy/ranging?
**A:** Add HTF filter, increase sensitivity to Conservative, require higher confluence. Ranging markets produce more false signals.

### Q: What if my market is strongly trending?
**A:** Aggressive settings work well in trends. Remove HTF filter (trend is obvious), focus on pullback entries (TD 9 counter-trend signals).

---

## ⚙️ Advanced Customization Tips

### Tip 1: Seasonal Adjustments
Some markets have seasonal patterns (summer doldrums in stocks, year-end rallies). Consider:
- More conservative in low-volume periods (summer, holidays)
- More aggressive during high-activity periods (earnings season, major events)

### Tip 2: Volatility Adjustments
- High volatility (VIX > 25): Increase stops, reduce position size, consider Conservative settings
- Low volatility (VIX < 15): Standard settings work well, tighter stops possible

### Tip 3: Multi-Timeframe Synergy
Use same indicator on 2-3 timeframes:
- Example: Pentarch on 15min (entries) + 1H (trend) + 4H (major bias)
- Only take 15min signals when 1H and 4H agree

### Tip 4: Session-Based Settings (Forex/Crypto)
- London Session: Higher volatility, Balanced/Aggressive settings
- Asian Session: Lower volatility, Conservative settings
- New York Open: Highest volatility, scalper setups shine

---

## 🎓 Learning Path Recommendation

### Week 1-2: Single Indicator, Single Timeframe
- Choose ONE indicator (recommend Pentarch v1.0)
- Choose ONE timeframe matching your style
- Use Conservative settings from Recipe 5
- Focus: Learn signal patterns, no real trading yet

### Week 3-4: Add Complexity
- Keep same indicator
- Add ONE support indicator (Janus Atlas for levels)
- Use Combination Strategy approach
- Focus: Learn how signals interact with levels

### Week 5-6: Optimize
- Review all signals from Week 3-4
- Adjust settings based on results
- Test optimization on NEW data
- Focus: Refinement based on experience

### Week 7+: Live Testing
- Paper trade or micro positions
- Track results meticulously
- Compare to backtesting expectations
- Adjust as real-world differs from historical

---

## 📝 Configuration Checklist

Before going live with any configuration:

- [ ] Backtested on 3+ months of historical data
- [ ] Forward tested on unseen data
- [ ] Paper traded for 20+ signals
- [ ] Documented win rate and average R:R
- [ ] Tested on at least 2 different market conditions (trend + range)
- [ ] Comfortable with signal frequency (not too many/too few)
- [ ] Understand why each setting is chosen (not random)
- [ ] Have clear entry rules
- [ ] Have clear exit rules
- [ ] Risk management plan defined
- [ ] Position sizing rules established

---

## 🔗 Related Resources

- [Indicator Comparison Guide](../ref-comparison/) - Choose the right indicators
- [Best Practices & Pro Tips](../ref-best-practices/) - Advanced strategies
- [Trading Workflow](../ref-workflow/) - Complete methodology
- [Troubleshooting Guide](../ref-troubleshooting/) - Fix common issues

---

## ⚠️ Important Disclaimers

**Educational Purpose:**
These configurations represent educational examples based on common trading style characteristics. Individual results vary significantly based on market conditions, execution quality, risk management, and trader skill.

**No Guarantee:**
No configuration guarantees profitable outcomes. All trading involves risk. These settings are starting points requiring individual testing and optimization.

**Personal Responsibility:**
Test all configurations thoroughly before applying to live markets. What works in backtesting may differ in real-time execution. Maintain appropriate risk management at all times.

---

## 💬 Feedback & Suggestions

Found a configuration that works well for you? Have suggestions for additional recipes?

- Review the [FAQ](../about-faq/) for common questions
- Visit [Support](../about-support/) for assistance
- Check the [Changelog](../about-changelog/) for updates

---

**Last Updated:** November 2025
**Version:** 1.0
**Applies to:** All Signal Pilot v1.0 indicators

---


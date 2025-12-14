# Volume Oracle Quick Reference

**Interactive Cheat Sheet:** [View Full Volume Oracle Quick Reference →](../../ref-cheatsheets-volume-oracle/)

Comprehensive guide to all 5 Volume Oracle systems: Regime Detection, Signal Generation, Risk Management, HTF Confirmation, and Strategy Modes.

## Volume Oracle Systems

### System 1: Regime Detection
**What it shows:** Current market phase via background colors

**Regime States:**
- **Green background** - Accumulation (bullish phase)
- **Red background** - Distribution (bearish phase)
- **Gray background** - Neutral (no clear direction)
- **Gold background** - Weakening (regime losing strength)

**Regime Strength (0-100%):**
- 80-100%: Very strong - high confidence
- 60-79%: Moderate - direction established
- 40-59%: Weak - be cautious
- 0-39%: Transitioning - wait for clarity

### System 2: Signal Generation
**What it shows:** Entry signals with quality ratings

**Signal Types:**
- **BULL Signal** - Bullish entry opportunity
- **BEAR Signal** - Bearish entry opportunity

**Quality Ratings:**
- **⭐⭐⭐** (80-100%) - High quality, strong confluence
- **⭐⭐** (60-79%) - Medium quality, good setup
- **⭐** (40-59%) - Lower quality, use caution

**Quality Factors:**
- Regime alignment
- Volume confirmation
- HTF confirmation
- Price structure

### System 3: Risk Management
**What it shows:** Auto-calculated trade levels

**Automatic Levels:**
- **Entry** - Optimal entry price
- **Stop Loss** - Risk-defined exit
- **Target 1 (T1)** - First profit target
- **Target 2 (T2)** - Extended target

**Position Sizing:**
```
Position Size = Risk Amount ÷ Stop Distance
```

**Example:**
- Risk Amount: $150
- Stop Distance: $3.27
- Position Size: 46 shares

### System 4: HTF Confirmation
**What it shows:** Higher timeframe alignment

**HTF Alignment:**
- **BULL + HTF Accumulation** = ✅ Aligned (stronger signal)
- **BULL + HTF Distribution** = ❌ Not Aligned (weaker signal)
- **BEAR + HTF Distribution** = ✅ Aligned (stronger signal)
- **BEAR + HTF Accumulation** = ❌ Not Aligned (weaker signal)

**Timeframe Mapping:**
| Your Chart | HTF Checked |
|------------|-------------|
| 5m         | 1H          |
| 15m        | 4H          |
| 1H         | Daily       |
| 4H         | Weekly      |

### System 5: Strategy Modes
**What it shows:** Trading approach selection

**Mode Options:**
- **Trend Following** - Signals only with established regime (trending markets)
- **Mean Reversion** - Signals at regime extremes (ranging markets)
- **Hybrid (Default)** - Adapts to current market conditions

## Volume Oracle Alerts

**13 Alerts in 4 Categories:**

| Category | Alerts |
|----------|--------|
| Entry | BULL Signal, BEAR Signal, High-Quality Signal |
| Position | T1 Hit, T2 Hit, Breakeven Moved |
| Regime | Accumulation Start, Distribution Start, Regime Weakening |
| HTF | HTF Aligned, HTF Conflict |

## Common Mistakes

1. Ignoring signal quality ratings (taking ⭐ signals same as ⭐⭐⭐)
2. Trading against HTF regime (low-probability setups)
3. Wrong strategy mode for market conditions
4. Ignoring regime weakening warnings (gold background)
5. Using on forex spot (tick volume only - use futures instead)

## Volume Oracle Workflow

**Step 1:** Check Regime
- Green = Look for BULL signals
- Red = Look for BEAR signals
- Gray/Gold = Wait or reduce size

**Step 2:** Wait for Signal
- BULL or BEAR with quality rating
- Higher stars = higher confidence

**Step 3:** Check HTF
- Aligned = Full position
- Not aligned = Reduced size or skip

**Step 4:** Execute with Risk Management
- Use auto-calculated Entry/Stop/Targets
- Position size based on risk amount

## Quick Settings by Style

**Scalping (1m-5m):**
- Strategy Mode: Trend Following
- Focus on: ⭐⭐⭐ signals only
- HTF: 1H alignment

**Day Trading:**
- Strategy Mode: Hybrid
- Focus on: ⭐⭐ and ⭐⭐⭐ signals
- Risk: 1% per trade

**Swing Trading:**
- Strategy Mode: Trend Following
- Focus on: Regime strength >70%
- HTF: Daily/Weekly alignment

## Asset-Specific Notes

**Stocks:**
- Volume Oracle highly reliable
- Risk Management essential for day trading
- Works great for: SPY, QQQ, AAPL, MSFT, TSLA

**Crypto:**
- Use Hybrid mode (24/7 volatility)
- 24/7 trading = consistent data
- Works great for: BTC, ETH (avoid low-cap)

**Futures:**
- Clean volume data (very reliable)
- Trend Following mode for ES, NQ
- Risk Management valuable for position sizing

**Forex:**
- ⚠️ Reduced reliability on spot pairs (tick volume only)
- ✅ Works well on currency futures (6E, 6B, etc.)
- Alternative: Harmonic Oscillator for spot forex

---

**📊 [View Full Interactive Cheat Sheet →](../../ref-cheatsheets-volume-oracle/)**

**Related Resources:**
- [Configuration Wizard](../configuration-wizard.md) - Volume Oracle setups by asset
- [Volume Oracle v1.0 Full Documentation](../../volume-oracle-v10/)
- [Why Forex Spot Has No Volume](../../ref-glossary/index.md#volume-data)

---

## See Also

**Related Pages:**
- [Volume Oracle v1.0](../../volume-oracle-v10/) - Complete indicator documentation
- [Pentarch Quick Reference](pentarch-quick-reference.md) - Combine volume with cycle detection
- [How to Set Up Alerts](../../../how-to-alerts.md) - Get notified on volume signals
- [Trading Workflow](../../ref-workflow.md) - How volume analysis fits into complete system
- [All Indicators At-A-Glance](all-indicators-at-a-glance.md) - Quick reference for all indicators

---

**Last Updated:** December 2025

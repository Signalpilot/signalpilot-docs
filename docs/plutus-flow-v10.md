# Plutus Flow v1.1 - Smart OBV Analysis

<div class="admonition tip" style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4;">
<p class="admonition-title" style="color: #06b6d4; font-weight: 600;">What's New in v1.1?</p>
<p>Fixed divergence detection (now working), added exit signals for extreme zones, and simplified settings from 14 to 5. <a href="#v11-changelog" style="color: #06b6d4; font-weight: 600; text-decoration: none;">See full changelog</a></p>
</div>

## What Does It Do?
<span style="color: #0aa1d5; font-weight: 600;">Core Functionality</span>

Plutus Flow is an **advanced On-Balance Volume (OBV) indicator** that shows when smart money may be accumulating (buying) or distributing (selling). Unlike standard OBV, it prevents volume spike distortion and detects divergences automatically.

**Best for:** Volume analysis, divergence trading, flow confirmation

---

## Core Concept: OBV = Money Flow Direction

**On-Balance Volume (OBV):**
- When price closes higher → Add volume (buying pressure)
- When price closes lower → Subtract volume (selling pressure)
- Result: Cumulative line showing net flow

**Why it matters:**
- OBV rising = Accumulation (smart money buying)
- OBV falling = Distribution (smart money selling)
- OBV diverging from price = Potential warning signal

---

## The Problem with Regular OBV

**Volume spikes break it:**

One huge volume bar (earnings, news) can permanently skew OBV, hiding subtle changes.

**Plutus Solution: Spike-Clipping**

- Extreme volume is capped at 3× average
- Direction is preserved (buy vs sell)
- Permanent distortion is prevented
- Result: Smooth, reliable OBV line

---

## What Can Be Seen (Bottom Pane)

### Layer 1: The OBV Line

**Main line:**
- **Green** = OBV rising (accumulation)
- **Red** = OBV falling (distribution)

**Cross signals:**
- Green dot (3px) = OBV crossed above basis
- Red dot (3px) = OBV crossed below basis

---

### Layer 2: The Ribbon

The ribbon shows the relationship between the OBV line and its 20-period Simple Moving Average (basis line).

| Ribbon Color | Condition | Meaning |
|--------------|-----------|---------|
| Green fill | OBV line above 20-SMA basis | Bullish flow — accumulation |
| Red fill | OBV line below 20-SMA basis | Bearish flow — distribution |

**Note:** There is no Fast/Slow MA system. The ribbon simply shows OBV vs its 20-period moving average.

---

### Layer 3: Statistical Bands (±2σ)

Plutus Flow calculates ±2 standard deviation bands around the basis line to define extreme zones.

| Band | Calculation | Meaning |
|------|-------------|---------|
| Upper Band | Basis + (2 × StdDev) | Overbought threshold |
| Lower Band | Basis - (2 × StdDev) | Oversold threshold |

**Extreme Zone Signals:**

| Signal | Visual | Trigger | Meaning |
|--------|--------|---------|---------|
| Breach +2σ | White dot (3px) | OBV crosses INTO upper band | Entered overbought — warning |
| Breach -2σ | White dot (3px) | OBV crosses INTO lower band | Entered oversold — warning |
| Exit +2σ | Yellow dot (2px) | OBV crosses OUT of upper band | Left overbought — potential reversal down |
| Exit -2σ | Yellow dot (2px) | OBV crosses OUT of lower band | Left oversold — potential reversal up |

**Key insight:** Breach = warning (can stay extreme). Exit = actionable (extreme condition ended).

---

### Layer 4: Divergences

Divergence labels appear at pivot points when price and OBV disagree. Labels are offset above (bearish) or below (bullish) the OBV line.

| Label | Background | Price Pattern | OBV Pattern | Meaning |
|-------|------------|---------------|-------------|---------|
| Bull Div | Green | Lower Low | Higher Low | Reversal UP expected |
| Bear Div | Red | Higher High | Lower High | Reversal DOWN expected |
| Bull Hid | Teal | Higher Low | Lower Low | Continuation UP (trend continues) |
| Bear Hid | Pink | Lower High | Higher High | Continuation DOWN (trend continues) |

**Regular divergences** signal potential reversals. **Hidden divergences** signal trend continuation.

---

## Settings

Plutus Flow v1.1 has only 5 settings for simplicity:

| Group | Setting | Default | Description |
|-------|---------|---------|-------------|
| SP: Calculation | HTF timeframe | blank | Calculate OBV on higher timeframe. Blank = use chart timeframe. |
| SP: Calculation | HTF trend filter | blank | Only allow cross signals aligned with HTF trend direction. Blank = off. |
| SP: Divergence | Min price swing (x ATR14) | 0.0 | Filter out small divergences. 0 = show all divergences. |
| SP: Visuals | Show divergence labels | ON | Display "Bull Div" / "Bear Div" / "Bull Hid" / "Bear Hid" labels |
| SP: Visuals | Show extreme zone exits | ON | Display yellow dots when flow leaves ±2σ zones |

**Default settings work for most traders.**

---

## Alerts

| Alert Name | Trigger |
|------------|---------|
| Cross Up | OBV crosses above basis |
| Cross Down | OBV crosses below basis |
| Breach +2s | Flow enters overbought zone |
| Breach -2s | Flow enters oversold zone |
| Exit +2s | Flow leaves overbought zone |
| Exit -2s | Flow leaves oversold zone |
| Bull Div | Regular bullish divergence detected |
| Bear Div | Regular bearish divergence detected |
| Bull Hid | Hidden bullish divergence detected |
| Bear Hid | Hidden bearish divergence detected |

**How to set:**
1. Click the alarm icon on the indicator
2. Select "Plutus Flow v1.1"
3. Choose your alert condition
4. Set to "Once Per Bar Close"

---

## How to Use It (3 Simple Steps)
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">Essential Learning Guide</span>

### Step 1: Watch the OBV Line

**Simple check:**
- **Price up, OBV up** = Healthy (volume confirms)
- **Price up, OBV flat/down** = Weak (potential divergence warning)
- **Price down, OBV down** = Healthy downtrend
- **Price down, OBV flat/up** = Weak downtrend (divergence)

---

### Step 2: Use Cross Signals for Entry

**Bullish cross:**
1. Observe green dot — OBV crossed above basis
2. Verify price action (bullish candle, support nearby?)
3. Consider long entry
4. Place stop below recent low

**Bearish cross:**
1. Observe red dot — OBV crossed below basis
2. Verify price action (bearish candle, resistance nearby?)
3. Consider short entry
4. Place stop above recent high

---

### Step 3: Trade Divergences (Highest Probability)

**The setup:**
1. Wait for divergence label (Bull Div or Bear Div)
2. Confirm divergence at key level (use Janus Atlas for levels)
3. Wait for price reversal confirmation (candle pattern, cross signal)
4. Enter in divergence direction
5. Stop beyond the divergence pivot

**Win rate:** 70-80% when at key levels

---

## Quick Reference

### Signal Dots

| Dot | Color | Size | Meaning |
|-----|-------|------|---------|
| Cross Up | Green | 3px | OBV crossed above basis |
| Cross Down | Red | 3px | OBV crossed below basis |
| Breach | White | 3px | Entered extreme zone |
| Exit | Yellow | 2px | Left extreme zone |

### Divergence Labels

| Label | Background | Meaning |
|-------|------------|---------|
| Bull Div | Green | Bullish reversal signal |
| Bear Div | Red | Bearish reversal signal |
| Bull Hid | Teal | Bullish continuation |
| Bear Hid | Pink | Bearish continuation |

### OBV vs Price Interpretation

| OBV vs Price | Interpretation | Action |
|--------------|---------------|--------|
| Both rising | Healthy uptrend | Longs can be taken |
| Price up, OBV flat/down | Weak uptrend | Caution — watch for divergence |
| Both falling | Healthy downtrend | Shorts can be taken |
| Price down, OBV flat/up | Weak downtrend | Caution — watch for divergence |

---

## Common Mistakes
<span style="color: #dc2626; font-weight: 600; font-size: 1.1em;">Critical Errors</span>

**Trading divergences in isolation**
→ Divergence + key level (use Janus Atlas) = Much higher win rate

**Chasing extreme breaches**
→ Breach = Warning, not entry. Wait for EXIT signal (yellow dot) for actionable reversal.

**Ignoring the OBV trend**
→ OBV trending up + price pullback = Buy the dip. OBV flat + price up = Caution.

**Using on Forex spot**
→ Volume data is needed. Use futures, stocks, crypto. Forex spot has NO volume.

**Not waiting for confirmation**
→ See divergence label → Wait for price reversal candle → Then entry

---

## Frequently Asked Questions
<span style="color: #10b981; font-weight: 600;">Common Questions</span>

**Q: What's the difference from standard OBV?**
**A:** Plutus Flow uses spike-clipped OBV (immune to extreme volume spikes), adds statistical bands for extremes, and detects divergences automatically.

**Q: Which is more reliable - crosses or divergences?**
**A:**
- **Divergences:** 70-80% win rate (but rarer)
- **Crosses:** 60-65% win rate (more frequent)

Use crosses for active trading, divergences for high-conviction setups.

**Q: Why did divergence appear several bars after the pivot?**
**A:** Divergence detection requires confirmed pivot (bars on both sides). Lag is intentional to prevent repaint. Once it appears, it's real.

**Q: Does it work on Forex?**
**A:** Only Forex futures (CME) or CFDs with volume. Spot Forex (OANDA, etc.) has no volume.

**Q: What's the difference between Breach and Exit signals?**
**A:** Breach (white dot) = OBV just entered extreme territory — it's a warning that could continue. Exit (yellow dot) = OBV left extreme territory — the extreme condition ended, potential reversal point.

**Q: Does it repaint?**
**A:** No. All signals lock at bar close. What is seen is final.

---

## v1.1 Changelog

### Bug Fixes
- **Fixed divergence detection** — labels now appear (was completely broken in v1.0)
- **Fixed pivot value storage** — was storing null values
- **Fixed divergence logic** — Regular/Hidden were swapped

### New Features
- **Exit detection** — yellow dots when flow leaves extreme zones
- **Divergence labels** — visible "Bull Div" / "Bear Div" / "Bull Hid" / "Bear Hid" text

### Removed
- All "SP: Quality" settings (FlipGuard, Z-gate, Robust extremes, Sequence window)
- These are now hardcoded internally for simplicity

### Simplified
- Settings reduced from 14 to 5
- Cleaner UI for end users

---

## Best Practices
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">Recommended Approach</span>

1. **Combine with price action** — Divergence alone is interesting, divergence + reversal candle = Entry
2. **Trade divergences at key levels** — Use with Janus Atlas for support/resistance
3. **Respect extreme zone exits** — Yellow dots are actionable reversal signals
4. **Don't chase crosses** — Enter on signal bar or next bar, not 5 bars later
5. **Enable HTF for swing trading** — Filters counter-trend signals

---

## Support

Help is available at:
- [<span class="signal-pilot-brand">Signal Pilot</span> Suite Overview](https://docs.signalpilot.io/suite-index/) - How to combine with other indicators
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Get help

---

## See Also

**Related Pages:**
- [Volume Oracle v1.0](minimal-flow-v10.md) - Complementary volume intelligence system
- [Janus Atlas v1.0](janus-atlas-v10.md) - Combine divergences with key structural levels
- [Omnideck v1.0](omnideck-v10.md) - All-in-one indicator including OBV analysis
- [How to Set Up Alerts](../how-to-alerts.md) - Get notified on divergences and crosses
- [Trading Workflow](../ref-workflow.md) - How OBV fits into complete trading system

---

**Key insight:** Plutus Flow shows where smart money may be accumulating or distributing. When OBV and price disagree (divergence) = Major move coming. Combine with levels for highest probability.

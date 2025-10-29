# Plutus Flow v1.0 - Smart OBV Analysis

## What Does It Do?

Plutus Flow is an **advanced On-Balance Volume (OBV) indicator** that shows you when smart money may be accumulating (buying) or distributing (selling). Unlike standard OBV, it prevents volume spike distortion and detects potential powerful divergences.

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
- OBV diverging from price = Warning signal

---

## The Problem with Regular OBV

**Volume spikes break it:**

One huge volume bar (earnings, news) can permanently skew OBV, hiding subtle changes.

**Plutus Solution: Spike-Clipping**

- Caps extreme volume at 3× average
- Preserves direction (buy vs sell)
- Prevents permanent distortion
- Result: Smooth, reliable OBV line

---

## What You See (Bottom Pane)

### The OBV Line

**Main line:**
- **Green** = OBV rising (accumulation)
- **Red** = OBV falling (distribution)

**Two bands around it:**
- Upper band (+2σ)
- Lower band (-2σ)
- Gray fill = Normal range

---

## The Main Signals

### 1. Cross Signals (Flow Shift)

**Bullish Cross** (green circle)
- OBV crosses above the middle line (20-SMA basis)
- Potential flow shift from distribution to accumulation
- Potential entry signal for longs

**Bearish Cross** (red circle)
- OBV crosses below the middle line
- Potential flow shift from accumulation to distribution
- Potential entry signal for shorts

**FlipGuard protection:** Prevents whipsaw with cooldown period

---

### 2. Extreme Breach (Climax Events)

**Extreme Bullish Breach** (orange circle)
- OBV breaks above +2σ upper band
- Accumulation climax
- Often precedes reversal OR continuation breakout

**Extreme Bearish Breach** (purple circle)
- OBV breaks below -2σ lower band
- Distribution climax
- Often precedes reversal OR breakdown continuation

**Use with context:** Check price action to know if reversal or continuation

---

### 3. Divergences (The Best Signals)

**Regular Bullish Divergence**
- Price makes lower low
- OBV makes higher low
- Label: "BULL DIV" (green)
- **Signal:** Selling pressure weakening, reversal up likely

**Regular Bearish Divergence**
- Price makes higher high
- OBV makes lower high
- Label: "BEAR DIV" (red)
- **Signal:** Buying pressure weakening, reversal down likely

**Hidden Bullish Divergence**
- Price makes higher low
- OBV makes lower low
- Label: "H-BULL" (light green)
- **Signal:** Healthy uptrend pullback, continuation up

**Hidden Bearish Divergence**
- Price makes lower high
- OBV makes higher high
- Label: "H-BEAR" (light red)
- **Signal:** Healthy downtrend bounce, continuation down

---

## How to Use It (3 Simple Steps)

### Step 1: Watch the OBV Line

**Simple check:**
- **Price up, OBV up** = Healthy (volume confirms)
- **Price up, OBV flat/down** = Weak (divergence warning)
- **Price down, OBV down** = Healthy downtrend
- **Price down, OBV flat/up** = Weak downtrend (divergence)

---

### Step 2: Use Cross Signals for Entry

**Bullish cross:**
1. OBV crosses above basis line (green circle)
2. Verify price action (bullish candle, support nearby?)
3. Enter long
4. Stop below recent low

**Bearish cross:**
1. OBV crosses below basis line (red circle)
2. Verify price action (bearish candle, resistance nearby?)
3. Enter short
4. Stop above recent high

---

### Step 3: Trade Divergences (Highest Probability)

**The setup:**
1. Wait for potential divergence label (BULL DIV or BEAR DIV)
2. Confirm potential divergence is at key level (use Janus Atlas for levels)
3. Wait for potential price reversal confirmation (candle pattern, cross signal)
4. Example entry in divergence direction
5. Example stop beyond the divergence pivot

**Win rate:** 70-80% when at key levels

---

## Real Example (S&P 500)

**Setup:**
- Price: 4,450, making new highs
- Previous high: 4,400
- **OBV:** Making LOWER high (not confirming price)
- Label appears: "BEAR DIV" (red)

**The Trade:**
1. Potential divergence detected at resistance level (Weekly High from Janus Atlas)
2. Wait for price reversal candle (shooting star forms)
3. OBV crosses below basis line (potential bearish cross signal)
4. Example entry short at 4,440
5. Example stop above divergence high at 4,460
6. Target: Previous support at 4,350

**Result:**
- Price drops to 4,360 (target almost hit)
- Exit at 4,365 = 75 points profit

---

## Settings (Keep It Simple)

**Core Settings:**
- **Spike Clip:** 3.0× (default, works for most)
- **Basis Length:** 20 (default SMA)
- **Band StdDev:** 2.0 (for ±2σ bands)

**FlipGuard:**
- **Cooldown:** 5 bars (prevents whipsaw)
- Keep enabled (default)

**Divergence:**
- **Show All Types:** Enabled (Regular + Hidden)
- **Show Beams:** Enabled (visual lines connecting pivots)
- **Min Swing:** 1.5× ATR (filters tiny divergences)

**HTF Alignment:**
- Enable for swing trading (check 4× your timeframe)
- Disable for scalping

**Most traders use default settings**

---

## Alerts (Set These!)

1. **OBV Cross Up** - Bullish cross
2. **OBV Cross Down** - Bearish cross
3. **Extreme Bullish Breach** - Climax accumulation
4. **Extreme Bearish Breach** - Climax distribution
5. **Regular Bullish Divergence** - BULL DIV
6. **Regular Bearish Divergence** - BEAR DIV

**How to set:**
1. Click alarm icon
2. Select "Plutus Flow v2.3"
3. Choose alert
4. Set to "Once Per Bar Close"

---

## Common Mistakes (Avoid These!)

❌ **Trading divergences in isolation**
→ ✅ Divergence + key level (use Janus Atlas) = Much higher win rate

❌ **Chasing extreme breaches**
→ ✅ Extreme breach = Warning, not entry. Wait for price reaction.

❌ **Ignoring the OBV trend**
→ ✅ OBV trending up + price pullback = Buy the dip. OBV flat + price up = Be careful.

❌ **Using on Forex spot**
→ ✅ Needs volume data! Use futures, stocks, crypto. Forex spot has NO volume.

❌ **Not waiting for confirmation**
→ ✅ See divergence label → Wait for price reversal candle → Then enter

---

## Frequently Asked Questions

**Q: What's the difference from standard OBV?**
**A:** Plutus Flow uses spike-clipped OBV (immune to extreme volume spikes), adds bands for extremes, detects potential divergences automatically, and has FlipGuard anti-whipsaw.

**Q: Which is more reliable - crosses or divergences?**
**A:**
- **Divergences:** 70-80% win rate (but rarer)
- **Crosses:** 60-65% win rate (more frequent)

Use crosses for active trading, divergences for high-conviction setups.

**Q: Why did divergence appear 10 bars after the pivot?**
**A:** Divergence detection requires confirmed pivot (bars on both sides). Lag is intentional to prevent repaint. Once it appears, it's real.

**Q: Does it work on Forex?**
**A:** Only Forex futures (CME) or CFDs with volume. Spot Forex (OANDA, etc.) has no volume.

**Q: What if OBV stays in extreme zone (above/below bands) for 20 bars?**
**A:** Only the first bar crossing INTO the zone fires a signal. While it stays in zone = No new signals (prevents spam).

**Q: Does it repaint?**
**A:** No. All signals lock at bar close. What you see is what you get.

---

## Quick Cheat Sheet

| Signal | Meaning | Action |
|--------|---------|--------|
| OBV Cross Up (green circle) | Flow shift to buying | **Enter long** |
| OBV Cross Down (red circle) | Flow shift to selling | **Enter short** |
| Extreme Bullish Breach (orange) | Accumulation climax | Watch for reaction |
| Extreme Bearish Breach (purple) | Distribution climax | Watch for reaction |
| BULL DIV (green label) | Price/OBV disagree | **Reversal up** likely |
| BEAR DIV (red label) | Price/OBV disagree | **Reversal down** likely |
| H-BULL (light green) | Hidden divergence | **Continuation up** |
| H-BEAR (light red) | Hidden divergence | **Continuation down** |

| OBV vs Price | Interpretation | Action |
|--------------|---------------|--------|
| Both rising | Healthy uptrend | Take longs |
| Price up, OBV flat/down | Weak uptrend | Be cautious, watch for divergence |
| Both falling | Healthy downtrend | Take shorts |
| Price down, OBV flat/up | Weak downtrend | Be cautious, watch for divergence |

---

## Best Practices

1. **Combine with price action** - Divergence alone is interesting, divergence + reversal candle = Entry
2. **Trade divergences at key levels** - Use with Janus Atlas for support/resistance
3. **Respect extreme breaches** - They're warnings, not entry signals - wait for reaction
4. **Don't chase crosses** - Enter on signal bar or next bar, not 5 bars later
5. **Enable HTF for swing trading** - Filters counter-trend signals

---

## Support

Need help? Check out:
- [v6 Suite Overview](v6-suite-index/) - How to combine with other indicators
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Get help

---

**Remember:** Plutus Flow shows you where smart money may be accumulating or distributing. When OBV and price disagree (potential divergence) = Potential major move coming. Combine with levels for highest probability.

**Follow the money flow!** 🎯

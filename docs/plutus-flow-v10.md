# Plutus Flow v1.0 - Smart OBV Analysis

## 🎯 What Does It Do?
<span style="color: #0aa1d5; font-weight: 600;">Core Functionality</span>

Plutus Flow is an **advanced On-Balance Volume (OBV) indicator** that shows when smart money may be accumulating (buying) or distributing (selling). Unlike standard OBV, it prevents volume spike distortion and detects potential powerful divergences.

**Best for:** Volume analysis, divergence trading, flow confirmation

---

## 🚀 Installation
<span style="color: #0aa1d5; font-weight: 600;">Quick Setup Guide</span>

### Step 1: Access Your Indicators
1. TradingView chart can be opened
2. "Indicators" button (top toolbar) can be clicked
3. "Invite-only scripts" tab can be selected

### Step 2: Add Plutus Flow
1. "Plutus Flow v1.0" can be searched for
2. Indicator can be clicked to add to chart
3. Bottom pane with OBV line and bands will appear

### Step 3: Verify It's Working
**👁️ First signal to watch for:**
- **OBV line** (green/red) should be visible in bottom pane
- **Two bands** (upper +2σ, lower -2σ) around the line
- Wait for a **cross signal** (green or red circle) or **divergence label** (BULL DIV / BEAR DIV)

**Common issue:** If OBV line is flat/not moving → Chart may lack volume data (check you're on stocks/crypto/futures, NOT Forex spot)

---

## 📹 Video Tutorials
<span style="color: #10b981; font-weight: 600;">Visual Walkthroughs</span>

**Installation & First Trade** (5 min)
Coming soon - Complete setup walkthrough + first divergence trade

**Advanced Divergence Trading** (8 min)
Coming soon - How to combine with Janus Atlas levels for 80%+ win rate

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

**FlipGuard protection:** Whipsaw is prevented with cooldown period

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

**Context can be used:** Price action can be checked to identify reversal or continuation patterns

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
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">🎓 Essential Learning Guide</span>

### Step 1: Watch the OBV Line

**Simple check:**
- **Price up, OBV up** = Healthy (volume confirms)
- **Price up, OBV flat/down** = Weak (potential divergence warning)
- **Price down, OBV down** = Healthy downtrend
- **Price down, OBV flat/up** = Weak downtrend (divergence)

---

### Step 2: Use Cross Signals for Entry

**Bullish cross:**
1. OBV crosses above basis line (green circle) can be observed
2. Price action can be verified (bullish candle, support nearby?)
3. Long entry can be considered
4. Stop below recent low can be placed

**Bearish cross:**
1. OBV crosses below basis line (red circle) can be observed
2. Price action can be verified (bearish candle, resistance nearby?)
3. Short entry can be considered
4. Stop above recent high can be placed

---

### Step 3: Trade Divergences (Highest Probability)

**The setup:**
1. Potential divergence label (BULL DIV or BEAR DIV) can be awaited
2. Potential divergence at key level can be confirmed (Janus Atlas can be used for levels)
3. Potential price reversal confirmation can be awaited (candle pattern, cross signal)
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
2. Price reversal candle can be awaited (shooting star forms)
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
- Enabled is kept (default)

**Divergence:**
- **Show All Types:** Enabled (Regular + Hidden)
- **Show Beams:** Enabled (visual lines connecting pivots)
- **Min Swing:** 1.5× ATR (filters tiny divergences)

**HTF Alignment:**
- Can be enabled for swing trading (check 4× timeframe)
- Can be disabled for scalping

**Default settings are used by most traders**

---

## Alerts (Can Be Set)

1. **OBV Cross Up** - Bullish cross
2. **OBV Cross Down** - Bearish cross
3. **Extreme Bullish Breach** - Climax accumulation
4. **Extreme Bearish Breach** - Climax distribution
5. **Regular Bullish Divergence** - BULL DIV
6. **Regular Bearish Divergence** - BEAR DIV

**How to set:**
1. Alarm icon can be clicked
2. "Plutus Flow v1.0" can be selected
3. Alert can be chosen
4. Can be set to "Once Per Bar Close"

---

## Common Mistakes
<span style="color: #dc2626; font-weight: 600; font-size: 1.1em;">🚨 Critical Errors</span>

❌ **Trading divergences in isolation**
→ ✅ Divergence + key level (Janus Atlas can be used) = Much higher win rate

❌ **Chasing extreme breaches**
→ ✅ Extreme breach = Warning, not entry. Price reaction can be awaited.

❌ **Ignoring the OBV trend**
→ ✅ OBV trending up + price pullback = Buy the dip. OBV flat + price up = Caution advised.

❌ **Using on Forex spot**
→ ✅ Volume data is needed. Futures, stocks, crypto can be used. Forex spot has NO volume.

❌ **Not waiting for confirmation**
→ ✅ Divergence label can be observed → Price reversal candle can be awaited → Then entry

---

## ❓ Frequently Asked Questions
<span style="color: #10b981; font-weight: 600;">Common Questions</span>

**Q: What's the difference from standard OBV?**
**A:** Plutus Flow uses spike-clipped OBV (immune to extreme volume spikes), adds bands for extremes, detects potential divergences automatically, and has FlipGuard anti-whipsaw.

**Q: Which is more reliable - crosses or divergences?**
**A:**
- **Divergences:** 70-80% win rate (but rarer)
- **Crosses:** 60-65% win rate (more frequent)

Crosses can be used for active trading, divergences for high-conviction setups.

**Q: Why did divergence appear 10 bars after the pivot?**
**A:** Divergence detection requires confirmed pivot (bars on both sides). Lag is intentional to prevent repaint. Once it appears, it's real.

**Q: Does it work on Forex?**
**A:** Only Forex futures (CME) or CFDs with volume. Spot Forex (OANDA, etc.) has no volume.

**Q: What if OBV stays in extreme zone (above/below bands) for 20 bars?**
**A:** Only the first bar crossing INTO the zone fires a signal. While it stays in zone = No new signals (prevents spam).

**Q: Does it repaint?**
**A:** No. All signals lock at bar close. What is seen is final.

---

## Quick Cheat Sheet

| Signal | Meaning | Action |
|--------|---------|--------|
| OBV Cross Up (green circle) | Flow shift to buying | **Long entry can be considered** |
| OBV Cross Down (red circle) | Flow shift to selling | **Short entry can be considered** |
| Extreme Bullish Breach (orange) | Accumulation climax | Reaction can be watched |
| Extreme Bearish Breach (purple) | Distribution climax | Reaction can be watched |
| BULL DIV (green label) | Price/OBV disagree | **Reversal up** likely |
| BEAR DIV (red label) | Price/OBV disagree | **Reversal down** likely |
| H-BULL (light green) | Hidden divergence | **Continuation up** |
| H-BEAR (light red) | Hidden divergence | **Continuation down** |

| OBV vs Price | Interpretation | Action |
|--------------|---------------|--------|
| Both rising | Healthy uptrend | Longs can be taken |
| Price up, OBV flat/down | Weak uptrend | Caution advised, divergence can be watched |
| Both falling | Healthy downtrend | Shorts can be taken |
| Price down, OBV flat/up | Weak downtrend | Caution advised, divergence can be watched |

---

## Best Practices
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">✅ Recommended Approach</span>

1. **Can be combined with price action** - Divergence alone is interesting, divergence + reversal candle = Entry
2. **Divergences can be traded at key levels** - Can be used with Janus Atlas for support/resistance
3. **Extreme breaches are commonly respected** - They're warnings, not entry signals - reaction can be awaited
4. **Crosses shouldn't be chased** - Entry on signal bar or next bar, not 5 bars later
5. **HTF can be enabled for swing trading** - Filters counter-trend signals

---

## Support

Help is available at:
- [<span class="signal-pilot-brand">Signal Pilot</span> Suite Overview](https://docs.signalpilot.io/suite-index/) - How to combine with other indicators
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Get help

---

**Important consideration:** Plutus Flow shows where smart money may be accumulating or distributing. When OBV and price disagree (potential divergence) = Potential major move coming. Can be combined with levels for highest probability.

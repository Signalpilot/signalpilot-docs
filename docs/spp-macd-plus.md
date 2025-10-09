# SP — Momentum Regime (MACD+) — by Signal Pilot
**Tagline:** Trend entries made simple. See momentum flip, skip chop, and get three clear entries: **Prime**, **Pullback**, **Retest**.

> Works on any market/timeframe in TradingView. Signals finalize on candle close (no repaint).

---

## TL;DR — Use in 60 seconds
1. Add **Momentum Regime (MACD+)** to your chart (it shows up in its own panel).
2. Pick a **Preset**:
   - **Classic Soft** – More signals, closer to vanilla MACD.
   - **Pro Filtered** – Fewer, cleaner signals (recommended).
3. (Optional) Turn on **Flip markers** (Prime, Pullback, Retest).
4. Set alerts for the signals you care about (see “Alerts” below).

Green = momentum up. Red = momentum down. That’s the core.

---

## What you’re looking at
- **Two lines** (MACD & Signal): When they cross, momentum is changing.
- **Histogram bars**: Quick read on strength.  
  - Above zero and growing = bullish strength.  
  - Below zero and shrinking = bearish strength.
- **Dots** (optional): Where the two lines cross.
- **Flip markers** (optional): Three simple entries **after** a momentum flip:
  - **Prime (FL)** — The initial, confirmed flip (red→green or green→red).
  - **Pullback (PB)** — After a flip, price pulls back, then momentum kicks again.
  - **Retest (RT)** — After a flip, price retests the baseline and holds.

**Plain talk:**  
Prime = “flip confirmed.”  
Pullback = “the dip after flip looks done.”  
Retest = “flip held on a test.”

---

## Simple ways to trade it (pick one)
### A) Trend‑follow (easiest)
- Use **Pro Filtered** preset.  
- Take **Flip Prime** in the new direction.  
- Want a better entry? Wait for **Pullback** after the flip.

### B) Dip‑buyer / Fade‑seller
- Wait for a **Flip**.  
- Trade **Pullback** only.  
- If PB doesn’t show within ~10–12 bars, skip.

### C) Conservative confirm
- Use **Qualified Cross** only (auto‑filters weak crosses).  
- Optionally add **Flip Prime** in the same direction for extra confidence.

---

## Alerts (step‑by‑step)
1. Click **Alerts** in TradingView.  
2. **Condition** → choose **Momentum Regime (MACD+)**.  
3. Choose an event:
   - **Bullish Cross (raw)** / **Bearish Cross (raw)**
   - **QUALIFIED Bullish** / **QUALIFIED Bearish**
   - **Flip Prime LONG/SHORT**
   - **Flip Pullback LONG/SHORT**
   - **Flip Retest LONG/SHORT**
4. Set **Once per bar close**. Create the alert.

> **Version note:** If your build still shows older names like `SPP MACD - Flip Prime LONG`, that’s okay—the signals are the same. Names will match after you update the script title.

---

## Settings — explained like I’m five
You can leave defaults and be fine. If you want to tweak:

- **Preset**  
  - *Classic Soft*: more signals.  
  - *Pro Filtered*: fewer, cleaner signals.

- **Bigger‑picture check (HTF confirm)**  
  Only take longs when higher timeframes lean bullish (and vice‑versa). Avoids fighting the overall trend.

- **Trend filter (Baseline & slope)**  
  Don’t buy when price is below a falling baseline (and vice‑versa). Obvious, but it saves you.

- **Chop filter (ADX)**  
  If the market is going sideways, skip signals.

- **Strength check (Impulse gate)**  
  Ignores tiny, weak wiggles. You get fewer but higher‑quality flips.

- **Quiet zone near zero (Deadband)**  
  Near the zero line, small changes don’t count → less whipsaw.

- **Structure sync (optional)**  
  Only allow longs if price is making higher highs/lows. Training wheels for trend.

- **Profiles** — *Scalp / Intraday / Balanced / Swing*  
  Sets how strict things are.  
  - *Scalp*: strictest (fewest signals, lowest noise).  
  - *Balanced*: good default.  
  - *Swing*: a bit looser (more signals).

- **Flip Decay**  
  The longer you wait after a flip, the more strength is required to print a flip signal. Prevents chasing late moves.

---

## FAQs
**Does it repaint?**  
No. Signals finalize on candle close. Higher‑timeframe checks are also handled safely.

**Which markets/timeframes?**  
Anything on TradingView: crypto, stocks, FX, indices, futures. Start with **15m–4h** for cleaner signals; go lower only if you’re comfortable with noise.

**Too many signals?**  
Pick **Pro Filtered**, use **Qualified Cross** + **Flip Prime** only, and try **Intraday/Scalp** profile.

**Too few signals?**  
Use **Classic Soft**, toggle **More Signals**, or switch profile to **Swing**.

**What are “Divergences”?**  
Optional markers showing disagreement between price and momentum. Nice to have; you can ignore them until you’re comfortable.

---

## Tips & Troubleshooting
- **Alerts not firing?** Make sure your alerts are set to **Once per bar close**, not “Once per minute.”  
- **Messy chart?** Turn off extras (Divergence, HUD, text on markers). Keep it clean.  
- **Confused by flips?** Start with **Flip Prime** only; add **Pullback** later.  
- **Still choppy?** Tighten by switching to **Pro Filtered** and **Intraday/Scalp** profile.

---

## Optional: Webhooks / automation
If you use webhooks, the indicator can send a tiny JSON when a Flip happens. Example:
```json
{"indicator":"Momentum Regime (MACD+)","event":"bullFlip","type":"prime","symbol":"BINANCE:BTCUSDT","tf":"15"}

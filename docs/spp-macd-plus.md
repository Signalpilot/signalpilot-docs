---
title: "SP — Momentum Regime (MACD+)"
short_title: "Momentum Regime (MACD+)"
permalink: /spp-macd-plus/
module_id: spp-macd-plus
category: "Bias / Momentum"
category_emoji: "🧭"
summary: "Directional bias and momentum strength visualized with adaptive regime logic."
tags: [bias, momentum, macd, trend, regime]
---


> **Category:** 🧭 Bias / Momentum  
> Defines directional bias and strength. Reveals who’s in control — bulls or bears.

--8<-- "_includes/meta-badge.html"

# SP — Momentum Regime (MACD+) — by Signal Pilot 🚀
**Trend entries made simple.** See momentum flip, skip chop, and use three clear entries: **Prime**, **Pullback**, **Retest**.  

✅ Works on any market/timeframe in TradingView  
🧱 Signals finalize on candle close (no repaint)

---

## TL;DR — Use in 60 seconds ⏱️
1) ➕ Add **Momentum Regime (MACD+)** to your chart (its own panel).  
2) 🎛️ Choose a **Preset**:
   - **Classic Soft** — more signals, closer to vanilla MACD.
   - **Pro Filtered** — fewer, cleaner signals (recommended).
3) 🔄 (Optional) Turn on **Flip markers**: Prime / Pullback / Retest.  
4) 🔔 Set **alerts** for the signals you care about (see below).

🟢 Green = momentum up. 🔴 Red = momentum down. That’s the core.

---

## What you’re looking at 👀
- ↔️ **Two lines (MACD & Signal)** — when they **cross**, momentum changes.  
- 📊 **Histogram bars** — quick read on strength:
  - Above zero and growing → **bullish strength**.
  - Below zero and falling → **bearish strength**.
- 🟡 **Dots (optional)** — mark where lines cross.  
- 🏁 **Flip markers (optional)** — simple entries **after** a flip:
  - ✅ **Prime (FL)** — confirmed flip (red→green or green→red).  
  - 🔁 **Pullback (PB)** — after a flip, price dips then momentum kicks again.  
  - ♻️ **Retest (RT)** — after a flip, price **retests** the baseline and holds.

**Plain talk:**  
✅ **Prime** = “flip confirmed.”  
🔁 **Pullback** = “dip after flip looks done.”  
♻️ **Retest** = “flip held on a test.”

---

## Simple ways to trade it 🧭
### A) Trend‑follow (easiest) 👍
- ✅ Use **Pro Filtered**.  
- 🏁 Take **Flip Prime** in the new direction.  
- 🔁 Want a better price? Wait for **Pullback** after the flip.

### B) Dip‑buyer / Fade‑seller 💧
- 🔄 Wait for a **Flip**.  
- 🔁 Trade **Pullback** only.  
- ⏳ If no PB within ~10–12 bars, skip it.

### C) Conservative confirm 🛡️
- ✔️ Use **Qualified Cross** only (auto‑filters weak crosses).  
- ➕ Optionally add **Flip Prime** in the same direction for extra confidence.

---

## Alerts — step by step 🔔
1) Click **Alerts** in TradingView.  
2) **Condition →** choose **Momentum Regime (MACD+)**.  
3) Pick an event:
   - **Bullish Cross (raw)** / **Bearish Cross (raw)**
   - **QUALIFIED Bullish** / **QUALIFIED Bearish**
   - **Flip Prime LONG/SHORT**
   - **Flip Pullback LONG/SHORT**
   - **Flip Retest LONG/SHORT**
4) Set **Once per bar close** → Create.

📝 **Version note:** If your chart still shows older names (e.g., `SPP MACD - Flip Prime LONG`), that’s okay — same signals. Names update when you load the latest script.

---

## Settings — explained like I’m five 👶⚙️
You can leave defaults and be fine. If you tweak:

- 🎛️ **Preset**  
  - *Classic Soft* = more signals.  
  - *Pro Filtered* = fewer, cleaner signals.

- 🧭 **Bigger‑picture check (HTF confirm)**  
  Only go long when higher timeframes lean bullish (and vice‑versa). Avoid fighting the trend.

- 📏 **Trend filter (Baseline & slope)**  
  Don’t buy when price is below a **falling** baseline (and vice‑versa). Saves a lot of pain.

- 🌊 **Chop filter (ADX)**  
  If the market is ranging/sideways, skip signals.

- 💪 **Strength check (Impulse gate)**  
  Ignores tiny, weak wiggles → higher‑quality flips.

- 🔇 **Quiet zone near zero (Deadband)**  
  Near zero, small changes don’t count → less whipsaw.

- 🧱 **Structure sync (optional)**  
  Only allow longs if price makes **higher highs/lows**. Training wheels for trend.

- 🧭 **Profiles: Scalp / Intraday / Balanced / Swing**  
  Sets strictness.  
  - *Scalp* = strictest (fewest signals, lowest noise).  
  - *Balanced* = good default.  
  - *Swing* = looser (more signals).

- ⌛ **Flip Decay**  
  The longer after a flip, the **more strength** required to signal → prevents chasing late moves.

---

## FAQs ❓
**Does it repaint?**  
🧱 No. Signals finalize on candle close. Higher‑timeframe checks are handled safely.

**Which markets/timeframes?**  
🌐 Anything on TradingView: crypto, stocks, FX, indices, futures.  
🕒 Start with **15m–4h** for smooth signals; go lower only if you’re OK with noise.

**Too many signals?**  
🔧 Use **Pro Filtered**, turn on **Qualified Cross** + **Flip Prime** only, try **Intraday/Scalp** profile.

**Too few signals?**  
🔧 Use **Classic Soft**, toggle **More Signals**, or switch profile to **Swing**.

**What are “Divergences”?**  
🧩 Optional markers showing disagreement between price and momentum. Useful later — you can ignore at first.

---

## Tips & Troubleshooting 🧰
- 🛎️ **Alerts not firing?** Set them to **Once per bar close**, not “Once per minute.”  
- 🧼 **Messy chart?** Turn off extras (Divergence, HUD, text on markers). Keep it clean.  
- 🧭 **Confused by flips?** Start with **Flip Prime** only; add **Pullback** later.  
- 🧱 **Still choppy?** Use **Pro Filtered** + **Intraday/Scalp** profile.

---

## Optional: Webhooks / automation 🤖
If you use webhooks, the indicator can send a tiny JSON when a Flip happens.
```json
{"indicator":"Momentum Regime (MACD+)","event":"bullFlip","type":"prime","symbol":"BINANCE:BTCUSDT","tf":"15"}

---
title: "SP — Momentum Matrix (Panel Pro)"
short_title: "Momentum Matrix"
permalink: /sp-oscillator-matrix/
module_id: sp-oscillator-matrix
category: "Bias / Momentum"
category_emoji: "🧭"
summary: "Multi-oscillator dashboard that normalizes signals into one easy read."
tags: [momentum, oscillators, normalization, dashboard]
---


> **Category:** 🧭 Bias / Momentum  
> Defines directional bias and strength. Reveals who’s in control — bulls or bears.


# ⚡️ SP: Momentum Matrix (Panel Pro) — Simple Guide

**What this is**  
A friendly panel that shows if momentum is mostly **up**, **down**, or **mixed** — like a weather report for your chart.  
- 🟢 = buyers in control (pressure up)  
- 🔴 = sellers in control (pressure down)  
- ⚪️ = mixed/neutral

Works on **any market** and **any timeframe** (crypto, stocks, FX, indices).

> ⚠️ Education only. Not financial advice.  
> ✅ Non‑repainting: signals confirm **after the candle closes** (no “ghost” signals).

---

## ⏱️ 60‑second setup

1) ➕ **Add to chart**  
   TradingView → *Pine Editor* → paste the script → **Add to chart** (it appears in its own panel).

2) 🧰 **Leave defaults alone**  
   They’re good for most charts.

3) 🕒 **Pick a timeframe**  
   - 15–30m or 1H are great to start.  
   - 1–5m is noisier (expect more flips).

Done. 👌

---

## 👀 What you’re looking at (no jargon)

1) 📈 **Composite line** (main line)  
   Blends several momentum tools into one score (**0–100**).  
   - **Above 50 → bullish bias**  
   - **Below 50 → bearish bias**

2) 🧭 **Signal line** (smoother guide)  
   - Composite **crosses above** → **possible turn up**  
   - Composite **crosses below** → **possible turn down**

3) 🎛️ **Momentum matrix** (colored ribbon)  
   Rows show what each underlying indicator “thinks.”  
   - **More 🟢 than 🔴** → broad agreement up  
   - **More 🔴 than 🟢** → broad agreement down  
   - Style: **🧱 Blocks** (tiles) or **🧵 Stripes** (continuous band)

> 💡 If your chart feels slow, switch the matrix style to **🧵 Stripes**.

---

## 🎯 How to use it (quick rules)

**For possible LONG bias (up):**  
- ✅ Composite **already above 50**  
- ✅ Composite **crosses up** through the signal line  
- ✅ Matrix shows **more 🟢 than 🔴**

**For possible SHORT bias (down):**  
- ✅ Composite **already below 50**  
- ✅ Composite **crosses down** through the signal line  
- ✅ Matrix shows **more 🔴 than 🟢**

**When to ignore:**  
- 🚫 Mostly ⚪️/mixed and composite stuck near 50  
- 🚫 Flips up/down every few candles (chop)  
- 🚫 Trading into major news or against a strong higher‑timeframe move

---

## 🔔 Alerts (set it and forget it)

1) Right‑click chart → **Add alert**  
2) Choose a built‑in condition → set **Once Per Bar Close**

- **XUP** — composite crossed **above** the signal line (possible up turn)  
- **XDN** — composite crossed **below** the signal line (possible down turn)  
- **OB** — composite entered **Overbought** (very hot)  
- **OS** — composite entered **Oversold** (very cold)  
- **50UP** — composite crossed **above 50** (bullish bias)  
- **50DN** — composite crossed **below 50** (bearish bias)

You’ll get the alert **after** the candle closes. ✅

---

## 🛡️ Two optional helpers (nice, not required)

- **FlipGuard** — a built‑in **seatbelt** that ignores flimsy flips in chop.  
  👉 Result: **fewer false starts**.

- **HTF Assist** — lets a **higher timeframe** (e.g., 1H or 1D) “vote” with you.  
  👉 Example: Trading the 15m chart? Ask the 1H to agree first for stricter entries.

> 🆕 New? Leave both at defaults. Turn on **HTF Assist** later if you want fewer, cleaner signals.

---

## 🧪 Easy presets (start here)

**Intraday (15–30m) 🕒**  
- Defaults are fine.  
- Want fewer but cleaner signals? Turn on **HTF Assist = 60m**.

**Swing (4H–1D) 📆**  
- Defaults are fine.  
- Extra safety: **HTF Assist = 1D** (for 4H) or **W** (for 1D).

**Scalp (1–5m) ⚡**  
- Expect more noise. Use **🧵 Stripes** ribbon.  
- Strongly consider **HTF Assist = 60m** to filter junk.

---

## 🛠️ Quick fixes (common questions)

**“It changed after I added it—repainting?!”**  
No. Signals confirm at **bar close**. Mid‑candle movement is normal on every indicator.

**“Where’s the colored ribbon?”**  
Turn on **Show heat‑matrix** in settings. If it’s cramped, increase **Row spacing** or switch to **🧵 Stripes**.

**“Too many alerts/whipsaws.”**  
Try a slightly higher timeframe (e.g., 30m → 1H), or turn on **HTF Assist**,  
or wait for **>50 (longs) / <50 (shorts)** **and** clear color agreement.

**“Can I scan for signals?”**  
Yes (advanced). The script includes hidden true/false outputs for scanners. Beginners can skip this.

---

## ⚙️ What the settings mean (plain English)

- **Overbought / Oversold** — “really hot” / “really cold.” Use as **context**, not auto buy/sell.  
- **Normalization lookback** — how far back we score 0–100. Bigger = smoother.  
- **Composite smoothing** — makes the main line less jittery.  
- **Matrix style** — **🧱 Blocks** (easy to spot changes) or **🧵 Stripes** (lighter).  
- **HTF Assist** — a bigger timeframe gets a vote (e.g., 1H or 1D).  
- **Require >50 for longs / <50 for shorts** — don’t fight the tide.  
- **Minimum consensus** — how many “yes” votes you want before acting (higher = pickier).

If that felt like a lot — **leave defaults on**. You’ll be fine. 👍

---

## 🧾 Safety checklist

- ⏳ Wait for the candle to **close** before acting.  
- 🏄‍♂️ Trade **with the current bias** (above 50 for longs, below 50 for shorts).  
- 🧭 Want extra safety? **Ask a higher timeframe to agree** (turn on HTF Assist).  
- 🧯 No indicator replaces a plan. Use stops and sensible position sizing.

---

## 💬 Need help?

- Updates & info: **signalpilot.io**  
- GitHub **Issues** tab for questions/bugs (include screenshot + timeframe + settings)

---

## © Credits & License

© SignalPilot Labs, Inc.  
For education only. No financial advice. See repository license for details.

---

### 🔁 Heads‑up for returning users
Previously called **Oscillator Matrix**. Same idea, new name: **Momentum Matrix**. 🚀

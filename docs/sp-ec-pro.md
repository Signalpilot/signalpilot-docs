---
title: "SP — Reversal Engine (EC Pro)"
short_title: "Reversal Engine"
permalink: /sp-ec-pro/
module_id: sp-ec-pro
category: "Timing"
category_emoji: "⏱️"
summary: "Event-centric reversal detection with PilotLine, NanoFlows, and regime context."
tags: [reversal, events, regime, pilotline, nanoflow]
---

--8<-- "_includes/meta-badge.html"


> **Category:** ⏱️ Timing  
> Focuses on exhaustion, reversals, and the rhythm of market cycles.


# 🔁 SP — Reversal Engine (EC Pro) — by Signal Pilot
**Spot likely tops & bottoms. Act on clean, close‑confirmed signals.**  
Works on any market & timeframe in TradingView. Signals **lock on candle close** (✅ no repaint).  
**Profiles are locked** — you don’t need to change a single setting.

---

## 👀 What you’ll see on the chart
- 🏷️ **Five tags:** `TD`, `IGN`, `OUT`, `CAP`, `WRN`
- 🟩🟥 **Regime bars (bias):** green = leaning up, red = leaning down
- 🧭 **Pilot Line & ribbon:** smooth trend line + comfort zone
- ➕ **NanoFlow crosses:** tiny `+` below (strength) / above (weakness)
- 🔺🔻 **Breakout arrows:** strong breakout/breakdown markers

> Only **one tag** can print per bar (priority: **WRN ➝ CAP ➝ OUT ➝ IGN ➝ TD**).

---

## 🏷️ Tag cheat‑sheet (what it means • what people do)
| Tag | Meaning | Typical action |
|---|---|---|
| 🚀 **IGN** (Ignition) | Up move kicking off after a base | Consider **entering long** / adding |
| ⛔ **OUT** (Bear Reversal) | Down move kicking off after a top | Consider **exiting longs** / **shorting** |
| 🎯 **CAP** (Cap) | Likely top forming soon | **Take profit** / **avoid fresh longs** |
| ⚠️ **WRN** (Warn) | Early caution near highs | **Tighten stops**, be selective |
| 🛬 **TD** (Touchdown) | Possible bottom forming | **Wait for IGN** to confirm |

**Rule #1:** Act **only after the candle closes** — that’s when a tag is final.

---

## ⏱️ 90‑second setup
1. Add the invite‑only script: **“Reversal Engine (EC Pro)”** on TradingView.  
2. Do nothing else — **no settings** to tweak.  
3. Create **two core alerts** (set to **Once Per Bar Close**):
   - 🔔 `SP:RE | Ignition (Bull Rev)` → consider **long**
   - 🔔 `SP:RE | OUT (Bear Rev)` → consider **short** / **exit longs**

_Add later for extra heads‑up:_  
`SP:RE | Cap (Hi‑Sens Top)` • `SP:RE | Warn (Early Top)` • Regime/PL/NanoFlow alerts below.

> 📝 If your alert picker still shows **SP:EC** names, remove & re‑add the script to load the new **SP:RE** alerts.

---

## 🧭 How to read the extras (no jargon)
### 🟩🟥 Regime bars (bias)
- Green = **up bias**. Red = **down bias**.  
- Flips only when evidence **persists** (guarded to prevent flicker).  
**Tip:** Prefer longs in green regime and shorts in red.  
**Alerts:** `SP:RE | Regime Flip Up` • `SP:RE | Regime Flip Down`

### 🧵 Pilot Line & ribbon
- Above a **rising** Pilot Line → better for **longs**.  
- Below a **falling** Pilot Line → better for **shorts**.  
**Alerts:** `SP:RE | PL Reclaim` • `SP:RE | PL Loss` • `SP:RE | PL Slope Turn Up/Down`

### ➕ NanoFlow crosses
- `+` **below** price = micro **strength** (nice add‑on for longs).  
- `+` **above** price = micro **weakness** (nice add‑on for shorts).  
**Alerts:** `SP:RE | NanoFlow Up` • `SP:RE | NanoFlow Down`

---

## 📘 Two simple playbooks

### ✅ Long (trend up)
1) Wait for **IGN** (on close).  
2) Prefer **green regime** + price **above** the Pilot Line.  
3) Bonus: a **`+` below** price.  
4) If **OUT** prints after entry, strongly consider **exiting**.

### 🧨 Short (trend down)
1) Wait for **OUT** (on close).  
2) Prefer **red regime** + price **below** the Pilot Line.  
3) Bonus: a **`+` above** price.  
4) If **IGN** prints after entry, strongly consider **exiting**.

_Timeframe tips:_ **15m / 1h** are easiest; **5m** for scalps; **2h/4h/1D** for swing context.

---

## 🤔 “Why no CAP/WRN on that big run?”
When a trend is truly healthy (green regime, rising Pilot Line, solid volume), the engine avoids nagging. On higher TFs (2h+), **soft caution** is built‑in and prints **WRN** only when there’s real reason (high Stoch, very recent top structure or small extension, plus a bearish nudge).  
**Bottom line:** fewer but better warnings on high TFs; more frequent on 5m/15m.

---

## ❓ Common questions — **OUT**
- **OUT fired but price popped a bit higher — wrong?**  
  ⤷ No. OUT = “**roll started**,” not “that candle was the exact top.” Retests happen. Many wait for **PL Loss** or a **lower high** to size up.

- **CAP vs OUT — which is which?**  
  ⤷ **CAP** = **likely top** (great for taking profits / avoiding new longs).  
  ⤷ **OUT** = **confirmed roll** (many treat it as the short/exit trigger).

- **Should I always exit on OUT?**  
  ⤷ It’s a strong cue — especially with **red regime** or **PL slope down**. If you keep a runner, tighten stops above the swing high or above PL.

- **OUT in a strong uptrend?**  
  ⤷ Respect it, but if price quickly **reclaims PL** and regime stays/turns green, it can be a pullback. Some wait for **Regime Flip Down** to press.

- **OUT during thin volume or news spikes — trust it?**  
  ⤷ Volume filters help, but news can whipsaw. If unsure, wait for **close below PL** or a clear **lower high**.

- **OUT then IGN soon after — which wins?**  
  ⤷ Follow the **newest close‑confirmed tag**. If IGN prints with **PL Reclaim** and **green regime**, the up‑move likely resumed.

---

## 🔔 Full alert list (exact names)
**Core:**  
- `SP:RE | Ignition (Bull Rev)`  
- `SP:RE | OUT (Bear Rev)`

**Tops / caution:**  
- `SP:RE | Cap (Hi‑Sens Top)`  
- `SP:RE | Warn (Early Top)`

**Trend & bias:**  
- `SP:RE | PL Reclaim` • `SP:RE | PL Loss`  
- `SP:RE | PL Slope Turn Up` • `SP:RE | PL Slope Turn Down`  
- `SP:RE | Regime Flip Up` • `SP:RE | Regime Flip Down`

**Micro momentum:**  
- `SP:RE | NanoFlow Up` • `SP:RE | NanoFlow Down`

**Base:**  
- `SP:RE | Touchdown (Base)`

> Set every alert to **Once Per Bar Close** so you don’t chase mid‑bar noise.

---

## 🛠️ Under the hood (plain English)
- A smooth **Pilot Line** + ribbon visualizes trend and a small comfort zone.  
- A **regime vote** (trend, price vs line, slope) sets the background bias, with a guard so it doesn’t flicker.  
- Momentum + structure + volume combine into the five tags.  
- Everything is **close‑confirmed** for **non‑repainting** alerts.  
- **Profiles are locked per timeframe** — *you* just read and act.

---

## ⚠️ Safety
Educational tool only — **not** financial advice. Always use your own risk management.

## 💬 Support
When you open an issue, include **symbol**, **timeframe**, the **tag** (IGN/OUT/etc.), and a **screenshot at the close** of the bar that printed it.

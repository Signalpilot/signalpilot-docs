---
title: "SP — SD Zones (SDZones Pro)"
short_title: "SD Zones"
permalink: /sp-sdzones-pro/
module_id: sp-sdzones-pro
category: "Structure / Levels"
category_emoji: "🏗️"
summary: "Supply/Demand zones that hold still—no wobble, no clutter."
tags: [supply, demand, zones, structure]
---


> **Category:** 🏗️ Structure / Levels  
> Maps the invisible architecture of price — zones, liquidity, and anchor points.


# 🗺️ SP — SD Zones (SDZones Pro) v6 — by Signal Pilot

Clean, easy supply/demand zones for TradingView. **Green** = areas where buyers showed up before (demand). **Red** = areas where sellers showed up before (supply). It stays tidy, scores stronger areas, and can alert you when price touches or breaks a zone. 📈

> 🔄 **Name update:** Previously “Signal Pilot | SDZones Pro v6.”  
> 🌐 **Website:** https://www.signalpilot.io • 🖥️ **Platform:** TradingView  
> 🧭 **Use case:** Any market, any timeframe.  
> ⚠️ **Note:** Educational tool. Not financial advice.

---

## 🚀 Quick Start (60 seconds)

1. ➕ **Add to chart** in TradingView (Indicators → Invite‑only scripts → **SD Zones (SDZones Pro)**).
2. ✅ **Keep the defaults.** It’s already clean.
3. Still looks busy? Try:
   - 🧹 **Quiet Mode:** ON (default) — keeps only the most helpful boxes near current price.
   - 👀 **Max visible per side:** set to **3–4**.
   - 📦 **Compact view:** ON — shows boxes over the last ~40 bars.

You’re done. Treat zones as **areas**, not exact lines. 🎯

---

## 👀 How to read the chart

- 🟩 **Green box = Demand**  
  Where price bounced up before (possible support).

- 🟥 **Red box = Supply**  
  Where price turned down before (possible resistance).

- 🔄 **Flip shading**  
  If price **breaks** through a box and later trades back into it, that box can “switch sides.”  
  _Example: broken red → may act like green._

- 🏷️ **Badge with a number (0–10)**  
  A quick strength score. Higher ≈ more “reasons” that area might matter:
  - 📊 Near **VWAP**
  - 📅 Near **yesterday’s high/low**
  - 📈 Near common **moving averages**
  - 🎯 Near a **round number** (e.g., 100, 1000)

💡 **Tip:** Use zones to plan **where** you’ll look for trades. Use your own entry trigger to decide **when**.

---

## 🔔 Alerts (optional but handy)

- 🛎️ **First Touch** — Notifies the first time price re‑enters a box.  
- 🧱 **Broken** — Notifies when price breaks a box.

⏱️ In TradingView, set alert timing to **“Once per bar close”** for reliability.

---

## ⚙️ Settings you’ll actually use

- 🧹 **Quiet Mode (ON):** Curates boxes for you.  
- 👀 **Max visible per side:** Lower number = cleaner chart (try **3–4**).  
- 📦 **Compact view:** Shows boxes only across recent bars (default ~40). Increase if you want more history.  
- ✏️ **Outline only:** Borders without fill for a super‑clean look.  
- 🔄 **Flip zones:** Leave ON — flags role changes (very useful).

**Break rule (simple choice):**
- ✅ **Close (stricter):** Box is “broken” only if the candle **closes** through it.  
- ⚡ **Wick (looser):** Even a quick spike counts as broken.

---

## 🧭 Simple workflows

**⏱️ Day trading**
1. Quiet Mode ON • Max per side = **3–4** • Compact width ~**40**.  
2. Turn on **First Touch** and **Broken** alerts for key boxes.  
3. Use your own entry trigger (e.g., a candle pattern or momentum cue) at/near the zone.

**🗓️ Swing trading**
1. Increase Compact width (e.g., **80–120**) to see more history.  
2. Use **Close** as the break rule (stricter).  
3. Prefer zones with **higher badge scores**.

---

## 🧼 Why boxes appear or disappear

- ✅ **Appear** when price clearly turned at a spot in the past.  
- 👻 **Fade/Hide** when broken, overlapped by a stronger area, or too old.  
- 👍 **Good thing:** The chart stays readable. Only the relevant stuff remains.

---

## 📝 Cheat sheet (what labels mean)

- Example badge: **C 6.4 VW EMA RN x2 FLIP**
  - **C 6.4** → score (0–10). Higher = stronger.  
  - **VW** → near VWAP  
  - **EMA** → near moving averages  
  - **RN** → near a round number  
  - **x2** → touched twice  
  - **FLIP** → role changed after break/retest

---

## ✅ Good habits

- Treat zones as **areas**, not razor‑thin lines.  
- Give entries some breathing room; don’t put stops exactly on the edge.  
- Combine with your plan (trend, risk, trigger).  
- Use alerts to **wait** for price to come to you. ⏳

---

## ❓ FAQ

**Does this predict the future?**  
No. It highlights areas where price reacted before. You still need your plan and risk rules.

**Why did a box vanish?**  
It was broken, overlapped by a stronger one, or got too old. This is on purpose to keep charts clean.

**Do I need to change many settings?**  
No. Defaults are solid. If it feels busy, reduce **Max visible per side**.

**What markets/timeframes work?**  
Any. Crypto, stocks, FX, futures; 1‑minute to weekly. 🌍

---

## 📜 Changelog (plain English)

**v6**
- 🧳 New **compact boxes** (no ribbon), anchored to where they came from.  
- 🧹 **Quiet Mode + smart declutter** to avoid overlap and clutter.  
- 🔄 **Flip shading** for role changes after breaks.  
- 🏷️ Simple **strength badges** (0–10) with easy tags (VW, yesterday’s H/L, moving averages, round numbers).  
- 🎨 Clean themes and optional **outline‑only** mode.

---

## ⚖️ Legal

Educational tool. **Not financial advice.** Markets are risky—use position sizing and stops.  
© SignalPilot. All rights reserved.

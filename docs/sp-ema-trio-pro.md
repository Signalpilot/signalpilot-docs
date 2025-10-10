---
title: "SP — Trend Stack (EMA 50/100/200 Pro)"
short_title: "Trend Stack (EMA 50/100/200)"
permalink: /sp-ema-trio-pro/
module_id: sp-ema-trio-pro
category: "Bias / Momentum"
category_emoji: "🧭"
summary: "Clear stacked-EMA trend map with GC/DC context and disciplined pullback logic."
tags: [trend, ema, bias, momentum]
---


> **Category:** 🧭 Bias / Momentum  
> Defines directional bias and strength. Reveals who’s in control — bulls or bears.


# SP — Trend Stack (EMA 50/100/200 Pro) GC/DC + PB —  by Signal Pilot

A simple, reliable way to **see the trend** and **spot key moments** on your chart.

- 🏷️ **GC/DC labels** tell you when trend may be changing.
- 🟢🔴 **Pullback dots (PB)** mark clean “dip/bounce back into the trend.”
- ✳️ **PB1** highlights the **first pullback after a new GC/DC** — the one many traders watch.
- 🧲 **EMA200 Reclaim/Reject** flags strength/weakness around the 200 EMA.
- ✅ **No repainting:** signals appear only after the candle closes.
- ⏰ **Alerts included** so you don’t have to stare at the screen.

> ⚠️ Educational tool only. Not financial advice.

---

## Legend (what you’ll see on the chart) 🗺️

> Emoji are just hints — the **chart colors** are the source of truth.

- 🔵 **“GC” label** – Golden Cross (EMA50 crosses **above** EMA200)  
- 🔴 **“DC” label** – Death Cross (EMA50 crosses **below** EMA200)  
- 🟢 **Green dot** – Pullback **long** in an uptrend  
- 🔴 **Red dot** – Pullback **short** in a downtrend  
- 🔹 **Aqua dot** – **First** pullback after a GC (PB1)  
- 🟣 **Fuchsia dot** – **First** pullback after a DC (PB1)  
- 🟦 **Teal tiny circle below bar** – Price **reclaimed** EMA200 (strength)  
- 🟪 **Purple tiny circle above bar** – Price **rejected** EMA200 (weakness)

> If a bar is “busy,” the indicator shows only the **most important** event:  
> **GC/DC → EMA200 Reclaim/Reject → PB** (in that order).

---

## Quick Start (60 seconds) ⏱️

1. Open **TradingView → Pine Editor**, paste the script, **Add to chart**.  
2. You’ll see three lines (EMA **50/100/200**) plus simple labels/dots.  
3. To set alerts: **Right‑click chart → Add alert… → Condition = this script**, then pick a signal (see names below).

---

## The super‑simple playbook 🧭

**After a 🔵 “GC”**  
- Trend may be turning **up**.  
- Watch for the **Aqua PB1 dot** (🔹) — the **first dip after the turn**.  
- Later **Green dots** (🟢) are regular pullbacks in the uptrend.

**After a 🔴 “DC”**  
- Trend may be turning **down**.  
- Watch for the **Fuchsia PB1 dot** (🟣) — the **first bounce after the turn**.  
- Later **Red dots** (🔴) are regular pullbacks in the downtrend.

**Around the 200 EMA**  
- 🟦 **Below‑bar teal circle** = price got back **above** the 200 (extra strength).  
- 🟪 **Above‑bar purple circle** = price got pushed **below** the 200 (extra weakness).

---

## Alerts (copy these names exactly) ⏰

All alerts fire **on candle close** (so they don’t repaint):

- `SP:EMA | GOLDEN_CROSS` — EMA50 crossed **above** EMA200 ⭐  
- `SP:EMA | DEATH_CROSS` — EMA50 crossed **below** EMA200 ⚠️  
- `SP:EMA | PB1_AFTER_GC` — first pullback after a Golden Cross 🔹  
- `SP:EMA | PB1_AFTER_DC` — first pullback after a Death Cross 🟣  
- `SP:EMA | PB_LONG` — pullback long in an uptrend 🟢  
- `SP:EMA | PB_SHORT` — pullback short in a downtrend 🔴  
- `SP:EMA | 200_RECLAIM` — price reclaimed the EMA200 ⤴️  
- `SP:EMA | 200_REJECT` — price rejected the EMA200 ⤵️

> **Note:** Alert titles keep the original `SP:EMA` naming for backward compatibility.

---

## Settings (only if you want to tweak) ⚙️

The defaults are conservative and work out of the box.  
If you open the code, the tweakable bits are at the top:

- 📏 **EMAs:** 50 / 100 / 200  
- 🧯 **Cooldown:** waits **10 bars** before the **same** signal can fire again  
- 🎯 **PB1 window:** PB1 must happen within **60 bars** after a new GC/DC  
- 🧼 **Strict PB:** pullbacks must also agree with EMA100 (keeps signals cleaner)  
- 🛟 **ATR guardrails (optional):** faint bands around the 200 EMA (off by default)

---

## FAQ ❓

**What’s an EMA?**  
A moving average that gives more weight to recent prices.

**What is a Golden/Death Cross?**  
EMA50 crossing the EMA200. Above = Golden (up). Below = Death (down).

**What does “non‑repainting” mean?**  
Signals only appear **after** the candle closes, so they don’t change later.

**Does this place trades for me?**  
No. It’s a **reading tool** for trend and pullbacks. Use your own risk rules.

---

## Troubleshooting 🛠️

- **“My alert came in late.”** Alerts are **close‑confirmed** by design.  
- **“I saw a cross but no PB dot.”** That bar likely had a higher‑priority event (normal).  
- **“Too many dots.”** Keep **Strict PB** on or increase the **Cooldown**.

---

## Notes for existing users 📝

- Previously called **“SP: EMA Trio PRO • GC/DC Text + PB1.”**  
- The indicator name is now **Trend Stack (EMA 50/100/200 Pro)**.  
- **Alert names and hidden screener fields** still use the `SP:EMA` convention so your existing alerts/screeners don’t break.

---

## Changelog 🗒️

**v6.8**
- ✅ New name: **Trend Stack (EMA 50/100/200 Pro)**  
- ✳️ PB1 one‑shot logic after GC/DC, with windowing  
- 🧹 Clean event priority (GC/DC → EMA200 → PB)  
- 🧼 Minimal visuals; ⏰ close‑confirmed alerts; ✅ non‑repainting

---

## License & Disclaimer ⚖️

© SignalPilot. All rights reserved.  
For **educational purposes only**. This is **not** financial advice.  
Past performance does not guarantee future results.

---

## Links 🔗

- Website: https://signalpilot.io  
- Support & Suite: See website for the full SignalPilot toolset.

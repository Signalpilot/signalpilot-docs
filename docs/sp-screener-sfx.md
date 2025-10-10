---
title: "SP — Screener (Screener Table)"
short_title: "Screener"
permalink: /sp-screener-sfx/
module_id: sp-screener-sfx
category: "Meta / Tools"
category_emoji: "🧩"
summary: "One-glance market scan that surfaces clean, screener-safe signals."
tags: [screener, scan, dashboard, signals]
---


> **Category:** 🧩 Meta / Tools  
> Filters, regimes, and screeners that unify and contextualize all modules.


# SP — Screener (Screener Table) 🎯 — by Signal Pilot  

**What it is (one line) 📌**  
A simple on‑chart **table** that watches up to **8 markets** (any symbols, any timeframes) and tells you when a fresh **bullish ⬆️** or **bearish ⬇️** signal just happened — plus a quick “how strong is it?” **Score ⭐**.

---

## TL;DR — How to use it ⚡

1. **Add to chart** (overlay). 📈  
2. In settings, pick up to **8 rows** (each row = one *symbol + timeframe*). 🧩  
3. Choose a **table size** and screen corner. 🧭  
4. Trade your plan — this is a **dashboard**, not a “buy/sell” robot. 🤖🚫

> ℹ️ This file shows info on the chart. It does **not** place trades and does **not** send alerts by itself.

---

## What you’ll see (each row) 🧾

- **Ticker 🔖** — e.g., `BTCUSDT · 5` (symbol + timeframe).  
- **Signal 🚦** — **⬆️ Bullish** / **⬇️ Bearish** / **—** (none yet).  
- **Status (Age) ⏱️** — how long since that signal fired (`12m`, `2h`, `1d`).  
- **TP1 🎯** — a simple first target based on recent volatility (a “reasonable first stoplight”).  
- **Gauss Ribbon 🧶** — quick read of trend & stretch:  
  - **Inside** = normal zone  
  - **Outside** = stretched/extended  
  - **Bullish / Bearish** = trend direction  
- **Score ⭐ (0–100)** — higher = more green lights behind the scenes.  
- **P&L 💹** — how the **last signal** has done since it fired (not your account P&L).

> ✅ **Fresh & nearby** often = new arrow, **small Age**, **solid Score**, and **Inside** (not stretched).

---

## “I don’t want to learn settings.” Cool — use these. 🛠️

- Leave everything **ON** under **Accuracy Filters**. 🧱 (They block junk signals.)
- Start with **Min Score = 60**. 🎚️
- **Intraday (fast) ⏩**: use 3m–15m timeframes; if noisy, bump Score to **65–70**.  
- **Swing (slower) 🐢**: use 1H–4H–1D rows; Score around **55–60** is fine.

You can always add/remove rows later. ➕➖

---

## Reading a row — quick examples 🔍

**A) Fresh bullish idea 🟢**  
`⬆️ Bullish` • **Age:** `9m` • **Score:** `72` • **Gauss:** `Inside | Bullish`  
**Plain English:** “New up signal, not old, strong backing, and not stretched.”

**B) Caution on a chase ⚠️**  
`⬆️ Bullish` • **Age:** `3h` • **Score:** `61` • **Gauss:** `Outside | Bullish`  
**Plain English:** “Up signal, but it’s older and stretched. Don’t assume it continues.”

**C) Nothing to do 💤**  
`—` • **Age:** `—` • **Score:** `—`  
**Plain English:** “No qualified signal yet. Move along.”

---

## Setup (step‑by‑step) 🧭

1. **Rows**  
   - For each row, pick a **Symbol** (e.g., `BINANCE:BTCUSDT`) and a **Timeframe** (e.g., `15` for 15‑minute).  
2. **Table Options**  
   - **Show Table**: keep ON ✅  
   - **Position**: pick a corner you like ↖️↗️↙️↘️  
   - **Size**: Tiny / Small / Normal / Large 🔎  
   - **Show Score**: ON if using Normal/Large (recommended) ⭐  
3. **Accuracy Filters** (keep ON unless you know why you’re changing them) 🧰  
   - These are simple “green lights” that aim to avoid weak signals.

---

## What makes a signal appear? (no jargon) 🧠

A signal shows only when **several checks agree**:  
- Momentum flips up/down (the script checks this for you). 🔄  
- Trend, higher timeframe, volume push, and “not too stretched” checks look OK. ✅  
- The **Score** (0–100) meets your **Min Score** (default 60). ⭐

If any of those don’t pass, you’ll just see **—** (no signal). That’s normal. 😌

**Good to know:**  
Signals **lock in at candle close** on the timeframe for that row. 🧷  
Until the candle closes, things can wobble; once it closes, it’s final. 🔒

---

## Cheat sheet 📝

- **Score ⭐**  
  - **70+** = strong agreement  
  - **60–69** = decent  
  - **<60** = filtered out (by default)  
- **Age ⏱️**  
  - **Minutes** = fresh  
  - **Hours/Days** = getting old  
- **Gauss: Inside vs Outside 🧶**  
  - **Inside** = normal zone (healthier)  
  - **Outside** = stretched; be careful chasing  
- **P&L 💹**  
  - Performance since the **last signal** (not your account P&L)

---

## Common questions ❓

**Can I just buy every ⬆️ and sell every ⬇️?**  
**No.** Treat this as a **radar**, not a rulebook. Use your plan & risk controls. 🧭🛡️

**Why do some rows never signal?**  
Filters doing their job. Either no good setup yet or your **Min Score** is too high. 🧱

**Why is TP1 far/close?**  
It adapts to recent volatility. Wild markets → bigger TP1. 🌊

**Does this repaint?**  
**No.** Signals finalize at candle close and don’t disappear later. 🔒

**Does this send alerts?**  
This table doesn’t. It’s for **visual scanning**. Use your broader workflow for alerts. 🔔

---

## When to change settings 🎚️

- **Too many signals?** Increase **Min Score** (e.g., 60 → 65). ⬆️  
- **Still too chatty on tiny TFs?** Keep filters ON and use a **slightly higher TF**. 📈  
- **Too few signals on higher TFs?** Lower **Min Score** a little (e.g., 60 → 55). ⬇️

---

## What this is NOT 🚫

- Not a trade copier.  
- Not financial advice.  
- Not a full market scanner across thousands of tickers (it shows **8 rows you choose**).

---

## Safety 🛡️

- Use stops and position sizing. 🧯  
- One signal isn’t certainty. 🎲  
- News, liquidity, and time of day still matter. 📰⏰

---

## Changelog (v6.1 — the “Accuracy+” update) 🗓️

- Cleaner signals by default (more agreement under the hood). 🧠  
- Simple **Score** so you don’t have to read indicators. ⭐  
- Four table sizes so it fits any chart layout. 📐

---

**Made for humans. If you can read green/red arrows, you can use this.** 🟢🔴

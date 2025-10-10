---
title: "SP — Key Anchors (Key Levels Suite)"
short_title: "Key Anchors"
permalink: /sp-key-levels-suite/
module_id: sp-key-levels-suite
category: "Structure / Levels"
category_emoji: "🏗️"
summary: "HTF, session, and VWAP anchors to orient every trade."
tags: [levels, anchors, htf, vwap, sessions]
---


> **Category:** 🏗️ Structure / Levels  
> Maps the invisible architecture of price — zones, liquidity, and anchor points.

--8<-- "_includes/meta-badge.html"

# 🔑⚓ SP — Key Anchors (Key Levels Suite) — by Signal Pilot

**Plain English:** Key Anchors draws the price levels traders actually watch:
- ⬆️⬇️ High/Low for the **Day, Week, Month, Quarter**
- 🕒 Your own **Session** Open/High/Low/Mid (up to 3 sessions you choose)
- 🎯 **VWAP** (the “fair price” line) for **Day / Week / Month**

It’s clean, fast, and once a candle closes, the past doesn’t change (**no repaint**).  
**Education only — not financial advice.**

---

## ⚡ Quick Start

1. ➕ Add the script to your TradingView chart.  
2. ⚙️ Open settings → **turn ON**:  
   - **Daily High (dH)** and **Daily Low (dL)**  
   - **Daily VWAP** (optional, great for intraday)  
3. 🔎 Zoom out a bit. You’ll see simple horizontal lines with short labels like `dH`, `wL`, `mVWAP`.  
4. 🧹 If it looks crowded, turn **OFF** what you don’t need. Less is more.

**Optional alerts:**  
🔔 Right‑click chart → **Add alert…** → Condition = this script → pick
“**SP: dH touch**” or “**SP: dL touch**” → Create.

---

## 🧠 What the lines mean (no jargon)

- ⬆️ **High (H):** Highest price of the period (day/week/month/quarter).  
- ⬇️ **Low (L):** Lowest price of the period.  
- ↔️ **Mid:** Halfway between that period’s High and Low.  
- 🕒 **Session O/H/L/Mid:** Levels inside *your* trading hours (you set the times).  
- 🎯 **VWAP (D/W/M):** “Average price paid,” weighted by volume — a fair‑value line many pros watch.

> Think of **High/Low** as **ceilings/floors** and **VWAP** as the **fair price** magnet.

---

## 🎯 Why you’ll care

- 🧭 **Fast context:** Instantly see if price is near today’s high, last week’s low, or the monthly VWAP.  
- ⏱️ **Better timing:** Price often **reacts** at these lines (stall, bounce, or break).  
- 🔔 **Clean alerts:** Get pinged when price **touches** big levels (daily/weekly/monthly highs or lows).

---

## 💡 Simple ways to use it (ideas, not signals)

- 🟢 **Bounce idea:** Price tests **dL** (daily low) and slows → look for a bounce back toward **VWAP**.  
- 🟣 **Breakout idea:** Price **pushes through** **wH** (weekly high) and holds → momentum may continue.  
- ⚪ **Mean‑revert idea:** Far above/below **VWAP** → price often re‑checks VWAP.

👉 Always use your own plan and risk controls. These are just ideas.

---

## 🏷️ Legend (short labels you’ll see)

- `dH` / `dL` — Daily High / Low  
- `wH` / `wL` — Weekly High / Low  
- `mH` / `mL` — Monthly High / Low  
- `qH` / `qL` — Quarterly High / Low  
- `dMid`, `wMid`, `mMid`, `qMid` — Period Mid  
- `dVWAP`, `wVWAP`, `mVWAP` — VWAP for Day / Week / Month

---

## ⚙️ Buttons you’ll see (in plain words)

### Main switches
- **HTF Levels:** Show big‑picture lines (Day/Week/Month/Quarter).  
- **Session Levels:** Show lines for your trading hours (Open/High/Low/Mid).  
- **VWAP Levels (centers):** Show VWAP for Day/Week/Month (no bands = cleaner chart).

### HTF toggles (per timeframe)
- Turn **O / H / L / Mid** on/off.  
  ✅ **Start with H & L only** — they’re the most useful.

### Sessions (up to 3)
- ⌚ Set your local session hours (e.g., `0930-1600` for US cash).  
- 🔁 Lines show *during* that session and reset next session.  
- Toggle **O/H/L/Mid** if you want those session‑specific lines.

### VWAP
- 📊 **Daily VWAP:** Great for intraday.  
- 🗓️ **Weekly/Monthly VWAP:** Nice for swing context.

### Appearance
- ➖ **Line type:** Regular / Dashed / Dotted  
- 📏 **Width:** Make lines thicker if you want  
- ↔️ **Offsets:** How far lines/labels extend left/right  
- 🔤 **Label size:** Tiny / Small / Normal

---

## 🔔 Alerts you can use (ready to go)

- **SP: dH touch** — Price touched **Daily High**  
- **SP: dL touch** — Price touched **Daily Low**  
- **SP: wH touch** — Price touched **Weekly High**  
- **SP: wL touch** — Price touched **Weekly Low**  
- **SP: mH touch** — Price touched **Monthly High**  
- **SP: mL touch** — Price touched **Monthly Low**

🧷 These only fire once the candle closes (no repaint surprises).

---

## ❓ FAQs (really simple)

**What does “no repaint” mean?**  
➡️ Once a candle closes, the past stays put. Yesterday’s lines won’t rewrite tomorrow.

**Which lines should I start with?**  
➡️ **Daily High/Low** + **Daily VWAP**. Add weekly/monthly later if you want.

**My chart is messy — help!**  
➡️ Turn **OFF** what you don’t need. Keep it to a few key lines.

**Why did today’s high move intraday?**  
➡️ The **day isn’t over**. Today’s high/low update as new highs/lows happen. After the day ends, they lock.

**Is this buy/sell signals?**  
➡️ No. It’s a **map** to important prices — not a signal generator.

---

## 🛠️ Troubleshooting

- ❌ **No lines?** Make sure the toggles (H/L/VWAP) are ON.  
- 🕰️ **Wrong session times?** Adjust the session hours to match your market.  
- 🧽 **Too many objects?** Turn off unused timeframes or sessions.

---

## ✨ What’s new in v6

- ➕ Added **Quarterly** levels  
- 🔁 Up to **3 custom sessions**  
- 🎯 **Daily/Weekly/Monthly VWAP** centers  
- 🏷️ Cleaner right‑side labels + style controls  
- 🔔 Built‑in **touch alerts** (daily/weekly/monthly highs/lows)

---

## 💻 Install (TradingView)

1. Open **TradingView → Pine Editor**.  
2. Paste the script code → **Save** → **Add to chart**.  
3. Open settings and turn on the lines you want (start with Daily **H/L**).  
4. Optional: set alerts for “dH touch” and “dL touch”.

### 🏷️ Match the on‑chart title
If you want the script’s on‑chart title to match the new name, set:
```pine
indicator("SP: Key Anchors (Key Levels Suite) (v6, no MA)", overlay=true, max_lines_count=500, max_labels_count=500)

---
title: "SP — Flow Balance (OBV Pro)"
short_title: "Flow Balance (OBV)"
permalink: /sp-obv-pro/
module_id: sp-obv-pro
category: "Participation (Volume / Flow)"
category_emoji: "💧"
summary: "Smoothed OBV with noise control to track net pressure cleanly."
tags: [obv, flow, accumulation, distribution, participation]
---


> **Category:** 💧 Participation (Volume / Flow)  
> Measures market participation and conviction behind price movement.


# SP — Flow Balance (OBV Pro) — by Signal Pilot

**Plain‑English guide — no jargon.**  

Flow Balance reads **buying vs. selling pressure** from volume and shows you:
- when pressure **flips** (buyers take over or sellers take over) 🟢🔴
- when a move looks **overstretched** (often tired) 💥
- when **price and volume disagree** (a heads‑up a turn may be near) 🔀

It works on any market and timeframe, does **not repaint** after the candle closes ✅, and includes ready‑made **alerts** 🔔 and **scanner outputs** 🔎.

> Part of the SignalPilot suite — learn more at **[signalpilot.io](https://www.signalpilot.io/)**. Educational use only.

---

## What you’ll see on the chart 👀

Flow Balance sits in its **own panel** under price.

- 🔵 **Blue line** → the money‑flow line (based on volume).
- 🟡 **Yellow line** → a smooth “middle line” for context.
- 🟩 **Light green rails + fill** → a guide zone around that middle line.

**Dots (your signals) ⬇️**
- 🟢 **Green dot** → pressure **flipped up** (buyers in control).
- 🔴 **Red dot** → pressure **flipped down** (sellers in control).
- 💗 **Pink dot** → **stretched high** (up move may be tired).
- 🟣 **Purple dot** → **stretched low** (down move may be tired).
- 🔀 **Divergence dots** → price and flow **disagree**:
  - 📈 **Bullish divergence**: **Lime/Teal** (down move may be weakening).
  - 📉 **Bearish divergence**: **Red/Orange** (up move may be weakening).

> Quick read: **🟢/🔴 = flips**, **💗/🟣 = overcooked**, **🔀 = disagreement**.

---

## How to use it (3 steps) 🪜

1️⃣ **Find direction with a flip**  
- 🟢 Green → look for longs.  
- 🔴 Red → look for shorts.

2️⃣ **Check heat**  
- 💗 or 🟣 means the move is **tired**. Be picky with entries right after these. ⚠️

3️⃣ **Use divergences as a heads‑up**  
- 📈 Bullish divergence near support → possible **bounce**.  
- 📉 Bearish divergence near resistance → possible **pullback**.

> Keep it simple: **Flip for direction**, **Stretch for caution**, **Divergence for timing**. 🎯

---

## Quick start (60 seconds) ⏱️

1. Add **Flow Balance (OBV Pro)** to your chart. ➕  
2. Leave settings as‑is — **defaults are safe**. ✅  
3. Wait for a **🟢 or 🔴** flip dot.  
4. Prefer entries on the **first pullback** after the flip (not the exact dot). 🔁  
5. If you also see **💗/🟣**, reduce size or wait — the move might be tired. 🧊

---

## Best practices 🧭

- Pair Flow Balance with your **trend tool** or key **levels** (e.g., moving average, previous highs/lows). 🧩  
- **Confluence wins:** Flip + level + your setup > any single signal. 🏗️  
- **Divergences** help most at **important areas** (support/resistance). 🗺️  
- Quiet charts are fine — **no signal** is better than a **bad signal**. 🤫

---

## Settings (explained like a human) ⚙️

- **HTF timeframe (blank = chart) 🕒**  
  Want the money‑flow line calculated on a bigger timeframe while you trade a smaller one?  
  Example: Trade on **15m**, set **HTF to 1H** for a steadier read.  
  Leave blank to keep it the same as your chart.

- **FlipGuard bars (default 3) 🛡️**  
  Prevents flip spam. After a flip, Flow Balance **waits this many candles** before allowing another flip.  
  - Want **fewer** flips? Increase it (e.g., 5–8). 🔕  
  - Want **more** flips? Decrease it (e.g., 1–2 — expect more noise). 🔔

> You can ignore everything else — the script handles the heavy lifting. 💪

---

## Alerts (set‑and‑forget) 🔔

All alerts trigger **after the candle closes** (so they don’t change later). ⏰

**How to set:**
1. Right‑click the chart → **Add alert…**  
2. **Condition:** `Flow Balance (OBV Pro)`  
3. Choose one of:
   - **CrossUp** — buyers took control (🟢 flip)
   - **CrossDown** — sellers took control (🔴 flip)
   - **Z>=+2σ** — stretched up (💗)
   - **Z<=-2σ** — stretched down (🟣)
   - **DivBull** — bullish divergence (📈)
   - **DivBear** — bearish divergence (📉)
   - **DivHidBull** — hidden bullish divergence (📈🫥)
   - **DivHidBear** — hidden bearish divergence (📉🫥)

**Tip:** Set **Only Once Per Bar Close** for clean, non‑spammy alerts. 🧼

---

## Scanning / screeners 🔎

Flow Balance also outputs **hidden 1/0 series** (for screeners) — one for each signal above.

Look for names like:
- `Flow Balance | CrossUp (bool)`  
- `Flow Balance | CrossDown (bool)`  
- `Flow Balance | Z>=+2σ (bool)`  
- `Flow Balance | Z<=-2σ (bool)`  
- `Flow Balance | BullReg (bool)`  
- `Flow Balance | BearReg (bool)`  
- `Flow Balance | BullHid (bool)`  
- `Flow Balance | BearHid (bool)`

> If your current script still shows older names (e.g., starting with `SP:OBV`), it’s the **same signal**, just an earlier label. 🏷️

---

## Simple playbooks (examples) 📘

**Trend pullback long (buy the dip) 📈**  
1) 🟢 Green flip.  
2) Price pulls back to a level (MA, prior high, support).  
3) No fresh 🟣 → enter long.  
4) Take profit into 💗 or on a 🔴 flip.

**Mean‑revert short (fade the pop) 📉**  
1) 💗 Pink (stretched up).  
2) 📉 Divergence **or** 🔴 flip near resistance.  
3) Enter short with a tight stop above the level.  
4) Cover on 🟣 or 🟢 flip.

Always adjust size and stops to your plan. 📏

---

## FAQs ❓

**Does it repaint?**  
No. Dots print on **bar close** and stay put. Divergence dots appear **after** the swing is confirmed (so they’re reliable) and are placed back where it happened. 📌

**Which markets/timeframes?**  
Anything on TradingView — stocks, futures, crypto, FX. From scalps to swings. 🌍

**Why did a divergence dot show up “late”?**  
Because we wait for **confirmation** before printing it. That keeps your chart honest. 🧠

**I see few signals. Is that bad?**  
Not at all. Fewer, cleaner signals usually mean **less noise**. If you want more, use a **lower timeframe** or reduce **FlipGuard** slightly. 🎚️

---

## Troubleshooting 🛠️

- **Lots of flip dots?** Increase **FlipGuard**. 🔕  
- **Choppy reads on low timeframes?** Try setting **HTF** to a larger TF (e.g., 1H or 4H). 🕒  
- **Too many “tired” (💗/🟣) dots?** That market might be hot. Zoom out (higher TF) or wait for a pullback. 🔭

---

## Safety first ⚠️

Flow Balance is a **tool**, not a promise. Always use stops, size responsibly, and combine signals with your plan. 🧯

---

## License & access 🔑

Part of the SignalPilot suite. **Educational use only.**  
For access and updates, visit **[signalpilot.io](https://www.signalpilot.io/)**.

---
title: "SP — Leg Timer (TD9 + Clean Squeeze)"
short_title: "Leg Timer (TD9)"
permalink: /sp-ltf/
module_id: sp-ltf
category: "Timing"
category_emoji: "⏱️"
summary: "TD9 counts plus squeeze logic to spot leg exhaustion."
tags: [td9, squeeze, timing, exhaustion]
---


> **Category:** ⏱️ Timing  
> Focuses on exhaustion, reversals, and the rhythm of market cycles.


# SP — Leg Timer (TD9 + Clean Squeeze) — by Signal Pilot
 
**In one sentence:**  
Leg Timer shows when a move is getting **tired** (TD **9** counts), when price is **coiling** (Clean Squeeze cloud), and when to be **extra careful** (optional yellow/red **X** warnings). It only prints after the bar closes (non‑repainting) and comes with ready‑made alerts.  
Learn more and get access: **https://www.signalpilot.io**  
*Educational use only.*

---

## What you’ll see on the chart

- **TD “9” numbers**  
  A “9” prints near candles when a push looks **tired**.  
  *(You can also show “8”s if you want. Think “start taking profits / tighten risk,” not “instant reversal.”)*

- **Blue “Clean Squeeze” cloud**  
  Price is **coiling** (quiet, tight range). Coils often **release** into bigger moves.

- **X warnings (optional)**  
  - **Yellow X = Caution** → the move looks stretched or slowing.  
  - **Red X = Danger** → the move may be failing or flipping.  
  Only one X per bar; red has priority.

> These are **traffic lights**, not buy/sell commands.

---

## Quick start (60 seconds)

1. **Add the script** in TradingView: *Invite‑only* → **Leg Timer — TD9 + Clean Squeeze**.  
2. **Do nothing** to start — defaults are sensible.  
3. **Wait for bar close** — prints and alerts are final only at close (no flicker).  
4. **Turn on alerts** (recommended): choose an alert like *Squeeze Active* or *Leg Start*, set **Once per bar close**.  
5. Follow the **Simple playbook** below.

---

## Simple playbook (how most people use it)

- **During the blue cloud (squeeze):** Plan. Don’t force entries.  
- **When price breaks out of the cloud:** Look for entries **with** the break direction.  
- **When a “9” prints:** Consider **taking profits / tightening risk**, especially if you also see a yellow or red X.  
- **Yellow X:** Be picky with new entries; consider smaller size.  
- **Red X:** Respect it — many users reduce or exit here.

---

## Cheat sheet

| You see…             | Plain meaning                      | Typical reaction                          |
|----------------------|------------------------------------|-------------------------------------------|
| Blue cloud on        | Market is **coiling**              | Plan the trade; wait for the break        |
| Break **out** of cloud | **Move may be starting**          | Look for entries with the break           |
| TD **9** (or 8)      | Push looks **tired**               | Take profit / tighten risk                |
| **Yellow X**         | **Caution** — stretched/slowing    | Be picky; smaller size                    |
| **Red X**            | **Danger** — failing/flip risk     | Reduce/exit; avoid fresh entries          |

---

## Alerts (in human words)

Add any of these with **Once per bar close**:

- **Squeeze Active (SP:SQZ)** — “We’re coiling.”  
- **Leg Start Up / Down (SP:LEGUP / SP:LEGDN)** — “A new push may be starting.”  
- **TD9 Buy / TD9 Sell (SP:TD9B / SP:TD9S)** — “This push looks tired (9).”  
- **Caution (SP:WRN)** — “Heads up.”  
- **Danger (SP:DNG)** — “Respect this.”

*(Advanced users can also alert on TD8.)*

---

## Settings you might actually touch (optional)

- **Show TD numbers** — On/Off. Leave on.  
- **Squeeze cloud** — On/Off. Leave on; defaults are conservative.  
- **Warnings (X)** — On/Off. If you want fewer X’s, raise:
  - **Caution score ≥** (default **3**)  
  - **Danger score ≥** (default **4**)  
- **Signal timeframe** — Leave blank unless you know you want signals calculated on a higher timeframe than your chart.

> If a setting confuses you, **leave it at default**.

---

## Good habits

- Trade **with** the break out of the cloud, not against it.  
- Treat **TD9** and **X’s** as risk tools (scale out, tighten stops), not as “instant reverse” buttons.  
- Always wait for the **bar to close** before acting on a print or alert.

---

## FAQ

**Does it repaint?**  
No. It only prints and alerts **after** the bar closes.

**Is TD9 a reversal signal?**  
No. It means **fatigue**. Some fatigued moves reverse; some just pause.

**What is a squeeze?**  
A quiet, tight range (“coiled spring”). Markets don’t stay quiet forever.

**Which markets and timeframes?**  
Any liquid market, 1‑minute to weekly.

**Is this financial advice?**  
No. This is an educational study. Manage your own risk.

---

## Troubleshooting

- **Too many X’s** → Raise **Caution score ≥** and **Danger score ≥** in settings.  
- **Nothing shows** → Ensure “Show TD” and “Show Squeeze” are on; wait for bar close.  
- **Alerts ping mid‑bar** → Set alert to **Once per bar close**.

---

## Version & notes

**v3.10.0**  
- TD9 counts (optionally show 8s).  
- Clean Squeeze cloud.  
- Optional Smart Warnings (yellow/red X).  
- Close‑confirmed alerts; non‑repainting prints.

---

## Legal

© SignalPilot. All rights reserved. Invite‑only TradingView study. **Educational use only.**  
More info & updates: **https://www.signalpilot.io**

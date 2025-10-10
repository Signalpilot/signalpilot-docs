---
title: "SP — Participation (PVA Overlay)"
short_title: "Participation (PVA)"
permalink: /sp-pva-overlay/
module_id: sp-pva-overlay
category: "Participation (Volume / Flow)"
category_emoji: "💧"
summary: "Volume-aware candle overlay that reveals conviction behind price."
tags: [volume, participation, overlay, conviction]
---


> **Category:** 💧 Participation (Volume / Flow)  
> Measures market participation and conviction behind price movement.

--8<-- "_includes/meta-badge.html"

# 🚀 SP — Participation & Volume Pulse (SP-PVA Suite) — by Signal Pilot

**Modules:**  
- 🟢 **Participation (PVA Overlay)** — on-chart crowd control signals  
- 🔵 **Volume Pulse (PVA Volume)** — volume-pane heartbeat companion  

Built to show **when real money is moving**.  
Clean visuals • Smart filters • **Non-repainting** (signals only lock at candle close ✅)

---

## 🧭 What These Do

### 🟢 Participation (PVA Overlay)
Your **crowd-meter on the price chart** 🎯  
It prints one clear signal at a time:
- 💚 **BULL** → buyers took control  
- ❤️ **BEAR** → sellers took control  
And two special spikes:
- ⚡ **CLX (Climax):** a heavy surge — often the last big push  
- 🧱 **ABS (Absorption):** a move soaked up by strong opposing volume  

Each print means the crowd actually did something — not just random noise.

---

### 🔵 Volume Pulse (PVA Volume)
Lives in a **separate pane under your chart** 📊  
It shows:
- 📈 **Colored volume bars** — intensity of participation (brighter = stronger)  
- 🔷 **CVD line** — who’s winning, buyers or sellers  
- 🧩 **Divergence tags** — “Bull Div” / “Bear Div” = early warning of shifts  
- ⚡ **CLX / ABS spikes** — same logic as overlay, but tied to key daily/weekly levels  

It’s the *heartbeat* that powers the Participation prints ❤️‍🔥

---

## ⚡ Quick Start (60-Second Setup)

1️⃣ Add **Participation (PVA Overlay)** to your main chart.  
2️⃣ Add **Volume Pulse (PVA Volume)** to a new lower pane.  
3️⃣ ✅ Leave everything on default — already tuned.  
4️⃣ Watch → **BULL / BEAR / CLX / ABS** → act according to your playbook.

> 🧠 **No repainting!** Every signal finalizes after the candle closes.

---

## 🔍 How to Read the Signals

| 🏷️ Signal | 💡 Meaning | 💬 Tip |
|:--|:--|:--|
| 💚 **BULL** | Buyers took control | Stay long until a BEAR or spike appears |
| ❤️ **BEAR** | Sellers took control | Stay short until a BULL or spike appears |
| ⚡ **CLX** | “Climax” — extreme surge | Often end of a push or start of burst |
| 🧱 **ABS** | “Absorption” — pressure soaked | Watch for slowdowns or reversals |
| 🔶 **Bull/Bear Div** | Volume & price disagree | Early signal for momentum shift |

> ✨ One event per bar — if there’s a CLX/ABS spike, you won’t also see a BULL/BEAR label. Keeps charts clean.

---

## 🧠 Simple Game Plan

1️⃣ **See BULL → Bias Long**  
2️⃣ **See BEAR → Bias Short**  
3️⃣ **See CLX or ABS → Pause** — the crowd just shouted; let the next bar confirm  
4️⃣ **See Divergence → Prepare** — often a turning point

Pair this with your own **structure or support/resistance tools** 🧱

---

## ⚙️ Best Starter Settings

- ⚙️ **Use HTF Confirm:** OFF → ON for stricter signals  
- ⚙️ **Enable EVR (CLX/ABS):** ON (default)  
- ⚙️ **Limit to Session:** OFF → ON for stocks (🕒 09:30-16:00)  

**Timeframe tips:**  
🕐 *15m, 30m, 1h* → balanced & clean  
⏱ *1–5m* → noisy, use HTF confirm  
📆 *4h–1D* → quieter but powerful

---

## 🔔 Alerts (Close-Confirmed)

| 📢 Alert | When it Fires |
|:--|:--|
| 💚 **SP:Participation BULL** | Buyers dominate participation |
| ❤️ **SP:Participation BEAR** | Sellers dominate participation |
| ⚡ **SP:Participation CLX** | Climax spike |
| 🧱 **SP:Participation ABS** | Absorption spike |

They trigger **only after** the bar closes — 🔒 non-repainting.

---

## 🧾 Screener Flags (Hidden Booleans)

Use these for your **watchlists or screeners** 🔍

**Participation (Overlay):**  
`BULL`, `BEAR`, `CLX`, `ABS`, `REGIME_BULL`, `REGIME_BEAR`, `SPIKE`, `HTF_OK`

**Volume Pulse (Volume):**  
`SPIKE_HTF`, `EVR_CLX`, `EVR_ABS`, `DIV_BULL_REG/HID`, `DIV_BEAR_REG/HID`

**Examples:**  
- 🆕 New flips → `BULL == 1 OR BEAR == 1`  
- ⚡ Spikes only → `CLX == 1 OR ABS == 1`  
- 🧩 Divergences → `DIV_BULL_REG == 1 OR DIV_BEAR_REG == 1`

---

## 🧮 Versions

- **Participation (Overlay)** — `v3.0.6-O`  
  - FlipGuard + Regime logic (EMA34/55 + Pilot Line + VWAP)  
  - Optional HTF confirm + breakout checks  
  - CLX/ABS spikes + clean alerts  
  - One print per move 🟢🔴  

- **Volume Pulse (Volume)** — `v3.0.5-V`  
  - Normalized volume (Z-Vol + RVOL)  
  - CVD line + hidden/regular divergences  
  - Structure-aware CLX/ABS spikes  
  - Smart markers + status table  

---

## 🧰 Troubleshooting

| ❗ Problem | ✅ Quick Fix |
|:--|:--|
| Too many prints | Turn **HTF confirm ON** or use higher timeframe |
| Too few prints | Turn **HTF confirm OFF** or drop timeframe |
| Premarket noise | Turn **Limit to Session ON (09:30–16:00)** |
| Chasing spikes | Wait 🔄 one extra bar after CLX/ABS |

---

## 📘 FAQ

**❓ Does it repaint?**  
No — all signals lock at candle close.

**❓ Why no BULL/BEAR on spike bar?**  
We show one thing per bar; CLX/ABS takes priority.

**❓ Do I need to tweak settings?**  
No. Defaults are battle-tested. Adjust HTF confirm later if needed.

**❓ Why near yesterday/week highs/lows?**  
That’s where big traders care. We highlight those reactions intentionally.

**❓ Can I use it alone?**  
You can, but it’s strongest as a **filter** inside your strategy.

---

## ⚖️ Disclaimer

📚 Educational use only.  
💰 Not financial advice.  
Always test first and use risk management.

---

## 🌐 SignalPilot

**Clean, non-repainting, anchored tools for real traders.**  
🔗 Learn more → [https://www.signalpilot.io](https://www.signalpilot.io)

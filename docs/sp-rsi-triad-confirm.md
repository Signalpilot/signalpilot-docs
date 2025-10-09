---
title: "SP — RSI Triad Confirm"
short_title: "RSI Triad Confirm"
permalink: /sp-rsi-triad-confirm/
module_id: sp-rsi-triad-confirm
category: "Timing"
category_emoji: "⏱️"
summary: "Fast/base/slow RSI triad for clean confirmation and exhaustion."
tags: [rsi, confirmation, timing, exhaustion]
---

> **Category:** ⏱️ Timing  
> Focuses on exhaustion, reversals, and the rhythm of market cycles.


# SP — RSI Triad Confirm (SPRSI‑U) — by Signal Pilot
**Beginner‑friendly guide (GitHub README)**  
*TradingView · Pine v6 · Non‑repainting on candle close*

---

## What it does (one sentence)
**Helps you catch momentum turns with fewer fakeouts** by watching three RSI lines, spotting divergence, and only showing **BUY/SELL** when extra “green lights” agree.

---

## What you’ll see on the chart
- **Three RSI lines** (Fast, Base, Slow) in one pane.
- **Green/Red divergence lines** with small labels like “Bull 10” or “Bear 12” (that number is the strength out of 20).
- A **BUY ▲** marker (bullish) and a **SELL ▼** marker (bearish) when everything lines up.
- A grey band around RSI **30–70** to show normal vs stretched zones.

> **No repainting:** Signals lock in at **candle close** and won’t jump or vanish later.  
> (Higher‑timeframe filters also wait for their candle to close.)

---

## How it decides (simple 3‑step logic)
1) **Divergence:** Price pushes one way, RSI disagrees → early heads‑up.  
2) **Triad check:** The **Base** RSI steps out of the “rails” made by the Fast/Slow lines in the same direction → follow‑through.  
3) **Confluence:** Optional extra green lights: **OBV** trend, **Stoch RSI** timing, **ATR** (enough movement), and **HTF/Weekly** trend bias.

If steps 1–3 happen within a short window, you’ll see **BUY** (bullish) or **SELL** (bearish).

---

## Quick start (2 minutes)
1) Add the script to your TradingView chart (after your SignalPilot invite is active).  
2) **Leave defaults as‑is** for your first session.  
3) Choose a timeframe:
   - **Scalp:** 1–5m
   - **Intraday:** 15–60m
   - **Swing:** 4H–1D
4) Wait for a fresh **divergence** line; if a **BUY/SELL** prints soon after, study that example in replay.
5) Practice first; add alerts when you’re comfortable.

---

## Beginner presets (copy & use)

### Intraday (15–60m)
- **FlipGuard:** ON (5 bars)
- **Min Divergence Strength:** **8**
- **Min Regime Score:** **40**
- **Min Fast–Slow Spread:** **3.0**
- Optional: **OBV = ON** for cleaner signals

### Swing (4H–1D)
- **FlipGuard:** ON (**5–8** bars)
- **Min Divergence Strength:** **9–11**
- **Min Regime Score:** **45–55**
- Optional: **HTF Filter = ON** and **Weekly Assist = ON** to align with bigger trend

### Scalp (1–5m)
- Keep defaults; **do not lower** filters at first.
- Too many signals? **Raise**:
  - **Min Divergence Strength:** **10–12**
  - **Min Regime Score:** **50–60**
  - Keep **FlipGuard ON**

---

## What the strength number means (0–20)
- **0–5:** weak (often noise)  
- **6–10:** okay  
- **11–15:** good  
- **16–20:** great  
If you want **fewer but better** setups, raise **Min Divergence Strength**.

---

## When to skip a signal
- No recent divergence? **Skip.**
- Very low volatility (ATR tiny)? **Skip** or turn on the **ATR gate**.
- Fighting a strong higher‑timeframe trend? Consider skipping unless **HTF/Weekly** agree.

---

## Alerts (simple and safe)
Create alert in TradingView → **Condition:** this indicator → choose one:
- **SP:Confluence Long** → sends on confirmed **BUY**
- **SP:Confluence Short** → sends on confirmed **SELL**
- **SP:Div Bull** / **SP:Div Bear** → divergence heads‑up only

> Alerts only fire **after candle close**, matching what you see on the chart.

---

## Simple recipes

**Clean‑up mode (fewer trades)**
- Turn **OBV = ON** and **Stoch RSI = ON**
- Set **Min Regime Score = 50+**
- Keep **FlipGuard = ON**

**Trend‑friendly**
- **HTF Filter = ON** (use 1H if you’re on 5–15m, 4H if you’re on 1H)
- **Weekly Assist = ON** for swing charts

**Volatility guard**
- **ATR gate = ON**
- **Min ATR%** around **0.25–0.35** in slow markets

---

## FAQ (really short)

**Does it repaint?**  
No. Signals finalize at candle close. HTF/Weekly checks also wait for their candle to close.

**Which markets/timeframes?**  
Any symbol on TradingView (crypto, stocks, FX, indices), from scalps to swings.

**Too many signals?**  
Raise **Min Divergence Strength** and **Min Regime Score**; keep **FlipGuard ON**. Consider **OBV** and **ATR** gates.

**Too few signals?**  
Lower **Min Regime Score** slightly (e.g., 40 → 35) or raise the **divergence window** (20 → 25–30). Keep **FlipGuard** (reduce, don’t disable).

**What do 70/30 mean?**  
They’re the RSI “overbought/oversold” guide rails—price *can* still run beyond them.

---

## Glossary (one‑liners)
- **RSI:** Momentum gauge; high = up push, low = down push.  
- **Divergence:** Price vs RSI disagreement (often hints at a turn).  
- **OBV:** Volume trend helper.  
- **Stoch RSI:** Timing helper to avoid chasing late moves.  
- **ATR:** Volatility measure (how much price moves).  
- **FlipGuard:** Cooldown to avoid flipping sides too fast.  
- **HTF / Weekly:** Higher‑timeframe/weekly bias checks.  
- **Regime Score:** Backdrop quality (0–100). Higher = better.

---

## Alerts & names (for reference)
- Indicator name: **SP: RSI Triad Confirm (SPRSI‑U) — Premium**  
- Short title in TradingView: **SP:SPRSI‑U+**  
- Alert names (close‑confirmed):
  - `SP:Confluence Long` — message: `SP:SPRSI-U Confluence Long (confirmed)`
  - `SP:Confluence Short` — message: `SP:SPRSI-U Confluence Short (confirmed)`
  - `SP:Div Bull` — message: `SP:SPRSI-U Bullish Divergence (confirmed)`
  - `SP:Div Bear` — message: `SP:SPRSI-U Bearish Divergence (confirmed)`

---

## Notes for new users
- Start on **replay or paper trading**.
- Always use a **stop loss** and size risk.
- No indicator removes risk; this is a **decision aid**, not a guarantee.

---

## Support
- **Website:** https://www.signalpilot.io/  
- **Email:** support@signalpilot.io

© SignalPilot Labs, Inc. All rights reserved. Educational use only — not financial advice.

# SP:Regime Box (Regime & Volatility Filter)
**Plain‑English guide · Non‑repainting · Works on any market/timeframe**

Regime Box makes your chart easier to read by showing two simple things:

1) **Direction** — green = uptrend, red = downtrend  
2) **Energy** — gray dot = market got quiet, teal triangle = market is waking up

Everything appears **after the candle closes**, so signals don’t change later (no repaint).

---

## What you’ll see (legend)

- 🟩 **Green Box** = Uptrend  
- 🟥 **Red Box** = Downtrend  
- ● **SQZ (gray dot)** = Quiet/squeeze started  
- ▲ **EXP (teal triangle)** = Expansion started (move beginning)  
- ■ **LOK (green square)** = Long ideas are OK (uptrend + not quiet)  
- ♦ **SOK (red diamond)** = Short ideas are OK (downtrend + not quiet)

> Tip: A **gray dot** often comes **before** the **teal triangle**. Think “spring coils → spring releases”.

---

## Quick start (1 minute)

1. **Add Regime Box to your chart** (it’s an overlay).
2. **Keep defaults** for your first run.
3. Use **box color** for bias: 🟩 think long; 🟥 think short.
4. Watch for **SQZ → EXP** on your timeframe to time the move.
5. Prefer trades when **LOK/SOK** agrees with the box color.
6. (Optional) **Create alerts** for **EXP** and **LOK/SOK** on **bar close**.

---

## Two simple playbooks

### 1) Quiet → Move
- Wait for **● SQZ**, then **▲ EXP**.  
- Go with the **box color** (🟩 look up / 🟥 look down).

### 2) Ride the Trend
- Box is 🟩 and you see **■ LOK** → look for longs.  
- Box is 🟥 and you see **♦ SOK** → look for shorts.

---

## Settings you’ll actually touch (in plain English)

- **Event cool‑down (default 10 bars):**  
  Stops the same marker from repeating too fast.

- **Expansion gate (0–1, default 0.60):**  
  Higher = pickier about what counts as “waking up”; lower = more EXP signals.

- **Show LOK/SOK (off by default):**  
  Turn on if you want the green/red “OK to look” tags on the bottom rail.

> Everything else can stay on defaults until you’re comfortable.

---

## Alerts (recommended)

TradingView → **Create Alert** → Condition: **Regime Box** → Event → **Once per bar close**

- **SP: SQZ ON** — Gray dot (squeeze started)  
- **SP: EXP ON** — Teal triangle (expansion started)  
- **SP: LONG OK** — Green square  
- **SP: SHORT OK** — Red diamond

---

## When things look weird

- **“I’m not getting many signals.”**  
  That’s normal—Regime Box avoids noise. If you want more:  
  *lower* the **Expansion gate** a bit or *lower* **Event cool‑down**.

- **“Too many EXP markers.”**  
  *Raise* the **Expansion gate** or *increase* **Event cool‑down**.

- **“No boxes?”**  
  You might be in a range. Boxes show only when trend conditions are strong enough.

---

## FAQ

**Does this repaint?**  
No. Everything confirms at candle close and stays put.

**Which markets/timeframes does it work on?**  
Anything on TradingView: crypto, stocks, FX, indices; 1‑minute to weekly.

**How do I fit this into my workflow?**  
Use **box color** for bias, **SQZ → EXP** to time momentum, and **LOK/SOK** as a simple green/red “OK” tag.

---

## Safety & Notes

- For **education only**. Not financial advice. Manage your own risk.  
- Name change: previously called **“Regime & Volatility Filter”** — it’s the same tool, now named **Regime Box (Regime & Volatility Filter)**.

---

## About

Part of the SignalPilot approach to making charts calmer and clearer.  
Learn more: **signalpilot.io**

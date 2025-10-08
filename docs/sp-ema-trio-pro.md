
- If an EMA200 event fires on the same bar as a PB, **PB is suppressed**.
- **PB1** is marked independently (unique color/offset) when it occurs within its post‑cross window.

---

## Quick start

1. **TradingView → Pine Editor** → *New indicator*.
2. Paste the script from [`/pine/ema_trio_pro.pine`](./pine/ema_trio_pro.pine) (this repo) and **Add to chart**.
3. Optional: toggle ATR guardrails or adjust constants (see below).
4. Add alerts using the pre‑named conditions in **Alerts**.

> The broader SignalPilot suite is non‑repainting, alert‑ready, and works on any market/timeframe; activation for paid users is quick after purchase. :contentReference[oaicite:6]{index=6}

---

## Inputs & Tuning Knobs

This build ships as **presets (no user inputs)** for deterministic behavior. Edit constants at the top of the file if you need changes:

- `LEN50=50`, `LEN100=100`, `LEN200=200`  
- `ATR_LEN=14`, `ATR_MULT=1.0`, `USE_ATR_BANDS=false`
- `COOLDOWN=10`  — min bars between identical signals
- `STRICT_PB=true` — PB requires price vs EMA100 agreement in trend
- `PB1_WINDOW=60` — bars after GC/DC to accept the first PB only
- Visual opacity: `C50_TR=65`, `C100_TR=72`, `C200_TR=78`, `ATR_TR=85`
- Nano‑dots: `PB_DOT_OFFSET_ATR=0.02`, `PB1_EXTRA_OFFSET_ATR=0.02`, `PB_DOT_WIDTH=1`

> **Tip:** Keep strict defaults for cleaner signals; loosen only if you understand the trade‑offs.

---

## Alerts

All alerts are **close‑confirmed** (no repaint). Use these titles exactly:

- `SP:EMA | PB_LONG` – EMA50 pullback long in bull stack  
- `SP:EMA | PB_SHORT` – EMA50 pullback short in bear stack  
- `SP:EMA | 200_RECLAIM` – price reclaimed EMA200  
- `SP:EMA | 200_REJECT` – price rejected from EMA200  
- `SP:EMA | GOLDEN_CROSS` – EMA50 crossed **above** EMA200  
- `SP:EMA | DEATH_CROSS` – EMA50 crossed **below** EMA200  
- `SP:EMA | PB1_AFTER_GC` – first PB after Golden Cross  
- `SP:EMA | PB1_AFTER_DC` – first PB after Death Cross

**Webhook JSON (example)**

```json
{
  "ticker": "{{ticker}}",
  "time": "{{time}}",
  "interval": "{{interval}}",
  "alert": "{{alert_name}}",
  "price": "{{close}}"
}

# Signal Pilot Pro — MACD+ (Premium) v1.6.2

**Classic MACD—minus the chop.**  
SPP‑MACD+ is a momentum‑regime module that adds HTF confirmation, ATR‑gated slope, and a near‑zero deadband to the classic MACD so you can trade trend, not noise.

- **Non‑repainting** (finalizes on bar close; HTF ops use `lookahead_off`)
- **Alert‑ready** (Raw/Qualified crosses + Flip Prime/Pullback/Retest)
- **Any market · timeframe** (designed for TradingView)

> Suite & onboarding: https://www.signalpilot.io  
> Educational only — not financial advice. See Terms in this repo.

---

## Table of contents
- [Quick start](#quick-start)
- [What’s inside](#whats-inside)
- [Signals & alerts](#signals--alerts)
- [Webhook JSON](#webhook-json)
- [Inputs (by group)](#inputs-by-group)
- [Non‑repaint notes](#non-repaint-notes)
- [Screener outputs](#screener-outputs)
- [Performance & limits](#performance--limits)
- [Changelog](#changelog)
- [License / Terms](#license--terms)
- [Support](#support)

---

## Quick start
1. Add **Signal Pilot Pro — MACD+** to your chart (separate pane).
2. Pick a **Preset**:
   - **Classic Soft (CM)** — closer to vanilla MACD with softened visuals.
   - **Pro Filtered (Trend)** — full confluence filters on.
3. (Optional) Turn on **Qualified** dots and Flip markers.
4. Add alerts (bar close) for your chosen events (see below).

---

## What’s inside
- **Raw vs Qualified crosses** — show all crosses or only those passing your filters.
- **Regime guard** — baseline MA + slope must agree with the trade.
- **HTF confirm** — higher‑timeframe MACD histogram must agree (auto‑TF available).
- **Impulse gate** — minimum |ΔMACD| normalized by ATR.
- **Noise deadband** — StDev‑based or fixed near zero to mute chop.
- **ADX filter** — avoid low‑trend ranges.
- **Structure sync (optional)** — HH/HL for longs, LH/LL for shorts.
- **Flip suite** — Prime (confirmation), Pullback (re‑accel after retrace), Retest (baseline touch) with **decay** so late signals require more slope.
- **Profiles** — Scalp / Intraday / Balanced / Swing tune slope/deadband/cooldown.
- **Confluence HUD (opt‑in)** — active filters + Long/Short scores.
- **Divergence suite (opt‑in)** — regular + hidden, prints after pivot completes.
- **Webhook JSON** — minimal payloads for flip events.

---

## Signals & alerts
All alerts fire **once per bar close**.

**Crosses**
- `SPP MACD - Bullish Cross (raw)` — MACD ↑ crosses Signal.
- `SPP MACD - Bearish Cross (raw)` — MACD ↓ crosses Signal.
- `SPP MACD - QUALIFIED Bullish` — Cross + filters pass.
- `SPP MACD - QUALIFIED Bearish` — Cross + filters pass.

**Flip Suite**
- `SPP MACD - Flip Prime LONG` / `SHORT` — Regime flips (red→green / green→red) and confirms after N bars.
- `SPP MACD - Flip Pullback LONG` / `SHORT` — Post‑flip retrace then re‑acceleration.
- `SPP MACD - Flip Retest LONG` / `SHORT` — Baseline retest within window.

> Tip: Use Qualified cross + Flip Prime as the backbone; Pullback/Retest are add‑ons.

---

## Webhook JSON
Enable **Extras → Enable Webhook JSON via alert()** and create a TradingView alert with “Any alert() function call”.

**Bull flip example**
```json
{"indicator":"SPP-MACD+","event":"bullFlip","type":"prime","symbol":"BINANCE:BTCUSDT","tf":"15"}


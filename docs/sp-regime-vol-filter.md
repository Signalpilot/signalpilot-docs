# SP: Regime & Volatility Filter (v6)
**Anchored markers + non‑shrinking boxes · Pine v6 · TradingView overlay**

A production‑grade, non‑repainting gate that blends trend regime (ADX/DI + EMA) with volatility state (BB‑in‑KC squeeze and normalized width expansion). It paints anchored trend boxes and emits close‑confirmed pulses for Squeeze, Expansion, and Long/Short‑OK.

> Built for any market and timeframe. All signals confirm on candle close; alert‑ready out of the box. Educational only.  
> — SignalPilot Trading Suite. See [signalpilot.io](https://www.signalpilot.io) for the broader workflow. [Non‑repainting · Any market/timeframe] :contentReference[oaicite:4]{index=4}

---

## Contents
- [Features](#features)
- [How it works](#how-it-works)
- [Inputs](#inputs)
- [Signals & Markers](#signals--markers)
- [Alerts](#alerts)
- [Quick start](#quick-start)
- [Best practices](#best-practices)
- [Non‑repainting notes](#non-repainting-notes)
- [Performance considerations](#performance-considerations)
- [FAQ](#faq)
- [License](#license)

---

## Features
- **Trend regime boxes (green/red)** driven by `ADX ≥ threshold`, `DI+ vs DI−`, and `price vs EMA`. Boxes extend to the current bar and only update on close. Closed boxes are not modified later (“non‑shrinking” segments).
- **Volatility states**
  - **Squeeze (SQZ):** Bollinger Bands fully inside Keltner Channel (coiled state).
  - **Expansion (EXP):** First bar out of squeeze _or_ BB‑width rising with normalized width above a gate.
- **Tradeability flags**
  - **LOK (Long OK):** Up‑trend & not in squeeze.
  - **SOK (Short OK):** Down‑trend & not in squeeze.
- **Close‑confirmed pulses** with an **event cool‑down** to suppress spam.
- **Alert‑ready**: four alertconditions configured (SQZ ON, EXP ON, LONG OK, SHORT OK).
- **Overlay, anchored visuals**: markers on the bottom rail; boxes anchored to `bar_index`.

---

## How it works

### Trend regime
- **ADX/DI (Wilder)** with user‑set `adxLen` and `adxThresh`.
- **EMA filter:** `close > EMA` for up regime; `close < EMA` for down.
- **Final state:** `+1` (Up), `−1` (Down), `0` (Range). Trend boxes use green/red only when strict Up/Down is present.

### Volatility model
- **Squeeze (SQZ):** `BB upper ≤ KC upper` **and** `BB lower ≥ KC lower`.
- **Expansion (EXP):** `not SQZ` and (`just exited SQZ` **or** `ΔBB width > 0` **and** `BB width normalized > expansionGate`).
- **Normalization:** BB width rescaled to `[0,1]` over a lookback window (default `252`) to adapt the expansion gate across symbols/TFs.

### Pulses (non‑repainting)
A pulse prints **only once** on the bar where the condition **starts** (confirmed on close):
- `sqzPulse` when SQZ turns true.
- `expPulse` when EXP turns true.
- `lonPulse` when Long‑OK turns true.
- `shoPulse` when Short‑OK turns true.

A per‑event `cool‑down` (bars) throttles repeats.

---

## Inputs

| Group      | Input                                  | Default | Notes |
|------------|----------------------------------------|---------|-------|
| **Trend**  | `ADX Length (adxLen)`                  | 14      | Wilder smoothing for TR, +DI, −DI. |
|            | `ADX Trend Threshold (adxThresh)`      | 25.0    | Minimum ADX to qualify a trend. |
|            | `Trend EMA Length (emaLen)`            | 50      | Price vs EMA gate. |
| **Vol**    | `BB Length (bbLen)`                    | 20      | Basis: `SMA`. Deviation: `StdDev`. |
|            | `BB StdDev (bbStd)`                    | 2.0     | Bollinger band width. |
|            | `KC Length (kcLen)`                    | 20      | Basis: `EMA(hlc3)`. Envelope: `ATR * kcMult`. |
|            | `KC Multiplier (kcMult)`               | 1.5     | Keltner envelope size. |
|            | `BB Width Normalization Window`        | 252     | Range for width min/max. |
|            | `Expansion Gate (0–1)`                 | 0.60    | Threshold on normalized BB width when widening. |
| **Visuals**| `Show Trend Regime Boxes`              | true    | Green/red boxes for strict regimes. |
|            | `Box transparency (70–100=subtle)`     | 90      | Higher = more subtle. |
|            | `Box Height Lookback (bars)`           | 300     | Envelope for box top/bottom. |
|            | `Show SQUEEZE markers`                 | true    | Bottom‑rail gray dots. |
|            | `Show EXPANSION markers`               | true    | Bottom‑rail teal triangles. |
|            | `Show LONG/SHORT OK markers`           | false   | Bottom‑rail green squares / red diamonds. |
|            | `Event cool‑down (bars)`               | 10      | Debounce pulse repeats. |

---

## Signals & Markers

| Code | Meaning                         | Shape       | Color  | When it prints |
|------|---------------------------------|-------------|--------|----------------|
| SQZ  | Squeeze started                 | circle      | gray   | First bar where BB sits inside KC. |
| EXP  | Volatility expansion started    | triangleup  | teal   | First bar out of squeeze **or** width rising above gate. |
| LOK  | Long OK (trend‑qualified long)  | square      | green  | Up‑trend with no squeeze. |
| SOK  | Short OK (trend‑qualified short)| diamond     | red    | Down‑trend with no squeeze. |

> Multiple markers can print on the same bar (cool‑down permitting). Markers are placed on the bottom rail and are **close‑confirmed**.

---

## Alerts

The script exposes four alertconditions (fire **on bar close**):

- **SP: SQZ ON** — “SQUEEZE started (confirmed on close)”
- **SP: EXP ON** — “Volatility expansion (confirmed on close)”
- **SP: LONG OK** — “Trend Up & not in squeeze (confirmed on close)”
- **SP: SHORT OK** — “Trend Down & not in squeeze (confirmed on close)”

Create alerts in TradingView → *Create Alert* → *Condition*: this indicator → choose the event.

---

## Quick start
1. Add the indicator to a chart (overlay).
2. Keep defaults: `ADX 14 / 25`, `EMA 50`, `BB 20/2`, `KC 20 × 1.5`, `Gate 0.60`, `Cool‑down 10`.
3. Watch **green/red regime boxes** for directional context.
4. Use **SQZ** → **EXP** sequence to time transitions from coil to move.
5. Take trades only when **LOK/SOK** aligns with your broader plan (bias/participation/levels).
6. Add alerts for **EXP** and **LOK/SOK** on your trading timeframes.

---

## Best practices
- Treat **SQZ** as a *setup*, **EXP** as *go/no‑go*. Avoid fighting the active regime.
- Tighten entries after large gaps; consider raising `expansionGate` on choppy symbols.
- For higher‑noise intraday, increase `adxThresh` and `eventCooldown`.

---

## Non‑repainting notes
- All pulses and box updates are gated by `barstate.isconfirmed`; nothing finalizes intrabar.
- No `request.security()` or lookahead is used; conditions compute deterministically bar‑by‑bar.
- “Non‑shrinking boxes”: once a regime segment ends, its box is closed and no longer updated.

*(Your site positions the suite as non‑repainting and alert‑ready across markets/timeframes; this module adheres to that contract.)* :contentReference[oaicite:5]{index=5}

---

## Performance considerations
- Moderate compute (SMA/STDDEV/EMA/ATR/RMA). Defaults are safe for 1m–1W.
- `max_boxes_count=200` guards memory; old segments will recycle on extremely long sessions.
- Avoid enabling all markers with a very low `eventCooldown` on 1m charts.

---

## FAQ

**Does this repaint?**  
No. Signals finalize on candle close; alerts fire only on confirmed bars. :contentReference[oaicite:6]{index=6}

**Which markets/timeframes?**  
Anything on TradingView: crypto, FX, indices, equities, commodities—scalps to swings. :contentReference[oaicite:7]{index=7}

**How do I use it with the rest of SignalPilot?**  
Follow the suite flow: set bias → verify participation → map structure → time entry → automate alerts. This module covers regime/vol; pair with your bias and participation tools. :contentReference[oaicite:8]{index=8}

---

## License
See the repository’s `LICENSE`. SignalPilot tools are provided for **educational purposes only**—not financial advice. :contentReference[oaicite:9]{index=9}

---

## Indicator header (for reference)

```pinescript
//@version=6
indicator("SP: Regime & Volatility Filter (v6, Anchored Markers + Non‑shrinking Boxes)", overlay=true, max_boxes_count=200)

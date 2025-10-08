# SP: OBV Pro (SP‑OBV)

**Money flow, de‑noised.**  
Spike‑clipped OBV with a Bollinger‑style channel, basis crosses, ±2σ extremes, and confirmed regular/hidden divergences. Optional HTF compute. Non‑repainting, alert‑ready, screener‑friendly.

> Part of the [SignalPilot Trading Suite](https://www.signalpilot.io/) — clean, non‑repainting signals for any market/timeframe. Educational only. :contentReference[oaicite:3]{index=3}

---

## Features

- **Spike‑clipped OBV:** Caps volume to `3×` a rolling average (`len = 50`) before accumulation to reduce outlier whipsaws.
- **Channel context:** SMA basis (`L = 20`) with ±`2σ` envelope for exhaustion reads.
- **Cross signals:** Basis `crossover/crossunder` gated by **FlipGuard** (cooldown in bars).
- **Extremes:** Residual Z‑score `≥ +2σ` or `≤ −2σ`.
- **Divergences:** Regular & hidden, confirmed with anchored `3/3` pivots and a sync tolerance of `5` bars.
- **HTF assist:** Compute OBV on a higher timeframe while plotting on the chart; non‑repaint via `request.security(..., lookahead_off)`.
- **Alerts & screeners:** Close‑confirmed alerts and hidden boolean plots for scanners.
- **Deterministic:** Values freeze at bar close; no lookahead, no wobble.

---

## How it works

1. **Spike‑clipped OBV**
   - Volume is clipped: `vEff = min(volume, 3 × RMA(volume, 50))`.
   - OBV is accumulated with direction of `close` vs `close[1]`.

2. **Basis + Bands**
   - `basis = SMA(OBV, 20)`, `σ = stdev(OBV - basis, 20)`, `upper/lower = basis ± 2σ`.
   - Crosses of `OBV` vs `basis` mark control flips; band pushes flag extremes.

3. **FlipGuard (crosses only)**
   - Cooldown (bars) before a new cross can register.

4. **Divergences**
   - Regular/Hidden on highs/lows using `3/3` pivots, confirmed and anchored at `bar_index - 3`.

5. **HTF compute (optional)**
   - OBV calculated on `calcTf`; series is frozen and sampled down with `lookahead_off` for non‑repaint integrity.

---

## Inputs (Tuning Knobs)

- **HTF timeframe (blank = chart)**: `calcTf`  
  Compute OBV on a higher TF (e.g., `60`, `240`, `D`) while trading on lower TFs.

- **FlipGuard bars**: `flipBars` (default `3`)  
  Minimum bars between successive cross signals.

### Advanced (opinionated constants)
Hard‑coded for quality/consistency; edit in source if you must.

| Param        | Value | Purpose                          |
|--------------|------:|----------------------------------|
| `L`          | 20    | Basis & residual window          |
| `K`          | 2.0   | Band width (±2σ)                 |
| `PIV_LEFT`   | 3     | Divergence pivot left            |
| `PIV_RIGHT`  | 3     | Divergence pivot right           |
| `SYNC_TOL`   | 5     | Max pivot index desync           |
| `CLIP_LEN`   | 50    | Volume clip lookback (RMA)       |
| `CLIP_MULT`  | 3.0   | Volume cap multiple               |

---

## Signals & Events

**Crosses (FlipGuard‑gated)**
- `CrossUp` — OBV crosses above basis
- `CrossDown` — OBV crosses below basis

**Extremes**
- `Z>=+2σ` — Residual Z‑score ≥ +2
- `Z<=-2σ` — Residual Z‑score ≤ –2

**Divergences** (anchored, confirmed)
- `BullReg` — Price LL, OBV HL
- `BearReg` — Price HH, OBV LH
- `BullHid` — Price HL, OBV LL
- `BearHid` — Price LH, OBV HH

> Note: Divergence dots are offset by `-PIV_RIGHT` so they print where they occurred (no repaint after confirmation).

---

## Alerts (bar‑close only)

All alerts fire only on `barstate.isconfirmed`.

- **SP:OBV | CrossUp** — OBV crossed ABOVE basis  
- **SP:OBV | CrossDown** — OBV crossed BELOW basis  
- **SP:OBV | Z>=+2σ** — Residual Z‑score ≥ +2σ  
- **SP:OBV | Z<=-2σ** — Residual Z‑score ≤ −2σ  
- **SP:OBV | DivBull** — Regular Bullish Divergence  
- **SP:OBV | DivBear** — Regular Bearish Divergence  
- **SP:OBV | DivHidBull** — Hidden Bullish Divergence  
- **SP:OBV | DivHidBear** — Hidden Bearish Divergence

**Set up:** Right‑click chart → *Add alert…* → *Condition:* `SP: OBV Pro` → choose alert.

---

## Screener outputs (hidden booleans)

Each prints `1` on the bar it confirms (else `na`). Use in screeners or with the SP‑Screener module.

- `SP:OBV | CrossUp (bool)`
- `SP:OBV | CrossDown (bool)`
- `SP:OBV | Z>=+2σ (bool)`
- `SP:OBV | Z<=-2σ (bool)`
- `SP:OBV | BullReg (bool)`
- `SP:OBV | BearReg (bool)`
- `SP:OBV | BullHid (bool)`
- `SP:OBV | BearHid (bool)`

---

## Quick start

1. Add **SP: OBV Pro** to your chart (separate pane).
2. (Optional) Set **HTF timeframe** to align with your bias TF.
3. Keep **FlipGuard bars** at `3` for intraday; increase if you want stricter crosses.
4. Use crosses for **control shifts**, ±2σ for **exhaustion**, and divergences for **inflection**—ideally within the SignalPilot bias→participation→structure→timing plan. :contentReference[oaicite:4]{index=4}

---

## Non‑repaint & determinism

- All calculations **freeze at bar close** (deterministic `freeze()` pattern).
- All `request.security` calls use **`lookahead_off`**.
- Divergences are **confirmed** pivots (require future bars), then **anchored** back to the pivot bar (no repaint after print).

---

## Performance notes

- One HTF `security()` call; minimal rolling stats.
- Divergence checks use light pivot buffers; no labels; modest plot count.
- Suitable for multi‑symbol screeners.

---

## Recommended pairing

- **Bias:** EC Pro or MACD+  
- **Participation:** PVA + OBV  
- **Structure:** SDZ & Levels  
- **Timing:** RSI Triad / SRSI+  
This mirrors the suite’s workflow and reduces false positives. :contentReference[oaicite:5]{index=5}

---

## FAQ

**Does it repaint?**  
No. Signals finalize on bar close; divergences print only after pivot confirmation (then anchor back).

**Which markets/timeframes?**  
Anything on TradingView; scalps to swings. :contentReference[oaicite:6]{index=6}

**Can I screen for signals?**  
Yes—use the hidden boolean plots listed above or the SP‑Screener module.

---

## License & access

Invite‑only as part of the SignalPilot Trading Suite. See plans and activation times on the website. :contentReference[oaicite:7]{index=7}

---

## Changelog

- **v1.0.0** — Initial release  
  - Spike‑clipped OBV, SMA basis ±2σ  
  - Crosses with FlipGuard  
  - Z‑extremes  
  - Regular/Hidden divergences  
  - HTF compute  
  - Alerts + screener booleans


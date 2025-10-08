# SP: PVA — Volume + Overlay
**Versions**  
- PVA Volume: `v3.0.5-V` (separate volume pane)  
- PVA Overlay: `v3.0.6-O` (on-chart prints + barcolor + alerts)

**Part of:** SignalPilot Trading Suite — non‑repainting TradingView indicators designed for clarity, context, and action. (See site for suite overview and workflow.)

---

## Overview

SP‑PVA quantifies **participation** and expresses it two ways:

1) **PVA Volume (pane):**  
   - Normalized volume (`log` Z‑Vol + RVOL)  
   - CVD (z‑normalized) with **regular + hidden divergences** (vs price)  
   - **EVR** events: **Climax (CLX)** and **Absorption (ABS)**  
   - Smart spike markers and a minimal status table  
   - Hidden booleans for screeners

2) **PVA Overlay (on chart):**  
   - A single, decisive **Bull** or **Bear** print when participation + context align  
   - Exclusive **EVR** spikes (**CLX / ABS**)  
   - Regime & FlipGuard gates, optional HTF confirm, and breakout/breakdown confirmation  
   - Close‑confirmed **alerts** (BULL / BEAR / CLX / ABS)  
   - Hidden booleans for screeners

**Non‑repainting:** Signals finalize on bar close. HTF reads use `request.security(..., lookahead=barmerge.lookahead_off)`. All markers/labels are anchored with `x=bar_index` and const text.

---

## Quick start

1. Add **SP: PVA Volume** (pane) and **SP: PVA Overlay** (overlay) to the same chart.  
2. Keep defaults. Turn **Use HTF confirm** on only after you’re comfortable.  
3. Trade the plan:
   - **Bias:** from EC Pro / MACD+  
   - **Participation:** **BULL/BEAR** print and/or **CLX/ABS** spike  
   - **Structure:** prior D/W anchors or your SDZ/Levels  
   - **Timing:** RSI Triad / SRSI+  
4. Set close‑confirmed alerts (see below).

---

## Signals & alerts

### Overlay prints
- **BULL:** Participation score ≥ threshold, dominance margin met, body/ATR check, regime bull (EMA34≥EMA55 + price vs Pilot Line), optional VWAP align, optional HTF confirm, optional breakout confirm, FlipGuard/cooldown OK.  
- **BEAR:** Symmetric conditions for the downside.

### EVR (both modules)
- **CLX (Climax):** Large range (rangeZ ≥ `clxZ`), range ≥ `minRangeATR × ATR14`, strong body fraction, position near high (bull) or near low (bear).  
- **ABS (Absorption):** Quiet range (`rangeZ ≤ absorbZMax` *or* small body), **opposite wick** large (`wickFracMin`), direction by candle color.

**Alert names (Overlay):**
- `SP:PVA BULL`
- `SP:PVA BEAR`
- `SP:PVA CLX`
- `SP:PVA ABS`

> Alerts fire **only** when `barstate.isconfirmed` is true (close‑confirmed).

---

## Screener booleans (hidden plots)

**PVA Volume**
- `SP:PVA | SPIKE_HTF (bool)`  
- `SP:PVA | EVR_CLX (bool)`  
- `SP:PVA | EVR_ABS (bool)`  
- `SP:PVA | DIV_BEAR_REG (bool)`  
- `SP:PVA | DIV_BEAR_HID (bool)`  
- `SP:PVA | DIV_BULL_REG (bool)`  
- `SP:PVA | DIV_BULL_HID (bool)`

**PVA Overlay**
- `SP:PVA | BULL (bool)`  
- `SP:PVA | BEAR (bool)`  
- `SP:PVA | CLX (bool)`  
- `SP:PVA | ABS (bool)`  
- `SP:PVA | REGIME_BULL (bool)`  
- `SP:PVA | REGIME_BEAR (bool)`  
- `SP:PVA | SPIKE (bool)`  
- `SP:PVA | HTF_OK (bool)`

**Examples (watchlist / global screener filters)**
- Find fresh participation flips: `SP:PVA | BULL (bool) == 1 or SP:PVA | BEAR (bool) == 1`
- Scan only EVR: `SP:PVA | CLX (bool) == 1 or SP:PVA | ABS (bool) == 1`
- Divergence watch: `SP:PVA | DIV_BULL_REG (bool) == 1 or SP:PVA | DIV_BEAR_REG (bool) == 1`

---

## Inputs (key knobs & defaults)

### Normalization (both)
- `RVOL lookback` (50) — baseline window for RVOL  
- `Z-Score lookback` (100) — used for Z‑Vol and slope z‑scores  
- `Z‑Vol spike ≥` (1.9), `RVOL spike ≥ (x)` (2.2) — spike gates  
- `Pre‑smoothing EMA on volume` (1)

### MTF
- `Use HTF confirm` (off) — require HTF Z‑Vol > spike threshold  
- `HTF timeframe` ("60")

### Overlay — Polarity & Guards
- `Base score trigger (≥)` (70), `Dominance margin (pts)` (12)  
- Weights: `Z‑Vol` (0.45), `RVOL` (0.35), `CVD slope` (0.20)  
- `Min |CVD slope z|` (0.40), `Require body align` (on)  
- **Regime gate:** `Pilot length` (45), `EMA34/55`, `Bull above / Bear below VWAP` (on), `Min body/ATR14` (0.20)  
- `Adaptive score on quiet bars` (on), `adaptK` (6)  
- **FlipGuard:** `base` (6.0), `decay/bar` (0.5), `Cross‑side cooldown` (10 bars)  
- Ops: `Event clustering window` (12 bars), `Confirm breakout/breakdown` (on), `Confirm lookback` (5)

### EVR (both)
- `Enable EVR` (on)  
- `EVR near PDH/PDL/PWH/PWL only` (on)  
- `EVR proximity (× ATR14)` — **Overlay uses this directly**; see note below for Volume.  
- CLX: `CLX min range Z` (1.6), `CLX min body fraction` (0.65), `min range/ATR14` (1.20)  
- ABS: `ABS max range Z` (0.30) or `max body fraction` (0.35), `min opposite‑wick fraction` (0.40)  
- `EVR cooldown (bars)` (20)

### Divergences (Volume)
- `Show regular / hidden` (both on)  
- `Pivot left/right` (3/3)  
- `Max bars between price & CVD pivot` (8) + `Auto widen on higher TF` (on)  
- Spacing: `Min bars between divergence labels` (20)  
- `Min |CVD z| at pivot` (0.20)

### Session & Visuals
- `Limit to session` (off by default), `Session (exchange local)` (“0930‑1600”)  
- Volume pane: `Show CVD (z)`, `Show status table`  
- Spike markers: mode (`Smart/Dot/Text`), `Marker location`, spacing

---

## Method notes

- **Normalization:** `zVol = zscore(log(max(volume,1)), zLen)`, `rVol = volume / SMA(volume, lenRVOL)`; spike requires both.  
- **CVD:** Signed by candle direction; z‑normalized for pivot gating and slope scoring.  
- **Divergences (Volume):** Uses `ta.pivothigh/low` (confirmed with `right` bars) and anchors labels to `bar_index - right`. Sync window widens automatically on higher TFs.  
- **Structure proximity:** Previous Day/Week H/L from `request.security` (lookahead off).  
- **Exclusivity:** On Overlay, EVR prints (CLX/ABS) suppress the Bull/Bear text marker on that bar for visual clarity.

---

## Determinism / non‑repaint

- Signals freeze on `barstate.isconfirmed`.  
- No `lookahead_on`. All HTF reads use `request.security(..., ..., barmerge.gaps_off, barmerge.lookahead_off)`.  
- Labels/markers use const text and anchored coordinates (`x=bar_index, y=<price>`).

---

## Performance

- Single‑pass calculations, shared series reuse, compact booleans for screeners.  
- Spacing/cooldown parameters keep intraday noise manageable.

---

## Known quirks

- **PVA Volume proximity input:** The `EVR proximity (× ATR14)` input exists, but `v3.0.5‑V` currently compares distance to a **fixed `0.7 × ATR14`** internally. This does not affect correctness, but the knob doesn’t drive that threshold in this version. (Overlay uses the input as intended.) Consider aligning this in a minor patch.

---

## Changelog (high level)

- **v3.0.6‑O (Overlay)**
  - Added FlipGuard with decay + cross‑side cooldown and clustering window
  - Regime gate (EMA34/55 + Pilot Line + optional VWAP)
  - Optional breakout/breakdown confirmation
  - EVR CLX/ABS (structure‑aware), exclusive with Bull/Bear marker
  - Close‑confirmed alerts and hidden screener booleans

- **v3.0.5‑V (Volume)**
  - CVD (z) with regular + hidden divergences and pivot sync window (auto TF widening)
  - EVR CLX/ABS with session/HTF/structure gating and cooldown
  - Smart spike markers (text/dot, top/bottom auto), status table
  - Hidden screener booleans for SPIKE/EVR/DIV states

---

## License & disclaimer

Educational use only — **not** financial advice. Signals do not guarantee profit; past performance (incl. backtests) is not indicative of future results.

---

## Resources

- Website: https://www.signalpilot.io  
- Terms / Privacy available on the site.


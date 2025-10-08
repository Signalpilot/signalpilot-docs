# SP:SML • Smart Structure & Liquidity (Clean Anchored) v8.0

Maps the market’s structural beats—**BOS/CHOCH**, **EQH/EQL**, **Liquidity Sweeps**, **FVG v2**, and **OB v2 + Breakers**—with anchored drawings that **do not repaint** and are **alert/scan ready**. Designed to pair with EC Pro (bias) and PVA/OBV (participation) within the SignalPilot Suite.

> SignalPilot is an educational toolset. No financial advice. See the website for the current suite overview and policies.

**Website:** https://www.signalpilot.io  
**Platform:** TradingView (Pine v6)  
**Ticker scope:** Any symbol on TradingView; any timeframe (scalps→swings)

---

## Features

- **Structure Engine**
  - Close‑confirmed **BOS/CHOCH** with configurable start point (**Break** or **Swing**).
  - Extendable lines + age/quantity pruning to prevent clutter.
- **Equal Highs/Lows**
  - EQH/EQL with tolerance by % or ticks; optional labels; extend‑right.
- **Liquidity Sweeps**
  - Up/down sweeps gated by **cooldown** + **min ticks**.
- **FVG v2**
  - Fixed boxes + optional mid‑line & labels; **ATR% volatility filter**; mitigation handling (auto‑hide or faint footprint).
- **Order Blocks v2 (+ Breakers)**
  - Body‑ or wick‑based OBs; overlap hiding; mitigation handling; optional **volumetric meter**; automatic **breaker** conversion on invalidation.
- **Display Profiles**
  - `Clean Ultra`, `Standard`, `Verbose` control draw budgets and visibility (zones, labels, sweeps).

**Determinism / Non‑Repaint**
- Signals finalize on `barstate.isconfirmed`. Pivot‑based elements are only accepted once confirmed by `rightBars`.
- All visuals are **anchored** (`x = bar_index`, `yloc.price`) to prevent wobble.
- No lookahead; no `request.security(..., lookahead_on)`.

---

## Quickstart

1. **Add to chart** (invite‑only script).
2. **Choose mode** under **SP:Display → SP:Mode**:
   - `Clean Ultra` (minimal), `Standard`, or `Verbose` (max detail).
3. **Tune the modules**:
   - **Structure:** left/right swing bars, start from Break/Swing, line extension, close‑through setting.
   - **EQH/EQL:** tolerance (% or ticks), min bars between swings, extend‑right.
   - **Sweeps:** cooldown + min‑distance (ticks).
   - **FVG:** min gap (ticks), mitigation (Close/Wick), zone/mid‑line extension, ATR% filter.
   - **OB:** body vs wick, mitigation (Close/Wick), pre‑impulse lookback, overlap hiding, breakers, volumetric meter.
4. (Optional) **Enable alerts** (see below).
5. Use SML for the **structure map**. Pair with EC Pro + PVA/OBV/Levels per the suite’s bias→participation→structure→timing workflow.

---

## Inputs (by group)

### SP:Display
- **SP:Mode:** `Clean Ultra` / `Standard` / `Verbose` (controls budgets and visibility)
- **SP:Max Draw Age (bars):** Age pruning for lines/boxes/labels

### SP:Structure
- **Swing Left/Right Bars:** Pivot window sizes
- **Start From:** `Break` or `Swing`
- **Line Extend Bars**
- **Break must close through level**
- **Struct Bull/Bear colors**
- **Label Size**

### SP:Equal Highs / Lows
- **Show EQH/EQL**, **Show EQ labels**
- **Tolerance in % (else ticks)** + **Tolerance value**
- **Min bars between swings**
- **Extend right**, **EQ color**

### SP:Sweeps
- **Show Liquidity Sweeps**
- **Cooldown (bars)**
- **Min distance (ticks)**

### SP:FVG v2
- **Show FVG**
- **Min gap (ticks)**
- **Mitigation:** `Close` or `Wick`
- **Show Mid-line** + **Mid-line Extend Bars**
- **Zone Extend Bars**
- **ATR% Volatility Filter**
- **Keep faint footprint after mitigation**
- **Colors:** Bull/Bear fill, mid-line, labels

### SP:Order Blocks v2
- **Show OB**
- **OB = candle body (else high/low)**
- **Mitigation:** `Close` or `Wick`
- **Pre-impulse search (bars)**
- **Show Mid-line**
- **Hide older overlapped OBs**
- **Volumetric Meter (up/down closes)**
- **Zone Extend Bars**
- **Show breakers** + breaker colors
- **Colors:** Bull/Bear fill, mid-line, labels

---

## Signals & Screener Outputs (hidden booleans)

These emit `1` on the bar they occur (otherwise `na`), ready for TradingView alerts/scans/screeners.

- **Structure**
  - `SP:SML | BOS_UP (bool)`
  - `SP:SML | BOS_DN (bool)`
  - `SP:SML | CHOCH_UP (bool)`
  - `SP:SML | CHOCH_DN (bool)`
- **Equal Highs/Lows**
  - `SP:SML | EQH_NEW (bool)`
  - `SP:SML | EQL_NEW (bool)`
- **Sweeps**
  - `SP:SML | SWEEP_UP (bool)`
  - `SP:SML | SWEEP_DN (bool)`
- **FVG**
  - `SP:SML | FVG_BULL_NEW (bool)`
  - `SP:SML | FVG_BEAR_NEW (bool)`
- **Order Blocks**
  - `SP:SML | OB_BULL_NEW (bool)`
  - `SP:SML | OB_BEAR_NEW (bool)`

---

## Alerts

Two close‑confirmed presets are included:

- **SP:SML | Bullish OB Created** — fires when a bullish OB is created.
- **SP:SML | Bearish OB Created** — fires when a bearish OB is created.

> Tip: You can also base custom alerts on the hidden boolean plots above for BOS/CHOCH, EQH/EQL, Sweeps, FVG creation, etc.

---

## Reading the chart

- **Structure lines** (`BOS`, `CHOCH`) extend for *N* bars; colors differentiate bull vs bear.
- **EQH/EQL** mark equal swing zones; optional labels; extend‑right if enabled.
- **Sweeps** print tiny triangles above/below the bar with cooldown + min‑distance gating.
- **FVG** boxes appear when a 3‑bar displacement leaves a gap; boxes auto‑fade or persist as a footprint after mitigation.
- **OB** boxes derive from the opposing pre‑impulse candle; they auto‑hide on mitigation (or dim), can convert into **breakers** if invalidated; optional right‑edge **volumetric meter** shows buy/sell close participation while price trades inside the box.

---

## Non‑repainting & Anchoring

- All events confirm on bar close (`barstate.isconfirmed`).
- Pivot‑based detections (e.g., swings) only register after `rightBars`.
- No lookahead or future bars. All labels/lines/boxes are anchored at `x = bar_index` with `yloc.price`.

---

## Performance & Hygiene

- **Display profiles** limit how many structures/zones remain on‑chart.
- **Age pruning** removes older drawings after `SP:Max Draw Age`.
- OB/FVG arrays are capacity‑capped and pruned to control plot/label/box counts.

---

## Known trade‑offs

- **Swing confirmation delay:** Pivots require `rightBars` to confirm; structure signals are therefore delayed by design (safety over speed).
- **Mitigation criteria:** Choose `Close` vs `Wick` for FVG/OB according to your tolerance for touch vs close‑through.
- **Sweeps:** Require a reclaim back through the level and respect cooldown/min‑tick gating.

---

## Changelog (v8.0)

- FVG/OB engines rewritten (fixed zones, labels, mitigation handling, breakers).
- Added **volumetric meter** for OBs (optional).
- Added **ATR% filter** for FVG creation.
- Introduced **Display profiles** (Clean Ultra/Standard/Verbose) + global age pruning.
- Hidden boolean outputs for all key events; close‑confirmed alerts for OB creation.
- Numerous performance and stability improvements.

---

## License & Use

Proprietary, invite‑only indicator distributed as part of the **SignalPilot Trading Suite**. Educational use only; **not financial advice**. See the website for current plans, activation, and suite scope.

- Website: https://www.signalpilot.io
- Support: support@signalpilot.io


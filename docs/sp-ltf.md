# SP‑LTF — TD8/9 + Clean Squeeze + Smart Warnings (v3.10.0)

**Coiled or cooked—know before you chase.**  
LTF marks TD‑style 8/9s, paints a clean Bollinger‑in‑Keltner squeeze, and raises **Caution/Danger** X’s when a leg stretches, decelerates, or fails context—so you time entries/exits without repaint risk. Part of the **SignalPilot Trading Suite** (any market · any timeframe, alert‑ready). *Educational only.*  
Learn more: SignalPilot site (suite overview, pricing, quick‑start).  
> Non‑repainting & alert‑ready claims align with the suite’s positioning. Any‑market/timeframe coverage matches the site.  
> Source: SignalPilot website.  
> (© SignalPilot Labs, Inc.)  
 
---

## Highlights

- **TD 8/9 (with 9 “perfection”)** — Classic, close‑confirmed prints with anchored placement (ATR‑padded inside/outside).  
- **Clean Squeeze** — Bollinger Bands inside Keltner Channel, with optional adaptive width, dynamic z‑tightness, and contraction slope gates.  
- **Smart Warnings (X)** — One exclusive X per bar: **Danger** > **Caution**. Scores momentum/structure/RSI/volume to avoid low‑quality chases. Per‑leg cooldown prevents spam.  
- **Leg engine** — Starts only on releases/impulses when filters pass (HTF EMA confluence, ADX up & ≥ threshold, swing‑break, volume RVOL).  
- **Non‑repainting architecture** — All `request.security(..., lookahead=barmerge.lookahead_off)`; signals finalize on **close**; visuals **anchored** by `bar_index` & price.  
- **Alert‑ready & screener‑ready** — Boolean outputs for scanners; named alerts fire on closed bars.

> The above mirrors current site voice (clarity, actionable, non‑repainting, any market/timeframe). :contentReference[oaicite:3]{index=3}

---

## Quick start

1. **Access** — Get the SignalPilot Suite and provide your TradingView username for invite‑only access (activation typically within hours).  
2. **Add to chart** — Search *Invite‑only scripts* → “SP: LTF Suite — TD8/9 + Clean Squeeze + Smart Warnings”.  
3. **(Optional) Signal TF** — Set **Signal timeframe** if you want LTF to compute on an HTF while viewing a lower chart.  
4. **Add alerts** — Use the built‑in alert presets (close‑confirmed).  
5. **Workflow** — Follow the suite path: bias (EC Pro/MACD+) → participation (PVA/OBV) → structure (SDZ/Levels) → **timing** (RSI/SRSI+/LTF). :contentReference[oaicite:4]{index=4}

---

## Signals & events

**TD counts**
- `TD8B`, `TD9B`, `TD8S`, `TD9S`
- `TD9B_PERF`, `TD9S_PERF` (9 perfection on close)

**Squeeze**
- `SQZ_ACTIVE` — BB inside KC and gates satisfied (see **Gates**)

**Leg engine**
- `LEG_START_UP`, `LEG_START_DN` — release/impulse + filters pass

**Smart X (exclusive)**
- `WRN` (Caution) — stretch/deceleration/OB‑OS/divergence composite
- `DNG` (Danger) — failure streak, wick‑exhaustion, EMA flip, minor structure break
- **Exclusivity:** on any bar, only one X can print; `Danger` has priority.

---

## Gates & logic (abridged)

- **TD 8/9:** Classic compare vs 4 bars back; gated on the **closed** signal bar. “Perfection” checks lows/highs around the 9 count on closed data.
- **Squeeze:** BB within KC + *optional* gating:
  - **Adaptive** classic gate via normalized width quartile (25th pct over `autoWin`).
  - **Dynamic tightness** by z‑score ≤ threshold.
  - **Contraction slope** by EMA of dWidth ≤ –threshold.
- **Leg start:** Releases (close outside KC with EMA alignment) or impulse breaks (ATR‑sized bodies beyond prior H/L) **and** filters:
  - HTF EMA confluence (opt‑in),
  - ADX rising & ≥ threshold,
  - Swing‑break (pivot window),
  - Volume ≥ SMA × multiplier.
- **X scoring:**
  - *Caution:* stretch from KC mid, momentum deceleration, RSI OB/OS, divergence.
  - *Danger:* failure streak, wick‑exhaustion with RVOL, EMA cross against leg, minor structure break.

---

## Inputs (with defaults)

### SP:General
- **Signal timeframe (blank = chart)**: `""` (compute on chart TF; set HTF to downsample).

### SP:TD
- Show TD 8/9 markers: `true`
- Hide 8 (show 9 only): `false`
- Marker style: `"Text - White"` (also `"Text - Teal/Red"`, `"Boxes (Teal/Red)"`)
- Text size: `"normal"` (`"tiny"|"small"|"normal"|"large"`)
- Anchor mode: `"Outside (ATR pad)"` (`"Inside (ATR pad)"`)
- TD text padding (×ATR): `0.70`
- TD horizontal shift (± bars): `0`

### SP:Squeeze
- Show Squeeze cloud: `true`
- BB length/mult: `20`, `2.0`
- Keltner length/mult: `20`, `1.5`
- Auto‑adapt classic gate: `true` (25th percentile over lookback)
- Auto‑adapt lookback (bars): `300`
- **Min bars inside before ON:** `3` *(reserved in this build)*
- Dynamic tightness (z ≤ thr): `false` (thr `-0.60`)
- Require width contraction: `false` (EMA len `5`, slope thr `0.002`)
- Cloud color/transparency: rgb(40,120,255) / `40%`

### SP:Warnings (X)
- Show X: `true`
- Cooldown bars: `15`
- Leg must be ≥ this age: `4`
- Caution score ≥: `3`
- Danger score ≥: `4`
- Danger confirm streak (bars): `2`
- Min body/ATR: `0.22`
- Min |Close−KCmid|/ATR: `0.35`
- Stretch (|Close−KCmid|/ATR ≥): `1.30`
- Momentum decel bars ≥: `2`
- Minor structure window: `5`
- RSI OB/OS: `70 / 30`
- X text size: `"small"`

### SP:Leg Start Filters
- Require HTF EMA confluence: `true` (HTF `60`)
- Require ADX rising & ≥ thr: `true` (`18`)
- Require swing‑break: `true` (left/right `2/2`)
- Require volume ≥ SMA × mult: `true` (len `20`, mult `1.10`)

---

## Alerts (close‑confirmed)

- `SP:TD8B` — “SP: TD8 Buy”  
- `SP:TD9B` — “SP: TD9 Buy”  
- `SP:TD8S` — “SP: TD8 Sell”  
- `SP:TD9S` — “SP: TD9 Sell”  
- `SP:SQZ`  — “SP: Squeeze Active”  
- `SP:LEGUP` — “SP: Leg Start Up”  
- `SP:LEGDN` — “SP: Leg Start Down”  
- `SP:WRN` — “SP: Caution (X)”  
- `SP:DNG` — “SP: Danger (X)”

> All alerts are emitted only when the signal bar is confirmed.

---

## Screener outputs (hidden booleans)

The script exposes one hidden boolean plot per state for easy scanning:

SP:LTF | TD8B (bool)
SP:LTF | TD9B (bool)
SP:LTF | TD8S (bool)
SP:LTF | TD9S (bool)
SP:LTF | TD9B_PERF (bool)
SP:LTF | TD9S_PERF (bool)
SP:LTF | SQZ_ACTIVE (bool)
SP:LTF | LEG_START_UP (bool)
SP:LTF | LEG_START_DN (bool)
SP:LTF | WRN (bool)
SP:LTF | DNG (bool)

---

## Non‑repainting & anchoring

- All higher‑timeframe data uses `request.security(..., barmerge.gaps_off, barmerge.lookahead_off)`.  
- Signals compute on each **closed** signal bar (`newSig`) and freeze until the next.  
- All labels use hard anchors: `x = bar_index` (or `bar_index - 1` when Signal TF is HTF), `y = price`, `xloc.bar_index`, `yloc.price`.  
- Exclusive event printing (Danger > Caution) prevents double‑marks per bar and reduces noise.

---

## Performance & limits

- Plot budget: **13** total (incl. hidden plots).  
- Labels are gated to closed bars and throttled via cooldowns to minimize clutter.  
- Designed for 1m → 1W. Defaults are conservative on intraday.

---

## Notes & gotchas

- **Signal TF vs Chart TF:** When you choose an HTF in *Signal timeframe*, all logic/prints follow the **HTF close**, while labels are anchored on the correct prior LTF bar to prevent wobble.  
- **Squeeze “Min bars inside”:** The control is present for forward compatibility; the current build activates `SQZ_ACTIVE` as soon as the gates are met.  
- **Educational only:** No signals are financial advice. Use risk controls.

---

## Versioning

**v3.10.0**
- Close‑confirmed TD 8/9 with “perfection” checks.
- Clean Squeeze with adaptive width, dynamic z‑tightness (opt‑in), and slope contract (opt‑in).
- Leg engine with release/impulse starts + HTF/ADX/volume/swing filters.
- Smart X warnings (Danger > Caution), per‑leg cooldown, fully anchored labels.
- Screener booleans + named alerts.

---

## License & attribution

© SignalPilot Labs, Inc. All rights reserved. Invite‑only TradingView script; redistribution is not permitted. Branding and suite language aligned with the SignalPilot website (non‑repainting, alert‑ready, any market/timeframe). :contentReference[oaicite:5]{index=5}



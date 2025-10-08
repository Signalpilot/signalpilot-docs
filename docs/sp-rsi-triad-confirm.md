# SP: RSI Triad Confirm (SPRSI‑U+) — Premium

**TradingView · Pine v6 · Non‑repainting**  
Layered RSI (Fast/Base/Slow) that confirms turns with divergence quality + context (OBV, Stoch RSI, ATR, HTF/Weekly). FlipGuard prevents flip spam. Alert‑ready across any market/timeframe.  
Part of the [SignalPilot Trading Suite](https://www.signalpilot.io/) — *educational only; not financial advice*.  

---

## Changelog
- **v1.0.0**
  - Triad regime detection (Base vs Fast/Slow envelope + slope).
  - Anchored divergence engine with graded strength (0–20).
  - Confluence gates: OBV trend, Stoch RSI timing, ATR% floor, optional HTF/Weekly midlines.
  - FlipGuard (min‑hold + opposite override).
  - Strength Pulse columns, optional pane shading after new divergences.
  - Screener‑ready hidden series + close‑confirmed alerts.

---

## Overview

**What it does**  
SPRSI‑U+ blends three RSIs (Fast/Slow/Base). A *Triad Bull* occurs when Base crosses above the Fast/Slow envelope and slopes up; *Triad Bear* is the opposite. Divergences are detected via pivot‑confirmed highs/lows on price and RSI, then graded 0–20 using:
- **S1 (0–10):** half‑range RSI gain/loss between pivots  
- **S2 (0–4):** depth vs OB/OS bands  
- **S3 (0–4):** spacing between RSI pivots (normalized to max gap)  
- **S4 (0–2):** price move between pivots relative to ATR

**When a setup is promoted**  
A signal becomes **Confluence Long/Short** only if:
1) Triad Bull/Bear is present, **and**  
2) it occurs within `divWindow` bars after the most recent valid divergence, **and**  
3) divergence strength ≥ `minStrength`, **and**  
4) regime score ≥ `minRegime`, **and** optional filters pass: OBV trend, Stoch RSI cross/timing, ATR% floor, HTF/Weekly midline.

Everything is computed and frozen on bar close; HTF data is fetched with `lookahead_off` and gated by the HTF/Weekly candle’s confirmation.

---

## Installation

1. Add the invite‑only script to your chart (after your SignalPilot invite is activated).  
2. Open Settings → **SP:Smoothing** and **SP:Confluence Strategy** to match your market and timeframe.  
3. (Optional) Enable **HTF Filter** or **Weekly Assist** to gate signals by higher‑timeframe RSI midline.  
4. Add alerts (see below).

> Access, suite scope, and “non‑repainting on close” follow the SignalPilot site details.  
> See: https://www.signalpilot.io/  *(reference: Trading Suite, non‑repainting, any market/timeframe)*

---

## Signals & Alerts

**On‑chart markers**
- ▲ **Confluence Long** (triangle up, top of pane)
- ▼ **Confluence Short** (triangle down, bottom of pane)

**Alerts (close‑confirmed)**
- `SP:Confluence Long` — message: `SP:SPRSI-U Confluence Long (confirmed)`
- `SP:Confluence Short` — message: `SP:SPRSI-U Confluence Short (confirmed)`
- `SP:Div Bull` — message: `SP:SPRSI-U Bullish Divergence (confirmed)`
- `SP:Div Bear` — message: `SP:SPRSI-U Bearish Divergence (confirmed)`

> Create alerts from *Add alert… → Condition: SP: RSI Triad Confirm (SPRSI‑U+)* and choose the event above.

**Hidden screener outputs** (series = 1 when true; else `na`)
- `SP:SPRSI-U | BullDiv (bool)`  
- `SP:SPRSI-U | BearDiv (bool)`  
- `SP:SPRSI-U | TriadBull (bool)`  
- `SP:SPRSI-U | TriadBear (bool)`  
- `SP:SPRSI-U | ConfluenceLong (bool)`  
- `SP:SPRSI-U | ConfluenceShort (bool)`  
- `SP:SPRSI-U | SpreadOK (bool)`  
- `SP:SPRSI-U | FlipGuardActive (bool)`  
- `SP:SPRSI-U | BullStrength DIV (0-20)`  
- `SP:SPRSI-U | BearStrength DIV (0-20)`  
- `SP:SPRSI-U | BullStrength CONF (0-20)`  
- `SP:SPRSI-U | BearStrength CONF (0-20)`  
- `SP:SPRSI-U | RegimeScoreBull (0-100)`  
- `SP:SPRSI-U | RegimeScoreBear (0-100)`

These enable programmatic checks and work seamlessly with the SignalPilot Screener module.

---

## Inputs (tuning knobs)

### SP:Calculation
| Name | Key | Default | Notes |
|---|---|---:|---|
| Source | `src` | `close` | RSI input. |
| Base RSI Length | `lenBase` | 14 | Core RSI. |
| Fast RSI Length | `lenFast` | 7 | Faster RSI for envelope. |
| Slow RSI Length | `lenSlow` | 28 | Slower RSI for envelope. |

### SP:Smoothing
| Name | Default | Notes |
|---|---:|---|
| Smooth Base RSI | `true` | Smooths Base via selected MA. |
| Smooth Length | 5 | Window for Base smoothing. |
| Smooth Type | `RMA` | Options: `RMA`, `SMA`, `EMA`, `WMA`. |

### SP:Bands / Filters
| Name | Default | Notes |
|---|---:|---|
| Overbought | 70 | OB line; fixed 70 line also drawn. |
| Oversold | 30 | OS line; fixed 30 line also drawn. |
| Min Fast–Slow Spread | 3.0 | Enforce envelope separation. |
| Enforce Min Spread | `true` | Gate Triad until spread is wide enough. |

### SP:HTF Filter (optional)
| Name | Default | Notes |
|---|---:|---|
| Use HTF Filter | `false` | Gates by HTF RSI midline. |
| HTF Resolution | `60` | e.g., 60 = 1H. |
| HTF Midline | 50 | Above = bull gate; below = bear gate. |
| Plot HTF RSI | `false` | Visual reference. |

### SP:Weekly Assist (optional)
| Name | Default | Notes |
|---|---:|---|
| Use Weekly RSI Assist | `false` | Additional gating by weekly RSI midline. |
| Weekly Resolution | `W` | |
| Weekly Midline | 50 | |
| Plot Weekly RSI | `false` | Visual reference. |

### SP:Divergences
| Name | Default | Notes |
|---|---:|---|
| Detect Divergences | `true` | Enables divergence engine. |
| Pivot Left/Right Bars | 3 / 3 | Pivots confirm after `rightBars`. |
| Max Bars Between RSI & Price Pivots | 50 | Gap limit for pairing. |
| Min RSI Δ between pivots | 2.0 | Minimum strength filter. |
| Cooldown between same‑side divs | 10 | Bars to wait before another same‑side div. |
| Keep last N divergences | 12 | Drawing retention. |
| Shade N bars after divergence | 0 | Pane shading; 0 = off. |

### SP:Strength Visuals
| Name | Default | Notes |
|---|---:|---|
| Strength‑aware color | `true` | Fades lines/labels by score. |
| Show Strength Pulse (cols) | `false` | Column pulse on new divs. |
| Score on labels | `DIV` | `DIV`(0–20) or `CONF`(0–20). |
| Label Softness | 12 | Extra fade for label color. |

### SP:Confluence Strategy
| Name | Default | Notes |
|---|---:|---|
| Min divergence strength | 8 | 0–20 scale. |
| Max bars from divergence | 20 | `divWindow`. |
| Min regime score | 40 | 0–100. |
| Require OBV trend | `false` | Uses `obv > SMA(obv, L)`. |
| OBV lookback (bars) | 20 | |
| Require Stoch RSI timing | `false` | `K>D` & `K<20` (bull) / `K<D` & `K>80` (bear). |
| Stoch RSI K / D | 14 / 3 | |
| Require min ATR% of price | `false` | |
| Min ATR% of price | 0.20 | ATR(14)/close * 100. |

### SP:FlipGuard
| Name | Default | Notes |
|---|---:|---|
| Enable FlipGuard | `true` | Min‑hold on the last side. |
| FlipGuard Bars | 5 | Dwell time. |
| Opposite override +Strength | 4 | Allow strong opposite to break hold. |

### SP:Colors & Styles
Presets: Okabe‑Ito, Nordic, Mono, or fully Custom (Base/Fast/Slow/Bull/Bear). `Div Line Width`, `Div Line Style`, `Div Label Y‑Offset`.

### SP:Visuals
Mid‑band fill (30–70), ribbons above OB / below OS, toggle Fast/Slow lines, transparency controls.

---

## How it works (logic sketch)

1. **RSI Triad Envelope**  
   - `rsiF = RSI(src, lenFast)`  
   - `rsiS = RSI(src, lenSlow)`  
   - `rsi = RSI(src, lenBase)` then optionally smoothed  
   - *Triad Bull* = Base crosses above `max(Fast,Slow)` with positive slope, spread OK, HTF/Weekly gates OK, and `rsi > OS`.  
   - *Triad Bear* = symmetric below envelope with negative slope and `rsi < OB`.

2. **Divergence Engine (anchored & confirmed)**  
   - Uses `ta.pivothigh/ta.pivotlow(leftBars, rightBars)` on price and RSI.  
   - Pairs price/RSI pivots within `maxDivGap` bars.  
   - New divergence only if cooldown satisfied and score > 0.  
   - Lines & labels anchored at `x=bar_index` (confirmed on the bar after `rightBars`).

3. **Strength Score (0–20)**  
   - `S1` half‑range improvement (0–10)  
   - `S2` depth vs OB/OS (0–4)  
   - `S3` spacing vs `maxDivGap` (0–4)  
   - `S4` price Δ vs ATR(14) (0–2)

4. **Confluence**  
   - Within `divWindow` bars of last same‑side div  
   - `strength >= minStrength` and `regimeScore >= minRegime`  
   - Optional filters: OBV trend, Stoch RSI timing, ATR%, HTF/Weekly.

5. **FlipGuard**  
   - Enforces `fgBars` dwell; allows opposite override if strength ≥ `minStrength + oppBoost`.

---

## Non‑repainting design

- All HTF/Weekly `request.security()` calls use `lookahead_off` and are applied only once the higher‑timeframe bar closes.  
- Intrabar values are frozen until close; signals and alerts only fire on `barstate.isconfirmed`.  
- Divergences are drawn only after pivot confirmation (`rightBars`) and are anchored to `bar_index`.

---

## Performance & limits

- Plot budget ≈ 27 (including hidden series) — well below 64.  
- Avoid extreme `keepLast` or very large `divWindow` on very small timeframes if chart performance degrades.

---

## Tips

- Intraday: raise `minSpread` slightly (e.g., 3.5–4.5) and keep FlipGuard on.  
- Swing: widen `divWindow` and consider enabling HTF + Weekly assists.  
- Want fewer but stronger: raise `minStrength` and `minRegime`, enable ATR gating.

---

## FAQ

**Does it repaint?**  
No—signals finalize on candle close; HTF data is confirmed first. (See the SignalPilot FAQ.)  

**Which markets/timeframes?**  
Anything supported by TradingView, from scalps to swings.  

**Is this financial advice?**  
No. This is an educational tool. Manage your own risk.

---

## Support

- Email: support@signalpilot.io  
- Site: https://www.signalpilot.io/

© SignalPilot Labs, Inc. All rights reserved. Educational use only.


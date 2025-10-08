# SP: Key Levels Suite (v6, no MA)

Daily/weekly/monthly anchors, three exchange sessions, and D/W/M VWAP centers—non‑repainting, alert‑ready, and screener‑friendly.

> Part of the SignalPilot Trading Suite. Signals finalize on close; educational use only. See plans and onboarding at SignalPilot.io. [Non‑repainting + any market/timeframe claims per site; educational only per Terms.]¹

---

## Table of contents
- [Highlights](#highlights)
- [Determinism / Non‑repaint](#determinism--non-repaint)
- [Inputs & defaults](#inputs--defaults)
- [How it works](#how-it-works)
- [Visuals & anchoring](#visuals--anchoring)
- [Screener outputs](#screener-outputs)
- [Alerts](#alerts)
- [Performance notes](#performance-notes)
- [Install](#install)
- [Known limitations](#known-limitations)
- [Changelog](#changelog)
- [License & disclaimer](#license--disclaimer)
- [Support](#support)

---

## Highlights
- **HTF Levels:** D/W/M/Q Open, High, Low, Mid (individually toggleable).
- **Sessions ×3:** Configurable exchange sessions; per‑session O/H/L/Mid resets at each session start.
- **VWAP centers:** Daily, Weekly, Monthly central VWAP from `hlc3 × volume` (no bands).
- **Clean UI:** Short tags (`dH`, `wL`, `mMid`, `qO`, etc.), right‑aligned labels, line style/width controls and left/right offsets.
- **Screener‑ready:** Hidden boolean series for key touches; alert conditions fire only on confirmed bars.

---

## Determinism / Non‑repaint
This script follows the suite’s safety rules:
- **HTF data:** `request.security(..., lookahead=barmerge.lookahead_off, gaps=barmerge.gaps_off)` for D/W/M/Q OHLC.
- **Intrabar freezing:** A `freeze()` helper locks values on the active bar (`barstate.isconfirmed`), preventing wobble.
- **Anchoring:** All lines/labels are anchored by `x=bar_index` with `xloc.bar_index, yloc.price`.
- **No future data:** No pivots or forward‑looking helpers.

> Result: objects update only when the *current* bar confirms; HTF levels evolve through the day/week/month without repainting past bars.

---

## Inputs & defaults

### Controls
| Group | Input | Default |
|---|---|---|
| SP:Controls | Price Source | `hlc3` |
|  | HTF Levels | `true` |
|  | Session Levels | `true` |
|  | VWAP Levels (centers) | `false` |

### HTF Levels (per timeframe)
| TF | O | H | L | Mid | Color (default) |
|---|---:|---:|---:|---:|---|
| Day (D) | `false` | `true` | `true` | `false` | rgb(186,201,231) |
| Week (W) | `false` | `false` | `false` | `false` | rgb(233,191,148) |
| Month (M) | `false` | `false` | `false` | `false` | rgb(169,214,190) |
| Quarter (Q) | `false` | `false` | `false` | `false` | rgb(198,168,234) |

### Sessions (exchange timezone)
You get three sessions with independent times, toggles, and colors.

| Session | Hours (default) | O | H | L | Mid | Color |
|---|---|---:|---:|---:|---:|---|
| S1 | `0900-1500` | `false` | `false` | `false` | `false` | rgb(237,182,185) |
| S2 | `0800-1700` | `false` | `false` | `false` | `false` | rgb(186,201,231) |
| S3 | `0930-1600` | `false` | `false` | `false` | `false` | rgb(169,214,190) |

### VWAP Levels (centers only)
| Level | Toggle | Color |
|---|---:|---|
| Daily VWAP | `false` | rgb(183,208,255) |
| Weekly VWAP | `false` | rgb(207,183,255) |
| Monthly VWAP | `false` | rgb(183,255,210) |

### Appearance
| Input | Default | Notes |
|---|---|---|
| Title | `true` | Show short tags on right labels |
| Level Type | `Regular` | `Dashed` / `Dotted` available |
| Width | `1` | 1–4 |
| Offset Right | `35` | Label/line right padding |
| Offset Left | `5` | Line left padding |
| Label Size | `Normal` | `Tiny` / `Small` |

---

## How it works
- **HTF anchors (D/W/M/Q):** Pulls OHLC with `lookahead_off`. Mid = `(High + Low) / 2`. Each enabled level draws one horizontal line extended to the right and a right‑side label.
- **Sessions (×3):** Each session detects start (`stSx`) and tracks `O/H/L` while `inSx`. Mid = `(H + L) / 2`. Lines/labels are shown only while the session is active (they reset at the next session start).
- **VWAP centers (D/W/M):** Uses cumulative `pv = ta.cum(hlc3 * volume)` and `v = ta.cum(volume)` with day/week/month bases captured on timeframe change; center = `(pv - pvBase) / max(v - vBase, 0)`.

---

## Visuals & anchoring
- Lines: `line.new(..., extend=extend.right, xloc=xloc.bar_index)`
- Labels: `label.new(..., x=bar_index + OffsetRight, style=label.style_label_right)`
- Tag text uses fixed short codes (`"dH"`, `"wL"`, `"mVWAP"`, etc.). No runtime concatenation.

---

## Screener outputs
Hidden booleans (one plot per state), all `display=display.none`:

- `SP:LEVEL | dH touch (bool)` — price crossed Daily High  
- `SP:LEVEL | dL touch (bool)` — price crossed Daily Low  
- `SP:LEVEL | wH touch (bool)` — price crossed Weekly High  
- `SP:LEVEL | wL touch (bool)` — price crossed Weekly Low  
- `SP:LEVEL | mH touch (bool)` — price crossed Monthly High  
- `SP:LEVEL | mL touch (bool)` — price crossed Monthly Low

Use these in the TradingView Screener or for watchlist/global alerts.

---

## Alerts
Close‑confirmed alert conditions included:

- **SP: dH touch** — “Price touched Daily High”  
- **SP: dL touch** — “Price touched Daily Low”  
- **SP: wH touch** — “Price touched Weekly High”  
- **SP: wL touch** — “Price touched Weekly Low”  
- **SP: mH touch** — “Price touched Monthly High”  
- **SP: mL touch** — “Price touched Monthly Low”

> All alerts fire only on `barstate.isconfirmed`.

---

## Performance notes
- Designed to be light: one set of HTF pulls, incremental session tracking, and three VWAP bases updated only on D/W/M change.
- Watch TradingView limits: `max_lines_count=500`, `max_labels_count=500`.
- To reduce objects, disable unused HTF toggles and sessions or hide labels.

---

## Install
1. Open TradingView → **Pine Editor**.  
2. Paste the code from `sp_key_levels_suite_v6.pine`.  
3. **Save** → **Add to chart**.  
4. Configure toggles (start with D: `H` + `L` only).  
5. Optional: add alerts for daily/weekly/monthly touches.

If you’re using the full SignalPilot Suite, access is invite‑only via your TradingView username after purchase. Activation is typically within hours.¹

---

## Known limitations
- **Session visibility:** Session lines/labels are only shown while that session is active; they reset at the next session start.  
- **VWAP bands:** This module plots centers only (no ±σ bands).  
- **Intraday HTF drift:** Daily/weekly/monthly highs/lows evolve until the HTF closes; past bars are not repainted.

---

## Changelog
- **v6 (current)**  
  - Added Quarter (Q) OHLC + Mid toggles  
  - 3 independent sessions with O/H/L/Mid and per‑session colors  
  - D/W/M VWAP centers with base resets on TF change  
  - Right‑anchored labels, style/width/offset controls  
  - Screener booleans for d/w/m touches + close‑confirmed alerts

---

## License & disclaimer
Choose a license appropriate for your repo (e.g., proprietary for subscribers).  
**Disclaimer:** SignalPilot provides tools and educational materials only. No financial, investment, or trading advice. Past performance (including backtests) is not indicative of future results.¹

---

## Support
- Site & plans: SignalPilot.io  
- Email: support@signalpilot.io  
- Issues: open a GitHub issue on this repo

---

¹ References: Non‑repainting + any‑market/timeframe claims and access model; educational‑only language are taken from the public site and Terms.

# SignalPilot EC — Pro v1.9.12
_Event‑Candle Confluence • non‑repainting alerts for any market & timeframe_

> Educational use only — not financial advice. Signals finalize on candle close.

---

## TL;DR
SP‑EC Pro prints **TD / IGN / OUT / CAP / WRN** events, colors the candle, and adds **NanoFlow** crosses + **breakout** arrows. It blends a Pilot Line (ATR‑aware), regime voting, momentum/structure, and **Volume Assist** so you get decisive, **non‑repainting** alerts you can trade or route to scanners.

---

## What’s new in v1.9.12
- **5m profile**: tighter CAP spacing and stricter top‑structure checks; IGN allows slightly shallower dips for better timeliness.
- **Volume Assist** (on by default): RVOL gating (spike/dry filters) to avoid weak TDs and prefer real tops/rolls.
- **Cleaner plots**: removed hidden boolean (screener) plots to reduce overhead.
- Targeted cool‑down & FlipGuard polish for fewer mid‑trend flip attempts.

---

## How it works (quick model)
- **Pilot Line & Ribbon** — ATR‑normalized EMA34 blend with a slope threshold; a ribbon ±ATR shows trend strength.
- **Regime vote (3 factors)** — EMA34 vs EMA55, price vs PL, PL slope. Majority → raw regime; FlipGuard enforces dwell time.
- **Momentum layer** — StochRSI + RSI with timeframe‑aware OB/OS bands and hook logic.
- **Structure layer** — Pivots (len scales by TF), new highs/lows, near‑top/bottom, hammers/engulfing, reclaim/lose PL.
- **Volume Assist** — SMA(volume) baseline → relative volume (RVOL) to qualify IGN/CAP/OUT/TD.
- **Exclusivity** — On each bar close, at most one event: **CAP > WRN > OUT > IGN > TD**.
- **Breakouts** — Trend‑aligned break arrows when ATR expands and price clears recent range.

**Non‑repainting**:  
- All `request.security()` calls use `lookahead=barmerge.lookahead_off`.  
- Event decisions are finalized only on `barstate.isconfirmed` (close).  
- Visuals and labels are anchored (`x=bar_index`, `yloc.price`) to prevent wobble.

---

## Inputs (tuning knobs)
**Visibility**
- `Show Event Labels (TD/IGN/OUT/CAP/WRN)`: `true`
- `Show NanoFlow Crosses`: `true`
- `Show Breakout Arrows`: `true`

**SP:EC — Volume Assist**
- `Enable Volume Assist`: `true`
- `Vol MA Length`: `50`
- `Spike Mult (tops/OUT/CAP)`: `1.25`
- `Spike Mult (IGN)`: `1.10`
- `Dry Mult (avoid weak TD)`: `0.70`

**Event Palette**  
- `Event Palette`: `"Neon Noir"` (20 curated palettes available)

> Most thresholds auto‑profile by timeframe (1m→1W). 5m gets dedicated IGN/CAP tweaks in this release.

---

## Signals & priority
1. **CAP** (High‑sensitivity Top) — strict if trend is strong; else loose.  
2. **WRN** (Early Top) — provisional caution (no roll confirmation yet).  
3. **OUT** (Bear Reversal) — top confirmed by roll‑through conditions.  
4. **IGN** (Bull Reversal) — bottom confirmed by follow‑through.  
5. **TD** (Touchdown) — provisional bottom that didn’t become IGN.

**Only one** event can print per bar (priority above).

---

## Alerts (all are close‑confirmed)
- `SP:EC | Touchdown (Base)`  
- `SP:EC | Ignition (Bull Rev)`  
- `SP:EC | OUT (Bear Rev)`  
- `SP:EC | Cap (Hi‑Sens Top)`  
- `SP:EC | Warn (Early Top)`  
- `SP:EC | NanoFlow Up` / `NanoFlow Down`  
- `SP:EC | PL Reclaim` / `PL Loss`  
- `SP:EC | PL Slope Turn Up` / `PL Slope Turn Down`  
- `SP:EC | Regime Flip Up` / `Regime Flip Down`

> Recommended: set alerts on **IGN/OUT/CAP** for trade‑driving events; use **WRN** as an early‑risk filter and **PL/Regime** alerts for bias changes.

---

## Quick start
1. **Access**: After purchase, accept the TradingView invite (Indicators → _Invite‑only scripts_ → **SignalPilot EC — Pro**).  
2. **Drop on chart**: Start with your primary TF (5m, 15m, or 1h).  
3. **Turn on two alerts**: `IGN` and `OUT` (optionally `CAP`).  
4. **Add context**: Layer Pilot ribbon + NanoFlow crosses; watch breakout arrows for continuation entries.  
5. **(Optional)** pair with SP‑PVA / SP‑OBV for participation and SP‑Levels/SDZ for structure.

---

## Timeframe profiles (high‑level)
- **1–5m**: stricter tops (CAP requires nearby top‑structure); TD prefers red bars; IGN allows slightly shallower dips (v1.9.12).  
- **15–30m**: balanced gates; FlipGuard dwell prevents flip spam.  
- **60m+ / HTF**: wider bands; weekly assist can relax cool‑downs when macro weekly is up.

---

## Best practices
- Trade **with** regime & PL slope; fade only with CAP + volume/structure confluence.  
- Require **Volume Assist** to avoid thin reversals.  
- Let **FlipGuard** do its job; don’t stack conflicting alerts immediately after a flip.

---

## FAQ
**Does it repaint?** No. Events finalize at close; higher‑timeframe data is pulled with `lookahead_off`.  
**Which markets/timeframes?** Any market on TradingView; scalps→swings.  
**Why no hidden (bool) plots in this build?** v1.9.12 removes hidden screener booleans for a cleaner plot budget; use alerts or the Screener module for scanning.

---

## Changelog (excerpt)
### 1.9.12 — 5m IGN/CAP tweaks + Volume Assist + plot cleanup
- 5m: CAP spacing + top‑structure requirements tightened; TD red‑bar preference; IGN permits slightly shallower dip‑Z.
- Volume Assist: RVOL gates for IGN/CAP/OUT/TD (`Spike Mult`, `Dry Mult`).
- Cool‑down and FlipGuard refinements in strong up‑trends.
- Removed hidden boolean plots; unchanged alert set.

---

## Contributing / Issues
Please open issues with **symbol, timeframe, event type, and a screenshot**. Keep language educational—no P&L claims.

---

## License
© SignalPilot Labs, Inc. All rights reserved. Commercial, invite‑only script.

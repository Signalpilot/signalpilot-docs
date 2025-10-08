# SP‑SDZones Pro v6 — Anchored Compact Mode (No Ribbon)

Non‑repainting supply/demand zones with compact anchored patches, declutter, flip detection, and confluence badges (VWAP, PDH/PDL, EMAs, round numbers). Built for alerts and for clean intraday/swing structure.

> Part of the SignalPilot Trading Suite — non‑repainting, alert‑ready indicators for **any market, any timeframe**. Educational only; not financial advice.  
> Website: https://www.signalpilot.io  
> Support: support@signalpilot.io  
> © SignalPilot Labs, Inc. All rights reserved.  :contentReference[oaicite:2]{index=2}

---

## Contents
- [Overview](#overview)
- [Key features](#key-features)
- [How it works (non‑repaint)](#how-it-works-non-repaint)
- [Inputs & defaults](#inputs--defaults)
- [Visualization modes](#visualization-modes)
- [Declutter logic](#declutter-logic)
- [Confluence badges](#confluence-badges)
- [Alerts](#alerts)
- [Recommended workflow](#recommended-workflow)
- [Performance & limits](#performance--limits)
- [FAQ](#faq)
- [Changelog](#changelog)
- [License](#license)

---

## Overview

`SP-SDZ+` builds zones from confirmed pivots (left/right lookback), scales geometry with ATR, and draws **compact, anchored** patches so levels stay visible without flooding the screen. A **Quiet Mode** and **Smart Declutter** engine reduce overlap and prioritize proximity and strength. Optional **Flip Zones** mark role reversals on breaks + retests. **Confluence badges** score each zone vs VWAP, PDH/PDL, EMAs, and round numbers to surface high‑quality locations.

---

## Key features

- **Confirmed-pivot SD zones** — ATR‑scaled padding + min height; immutable top/bottom once created.  
- **Anchored Compact Mode** — visible patch only (last *N* bars), anchored midline & pin to the pivot time; “No Ribbon” for maximal clarity.  
- **Quiet Mode + Smart Declutter** — overlap pruning, nearest‑to‑price selection, flip‑keep boost, age fade, per‑side caps.  
- **Flip Zones** — detect break + retest and reclassify with accent shading.  
- **Confluence badges (0–10)** — single score from VWAP / PDH‑PDL / EMAs / Round numbers; optional tags (`VW`, `PDH/PDL`, `EMA`, `RN`) and touch count.  
- **Alert‑ready** — “First Touch” (opt‑in) and “Broken” conditions for automation.  
- **Themes** — Night Ops / Neon Pulse / Monochrome Pro / Ocean Glass; outline‑only option for ultra‑clean charts.  
- **Any market · timeframe** on TradingView; educational only. :contentReference[oaicite:3]{index=3}

---

## How it works (non‑repaint)

- Zones form only when a `ta.pivothigh/low(left, right)` is **confirmed**; geometry is frozen from that bar (`top/bot` snapshot + ATR pad).  
- Daily references use `request.security(..., "D", ...)` with `lookahead_off`; prior‑day values are indexed to avoid future bars.  
- All styling passes operate on stored, immutable zone bounds; intrabar visuals may update, but **decisions/alerts are intended for bar close** via TradingView’s alert scheduler.

---

## Inputs & defaults

**Detection**
- `Pivot Left/Right`: `8 / 8`
- `Pad` / `Min zone height`: `0.0` (disabled when ATR on)
- `Use ATR for Pad/Min Height`: `true` with `ATR Length=14`, `Pad ATR Mult=0.20`, `Min Height ATR Mult=0.10`

**Display & Behavior**
- `Outline only`: `false`
- `Max zones stored per side`: `12`
- Invalidation: `Close` (alt: `Wick`)
- `Fade when invalidated`: `true`
- `Hide broken zones`: `true`
- `Enable flip zones`: `true`
- `Mark first touch once`: `false`

**Visuals**
- Theme: `Night Ops`; `Age fade speed=0.25`; `Show midline/pin=true`
- `Strength pop factor=3.0`; `Focus Mode=false`
- `FLIP shade/border alpha`: `92 / 85`
- `Compact view=true`; `Compact width=40 bars`

**Quiet Mode**
- `Quiet Mode=true`
- `Max visible per side=4`; `Max flipped per side=2`
- `Max age bars=600`
- `Soften overlaps=true` at `>= 0.33`

**Smart Declutter**
- `Enable Smart Declutter=true`
- `Hide weaker overlaps if ≥ 0.50`
- `Keep nearest N per side=4`
- `Flip keep boost=2.0`

**Confluence**
- `Enable Confluence=true`; `Show badges=true`; `Min badge score=4.0`
- Tags: `Show touch count=true`
- Round step: `Auto` (else `ticks=50`)
- EMAs: `Fast=20`, `Slow=50`
- Weights: `VWAP=0.30`, `PDH/PDL=0.30`, `EMA=0.20`, `RN=0.20`

**Alerts**
- `Alert: first touch=false`
- `Alert: zone broken=false`

---

## Visualization modes

- **Compact patches** — visible only over the last `compactBars` bars; midline and left‑time pin are anchored (xloc=bar_time).  
- **Focus Mode** — hides badges/pins/midlines and tightens visible caps.  
- **Outline‑only** — draw borders without fill (maximal cleanliness).  
- **Theme palette** — softer fills by default; strength and age modulate transparency.

---

## Declutter logic

1) **Score‑first selection** (strength + flip bonus)  
2) **Overlap pruning** by vertical overlap fraction  
3) **Proximity filter** — keep nearest to price on each side  
4) **Flip cap** — limit flipped zones per side (closest kept)  
5) **Age & visibility** — optional fade/hide beyond `maxAgeBars`

---

## Confluence badges

- **Score (0–10)** blends proximity to **VWAP**, **PDH/PDL**, **EMA fast/slow**, and **Round numbers** using user weights.  
- Badges anchor to the pivot’s left time; text can include confluence tags, touch count (`xN`), and `FLIP` when applicable.

---

## Alerts

Two built‑in `alertcondition()`s:

- **SP‑SDZ+: First Touch** — fires on first touch when both `Mark first touch once` **and** `Alert: first touch` are enabled.  
- **SP‑SDZ+: Broken** — fires when any zone is broken based on `Invalidate with` (Close/Wick) and `Alert: zone broken` is enabled.

**Recommended Alert setting in TradingView:** “Once per bar close” to match non‑repainting policy.

---

## Recommended workflow

Use SDZones for **structure** within the SignalPilot flow:  
**Bias** (EC Pro/MACD+) → **Participation** (PVA/OBV) → **Structure** (SDZ + Levels) → **Timing** (RSI Triad/SRSI+) → **Automate** (Screener & alerts). :contentReference[oaicite:4]{index=4}

---

## Performance & limits

- Script guards: `max_boxes_count=600`, `max_labels_count=200`, `max_lines_count=400`.  
- Arrays are pruned continuously; visuals are capped per side via Quiet/Declutter.

---

## FAQ

**Q: Why didn’t a pivot produce a zone?**  
A: The candidate may be thinner than `Min height` (ATR or fixed), or declutter removed it due to overlap/priority.

**Q: Why did a zone fade or disappear?**  
A: `Fade when invalidated` and/or `Hide broken zones` is on; Quiet Mode caps visible zones and hides those older than `Max age bars`.

**Q: How do Flip Zones work?**  
A: After a break, the first re‑entry from the other side flags a flip and shades with the accent alpha.

**Q: Do zones repaint?**  
A: Pivots confirm before use; daily refs use `lookahead_off`; decisions should be alerted **on bar close**. The website and suite are built around non‑repainting, alert‑ready logic. :contentReference[oaicite:5]{index=5}

---

## Changelog

**v6 — Anchored Compact Mode**
- New compact patches (no anchor ribbon) + anchored midline/pin  
- Quiet Mode + Smart Declutter (overlap pruning, nearest‑N, age fade, flip caps)  
- Flip Zones with accent shading and per‑side cap  
- Confluence badges (VWAP / PDH‑PDL / EMAs / RN) with 0–10 score + tags  
- Theme refresh (Night Ops / Neon Pulse / Monochrome Pro / Ocean Glass)

---

## License

Proprietary; invite‑only use granted to active customers of the SignalPilot Trading Suite. Educational only — nothing here is financial advice. :contentReference[oaicite:6]{index=6}

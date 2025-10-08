This reduces micro‑flips when Composite hovers near its EMA.

### 4) HTF Assist (opt‑in)
HTF versions of the same oscillators are fetched with
`request.security(..., lookahead = barmerge.lookahead_off)`, normalized, averaged, and **frozen on close**.  
The **Confluence** row lights up when **LTF>50 & HTF>50** (up) or **LTF<50 & HTF<50** (down).

### 5) Heat‑Matrix (Visual States)
State mapping per row:  
`≥ OB → Strong Up`, `≥ UpperThresh → Mild Up`, `Neutral`, `≤ LowerThresh → Mild Down`, `≤ OS → Strong Down`.

---

## Non‑Repaint Guarantees

- **Close‑confirmation:** All signals use `barstate.isconfirmed` → **alerts only at close**.  
- **HTF safety:** Every `request.security` uses `lookahead_off`; no future bars are read.  
- **Intrabar stability:** Values are **frozen** with a close‑aware helper (previous bar value during the forming bar).  
- **Anchored drawings:** Boxes/labels anchored by `x=bar_index` and `yloc.price`; no wobble on zoom.

---

## Performance

- **Objects:** `Blocks` style uses anchored `box` objects and can approach `max_boxes_count` on hyper‑noisy feeds.  
  - If you hit limits, switch to **Stripes**, reduce rows, widen row spacing, or lengthen normalization.  
- **Security calls:** HTF Assist adds a handful of `request.security`; keep it **off unless needed**.  
- **Plots budget:** Under TradingView’s 64‑plot limit (hidden booleans included).

---

## TF Profiles (suggested defaults)

> Profiles are conservative; tune up selectivity for faster charts.

| TF | OB / OS | Normalize N | EMA | Votes | FlipGuard (cooldown / buffer / decay) | Notes |
|---|---|---:|---:|---:|---|---|
| **1–5m** | 85 / 15 | 300 | 13 | ≥3 | 4 / 5.0 / 0.90 | Consider **HTF=60m** gate |
| **15–30m** | 80 / 20 | 250 | 11 | ≥2 | 3 / 4.0 / 0.85 | Default profile |
| **1–4H** | 80 / 20 | 220 | 9 | ≥2 | 3 / 3.5 / 0.85 | Optional **HTF=1D** gate |
| **1D+** | 75 / 25 | 200 | 7 | ≥1 | 2 / 3.0 / 0.85 | HTF optional |

---

## Recipes

### A) Intraday momentum (15–30m)
- **On:** RSI, Stoch, MFI, CCI, MACD (AO off)  
- **Votes ≥ 2**, **50‑Gate ON**, **FlipGuard** `3 / 4.0 / 0.85`  
- **Optional:** HTF Assist `240` with **Require HTF confluence ON**  
- **Entry bias:** XUP when Composite already >50 and Consensus ≥2

### B) Swing (4H–1D)
- **Weights:** keep equal or slightly up‑weight MACD/RSI  
- **Votes ≥ 1**, **50‑Gate ON**, **FlipGuard** `3 / 3.5 / 0.85`  
- **Optional:** HTF Assist `D` (for 4H) or `W` (for D)

### C) Mean‑revert scout (scalps)
- **Focus:** OB/OS context + `50DN/50UP` flips back through 50  
- **Votes ≥ 3**, **HTF Assist ON** (strict)  
- Use **Stripes** ribbon to reduce object churn

---

## Troubleshooting

- **“Matrix isn’t visible”** → Enable **Show heat‑matrix**; confirm **Matrix style**; check Row spacing & Base Y.  
- **“Too many drawings”** → Switch to **Stripes**; hide unused rows; increase row spacing; lengthen Normalize N.  
- **“Why didn’t XUP fire?”** → Check **FlipGuard** (cooldown/buffer), **50‑Gate**, **Votes**, and **HTF** gates.  
- **“Repainting?”** → Ensure alerts are **Once Per Bar Close**; verify HTF Assist is enabled only if you need it.

---

## Contributing

- Keep **determinism**: no future bars, no pivot lookahead, no intermittent helpers trapped in branches.  
- All `request.security` calls must use `barmerge.lookahead_off`.  
- Preserve **anchoring**: labels/boxes created with explicit `x=bar_index`, `yloc.price`.  
- Respect the **plot budget** and avoid local‑scope plotting/fill.  
- Add/update **hidden booleans** when introducing new signals.

> PRs should include: (1) Before/After screenshots, (2) Param diffs, (3) Bar‑by‑bar verification notes, (4) Plot count.

---

## FAQ

**Does it repaint?**  
No. Signals finalize at **bar close**; HTF uses `lookahead_off`; intrabar values are frozen until the candle confirms.

**Can I scan on the signals?**  
Yes — use the **hidden boolean** plots listed above.

**Blocks vs Stripes?**  
**Blocks** are change‑aware and easier to read historically but use more objects. **Stripes** are lighter and continuous.

**Which oscillators should I enable?**  
Defaults are balanced. For trend/momentum, many prefer **RSI + MACD** slightly up‑weighted.

---

## Changelog

- **v1.0.0** — Initial public docs for `SP: Oscillator Matrix (Panel Pro)`.

---

## License / Notice

© SignalPilot Labs, Inc. Tools are **educational** and provided “as‑is.” No investment advice.  
See `/LICENSE` and your jurisdiction’s regulations before using for live decision‑making.

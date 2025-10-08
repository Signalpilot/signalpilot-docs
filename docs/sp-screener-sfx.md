
Key series:
- **Trend**: `EMA21` vs `EMA55` (row TF)
- **MACD histogram**: `(EMA12 − EMA26) − Signal(9)` (row TF)
- **RSI**: `RSI(14)` (row TF)
- **Gauss baseline**: `gma(close, 50)` where `gma` = EMA(EMA(EMA(EMA(close,50),50),50),50)
- **Band**: `stdev(close,20) × 0.75` (row TF)
- **Outside**: `close > max(g1,g2)+band` or `< min(g1,g2)-band`
- **Wilder ADX**: custom implementation, length = `adxLen`
- **OBV slope**: `sma(change(OBV), obvLen)`, with `OBV = cum(sign(change(close)) * volume)` (row TF)
- **Distance gate**:  
  - Long OK if `close >= gBasis + minDist × ATR(14)`  
  - Short OK if `close <= gBasis − minDist × ATR(14)`

**TP1**: `lastEntry ± 1×ATR(14)` (row TF).  
**P&L**: long = `close/lastEntry - 1`; short = `lastEntry/close - 1`.  
**Age**: `now − lastEventTimestamp`.

---

## 6) Quick start

1. Add the script (overlay) to any chart.  
2. Set **up to 8 rows** with symbol + timeframe (mix intraday and HTF as needed).  
3. Pick a **Table Size** and corner. Enable **Score** if using Normal/Large.  
4. Leave Accuracy+ defaults for stricter, cleaner signals; loosen as needed.  
5. Trade your plan—**the table is an at‑a‑glance router**, not a strategy.

**Suggested presets**
- **Intraday (scalps)**: Smaller TF rows (`3–15m`), keep defaults; consider `minScore 65–70`.
- **Swing**: Rows `1H–4H–1D`, keep defaults; consider `minScore 55–60`.

---

## 7) Behavior, determinism & repaint notes (read this)

- All higher‑TF data uses `lookahead_off` → **no future data** is pulled.  
- **Events are computed on the row’s TF.** When your **chart TF < row TF**, you may see **intrabar previews** while the row‑TF bar is still building. The signal is only considered **final** at the **row‑TF bar close**.  
- The table always reflects the **latest confirmed** event per row; use the **Age** column to sanity‑check recency.

> Practical tip: Keep **Accuracy+** gates ON and use a **higher `minScore`** to avoid chasing provisional flips on thin/volatile symbols.

---

## 8) Performance & limits

- Lightweight: table redraws only on layout changes (size/position/columns).  
- Up to **8 rows** visible.  
- Overlay only; no plots/labels created by this file.  
- **No alerts** in this file (by design).

---

## 9) Troubleshooting

- **Blank/“—” signal**: No qualified event yet (or filters/score are too strict). Loosen `minScore` slightly.  
- **Score looks low despite cross**: One or more gates failing (check ADX/OBV/HTF/Distance/RSI rows).  
- **Frequent flips on very low TFs**: Raise `minScore`, ensure ADX gate is ON, consider using slightly higher TF.  
- **TP1 looks far**: It’s `±1×ATR(14)`—volatility drives distance; that’s by design.

---

## 10) Changelog (v6.1)

- **Accuracy+** gates (ADX rising/min, HTF hist agreement, OBV slope, hist z‑score, ATR distance, RSI regime).  
- **Confluence Score** (0–100) with small **Outside** penalty.  
- Four **table sizes** with optional **Score** column.  
- Robust table lifecycle (rebuild only on layout changes).

---

## 11) License & disclaimer

Proprietary © SignalPilot. Educational use only. Not financial advice. Markets are risky; do your own research and manage risk.

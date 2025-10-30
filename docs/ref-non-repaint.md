# Non-Repainting Policy

SignalPilot is designed to be **deterministic on candle close**.

- **Close-confirmed signals** — Alerts fire only when `barstate.isconfirmed`.
- **HTF data** — Pulled with `request.security(..., lookahead_off)` and only accepted after the HTF bar closes.
- **Pivots & divergences** — Only drawn **after** the right-side pivot confirms; then **anchored back** to the original bar.
- **Anchoring** — Labels/markers use `x=bar_index` and `yloc.price` to avoid wobble.

What this means: **No future-bar lookahead.** Backtests and alerts match live behavior.

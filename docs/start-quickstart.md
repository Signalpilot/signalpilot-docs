---
title: "Quick Start — How to Fly the SignalPilot Suite"
summary: "A guided setup and full-suite workflow showing how Bias, Participation, Structure, Timing, and Meta tools connect."
---

# 🚀 Quick Start — SignalPilot Suite Overview

Welcome aboard the **SignalPilot Suite** — a cohesive system built to make charts cleaner, smarter, and faster to read.
This guide shows how all modules can be installed, understood, and combined step-by-step.

---

## 🧭 Step 1 — Establish Bias (Momentum Layer)

The Bias group defines **trend direction and strength**.
It can be thought of as a market compass.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[Momentum Regime (MACD+)](spp-macd-plus.md)** | Detects potential regime flips and momentum phases using adaptive color zones. | Can confirm whether the current leg is impulsive or corrective. |
| **[Trend Stack (EMA 50/100/200 Pro)](sp-ema-trio-pro.md)** | Tracks medium- and long-term trend alignment with GC/DC and pullback logic. | "Stacked" trending conditions and disciplined re-entries can be identified. |
| **[Momentum Matrix (Panel Pro)](sp-oscillator-matrix.md)** | Aggregates multiple oscillators into a single normalized panel. | Quick visual scan of momentum strength across timeframes can be performed. |

> **Tip:** If Bias modules disagree, lighter trading or waiting for alignment can be considered.

---

## 💧 Step 2 — Measure Participation (Volume / Flow)

Bias tells *where* the market wants to go; Participation tells *who's actually moving it*.
These modules show conviction and flow strength.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[Participation (PVA Overlay)](sp-pva-overlay.md)** | Colors candles by relative volume and flow bursts. | Unusual volume during key price moves can be spotted. |
| **[Volume Pulse (PVA Volume)](sp-pva-volume.md)** | Plots RVOL and Z-score spikes to highlight activity surges. | When volume validates a breakout can be confirmed. |
| **[Flow Balance (OBV Pro)](sp-obv-pro.md)** | Smoothed On-Balance-Volume with FlipGuard filtering. | Silent accumulation or distribution ahead of price can be detected. |

> **Rule of thumb:** Momentum without volume = low conviction. Volume without structure = chaos.

---

## 🏗️ Step 3 — Map Structure & Liquidity (Where)

This layer identifies *reaction zones* — areas where price tends to pause, reverse, or accelerate.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[Structure Map (SML)](sp-sml-structure-liquidity.md)** | Auto-maps swing structure, liquidity grabs, and breaks of structure. | BOS/CHOCH levels can be visualized without clutter. |
| **[SD Zones (Pro)](sp-sdzones-pro.md)** | Detects and maintains Supply/Demand zones with anchored precision. | High-probability reaction zones for entries can be marked. |
| **[Key Anchors (Key Levels Suite)](sp-key-levels-suite.md)** | Combines HTF, session, and VWAP anchors. | Confluence between intraday and higher-timeframe levels can be identified. |

> **Tip:** Structure defines the *map* — not the signal. Can be combined with Bias + Participation for context.

---

## ⏱️ Step 4 — Refine Timing (When)

Timing modules zoom in to catch turns, continuations, and exhaustion points — where opportunity meets precision.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[RSI Triad Confirm](sp-rsi-triad-confirm.md)** | 3-speed RSI confirming internal strength or divergence. | Whether pullbacks have reset momentum can be confirmed. |
| **[Context Stoch (SRSI+)](sp-contextstoch-rsi.md)** | Context-aware Stochastic RSI avoiding false reversals. | Micro-rotation strength within a regime can be gauged. |
| **[Leg Timer (TD9 + Clean Squeeze)](sp-ltf.md)** | Counts exhaustion legs (TD9) and squeeze compressions. | Exhaustion or early squeeze breakouts can be spotted. |
| **[Reversal Engine (EC Pro)](sp-ec-pro.md)** | Event-centric detection of tops/bottoms with PilotLine + NanoFlows. | Potential reversal events can be identified and alerted on. |
| **[Reversal Candlestick Structure (RCS)](sp-rcs-reversal-structure.md)** | Highlights high-quality reversal candle patterns. | Visual confirmation that a turn is forming can be observed. |

> Timing signals should be combined only when **Bias + Participation** agree. The regime shouldn't be counter-traded unless exhaustion is being faded with confirmation.

---

## 🧩 Step 5 — Filter, Scan, & Confirm (Meta Tools)

Meta modules are the *air-traffic control*: they keep signals honest and scalable.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[Regime Box (Regime & Volatility Filter)](sp-regime-vol-filter.md)** | Defines trend & volatility regimes (SQZ / EXP / OK). | Setups can be filtered by volatility state. |
| **[Screener (Screener Table)](sp-screener-sfx.md)** | On-chart table scanning multiple symbols for signals. | Markets can be scanned for aligned conditions in one view. |

> **Suggested Setup:** Regime Box can be kept always on; it's the Suite's master gatekeeper.

---

## 🛠️ Step 6 — Build Your Flight Deck

1. **Base template can be added**
   - One chart layout with Bias, Participation, Structure, Timing, Meta layers stacked vertically or side-by-side.
2. **Workspace can be saved** for reuse across pairs or markets.
3. **Alerts can be enabled** only on *close-confirmed* events:
   - Regime Box → `EXP ON`, `SQZ ON`, `LONG OK`, `SHORT OK`
   - Reversal Engine → `BDN`, `CAP`, `WRN`
   - Leg Timer → `TD9`, `Squeeze`
4. **Optional:** The **[Screener](sp-screener-sfx.md)** can be used for multi-symbol scanning.

---

## 🧭 Step 7 — Follow the Suite Workflow

> **Bias → Participation → Structure → Timing → Meta**

1. **Trend direction can be confirmed** (Bias).
2. **Conviction can be validated** (Participation).
3. **Reaction zones can be located** (Structure).
4. **Entry signal can be waited for** (Timing).
5. **By regime can be filtered** (Meta).
6. **Alert / Automate / Log**.

Each module is deterministic, non-repainting, and uses anchored visuals — everything finalizes at candle close.

---

## 📚 Continue Learning

- **[Suite Workflow (Reference)](ref-workflow.md)** — detailed logic behind each stage.
- **[TradingView Alerts Guide](how-to-alerts.md)** — step-by-step alert setup.
- **[Glossary](ref-glossary.md)** — all suite terminology in plain English.
- **[Screener Quick Guide](how-to-screener.md)** — on-chart scanning can be set up.

---

> **SignalPilot Labs Inc. © 2025**
> Educational / Research use only — no financial advice.

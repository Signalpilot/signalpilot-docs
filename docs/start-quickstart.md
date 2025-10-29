---
title: "Quick Start — How to Fly the SignalPilot Suite"
summary: "A guided setup and full-suite workflow showing how Bias, Participation, Structure, Timing, and Meta tools connect."
---

# 🚀 Quick Start — SignalPilot Suite Overview

Welcome aboard the **SignalPilot Suite** — a cohesive system built to make your charts cleaner, smarter, and faster to read.  
This guide shows you how to install, understand, and combine all modules step-by-step.

---

## 🧭 Step 1 — Establish Bias (Momentum Layer)

The Bias group defines **trend direction and strength**.  
Think of it as your market compass.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[Momentum Regime (MACD+)](spp-macd-plus.md)** | Detects potential regime flips and momentum phases using adaptive color zones. | Confirm whether the current leg is impulsive or corrective. |
| **[Trend Stack (EMA 50/100/200 Pro)](sp-ema-trio-pro.md)** | Tracks medium- and long-term trend alignment with GC/DC and pullback logic. | Identify “stacked” trending conditions and disciplined re-entries. |
| **[Momentum Matrix (Panel Pro)](sp-oscillator-matrix.md)** | Aggregates multiple oscillators into a single normalized panel. | Quick visual scan of momentum strength across timeframes. |

> **Tip:** If Bias modules disagree, trade lighter or wait for alignment.  

---

## 💧 Step 2 — Measure Participation (Volume / Flow)

Bias tells *where* the market wants to go; Participation tells *who’s actually moving it*.  
These modules show conviction and flow strength.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[Participation (PVA Overlay)](sp-pva-overlay.md)** | Colors candles by relative volume and flow bursts. | Spot unusual volume during key price moves. |
| **[Volume Pulse (PVA Volume)](sp-pva-volume.md)** | Plots RVOL and Z-score spikes to highlight activity surges. | Confirm when volume validates a breakout. |
| **[Flow Balance (OBV Pro)](sp-obv-pro.md)** | Smoothed On-Balance-Volume with FlipGuard filtering. | Detect silent accumulation or distribution ahead of price. |

> **Rule of thumb:** Momentum without volume = low conviction. Volume without structure = chaos.

---

## 🏗️ Step 3 — Map Structure & Liquidity (Where)

This layer identifies *reaction zones* — areas where price tends to pause, reverse, or accelerate.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[Structure Map (SML)](sp-sml-structure-liquidity.md)** | Auto-maps swing structure, liquidity grabs, and breaks of structure. | Visualize BOS/CHOCH levels without clutter. |
| **[SD Zones (Pro)](sp-sdzones-pro.md)** | Detects and maintains Supply/Demand zones with anchored precision. | Mark high-probability reaction zones for entries. |
| **[Key Anchors (Key Levels Suite)](sp-key-levels-suite.md)** | Combines HTF, session, and VWAP anchors. | Identify confluence between intraday and higher-timeframe levels. |

> **Tip:** Structure defines the *map* — not the signal. Combine with Bias + Participation for context.

---

## ⏱️ Step 4 — Refine Timing (When)

Timing modules zoom in to catch turns, continuations, and exhaustion points — where opportunity meets precision.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[RSI Triad Confirm](sp-rsi-triad-confirm.md)** | 3-speed RSI confirming internal strength or divergence. | Confirm whether pullbacks have reset momentum. |
| **[Context Stoch (SRSI+)](sp-contextstoch-rsi.md)** | Context-aware Stochastic RSI avoiding false reversals. | Gauge micro-rotation strength within a regime. |
| **[Leg Timer (TD9 + Clean Squeeze)](sp-ltf.md)** | Counts exhaustion legs (TD9) and squeeze compressions. | Spot exhaustion or early squeeze breakouts. |
| **[Reversal Engine (EC Pro)](sp-ec-pro.md)** | Event-centric detection of tops/bottoms with PilotLine + NanoFlows. | Identify and alert on potential reversal events. |
| **[Reversal Candlestick Structure (RCS)](sp-rcs-reversal-structure.md)** | Highlights high-quality reversal candle patterns. | Visual confirmation that a turn is forming. |

> Combine Timing signals only when **Bias + Participation** agree. Don’t counter-trade the regime unless you’re fading exhaustion with confirmation.

---

## 🧩 Step 5 — Filter, Scan, & Confirm (Meta Tools)

Meta modules are your *air-traffic control*: they keep signals honest and scalable.

| Module | Purpose | Typical Use |
|:--|:--|:--|
| **[Regime Box (Regime & Volatility Filter)](sp-regime-vol-filter.md)** | Defines trend & volatility regimes (SQZ / EXP / OK). | Filter setups by volatility state. |
| **[Screener (Screener Table)](sp-screener-sfx.md)** | On-chart table scanning multiple symbols for signals. | Scan markets for aligned conditions in one view. |

> **Suggested Setup:** Keep Regime Box always on; it’s the Suite’s master gatekeeper.

---

## 🛠️ Step 6 — Build Your Flight Deck

1. **Add your base template**  
   - One chart layout with Bias, Participation, Structure, Timing, Meta layers stacked vertically or side-by-side.
2. **Save workspace** for reuse across pairs or markets.
3. **Enable alerts** only on *close-confirmed* events:
   - Regime Box → `EXP ON`, `SQZ ON`, `LONG OK`, `SHORT OK`
   - Reversal Engine → `BDN`, `CAP`, `WRN`
   - Leg Timer → `TD9`, `Squeeze`
4. **Optional:** Use the **[Screener](sp-screener-sfx.md)** for multi-symbol scanning.

---

## 🧭 Step 7 — Follow the Suite Workflow

> **Bias → Participation → Structure → Timing → Meta**

1. **Confirm trend direction** (Bias).  
2. **Validate conviction** (Participation).  
3. **Locate reaction zones** (Structure).  
4. **Wait for entry signal** (Timing).  
5. **Filter by regime** (Meta).  
6. **Alert / Automate / Log**.

Each module is deterministic, non-repainting, and uses anchored visuals — everything finalizes at candle close.

---

## 📚 Continue Learning

- **[Suite Workflow (Reference)](ref-workflow.md)** — detailed logic behind each stage.  
- **[TradingView Alerts Guide](how-to-alerts.md)** — step-by-step alert setup.  
- **[Glossary](ref-glossary.md)** — all suite terminology in plain English.  
- **[Screener Quick Guide](how-to-screener.md)** — setting up on-chart scanning.

---

> **SignalPilot Labs Inc. © 2025**  
> Educational / Research use only — no financial advice.

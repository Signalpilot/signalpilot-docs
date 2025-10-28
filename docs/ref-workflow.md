---
title: "SignalPilot Suite Workflow"
summary: "How to combine Bias, Participation, Structure, Timing, and Meta/Tools into one clean trading workflow."
---

# 🚦 SignalPilot Suite Workflow

Use the suite like a flight checklist. Read **bias**, confirm **participation**, map **structure**, time the **entry**, and keep everything honest with **meta/tools**.

---

## 1) 🧭 Bias / Momentum — set directional context
- **[Momentum Regime (MACD+)](spp-macd-plus.md)** → trend regime & momentum shifts  
- **[Trend Stack (EMA 50/100/200 Pro)](sp-ema-trio-pro.md)** → stacked EMA clarity  
- **[Momentum Matrix](sp-oscillator-matrix.md)** → normalized oscillator dashboard

**Outcome:** Long- or short-leaning bias. No trade yet.

---

## 2) 💧 Participation (Volume / Flow) — check conviction
- **[Participation (PVA Overlay)](sp-pva-overlay.md)** → volume-aware candles  
- **[Volume Pulse (PVA Volume)](sp-pva-volume.md)** → RVOL & spike detection  
- **[Flow Balance (OBV Pro)](sp-obv-pro.md)** → net pressure (accumulation/distribution)

**Outcome:** You know whether real fuel is behind price.

---

## 3) 🏗️ Structure / Levels — mark the playing field
- **[Structure Map (SML)](sp-sml-structure-liquidity.md)** → clean structure + liquidity hints  
- **[SD Zones](sp-sdzones-pro.md)** → supply/demand blocks that don’t wobble  
- **[Key Anchors](sp-key-levels-suite.md)** → HTF/session/VWAP anchors

**Outcome:** Clear zones to react/avoid; where a move “should” pause or flip.

---

## 4) ⏱️ Timing — pull the trigger (or wait)
- **[RSI Triad Confirm](sp-rsi-triad-confirm.md)** → fast/base/slow confluence  
- **[Context Stoch (SRSI+)](sp-contextstoch-rsi.md)** → rotation timing w/ less noise  
- **[Leg Timer (TD9 + Clean Squeeze)](sp-ltf.md)** → exhaustion/squeeze  
- **[Reversal Engine (EC Pro)](sp-ec-pro.md)** → event-centric tops/bottoms (PilotLine/NanoFlows)

**Outcome:** Entry/exit timing with fewer fakeouts.

---

## 5) 🧩 Meta / Tools — keep signals honest
- **[Regime Box](sp-regime-vol-filter.md)** → trend/volatility gate + SQZ/EXP  
- **[Screener (SFX Table)](sp-screener-sfx.md)** → surface clean setups fast

**Outcome:** Fewer B-grade trades; easier scanning.

---

## Quick Playbooks

**Trend continuation**
1) Bias says up (🧭),  
2) Participation rising (💧),  
3) Retest an HTF anchor (🏗️),  
4) Timing gives entry (⏱️),  
5) Regime Box not in squeeze (🧩).  
→ Take the continuation; manage at next structure.

**Reversal attempt**
1) Bias fading / regime shift (🧭),  
2) Flow diverges or volume spike exhausts (💧),  
3) Reaction at SD zone (🏗️),  
4) Reversal Engine fires or TD9 completes (⏱️),  
5) Regime Box flips after EXP (🧩).  
→ Scale in/out around structure; respect invalidation.

---

## Alerts (suite rhythm)
- Use **close-confirmed** alerts only.
- Typical core alerts:
  - Regime Box: **SQZ ON**, **EXP ON**, **LONG/SHORT OK**
  - Reversal Engine: **OUT/CAP/WARN** families
  - Leg Timer: **TD9** + **Squeeze**
  - Participation: **Volume Spike / RVOL**
  - Structure: **Zone touch / break** (if enabled)

---

## Notes
- Educational only. Signals finalize at bar close; HTF fetches use `lookahead_off`.
- Any market/timeframe; adjust risk and expectations by TF.

# Quick Start — 5‑Minute Setup

Trade clarity, not hope. This guide gets you from a blank chart to **bar‑close, non‑repainting** alerts using the SignalPilot path:

**Bias → Participation → Structure → Timing**

> Educational use only — not financial advice. All alerts fire **Once per bar close**.

---

## 0) Prerequisites

- TradingView account (web or desktop).
- Suite access (invite‑only). After purchase, accept the TradingView invite by username.
- Use a clean dark chart for screenshots and consistency.

---

## 1) Pick your timeframe

Choose one **trading TF** and one **context TF**:

- **Intraday:** *15m* (trade) + *1h* (context)  
- **Swing:** *1h* (trade) + *D* (context)

Stay consistent; the suite adapts across TFs.

---

## 2) Add the core modules (minimal, high signal)

### A) Bias
- **SP: Momentum Regime (MACD+)** — *separate pane*  
  Add → `Indicators → Invite‑only → Momentum Regime`  
  Keep defaults.  
  → Learn more: [spp-macd-plus.md](spp-macd-plus.md)

*(Optional)* **SP: Regime Box (Regime & Volatility Filter)** — *overlay* (trend boxes + SQZ/EXP pulses).  
→ [sp-regime-vol-filter.md](sp-regime-vol-filter.md)

### B) Participation
- **SP: Participation (PVA Overlay)** — *overlay*  
  Single decisive **BULL/BEAR** when flow agrees. Keep defaults.  
  → [sp-pva-overlay.md](sp-pva-overlay.md)

*(Optional)* **SP: Volume Pulse (PVA Volume)** — *volume pane* (Z‑Vol, RVOL, CVD, CLX/ABS).  
→ [sp-pva-volume.md](sp-pva-volume.md)

*(Optional)* **SP: Flow Balance (OBV Pro)** — *pane* (spike‑clipped OBV with ±2σ + divs).  
→ [sp-obv-pro.md](sp-obv-pro.md)

### C) Structure
- **SP: Key Anchors (Key Levels Suite)** — *overlay*  
  Start with **Daily High/Low** only.  
  → [sp-key-levels-suite.md](sp-key-levels-suite.md)

*(Optional)* **SP: Structure Map (SML)** — BOS/CHOCH, EQH/EQL, sweeps, OB/Breakers, FVG.  
→ [sp-sml-structure-liquidity.md](sp-sml-structure-liquidity.md)

*(Optional)* **SP: SD Zones (SDZones Pro)** — compact supply/demand zones.  
→ [sp-sdzones-pro.md](sp-sdzones-pro.md)

### D) Timing (pick ONE to start)
- **SP: RSI Triad Confirm (SPRSI‑U)** — graded divergences + triad regime.  
  → [sp-rsi-triad-confirm.md](sp-rsi-triad-confirm.md)  
**or**  
- **SP: Context Stoch (SRSI+)** — context‑aware Stoch RSI.  
  → [sp-srsi-plus.md](sp-srsi-plus.md)

*(Optional power timing)*  
- **SP: Leg Timer — TD9 + Clean Squeeze**  
  → [sp-ltf.md](sp-ltf.md)

---

## 3) Add bar‑close alerts (copy this pattern)

Create each via **Right‑click chart → Add alert…**  
**Condition:** pick the indicator → **Event** → **Options:** select **Once per bar close**.

### Must‑have (start here)
- **Participation (PVA Overlay)** → `SP:PVA BULL`, `SP:PVA BEAR`  
  *(Optional EVR):* `SP:PVA CLX`, `SP:PVA ABS`  
  → [sp-pva-overlay.md](sp-pva-overlay.md)

- **Momentum Regime (MACD+)** → use the **QUALIFIED** cross events from the module  
  → [spp-macd-plus.md](spp-macd-plus.md)

- **Timing (choose one)**  
  - **RSI Triad Confirm (SPRSI‑U)** → `SP:Confluence Long`, `SP:Confluence Short`  
    → [sp-rsi-triad-confirm.md](sp-rsi-triad-confirm.md)  
  - **Context Stoch (SRSI+)** → `SP‑SRSI Long`, `SP‑SRSI Short`  
    → [sp-srsi-plus.md](sp-srsi-plus.md)

### Nice‑to‑have (add when comfortable)
- **Reversal Engine (EC Pro)** → `IGN`, `OUT`, `CAP`  
  → [sp-ec-pro.md](sp-ec-pro.md)

- **Regime Box** → `EXP ON`, `LONG OK`, `SHORT OK`  
  → [sp-regime-vol-filter.md](sp-regime-vol-filter.md)

- **Trend Stack (EMA 50/100/200 Pro)** → `PB_LONG`, `PB_SHORT`, `GOLDEN_CROSS`, `DEATH_CROSS`, `200_RECLAIM`, `200_REJECT`  
  → [sp-ema-trio-pro.md](sp-ema-trio-pro.md)

*(Extras if you use them)*  
- **Reversal Candlestick Structure (SP:RCS)** → pick tags (e.g., `BE`, `BuE`, `HM`, `SS`)  
  → [sp-rcs-reversal-structure.md](sp-rcs-reversal-structure.md)

---

## 4) Trade the plan (how the stack works together)

1) **Bias** — *Momentum Regime* side/slope set the backdrop. *Regime Box* confirms trend/vol state.  
2) **Participation** — Wait for **BULL/BEAR** from *Participation* (or CLX/ABS context).  
3) **Structure** — Act **near Key Anchors / SD Zones** or with *Structure Map* confirmations (BOS/CHOCH, breakers).  
4) **Timing** — Take **RSI Triad Confirm** or **Context Stoch** in the same direction; use *Leg Timer* for TD9/squeeze context.  
5) **Risk** — Size off ATR or recent swing; all alerts are **bar‑close** by design.

Full workflow: [ref-workflow.md](ref-workflow.md)

---

## 5) Dashboard view (Screener)

Use **SP: Screener (Screener Table)** on a separate empty chart to triage up to 8 rows (symbol × timeframe).  
- Fill rows and keep **Accuracy+** defaults.  
- Open the chart for rows with a fresh ↑/↓ and strong score.  
→ [sp-screener-sfx.md](sp-screener-sfx.md)

---

## 6) Webhooks (route alerts to a bot)

Check **Webhook URL** in the alert dialog and paste your endpoint. Use this message:

```json
{"source":"SignalPilot","indicator":"{{indicator}}","event":"{{alert_name}}","symbol":"{{ticker}}","tf":"{{interval}}","time":"{{timenow}}","price":{{close}}}

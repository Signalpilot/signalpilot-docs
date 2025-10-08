# SP‑SRSI+ — Stochastic RSI Pro (SignalPilot)

**Non‑repainting, context‑aware Stoch RSI** that times entries only when trend, volume, volatility and structure align. Emits clean bar‑close **Long/Short** alerts plus a single **Confluence Score** for scans.

> Part of the [SignalPilot Trading Suite](https://www.signalpilot.io/) — “See the bias, read the pressure, time the move.” Educational use only. No financial advice. :contentReference[oaicite:3]{index=3}

---

## Quick start

1. Add the script to your chart (invite‑only or from source).
2. Create alerts:
   - **Condition:** `SP‑SRSI Long` → message: `SRSI_LONG`
   - **Condition:** `SP‑SRSI Short` → message: `SRSI_SHORT`
3. (Optional) Route alerts to a bot/webhook. Use the message text to branch logic.

**Works on:** Crypto, FX, indices, equities, commodities. Any timeframe. :contentReference[oaicite:4]{index=4}

---

## What’s inside

### Core
- **Volatility‑adaptive Stoch RSI** (`ATR_LEN`, `ADAPT_STRENGTH`)  
  Keeps %K/%D responsive in trends and steadier in chop.
- **Dynamic %K zones** (BB on %K with soft edges + fallback)  
  Prevents false “edge” signals when bands saturate.
- **HTF bias (non‑repainting)**  
  HTF %K/%D computed with `request.security(..., lookahead_off)` and **frozen until the HTF bar closes** (`htfClosed`) to avoid repaint.
- **Quality crosses**
  - Confirms **location** (near OB/OS), **separation** (%K vs %D), **slope**, **distance from band** and **minimum bars in extreme**.
- **Confluence Score (0–120)**
  - **Weights:** HTF (`W_HTF`), **PVA** participation (`W_PVA`), **OBV** (`W_OBV`), **MACD** (`W_MACD`), **RSI baseline** (`W_RSI`), **SDZ** proximity (`W_SDZ`), **EMA baseline** (`W_BASE`).
  - **Adaptive need:** ADX‑aware threshold with clamp + **FlipGuard** decay to enforce dwell time after flips.
- **Structure aware**
  - **SDZ** (Supply/Demand) pivots (left/right legs) and distance‑graded penalties near opposing zones; optional short‑side boosters.

### Outputs
- **On‑chart:** %K/%D, adaptive OB/OS bands, cloud/fill, HTF shade, ▲/▼ signal markers.
- **Alerts:**  
  - `SP‑SRSI Long` → `SRSI_LONG`  
  - `SP‑SRSI Short` → `SRSI_SHORT`
- **Hidden series (screener‑ready):**  
  `SRSI_scoreB`, `SRSI_scoreS`, `SRSI_k`, `SRSI_d`, `SRSI_zoneL`, `SRSI_zoneU`, `SRSI_obvSlope`, `SRSI_macdHist`, `SRSI_rsiBase`, `SRSI_dynConfMin`, `SRSI_sig` (1 / 0 / −1).  
  Suite booleans: `SP:SRSI+ | LONG (bool)`, `SHORT (bool)`, `HTF Bull/Bear`, `PVA pass`, `MACD Bull/Bear`, `OBV Bull/Bear`, `NearSupply`, `NearDemand`.

> **Plot budget:** 28 total plots (including hidden), below TradingView’s 64‑plot limit.

---

## Signal logic (high level)

**Entry prerequisites (bar‑close only):**

**LONG**
- Qualified `%K ↑ %D` cross **from/near** lower band (dynamic), with min extreme bars, min band distance, min %K slope & K–D separation.
- **Confluence Score ≥ Adaptive Need**, where:  
  `scoreB = HTF + PVA + OBV(bull) + MACD(bull) + RSI>50 + SDZ factor + Baseline(up)`  
- **Cooldown** respected (bars since last Long ≥ `MIN_BARS_BETWEEN`).

**SHORT**
- Qualified `%K ↓ %D` cross **from/near** upper band with the same quality gates.  
- `scoreS = HTF + PVA + OBV(bear) + MACD(bear) + RSI<50 + SDZ factor (+ near‑supply boost) − mid‑band penalty`  
- Extra checks: **HTF slope (optional), MACD not rising, OBV not rising, optional bear‑impulse candle, RR space vs last Demand**.  
- Cooldown enforced.

**Adaptive Need (both sides)**
- Base need (≈50) is shifted by **ADX regime** (trend vs chop), **Auto‑Balance** (reduces side bias based on history), **FlipGuard** (temporary need boost against immediate flip‑back), and then **clamped** to `[NEED_CLAMP_LOW, NEED_CLAMP_HIGH]`.

**Non‑repainting contract**
- **All entries confirmed at bar close** (`barstate.isconfirmed`).  
- **HTF gates** use `lookahead_off` and **freeze until HTF close**.  
- **No future‑bar pivots** in decisions; SDZ uses last **confirmed** pivots only.

---

## Autopilot defaults (no inputs in UI)

The script self‑configures via `var` constants (no user inputs), with conservative defaults for most timeframes:

- **Theme & visuals:** dark theme, HTF shading, band cloud, extreme shading, %K/%D fill.
- **StochRSI stack:** `RSI_LEN=14`, `STOCH_LEN=14`, `K_LEN=2`, `D_LEN=2`, `MA_TYPE="EMA"`.
- **Dynamic zones:** `ZONE_BBLEN=100`, `ZONE_MULT=1.0`, soft edges & fallback.
- **HTF:** auto: intraday → `60`, daily+ → `W`. Gate mode: `%K > %D` bias.
- **Adaptive smoothing:** `ATR_LEN=14`, `ADAPT_STRENGTH=0.40`.
- **Confluence:** `USE_PVA`, `USE_OBV`, `USE_MACD`, `USE_RSI_BASE`, `USE_SDZ`, EMA200 baseline.
- **ADX regime:** `ADX_LEN=14`, trend/chop thresholds 25/15.
- **Flip control:** `FG_LEN=8`, `FG_MAX=6.0`; **Auto‑Balance** window 250.
- **Short boosters:** near‑supply boost on; MACD reinforce on; others conservative/off.
- **Cooldown:** `MIN_BARS_BETWEEN=3`.

> You can fork and edit constants to suit your venue/TF profile. Keep non‑repaint practices intact.

---

## Integration

### Alerts → Webhooks
Configure two alerts and route to your endpoint. Use the message for branching:

```json
// Example payload
{ "ticker":"{{ticker}}", "tf":"{{interval}}", "ts":"{{timenow}}", "sig":"SRSI_LONG" }

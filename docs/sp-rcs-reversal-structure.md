# SP: Reversal Candlestick Structure (SP:RCS)

Deterministic, non‑repainting reversal prints you can scan and alert across any market and timeframe. Scores 16 classic patterns by context, gates with FlipGuard, and emits at most one bull and one bear per bar.

> SignalPilot tools are educational only — not financial advice. See Terms. 

---

## Quick start

1. **TradingView → Pine v6**: Copy `SP_RCS.pine` into the Pine Editor and click **Add to chart**.  
2. **Inputs**: Leave defaults, or start with `Threshold=80`, `Cooldown=20`, `FlipGuard Decay=5`.  
3. **Alerts**: Choose any `SP:RCS | <TAG>` condition and set **Once per bar close**.  
4. **Workflow**: Use RCS for timing around your existing bias (e.g., EC Pro / MACD+) and levels.

---

## What it does

- **Detects** 16 reversal structures (bull & bear):
  - Bullish: Hammer (`HM`), Inverted Hammer (`IH`), Bullish Engulfing (`BuE`), Rising 3 (`R3`), Three White Soldiers (`3WS`), Morning Star (`MS`), Bullish Harami (`BuH`), Tweezer Bottom (`TB`).
  - Bearish: Hanging Man (`HMN`), Shooting Star (`SS`), Bearish Engulfing (`BE`), Falling 3 (`F3`), Three Black Crows (`3BC`), Evening Star (`ES`), Bearish Harami (`BeH`), Tweezer Top (`TT`).
- **Scores** each candidate to 0–100:
  - Base weight per pattern  
  - EMA distance normalized by ATR  
  - RSI tilt relative to 50  
  - Trend side check vs EMA
- **Gates & selects**:
  - `Threshold` must be met (default 80)  
  - **FlipGuard**: `Cooldown` (same‑side) + `Flip Decay` (opposite‑side)  
  - **Exclusivity**: priority list with score tiebreak ⇒ max one bull + one bear per bar
- **Emits** anchored, wobble‑free labels at price with a dynamic ATR% or tick offset.
- **Alerts**: 16 close‑confirmed alert conditions (one per tag).

---

## Inputs (with defaults)

**Bullish toggles**  
`Hammer` `Inverted Hammer` `Bullish Engulfing` `Rising 3` `3 White Soldiers` `Morning Star` `Bullish Harami` `Tweezer Bottom` *(all ON)*

**Bearish toggles**  
`Hanging Man` `Shooting Star` `Bearish Engulfing` `Falling 3` `3 Black Crows` `Evening Star` `Bearish Harami` `Tweezer Top` *(all ON)*

**Reversal logic**  
- `Trend Length` *(14)* — EMA/RSI length used for context  
- `Threshold (0–100)` *(80)* — minimum score to print  
- `Same‑side Cooldown (bars)` *(20)* — dwell time after a bull/bear print  
- `FlipGuard Decay (bars)` *(5)* — minimum bars after an opposite‑side flip

**Style**  
- `Bull Text Color` *(teal)*, `Bear Text Color` *(red)*  
- `Label background transparency` *(100)*  
- `Text Size` *Tiny/Small/Normal/Large* *(Tiny)*  
- `Offset Mode` *Dynamic ATR% / Ticks* *(Dynamic ATR%)*  
- `ATR Offset (%)` *(0.8%)*  
- `Tick Offset (fallback/min)` *(4)*  
- `Marker Size` *None/Tiny/Small/Normal* *(Small)*

---

## Visuals & alerts

- **Labels** (const text at price): `HM`, `IH`, `BuE`, `R3`, `3WS`, `MS`, `BuH`, `TB`, `HMN`, `SS`, `BE`, `F3`, `3BC`, `ES`, `BeH`, `TT`
- **Dot markers** (optional): below bar for bull, above bar for bear
- **Alert conditions** (close‑confirmed):
  - `SP:RCS | HM`, `SP:RCS | IH`, `SP:RCS | BuE`, `SP:RCS | R3`, `SP:RCS | 3WS`, `SP:RCS | MS`, `SP:RCS | BuH`, `SP:RCS | TB`
  - `SP:RCS | HMN`, `SP:RCS | SS`, `SP:RCS | BE`, `SP:RCS | F3`, `SP:RCS | 3BC`, `SP:RCS | ES`, `SP:RCS | BeH`, `SP:RCS | TT`

**Webhook tip (JSON)**: In TradingView’s alert UI, set message to a JSON envelope, e.g.
```json
{"tool":"SP:RCS","tag":"{{alert_message}}","ticker":"{{ticker}}","tf":"{{interval}}","time":"{{time}}","close":{{close}}}

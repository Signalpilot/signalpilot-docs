# SP-Reversal Engine (EC Pro)
**Spot likely tops & bottoms. Act on clean, close‑confirmed signals.**  
Works on any market & timeframe in TradingView. Signals **lock on candle close** (no repaint).  
Profiles are **locked**—you don’t have to tune anything.

---

## What you’ll see on the chart
- **Five tags**: `TD`, `IGN`, `OUT`, `CAP`, `WRN`
- **Regime bars** (background bias): green = leaning up, red = leaning down
- **Pilot Line & ribbon**: smooth trend line with a small “comfort zone”
- **NanoFlow** crosses: tiny `+` under/over candles (micro strength/weakness)
- **Breakout arrows**: triangles on strong breakouts/breakdowns

> Tags are **mutually exclusive**; only one can print per bar (priority: **WRN > CAP > OUT > IGN > TD**).

---

## What each tag means (and what most traders do)
| Tag | Plain English | Typical action |
| --- | --- | --- |
| **IGN** (Ignition) | Up move starting after a base | Consider **entering long** / adding to longs |
| **OUT** (Bear Reversal) | Down move starting after a top | Consider **exiting longs** / **entering short** |
| **CAP** (Cap) | Price likely topping soon | **Take profit** / **avoid fresh longs** (aggressive may scout shorts) |
| **WRN** (Warn) | Early caution near highs | **Tighten stops**, be selective |
| **TD** (Touchdown) | Possible bottom forming | **Wait for IGN** to confirm before buying |

**Rule #1:** Act **only after the candle closes**. That’s when the tag becomes final.

---

## 90‑second setup
1. Add the invite‑only script: **“Reversal Engine (EC Pro)”** on TradingView.  
2. Leave everything as‑is (there are **no settings** to change).  
3. Create **two core alerts** (choose **Once Per Bar Close**):
   - `SP:RE | Ignition (Bull Rev)` → consider **long**
   - `SP:RE | OUT (Bear Rev)` → consider **short** / **exit longs**

_Add later if you want extra heads‑up_:  
`SP:RE | Cap (Hi‑Sens Top)` • `SP:RE | Warn (Early Top)` • Regime/PL/NanoFlow alerts (see list below).

> If your alert picker still shows **SP:EC** names, you’re on an older build. Re‑add the script to get the **SP:RE** alerts.

---

## How to read the extras (no jargon)
### Regime bars (bias)
- Green = market leaning **up**, Red = leaning **down**.  
- Flips only when evidence **persists** (we use a guard so it won’t flicker).

**Use it:** Prefer **longs** in green regime and **shorts** in red regime.  
Alerts: `SP:RE | Regime Flip Up` • `SP:RE | Regime Flip Down`.

### Pilot Line (trend line) & ribbon
- Above a rising Pilot Line = healthier for **longs**.  
- Below a falling Pilot Line = healthier for **shorts**.  
- Reclaims/losses of the line often mark momentum changes.

Alerts: `SP:RE | PL Reclaim` • `SP:RE | PL Loss` • `PL Slope Turn Up/Down`.

### NanoFlow crosses (the tiny “+”)
- `+` **below** price = micro **strength** (nice add‑on for longs).  
- `+` **above** price = micro **weakness** (nice add‑on for shorts).  
Alerts: `SP:RE | NanoFlow Up` • `SP:RE | NanoFlow Down`.

---

## Two simple playbooks

### Long (trend up)
1. Wait for **IGN** (on close).  
2. Prefer if **regime is green** and price is **above** the Pilot Line (ribbon rising helps).  
3. Bonus: **NanoFlow “+” below price**.  
4. If **OUT** prints after you’re in, strongly consider **exiting**.

### Short (trend down)
1. Wait for **OUT** (on close).  
2. Prefer if **regime is red** and price is **below** the Pilot Line (ribbon falling helps).  
3. Bonus: **NanoFlow “+” above price**.  
4. If **IGN** prints after you’re in, strongly consider **exiting**.

_Timeframe tips:_  
**15m / 1h** → easiest to learn; **5m** → scalps (tighter top warnings); **2h/4h/1D** → swing context.

---

## Why you might *not* see CAP/WRN during a strong run
When the trend is healthy (green regime, rising Pilot Line, decent volume), the engine **avoids nagging warnings**. On higher timeframes (2h+), a soft caution is built‑in and prints **WRN** only when there’s real reason (high Stoch, recent top structure or small extension, plus a bearish nudge).  
Bottom line: **fewer but better** warnings on higher TFs; more frequent on 5m/15m.

---

## Common questions — **OUT**
**Q1) OUT fired but price popped a bit higher—wrong?**  
No. OUT means “**the roll has started**,” not “that candle was the exact top.” Retests happen. Many wait for a **PL Loss** or a **lower high** to size up.

**Q2) CAP vs OUT—what’s the difference?**  
**CAP** is a likely top (great for taking profits / avoiding new longs).  
**OUT** is the **confirmed roll** and is the short/exit trigger for many.

**Q3) Should I always exit on OUT?**  
It’s a strong cue—especially if **regime is red** or **PL slope turns down**. If you keep a portion, consider tighter stops above the swing high or above PL.

**Q4) OUT in a strong uptrend?**  
Respect it, but check context: quick **PL Reclaim** with green regime can mean “just a pullback.” Some traders wait for **Regime Flip Down** to lean harder.

**Q5) OUT during thin volume or news spikes—trust it?**  
Volume filters help, but news can whipsaw. If unsure, wait for **close below PL** or a **lower high** before sizing up.

**Q6) I saw OUT then IGN soon after—which wins?**  
Follow the **newest close‑confirmed tag**, and re‑check **regime** and **Pilot Line**. If price reclaimed PL and regime turned green, the up‑move likely resumed.

---

## Alerts you can set (exact names)
- **Core:** `SP:RE | Ignition (Bull Rev)` • `SP:RE | OUT (Bear Rev)`  
- **Tops / caution:** `SP:RE | Cap (Hi‑Sens Top)` • `SP:RE | Warn (Early Top)`  
- **Trend & bias:** `SP:RE | PL Reclaim` • `SP:RE | PL Loss` • `SP:RE | PL Slope Turn Up/Down` • `SP:RE | Regime Flip Up/Down`  
- **Micro momentum:** `SP:RE | NanoFlow Up/Down`  
- **Base:** `SP:RE | Touchdown (Base)`

Set all alerts to **Once Per Bar Close**.

---

## What’s under the hood (plain English)
- A smooth **Pilot Line** with a small ribbon shows trend and comfort zone.  
- A **regime vote** (trend, price vs line, slope) sets the green/red bias, with a guard so it doesn’t flicker.  
- Momentum + structure + volume = **TD/IGN/OUT/CAP/WRN**.  
- Everything is **close‑confirmed** for **non‑repainting** alerts.  
- Profiles are **locked per timeframe** (you don’t need to tweak anything).

---

## Safety
This is an educational tool, **not** financial advice. Always use your own risk management.

## Support
When you open an issue, include **symbol**, **timeframe**, the **tag** (IGN/OUT/etc.), and a **screenshot at the close** of the bar that printed it.

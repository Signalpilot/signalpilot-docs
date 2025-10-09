# SP:Structure Map (SML) — TradingView Indicator
*A clean, anchored map of trend changes and high‑interest zones. No repaint.*

Website: https://www.signalpilot.io  
Platform: TradingView (Pine v6)  
Markets: Crypto • Forex • Stocks • Futures (any symbol, any timeframe)

---

## What it does (in plain English)

Structure Map (SML) draws the key things most traders try to draw by hand:

- **Trend breaks & flips** – when structure continues or changes (BOS / CHOCH).
- **Equal Highs / Equal Lows** – flat areas price often tags.
- **Sweeps** – quick “stop‑runs” that poke above/below a swing and snap back.
- **Gaps** (FVGs) – holes left by fast moves that price often refills.
- **Order Blocks** – strong launch zones.  
  - If one fails, SML marks it as a **Breaker** (it flips role).

It’s designed to be **clean, anchored, and non‑repainting** so what you saw at candle close stays that way.  
Use SML as a **map** of likely reaction areas—not as a buy/sell button.

---

## TL;DR Setup (2 minutes)

1. **Add SML to your chart.**  
2. Open **Settings → SP:Display → SP:Mode** and choose **Clean Ultra** (least clutter).  
3. Trade your plan with this guide:
   - **Green/Teal** = bullish, **Red/Maroon** = bearish, **Gray** = neutral reference.
   - “**BOS**” = trend continuation; “**CHOCH**” = possible trend flip.
   - **Gray flat line** = Equal High/Low (common target/magnet).
   - **Triangle** above/below a bar = a **Sweep** just happened.
   - **Boxes** = zones where price may react:
     - **FVG** box = gap likely to be revisited.
     - **OB** box = launch zone; can act as support/resistance.
     - **BRK** label on a box = breaker (a failed OB that flipped).

> **Pro tip:** Learn on **15m or 1h**. Keep **Clean Ultra** until you’re comfortable.

---

## Quick Playbook (examples, not signals)

- **Pullback to a Gap (FVG):**  
  See **BOS up** → a **bull FVG** forms below → if price returns into it and stabilizes, buyers often defend.

- **Retest the Block (OB):**  
  See **CHOCH up** → a **bull OB** appears → a calm retest can bounce.

- **Fade a Sweep:**  
  A **sweep up** (triangle above a recent high) that closes back below can invite short attempts *if your plan allows*.

Always follow your own rules for entries, exits, and risk.

---

## Alerts (simple and useful)

Built‑in alert presets:
- **Bullish OB Created**
- **Bearish OB Created**

You can also make alerts from SML’s hidden “boolean” signals (e.g., new BOS/CHOCH, new FVG, new EQH/EQL, sweep up/down).  
**Tip:** Fire alerts **on candle close** and on the timeframe you trade.

---

## Settings — start here, ignore the rest (for now)

- **Mode:**  
  - **Clean Ultra** → minimal and beginner‑friendly (recommended)  
  - **Standard / Verbose** → show more lines/boxes and labels

- **Structure (BOS/CHOCH):** Defaults are fine.
- **Equal Highs/Lows:** Keep on; default tolerance is fine.
- **Sweeps:** Optional. Want fewer triangles? Increase **Cooldown** or **Min ticks**.
- **FVG:** Keep on; default **Min gap** is fine. “Mitigation = Close” is beginner‑friendly.
- **Order Blocks:** Keep on; **Body‑based OB** is simple. “Breakers on” is fine.

You can tweak later; the defaults keep charts clean.

---

## Reading the Colors

- **Green/Teal** = bullish things (upside structure/zones)  
- **Red/Maroon** = bearish things (downside structure/zones)  
- **Gray** = neutral references (equal highs/lows, mid‑lines)

---

## What NOT to expect

- Not a “buy/sell” machine.  
- Not a crystal ball.  
- It’s a **map** that highlights **where** decisions often happen; **you** decide **if/when** to trade.

---

## FAQ

**Does it repaint?**  
No. Signals lock at candle close. What you saw at close remains.

**Which timeframe should I learn on?**  
The one you actually trade. Many start with **15m** or **1h** to learn the patterns.

**Why did a box disappear?**  
It was **mitigated** (price touched it as defined in settings) or it **aged out** (auto clean‑up).

**Can I use it on crypto/forex/stocks/futures?**  
Yes—anything available on TradingView.

**Too many signals?**  
Use **Clean Ultra** and tighten filters: increase Sweep **Cooldown**, FVG **Min gap**, keep “**hide mitigated**” on.

---

## Troubleshooting

- **I can’t see much:** Try **Verbose** mode briefly to learn, then go back to **Clean Ultra**.  
- **Cluttered chart:** Increase **Max Draw Age** or lower the “cap” settings (how many zones to keep).  
- **Alerts firing too often:** Raise thresholds (e.g., Sweep min ticks) or use higher timeframes.

---

## Safety & Use

SignalPilot tools are for **education only**. **Not financial advice.**  
You are responsible for your decisions and risk management.

For the most current info, updates, and contact, visit **https://www.signalpilot.io**.

---

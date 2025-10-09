# SP — Flow Balance (OBV Pro) by Signal Pilot

**Plain‑English guide — no jargon.**

Flow Balance reads **buying vs. selling pressure** from volume and shows you:
- when pressure **flips** (buyers take over or sellers take over),
- when a move looks **overstretched** (often tired),
- when **price and volume disagree** (a heads‑up that a turn may be near).

It works on any market and timeframe, does **not repaint** after the candle closes, and includes ready‑made **alerts** and **scanner outputs**.

> Part of the SignalPilot suite — learn more at **signalpilot.io**. Educational use only.

---

## What you’ll see on the chart

Flow Balance sits in its **own panel** under price.

- **Blue line** → the money‑flow line (based on volume).
- **Yellow line** → a smooth “middle line” for context.
- **Light green rails + fill** → a guide zone around that middle line.

**Dots (your signals):**
- **Green dot** → pressure **flipped up** (buyers in control).
- **Red dot** → pressure **flipped down** (sellers in control).
- **Pink dot** → the line is **stretched high** (up move may be tired).
- **Purple dot** → the line is **stretched low** (down move may be tired).
- **Divergence dots** → price and flow disagree:
  - **Bullish divergence**: **Lime** or **Teal** (down move may be weakening).
  - **Bearish divergence**: **Red** or **Orange** (up move may be weakening).

> Quick read: **Green/Red = flips**, **Pink/Purple = overcooked**, **Divergence = disagreement**.

---

## How to use it (3 steps)

1) **Find direction with a flip**  
   - **Green dot** → look for longs.  
   - **Red dot** → look for shorts.

2) **Check heat**  
   - Pink or Purple means the move is **tired**. Be picky with entries right after these.

3) **Use divergences as a heads‑up**  
   - Bullish divergence near support → possible **bounce**.  
   - Bearish divergence near resistance → possible **pullback**.

> Keep it simple: **Flip for direction**, **Stretch for caution**, **Divergence for timing**.

---

## Quick start (60 seconds)

1. Add **Flow Balance (OBV Pro)** to your chart.  
2. Don’t touch settings yet — defaults are safe.  
3. Wait for a **Green** or **Red** flip dot.  
4. Prefer entries on the **first pullback** after the flip (not the exact dot).  
5. If you also see **Pink/Purple**, reduce size or wait — the move might be tired.

---

## Best practices

- Pair Flow Balance with your **trend tool** or key **levels** (e.g., moving average, previous highs/lows).
- **Confluence wins:** Flip + level + your setup > any one signal alone.
- **Divergences** are most helpful at **important areas** (support/resistance).
- Quiet charts are fine — **no signal** is better than a **bad signal**.

---

## Settings (explained like a human)

- **HTF timeframe (blank = chart)**  
  Want the money‑flow line calculated on a bigger timeframe while you trade a smaller one?  
  Example: Trade on 15m, **set HTF to 1H** for a steadier read.  
  Leave blank to keep it the same as your chart.

- **FlipGuard bars (default 3)**  
  Prevents flip spam. After a flip, Flow Balance **waits this many candles** before allowing another flip.  
  - Want **fewer** flips? Increase it (e.g., 5–8).  
  - Want **more** flips? Decrease it (e.g., 1–2, but expect more noise).

> You can ignore everything else — the script handles the heavy lifting.

---

## Alerts (set‑and‑forget)

All alerts trigger **after the candle closes** (so they don’t change later).

**How to set:**
1. Right‑click the chart → **Add alert…**  
2. **Condition:** `Flow Balance (OBV Pro)`  
3. Choose one of:
   - **CrossUp** — buyers took control (green flip)
   - **CrossDown** — sellers took control (red flip)
   - **Z>=+2σ** — stretched up (pink)
   - **Z<=-2σ** — stretched down (purple)
   - **DivBull** — bullish divergence (lime/teal)
   - **DivBear** — bearish divergence (red/orange)
   - **DivHidBull** — hidden bullish divergence
   - **DivHidBear** — hidden bearish divergence

Tip: Create one alert per signal you care about and select **Only Once Per Bar Close**.

---

## Scanning / screeners

Flow Balance also outputs **hidden 1/0 series** (for screeners) — one for each signal above.  
Look for names like:

- `Flow Balance | CrossUp (bool)`  
- `Flow Balance | CrossDown (bool)`  
- `Flow Balance | Z>=+2σ (bool)`  
- `Flow Balance | Z<=-2σ (bool)`  
- `Flow Balance | BullReg (bool)`  
- `Flow Balance | BearReg (bool)`  
- `Flow Balance | BullHid (bool)`  
- `Flow Balance | BearHid (bool)`

> If your current script still shows older names (e.g., starting with `SP:OBV`), that’s OK — they’re the **same signals**. Names will align as versions update.

---

## Simple playbooks (examples)

- **Trend pullback long**  
  1) Green flip.  
  2) Price pulls back to a level (MA, prior high, support).  
  3) No fresh Purple dot → enter long.  
  4) Exit into Pink or on a Red flip.

- **Mean‑revert short**  
  1) Pink dot (stretched up).  
  2) Bearish divergence or Red flip near resistance.  
  3) Enter short with a tight stop above the level.  
  4) Cover on Purple or Green flip.

Adjust size and stops to your plan.

---

## FAQs

**Does it repaint?**  
No. Dots print on bar close and stay put. Divergence dots appear **after** the swing is confirmed (so they’re reliable) and are placed back on the bar where the swing happened.

**Which markets/timeframes?**  
Anything on TradingView — stocks, futures, crypto, FX. From scalps to swings.

**Why did a divergence dot show up “late”?**  
Because we wait for confirmation before printing it. That keeps your chart honest.

**I see few signals. Is that bad?**  
Not at all. Fewer, cleaner signals usually mean **less noise**. If you want more, use a **lower timeframe** or reduce **FlipGuard** slightly.

---

## Troubleshooting

- **Lots of flip dots?** Increase **FlipGuard**.  
- **Choppy reads on low timeframes?** Try setting **HTF** to a larger TF (e.g., 1H or 4H).  
- **Too many “tired” (Pink/Purple) dots?** That market might be hot. Zoom out (higher TF) or wait for a pullback.

---

## Safety first

Flow Balance is a **tool**, not a promise. Always use stops, size responsibly, and combine signals with your own plan.

---

## License & access

Part of the SignalPilot suite. **Educational use only.**  
For access and updates, visit **signalpilot.io**.

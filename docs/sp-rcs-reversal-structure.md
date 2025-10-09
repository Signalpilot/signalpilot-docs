# SP: Reversal Candlestick Structure (SP:RCS)

A friendly TradingView helper that **marks well‑known candlestick reversal patterns** right on your chart.  
Labels appear **only after the candle closes** (so they don’t disappear later). To keep charts clean, the tool shows **at most one bullish and one bearish label per bar**.

---

## ✨ What you’ll see

- Short **labels under/over candles** like `BuE`, `BE`, `MS`, `ES`.  
- **Teal/green = bullish idea**, **red = bearish idea**.  
- Labels sit a little away from price so they’re easy to read.

> Treat every label as a **heads‑up**, not a must‑trade. Always use your own confirmation and risk rules.

---

## 🚀 Quick start (60 seconds)

1. Open **TradingView → Pine Editor**.  
2. Paste the script → **Save** → **Add to chart**.  
3. That’s it. Labels show up when each candle **closes**.

---

## 🧭 Read the labels (cheat‑sheet)

**Bullish**
| Code | Pattern |
|---|---|
| `HM`  | Hammer |
| `IH`  | Inverted Hammer |
| `BuE` | Bullish Engulfing |
| `R3`  | Rising Three Methods |
| `3WS` | Three White Soldiers |
| `MS`  | Morning Star |
| `BuH` | Bullish Harami |
| `TB`  | Tweezer Bottom |

**Bearish**
| Code | Pattern |
|---|---|
| `HMN` | Hanging Man |
| `SS`  | Shooting Star |
| `BE`  | Bearish Engulfing |
| `F3`  | Falling Three Methods |
| `3BC` | Three Black Crows |
| `ES`  | Evening Star |
| `BeH` | Bearish Harami |
| `TT`  | Tweezer Top |

> Hover a label to inspect the exact bar it references.

---

## 🕹️ Use it in practice

1. **Wait for a label** at candle close.  
2. A **bullish label below** a candle hints at a possible bounce.  
3. A **bearish label above** a candle hints at a possible turn down.  
4. Add your own tools (support/resistance, trendlines, volume) before acting.

---

## 🔧 The only 3 settings most people need

You’ll find these in the **Reversal Logic** panel.

- **Threshold** — *How picky it is*  
  Higher = fewer, stronger labels.  
  Start at **80**.  
  - Want **fewer** labels? Try 85–90.  
  - Want **more** labels? Try 70–75.

- **Same‑side Cooldown** — *Spacing between similar signals*  
  Minimum bars between two bullish (or two bearish) labels.  
  Start at **20**. Increase to reduce clutter.

- **FlipGuard Decay** — *Brake after a flip*  
  Bars to wait before allowing a new **opposite‑side** label.  
  Start at **5**. Raise if you see whipsaws.

That’s it. Everything else is optional style or per‑pattern toggles.

---

## 🎨 Make it look how you like

- Change **text size**, **colors**, and **background** in **Style**.  
- “Offset” keeps labels comfortably away from candles. The default works for most charts.

---

## ⏰ Alerts (so you don’t miss anything)

1. Click the **alarm clock** → **Create Alert…**  
2. **Condition:** pick a specific pattern, e.g. **“SP:RCS | BE”** for Bearish Engulfing.  
3. Choose your preferred delivery (app, email, webhook).  
4. Save.

Create multiple alerts—one per pattern you care about.

---

## 🧪 Starter presets (pick one row and go)

| Timeframe | Threshold | Cooldown | FlipGuard |
|---|---:|---:|---:|
| 5–15m | 85–90 | 30–50 | 8–12 |
| 30–60m | 80–85 | 20–30 | 6–10 |
| 4H–1D | 75–80 | 10–20 | 5–8 |

---

## 🛠️ Troubleshooting

- **Too many labels?** Raise **Threshold**, raise **Cooldown**, or turn off lower‑priority patterns (Harami, Tweezers).  
- **Too few labels?** Lower **Threshold** a bit (‑5 to ‑10) and/or reduce **Cooldown**.  
- **Labels on top of price?** Increase label **Offset** or pick a larger **Text Size**.  
- **Do labels repaint?** No. Labels appear **after candle close** and stay.

---

## ❓ FAQ

**Do I need all patterns on?**  
No. Many traders begin with **Engulfing** and **Morning/Evening Star**, then add more.

**Which markets/timeframes work?**  
Anything with candles. Intraday usually needs stricter settings; higher timeframes can be looser.

**Why didn’t a label print when I expected one?**  
It likely didn’t meet the shape rules or your **Threshold/Cooldown/FlipGuard** filtered it. Lower the Threshold slightly to test.

---

## 🔒 Safety

This is a **heads‑up tool**, not financial advice. Always manage risk and confirm with your own plan.

---

## 📷 Optional screenshots

You can add images to your repo later:


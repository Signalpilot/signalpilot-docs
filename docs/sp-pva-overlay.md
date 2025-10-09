# SP — Participation & Volume Pulse (SP-PVA Suite) — by Signal Pilot
**Modules:**  
- **Participation (PVA Overlay)** — on-chart signals  
- **Volume Pulse (PVA Volume)** — volume-pane companion  

Built to show when real money is moving.  
Clean, color-coded, and **non-repainting** — signals only lock at candle close.

---

## 🧭 What These Do

### 🟢 Participation (PVA Overlay)
Think of it as a **crowd-meter on your price chart.**  
It prints one clear nudge:
- **BULL** → buyers are in control  
- **BEAR** → sellers are in control  
Plus two special spike tags:
- **CLX (Climax):** a heavy surge — often the last big push  
- **ABS (Absorption):** price hit resistance/support and got soaked up

Each print means something actually happened in volume and pressure — not just noise.

---

### 🔵 Volume Pulse (PVA Volume)
Goes in a **separate pane under your chart.**  
Shows:
- **Colored volume bars** — green/red = intensity of participation  
- **Blue CVD line** — who’s winning (buyers vs sellers)  
- **Divergence tags** — “Bull Div” or “Bear Div” = early heads-up for a possible pause or reversal  
- **CLX / ABS spikes** — same logic as the overlay, shown near key daily/weekly levels  

It’s the “heartbeat” behind the on-chart signals.

---

## 🚀 Quick Start (60-Second Setup)

1. Add **Participation (PVA Overlay)** to your main chart.  
2. Add **Volume Pulse (PVA Volume)** to a new lower pane.  
3. Leave defaults. They’re already tuned.  
4. Trade flow:
   - Wait for a **BULL** or **BEAR** print (overlay).  
   - Check for **CLX/ABS** spikes (Overlay or Volume Pulse).  
   - Use your normal strategy or structure levels to confirm entries/exits.

**No repainting:** Every signal locks after the candle closes.

---

## 🧩 How to Read the Signals

| Signal | Meaning | Tip |
|:--|:--|:--|
| **BULL** | Buyers took control | Stay with longs until a BEAR or CLX/ABS shows |
| **BEAR** | Sellers took control | Stay with shorts until a BULL or CLX/ABS shows |
| **CLX** | “Climax” — huge burst | Often the end of a push or start of fast continuation |
| **ABS** | “Absorption” — move soaked up | Often exhaustion or turning area |
| **Bull Div / Bear Div** | Volume & price disagree | Watch for early reversals |

> One event per bar — if there’s a spike (CLX/ABS), you won’t see a BULL/BEAR on that same candle. Clean chart, clear story.

---

## ⚙️ Best Starter Settings

You don’t need to tweak much:
- **Use HTF confirm:** OFF (default) → ON for stricter, fewer signals  
- **Enable EVR (CLX/ABS):** ON (default)  
- **Limit to Session:** OFF (default) → ON for stocks (09:30–16:00)  

**Best timeframes:** 15m, 30m, 1h (clean and balanced)  
**For faster scalping:** 1–5m (noisier, consider HTF confirm ON)  
**For swing:** 4h–1D (quieter, but strong context)

---

## 🧠 Simple Game Plan

1. **See a BULL print?** Favor long bias.  
2. **See a BEAR print?** Favor short bias.  
3. **See CLX or ABS?** Wait — the crowd just shouted. Let the next candle confirm.  
4. **See Divergence in Volume Pulse?** Momentum may be shifting; watch closely.

Pair it with your normal support/resistance or structure tools.

---

## 🔔 Built-in Alerts (close-confirmed)

| Alert Name | When it Fires |
|:--|:--|
| **SP:Participation BULL** | Buyers dominate participation |
| **SP:Participation BEAR** | Sellers dominate participation |
| **SP:Participation CLX** | Climax spike |
| **SP:Participation ABS** | Absorption spike |

They only trigger **after** the candle closes — zero repaint risk.

---

## 🧾 Screener Flags (hidden booleans)

You can use these for your watchlists or screeners.

**Participation (Overlay):**  
`BULL`, `BEAR`, `CLX`, `ABS`, `REGIME_BULL`, `REGIME_BEAR`, `SPIKE`, `HTF_OK`

**Volume Pulse (Volume):**  
`SPIKE_HTF`, `EVR_CLX`, `EVR_ABS`, `DIV_BULL_REG/HID`, `DIV_BEAR_REG/HID`

**Example filters:**
- New participation flips → `BULL == 1 OR BEAR == 1`  
- Spike-only scan → `CLX == 1 OR ABS == 1`  
- Divergences → `DIV_BULL_REG == 1 OR DIV_BEAR_REG == 1`

---

## 🧩 Versions

- **Participation (Overlay)** — v3.0.6-O  
  - Clean BULL/BEAR prints  
  - FlipGuard and regime logic (EMA34/55 + Pilot Line + VWAP)  
  - Optional HTF confirm and breakout checks  
  - CLX/ABS spike markers and alerts  

- **Volume Pulse (Volume)** — v3.0.5-V  
  - Normalized volume (Z-Vol + RVOL)  
  - CVD line with hidden/regular divergences  
  - CLX/ABS spikes near key levels  
  - Smart spike markers and compact info table  

---

## 🧰 Troubleshooting

| Issue | Fix |
|:--|:--|
| Too many signals | Turn **HTF confirm = ON** or move up a timeframe |
| Too quiet | Turn **HTF confirm = OFF** or drop timeframe |
| Premarket noise | Use **Limit to Session = ON (09:30–16:00)** |
| Chasing spikes | Wait one extra bar after a CLX/ABS spike |

---

## ⚖️ Disclaimer

For **educational purposes only.**  
Not financial advice. Always test first and manage your own risk.

---

**SignalPilot — clear, non-repainting trading tools.**  
Learn more → [https://www.signalpilot.io](https://www.signalpilot.io)

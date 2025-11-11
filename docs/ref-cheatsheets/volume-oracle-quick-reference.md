# Volume Oracle Quick Reference

**Interactive Cheat Sheet:** [View Full Volume Oracle Quick Reference →](../../ref-cheatsheets-volume-oracle/)

Comprehensive guide to all 3 Volume Oracle systems: Volume Flow, Volume Zones, and Position Manager.

## Volume Oracle Systems

### System 1: Volume Flow (VBS)
**What it shows:** Real-time volume bar strength

**Signals:**
- **Green bars >1.5x** - Strong buying pressure
- **Red bars >1.5x** - Strong selling pressure
- **Gray bars** - Normal volume (no conviction)

**Use cases:**
- Entry confirmation (look for spike when Pentarch TD appears)
- Exit signals (volume drying up = momentum fading)
- Scalping (quick volume spikes on 1m-5m charts)

**Spike Thresholds:**
- Stocks: 1.5x average
- Crypto: 1.3x average (more volatile)
- Futures: 1.8x average (burst volume common)

### System 2: Volume Zones
**What it shows:** Accumulation and distribution areas

**Zone Types:**
- **Green zones** - Accumulation (institutional buying) = Support
- **Red zones** - Distribution (institutional selling) = Resistance
- **Zone strength** - Darker color = more volume = stronger level

**Use cases:**
- Swing trading (multi-day support/resistance)
- Position trading (weeks/months accumulation)
- Confluence with Janus levels (zone + level = high probability)

**Common patterns:**
- Price at accumulation zone + TD = strong support
- Breaking through distribution zone = momentum shift
- Zone buildup over weeks = major level forming

### System 3: Position Manager
**What it shows:** Real-time P&L tracking

**Features:**
- Position size calculator
- Real-time profit/loss
- Risk/reward display
- Multiple position tracking

**Use cases:**
- Day trading stocks (track 3+ positions)
- Scalping (quick P&L reference)
- Risk management (see total exposure)

**Settings:**
- Entry price: Manual input
- Stop loss: Automatic from chart
- Position size: Based on risk %

## Volume Oracle Limitations

### Forex Spot: NO REAL VOLUME
- Forex spot pairs show tick volume (not real volume)
- **Solution:** Use currency futures (6E=EUR/USD, 6B=GBP/USD)
- **Alternative:** Skip Volume Oracle, use Harmonic Oscillator instead

### Low-Volume Assets
- Stocks <500K avg volume: Unreliable
- Small-cap crypto: False signals common
- **Solution:** Stick to high-liquidity assets

## Common Mistakes

1. Using Volume Oracle on forex spot (no real volume data)
2. Ignoring volume zones (only watching flow)
3. Treating green bars as buy signals (need confluence)
4. Using on low-volume assets (<500K avg volume)
5. Not adjusting spike threshold by asset type

## Volume Confirmation Workflow

**Step 1:** Pentarch TD appears
**Step 2:** Check Janus level (is TD at a level?)
**Step 3:** Check Volume Oracle:
- Volume spike >1.5x? (Confirmation)
- Volume zone present? (Additional confluence)
- No spike? (Lower probability - skip trade)

**Result:** 3-factor confluence = high-probability setup

## Quick Settings

**Scalping (1m-5m):**
- Enable: Volume Flow only
- Disable: Zones (too slow)
- Spike threshold: 1.5x

**Day Trading:**
- Enable: All 3 systems
- Volume Flow + Zones + Position Manager
- Spike threshold: 1.3x crypto, 1.5x stocks

**Swing Trading:**
- Enable: Zones primarily
- Volume Flow: Secondary
- Focus on: Multi-day accumulation zones

## Asset-Specific Notes

**Stocks:**
- Volume Oracle highly reliable
- Position Manager essential for day trading
- Works great for: SPY, QQQ, AAPL, MSFT, TSLA

**Crypto:**
- Lower spike threshold (1.3x) due to volatility
- 24/7 trading = consistent data
- Works great for: BTC, ETH (avoid low-cap)

**Futures:**
- Clean volume data (very reliable)
- Higher spike threshold (1.8x) for burst volume
- Position Manager valuable for: ES, NQ

**Forex:**
- ⚠️ DO NOT USE on spot pairs (no real volume)
- ✅ USE on currency futures (6E, 6B, etc.)
- Alternative: Harmonic Oscillator

---

**📊 [View Full Interactive Cheat Sheet →](../../ref-cheatsheets-volume-oracle/)**

**Related Resources:**
- [Configuration Wizard](../configuration-wizard.md) - Volume Oracle setups by asset
- [Volume Oracle v1.0 Full Documentation](../../volume-oracle-v10/)
- [Why Forex Spot Has No Volume](../../ref-glossary/index.md#volume-data)

---

**Last Updated:** January 2025

# Janus Atlas v1.0 - Your Market Map

<div class="admonition tip" style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4;">
<p class="admonition-title" style="color: #06b6d4; font-weight: 600;">📚 Want to Master Janus Atlas?</p>
<p><a href="learning.html" style="color: #06b6d4; font-weight: 600; text-decoration: none;">→ Advanced Learning Guide</a> — Level clusters, bounce vs break patterns, support/resistance strategies, and real examples</p>
</div>

## 🎯 What Does It Do?
<span style="color: #0aa1d5; font-weight: 600;">Core Functionality</span>

Janus Atlas shows you **every important level on your chart** - all at once. Think of it like having a professional trading floor's price levels marked for you automatically.

**Best for:** Everyone - from scalpers to swing traders

---

## 📍 The Levels (What You Get)
<span style="color: #10b981; font-weight: 600;">Level Types</span>
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">⭐ Core Feature - 50+ Level Types Available</span>

### 📅 Timeframe Levels
<span style="color: #10b981; font-weight: 600;">📊 Foundation - Daily/Weekly/Monthly Ranges</span>

**What you see:** Lines labeled dH, dL, WH, WL, MtH, etc.

**What they are:**
- **Daily High/Low** (dH/dL) - Today's range
- **Weekly High/Low** (WH/WL) - This week's range
- **Monthly High/Low** (MtH/MtL) - This month's range
- **Opens & Midpoints** - Reference points for each timeframe

**Why they matter:** Price reacts at these levels. They're like magnets - price either bounces off them or breaks through decisively.

**Example:** Bitcoin drops to Weekly Low at $65,000 → Often bounces back up (support)

---

### 🕐 Session Levels
<span style="color: #a855f7; font-weight: 600;">⏰ Scalper Essential - Asian/Euro/NA Ranges</span>

**What you see:** Lines labeled AH, AL (Asian), EH, EL (European), NAH, NAL (North American)

**What they are:** High and low of each trading session

**Why they matter:**
- Asian lows often get "swept" during London open (stop hunt)
- North American highs are key resistance for the day
- Session breaks = liquidity grabs

**Example:** Price spikes above Asian High at $66,500, immediately drops → Classic fake-out

---

### ⏱️ Opening Range (OR)
<span style="color: #f59e0b; font-weight: 600;">📈 Breakout Essential - First X Minutes High/Low</span>

**What you see:** Lines labeled `orH`, `orL`, `orMid`

**What it is:** Captures the High and Low of the first X minutes of a trading session (default: first 30 minutes of NY session).

**Settings:**

| Setting | Options | Default |
|---------|---------|---------|
| OR Session | Asian / Euro / NY / Custom | NY |
| Custom OR Time | Session input (e.g., "0930-1000") | 0930-1000 |
| OR Duration | 5 / 15 / 30 / 60 minutes | 30 |
| Show OR High | Toggle | On |
| Show OR Low | Toggle | On |
| Show OR Mid | Toggle | Off |

**How it works:**
1. At session start (e.g., 9:30 AM NY), tracking begins
2. High and Low are tracked for the specified duration
3. After duration ends, levels are frozen and extend right
4. Levels reset at next session start

<!-- Screenshot: Opening Range levels on chart showing orH, orL labels -->
<!-- ![Opening Range levels](../assets/images/janus-atlas/opening-range-levels.png) -->

**Why it matters:**
- Price breaking above OR High often signals bullish day direction
- Price breaking below OR Low often signals bearish day direction
- The Opening Range acts as a "launchpad" for the trading day

**Example:** ES futures OR forms between 4,500-4,520 in first 30 minutes → Price breaks above 4,520 at 10:15 AM → Often continues higher for the session

**Labels:** `orH`, `orL`, `orMid`

---

### 🕐 Killzones
<span style="color: #a855f7; font-weight: 600;">⏰ Time-Based - Institutional Activity Windows</span>

**What you see:** Subtle background shading during high-probability trading windows

**What it is:** Highlights time periods when institutional activity is typically highest. These are visual aids only - no price levels, just time-based zones.

**Available Killzones:**

| Killzone | Default Time | Default State |
|----------|--------------|---------------|
| Asian | 2000-0000 | On |
| London Open | 0200-0500 | On |
| NY Open | 0830-1100 | On |
| London Close | 1000-1200 | Off |
| NY PM | 1300-1600 | Off |

**Settings per killzone:**
- Enable/disable toggle
- Custom time window
- Color picker (high transparency ~90%)

<!-- Screenshot: Killzone background shading on chart -->
<!-- ![Killzone background shading](../assets/images/janus-atlas/killzone-background.png) -->

**Why it matters:**
- Killzones highlight WHEN to trade, not WHERE
- Multiple killzones can overlap
- Very transparent so they don't obstruct price action

**Note:** Killzones have no alerts - they are purely visual time-based aids.

---

### 🎯 Custom Sessions
<span style="color: #06b6d4; font-weight: 600;">🔧 Flexible - Define Your Own Session Windows</span>

**What you see:** Lines labeled with your custom session name (first 3 characters + O/H/L/Mid)

**What it is:** Two fully customizable session slots that work identically to built-in sessions (Asian/Euro/NA).

**Settings per custom session:**

| Setting | Description |
|---------|-------------|
| Name | User-defined name (e.g., "Globex", "London") |
| Time | Session time window (e.g., "0800-1400") |
| Show O/H/L/Mid | Individual toggles for each level |
| Color | Color picker |

<!-- Screenshot: Custom Session setup in settings -->
<!-- ![Custom Session setup](../assets/images/janus-atlas/custom-session-setup.png) -->

**How it works:**
- Identical logic to built-in sessions
- Tracks Open, High, Low within your defined time window
- Labels use first 3 characters of name + O/H/L/Mid

**Use cases:**
- **Crypto traders:** 24/7 markets need custom time windows
- **Futures traders:** Custom Globex session windows
- **Personal trading hours:** Track your specific trading window

**Example labels:** If you name your session "Globex", labels will show: `GloO`, `GloH`, `GloL`, `GloMid`

---

### 📊 Gap Levels
<span style="color: #f97316; font-weight: 600;">📉 Gap Trading - Session Gap Detection</span>

**What you see:** Lines labeled `gapH`, `gapL` marking the gap zone

**What it is:** Automatically detects and displays price gaps between sessions.

**Settings:**

| Setting | Description | Default |
|---------|-------------|---------|
| Daily Gap | Enable daily gap detection | On |
| Weekend Gap | Enable weekend gap detection | On |
| Min Gap Size (%) | Ignore gaps smaller than this | 0.1% |
| Show Gap High | Toggle | On |
| Show Gap Low | Toggle | On |
| Mark Gap Fill | Label when gap fills | On |

**How it works:**
1. At day start, compares previous close to current open
2. If difference ≥ min gap size → gap exists
3. **Gap Up:** `gapL` = prev close, `gapH` = today open
4. **Gap Down:** `gapH` = prev close, `gapL` = today open
5. Gap lines disappear when price fills the gap

<!-- Screenshot: Gap levels with gap fill marker -->
<!-- ![Gap levels with fill](../assets/images/janus-atlas/gap-levels-fill.png) -->

**Why it matters:**
- "Gaps tend to fill" - classic trading concept
- Gap zones act as support/resistance until filled
- Gap fill events are tradeable moments

**Example:** Stock closes Friday at $100, opens Monday at $103 → Gap Up zone between $100-$103 → Price often pulls back to fill the gap

**Labels:** `gapH`, `gapL`

---

### 📊 VWAP Lines
<span style="color: #f59e0b; font-weight: 600;">💰 Institutional Favorite - True Average Price</span>

**What you see:** Lines labeled VWAP-D, VWAP-W (and previous ones like pVWAP-D)

**What it is:** The "true average" price - where most volume traded

**Why it matters:**
- **Above VWAP** = Bulls in control
- **Below VWAP** = Bears in control
- Price loves to return to VWAP (like gravity)

**Example:** Price spikes to $68,000, but VWAP is at $66,000 → Likely pulls back to VWAP

---

### 🎯 Volume Profile (POC, VAH, VAL)
<span style="color: #dc2626; font-weight: 600;">🎯 High Priority - Price Magnet Zones</span>

**What you see:** Three key lines

- **POC** (Point of Control) - Where MOST volume traded
- **VAH** (Value Area High) - Top of fair value zone
- **VAL** (Value Area Low) - Bottom of fair value zone

**Why they matter:**
- POC acts like a magnet (price returns here)
- Above VAH = Overbought territory
- Below VAL = Oversold territory

**Example:** Price at $69,000, POC is $67,000 → Expect pullback to $67,000

---

### 📈 Market Structure (HH/HL/LH/LL, BOS/CHoCH)
<span style="color: #10b981; font-weight: 600;">📈 Trend Context - Uptrend vs Downtrend</span>

**What you see:** Labels at swing points

- **HH** (Higher High), **HL** (Higher Low) = Uptrend
- **LH** (Lower High), **LL** (Lower Low) = Downtrend
- **BOS** (Break of Structure) = Trend continues
- **CHoCH** (Change of Character) = Trend might reverse

**Example:**
```
Price makes: HL → HH → HL → HH (with BOS labels)
= Strong uptrend, keep buying dips
```

---

### 🎯 Confluence Zones
<span style="color: #eab308; font-weight: 600;">⭐ High Probability - Automatic Level Clustering</span>

**What you see:** Semi-transparent highlighted boxes where multiple levels cluster together

**What it is:** Automatically detects and highlights areas where multiple price levels converge within a specified proximity.

**Settings:**

| Setting | Description | Default |
|---------|-------------|---------|
| Minimum Levels | How many levels must cluster | 3 |
| Proximity (ticks) | How close levels must be | 20 |
| Zone Color | Color picker | Yellow (80% transparent) |
| Show Zone Label | Toggle | On |

**How it works:**
1. On each bar, scans all active/visible levels
2. Groups levels that are within X ticks of each other
3. If group has ≥ minimum levels → draws semi-transparent box
4. Box spans from highest to lowest level in cluster

<!-- Screenshot: Confluence zone highlight on chart -->
<!-- ![Confluence zone](../assets/images/janus-atlas/confluence-zone.png) -->

**Why it matters:**
- More levels = stronger support/resistance
- Confluence zones are high-probability reaction areas
- Automatically identifies what you'd manually look for

**Example:** Daily High, Weekly VWAP, and Previous Day High all within 15 ticks → Confluence zone box highlights this cluster as a significant resistance area

---

### 📋 Distance Table
<span style="color: #06b6d4; font-weight: 600;">📊 At-a-Glance - Nearest Levels Display</span>

**What you see:** On-chart table showing distance to nearest price levels

**What it is:** A real-time table displaying how far price is from the closest levels, sorted by proximity.

**Settings:**

| Setting | Options | Default |
|---------|---------|---------|
| Position | Top Right / Top Left / Bottom Right / Bottom Left | Top Right |
| Levels Shown | 2-8 | 4 |
| Show As | Ticks / Points / % | Ticks |
| Background | Color picker | Black (80% transparent) |
| Text Color | Color picker | White |

**Display format:**
```
┌─────────────────┐
│ Level    Dist   │
├─────────────────┤
│ dH       ↑ 45   │
│ wVWAP    ↑ 12   │
│ pdL      ↓ 23   │
│ asL      ↓ 67   │
└─────────────────┘
```

<!-- Screenshot: Distance table display on chart -->
<!-- ![Distance table](../assets/images/janus-atlas/distance-table.png) -->

**Why it matters:**
- Instantly see which levels are nearest
- ↑ arrows = levels above current price
- ↓ arrows = levels below current price
- Helps prioritize which levels to watch

**Example:** Table shows `dH ↑ 12` and `pdH ↓ 45` → Daily High is only 12 ticks above, Previous Day High is 45 ticks below → Focus on the Daily High as the nearest resistance

---

## Usage Patterns (3 Core Components)
<span style="color: #0aa1d5; font-weight: 600; font-size: 1.1em;">🎓 Essential Learning - Start Here</span>

### Component 1: Level Selection
<span style="color: #ff6b35; font-weight: 600;">⚠️ Critical - Progressive Level Addition Recommended</span>

Starting with a subset of levels is recommended rather than enabling all levels simultaneously:

**For scalping (5m-15m charts):**
- ✅ Session levels (Asian/Euro/NA)
- ✅ Daily VWAP
- ✅ Daily High/Low
- ✅ POC/VAH/VAL

**For day trading (1H-4H charts):**
- ✅ Daily + Weekly levels
- ✅ Daily + Weekly VWAP
- ✅ POC/VAH/VAL
- ✅ Market structure

**For swing trading (Daily charts):**
- ✅ Weekly + Monthly levels
- ✅ Weekly + Monthly VWAP
- ✅ Market structure
- ❌ Session levels (too granular for this timeframe)

---

### Component 2: Reaction Patterns
<span style="color: #a855f7; font-weight: 600;">👀 Key Concept - Bounce vs Break</span>

When price approaches a level, several patterns are commonly observed:

**Bounce = Support/Resistance pattern observed**
→ Trades in the direction of the bounce are common

**Break = Level penetration observed**
→ Trades in the direction of the break are common (retest patterns often awaited)

**Cluster = Multiple levels converging**
→ These zones are typically associated with stronger reactions

**Example:** Weekly Low + Monthly VWAP + POC all at $65,000 → Zone often interpreted as major support

---

### Component 3: Structure-Based Trend Analysis
<span style="color: #10b981; font-weight: 600;">📊 Trend Filter - Combining Levels + Structure</span>

The structure labels (HH/HL/LH/LL) provide current trend context:

**Healthy Uptrend Pattern:**
```
HH → HL → HH → HL
     ↑        ↑
   (BOS)   (BOS)
Dip buying at HL is common
```

**Trend Exhaustion Pattern:**
```
HH → HL → HH → LH
              ↑
          (CHoCH) ← Warning indication
Short opportunities often evaluated
```

---

## Real Example (ES Futures)

**Setup:**
- Price: 4,520
- **Weekly High** = 4,550 (resistance above)
- **Daily VWAP** = 4,500 (support below)
- **POC** = 4,510 (middle magnet)
- Structure showing **HH** pattern (uptrend)

**The Trade:**
1. Price pulls back to Daily VWAP at 4,500
2. Holds above VWAP (bounce)
3. Example entry long at 4,502
4. Example target: Weekly High at 4,550 or POC at 4,510
5. Example stop: Below VWAP at 4,495

**Result:** Price rallies to 4,545 (near Weekly High) = +40 points profit

---

## ⚙️ Settings (Configuration Approach)
<span style="color: #10b981; font-weight: 600;">Configuration Options</span>

Settings are organized into **14 numbered groups** for easy navigation:

### Settings Panel Organization

| # | Group | What It Controls |
|---|-------|------------------|
| 1 | Controls | Master toggles for each feature category |
| 2 | Appearance | Labels, line width, label spacing |
| 3 | HTF Levels | Monday, Daily, Weekly, Monthly, Quarterly |
| 4 | Session Levels | Asian, European, North American |
| 5 | Custom Sessions | Your 2 custom session slots |
| 6 | Opening Range | OR session, duration, levels |
| 7 | Killzones | 5 institutional time windows |
| 8 | Gap Levels | Daily/weekend gaps, fill detection |
| 9 | VWAP Levels | Current and previous period VWAPs |
| 10 | Volume Profile | POC, VAH, VAL for D/W/M |
| 11 | Previous Periods | Previous D/W/M/Q levels |
| 12 | Confluence Zones | Auto-clustering settings |
| 13 | Market Structure | Pivot detection, BOS/CHoCH |
| 14 | Distance Table | On-chart proximity display |

<!-- Screenshot: Settings panel overview showing 14 groups -->
<!-- ![Settings panel overview](../assets/images/janus-atlas/settings-panel-overview.png) -->

---

### Appearance Settings (Group 2)

| Setting | Options | Default | Description |
|---------|---------|---------|-------------|
| Show Labels | Toggle | On | Master toggle to hide all labels |
| Show Price on Labels | Toggle | Off | Display price value (e.g., `dH • 245.50`) |
| Label Size | Tiny / Small / Normal / Large | Small | Size of level labels |
| Label Text Color | Color picker | White | Text color for all labels |
| Line Width | 1-5 | 1 | Thickness of level lines |
| Label Spacing (ticks) | 5-50 | 10 | Space between stacked labels |

<!-- Screenshot: Label with price shown (dH • 245.50) -->
<!-- ![Label with price](../assets/images/janus-atlas/label-with-price.png) -->

---

### Color Customization (28 Color Inputs)

All colors are fully customizable. Here's what you can control:

| Category | Color Inputs | Notes |
|----------|--------------|-------|
| HTF Levels | 1 | Shared for D/W/M/Q |
| Monday | 1 | Separate from other HTF |
| Sessions | 3 | AS, EU, NA each |
| Custom Sessions | 2 | CS1, CS2 each |
| Opening Range | 1 | OR levels |
| Gap Levels | 1 | Gap H/L |
| VWAP | 2 | Current + Previous |
| Volume Profile | 3 | POC, VAH, VAL |
| Previous Periods | 1 | Shared for all previous |
| Confluence Zone | 1 | Zone highlight |
| Killzones | 5 | One per killzone |
| Market Structure | 4 | High text, Low text, Bull, Bear |
| Table | 2 | Background + Text |
| Labels | 1 | Text color |
| **Total** | **28** | |

---

### Show/Hide Levels (Group 1 - Controls)

Master toggles for each feature category:
- HTF Levels (on/off)
- Session Levels (on/off)
- Custom Sessions (on/off)
- Opening Range (on/off)
- Killzones (on/off)
- Gap Levels (on/off)
- VWAP Levels (on/off)
- Volume Profile (on/off)
- Previous Periods (on/off)
- Confluence Zones (on/off)
- Market Structure (on/off)
- Distance Table (on/off)

**Tip:** Start with 2-3 categories enabled and add more as you become comfortable.

---

### Market Structure Settings (Group 13)

| Setting | Options | Default | Description |
|---------|---------|---------|-------------|
| Mode | Auto / Manual | Auto | Auto detects swing size automatically |
| Pivot Lookback | 1-50 | 10 | Bars to look back for pivots (Manual mode) |
| Min Swing | 0-5.0 | 1.2 | Minimum ATR multiplier for swing (Manual mode) |
| Show Link | Toggle | On | Draw lines connecting structure breaks |

**Most traders use default settings and adjust level visibility based on their analysis needs.**

---

## Alert Configuration
<span style="color: #0aa1d5; font-weight: 600;">57 Touch-Based Alerts Available</span>

Janus Atlas provides **57 alerts** for price touching key levels. All alerts use the format: `code • Full Name`

<!-- Screenshot: Alert dropdown showing new format -->
<!-- ![Alert dropdown](../assets/images/janus-atlas/alert-dropdown-format.png) -->

### Alert Summary by Category

| Category | Count | Alerts |
|----------|-------|--------|
| HTF Levels | 15 | Monday, Daily, Weekly, Monthly, Quarterly (O, H, L each) |
| Sessions | 9 | Asian, European, N.A. (O, H, L each) |
| Opening Range | 2 | OR High, OR Low |
| Custom Sessions | 4 | CS1 High/Low, CS2 High/Low |
| Previous Periods | 12 | PD, PW, PM, PQ (O, H, L each) |
| VWAP | 4 | Daily, Weekly, Monthly, pdVWAP |
| Volume Profile | 3 | dPOC, dVAH, dVAL |
| Gap Levels | 3 | Gap High, Gap Low, Gap Filled |
| Confluence | 1 | Confluence Zone Detected |
| Market Structure | 4 | CHoCH Bull/Bear, BOS Bull/Bear |
| **Total** | **57** | |

---

### HTF Level Alerts (15)

| Alert Code | Alert Name |
|------------|------------|
| `moO • Monday Open` | Monday Open Touched |
| `moH • Monday High` | Monday High Touched |
| `moL • Monday Low` | Monday Low Touched |
| `dO • Daily Open` | Daily Open Touched |
| `dH • Daily High` | Daily High Touched |
| `dL • Daily Low` | Daily Low Touched |
| `wO • Weekly Open` | Weekly Open Touched |
| `wH • Weekly High` | Weekly High Touched |
| `wL • Weekly Low` | Weekly Low Touched |
| `mO • Monthly Open` | Monthly Open Touched |
| `mH • Monthly High` | Monthly High Touched |
| `mL • Monthly Low` | Monthly Low Touched |
| `qO • Quarterly Open` | Quarterly Open Touched |
| `qH • Quarterly High` | Quarterly High Touched |
| `qL • Quarterly Low` | Quarterly Low Touched |

---

### Session Alerts (9)

| Alert Code | Alert Name |
|------------|------------|
| `asO • Asian Open` | Asian Open Touched |
| `asH • Asian High` | Asian High Touched |
| `asL • Asian Low` | Asian Low Touched |
| `euO • Euro Open` | European Open Touched |
| `euH • Euro High` | European High Touched |
| `euL • Euro Low` | European Low Touched |
| `naO • NY Open` | N.A. Open Touched |
| `naH • NY High` | N.A. High Touched |
| `naL • NY Low` | N.A. Low Touched |

---

### Opening Range Alerts (2)

| Alert Code | Alert Name |
|------------|------------|
| `orH • OR High` | Opening Range High Touched |
| `orL • OR Low` | Opening Range Low Touched |

---

### Custom Session Alerts (4)

| Alert Code | Alert Name |
|------------|------------|
| `cs1H • Custom1 High` | Custom Session 1 High Touched |
| `cs1L • Custom1 Low` | Custom Session 1 Low Touched |
| `cs2H • Custom2 High` | Custom Session 2 High Touched |
| `cs2L • Custom2 Low` | Custom Session 2 Low Touched |

---

### Previous Period Alerts (12)

| Alert Code | Alert Name |
|------------|------------|
| `pdO • Prev Day Open` | Previous Day Open Touched |
| `pdH • Prev Day High` | Previous Day High Touched |
| `pdL • Prev Day Low` | Previous Day Low Touched |
| `pwO • Prev Week Open` | Previous Week Open Touched |
| `pwH • Prev Week High` | Previous Week High Touched |
| `pwL • Prev Week Low` | Previous Week Low Touched |
| `pmO • Prev Month Open` | Previous Month Open Touched |
| `pmH • Prev Month High` | Previous Month High Touched |
| `pmL • Prev Month Low` | Previous Month Low Touched |
| `pqO • Prev Qtr Open` | Previous Quarter Open Touched |
| `pqH • Prev Qtr High` | Previous Quarter High Touched |
| `pqL • Prev Qtr Low` | Previous Quarter Low Touched |

---

### VWAP Alerts (4)

| Alert Code | Alert Name |
|------------|------------|
| `dVWAP • Daily VWAP` | Daily VWAP Touched |
| `wVWAP • Weekly VWAP` | Weekly VWAP Touched |
| `mVWAP • Monthly VWAP` | Monthly VWAP Touched |
| `pdVWAP • Prev Day VWAP` | Previous Day VWAP Touched |

---

### Volume Profile Alerts (3)

| Alert Code | Alert Name |
|------------|------------|
| `dPOC • Daily POC` | Daily POC Touched |
| `dVAH • Daily Value High` | Daily VAH Touched |
| `dVAL • Daily Value Low` | Daily VAL Touched |

---

### Gap Alerts (3)

| Alert Code | Alert Name |
|------------|------------|
| `gapH • Gap High` | Gap High Touched |
| `gapL • Gap Low` | Gap Low Touched |
| `Gap Filled` | Gap Has Been Filled |

---

### Confluence Alert (1)

| Alert Code | Alert Name |
|------------|------------|
| `Confluence Zone` | Confluence Zone Detected - Multiple Levels Clustered |

---

### Market Structure Alerts (4)

| Alert Code | Alert Name |
|------------|------------|
| `CHoCH • 🟢 Bullish` | Bullish Change of Character |
| `CHoCH • 🔴 Bearish` | Bearish Change of Character |
| `BOS • 🟢 Bullish` | Bullish Break of Structure |
| `BOS • 🔴 Bearish` | Bearish Break of Structure |

---

### Configuration Steps

1. Click the alarm icon on TradingView
2. Select "Janus Atlas v1.0"
3. Choose the desired alert from the dropdown
4. Set "Once Per Bar Close" for confirmed signals
5. Configure notification method (popup, email, webhook)

**Common practice:** Combining with other indicator alerts for confluence is common. Example: "Daily High touch + Pentarch WRN" = late-cycle exhaustion observation point

---

## Common Pitfalls
<span style="color: #dc2626; font-weight: 600; font-size: 1.1em;">🚨 Critical Learning Points</span>

❌ **Enabling all levels simultaneously**
→ ✅ Starting with 5-7 levels and adding progressively is the recommended approach.

❌ **Overlooking level clusters**
→ ✅ Overlapping levels typically indicate the most significant zones.

❌ **Trading without confirmation patterns**
→ ✅ Awaiting actual price reaction at levels (bounce or break) is standard practice.

❌ **Timeframe mismatch**
→ ✅ Scalpers typically use session/daily levels. Swing traders typically use weekly/monthly.

❌ **Neglecting VWAP context**
→ ✅ VWAP positioning provides directional context. Above = bullish territory, Below = bearish territory.

---

## ❓ Frequently Asked Questions
<span style="color: #10b981; font-weight: 600;">Common Questions</span>

**Q: How often do these levels change?**
**A:**
- Daily levels reset every day
- Weekly levels reset every Monday
- Monthly levels reset each new month
- VWAP resets based on its anchor (D/W/M)

**Q: What's the most important level?**
**A:** Depends on your timeframe:
- Scalpers: Daily VWAP + Session highs/lows
- Day traders: Daily High/Low + Weekly levels
- Swing traders: Weekly/Monthly levels

**Q: Do levels work on all instruments?**
**A:** Yes. Crypto, stocks, futures, forex - they all respect key levels.

**Q: What if price is between levels?**
**A:** Wait. Best trades happen AT levels, not between them. Patience = profits.

**Q: How do I know if a level is support or resistance?**
**A:**
- Price above level = Level is support (may bounce up)
- Price below level = Level is resistance (may bounce down)

**Q: Does it repaint?**
**A:** No. Once a level is drawn, it stays. What you see is what you get.

**Q: Can I use this with other indicators?**
**A:** Yes. Janus Atlas shows WHERE to trade. Use other indicators (like Pentarch) to show you WHEN to trade.

**Q: Why don't Killzones have alerts?**
**A:** Killzones are time-based visual aids, not price levels. They highlight WHEN to trade (institutional activity windows), not WHERE. Since there's no price level to "touch," alerts don't apply.

**Q: Can I have more than 2 custom sessions?**
**A:** Currently limited to 2 custom sessions to keep settings manageable. Most traders find 2 slots sufficient for their needs. If you need more, please let us know via support.

**Q: Why don't Mid levels have alerts?**
**A:** Mid level alerts were removed to stay under TradingView's 64 alert limit. Mid levels still display on chart - only the alerts were removed to prioritize High/Low alerts which are more commonly used.

**Q: What's the difference between Opening Range and Session levels?**
**A:**
- **Opening Range** captures only the first X minutes (e.g., 30 min), then freezes. It shows the "launchpad" for the day.
- **Session levels** track the entire session duration and update continuously until the session ends.

**Q: Do Gap levels work on crypto?**
**A:** Yes, but crypto trades 24/7 so "daily" gaps are based on UTC day boundaries. Weekend gaps are less common in crypto since markets don't close, but can occur on some exchanges.

---

## Quick Cheat Sheet

| Level Type | What It Shows | How To Use |
|-----------|---------------|------------|
| Daily High/Low | Today's range | Breakout or support/resistance |
| Weekly High/Low | This week's range | Major support/resistance |
| Opening Range | First X minutes H/L | Breakout direction for the day |
| Session Levels | Asian/Euro/NA ranges | Session-based S/R |
| Custom Sessions | Your defined windows | Personalized S/R levels |
| Gap Levels | Price gaps between sessions | Gap fill trades |
| VWAP | True average price | Above = bullish, Below = bearish |
| POC | Where most volume traded | Price magnet (returns here) |
| VAH/VAL | Fair value boundaries | Above VAH = overbought, Below VAL = oversold |
| Confluence Zone | Multiple levels clustered | High-probability reaction area |
| Distance Table | Nearest levels display | Quick reference for closest S/R |
| Killzones | Institutional time windows | Know when to trade |
| HH/HL | Uptrend structure | Buy dips at HL |
| LH/LL | Downtrend structure | Sell rips at LH |
| BOS | Trend continues | Stay with the trend |
| CHoCH | Trend warning | Get ready to flip direction |

---

## Best Practices
<span style="color: #10b981; font-weight: 600; font-size: 1.1em;">✅ Recommended Approach</span>

1. **Progressive addition** - Starting with 5-7 key levels rather than enabling everything at once
2. **Timeframe alignment** - Scalper vs swing trader contexts require different level sets
3. **Cluster observation** - Multiple converging levels typically indicate strongest zones
4. **Structure integration** - Levels indicate WHERE, structure indicates trend direction
5. **Patient observation** - Awaiting price arrival at levels before trade evaluation

---

## Support

Additional resources available:
- [<span class="signal-pilot-brand">Signal Pilot</span> Suite Overview](https://docs.signalpilot.io/suite-index/) - Indicator combination strategies
- [Suite Workflow](ref-workflow.md) - Complete trading system
- [Support](about-support.md) - Support resources

---

## See Also

**Related Pages:**
- [Pentarch v1.0](pentarch-v10.md) - Combine structural levels with cycle timing signals
- [Omnideck v1.0](omnideck-v10.md) - All-in-one indicator including Janus Atlas levels
- [Janus Atlas Levels Guide](ref-cheatsheets/janus-atlas-levels-guide.md) - Quick reference for all 50+ levels
- [How to Set Up Alerts](../how-to-alerts.md) - Get notified when price reaches key levels
- [Trading Workflow](../ref-workflow.md) - How Janus Atlas fits into complete trading system

---

**Summary:** Janus Atlas displays WHERE price may potentially react. Combining it with Pentarch (WHEN potential reversals may occur) or other indicators often enhances analysis.

**Level trading with structural awareness** 🎯

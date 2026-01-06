# Screenshot Placeholder Guide

**Total Screenshots Needed:** 9
**All for:** Janus Atlas v1.0 Documentation
**Page URL:** `https://docs.signalpilot.io/janus-atlas-v10.html`

---

## Directory Setup

Create this folder before adding images:
```
assets/images/janus-atlas/
```

---

## Screenshot Checklist

| # | Filename | Section | Status |
|---|----------|---------|--------|
| 1 | `opening-range-levels.png` | Opening Range (OR) | ⬜ |
| 2 | `killzone-background.png` | Killzones | ⬜ |
| 3 | `custom-session-setup.png` | Custom Sessions | ⬜ |
| 4 | `gap-levels-fill.png` | Gap Levels | ⬜ |
| 5 | `confluence-zone.png` | Confluence Zones | ⬜ |
| 6 | `distance-table.png` | Distance Table | ⬜ |
| 7 | `settings-panel-overview.png` | Settings | ⬜ |
| 8 | `label-with-price.png` | Appearance Settings | ⬜ |
| 9 | `alert-dropdown-format.png` | Alert Configuration | ⬜ |

---

## Detailed Screenshot Specifications

---

### 1. Opening Range Levels

| Property | Value |
|----------|-------|
| **Filename** | `opening-range-levels.png` |
| **Save to** | `assets/images/janus-atlas/opening-range-levels.png` |
| **Doc location** | Line 79 in `docs/janus-atlas-v10.md` |
| **Section** | ⏱️ Opening Range (OR) |

#### What to Capture
A TradingView chart showing the Opening Range feature in action.

#### Must Include
- [ ] Clear `orH` label (Opening Range High)
- [ ] Clear `orL` label (Opening Range Low)
- [ ] Optionally `orMid` label if enabled
- [ ] Horizontal lines extending to the right from the OR levels
- [ ] The actual opening range time window visible (e.g., 9:30-10:00 AM)
- [ ] Price action showing the first 30 minutes of the session

#### Ideal Setup
- **Symbol:** ES (E-mini S&P 500) or NQ futures
- **Timeframe:** 5-minute chart
- **Time:** Show NY session open (9:30 AM ET)
- **Best scenario:** Price breaking above or below OR after it forms (shows the "launchpad" concept)

#### Example Description
"ES 5-min chart showing Opening Range between 9:30-10:00 AM. orH at 4520, orL at 4505, with price breaking above orH around 10:15 AM."

---

### 2. Killzone Background Shading

| Property | Value |
|----------|-------|
| **Filename** | `killzone-background.png` |
| **Save to** | `assets/images/janus-atlas/killzone-background.png` |
| **Doc location** | Line 115 in `docs/janus-atlas-v10.md` |
| **Section** | 🕐 Killzones |

#### What to Capture
A TradingView chart showing the killzone background shading feature.

#### Must Include
- [ ] Subtle, semi-transparent background shading behind price action
- [ ] At least ONE killzone visible (preferably NY Open: 8:30-11:00 AM)
- [ ] The shading should be ~90% transparent (very subtle)
- [ ] Price candles clearly visible THROUGH the shading

#### Ideal Setup
- **Symbol:** Any liquid market (ES, NQ, BTC)
- **Timeframe:** 15-minute or 30-minute chart
- **Show:** Multiple killzones if possible (e.g., London Open + NY Open overlapping slightly)
- **Color:** Use default colors or visually distinct ones

#### Example Description
"Chart showing London Open killzone (2:00-5:00 AM) with subtle blue shading, transitioning into NY Open killzone (8:30-11:00 AM) with subtle orange shading. Price candles are clearly visible through the transparent background."

---

### 3. Custom Session Setup

| Property | Value |
|----------|-------|
| **Filename** | `custom-session-setup.png` |
| **Save to** | `assets/images/janus-atlas/custom-session-setup.png` |
| **Doc location** | Line 143 in `docs/janus-atlas-v10.md` |
| **Section** | 🎯 Custom Sessions |

#### What to Capture
The TradingView settings panel showing the Custom Sessions configuration.

#### Must Include
- [ ] The settings panel/input dialog open
- [ ] Custom Session name input field (e.g., "Globex")
- [ ] Time window input (e.g., "0800-1400")
- [ ] Toggle switches for O/H/L/Mid
- [ ] Color picker visible or color selection shown

#### Ideal Setup
- **Show:** Settings Group 5 (Custom Sessions) expanded
- **Example values:**
  - Name: "Globex" or "London"
  - Time: "1800-0930" or similar
- **Toggles:** Show O, H, L enabled, Mid disabled

#### Example Description
"TradingView indicator settings showing Custom Session 1 configuration: Name field with 'Globex', Time field with '1800-0930', checkboxes for Show Open/High/Low (checked) and Mid (unchecked), with a cyan color selected."

---

### 4. Gap Levels with Fill

| Property | Value |
|----------|-------|
| **Filename** | `gap-levels-fill.png` |
| **Save to** | `assets/images/janus-atlas/gap-levels-fill.png` |
| **Doc location** | Line 185 in `docs/janus-atlas-v10.md` |
| **Section** | 📊 Gap Levels |

#### What to Capture
A chart showing gap levels AND a gap fill event.

#### Must Include
- [ ] `gapH` label marking the gap high
- [ ] `gapL` label marking the gap low
- [ ] Visible gap zone between previous close and current open
- [ ] **CRITICAL:** Price filling the gap (touching the opposite side)
- [ ] "Gap Filled" marker/label if the indicator shows it

#### Ideal Setup
- **Symbol:** Stock or index with clear overnight gap
- **Timeframe:** 15-minute or 1-hour chart
- **Scenario:**
  - Gap UP: Previous close at $100, open at $103, then price drops back to $100 (fills gap)
  - Gap DOWN: Previous close at $100, open at $97, then price rises back to $100 (fills gap)

#### Example Description
"SPY 15-min chart showing a gap up. gapL at $442 (previous close), gapH at $445 (today's open). Price gaps up, trades higher, then pulls back through the gap zone and touches gapL, triggering the 'Gap Filled' marker."

---

### 5. Confluence Zone

| Property | Value |
|----------|-------|
| **Filename** | `confluence-zone.png` |
| **Save to** | `assets/images/janus-atlas/confluence-zone.png` |
| **Doc location** | Line 273 in `docs/janus-atlas-v10.md` |
| **Section** | 🎯 Confluence Zones |

#### What to Capture
A chart showing the automatic confluence zone highlighting.

#### Must Include
- [ ] Semi-transparent highlighted box/zone on the chart
- [ ] At least 3 levels converging within the zone
- [ ] Visible level labels (e.g., dH, wVWAP, pdH all near each other)
- [ ] Zone label if enabled (showing confluence)

#### Ideal Setup
- **Symbol:** Any liquid market
- **Timeframe:** 1-hour or 4-hour chart
- **Scenario:** Find a spot where:
  - Daily High + Weekly VWAP + Previous Day High cluster together
  - OR: Weekly Low + Monthly VWAP + POC cluster together
- **Zone color:** Yellow or distinctive color (~80% transparent)

#### Example Description
"ES 1-hour chart showing a confluence zone between 4540-4548. The semi-transparent yellow box highlights where Daily High (4542), Weekly VWAP (4545), and Previous Day High (4547) all cluster within 20 ticks. Zone label shows '3 levels'."

---

### 6. Distance Table

| Property | Value |
|----------|-------|
| **Filename** | `distance-table.png` |
| **Save to** | `assets/images/janus-atlas/distance-table.png` |
| **Doc location** | Line 314 in `docs/janus-atlas-v10.md` |
| **Section** | 📋 Distance Table |

#### What to Capture
The on-chart distance table showing nearest levels.

#### Must Include
- [ ] The table widget visible in corner of chart (default: top right)
- [ ] "Level" and "Dist" column headers (or similar)
- [ ] At least 4 levels listed
- [ ] ↑ arrows for levels ABOVE current price
- [ ] ↓ arrows for levels BELOW current price
- [ ] Distance values (in ticks, points, or %)

#### Ideal Setup
- **Position:** Top Right corner (default)
- **Levels shown:** 4-6 levels
- **Example content:**
  ```
  Level    Dist
  dH       ↑ 45
  wVWAP    ↑ 12
  pdL      ↓ 23
  asL      ↓ 67
  ```

#### Example Description
"On-chart distance table in top-right corner showing 4 nearest levels: dH (↑ 45 ticks above), wVWAP (↑ 12 ticks above), pdL (↓ 23 ticks below), asL (↓ 67 ticks below). Dark semi-transparent background with white text."

---

### 7. Settings Panel Overview

| Property | Value |
|----------|-------|
| **Filename** | `settings-panel-overview.png` |
| **Save to** | `assets/images/janus-atlas/settings-panel-overview.png` |
| **Doc location** | Line 440 in `docs/janus-atlas-v10.md` |
| **Section** | ⚙️ Settings |

#### What to Capture
The full TradingView settings panel showing all 14 groups.

#### Must Include
- [ ] TradingView indicator settings dialog open
- [ ] All 14 numbered groups visible (may need to scroll or show collapsed view)
- [ ] Group names clearly readable:
  1. Controls
  2. Appearance
  3. HTF Levels
  4. Session Levels
  5. Custom Sessions
  6. Opening Range
  7. Killzones
  8. Gap Levels
  9. VWAP Levels
  10. Volume Profile
  11. Previous Periods
  12. Confluence Zones
  13. Market Structure
  14. Distance Table

#### Ideal Setup
- **Show:** Settings panel in "collapsed" view if possible so all groups are visible
- **Alternatively:** Take a longer/scrolling screenshot showing all groups

#### Example Description
"TradingView settings panel for Janus Atlas v1.0 showing all 14 numbered configuration groups. Groups are collapsed showing: 1-Controls, 2-Appearance, 3-HTF Levels, 4-Session Levels... through 14-Distance Table."

---

### 8. Label with Price

| Property | Value |
|----------|-------|
| **Filename** | `label-with-price.png` |
| **Save to** | `assets/images/janus-atlas/label-with-price.png` |
| **Doc location** | Line 456 in `docs/janus-atlas-v10.md` |
| **Section** | Appearance Settings (Group 2) |

#### What to Capture
A chart showing level labels WITH price values displayed.

#### Must Include
- [ ] "Show Price on Labels" setting ENABLED
- [ ] At least one label showing the format: `code • price`
- [ ] Example: `dH • 245.50` or `wVWAP • 4521.25`
- [ ] The bullet point separator (•) between code and price

#### Ideal Setup
- **Show:** Multiple labels with prices for variety
- **Examples:**
  - `dH • 4525.50`
  - `dL • 4498.25`
  - `wVWAP • 4512.00`

#### Example Description
"Close-up of chart labels showing 'Show Price on Labels' enabled. Labels display: 'dH • 4525.50', 'dL • 4498.25', 'wVWAP • 4512.00' with the bullet separator between the code and price value."

---

### 9. Alert Dropdown Format

| Property | Value |
|----------|-------|
| **Filename** | `alert-dropdown-format.png` |
| **Save to** | `assets/images/janus-atlas/alert-dropdown-format.png` |
| **Doc location** | Line 523 in `docs/janus-atlas-v10.md` |
| **Section** | Alert Configuration |

#### What to Capture
The TradingView alert creation dialog showing the alert dropdown.

#### Must Include
- [ ] TradingView "Create Alert" dialog open
- [ ] The condition dropdown expanded (showing alert options)
- [ ] Alert names in format: `code • Full Name`
- [ ] Examples visible:
  - `dH • Daily High`
  - `wL • Weekly Low`
  - `asH • Asian High`
  - `CHoCH • 🟢 Bullish`

#### Ideal Setup
- **Steps to capture:**
  1. Click alarm icon on TradingView
  2. Add Janus Atlas as the indicator
  3. Click the condition dropdown
  4. Screenshot showing multiple alert options

#### Example Description
"TradingView Create Alert dialog with Janus Atlas selected. Dropdown expanded showing alerts: 'dH • Daily High', 'dL • Daily Low', 'wH • Weekly High', 'asH • Asian High', 'CHoCH • 🟢 Bullish', etc."

---

## After Capturing Screenshots

### 1. Save Files
Save each screenshot to:
```
/assets/images/janus-atlas/[filename].png
```

### 2. Uncomment in Documentation
For each screenshot, remove the HTML comment markers in `docs/janus-atlas-v10.md`:

**Before:**
```html
<!-- Screenshot: Opening Range levels on chart showing orH, orL labels -->
<!-- ![Opening Range levels](../assets/images/janus-atlas/opening-range-levels.png) -->
```

**After:**
```markdown
![Opening Range levels](../assets/images/janus-atlas/opening-range-levels.png)
```

### 3. Image Optimization Tips
- **Format:** PNG for UI screenshots, JPG for chart screenshots (smaller file size)
- **Width:** 800-1200px recommended
- **Annotation:** Consider adding arrows or highlights if helpful
- **Dark mode:** Match your site's theme (dark mode preferred based on your CSS)

---

## Quick Reference Card

| # | Filename | What to Show |
|---|----------|--------------|
| 1 | `opening-range-levels.png` | Chart with orH/orL labels, first 30 min of session |
| 2 | `killzone-background.png` | Subtle transparent shading during trade windows |
| 3 | `custom-session-setup.png` | Settings panel with name, time, toggles, color |
| 4 | `gap-levels-fill.png` | gapH/gapL labels + price filling the gap |
| 5 | `confluence-zone.png` | Yellow box where 3+ levels cluster together |
| 6 | `distance-table.png` | Corner table showing ↑↓ distance to nearest levels |
| 7 | `settings-panel-overview.png` | Full settings with all 14 groups visible |
| 8 | `label-with-price.png` | Labels showing `dH • 245.50` format |
| 9 | `alert-dropdown-format.png` | Alert dialog with `code • name` format |

---

*Generated: 2026-01-06*

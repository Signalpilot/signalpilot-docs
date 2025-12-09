# Janus Atlas v1.0 Level Types Guide

**One-page cheat sheet for all 50+ price levels**

---

## 🌟 5 Core Levels (Start Here)

| Level | Abbr | Description | Use Case |
|-------|------|-------------|----------|
| Daily High | dH | Previous day's highest price | Intraday resistance |
| Daily Low | dL | Previous day's lowest price | Intraday support |
| Weekly High | WH | Previous week's highest price | Swing resistance |
| Weekly Low | WL | Previous week's lowest price | Swing support |
| Anchored VWAP | AVWAP | Volume-weighted avg from anchor | Dynamic S/R |

**Recommendation:** Master these 5 before enabling more levels

---

## 📊 All Level Types

### Monday Levels (4 types)
- **moO** - Monday Open
- **moH** - Monday High
- **moL** - Monday Low
- **moMid** - Monday Midpoint

### Daily Levels (4 types)
- **dO** - Daily Open
- **dH** - Daily High
- **dL** - Daily Low
- **dMid** - Daily Midpoint

### Weekly Levels (4 types)
- **wO** - Weekly Open
- **wH** - Weekly High
- **wL** - Weekly Low
- **wMid** - Weekly Midpoint

### Monthly Levels (4 types)
- **mO** - Monthly Open
- **mH** - Monthly High
- **mL** - Monthly Low
- **mMid** - Monthly Midpoint

### Quarterly Levels (4 types)
- **qO** - Quarterly Open
- **qH** - Quarterly High
- **qL** - Quarterly Low
- **qMid** - Quarterly Midpoint

### Asian Session (4 types)
- **asO** - Asian Session Open
- **asH** - Asian Session High
- **asL** - Asian Session Low
- **asMid** - Asian Session Midpoint

### European Session (4 types)
- **euO** - European Session Open
- **euH** - European Session High
- **euL** - European Session Low
- **euMid** - European Session Midpoint

### North American Session (4 types)
- **naO** - North American Session Open
- **naH** - North American Session High
- **naL** - North American Session Low
- **naMid** - North American Session Midpoint

### Opening Range (3 types) ⭐ NEW
- **orH** - Opening Range High
- **orL** - Opening Range Low
- **orMid** - Opening Range Midpoint

### Custom Sessions (8 types) ⭐ NEW
- **[Name]O** - Custom Session 1/2 Open
- **[Name]H** - Custom Session 1/2 High
- **[Name]L** - Custom Session 1/2 Low
- **[Name]Mid** - Custom Session 1/2 Midpoint

*Labels use first 3 characters of your session name*

### Gap Levels (2 types) ⭐ NEW
- **gapH** - Gap High (top of gap zone)
- **gapL** - Gap Low (bottom of gap zone)

### Previous Day Levels (4 types)
- **pdO** - Previous Day Open
- **pdH** - Previous Day High
- **pdL** - Previous Day Low
- **pdMid** - Previous Day Midpoint

### Previous Week Levels (4 types)
- **pwO** - Previous Week Open
- **pwH** - Previous Week High
- **pwL** - Previous Week Low
- **pwMid** - Previous Week Midpoint

### Previous Month Levels (4 types)
- **pmO** - Previous Month Open
- **pmH** - Previous Month High
- **pmL** - Previous Month Low
- **pmMid** - Previous Month Midpoint

### Previous Quarter Levels (4 types)
- **pqO** - Previous Quarter Open
- **pqH** - Previous Quarter High
- **pqL** - Previous Quarter Low
- **pqMid** - Previous Quarter Midpoint

### VWAP Lines (8 types)
- **dVWAP** - Daily VWAP
- **wVWAP** - Weekly VWAP
- **mVWAP** - Monthly VWAP
- **qVWAP** - Quarterly VWAP
- **pdVWAP** - Previous Day VWAP
- **pwVWAP** - Previous Week VWAP
- **pmVWAP** - Previous Month VWAP
- **pqVWAP** - Previous Quarter VWAP

### Volume Profile (9 types)
- **dPOC** - Daily Point of Control
- **dVAH** - Daily Value Area High
- **dVAL** - Daily Value Area Low
- **wPOC** - Weekly Point of Control
- **wVAH** - Weekly Value Area High
- **wVAL** - Weekly Value Area Low
- **mPOC** - Monthly Point of Control
- **mVAH** - Monthly Value Area High
- **mVAL** - Monthly Value Area Low

### Market Structure (6 types)
- **HH** - Higher High
- **HL** - Higher Low
- **LH** - Lower High
- **LL** - Lower Low
- **BOS** - Break of Structure
- **CHoCH** - Change of Character

**Total: 50+ Level Types**

---

## 🎯 Level Clusters (High Priority)

**Cluster:** 3+ levels within 1-2% range

**Example:**
- Daily High: 50,000
- Weekly High: 50,200
- Monthly VWAP: 50,100
- **Cluster Zone:** 50,000-50,200

**Why clusters matter:** Stronger S/R than individual levels

---

## 🎯 Confluence Zones ⭐ NEW

**What it is:** Automatic detection of level clusters

**Settings:**
- Minimum Levels: 3 (how many must cluster)
- Proximity: 20 ticks (how close they must be)
- Zone Color: Yellow (80% transparent)

**How it works:**
1. Scans all visible levels
2. Groups levels within proximity
3. Draws semi-transparent box around clusters
4. Updates in real-time

**Why it matters:** Automatically highlights what you'd manually look for

---

## 🕐 Killzones ⭐ NEW

**What they are:** Time-based institutional activity windows (visual only)

| Killzone | Default Time | Purpose |
|----------|--------------|---------|
| Asian | 2000-0000 | Asian session activity |
| London Open | 0200-0500 | London open volatility |
| NY Open | 0830-1100 | NY session activity |
| London Close | 1000-1200 | LC/NY overlap |
| NY PM | 1300-1600 | Afternoon session |

**Visual:** Subtle background shading during active killzones

**Note:** No alerts - killzones highlight WHEN, not WHERE

---

## ⏱️ Opening Range ⭐ NEW

**What it is:** High/Low of first X minutes of session

**Settings:**
- Session: Asian / Euro / NY / Custom
- Duration: 5 / 15 / 30 / 60 minutes

**Levels:** `orH`, `orL`, `orMid`

**Use case:** Breakout trading - price breaking OR often signals day direction

---

## 📋 Configuration by Trading Style

### Scalper (5m-15m charts)
**Enable:**
- Session levels (Asian/Euro/NA)
- Opening Range ⭐
- Daily VWAP
- Daily High/Low
- POC/VAH/VAL
- Killzones ⭐
- Distance Table ⭐

**Disable:** Weekly/Monthly/Quarterly

### Day Trader (1H-4H charts)
**Enable:**
- Daily + Weekly levels
- Opening Range ⭐
- Daily + Weekly VWAP
- POC/VAH/VAL
- Gap Levels ⭐
- Confluence Zones ⭐
- Market Structure

**Disable:** Monthly/Quarterly (unless at cluster)

### Swing Trader (Daily charts)
**Enable:**
- Weekly + Monthly levels
- Previous Periods (PD, PW)
- Weekly + Monthly VWAP
- Gap Levels ⭐
- Confluence Zones ⭐
- Market Structure

**Disable:** Session levels, Opening Range

### Position Trader (Weekly+ charts)
**Enable:**
- Weekly, Monthly, Quarterly levels
- Previous Periods (all)
- Monthly VWAP
- Confluence Zones ⭐

**Disable:** Daily, Session levels, Opening Range

---

## 🤝 Best Combinations

### With Pentarch
- **TD at Weekly Low** = Early-cycle + level support
- **CAP at Monthly High** = Late-cycle + level resistance
- **IGN near Daily Low cluster** = Markup confirmation

### With Volume Oracle
- **Daily Low + Volume Zone** = Price level + volume accumulation
- **Weekly High + Volume spike** = Distribution confirmation

### The Trinity
- **Pentarch pattern** at **Janus level** with **Volume spike**
- Example: IGN at Daily Low cluster + 2.0x volume

---

## ⚙️ Visual Settings

### Beginner Setup (Clean Chart)
- Enable: 5-7 core levels
- Line Width: Thin
- Opacity: 70%
- Labels: Small

### Advanced Setup (All Data)
- Enable: 15-25 relevant levels
- Color-code by timeframe
- Line Width: Varies by importance
- Labels: Medium

---

## ⚠️ When NOT to Use

❌ Assets with <6 months history (insufficient data)
❌ Parabolic moves without pullbacks (levels far away)
❌ Gap-heavy markets (stocks that gap frequently)

---

## 🔧 Troubleshooting

**"Too many lines on chart"**
→ Start with 5 core levels
→ Gradually add others as needed
→ Reduce opacity to 50%

**"Levels not showing"**
→ Check level toggle in settings
→ Ensure sufficient historical data
→ Try different timeframe

**"Price doesn't react at levels"**
→ Normal! Levels show WHERE reactions MAY occur
→ Not all levels get tested
→ Cluster zones more reliable than individual levels

---

## 📊 Level Significance Ranking

### Most Significant (Watch Closely)
1. ⭐⭐⭐⭐⭐ **Confluence Zones** (auto-detected clusters) ⭐ NEW
2. ⭐⭐⭐⭐⭐ **Weekly/Monthly High/Low**
3. ⭐⭐⭐⭐ **Daily High/Low**
4. ⭐⭐⭐⭐ **POC, VAH, VAL**
5. ⭐⭐⭐⭐ **Opening Range H/L** (intraday) ⭐ NEW

### Moderate Significance
6. ⭐⭐⭐ **VWAP lines**
7. ⭐⭐⭐ **Session High/Low**
8. ⭐⭐⭐ **Gap Levels** ⭐ NEW
9. ⭐⭐ **Previous Period levels**
10. ⭐⭐ **Quarterly levels**

### Context-Dependent
11. ⭐ **Midpoints, Opens**
12. ⭐ **Custom Session levels**
13. ⭐ **Market Structure labels**

---

## 💡 Pro Tips

1. **Fewer levels = clearer analysis**
2. **Focus on clusters, not every level**
3. **Higher timeframe levels > Lower timeframe**
4. **Test levels with paper trades first**
5. **Combine with volume confirmation**

---

## 📖 Key Concepts

**Support:** Price level where buying pressure historically exceeded selling
**Resistance:** Price level where selling pressure historically exceeded buying
**Cluster:** Multiple levels converging in tight range
**VWAP:** Volume-weighted average price
**POC:** Price with highest traded volume

---

## 📞 Need Help?

**Full Documentation:** [Janus Atlas v1.0 Complete Guide](../janus-atlas-v10.md)
**All Cheat Sheets:** [All Indicators At-A-Glance](all-indicators-at-a-glance.md)
**Support:** support@signalpilot.io

---

## See Also

**Related Pages:**
- [Janus Atlas v1.0](../janus-atlas-v10.md) - Complete indicator documentation
- [Pentarch Quick Reference](pentarch-quick-reference.md) - Combine levels with cycle timing
- [All Indicators At-A-Glance](all-indicators-at-a-glance.md) - Quick reference for all indicators

---

**Print this page for level reference** | Last Updated: December 2025

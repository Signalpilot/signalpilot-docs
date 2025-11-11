# Janus Atlas v1.0 Level Types Guide

**One-page cheat sheet for all 39 price levels**

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

## 📊 All 39 Level Types

### Daily Levels (5 types)
- **dH** - Daily High
- **dL** - Daily Low
- **dO** - Daily Open
- **dC** - Daily Close
- **dM** - Daily Midpoint

### Weekly Levels (5 types)
- **WH** - Weekly High
- **WL** - Weekly Low
- **WO** - Weekly Open
- **WC** - Weekly Close
- **WM** - Weekly Midpoint

### Monthly Levels (5 types)
- **MH** - Monthly High
- **ML** - Monthly Low
- **MO** - Monthly Open
- **MC** - Monthly Close
- **MM** - Monthly Midpoint

### Quarterly Levels (4 types)
- **QH** - Quarterly High
- **QL** - Quarterly Low
- **QO** - Quarterly Open
- **QC** - Quarterly Close

### Yearly Levels (4 types)
- **YH** - Yearly High
- **YL** - Yearly Low
- **YO** - Yearly Open
- **YC** - Yearly Close

### Asian Session (4 types)
- **AsH** - Asian Session High
- **AsL** - Asian Session Low
- **AsO** - Asian Session Open
- **AsC** - Asian Session Close

### European Session (4 types)
- **EuH** - European Session High
- **EuL** - European Session Low
- **EuO** - European Session Open
- **EuC** - European Session Close

### North American Session (4 types)
- **NAH** - North American Session High
- **NAL** - North American Session Low
- **NAO** - North American Session Open
- **NAC** - North American Session Close

### VWAP Lines (4 types)
- **DVWAP** - Daily VWAP
- **WVWAP** - Weekly VWAP
- **MVWAP** - Monthly VWAP
- **PrevVWAP** - Previous Period VWAP

### Volume Profile (4 types)
- **POC** - Point of Control (highest volume price)
- **VAH** - Value Area High (70% volume upper bound)
- **VAL** - Value Area Low (70% volume lower bound)
- **DevPOC** - Developing POC (real-time)

### Market Structure (2 types)
- **BOS** - Break of Structure
- **CHoCH** - Change of Character

**Total: 39 Level Types**

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

## 📋 Configuration by Trading Style

### Scalper (Intraday Levels Only)
Enable: dH, dL, Hourly H/L, Session H/L, POC
Disable: Weekly/Monthly/Quarterly/Yearly

### Day Trader (Intraday + Daily)
Enable: Daily levels, Hourly H/L, DVWAP, POC/VAH/VAL
Disable: Weekly/Monthly (unless at cluster)

### Swing Trader (Multi-Timeframe)
Enable: Daily, Weekly, Monthly, VWAP, POC/VAH/VAL
Disable: Session levels, intraday

### Position Trader (Higher Timeframes)
Enable: Weekly, Monthly, Quarterly, Yearly, MVWAP
Disable: Daily, Session levels

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
1. ⭐⭐⭐⭐⭐ **Level Clusters** (3+ levels)
2. ⭐⭐⭐⭐⭐ **Weekly/Monthly High/Low**
3. ⭐⭐⭐⭐ **Daily High/Low**
4. ⭐⭐⭐⭐ **POC, VAH, VAL**

### Moderate Significance
5. ⭐⭐⭐ **VWAP lines**
6. ⭐⭐⭐ **Session High/Low (Forex)**
7. ⭐⭐ **Quarterly/Yearly levels**

### Context-Dependent
8. ⭐ **Midpoints, Opens, Closes**
9. ⭐ **Market Structure labels**

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

**Full Documentation:** [Janus Atlas v1.0 Complete Guide](../../REVISED_DOCS_JANUS_ATLAS.md)
**All Cheat Sheets:** [All Indicators At-A-Glance](all-indicators-at-a-glance.md)
**Support:** support@signalpilot.io

---

**Print this page for level reference** | Last Updated: January 2025

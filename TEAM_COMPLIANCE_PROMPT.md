# Signal Pilot Documentation Compliance Guide

**For: Education Team & Main Repository Team**
**Last Updated: 2025-10-29**

---

## 🚨 Critical: This Guide is Mandatory for All Content Creation

All educational content, documentation, marketing materials, and code comments **must** follow these guidelines to maintain compliance and protect intellectual property.

---

## 1️⃣ SIGNAL NAMING & DESCRIPTION (STRICT COMPLIANCE)

### The Golden Rule: ALL Signals Use "Indicates"

**NEVER use:** confirms, signals, detects, marks, shows, means, represents, signifies

**ALWAYS use:** "Indicates [condition]"

### Exact Signal Descriptions (Use These Verbatim):

#### Pentarch v8.9 Signals:

| Signal | Exact Description | ❌ WRONG | ✅ CORRECT |
|--------|-------------------|----------|------------|
| **TD** (Touchdown) | Indicates early-cycle reversal conditions | "TD confirms a bottom" | "TD indicates early-cycle reversal conditions" |
| **IGN** (Ignition) | Indicates momentum breakout conditions | "IGN signals a buy" | "IGN indicates momentum breakout conditions" |
| **WRN** (Warning) | Indicates weakening momentum | "WRN warns of reversal" | "WRN indicates weakening momentum" |
| **CAP** (Climax) | Indicates late-cycle exhaustion conditions | "CAP marks the top" | "CAP indicates late-cycle exhaustion conditions" |
| **BDN** (Breakdown) | Indicates bearish breakdown conditions | "BDN confirms breakdown" | "BDN indicates bearish breakdown conditions" |

### Terminology Replacements:

- ❌ "Capitulation" → ✅ "Climax" (for CAP signal)
- ❌ "confirms" → ✅ "indicates"
- ❌ "tells you" → ✅ "shows you"
- ❌ "bottom/top" → ✅ "early-cycle/late-cycle"
- ❌ "always wins" → ✅ "is key" or "is important"

---

## 2️⃣ DIRECTIVE vs EDUCATIONAL LANGUAGE (COMPLIANCE)

**Problem:** Giving trading advice opens us to regulatory liability.

**Solution:** Use educational/informational language only.

### ❌ FORBIDDEN Patterns (Trading Advice):

```
❌ "Enter on IGN"
❌ "Exit when CAP appears"
❌ "Set your stop below IGN"
❌ "DO NOT trade against HTF"
❌ "Take profit at resistance"
❌ "Wait for candle close"
❌ "You should..."
❌ "You must..."
❌ "Never trade without stops"
❌ "Always use 2:1 R/R"
❌ "Full exit when..."
❌ "Primary entry signal"
```

### ✅ APPROVED Patterns (Educational):

```
✅ "IGN is commonly used as a potential entry signal"
✅ "Many traders consider exiting when CAP appears"
✅ "Common stop placement: below IGN candle"
✅ "Trading against HTF is associated with lower probability"
✅ "Resistance levels are often used for profit targets"
✅ "Many traders wait for candle close before evaluating"
✅ "Traders often..."
✅ "Common practice includes..."
✅ "Trading without stops is generally considered high-risk"
✅ "Many traders use minimum 2:1 R/R"
✅ "Higher-conviction scenarios include..."
✅ "Often used as a potential entry signal"
```

### Conversion Guide:

| ❌ Directive (Advice) | ✅ Educational (Compliant) |
|----------------------|---------------------------|
| "Best practice:" | "Common usage patterns:" |
| "You should..." | "Many traders..." / "Typical approach..." |
| "Never do X" | "X is generally considered high-risk" |
| "Always do Y" | "Y is standard practice" / "Y is commonly used" |
| "Do this" | "This is often done" / "Common approach includes" |
| "Primary signal for..." | "Commonly used as..." / "Often used for..." |
| "Enter on IGN" | "IGN is typically used as a potential entry signal" |
| "Set stop at X" | "Common stop placement: X" |
| "Exit when CAP" | "CAP often triggers exit consideration" |
| "Wait for close" | "Many traders wait for close" |
| "Full exit when:" | "Higher-conviction scenarios:" |
| "Rules:" | "Common guidelines:" |

### Example Rewrites:

**BEFORE (Non-Compliant):**
```
### IGN Signal - Best Practice

✅ Primary long entry signal
- Enter immediately on candle close
- Set stop below IGN candle
- Target resistance level
- DO NOT enter without HTF confirmation

Rules:
- Wait for candle close
- Minimum 2:1 R/R
- Never enter against HTF trend
```

**AFTER (Compliant):**
```
### IGN Signal - Common Usage Patterns

IGN is commonly used as a potential long entry signal
- Many traders evaluate after candle close
- Common stop placement: below IGN candle
- Resistance levels often used as targets
- HTF confirmation is typically preferred for higher-conviction setups

Common guidelines:
- Many traders wait for candle close before evaluating
- Minimum 2:1 R/R is often used
- Trading against HTF trend is associated with lower probability
```

---

## 3️⃣ INTELLECTUAL PROPERTY PROTECTION (SECURITY)

**Problem:** Early documentation exposed complete implementation details that could enable reverse engineering.

**Solution:** Describe benefits and features, NOT technical specifications or algorithms.

### ❌ NEVER EXPOSE:

- Z-score methods or parameters (e.g., "±2σ around 20-SMA")
- Exact vote counts (e.g., "4-vote regime detection")
- Component counts (e.g., "3-component oscillator")
- Formula specifics (e.g., "winsorized Z-scores with 3× cap")
- Algorithm names (e.g., "FlipGuard Z-Gate 2.0")
- Performance specs (e.g., "168 security calls")
- Exact thresholds (e.g., "threshold = 0.237")
- Calculation methods (e.g., "uses RSI(14) + CCI(20) + MFI(14)")
- Weight distributions (e.g., "RSI weighted 40%, CCI 35%, MFI 25%")

### ✅ APPROVED Language:

- "Advanced volume spike detection"
- "Multi-factor regime identification"
- "Composite momentum analysis"
- "Volatility-adaptive features"
- "Higher timeframe confirmation system"
- "Proprietary scoring algorithm"
- "Multi-dimensional analysis"

### Example:

**BEFORE (Exposed IP):**
```
Minimal Flow Elite Spike Detection:
- Uses Z-score method with ±2σ thresholds
- 4-vote regime system (optimized weights: 35/30/20/15)
- Winsorized Z-scores with 3× cap
- HTF confirmation via 3-timeframe vote system
- Requires 168 security calls per calculation
```

**AFTER (Protected IP):**
```
Minimal Flow Elite Spike Detection:
- Advanced statistical spike detection
- Multi-factor regime identification
- Robust outlier handling
- Higher timeframe confirmation system
- Optimized for performance
```

---

## 4️⃣ FEATURE DOCUMENTATION STATUS

### ✅ Pilot Line - FULLY DOCUMENTED
- **Documentation location:** pentarch-v89.md (lines 136-192), ref-glossary.md (lines 69-89)
- **Coverage:** Complete
  - What it is: Double-smoothed EMA (34, then 3)
  - Color system: Green (uptrend), Red (downtrend), Orange (transitional)
  - Function: Primary trend filter and reference point
  - Ribbon visualization and distance metrics
  - How it works with event signals
  - Common usage patterns
  - Non-repainting confirmation
- **Compliance:** All language educational ("many traders...", "often used as...")

### ✅ Regime Bar Colors - FULLY DOCUMENTED
- **Documentation location:** pentarch-v89.md (lines 194-262), ref-glossary.md (lines 92-116)
- **Coverage:** Complete
  - 3-factor voting system (EMA structure, price vs PL, slope)
  - How regime changes (2 of 3 votes, sustained 2-4 bars)
  - Visual: Green candles (bull), Red candles (bear)
  - Trading bias implications
  - Event signal relationship to regime
  - Regime flip signals and interpretation
- **Compliance:** All language educational (no directives)

### ✅ NanoFlow - FULLY DOCUMENTED
- **Documentation location:** pentarch-v89.md (lines 264-369), ref-glossary.md (lines 118-139)
- **Coverage:** Complete
  - What it is: Micro-momentum indicator (9 vs 21 EMA)
  - Conditions for bullish/bearish crosses
  - Frequency: 10-30/day vs 3-8/day for main events
  - NOT a trade signal - context/confirmation tool
  - Trend health checking, event confirmation, chop detection
  - Examples and usage scenarios
- **Compliance:** All language educational, explicitly states "NOT a trade signal"

### ✅ Integration Documentation
- **"How All Components Work Together" section added** (pentarch-v89.md lines 371-439)
  - 4-layer visual hierarchy (Regime → Pilot Line → NanoFlow → Events)
  - Complete signal sequence example
  - Decision flow guide

**All critical feature gaps have been addressed with comprehensive, compliance-safe documentation.**

---

## 5️⃣ PRACTICAL CHECKLIST

Before publishing ANY content, verify:

### Signal Descriptions:
- [ ] All 5 Pentarch signals use exact descriptions from Section 1
- [ ] No signal uses "confirms", "signals", "detects", or "marks"
- [ ] All signals use "indicates [condition]"
- [ ] CAP is called "Climax" not "Capitulation"
- [ ] No "bottom/top" language - use "early-cycle/late-cycle"

### Language Compliance:
- [ ] No directive commands ("Do this", "Enter here", "Exit when")
- [ ] No "Never"/"Always" statements as trading rules
- [ ] All advice converted to educational patterns ("Many traders...", "Common approach...")
- [ ] No "Best practice:" headers - use "Common usage patterns:"
- [ ] No "Rules:" - use "Common guidelines:"

### IP Protection:
- [ ] No Z-score parameters or methods
- [ ] No exact vote counts or component counts
- [ ] No formula specifications
- [ ] No algorithm names with version numbers
- [ ] No calculation methods or weights
- [ ] Features described by benefits, not implementation

### Feature Coverage:
- [x] Pilot Line properly documented (pentarch-v89.md, ref-glossary.md)
- [x] NanoFlow properly documented (pentarch-v89.md, ref-glossary.md)
- [x] Regime bar colors properly explained (pentarch-v89.md, ref-glossary.md)

---

## 6️⃣ SELF-AUDIT PATTERNS

Use these regex/search patterns to find violations:

### Search for Directive Language:
```
Search for: "Enter on", "Exit when", "Set stop", "Take profit", "DO NOT", "Never trade", "Always use", "You should", "You must", "Wait for", "Primary signal", "Best practice:", "Rules:"

Replace with: Educational alternatives from Section 2
```

### Search for Signal Naming Violations:
```
Search for: "confirms", "signals", "detects", "marks", "TD confirms", "IGN signals", "bottom", "top", "Capitulation"

Replace with: Exact descriptions from Section 1
```

### Search for IP Exposure:
```
Search for: "Z-score", "vote", "-component", "σ", "sigma", "weighted", "threshold =", "algorithm", "calculation", "formula"

Flag for review: May need sanitization
```

---

## 7️⃣ REAL EXAMPLES FROM RECENT FIXES

### Example 1: Signal Description Fix

**BEFORE:**
```
### CAP (Capitulation)
Confirms that price has reached a top. Marks the end of the trend.
```

**AFTER:**
```
### CAP (Climax)
Indicates late-cycle exhaustion conditions.
```

---

### Example 2: Directive Language Fix

**BEFORE:**
```
#### CAP (Climax)

**Best practice:**
- ✅ Exit or dramatically tighten stops on longs
- Consider partial profit-taking
- Move stop to protect profits

**Full exit when:**
- CAP at major resistance
- After extended run
- Against HTF downtrend
```

**AFTER:**
```
#### CAP (Climax)

**Common usage patterns:**
- Often used as exit consideration for long positions
- Many traders adjust stops or take profits
- Can be used to watch for BDN confirmation for shorts

**Higher-conviction CAP scenarios:**
- CAP at major resistance levels
- Following extended price moves
- Against higher timeframe downtrends
```

---

### Example 3: IP Protection Fix

**BEFORE:**
```
Minimal Flow v4.0:
- Elite spike detection (Z-score method with ±2σ thresholds)
- 4-vote regime detection (optimized weights)
- Winsorized Z-scores with 3× cap
- Volatility adaptation (HIGH/NORMAL/LOW thresholds)
```

**AFTER:**
```
Minimal Flow v4.0:
- Significant volume spike detection
- Multi-factor market regime identification
- Robust statistical methods
- Volatility-adaptive features
```

---

### Example 4: Psychological Section Fix

**BEFORE:**
```
### Discipline Rules

1. **Never trade without stop loss** - No exceptions
2. **Never move stop toward entry** - Only trail in profit
3. **Never increase position size after losses** - Revenge trading kills accounts
```

**AFTER:**
```
### Common Discipline Guidelines

1. **Stop loss usage** - Trading without stops is generally considered high-risk
2. **Stop management** - Moving stops toward entry increases risk; trailing in profit is more common
3. **Position sizing after losses** - Increasing size after losses (revenge trading) often leads to larger losses
```

---

## 8️⃣ WHEN IN DOUBT

**Ask yourself:**
1. **Am I telling someone what to do?** → Convert to "Many traders do..." or "Common approach includes..."
2. **Am I describing a signal's meaning?** → Use exact description from Section 1
3. **Am I exposing how we built this?** → Describe the benefit, not the method
4. **Would a regulator consider this trading advice?** → Rewrite as educational information
5. **Are Pilot Line, Nanoflows, and regime colors properly covered?** → Add if missing

---

## 9️⃣ TEAM RESPONSIBILITIES

### Education Team:
- All course materials must use approved signal descriptions (Section 1)
- All examples must use educational language (Section 2)
- No algorithm details in teaching materials (Section 3)
- Ensure Pilot Line, Nanoflows, and regime colors are taught comprehensively (Section 4)

### Main Repository Team:
- Code comments must not expose proprietary formulas (Section 3)
- README and documentation must use approved language (Sections 1-2)
- Release notes must be compliance-checked
- Example scripts must use educational framing
- Ensure all major features are represented in examples (Section 4)

### Marketing Team:
- All claims must be educational, not advisory
- Signal descriptions must match Section 1 exactly
- No exposed IP in marketing materials (Section 3)
- Highlight ALL major features including Pilot Line, Nanoflows, regime colors (Section 4)

---

## 🔟 EMERGENCY CONTACT

If you encounter content that doesn't fit these guidelines or are unsure how to rewrite something:

1. **Flag it for review** - Do not publish
2. **Document the specific question** - What are you trying to say?
3. **Propose alternatives** - Suggest 2-3 compliant versions
4. **Escalate** - Get leadership approval before publishing

---

## ✅ QUICK REFERENCE CARD

**Print this and keep at your desk:**

```
SIGNAL NAMING:
✅ "Indicates early-cycle reversal conditions" (TD)
✅ "Indicates momentum breakout conditions" (IGN)
✅ "Indicates weakening momentum" (WRN)
✅ "Indicates late-cycle exhaustion conditions" (CAP/Climax)
✅ "Indicates bearish breakdown conditions" (BDN)
❌ Never: confirms, signals, detects, marks, bottom, top, Capitulation

LANGUAGE:
✅ "Many traders..." / "Common approach..." / "Often used as..."
❌ Never: "Do this", "Never do", "Always", "You should", "Best practice:"

IP PROTECTION:
✅ "Advanced detection", "Multi-factor analysis", "Proprietary algorithm"
❌ Never: Z-scores, vote counts, exact formulas, thresholds, weights

MISSING FEATURES - DOCUMENT:
⚠️ Pilot Line (most truthful indicator)
⚠️ Nanoflows (completely missing)
⚠️ Regime bar colors (completely missing)
```

---

**This guide is mandatory for all content creation. Violations create legal and competitive risk.**

**Questions? Escalate before publishing.**

---

*Document version: 1.0 (2025-10-29)*
*Next review: Quarterly or as regulations change*

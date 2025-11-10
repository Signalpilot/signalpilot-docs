# Harmonic Oscillator Page - Complete Rewrite Needed

## Problem
The entire page documents the WRONG oscillators:
- ❌ RSI, Stochastic, CCI, Williams %R, MFI

## Actual v3.4 Code Uses
**5 Voting Components:**
1. MACD Vote
2. RSI Vote (triple envelope)
3. Stochastic RSI Vote
4. Volume Vote
5. Divergence Vote

---

## Sections That Need Complete Rewriting

### 1. Educational Example Table (Lines 2013-2053)
**Currently Shows:**
```
Oscillator Votes: RSI: Bullish, Stoch: Bullish, CCI: Bullish, Williams: Neutral, MFI: Bullish
```

**Should Show:**
```
Component Votes: MACD: Bullish, RSI: Bullish, StochRSI: Bullish, Volume: Neutral, Divergence: Bullish
```

---

### 2. Oscillator Configuration Table (Lines 2059-2096)
**Currently Shows:**
| Oscillator | Parameters | Default |
|------------|------------|---------|
| RSI | Period, OB, OS | 14, 70, 30 |
| Stochastic | %K, %D, Smooth | 14, 3, 3 |
| CCI | Period | 20 |
| Williams %R | Period | 14 |
| MFI | Period | 14 |

**Should Show:**
| Component | Parameters | Default |
|-----------|------------|---------|
| MACD | Fast, Slow, Signal | 12, 26, 9 |
| RSI Triple Envelope | Periods | 7, 14, 28 |
| Stochastic RSI | %K, %D, RSI Length | 3, 3, 14 |
| Volume | Delta Threshold | Auto |
| Divergence | Lookback Periods | 5 |

---

### 3. Understanding Sections (Lines ~2200-2217)
**Currently Has 3 Wrong Sections:**
- CCI (Commodity Channel Index) explanation
- Williams %R explanation
- MFI (Money Flow Index) explanation

**Should Have:**
- MACD Vote explanation (crosses + gates)
- Volume Vote explanation (delta patterns)
- Divergence Vote explanation (price/oscillator divergence)

(RSI and Stochastic RSI explanations probably exist, need to update for triple envelope)

---

### 4. Examples Throughout Page
**Line 2165:**
```
Example: RSI bullish (45), Stochastic bullish (K>D), CCI bullish (>0), Williams neutral, MFI neutral → 3 bullish votes = BUY
```

**Should Be:**
```
Example: MACD bullish (crossed up), RSI bullish (in envelope), StochRSI neutral, Volume bullish (positive delta), Divergence neutral → 3 bullish votes = BUY
```

**Line 2174:**
```
Example: RSI bearish (55), Stochastic bearish (K<D), CCI bearish (<0), Williams bearish, MFI neutral → 4 bearish votes = SELL
```

**Should Be:**
```
Example: MACD bearish (crossed down), RSI bearish (in envelope), StochRSI bearish (oversold cross), Volume bearish (negative delta), Divergence neutral → 4 bearish votes = SELL
```

**Line 2193:**
```
Example: RSI neutral, Stoch bullish, CCI bearish, Williams neutral, MFI bearish → 2 bearish, 1 bullish, 2 neutral = NEUT
```

**Should Be:**
```
Example: MACD neutral, RSI neutral, StochRSI bullish, Volume bearish, Divergence bearish → 2 bearish, 1 bullish, 2 neutral = NEUT
```

---

### 5. Quick Reference Tables (Lines ~2243-2245, 2488-2500)
**Currently Has Columns:**
- CCI
- Williams
- MFI

**Should Have Columns:**
- MACD
- Volume
- Divergence

---

### 6. Example Text (Line 2311)
**Currently:**
```
BUY at 4,720: Three oscillators agreed bullish (RSI, Stoch, Williams).
```

**Should Be:**
```
BUY at 4,720: Three components agreed bullish (MACD, RSI, StochRSI).
```

---

### 7. Disclaimer (Line 2520)
**Currently:**
```
This indicator combines five technical oscillators (RSI, Stochastic, CCI, Williams %R, MFI) into a consensus-based signal system.
```

**Should Be:**
```
This indicator combines five voting components (MACD, RSI triple envelope, Stochastic RSI, Volume delta, Divergence detection) into a consensus-based signal system.
```

---

## Estimated Changes
- **30+ lines** need direct edits
- **Multiple sections** need complete rewrites
- **Examples** need new vote combinations
- **Tables** need new rows/columns

## Recommendation
This page needs a MAJOR REWRITE to match actual v3.4 code.

Options:
1. **Full automated rewrite** - I systematically replace every mention (risky, might miss context)
2. **Section-by-section manual rewrite** - I rewrite each section carefully (safer, slower)
3. **Create new page from scratch** - Start fresh with correct architecture (cleanest)

**What would you prefer?**

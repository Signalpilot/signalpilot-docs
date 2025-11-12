# Navigation Duplication Issue - Analysis & Fix

## Problem Reported

**Mobile sidebar** shows duplicate navigation items:
- "Quick Start" (⚡ Quick Start (5 min))
- "Quickstart Guide"

**Desktop sidebar** only shows:
- "Quickstart"

## Root Cause

There are **three** directories related to "quickstart" or "suite overview":

```
1. /start-quick/                → "⚡ Quick Start (5 min)" - Correct
2. /start-quickstart/          → Contains "Suite Overview" content (MISNAMED)
3. /suite-index/               → Correct "Suite Overview" page
```

### Issue Details

The `start-quickstart/` directory is **misnamed**. It contains:
- **Title**: "🚀 Suite Overview — The 7 Signal Pilot Indicators"
- **Content**: Suite overview, not a quickstart guide
- **Should be**: Removed or renamed to match its actual content

### Impact

- Creates confusion in navigation (duplicate-seeming entries)
- Users see "Quick Start" and "Quickstart" as separate items
- Mobile navigation shows both, appears cluttered
- Desktop may only show one due to responsive navigation hiding

---

## Solution

### Option 1: Remove Duplicate Directory (Recommended)

**Delete** the `start-quickstart/` directory entirely:

```bash
rm -rf /home/user/signalpilot-docs/start-quickstart/
```

**Rationale:**
- `suite-index/` already provides Suite Overview
- `start-quick/` provides the actual Quick Start guide
- `start-quickstart/` is redundant and confusingly named

### Option 2: Rename for Clarity

If the content in `start-quickstart/` is actually different/valuable:

```bash
mv start-quickstart/ suite-overview-alt/
# Or
mv start-quickstart/ getting-started-overview/
```

---

## Fix in Source

**IMPORTANT:** This is a **generated static site**. The real fix must be made in the source:

### In `mkdocs.yml` (source repository)

Look for navigation configuration like:

```yaml
nav:
  - Getting Started:
    - Quick Start: start-quick.md
    - Quickstart Guide: start-quickstart.md    # ← REMOVE THIS
    - Suite Overview: suite-index.md
```

**Action:**
1. Remove the `start-quickstart.md` entry from `nav:`
2. Or rename to match actual content
3. Rebuild site: `mkdocs build --clean`
4. Redeploy

---

## Current Directory Analysis

| Directory | Title in HTML | Purpose | Status |
|-----------|---------------|---------|--------|
| `start-quick/` | "Quick Start - Get Your First Signal in 5 Minutes" | 5-min onboarding guide | ✅ Keep |
| `start-quickstart/` | "Suite Overview — How to Fly the SignalPilot Suite" | Suite overview (misnamed) | ❌ Remove |
| `suite-index/` | Actual suite overview | Main suite overview page | ✅ Keep |

---

## Testing After Fix

1. **Check mobile sidebar**: Should only show "Quick Start", not "Quickstart"
2. **Check desktop sidebar**: Should match mobile (no duplicates)
3. **Verify links**: Ensure all "Suite Overview" links point to `suite-index/`

---

## Related Files

- `/start-quick/index.html` - Keep (actual quick start)
- `/start-quickstart/index.html` - Remove (duplicate/misnamed)
- `/suite-index/index.html` - Keep (actual suite overview)

---

## Temporary Workaround (CSS Hide)

If source files cannot be modified immediately, hide the duplicate nav item with CSS:

```css
/* Hide misnamed start-quickstart from navigation */
.md-nav__item a[href="start-quickstart/"] {
  display: none !important;
}

/* Or hide its parent list item */
.md-nav__item:has(a[href="start-quickstart/"]) {
  display: none !important;
}
```

Add to `/assets/stylesheets/extra.css`

---

## Recommendation

**Remove `/start-quickstart/` directory entirely.**

The Suite Overview content is already properly located at `/suite-index/`, and the Quick Start guide is at `/start-quick/`. The `start-quickstart/` directory serves no unique purpose and creates navigation confusion.

---

**Status**: Issue identified, awaiting source file fix in mkdocs.yml
**Priority**: Medium (UX issue, not breaking)
**Effort**: 5 minutes (remove one nav entry + rebuild)

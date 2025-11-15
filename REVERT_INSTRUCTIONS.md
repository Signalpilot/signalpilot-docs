# 🚨 Emergency Revert Instructions

## What Changed

These navigation labels were updated in `mkdocs.yml`:

| Original | New |
|----------|-----|
| `Pentarch v1.0 — Reversal Events` | `Pentarch v1.0 — Five Cycle Events` |
| `Volume Oracle v1.0 — Volume Strategy` | `Volume Oracle v1.0 — Volume Intelligence System` |

---

## Option 1: Run the Revert Script (Easiest)

```bash
./REVERT_NAV_CHANGES.sh
```

This will:
- ✅ Backup your current `mkdocs.yml` with timestamp
- ✅ Restore the original navigation labels
- ✅ Show confirmation message

---

## Option 2: Git Revert (Safest)

Revert just the mkdocs.yml file to before the changes:

```bash
git checkout 3502afb^ -- mkdocs.yml
```

Then check the changes:
```bash
git diff mkdocs.yml
```

If happy, commit it:
```bash
git commit -m "REVERT: Restore original navigation labels"
```

---

## Option 3: Manual Edit

Open `mkdocs.yml` and change these two lines:

**Line ~27 (Pentarch):**
```yaml
# Change this:
- "Pentarch v1.0 — Five Cycle Events": pentarch-v10.md

# Back to this:
- "Pentarch v1.0 — Reversal Events": pentarch-v10.md
```

**Line ~31 (Volume Oracle):**
```yaml
# Change this:
- "Volume Oracle v1.0 — Volume Intelligence System": minimal-flow-v10.md

# Back to this:
- "Volume Oracle v1.0 — Volume Strategy": minimal-flow-v10.md
```

---

## After Reverting

Rebuild the site to see changes:
```bash
mkdocs build
```

Or if testing locally:
```bash
mkdocs serve
```

---

## Testing Without Risk

To test the current changes WITHOUT deploying:

```bash
mkdocs serve
```

Then visit `http://127.0.0.1:8000` and check the navigation.

If something looks wrong, use one of the revert methods above!

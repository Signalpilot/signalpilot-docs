# 🚨 EMERGENCY REVERT INSTRUCTIONS

If the mkdocs.yml commit (4a5c64a) breaks everything and causes old content to appear, follow these steps IMMEDIATELY.

---

## ⚡ QUICK REVERT (Easiest Method)

Just run this command:

```bash
bash EMERGENCY_REVERT.sh
```

This script will:
1. Reset your branch to commit `022c2e2` (before mkdocs.yml changes)
2. Ask for confirmation before force pushing
3. Restore everything to the working state

---

## 🔧 MANUAL REVERT (If Script Fails)

### Step 1: Reset to Previous Commit
```bash
git reset --hard 022c2e2
```

### Step 2: Force Push to Remote
```bash
git push --force-with-lease origin claude/enhance-learning-pages-onboarding-01GRQ85D1r4Xie7VVu5jgDKa
```

---

## 📊 What Each Commit Does

- **4a5c64a** (CURRENT) - Added mkdocs.yml with new navigation
- **022c2e2** (SAFE) - Navigation improvements (HTML only, no mkdocs.yml)
- **5fc1e4f** (SAFE) - Enhanced learning pages

---

## ✅ How to Verify Revert Worked

After reverting, check:

```bash
# Should show commit 022c2e2
git log --oneline -1

# Should NOT exist
ls mkdocs.yml 2>/dev/null && echo "❌ mkdocs.yml still exists" || echo "✅ mkdocs.yml removed"
```

---

## 🔍 What Went Wrong?

If you need to revert, the problem was likely:
- mkdocs.yml navigation didn't match your actual files
- MkDocs regenerated HTML and overwrote your manual changes
- Navigation pointed to non-existent pages

---

## 💡 After Reverting

Once reverted, you can:
1. Investigate what went wrong
2. Fix mkdocs.yml navigation properly
3. Try again with correct paths

---

## 🆘 If You're Panicking

**STOP. BREATHE. YOU HAVE A BACKUP.**

Commit `022c2e2` is your safe restore point.
Everything before that commit is preserved.
Your work is NOT lost - it's just one git command away.

Run:
```bash
bash EMERGENCY_REVERT.sh
```

And you'll be back to safety.

---

**Created:** $(date)
**Safe Commit:** 022c2e2
**Risky Commit:** 4a5c64a

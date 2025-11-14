#!/bin/bash
# ==========================================
# 🚨 EMERGENCY REVERT SCRIPT 🚨
# ==========================================
# Use this if the mkdocs.yml commit breaks everything
#
# This will restore your branch to the state BEFORE
# the mkdocs.yml changes (commit 022c2e2)
# ==========================================

echo "🚨 EMERGENCY REVERT SCRIPT"
echo "================================"
echo ""
echo "This will restore your branch to commit 022c2e2"
echo "(before mkdocs.yml changes)"
echo ""
echo "Current commit: $(git rev-parse --short HEAD)"
echo "Will revert to: 022c2e2"
echo ""
read -p "Are you SURE you want to revert? (type YES to confirm): " confirm

if [ "$confirm" != "YES" ]; then
    echo "❌ Revert cancelled. No changes made."
    exit 0
fi

echo ""
echo "🔄 Starting revert process..."
echo ""

# Step 1: Hard reset to previous commit
echo "Step 1: Resetting to commit 022c2e2..."
git reset --hard 022c2e2

# Step 2: Force push to remote (WARNING: This overwrites remote history)
echo ""
echo "Step 2: Force pushing to remote..."
echo "⚠️  This will overwrite the remote branch!"
echo ""
read -p "Continue with force push? (type YES): " confirm2

if [ "$confirm2" != "YES" ]; then
    echo "❌ Force push cancelled."
    echo "⚠️  Your local branch is reverted, but remote is unchanged."
    echo "Run: git push --force-with-lease origin $(git branch --show-current)"
    echo "to push the revert to remote when ready."
    exit 0
fi

git push --force-with-lease origin $(git branch --show-current)

echo ""
echo "✅ REVERT COMPLETE!"
echo ""
echo "Your branch is now at commit 022c2e2"
echo "(before mkdocs.yml changes)"
echo ""
echo "Current commit: $(git rev-parse --short HEAD)"
echo ""

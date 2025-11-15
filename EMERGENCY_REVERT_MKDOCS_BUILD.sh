#!/bin/bash
# EMERGENCY REVERT SCRIPT
# Created: 2025-11-15 16:40:20 UTC
# Safe commit: 49de29e293529c0f4355ee9d98b2b18e0aacb1cc
# Backup branch: backup-before-mkdocs-build-20251115-164020

echo "================================"
echo "EMERGENCY REVERT - Mkdocs Build"
echo "================================"
echo ""
echo "This will restore your site to the state BEFORE mkdocs build was run."
echo ""
echo "Safe commit: 49de29e (Update index.html)"
echo "Date: 2025-11-15 17:00:18"
echo ""
read -p "Are you sure you want to revert? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Revert cancelled."
    exit 0
fi

echo ""
echo "Step 1: Resetting to safe commit..."
git reset --hard 49de29e293529c0f4355ee9d98b2b18e0aacb1cc

echo ""
echo "Step 2: Verifying restore..."
git log -1 --oneline

echo ""
echo "✅ REVERTED SUCCESSFULLY!"
echo ""
echo "Your site is now back to the working state."
echo "To push this to live site, run:"
echo "  git push --force origin gh-pages"
echo ""
echo "WARNING: Only force push if you're sure you want to undo the mkdocs build!"

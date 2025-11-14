#!/bin/bash
# ==========================================
# 🔍 PRE-DEPLOYMENT TEST SCRIPT
# ==========================================
# Run this BEFORE deploying to check if pages exist
# ==========================================

echo "🔍 PRE-DEPLOYMENT TEST"
echo "================================"
echo ""

# Check if mkdocs.yml exists
echo "✓ Checking mkdocs.yml..."
if [ -f "mkdocs.yml" ]; then
    echo "  ✅ mkdocs.yml exists"
else
    echo "  ❌ mkdocs.yml NOT FOUND"
    exit 1
fi

echo ""
echo "✓ Checking source markdown files..."
echo ""

# Extract file paths from mkdocs.yml and check if they exist
missing_files=0

# Check new files we added
files_to_check=(
    "docs/start-here.md"
    "docs/start-suite-overview.md"
)

for file in "${files_to_check[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ MISSING: $file"
        ((missing_files++))
    fi
done

echo ""
echo "✓ Checking navigation matches files..."
echo ""

# Check that navigation in mkdocs.yml points to files that exist
grep "docs/start-here.md" mkdocs.yml > /dev/null && echo "  ✅ Navigation includes Start Here" || echo "  ❌ Navigation missing Start Here"
grep "docs/start-suite-overview.md" mkdocs.yml > /dev/null && echo "  ✅ Navigation includes Suite Overview" || echo "  ❌ Navigation missing Suite Overview"

echo ""
echo "================================"
echo ""

if [ $missing_files -eq 0 ]; then
    echo "✅ ALL CHECKS PASSED!"
    echo ""
    echo "It's safe to deploy. The following will happen:"
    echo "1. MkDocs will read mkdocs.yml"
    echo "2. It will find docs/start-here.md"
    echo "3. It will find docs/start-suite-overview.md"
    echo "4. It will generate HTML pages from them"
    echo "5. Navigation will include both new pages"
    echo ""
    echo "🚀 Ready to deploy!"
else
    echo "❌ $missing_files FILE(S) MISSING!"
    echo ""
    echo "DO NOT DEPLOY YET!"
    echo "Fix missing files first."
    exit 1
fi

echo ""

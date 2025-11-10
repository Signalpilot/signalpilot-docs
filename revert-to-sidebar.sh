#!/bin/bash

# Revert from bottom sheet back to sidebar navigation
# Run this script if you want to go back to the old left-sliding sidebar

echo "🔄 Reverting to sidebar navigation..."

# Check if backup exists
if [ ! -d ".backups/pre-bottom-sheet-nav" ]; then
    echo "❌ Error: Backup not found!"
    echo "   Cannot revert without backup files."
    exit 1
fi

# Restore CSS
if [ -f ".backups/pre-bottom-sheet-nav/extra.css" ]; then
    cp .backups/pre-bottom-sheet-nav/extra.css assets/stylesheets/extra.css
    echo "✓ Restored extra.css"
else
    echo "⚠ Warning: extra.css backup not found"
fi

# Restore JavaScript
if [ -f ".backups/pre-bottom-sheet-nav/mobile-nav-fix.js" ]; then
    cp .backups/pre-bottom-sheet-nav/mobile-nav-fix.js assets/mobile-nav-fix.js
    echo "✓ Restored mobile-nav-fix.js"
else
    echo "⚠ Warning: mobile-nav-fix.js backup not found"
fi

# Update all HTML files to use mobile-nav-fix.js instead of bottom-sheet-nav.js
echo ""
echo "📝 Updating HTML files..."

find . -type f -name "*.html" ! -path "*/backups/*" ! -path "*/.backup/*" | while read file; do
    if grep -q "bottom-sheet-nav.js" "$file"; then
        sed -i 's/bottom-sheet-nav\.js/mobile-nav-fix.js/g' "$file"
        echo "  ✓ Updated: $file"
    fi
done

echo ""
echo "✅ Revert complete!"
echo ""
echo "📌 Changes made:"
echo "   - Restored sidebar CSS (left-sliding pattern)"
echo "   - Restored mobile-nav-fix.js"
echo "   - Updated all HTML files to use old navigation"
echo ""
echo "💡 To switch back to bottom sheet:"
echo "   Run: python3 update-to-bottom-sheet.py"
echo "   Then restore the CSS manually from git or rebuild"
echo ""

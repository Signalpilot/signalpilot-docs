#!/bin/bash
# Emergency Revert Script for mkdocs.yml Navigation Changes
# Run this to instantly restore original navigation labels

echo "🚨 EMERGENCY REVERT: Restoring original mkdocs.yml navigation labels..."

# Backup current version first
cp mkdocs.yml mkdocs.yml.backup_$(date +%Y%m%d_%H%M%S)

# Revert the two navigation label changes
sed -i 's/"Pentarch v1.0 — Five Cycle Events"/"Pentarch v1.0 — Reversal Events"/g' mkdocs.yml
sed -i 's/"Volume Oracle v1.0 — Volume Intelligence System"/"Volume Oracle v1.0 — Volume Strategy"/g' mkdocs.yml

echo "✅ REVERTED! Original labels restored:"
echo "   - Pentarch v1.0 — Reversal Events"
echo "   - Volume Oracle v1.0 — Volume Strategy"
echo ""
echo "Your current mkdocs.yml has been backed up with timestamp."
echo ""
echo "To rebuild the site with reverted changes:"
echo "  mkdocs build"

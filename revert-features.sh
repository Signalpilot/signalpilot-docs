#!/bin/bash
#
# Signal Pilot Docs - Feature Revert Script
# Removes all enhancements from HTML pages
# Version: 1.0
# Created: 2025-11-04
#

set -e  # Exit on error

echo "↩️  Signal Pilot Docs - Feature Revert"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check for backup
LATEST_BACKUP=$(ls -td backups/pre-integration-* 2>/dev/null | head -1)

if [ -z "$LATEST_BACKUP" ]; then
  echo -e "${YELLOW}⚠️  Warning: No backup found${NC}"
  echo ""
  echo "Options:"
  echo "  1. Manually remove enhancement blocks from HTML files"
  echo "  2. Restore from git: git checkout HEAD -- '*.html'"
  echo ""
  read -p "Continue with manual removal? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 1
  fi
  MODE="manual"
else
  echo -e "${BLUE}📦 Found backup: $LATEST_BACKUP${NC}"
  echo ""
  echo "Choose revert method:"
  echo "  1) Restore from backup (fastest)"
  echo "  2) Remove enhancement blocks manually"
  echo ""
  read -p "Enter choice (1 or 2): " CHOICE

  if [ "$CHOICE" = "1" ]; then
    MODE="backup"
  else
    MODE="manual"
  fi
fi

echo ""

if [ "$MODE" = "backup" ]; then
  echo -e "${BLUE}📂 Restoring from backup...${NC}"

  # Create a backup of current state before reverting
  REVERT_BACKUP="backups/before-revert-$(date +%Y%m%d-%H%M%S)"
  mkdir -p "$REVERT_BACKUP"
  find . -name "*.html" -not -path "./backups/*" -not -path "./.git/*" -exec cp --parents {} "$REVERT_BACKUP" \;
  echo -e "${GREEN}✓ Created backup of current state: $REVERT_BACKUP${NC}"

  # Restore from backup
  cp -r $LATEST_BACKUP/*/*.html .
  find $LATEST_BACKUP -name "*.html" -path "*/[!.]*" -exec sh -c 'cp "$1" "./${1#$2/}"' _ {} "$LATEST_BACKUP" \;

  echo -e "${GREEN}✓ Restored all HTML files from backup${NC}"

else
  echo -e "${BLUE}🔧 Removing enhancement blocks...${NC}"

  COUNTER=0
  for file in $(find . -name "*.html" -not -path "./backups/*" -not -path "./.git/*" -not -path "./assets/*"); do
    # Check if file has enhancements
    if ! grep -q "SIGNAL PILOT ENHANCEMENTS" "$file"; then
      continue
    fi

    # Remove CSS block (everything between the comments)
    sed -i '/<!-- ========================================/,/<!-- END SIGNAL PILOT ENHANCEMENTS - CSS -->/d' "$file"

    # Remove JS block
    sed -i '/<!-- ========================================/,/<!-- END SIGNAL PILOT ENHANCEMENTS - JS -->/d' "$file"

    COUNTER=$((COUNTER + 1))
    echo -e "${GREEN}✓${NC} $file"
  done

  echo -e "${GREEN}✓ Removed enhancements from $COUNTER files${NC}"
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Revert Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "🔄 All enhancements have been removed:"
echo "  • Feedback buttons removed"
echo "  • Visual enhancements removed"
echo "  • Mermaid.js removed"
echo ""
echo "📝 To re-integrate:"
echo "  ./integrate-features.sh"
echo ""

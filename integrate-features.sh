#!/bin/bash
#
# Signal Pilot Docs - Feature Integration Script
# Adds all new features to HTML pages in a toggle-able way
# Version: 1.0
# Created: 2025-11-04
#

set -e  # Exit on error

echo "🚀 Signal Pilot Docs - Feature Integration"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Backup directory
BACKUP_DIR="backups/pre-integration-$(date +%Y%m%d-%H%M%S)"

# Create backup
echo -e "${BLUE}📦 Creating backup...${NC}"
mkdir -p "$BACKUP_DIR"
find . -name "*.html" -not -path "./$BACKUP_DIR/*" -not -path "./.git/*" -exec cp --parents {} "$BACKUP_DIR" \;
echo -e "${GREEN}✓ Backup created in: $BACKUP_DIR${NC}"
echo ""

# CSS includes to add (before </head>)
CSS_BLOCK='
  <!-- ========================================
       SIGNAL PILOT ENHANCEMENTS - CSS
       To disable: comment out this entire block
       ======================================== -->
  <link rel="stylesheet" href="css/feedback.css">
  <link rel="stylesheet" href="css/visual-enhancements.css">

  <!-- Mermaid.js for diagrams -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: '\''dark'\'',
      themeVariables: {
        primaryColor: '\''#00bcd4'\'',
        primaryTextColor: '\''#fff'\'',
        primaryBorderColor: '\''#0097a7'\'',
        lineColor: '\''#00bcd4'\'',
        secondaryColor: '\''#ff5722'\'',
        tertiaryColor: '\''#4caf50'\''
      }
    });
  </script>
  <!-- END SIGNAL PILOT ENHANCEMENTS - CSS -->'

# JS includes to add (before </body>)
JS_BLOCK='
  <!-- ========================================
       SIGNAL PILOT ENHANCEMENTS - JS
       To disable: comment out this entire block
       ======================================== -->
  <script src="js/feedback-system.js"></script>
  <!-- END SIGNAL PILOT ENHANCEMENTS - JS -->'

# Count files
TOTAL_FILES=$(find . -name "*.html" -not -path "./$BACKUP_DIR/*" -not -path "./.git/*" -not -path "./assets/*" | wc -l)
echo -e "${BLUE}📝 Found $TOTAL_FILES HTML files to update${NC}"
echo ""

# Add CSS block to all HTML files
echo -e "${BLUE}💄 Adding CSS includes...${NC}"
COUNTER=0
for file in $(find . -name "*.html" -not -path "./$BACKUP_DIR/*" -not -path "./.git/*" -not -path "./assets/*"); do
  # Check if already integrated
  if grep -q "SIGNAL PILOT ENHANCEMENTS - CSS" "$file"; then
    echo -e "${YELLOW}⚠  Skipping $file (already integrated)${NC}"
    continue
  fi

  # Add CSS block before </head>
  sed -i "/<\/head>/i\\${CSS_BLOCK}" "$file"
  COUNTER=$((COUNTER + 1))
  echo -e "${GREEN}✓${NC} $file"
done
echo -e "${GREEN}✓ Added CSS to $COUNTER files${NC}"
echo ""

# Add JS block to all HTML files
echo -e "${BLUE}⚙️  Adding JS includes...${NC}"
COUNTER=0
for file in $(find . -name "*.html" -not -path "./$BACKUP_DIR/*" -not -path "./.git/*" -not -path "./assets/*"); do
  # Check if already integrated
  if grep -q "SIGNAL PILOT ENHANCEMENTS - JS" "$file"; then
    echo -e "${YELLOW}⚠  Skipping $file (already integrated)${NC}"
    continue
  fi

  # Add JS block before </body>
  sed -i "/<\/body>/i\\${JS_BLOCK}" "$file"
  COUNTER=$((COUNTER + 1))
  echo -e "${GREEN}✓${NC} $file"
done
echo -e "${GREEN}✓ Added JS to $COUNTER files${NC}"
echo ""

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Integration Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "📊 What was added:"
echo "  • Feedback mechanism (feedback.css + feedback-system.js)"
echo "  • Visual enhancements (visual-enhancements.css)"
echo "  • Mermaid.js library for diagrams"
echo ""
echo "🔄 To disable any feature:"
echo "  1. Open any HTML file"
echo "  2. Find the <!-- SIGNAL PILOT ENHANCEMENTS --> comment blocks"
echo "  3. Comment out or delete the block"
echo ""
echo "↩️  To revert everything:"
echo "  cp -r $BACKUP_DIR/* ."
echo ""
echo "📝 Next steps:"
echo "  1. Test the site (feedback buttons should appear)"
echo "  2. Add diagrams to product pages (see MERMAID_DIAGRAMS.md)"
echo "  3. Create configuration recipes HTML page"
echo "  4. Embed visual sitemap in homepage"
echo ""

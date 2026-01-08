#!/bin/bash
# Inject Lenis smooth scroll into all HTML files
# This is for pre-built pages - new builds use overrides/main.html

DOCS_DIR="/home/user/signalpilot-docs"

# CSS injection - add to <head> before closing </head>
CSS_INJECT='  <!-- Lenis smooth scroll CSS -->\n  <link rel="stylesheet" href="assets/lenis.css">'

# Script injection - add after Material bundle loads
SCRIPT_INJECT='  <!-- Lenis Smooth Scroll Library -->\n  <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>\n  <script src="assets/lenis-init.js"></script>'

# Find all HTML files (excluding overrides template)
find "$DOCS_DIR" -name "*.html" -type f ! -path "*/overrides/*" | while read -r file; do
    # Skip if already has Lenis
    if grep -q "lenis" "$file" 2>/dev/null; then
        echo "Skipping (already has Lenis): $file"
        continue
    fi

    # Skip non-page HTML files
    if ! grep -q "</head>" "$file" 2>/dev/null; then
        echo "Skipping (not a full page): $file"
        continue
    fi

    echo "Processing: $file"

    # Determine relative path depth for assets
    depth=$(echo "$file" | sed "s|$DOCS_DIR/||" | tr -cd '/' | wc -c)

    # Build relative path prefix
    rel_prefix=""
    for ((i=0; i<depth; i++)); do
        rel_prefix="../$rel_prefix"
    done

    # For root level files, use current directory
    if [ -z "$rel_prefix" ]; then
        rel_prefix="./"
    fi

    # Create CSS link with correct path
    css_link="  <!-- Lenis smooth scroll CSS -->\n  <link rel=\"stylesheet\" href=\"${rel_prefix}assets/lenis.css\">"

    # Create script tags with correct paths
    script_tags="  <!-- Lenis Smooth Scroll Library -->\n  <script src=\"https://unpkg.com/lenis@1.1.18/dist/lenis.min.js\"></script>\n  <script src=\"${rel_prefix}assets/lenis-init.js\"></script>"

    # Inject CSS before </head>
    sed -i "s|</head>|${css_link}\n</head>|" "$file"

    # Inject scripts after Material bundle (bundle.*.min.js)
    sed -i "s|<script src=\"[^\"]*bundle\.[^\"]*\.min\.js\"></script>|&\n\n${script_tags}|" "$file"

done

echo "Done! Lenis has been injected into all HTML files."

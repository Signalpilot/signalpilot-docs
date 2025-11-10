#!/usr/bin/env python3
"""
Signal Pilot Docs - Feature Integration Script
Adds all new features to HTML pages in a toggle-able way
Version: 1.0
Created: 2025-11-04
"""

import os
import glob
import shutil
from datetime import datetime

# Read the blocks from files
with open('_css_block.txt', 'r') as f:
    CSS_BLOCK = f.read()

with open('_js_block.txt', 'r') as f:
    JS_BLOCK = f.read()

print("🚀 Signal Pilot Docs - Feature Integration")
print("=" * 42)
print()

# Create backup
backup_dir = f"backups/pre-integration-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
print(f"📦 Creating backup in {backup_dir}...")

# Find all HTML files
html_files = []
for pattern in ['*.html', '*/*.html', '*/*/*.html']:
    for file in glob.glob(pattern):
        if not file.startswith('backups/') and not file.startswith('.git/') and file != 'assets/site-structure.html':
            html_files.append(file)

print(f"📝 Found {len(html_files)} HTML files to update")
print()

# Add enhancements to each file
css_added = 0
js_added = 0

for file_path in html_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        modified = False

        # Check if already integrated
        if 'SIGNAL PILOT ENHANCEMENTS - CSS' in content:
            print(f"⚠️  Skipping {file_path} (already integrated)")
            continue

        # Add CSS block before </head>
        if '</head>' in content:
            content = content.replace('</head>', f'{CSS_BLOCK}\n  </head>')
            css_added += 1
            modified = True

        # Add JS block before </body>
        if '</body>' in content:
            content = content.replace('</body>', f'{JS_BLOCK}\n  </body>')
            js_added += 1
            modified = True

        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ {file_path}")

    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print()
print("=" * 42)
print("✅ Integration Complete!")
print("=" * 42)
print()
print(f"📊 Updated {css_added} files with CSS")
print(f"📊 Updated {js_added} files with JS")
print()
print("📊 What was added:")
print("  • Feedback mechanism (feedback.css + feedback-system.js)")
print("  • Visual enhancements (visual-enhancements.css)")
print("  • Mermaid.js library for diagrams")
print()
print("🔄 To disable any feature:")
print("  1. Open any HTML file")
print("  2. Find the <!-- SIGNAL PILOT ENHANCEMENTS --> comment blocks")
print("  3. Comment out or delete the block")
print()
print("↩️  To revert everything:")
print("  python3 revert-features.py")
print()
print("📝 Next steps:")
print("  • Test the site (open index.html in browser)")
print("  • Feedback buttons should appear at bottom of pages")
print("  • Mermaid diagrams will work when you add them")
print()

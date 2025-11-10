#!/usr/bin/env python3
"""
Fix feedback system JS path for subdirectory pages.
Root pages use: js/feedback-system.js
Subdirectory pages need: ../js/feedback-system.js
"""

import os
from pathlib import Path

# Get all HTML files
html_files = []
for root, dirs, files in os.walk('.'):
    # Skip hidden directories
    if '/.git' in root or '/backups' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

print(f"Found {len(html_files)} HTML files")

fixed_count = 0

for file_path in html_files:
    # Read file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine correct path based on file location
    if file_path == './index.html':
        # Root page - should use js/feedback-system.js (already correct)
        continue
    else:
        # Subdirectory page - needs ../js/feedback-system.js
        if 'src="js/feedback-system.js"' in content:
            content = content.replace('src="js/feedback-system.js"', 'src="../js/feedback-system.js"')

            # Write back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

            fixed_count += 1
            print(f"✅ Fixed: {file_path}")

print(f"\n🎉 Fixed {fixed_count} files")

#!/usr/bin/env python3
"""
Fix CSS paths for subdirectory pages.
Root pages use: css/...
Subdirectory pages need: ../css/...
"""

import os

# Get all HTML files
html_files = []
for root, dirs, files in os.walk('.'):
    if '/.git' in root or '/backups' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

print(f"Found {len(html_files)} HTML files")

fixed_count = 0

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if file_path == './index.html':
        continue

    # Fix CSS paths
    modified = False
    if 'href="css/feedback.css"' in content:
        content = content.replace('href="css/feedback.css"', 'href="../css/feedback.css"')
        modified = True

    if 'href="css/visual-enhancements.css"' in content:
        content = content.replace('href="css/visual-enhancements.css"', 'href="../css/visual-enhancements.css"')
        modified = True

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1
        print(f"✅ Fixed: {file_path}")

print(f"\n🎉 Fixed {fixed_count} files")

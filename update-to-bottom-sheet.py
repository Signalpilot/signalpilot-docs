#!/usr/bin/env python3
"""
Replace mobile-nav-fix.js with bottom-sheet-nav.js in all HTML files
"""

import os
import re
from pathlib import Path

def update_html_file(html_content, html_file):
    """Replace mobile-nav-fix.js with bottom-sheet-nav.js"""

    # For files in subdirectories, calculate relative path
    depth = str(html_file).replace(os.getcwd(), '').lstrip('/').count('/') - 1
    prefix = "../" * depth if depth > 0 else ""

    # Pattern to find mobile-nav-fix.js
    pattern = rf'<script src="{prefix}assets/mobile-nav-fix\.js"></script>'
    replacement = f'<script src="{prefix}assets/bottom-sheet-nav.js"></script>'

    modified_content = re.sub(pattern, replacement, html_content)

    if modified_content != html_content:
        return modified_content, True

    # Try without subdirectory prefix
    pattern = r'<script src="assets/mobile-nav-fix\.js"></script>'
    replacement = '<script src="assets/bottom-sheet-nav.js"></script>'

    modified_content = re.sub(pattern, replacement, html_content)

    return modified_content, modified_content != html_content

def main():
    """Process all HTML files"""

    base_dir = Path('.')
    html_files = list(base_dir.glob('**/*.html'))

    # Filter out backup directories
    html_files = [f for f in html_files if 'backups' not in str(f) and '.backup' not in str(f)]

    print(f"\n🔄 Updating to bottom sheet navigation...\n")

    modified_count = 0
    skipped_count = 0

    for html_file in sorted(html_files):
        print(f"Processing: {html_file}")

        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content, was_modified = update_html_file(content, html_file)

            if was_modified:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                modified_count += 1
                print(f"  ✓ Updated to bottom-sheet-nav.js")
            else:
                skipped_count += 1
                print(f"  → No mobile-nav-fix.js found (or already updated)")

        except Exception as e:
            print(f"  ❌ Error: {e}")
            skipped_count += 1

    print(f"\n✅ Complete!")
    print(f"   Modified: {modified_count} files")
    print(f"   Skipped: {skipped_count} files")
    print(f"\n🔥 Bottom sheet navigation is now active!")
    print(f"   - Slides up from bottom (65% height)")
    print(f"   - Swipe down to dismiss")
    print(f"   - Tap outside to close")
    print(f"   - Modern drag handle at top\n")

if __name__ == '__main__':
    main()

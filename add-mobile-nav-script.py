#!/usr/bin/env python3
"""
Add mobile-nav-fix.js script to all HTML files
This fixes the mobile sidebar scrolling issue
"""

import os
import re
from pathlib import Path

def add_mobile_script(html_content, html_file):
    """Add mobile-nav-fix.js script tag if not already present"""

    # Check if script is already included
    if 'mobile-nav-fix.js' in html_content:
        print(f"  ✓ Already has mobile-nav-fix.js - skipping")
        return html_content, False

    # Find where to insert (after enhancements.js or remove-tooltips.js)
    script_tag = '    <script src="assets/mobile-nav-fix.js"></script>\n'

    # For files in subdirectories, adjust the path
    if '/' in str(html_file).replace(os.getcwd(), '').lstrip('/'):
        # Count directory depth
        depth = str(html_file).replace(os.getcwd(), '').lstrip('/').count('/') - 1
        if depth > 0:
            script_tag = f'    <script src="{"../" * depth}assets/mobile-nav-fix.js"></script>\n'

    # Insert after remove-tooltips.js (or enhancements.js if remove-tooltips doesn't exist)
    pattern = r'(\s*<script src="[^"]*remove-tooltips\.js"></script>)'
    replacement = r'\1\n' + script_tag.rstrip('\n')

    modified_content = re.sub(pattern, replacement, html_content)

    if modified_content != html_content:
        print(f"  ✓ Added mobile-nav-fix.js")
        return modified_content, True

    # Try after enhancements.js if remove-tooltips wasn't found
    pattern = r'(\s*<script src="[^"]*enhancements\.js"></script>)'
    modified_content = re.sub(pattern, replacement, html_content)

    if modified_content != html_content:
        print(f"  ✓ Added mobile-nav-fix.js (after enhancements.js)")
        return modified_content, True

    print(f"  ⚠ Could not find insertion point - skipping")
    return html_content, False

def main():
    """Process all HTML files"""

    base_dir = Path('.')
    html_files = list(base_dir.glob('**/*.html'))

    # Filter out backup directories
    html_files = [f for f in html_files if 'backups' not in str(f) and '.backup' not in str(f)]

    print(f"\n🔧 Adding mobile-nav-fix.js to {len(html_files)} HTML files...\n")

    modified_count = 0
    skipped_count = 0

    for html_file in sorted(html_files):
        print(f"Processing: {html_file}")

        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content, was_modified = add_mobile_script(content, html_file)

            if was_modified:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                modified_count += 1
            else:
                skipped_count += 1

        except Exception as e:
            print(f"  ❌ Error: {e}")
            skipped_count += 1

    print(f"\n✅ Complete!")
    print(f"   Modified: {modified_count} files")
    print(f"   Skipped: {skipped_count} files")
    print(f"\n💡 Mobile sidebar will now stay fixed when scrolling!")
    print(f"   The script prevents body scroll when sidebar is open\n")

if __name__ == '__main__':
    main()

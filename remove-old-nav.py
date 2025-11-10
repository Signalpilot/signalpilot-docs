#!/usr/bin/env python3
"""
Remove old broken custom nav integration from HTML files
"""

import os
import re
from pathlib import Path

def remove_custom_nav_from_html(html_content):
    """Remove custom navigation CSS and JS from HTML file"""

    # Remove CSS links (with or without version query parameter)
    html_content = re.sub(
        r'  <!-- Custom Bottom Sheet Navigation -->\s*\n\s*<link rel="stylesheet" href="[^"]*css/hide-mkdocs-sidebar\.css[^"]*">\s*\n\s*<link rel="stylesheet" href="[^"]*css/custom-bottom-sheet\.css[^"]*">\s*\n',
        '',
        html_content
    )

    # Remove JS script (with or without version query parameter)
    html_content = re.sub(
        r'  <!-- Custom Bottom Sheet Navigation Script -->\s*\n\s*<script src="[^"]*assets/custom-bottom-sheet\.js[^"]*"></script>\s*\n',
        '',
        html_content
    )

    return html_content

def main():
    """Process all HTML files"""

    base_dir = Path('.')
    html_files = list(base_dir.glob('**/*.html'))

    # Filter out backup directories
    html_files = [f for f in html_files if 'backups' not in str(f) and '.backup' not in str(f)]

    print(f"\n🧹 Removing old broken integration...\n")

    cleaned_count = 0

    for html_file in sorted(html_files):
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()

            if 'hide-mkdocs-sidebar.css' in content:
                new_content = remove_custom_nav_from_html(content)

                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                cleaned_count += 1
                print(f"✓ Cleaned: {html_file}")

        except Exception as e:
            print(f"❌ Error {html_file}: {e}")

    print(f"\n✅ Cleaned {cleaned_count} files\n")

if __name__ == '__main__':
    main()

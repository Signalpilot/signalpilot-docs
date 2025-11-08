#!/usr/bin/env python3
"""
Integrate custom bottom sheet navigation into all HTML files
Adds CSS and JS references to enable fire custom navigation
"""

import os
import re
from pathlib import Path

def add_custom_nav_to_html(html_content, html_file):
    """Add custom navigation CSS and JS to HTML file"""

    # Calculate relative path depth for subdirectories
    # Count directory levels: if file is in root, depth=0, if in subdir, depth=1, etc.
    file_path_str = str(html_file)
    # Remove the filename to get just the directory path
    dir_path = os.path.dirname(file_path_str)

    # Count depth by splitting on / and counting parts
    if dir_path == '.' or dir_path == '':
        depth = 0
    else:
        # Count slashes + 1 (e.g., "foo/bar" has 1 slash = depth 2)
        depth = dir_path.count('/') + 1

    prefix = "../" * depth if depth > 0 else ""

    print(f"  → File: {html_file}, Depth: {depth}, Prefix: '{prefix}'")

    # Check if already integrated
    if 'hide-mkdocs-sidebar.css' in html_content:
        return html_content, False

    # Find the </head> tag to insert CSS before it
    head_pattern = r'</head>'

    # Cache-busting version (increment this when JS/CSS changes)
    version = "v4"

    css_links = f'''
  <!-- Custom Bottom Sheet Navigation -->
  <link rel="stylesheet" href="{prefix}css/hide-mkdocs-sidebar.css?{version}">
  <link rel="stylesheet" href="{prefix}css/custom-bottom-sheet.css?{version}">
</head>'''

    # Replace </head> with CSS links + </head>
    modified_content = re.sub(head_pattern, css_links, html_content, count=1)

    # Find the </body> tag to insert JS before it
    body_pattern = r'</body>'

    js_script = f'''
  <!-- Custom Bottom Sheet Navigation Script -->
  <script src="{prefix}assets/custom-bottom-sheet.js?{version}"></script>
</body>'''

    # Replace </body> with JS script + </body>
    modified_content = re.sub(body_pattern, js_script, modified_content, count=1)

    return modified_content, modified_content != html_content

def main():
    """Process all HTML files"""

    base_dir = Path('.')
    html_files = list(base_dir.glob('**/*.html'))

    # Filter out backup directories
    html_files = [f for f in html_files if 'backups' not in str(f) and '.backup' not in str(f)]

    print(f"\n🔥 Integrating custom bottom sheet navigation...\n")

    modified_count = 0
    skipped_count = 0

    for html_file in sorted(html_files):
        print(f"Processing: {html_file}")

        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content, was_modified = add_custom_nav_to_html(content, html_file)

            if was_modified:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                modified_count += 1
                print(f"  ✓ Added custom navigation")
            else:
                skipped_count += 1
                print(f"  → Already integrated or skipped")

        except Exception as e:
            print(f"  ❌ Error: {e}")
            skipped_count += 1

    print(f"\n✅ Integration complete!")
    print(f"   Modified: {modified_count} files")
    print(f"   Skipped: {skipped_count} files")
    print(f"\n🔥 Custom bottom sheet navigation is now active!")
    print(f"   - mkdocs sidebar is hidden")
    print(f"   - Floating button in bottom-right")
    print(f"   - Click to open fire bottom sheet")
    print(f"   - Swipe down or tap outside to close\n")

if __name__ == '__main__':
    main()

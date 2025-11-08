#!/usr/bin/env python3
"""
Add Open Graph and Twitter Card meta tags to all HTML files
This enables rich social media previews when sharing links
"""

import os
import re
from pathlib import Path

# Meta tags to insert
META_TAGS = '''
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://docs.signalpilot.io/">
    <meta property="og:title" content="Signal Pilot Documentation">
    <meta property="og:description" content="Professional trading indicators for TradingView. Complete guides for Pentarch, Janus Atlas, Omnideck, and more.">
    <meta property="og:image" content="https://docs.signalpilot.io/assets/images/preview.png">
    <meta property="og:site_name" content="Signal Pilot Docs">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://docs.signalpilot.io/">
    <meta name="twitter:title" content="Signal Pilot Documentation">
    <meta name="twitter:description" content="Professional trading indicators for TradingView. Complete guides for Pentarch, Janus Atlas, Omnideck, and more.">
    <meta name="twitter:image" content="https://docs.signalpilot.io/assets/images/preview.png">
'''

def add_social_meta_tags(html_content):
    """Add social meta tags to HTML head section"""

    # Check if already has Open Graph tags
    if 'og:image' in html_content or 'twitter:card' in html_content:
        print(f"  ✓ Already has social meta tags - skipping")
        return html_content, False

    # Find the end of the <head> section (before </head>)
    # Insert before the closing </head> tag
    pattern = r'(\s*)</head>'

    if re.search(pattern, html_content):
        modified_content = re.sub(pattern, META_TAGS + r'\n\1</head>', html_content, count=1)
        print(f"  ✓ Added social meta tags")
        return modified_content, True
    else:
        print(f"  ⚠ Could not find </head> tag - skipping")
        return html_content, False

def main():
    """Process all HTML files"""

    base_dir = Path('.')
    html_files = list(base_dir.glob('**/*.html'))

    # Filter out backup directories and component files
    html_files = [f for f in html_files if 'backups' not in str(f) and
                  '.backup' not in str(f) and
                  '_component-demo' not in str(f) and
                  '_includes' not in str(f)]

    print(f"\n🔧 Adding Open Graph meta tags to {len(html_files)} HTML files...\n")

    modified_count = 0
    skipped_count = 0

    for html_file in sorted(html_files):
        print(f"Processing: {html_file}")

        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content, was_modified = add_social_meta_tags(content)

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
    print(f"\n💡 Social media previews will now show:")
    print(f"   - Your preview.png image (1200x630)")
    print(f"   - Signal Pilot Documentation title")
    print(f"   - Professional description text")
    print(f"\n🧪 Test at:")
    print(f"   - Facebook: https://developers.facebook.com/tools/debug/")
    print(f"   - Twitter: https://cards-dev.twitter.com/validator")
    print(f"   - Discord: Just paste the URL\n")

if __name__ == '__main__':
    main()

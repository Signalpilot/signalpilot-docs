#!/usr/bin/env python3
"""
SignalPilot Documentation Chatbot Integration Script
Adds the AI chatbot to all HTML pages in the documentation site
"""

import os
import re
from pathlib import Path
from datetime import datetime

# HTML blocks to inject
CHATBOT_CSS = '''    <!-- SignalPilot Chatbot CSS -->
    <link rel="stylesheet" href="/css/chatbot.css">'''

CHATBOT_JS = '''    <!-- SignalPilot Chatbot -->
    <script src="/js/chatbot.js"></script>'''

def backup_file(file_path):
    """Create a backup of the file before modifying"""
    backup_dir = Path('backups') / f'pre-chatbot-{datetime.now().strftime("%Y%m%d-%H%M%S")}'
    backup_dir.mkdir(parents=True, exist_ok=True)

    backup_path = backup_dir / Path(file_path).name
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)

    return backup_path

def has_chatbot_integration(content):
    """Check if chatbot is already integrated"""
    return '/css/chatbot.css' in content or '/js/chatbot.js' in content

def integrate_chatbot(file_path):
    """Integrate chatbot into a single HTML file"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already integrated
    if has_chatbot_integration(content):
        print(f"  ⏭️  Skipped (already integrated): {file_path}")
        return False

    # Backup first
    backup_path = backup_file(file_path)
    print(f"  💾 Backup created: {backup_path}")

    modified = False

    # 1. Add CSS in <head> before </head>
    if '</head>' in content:
        content = content.replace('</head>', f'{CHATBOT_CSS}\n  </head>', 1)
        modified = True

    # 2. Add JS before </body>
    if '</body>' in content:
        content = content.replace('</body>', f'{CHATBOT_JS}\n  </body>', 1)
        modified = True

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Integrated chatbot: {file_path}")
        return True
    else:
        print(f"  ⚠️  Could not find </head> or </body> tags: {file_path}")
        return False

def find_html_files(base_dir='.'):
    """Find all HTML files in the documentation"""
    html_files = []

    for root, dirs, files in os.walk(base_dir):
        # Skip backup directories
        if 'backups' in root or 'node_modules' in root or '.git' in root:
            continue

        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))

    return sorted(html_files)

def main():
    """Main integration process"""
    print("\n" + "="*70)
    print("  SignalPilot Documentation Chatbot Integration")
    print("="*70 + "\n")

    # Find all HTML files
    html_files = find_html_files()

    print(f"📄 Found {len(html_files)} HTML files\n")

    # Integrate chatbot into each file
    success_count = 0
    skip_count = 0

    for html_file in html_files:
        result = integrate_chatbot(html_file)
        if result:
            success_count += 1
        else:
            skip_count += 1

    # Summary
    print("\n" + "="*70)
    print("  Integration Summary")
    print("="*70)
    print(f"  ✅ Successfully integrated: {success_count} files")
    print(f"  ⏭️  Skipped: {skip_count} files")
    print(f"  📁 Total files: {len(html_files)}")
    print("="*70 + "\n")

    if success_count > 0:
        print("🎉 Chatbot successfully integrated!")
        print("\n📝 Next steps:")
        print("   1. Test the chatbot on your local site")
        print("   2. Configure API settings in the chatbot UI")
        print("   3. Commit and push to deploy")
        print("\n💡 Users will need to provide their own API key (OpenAI or Anthropic)")
        print("   or you can set up a custom backend endpoint.\n")

if __name__ == '__main__':
    main()

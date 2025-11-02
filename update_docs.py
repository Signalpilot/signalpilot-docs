#!/usr/bin/env python3
"""
Script to update live documentation HTML files with revised markdown content.
Converts markdown to HTML and replaces the content sections in index.html files.
"""

import re
import markdown
from pathlib import Path

# Mapping of revised docs to their corresponding HTML directories
DOC_MAPPING = {
    'REVISED_DOCS_AUGURY_GRID.md': 'augury-grid-v10/index.html',
    'REVISED_DOCS_PLUTUS_FLOW.md': 'plutus-flow-v10/index.html',
    'REVISED_DOCS_PENTARCH.md': 'pentarch-v10/index.html',
    'REVISED_DOCS_OMNIDECK.md': 'omnideck-v10/index.html',
    'REVISED_DOCS_JANUS_ATLAS.md': 'janus-atlas-v10/index.html',
    'REVISED_DOCS_HARMONIC_OSCILLATOR.md': 'harmonic-oscillator-v10/index.html',
    'REVISED_DOCS_VOLUME_ORACLE.md': 'minimal-flow-v10/index.html',
}

def convert_markdown_to_html(md_content):
    """Convert markdown to HTML with extensions for better formatting."""
    md = markdown.Markdown(extensions=[
        'extra',  # tables, code blocks, etc.
        'nl2br',  # newline to <br>
        'sane_lists',  # better list handling
        'toc',  # table of contents
    ])
    return md.convert(md_content)

def update_html_file(html_path, new_html_content):
    """
    Replace the content section in an HTML file.
    Finds content between '<!-- Render the page content -->' and '</article>'.
    """
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Find the content section to replace
    # Pattern: from "<!-- Render the page content -->" to the closing </article>
    pattern = r'(<!-- Render the page content -->)\n.*?(\n\s*</article>)'

    replacement = f'\\1\n{new_html_content}\n                \\2'

    updated_html = re.sub(pattern, replacement, html_content, flags=re.DOTALL)

    if updated_html == html_content:
        print(f"  ⚠️  Warning: No content was replaced in {html_path}")
        return False

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(updated_html)

    return True

def main():
    """Main function to process all documentation files."""
    base_dir = Path(__file__).parent
    updated_count = 0
    failed_count = 0

    print("🚀 Starting documentation update process...\n")

    for md_file, html_file in DOC_MAPPING.items():
        md_path = base_dir / md_file
        html_path = base_dir / html_file

        print(f"📄 Processing: {md_file}")

        # Check if files exist
        if not md_path.exists():
            print(f"  ❌ Error: Markdown file not found: {md_path}")
            failed_count += 1
            continue

        if not html_path.exists():
            print(f"  ❌ Error: HTML file not found: {html_path}")
            failed_count += 1
            continue

        # Read markdown content
        with open(md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()

        # Convert markdown to HTML
        html_content = convert_markdown_to_html(md_content)

        # Update HTML file
        success = update_html_file(html_path, html_content)

        if success:
            print(f"  ✅ Successfully updated: {html_file}")
            updated_count += 1
        else:
            print(f"  ❌ Failed to update: {html_file}")
            failed_count += 1

        print()

    # Summary
    print("=" * 60)
    print(f"📊 Update Summary:")
    print(f"  ✅ Successfully updated: {updated_count} files")
    print(f"  ❌ Failed: {failed_count} files")
    print("=" * 60)

    return updated_count, failed_count

if __name__ == '__main__':
    updated, failed = main()
    exit(0 if failed == 0 else 1)

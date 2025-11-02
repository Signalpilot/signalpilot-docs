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
    html_content = md.convert(md_content)

    # Add headerlink anchors to all headers (h1-h6) for MkDocs navigation
    html_content = add_headerlinks(html_content)

    return html_content

def add_headerlinks(html_content):
    """
    Add headerlink anchors to headers (h1-h6) to match MkDocs format.
    MkDocs needs: <h2 id="foo">Title<a class="headerlink" href="#foo" title="Permanent link">¶</a></h2>
    """
    import re

    def replace_header(match):
        tag = match.group(1)  # h1, h2, etc.
        header_id = match.group(2)
        title = match.group(3)  # Everything between opening and closing tag

        # Add headerlink anchor
        headerlink = f'<a class="headerlink" href="#{header_id}" title="Permanent link">&para;</a>'

        return f'<{tag} id="{header_id}">{title}{headerlink}</{tag}>'

    # Pattern: <h1 id="some-id">Title (possibly with nested HTML)</h1>
    # Use non-greedy match to capture content that may include HTML tags
    pattern = r'<(h[1-6]) id="([^"]+)">(.+?)</(h[1-6])>'

    return re.sub(pattern, replace_header, html_content, flags=re.DOTALL)

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

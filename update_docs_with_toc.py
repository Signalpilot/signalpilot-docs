#!/usr/bin/env python3
"""
Script to update live documentation HTML files with revised markdown content.
Converts markdown to HTML and updates BOTH content and TOC navigation.
"""

import re
import markdown
from pathlib import Path
from html.parser import HTMLParser

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

class HeaderExtractor(HTMLParser):
    """Extract headers (h1-h6) from HTML to build TOC structure."""

    def __init__(self):
        super().__init__()
        self.headers = []
        self.current_tag = None
        self.current_id = None
        self.current_text = []

    def handle_starttag(self, tag, attrs):
        if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.current_tag = tag
            self.current_text = []
            # Extract id attribute
            for attr, value in attrs:
                if attr == 'id':
                    self.current_id = value

    def handle_data(self, data):
        if self.current_tag:
            # Skip the headerlink symbol
            if data.strip() != '¶':
                self.current_text.append(data)

    def handle_endtag(self, tag):
        if tag == self.current_tag and self.current_id:
            # Save header info
            level = int(self.current_tag[1])  # h2 -> 2
            text = ''.join(self.current_text).strip()
            self.headers.append({
                'level': level,
                'id': self.current_id,
                'text': text
            })
            self.current_tag = None
            self.current_id = None
            self.current_text = []

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
    def replace_header(match):
        tag = match.group(1)  # h1, h2, etc.
        header_id = match.group(2)
        title = match.group(3)  # Everything between opening and closing tag

        # Add headerlink anchor
        headerlink = f'<a class="headerlink" href="#{header_id}" title="Permanent link">&para;</a>'

        return f'<{tag} id="{header_id}">{title}{headerlink}</{tag}>'

    # Pattern: <h1 id="some-id">Title (possibly with nested HTML)</h1>
    pattern = r'<(h[1-6]) id="([^"]+)">(.+?)</(h[1-6])>'

    return re.sub(pattern, replace_header, html_content, flags=re.DOTALL)

def extract_headers(html_content):
    """Extract all headers from HTML content."""
    parser = HeaderExtractor()
    parser.feed(html_content)
    return parser.headers

def build_toc_html(headers):
    """
    Build TOC navigation HTML from headers list.
    Only include h2 and h3 headers (skip h1 as it's the title).
    """
    if not headers:
        return ""

    # Filter to only h2 and h3
    toc_headers = [h for h in headers if h['level'] in [2, 3]]

    if not toc_headers:
        return ""

    html_parts = []
    html_parts.append('    <ul class="md-nav__list" data-md-component="toc" data-md-scrollfix>')

    current_h2 = None
    h3_items = []

    for header in toc_headers:
        if header['level'] == 2:
            # Close previous h2's h3 items if any
            if current_h2 and h3_items:
                html_parts.append(f'''
    <nav class="md-nav" aria-label="{current_h2['text']}">
      <ul class="md-nav__list">
''')
                for h3 in h3_items:
                    html_parts.append(f'''          <li class="md-nav__item">
  <a href="#{h3['id']}" class="md-nav__link">
    <span class="md-ellipsis">
      {h3['text']}
    </span>
  </a>

</li>
''')
                html_parts.append('''      </ul>
    </nav>

</li>
''')
                h3_items = []
            elif current_h2:
                # Close previous h2 without h3 items
                html_parts.append('  \n</li>\n')

            # Start new h2
            current_h2 = header
            html_parts.append(f'''
        <li class="md-nav__item">
  <a href="#{header['id']}" class="md-nav__link">
    <span class="md-ellipsis">
      {header['text']}
    </span>
  </a>
  ''')

        elif header['level'] == 3 and current_h2:
            # Collect h3 items under current h2
            h3_items.append(header)

    # Close last h2
    if current_h2:
        if h3_items:
            html_parts.append(f'''
    <nav class="md-nav" aria-label="{current_h2['text']}">
      <ul class="md-nav__list">
''')
            for h3 in h3_items:
                html_parts.append(f'''          <li class="md-nav__item">
  <a href="#{h3['id']}" class="md-nav__link">
    <span class="md-ellipsis">
      {h3['text']}
    </span>
  </a>

</li>
''')
            html_parts.append('''      </ul>
    </nav>

</li>
''')
        else:
            html_parts.append('  \n</li>\n')

    html_parts.append('''
    </ul>
''')

    return ''.join(html_parts)

def update_html_file(html_path, new_html_content, new_toc_html):
    """
    Replace both content section and TOC navigation in HTML file.
    """
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # 1. Replace the main content section
    content_pattern = r'(<!-- Render the page content -->)\n.*?(\n\s*</article>)'
    content_replacement = f'\\1\n{new_html_content}\n                \\2'
    updated_html = re.sub(content_pattern, content_replacement, html_content, flags=re.DOTALL)

    if updated_html == html_content:
        print(f"  ⚠️  Warning: No main content was replaced in {html_path}")
        return False

    # 2. Replace the TOC navigation
    # Find: <ul class="md-nav__list" data-md-component="toc" ... </ul>
    toc_pattern = r'<ul class="md-nav__list" data-md-component="toc" data-md-scrollfix>.*?(?=\n    </ul>\n  \n</nav>)'

    if new_toc_html:
        # Extract just the inner content (without the opening/closing <ul> tags)
        # Use rsplit to split on the LAST </ul>, not the first
        toc_inner = new_toc_html.split('<ul class="md-nav__list" data-md-component="toc" data-md-scrollfix>')[1]
        toc_inner = toc_inner.rsplit('\n    </ul>\n', 1)[0]  # Split on LAST closing ul
        toc_replacement = f'<ul class="md-nav__list" data-md-component="toc" data-md-scrollfix>{toc_inner}\n    </ul>'

        updated_html = re.sub(toc_pattern, toc_replacement, updated_html, flags=re.DOTALL)

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

        # Extract headers and build TOC
        headers = extract_headers(html_content)
        toc_html = build_toc_html(headers)

        print(f"  📑 Found {len(headers)} headers, building TOC...")

        # Update HTML file with both content and TOC
        success = update_html_file(html_path, html_content, toc_html)

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

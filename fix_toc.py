#!/usr/bin/env python3
"""
Script to fix Table of Contents in HTML files.
Extracts actual headings and regenerates TOC sections.
"""

import re
import sys
from pathlib import Path

def extract_headings(html_content):
    """Extract all h2, h3, h4 headings with their IDs and text."""
    headings = []
    # Match h2, h3, h4 tags with id attributes
    pattern = r'<h([2-4])\s+id="([^"]*)"[^>]*>(.*?)</h\1>'

    for match in re.finditer(pattern, html_content):
        level = int(match.group(1))
        heading_id = match.group(2)
        heading_text = match.group(3)

        # Clean up heading text (remove anchor links but keep content)
        heading_text = re.sub(r'<a\s+class="headerlink".*?</a>', '', heading_text)
        heading_text = re.sub(r'<a\s+href="[^"]*"[^>]*>(.*?)</a>', r'\1', heading_text)
        heading_text = heading_text.strip()

        if heading_id and heading_text:  # Skip empty IDs or text
            headings.append({
                'level': level,
                'id': heading_id,
                'text': heading_text
            })

    return headings

def generate_toc_html(headings):
    """Generate TOC HTML from headings list."""
    if not headings:
        return ''

    toc_items = []
    i = 0

    while i < len(headings):
        h = headings[i]

        if h['level'] == 2:
            # h2 heading - check for h3 children
            h3_children = []
            j = i + 1
            while j < len(headings) and headings[j]['level'] >= 3:
                if headings[j]['level'] == 3:
                    # h3 heading - check for h4 children
                    h4_children = []
                    k = j + 1
                    while k < len(headings) and headings[k]['level'] == 4:
                        h4_children.append(headings[k])
                        k += 1
                    h3_children.append({'h3': headings[j], 'h4_children': h4_children})
                    j = k
                else:
                    j += 1

            # Generate h2 item with nested h3/h4
            item = f'''      <li class="md-nav__item">
  <a href="#{h['id']}" class="md-nav__link">
    <span class="md-ellipsis">
      {h['text']}
    </span>
  </a>
  '''

            if h3_children:
                item += f'''
  <nav class="md-nav" aria-label="{h['text']}">
    <ul class="md-nav__list">
      '''
                for h3_item in h3_children:
                    h3 = h3_item['h3']
                    h4s = h3_item['h4_children']

                    item += f'''      <li class="md-nav__item">
  <a href="#{h3['id']}" class="md-nav__link">
    <span class="md-ellipsis">
      {h3['text']}
    </span>
  </a>
  '''
                    if h4s:
                        item += f'''
  <nav class="md-nav" aria-label="{h3['text']}">
    <ul class="md-nav__list">
      '''
                        for h4 in h4s:
                            item += f'''      <li class="md-nav__item">
  <a href="#{h4['id']}" class="md-nav__link">
    <span class="md-ellipsis">
      {h4['text']}
    </span>
  </a>
  
</li>
'''
                        item += '''    </ul>
  </nav>
  '''

                    item += '''
</li>
'''

                item += '''    </ul>
  </nav>
  '''

            item += '''
</li>
'''
            toc_items.append(item)
            i = j if h3_children else i + 1
        else:
            i += 1

    return ''.join(toc_items)

def fix_toc_in_file(filepath):
    """Fix TOC in a single HTML file."""
    print(f"Processing: {filepath}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract headings
    headings = extract_headings(content)
    print(f"  Found {len(headings)} headings")

    if not headings:
        print("  No headings found, skipping")
        return

    # Generate new TOC HTML
    toc_html = generate_toc_html(headings)

    # Find and replace both TOC sections
    # Pattern to match the TOC <ul> content
    toc_pattern = r'(<nav class="md-nav md-nav--secondary"[^>]*>.*?<ul class="md-nav__list"[^>]*>)(.*?)(</ul>\s*</nav>)'

    matches = list(re.finditer(toc_pattern, content, re.DOTALL))
    print(f"  Found {len(matches)} TOC sections")

    if len(matches) != 2:
        print(f"  WARNING: Expected 2 TOC sections, found {len(matches)}")

    # Replace from end to start to maintain positions
    for match in reversed(matches):
        start_pos = match.start(2)
        end_pos = match.end(2)
        content = content[:start_pos] + '\n' + toc_html + '    ' + content[end_pos:]

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ Fixed {filepath}")

def main():
    files_to_fix = [
        'troubleshooting-installation/index.html',
        'ref-cheatsheets-at-a-glance/index.html',
        'start-learning-path/index.html',
        'start-which-indicator/index.html',
        'about-system-requirements/index.html',
        'configuration-wizard/index.html',
        'search-guide/index.html',
        'ref-cheatsheets-pentarch/index.html',
        'ref-cheatsheets-janus/index.html',
        'ref-cheatsheets-volume-oracle/index.html',
    ]

    base_dir = Path('/home/user/signalpilot-docs')

    for filename in files_to_fix:
        filepath = base_dir / filename
        if filepath.exists():
            fix_toc_in_file(filepath)
        else:
            print(f"File not found: {filepath}")

    print("\n✓ All files processed!")

if __name__ == '__main__':
    main()

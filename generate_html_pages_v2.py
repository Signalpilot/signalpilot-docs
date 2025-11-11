#!/usr/bin/env python3
"""
Generate HTML pages from markdown files using the existing template structure.
Version 2 - Improved markdown conversion
"""
import re
import os

# Page configurations
PAGES = [
    {
        "md_path": "/home/user/signalpilot-docs/docs/start-learning-path/index.md",
        "html_path": "/home/user/signalpilot-docs/start-learning-path/index.html",
        "title": "Signal Pilot Learning Paths - Signal Pilot Docs",
        "description": "Structured roadmaps to master Signal Pilot indicators based on your trading style and goals. Choose from cycle trading, level trading, or all-in-one mastery paths."
    },
    {
        "md_path": "/home/user/signalpilot-docs/docs/ref-cheatsheets/all-indicators-at-a-glance.md",
        "html_path": "/home/user/signalpilot-docs/ref-cheatsheets-at-a-glance/index.html",
        "title": "All Indicators At-a-Glance - Signal Pilot Docs",
        "description": "Quick comparison of all 7 Signal Pilot indicators on 2 pages. Visual signal guide and high-probability setup checklists for quick reference."
    },
    {
        "md_path": "/home/user/signalpilot-docs/docs/ref-cheatsheets/pentarch-quick-reference.md",
        "html_path": "/home/user/signalpilot-docs/ref-cheatsheets-pentarch/index.html",
        "title": "Pentarch Quick Reference - Signal Pilot Docs",
        "description": "One-page cheat sheet for Pentarch v1.0 cycle phase identification. Quick guide to the 5 cycle events and best indicator combinations."
    },
    {
        "md_path": "/home/user/signalpilot-docs/docs/ref-cheatsheets/janus-atlas-levels-guide.md",
        "html_path": "/home/user/signalpilot-docs/ref-cheatsheets-janus/index.html",
        "title": "Janus Atlas Level Types Guide - Signal Pilot Docs",
        "description": "One-page cheat sheet for all 39 Janus Atlas price levels. Configuration guide by trading style and level significance ranking."
    },
    {
        "md_path": "/home/user/signalpilot-docs/docs/about-system-requirements.md",
        "html_path": "/home/user/signalpilot-docs/about-system-requirements/index.html",
        "title": "System Requirements - Signal Pilot Docs",
        "description": "Everything you need to run Signal Pilot indicators smoothly. Platform requirements, device compatibility, and performance considerations."
    },
    {
        "md_path": "/home/user/signalpilot-docs/docs/start-which-indicator.md",
        "html_path": "/home/user/signalpilot-docs/start-which-indicator/index.html",
        "title": "Which Indicator Should I Start With? - Signal Pilot Docs",
        "description": "Choose the right Signal Pilot indicator for your experience level, trading style, and goals. Complete decision flowchart and 3-question quiz."
    },
    {
        "md_path": "/home/user/signalpilot-docs/docs/troubleshooting-installation.md",
        "html_path": "/home/user/signalpilot-docs/troubleshooting-installation/index.html",
        "title": "Installation Troubleshooting - Signal Pilot Docs",
        "description": "Resolve common issues when installing or loading Signal Pilot indicators. Step-by-step solutions for access, loading, and signal problems."
    },
    {
        "md_path": "/home/user/signalpilot-docs/docs/configuration-wizard.md",
        "html_path": "/home/user/signalpilot-docs/docs/configuration-wizard/index.html",
        "title": "Configuration Wizard - Signal Pilot Docs",
        "description": "Interactive guide to configure Signal Pilot indicators based on your trading style, asset type, and experience level."
    },
    {
        "md_path": "/home/user/signalpilot-docs/docs/search-guide.md",
        "html_path": "/home/user/signalpilot-docs/docs/search-guide/index.html",
        "title": "Search Guide & Quick Links - Signal Pilot Docs",
        "description": "Quick links to the most commonly searched Signal Pilot documentation topics and resources."
    }
]

def read_template():
    """Read the template HTML and split into header and footer."""
    template_path = "/home/user/signalpilot-docs/start-quick/index.html"
    with open(template_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the article tag
    article_start = content.find('<article class="md-content__inner md-typeset">')
    article_end = content.find('</article>')

    if article_start == -1 or article_end == -1:
        raise ValueError("Could not find article tags in template")

    # Extract header (everything before article including the opening tag)
    header = content[:article_start + len('<article class="md-content__inner md-typeset">')]

    # Extract footer (closing article tag and everything after)
    footer = content[article_end:]

    return header, footer

def convert_markdown_to_html(md_content):
    """Convert markdown to HTML with improved handling."""

    # First, protect mermaid blocks from further processing
    mermaid_blocks = []
    def save_mermaid(match):
        code = match.group(1)
        idx = len(mermaid_blocks)
        mermaid_blocks.append(f'<div class="mermaid">\n{code}\n</div>')
        return f'MERMAID_BLOCK_{idx}'

    md_content = re.sub(r'```mermaid\n(.*?)\n```', save_mermaid, md_content, flags=re.DOTALL)

    # Protect code blocks
    code_blocks = []
    def save_code(match):
        code = match.group(1).strip()
        idx = len(code_blocks)
        code_blocks.append(f'<pre><code>{code}</code></pre>')
        return f'CODE_BLOCK_{idx}'

    md_content = re.sub(r'```(?:.*?)\n(.*?)\n```', save_code, md_content, flags=re.DOTALL)

    # Convert to lines for processing
    lines = md_content.split('\n')
    html_lines = []
    i = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Headers
        if stripped.startswith('######'):
            html_lines.append(f'<h6>{stripped[6:].strip()}</h6>')
        elif stripped.startswith('#####'):
            html_lines.append(f'<h5>{stripped[5:].strip()}</h5>')
        elif stripped.startswith('####'):
            html_lines.append(f'<h4>{stripped[4:].strip()}</h4>')
        elif stripped.startswith('###'):
            html_lines.append(f'<h3>{stripped[3:].strip()}</h3>')
        elif stripped.startswith('##'):
            html_lines.append(f'<h2>{stripped[2:].strip()}</h2>')
        elif stripped.startswith('#'):
            html_lines.append(f'<h1>{stripped[1:].strip()}</h1>')

        # Horizontal rules
        elif stripped == '---':
            html_lines.append('<hr />')

        # Blockquotes
        elif stripped.startswith('>'):
            html_lines.append(f'<blockquote>{stripped[1:].strip()}</blockquote>')

        # Tables
        elif stripped.startswith('|'):
            # Collect all table lines
            table_lines = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                table_lines.append(lines[i].strip())
                i += 1
            i -= 1  # Back up one since we'll increment at the end

            if len(table_lines) >= 2:
                table_html = '<table>\n'

                # Header row
                header_cells = [cell.strip() for cell in table_lines[0].split('|') if cell.strip()]
                table_html += '<thead>\n<tr>\n'
                for cell in header_cells:
                    table_html += f'<th>{process_inline(cell)}</th>\n'
                table_html += '</tr>\n</thead>\n'

                # Body rows (skip separator line)
                table_html += '<tbody>\n'
                for row in table_lines[2:]:
                    cells = [cell.strip() for cell in row.split('|') if cell.strip()]
                    if cells:
                        table_html += '<tr>\n'
                        for cell in cells:
                            table_html += f'<td>{process_inline(cell)}</td>\n'
                        table_html += '</tr>\n'
                table_html += '</tbody>\n</table>'

                html_lines.append(table_html)

        # Unordered lists
        elif re.match(r'^[\-\*\+] ', stripped):
            list_lines = []
            while i < len(lines) and re.match(r'^[\-\*\+] ', lines[i].strip()):
                list_lines.append(lines[i].strip())
                i += 1
            i -= 1

            html_lines.append('<ul>')
            for item in list_lines:
                content = re.sub(r'^[\-\*\+] ', '', item)
                html_lines.append(f'<li>{process_inline(content)}</li>')
            html_lines.append('</ul>')

        # Ordered lists
        elif re.match(r'^\d+\. ', stripped):
            list_lines = []
            while i < len(lines) and re.match(r'^\d+\. ', lines[i].strip()):
                list_lines.append(lines[i].strip())
                i += 1
            i -= 1

            html_lines.append('<ol>')
            for item in list_lines:
                content = re.sub(r'^\d+\. ', '', item)
                html_lines.append(f'<li>{process_inline(content)}</li>')
            html_lines.append('</ol>')

        # Empty lines
        elif stripped == '':
            html_lines.append('')

        # Block-level HTML elements (details, summary, div, etc.) - pass through as-is
        elif re.match(r'^<(details|/details|summary|/summary|div|/div|section|/section)', stripped):
            html_lines.append(stripped)

        # Regular paragraphs
        else:
            # Collect consecutive non-empty, non-special lines
            para_lines = []
            while i < len(lines):
                s = lines[i].strip()
                if (s == '' or s.startswith('#') or s.startswith('|') or
                    re.match(r'^[\-\*\+] ', s) or re.match(r'^\d+\. ', s) or
                    s == '---' or s.startswith('>') or
                    re.match(r'^<(details|/details|summary|/summary|div|/div|section|/section)', s)):
                    break
                para_lines.append(s)
                i += 1
            i -= 1

            if para_lines:
                para_content = ' '.join(para_lines)
                html_lines.append(f'<p>{process_inline(para_content)}</p>')

        i += 1

    html = '\n'.join(html_lines)

    # Restore mermaid blocks
    for idx, block in enumerate(mermaid_blocks):
        html = html.replace(f'MERMAID_BLOCK_{idx}', block)

    # Restore code blocks
    for idx, block in enumerate(code_blocks):
        html = html.replace(f'CODE_BLOCK_{idx}', block)

    return html

def process_inline(text):
    """Process inline markdown elements."""
    # Links [text](url)
    text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', text)

    # Bold **text** or __text__
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'__(.+?)__', r'<strong>\1</strong>', text)

    # Italic *text* or _text_ (but not within words)
    text = re.sub(r'(?<!\w)\*([^\*]+?)\*(?!\w)', r'<em>\1</em>', text)
    text = re.sub(r'(?<!\w)_([^_]+?)_(?!\w)', r'<em>\1</em>', text)

    # Inline code `code`
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)

    return text

def update_header(header, title, description):
    """Update header with new title and description."""
    # Update title
    header = re.sub(
        r'<title>.*?</title>',
        f'<title>{title}</title>',
        header,
        flags=re.DOTALL
    )

    # Update meta description
    header = re.sub(
        r'<meta name="description" content="[^"]*">',
        f'<meta name="description" content="{description}">',
        header
    )

    # Update og:title
    header = re.sub(
        r'<meta property="og:title" content="[^"]*">',
        f'<meta property="og:title" content="{title}">',
        header
    )

    # Update og:description
    header = re.sub(
        r'<meta property="og:description" content="[^"]*">',
        f'<meta property="og:description" content="{description}">',
        header
    )

    # Update twitter:title
    header = re.sub(
        r'<meta name="twitter:title" content="[^"]*">',
        f'<meta name="twitter:title" content="{title}">',
        header
    )

    # Update twitter:description
    header = re.sub(
        r'<meta name="twitter:description" content="[^"]*">',
        f'<meta name="twitter:description" content="{description}">',
        header
    )

    return header

def generate_page(page_config, header_template, footer_template):
    """Generate a single HTML page."""
    # Read markdown content
    with open(page_config['md_path'], 'r', encoding='utf-8') as f:
        md_content = f.read()

    # Convert markdown to HTML
    html_content = convert_markdown_to_html(md_content)

    # Update header with page-specific info
    header = update_header(header_template, page_config['title'], page_config['description'])

    # Combine header + content + footer
    full_html = header + '\n' + html_content + '\n' + footer_template

    # Create directory if it doesn't exist
    html_dir = os.path.dirname(page_config['html_path'])
    os.makedirs(html_dir, exist_ok=True)

    # Write the HTML file
    with open(page_config['html_path'], 'w', encoding='utf-8') as f:
        f.write(full_html)

    print(f"✓ Generated: {page_config['html_path']}")

def main():
    """Main function to generate all pages."""
    print("Reading template...")
    header_template, footer_template = read_template()

    print("\nGenerating HTML pages...\n")
    for page_config in PAGES:
        try:
            generate_page(page_config, header_template, footer_template)
        except Exception as e:
            print(f"✗ Error generating {page_config['html_path']}: {e}")
            import traceback
            traceback.print_exc()

    print("\n✓ All pages generated successfully!")

if __name__ == "__main__":
    main()

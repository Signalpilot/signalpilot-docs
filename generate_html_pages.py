#!/usr/bin/env python3
"""
Generate HTML pages from markdown files using the existing template structure.
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
    """Convert markdown to HTML."""
    html = md_content

    # Convert mermaid code blocks
    html = re.sub(r'```mermaid\n(.*?)\n```', r'<div class="mermaid">\1</div>', html, flags=re.DOTALL)

    # Convert code blocks (before other conversions)
    def convert_code_block(match):
        code = match.group(1).strip()
        return f'<pre><code>{code}</code></pre>'
    html = re.sub(r'```(?:.*?)\n(.*?)\n```', convert_code_block, html, flags=re.DOTALL)

    # Convert headers
    html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', html, flags=re.MULTILINE)
    html = re.sub(r'^##### (.+)$', r'<h5>\1</h5>', html, flags=re.MULTILINE)
    html = re.sub(r'^###### (.+)$', r'<h6>\1</h6>', html, flags=re.MULTILINE)

    # Convert horizontal rules
    html = re.sub(r'^---$', r'<hr />', html, flags=re.MULTILINE)

    # Convert blockquotes
    html = re.sub(r'^> (.+)$', r'<blockquote>\1</blockquote>', html, flags=re.MULTILINE)

    # Convert links [text](url)
    html = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', html)

    # Convert bold **text** or __text__
    html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
    html = re.sub(r'__(.+?)__', r'<strong>\1</strong>', html)

    # Convert italic *text* or _text_
    html = re.sub(r'\*([^\*]+)\*', r'<em>\1</em>', html)
    html = re.sub(r'_([^_]+)_', r'<em>\1</em>', html)

    # Convert inline code `code`
    html = re.sub(r'`([^`]+)`', r'<code>\1</code>', html)

    # Convert unordered lists
    lines = html.split('\n')
    in_ul = False
    result_lines = []

    for i, line in enumerate(lines):
        # Check if line starts with - or *
        if re.match(r'^[\-\*] ', line):
            if not in_ul:
                result_lines.append('<ul>')
                in_ul = True
            # Extract the list item content (remove the - or *)
            item_content = re.sub(r'^[\-\*] ', '', line)
            result_lines.append(f'  <li>{item_content}</li>')
        else:
            if in_ul:
                result_lines.append('</ul>')
                in_ul = False
            result_lines.append(line)

    if in_ul:
        result_lines.append('</ul>')

    html = '\n'.join(result_lines)

    # Convert ordered lists
    lines = html.split('\n')
    in_ol = False
    result_lines = []

    for i, line in enumerate(lines):
        if re.match(r'^\d+\. ', line):
            if not in_ol:
                result_lines.append('<ol>')
                in_ol = True
            # Extract the list item content
            item_content = re.sub(r'^\d+\. ', '', line)
            result_lines.append(f'  <li>{item_content}</li>')
        else:
            if in_ol:
                result_lines.append('</ol>')
                in_ol = False
            result_lines.append(line)

    if in_ol:
        result_lines.append('</ol>')

    html = '\n'.join(result_lines)

    # Convert tables
    def convert_table(table_text):
        lines = [l.strip() for l in table_text.strip().split('\n') if l.strip()]
        if len(lines) < 2:
            return table_text

        # Parse header
        header_cells = [cell.strip() for cell in lines[0].split('|') if cell.strip()]

        # Skip separator line (line 1)

        # Parse body rows
        table_html = '<table>\n<thead>\n<tr>\n'
        for cell in header_cells:
            table_html += f'  <th>{cell}</th>\n'
        table_html += '</tr>\n</thead>\n<tbody>\n'

        for line in lines[2:]:  # Skip header and separator
            cells = [cell.strip() for cell in line.split('|') if cell.strip()]
            if cells:
                table_html += '<tr>\n'
                for cell in cells:
                    table_html += f'  <td>{cell}</td>\n'
                table_html += '</tr>\n'

        table_html += '</tbody>\n</table>'
        return table_html

    # Find tables (lines starting with |)
    lines = html.split('\n')
    result_lines = []
    in_table = False
    table_lines = []

    for line in lines:
        if line.strip().startswith('|'):
            in_table = True
            table_lines.append(line)
        else:
            if in_table:
                # Process accumulated table
                result_lines.append(convert_table('\n'.join(table_lines)))
                table_lines = []
                in_table = False
            result_lines.append(line)

    if in_table:
        result_lines.append(convert_table('\n'.join(table_lines)))

    html = '\n'.join(result_lines)

    # Convert paragraphs (lines that aren't already HTML tags)
    lines = html.split('\n')
    result_lines = []
    in_paragraph = False
    paragraph_lines = []

    for line in lines:
        stripped = line.strip()
        # Check if line is an HTML tag or empty
        if stripped.startswith('<') or stripped == '':
            if in_paragraph:
                # Close the paragraph
                result_lines.append('<p>' + ' '.join(paragraph_lines) + '</p>')
                paragraph_lines = []
                in_paragraph = False
            result_lines.append(line)
        else:
            # Regular text line
            in_paragraph = True
            paragraph_lines.append(stripped)

    if in_paragraph:
        result_lines.append('<p>' + ' '.join(paragraph_lines) + '</p>')

    html = '\n'.join(result_lines)

    # Clean up empty paragraphs
    html = re.sub(r'<p>\s*</p>', '', html)
    html = re.sub(r'\n\n+', '\n\n', html)

    return html

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

    print("\n✓ All pages generated successfully!")

if __name__ == "__main__":
    main()

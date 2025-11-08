# Social Media Preview Setup Guide

## 1. Create Preview Image

**Recommended Image:**
- Take a nice screenshot of your docs homepage (docs.signalpilot.io)
- Include the SIGNAL PILOT branding, header, and some content
- Show off the clean design and professional look

**Image Specifications:**
- **Size:** 1200 x 630 px (optimal for all social platforms)
- **Format:** PNG or JPG
- **File name:** `preview.png` or `og-image.png`
- **Location:** `/home/user/signalpilot-docs/assets/images/preview.png`

**Design Tips:**
- Center the most important elements (logo, tagline)
- Use high contrast for readability when thumbnailed
- Include "Signal Pilot Documentation" text prominently
- Show a glimpse of the aurora gradient background
- Consider adding: "Professional Trading Indicators for TradingView"

---

## 2. Add Meta Tags to mkdocs.yml

In your **source mkdocs.yml** file (not the built HTML), add these to `extra`:

```yaml
extra:
  social:
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/yourhandle
    - icon: fontawesome/brands/discord
      link: https://discord.gg/yourserver

  # Add this section for social preview
  meta:
    - property: og:type
      content: website
    - property: og:title
      content: Signal Pilot Documentation
    - property: og:description
      content: Professional trading indicators for TradingView. Complete guides for Pentarch, Janus Atlas, Omnideck, and more.
    - property: og:image
      content: https://docs.signalpilot.io/assets/images/preview.png
    - property: og:url
      content: https://docs.signalpilot.io/
    - property: og:site_name
      content: Signal Pilot Docs

    # Twitter Card
    - name: twitter:card
      content: summary_large_image
    - name: twitter:title
      content: Signal Pilot Documentation
    - name: twitter:description
      content: Professional trading indicators for TradingView. Complete guides for Pentarch, Janus Atlas, Omnideck, and more.
    - name: twitter:image
      content: https://docs.signalpilot.io/assets/images/preview.png
```

**Alternative: Using extra_javascript/extra_css blocks**

If the `extra.meta` approach doesn't work, you can override the theme template.

Create: `overrides/main.html`

```html
{% extends "base.html" %}

{% block extrahead %}
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
{% endblock %}
```

Then in `mkdocs.yml`:

```yaml
theme:
  name: material
  custom_dir: overrides
```

---

## 3. Testing

After deploying, test your social preview:

- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** Share the URL and check preview
- **Discord:** Paste URL in any channel

---

## 4. Image Ideas

**Option A: Clean Screenshot**
- Homepage hero section
- Show "Signal Pilot Documentation" title
- Include one or two feature cards visible
- Aurora gradient background visible

**Option B: Branded Graphic**
- GUGI "SIGNAL PILOT" text large and centered
- Subtitle: "Professional TradingView Indicators"
- "Complete Documentation" or "Guides & Resources"
- Aurora gradient background
- Minimalist, high-contrast design

**Option C: Feature Showcase**
- Split design showing 2-3 indicator names
- "7 Professional Indicators - Full Documentation"
- Include icons or mini screenshots
- Signal Pilot branding

---

## Quick Checklist

- [ ] Create 1200x630px preview image
- [ ] Save to `/assets/images/preview.png`
- [ ] Add meta tags to mkdocs.yml or custom template
- [ ] Rebuild site
- [ ] Test with Facebook/Twitter validators
- [ ] Verify image loads at https://docs.signalpilot.io/assets/images/preview.png


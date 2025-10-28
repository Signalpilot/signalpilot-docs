# 🧭 SignalPilot Docs

Official documentation for the **SignalPilot Suite** — a cohesive ecosystem of **non-repainting, alert-ready TradingView indicators**.

📍 **Live site:** [https://docs.signalpilot.io](https://docs.signalpilot.io)

---

## 📚 About

This repository contains the source and deployment configuration for the **SignalPilot Documentation** site, built with **MkDocs + Material for MkDocs** and deployed automatically via **GitHub Actions** to the `gh-pages` branch.

Every commit to `main` triggers a workflow that:

1. Builds the static documentation from Markdown files in `/docs/`
2. Caches dependencies (fast CI)
3. Deploys the compiled site to GitHub Pages

---

## 🧩 Suite Overview

SignalPilot organizes all indicators into five modular layers:

| Category | Focus |
|-----------|--------|
| 🧭 **Bias / Momentum** | Directional bias, trend strength, and momentum confirmation |
| 💧 **Participation (Volume / Flow)** | Volume conviction and flow analysis |
| 🏗️ **Structure / Levels** | Market structure, supply/demand, and liquidity zones |
| ⏱️ **Timing** | Exhaustion, reversals, and precise entry/exit conditions |
| 🧩 **Meta / Tools** | Regime filters, volatility logic, and on-chart screeners |

All modules share common design principles: **anchored visuals**, **non-repainting logic**, **deterministic alerts**, and **screener-friendly outputs**.

---

## ⚙️ Stack & Build Setup

**Core Stack**
- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) v9.x  
- [Python 3.11](https://www.python.org/)  
- CI/CD via **GitHub Actions**

**Plugins Used**
- `mkdocs-macros-plugin` — category badges and metadata includes  
- `pymdownx.*` extensions — icons, cards, grids, emoji, and buttons  
- `git-revision-date-localized-plugin` — (optional) “Last updated” timestamps  

**Optional**
- `mkdocs-sitemap-plugin` — for sitemap generation (disabled by default)
- `mkdocs-htmlproofer-plugin` — for link checking (optional strict mode)

---

## 🚀 Local Development

Clone and preview the docs locally.

```bash
# 1. Clone repo
git clone https://github.com/Signalpilot/signalpilot-docs.git
cd signalpilot-docs

# 2. Create a virtual environment
python -m venv .venv
source .venv/bin/activate   # (Windows: .venv\Scripts\activate)

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start local dev server
mkdocs serve

# 5. Visit http://127.0.0.1:8000/

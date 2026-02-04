# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **policy analysis repository** with an interactive microsite. It contains economic analysis and policy recommendations for proactive U.S. federal investment in electricity grid infrastructure.

## Repository Structure

### Policy Documents (Root)
- **grid_for_growth.md** - Main policy document presenting the narrative argument for federal grid investment
- **grid_economics_analysis.md** - Quantitative analysis with formulas, calculations, and supporting data
- **appendix_sources.md** - Sources and fact-checking documentation
- **fig1-5 (PNG files)** - Static visualizations supporting the economic analysis

### Interactive Microsite (`microsite/`)
A React/TypeScript web application that presents the policy argument with interactive visualizations.

**Tech Stack:**
- React 19 + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- D3.js for interactive charts
- Framer Motion for animations
- React Router for navigation

**Key Directories:**
- `src/components/chapters/` - Main content chapters (Problem, Math, Solution, Ask)
- `src/components/visualizations/` - D3-powered interactive charts
- `src/components/pages/` - Full pages (Policy, Economics, Sources)
- `src/components/layout/` - Header, Footer, ChapterNav
- `src/components/ui/` - Reusable UI components

### Deployment
- `.github/workflows/deploy.yml` - GitHub Actions workflow for GitHub Pages deployment
- Deploys automatically on push to `main` branch

## Key Concepts

The documents make a case for federal proactive grid investment using:

1. **Cost of capital advantage** - Federal 2% rates vs. private 8% rates change optimal investment timing
2. **Economies of scale** - 0.75 scaling exponent: doubling capacity costs ~68% more, not 100%
3. **REA precedent** - Rural Electrification Administration achieved >99% repayment on 2% loans
4. **Preparation delta** - 25% upfront premium enables 8x capacity at 80% lower lifecycle cost per MW

## Development Commands

Run from the `microsite/` directory:

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Working with These Documents

When editing policy documents:
- Maintain consistency between the narrative (grid_for_growth.md) and quantitative (grid_economics_analysis.md) documents
- Figures are referenced by number in both documents - keep figure numbering synchronized
- Economic formulas use standard NPV, discount rate, and power law notation

When editing the microsite:
- Interactive visualizations should reflect the same data/formulas as the static documents
- Charts use D3.js - see existing visualizations for patterns
- New pages should be added to the router in `App.tsx`
- Follow existing component patterns for consistency

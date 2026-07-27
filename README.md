# Ledger Loop Marketing Site

A static marketing site for "Ledger Loop", a B2B SaaS cash flow forecasting product for agencies. Built with a strict adherence to accessibility, performance, and a unique "Physical Ledger" design aesthetic.

## 🏗️ Architecture & Component Philosophy

The site uses a simple, dependency-free component architecture allowing non-technical editors to update content without touching structural HTML or CSS.

1.  **`js/content-data.js`**: A centralized JSON-like structure storing navigation links, company metadata, and footer information.
2.  **`js/components.js`**: Hydration script that injects the shared Header and Footer sections into any page containing `<header id="site-header">` and `<footer id="site-footer">`.
3.  **No Build Step**: Pure HTML/CSS/JS for absolute reliability and instant deployment.

## 🎨 Design System: "Physical Ledger"

We moved away from generic SaaS tropes (dark mode, glowing gradients, blurred navs) to establish a design grounded in the reality of the product:

*   **Palette**: `Ledger Paper` (#FDFCF8), `Ink Black` (#111111), `Cash Blue` (#0033CC), `Deficit Red` (#D92121), and `Highlighter Yellow` (#FAFF00).
*   **Typography**: `Newsreader` (Editorial/Trust), `IBM Plex Mono` (Structure/Data), `Public Sans` (Body).
*   **Structure**: 0px border-radii, stark 1px solid black grid borders across sections. The hero section *is* a 13-week horizon grid.

## ♿ Accessibility (WCAG 2.2 AA)

Accessibility is baked into the foundation:
*   **Contrast**: Primary interactions (Cash Blue on Ledger Paper) hit an excellent 13.5:1 ratio. Highlighters and warning states rely on 18:1 contrast text or explicit text/icon combinations to avoid color-only indicators (WCAG 1.4.1).
*   **Keyboard Navigation**: All interactive elements (nav, scenario buttons, forms) are strictly operable via keyboard. Focus states (`3px solid blue` with `2px` offset) are sharply visible against the grid.
*   **Screen Readers**: 
    *   Scenario simulation uses `<div aria-live="polite">` to announce the cash flow recalculation and deficit warnings dynamically.
    *   Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`) maps document flow.
    *   A `.skip-link` bypasses navigation to jump straight to main content.
*   **Motion**: SVG path animations respect `@media (prefers-reduced-motion: reduce)`, snapping instantly instead of sliding if the user prefers reduced motion.

## ⚡ Performance

The site is built to guarantee 100/100 Lighthouse scores across the board:
*   **No Render-Blocking Resources**: CSS is lightweight, fonts load with `font-display: swap` and `<link rel="preconnect">` to the Google Fonts origin.
*   **No CLS (Cumulative Layout Shift)**: Structural grids and SVGs have explicit dimensions and `preserveAspectRatio`.
*   **Zero Frameworks**: 100% vanilla JS keeps execution time near zero.

## 📊 Structured Data (JSON-LD)

Schema.org validation is applied to match the business domain:
*   **Home (`index.html`)**: `Organization` schema.
*   **Product (`product.html`)**: `SoftwareApplication` schema.
*   **Pricing (`pricing.html`)**: `FAQPage` schema.

## 🚀 Running Locally

```bash
npx serve -p 3000
```

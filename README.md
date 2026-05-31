# SUPERPLANE — Pixel Arcade Landing 

A dark-themed, pixelated landing page for the fictional retro arcade shoot 'em up **SUPERPLANE**. Built with:

- **Vite 5** (JavaScript, no TypeScript)
- **React 18**
- **Tailwind CSS 3.4**
- **shadcn/ui** styling primitives (cn, cva, Radix Slot)
- **Pixelact UI** components ported to JSX (button, card, input, badge, alert, accordion)
- **Aceternity UI**-inspired effects (Spotlight, BackgroundGrid, MovingBorder, TextGenerate, Marquee)
- **Framer Motion** for the moving border and word-by-word fade-in
- **lucide-react** fo r icons
- A custom canvas-based **starfield** + pure-SVG **pixel ship** sprites

Designed to look great at 320px — and ship-ready for Vercel or Netlify.
 
---

## Getting started

Requires Node.js **18+** (Node 20 recommended).

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Production build

```bash
npm run build
npm run preview
```

The static site lands in `./dist`.

## Deploy

### Vercel (recommended)
1. Push this repo to GitHub.
2. Import the repo on [vercel.com](https://vercel.com/new) — Vercel auto-detects Vite from `vercel.json`.
3. Click **Deploy**. Done.

### Netlify
1. Push to GitHub.
2. Connect the repo on [netlify.com](https://app.netlify.com/start). `netlify.toml` already sets build = `npm run build`, publish = `dist`.

### Any static host
```bash
npm run build
# upload everything in ./dist/
```

## Project structure

```
src/
├── App.jsx                          # composes all sections
├── main.jsx                         # React entry point
├── index.css                        # Tailwind + global pixel theme tokens
├── lib/
│   └── utils.js                     # cn() helper (shadcn-style)
├── components/
│   ├── PixelShip.jsx                # SVG pixel sprites (ship, enemy, star)
│   ├── Starfield.jsx                # canvas-based animated parallax stars
│   └── ui/
│       ├── pixel/                   # ← Pixelact UI ports
│       │   ├── styles.css
│       │   ├── button.jsx
│       │   ├── card.jsx
│       │   ├── input.jsx
│       │   ├── badge.jsx
│       │   ├── alert.jsx
│       │   └── accordion.jsx
│       └── aceternity/              # ← Aceternity UI ports
│           ├── spotlight.jsx
│           ├── background-grid.jsx
│           ├── moving-border.jsx
│           ├── text-generate.jsx
│           └── marquee.jsx
└── sections/                        # Landing-page sections
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── LogosMarquee.jsx
    ├── Features.jsx
    ├── Showcase.jsx
    ├── Pricing.jsx
    ├── FAQ.jsx
    ├── CTA.jsx
    └── Footer.jsx
```

## Theming

All colors are HSL CSS variables in `src/index.css` under `.dark` (which is set on `<html>` in `index.html`). Swap the values and the entire pixel palette updates: borders, button shadows, hover mixes, everything.

## Notes on the libraries

- **Pixelact UI**'s official registry installs `.tsx` files via `npx shadcn add`. Since this project is JavaScript-only, the components are hand-ported to `.jsx`, preserving the exact CSS box-shadow trick that creates the pixelated borders (see `src/components/ui/pixel/styles.css`).
- **Aceternity UI** components are likewise ported to JSX, using `framer-motion` for the animated bits.
- **shadcn/ui** is present as a *pattern* (forwardRef components + `cva` variants + `cn` merger), not as a runtime dependency — keeps the bundle tiny.

# Yogi Arunananda — repo guide

Static, frontend-only site: Vite + React 19 + TypeScript, plain CSS. Deployed to GitHub Pages on push to `main`
(see `.github/workflows/deploy.yml`) and served on a custom GoDaddy domain.

**Read [DESIGN.md](DESIGN.md) before touching any UI.** It defines colors, type, spacing, components, assets and
responsive rules, and all new pages must follow it.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build (must pass before committing)
npm run preview  # serve the production build
```

## Conventions

- Use CSS variables from `:root` in `src/styles.css`; no hard-coded colors or font names elsewhere.
- Import images and icons from `src/assets/` (folders described in DESIGN.md). Never use temporary Figma URLs.
- Fonts are self-hosted via `@fontsource`; no CDN fonts.
- No `console.log` in committed code. No inline styles.
- Every change must work at 390px, 820px and 1440px, with no horizontal scroll.
- Keep external links `rel="noreferrer"` with `target="_blank"`.
- Commit messages: plain, no AI-tool attribution.

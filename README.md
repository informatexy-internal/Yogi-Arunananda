# Yogi Arunananda

Landing page for Yogi Arunananda Muni — frontend only. Vite + React + TypeScript, built to static files.
Implements the Figma "Yoga" design (Landing page, node 106:158).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview
```

## Deploy (GitHub Pages + GoDaddy domain)

Pushes to `main` build and deploy via `.github/workflows/deploy.yml`.

1. Push this repo to GitHub, then **Settings → Pages → Source: GitHub Actions**.
2. Add `public/CNAME` containing only your domain (e.g. `www.example.com`), commit and push.
3. In GoDaddy **DNS** for the domain:
   - `www`: `CNAME` → `<github-user>.github.io`
   - apex (`@`): four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** once the certificate is issued.

## Notes

- Design rules and asset layout: see [DESIGN.md](DESIGN.md). Contributor notes: [CLAUDE.md](CLAUDE.md).
- Fonts (Cormorant Garamond, Rethink Sans) are self-hosted via `@fontsource`.
- Design is 1440px desktop; layout is responsive down to phone widths.

# Umair Javaid Manj, Research & Teaching Portfolio

Academic portfolio for **Umair Javaid Manj**, a PhD researcher and educator in Auckland (health and
applied AI, machine learning, university teaching and student supervision).

Live: https://umair-jm.github.io/academic/

## Stack
React + Vite + framer-motion. Deep navy with warm gold accents and a serif display face, a calmer
scholarly counterpart to the cybersecurity site. Shares the same in-repo motion library
(`src/lib/motion.jsx`): animated reveals, staggered lists, cursor spotlight cards and magnetic
buttons.

```
src/
  main.jsx            app entry, BrowserRouter with /academic basename
  App.jsx             routes (home, teaching, publications)
  index.css           design system + tokens
  data.js             all content, including the full publication list
  lib/motion.jsx      Reveal, Stagger, SpotlightCard, Magnetic
  components/          TopBar, Footer, LocalTime
  pages/              Home, Teaching, Publications
public/
  favicon.svg         mortarboard favicon
  404.html            SPA fallback for GitHub Pages deep links
.github/workflows/    deploy.yml builds and publishes to GitHub Pages
```

## Develop locally
```bash
npm install
npm run dev      # http://localhost:5173/academic/
npm run build    # outputs to dist/
```

## Deploy
Lives in its own repository (`academic`) and deploys to https://umair-jm.github.io/academic/ via the
GitHub Actions workflow on every push to `main`. Pages source must be set to "GitHub Actions".

(c) Umair Javaid Manj

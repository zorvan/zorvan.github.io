# zorvan.github.io

The notebook of **zorvan** — cryptography, verifiable systems, and relational
critical engineering. Persona-forward, academic-notebook aesthetic, zero external
requests.

Built with [Eleventy](https://www.11ty.dev/). Essays are pulled from the
[Medium feed](https://medium.com/@zorvan) at build time, so publishing a new essay
requires no change here — a daily scheduled rebuild picks it up.

## Develop

```bash
npm install
npm run dev     # local server at http://localhost:8080 with live reload
npm run build   # output to _site/
```

## Structure

```
src/
  _data/        site.js · projects.js · writing.js (Medium RSS)
  _includes/    base.njk · essay.njk
  assets/       css/site.css · js/site.js (theme toggle)
  static/       robots.txt · .nojekyll
  *.njk         index · writing · work · diewan · colophon · archive
  archive/      migrated 2015 posts (URLs preserved)
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. **One-time setup:** in the repo's
*Settings → Pages*, set **Source** to **GitHub Actions**.

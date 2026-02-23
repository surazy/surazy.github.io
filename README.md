# surazy | Developer Portfolio

Personal developer portfolio for [surazy.me](https://surazy.me), built with **React + Vite**.

## Stack

- React 18 + Vite 5 (plain JS/JSX, no TypeScript)
- Pure CSS with CSS variables (dark default, light via `prefers-color-scheme`)
- GitHub Actions for automated build & deploy to GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
# Optional: refresh GitHub data first (requires GITHUB_TOKEN env var)
node scripts/fetch-github.js

npm run build
# Output goes to dist/
```

## Deploy

Deployment is **automatic** via GitHub Actions on every push to `main`.  
A weekly scheduled run (Sunday midnight UTC) re-fetches GitHub data and redeploys.

You can also trigger a manual deploy from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

## Project data

GitHub profile and repository data is stored in `src/data/github.json`.  
The `scripts/fetch-github.js` script fetches it from the GitHub API at build time.  
The file ships with a placeholder so the site builds without a token.

## Resume

Place your resume at `public/resume.pdf`. If the file is absent the resume links
will still appear — the browser will simply show a 404 for that path.

## Sections

1. Hero / Intro
2. About
3. Skills (React · React Native · ElectronJS · Supabase · …)
4. Projects (top 6 repos by ⭐ from `src/data/github.json`)
5. Experience
6. Education
7. Contact
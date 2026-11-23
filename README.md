# Fayera Bekele Dilgasa · Portfolio

A single-page portfolio written in TypeScript with a code-editor look: sidebar file explorer, five color themes (Dark+, Dracula, Monokai, Nord, Light), a command palette, animated background and project filters.

## Run it

```bash
npm install
npm run build      # compiles src/main.ts and writes docs/index.html
```

Open `docs/index.html` in a browser. It is one self-contained file.

## Project layout

| Path | What it is |
| --- | --- |
| `src/main.ts` | All content and behavior (skills, jobs, projects, themes, palette) |
| `src/template.html` | Page markup and CSS |
| `assets/` | Portrait photo and project screenshots (inlined at build time) |
| `scripts/build.mjs` | Build script |
| `docs/index.html` | Built site (commit this for GitHub Pages) |

## Edit your content

Change text, jobs and projects in `src/main.ts`, then run `npm run build`. To swap a project image, replace the file in `assets/projects/` using the project name (for example `llm-grader.webp`).

## Deploy with GitHub Pages

Repo **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and the `/docs` folder.

## Tips

Press `t` to cycle themes, and `Ctrl/Cmd + K` or `/` for the command palette.
# Portfolio

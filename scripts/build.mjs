// Compiles src/main.ts, then inlines the photo, project images and compiled JS
// into src/template.html to produce one self-contained page at docs/index.html.
import { execSync } from "node:child_process";
import fs from "node:fs";

execSync("npx --no-install tsc -p tsconfig.json", { stdio: "inherit" });

const photo = fs.readFileSync("assets/photo.jpg").toString("base64");
const imgs = {};
for (const f of fs.readdirSync("assets/projects").sort()) {
  imgs[f.replace(/\.webp$/, "")] =
    "data:image/webp;base64," + fs.readFileSync(`assets/projects/${f}`).toString("base64");
}
const js = fs.readFileSync("build/main.js", "utf8");

const html = fs
  .readFileSync("src/template.html", "utf8")
  .replace("/*PHOTO*/", () => photo)
  .replace("/*IMG*/", () => JSON.stringify(imgs))
  .replace("/*JS*/", () => js);

fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/index.html", html);
console.log(`Built docs/index.html (${(html.length / 1024).toFixed(0)} KB)`);

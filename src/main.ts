type Cat = "ai" | "web" | "sec" | "game" | "mobile";
interface Theme { id: string; label: string; sw: string[] }
interface Job { role: string; org: string; years: string; tag: string; points: string[] }
interface Project { name: string; cat: Cat; blurb: string; stack: string[] }

const themes: Theme[] = [
  { id: "dark", label: "Dark+", sw: ["#1e1e1e", "#4fc1ff", "#ce9178"] },
  { id: "dracula", label: "Dracula", sw: ["#282a36", "#bd93f9", "#ff79c6"] },
  { id: "monokai", label: "Monokai", sw: ["#272822", "#a6e22e", "#f92672"] },
  { id: "nord", label: "Nord", sw: ["#2e3440", "#88c0d0", "#a3be8c"] },
  { id: "light", label: "Light", sw: ["#ffffff", "#0969da", "#cf222e"] },
];

const files = ["home", "about", "expertise", "skills", "experience", "projects", "contact"];

const edge: string[] = [
  "Lead a team of about 40 engineers as CTO and ship enterprise-scale systems for institutions.",
  "Reviews and scores LLM answers in several languages, including Amharic and Afaan Oromo.",
  "Published work on Amharic NLP, Ethiopic OCR and audio signal processing.",
  "Ran a university cybersecurity department and taught Deep Learning to undergraduates.",
];

const divisions = [
  { id: "01", name: "ML & AI Engineer", since: "since 2014", text: "PyTorch, TensorFlow and Scikit-learn for NLP, deep learning and computer vision, with published work on Amharic text and Ethiopic OCR.", tags: ["PyTorch", "NLP", "OpenCV"] },
  { id: "02", name: "LLM Evaluator", since: "since 2024", text: "Judging model answers against detailed rubrics, correcting outputs for fine-tuning data, and explaining every score in plain words.", tags: ["Rubrics", "SFT data", "Multilingual"] },
  { id: "03", name: "Full-Stack Engineer", since: "since 2011", text: "Web and mobile products in React, Node, TypeScript, PHP, Kotlin, Swift and Flutter, plus large ERP and CRM backends.", tags: ["React", "Node.js", "Flutter"] },
  { id: "04", name: "Mobile App Developer", since: "since 2011", text: "Android and iOS apps with Kotlin, Swift and Flutter, built alongside the backends and APIs that power them.", tags: ["Kotlin", "Swift", "Flutter"] },
  { id: "05", name: "Security & Leadership", since: "since 2015", text: "Led a university cybersecurity department, and now lead an engineering team of 40 as CTO, setting standards for code quality and reviews.", tags: ["Secure coding", "Team lead", "Code review"] },
];

const skills: Record<string, string[]> = {
  "Machine Learning & AI": ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "LangChain", "OpenCV", "NLP", "Deep Learning", "Model Evaluation"],
  "LLM & Data Work": ["LLM evaluation", "Prompt evaluation", "Data annotation", "SFT data review", "Rubric scoring", "Quality assurance", "Multilingual NLP", "OCR", "Word2Vec", "Audio signals"],
  "Languages": ["Python", "TypeScript", "JavaScript", "Java", "C++", "C", "PHP", "Kotlin", "Swift"],
  "Full-Stack Web": ["React", "Node.js", "Express", "TypeScript", "PHP", "HTML", "CSS", "REST APIs", "ERP/CRM"],
  "Mobile Apps (Android & iOS)": ["Kotlin", "Swift", "Flutter", "Android", "iOS", "Cross-platform", "API integration"],
  "Data & Tools": ["Pandas", "NumPy", "Matplotlib", "SQL", "Jupyter", "Git/GitHub", "Docker", "Linux"],
  "Security, Games & Leadership": ["Network security", "App security", "Unity", "Unreal Engine", "Agile/Scrum", "Code review", "Technical writing"],
};

const jobs: Job[] = [
  { role: "LLM Trainer & Data Annotation Specialist", org: "Revelo", years: "2024 – now", tag: "remote", points: [
    "I read AI answers in several languages and judge them on clarity, facts, reasoning and language quality.",
    "I correct and annotate model outputs so they can go straight into fine-tuning.",
    "I help shape the labeling processes teams use to train and benchmark LLMs.",
    "Every score comes with a short note on why, so nobody has to guess." ] },
  { role: "Chief Technology Officer", org: "Eagline Technologies", years: "2015 – present", tag: "onsite", points: [
    "Set the technical direction and make the big architecture calls on enterprise-scale products.",
    "Lead around 40 engineers and keep large institutional projects on schedule.",
    "Set the code quality standards and review habits the whole team follows." ] },
  { role: "Cyber Security Department Lead", org: "Addis Ababa University", years: "2015 – 2018", tag: "academia", points: [
    "Guided the department’s academic and technical direction and kept its people and work moving together." ] },
  { role: "Assistant Lecturer", org: "Arba Minch University", years: "2014 – 2018", tag: "academia", points: [
    "Taught Data Structures & Algorithms and Deep Learning, always paired with hands-on coding." ] },
  { role: "Senior Software Engineer & Project Manager", org: "Eagline Technologies", years: "2011 – 2015", tag: "onsite", points: [
    "Built full-stack web and mobile apps with React, Node, TypeScript, PHP, Kotlin, Swift and Flutter.",
    "Developed large backend systems, including ERP and CRM platforms, for institutional clients.",
    "Worked with clients from the first requirements call to final delivery." ] },
];

// Sample projects: placeholders for now, links are intentionally switched off.
const projects: Project[] = [
  { name: "amharic-embeddings", cat: "ai", stack: ["Python", "Word2Vec", "Pandas"], blurb: "A small toolkit and notebook for training and exploring Word2Vec vectors on Amharic text, with nearest-word lookups." },
  { name: "ethiopic-ocr-kit", cat: "ai", stack: ["Python", "Tesseract", "OpenCV"], blurb: "A command-line helper that cleans scanned Ethiopic pages and runs custom-trained OCR so the text actually comes out right." },
  { name: "llm-grader", cat: "ai", stack: ["TypeScript", "Node.js", "React"], blurb: "A rubric-based tool for comparing model answers side by side, with a required reason for every score." },
  { name: "afaan-oromo-sentiment", cat: "ai", stack: ["PyTorch", "HuggingFace"], blurb: "A fine-tuned text classifier for Afaan Oromo, built because low-resource languages deserve good tooling too." },
  { name: "audio-feature-lab", cat: "ai", stack: ["Python", "NumPy", "Matplotlib"], blurb: "A playground for pulling features out of audio signals, growing out of my 2016 conference poster." },
  { name: "campus-sec-dashboard", cat: "sec", stack: ["TypeScript", "Express", "Docker"], blurb: "A simple dashboard to track security awareness training and open issues for a university department." },
  { name: "erp-starter", cat: "web", stack: ["React", "Node.js", "SQL"], blurb: "A lean ERP and CRM starter with clean data models and tidy third-party integrations, distilled from years of client work." },
  { name: "pocket-notes", cat: "mobile", stack: ["Flutter", "Kotlin", "Swift"], blurb: "A simple notes app for Android and iOS, built in Flutter with native Kotlin and Swift modules where the platform calls for it." },
  { name: "pixel-vault", cat: "game", stack: ["Unity", "C#"], blurb: "A small top-down puzzle game I tinker with on weekends, mostly to keep my game-programming skills sharp." },
];

const pubs: string[] = [
  "Building Custom Ethiopic OCR Engines with Tesseract and Python (Medium / Dev.to, 2018)",
  "A Practical Guide to Word2Vec Embeddings for Amharic Text Processing (blog, 2017)",
  "Applying Signal Processing to Automated Audio Feature Extraction (poster, National ICT Innovation Exhibition, Addis Ababa, 2016)",
];

const filters: [string, string][] = [["all", "All"], ["ai", "AI & NLP"], ["web", "Full-stack"], ["mobile", "Mobile"], ["sec", "Security"], ["game", "Games"]];
const glyph: Record<Cat, string> = { ai: "λ", web: "</>", sec: "#!", game: "▶", mobile: "▯" };
const roles: string[] = ["Machine Learning Engineer", "Full-Stack Engineer", "Android & iOS Developer", "Data Scientist", "LLM Evaluator", "CTO"];
const EMAIL = "fayeradilagasa@gmail.com";

const $ = <T extends HTMLElement>(s: string): T => document.querySelector(s) as T;
const $$ = <T extends HTMLElement>(s: string): T[] => Array.from(document.querySelectorAll<T>(s));
const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const tags = (a: string[]): string => `<div class="tags">${a.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
const off = (t: string): string => `<a href="#projects" class="off" aria-disabled="true" title="Coming soon">${t}</a>`;

function applyTheme(id: string): void {
  document.documentElement.setAttribute("data-theme", id);
  $$("button.theme-btn").forEach(b => b.classList.toggle("on", b.dataset.id === id));
  $("#sb-theme").textContent = themes.find(t => t.id === id)?.label ?? id;
  try { localStorage.setItem("theme", id); } catch { /* storage may be empty */ }
}

function initThemes(): void {
  $("#themes").innerHTML = themes.map(t =>
    `<button class="theme-btn" data-id="${t.id}"><span class="sw">${t.sw.map(c => `<i style="background:${c}"></i>`).join("")}</span>${t.label}</button>`).join("");
  let saved: string | null = null;
  try { saved = localStorage.getItem("theme"); } catch { /* ignore */ }
  const light = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(themes.some(t => t.id === saved) ? (saved as string) : light ? "light" : "dark");
  $("#themes").addEventListener("click", e => {
    const b = (e.target as HTMLElement).closest<HTMLElement>("[data-id]");
    if (b?.dataset.id) applyTheme(b.dataset.id);
  });
  document.addEventListener("keydown", e => {
    const el = e.target as HTMLElement;
    if (e.key !== "t" || e.ctrlKey || e.metaKey || e.altKey || /INPUT|TEXTAREA/.test(el.tagName)) return;
    const i = themes.findIndex(t => t.id === document.documentElement.getAttribute("data-theme"));
    applyTheme(themes[(i + 1) % themes.length].id);
  });
}

function render(): void {
  $("#nav").innerHTML = files.map(f => `<a href="#${f}" data-f="${f}">${f}</a>`).join("");
  $("#about-text").innerHTML = `
    <p>Hi, I’m Fayera. I’ve spent more than ten years building software, leading engineering teams and running a university cybersecurity department. These days I help make large language models better.</p>
    <p>Day to day, I review and score AI answers in several languages, point out where the reasoning or facts fall apart, and annotate data that feeds model fine-tuning.</p>
    <p>My base is solid: Python, PyTorch, TensorFlow and Scikit-learn, plus published work on Amharic NLP and Ethiopic OCR. I’m comfortable with messy, undefined problems, and I write down how I work so others can follow along.</p>
    <p>I also build full-stack web apps and Android and iOS apps, using React, Node.js, Kotlin, Swift and Flutter.</p>`;
  $("#edge").innerHTML = edge.map((e, i) => `<div class="card rv"><span class="num">00${i + 1}</span><p>${e}</p></div>`).join("");
  $("#divs").innerHTML = divisions.map(d => `<div class="card rv"><div class="ico">${ico(d.id)}</div><div class="row"><span class="num">DIV_${d.id}</span><span class="since">${d.since}</span></div><h3>${d.name}</h3><p>${d.text}</p>${tags(d.tags)}</div>`).join("");
  $("#skills-grid").innerHTML = Object.entries(skills).map(([k, v]) =>
    `<div class="card rv"><div class="row"><h3>${k}</h3><span class="since">${v.length} skills</span></div>${tags(v)}</div>`).join("");
  $("#jobs").innerHTML = jobs.map((j, i) =>
    `<article class="job rv"><div class="row"><span class="num">LOG_00${i + 1}</span><span class="since">${j.tag}</span></div><h3>${j.role}</h3><div class="meta">${j.org} · ${j.years}</div><ul>${j.points.map(p => `<li>${p}</li>`).join("")}</ul></article>`).join("");
  $("#pubs").innerHTML = pubs.map(p => `<li>${p}</li>`).join("");
  $("#filters").innerHTML = filters.map(([id, l]) => {
    const n = id === "all" ? projects.length : projects.filter(p => p.cat === id).length;
    return `<button class="chip${id === "all" ? " on" : ""}" data-c="${id}">${l} <b>${n}</b></button>`;
  }).join("");
  drawProjects("all");
  $("#filters").addEventListener("click", e => {
    const b = (e.target as HTMLElement).closest<HTMLElement>("[data-c]");
    if (!b) return;
    $$("#filters .chip").forEach(c => c.classList.toggle("on", c === b));
    drawProjects(b.dataset.c ?? "all");
  });
  $("#cv").addEventListener("click", e => e.preventDefault());
}

declare const IMG: Record<string, string>;
const FIT: Record<string, boolean> = { "llm-grader": true, "afaan-oromo-sentiment": true, "amharic-embeddings": true };
const LOCK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`;

function ico(id: string): string {
  const p: Record<string, string> = {
    "01": `<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6l3.5 5M7 18l3.5-5M14 11l3.5-4M14 13l3.5 4"/>`,
    "02": `<path d="M4 6h10M4 12h6M4 18h8"/><circle cx="17" cy="15" r="4"/><path d="M20 18l2 2"/>`,
    "03": `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 14l-2 2 2 2M15 14l2 2-2 2"/>`,
    "04": `<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>`,
    "05": `<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>`,
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p[id] ?? ""}</svg>`;
}

// Hand-drawn SVG previews for the sample projects (each one varies a little by index).
function art(cat: Cat, i: number): string {
  const r = (n: number): number => (Math.sin(i * 9.7 + n * 4.1) + 1) / 2;
  let g = "";
  if (cat === "ai") {
    const pts = [3, 4, 3].map((n, c) => Array.from({ length: n }, (_, k) => [60 + c * 100, 22 + (96 / n) * (k + 0.5) + r(c * 5 + k) * 8] as [number, number]));
    for (let c = 0; c < 2; c++) for (const a of pts[c]) for (const b of pts[c + 1]) g += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke-opacity=".3"/>`;
    pts.flat().forEach((q, k) => { g += `<circle cx="${q[0]}" cy="${q[1]}" r="7" fill="#fff" fill-opacity="${0.5 + r(k) * 0.5}" stroke="none"/>`; });
    g += `<circle cx="280" cy="30" r="12" stroke-opacity=".5"/><circle cx="280" cy="30" r="4" fill="#fff" stroke="none"/>`;
  } else if (cat === "web") {
    g += `<rect x="40" y="14" width="240" height="94" rx="8" fill="#fff" fill-opacity=".1"/><path d="M40 32h240"/><circle cx="54" cy="23" r="2.5" fill="#fff"/><circle cx="64" cy="23" r="2.5" fill="#fff"/><circle cx="74" cy="23" r="2.5" fill="#fff"/><rect x="50" y="42" width="44" height="56" rx="4" stroke-opacity=".5"/>`;
    for (let k = 0; k < 6; k++) { const h = 12 + r(k) * 40; g += `<rect x="${108 + k * 28}" y="${98 - h}" width="16" height="${h}" rx="3" fill="#fff" fill-opacity="${0.35 + r(k + 9) * 0.5}" stroke="none"/>`; }
  } else if (cat === "sec") {
    g += `<path d="M160 12l54 18v30c0 24-24 40-54 50-30-10-54-26-54-50V30z" fill="#fff" fill-opacity=".12"/><rect x="146" y="54" width="28" height="22" rx="4" fill="#fff" stroke="none"/><path d="M152 54v-7a8 8 0 0 1 16 0v7"/>`;
    for (let k = 0; k < 4; k++) { const w = 20 + r(k) * 40; g += `<path d="M${30 + k % 2 * 240} ${30 + k * 20}h${w}" stroke-dasharray="4 5" stroke-opacity=".6"/>`; }
  } else if (cat === "mobile") {
    g += `<rect x="124" y="8" width="72" height="104" rx="12" fill="#fff" fill-opacity=".12"/><rect x="132" y="22" width="56" height="12" rx="4" fill="#fff" fill-opacity=".6" stroke="none"/><rect x="132" y="40" width="56" height="12" rx="4" fill="#fff" fill-opacity=".35" stroke="none"/><rect x="132" y="58" width="36" height="12" rx="4" fill="#fff" fill-opacity=".35" stroke="none"/><circle cx="160" cy="92" r="6" fill="#fff" stroke="none"/><rect x="60" y="26" width="48" height="84" rx="9" stroke-opacity=".45"/><rect x="212" y="26" width="48" height="84" rx="9" stroke-opacity=".45"/>`;
  } else {
    for (let k = 0; k < 9; k++) g += `<rect x="${k * 36 - 2}" y="98" width="34" height="24" rx="3" fill="#fff" fill-opacity="${k % 2 ? 0.28 : 0.45}" stroke="none"/>`;
    g += `<rect x="190" y="70" width="70" height="8" rx="3" fill="#fff" fill-opacity=".5" stroke="none"/><rect x="${70 + r(1) * 60}" y="74" width="18" height="24" rx="4" fill="#fff" stroke="none"/>`;
    for (let k = 0; k < 4; k++) g += `<circle cx="${100 + k * 40 + r(k) * 10}" cy="${40 + r(k + 3) * 20}" r="6" stroke-opacity=".8"/><circle cx="${20 + r(k + 6) * 280}" cy="${10 + r(k + 2) * 30}" r="1.5" fill="#fff" stroke="none"/>`;
  }
  return `<svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" aria-hidden="true">${g}</svg>`;
}

function drawProjects(c: string): void {
  const list = projects.filter(p => c === "all" || p.cat === c);
  $("#project-grid").innerHTML = list.map((p, i) =>
    `<div class="card proj in" style="--d:${i * 60}ms"><div class="pv ${p.cat}">${IMG[p.name] ? `<img src="${IMG[p.name]}" alt="Preview of ${p.name}" loading="lazy" class="${FIT[p.name] ? "fit" : ""}">` : art(p.cat, i)}<em>private</em></div><div class="pb"><h3>${p.name}</h3><p>${p.blurb}</p>${tags(p.stack)}<div class="links"><span class="priv">${LOCK}private repo</span>${off("live demo")}</div></div></div>`).join("");
  $$("a.off").forEach(a => a.addEventListener("click", e => e.preventDefault()));
}

async function typing(): Promise<void> {
  const el = $("#role");
  if (reduce) { el.textContent = roles[0]; return; }
  for (let i = 0; ; i = (i + 1) % roles.length) {
    for (const ch of roles[i]) { el.textContent += ch; await sleep(55); }
    await sleep(1500);
    while (el.textContent) { el.textContent = el.textContent.slice(0, -1); await sleep(25); }
    await sleep(250);
  }
}

function counters(): void {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target as HTMLElement; io.unobserve(el);
    const to = Number(el.dataset.count), t0 = performance.now();
    const step = (t: number): void => {
      const p = reduce ? 1 : Math.min((t - t0) / 1200, 1);
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.6 });
  $$("[data-count]").forEach(el => io.observe(el));
}

function observe(): void {
  const rv = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); }
  }), { threshold: 0.1 });
  $$(".rv, .sh, .hero-in").forEach(el => rv.observe(el));
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const id = (e.target as HTMLElement).id;
    $$("#nav a").forEach(a => a.classList.toggle("on", a.dataset.f === id));
    $("#sb-file").textContent = `${id}.ts`;
  }), { rootMargin: "-40% 0px -55% 0px" });
  $$("main > section").forEach(s => spy.observe(s));
  const update = (): void => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(100, Math.round(window.scrollY / max * 100)) : 0;
    $("#prog").style.width = `${p}%`;
    $("#sb-pos").textContent = `${p}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
  const tick = (): void => { $("#sb-clock").textContent = new Date().toISOString().slice(11, 19) + " UTC"; };
  tick(); setInterval(tick, 1000);
}

function form(): void {
  const f = $<HTMLFormElement>("#form");
  f.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(f);
    const body = `${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(String(d.get("subject") || "Hello from your portfolio"))}&body=${encodeURIComponent(body)}`;
    $("#form-msg").textContent = `Opening your email app… if nothing happens, write to ${EMAIL} directly.`;
    window.location.href = url;
  });
}

interface Cmd { label: string; kind: string; run: () => void }

function extras(): void {
  $$(".grid, #jobs, .metrics").forEach(g => Array.from(g.children).forEach((c, i) =>
    (c as HTMLElement).style.setProperty("--d", `${Math.min(i, 8) * 80}ms`)));
  $$(".ln").forEach((l, i) => l.style.setProperty("--i", String(i)));
  const all = Object.values(skills).flat();
  $("#track").innerHTML = [...all, ...all].map(s => `<span>${s}</span>`).join("");
  const top = $("#top");
  window.addEventListener("scroll", () => top.classList.toggle("show", window.scrollY > 600), { passive: true });
  top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Spotlight glow on cards and a soft 3D tilt on project cards and the portrait.
function interactions(): void {
  if (reduce) return;
  document.addEventListener("mousemove", e => {
    const el = (e.target as HTMLElement).closest<HTMLElement>(".card, .portrait");
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (el.matches(".proj, .portrait")) {
      el.classList.add("tilting");
      el.style.transform = `perspective(900px) rotateX(${(y / r.height - 0.5) * -8}deg) rotateY(${(x / r.width - 0.5) * 8}deg) translateY(-4px)`;
    }
  });
  document.addEventListener("mouseout", e => {
    const el = (e.target as HTMLElement).closest<HTMLElement>(".proj, .portrait");
    if (el && !el.contains(e.relatedTarget as Node | null)) { el.classList.remove("tilting"); el.style.transform = ""; }
  });
}

// Command palette: Ctrl/Cmd+K or "/" to jump anywhere or switch themes.
function palette(): void {
  const box = $("#pal"), input = $<HTMLInputElement>("#pin"), list = $("#plist");
  const cmds: Cmd[] = [
    ...files.map(f => ({ label: `Go to ${f}.ts`, kind: "file", run: () => document.getElementById(f)?.scrollIntoView({ behavior: "smooth" }) })),
    ...themes.map(t => ({ label: `Theme: ${t.label}`, kind: "theme", run: () => applyTheme(t.id) })),
    { label: "Email Fayera", kind: "link", run: () => { window.location.href = `mailto:${EMAIL}`; } },
    { label: "Open GitHub", kind: "link", run: () => { window.open("https://github.com/fayeradilgasa", "_blank", "noopener"); } },
  ];
  let shown: Cmd[] = [], sel = 0;
  const draw = (): void => {
    const q = input.value.trim().toLowerCase();
    shown = cmds.filter(c => c.label.toLowerCase().includes(q));
    sel = Math.min(sel, Math.max(shown.length - 1, 0));
    list.innerHTML = shown.map((c, i) => `<li data-i="${i}" class="${i === sel ? "on" : ""}">${c.label}<span class="dim">${c.kind}</span></li>`).join("") || `<li class="dim">No matches</li>`;
  };
  const close = (): void => { box.hidden = true; };
  const open = (): void => { box.hidden = false; input.value = ""; sel = 0; draw(); input.focus(); };
  const run = (i: number): void => { const c = shown[i]; if (c) { close(); c.run(); } };
  input.addEventListener("input", () => { sel = 0; draw(); });
  list.addEventListener("click", e => { const li = (e.target as HTMLElement).closest<HTMLElement>("[data-i]"); if (li) run(Number(li.dataset.i)); });
  box.addEventListener("mousedown", e => { if (e.target === box) close(); });
  $("#kbtn").addEventListener("click", open);
  document.addEventListener("keydown", e => {
    const typing = /INPUT|TEXTAREA/.test((e.target as HTMLElement).tagName);
    if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !typing && box.hidden)) { e.preventDefault(); open(); return; }
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(sel + 1, shown.length - 1); draw(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(sel - 1, 0); draw(); }
    else if (e.key === "Enter") run(sel);
  });
}

// Quiet constellation background that reacts to the mouse.
function network(): void {
  const cv = $<HTMLCanvasElement>("#bg"), ctx = cv.getContext("2d");
  if (!ctx) return;
  interface P { x: number; y: number; vx: number; vy: number }
  let w = 0, h = 0, n = 0, col = "#4fc1ff", pts: P[] = [];
  const m = { x: -999, y: -999 };
  const size = (): void => {
    const d = window.devicePixelRatio || 1;
    w = window.innerWidth; h = window.innerHeight;
    cv.width = w * d; cv.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    pts = Array.from({ length: Math.min(70, Math.round(w * h / 20000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 }));
  };
  const frame = (): void => {
    if (n++ % 20 === 0) col = getComputedStyle(document.documentElement).getPropertyValue("--acc").trim() || col;
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = col; ctx.fillStyle = col;
    for (const p of pts) {
      if (!reduce) { p.x += p.vx; p.y += p.vy; }
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.globalAlpha = 0.8; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 6.283); ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j <= pts.length; j++) {
        const a = pts[i], b = j === pts.length ? m : pts[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y), lim = j === pts.length ? 180 : 130;
        if (dist < lim) { ctx.globalAlpha = (1 - dist / lim) * 0.45; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
    }
    if (!reduce && !document.hidden) requestAnimationFrame(frame);
  };
  window.addEventListener("resize", size);
  window.addEventListener("mousemove", e => { m.x = e.clientX; m.y = e.clientY; }, { passive: true });
  size(); frame();
}

initThemes();
render();
extras();
observe();
counters();
form();
interactions();
palette();
network();
void typing();

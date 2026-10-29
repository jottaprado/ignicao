#!/usr/bin/env node
/**
 * Pré-processa os 11 volumes canônicos em `volumes/` (e gera também o Omnibus)
 * para compilação em EPUB via Pandoc.
 *
 * Etapas:
 *  1) Indexa os diagramas Mermaid já renderizados em `build/mermaid/` por conteúdo
 *     (evitando re-renderizar diagramas idênticos) e renderiza via mmdc apenas novos blocos.
 *  2) Substitui blocos mermaid por imagens `![Diagrama N](mermaid/diagram-N.png)`
 *  3) Converte wikilinks Obsidian:
 *     - Nos volumes individuais:
 *       * Links internos `[[#Seção|Alias]]` -> `[Alias](#slug)`
 *       * Links entre volumes `[[IGNICAO-Vol-X#Seção|Alias (Vol. X)]]` -> `*Alias*`
 *     - Na edição completa (Omnibus):
 *       * Todos os links (internos e entre volumes) -> `[Alias](#slug)`
 *  4) Escreve `build/vol-1-preprocessado.md` ... `build/vol-11-preprocessado.md`
 *     e `build/manuscrito_preprocessado.md` (Omnibus).
 */

const fs = require('fs');
const path = require('path');
const { execFileSync, execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const VOLUMES_DIR = path.join(ROOT, 'volumes');
const BUILD_DIR = path.join(ROOT, 'build');
const MERMAID_DIR = path.join(BUILD_DIR, 'mermaid');

if (!fs.existsSync(MERMAID_DIR)) {
  fs.mkdirSync(MERMAID_DIR, { recursive: true });
}

const manifest = JSON.parse(
  fs.readFileSync(path.join(BUILD_DIR, 'volumes_manifest.json'), 'utf8')
);

const VOLUMES = manifest.map((m) => ({
  num: m.num,
  slug: path.basename(m.file, '.md'),
  title: m.title,
  subtitle: m.subtitle,
  cover: `build/cover-vol-${m.num}.png`,
}));

function slugify(s) {
  return s
    .replace(/\[\[(?:[^\]|]*\|)?([^\]]+)\]\]/g, '$1')
    .replace(/[*_`]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}_\s.-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/^[^\p{L}]+/u, '');
}

const CALLOUT_LABELS = {
  note: 'Nota',
  tip: 'Dica',
  info: 'Informação',
  warning: 'Atenção',
  caution: 'Cuidado',
  danger: 'Perigo',
  important: 'Importante',
  question: 'Pergunta',
  example: 'Exemplo',
  abstract: 'Resumo',
  summary: 'Resumo',
  quote: 'Citação',
  success: 'Sucesso',
  failure: 'Falha',
  bug: 'Falha',
  todo: 'A fazer',
};

function normalizeMmd(body) {
  return body.replace(/\r\n/g, '\n').trim();
}

// ---------------------------------------------------------------------------
// 1. Indexar cache existente em build/mermaid/
// ---------------------------------------------------------------------------
const mmdCache = new Map(); // normalizedBody -> pngFilename (e.g. 'diagram-1.png')
let maxDiagramIdx = 0;

for (const f of fs.readdirSync(MERMAID_DIR)) {
  const m = f.match(/^diagram-(\d+)\.mmd$/);
  if (m) {
    const idx = Number(m[1]);
    if (idx > maxDiagramIdx) maxDiagramIdx = idx;
    const mmdPath = path.join(MERMAID_DIR, f);
    const pngName = `diagram-${idx}.png`;
    const pngPath = path.join(MERMAID_DIR, pngName);
    if (fs.existsSync(pngPath)) {
      const content = normalizeMmd(fs.readFileSync(mmdPath, 'utf8'));
      mmdCache.set(content, pngName);
    }
  }
}

console.log(`[1/4] Cache Mermaid carregado: ${mmdCache.size} diagramas já renderizados em build/mermaid/`);

const IS_WIN = process.platform === 'win32';
const puppeteerConfig = path.join(BUILD_DIR, 'puppeteer-config.json');
if (!fs.existsSync(puppeteerConfig)) {
  fs.writeFileSync(
    puppeteerConfig,
    JSON.stringify({ args: ['--no-sandbox', '--disable-setuid-sandbox'] }, null, 2)
  );
}

function findMmdc() {
  const candidates = [
    path.join(process.env.APPDATA || '', 'npm', 'mmdc.cmd'),
    'mmdc.cmd',
    'mmdc',
  ];
  for (const c of candidates) {
    try {
      execSync(`"${c}" --version`, { stdio: 'pipe' });
      return c;
    } catch (_) {
      /* try next */
    }
  }
  return null;
}

const MMDC = findMmdc();

function findBrowserCli() {
  const candidates = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

const BROWSER_CLI = findBrowserCli();

function getOrRenderMermaidPng(rawBody) {
  const norm = normalizeMmd(rawBody);
  if (mmdCache.has(norm)) {
    return mmdCache.get(norm);
  }
  maxDiagramIdx += 1;
  const n = maxDiagramIdx;
  const mmdPath = path.join(MERMAID_DIR, `diagram-${n}.mmd`);
  const pngName = `diagram-${n}.png`;
  const pngPath = path.join(MERMAID_DIR, pngName);
  fs.writeFileSync(mmdPath, norm, 'utf8');

  if (MMDC) {
    try {
      execSync(
        `"${MMDC}" -i "${mmdPath}" -o "${pngPath}" -s 2 -b white -p "${puppeteerConfig}"`,
        { stdio: 'pipe', timeout: 120000 }
      );
      console.log(`      Novo diagrama renderizado (mmdc): ${pngName}`);
      mmdCache.set(norm, pngName);
      return pngName;
    } catch (err) {
      console.warn(`      [WARN] Falha ao renderizar via mmdc ${pngName}: ${err.message.split('\n')[0]}`);
    }
  }

  if (BROWSER_CLI) {
    try {
      const tmpHtml = path.join(MERMAID_DIR, `_tmp-${n}.html`);
      const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  html, body { margin: 0; padding: 24px; background: #ffffff; display: flex; align-items: center; justify-content: center; font-family: Segoe UI, sans-serif; }
  .mermaid { width: 100%; text-align: center; }
</style>
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>mermaid.initialize({ startOnLoad: true, theme: 'default' });</script>
</head><body><pre class="mermaid">${norm.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body></html>`;
      fs.writeFileSync(tmpHtml, html, 'utf8');
      const fileUrl = 'file:///' + tmpHtml.replace(/\\/g, '/');
      execFileSync(
        BROWSER_CLI,
        [
          '--headless=new',
          '--disable-gpu',
          '--hide-scrollbars',
          '--window-size=1600,420',
          '--virtual-time-budget=4000',
          `--screenshot=${pngPath}`,
          fileUrl,
        ],
        { stdio: 'pipe', timeout: 60000 }
      );
      try { fs.unlinkSync(tmpHtml); } catch (_) {}
      if (fs.existsSync(pngPath)) {
        console.log(`      Novo diagrama renderizado (browser CLI): ${pngName}`);
        mmdCache.set(norm, pngName);
        return pngName;
      }
    } catch (err) {
      console.warn(`      [WARN] Falha ao renderizar via browser CLI ${pngName}: ${err.message.split('\n')[0]}`);
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// 2. Função de pré-processamento de Markdown (Mermaid + Callouts + Wikilinks + Math)
// ---------------------------------------------------------------------------
const mermaidRegex = /```mermaid\s*\r?\n([\s\S]*?)\r?\n```/g;

function findMatchingBrace(s, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < s.length; i++) {
    if (s[i] === '{' && (i === 0 || s[i - 1] !== '\\')) {
      depth += 1;
    } else if (s[i] === '}' && (i === 0 || s[i - 1] !== '\\')) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function replaceCmd1Arg(s, cmd, fn) {
  const pat = new RegExp(`\\\\${cmd}(?![a-zA-Z])\\s*\\{`);
  while (true) {
    const m = pat.exec(s);
    if (!m) break;
    const openIdx = m.index + m[0].length - 1;
    const closeIdx = findMatchingBrace(s, openIdx);
    if (closeIdx === -1) break;
    const inner = s.slice(openIdx + 1, closeIdx);
    s = s.slice(0, m.index) + fn(inner) + s.slice(closeIdx + 1);
  }
  return s;
}

function replaceFrac(s) {
  const pat = /\\(?:d|t)?frac(?![a-zA-Z])\s*\{/;
  while (true) {
    const m = pat.exec(s);
    if (!m) break;
    const open1 = m.index + m[0].length - 1;
    const close1 = findMatchingBrace(s, open1);
    if (close1 === -1) break;
    const rest = s.slice(close1 + 1);
    const m2 = /^\s*\{/.exec(rest);
    if (!m2) break;
    const open2 = close1 + 1 + m2[0].length - 1;
    const close2 = findMatchingBrace(s, open2);
    if (close2 === -1) break;
    const num = s.slice(open1 + 1, close1).trim();
    const den = s.slice(open2 + 1, close2).trim();
    const numStr = /[+\-]/.test(num) && !(num.startsWith('(') && num.endsWith(')')) ? `(${num})` : num;
    const denStr = /[+\-×/]/.test(den) && !(den.startsWith('(') && den.endsWith(')')) ? `(${den})` : den;
    s = s.slice(0, m.index) + `${numStr} / ${denStr}` + s.slice(close2 + 1);
  }
  return s;
}

function latexToHtml(expr) {
  let s = expr.trim();
  s = s
    .replace(/\\%/g, '%')
    .replace(/\\\$/g, '$')
    .replace(/\\&/g, '&')
    .replace(/\\~/g, '~')
    .replace(/\\_/g, '_');
  s = s.replace(/\^\s*(?:\{\s*\\circ\s*\}|\\circ(?![a-zA-Z]))/g, '°');

  while (true) {
    const m = /\\underbrace(?![a-zA-Z])\s*\{/.exec(s);
    if (!m) break;
    const o1 = m.index + m[0].length - 1;
    const c1 = findMatchingBrace(s, o1);
    if (c1 === -1) break;
    const rest = s.slice(c1 + 1);
    const m2 = /^\s*_\s*\{/.exec(rest);
    if (m2) {
      const o2 = c1 + 1 + m2[0].length - 1;
      const c2 = findMatchingBrace(s, o2);
      if (c2 !== -1) {
        const a = s.slice(o1 + 1, c1);
        const b = s.slice(o2 + 1, c2);
        s = s.slice(0, m.index) + `${a} (${b})` + s.slice(c2 + 1);
        continue;
      }
    }
    s = s.slice(0, m.index) + s.slice(o1 + 1, c1) + s.slice(c1 + 1);
  }

  const replacements = [
    [/\\times(?![a-zA-Z])/g, '×'],
    [/\\div(?![a-zA-Z])/g, '÷'],
    [/\\cdot(?![a-zA-Z])/g, '·'],
    [/\\ge(?![a-zA-Z])/g, '≥'],
    [/\\geq(?![a-zA-Z])/g, '≥'],
    [/\\le(?![a-zA-Z])/g, '≤'],
    [/\\leq(?![a-zA-Z])/g, '≤'],
    [/\\gg(?![a-zA-Z])/g, '≫'],
    [/\\ll(?![a-zA-Z])/g, '≪'],
    [/\\approx(?![a-zA-Z])/g, '≈'],
    [/\\neq(?![a-zA-Z])/g, '≠'],
    [/\\ne(?![a-zA-Z])/g, '≠'],
    [/\\pm(?![a-zA-Z])/g, '±'],
    [/\\sum(?![a-zA-Z])/g, '∑'],
    [/\\prod(?![a-zA-Z])/g, '∏'],
    [/\\in(?![a-zA-Z])/g, '∈'],
    [/\\cap(?![a-zA-Z])/g, '∩'],
    [/\\cup(?![a-zA-Z])/g, '∪'],
    [/\\implies(?![a-zA-Z])/g, '⇒'],
    [/\\Rightarrow(?![a-zA-Z])/g, '⇒'],
    [/\\rightarrow(?![a-zA-Z])/g, '→'],
    [/\\to(?![a-zA-Z])/g, '→'],
    [/\\Delta(?![a-zA-Z])/g, 'Δ'],
    [/\\alpha(?![a-zA-Z])/g, 'α'],
    [/\\beta(?![a-zA-Z])/g, 'β'],
    [/\\circ(?![a-zA-Z])/g, '°'],
    [/\\quad(?![a-zA-Z])/g, ' '],
    [/\\qquad(?![a-zA-Z])/g, '  '],
    [/\\max(?![a-zA-Z])/g, 'max'],
    [/\\min(?![a-zA-Z])/g, 'min'],
    [/\\;/g, ' '],
    [/\\,/g, ' '],
  ];
  for (const [pat, rep] of replacements) {
    s = s.replace(pat, rep);
  }

  for (let pass = 0; pass < 6; pass++) {
    s = replaceCmd1Arg(s, 'textbf', (x) => `<strong>${x}</strong>`);
    s = replaceCmd1Arg(s, 'mathbf', (x) => `<strong>${x}</strong>`);
    s = replaceCmd1Arg(s, 'text', (x) => x);
    s = replaceCmd1Arg(s, 'mathrm', (x) => x);
    s = replaceFrac(s);
  }

  s = s.replace(/\\left\s*([()[\]|.])/g, (_, ch) => (ch === '.' ? '' : ch));
  s = s.replace(/\\right\s*([()[\]|.])/g, (_, ch) => (ch === '.' ? '' : ch));
  s = s.replace(/\\left\s*\\\{/g, '{');
  s = s.replace(/\\right\s*\\\}/g, '}');
  s = s.replace(/\\\{/g, '{').replace(/\\\}/g, '}');

  for (let pass = 0; pass < 3; pass++) {
    s = s.replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>');
    s = s.replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>');
  }
  s = s.replace(/_([A-Za-z0-9]+)/g, '<sub>$1</sub>');
  s = s.replace(/\^([A-Za-z0-9+\-]+)/g, '<sup>$1</sup>');

  s = s.replace(/[ \t]+/g, ' ').trim();
  return s;
}

function preprocessMarkdown(md, { isOmnibus = false } = {}) {
  // Remover YAML frontmatter inicial (os metadados de título/autor são passados via --metadata ao Pandoc)
  let out = md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n+/, '');
  let localCounter = 0;
  out = out.replace(mermaidRegex, (_, body) => {
    localCounter += 1;
    const pngName = getOrRenderMermaidPng(body);
    if (pngName) {
      return `![Diagrama ${localCounter}](mermaid/${pngName})`;
    }
    return `*(Diagrama ${localCounter})*`;
  });

  // Proteger blocos de código cercados (```...```) e spans de código inline (`...`)
  const codeSpans = [];
  out = out.replace(/```[\s\S]*?```|`[^`\n]+`/g, (match) => {
    const idx = codeSpans.length;
    codeSpans.push(match);
    return `\u0000CODE_${idx}\u0000`;
  });

  // 0) Converter callouts Obsidian `> [!tipo] Título` em cabeçalho de blockquote estilizado
  out = out.replace(
    /^([ \t]*(?:>[ \t]*)+)\[!([a-zA-Z]+)\][-+]?(?:[ \t]+([^\r\n]*))?$/gm,
    (_, prefix, rawType, rawTitle) => {
      const key = rawType.toLowerCase();
      const label = CALLOUT_LABELS[key] || rawType;
      const title = (rawTitle || '').trim();
      const barePrefix = prefix.replace(/[ \t]+$/, '');
      if (title) {
        return `${barePrefix} **${label}: ${title}**\n${barePrefix}`;
      }
      return `${barePrefix} **${label}:**`;
    }
  );

  // 1) Wikilinks internos com alias: [[#ALVO|alias]] ou [[#ALVO\|alias]]
  out = out.replace(/\[\[#([^\]|\\]+)(?:\\\||\|)([^\]]+)\]\]/g, (_, target, alias) => {
    const slug = slugify(target);
    return `[${alias.trim()}](#${slug})`;
  });

  // 2) Wikilinks internos sem alias: [[#ALVO]]
  out = out.replace(/\[\[#([^\]|]+)\]\]/g, (_, target) => {
    const slug = slugify(target);
    return `[${target.trim()}](#${slug})`;
  });

  // 3) Wikilinks entre volumes com alias: [[IGNICAO-Vol-X-Nome#ALVO|alias]] ou \|
  out = out.replace(/\[\[IGNICAO-Vol-[0-9]+-[^#\]|]+#([^\]|\\]+)(?:\\\||\|)([^\]]+)\]\]/g, (_, target, alias) => {
    if (isOmnibus) {
      const slug = slugify(target);
      return `[${alias.trim()}](#${slug})`;
    }
    return `*${alias.trim().replace(/\*/g, '')}*`;
  });

  // 4) Wikilinks entre volumes sem alias: [[IGNICAO-Vol-X-Nome#ALVO]]
  out = out.replace(/\[\[IGNICAO-Vol-([0-9]+)-[^#\]|]+#([^\]]+)\]\]/g, (_, volNum, target) => {
    if (isOmnibus) {
      const slug = slugify(target);
      return `[${target.trim()}](#${slug})`;
    }
    return `*${target.trim().replace(/\*/g, '')} (Vol. ${volNum})*`;
  });

  // 5) Outros wikilinks remanescentes [[alvo|alias]] ou [[alvo]]
  out = out.replace(/\[\[([^\]#|][^\]|\\]*)(?:\\\||\|)([^\]]+)\]\]/g, (_, _target, alias) => alias.trim());
  out = out.replace(/\[\[([^\]#|][^\]]*)\]\]/g, (_, target) => target.trim());

  // 5b) Converter blocos matemáticos LaTeX ($$...$$) e expressões matemáticas/químicas inline ($...$)
  //     para HTML semântico / Unicode (<sub>, <sup>, <strong>, ×, ÷, ≥, ≤, ≈, ∑, ∈, ∩, →, ⇒, ±, Δ, α, °)
  out = out.replace(/\$\$([\s\S]*?)\$\$/g, (_, expr) => latexToHtml(expr));
  out = out.replace(
    /(?<![A-Z\\])\$(?!\s)((?:\\\$|(?!(?:R|US)\$)[^$\n])+?)(?<![\\ \t])(?<![\s(]R)(?<!US)\$/g,
    (_, expr) => latexToHtml(expr)
  );

  // 6) Garantir linha em branco antes e depois de todo `---` fora do frontmatter inicial
  const fmMatch = out.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  if (fmMatch) {
    const fm = fmMatch[0];
    let rest = out.slice(fm.length);
    rest = rest.replace(/\r?\n---\r?\n/g, '\n\n---\n\n');
    out = fm + '\n' + rest;
  } else {
    out = out.replace(/\r?\n---\r?\n/g, '\n\n---\n\n');
  }

  // Restaurar blocos de código cercados e spans de código inline
  out = out.replace(/\u0000CODE_(\d+)\u0000/g, (_, idx) => codeSpans[Number(idx)]);

  return out;
}

// ---------------------------------------------------------------------------
// 3. Processar cada um dos 10 volumes e montar o Omnibus
// ---------------------------------------------------------------------------
console.log(`[2/4] Pré-processando os ${VOLUMES.length} volumes...`);
const omnibusParts = [];

for (const vol of VOLUMES) {
  const srcPath = path.join(VOLUMES_DIR, `${vol.slug}.md`);
  const rawMd = fs.readFileSync(srcPath, 'utf8');

  const preprocessedVol = preprocessMarkdown(rawMd, { isOmnibus: false });
  const destVolPath = path.join(BUILD_DIR, `vol-${vol.num}-preprocessado.md`);
  fs.writeFileSync(destVolPath, preprocessedVol, 'utf8');
  console.log(`      Vol. ${vol.num} -> build/vol-${vol.num}-preprocessado.md`);

  // Para o Omnibus, removemos o YAML frontmatter individual de todos os volumes (1..11)
  const withoutFrontmatter = rawMd.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n+/, '');
  omnibusParts.push(withoutFrontmatter);
}

console.log('[3/4] Gerando build/manuscrito_preprocessado.md (Omnibus)...');
const rawOmnibus = omnibusParts.join('\n\n---\n\n');
const preprocessedOmnibus = preprocessMarkdown(rawOmnibus, { isOmnibus: true });
const omnibusOutPath = path.join(BUILD_DIR, 'manuscrito_preprocessado.md');
fs.writeFileSync(omnibusOutPath, preprocessedOmnibus, 'utf8');
console.log('[4/4] Concluído! Todos os arquivos pré-processados estão prontos em build/.');

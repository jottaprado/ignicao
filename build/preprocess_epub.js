#!/usr/bin/env node
/**
 * Pre-processa manuscrito canonical IGNIÇÃO para geração de EPUB.
 *
 * Etapas:
 *  1) Extrai blocos mermaid e gera PNGs via mmdc
 *  2) Substitui blocos mermaid por imagens
 *  3) Converte wikilinks Obsidian para links Markdown padrão
 *  4) Escreve build/manuscrito_preprocessado.md
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const CANONICAL = path.join(
  ROOT,
  'IGNIÇÃO - Manual de Campo do Empreendedor  - João Prado (2026).md'
);
const BUILD_DIR = path.join(ROOT, 'build');
const MERMAID_DIR = path.join(BUILD_DIR, 'mermaid');
const OUTPUT = path.join(BUILD_DIR, 'manuscrito_preprocessado.md');

if (!fs.existsSync(MERMAID_DIR)) {
  fs.mkdirSync(MERMAID_DIR, { recursive: true });
}

console.log('[1/5] Lendo canonical:', CANONICAL);
let md = fs.readFileSync(CANONICAL, 'utf8');
const originalLines = md.split('\n').length;
console.log('      Linhas:', originalLines);

// ---------------------------------------------------------------------------
// Slugify
// ---------------------------------------------------------------------------
function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')      // remove acentos
    .toLowerCase()
    .replace(/[—–]/g, '-')                // travessões para hyphen
    .replace(/[^a-z0-9\s-]/g, '')         // remove pontuação
    .replace(/\s+/g, '-')                 // espaços para hyphens
    .replace(/-+/g, '-')                  // colapsa hyphens
    .replace(/^-|-$/g, '');               // trim hyphens
}

// ---------------------------------------------------------------------------
// 1) Extrair blocos mermaid
// ---------------------------------------------------------------------------
console.log('[2/5] Extraindo blocos mermaid...');
const mermaidRegex = /```mermaid\s*\n([\s\S]*?)\n```/g;
const blocks = [];
let m;
while ((m = mermaidRegex.exec(md)) !== null) {
  blocks.push({ full: m[0], body: m[1], start: m.index });
}
console.log('      Blocos mermaid encontrados:', blocks.length);

// ---------------------------------------------------------------------------
// 2) Gerar PNGs via mmdc
// ---------------------------------------------------------------------------
console.log('[3/5] Gerando PNGs via mmdc (pode demorar)...');
const failed = [];
const generated = [];

// Puppeteer config para evitar sandbox em alguns ambientes
const puppeteerConfig = path.join(BUILD_DIR, 'puppeteer-config.json');
if (!fs.existsSync(puppeteerConfig)) {
  fs.writeFileSync(
    puppeteerConfig,
    JSON.stringify({ args: ['--no-sandbox', '--disable-setuid-sandbox'] }, null, 2)
  );
}

// Localizar mmdc no Windows (pode ser .cmd) — usa shell:true no Windows
const IS_WIN = process.platform === 'win32';

function findMmdc() {
  const candidates = [
    path.join(process.env.APPDATA || '', 'npm', 'mmdc.cmd'),
    'mmdc.cmd',
    'mmdc',
  ];
  for (const c of candidates) {
    try {
      execFileSync(c, ['--version'], { stdio: 'pipe', shell: IS_WIN });
      return c;
    } catch (_) {
      /* try next */
    }
  }
  return null;
}

const MMDC = findMmdc();
if (!MMDC) {
  console.error('mmdc não encontrado no PATH. Tentando continuar e substituir blocos por placeholder.');
}

for (let i = 0; i < blocks.length; i++) {
  const n = i + 1;
  const mmdPath = path.join(MERMAID_DIR, `diagram-${n}.mmd`);
  const pngPath = path.join(MERMAID_DIR, `diagram-${n}.png`);
  fs.writeFileSync(mmdPath, blocks[i].body, 'utf8');

  if (!MMDC) {
    failed.push({ n, reason: 'mmdc-not-found' });
    continue;
  }

  try {
    execFileSync(
      MMDC,
      [
        '-i', `"${mmdPath}"`,
        '-o', `"${pngPath}"`,
        '-s', '2',
        '-b', 'white',
        '-p', `"${puppeteerConfig}"`,
      ],
      { stdio: 'pipe', timeout: 120000, shell: IS_WIN }
    );
    generated.push(n);
    if (n % 10 === 0 || n === blocks.length) {
      console.log(`      ${n}/${blocks.length} diagramas gerados`);
    }
  } catch (err) {
    failed.push({ n, reason: err.message.split('\n')[0].slice(0, 200) });
    console.warn(`      [WARN] diagram-${n} falhou: ${err.message.split('\n')[0].slice(0, 120)}`);
  }
}

console.log(`      OK: ${generated.length}, falhas: ${failed.length}`);

// ---------------------------------------------------------------------------
// 3) Substituir blocos mermaid por imagens (do fim para o início preserva offsets)
// ---------------------------------------------------------------------------
console.log('[4/5] Substituindo blocos mermaid no markdown...');
let mermaidCounter = 0;
md = md.replace(mermaidRegex, () => {
  mermaidCounter += 1;
  return `![Diagrama ${mermaidCounter}](mermaid/diagram-${mermaidCounter}.png)`;
});

// ---------------------------------------------------------------------------
// 4) Converter wikilinks Obsidian
// ---------------------------------------------------------------------------
console.log('[5/5] Convertendo wikilinks Obsidian...');

// Tipo A: [[#APÊNDICE X — TÍTULO|alias]]  ou  [[#FASE X — TÍTULO|alias]]
// Tipo B: [[#APÊNDICE X — TÍTULO]]        sem alias
// Tipo C: [[apendice-x|alias]]            aponta arquivo standalone — descartar link, manter alias
// Tipo D: [[apendice-x]]                  idem sem alias — manter texto
let countA = 0;
let countB = 0;
let countC = 0;

// Tipo A com alias
md = md.replace(/\[\[#([^\]|]+)\|([^\]]+)\]\]/g, (full, target, alias) => {
  countA += 1;
  const slug = slugify(target);
  return `[${alias.trim()}](#${slug})`;
});

// Tipo B sem alias (heading-internal)
md = md.replace(/\[\[#([^\]|]+)\]\]/g, (full, target) => {
  countB += 1;
  const slug = slugify(target);
  const label = target.trim();
  return `[${label}](#${slug})`;
});

// Tipo C / D (não começam com # — apontam para arquivos standalone)
// Converte para texto plano usando o alias se houver, senão o target
md = md.replace(/\[\[([^\]#|][^\]|]*)\|([^\]]+)\]\]/g, (full, target, alias) => {
  countC += 1;
  return alias.trim();
});
md = md.replace(/\[\[([^\]#|][^\]]*)\]\]/g, (full, target) => {
  countC += 1;
  return target.trim();
});

const totalWikilinks = countA + countB + countC;
console.log(`      Wikilinks tipo A (heading com alias): ${countA}`);
console.log(`      Wikilinks tipo B (heading sem alias): ${countB}`);
console.log(`      Wikilinks tipo C/D (arquivo): ${countC}`);
console.log(`      Total convertidos: ${totalWikilinks}`);

// ---------------------------------------------------------------------------
// 5) Escrever arquivo preprocessado
// ---------------------------------------------------------------------------
fs.writeFileSync(OUTPUT, md, 'utf8');
const outLines = md.split('\n').length;
console.log('Output:', OUTPUT, '(', outLines, 'linhas)');

// Stats em JSON para o build_epub.sh consumir
const stats = {
  blocks: blocks.length,
  generated: generated.length,
  failed: failed.length,
  failedDetails: failed,
  wikilinksA: countA,
  wikilinksB: countB,
  wikilinksC: countC,
  wikilinksTotal: totalWikilinks,
  outputLines: outLines,
  originalLines,
};
fs.writeFileSync(
  path.join(BUILD_DIR, 'preprocess_stats.json'),
  JSON.stringify(stats, null, 2),
  'utf8'
);

console.log('\n=== STATS ===');
console.log(JSON.stringify(stats, null, 2));

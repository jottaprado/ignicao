#!/usr/bin/env node
/**
 * Pré-processa os 6 volumes canônicos em `volumes/` (e gera também o Omnibus)
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
 *  4) Escreve `build/vol-1-preprocessado.md` ... `build/vol-6-preprocessado.md`
 *     e `build/manuscrito_preprocessado.md` (Omnibus).
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const VOLUMES_DIR = path.join(ROOT, 'volumes');
const BUILD_DIR = path.join(ROOT, 'build');
const MERMAID_DIR = path.join(BUILD_DIR, 'mermaid');

if (!fs.existsSync(MERMAID_DIR)) {
  fs.mkdirSync(MERMAID_DIR, { recursive: true });
}

const VOLUMES = [
  {
    num: 1,
    slug: 'IGNICAO-Vol-1-Ideacao',
    title: 'IGNIÇÃO — Volume 1: Ideação',
    subtitle: 'Do Pré-Zero à Tese de Negócio (Fases 0 a 2B)',
    cover: 'build/cover-vol-1.png',
  },
  {
    num: 2,
    slug: 'IGNICAO-Vol-2-Validacao',
    title: 'IGNIÇÃO — Volume 2: Validação',
    subtitle: 'Da Descoberta do Problema ao Protótipo Testado (Fases 3 a 9)',
    cover: 'build/cover-vol-2.png',
  },
  {
    num: 3,
    slug: 'IGNICAO-Vol-3-Tracao',
    title: 'IGNIÇÃO — Volume 3: Tração',
    subtitle: 'Do MVP ao Product-Market Fit (Fases 10 a 12)',
    cover: 'build/cover-vol-3.png',
  },
  {
    num: 4,
    slug: 'IGNICAO-Vol-4-Escala',
    title: 'IGNIÇÃO — Volume 4: Escala',
    subtitle: 'Da Estruturação ao Hipercrescimento (Fases 13 e 14)',
    cover: 'build/cover-vol-4.png',
  },
  {
    num: 5,
    slug: 'IGNICAO-Vol-5-Maturidade',
    title: 'IGNIÇÃO — Volume 5: Maturidade',
    subtitle: 'Ciclo Longo, Governança, Crise e Exit (Fases 15 e 16)',
    cover: 'build/cover-vol-5.png',
  },
  {
    num: 6,
    slug: 'IGNICAO-Vol-6-Referencia',
    title: 'IGNIÇÃO — Volume 6: Referência',
    subtitle: 'Ferramentário, Canvases, Templates, Verticais Setoriais e Glossário',
    cover: 'build/cover-vol-6.png',
  },
];

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
      execFileSync(c, ['--version'], { stdio: 'pipe', shell: IS_WIN });
      return c;
    } catch (_) {
      /* try next */
    }
  }
  return null;
}

const MMDC = findMmdc();

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
      execFileSync(
        MMDC,
        ['-i', `"${mmdPath}"`, '-o', `"${pngPath}"`, '-s', '2', '-b', 'white', '-p', `"${puppeteerConfig}"`],
        { stdio: 'pipe', timeout: 120000, shell: IS_WIN }
      );
      console.log(`      Novo diagrama renderizado: ${pngName}`);
      mmdCache.set(norm, pngName);
      return pngName;
    } catch (err) {
      console.warn(`      [WARN] Falha ao renderizar ${pngName}: ${err.message.split('\n')[0]}`);
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// 2. Função de pré-processamento de Markdown (Mermaid + Callouts + Wikilinks)
// ---------------------------------------------------------------------------
const mermaidRegex = /```mermaid\s*\r?\n([\s\S]*?)\r?\n```/g;

function preprocessMarkdown(md, { isOmnibus = false } = {}) {
  let localCounter = 0;
  let out = md.replace(mermaidRegex, (_, body) => {
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
        return `${barePrefix} **${label} — ${title}**\n${barePrefix}`;
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
  out = out.replace(/\[\[IGNICAO-Vol-[0-9]-[^#\]|]+#([^\]|\\]+)(?:\\\||\|)([^\]]+)\]\]/g, (_, target, alias) => {
    if (isOmnibus) {
      const slug = slugify(target);
      return `[${alias.trim()}](#${slug})`;
    }
    return `*${alias.trim()}*`;
  });

  // 4) Wikilinks entre volumes sem alias: [[IGNICAO-Vol-X-Nome#ALVO]]
  out = out.replace(/\[\[IGNICAO-Vol-([0-9])-[^#\]|]+#([^\]]+)\]\]/g, (_, volNum, target) => {
    if (isOmnibus) {
      const slug = slugify(target);
      return `[${target.trim()}](#${slug})`;
    }
    return `*${target.trim()} (Vol. ${volNum})*`;
  });

  // 5) Outros wikilinks remanescentes [[alvo|alias]] ou [[alvo]]
  out = out.replace(/\[\[([^\]#|][^\]|\\]*)(?:\\\||\|)([^\]]+)\]\]/g, (_, _target, alias) => alias.trim());
  out = out.replace(/\[\[([^\]#|][^\]]*)\]\]/g, (_, target) => target.trim());

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
// 3. Processar cada um dos 6 volumes e montar o Omnibus
// ---------------------------------------------------------------------------
console.log('[2/4] Pré-processando os 6 volumes...');
const omnibusParts = [];

for (const vol of VOLUMES) {
  const srcPath = path.join(VOLUMES_DIR, `${vol.slug}.md`);
  const rawMd = fs.readFileSync(srcPath, 'utf8');

  const preprocessedVol = preprocessMarkdown(rawMd, { isOmnibus: false });
  const destVolPath = path.join(BUILD_DIR, `vol-${vol.num}-preprocessado.md`);
  fs.writeFileSync(destVolPath, preprocessedVol, 'utf8');
  console.log(`      Vol. ${vol.num} -> build/vol-${vol.num}-preprocessado.md`);

  // Para o Omnibus, removemos o YAML frontmatter individual dos volumes 2..6
  if (vol.num === 1) {
    omnibusParts.push(rawMd);
  } else {
    const withoutFrontmatter = rawMd.replace(/^---[\s\S]*?\n---\r?\n/, '');
    omnibusParts.push(withoutFrontmatter);
  }
}

console.log('[3/4] Gerando build/manuscrito_preprocessado.md (Omnibus)...');
const rawOmnibus = omnibusParts.join('\n\n---\n\n');
const preprocessedOmnibus = preprocessMarkdown(rawOmnibus, { isOmnibus: true });
const omnibusOutPath = path.join(BUILD_DIR, 'manuscrito_preprocessado.md');
fs.writeFileSync(omnibusOutPath, preprocessedOmnibus, 'utf8');
console.log('[4/4] Concluído! Todos os arquivos pré-processados estão prontos em build/.');

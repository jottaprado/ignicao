#!/usr/bin/env node
/**
 * Compila os 10 EPUBs individuais + o EPUB Omnibus (build/IGNICAO.epub) via Pandoc.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const BUILD_DIR = path.join(ROOT, 'build');

const PANDOC_CANDIDATES = [
  'pandoc',
  'pandoc.exe',
  path.join(process.env.LOCALAPPDATA || '', 'Pandoc/pandoc.exe'),
  'C:\\Program Files\\Pandoc\\pandoc.exe',
  path.join(
    process.env.LOCALAPPDATA || '',
    'Microsoft/WinGet/Packages/JohnMacFarlane.Pandoc_Microsoft.Winget.Source_8wekyb3d8bbwe/pandoc-3.9.0.2/pandoc.exe'
  ),
];

function findPandoc() {
  for (const c of PANDOC_CANDIDATES) {
    try {
      execFileSync(c, ['--version'], { stdio: 'pipe' });
      return c;
    } catch (_) {
      /* next */
    }
  }
  throw new Error('Pandoc não encontrado.');
}

const PANDOC = findPandoc();

const manifest = JSON.parse(
  fs.readFileSync(path.join(BUILD_DIR, 'volumes_manifest.json'), 'utf8')
);

// Remover EPUBs individuais antigos que foram renomeados
const expectedEpubs = new Set(
  manifest.map((m) => `${path.basename(m.file, '.md')}.epub`).concat(['IGNICAO.epub'])
);
for (const f of fs.readdirSync(BUILD_DIR)) {
  if (f.endsWith('.epub') && !expectedEpubs.has(f)) {
    fs.unlinkSync(path.join(BUILD_DIR, f));
    console.log(`[CLEAN] Removido EPUB antigo: build/${f}`);
  }
}

const TARGETS = manifest
  .map((m) => {
    const slug = path.basename(m.file, '.md');
    return {
      input: `build/vol-${m.num}-preprocessado.md`,
      output: `build/${slug}.epub`,
      title: m.title,
      subtitle: m.subtitle,
      cover: `build/cover-vol-${m.num}.png`,
    };
  })
  .concat([
    {
      input: 'build/manuscrito_preprocessado.md',
      output: 'build/IGNICAO.epub',
      title: 'IGNIÇÃO',
      subtitle: 'O manual operacional do empreendedor brasileiro (Edição Completa: 11 Volumes)',
      cover: 'build/cover.png',
    },
  ]);

for (const t of TARGETS) {
  const inFile = path.join(ROOT, t.input);
  const outFile = path.join(ROOT, t.output);
  const coverFile = fs.existsSync(path.join(ROOT, t.cover)) ? t.cover : 'build/cover.png';

  const args = [
    inFile,
    '-o',
    outFile,
    '--from=markdown-tex_math_dollars-tex_math_single_backslash-yaml_metadata_block',
    '--toc',
    '--toc-depth=2',
    '--metadata',
    `title=${t.title}`,
    '--metadata',
    `subtitle=${t.subtitle}`,
    '--metadata',
    'author=João Prado',
    '--metadata',
    'language=pt-BR',
    '--metadata',
    'date=2026',
    '--resource-path=build;build/mermaid;.',
    `--epub-cover-image=${coverFile}`,
    '--split-level=2',
  ];

  execFileSync(PANDOC, args, { cwd: ROOT, stdio: 'pipe' });
  const sizeMB = (fs.statSync(outFile).size / (1024 * 1024)).toFixed(2);
  console.log(`[EPUB] ${t.output} gerado (${sizeMB} MB)`);
}

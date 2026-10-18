#!/usr/bin/env node
/**
 * Compila os 6 EPUBs individuais + o EPUB Omnibus (build/IGNICAO.epub) via Pandoc.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const BUILD_DIR = path.join(ROOT, 'build');

const PANDOC_CANDIDATES = [
  'pandoc',
  'pandoc.exe',
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

const TARGETS = [
  {
    input: 'build/vol-1-preprocessado.md',
    output: 'build/IGNICAO-Vol-1-Ideacao.epub',
    title: 'IGNIÇÃO — Volume 1: Ideação',
    subtitle: 'Do Pré-Zero à Tese de Negócio (Fases 0 a 2B)',
    cover: 'build/cover-vol-1.png',
  },
  {
    input: 'build/vol-2-preprocessado.md',
    output: 'build/IGNICAO-Vol-2-Validacao.epub',
    title: 'IGNIÇÃO — Volume 2: Validação',
    subtitle: 'Da Descoberta do Problema ao Protótipo Testado (Fases 3 a 9)',
    cover: 'build/cover-vol-2.png',
  },
  {
    input: 'build/vol-3-preprocessado.md',
    output: 'build/IGNICAO-Vol-3-Tracao.epub',
    title: 'IGNIÇÃO — Volume 3: Tração',
    subtitle: 'Do MVP ao Product-Market Fit (Fases 10 a 12)',
    cover: 'build/cover-vol-3.png',
  },
  {
    input: 'build/vol-4-preprocessado.md',
    output: 'build/IGNICAO-Vol-4-Escala.epub',
    title: 'IGNIÇÃO — Volume 4: Escala',
    subtitle: 'Da Estruturação ao Hipercrescimento (Fases 13 e 14)',
    cover: 'build/cover-vol-4.png',
  },
  {
    input: 'build/vol-5-preprocessado.md',
    output: 'build/IGNICAO-Vol-5-Maturidade.epub',
    title: 'IGNIÇÃO — Volume 5: Maturidade',
    subtitle: 'Ciclo Longo, Governança, Crise e Exit (Fases 15 e 16)',
    cover: 'build/cover-vol-5.png',
  },
  {
    input: 'build/vol-6-preprocessado.md',
    output: 'build/IGNICAO-Vol-6-Referencia.epub',
    title: 'IGNIÇÃO — Volume 6: Referência',
    subtitle: 'Ferramentário, Canvases, Templates, Verticais Setoriais e Glossário',
    cover: 'build/cover-vol-6.png',
  },
  {
    input: 'build/manuscrito_preprocessado.md',
    output: 'build/IGNICAO.epub',
    title: 'IGNIÇÃO',
    subtitle: 'O manual operacional do empreendedor brasileiro (Edição Completa)',
    cover: 'build/cover.png',
  },
];

for (const t of TARGETS) {
  const inFile = path.join(ROOT, t.input);
  const outFile = path.join(ROOT, t.output);
  const coverFile = fs.existsSync(path.join(ROOT, t.cover)) ? t.cover : 'build/cover.png';

  const args = [
    inFile,
    '-o',
    outFile,
    '--from=markdown-tex_math_dollars-tex_math_single_backslash',
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

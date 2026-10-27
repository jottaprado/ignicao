#!/usr/bin/env node
/**
 * Constrói os 10 Volumes 100% Autocontidos da coleção IGNIÇÃO (v4.0) em `volumes/`:
 *
 *  1) Extrai as 175 seções canônicas da versão base (`738db95`).
 *  2) Renumera as Fases sequencialmente de `FASE 0` a `FASE 20` (21 Fases):
 *     - A antiga `Fase 2B` torna-se `FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO`.
 *     - As antigas `Fase 3` a `Fase 12` tornam-se `FASE 4` a `FASE 13`.
 *     - As subfases da antiga `Fase 14` (`14D`, `14C`, `14A`, `14B`) e a antiga `Fase 13`
 *       tornam-se as Fases principais dos Volumes 5, 6, 7 e 8 (`FASE 14` a `FASE 18`).
 *     - As antigas `Fase 15` e `Fase 16` tornam-se `FASE 19` e `FASE 20` (no Volume 9).
 *  3) Incorpora 100% dos 164 Frameworks (`BG.1.1` a `BG.19.4`), 20 Canvases (`CZ.1` a `CZ.20`),
 *     39 Templates e Casos Preenchidos (`A.1` a `A.39`), 19 tabelas de Métricas por Fase (`C`)
 *     e 18 listas de Leituras Recomendadas (`E`) diretamente DENTRO de cada Fase e Capítulo.
 *  4) Transforma os antigos `APÊNDICE XX — TÍTULO` em `CAPÍTULO N — TÍTULO` orgânicos dentro
 *     de cada volume, eliminando siglas aleatórias de letras nos títulos.
 *  5) Resolve globalmente todos os wikilinks e referências textuais para a nova arquitetura.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { DOMAIN_INTROS } = require('./domain_intros');
const {
  NOTA_DO_AUTOR_V5,
  APRESENTACAO_ARQUETIPOS_MD,
  transformFrameworkToOficina,
  transformCanvasToOficina,
  applyNarrativeRefactor,
} = require('./narrative_bible');
const { NARRATIVE_VOL1 } = require('./narrative_vol1_refactor');
const { NARRATIVE_VOL2_VOL4 } = fs.existsSync(path.join(__dirname, 'narrative_vol2_vol4_refactor.js'))
  ? require('./narrative_vol2_vol4_refactor')
  : { NARRATIVE_VOL2_VOL4: {} };
const { NARRATIVE_VOL5_VOL6 } = fs.existsSync(path.join(__dirname, 'narrative_vol5_vol6_refactor.js'))
  ? require('./narrative_vol5_vol6_refactor')
  : { NARRATIVE_VOL5_VOL6: {} };
const { NARRATIVE_VOL7_VOL9 } = fs.existsSync(path.join(__dirname, 'narrative_vol7_vol9_refactor.js'))
  ? require('./narrative_vol7_vol9_refactor')
  : { NARRATIVE_VOL7_VOL9: {} };
const { NARRATIVE_VOL10 } = fs.existsSync(path.join(__dirname, 'narrative_vol10_refactor.js'))
  ? require('./narrative_vol10_refactor')
  : { NARRATIVE_VOL10: {} };

const ALL_NARRATIVE_SPECS = {
  ...NARRATIVE_VOL1,
  ...NARRATIVE_VOL2_VOL4,
  ...NARRATIVE_VOL5_VOL6,
  ...NARRATIVE_VOL7_VOL9,
  ...NARRATIVE_VOL10,
};

const ROOT = path.resolve(__dirname, '..');
const VOLUMES_DIR = path.join(ROOT, 'volumes');
const BUILD_DIR = path.join(ROOT, 'build');

function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[—–]/g, '-')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// ---------------------------------------------------------------------------
// 1. Carregar as 175 seções canônicas da base (build/base_sections_v5.json)
// ---------------------------------------------------------------------------
const rawSections = new Map(); // key -> { key, heading, body }
const notaDoAutorBody = NOTA_DO_AUTOR_V5;

const baseSectionsData = JSON.parse(
  fs.readFileSync(path.join(BUILD_DIR, 'base_sections_v5.json'), 'utf8')
);
for (const [k, v] of Object.entries(baseSectionsData)) {
  rawSections.set(k, { key: v.key, heading: v.heading, body: v.body });
}

console.log(`[1/6] Seções base carregadas de base_sections_v5.json: ${rawSections.size} (esperado: 175)`);
if (rawSections.size !== 175) {
  throw new Error(`Esperadas 175 seções, mas foram extraídas ${rawSections.size}`);
}

// Registrar os capítulos novos do Volume 10 + Comércio Exterior (Vol. 5), Franchising (Vol. 6), Service-to-Product (Vol. 3), Spin-offs e Cash Cow/Family Office (Vol. 9) e a fusão BA+DH (Vol. 9)
const { VOL10_ECON_HUBS } = require('./vol10_econ_hubs');
const { VOL10_VERTICALS_PART1 } = require('./vol10_verticals_part1');
const { VOL10_VERTICALS_PART2 } = require('./vol10_verticals_part2');
const { VOL10_VERTICALS_PART3 } = require('./vol10_verticals_part3');
const { VOL10_VERTICALS_PART4 } = require('./vol10_verticals_part4');
const { VOL10_VERTICALS_PART5 } = require('./vol10_verticals_part5');
const { VOL11_PART1 } = require('./vol11_part1');
const { VOL11_PART2 } = require('./vol11_part2');
const { VOL11_PART3 } = require('./vol11_part3');
const { VOL11_PART4 } = require('./vol11_part4');
const { VOL11_PART5 } = require('./vol11_part5');
const { VOL5_VOL6_VOL9_EXTRAS } = require('./vol5_vol6_vol9_extras');
const { VOL3_VOL9_LIFECYCLE_EXTRAS } = require('./vol3_vol9_lifecycle_extras');
const {
  FAST_TRACKS_MD,
  EXTRA_INDEX_REMISSIVO_SECTION,
  FRAMEWORKS_BG_CELL_FIXES,
  enrichRawGlossaryBody,
  enrichRawAbbrevBody,
  enrichDataCompilacaoBody,
  enrichBibliografiaBody,
  enrichIndiceFrameworksBody,
  enrichIndiceRemissivoBody,
} = require('./vol10_reference_additions');
const {
  enrichGovtechBody,
  enrichPitchBody,
  enrichAcceleratorsBody,
} = require('./govtech_banca_additions');
const { applyTwinChapterMerges } = require('./chapter_mergers');
const {
  RENAMED_HEADINGS_LIST,
  applyReviewFixesToRawAndSpecs,
  applyPreIndexVolumeFixes,
  applyVolumeReviewFixes,
} = require('./apply_review_fixes');

const origHeadingBA = rawSections.get('BA').heading;
const origHeadingDH = rawSections.get('DH').heading;

const vol10NewModules = {
  ...VOL10_ECON_HUBS,
  ...VOL10_VERTICALS_PART1,
  ...VOL10_VERTICALS_PART2,
  ...VOL10_VERTICALS_PART3,
  ...VOL10_VERTICALS_PART4,
  ...VOL10_VERTICALS_PART5,
  ...VOL11_PART1,
  ...VOL11_PART2,
  ...VOL11_PART3,
  ...VOL11_PART4,
  ...VOL11_PART5,
  NEW_COMEX: VOL5_VOL6_VOL9_EXTRAS.NEW_COMEX,
  NEW_FRANCHISING: VOL5_VOL6_VOL9_EXTRAS.NEW_FRANCHISING,
  ...VOL3_VOL9_LIFECYCLE_EXTRAS,
};
for (const [k, v] of Object.entries(vol10NewModules)) {
  rawSections.set(k, {
    key: k,
    heading: v.heading.trim(),
    body: v.body.trim(),
  });
}
rawSections.set('BA', {
  key: 'BA',
  heading: VOL5_VOL6_VOL9_EXTRAS.MERGED_BA.heading.trim(),
  body: VOL5_VOL6_VOL9_EXTRAS.MERGED_BA.body.trim(),
});
if (rawSections.has('DK')) {
  const dk = rawSections.get('DK');
  dk.body = enrichGovtechBody(dk.body);
}
if (rawSections.has('EX')) {
  const ex = rawSections.get('EX');
  ex.body = enrichPitchBody(ex.body);
}
if (rawSections.has('AZ')) {
  const az = rawSections.get('AZ');
  az.body = enrichAcceleratorsBody(az.body);
}
const secondaryToPrimaryMap = applyTwinChapterMerges(rawSections);
applyReviewFixesToRawAndSpecs(rawSections, ALL_NARRATIVE_SPECS);
console.log(`      Novos capítulos de Economia da Inovação, Hubs, Verticais, Comex, Franchising e Ciclo Empreendedor carregados: ${Object.keys(vol10NewModules).length} (esperado: 40) | Fusões de capítulos gêmeos: ${secondaryToPrimaryMap.size}`);

// ---------------------------------------------------------------------------
// 2. Extrair todos os itens de BG (164), CZ (20), A (39), C (19) e E (18)
// ---------------------------------------------------------------------------
function demoteHeadings(md, delta) {
  const lines = md.split('\n');
  let inFence = false;
  return lines
    .map((line) => {
      if (line.trim().startsWith('```')) inFence = !inFence;
      if (!inFence && /^#{2,6}\s/.test(line)) {
        return line.replace(/^(#{2,6})(\s)/, (_, hashes, sp) => {
          const nextLen = Math.min(6, hashes.length + delta);
          return '#'.repeat(nextLen) + sp;
        });
      }
      return line;
    })
    .join('\n');
}

function promoteHeadings(md, delta) {
  const lines = md.split('\n');
  let inFence = false;
  return lines
    .map((line) => {
      if (line.trim().startsWith('```')) inFence = !inFence;
      if (!inFence && /^#{3,6}\s/.test(line)) {
        return line.replace(/^(#{3,6})(\s)/, (_, hashes, sp) => {
          const nextLen = Math.max(3, hashes.length - delta);
          return '#'.repeat(nextLen) + sp;
        });
      }
      return line;
    })
    .join('\n');
}

// 2.1 BG (164 itens: BG.1.1 .. BG.19.4)
const bgRaw = rawSections.get('BG').body;
const bgItems = new Map(); // 'BG.1.1' -> { code, title, heading, content }
const bgRegex = /^## (BG\.\d+\.\d+) — ([^\n]+)\n([\s\S]*?)(?=\n## BG\.|\n# |(?![\s\S]))/gm;
for (const m of bgRaw.matchAll(bgRegex)) {
  const code = m[1].trim();
  const title = m[2].trim();
  const inner = transformFrameworkToOficina(
    demoteHeadings(m[3].trim().replace(/(?:\n+---)+\s*$/, ''), 2)
  );
  const heading = `Framework: ${title}`;
  bgItems.set(code, {
    code,
    title,
    heading,
    content: `#### ${heading}\n\n${inner}`,
  });
}
console.log(`      Frameworks BG extraídos: ${bgItems.size} (esperado: 164)`);

// 2.2 CZ (20 itens: CZ.1 .. CZ.20)
const czRaw = rawSections.get('CZ').body;
const czItems = new Map(); // 'CZ.1' -> { code, title, heading, content }
const czRegex = /^### (CZ\.\d+) — ([^\n]+)\n([\s\S]*?)(?=\n### CZ\.|(?![\s\S]))/gm;
for (const m of czRaw.matchAll(czRegex)) {
  const code = m[1].trim();
  const title = m[2].trim();
  const inner = transformCanvasToOficina(
    demoteHeadings(m[3].trim().replace(/(?:\n+---)+\s*$/, ''), 1)
  );
  const heading = `Canvas: ${title}`;
  czItems.set(code, {
    code,
    title,
    heading,
    content: `#### ${heading}\n\n${inner}`,
  });
}
console.log(`      Canvases CZ extraídos:   ${czItems.size} (esperado: 20)`);

// 2.3 A (39 itens: A.1 .. A.39)
const aRaw = rawSections.get('A').body;
const aItems = new Map(); // 'A.1' -> { code, title, heading, content }
const aRegex =
  /^### (A\.\d+)\s+([^\n]+)\n([\s\S]*?)(?=\n### A\.|\n## Templates preenchidos|(?![\s\S]))/gm;
for (const m of aRaw.matchAll(aRegex)) {
  const code = m[1].trim();
  const rawTitle = m[2]
    .trim()
    .replace(/^[-—–]\s*/, '')
    .replace(/\s*\(Fase[^)]*\)/gi, '')
    .replace(/\s*\(Fases[^)]*\)/gi, '')
    .replace(/\s*\(Apêndice[^)]*\)/gi, '')
    .replace(/\s*·\s*Fases?\s+\d+[^)]*/gi, '')
    .replace(/^Template\s+de\s+/i, '')
    .trim();
  const inner = demoteHeadings(m[3].trim().replace(/(?:\n+---)+\s*$/, ''), 1);
  const heading = `Template: ${rawTitle}`;
  aItems.set(code, {
    code,
    title: rawTitle,
    heading,
    content: `#### ${heading}\n\n${inner}`,
  });
}
console.log(`      Templates A extraídos:   ${aItems.size} (esperado: 39)`);

// 2.4 C (Catálogo de Métricas por Fase)
const cRaw = rawSections.get('C').body;
const cItems = new Map(); // 'Fase 0' | 'Benchmarks' -> content
const cRegex = /^### ([^\n]+)\n([\s\S]*?)(?=\n### |(?![\s\S]))/gm;
for (const m of cRaw.matchAll(cRegex)) {
  const subTitle = m[1].trim();
  const subBody = demoteHeadings(m[2].trim().replace(/(?:\n+---)+\s*$/, ''), 1);
  const fm = subTitle.match(/^(Fase \d+B?)\b/i);
  if (fm) {
    cItems.set(fm[1].toUpperCase().replace(' ', '_'), subBody);
  } else if (subTitle.includes('Índice de benchmarks')) {
    cItems.set('BENCHMARKS', subBody);
  }
}

// 2.5 E (Recursos e Leituras Recomendadas)
const eRaw = rawSections.get('E').body;
const eItems = new Map();
const eRegex = /^### ([^\n]+)\n([\s\S]*?)(?=\n### |(?![\s\S]))/gm;
for (const m of eRaw.matchAll(eRegex)) {
  const subTitle = m[1].trim();
  const subBody = demoteHeadings(m[2].trim().replace(/(?:\n+---)+\s*$/, ''), 1);
  eItems.set(subTitle, subBody);
}

function getEReadingBySubstring(substr) {
  for (const [k, v] of eItems.entries()) {
    if (k.includes(substr)) return { title: k, body: v };
  }
  return null;
}

// ---------------------------------------------------------------------------
// 3. Desmembrar FASE_14 nas 4 Fases de Escala (FASE_14D, FASE_14C, FASE_14A, FASE_14B)
// ---------------------------------------------------------------------------
const f14Lines = rawSections.get('FASE_14').body.split('\n');
const idx14A = f14Lines.findIndex((l) => l.startsWith('### 14A —'));
const idxTransAB = f14Lines.findIndex((l) => l.startsWith('### Transição, do Time à Operação'));
const idx14B = f14Lines.findIndex((l) => l.startsWith('### 14B —'));
const idxTransBC = f14Lines.findIndex((l) => l.startsWith('### Transição, da Operação ao Crescimento'));
const idx14C = f14Lines.findIndex((l) => l.startsWith('### 14C —'));
const idxPasso3 = f14Lines.findIndex((l) => l.startsWith('##### Passo 3, defina e monitore'));
const idx14D = f14Lines.findIndex((l) => l.startsWith('### 14D —'));
const idxPasso5 = f14Lines.findIndex((l) => l.startsWith('##### Passo 5, planeje expansão'));
const idxPasso6 = f14Lines.findIndex((l) => l.startsWith('##### Passo 6, monitore eficiência'));
const idxCriterios = f14Lines.findIndex((l) => l.startsWith('#### Critérios observáveis de sucesso'));
const idxSintese14 = f14Lines.findIndex((l) => l.startsWith('### SÍNTESE DA FASE 14'));

// 3.1 FASE 14 (Vol. 5): Capital para Escala, Rodadas e Eficiência Financeira (antiga 14D)
const f14dCore = promoteHeadings(
  [
    ...f14Lines.slice(idxPasso3, idx14D),
    ...f14Lines.slice(idx14D + 1, idxPasso5),
    ...f14Lines.slice(idxPasso6, idxCriterios),
  ].join('\n'),
  1
);

const fase14dBody = `## FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA

> [!abstract] Resumo operacional — Fase 14
> - **Entregável principal:** Plano de capital e eficiência financeira para 18–24 meses (painel das 9 métricas financeiras de scaleup, *data room* auditável, modelo financeiro *bottom-up* e estratégia de rodada Série A/B ou dívida estruturada).
> - **Sinais de saída:** NRR ≥ 110%, *Burn Multiple* ≤ 1,5x, *Rule of 40* ≥ 40, *CAC Payback* < 12 meses e *runway* ≥ 18 meses.
> - **Três armadilhas mais comuns:** (1) Iniciar captação com menos de 6 meses de caixa (modo sobrevivência); (2) Ignorar cláusulas predatórias de *liquidation preference* e *anti-dilution* por olhar apenas o *valuation* de manchete; (3) *Over-hiring* imediatamente após o cheque cair na conta sem eficiência de unit economics comprovada.

### O que esta fase cobre

Esta fase trata da arquitetura de capital, eficiência financeira e execução de rodadas de investimento (Série A em diante) quando a empresa já comprovou *Product-Market Fit* e precisa financiar sua máquina de crescimento sem perder o controle do *cap table* ou quebrar por queima ineficiente de caixa.

### COMO

${f14dCore}

### PERGUNTAS A RESPONDER

1. Qual é o uso exato do capital nos próximos 18 a 24 meses e quais marcos operacionais (*milestones*) ele destrava?
2. As nove métricas financeiras de escala (ARR, Margem Bruta, NRR, GRR, *Burn Multiple*, *Magic Number*, *CAC Payback*, *Rule of 40* e *Runway*) estão em faixa saudável?
3. Nosso *runway* atual permite negociar uma rodada de 5 a 7 meses em posição de força (idealmente ≥ 9 a 12 meses de caixa)?

### SAÍDA DESTA FASE

- [ ] Painel mensal das 9 métricas de saúde financeira implementado e auditado.
- [ ] *Data room* completo, *pitch deck* estruturado e modelo financeiro de 36 meses prontos antes do primeiro café com investidores.
- [ ] Termos de captação (*valuation*, *option pool*, *liquidation preference* 1x *non-participating*, *anti-dilution broad-based weighted average*) revisados por advogado especialista em VC.

### FERRAMENTAS DESTA FASE

Todos os frameworks de finanças, *unit economics* e *valuation*, bem como os canvases de narrativa/waterfall e os templates de rodada (*Data Room*, *Term Sheet Anotado*, *Plano de Rodada*, *Pitch Deck SCQA*, *Investor Update* e *Financiamento Não-Diluitivo*), estão detalhados integralmente nas subseções a seguir para aplicação direta nesta fase.

### SÍNTESE DA FASE 14

A **[[#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14]]** transforma o capital em instrumento de alavancagem deliberada, e não em troféu de imprensa. Com a saúde financeira monitorada por coorte e o caixa capitalizado com termos limpos, os capítulos a seguir deste **Volume 5** aprofundam contabilidade, Reforma Tributária, FP&A, *valuation*, Venture Capital, dívida e instrumentos conversíveis.`;

rawSections.set('FASE_14D', {
  key: 'FASE_14D',
  heading: 'FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA',
  body: fase14dBody,
});

// 3.2 FASE 15 (Vol. 6): Máquina de Crescimento e Expansão em Escala (antiga 14C)
const f14cCore = promoteHeadings(
  [
    ...f14Lines.slice(idx14C + 2, idxPasso3),
    ...f14Lines.slice(idxPasso5, idxPasso6),
    ...f14Lines.slice(idxCriterios, idxSintese14),
  ].join('\n'),
  1
)
  .replace(/^### COMO \(Crescimento e Capital\)/m, '### COMO')
  .replace(/^### PERGUNTAS A RESPONDER \(Crescimento e Capital\)/m, '### PERGUNTAS A RESPONDER')
  .replace(/^### DEFINIÇÃO DE SUCESSO \(Crescimento e Capital\)/m, '### SAÍDA DESTA FASE')
  .replace(/^### ARMADILHAS \(Crescimento e Capital\)/m, '### ARMADILHAS')
  .replace(/^### FERRAMENTAS DESTA SUBFASE \(Crescimento e Capital\)/m, '### FERRAMENTAS DESTA FASE');

const fase14cBody = `## FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA

${f14cCore}

### SÍNTESE DA FASE 15

Na **[[#FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA|Fase 15]]**, você transformou o esforço comercial concentrado no fundador em um sistema previsível de aquisição, retenção e expansão em dois eixos (profundidade no core antes da amplitude em novos mercados). Na sequência imediata deste volume (**[[#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16]]**), você construirá a liderança executiva e a cultura organizacional capazes de sustentar essa máquina.`;

rawSections.set('FASE_14C', {
  key: 'FASE_14C',
  heading: 'FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA',
  body: fase14cBody,
});

// 3.3 FASE 16 (Vol. 6): Time, Liderança Executiva e Cultura em Escala (antiga 14A)
const f14aIntro = f14Lines
  .slice(1, idx14A)
  .join('\n')
  .replace(/^### (?:14A\s*[—–-]\s*)?TIME E LIDERANÇA EM ESCALA\n+/gm, '')
  .replace(
    /> \[!abstract\] Mapa interno da Fase 14[\s\S]*?precisam buscar ajuda nas outras tres\./m,
    `> [!abstract] As quatro frentes paralelas da Escala (Fases 14 a 17)\n> A etapa de escala opera em quatro frentes interdependentes distribuídas nos Volumes 5 a 7:\n> - **[[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 — Capital para Escala (Vol. 5)]]**: eficiência financeira, *unit economics* em escala e rodadas Série A em diante.\n> - **[[#FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA|Fase 15 — Máquina de Crescimento (Vol. 6)]]**: transformar a tração pós-PMF em aquisição, retenção e expansão previsíveis e compostas.\n> - **[[#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 — Time e Liderança Executiva (Vol. 6)]]**: transição do primeiro funcionário à primeira camada de gestão, C-level, avaliação de performance e cultura.\n> - **[[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 — Operações e Processos (Vol. 7)]]**: passar de uma empresa que depende do fundador no dia a dia para um sistema operacional autônomo.\n>\n> As frentes não são sequenciais — são paralelas. Em geral, fundadores fortes em uma das quatro precisam buscar liderança complementar nas outras três.`
  );
const f14aCore = promoteHeadings(f14Lines.slice(idx14A + 2, idxTransAB).join('\n'), 1)
  .replace(/^### (?:14A\s*[—–-]\s*)?TIME E LIDERANÇA EM ESCALA\n+/gm, '')
  .replace(/^### COMO \(Time e Liderança\)/m, '### COMO')
  .replace(/^### PERGUNTAS A RESPONDER \(Time e Liderança\)/m, '### PERGUNTAS A RESPONDER')
  .replace(/^### DEFINIÇÃO DE SUCESSO \(Time e Liderança\)/m, '### SAÍDA DESTA FASE')
  .replace(/^### ARMADILHAS \(Time e Liderança\)/m, '### ARMADILHAS')
  .replace(/^### FERRAMENTAS DESTA SUBFASE \(Time e Liderança\)/m, '### FERRAMENTAS DESTA FASE');
const f14aClosing = f14Lines
  .slice(idxSintese14)
  .join('\n')
  .replace('### SÍNTESE DA FASE 14', '### SÍNTESE DA FASE 16')
  .replace(/Diagnóstico organizacional \(Fase 14\)/g, 'Diagnóstico organizacional (Fase 16)');

const fase14aBody = `## FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA

${f14aIntro}

${f14aCore}

${f14aClosing}`;

rawSections.set('FASE_14A', {
  key: 'FASE_14A',
  heading: 'FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA',
  body: fase14aBody,
});

// 3.4 FASE 17 (Vol. 7): Operações, Processos e Gestão em Escala (antiga 14B)
const f14bCore = promoteHeadings(f14Lines.slice(idx14B + 2, idxTransBC).join('\n'), 1)
  .replace(/^### COMO \(Operações\)/m, '### COMO')
  .replace(/^### PERGUNTAS A RESPONDER \(Operações\)/m, '### PERGUNTAS A RESPONDER')
  .replace(/^### DEFINIÇÃO DE SUCESSO \(Operações\)/m, '### SAÍDA DESTA FASE')
  .replace(/^### ARMADILHAS \(Operações\)/m, '### ARMADILHAS')
  .replace(/^### CASO BRASILEIRO, Fase 14 \(Operações\)/m, '### CASO BRASILEIRO, Fase 17 (Operações)')
  .replace(/^### FERRAMENTAS DESTA SUBFASE \(Operações\)/m, '### FERRAMENTAS DESTA FASE');

const fase14bBody = `## FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA

> [!abstract] Resumo operacional — Fase 17
> - **Entregável principal:** Sistema operacional de gestão em escala (cadência em 3 camadas, OKRs trimestrais e anuais, 10 processos críticos documentados, *stack* de dados e cultura de *blameless post-mortems*).
> - **Sinais de saída:** Empresa opera por 30 dias sem intervenção tática diária do fundador; 100% dos times com OKRs claros e *Weekly Business Review* rodando no ritmo; incidentes críticos documentados com causa-raiz e prevenção.
> - **Três armadilhas mais comuns:** (1) Burocratizar antes da hora (processo para proteger incompetência em vez de dar velocidade); (2) Transformar OKRs em lista de tarefas ou atrelá-los mecanicamente a bônus individual; (3) Deixar a comunicação interna quebrar na passagem de 20 para 100 pessoas.

${f14bCore}

### SÍNTESE DA FASE 17

Na **[[#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17]]**, você instalou a arquitetura operacional que impede que o hipercrescimento gere caos. Os 11 capítulos a seguir deste **Volume 7** aprofundam a gestão de produto em múltiplos *squads*, liderança de engenharia, pagamento de dívida técnica, IA na engenharia de software, *AI Ops*, design organizacional e excelência operacional.`;

rawSections.set('FASE_14B', {
  key: 'FASE_14B',
  heading: 'FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA',
  body: fase14bBody,
});

// ---------------------------------------------------------------------------
// 4. Mapeamento das 21 Fases (FASE 0 a FASE 20) e do conteúdo embutido em cada uma
// ---------------------------------------------------------------------------
const PHASE_CONFIG = {
  FASE_0: {
    newNum: 0,
    newHeading: 'FASE 0 — PREPARAÇÃO DO EMPREENDEDOR',
    cKey: 'FASE_0',
    bgs: ['BG.3.4', 'BG.2.11', 'BG.4.1', 'BG.4.7', 'BG.4.8', 'BG.5.3'],
    sharedBgs: [],
    czs: ['CZ.8'],
    sharedCzs: [],
    as: ['A.28'],
    sharedAs: [],
    eSubstrings: ['Leituras fundamentais', 'Ensaios canônicos de Paul Graham', 'Startups em 13 frases'],
  },
  FASE_1: {
    newNum: 1,
    newHeading: 'FASE 1 — ENCONTRAR A IDEIA',
    cKey: 'FASE_1',
    bgs: ['BG.1.8', 'BG.2.4', 'BG.2.5', 'BG.4.3'],
    sharedBgs: [],
    czs: ['CZ.2'],
    sharedCzs: [],
    as: [],
    sharedAs: [],
    eSubstrings: ['Frameworks e ferramentas úteis'],
  },
  FASE_2: {
    newNum: 2,
    newHeading: 'FASE 2 — ARTICULAÇÃO E CAPTURA DA IDEIA',
    cKey: 'FASE_2',
    bgs: ['BG.2.1', 'BG.2.2', 'BG.2.7', 'BG.2.8', 'BG.4.4'],
    sharedBgs: [],
    czs: ['CZ.1'],
    sharedCzs: [],
    as: ['A.1'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_2B: {
    newNum: 3,
    newHeading: 'FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO',
    cKey: 'FASE_2B',
    bgs: ['BG.4.2', 'BG.4.5', 'BG.4.6', 'BG.5.1', 'BG.5.2', 'BG.5.8', 'BG.5.9'],
    sharedBgs: [],
    czs: ['CZ.16'],
    sharedCzs: [],
    as: ['A.7', 'A.8', 'A.9'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_3: {
    newNum: 4,
    newHeading: 'FASE 4 — DESCOBERTA DO PROBLEMA',
    cKey: 'FASE_3',
    bgs: ['BG.6.1', 'BG.6.6', 'BG.6.7', 'BG.9.1', 'BG.9.2', 'BG.9.3'],
    sharedBgs: [],
    czs: ['CZ.6'],
    sharedCzs: [],
    as: ['A.2', 'A.27', 'A.30'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_4: {
    newNum: 5,
    newHeading: 'FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)',
    cKey: 'FASE_4',
    bgs: [
      'BG.6.2',
      'BG.6.3',
      'BG.6.4',
      'BG.6.5',
      'BG.6.8',
      'BG.9.4',
      'BG.9.5',
      'BG.9.6',
      'BG.9.7',
      'BG.11.1',
      'BG.11.8',
    ],
    sharedBgs: [],
    czs: ['CZ.3', 'CZ.7'],
    sharedCzs: [],
    as: ['A.5', 'A.24', 'A.29'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_5: {
    newNum: 6,
    newHeading: 'FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA',
    cKey: 'FASE_5',
    bgs: [
      'BG.1.1',
      'BG.1.2',
      'BG.1.3',
      'BG.1.4',
      'BG.1.5',
      'BG.1.6',
      'BG.1.7',
      'BG.1.9',
      'BG.2.3',
      'BG.12.6',
      'BG.12.7',
      'BG.12.12',
    ],
    sharedBgs: [],
    czs: ['CZ.4', 'CZ.15', 'CZ.18'],
    sharedCzs: [],
    as: ['A.11', 'A.12'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_6: {
    newNum: 7,
    newHeading: 'FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES',
    cKey: 'FASE_6',
    bgs: ['BG.5.4', 'BG.5.6', 'BG.5.7', 'BG.5.10', 'BG.9.8'],
    sharedBgs: [],
    czs: ['CZ.14'],
    sharedCzs: [],
    as: ['A.3', 'A.10'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_7: {
    newNum: 8,
    newHeading: 'FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO',
    cKey: 'FASE_7',
    bgs: ['BG.10.11', 'BG.10.12', 'BG.10.13', 'BG.8.1', 'BG.8.2', 'BG.8.3'],
    sharedBgs: [],
    czs: ['CZ.9'],
    sharedCzs: [],
    as: ['A.4', 'A.19'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_8: {
    newNum: 9,
    newHeading: 'FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES',
    cKey: 'FASE_8',
    bgs: ['BG.10.2', 'BG.10.3', 'BG.10.5', 'BG.10.14', 'BG.11.2', 'BG.11.7'],
    sharedBgs: [],
    czs: ['CZ.5', 'CZ.11'],
    sharedCzs: [],
    as: ['A.23', 'A.25'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_9: {
    newNum: 10,
    newHeading: 'FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE',
    cKey: 'FASE_9',
    bgs: ['BG.7.1', 'BG.7.2', 'BG.7.3', 'BG.7.4', 'BG.7.5', 'BG.7.6', 'BG.7.7'],
    sharedBgs: [],
    czs: [],
    sharedCzs: [],
    as: ['A.6', 'A.20'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_10: {
    newNum: 11,
    newHeading: 'FASE 11 — MVP E EXPERIMENTOS DE MERCADO',
    cKey: 'FASE_10',
    bgs: ['BG.10.8', 'BG.8.4', 'BG.12.1', 'BG.12.8', 'BG.12.11'],
    sharedBgs: [],
    czs: ['CZ.10'],
    sharedCzs: [],
    as: ['A.21'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_11: {
    newNum: 12,
    newHeading: 'FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO',
    cKey: 'FASE_11',
    bgs: ['BG.8.5', 'BG.8.6', 'BG.8.7', 'BG.12.4', 'BG.12.9'],
    sharedBgs: [],
    czs: ['CZ.13'],
    sharedCzs: [],
    as: [],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_12: {
    newNum: 13,
    newHeading: 'FASE 13 — PRODUCT-MARKET FIT',
    cKey: 'FASE_12',
    bgs: [
      'BG.11.3',
      'BG.11.4',
      'BG.11.5',
      'BG.11.6',
      'BG.13.1',
      'BG.13.2',
      'BG.13.3',
      'BG.13.4',
      'BG.13.5',
    ],
    sharedBgs: [],
    czs: [],
    sharedCzs: [],
    as: ['A.22'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_14D: {
    newNum: 14,
    newHeading: 'FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA',
    cKey: 'BENCHMARKS',
    bgs: [
      'BG.18.1',
      'BG.18.2',
      'BG.18.3',
      'BG.18.4',
      'BG.18.5',
      'BG.18.6',
      'BG.18.7',
      'BG.18.8',
      'BG.18.9',
      'BG.18.10',
      'BG.18.11',
    ],
    sharedBgs: [],
    czs: ['CZ.12', 'CZ.17'],
    sharedCzs: [],
    as: ['A.14', 'A.17', 'A.18', 'A.32', 'A.33', 'A.37'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_14C: {
    newNum: 15,
    newHeading: 'FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA',
    cKey: null,
    bgs: [
      'BG.12.2',
      'BG.12.3',
      'BG.12.5',
      'BG.14.1',
      'BG.14.2',
      'BG.14.3',
      'BG.14.4',
      'BG.14.5',
      'BG.14.6',
      'BG.14.7',
    ],
    sharedBgs: [],
    czs: [],
    sharedCzs: [],
    as: ['A.13', 'A.15'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_14A: {
    newNum: 16,
    newHeading: 'FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA',
    cKey: 'FASE_14',
    bgs: [
      'BG.5.5',
      'BG.17.1',
      'BG.17.2',
      'BG.17.3',
      'BG.17.4',
      'BG.17.5',
      'BG.17.6',
      'BG.17.7',
      'BG.17.8',
      'BG.17.9',
      'BG.17.10',
      'BG.17.11',
      'BG.17.12',
      'BG.17.14',
      'BG.17.15',
    ],
    sharedBgs: [],
    czs: ['CZ.19'],
    sharedCzs: [],
    as: ['A.16', 'A.34', 'A.38', 'A.39'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_14B: {
    newNum: 17,
    newHeading: 'FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA',
    cKey: null,
    bgs: [
      'BG.10.1',
      'BG.10.4',
      'BG.10.6',
      'BG.10.7',
      'BG.10.9',
      'BG.16.1',
      'BG.16.2',
      'BG.16.3',
      'BG.16.4',
      'BG.16.5',
      'BG.16.6',
      'BG.16.7',
      'BG.16.8',
      'BG.16.9',
      'BG.16.10',
      'BG.16.11',
      'BG.16.12',
      'BG.16.13',
      'BG.16.14',
      'BG.17.13',
    ],
    sharedBgs: [],
    czs: [],
    sharedCzs: [],
    as: ['A.26', 'A.35', 'A.36'],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_13: {
    newNum: 18,
    newHeading: 'FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL',
    cKey: 'FASE_13',
    bgs: [],
    sharedBgs: [],
    czs: [],
    sharedCzs: [],
    as: [],
    sharedAs: [],
    eSubstrings: [
      'Profissionais que você vai precisar',
      'Tipos de comunidades e recursos online',
      'Artigos práticos abertos ao público',
    ],
  },
  FASE_15: {
    newNum: 19,
    newHeading: 'FASE 19 — REINVENÇÃO E SEGUNDA CURVA',
    cKey: 'FASE_15',
    bgs: ['BG.2.6', 'BG.3.1', 'BG.3.2', 'BG.3.3', 'BG.19.1', 'BG.19.2', 'BG.19.3', 'BG.19.4'],
    sharedBgs: [],
    czs: ['CZ.20'],
    sharedCzs: [],
    as: [],
    sharedAs: [],
    eSubstrings: [],
  },
  FASE_16: {
    newNum: 20,
    newHeading: 'FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)',
    cKey: 'FASE_16',
    bgs: [],
    sharedBgs: [],
    czs: [],
    sharedCzs: [],
    as: ['A.31'],
    sharedAs: [],
    eSubstrings: [],
  },
};

// Conteúdos embutidos em Capítulos específicos (ex-Apêndices):
const CHAPTER_EXTRAS = {
  D: { eSubstrings: ['Apêndice D'] },
  F: { eSubstrings: ['Artigos e papers acadêmicos sobre a abordagem científica'] },
  EE: { eSubstrings: ['Apêndice S'] },
  AE: { bgs: ['BG.12.10'] },
  BE: { bgs: ['BG.12.13'] },
  DU: { eSubstrings: ['Apêndice J'] },
  CP: { eSubstrings: ['Apêndice CP'] },
  DS: { bgs: ['BG.15.1', 'BG.15.2', 'BG.15.3', 'BG.15.4'] },
  V: { eSubstrings: ['Apêndice V'] },
  P: { eSubstrings: ['Apêndice P'] },
  CQ: { eSubstrings: ['Apêndice CQ'] },
  R: { eSubstrings: ['Apêndice R'] },
  T: { eSubstrings: ['Apêndice T'] },
  CW: { eSubstrings: ['Apêndice CW'] },
};

// Limpa e padroniza a seção ### FERRAMENTAS DESTA FASE em todas as 21 Fases
function cleanFerramentasSection(body, phaseKey, cfg) {
  return body.replace(
    /(^### FERRAMENTAS DESTA FASE\n)([\s\S]*?)(?=\n### |\n---\n\n### |(?![\s\S]))/m,
    (_, hLine, rawContent) => {
      // 0) Desembrulhar wikilinks antigos para APÊNDICE A/CZ/BG cujo alias contenha um código (ex: [[...#APÊNDICE A...|Apêndice A.19]])
      let c = rawContent.replace(
        /\[\[[^\]|]+\|(?:O\s+)?(?:Ap[êe]ndice\s+)?((?:BG\.\d+\.\d+|CZ\.\d+|A\.\d+)[^\]]*)\]\]/gi,
        '$1'
      );

      // 1) Normalizar cabeçalhos internos "**Essenciais para...**"
      c = c
        .replace(/\*\*Essenciais para a Fase \d+:\*\*/g, `**Essenciais para a Fase ${cfg.newNum}:**`)
        .replace(/\*\*Essenciais para (?:Time e Liderança|Operações|Crescimento e Capital):\*\*/g, `**Essenciais para a Fase ${cfg.newNum}:**`)
        .replace(/\bsubfase\b/g, 'fase');

      // 2) Remover instruções legadas do antigo Ferramentário BG / Apêndice CZ
      c = c
        .replace(
          /Detalhamento completo de cada ferramenta no \[\[[^\]]+\]\]\s*\(catálogo de cento e quarenta e uma ferramentas[^)]*\)\./g,
          'Todas as ferramentas abaixo estão detalhadas passo a passo na subseção **[[#MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE|Manual Passo a Passo dos Frameworks desta Fase]]** logo a seguir.'
        )
        .replace(
          /Não é leitura linear, é referência consultiva\.\s*Quando a fase citar "ver BG\.X\.Y" ou "ver CZ\.N", abra o item, leia em três a cinco minutos e volte\./g,
          'Todas estão detalhadas passo a passo logo a seguir nas subseções **[[#MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE|Manual Passo a Passo dos Frameworks desta Fase]]** e **[[#CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)|Canvases Visuais desta Fase]]**.'
        )
        .replace(
          /Canvases complementares no \[\[[^\]]+\]\]\s*\(CZ\.1 BMC,\s*CZ\.2 Lean Canvas,\s*CZ\.3 VPC,\s*CZ\.5 Opportunity Canvas\)\./g,
          'Canvases visuais desta etapa: CZ.1, CZ.2, CZ.3 e CZ.5.'
        )
        .replace(
          /A maioria (?:das ferramentas de research )?está no Ferramentário\s*\([^)]+\)\./g,
          'Todas estão detalhadas passo a passo na subseção **[[#MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE|Manual Passo a Passo dos Frameworks desta Fase]]** logo a seguir.'
        )
        .replace(
          /> \[!note\] Ferramentas específicas de entrevista\n> [^\n]+/g,
          '> [!note] Ferramentas específicas de entrevista nesta fase\n> *The Mom Test*, *JTBD Switch Interviews*, *Laddering* e *Contextual Inquiry* estão detalhados passo a passo logo abaixo em **[[#MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE|Manual Passo a Passo dos Frameworks desta Fase]]**.'
        )
        .replace(
          /> \[!note\] Métodos consagrados de pesquisa no Ferramentário\n> [^\n]+/g,
          '> [!note] Métodos consagrados de pesquisa integrados nesta fase\n> A subseção **[[#MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE|Manual Passo a Passo dos Frameworks desta Fase]]** logo abaixo detalha passo a passo *JTBD Switch Interviews*, *Jobs to Be Done Framework*, *Contextual Inquiry*, *Ethnographic Research*, *Laddering*, *Personas*, *Customer Journey Mapping*, *Service Blueprinting* e *Kano Model*.'
        )
        .replace(
          /;\s*o restante fica como referência consultiva(?: no Apêndice BG[^\n.]*)?\./g,
          ' — todas detalhadas passo a passo logo a seguir.'
        )
        .replace(
          /\.\s*O resto fica como referência consultiva por grupo no Apêndice BG\./g,
          ' — todas detalhadas passo a passo logo a seguir.'
        )
        .replace(
          /Detalhamento(?: e quando usar cada uma)? em BG\.[^.\n]+\./g,
          'Detalhamento passo a passo na subseção **[[#MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE|Manual Passo a Passo dos Frameworks desta Fase]]** logo a seguir.'
        )
        .replace(
          /estão detalhadas em BG\.18\.1 a BG\.18\.8 —/g,
          'estão detalhadas na Fase 14 e nesta fase —'
        )
        .replace(/BG\.18\.1,\s*18\.3,\s*18\.4,\s*18\.5/g, 'BG.18.1, BG.18.3, BG.18.4 e BG.18.5')
        .replace(/\s*\(BG\.\d+\)(?=:)/g, '');

      // 3) Converter "Ver BG.X.Y para detalhes." / "Ver BG.X.Y." / "(BG.X.Y)" / "BG.X.Y" em links locais
      c = c
        .replace(/\bVer\s+(BG\.\d+\.\d+)(?:\s+para detalhes)?\./g, (_, code) => {
          const item = bgItems.get(code.toUpperCase());
          return item ? `Ver [[#${item.heading}|${item.heading}]].` : _;
        })
        .replace(/\b(BG\.\d+\.\d+)\b/g, (code) => {
          const item = bgItems.get(code.toUpperCase());
          return item ? `[[#${item.heading}|${item.heading}]]` : code;
        })
        .replace(/\b(CZ\.\d+)\s*\(([^)]+)\)/g, (full, code) => {
          const item = czItems.get(code.toUpperCase());
          return item ? `[[#${item.heading}|${item.heading}]]` : full;
        })
        .replace(/\b(CZ\.\d+)\b/g, (code) => {
          const item = czItems.get(code.toUpperCase());
          return item ? `[[#${item.heading}|${item.heading}]]` : code;
        })
        .replace(/\b(A\.\d+)\s*\(([^)]+)\)/g, (full, code) => {
          const item = aItems.get(code.toUpperCase());
          return item ? `[[#${item.heading}|${item.heading}]]` : full;
        })
        .replace(/\n+---\s*$/, '');

      return hLine + c;
    }
  );
}

// Função que injeta Métricas, Frameworks, Canvases, Templates e Leituras na Fase
function enrichPhaseBody(phaseKey, rawBody) {
  const cfg = PHASE_CONFIG[phaseKey];
  if (!cfg) return rawBody;

  let body = rawBody
    .replace(/^## FASE \d+B? — [^\n]+/m, `## ${cfg.newHeading}`)
    .replace(/^### SÍNTESE DA FASE \d+B?/m, `### SÍNTESE DA FASE ${cfg.newNum}`)
    .replace(/^### O que ess[ea] ap[êe]ndice cobre/gm, '### O que esta fase cobre')
    .replace(/\best[ea] ap[êe]ndice\b/g, 'esta fase')
    .replace(/\bEst[ea] ap[êe]ndice\b/g, 'Esta fase')
    .replace(/\bnest[ea] ap[êe]ndice\b/g, 'nesta fase')
    .replace(/\bNest[ea] ap[êe]ndice\b/g, 'Nesta fase')
    .replace(/\bess[ea] ap[êe]ndice\b/g, 'esta fase')
    .replace(/\bEss[ea] ap[êe]ndice\b/g, 'Esta fase')
    .replace(/\bdest[ea] ap[êe]ndice\b/g, 'desta fase')
    .replace(/\bDest[ea] ap[êe]ndice\b/g, 'Desta fase');

  // Corrigir referências específicas herdadas de 738db95 nas Fases 0, 9 e 11:
  if (phaseKey === 'FASE_0') {
    body = body.replace(
      /Aplicação:\s*\[\[#APÊNDICE BG[^\]]+\]\]\./g,
      'Aplicação: [[#Framework: North Star Metric (Sean Ellis, Amplitude)|Framework: North Star Metric]] e [[#Framework: OKRs Objectives and Key Results (Andy Grove, John Doerr)|Framework: OKRs]].'
    );
  } else if (phaseKey === 'FASE_8') {
    body = body
      .replace(
        'Dossiê de Solução (Template A.5)',
        'Dossiê de Solução (estruturado nos 6 blocos abaixo e no [[#Canvas: Opportunity Canvas (Jeff Patton, 2014)|Canvas: Opportunity Canvas]])'
      )
      .replace(
        /> \[!tip\] Apêndice A — Template do Dossiê de Solução \(A\.5\)\n> O \[\[[^\]]+\]\] contém o template preenchível do Dossiê de Solução com os seis campos acima em formato estruturado\./g,
        '> [!tip] Estrutura do Dossiê de Solução e Canvases desta Fase\n> Os seis campos acima compõem a estrutura completa do Dossiê de Solução e se conectam diretamente ao **[[#Canvas: Opportunity Canvas (Jeff Patton, 2014)|Canvas: Opportunity Canvas]]** e ao **[[#Canvas: MVP Canvas (Tristan Kromer)|Canvas: MVP Canvas]]** detalhados na seção de Canvases Visuais desta fase.'
      );
  } else if (phaseKey === 'FASE_10') {
    body = body.replace(
      /> O \[\[[^\]]+\]\] inclui o template A\.5 \(Landing Page de Validação\)[^\n]+/g,
      '> A seção **[[#TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE|Templates Operacionais desta Fase]]** ao final desta fase inclui o **[[#Template: Especificação de MVP|Template: Especificação de MVP]]** e o **[[#Template: Checklist de Pre-Launch|Template: Checklist de Pre-Launch]]**, prontos para delimitar escopo e validar a prontidão de lançamento.'
    );
  }

  // Limpar e padronizar ### FERRAMENTAS DESTA FASE
  body = cleanFerramentasSection(body, phaseKey, cfg);

  // Ajustar blocos de transição herdados da antiga arquitetura de 6 volumes:
  if (phaseKey === 'FASE_2') {
    body = body.replace(
      'A Fase 3 vai usar o "para quem" e a lista de incertezas desta Declaração como ponto de partida para as primeiras entrevistas de descoberta de problema.',
      'A Fase 3 vai usar esta Declaração para estruturar a árvore causal da teoria do negócio, e a Fase 4 (no Volume 2) usará o "para quem" e a lista de incertezas como ponto de partida para as primeiras entrevistas de descoberta de problema.'
    );
  } else if (phaseKey === 'FASE_2B') {
    body = body
      .replace(
        /As Fases 3 a 7 \(no \*\*Volume 2 — Validação\*\*\) não testam ideia em geral/g,
        'As Fases 4 a 10 (nos **Volumes 2 e 3**) não testam ideia em geral'
      )
      .replace(
        /### Transição: do Volume 1 \(Ideação\) para o Volume 2 \(Validação\)[\s\S]*$/,
        `### Transição: do Volume 1 (Ideação e Fundação) para o Volume 2 (Descoberta e Mercado)

O que você acabou de fazer ao longo das Fases 0 a 3 deste **Volume 1 (Ideação e Fundação)**: preparou-se pessoal e financeiramente como fundador, gerou e filtrou ideias com método, articulou a candidata na Declaração Inicial da Ideia (DII) e construiu a árvore de teoria causal explícita do negócio — tudo com seus frameworks, canvases e templates integrados em cada fase. A segunda metade deste volume reúne os **13 capítulos** de fundação pessoal, cognição, decisão, comunicação, produtividade com IA e ecossistema.

O próximo passo sequencial da jornada está no **Volume 2 — Descoberta de Cliente e Mapeamento de Mercado**, começando na [[#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 — Descoberta do Problema]]: sair do papel e ir a campo entrevistar clientes reais (*Mom Test* e *JTBD*), pesquisar usuários em profundidade e mapear o mercado, a concorrência e a cunha de entrada.`
      );
  } else if (phaseKey === 'FASE_3') {
    body = body.replace(
      'A Fase 4 vai usar esse Mapa para estruturar o conhecimento em Jobs to be Done',
      'A [[#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5]] vai usar esse Mapa para estruturar o conhecimento em Jobs to be Done'
    );
  } else if (phaseKey === 'FASE_4') {
    body = body.replace(
      'Esse dossiê é insumo das Fases 8 e 9, ideação e protótipo.',
      'Esse dossiê é insumo das Fases 9 e 10 (ideação, prototipagem e testes de solução, no Volume 3).'
    );
  } else if (phaseKey === 'FASE_5') {
    body =
      body.replace(
        'depois da SAÍDA, do EXEMPLO PRÁTICO e das Armadilhas',
        'logo após a catraca de saída, o estudo de caso real e as armadilhas da etapa'
      ) +
      `\n\n---\n\n### Transição: do Volume 2 (Descoberta e Mercado) para o Volume 3 (Hipóteses, Experimentos e Prototipagem)\n\nAo concluir as Fases 4, 5 e 6 deste **Volume 2**, você ouviu o cliente sem viés (*Mom Test*), mapeou os *Jobs to Be Done* e a jornada real de compra e dissecou a estrutura competitiva do mercado e sua cunha de entrada (*wedge*). Os **4 capítulos** a seguir aprofundam a psicologia do consumidor brasileiro, inteligência competitiva, *Category Design* e posicionamento.\n\nO próximo passo da jornada está no **Volume 3 — Hipóteses, Experimentos, Prototipagem e Modelos de Negócio**, começando na [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7 — Formulação Rigorosa de Hipóteses]]: converter suas descobertas em apostas matematicamente falsificáveis, rodar experimentos de compromisso real, prototipar e testar a usabilidade do MVP.`;
  } else if (phaseKey === 'FASE_6') {
    body = body.replace(
      'as Fases 7, 8, 9 e 10 não testam ideia em geral',
      'as Fases 8, 9, 10 e 11 não testam ideia em geral'
    );
  } else if (phaseKey === 'FASE_7') {
    body = body.replace(
      'Para avançar à Fase 8, pelo menos três a cinco hipóteses',
      'Para avançar à [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]], pelo menos três a cinco hipóteses'
    );
  } else if (phaseKey === 'FASE_9') {
    body = body
      .replace(
        'a Fase 8 produziu conceitos testados em protótipo; a Fase 9 converte os aprendizados em especificação vinculante',
        'a [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]] produziu conceitos testados em protótipo; a [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]] converte os aprendizados em especificação vinculante'
      )
      .replace(
        /### Transição: do Volume 2 \(Validação\) para o Volume 3 \(Tração\)[\s\S]*$/,
        `### Transição: do Volume 3 (Hipóteses, Experimentos e Prototipagem) para o Volume 4 (Tração e PMF)

O que você acabou de fazer ao longo dos **Volumes 1, 2 e 3 (Fases 0 a 10)**: preparou-se como fundador, gerou ideias com método e construiu a teoria causal do negócio (Vol. 1); descobriu problemas reais em campo e mapeou usuários, mercado e cunha (Vol. 2); formulou hipóteses *bet-the-company*, validou as centrais com experimentos rigorosos, prototipou, testou com usuários reais e chegou a uma especificação de MVP com escopo disciplinado (*MoSCoW*) e *pricing* testado (Vol. 3). Os **9 capítulos** a seguir deste volume entregam o aparelho do método científico, os *gates* de evidência e os playbooks de arquiteturas de modelo de negócio (*Marketplaces*, *Plataformas*, *B2B2C* e *Open Source*).

O próximo passo está no **Volume 4 — Tração, Go-to-Market e Product-Market Fit (Fases 11 a 13)**: colocar o MVP em produção com clientes reais na [[#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11]], validar a equação econômica e os canais na [[#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12]] e comprovar o *Product-Market Fit* na [[#FASE 13 — PRODUCT-MARKET FIT|Fase 13]].

> [!important] Sinais de progresso versus sinal de PMF
> Sinal de progresso: usuários pagantes em uso real do MVP. Sinal de PMF: Sean Ellis maior ou igual a quarenta por cento, mais retenção estabilizada, mais crescimento orgânico.`
      );
  } else if (phaseKey === 'FASE_12') {
    body = body.replace(
      /### Transição: do Volume 3 \(Tração\) para o Volume 4 \(Escala\)[\s\S]*$/,
      `### Transição: do Volume 4 (Tração e PMF) para os Volumes de Escala (Volumes 5 a 8)

O que você acabou de fazer ao longo das Fases 11 a 13 deste **Volume 4 (Tração, Go-to-Market e PMF)**: colocou o MVP em produção, validou o modelo de negócio com dados reais e comprovou o *Product-Market Fit*. Os **16 capítulos** a seguir deste volume reúnem o manual completo de *Go-to-Market*, canais de aquisição, vendas consultivas, *pricing*, recorrência, negociação, *Customer Success*, *stack* de dados, produto *AI-native* e pivô.

A partir daqui, sua empresa entra nos **quatro volumes autocontidos de Escala (Volumes 5 a 8)**:
- **Volume 5 — Finanças, Captação e Venture Capital ([[#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14]]):** estruturação financeira, rodadas de investimento, *valuation*, Reforma Tributária e FP&A.
- **Volume 6 — Receita Enterprise, Liderança e Cultura ([[#FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA|Fases 15]] e [[#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|16]]):** máquina comercial *Enterprise*, *RevOps*, executivos C-level, remuneração, ESOP e cultura.
- **Volume 7 — Produto, Engenharia, Dados, IA e Operações ([[#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17]]):** cadência operacional, OKRs, *discovery* em múltiplos *squads*, engenharia de software e *AI Ops*.
- **Volume 8 — Blindagem Jurídica, Societária, LGPD e Segurança ([[#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18]]):** estruturação societária, contratos, trabalhista, propriedade intelectual, LGPD e cibersegurança.

> [!warning] Pré-condição para escalar
> Estruturar e escalar assumem PMF comprovado na Fase 13. Se você está aqui sem PMF sólido, pare e volte. Escalar sem PMF queima capital em ICP errado, contratações erradas e canais errados.`
    );
  } else if (phaseKey === 'FASE_14A') {
    body = body.replace(
      /### Transição: das Fases de Escala para os Apêndices Operacionais \(Vol\. 4\) e o Ciclo Longo \(Vol\. 5\)[\s\S]*$/,
      `### Transição: das Fases 15 e 16 para os Capítulos de Receita e Pessoas (Vol. 6) e os Volumes 7 a 9

Ao longo das **Fases 15 e 16** deste **Volume 6**, você estruturou a máquina de crescimento comercial e a arquitetura de liderança executiva e cultura para a travessia de 20 para 200+ pessoas. Os **19 capítulos** a seguir deste volume aprofundam *Growth*, vendas *Enterprise*, *RevOps*, parcerias corporativas, marca/PR, *Founder Mode*, contratação de executivos, performance, remuneração, *Stock Options (ESOP)* e cultura em escala.

Para completar a arquitetura de escala e maturidade da sua companhia, siga para o **Volume 7 (Produto, Engenharia, Dados, IA e Operações — Fase 17)**, o **Volume 8 (Blindagem Jurídica, Societária, LGPD e Segurança — Fase 18)** e o **Volume 9 (Maturidade, Governança, Crise e Exit — Fases 19 e 20)**.`
    );
  } else if (phaseKey === 'FASE_15') {
    body = body
      .replace(/faz o exit \(Fase 16\)/g, 'faz o exit (Fase 20)')
      .replace(
        'BF é a continuação natural depois do exit da Fase 16.',
        'o Capítulo 21 (Second-Time Founder) é a continuação natural depois do exit da Fase 20.'
      );
  }

  // Construir blocos autocontidos (primários + compartilhados neste volume)
  const blocks = [];

  if (cfg.cKey && cItems.has(cfg.cKey)) {
    blocks.push(
      `### MÉTRICAS E BENCHMARKS DESTA FASE (FASE ${cfg.newNum})\n\n${cItems.get(cfg.cKey)}`
    );
  }

  const allPhaseBgs = [...cfg.bgs, ...(cfg.sharedBgs || [])];
  if (allPhaseBgs.length > 0) {
    const bgChunks = allPhaseBgs.map((code) => {
      const item = bgItems.get(code);
      if (!item) throw new Error(`BG não encontrado: ${code}`);
      return item.content;
    });
    blocks.push(
      `### MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE\n\n> [!tip] Uso autocontido neste volume\n> Todos os frameworks abaixo estão detalhados integralmente com origem, estrutura, passo a passo de aplicação, exemplo brasileiro e armadilhas para execução imediata nesta **Fase ${cfg.newNum}**.\n\n` +
        bgChunks.join('\n\n---\n\n')
    );
  }

  const allPhaseCzs = [...cfg.czs, ...(cfg.sharedCzs || [])];
  if (allPhaseCzs.length > 0) {
    const czChunks = allPhaseCzs.map((code) => {
      const item = czItems.get(code);
      if (!item) throw new Error(`CZ não encontrado: ${code}`);
      return item.content;
    });
    blocks.push(
      `### CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)\n\n` +
        czChunks.join('\n\n---\n\n')
    );
  }

  const allPhaseAs = [...cfg.as, ...(cfg.sharedAs || [])];
  if (allPhaseAs.length > 0) {
    const aChunks = allPhaseAs.map((code) => {
      const item = aItems.get(code);
      if (!item) throw new Error(`Template A não encontrado: ${code}`);
      return item.content;
    });
    blocks.push(
      `### TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE\n\n` +
        aChunks.join('\n\n---\n\n')
    );
  }

  if (cfg.eSubstrings.length > 0) {
    const eChunks = [];
    for (const sub of cfg.eSubstrings) {
      const found = getEReadingBySubstring(sub);
      if (found) {
        eChunks.push(`#### ${found.title}\n\n${found.body}`);
      }
    }
    if (eChunks.length > 0) {
      blocks.push(`### LEITURAS E RECURSOS RECOMENDADOS DESTA FASE\n\n` + eChunks.join('\n\n'));
    }
  }

  if (blocks.length === 0) {
    return applyNarrativeRefactor(phaseKey, body, ALL_NARRATIVE_SPECS);
  }

  const injected = '\n\n---\n\n' + blocks.join('\n\n---\n\n') + '\n\n---\n\n';
  const sinteseMatch = body.match(/\n### SÍNTESE DA FASE \d+/);
  if (sinteseMatch) {
    const idx = sinteseMatch.index;
    const withBlocks = body.slice(0, idx) + injected + body.slice(idx + 1);
    return applyNarrativeRefactor(phaseKey, withBlocks, ALL_NARRATIVE_SPECS);
  }
  return applyNarrativeRefactor(phaseKey, body + injected, ALL_NARRATIVE_SPECS);
}

// Converte um título em CAIXA ALTA para Title Case Editorial em português (preservando siglas técnicas)
const UPPER_ACRONYMS = new Set([
  'IA', 'AI', 'B2B', 'B2C', 'B2B2C', 'B2G', 'D2C', 'CPG', 'ERP', 'ERPS', 'CRM', 'PIX', 'LGPD',
  'INPI', 'CLT', 'PJ', 'CDC', 'CADE', 'BACEN', 'CVM', 'SUSEP', 'ANVISA', 'ANS', 'ANATEL',
  'ANEEL', 'ANP', 'MAPA', 'IBAMA', 'BNDES', 'FINEP', 'FAPESP', 'PIPE', 'EMBRAPII', 'SEBRAE',
  'DRE', 'DFC', 'BP', 'FP&A', 'ICMS', 'IBS', 'CBS', 'SAFE', 'FIDC', 'FIDCS', 'RBF', 'IPO',
  'M&A', 'ESOP', 'CEO', 'CTO', 'CPO', 'COO', 'CFO', 'CMO', 'CRO', 'CISO', 'DPO', 'PR', 'PMM',
  'PLG', 'GTM', 'PMF', 'MVP', 'TRL', 'CRL', 'JTBD', 'TAM', 'SAM', 'SOM', 'CAC', 'LTV', 'ARR',
  'MRR', 'NRR', 'GRR', 'ROAS', 'ROI', 'ROIC', 'EBITDA', 'GMV', 'ARPU', 'SLA', 'OKR', 'OKRS',
  'KPI', 'KPIS', 'SOP', 'SOPS', 'RFC', 'ADR', 'API', 'APIS', 'SDK', 'CI/CD', 'SOC', 'ISO',
  'COSS', 'RWA', 'VC', 'CVC', 'PE', 'LP', 'GP', 'LTDA', 'S.A.', 'SPE', 'SCP', 'COF', 'DII',
  'DAG', 'CSD', 'SUS', 'NPS', 'CS', 'CX', 'UX', 'UI', 'HR', 'QA', 'TI', 'P&D', 'P&L', 'PME',
  'PMES', 'IOT', 'IIOT', 'EV', 'SAF', 'CBIOS', 'EUDR', 'SISBOV', 'FIV', 'OPME', 'ISPS', 'BAAS',
  'MLOPS', 'CBOT', 'B3', 'BPO',
]);

const LOWER_PARTICLES = new Set([
  'de', 'da', 'do', 'das', 'dos', 'e', 'em', 'no', 'na', 'nos', 'nas', 'para', 'por', 'com',
  'sem', 'sob', 'sobre', 'entre', 'até', 'como', 'ou', 'a', 'o', 'as', 'os', 'à', 'às', 'ao', 'aos', 'vs', 'vs.',
]);

const MIXED_SPECIAL = {
  'SAAS': 'SaaS',
  'PAAS': 'PaaS',
  'IAAS': 'IaaS',
  'DEVTOOLS': 'DevTools',
  'FINTECH': 'Fintech',
  'INSURTECH': 'Insurtech',
  'WEALTHTECH': 'Wealthtech',
  'INFRATECH': 'Infratech',
  'ENERGYTECH': 'Energytech',
  'MININGTECH': 'Miningtech',
  'MOBITECH': 'Mobitech',
  'RETAILTECH': 'Retailtech',
  'FOODTECH': 'Foodtech',
  'TRAVELTECH': 'Traveltech',
  'SPORTSTECH': 'SportsTech',
  'PETTECH': 'PetTech',
  'HRTECH': 'HRTech',
  'MARTECH': 'Martech',
  'ADTECH': 'Adtech',
  'SALESTECH': 'Salestech',
  'PROPTECH': 'Proptech',
  'CONSTRUTECH': 'Construtech',
  'HEALTHTECH': 'Healthtech',
  'BIOTECH': 'Biotech',
  'EDTECH': 'Edtech',
  'GOVTECH': 'Govtech',
  'LEGALTECH': 'Legaltech',
  'REGTECH': 'Regtech',
  'TAXTECH': 'Taxtech',
  'LOGTECH': 'Logtech',
  'CLEANTECH': 'Cleantech',
  'AGRITECH': 'Agritech',
  'PECTECH': 'PecTech',
  'AQUATECH': 'AquaTech',
  'DEATHTECH': 'DeathTech',
  'IGAMING': 'iGaming',
  'SPACETECH': 'Spacetech',
  'AI-NATIVE': 'AI-Native',
  'WHATSAPP-FIRST': 'WhatsApp-First',
  'SERVICE-TO-PRODUCT': 'Service-to-Product',
};

function toEditorialTitleCase(str) {
  let isStart = true;
  return str.replace(/([A-Za-zÀ-ÖØ-öø-ÿ0-9&/.-]+)|([^\sA-Za-zÀ-ÖØ-öø-ÿ0-9&/.-]+)/g, (match, word, punct) => {
    if (punct) {
      if (/[:—–-]/.test(punct)) isStart = true;
      return punct;
    }
    const upper = word.toUpperCase();
    const lower = word.toLowerCase();
    const firstWord = isStart;
    isStart = false;

    if (MIXED_SPECIAL[upper]) return MIXED_SPECIAL[upper];
    if (UPPER_ACRONYMS.has(upper)) {
      if (upper === 'PMES') return 'PMEs';
      if (upper === 'ERPS') return 'ERPs';
      if (upper === 'OKRS') return 'OKRs';
      if (upper === 'KPIS') return 'KPIs';
      if (upper === 'SOPS') return 'SOPs';
      if (upper === 'APIS') return 'APIs';
      if (upper === 'FIDCS') return 'FIDCs';
      if (upper === 'CBIOS') return 'CBIOs';
      if (upper === 'ISPS') return 'ISPs';
      if (upper === 'BAAS') return 'BaaS';
      if (upper === 'MLOPS') return 'MLOps';
      return upper;
    }
    if (!firstWord && LOWER_PARTICLES.has(lower)) {
      return lower;
    }
    if (word.includes('-')) {
      return word
        .split('-')
        .map((p, idx) => {
          const pUp = p.toUpperCase();
          const pLow = p.toLowerCase();
          if (UPPER_ACRONYMS.has(pUp)) return pUp;
          if (idx > 0 && LOWER_PARTICLES.has(pLow)) return pLow;
          return pLow.charAt(0).toUpperCase() + pLow.slice(1);
        })
        .join('-');
    }
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });
}

// Função que transforma um antigo APÊNDICE XX em CAPÍTULO N — TÍTULO e injeta extras
function buildChapterSection(oldKey, chapNum, rawSection) {
  const rawUpperTitle = rawSection.heading
    .replace(/^(?:APÊNDICE [A-Z0-9_-]+|CAPÍTULO \d+)\s*—\s*/, '')
    .trim();
  const cleanTitle = toEditorialTitleCase(rawUpperTitle);
  const newHeading = `CAPÍTULO ${chapNum} — ${rawUpperTitle}`;
  let body = rawSection.body.replace(/^## (?:APÊNDICE|CAPÍTULO) [^\n]+/m, `## ${newHeading}`);

  if (oldKey === 'B' || oldKey === 'G') {
    body = body
      .replace(
        /\(veja a (?:\[\[[^\]]*\|)?tabela A\.9(?:\]\])? para escolher entre entrevista, questionário, pré-venda, MVP, etc\.\)/g,
        '(veja a [[#Template: Tabela de técnicas de validação por tipo de hipótese|Tabela de técnicas de validação por tipo de hipótese]] na Fase 8 deste volume para escolher entre entrevista, questionário, pré-venda, MVP, etc.)'
      )
      .replace('o checklist de SAÍDA DESTA FASE de cada fase', 'a catraca de saída de cada fase');
  } else if (oldKey === 'I') {
    body = body
      .replace('### Fase 0 a 1B, Preparação, Articulação, e Teoria', '### Fases 0 a 3 — Preparação, Ideia, Articulação e Teoria')
      .replace('### Fase 3, Descoberta do Problema, e Pesquisa com Usuários', '### Fases 4 e 5 — Descoberta do Problema e Pesquisa com Usuários')
      .replace('### Fase 5, Mapeamento de Mercado', '### Fase 6 — Mapeamento de Mercado e Concorrência')
      .replace('### Fase 6, Hipóteses, e Experimentos', '### Fases 7 e 8 — Hipóteses e Experimentos de Validação')
      .replace('### Fase 8, Ideação, e Testes de Solução', '### Fases 9 e 10 — Ideação, Prototipagem e Testes de Solução')
      .replace('### Fase 10, MVP, e Validação de Modelo', '### Fases 11 e 12 — MVP e Validação do Modelo de Negócio')
      .replace('### Fase 12 a 13, PMF, Estruturação, e Escala', '### Fases 13 a 18 — Product-Market Fit, Escala e Estruturação')
      .replace('### Fase 15, Reinvenção, e Exit', '### Fases 19 e 20 — Reinvenção e Estratégia de Saída (Exit)');
  }

  // Normalizar subtítulos internos que herdaram prefixos de apêndice (FF.1, EE.1, DX.1, FB.1, EP.1)
  // ou nível H2 (##) dentro de capítulos (FE, BH)
  if (oldKey === 'FF' || oldKey === 'EE' || oldKey === 'DX') {
    const h2SubRe = new RegExp(`^## (${oldKey}\\.(\\d+)\\s*[—–-]\\s*(.+))$`, 'gm');
    body = body.replace(h2SubRe, (_, _fullOld, subNum, subTitle) => {
      return `### ${chapNum}.${subNum} — ${subTitle.trim()}`;
    });
    const h3SubRe = new RegExp(`^### (${oldKey}\\.(\\d+\\.\\d+)\\s*[—–-]\\s*(.+))$`, 'gm');
    body = body.replace(h3SubRe, (_, _fullOld, subNum, subTitle) => {
      return `#### ${chapNum}.${subNum} — ${subTitle.trim()}`;
    });
  } else if (oldKey === 'FB' || oldKey === 'EP') {
    const h3SubRe = new RegExp(`^### (${oldKey}\\.(\\d+)\\s*(?:[—–-]\\s*)?(.+))$`, 'gm');
    body = body.replace(h3SubRe, (_, _fullOld, subNum, subTitle) => {
      return `### ${chapNum}.${subNum} — ${subTitle.trim()}`;
    });
  } else if (oldKey === 'FE' || oldKey === 'BH') {
    body = body
      .replace(/^### (.+)$/gm, '#### $1')
      .replace(/^## (?!CAPÍTULO )(.+)$/gm, '### $1');
  } else if (oldKey === 'BL') {
    body = body.replace(/^### CONSIDERAÇÕES ESPECÍFICAS PARA BRASIL\n+/gm, '');
  }

  // Dentro de capítulos (antigos apêndices), converter autorreferências "este apêndice" -> "este capítulo"
  body = body
    .replace(/^### O que ess[ea] ap[êe]ndice cobre/gm, '### O que este capítulo cobre')
    .replace(/^### Conexão com outros ap[êe]ndices/gm, '### Conexão com outros capítulos')
    .replace(/^### Relação com outros ap[êe]ndices e fases/gm, '### Relação com outros capítulos e fases')
    .replace(/\|\s*Tópico\s*\|\s*Ap[êe]ndice\s*\|/g, '| Tópico | Capítulo |')
    .replace(/\beste ap[êe]ndice\b/g, 'este capítulo')
    .replace(/\bEste ap[êe]ndice\b/g, 'Este capítulo')
    .replace(/\bneste ap[êe]ndice\b/g, 'neste capítulo')
    .replace(/\bNeste ap[êe]ndice\b/g, 'Neste capítulo')
    .replace(/\besse ap[êe]ndice\b/g, 'este capítulo')
    .replace(/\bEsse ap[êe]ndice\b/g, 'Este capítulo')
    .replace(/\bnesse ap[êe]ndice\b/g, 'neste capítulo')
    .replace(/\bNesse ap[êe]ndice\b/g, 'Neste capítulo')
    .replace(/\bdeste ap[êe]ndice\b/g, 'deste capítulo')
    .replace(/\bDeste ap[êe]ndice\b/g, 'Deste capítulo')
    .replace(/\bdesse ap[êe]ndice\b/g, 'deste capítulo')
    .replace(/\bDesse ap[êe]ndice\b/g, 'Deste capítulo')
    .replace(/\bO ap[êe]ndice\b/g, 'Este capítulo')
    .replace(/\bo ap[êe]ndice\b/g, 'este capítulo');

  const extras = CHAPTER_EXTRAS[oldKey];
  if (extras) {
    const extraBlocks = [];
    if (extras.bgs && extras.bgs.length > 0) {
      const bgChunks = extras.bgs.map((c) => bgItems.get(c).content);
      extraBlocks.push(
        `### FRAMEWORKS PASSO A PASSO DESTE CAPÍTULO\n\n` + bgChunks.join('\n\n---\n\n')
      );
    }
    if (extras.eSubstrings && extras.eSubstrings.length > 0) {
      const eChunks = [];
      for (const sub of extras.eSubstrings) {
        const found = getEReadingBySubstring(sub);
        if (found) {
          eChunks.push(found.body);
        }
      }
      if (eChunks.length > 0) {
        extraBlocks.push(`### LEITURAS E REFERÊNCIAS COMPLEMENTARES\n\n` + eChunks.join('\n\n'));
      }
    }
    if (extraBlocks.length > 0) {
      body = body + '\n\n---\n\n' + extraBlocks.join('\n\n---\n\n');
    }
  }

  body = applyNarrativeRefactor(oldKey, body, ALL_NARRATIVE_SPECS);
  body = body.replace(/^### O Espelho do Cap[íi]tulo \d+:/gm, `### O Espelho do Capítulo ${chapNum}:`);

  return {
    oldKey,
    chapNum,
    cleanTitle,
    heading: newHeading,
    body,
  };
}

// ---------------------------------------------------------------------------
// 5. Especificação dos 10 Volumes Autocontidos
// ---------------------------------------------------------------------------
const VOLUMES_SPEC = [
  {
    num: 1,
    slug: 'IGNICAO-Vol-1-Ideacao',
    title: 'IGNIÇÃO: Volume 1: Ideação e Fundação',
    subtitle: 'Do Pré-Zero à Teoria do Negócio (Fases 0 a 3 e Capítulos 1 a 12)',
    about: '', // Usa Nota do autor + Sobre este livro
    blocks: [
      {
        h1: 'FASES DA ETAPA — IDEAÇÃO E FUNDAÇÃO (FASES 0 A 3)',
        tocGroup: 'Fases da Etapa (Fases 0 a 3)',
        intro: DOMAIN_INTROS.V1_FASES,
        items: [
          { type: 'phase', key: 'FASE_0' },
          { type: 'phase', key: 'FASE_1' },
          { type: 'phase', key: 'FASE_2' },
          { type: 'phase', key: 'FASE_2B' },
        ],
      },
      {
        h1: 'FUNDADOR, COFUNDADORES E PREPARAÇÃO PESSOAL (CAPÍTULOS 1 A 5)',
        tocGroup: 'Fundador, Cofundadores e Preparação Pessoal (Capítulos 1 a 5)',
        intro: DOMAIN_INTROS.V1_BLOCO_1,
        items: [
          { type: 'chapter', key: 'AJ' },
          { type: 'chapter', key: 'Y' },
          { type: 'chapter', key: 'D' },
          { type: 'chapter', key: 'CS' },
          { type: 'chapter', key: 'CN' },
        ],
      },
      {
        h1: 'COGNIÇÃO, DECISÃO, COMUNICAÇÃO E PRODUTIVIDADE COM IA (CAPÍTULOS 6 A 10)',
        tocGroup: 'Cognição, Decisão, Comunicação e Produtividade com IA (Capítulos 6 a 10)',
        intro: DOMAIN_INTROS.V1_BLOCO_2,
        items: [
          { type: 'chapter', key: 'EJ' },
          { type: 'chapter', key: 'EK' },
          { type: 'chapter', key: 'EW' },
          { type: 'chapter', key: 'EX' },
          { type: 'chapter', key: 'I' },
        ],
      },
      {
        h1: 'ECOSSISTEMA, MENTORIA E APOIO INICIAL (CAPÍTULOS 11 E 12)',
        tocGroup: 'Ecossistema, Mentoria e Apoio Inicial (Capítulos 11 e 12)',
        intro: DOMAIN_INTROS.V1_BLOCO_3,
        items: [
          { type: 'chapter', key: 'AK' },
          { type: 'chapter', key: 'AL' },
        ],
      },
    ],
  },
  {
    num: 2,
    slug: 'IGNICAO-Vol-2-Descoberta-e-Mercado',
    title: 'IGNIÇÃO: Volume 2: Descoberta de Cliente e Mapeamento de Mercado',
    subtitle: 'Customer Discovery, Pesquisa de Campo, Concorrência e Cunha Estratégica (Fases 4 a 6 e Capítulos 1 a 3)',
    about:
      'Volume dedicado à descoberta profunda do cliente e do mercado antes de qualquer linha de código: Descoberta do Problema em campo com Mom Test (Fase 4), Pesquisa com Usuários e Jobs-to-be-Done (Fase 5) e Mapeamento de Mercado, Concorrência e Cunha (Fase 6) — com seus frameworks passo a passo, canvases visuais preenchidos, templates/roteiros de entrevista e métricas integrados dentro de cada fase —, seguidos por 3 capítulos sobre psicologia do consumidor brasileiro, inteligência competitiva e Category Design e casos de fracasso brasileiros.',
    blocks: [
      {
        h1: 'FASES DA ETAPA — DESCOBERTA DE CLIENTE E MAPEAMENTO DE MERCADO (FASES 4 A 6)',
        tocGroup: 'Fases da Etapa (Fases 4 a 6)',
        intro: DOMAIN_INTROS.V2_FASES,
        items: [
          { type: 'phase', key: 'FASE_3' },
          { type: 'phase', key: 'FASE_4' },
          { type: 'phase', key: 'FASE_5' },
        ],
      },
      {
        h1: 'CONSUMIDOR BRASILEIRO, INTELIGÊNCIA COMPETITIVA E DESIGN DE CATEGORIA (CAPÍTULOS 1 A 3)',
        tocGroup: 'Consumidor Brasileiro, Inteligência Competitiva e Design de Categoria (Capítulos 1 a 3)',
        intro: DOMAIN_INTROS.V2_BLOCO_1,
        items: [
          { type: 'chapter', key: 'FF' },
          { type: 'chapter', key: 'EE' },
          { type: 'chapter', key: 'AI' },
        ],
      },
    ],
  },
  {
    num: 3,
    slug: 'IGNICAO-Vol-3-Experimentos-e-Prototipagem',
    title: 'IGNIÇÃO: Volume 3: Hipóteses, Experimentos, Prototipagem e Modelos de Negócio',
    subtitle: 'Método Científico, Testes de Validação, Usabilidade, Plataformas e Bootstrapping (Fases 7 a 10 e Capítulos 1 a 7)',
    about:
      'Volume dedicado à validação científica, experimentação prática e construção do protótipo testado: Formulação Rigorosa de Hipóteses (Fase 7), Experimentos de Validação com compromisso real (Fase 8), Ideação e Prototipagem de Soluções (Fase 9) e Testes de Solução, Usabilidade e Especificação de MVP (Fase 10) — trazendo embutidos frameworks passo a passo de análise de risco, experimentação, design sprint e UX research, os canvases Hypothesis Canvas, Test Card, Opportunity Canvas e MVP Canvas preenchidos e templates práticos —, seguidos por 7 capítulos sobre a abordagem científica ao empreendedorismo, gates de evidência, TRL/CRL e fechamento de fase, e as arquiteturas de Cunha (Wedge), Marketplaces e Plataformas, B2B2C, Open Source (COSS) e Bootstrapping / Productized Services (transição Service-to-Product sem diluição).',
    blocks: [
      {
        h1: 'FASES DA ETAPA — HIPÓTESES, EXPERIMENTOS, PROTOTIPAGEM E USABILIDADE (FASES 7 A 10)',
        tocGroup: 'Fases da Etapa (Fases 7 a 10)',
        intro: DOMAIN_INTROS.V3_FASES,
        items: [
          { type: 'phase', key: 'FASE_6' },
          { type: 'phase', key: 'FASE_7' },
          { type: 'phase', key: 'FASE_8' },
          { type: 'phase', key: 'FASE_9' },
        ],
      },
      {
        h1: 'METODOLOGIA CIENTÍFICA, MATURIDADE E GATES DE EVIDÊNCIA (CAPÍTULOS 1 E 2)',
        tocGroup: 'Metodologia Científica, Maturidade e Gates de Evidência (Capítulos 1 e 2)',
        intro: DOMAIN_INTROS.V3_BLOCO_1,
        items: [
          { type: 'chapter', key: 'F' },
          { type: 'chapter', key: 'G' },
        ],
      },
      {
        h1: 'ARQUITETURA DE MODELO DE NEGÓCIO: CUNHA, MARKETPLACES, PLATAFORMAS, B2B2C, OPEN SOURCE E BOOTSTRAPPING (CAPÍTULOS 3 A 7)',
        tocGroup: 'Arquitetura de Modelo de Negócio (Capítulos 3 a 7)',
        intro: DOMAIN_INTROS.V3_BLOCO_2,
        items: [
          { type: 'chapter', key: 'L' },
          { type: 'chapter', key: 'AE' },
          { type: 'chapter', key: 'CK' },
          { type: 'chapter', key: 'BE' },
          { type: 'chapter', key: 'NEW_SERVICE_TO_PRODUCT' },
        ],
      },
    ],
  },
  {
    num: 4,
    slug: 'IGNICAO-Vol-4-Tracao-e-PMF',
    title: 'IGNIÇÃO: Volume 4: Tração, Go-to-Market e Product-Market Fit',
    subtitle: 'Do MVP em Produção ao PMF, Canais, Vendas e Pricing (Fases 11 a 13 e Capítulos 1 a 11)',
    about:
      'Volume sobre a travessia do lançamento do MVP em produção até a comprovação do Product-Market Fit: Operação de MVP e Experimentos de Mercado (Fase 11), Validação do Modelo de Negócio (Fase 12) e Product-Market Fit (Fase 13) — com frameworks passo a passo de métricas, growth, posicionamento e negociação, os canvases Pirate/AARRR e Risk Canvas preenchidos e os templates de Pre-Launch e Scorecard de PMF integrados nas fases —, seguidos por 11 capítulos sobre GTM e canais de aquisição até R$ 1M de ARR, SEO/conteúdo e comunidades, mídia paga, branding e PMM, vendas B2B consultivas, pricing e economia da recorrência, negociação, Customer Success e CX, stack de dados, produto AI-native e pivô.',
    blocks: [
      {
        h1: 'FASES DA ETAPA — DO MVP AO PRODUCT-MARKET FIT (FASES 11 A 13)',
        tocGroup: 'Fases da Etapa (Fases 11 a 13)',
        intro: DOMAIN_INTROS.V4_FASES,
        items: [
          { type: 'phase', key: 'FASE_10' },
          { type: 'phase', key: 'FASE_11' },
          { type: 'phase', key: 'FASE_12' },
        ],
      },
      {
        h1: 'GO-TO-MARKET INICIAL, CANAIS DE AQUISIÇÃO E MARKETING (CAPÍTULOS 1 A 4)',
        tocGroup: 'Go-to-Market Inicial, Canais de Aquisição e Marketing (Capítulos 1 a 4)',
        intro: DOMAIN_INTROS.V4_BLOCO_1,
        items: [
          { type: 'chapter', key: 'DU' },
          { type: 'chapter', key: 'AR' },
          { type: 'chapter', key: 'AY' },
          { type: 'chapter', key: 'DX' },
        ],
      },
      {
        h1: 'VENDAS CONSULTIVAS, PRICING, RECEITA RECORRENTE E SUCESSO DO CLIENTE (CAPÍTULOS 5 A 8)',
        tocGroup: 'Vendas Consultivas, Pricing, Receita Recorrente e Sucesso do Cliente (Capítulos 5 a 8)',
        intro: DOMAIN_INTROS.V4_BLOCO_2,
        items: [
          { type: 'chapter', key: 'CP' },
          { type: 'chapter', key: 'X' },
          { type: 'chapter', key: 'DS' },
          { type: 'chapter', key: 'AA' },
        ],
      },
      {
        h1: 'INSTRUMENTAÇÃO DE DADOS, PRODUTO AI-NATIVE E ANATOMIA DO PIVÔ (CAPÍTULOS 9 A 11)',
        tocGroup: 'Instrumentação de Dados, Produto AI-Native e Anatomia do Pivô (Capítulos 9 a 11)',
        intro: DOMAIN_INTROS.V4_BLOCO_3,
        items: [
          { type: 'chapter', key: 'AO' },
          { type: 'chapter', key: 'Z' },
          { type: 'chapter', key: 'CL' },
        ],
      },
    ],
  },
  {
    num: 5,
    slug: 'IGNICAO-Vol-5-Financas-e-Captacao',
    title: 'IGNIÇÃO: Volume 5: Finanças, Captação e Venture Capital',
    subtitle: 'Contabilidade, Reforma Tributária, FP&A, Comércio Exterior, Caixa e Rodadas de Investimento (Fase 14 e Capítulos 1 a 15)',
    about:
      'Manual do CEO e do CFO para finanças operacionais, contabilidade, tributário, comércio exterior, estruturação de capital e captação de recursos no Brasil. Abre com a Fase 14 (Capital para Escala, Rodadas e Eficiência Financeira), que reúne 11 frameworks financeiros e de valuation (Unit Economics, Coortes, LTV:CAC, Burn Multiple, Rule of 40, Magic Number, Quick Ratio, CCC, DCF, Comparables e DuPont), os canvases Storytelling/SCQA e Capital Stack/Waterfall e 6 templates completos de rodada (Data Room, Term Sheet Anotado, Plano de Rodada, Pitch Deck SCQA, Investor Update e Financiamento Não Diluitivo). Em seguida, apresenta 15 capítulos em ordem de execução: demonstrativos financeiros, contabilidade e Reforma Tributária (IBS/CBS), modelagem operacional e coortes, FP&A e projeção de receita, capital de giro e gestão de caixa, relacionamento bancário, Comércio Exterior e Importação (Ásia-Brasil, Radar/SISCOMEX, Landed Cost e benefícios estaduais de ICMS), seguros corporativos, Venture Capital e planejamento de rodada, valuation, SAFE e mútuo conversível, fomento não diluitivo (FINEP, BNDES e FAPESP), venture debt, crowdfunding CVM 88 / tokenização e relação com investidores.',
    blocks: [
      {
        h1: 'FASE DA ETAPA — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA (FASE 14)',
        tocGroup: 'Fase da Etapa (Fase 14)',
        intro: DOMAIN_INTROS.V5_FASES,
        items: [{ type: 'phase', key: 'FASE_14D' }],
      },
      {
        h1: 'FINANÇAS OPERACIONAIS, CONTABILIDADE, REFORMA TRIBUTÁRIA, MODELAGEM E FP&A (CAPÍTULOS 1 A 4)',
        tocGroup: 'Finanças Operacionais, Contabilidade, Reforma Tributária, Modelagem e FP&A (Capítulos 1 a 4)',
        intro: DOMAIN_INTROS.V5_BLOCO_1,
        items: [
          { type: 'chapter', key: 'DR' },
          { type: 'chapter', key: 'W' },
          { type: 'chapter', key: 'AN' },
          { type: 'chapter', key: 'EC' },
        ],
      },
      {
        h1: 'CAPITAL DE GIRO, CRÉDITO BANCÁRIO, COMÉRCIO EXTERIOR, CAIXA E SEGUROS (CAPÍTULOS 5 A 8)',
        tocGroup: 'Capital de Giro, Crédito Bancário, Comércio Exterior, Caixa e Seguros (Capítulos 5 a 8)',
        intro: DOMAIN_INTROS.V5_BLOCO_2,
        items: [
          { type: 'chapter', key: 'EZ' },
          { type: 'chapter', key: 'FA' },
          { type: 'chapter', key: 'NEW_COMEX' },
          { type: 'chapter', key: 'EY' },
        ],
      },
      {
        h1: 'CAPTAÇÃO DE CAPITAL, VENTURE CAPITAL, VALUATION E ALTERNATIVAS (CAPÍTULOS 9 A 15)',
        tocGroup: 'Captação de Capital, Venture Capital, Valuation e Alternativas (Capítulos 9 a 15)',
        intro: DOMAIN_INTROS.V5_BLOCO_3,
        items: [
          { type: 'chapter', key: 'V' },
          { type: 'chapter', key: 'CE' },
          { type: 'chapter', key: 'DF' },
          { type: 'chapter', key: 'P' },
          { type: 'chapter', key: 'BB' },
          { type: 'chapter', key: 'CI' },
          { type: 'chapter', key: 'DD' },
        ],
      },
    ],
  },
  {
    num: 6,
    slug: 'IGNICAO-Vol-6-Receita-e-Pessoas',
    title: 'IGNIÇÃO: Volume 6: Receita Enterprise, Liderança e Cultura',
    subtitle: 'Máquina Comercial em Escala, RevOps, Franchising, Liderança Executiva, Talentos e ESOP (Fases 15 e 16 e Capítulos 1 a 15)',
    about:
      'Volume dedicado à construção da máquina comercial Enterprise, canais de distribuição/franquias e evolução de liderança, pessoas e cultura na scaleup. Abre com a Fase 15 (Máquina de Crescimento e Expansão em Escala) e a Fase 16 (Time, Liderança Executiva e Cultura em Escala) — trazendo embutidos todos os 25 frameworks de metodologias de vendas (MEDDPICC, SPIN, Challenger, Sandler, Solution, BANT, Command of the Message), growth em escala e liderança (Radical Candor, Lencioni, Topgrading, Who, Horowitz, Culture Code, Netflix, SPADE, 7S, etc.) e 6 templates práticos —, seguidas por 15 capítulos sobre Growth, vendas Enterprise, RevOps, Business Development e vendas corporativas, canais indiretos, Franchising e Licenciamento de Redes (Lei 13.966/2019 e COF), marca, PR e comunicação do fundador, Founder Mode e cadência operacional, contratação C-level, avaliação de performance, compensação, Stock Options (ESOP), cultura em escala, diversidade e trabalho remoto/híbrido.',
    blocks: [
      {
        h1: 'FASES DA ETAPA — ESCALA COMERCIAL, LIDERANÇA E CULTURA (FASES 15 E 16)',
        tocGroup: 'Fases da Etapa (Fases 15 e 16)',
        intro: DOMAIN_INTROS.V6_FASES,
        items: [
          { type: 'phase', key: 'FASE_14C' },
          { type: 'phase', key: 'FASE_14A' },
        ],
      },
      {
        h1: 'CRESCIMENTO EM ESCALA, VENDAS ENTERPRISE, REVOPS, PARCERIAS, FRANQUIAS E MARCA (CAPÍTULOS 1 A 7)',
        tocGroup: 'Crescimento em Escala, Vendas Enterprise, RevOps, Parcerias, Franquias e Marca (Capítulos 1 a 7)',
        intro: DOMAIN_INTROS.V6_BLOCO_1,
        items: [
          { type: 'chapter', key: 'CG' },
          { type: 'chapter', key: 'EB' },
          { type: 'chapter', key: 'EH' },
          { type: 'chapter', key: 'DY' },
          { type: 'chapter', key: 'CX' },
          { type: 'chapter', key: 'NEW_FRANCHISING' },
          { type: 'chapter', key: 'CQ' },
        ],
      },
      {
        h1: 'LIDERANÇA EXECUTIVA, CONTRATAÇÃO SÊNIOR, REMUNERAÇÃO, ESOP E CULTURA (CAPÍTULOS 8 A 15)',
        tocGroup: 'Liderança Executiva, Contratação Sênior, Remuneração, ESOP e Cultura (Capítulos 8 a 15)',
        intro: DOMAIN_INTROS.V6_BLOCO_2,
        items: [
          { type: 'chapter', key: 'R' },
          { type: 'chapter', key: 'BN' },
          { type: 'chapter', key: 'BZ' },
          { type: 'chapter', key: 'ED' },
          { type: 'chapter', key: 'DB' },
          { type: 'chapter', key: 'AP' },
          { type: 'chapter', key: 'BU' },
          { type: 'chapter', key: 'AG' },
        ],
      },
    ],
  },
  {
    num: 7,
    slug: 'IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes',
    title: 'IGNIÇÃO: Volume 7: Produto, Engenharia, Dados, IA e Operações',
    subtitle: 'Discovery Contínuo, Gestão Técnica, Dívida Técnica, AI Ops e Design Organizacional (Fase 17 e Capítulos 1 a 10)',
    about:
      'O manual operacional do CTO, do CPO e do COO na scaleup brasileira. Abre com a Fase 17 (Operações, Processos e Gestão em Escala) — trazendo embutidos todos os 20 frameworks mundiais de produto e operações (Continuous Discovery, Shape Up, Working Backwards PR/FAQ, Stage-Gate, Dual-Track Agile, OKRs, V2MOM, EOS, Scaling Up, MBO, Scrum, Kanban, DORA & SPACE, Amazon 6-Pager, WBR, 4DX, SIPOC, Value Stream Mapping, Toyota Kata e Spotify Model), o canvas Org Chart Evolution e 3 templates operacionais —, seguida por 10 capítulos sobre produto em múltiplos squads, transição do fundador técnico para gestão, recrutamento técnico, Engineering Management, DevEx e dívida técnica, IA na engenharia de software, AI Ops, design organizacional, gestão do conhecimento, comunicação interna e excelência operacional.',
    blocks: [
      {
        h1: 'FASE DA ETAPA — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA (FASE 17)',
        tocGroup: 'Fase da Etapa (Fase 17)',
        intro: DOMAIN_INTROS.V7_FASES,
        items: [{ type: 'phase', key: 'FASE_14B' }],
      },
      {
        h1: 'PRODUTO EM ESCALA, ENGENHARIA DE SOFTWARE, DÍVIDA TÉCNICA E IA (CAPÍTULOS 1 A 6)',
        tocGroup: 'Produto em Escala, Engenharia de Software, Dívida Técnica e IA (Capítulos 1 a 6)',
        intro: DOMAIN_INTROS.V7_BLOCO_1,
        items: [
          { type: 'chapter', key: 'AB' },
          { type: 'chapter', key: 'DW' },
          { type: 'chapter', key: 'CO' },
          { type: 'chapter', key: 'CR' },
          { type: 'chapter', key: 'CH' },
          { type: 'chapter', key: 'EI' },
        ],
      },
      {
        h1: 'ARQUITETURA ORGANIZACIONAL, CONHECIMENTO, COMUNICAÇÃO E OPERAÇÕES (CAPÍTULOS 7 A 10)',
        tocGroup: 'Arquitetura Organizacional, Conhecimento, Comunicação e Operações (Capítulos 7 a 10)',
        intro: DOMAIN_INTROS.V7_BLOCO_2,
        items: [
          { type: 'chapter', key: 'FB' },
          { type: 'chapter', key: 'FC' },
          { type: 'chapter', key: 'DZ' },
          { type: 'chapter', key: 'DV' },
        ],
      },
    ],
  },
  {
    num: 8,
    slug: 'IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca',
    title: 'IGNIÇÃO: Volume 8: Blindagem Jurídica, Societária, LGPD e Segurança',
    subtitle: 'Estruturação Societária, Contratos, Trabalhista, Propriedade Intelectual, Compliance e Cibersegurança (Fase 18 e Capítulos 1 a 13)',
    about:
      'O manual jurídico, societário, regulatório e de segurança da informação para fundadores, executivos e advogados de startups no Brasil. Abre com a Fase 18 (Estruturação Jurídica, Societária e Blindagem Operacional — os 10 passos de formalização, acordo de sócios, propriedade intelectual, contratos, LGPD e proteção patrimonial, com o caso aplicado da PadariaPro LTDA), seguida por 13 capítulos em profundidade sobre o Marco Legal das Startups (LC 182/2021), responsabilidade pessoal dos sócios e desconsideração da personalidade jurídica, registro de marcas, patentes e software no INPI, cláusulas de non-compete, contratos empresariais e operacionais, direito do trabalho para startups (CLT vs. PJ e passivos), CDC aplicado a produtos digitais, contencioso estratégico, LGPD e governança de dados, regulação de IA, compliance anticorrupção, prevenção a fraudes internas e certificações SOC 2 e ISO 27001.',
    blocks: [
      {
        h1: 'FASE DA ETAPA — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL (FASE 18)',
        tocGroup: 'Fase da Etapa (Fase 18)',
        intro: DOMAIN_INTROS.V8_FASES,
        items: [{ type: 'phase', key: 'FASE_13' }],
      },
      {
        h1: 'SOCIEDADE, MARCO LEGAL, PROPRIEDADE INTELECTUAL E PROTEÇÃO DOS SÓCIOS (CAPÍTULOS 1 A 4)',
        tocGroup: 'Sociedade, Marco Legal, Propriedade Intelectual e Proteção dos Sócios (Capítulos 1 a 4)',
        intro: DOMAIN_INTROS.V8_BLOCO_1,
        items: [
          { type: 'chapter', key: 'DA' },
          { type: 'chapter', key: 'EP' },
          { type: 'chapter', key: 'DC' },
          { type: 'chapter', key: 'DJ' },
        ],
      },
      {
        h1: 'CONTRATOS EMPRESARIAIS, DIREITO DO TRABALHO, CDC E CONTENCIOSO (CAPÍTULOS 5 A 8)',
        tocGroup: 'Contratos Empresariais, Direito do Trabalho, CDC e Contencioso (Capítulos 5 a 8)',
        intro: DOMAIN_INTROS.V8_BLOCO_2,
        items: [
          { type: 'chapter', key: 'EU' },
          { type: 'chapter', key: 'EL' },
          { type: 'chapter', key: 'EQ' },
          { type: 'chapter', key: 'EO' },
        ],
      },
      {
        h1: 'LGPD, REGULAÇÃO DE IA, COMPLIANCE, PREVENÇÃO A FRAUDES E CIBERSEGURANÇA (CAPÍTULOS 9 A 13)',
        tocGroup: 'LGPD, Regulação de IA, Compliance, Prevenção a Fraudes e Cibersegurança (Capítulos 9 a 13)',
        intro: DOMAIN_INTROS.V8_BLOCO_3,
        items: [
          { type: 'chapter', key: 'T' },
          { type: 'chapter', key: 'ET' },
          { type: 'chapter', key: 'EM' },
          { type: 'chapter', key: 'BW' },
          { type: 'chapter', key: 'CV' },
        ],
      },
    ],
  },
  {
    num: 9,
    slug: 'IGNICAO-Vol-9-Maturidade-e-Exit',
    title: 'IGNIÇÃO: Volume 9: Maturidade, Governança, Crise, Exit e Family Office',
    subtitle: 'Segunda Curva, Conselho (Board), Internacionalização, Crise, Spin-offs, M&A, IPO, Cash Cow e Family Office (Fases 19 e 20, Capítulos 1 a 21 e Epílogo)',
    about:
      'Volume sobre o ciclo longo da companhia consolidada, governança de conselho, expansão internacional, sobrevivência a crises severas, execução de saída (exit), geração perpétua de dividendos (Cash Cow) e gestão patrimonial em Family Office. Abre com a Fase 19 (Reinvenção e Segunda Curva) e a Fase 20 (Estratégia de Saída / Exit Strategy) — trazendo embutidos todos os 8 frameworks de planejamento de longo prazo e inovação (Scenario Planning, Hoshin Kanri, OGSM, Balanced Scorecard, Innovator\'s Dilemma, Ambidextrous Organization, Open Innovation e S-Curves), o Wardley Map Canvas e o template de Board Deck —, seguidas por 21 capítulos em ordem cronológica sobre Board Management, empresas familiares e sucessão, conflito societário, ESG/Sistema B, internacionalização e Cayman/Delaware Flip, imigração/vistos, hedge cambial, tesouraria multi-moeda, gestão e comunicação em crise, layoffs, recuperação judicial e wind-down, M&A buy-side e roll-ups, Search Funds (ETA), Spin-offs e Carve-outs Corporativos, Liquidez Secundária (Secondaries unificado), IPO na B3 e Nasdaq/NYSE, tributação de exit na pessoa física, transição pós-M&A, retenção e earnout, post-mortems brasileiros, second-time founders, a Empresa Cash Cow (dividendos vitalícios com CEO profissional) + Holdings Patrimoniais, Offshores (Lei 14.754/2023) e Family Office pós-liquidez, e o Epílogo da coleção.',
    blocks: [
      {
        h1: 'FASES DA ETAPA — MATURIDADE, SEGUNDA CURVA E ESTRATÉGIA DE SAÍDA (FASES 19 E 20)',
        tocGroup: 'Fases da Etapa (Fases 19 e 20)',
        intro: DOMAIN_INTROS.V9_FASES,
        items: [
          { type: 'phase', key: 'FASE_15' },
          { type: 'phase', key: 'FASE_16' },
        ],
      },
      {
        h1: 'GOVERNANÇA CORPORATIVA, BOARD, SUCESSÃO E SOCIEDADE (CAPÍTULOS 1 A 4)',
        tocGroup: 'Governança Corporativa, Board, Sucessão e Sociedade (Capítulos 1 a 4)',
        intro: DOMAIN_INTROS.V9_BLOCO_1,
        items: [
          { type: 'chapter', key: 'AM' },
          { type: 'chapter', key: 'BI' },
          { type: 'chapter', key: 'BP' },
          { type: 'chapter', key: 'AF' },
        ],
      },
      {
        h1: 'INTERNACIONALIZAÇÃO, IMIGRAÇÃO, CÂMBIO E TESOURARIA MULTI-MOEDA (CAPÍTULOS 5 A 8)',
        tocGroup: 'Internacionalização, Imigração, Câmbio e Tesouraria Multi-Moeda (Capítulos 5 a 8)',
        intro: DOMAIN_INTROS.V9_BLOCO_2,
        items: [
          { type: 'chapter', key: 'CU' },
          { type: 'chapter', key: 'BS' },
          { type: 'chapter', key: 'BT' },
          { type: 'chapter', key: 'BY' },
        ],
      },
      {
        h1: 'GESTÃO DE CRISE, COMUNICAÇÃO CRÍTICA, LAYOFFS E RECUPERAÇÃO JUDICIAL (CAPÍTULOS 9 A 11)',
        tocGroup: 'Gestão de Crise, Comunicação Crítica, Layoffs e Recuperação Judicial (Capítulos 9 a 11)',
        intro: DOMAIN_INTROS.V9_BLOCO_3,
        items: [
          { type: 'chapter', key: 'CW' },
          { type: 'chapter', key: 'BV' },
          { type: 'chapter', key: 'ES' },
        ],
      },
      {
        h1: 'M&A, SEARCH FUNDS, SPIN-OFFS, LIQUIDEZ SECUNDÁRIA, IPO, TRIBUTAÇÃO, PÓS-EXIT, CASH COW E FAMILY OFFICE (CAPÍTULOS 12 A 21)',
        tocGroup: 'M&A, Search Funds, Spin-offs, Liquidez Secundária, IPO, Tributação, Pós-Exit, Cash Cow e Family Office (Capítulos 12 a 21)',
        intro: DOMAIN_INTROS.V9_BLOCO_4,
        items: [
          { type: 'chapter', key: 'BJ' },
          { type: 'chapter', key: 'BL' },
          { type: 'chapter', key: 'NEW_SPINOFF_CARVEOUT' },
          { type: 'chapter', key: 'BA' },
          { type: 'chapter', key: 'DE' },
          { type: 'chapter', key: 'DG' },
          { type: 'chapter', key: 'BR' },
          { type: 'chapter', key: 'BH' },
          { type: 'chapter', key: 'BF' },
          { type: 'chapter', key: 'NEW_CASHCOW_FAMILY_OFFICE' },
        ],
      },
      {
        h1: 'ENCERRAMENTO DA JORNADA EMPREENDEDORA',
        tocGroup: 'Encerramento',
        intro: DOMAIN_INTROS.V9_EPILOGO,
        items: [{ type: 'ref', key: 'EPÍLOGO', newHeading: 'EPÍLOGO' }],
      },
    ],
  },
  {
    num: 10,
    slug: 'IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario',
    title: 'IGNIÇÃO: Volume 10: Economia da Inovação, Hubs Globais e Playbooks das 42 Verticais',
    subtitle: 'Ecossistemas, Geografia de Hubs por Continente, Regulação, 42 Verticais da Economia Real e Dicionário da Coleção (Capítulos 1 a 48 e Índices)',
    about:
      'Volume de fechamento da coleção IGNIÇÃO, reunindo três acervos essenciais e sem excessos: (1) a Economia da Inovação e seus Atores (Universidades/ICTs, Governo/Fomento, Corporações/CVC, Venture Studios e toda a escada do Capital de Risco), a Geografia Mundial da Inovação por Continente (América do Norte, Europa, Ásia-Pacífico, Oriente Médio, África e América Latina), as 5 vantagens competitivas estruturais do Brasil e a radiografia dos 15 principais Hubs de Inovação Brasileiros, seguidos pelo quadro macroeconômico, autarquias reguladoras (BACEN, CVM, SUSEP, ANVISA, ANS, ANATEL, ANEEL, ANP), CADE/Antitruste e Políticas Públicas (Capítulos 1 a 6); (2) os 42 Playbooks Setoriais completos cobrindo todas as grandes verticais, setores primários, extrativistas, commodities e máquinas de caixa da economia real (Capítulos 7 a 48); e (3) o Dicionário, a Bibliografia e os Índices Gerais Unificados da Coleção.',
    blocks: [
      {
        h1: 'ECONOMIA DA INOVAÇÃO, GEOGRAFIA MUNDIAL DE HUBS, MACROECONOMIA E REGULAÇÃO (CAPÍTULOS 1 A 6)',
        tocGroup: 'Economia da Inovação, Geografia Mundial de Hubs, Macroeconomia e Regulação (Capítulos 1 a 6)',
        intro: DOMAIN_INTROS.V10_BLOCO_1,
        items: [
          { type: 'chapter', key: 'NEW_ECON_INOVACAO' },
          { type: 'chapter', key: 'NEW_GEOGRAFIA_HUBS' },
          { type: 'chapter', key: 'EF' },
          { type: 'chapter', key: 'AW' },
          { type: 'chapter', key: 'ER' },
          { type: 'chapter', key: 'FE' },
        ],
      },
      {
        h1: 'CLUSTER I — SERVIÇOS FINANCEIROS, CRÉDITO, SEGUROS E MERCADO DE CAPITAIS (CAPÍTULOS 7 A 10)',
        tocGroup: 'Cluster I — Serviços Financeiros, Crédito, Seguros e Mercado de Capitais (Capítulos 7 a 10)',
        intro: DOMAIN_INTROS.V10_CLUSTER_1,
        items: [
          { type: 'chapter', key: 'V_FINTECH' },
          { type: 'chapter', key: 'V_CREDITO' },
          { type: 'chapter', key: 'V_INSURTECH' },
          { type: 'chapter', key: 'V_WEALTHTECH' },
        ],
      },
      {
        h1: 'CLUSTER II — AGRO, PECUÁRIA/AQUICULTURA, COMMODITIES/TRADING, BIOCOMBUSTÍVEIS/BIOECONOMIA, INFRAESTRUTURA, ENERGIA, RESÍDUOS/FLORESTAL, MINERAÇÃO E INDÚSTRIA (CAPÍTULOS 11 A 21)',
        tocGroup: 'Cluster II — Agro, Pecuária/Aquicultura, Commodities/Trading, Biocombustíveis/Bioeconomia, Infra, Energia, Resíduos, Mineração e Indústria (Capítulos 11 a 21)',
        intro: DOMAIN_INTROS.V10_CLUSTER_2,
        items: [
          { type: 'chapter', key: 'DL' },
          { type: 'chapter', key: 'V_PECTECH_AQUATECH' },
          { type: 'chapter', key: 'V_COMMODITIES_TRADING' },
          { type: 'chapter', key: 'V_BIOFUELS_BIOECONOMY' },
          { type: 'chapter', key: 'V_INFRATECH' },
          { type: 'chapter', key: 'V_ENERGYTECH' },
          { type: 'chapter', key: 'DN' },
          { type: 'chapter', key: 'V_WASTE_FORESTRY' },
          { type: 'chapter', key: 'V_MINING_OIL' },
          { type: 'chapter', key: 'V_INDUSTRIA40' },
          { type: 'chapter', key: 'CA' },
        ],
      },
      {
        h1: 'CLUSTER III — LOGÍSTICA, MOBILIDADE, CONSÓRCIOS/RENTAL/AFTERMARKET, IMOBILIÁRIO, SEGURANÇA/FACILITIES, TELECOM/DATA CENTERS E AEROESPACIAL (CAPÍTULOS 22 A 28)',
        tocGroup: 'Cluster III — Logística, Mobilidade, Consórcios/Rental/Aftermarket, Imobiliário, Segurança/Facilities, Telecom/Data Centers e Aeroespacial (Capítulos 22 a 28)',
        intro: DOMAIN_INTROS.V10_CLUSTER_3,
        items: [
          { type: 'chapter', key: 'DQ' },
          { type: 'chapter', key: 'V_MOBITECH' },
          { type: 'chapter', key: 'V_CONSORCIO_RENTAL_AUTO' },
          { type: 'chapter', key: 'DO' },
          { type: 'chapter', key: 'V_SECURITY_FACILITIES' },
          { type: 'chapter', key: 'V_TELECOM_DATACENTER' },
          { type: 'chapter', key: 'V_AEROSPACE' },
        ],
      },
      {
        h1: 'CLUSTER IV — SAÚDE DIGITAL E BIOTECH, SAÚDE FÍSICA PRIVADA (CLÍNICAS, ODONTO, ESTÉTICA, DIAGNÓSTICO, FARMA E OPME), EDUCAÇÃO, GOVERNO E SETOR JURÍDICO (CAPÍTULOS 29 A 33)',
        tocGroup: 'Cluster IV — Saúde Digital e Biotech, Saúde Física Privada (Clínicas, Odonto, Estética, Diagnóstico, Farma e OPME), Educação, Governo e Setor Jurídico (Capítulos 29 a 33)',
        intro: DOMAIN_INTROS.V10_CLUSTER_4,
        items: [
          { type: 'chapter', key: 'CM' },
          { type: 'chapter', key: 'V_CLINICAS_ODONTO_FARMA_OPME' },
          { type: 'chapter', key: 'DM' },
          { type: 'chapter', key: 'DK' },
          { type: 'chapter', key: 'DP' },
        ],
      },
      {
        h1: 'CLUSTER V — VAREJO, ALIMENTAÇÃO, BENS DE CONSUMO (D2C), TURISMO, PET, LONGEVIDADE E SETOR FUNERÁRIO/ASSISTENCIAL (CAPÍTULOS 34 A 38)',
        tocGroup: 'Cluster V — Varejo, Alimentação, Bens de Consumo (D2C), Turismo, Pet, Longevidade e Setor Funerário/Assistencial (Capítulos 34 a 38)',
        intro: DOMAIN_INTROS.V10_CLUSTER_5,
        items: [
          { type: 'chapter', key: 'V_RETAILTECH' },
          { type: 'chapter', key: 'V_FOODTECH' },
          { type: 'chapter', key: 'V_D2C_WELLNESS' },
          { type: 'chapter', key: 'V_TRAVEL_PET_SILVER' },
          { type: 'chapter', key: 'V_FUNERAL_DEATHTECH' },
        ],
      },
      {
        h1: 'CLUSTER VI — SOFTWARE CORPORATIVO (SAAS), SERVIÇOS B2B TECH-ENABLED, IA, CIBERSEGURANÇA, DEVTOOLS, RH, MARKETING, CREATOR ECONOMY E GAMES (CAPÍTULOS 39 A 48)',
        tocGroup: 'Cluster VI — Software Corporativo (SaaS), Serviços B2B Tech-Enabled, IA, Cibersegurança, DevTools, RH, Marketing, Creator Economy e Games (Capítulos 39 a 48)',
        intro: DOMAIN_INTROS.V10_CLUSTER_6,
        items: [
          { type: 'chapter', key: 'V_HORIZONTAL_SAAS' },
          { type: 'chapter', key: 'V_VERTICAL_SAAS' },
          { type: 'chapter', key: 'V_TECH_SERVICES' },
          { type: 'chapter', key: 'V_AI_NATIVE' },
          { type: 'chapter', key: 'V_CYBERSECURITY' },
          { type: 'chapter', key: 'V_DEVTOOLS_CLOUD' },
          { type: 'chapter', key: 'V_HRTECH' },
          { type: 'chapter', key: 'V_MARTECH_SALESTECH' },
          { type: 'chapter', key: 'V_CREATOR_MEDIA' },
          { type: 'chapter', key: 'V_GAMING_IGAMING' },
        ],
      },
      {
        h1: 'DICIONÁRIO GERAL, BIBLIOGRAFIA E ÍNDICES UNIFICADOS DA COLEÇÃO',
        tocGroup: 'Dicionário Geral, Bibliografia e Índices Unificados da Coleção',
        intro: DOMAIN_INTROS.V10_BLOCO_3,
        items: [
          {
            type: 'ref',
            key: 'APÊNDICE — DATA DE COMPILAÇÃO E NOTA SOBRE ENVELHECIMENTO',
            newHeading: 'DATA DE COMPILAÇÃO E NOTA SOBRE ENVELHECIMENTO',
          },
          {
            type: 'ref',
            key: 'APÊNDICE — GLOSSÁRIO DE TERMOS TÉCNICOS',
            newHeading: 'GLOSSÁRIO DE TERMOS TÉCNICOS',
          },
          {
            type: 'ref',
            key: 'APÊNDICE — LISTA DE ABREVIAÇÕES',
            newHeading: 'LISTA DE ABREVIAÇÕES',
          },
          {
            type: 'ref',
            key: 'APÊNDICE: BIBLIOGRAFIA',
            newHeading: 'BIBLIOGRAFIA GERAL',
          },
          {
            type: 'ref',
            key: 'APÊNDICE: ÍNDICE DE FRAMEWORKS',
            newHeading: 'ÍNDICE GERAL DE FRAMEWORKS DA COLEÇÃO',
          },
          {
            type: 'ref',
            key: 'APÊNDICE — ÍNDICE REMISSIVO',
            newHeading: 'ÍNDICE REMISSIVO',
          },
        ],
      },
    ],
  },
  {
    num: 11,
    slug: 'IGNICAO-Vol-11-Workbook-Cases-e-Exercicios',
    title: 'IGNIÇÃO: Volume 11: Caderno de Trincheira, Simulações de Decisão e Cases Globais & Nacionais',
    subtitle: '58 Cases Globais e Brasileiros Comentados, 50 Exercícios com Gabarito, 27 Roleplays Executivos e Simulador das 21 Fases (Capítulos 1 a 30)',
    about:
      'Volume prático de aplicação, simulação executiva e estudos de caso da coleção IGNIÇÃO, organizado em 10 partes que espelham os Volumes 1 a 10: reúne 58 cases globais e brasileiros estruturados em quatro atos (Contexto e Problema Real, Dilema na Mesa do Fundador, Engenharia da Decisão com Métricas e Tradução para a Realidade Brasileira em Outubro de 2026), 50 exercícios mão na massa com memória de cálculo passo a passo e gabarito comentado, 27 simulações de roleplay executivo comparando o caminho armadilha ao protocolo de alta precisão com rubrica de pontuação, e o Simulador Integrador de Ponta a Ponta das 21 Fases acompanhando a ForjaTech Sistemas Industriais S.A. do mês zero ao exit.',
    blocks: [
      {
        h1: 'PARTE I — IDEAÇÃO, COFUNDADORES, COGNIÇÃO E TESE INICIAL (ESPELHO DO VOLUME 1: CAPÍTULOS 1 A 3)',
        tocGroup: 'Parte I: Ideação, Cofundadores, Cognição e Tese Inicial (Capítulos 1 a 3)',
        intro: DOMAIN_INTROS.V11_BLOCO_1,
        items: [
          { type: 'chapter', key: 'V11_C1' },
          { type: 'chapter', key: 'V11_C2' },
          { type: 'chapter', key: 'V11_C3' },
        ],
      },
      {
        h1: 'PARTE II — DESCOBERTA DE CLIENTE, JTBD E CUNHA ESTRATÉGICA (ESPELHO DO VOLUME 2: CAPÍTULOS 4 A 6)',
        tocGroup: 'Parte II: Descoberta de Cliente, JTBD e Cunha Estratégica (Capítulos 4 a 6)',
        intro: DOMAIN_INTROS.V11_BLOCO_2,
        items: [
          { type: 'chapter', key: 'V11_C4' },
          { type: 'chapter', key: 'V11_C5' },
          { type: 'chapter', key: 'V11_C6' },
        ],
      },
      {
        h1: 'PARTE III — HIPÓTESES, EXPERIMENTOS, PROTOTIPAGEM E MODELOS DE NEGÓCIO (ESPELHO DO VOLUME 3: CAPÍTULOS 7 A 9)',
        tocGroup: 'Parte III: Hipóteses, Experimentos, Prototipagem e Modelos de Negócio (Capítulos 7 a 9)',
        intro: DOMAIN_INTROS.V11_BLOCO_3,
        items: [
          { type: 'chapter', key: 'V11_C7' },
          { type: 'chapter', key: 'V11_C8' },
          { type: 'chapter', key: 'V11_C9' },
        ],
      },
      {
        h1: 'PARTE IV — TRAÇÃO, GO-TO-MARKET, VENDAS CONSULTIVAS, PRICING E PMF (ESPELHO DO VOLUME 4: CAPÍTULOS 10 A 12)',
        tocGroup: 'Parte IV: Tração, Go-to-Market, Vendas Consultivas, Pricing e PMF (Capítulos 10 a 12)',
        intro: DOMAIN_INTROS.V11_BLOCO_4,
        items: [
          { type: 'chapter', key: 'V11_C10' },
          { type: 'chapter', key: 'V11_C11' },
          { type: 'chapter', key: 'V11_C12' },
        ],
      },
      {
        h1: 'PARTE V — FINANÇAS, TRIBUTÁRIO, FP&A, CAIXA E VENTURE CAPITAL (ESPELHO DO VOLUME 5: CAPÍTULOS 13 A 15)',
        tocGroup: 'Parte V: Finanças, Tributário, FP&A, Caixa e Venture Capital (Capítulos 13 a 15)',
        intro: DOMAIN_INTROS.V11_BLOCO_5,
        items: [
          { type: 'chapter', key: 'V11_C13' },
          { type: 'chapter', key: 'V11_C14' },
          { type: 'chapter', key: 'V11_C15' },
        ],
      },
      {
        h1: 'PARTE VI — RECEITA ENTERPRISE, REVOPS, FRANQUIAS, LIDERANÇA, TALENTOS E ESOP (ESPELHO DO VOLUME 6: CAPÍTULOS 16 A 18)',
        tocGroup: 'Parte VI: Receita Enterprise, RevOps, Franquias, Liderança, Talentos e ESOP (Capítulos 16 a 18)',
        intro: DOMAIN_INTROS.V11_BLOCO_6,
        items: [
          { type: 'chapter', key: 'V11_C16' },
          { type: 'chapter', key: 'V11_C17' },
          { type: 'chapter', key: 'V11_C18' },
        ],
      },
      {
        h1: 'PARTE VII — PRODUTO EM ESCALA, ENGENHARIA, DÍVIDA TÉCNICA, DADOS, IA E OPERAÇÕES (ESPELHO DO VOLUME 7: CAPÍTULOS 19 A 21)',
        tocGroup: 'Parte VII: Produto em Escala, Engenharia, Dívida Técnica, Dados, IA e Operações (Capítulos 19 a 21)',
        intro: DOMAIN_INTROS.V11_BLOCO_7,
        items: [
          { type: 'chapter', key: 'V11_C19' },
          { type: 'chapter', key: 'V11_C20' },
          { type: 'chapter', key: 'V11_C21' },
        ],
      },
      {
        h1: 'PARTE VIII — BLINDAGEM JURÍDICA, SOCIETÁRIA, CONTRATOS, TRABALHISTA, PI, LGPD E CIBERSEGURANÇA (ESPELHO DO VOLUME 8: CAPÍTULOS 22 A 24)',
        tocGroup: 'Parte VIII: Blindagem Jurídica, Societária, Contratos, Trabalhista, PI, LGPD e Cibersegurança (Capítulos 22 a 24)',
        intro: DOMAIN_INTROS.V11_BLOCO_8,
        items: [
          { type: 'chapter', key: 'V11_C22' },
          { type: 'chapter', key: 'V11_C23' },
          { type: 'chapter', key: 'V11_C24' },
        ],
      },
      {
        h1: 'PARTE IX — MATURIDADE, GOVERNANÇA DE CONSELHO, INTERNACIONALIZAÇÃO, CRISE, M&A, IPO E FAMILY OFFICE (ESPELHO DO VOLUME 9: CAPÍTULOS 25 A 27)',
        tocGroup: 'Parte IX: Maturidade, Governança de Conselho, Internacionalização, Crise, M&A, IPO e Family Office (Capítulos 25 a 27)',
        intro: DOMAIN_INTROS.V11_BLOCO_9,
        items: [
          { type: 'chapter', key: 'V11_C25' },
          { type: 'chapter', key: 'V11_C26' },
          { type: 'chapter', key: 'V11_C27' },
        ],
      },
      {
        h1: 'PARTE X — CASES SETORIAIS DA ECONOMIA REAL E SIMULADOR INTEGRADOR DAS 21 FASES (ESPELHO DO VOLUME 10: CAPÍTULOS 28 A 30)',
        tocGroup: 'Parte X: Cases Setoriais da Economia Real e Simulador Integrador das 21 Fases (Capítulos 28 a 30)',
        intro: DOMAIN_INTROS.V11_BLOCO_10,
        items: [
          { type: 'chapter', key: 'V11_C28' },
          { type: 'chapter', key: 'V11_C29' },
          { type: 'chapter', key: 'V11_C30' },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 6. Montar os 10 Volumes e registrar o mapa completo de redirecionamento de âncoras
// ---------------------------------------------------------------------------
const COLLECTION_MAP_MERMAID = `\`\`\`mermaid
graph LR
    subgraph J1["Do Zero à Validação"]
        V1["<b>Vol. 1: Ideação</b><br/>Fases 0 a 3 · Fundador e Teoria"]
        V2["<b>Vol. 2: Descoberta e Mercado</b><br/>Fases 4 a 6 · Cliente e Cunha"]
        V3["<b>Vol. 3: Hipóteses e Protótipo</b><br/>Fases 7 a 10 · Testes e Modelos"]
        V1 --> V2 --> V3
    end
    subgraph J2["Tração e Escala"]
        V4["<b>Vol. 4: Tração e PMF</b><br/>Fases 11 a 13 · MVP, GTM e Vendas"]
        V5["<b>Vol. 5: Finanças e Captação</b><br/>Fase 14 · Caixa, VC, Tributário e FP&A"]
        V6["<b>Vol. 6: Receita e Pessoas</b><br/>Fases 15 e 16 · Enterprise, Líderes e Cultura"]
        V7["<b>Vol. 7: Produto e Engenharia</b><br/>Fase 17 · Operações, IA e Arquitetura"]
        V8["<b>Vol. 8: Jurídico e Segurança</b><br/>Fase 18 · Societário, Contratos e LGPD"]
        V3 --> V4 --> V5 --> V6 --> V7 --> V8
    end
    subgraph J3["Ciclo Longo e Setores"]
        V9["<b>Vol. 9: Maturidade, Exit e Family Office</b><br/>Fases 19 e 20 · Board, Crise, M&A, IPO e Cash Cow"]
        V10["<b>Vol. 10: Economia da Inovação e 42 Verticais</b><br/>Hubs Globais, Regulação, 42 Setores e Dicionário"]
        V8 --> V9
    end
    V10 -. "Consulta Setorial e Dicionário" .-> J1
    V10 -. "Consulta Setorial e Dicionário" .-> J2
    V10 -. "Consulta Setorial e Dicionário" .-> J3
\`\`\``;

const SOBRE_ESTE_LIVRO_V1 = `## Sobre este livro

**IGNIÇÃO** é um manual operacional em **10 volumes** para fundadores e equipes executivas construindo empresas no Brasil, da preparação pessoal antes do CNPJ (Fase 0) até a segunda curva de crescimento, o *exit* via M&A ou IPO (Fase 20) ou a perenidade como máquina de dividendos (*Cash Cow* e *Family Office*).

Cada volume da coleção foi desenhado para funcionar como um **manual de oficina**: todos os **164 Frameworks passo a passo**, **20 Canvases Visuais preenchidos com reconstruções didáticas de casos brasileiros**, **39 Templates operacionais prontos para uso**, **Tabelas de Métricas** e **Guias de Leitura** estão integrados diretamente dentro das Fases e Capítulos onde são executados (com presença local das ferramentas compartilhadas que garantem a leitura autocontida de cada volume) e com o Dicionário Geral Unificado no Volume 10.

A coleção está organizada em **10 volumes focais (21 Fases e 155 Capítulos)**:

- **Volume 1: Ideação e Fundação (este volume):** Fases 0 a 3 e 12 Capítulos de preparação financeira e mental do fundador, dinâmica de cofundadores, vieses, tomada de decisão, comunicação, produtividade e stack de IA, aceleradoras e mentores.
- **Volume 2: Descoberta de Cliente e Mapeamento de Mercado:** Fases 4 a 6 e 3 Capítulos de psicologia do consumidor brasileiro, inteligência competitiva e Category Design, e casos de fracasso brasileiros.
- **Volume 3: Hipóteses, Experimentos, Prototipagem e Modelos de Negócio:** Fases 7 a 10 e 7 Capítulos sobre método científico, gates de evidência, TRL/CRL e fechamento de fase, o framework *Idea → Wedge → Scale* e as arquiteturas de Marketplaces e Plataformas, B2B2C, Open Source (COSS) e Bootstrapping / *Productized Services* (transição *Service-to-Product*).
- **Volume 4: Tração, Go-to-Market e Product-Market Fit:** Fases 11 a 13 e 11 Capítulos de GTM e canais de aquisição, marketing de conteúdo e comunidade, mídia paga, branding e PMM, vendas consultivas, pricing e recorrência, negociação, Customer Success e CX, analytics, produto AI-native e pivô.
- **Volume 5: Finanças, Captação e Venture Capital:** Fase 14 e 15 Capítulos de demonstrativos financeiros, contabilidade e Reforma Tributária, modelagem operacional e coortes, FP&A e *forecasting*, capital de giro e gestão de caixa, bancos, Comércio Exterior e Importação (Ásia-Brasil), seguros, captação de VC e planejamento de rodada, *valuation*, SAFE/mútuo, fomento não diluitivo, *venture debt*, *crowdfunding*/tokenização e *Investor Relations*.
- **Volume 6: Receita Enterprise, Liderança e Cultura:** Fases 15 e 16 e 15 Capítulos de Growth em escala, vendas Enterprise, RevOps, Business Development e parcerias corporativas, canais indiretos, Franchising e Licenciamento (Lei 13.966/2019), marca, PR e autoridade do fundador, Founder Mode e cadência operacional, contratação C-level, performance, remuneração, ESOP, cultura em escala, diversidade e trabalho remoto/híbrido.
- **Volume 7: Produto, Engenharia, Dados, IA e Operações:** Fase 17 e 10 Capítulos de discovery contínuo, transição do fundador técnico, recrutamento técnico, gestão de engenharia e dívida técnica, IA na engenharia de software, AI Ops, design organizacional, gestão do conhecimento, comunicação interna e excelência operacional.
- **Volume 8: Blindagem Jurídica, Societária, LGPD e Segurança:** Fase 18 e 13 Capítulos de Marco Legal das Startups, responsabilidade dos sócios, propriedade intelectual/INPI, non-compete, contratos empresariais e operacionais, direito do trabalho, CDC, contencioso, LGPD, regulação de IA, compliance, prevenção a fraudes e SOC 2 / ISO 27001.
- **Volume 9: Maturidade, Governança, Crise, Exit e Family Office:** Fases 19 e 20 e 21 Capítulos de Conselho de Administração (Board), empresas familiares, conflitos societários, ESG, internacionalização, imigração, câmbio/tesouraria, gestão e comunicação de crise, layoffs, recuperação judicial, M&A buy-side, Search Funds, Spin-offs e Carve-outs, Liquidez Secundária (Secondaries), IPO, tributação de exit, transição e retenção pós-M&A, post-mortems, second-time founders e a Empresa *Cash Cow* (dividendos vitalícios) com Holdings Patrimoniais, Offshores e *Family Office*, encerrando com o Epílogo.
- **Volume 10: Economia da Inovação, Hubs Globais e Playbooks das 42 Verticais:** 48 Capítulos cobrindo a Economia da Inovação e seus Atores, a Geografia Mundial de Hubs por Continente e os 15 Polos Brasileiros, Ciclos Macroeconômicos, Autarquias Reguladoras, CADE, Políticas Públicas e os **42 Playbooks Setoriais** da economia real, seguidos pelo Dicionário e Índices Unificados da Coleção.

---

${APRESENTACAO_ARQUETIPOS_MD}

---

${FAST_TRACKS_MD}`;

// Mapas de resolução de links e referências
const oldAnchorToNew = new Map(); // slugify(oldAnchor) -> { volNum, volSlug, heading, displayLabel }
const oldCodeToChapterInfo = new Map(); // 'AJ' -> { volNum, volSlug, chapNum, cleanTitle, heading }
const oldPhaseToNewInfo = new Map(); // 'FASE_2B' -> { volNum, volSlug, newNum, heading }

// Registrar onde cada BG.X.Y, CZ.N, A.N foi embutido (primário global + mapa por volume)
const embeddedItemLocation = new Map(); // 'BG.1.1' | 'CZ.1' | 'A.1' -> { volNum, volSlug, phaseNewNum, heading, title }
const perVolEmbeddedItemLocation = new Map(); // volNum -> Map(code -> { volNum, volSlug, phaseNewNum, chapNum, heading, title })

function registerItemInVol(volNum, volSlug, code, locObj, isPrimary) {
  if (!perVolEmbeddedItemLocation.has(volNum)) {
    perVolEmbeddedItemLocation.set(volNum, new Map());
  }
  const vMap = perVolEmbeddedItemLocation.get(volNum);
  if (!vMap.has(code)) {
    vMap.set(code, locObj);
  }
  if (isPrimary || !embeddedItemLocation.has(code)) {
    embeddedItemLocation.set(code, locObj);
  }
}

function getItemLocForVol(code, currentVolNum) {
  const uCode = code.toUpperCase();
  const vMap = perVolEmbeddedItemLocation.get(currentVolNum);
  if (vMap && vMap.has(uCode)) {
    return vMap.get(uCode);
  }
  return embeddedItemLocation.get(uCode) || null;
}

for (const vSpec of VOLUMES_SPEC) {
  let chapCounter = 0;
  for (const b of vSpec.blocks) {
    for (const item of b.items) {
      if (item.type === 'phase') {
        const cfg = PHASE_CONFIG[item.key];
        const origSec = rawSections.get(item.key);
        oldPhaseToNewInfo.set(item.key, {
          volNum: vSpec.num,
          volSlug: vSpec.slug,
          newNum: cfg.newNum,
          heading: cfg.newHeading,
        });
        if (origSec) {
          oldAnchorToNew.set(slugify(origSec.heading), {
            volNum: vSpec.num,
            volSlug: vSpec.slug,
            heading: cfg.newHeading,
            displayLabel: `Fase ${cfg.newNum}`,
          });
        }
        oldAnchorToNew.set(slugify(cfg.newHeading), {
          volNum: vSpec.num,
          volSlug: vSpec.slug,
          heading: cfg.newHeading,
          displayLabel: `Fase ${cfg.newNum}`,
        });

        const allBgs = [
          ...cfg.bgs.map((c) => ({ code: c, primary: true })),
          ...(cfg.sharedBgs || []).map((c) => ({ code: c, primary: false })),
        ];
        for (const { code: bgCode, primary } of allBgs) {
          const bgObj = bgItems.get(bgCode);
          const locObj = {
            volNum: vSpec.num,
            volSlug: vSpec.slug,
            phaseNewNum: cfg.newNum,
            chapNum: null,
            heading: bgObj.heading,
            title: bgObj.title,
          };
          registerItemInVol(vSpec.num, vSpec.slug, bgCode, locObj, primary);
          if (primary || !oldAnchorToNew.has(slugify(bgCode))) {
            oldAnchorToNew.set(slugify(`${bgCode} — ${bgObj.title}`), {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              heading: bgObj.heading,
              displayLabel: `${bgObj.title} (Fase ${cfg.newNum})`,
              itemCode: bgCode,
            });
            oldAnchorToNew.set(slugify(bgCode), {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              heading: bgObj.heading,
              displayLabel: `${bgObj.title} (Fase ${cfg.newNum})`,
              itemCode: bgCode,
            });
          }
        }

        const allCzs = [
          ...cfg.czs.map((c) => ({ code: c, primary: true })),
          ...(cfg.sharedCzs || []).map((c) => ({ code: c, primary: false })),
        ];
        for (const { code: czCode, primary } of allCzs) {
          const czObj = czItems.get(czCode);
          const locObj = {
            volNum: vSpec.num,
            volSlug: vSpec.slug,
            phaseNewNum: cfg.newNum,
            chapNum: null,
            heading: czObj.heading,
            title: czObj.title,
          };
          registerItemInVol(vSpec.num, vSpec.slug, czCode, locObj, primary);
          if (primary || !oldAnchorToNew.has(slugify(czCode))) {
            oldAnchorToNew.set(slugify(`${czCode} — ${czObj.title}`), {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              heading: czObj.heading,
              displayLabel: `${czObj.title} (Fase ${cfg.newNum})`,
              itemCode: czCode,
            });
            oldAnchorToNew.set(slugify(czCode), {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              heading: czObj.heading,
              displayLabel: `${czObj.title} (Fase ${cfg.newNum})`,
              itemCode: czCode,
            });
          }
        }

        const allAs = [
          ...cfg.as.map((c) => ({ code: c, primary: true })),
          ...(cfg.sharedAs || []).map((c) => ({ code: c, primary: false })),
        ];
        for (const { code: aCode, primary } of allAs) {
          const aObj = aItems.get(aCode);
          const locObj = {
            volNum: vSpec.num,
            volSlug: vSpec.slug,
            phaseNewNum: cfg.newNum,
            chapNum: null,
            heading: aObj.heading,
            title: aObj.title,
          };
          registerItemInVol(vSpec.num, vSpec.slug, aCode, locObj, primary);
          if (primary || !oldAnchorToNew.has(slugify(aCode))) {
            oldAnchorToNew.set(slugify(aCode), {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              heading: aObj.heading,
              displayLabel: `Template: ${aObj.title} (Fase ${cfg.newNum})`,
              itemCode: aCode,
            });
          }
        }
      } else if (item.type === 'chapter') {
        chapCounter += 1;
        const origSec = rawSections.get(item.key);
        const built = buildChapterSection(item.key, chapCounter, origSec);
        oldCodeToChapterInfo.set(item.key, {
          volNum: vSpec.num,
          volSlug: vSpec.slug,
          chapNum: chapCounter,
          cleanTitle: built.cleanTitle,
          heading: built.heading,
        });
        oldAnchorToNew.set(slugify(origSec.heading), {
          volNum: vSpec.num,
          volSlug: vSpec.slug,
          heading: built.heading,
          displayLabel: `Capítulo ${chapCounter} — ${built.cleanTitle}`,
        });
        if (origSec.origHeading) {
          oldAnchorToNew.set(slugify(origSec.origHeading), {
            volNum: vSpec.num,
            volSlug: vSpec.slug,
            heading: built.heading,
            displayLabel: `Capítulo ${chapCounter} — ${built.cleanTitle}`,
          });
        }
        oldAnchorToNew.set(slugify(`apendice-${item.key}`), {
          volNum: vSpec.num,
          volSlug: vSpec.slug,
          heading: built.heading,
          displayLabel: `Capítulo ${chapCounter} — ${built.cleanTitle}`,
        });
        if (item.key === 'BA') {
          oldCodeToChapterInfo.set('DH', {
            volNum: vSpec.num,
            volSlug: vSpec.slug,
            chapNum: chapCounter,
            cleanTitle: built.cleanTitle,
            heading: built.heading,
          });
          for (const hAlias of [origHeadingBA, origHeadingDH, 'apendice-DH']) {
            oldAnchorToNew.set(slugify(hAlias), {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              heading: built.heading,
              displayLabel: `Capítulo ${chapCounter} — ${built.cleanTitle}`,
            });
          }
        }

        const extras = CHAPTER_EXTRAS[item.key];
        if (extras && extras.bgs) {
          for (const bgCode of extras.bgs) {
            const bgObj = bgItems.get(bgCode);
            const locObj = {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              phaseNewNum: null,
              chapNum: chapCounter,
              heading: bgObj.heading,
              title: bgObj.title,
            };
            registerItemInVol(vSpec.num, vSpec.slug, bgCode, locObj, true);
            oldAnchorToNew.set(slugify(`${bgCode} — ${bgObj.title}`), {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              heading: bgObj.heading,
              displayLabel: `${bgObj.title} (Cap. ${chapCounter})`,
              itemCode: bgCode,
            });
            oldAnchorToNew.set(slugify(bgCode), {
              volNum: vSpec.num,
              volSlug: vSpec.slug,
              heading: bgObj.heading,
              displayLabel: `${bgObj.title} (Cap. ${chapCounter})`,
              itemCode: bgCode,
            });
          }
        }
      } else if (item.type === 'ref') {
        const origSec = rawSections.get(item.key);
        oldAnchorToNew.set(slugify(origSec.heading), {
          volNum: vSpec.num,
          volSlug: vSpec.slug,
          heading: item.newHeading,
          displayLabel: item.newHeading,
        });
      }
    }
  }
}

for (const [secKey, { primaryKey, origHeading }] of secondaryToPrimaryMap.entries()) {
  const pInfo = oldCodeToChapterInfo.get(primaryKey);
  if (pInfo) {
    oldCodeToChapterInfo.set(secKey, pInfo);
    for (const hAlias of [origHeading, `apendice-${secKey}`]) {
      oldAnchorToNew.set(slugify(hAlias), {
        volNum: pInfo.volNum,
        volSlug: pInfo.volSlug,
        heading: pInfo.heading,
        displayLabel: `Capítulo ${pInfo.chapNum} — ${pInfo.cleanTitle}`,
      });
    }
  }
}

// Mapear também âncoras antigas especiais (FASE 14 unificada, 14A..14D, BG, CZ, A, C, E)
const f14Orig = rawSections.get('FASE_14');
oldAnchorToNew.set(slugify(f14Orig.heading), {
  volNum: 6,
  volSlug: 'IGNICAO-Vol-6-Receita-e-Pessoas',
  heading: 'FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA',
  displayLabel: 'Fase 16',
});
oldAnchorToNew.set(slugify('14A — Time e Lideranca em Escala'), {
  volNum: 6,
  volSlug: 'IGNICAO-Vol-6-Receita-e-Pessoas',
  heading: 'FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA',
  displayLabel: 'Fase 16 — Time e Liderança em Escala',
});
oldAnchorToNew.set(slugify('TIME E LIDERANÇA EM ESCALA'), {
  volNum: 6,
  volSlug: 'IGNICAO-Vol-6-Receita-e-Pessoas',
  heading: 'FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA',
  displayLabel: 'Fase 16 — Time e Liderança em Escala',
});
oldAnchorToNew.set(slugify('14B — Operacoes em Escala'), {
  volNum: 7,
  volSlug: 'IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes',
  heading: 'FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA',
  displayLabel: 'Fase 17 — Operações em Escala',
});
oldAnchorToNew.set(slugify('OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA'), {
  volNum: 7,
  volSlug: 'IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes',
  heading: 'FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA',
  displayLabel: 'Fase 17 — Operações em Escala',
});
oldAnchorToNew.set(slugify('14C — Maquina de Crescimento'), {
  volNum: 6,
  volSlug: 'IGNICAO-Vol-6-Receita-e-Pessoas',
  heading: 'FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA',
  displayLabel: 'Fase 15 — Máquina de Crescimento',
});
oldAnchorToNew.set(slugify('MÁQUINA DE CRESCIMENTO, CAPITAL E EXPANSÃO'), {
  volNum: 6,
  volSlug: 'IGNICAO-Vol-6-Receita-e-Pessoas',
  heading: 'FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA',
  displayLabel: 'Fase 15 — Máquina de Crescimento',
});
oldAnchorToNew.set(slugify('14D — Capital para Escala'), {
  volNum: 5,
  volSlug: 'IGNICAO-Vol-5-Financas-e-Captacao',
  heading: 'FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA',
  displayLabel: 'Fase 14 — Capital para Escala',
});

// Redirecionar links genéricos para Apêndice BG / CZ / A / C / E
oldAnchorToNew.set(slugify(rawSections.get('BG').heading), {
  volNum: 10,
  volSlug: 'IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario',
  heading: 'ÍNDICE GERAL DE FRAMEWORKS DA COLEÇÃO',
  displayLabel: 'Índice Geral de Frameworks',
});
oldAnchorToNew.set(slugify(rawSections.get('CZ').heading), {
  volNum: 1,
  volSlug: 'IGNICAO-Vol-1-Ideacao',
  heading: 'CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)',
  displayLabel: 'Canvases Visuais da Fase',
});
oldAnchorToNew.set(slugify(rawSections.get('A').heading), {
  volNum: 1,
  volSlug: 'IGNICAO-Vol-1-Ideacao',
  heading: 'TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE',
  displayLabel: 'Templates Operacionais da Fase',
});
oldAnchorToNew.set(slugify(rawSections.get('C').heading), {
  volNum: 5,
  volSlug: 'IGNICAO-Vol-5-Financas-e-Captacao',
  heading: 'MÉTRICAS E BENCHMARKS DESTA FASE (FASE 14)',
  displayLabel: 'Catálogo de Métricas e Benchmarks',
});
oldAnchorToNew.set(slugify(rawSections.get('E').heading), {
  volNum: 10,
  volSlug: 'IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario',
  heading: 'BIBLIOGRAFIA GERAL',
  displayLabel: 'Bibliografia e Leituras Recomendadas',
});

// Mapear BG.1 .. BG.19 categorias para o primeiro item de cada categoria
for (let cat = 1; cat <= 19; cat++) {
  const firstCode = `BG.${cat}.1`;
  const loc = embeddedItemLocation.get(firstCode);
  if (loc) {
    oldAnchorToNew.set(slugify(`bg-${cat}`), {
      volNum: loc.volNum,
      volSlug: loc.volSlug,
      heading: loc.heading,
      displayLabel: loc.title,
      itemCode: firstCode,
    });
  }
}

// Enriquecer o Glossário Técnico e a Lista de Abreviações com os novos termos/siglas da v4.0 (42 verticais + ciclo de vida)
rawSections.get('APÊNDICE — GLOSSÁRIO DE TERMOS TÉCNICOS').body = enrichRawGlossaryBody(
  rawSections.get('APÊNDICE — GLOSSÁRIO DE TERMOS TÉCNICOS').body
);
rawSections.get('APÊNDICE — LISTA DE ABREVIAÇÕES').body = enrichRawAbbrevBody(
  rawSections.get('APÊNDICE — LISTA DE ABREVIAÇÕES').body
);

// Extrair entradas do Glossário Técnico e Lista de Abreviações para gerar o Glossário de cada Volume (1 a 9)
const rawGlossaryBody = rawSections.get('APÊNDICE — GLOSSÁRIO DE TERMOS TÉCNICOS').body;
const glossaryEntries = [...rawGlossaryBody.matchAll(/^\*\*([^*]+?)\.\*\*\s+([^\n]+)/gm)].map((m) => {
  const head = m[1].trim();
  const keyTerm = head.replace(/\s*\([^)]*\)/g, '').trim();
  // Limpar o "Ver [[...]]." final (mesmo com wikilinks aninhados) para que a definição no glossário local de cada volume seja 100% autocontida
  const cleanDef = m[2]
    .replace(/\s*Ver\s+\[\[.*$/i, '')
    .trim();
  return {
    head,
    keyTerm,
    line: `**${head}.** ${cleanDef}`,
  };
});

const rawAbbrevBody = rawSections.get('APÊNDICE — LISTA DE ABREVIAÇÕES').body;
const abbrevEntries = [...rawAbbrevBody.matchAll(/^\*\*([^*]+?)\*\*:\s+([^\n]+)/gm)]
  .map((m) => ({
    sigla: m[1].trim(),
    keySigla: m[1].split('/')[0].trim(),
    line: `**${m[1].trim()}:** ${m[2].trim()}`,
  }))
  .filter((e) => e.sigla !== 'BG' && e.sigla !== 'CZ');

function buildVolumeGlossaryBlock(volNum, bodyText) {
  const lowerText = bodyText.toLowerCase();
  const matchedTerms = glossaryEntries.filter((e) => {
    const isAcronym = /^[A-Z0-9/&-]{2,5}$/.test(e.keyTerm);
    if (isAcronym) {
      const esc = e.keyTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`\\b${esc}\\b`).test(bodyText);
    }
    const t = e.keyTerm.toLowerCase();
    if (t.length <= 4) {
      const esc = e.keyTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`\\b${esc}\\b`, 'i').test(bodyText);
    }
    return lowerText.includes(t);
  });

  const matchedAbbrevs = abbrevEntries.filter((e) => {
    const esc = e.keySigla.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\b${esc}\\b`).test(bodyText);
  });

  return `# GLOSSÁRIO E SIGLAS DESTE VOLUME

> [!abstract] Vocabulário técnico e siglas deste volume
> Para garantir que este **Volume ${volNum}** funcione de forma 100% independente e autocontida sem exigir consulta a outro livro, esta seção reúne as definições dos **${matchedTerms.length} termos técnicos e de negócios** e das **${matchedAbbrevs.length} siglas e abreviações** utilizados ao longo das Fases e Capítulos deste volume.

---

## GLOSSÁRIO E SIGLAS DESTE VOLUME

### Termos Técnicos e de Negócios Usados neste Volume

${matchedTerms.map((e) => e.line).join('\n\n')}

---

### Siglas e Abreviações Usadas neste Volume

${matchedAbbrevs.map((e) => e.line).join('\n\n')}`;
}

// ---------------------------------------------------------------------------
// 7. Gerar o markdown bruto de cada um dos 10 volumes
// ---------------------------------------------------------------------------
const rawVolumeDocs = new Map(); // volNum -> { spec, md }

for (const vSpec of VOLUMES_SPEC) {
  let chapCounter = 0;
  const tocLines = [];
  const bodyBlocks = [];

  for (const b of vSpec.blocks) {
    tocLines.push(`### ${b.tocGroup}`);
    const blockSections = [];

    for (const item of b.items) {
      if (item.type === 'phase') {
        const cfg = PHASE_CONFIG[item.key];
        const origSec = rawSections.get(item.key);
        const enriched = enrichPhaseBody(item.key, origSec.body);
        tocLines.push(`- [[#${cfg.newHeading}|${cfg.newHeading}]]`);
        blockSections.push(enriched);
      } else if (item.type === 'chapter') {
        chapCounter += 1;
        const origSec = rawSections.get(item.key);
        const built = buildChapterSection(item.key, chapCounter, origSec);
        tocLines.push(`- [[#${built.heading}|${built.heading}]]`);
        blockSections.push(built.body);
      } else if (item.type === 'ref') {
        const origSec = rawSections.get(item.key);
        let refBody = origSec.body.replace(/^## [^\n]+/m, `## ${item.newHeading}`);
        if (item.key === 'EPÍLOGO') {
          refBody = applyNarrativeRefactor('EPÍLOGO', refBody, ALL_NARRATIVE_SPECS);
        } else if (item.key === 'APÊNDICE — DATA DE COMPILAÇÃO E NOTA SOBRE ENVELHECIMENTO') {
          refBody = enrichDataCompilacaoBody(refBody);
        } else if (item.key === 'APÊNDICE: BIBLIOGRAFIA' || item.key === 'APÊNDICE — BIBLIOGRAFIA UNIFICADA') {
          refBody = enrichBibliografiaBody(refBody);
        } else if (item.key === 'APÊNDICE: ÍNDICE DE FRAMEWORKS') {
          refBody = enrichIndiceFrameworksBody(refBody);
        } else if (item.key === 'APÊNDICE — LISTA DE ABREVIAÇÕES') {
          refBody = refBody
            .replace(/^\*\*BG\*\*:[^\n]+\n+/m, '')
            .replace(
              /\*\*Fases 1-2 \(Ideia\):\*\*/,
              '**[[IGNICAO-Vol-1-Ideacao#FASE 1 — ENCONTRAR A IDEIA|Fases 1 e 2 (Vol. 1)]] (Ideia e Articulação):**'
            )
            .replace(
              /\*\*Fases 3-4 \(Descoberta do Problema\):\*\*/,
              '**[[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fases 4 e 5 (Vol. 2)]] (Descoberta do Problema e Pesquisa com Usuários):**'
            )
            .replace(
              /\*\*Fases 6-7 \(Hipóteses e Experimentos\):\*\*/,
              '**[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fases 7 e 8 (Vol. 3)]] (Hipóteses e Experimentos):**'
            )
            .replace(
              /\*\*Fases 8-9 \(Ideação e Testes\):\*\*/,
              '**[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fases 9 e 10 (Vol. 3)]] (Ideação e Testes de Solução):**'
            );
        } else if (item.key === 'APÊNDICE — ÍNDICE REMISSIVO') {
          refBody = enrichIndiceRemissivoBody(refBody);
        }
        refBody = refBody
          .replace(/^> \[!note\] Como usar ess[ea] ap[êe]ndice/gm, '> [!note] Como usar este índice')
          .replace(/\bfase ou ap[êe]ndice\b/gi, 'fase ou capítulo')
          .replace(/\bap[êe]ndice ou fase\b/gi, 'capítulo ou fase')
          .replace(/\bfases, ap[êe]ndices ou seções\b/gi, 'fases, capítulos ou seções')
          .replace(/\bem ap[êe]ndices temáticos\b/gi, 'em capítulos temáticos');
        tocLines.push(`- [[#${item.newHeading}|${item.newHeading}]]`);
        blockSections.push(refBody);
      }
    }

    bodyBlocks.push(
      `# ${b.h1}\n\n${b.intro.trim()}\n\n---\n\n` + blockSections.join('\n\n---\n\n')
    );
  }

  const frontmatter = `---
title: "${vSpec.title}"
subtitle: "${vSpec.subtitle}"
author: "João Prado"
date: 2026
version: "5.2"
volume: ${vSpec.num}
collection: "IGNIÇÃO: O manual operacional do empreendedor brasileiro (10 Volumes, Edição Narrativa Enxuta)"
language: pt-BR
---`;

  let headerBlock = `# ${vSpec.title}\n\n**${vSpec.subtitle}**\n\n*João Prado · 2026 · Edição Narrativa Enxuta (v5.2)*\n\n---\n\n`;
  if (vSpec.num === 1) {
    headerBlock += `${notaDoAutorBody}\n\n---\n\n${SOBRE_ESTE_LIVRO_V1}\n\n---\n\n## Mapa da Coleção IGNIÇÃO\n\n${COLLECTION_MAP_MERMAID}\n\n---\n\n## Sumário deste Volume\n\n${tocLines.join('\n')}\n\n---\n\n`;
  } else {
    headerBlock += `## Sobre este Volume\n\nEste é o **Volume ${vSpec.num} (${vSpec.title.replace(/^IGNIÇÃO — Volume \d+:\s*/, '')})** da coleção **IGNIÇÃO: O manual operacional do empreendedor brasileiro** (10 volumes).\n\n${vSpec.about}\n\n---\n\n## Mapa da Coleção IGNIÇÃO\n\n${COLLECTION_MAP_MERMAID}\n\n---\n\n## Sumário deste Volume\n\n${tocLines.join('\n')}\n\n---\n\n`;
  }

  const fullMd = applyPreIndexVolumeFixes(
    vSpec.num,
    `${frontmatter}\n\n${headerBlock}${bodyBlocks.join('\n\n---\n\n')}\n`
  );
  rawVolumeDocs.set(vSpec.num, { spec: vSpec, md: fullMd });
}

console.log('[2/6] Estrutura dos 10 volumes autocontidos montada em memória.');

// ---------------------------------------------------------------------------
// 8. Indexar todos os headings reais (H1 a H6) presentes nos 10 volumes
// ---------------------------------------------------------------------------
const globalHeadingIndex = new Map(); // slug -> { volNum, volSlug, exactHeading }
const perVolHeadingIndex = new Map(); // volNum -> Map(slug -> exactHeading)

for (const [volNum, { spec, md }] of rawVolumeDocs.entries()) {
  const vMap = new Map();
  const lines = md.split('\n');
  let inFence = false;
  for (const line of lines) {
    if (line.trim().startsWith('```')) inFence = !inFence;
    if (!inFence) {
      const m = line.match(/^#{1,6}\s+(.+)$/);
      if (m) {
        const hText = m[1].trim();
        const s = slugify(hText);
        if (!vMap.has(s)) vMap.set(s, hText);
        if (!globalHeadingIndex.has(s)) {
          globalHeadingIndex.set(s, { volNum, volSlug: spec.slug, exactHeading: hText });
        }
      }
    }
  }
  perVolHeadingIndex.set(volNum, vMap);
}

// Registrar em oldAnchorToNew e perVolHeadingIndex quaisquer subtítulos H3-H6 renomeados pela revisão
for (const item of RENAMED_HEADINGS_LIST) {
  const oldSlug = slugify(item.oldHeadingText);
  const vSpec = VOLUMES_SPEC[item.volNum - 1];
  const vMap = perVolHeadingIndex.get(item.volNum);
  if (vMap && !vMap.has(oldSlug)) {
    vMap.set(oldSlug, item.newHeadingText);
  }
  if (!oldAnchorToNew.has(oldSlug)) {
    oldAnchorToNew.set(oldSlug, {
      volNum: item.volNum,
      volSlug: vSpec ? vSpec.slug : '',
      heading: item.newHeadingText,
    });
  }
}

// Adicionar mapeamentos para todos os headings de BG, CZ e A pelo código antigo
for (const [code, loc] of embeddedItemLocation.entries()) {
  oldAnchorToNew.set(slugify(code), {
    volNum: loc.volNum,
    volSlug: loc.volSlug,
    heading: loc.heading,
    displayLabel: loc.title,
    itemCode: code,
  });
}

// Verificar também sub-itens de Apêndice A (ex: A.1..A.39 com títulos completos antigos)
for (const [code, aObj] of aItems.entries()) {
  const loc = embeddedItemLocation.get(code);
  if (loc) {
    oldAnchorToNew.set(slugify(`Template: Template de ${aObj.title}`), {
      volNum: loc.volNum,
      volSlug: loc.volSlug,
      heading: loc.heading,
      displayLabel: loc.title,
      itemCode: code,
    });
    for (const [s] of globalHeadingIndex.entries()) {
      if (s.startsWith(slugify(code))) {
        oldAnchorToNew.set(s, {
          volNum: loc.volNum,
          volSlug: loc.volSlug,
          heading: loc.heading,
          displayLabel: loc.title,
          itemCode: code,
        });
      }
    }
  }
}

console.log(`[3/6] Índices de headings construídos (${globalHeadingIndex.size} âncoras únicas).`);

// ---------------------------------------------------------------------------
// 9. Resolver globalmente todos os wikilinks e normalizar referências textuais
// ---------------------------------------------------------------------------
// Mapa de subtítulos legados de "Fase N — <Subtítulo Antigo>" herdados de 738db95 para a Fase canônica real:
const LEGACY_PHASE_LABEL_TO_KEY = [
  { re: /^Posicionamento e Proposta de Valor$/i, key: 'FASE_5', label: 'Fase 6 — Mapeamento de Mercado e Concorrência' },
  { re: /^(?:Go-to-Market(?: e Aquisição| e Crescimento)?|Crescimento(?: e Escala)?)$/i, key: 'FASE_14C', label: 'Fase 15 — Máquina de Crescimento e Expansão em Escala' },
  { re: /^(?:Retenção, Monetização e Expansão de Receita|Modelo de Negócio(?: e Monetização| e Financeiro)?|Modelo de Receita e Unit Economics|Articulação do Modelo de Negócio)$/i, key: 'FASE_11', label: 'Fase 12 — Validação do Modelo de Negócio' },
  { re: /^(?:Expansão e Novos Mercados|Escala)$/i, key: 'FASE_15', label: 'Fase 19 — Reinvenção e Segunda Curva' },
  { re: /^(?:Validação de Mercado|Tração Inicial)$/i, key: 'FASE_10', label: 'Fase 11 — MVP e Experimentos de Mercado' },
  { re: /^(?:Validação de Problema e Cliente|Validação com Clientes Reais)$/i, key: 'FASE_3', label: 'Fase 4 — Descoberta do Problema' },
  { re: /^(?:Escala Operacional|Construção|Produto e Operação|Escala e Operações)$/i, key: 'FASE_14B', label: 'Fase 17 — Operações, Processos e Gestão em Escala' },
  { re: /^(?:Constituição e Formalização|Estrutura Jurídica e Societária)$/i, key: 'FASE_13', label: 'Fase 18 — Estruturação Jurídica, Societária e Blindagem Operacional' },
  { re: /^(?:Escala e Estruturação Organizacional|Escala e Governança)$/i, key: 'FASE_14A', label: 'Fase 16 — Time, Liderança Executiva e Cultura em Escala' },
  { re: /^Saída e Liquidez$/i, key: 'FASE_16', label: 'Fase 20 — Estratégia de Saída (Exit Strategy)' },
];

function matchLegacyPhaseAlias(rawAlias) {
  const clean = (rawAlias || '').replace(/\s*\(Vol\.\s*\d+\)/gi, '').trim();
  const m = clean.match(/^Fase\s+(?:2B|\d+)\s*[—–-]\s*(.+)$/i);
  if (!m) return null;
  const sub = m[1].trim();
  for (const item of LEGACY_PHASE_LABEL_TO_KEY) {
    if (item.re.test(sub)) return item;
  }
  return null;
}

function updateAliasLabel(alias, targetInfo, currentVolNum) {
  let out = alias.trim();
  // Remover sufixos antigos "(Vol. X)"
  out = out.replace(/\s*\(Vol\.\s*\d+\)/gi, '').trim();

  // Se o alias era um subtítulo legado de fase ("Fase 9 — Go-to-Market"), atualizar para o rótulo canônico
  const legacyPhase = matchLegacyPhaseAlias(out);
  if (legacyPhase) {
    out = legacyPhase.label;
  }

  // Se o alias era apenas uma sigla de apêndice (ex: "F", "L", "B", "S", "AB", "EJ")
  if (/^[A-Z]{1,2}$/.test(out) && oldCodeToChapterInfo.has(out.toUpperCase())) {
    const chInfo = oldCodeToChapterInfo.get(out.toUpperCase());
    out = `Capítulo ${chInfo.chapNum} (${chInfo.cleanTitle})`;
  }

  // Se o alias era "Apêndice XX..." converter para "Capítulo N..." ou para o item específico
  const mAp = out.match(/^Ap[êe]ndice\s+([A-Z0-9_]+)(?:\s*(?:[—–-]|,|\()\s*(.*))?$/i);
  if (mAp) {
    const code = mAp[1].toUpperCase();
    const rest = (mAp[2] || '').replace(/\)$/, '').trim();
    const chInfo = oldCodeToChapterInfo.get(code);
    if (chInfo) {
      out = rest
        ? `Capítulo ${chInfo.chapNum} — ${rest}`
        : `Capítulo ${chInfo.chapNum} (${chInfo.cleanTitle})`;
    } else if (code === 'BG') {
      out =
        targetInfo && targetInfo.heading === 'MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE'
          ? 'Manual Passo a Passo dos Frameworks desta Fase'
          : 'Índice Geral de Frameworks da Coleção';
    } else if (code === 'CZ') {
      out = rest || 'Canvases Visuais da Fase';
    } else if (code === 'A') {
      out = rest || 'Templates Operacionais da Fase';
    } else if (code === 'C') {
      out = rest || 'Catálogo de Métricas e Benchmarks';
    } else if (code === 'E') {
      out = rest || 'Bibliografia e Leituras Recomendadas';
    }
  }

  if (
    targetInfo &&
    targetInfo.heading === 'MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE' &&
    /Ferramentário|Índice Geral de Frameworks/i.test(out)
  ) {
    out = 'Manual Passo a Passo dos Frameworks desta Fase';
  }

  // Se o alias tinha formato "Nome (CZ.N)" ou "Template A.N (Nome)" ou continha código BG.X.Y / CZ.N / A.N
  const mCodeInAlias = out.match(/\b(BG\.\d+\.\d+|CZ\.\d+|A\.\d+)\b/i);
  if (mCodeInAlias) {
    const uCode = mCodeInAlias[1].toUpperCase();
    const loc = getItemLocForVol(uCode, currentVolNum);
    if (loc) {
      const prefix = uCode.startsWith('BG.')
        ? 'Framework: '
        : uCode.startsWith('CZ.')
          ? 'Canvas: '
          : 'Template: ';
      out = `${prefix}${loc.title}`;
    }
  }

  // Limpar eventuais duplicações "Template Template:" ou "Canvas Canvas:"
  out = out
    .replace(/^(Template:\s*)+/i, 'Template: ')
    .replace(/^Template\s+Template:\s*/i, 'Template: ')
    .replace(/^(Canvas:\s*)+/i, 'Canvas: ')
    .replace(/^(Framework:\s*)+/i, 'Framework: ')
    .replace(
      /^(Cap[íi]tulo\s+\d+\s*\()([A-ZÀ-Ú0-9\s,.:;/—–&-]{4,})(\))$/,
      (_, pre, inner, post) => `${pre}${toEditorialTitleCase(inner)}${post}`
    );

  // Se o alias mencionava "Fase X", atualizar número quando era link para fase antiga
  out = out.replace(/\bFase\s+(2B|2b|\d+)\b/g, (full) => {
    if (targetInfo && targetInfo.heading.startsWith('FASE ')) {
      const mNew = targetInfo.heading.match(/^FASE (\d+)/);
      if (mNew) return `Fase ${mNew[1]}`;
    }
    return full;
  });

  if (targetInfo && targetInfo.volNum !== currentVolNum) {
    out = `${out} (Vol. ${targetInfo.volNum})`;
  }
  return out;
}

function formatEmbeddedRef(code, currentVolNum) {
  const loc = getItemLocForVol(code, currentVolNum);
  if (!loc) return code;
  const where = loc.phaseNewNum !== null ? `Fase ${loc.phaseNewNum}` : `Cap. ${loc.chapNum}`;
  // Para o Volume 10 (Índices), manter a indicação de volume; nos Volumes 1..9, manter referência limpa sem "(Vol. X)" em ferramentas
  const volSuffix = currentVolNum === 10 && loc.volNum !== currentVolNum ? `, Vol. ${loc.volNum}` : '';
  return `${loc.title} (${where}${volSuffix})`;
}

// Normaliza códigos legados em texto corrido fora de wikilinks [[...]]
function normalizeProseSegment(seg, currentVolNum) {
  let s = seg;

  // 1) "Fases 2 e 2B" / "Fases 0 a 2B" / "Fase 2B"
  s = s
    .replace(/\bFases 2 e 2B\b/gi, 'Fases 2 e 3')
    .replace(/\bFases 0 a 2B\b/gi, 'Fases 0 a 3')
    .replace(/\bFase 2B\b/g, 'Fase 3')
    .replace(/\bFASE 2B\b/g, 'FASE 3');

  // 2) Callouts e menções a "Apêndice CZ — Nome (CZ.N)" ou "Apêndice CZ"
  s = s.replace(
    /\bAp[êe]ndice\s+CZ\s*[—–-]\s*([^\n(]+?)(?:\s*\((CZ\.\d+)\))?(?=$|\s|[.,;:])/gi,
    (_, name, czCode) => {
      if (czCode && embeddedItemLocation.has(czCode.toUpperCase())) {
        return `Canvas Visual — ${formatEmbeddedRef(czCode.toUpperCase(), currentVolNum)}`;
      }
      return `Canvases Visuais — ${name.trim()}`;
    }
  );
  s = s
    .replace(/\bAp[êe]ndice\s+A\s*[—–-]\s*/gi, 'Templates Operacionais — ')
    .replace(/\bdo Ap[êe]ndice CZ\b/gi, 'da seção de Canvases Visuais')
    .replace(/\bno Ap[êe]ndice CZ\b/gi, 'na seção de Canvases Visuais')
    .replace(/\bap[êe]ndice CZ\b/gi, 'seção de Canvases Visuais')
    .replace(/\bdo Ferramentário BG\b/gi, 'dos Manuais de Frameworks das Fases')
    .replace(/\bdo Ap[êe]ndice BG\b/gi, 'dos Manuais de Frameworks das Fases')
    .replace(/\bno Ap[êe]ndice BG\b/gi, 'nos Manuais de Frameworks das Fases')
    .replace(/\bap[êe]ndice BG\b/gi, 'Manual de Frameworks da Fase')
    .replace(/\bdo Ap[êe]ndice A\b/gi, 'da seção de Templates Operacionais')
    .replace(/\bno Ap[êe]ndice A\b/gi, 'na seção de Templates Operacionais')
    .replace(/\bdo Ap[êe]ndice C\b/gi, 'da seção de Métricas e Benchmarks')
    .replace(/\bno Ap[êe]ndice C\b/gi, 'na seção de Métricas e Benchmarks')
    .replace(/\bdo Ap[êe]ndice E\b/gi, 'da seção de Leituras Recomendadas')
    .replace(/\bno Ap[êe]ndice E\b/gi, 'na seção de Leituras Recomendadas');

  // 3) Menções a "Apêndice(s) XX — Título" ou "Apêndice(s) XX" (com ou sem acento, onde XX é capítulo, ou K -> FG)
  s = s.replace(
    /\bAp[êe]ndices?\s+([A-Z]{1,2})\b(?:\s*([—–-])\s*([^\n:.,;)]+))?/g,
    (full, rawCode, sep, restTitle) => {
      const code = rawCode.toUpperCase() === 'K' ? 'FG' : rawCode.toUpperCase();
      const ch = oldCodeToChapterInfo.get(code);
      if (!ch) return full;
      const volSuffix = ch.volNum !== currentVolNum ? ` (Vol. ${ch.volNum})` : '';
      if (sep && restTitle) {
        return `Capítulo ${ch.chapNum}${volSuffix} — ${restTitle.trim()}`;
      }
      return `Capítulo ${ch.chapNum}${volSuffix} (${ch.cleanTitle})`;
    }
  );

  // 3b) Expressões genéricas de apêndice(s) no corpo do texto
  s = s
    .replace(/\bCada ap[êe]ndice e ferramenta\b/g, 'Cada capítulo e ferramenta')
    .replace(/\bAp[êe]ndices verticais\b/g, 'Capítulos verticais')
    .replace(/\bap[êe]ndices verticais\b/g, 'capítulos verticais')
    .replace(/\bAp[êe]ndices de\b/g, 'Capítulos de')
    .replace(/\bap[êe]ndices de\b/g, 'capítulos de')
    .replace(/\bap[êe]ndices gerais\b/g, 'capítulos gerais')
    .replace(/\boutros ap[êe]ndices\b/g, 'outros capítulos')
    .replace(/\bvários ap[êe]ndices\b/g, 'vários capítulos')
    .replace(/\bvarios ap[êe]ndices\b/g, 'vários capítulos')
    .replace(/\bsete ap[êe]ndices\b/g, 'sete capítulos')
    .replace(/\bquatro ap[êe]ndices\b/gi, 'Quatro capítulos')
    .replace(/\b45 ap[êe]ndices\b/g, '45 capítulos')
    .replace(/\bOs ap[êe]ndices\b/g, 'Os capítulos')
    .replace(/\bos ap[êe]ndices\b/g, 'os capítulos')
    .replace(/\bem ap[êe]ndice próprio\b/g, 'em capítulo próprio')
    .replace(/\beste apendice\b/g, 'este capítulo')
    .replace(/\bEste apendice\b/g, 'Este capítulo')
    .replace(/\bneste apendice\b/g, 'neste capítulo')
    .replace(/\bNeste apendice\b/g, 'Neste capítulo')
    .replace(/\besse apendice\b/g, 'este capítulo')
    .replace(/\bEsse apendice\b/g, 'Este capítulo');

  // 4) Menções a BG.X.Y:
  // 4a) "(Nome, BG.X.Y)" -> "(Nome)"
  s = s.replace(/,\s*BG\.\d+\.\d+\)/g, ')');
  // 4b) "BG.X.Y (Nome)" -> "Framework: Nome (Fase X)"
  s = s.replace(/\b(BG\.\d+\.\d+)\s*\(([^)]+)\)/g, (full, code) => {
    if (!embeddedItemLocation.has(code)) return full;
    return `Framework: ${formatEmbeddedRef(code, currentVolNum)}`;
  });
  // 4c) "BG.X.Y" isolado
  s = s.replace(/\b(BG\.\d+\.\d+)\b/g, (code) => {
    if (!embeddedItemLocation.has(code)) return code;
    return `Framework: ${formatEmbeddedRef(code, currentVolNum)}`;
  });
  // 4d) "BG.X inteiro" ou "BG.X" (categoria)
  s = s.replace(/\b(BG\.\d+)(?:\s+inteiro)?\b/g, (full, catCode) => {
    const first = `${catCode}.1`;
    const loc = getItemLocForVol(first, currentVolNum);
    if (!loc) return full;
    const where = loc.phaseNewNum !== null ? `Fase ${loc.phaseNewNum}` : `Cap. ${loc.chapNum}`;
    const volSuffix = currentVolNum === 10 && loc.volNum !== currentVolNum ? `, Vol. ${loc.volNum}` : '';
    return `Frameworks da ${where}${volSuffix}`;
  });

  // 5) Menções a CZ.N:
  // 5a) "(CZ.N)" logo após o nome do canvas -> "(Fase X)"
  s = s.replace(/\((CZ\.\d+)\)/g, (full, code) => {
    const loc = getItemLocForVol(code, currentVolNum);
    if (!loc) return full;
    const where = loc.phaseNewNum !== null ? `Fase ${loc.phaseNewNum}` : `Cap. ${loc.chapNum}`;
    const volSuffix = currentVolNum === 10 && loc.volNum !== currentVolNum ? `, Vol. ${loc.volNum}` : '';
    return `(${where}${volSuffix})`;
  });
  // 5b) "CZ.N (Nome)" -> "Canvas: Nome (Fase X)"
  s = s.replace(/\b(CZ\.\d+)\s*\(([^)]+)\)/g, (full, code) => {
    if (!embeddedItemLocation.has(code)) return full;
    return `Canvas: ${formatEmbeddedRef(code, currentVolNum)}`;
  });
  // 5c) "CZ.N" isolado
  s = s.replace(/\b(CZ\.\d+)\b/g, (code) => {
    if (!embeddedItemLocation.has(code)) return code;
    return `Canvas: ${formatEmbeddedRef(code, currentVolNum)}`;
  });

  // 6) Menções a Templates A.N:
  // 6a) "(A.N)" logo após o nome do entregável -> "(Template da Fase X)"
  s = s.replace(/\((A\.\d+)\)/g, (full, code) => {
    const loc = getItemLocForVol(code, currentVolNum);
    if (!loc) return full;
    const where = loc.phaseNewNum !== null ? `Fase ${loc.phaseNewNum}` : `Cap. ${loc.chapNum}`;
    const volSuffix = currentVolNum === 10 && loc.volNum !== currentVolNum ? `, Vol. ${loc.volNum}` : '';
    return `(Template da ${where}${volSuffix})`;
  });
  // 6b) "Templates A.7 (Story Tree) e A.8 (DAG)" / "Template A.1 (Nome)"
  s = s.replace(/\bTemplates?\s+(A\.\d+)\s*\(([^)]+)\)/gi, (full, code, name) => {
    const loc = getItemLocForVol(code.toUpperCase(), currentVolNum);
    if (!loc) return full;
    const where = loc.phaseNewNum !== null ? `Fase ${loc.phaseNewNum}` : `Cap. ${loc.chapNum}`;
    const volSuffix = currentVolNum === 10 && loc.volNum !== currentVolNum ? `, Vol. ${loc.volNum}` : '';
    return `Template ${name.trim()} (${where}${volSuffix})`;
  });
  // 6c) "template A.N" / "exemplo A.N" / "diagrama A.N" / "A.N" isolado
  s = s.replace(/(?:(?:template|exemplo|diagrama)\s+)?\b(A\.\d+)\b/gi, (full, code) => {
    const uCode = code.toUpperCase();
    if (!embeddedItemLocation.has(uCode)) return full;
    return `Template: ${formatEmbeddedRef(uCode, currentVolNum)}`;
  });

  return s;
}

function normalizeLineOutsideWikilinks(line, currentVolNum) {
  const parts = line.split(/(\[\[[^\]]+\]\])/g);
  return parts
    .map((part) => {
      if (part.startsWith('[[') && part.endsWith(']]')) return part;
      return normalizeProseSegment(part, currentVolNum);
    })
    .join('');
}

function resolveAnchorTarget(rawAnchor, rawAlias, currentVolNum, explicitVolSlug = '') {
  const cleanAnchor = rawAnchor.trim().replace(/^#/, '');
  const s = slugify(cleanAnchor);

  // 0) Se o wikilink já trazia um volume explícito (ex: IGNICAO-Vol-4-Tracao-e-PMF#...), procurar primeiro naquele volume!
  if (explicitVolSlug) {
    const targetSpec = VOLUMES_SPEC.find((v) => v.slug === explicitVolSlug);
    if (targetSpec) {
      const targetMap = perVolHeadingIndex.get(targetSpec.num);
      if (targetMap) {
        if (targetMap.has(s)) {
          return {
            volNum: targetSpec.num,
            volSlug: targetSpec.slug,
            heading: targetMap.get(s),
          };
        }
        if (s.length >= 6) {
          for (const [kSlug, hText] of targetMap.entries()) {
            if (kSlug.length >= 6 && (kSlug.startsWith(s) || s.startsWith(kSlug))) {
              return {
                volNum: targetSpec.num,
                volSlug: targetSpec.slug,
                heading: hText,
              };
            }
          }
        }
      }
    }
  }

  // 0a) Se o link era uma referência de "Ver também" com rótulo legado de fase (ex: "Fase 9 — Go-to-Market"),
  //     redirecionar para a Fase canônica correspondente:
  const legacyPhase = matchLegacyPhaseAlias(rawAlias);
  if (legacyPhase && oldPhaseToNewInfo.has(legacyPhase.key)) {
    const fInfo = oldPhaseToNewInfo.get(legacyPhase.key);
    return { volNum: fInfo.volNum, volSlug: fInfo.volSlug, heading: fInfo.heading };
  }

  // 0b) Se o link apontava genericamente para APÊNDICE CZ, APÊNDICE A ou APÊNDICE BG,
  //     mas o alias especifica o código exato (ex: CZ.10, A.14, BG.4.1), resolver direto para o item (priorizando o volume atual)!
  if (
    /^apendice-(?:cz|a|bg)\b/.test(s) ||
    s === slugify(rawSections.get('CZ').heading) ||
    s === slugify(rawSections.get('A').heading) ||
    s === slugify(rawSections.get('BG').heading)
  ) {
    const mAliasCode = (rawAlias || '').match(/\b(BG\.\d+\.\d+|CZ\.\d+|A\.\d+)\b/i);
    if (mAliasCode) {
      const loc = getItemLocForVol(mAliasCode[1].toUpperCase(), currentVolNum);
      if (loc) {
        return { volNum: loc.volNum, volSlug: loc.volSlug, heading: loc.heading };
      }
    }
    // Se for referência genérica a Canvases/Templates/Frameworks e o volume atual já tiver essa seção, manter no volume atual!
    const localMap = perVolHeadingIndex.get(currentVolNum);
    if (s.includes('canvases') || s === 'apendice-cz') {
      const h = 'CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)';
      if (localMap && localMap.has(slugify(h))) {
        return { volNum: currentVolNum, volSlug: VOLUMES_SPEC[currentVolNum - 1].slug, heading: h };
      }
    } else if (s.includes('templates') || s === 'apendice-a') {
      const h = 'TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE';
      if (localMap && localMap.has(slugify(h))) {
        return { volNum: currentVolNum, volSlug: VOLUMES_SPEC[currentVolNum - 1].slug, heading: h };
      }
    } else if (s.includes('ferramentario') || s === 'apendice-bg') {
      const h = 'MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE';
      if (localMap && localMap.has(slugify(h))) {
        return { volNum: currentVolNum, volSlug: VOLUMES_SPEC[currentVolNum - 1].slug, heading: h };
      }
    }
  }

  // 1) Se existe no volume atual como heading real (prioridade máxima para autocontenção!):
  const localMap = perVolHeadingIndex.get(currentVolNum);
  if (localMap && localMap.has(s)) {
    return {
      volNum: currentVolNum,
      volSlug: VOLUMES_SPEC[currentVolNum - 1].slug,
      heading: localMap.get(s),
    };
  }

  // 2) Se é um código ou âncora mapeada em oldAnchorToNew:
  if (oldAnchorToNew.has(s)) {
    const mapped = oldAnchorToNew.get(s);
    if (mapped.itemCode) {
      const localItem = getItemLocForVol(mapped.itemCode, currentVolNum);
      if (localItem) {
        return { volNum: localItem.volNum, volSlug: localItem.volSlug, heading: localItem.heading };
      }
    }
    return mapped;
  }

  // 3) Se começa com "fase-X-" ou "apendice-XX-" ou "bg-X-Y" ou "cz-X" ou "a-X":
  const mBg = cleanAnchor.match(/^(BG\.\d+\.\d+)\b/i);
  if (mBg) {
    const loc = getItemLocForVol(mBg[1].toUpperCase(), currentVolNum);
    if (loc) return { volNum: loc.volNum, volSlug: loc.volSlug, heading: loc.heading };
  }
  const mBgCat = cleanAnchor.match(/^(BG\.\d+)\b/i);
  if (mBgCat) {
    const firstCode = `${mBgCat[1].toUpperCase()}.1`;
    const loc = getItemLocForVol(firstCode, currentVolNum);
    if (loc) return { volNum: loc.volNum, volSlug: loc.volSlug, heading: loc.heading };
  }
  const mCz = cleanAnchor.match(/^(CZ\.\d+)\b/i);
  if (mCz) {
    const loc = getItemLocForVol(mCz[1].toUpperCase(), currentVolNum);
    if (loc) return { volNum: loc.volNum, volSlug: loc.volSlug, heading: loc.heading };
  }
  const mA = cleanAnchor.match(/^(A\.\d+)\b/i);
  if (mA) {
    const loc = getItemLocForVol(mA[1].toUpperCase(), currentVolNum);
    if (loc) return { volNum: loc.volNum, volSlug: loc.volSlug, heading: loc.heading };
  }
  const mAp = cleanAnchor.match(/^APÊNDICE\s+([A-Z0-9_]+)\b/i);
  if (mAp && oldCodeToChapterInfo.has(mAp[1].toUpperCase())) {
    const ch = oldCodeToChapterInfo.get(mAp[1].toUpperCase());
    return { volNum: ch.volNum, volSlug: ch.volSlug, heading: ch.heading };
  }
  const mCap = cleanAnchor.match(/^CAP[ÍI]TULO\s+(\d+)\b/i);
  if (mCap) {
    const capPrefix = `capitulo-${mCap[1]}-`;
    const targetVol = explicitVolSlug
      ? VOLUMES_SPEC.find((v) => v.slug === explicitVolSlug)
      : VOLUMES_SPEC[currentVolNum - 1];
    if (targetVol) {
      const tMap = perVolHeadingIndex.get(targetVol.num);
      if (tMap) {
        for (const [kSlug, hText] of tMap.entries()) {
          if (kSlug.startsWith(capPrefix)) {
            return { volNum: targetVol.num, volSlug: targetVol.slug, heading: hText };
          }
        }
      }
    }
  }
  const mFase = cleanAnchor.match(/^FASE\s+(\d+B?)\b/i);
  if (mFase) {
    const fKey = `FASE_${mFase[1].toUpperCase()}`;
    if (oldPhaseToNewInfo.has(fKey)) {
      const fInfo = oldPhaseToNewInfo.get(fKey);
      return { volNum: fInfo.volNum, volSlug: fInfo.volSlug, heading: fInfo.heading };
    }
  }

  // 4) Se existe no índice global de headings:
  if (globalHeadingIndex.has(s)) {
    const g = globalHeadingIndex.get(s);
    return { volNum: g.volNum, volSlug: g.volSlug, heading: g.exactHeading };
  }

  // 5) Busca por prefixo no índice global (apenas para slugs >= 6 caracteres para evitar falsos positivos com "### A".."### Z"):
  if (s.length >= 6) {
    for (const [kSlug, g] of globalHeadingIndex.entries()) {
      if (kSlug.length >= 6 && (kSlug.startsWith(s) || s.startsWith(kSlug))) {
        return { volNum: g.volNum, volSlug: g.volSlug, heading: g.exactHeading };
      }
    }
  }

  return null;
}

// Limpar arquivos antigos em volumes/
for (const f of fs.readdirSync(VOLUMES_DIR)) {
  if (f.endsWith('.md')) {
    fs.unlinkSync(path.join(VOLUMES_DIR, f));
  }
}

const manifest = [];
let unresolvedCount = 0;

for (const [volNum, { spec, md }] of rawVolumeDocs.entries()) {
  const lines = md.split('\n');
  let inFence = false;

  const resolvedLines = lines.map((line) => {
    if (line.trim().startsWith('```')) inFence = !inFence;
    if (inFence) {
      return line.replace(/\(Ap[êe]ndice\s+([A-Z]{1,2})\)/g, (full, code) => {
        const ch = oldCodeToChapterInfo.get(code.toUpperCase());
        return ch ? `(Cap. ${ch.chapNum})` : full;
      });
    }

    // 0) Pré-normalizar "[[...Apêndice A]].N" -> "[[#A.N|A.N]]"
    let preLine = line.replace(
      /\[\[(?:[^\]|]+\|)?(?:O\s+)?Ap[êe]ndice\s+(A|CZ|BG)(?:\s*\(Vol\.\s*\d+\))?\]\]\.(\d+(?:\.\d+)?)/gi,
      (_, prefix, num) => {
        const code = `${prefix.toUpperCase()}.${num}`;
        return `[[#${code}|${code}]]`;
      }
    );

    // 1) Resolver todos os wikilinks [[target|alias]]
    let outLine = preLine.replace(/\[\[([^\]]+)\]\]/g, (full, inner) => {
      const parts = inner.split('|');
      const rawTarget = parts[0].trim();
      const rawAlias = (parts[1] || parts[0]).trim();

      const hashIdx = rawTarget.indexOf('#');
      const explicitVolSlug = hashIdx > 0 ? rawTarget.slice(0, hashIdx).trim() : '';
      const anchorPart = hashIdx >= 0 ? rawTarget.slice(hashIdx + 1) : rawTarget;

      const resolved = resolveAnchorTarget(anchorPart, rawAlias, volNum, explicitVolSlug);
      if (!resolved) {
        unresolvedCount += 1;
        console.warn(`[WARN Vol.${volNum}] Wikilink não resolvido: ${full}`);
        return full;
      }

      const finalAlias = updateAliasLabel(rawAlias, resolved, volNum);
      if (resolved.volNum === volNum) {
        return `[[#${resolved.heading}|${finalAlias}]]`;
      }
      return `[[${resolved.volSlug}#${resolved.heading}|${finalAlias}]]`;
    });

    // 2) Normalizar códigos legados fora de wikilinks (Apêndice XX, BG.X.Y, CZ.N, A.N, Fase 2B)
    outLine = normalizeLineOutsideWikilinks(outLine, volNum);

    return outLine;
  });

  const { applyV53CompleteReview } = require('./apply_v53_complete_review');
  const finalMd = applyV53CompleteReview(
    volNum,
    applyVolumeReviewFixes(
      volNum,
      resolvedLines
        .join('\n')
        .replace(/\n---\s*\n+(?:---\s*\n+)+/g, '\n\n---\n\n')
    )
  );
  const outPath = path.join(VOLUMES_DIR, `${spec.slug}.md`);
  fs.writeFileSync(outPath, finalMd, 'utf8');

  const wordCount = finalMd.split(/\s+/).filter(Boolean).length;
  console.log(
    `[4/6] Escrito volumes/${spec.slug}.md (${wordCount.toLocaleString('en-US')} palavras | ~${Math.round(wordCount / 250)} pág.)`
  );

  manifest.push({
    num: spec.num,
    file: `volumes/${spec.slug}.md`,
    title: spec.title,
    subtitle: spec.subtitle,
    words: wordCount,
  });
}

const { reconcileAllV53CrossVolumeLinks } = require('./apply_v53_complete_review');
reconcileAllV53CrossVolumeLinks(VOLUMES_DIR);

for (const item of manifest) {
  const fullPath = path.join(ROOT, item.file);
  const updatedMd = fs.readFileSync(fullPath, 'utf8');
  item.words = updatedMd.split(/\s+/).filter(Boolean).length;
}

fs.writeFileSync(
  path.join(BUILD_DIR, 'volumes_manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf8'
);
console.log(`[5/6] Manifesto salvo em build/volumes_manifest.json (unresolved links: ${unresolvedCount}).`);
console.log('[6/6] Particionamento nos 11 Volumes Autocontidos concluído com sucesso!');

const fs = require('fs');
const path = require('path');

const BROKEN_LINK_MAP = {
  'Canvas: Team Canvas (Alex Ivanov, 2015)': 'Canvas: *Team Canvas* (Alex Ivanov, 2015)',
  'Permissão para dizer "ainda não": os 10 sinais de que começar hoje é uma armadilha': 'Permissão para dizer "ainda não", os 10 sinais de que começar hoje é uma armadilha',
  'Canvas: Business Model Canvas (Alexander Osterwalder, 2010)': 'Canvas: *Business Model Canvas* (Alexander Osterwalder, 2010)',
  'Canvas: Hypothesis Canvas (autoral IGNIÇÃO)': 'Canvas: *Hypothesis Canvas* (autoral IGNIÇÃO)',
  'CAPÍTULO 4 — NON-COMPETE, NON-SOLICIT E PROTEÇÃO DE ATIVOS INTANGÍVEIS NO BRASIL': 'CAPÍTULO 4 — NÃO-CONCORRÊNCIA E NÃO-SOLICITAÇÃO NO BRASIL',
  'CAPÍTULO 4 — NON-COMPETE, NON-SOLICIT E PROTEÇÃO DE ATIVOS INTANGÍVEIS': 'CAPÍTULO 4 — NÃO-CONCORRÊNCIA E NÃO-SOLICITAÇÃO NO BRASIL',
  'CAPÍTULO 3 — DISPUTA SOCIETÁRIA, DEADLOCK E SAÍDA DE SÓCIO': 'CAPÍTULO 3 — DISPUTA SOCIETÁRIA E SAÍDA DE SÓCIO',
  'CAPÍTULO 5: CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL': 'CAPÍTULO 5 — CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL',
  'CAPÍTULO 12: FINANCIAMENTO NÃO-DILUITIVO': 'CAPÍTULO 12 — FINANCIAMENTO NÃO-DILUITIVO',
  'CAPÍTULO 7: MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR': 'CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR',
  'CAPÍTULO 8: FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO': 'CAPÍTULO 8 — FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO',
  'CAPÍTULO 2: INTELIGÊNCIA COMPETITIVA, POSICIONAMENTO E CATEGORY DESIGN': 'CAPÍTULO 2 — INTELIGÊNCIA COMPETITIVA, POSICIONAMENTO E CATEGORY DESIGN',
  'CAPÍTULO 9: LGPD, COMPLIANCE E GOVERNANÇA DE DADOS': 'CAPÍTULO 9 — LGPD, COMPLIANCE E GOVERNANÇA DE DADOS',
  'CAPÍTULO 9: GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA': 'CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA',
  'CAPÍTULO 9: CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES': 'CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES',
  'CAPÍTULO 11 — PIVÔ: QUANDO, COMO E COM QUE DADOS MUDAR DE DIREÇÃO': 'CAPÍTULO 11 — PIVOT: QUANDO, COMO E COM QUE DADOS MUDAR DE DIREÇÃO',
  'Template: Entrevista com Switcher (JTBD, entrevista de troca)': 'Template: Entrevista com Switcher (JTBD: entrevista de troca)',
  'Template: Checklist de Pre-Launch': 'Template: Checklist de Pré-Lançamento (Go-To-Market)',
  'Template: Term Sheet Anotado': 'Template: Term Sheet Anotado, Guia de Leitura',
  'Template: Board Deck (Apresentação para o Conselho)': 'Template: Board Deck e Prontidão para M&A (Apresentação para o Conselho)',
  'Canvas: Org Chart Evolution': 'Canvas: Org Chart Evolution (Arquitetura Organizacional de 20 a 250 Pessoas)',
  'Template: Matriz de Parcerias': 'Template: Matriz de Parcerias (Pipeline dos 5 Tipos de Canal)',
  'CAPÍTULO 13 — CULTURA ORGANIZACIONAL COMO DISCIPLINA: CONSTRUÇÃO, MANUTENÇÃO E EVOLUÇÃO': 'CAPÍTULO 13 — CULTURA COMO DISCIPLINA E EM SITUAÇÕES CRÍTICAS (HIPERCRESCIMENTO, M&A E REMOTO)',
  'CAPÍTULO 13 — CULTURA ORGANIZACIONAL COMO DISCIPLINA': 'CAPÍTULO 13 — CULTURA COMO DISCIPLINA E EM SITUAÇÕES CRÍTICAS (HIPERCRESCIMENTO, M&A E REMOTO)',
  'CAPÍTULO 5 — CONTRATOS EMPRESARIAIS E OPERACIONAIS PARA STARTUPS': 'CAPÍTULO 5 — CONTRATOS EMPRESARIAIS PARA STARTUPS',
  'CAPÍTULO 3 — PROPRIEDADE INTELECTUAL PRÁTICA: INPI, MARCAS, PATENTES E SOFTWARE': 'CAPÍTULO 3 — PROPRIEDADE INTELECTUAL E INPI',
  'CAPÍTULO 6 — DIREITO DO TRABALHO PARA STARTUPS: CLT, PJ, PEJOTIZAÇÃO E PASSIVOS': 'CAPÍTULO 6 — DIREITO DO TRABALHO PARA STARTUPS',
  'CAPÍTULO 10 — PRODUTO AI-NATIVE: ARQUITETURA, DEFENSABILIDADE, CUSTOS DE INFERÊNCIA E UX PROBABILÍSTICA': 'CAPÍTULO 10 — PRODUTO AI-NATIVE: ARQUITETURA, DEFENSABILIDADE E ECONOMIA DE TOKENS',
  'CAPÍTULO 12 — FINANCIAMENTO NÃO DILUITIVO E FOMENTO PÚBLICO: FINEP, BNDES, FAPESP PIPE E EMBRAPII': 'CAPÍTULO 12 — FINANCIAMENTO NÃO-DILUITIVO',
};

function loadFixesForVol(volNum) {
  const dir = __dirname;
  if (volNum === 10) {
    const a = fs.existsSync(path.join(dir, 'v53_fixes_vol_10a.json'))
      ? JSON.parse(fs.readFileSync(path.join(dir, 'v53_fixes_vol_10a.json'), 'utf8'))
      : [];
    const b = fs.existsSync(path.join(dir, 'v53_fixes_vol_10b.json'))
      ? JSON.parse(fs.readFileSync(path.join(dir, 'v53_fixes_vol_10b.json'), 'utf8'))
      : [];
    const c = fs.existsSync(path.join(dir, 'v53_fixes_vol_10c.json'))
      ? JSON.parse(fs.readFileSync(path.join(dir, 'v53_fixes_vol_10c.json'), 'utf8'))
      : [];
    return [...a, ...b, ...c];
  }
  const fn = path.join(dir, `v53_fixes_vol_${volNum}.json`);
  if (!fs.existsSync(fn)) return [];
  return JSON.parse(fs.readFileSync(fn, 'utf8'));
}

function applyV53CompleteReview(volNum, content) {
  const lines = content.split(/\r?\n/);
  const fixes = loadFixesForVol(volNum);

  let applied = 0;
  for (const item of fixes) {
    const idx = Number(item.line) - 1;
    if (idx >= 0 && idx < lines.length && typeof item.newText === 'string') {
      lines[idx] = item.newText;
      applied++;
    }
  }

  // Re-split in case any newText expanded into multiple lines
  let outLines = lines.join('\n').split('\n');

  // Track current Fase/Capítulo to disambiguate any repeated generic H3 headings
  let curUnitLabel = `VOL. ${volNum}`;
  const seenHeadings = new Map();

  for (let i = 0; i < outLines.length; i++) {
    let l = outLines[i];

    const mH2 = l.match(/^##\s+((?:FASE|CAPÍTULO)\s+\d+)\b/i);
    if (mH2) {
      curUnitLabel = mH2[1].toUpperCase();
    }

    // Disambiguate generic repeated H3 headings if still generic
    if (/^###\s+MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE\s*$/i.test(l)) {
      l = `### MANUAL PASSO A PASSO DOS FRAMEWORKS (${curUnitLabel})`;
    } else if (/^###\s+TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE\s*$/i.test(l)) {
      l = `### TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS (${curUnitLabel})`;
    } else if (/^###\s+CANVASES VISUAIS DESTA FASE \(COM EXEMPLOS BRASILEIROS PREENCHIDOS\)\s*$/i.test(l)) {
      l = `### CANVASES VISUAIS (${curUnitLabel}: EXEMPLOS BRASILEIROS PREENCHIDOS)`;
    }

    // Fix broken internal links
    for (const [bad, good] of Object.entries(BROKEN_LINK_MAP)) {
      if (l.includes(`#${bad}|`) || l.includes(`#${bad}]]`) || l.includes(`[[${bad}|`) || l.includes(`[[${bad}]]`)) {
        l = l
          .split(`#${bad}|`).join(`#${good}|`)
          .split(`#${bad}]]`).join(`#${good}]]`)
          .split(`[[${bad}|`).join(`[[${good}|`)
          .split(`[[${bad}]]`).join(`[[${good}]]`);
      }
    }

    // Fix links to disambiguated generic headings
    if (l.includes('MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE')) {
      l = l.replace(/#MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE(?=[\]|])/g, `#MANUAL PASSO A PASSO DOS FRAMEWORKS (${curUnitLabel})`);
      l = l.replace(/\[\[MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE(?=[\]|])/g, `[[MANUAL PASSO A PASSO DOS FRAMEWORKS (${curUnitLabel})`);
    }
    if (l.includes('TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE')) {
      l = l.replace(/#TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE(?=[\]|])/g, `#TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS (${curUnitLabel})`);
      l = l.replace(/\[\[TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE(?=[\]|])/g, `[[TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS (${curUnitLabel})`);
    }
    if (l.includes('CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)')) {
      l = l.replace(/#CANVASES VISUAIS DESTA FASE \(COM EXEMPLOS BRASILEIROS PREENCHIDOS\)(?=[\]|])/g, `#CANVASES VISUAIS (FASE 0: EXEMPLOS BRASILEIROS PREENCHIDOS)`);
      l = l.replace(/\[\[CANVASES VISUAIS DESTA FASE \(COM EXEMPLOS BRASILEIROS PREENCHIDOS\)(?=[\]|])/g, `[[CANVASES VISUAIS (${curUnitLabel}: EXEMPLOS BRASILEIROS PREENCHIDOS)`);
    }

    // Mechanical hygiene
    l = l
      .replace(/:\s+e\b/g, ', e')
      .replace(/:\s+mas\b/g, ', mas')
      .replace(/:\s+ou\b/g, ', ou')
      .replace(/:\s+que\b/g, ' que')
      .replace(/\|\s*:\s*(?=\|)/g, '| - ')
      .replace(/\bIbs\/cbs\b/g, 'IBS/CBS')
      .replace(/\bIbs\b/g, 'IBS')
      .replace(/\bCbs\b/g, 'CBS')
      .replace(/\bpaís idosos\b/gi, 'pais idosos')
      .replace(/\bespecífica o\b/g, 'especifica o')
      .replace(/\bespecífica a\b/g, 'especifica a')
      .replace(/\bEspecífica o\b/g, 'Especifica o')
      .replace(/\bEspecífica a\b/g, 'Especifica a')
      .replace(/\bpública o\b/g, 'publica o')
      .replace(/\bpública a\b/g, 'publica a')
      .replace(/\bPública o\b/g, 'Publica o')
      .replace(/\bPública a\b/g, 'Publica a')
      .replace(/\bprática o\b/g, 'pratica o')
      .replace(/\bigual a bias\b/gi, 'viés')
      .replace(/\bmenos cem a mais cem\b/gi, '-100 a +100')
      .replace(/;;+/g, ';');

    // Strip any residual close-mold bold label prefix
    l = l.replace(
      /^\*\*(?:Síntese prática em|O que fica de|Ponto de chegada em|Regra de bolso para|Fechamento operacional|Resultado na trincheira|Da teoria à rotina operacional|Compromisso de execução em|Lição consolidada em|Impacto direto no caixa e na execução|Governança prática em|Virada de chave em)[^*]*\*\*\s*/i,
      ''
    );

    // Strip any accidental em-dash outside H1/H2 headings and wikilink targets
    if (!/^#{1,2}\s+/.test(l) && l.includes('—')) {
      // Preserve wikilink targets [[Target — With Dash|Label]]
      const links = [];
      l = l.replace(/\[\[[^\]]+\]\]/g, (m) => {
        // Inside [[target|label]], only replace em-dash in label, never in target!
        const pipeIdx = m.indexOf('|');
        if (pipeIdx !== -1) {
          const target = m.slice(0, pipeIdx);
          const label = m.slice(pipeIdx).replace(/\s*—\s*/g, ': ');
          links.push(target + label);
        } else {
          links.push(m);
        }
        return `__WLINK_${links.length - 1}__`;
      });
      l = l.replace(/\s*—\s*/g, ': ');
      l = l.replace(/__WLINK_(\d+)__/g, (_, idx) => links[Number(idx)]);
    }

    // Ensure even ** parity on every line
    const stars = (l.match(/\*\*/g) || []).length;
    if (stars % 2 !== 0) {
      l = l.replace(/\*\*/g, '');
    }

    outLines[i] = l;
  }

  console.log(`[v5.3 Complete Review] Vol ${volNum}: applied ${applied} line-indexed fixes.`);
  return outLines
    .join('\n')
    .replace(
      /---\nAplique o ritual de passagem de fase toda última sexta-feira do mês antes de abrir o planejamento do mês seguinte\.\n(?=## CAPÍTULO 3)/g,
      '---\n\n'
    )
    .replace(/([^\n])\n---\n/g, '$1\n\n---\n')
    .replace(/\n---\n([^\n])/g, '\n---\n\n$1');
}

const VOL_SLUGS = {
  1: 'IGNICAO-Vol-1-Ideacao',
  2: 'IGNICAO-Vol-2-Descoberta-e-Mercado',
  3: 'IGNICAO-Vol-3-Experimentos-e-Prototipagem',
  4: 'IGNICAO-Vol-4-Tracao-e-PMF',
  5: 'IGNICAO-Vol-5-Financas-e-Captacao',
  6: 'IGNICAO-Vol-6-Receita-e-Pessoas',
  7: 'IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes',
  8: 'IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca',
  9: 'IGNICAO-Vol-9-Maturidade-e-Exit',
  10: 'IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario',
  11: 'IGNICAO-Vol-11-Workbook-Cases-e-Exercicios',
};

function normHeadingKey(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function resolveCanonicalHeading(hMap, firstH1, targetHeading) {
  if (!targetHeading) return firstH1;
  if (hMap.has(targetHeading)) return targetHeading;
  const keys = Array.from(hMap.keys());

  const mFase = targetHeading.match(/^FASE\s+(\d+)\b/i);
  if (mFase) {
    const f = keys.find((k) => new RegExp('^FASE\\s+' + mFase[1] + '\\b', 'i').test(k));
    if (f) return f;
  }
  const mCap = targetHeading.match(/^CAP[ÍI]TULO\s+(\d+)\b/i);
  if (mCap) {
    const c = keys.find((k) => new RegExp('^CAP[ÍI]TULO\\s+' + mCap[1] + '\\b', 'i').test(k));
    if (c) return c;
  }

  const nTarget = normHeadingKey(targetHeading);
  if (nTarget === 'indice geral de frameworks da colecao') {
    const idxMatch = keys.find((k) => normHeadingKey(k).startsWith('indice geral de frameworks'));
    if (idxMatch) return idxMatch;
  }
  const exactNorm = keys.find((k) => normHeadingKey(k) === nTarget);
  if (exactNorm) return exactNorm;

  const coreTarget = normHeadingKey(targetHeading.replace(/\([^)]*\)/g, '').split(/[,:—–-]/)[0]);
  if (coreTarget.length > 6) {
    const prefixMatch = keys.find((k) => {
      const nk = normHeadingKey(k);
      if (nk.length <= 6) return false;
      const coreK = normHeadingKey(k.replace(/\([^)]*\)/g, '').split(/[,:—–-]/)[0]);
      return nk.startsWith(coreTarget) || (coreK.length > 6 && coreTarget.startsWith(coreK));
    });
    if (prefixMatch) return prefixMatch;
  }

  // Fallback for Por Que Todas as Vantagens Competitivas São Temporárias...
  if (nTarget.includes('vantagens competitivas sao temporarias')) {
    const vMatch = keys.find((k) => normHeadingKey(k).includes('vantagens competitivas sao temporarias'));
    if (vMatch) return vMatch;
  }

  return firstH1;
}

function reconcileAllV53CrossVolumeLinks(volumesDir) {
  const headingsByVol = {};
  const firstH1ByVol = {};
  const linesByVol = {};

  for (let v = 1; v <= 11; v++) {
    const slug = VOL_SLUGS[v];
    const fp = path.join(volumesDir, `${slug}.md`);
    if (!fs.existsSync(fp)) continue;
    const lines = fs.readFileSync(fp, 'utf8').split('\n');
    linesByVol[v] = lines;
    const hMap = new Map();
    let firstH1 = '';
    for (const line of lines) {
      const m = line.match(/^(#{1,6})\s+(.+)$/);
      if (m) {
        const hText = m[2].trim();
        if (!firstH1) firstH1 = hText;
        hMap.set(hText, (hMap.get(hText) || 0) + 1);
      }
    }
    headingsByVol[slug] = hMap;
    headingsByVol[v] = hMap;
    firstH1ByVol[slug] = firstH1;
    firstH1ByVol[v] = firstH1;
  }

  let fixedLinks = 0;
  for (let v = 1; v <= 11; v++) {
    const slug = VOL_SLUGS[v];
    const lines = linesByVol[v];
    if (!lines) continue;

    let changed = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line.includes('[[')) continue;
      const isTableLine = /^\s*\|/.test(line);

      const newLine = line.replace(/\[\[([^\]|]+?)(\\)?(\|[^\]]+)?\]\]/g, (full, rawTarget, escBs, aliasPart) => {
        let t = rawTarget.replace(/\\$/, '').trim();
        if (t.startsWith('#IGNICAO-Vol-')) {
          t = t.slice(1);
        }

        let targetVolSlug = slug;
        let targetHeading = t;

        if (t.includes('#')) {
          const [vf, hd] = t.split('#');
          if (vf) {
            const mVolNum = vf.match(/^IGNICAO-Vol-(\d+)\b/i);
            targetVolSlug = mVolNum && VOL_SLUGS[Number(mVolNum[1])] ? VOL_SLUGS[Number(mVolNum[1])] : vf;
          }
          targetHeading = hd;
        } else if (/^IGNICAO-Vol-(\d+)\b/i.test(t)) {
          const mVolNum = t.match(/^IGNICAO-Vol-(\d+)\b/i);
          targetVolSlug = mVolNum && VOL_SLUGS[Number(mVolNum[1])] ? VOL_SLUGS[Number(mVolNum[1])] : t;
          targetHeading = '';
        }

        const hMap = headingsByVol[targetVolSlug];
        if (!hMap) return full;

        const canonicalHeading = resolveCanonicalHeading(hMap, firstH1ByVol[targetVolSlug], targetHeading);
        const newTargetPrefix =
          targetVolSlug === slug ? `#${canonicalHeading}` : `${targetVolSlug}#${canonicalHeading}`;

        const pipeSep = aliasPart || '';
        const rebuilt = `[[${newTargetPrefix}${pipeSep}]]`;
        if (rebuilt !== full) {
          fixedLinks++;
          changed = true;
        }
        return rebuilt;
      });

      if (newLine !== line) {
        lines[i] = newLine;
      }
    }

    if (changed) {
      fs.writeFileSync(path.join(volumesDir, `${slug}.md`), lines.join('\n'), 'utf8');
    }
  }
  console.log(`[v5.3 Link Reconciler] Reconciled ${fixedLinks} cross-volume/internal wikilinks to canonical headings.`);
}

module.exports = { applyV53CompleteReview, reconcileAllV53CrossVolumeLinks };


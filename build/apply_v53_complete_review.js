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
      .replace(/;;+/g, ';')
      // "não-" with hyphen -> space (Novo Acordo Ortográfico)
      .replace(/\bnão-([a-zà-ú]+)/g, 'não $1')
      .replace(/\bNão-([a-zà-úA-ZÀ-Ú]+)/g, 'Não $1')
      .replace(/\bNÃO-([A-ZÀ-Ú]+)/g, 'NÃO $1')
      // Bold numbered label followed by comma ("**Bloco 3, Alternativa**") -> colon
      .replace(
        /\*\*((?:Bloco|Passo|Etapa|Fase|Item|Pilar|Regra|Erro|Camada|Nível|Critério|Teste|Sinal|Pergunta|Gatilho|Risco|Frente|Portão|Gate|Ato|Cenário|Módulo|Parte|Seção|Ponto|Mandamento|Princípio|Dimensão|Alavanca|Filtro|Trava|Cláusula)\s+\d+),\s+/gi,
        '**$1: '
      )
      .replace(
        /^(#{2,6}\s+(?:Bloco|Passo|Etapa|Fase|Item|Pilar|Regra|Erro|Camada|Nível|Critério|Teste|Sinal|Pergunta|Gatilho|Risco|Frente|Portão|Gate)\s+\d+),\s+/i,
        '$1: '
      )
      // Ellipsis placeholders `[...]` -> `[preencher]` and clean ellipses
      .replace(/`\[\.\.\.\]`/g, '`[preencher]`')
      .replace(/\[\.\.\.\]/g, '[preencher]')
      .replace(/\.\.\.|…/g, '.');

    // Vary repeated "Como rodar na segunda-feira às 9h" subheadings
    if (/^#{3,6}\s+.*segunda-feira às 9h/i.test(l)) {
      const mH = l.match(/^(#{3,6})\s+/);
      const variants = [
        'Roteiro de aplicação prática na operação',
        'Execução prática com a equipe',
        'Passos práticos de implantação',
        'Protocolo prático de execução',
        'Aplicação imediata na rotina da empresa',
      ];
      l = `${mH[1]} ${variants[i % variants.length]}`;
    }

    // English "founder(s)" / "co-founder(s)" -> Portuguese (preserving proper framework names)
    if (/founder/i.test(l) && !/^#{1,2}\s+/.test(l)) {
      const kept = [];
      l = l.replace(
        /\b(?:Founder Mode|Founder-Market Fit|Founder-Product Fit|Founder-Led Sales|Founder-Led Growth|Founder Institute|Founder Execution Scorecard|Female Founders|Solo Founder)\b/gi,
        (m) => {
          kept.push(m);
          return `__FKEEP_${kept.length - 1}__`;
        }
      );
      l = l
        .replace(/\*co-founders\*/gi, 'cofundadores')
        .replace(/\*co-founder\*/gi, 'cofundador')
        .replace(/\*founders\*/gi, 'fundadores')
        .replace(/\*founder\*/gi, 'fundador')
        .replace(/\bco-founders\b/gi, 'cofundadores')
        .replace(/\bco-founder\b/gi, 'cofundador')
        .replace(/\bFounders\b/g, 'Fundadores')
        .replace(/\bfounders\b/g, 'fundadores')
        .replace(/\bFounder\b/g, 'Fundador')
        .replace(/\bfounder\b/g, 'fundador');
      l = l.replace(/__FKEEP_(\d+)__/g, (_, idx) => kept[Number(idx)]);
    }

    // Reduce overused "crítico(a)(s)" in prose (preserving technical terms and headings)
    if (/crític[oa]s?\b/i.test(l) && !/^#{1,6}\s+/.test(l) && !l.includes('[[')) {
      const cKept = [];
      l = l.replace(
        /\b(?:missão crítica|caminho crítico|massa crítica|pensamento crítico|senso crítico|análise crítica|leitura crítica|infraestrutura crítica)\b/gi,
        (m) => {
          cKept.push(m);
          return `__CKEEP_${cKept.length - 1}__`;
        }
      );
      l = l
        .replace(/\bcríticos\b/g, 'decisivos')
        .replace(/\bcríticas\b/g, 'decisivas')
        .replace(/\bcrítico\b/g, 'decisivo')
        .replace(/\bcrítica\b/g, 'decisiva')
        .replace(/\bCríticos\b/g, 'Decisivos')
        .replace(/\bCríticas\b/g, 'Decisivas')
        .replace(/\bCrítico\b/g, 'Decisivo')
        .replace(/\bCrítica\b/g, 'Decisiva');
      l = l.replace(/__CKEEP_(\d+)__/g, (_, idx) => cKept[Number(idx)]);
    }

    // Reduce mechanical semicolons in prose and bullets
    if (l.includes(';') && !/^\s*\|/.test(l) && !/^```/.test(l) && !l.includes('&nbsp;')) {
      l = l
        .replace(
          /;\s+(mas|porém|contudo|todavia|entretanto|pois|porque|já que|visto que|dado que|embora|ainda que|mesmo que|enquanto|ao passo que|onde|quando|como|ou|e|nem|logo|portanto|assim|por isso|além disso|em vez disso|pelo contrário|ou seja|isto é|por exemplo|especialmente|inclusive|sobretudo)\b/gi,
          ', $1'
        )
        .replace(/;\s+([a-zà-ú]+ndo)\b/g, ', $1')
        .replace(/;\s*$/g, '.');
      if (!/^\s*[-*\d]/.test(l) && !/\(\d+\)|\b[a-d]\)/.test(l)) {
        l = l.replace(/;\s+([a-zà-ú])/g, (_, ch) => `. ${ch.toUpperCase()}`);
      } else {
        l = l.replace(/;\s+/g, ', ');
      }
    }

    // Fix one-word sentences in prose paragraphs
    if (!/^\s*[|>`#-]|^\s*$/.test(l)) {
      l = l
        .replace(/^([A-ZÀ-Ú][a-zà-ú]{2,20})\.\s+([A-ZÀ-Ú])/g, '**$1:** $2')
        .replace(/Precisa\.\s+Sempre\.\s+Documente/g, 'Precisa sempre: documente')
        .replace(/\.\s+Concordo\./g, ', com o que concordo integralmente.')
        .replace(/\.\s+Raro\.\s+/g, ', o que é raro: ')
        .replace(/\.\s+Rápido\.\s+/g, ', de forma rápida e direta: ')
        .replace(/\.\s+Pare\.\s+/g, ', pare imediatamente: ')
        .replace(/\.\s+Separe\.\s+/g, ', separando as conversas: ')
        .replace(/\.\s+Investigue\./g, ' e exige investigação imediata.')
        .replace(/\.\s+Depende\.\s+/g, ': depende do contexto. ')
        .replace(/\.\s+Some\.\s+/g, ' e some os pontos: ')
        .replace(/\.\s+Clássico\.\s+/g, ' (caso clássico): ')
        .replace(/\.\s+Reajuste\./g, ', reajustando a rota imediatamente.')
        .replace(/\.\s+Processar\./g, ' e processar o luto.')
        .replace(/\.\s+Honesta\./g, ' e honesta.')
        .replace(/([a-zà-ú0-9)"])\.\s+([A-ZÀ-Ú][a-zà-ú]{2,18})\.(?=\s+[A-ZÀ-Ú]|$)/g, '$1 ($2).');
    }

    // Strip any residual close-mold bold label prefix
    l = l.replace(
      /^\*\*(?:Síntese prática em|O que fica de|Ponto de chegada em|Regra de bolso para|Fechamento operacional|Resultado na trincheira|Da teoria à rotina operacional|Compromisso de execução em|Lição consolidada em|Impacto direto no caixa e na execução|Governança prática em|Virada de chave em)[^*]*\*\*\s*/i,
      ''
    );

    // Strip ALL em-dashes (in H1/H2 headings, prose, tables, and wikilinks)
    if (l.includes('—')) {
      l = l.replace(/\s*—\s*/g, ': ');
    }

    // Ensure even ** parity on every line
    const stars = (l.match(/\*\*/g) || []).length;
    if (stars % 2 !== 0) {
      l = l.replace(/\*\*/g, '');
    }

    outLines[i] = l;
  }

  let joined = outLines
    .join('\n')
    .replace(
      /---\nAplique o ritual de passagem de fase toda última sexta-feira do mês antes de abrir o planejamento do mês seguinte\.\n(?=## CAPÍTULO 3)/g,
      '---\n\n'
    );

  if (volNum === 1) {
    // Fix fast-track chapter references in Sobre este livro and add Canonical Rulers Table (Passo 6 / DA-273)
    joined = joined
      .replace(
        'Cap. 7: Comércio Exterior, Importação Ásia-Brasil e TTD 409',
        'Cap. 7: Precificação e Margens, mais Vol. 10, Cap. 6: Comércio Exterior, Importação Ásia-Brasil e TTD 409'
      )
      .replace(
        'Cap. 6: *Franchising, Licenciamento e COF, Lei 13.966*',
        'Cap. 5: *Canais Indiretos, Franchising e COF, Lei 13.966/2019*'
      );
    const rulersTable = [
      '## Tabela Canônica de Réguas e Métricas da Coleção',
      '',
      'Para evitar divergências de parâmetros entre fases, todos os dez volumes adotam os seguintes pisos e tetos operacionais como referência única:',
      '',
      '| Métrica ou Decisão Operacional | Régua Canônica da Coleção | Casa Principal |',
      '| :--- | :--- | :--- |',
      '| **Reserva financeira pessoal para dedicação integral** | **12 meses** de custo de vida familiar (piso mínimo de **6 meses** com gatilho de corte pré-acordado em casa) | Fase 0 (Vol. 1) |',
      '| **Lote de entrevistas de descoberta de cliente** | **20 a 30 entrevistas** conduzidas em lotes de 5 até a saturação de padrões (piso de 15 em B2B de nicho e até 50 em B2C amplo) | Fase 4 (Vol. 2) |',
      '| **Escala de intensidade da dor (*Pain Level*)** | **1** (inexistente), **2** (latente), **3** (consciente sem busca ativa), **4** (busca ativa com improviso), **5** (urgente com orçamento liberado) | Fase 4 (Vol. 2) |',
      '| **Declaração de *Product-Market Fit* (PMF)** | **≥ 40%** "muito decepcionado" (Sean Ellis), curva de coorte estabilizada, **GRR ≥ 85%** e **NRR ≥ 100%** em B2B (≥ 110% em Enterprise) | Fase 13 (Vol. 4) |',
      '| **Eficiência comercial (*LTV/CAC*, *Payback* e *Magic Number*)** | **LTV/CAC ≥ 3x** (calculado sobre margem bruta), **CAC Payback ≤ 12 meses** em PME (≤ 18 meses em Enterprise) e **Magic Number ≥ 0,75** | Fase 14 e Cap. 3 (Vol. 5) |',
      '| **Marco financeiro de Lucas e Marina na Série A** | Entrada na Fase 14 com **R$ 200 mil de MRR (R$ 2,4M de ARR, 160 clientes)** e fechamento da Série A em **R$ 400 mil de MRR (R$ 4,8M de ARR)** | Fase 14 e Cap. 3 (Vol. 5) |',
      '| **Retenção em conta garantia (*Escrow*) em M&A** | **10% a 15%** do preço da transação retidos por **12 a 24 meses** para cobrir contingências (até 20% se houver passivo relevante identificado) | Fase 20 (Vol. 9) |',
      '| **Antecedência de preparação para M&A ou IPO** | **24 a 36 meses** antes da transação para auditoria contábil, limpeza societária, governança e planejamento tributário | Fase 20 (Vol. 9) |',
      '',
      '---',
      '',
      '## Mapa da Coleção IGNIÇÃO',
    ].join('\n');
    joined = joined.replace('## Mapa da Coleção IGNIÇÃO', rulersTable);
  } else if (volNum === 4) {
    // Add Legal Readiness Gate before Phase 14 (DA-269)
    const gateCallout = [
      '> [!warning] Pré-condição para escalar e Portão Jurídico Pré-Captação (Fase 18 antes da Fase 14)',
      '> Estruturar e escalar exigem PMF comprovado na Fase 13 e os **quatro itens obrigatórios do Portão Jurídico da Fase 18 (Vol. 8)** concluídos antes de abrir o *data room* da Fase 14 (Vol. 5): **(1) Contrato Social e Acordo de Sócios** assinados com regras de voto e saída; **(2) Contratos de *Vesting* e *Cliff*** formalizados para todos os fundadores e executivos-chave; **(3) Termos de Cessão Irrevogável de Propriedade Intelectual** (Leis 9.609/1998 e 9.279/1996) assinados por todos os sócios, empregados e prestadores que escreveram código ou criaram ativos; e **(4) *Cap Table* limpo e conciliado**, sem promessas verbais de participação.',
    ].join('\n');
    joined = joined.replace(
      /> \[!warning\] Pré-condição para escalar\n> Estruturar e escalar assumem PMF comprovado na Fase 13\.[^\n]+/,
      gateCallout
    );
  } else if (volNum === 8) {
    // Update Decreto 11.034/2022 heading and diagram in Vol 8
    joined = joined
      .replace(
        '### 4. Atendimento no PROCON, plataforma Consumidor.gov.br e regras do SAC (Decreto 11.034/2022)',
        '### 4. Atendimento no PROCON, plataforma Consumidor.gov.br e regras do SAC (Decreto 11.034/2022 e Decreto 13.135/2026)'
      )
      .replace(
        'Decreto 11.034/2022 (atualiz. 2026) Regras do SAC e cancelamento imediato pelos mesmos canais',
        'Decreto 13.135/2026 (substitui o Dec. 11.034 em 02/11/2026) SAC humano 8h-20h, triagem IA e cancelamento imediato'
      );
  } else if (volNum === 9) {
    // Reorder Epilogue so Espelho Final comes before the final farewell and "Boa sorte." truly closes the book
    const epilogoTarget = /---\n\nVocê chegou ao fim da jornada[\s\S]*$/;
    const mEpilogo = joined.match(epilogoTarget);
    if (mEpilogo) {
      const reorderedEpilogo = [
        '---',
        '',
        '### O Espelho Final da Jornada: Qual Construtor Você Escolhe Ser a Partir de Amanhã às 9h?',
        '',
        'De São Paulo e Florianópolis com **Lucas e Marina**, passando por Belo Horizonte com a **Dra. Camila**, por Curitiba com **Henrique** e pelo Recife e Goiânia com **Rafael e Bia**, cada decisão técnica desta obra converge para uma única escolha pessoal de caráter e disciplina.',
        '',
        'Ao concluir este nono volume da jornada operacional e antes de consultar os *playbooks* setoriais e o glossário do Volume 10, guarde consigo estas três perguntas para toda a sua vida de construtor:',
        '',
        '1. **O Teste da Verdade Científica:** Diante de cada nova aposta da sua carreira, você terá a humildade de tratar suas ideias mais brilhantes apenas como hipóteses a serem testadas na rua com clientes reais antes de queimar capital e anos de vida?',
        '2. **O Teste da Trincheira Humana:** Quando o inverno chegar (porque em toda empresa que dura dez anos o inverno sempre chega), as pessoas que trabalharam com você poderão dizer que você falou a verdade, assumiu a linha de frente e tratou cada ser humano com dignidade?',
        '3. **O Teste da Mesa de Jantar:** Você está construindo sua empresa de um jeito que, quando o ciclo terminar (seja em um grande *exit*, seja em uma máquina perene de dividendos), sua saúde física e as pessoas que você mais ama ainda estarão sentadas ao seu lado para comemorar?',
        '',
        '**Regra de Sobrevivência:** Nenhuma venda empresarial compensa uma casa perdida ou a renúncia à própria integridade. Construa com ambição no mercado e lealdade inegociável aos seus valores e à sua família.',
        '',
        '**O Ritual de Segunda-Feira às 9h:** Escolha a única fase ou capítulo desta coleção onde mora o gargalo real da sua empresa hoje, feche todas as outras abas e execute o primeiro passo concreto antes do meio-dia.',
        '',
        '---',
        '',
        'Você chegou ao fim da jornada ou talvez só tenha aberto esta página por curiosidade. De qualquer forma, um recado.',
        '',
        'Esta obra foi escrita para acompanhar quem constrói em uma jornada longa, íngreme, frequentemente solitária, ocasionalmente luminosa e sempre mais exigente do que quem observa de fora imagina. Para você, fundador ou fundadora que ergue um negócio real no Brasil e consulta estes volumes nos momentos de decisão decisiva da sua trajetória, as cerca de 915 mil palavras reunidas nestes dez volumes principais (nove volumes de jornada nas Fases 0 a 20 e o Volume 10 de *playbooks* setoriais e referências, acompanhados do Volume 11 de casos e simulações) são o resultado de anos organizando em método o que aprendi na trincheira, o que vi funcionar ou quebrar em centenas de empresas e o que gostaria de ter lido quando comecei. Um manual canônico é, no fundo, uma carta de navegação escrita para poupar cicatrizes desnecessárias a quem vem depois.',
        '',
        'Algumas reflexões finais.',
        '',
        '**Sobre métodos e modelos.** Tudo o que está nestas páginas é ferramenta de decisão que precisa ser calibrada para a realidade do seu caixa e do seu setor. Nenhum capítulo desta coleção substitui a leitura direta da fase real da sua empresa nem resolve sozinho o dilema específico que você enfrentará às 2h da manhã. Use estas páginas como bússola que aponta a direção estratégica, lembrando que no empreendedorismo real o caminho exato precisa ser aberto a cada dia.',
        '',
        '**Sobre recomeços e encerramentos.** Se uma tese não parar de pé, encerrar a operação com transparência, contas pagas e respeito à equipe preserva o seu nome e a sua capacidade de empreender de novo. Boa parte dos fundadores que construíram grandes companhias no Brasil passou antes por um negócio que não escalou: o tropeço tratado com honestidade intelectual vira repertório prático para acertar na tentativa seguinte.',
        '',
        '**Sobre o tempo de maturação.** Construir uma empresa durável no Brasil leva mais tempo do que os relatos de redes sociais fazem parecer: a maioria das companhias sólidas que você admira levou de 8 a 15 anos de execução consistente para chegar à maturidade. Antes de aparecer em qualquer manchete de captação, uma operação real costuma acumular anos de dedicação consistente nos bastidores ajustando produto, canal e margem.',
        '',
        '**Sobre as pessoas ao seu redor.** Ao longo das 21 fases (Fases 0 a 20) e cerca de 915 mil palavras desta coleção, examinamos ferramentas técnicas para produto, vendas, finanças, governança e regulação, mas nenhuma planilha substitui a escolha de com quem você divide a trincheira. A decisão sobre quem são seus cofundadores, seus primeiros líderes executivos, seus investidores de conselho e seu parceiro ou parceira de vida definirá tanto o valor da companhia quanto a paz dentro da sua casa.',
        '',
        '**Sobre você.** Construir uma empresa ao longo de uma década transforma quem você é: desenvolve disciplina analítica, clareza sob pressão e capacidade de decidir na incerteza, mas também cobra um preço alto se a saúde física e a presença na família forem deixadas para depois. A recomendação final desta coleção é simples: proteja deliberadamente a sua saúde e as pessoas que caminham ao seu lado fora da empresa, porque a operação dentro dela sempre pedirá todo o espaço que você deixar aberto.',
        '',
        '**Mantenha este volume ao alcance da mão.** Esta coleção foi desenhada para funcionar como manual de consulta permanente do fundador brasileiro a cada mudança de estágio. Reabra estas páginas quando precisar desenhar uma segunda curva, organizar o conselho, atravessar uma crise de liquidez ou negociar a venda da sua empresa: a cada novo ciclo, as perguntas dos Espelhos terão um peso diferente porque você estará em outro patamar de maturidade.',
        '',
        'Boa sorte.',
        '',
        '---',
        '',
        '*IGNIÇÃO 5.3 (Edição Revisada, outubro de 2026). Obra de referência prática para fundadores e operadores brasileiros. Não substitui aconselhamento jurídico, contábil, regulatório ou tributário personalizado. Reflete as opiniões do autor e não pretende ser autoridade final sobre nenhum dos temas tratados. Cada recomendação nasceu de uma trajetória concreta: ajuste-a à sua realidade antes de aplicar.*',
      ].join('\n');
      joined = joined.replace(epilogoTarget, reorderedEpilogo);
    }
  } else if (volNum === 10) {
    // Fix CVM 193/244 heading & item and Equiparacao Hospitalar heading in Vol 10
    joined = joined
      .replace(
        '### Os Três Motores da Tese Cleantech no Brasil: Carbono com Fundiária Blindada e dMRV, Relato Obrigatório (CVM 193 / CBAM) e Descarbonização Industrial',
        '### Os Três Motores da Tese Cleantech no Brasil: Carbono com Fundiária Blindada e dMRV, Relato de Sustentabilidade (CVM 193/244 e CBAM) e Descarbonização Industrial'
      )
      .replace(
        'Seu software resolve uma obrigação legal auditável (Resolução CVM 193, SBCE acima de 10 mil tCO2e/ano, CBAM na exportação europeia, crédito rural bloqueado por CAR/PRODES)',
        'Seu software resolve uma exigência legal, regulatória ou comercial auditável (SBCE acima de 10 mil tCO2e/ano, CBAM na exportação europeia, crédito rural condicionado ao CAR/PRODES ou relato IFRS S1/S2 sob as Resoluções CVM 193 e 244/2026, em regime "pratique ou explique" nos exercícios de 2026 e 2027)'
      )
      .replace(
        '#### C) O Segredo Tributário das Clínicas de Alta Margem: A Equiparação Hospitalar (Tema 217 do STJ)',
        '#### C) Regime Tributário de Clínicas Médicas e Requisitos Estritos da Equiparação Hospitalar (Tema 217 do STJ)'
      );
  }

  console.log(`[v5.3 Complete Review] Vol ${volNum}: applied ${applied} line-indexed fixes.`);
  return joined
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
  }

  // Inject the complete 221-tool catalog and the 5 remaining chapter entries into Vol 10's apparatus
  if (linesByVol[10]) {
    let v10Text = linesByVol[10].join('\n');
    if (!v10Text.includes('### Catálogo Completo das Ferramentas da Coleção (Volumes 1 a 9)')) {
      const allTools = [];
      for (let v = 1; v <= 9; v++) {
        const slug = VOL_SLUGS[v];
        const vLines = linesByVol[v] || [];
        let curUnitHeading = '';
        let curUnitShort = `Vol. ${v}`;
        for (const ln of vLines) {
          const mUnit = ln.match(/^##\s+((?:FASE|CAPÍTULO)\s+\d+[^#\n]*)$/i);
          if (mUnit) {
            curUnitHeading = mUnit[1].trim();
            const mShort = curUnitHeading.match(/^((?:FASE|CAPÍTULO)\s+\d+)/i);
            curUnitShort = mShort ? `${mShort[1]} (Vol. ${v})` : `Vol. ${v}`;
          }
          const mTool = ln.match(/^####\s+((?:Framework|Canvas|Template):\s+.+)$/i);
          if (mTool) {
            const toolHeading = mTool[1].trim();
            allTools.push({
              vol: v,
              slug,
              toolHeading,
              curUnitHeading,
              curUnitShort,
            });
          }
        }
      }

      const catalogLines = [
        `### Catálogo Completo das Ferramentas da Coleção (Volumes 1 a 9: ${allTools.length} Ferramentas)`,
        '',
        '| # | Ferramenta (Framework, Canvas ou Template) | Volume | Fase ou Capítulo |',
        '| :--- | :--- | :--- | :--- |',
      ];
      allTools.forEach((t, idx) => {
        const cleanLabel = t.toolHeading.replace(/\|/g, '/');
        const unitLink = t.curUnitHeading
          ? `[[${t.slug}#${t.curUnitHeading}|${t.curUnitShort}]]`
          : `Vol. ${t.vol}`;
        catalogLines.push(
          `| ${idx + 1} | [[${t.slug}#${t.toolHeading}|${cleanLabel}]] | Vol. ${t.vol} | ${unitLink} |`
        );
      });
      catalogLines.push('');

      const marker =
        'Se você está começando, utilize primeiro apenas as ferramentas da Fase em que sua startup se encontra no momento.';
      if (v10Text.includes(marker)) {
        v10Text = v10Text.replace(marker, catalogLines.join('\n') + '\n' + marker);
      }
      // Also align the promised count on the heading/callout of Vol 10
      v10Text = v10Text.replace(
        /Catálogo Completo das 224 Ferramentas da Coleção/g,
        `Catálogo Completo das ${allTools.length} Ferramentas da Coleção`
      );
    }

    // Ensure the 5 remaining chapters of Vols. 1–9 are linked in the Remissivo
    const extraRemissivo = [
      '- **Ética Aplicada, Reputação e Integridade na Trincheira**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 3: ÉTICA, REPUTAÇÃO E INTEGRIDADE NA TRINCHEIRA|Capítulo 3 (Vol. 1)]]',
      '- **Networking Estratégico, Mentores, Advisors e Uso de Aceleradoras**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 7: NETWORKING, MENTORES, ADVISORS E ACELERADORAS|Capítulo 7 (Vol. 1)]]',
      '- **Integração Prática dos Métodos de Descoberta (Design Thinking, Lean Startup e Customer Development)**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 1: DESIGN THINKING, LEAN STARTUP E CUSTOMER DEVELOPMENT INTEGRADOS|Capítulo 1 (Vol. 3)]]',
      '- **Maturidade Tecnológica e Comercial (TRL/CRL), Os Dez Portões (Ten Gates) e Próximo Passo Comprometido**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 2: MATURIDADE (TRL/CRL), OS DEZ PORTÕES (TEN GATES) E PRÓXIMO PASSO COMPROMETIDO|Capítulo 2 (Vol. 3)]]',
      '- **Estratégia Go-To-Market (GTM): Founder-Led Sales, PLG, Outbound, Inbound e ABM**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 1: GO-TO-MARKET (GTM) STRATEGY: FOUNDER-LED SALES, PLG, OUTBOUND, INBOUND E ABM|Capítulo 1 (Vol. 4)]]',
    ];
    for (const item of extraRemissivo) {
      if (!v10Text.includes(item)) {
        v10Text = v10Text.trimEnd() + '\n' + item + '\n';
      }
    }

    linesByVol[10] = v10Text.split('\n');
    fs.writeFileSync(path.join(volumesDir, `${VOL_SLUGS[10]}.md`), v10Text, 'utf8');
  }

  for (let v = 1; v <= 11; v++) {
    const slug = VOL_SLUGS[v];
    const lines = linesByVol[v];
    if (!lines) continue;
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


/**
 * IGNIÇÃO v5.0 (Nível 2) — Fusão Cirúrgica dos Capítulos "Gêmeos" / Sobrepostos
 *
 * Funde 25 capítulos tematicamente sobrepostos nos seus capítulos-irmãos primários
 * (reduzindo de 180 para 155 capítulos densos e sem repetição temática),
 * preservando 100% dos frameworks, tabelas e seções operacionais únicas de cada um
 * e registrando automaticamente todos os redirecionamentos de wikilinks.
 */

const MERGED_CHAPTER_SPECS = [
  // Volume 1 (13 -> 12 capítulos)
  {
    primary: 'I',
    secondaries: ['CT'],
    newHeading:
      'APÊNDICE I — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)',
    keepFromSecondaries: {
      CT: [
        {
          match: 'Casos de uso de alto ROI para o fundador',
          rename: 'Casos de Uso de Alto ROI no Dia a Dia do Fundador',
        },
        {
          match: 'Workflows que valem adotar em 2026',
          rename: 'Workflows Práticos de Copiloto e Agentes em 2026',
        },
      ],
    },
  },

  // Volume 2 (4 -> 3 capítulos)
  {
    primary: 'EE',
    secondaries: ['S'],
    newHeading:
      'APÊNDICE EE — INTELIGÊNCIA COMPETITIVA, POSICIONAMENTO E CATEGORY DESIGN',
    keepFromSecondaries: {
      S: [
        {
          match: 'Como executar',
          rename: 'Category Design: Quando e Como Criar uma Nova Categoria de Mercado',
        },
        {
          match: 'Métricas',
          rename: 'Métricas de Dominância de Categoria',
        },
      ],
    },
  },

  // Volume 3 (10 -> 7 capítulos)
  {
    primary: 'G',
    secondaries: ['H', 'B'],
    newHeading:
      'APÊNDICE G — MATURIDADE (TRL/CRL), DECISÃO POR GATES E FECHAMENTO DE FASE (COMMITTED NEXT MOVE)',
    keepFromSecondaries: {
      H: [
        { match: 'TRL, Technology Readiness Level' },
        { match: 'CRL, Customer Readiness Level' },
        { match: 'Matriz combinada TRL versus CRL' },
        { match: 'Como usar em formulários de editais, e programas corporativos' },
      ],
      B: [
        {
          match: 'COMMITTED NEXT MOVE (próximo passo comprometido), a estrutura ao fim de cada fase',
          rename: 'Committed Next Move: Como Fechar uma Fase com Próximo Passo Comprometido',
        },
        {
          match: 'SINAIS OBSERVÁVEIS, quatro formatos de evidência que provam que o próximo passo está andando',
          rename: 'Os Quatro Formatos de Sinais Observáveis de Progresso',
        },
      ],
    },
  },
  {
    primary: 'AE',
    secondaries: ['CC'],
    newHeading:
      'APÊNDICE AE — MARKETPLACES, PLATAFORMAS E EFEITOS DE REDE: LIQUIDEZ, OVO-E-GALINHA E RISCO DE PLATAFORMA',
    keepFromSecondaries: {
      CC: [
        { match: 'Dinâmicas críticas de plataformas' },
        { match: 'Como construir plataforma (framework de execução)' },
        { match: 'Transição entre produto e plataforma' },
      ],
    },
  },

  // Volume 4 (16 -> 11 capítulos)
  {
    primary: 'DU',
    secondaries: ['J'],
    newHeading:
      'APÊNDICE DU — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR',
    keepFromSecondaries: {
      J: [
        { match: 'Os 19 Canais de Tração (Weinberg & Mares, framework "Bullseye")' },
        { match: 'Bullseye Framework, como escolher' },
        { match: 'Métricas específicas por canal' },
        {
          match: 'EXPANSÃO, PRODUCT-LED GROWTH (PLG)',
          rename: 'Quando o Próprio Produto Vende: A Mecânica Real do Product-Led Growth (PLG)',
        },
      ],
    },
  },
  {
    primary: 'AR',
    secondaries: ['AS'],
    newHeading:
      'APÊNDICE AR — CRESCIMENTO ORGÂNICO COMPOSTO: CONTENT MARKETING, SEO E COMMUNITY BUILDING',
    keepFromSecondaries: {
      AS: [
        {
          match: 'Como executar',
          rename: 'Arquitetura e Execução de Comunidade (Community Building)',
        },
        { match: 'Community-Led Growth, comunidade como motor de aquisição e retenção' },
      ],
    },
  },
  {
    primary: 'DX',
    secondaries: ['EA'],
    newHeading:
      'APÊNDICE DX — BRANDING, POSICIONAMENTO DE MARCA E PRODUCT MARKETING (PMM)',
    keepFromSecondaries: {
      EA: [
        { match: 'Positioning (posicionamento): a metodologia April Dunford aplicada ao Brasil' },
        { match: 'Messaging architecture: as 3 camadas' },
        { match: 'Launch playbook: T-90 a T+30' },
        { match: 'Sales enablement: o PMM serve o time de vendas' },
        { match: 'Win/loss analysis: aprender com o que fecha e o que não fecha' },
      ],
    },
  },
  {
    primary: 'X',
    secondaries: ['CB'],
    newHeading:
      'APÊNDICE X — PRICING STRATEGY E ECONOMIA DA RECORRÊNCIA (SUBSCRIPTION ECONOMY)',
    keepFromSecondaries: {
      CB: [
        { match: 'MÉTRICAS AVANÇADAS, ALÉM DE ARR' },
        { match: 'GOVERNANÇA DE CHURN' },
        { match: 'EXPANSÃO COMO MOTOR DE CRESCIMENTO' },
        { match: 'TRANSIÇÃO DE TRANSACIONAL PARA RECORRENTE' },
        { match: 'GOVERNANÇA FINANCEIRA DE SUBSCRIPTION' },
      ],
    },
  },
  {
    primary: 'AA',
    secondaries: ['DT'],
    newHeading:
      'APÊNDICE AA — CUSTOMER SUCCESS (CS) E CUSTOMER EXPERIENCE (CX): DA JORNADA AO CHURN ZERO E NRR POSITIVO',
    keepFromSecondaries: {
      DT: [
        { match: 'Mapeamento de jornada do cliente' },
        { match: 'NPS como sistema operacional versus métrica' },
        { match: 'CSAT e CES no Brasil' },
        { match: 'Reclame Aqui como estratégia, não como problema' },
      ],
    },
  },

  // Volume 5 (21 -> 15 capítulos)
  {
    primary: 'W',
    secondaries: ['EN'],
    newHeading:
      'APÊNDICE W — CONTABILIDADE, REGIMES FISCAIS E TRIBUTÁRIO ESTRATÉGICO (REFORMA IBS/CBS E INCENTIVOS)',
    keepFromSecondaries: {
      EN: [
        { match: 'Incentivos fiscais para empresas de tecnologia' },
        { match: 'Estrutura de holding para startups' },
        { match: 'Decisões tributárias cotidianas' },
      ],
    },
  },
  {
    primary: 'AN',
    secondaries: ['CD'],
    newHeading:
      'APÊNDICE AN — MODELAGEM FINANCEIRA OPERACIONAL BOTTOM-UP E PROJEÇÕES POR COORTES (COHORTS)',
    keepFromSecondaries: {
      CD: [
        {
          match: 'CONSTRUÇÃO DO MODELO, PASSO A PASSO',
          rename: 'Construção do Modelo de Projeção por Coortes (Passo a Passo)',
        },
        {
          match: 'SINAIS QUE SÓ COHORT REVELA',
          rename: 'Sinais Operacionais que Só a Modelagem por Coortes Revela',
        },
        {
          match: 'APLICAÇÃO, DECISÕES BASEADAS EM COHORT',
          rename: 'Alocação de Capital e Decisões Baseadas em Coortes',
        },
      ],
    },
  },
  {
    primary: 'EC',
    secondaries: ['EG'],
    newHeading:
      'APÊNDICE EC — PLANEJAMENTO FINANCEIRO (FP&A), ORÇAMENTO E REVENUE FORECASTING',
    keepFromSecondaries: {
      EG: [
        { match: 'O ARR waterfall' },
        { match: 'Pipeline-based forecast' },
        { match: 'Sazonalidade no modelo brasileiro' },
      ],
    },
  },
  {
    primary: 'EZ',
    secondaries: ['AT'],
    newHeading:
      'APÊNDICE EZ — CAPITAL DE GIRO, RECEBÍVEIS E GESTÃO DE CAIXA EM PROFUNDIDADE',
    keepFromSecondaries: {
      AT: [
        {
          match: 'Como executar',
          rename: 'Rituais de Tesouraria, 13-Week Rolling Cash Forecast e Gatilhos de Liquidez',
        },
      ],
    },
  },
  {
    primary: 'V',
    secondaries: ['CF'],
    newHeading:
      'APÊNDICE V — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES',
    keepFromSecondaries: {
      CF: [
        { match: 'TIMING: QUANDO COMEÇAR A PLANEJAR' },
        { match: 'FASE 2, MAPEAMENTO DE INVESTIDORES (4-5 MESES ANTES)' },
        { match: 'FASE 3, PROCESSO ATIVO (6-10 SEMANAS)' },
        { match: 'MÉTRICAS DO PROCESSO' },
      ],
    },
  },
  {
    primary: 'CI',
    secondaries: ['CJ'],
    newHeading:
      'APÊNDICE CI — CAPTAÇÃO ALTERNATIVA DIGITAL: EQUITY CROWDFUNDING (CVM 88) E TOKENIZAÇÃO DE ATIVOS',
    keepFromSecondaries: {
      CJ: [
        { match: 'Marco regulatorio brasileiro de cripto e tokens' },
        { match: 'USO 1, CAPTAÇÃO VIA SECURITY TOKEN' },
        { match: 'USO 2, PRODUTO TOKENIZANDO ATIVOS DE TERCEIROS' },
        { match: 'USO 3, EQUITY PARA COLABORADORES VIA TOKEN' },
        { match: 'ASPECTOS FISCAIS' },
      ],
    },
  },

  // Volume 6 (20 -> 15 capítulos)
  {
    primary: 'DY',
    secondaries: ['FD'],
    newHeading:
      'APÊNDICE DY — BUSINESS DEVELOPMENT E PARCERIAS COM GRANDES CORPORAÇÕES BRASILEIRAS',
    keepFromSecondaries: {
      FD: [
        { match: '2. Os programas de inovação corporativa no Brasil' },
        { match: '3. Quem decide numa grande empresa brasileira' },
        { match: '4. O ciclo de compra corporativo' },
        { match: '5. Pricing para grandes empresas' },
        { match: '6. Compliance e jurídico corporativo' },
      ],
    },
  },
  {
    primary: 'CQ',
    secondaries: ['BM', 'CY'],
    newHeading:
      'APÊNDICE CQ — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR',
    keepFromSecondaries: {
      BM: [
        {
          match: 'Como executar',
          rename: 'Comunicação Pública do Fundador: Narrativa, Canais Próprios e Porta-Voz',
        },
      ],
      CY: [
        { match: 'Os quatro níveis da marca pessoal' },
        { match: 'Os formatos que funcionam em 2026' },
        { match: 'O lado sombrio, quando marca pessoal vira passivo' },
      ],
    },
  },
  {
    primary: 'R',
    secondaries: ['BQ'],
    newHeading:
      'APÊNDICE R — FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO',
    keepFromSecondaries: {
      BQ: [
        {
          match: 'Como executar',
          rename: 'Gestão de Tempo do Fundador e Cadência Operacional (Operating Cadence)',
        },
      ],
    },
  },
  {
    primary: 'AP',
    secondaries: ['FG'],
    newHeading:
      'APÊNDICE AP — CULTURA COMO DISCIPLINA E EM SITUAÇÕES CRÍTICAS (HIPERCRESCIMENTO, M&A E REMOTO)',
    keepFromSecondaries: {
      FG: [
        {
          match: 'Como executar',
          rename: 'Cultura em Situações Críticas: Remoto, Hipercrescimento e Fusões & Aquisições',
        },
      ],
    },
  },

  // Volume 7 (11 -> 10 capítulos)
  {
    primary: 'CR',
    secondaries: ['BC'],
    newHeading:
      'APÊNDICE CR — ENGINEERING MANAGEMENT, DEVELOPER EXPERIENCE E GESTÃO DE DÍVIDA TÉCNICA',
    keepFromSecondaries: {
      BC: [
        {
          match: 'Como executar',
          rename: 'Gestão Disciplinada de Dívida Técnica (Technical Debt): Medição, Alocação e Prevenção',
        },
      ],
    },
  },

  // Volume 8 (14 -> 13 capítulos)
  {
    primary: 'EU',
    secondaries: ['AH'],
    newHeading:
      'APÊNDICE EU — ARQUITETURA CONTRATUAL PARA STARTUPS: OPERAÇÃO E CONTRATOS EM PROFUNDIDADE POR TIPO',
    keepFromSecondaries: {
      AH: [
        {
          match: 'Due diligence reversa, o que o investidor vai pedir na fatia legal',
          rename: 'Due Diligence Reversa: O Que o Investidor e o Comprador Auditam na Pasta Contratual',
        },
      ],
    },
  },

  // Volume 9 (23 -> 21 capítulos)
  {
    primary: 'CW',
    secondaries: ['EV'],
    newHeading:
      'APÊNDICE CW — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA',
    keepFromSecondaries: {
      EV: [
        { match: '2. Os Primeiros 60 Minutos: A Janela de Ouro' },
        { match: '4. O Princípio "Fatos Primeiro, Responsabilidade Depois"' },
        { match: '5. Canais de Comunicação em Crise' },
        { match: '6. Stakeholder Map em Crise' },
        { match: '7. Crise nas Redes Sociais' },
      ],
    },
  },
  {
    primary: 'BR',
    secondaries: ['DI'],
    newHeading:
      'APÊNDICE BR — SUCESSÃO NO EXIT, TRANSIÇÃO PÓS-AQUISIÇÃO (M&A) E RETENÇÃO DE TALENTOS',
    keepFromSecondaries: {
      DI: [
        { match: 'O que pode ser negociado antes do closing' },
        { match: 'O plano de comunicação dos primeiros 90 dias' },
        { match: 'Mapeamento de risco de saída' },
        { match: 'Variantes de aquisição e seus riscos de retenção' },
        { match: 'Indicadores de retenção para monitorar' },
      ],
    },
  },
];

/**
 * Extrai subseções H3 específicas de um corpo markdown (incluindo seus filhos H4/H5/H6).
 */
function extractSelectedH3Blocks(rawBody, rules) {
  const lines = rawBody.split('\n');
  const blocks = [];
  let inFence = false;
  let currentRule = null;
  let currentLines = [];

  function flush() {
    if (currentRule && currentLines.length > 0) {
      let chunk = currentLines.join('\n').trim();
      chunk = chunk.replace(/(?:\n+---)+\s*$/, '').trim();
      if (currentRule.rename) {
        chunk = chunk.replace(/^### [^\n]+/, `### ${currentRule.rename}`);
      }
      blocks.push(chunk);
    }
    currentRule = null;
    currentLines = [];
  }

  for (const line of lines) {
    if (line.trim().startsWith('```')) inFence = !inFence;
    if (!inFence && /^#{1,3}\s/.test(line)) {
      flush();
      if (line.startsWith('### ')) {
        const hTitle = line.slice(4).trim();
        const matched = rules.find(
          (r) => hTitle.toLowerCase() === r.match.toLowerCase()
        );
        if (matched) {
          currentRule = matched;
          currentLines.push(line);
        }
      }
    } else if (currentRule) {
      currentLines.push(line);
    }
  }
  flush();
  return blocks;
}

/**
 * Executa a fusão dos capítulos gêmeos sobre o mapa `rawSections` e retorna
 * o mapa `secondaryToPrimaryMap` (secondaryKey -> { primaryKey, origHeading })
 * para registro automático de todos os wikilinks e âncoras legadas.
 */
function applyTwinChapterMerges(rawSections) {
  const secondaryToPrimaryMap = new Map();

  for (const spec of MERGED_CHAPTER_SPECS) {
    const primSec = rawSections.get(spec.primary);
    if (!primSec) {
      throw new Error(`Capítulo primário não encontrado para fusão: ${spec.primary}`);
    }

    const origPrimaryHeading = primSec.heading;
    const extractedChunks = [];

    for (const secKey of spec.secondaries) {
      const secObj = rawSections.get(secKey);
      if (!secObj) {
        throw new Error(`Capítulo secundário não encontrado para fusão: ${secKey}`);
      }
      secondaryToPrimaryMap.set(secKey, {
        primaryKey: spec.primary,
        origHeading: secObj.heading,
        origPrimaryHeading,
      });

      const rules = (spec.keepFromSecondaries && spec.keepFromSecondaries[secKey]) || [];
      const blocks = extractSelectedH3Blocks(secObj.body, rules);
      if (blocks.length === 0) {
        throw new Error(`Nenhum bloco H3 extraído na fusão de ${secKey} -> ${spec.primary}`);
      }
      extractedChunks.push(...blocks);
    }

    // Inserir os blocos únicos extraídos antes de Armadilhas / Checklist / Ver também do capítulo primário
    let updatedBody = primSec.body.replace(/^## APÊNDICE [^\n]+/m, `## ${spec.newHeading}`);
    const insertBlock = '\n\n---\n\n' + extractedChunks.join('\n\n---\n\n') + '\n\n';
    const tailMatch = updatedBody.match(
      /\n(?:---\n\n)?### (?:Armadilhas|ARMADILHAS|Checklist|CHECKLIST|Definição de sucesso|Ver também|VER TAMBÉM|Conexão com outros|Relação com outros)/i
    );
    if (tailMatch) {
      const idx = tailMatch.index;
      updatedBody = updatedBody.slice(0, idx) + insertBlock + updatedBody.slice(idx + 1);
    } else {
      updatedBody = updatedBody.trimEnd() + insertBlock;
    }

    rawSections.set(spec.primary, {
      key: spec.primary,
      heading: spec.newHeading,
       origHeading: origPrimaryHeading,
      body: updatedBody,
    });
  }

  return secondaryToPrimaryMap;
}

module.exports = {
  MERGED_CHAPTER_SPECS,
  applyTwinChapterMerges,
};

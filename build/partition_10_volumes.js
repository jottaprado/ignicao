#!/usr/bin/env node
/**
 * Reestrutura a coleção IGNIÇÃO em 10 volumes focais em `volumes/`,
 * inserindo as Seções Introdutórias de Domínio ("costura introdutória")
 * em cada bloco temático, atualizando todos os wikilinks internos e
 * inter-volumes e gerando `build/volumes_manifest.json`.
 */

const fs = require('fs');
const path = require('path');
const { DOMAIN_INTROS } = require('./domain_intros');

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
// 1. Extrair todas as 175 seções canônicas + "Nota do autor" dos arquivos atuais
// ---------------------------------------------------------------------------
const topRe =
  /^## (?:(FASE \d+B?) — .+|APÊNDICE ([A-Z0-9-]+) — .+|(APÊNDICE — .+|APÊNDICE: .+|EPÍLOGO|GLOSSÁRIO|ÍNDICE REMISSIVO DE TERMOS-CHAVE))$/;

const sectionsMap = new Map(); // key -> { key, heading, body }
let notaDoAutorBody = '';

const existingFiles = fs
  .readdirSync(VOLUMES_DIR)
  .filter((f) => f.endsWith('.md'))
  .sort();

for (const file of existingFiles) {
  const fullPath = path.join(VOLUMES_DIR, file);
  const raw = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
  const lines = raw.split('\n');

  // Extrair "Nota do autor" do Vol. 1 se presente
  if (file.includes('Vol-1-')) {
    const mNota = raw.match(/## Nota do autor\n[\s\S]*?(?=\n---\n\n## Sobre este livro)/);
    if (mNota) {
      notaDoAutorBody = mNota[0].trim();
    }
  }

  let inFence = false;
  const starts = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.trim().startsWith('```')) inFence = !inFence;
    if (!inFence) {
      const m = l.match(topRe);
      if (m) {
        const key = m[1] ? m[1].replace(' ', '_') : m[2] ? m[2] : m[3];
        starts.push({ idx: i, key, heading: l.replace(/^## /, '').trim() });
      }
    }
  }

  for (let s = 0; s < starts.length; s++) {
    const curr = starts[s];
    const endLine = s + 1 < starts.length ? starts[s + 1].idx : lines.length;
    const chunkLines = lines.slice(curr.idx, endLine);

    // Remover divisores H1 (`# BLOCO`) e `---` soltos no final do chunk que pertenciam ao bloco seguinte
    let chunk = chunkLines.join('\n').trim();
    chunk = chunk.replace(/\n+# [A-ZÀ-Ú][^\n]*[\s\S]*$/, '').trim();
    chunk = chunk.replace(/(?:\n+---)+\s*$/, '').trim();

    sectionsMap.set(curr.key, {
      key: curr.key,
      heading: curr.heading,
      body: chunk,
    });
  }
}

console.log(`Seções canônicas extraídas: ${sectionsMap.size} (esperado: 175)`);
if (sectionsMap.size !== 175) {
  throw new Error(`Esperadas 175 seções, mas foram extraídas ${sectionsMap.size}`);
}

// ---------------------------------------------------------------------------
// 2. Atualizar textos de transição nas Fases para refletir os 10 volumes
// ---------------------------------------------------------------------------
function updateSectionProse(key, body) {
  let out = body;
  if (key === 'FASE_2') {
    out = out.replace(
      'até o Plano de Exit, na [[IGNICAO-Vol-5-Maturidade#FASE 16 — EXIT STRATEGY|Fase 16 (Vol. 5)]]',
      'até o Plano de Exit, na [[IGNICAO-Vol-7-Maturidade-e-Exit#FASE 16 — EXIT STRATEGY|Fase 16 (Vol. 7)]]'
    );
  }
  if (key === 'FASE_9') {
    out = out.replace(
      /O que vem no \*\*Volume 3 — Tração \(Fases 10 a 12\)\*\* e no \*\*Volume 4 — Escala \(Fases 13 e 14\)\*\*:[\s\S]*?(?=\n\n> \[!important\] Sinais de progresso)/,
      'O que vem no **Volume 3 — Tração (Fases 10 a 12)** e nos **Volumes 4 a 6 — Escala (Fases 13 e 14)**: construir o MVP de verdade na [[IGNICAO-Vol-3-Tracao#FASE 10 — MVP E EXPERIMENTOS DE MERCADO|Fase 10 (Vol. 3)]], colocar em mercado com usuários reais que pagam (ou pagam com atenção), medir unit economics na [[IGNICAO-Vol-3-Tracao#FASE 11 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 11 (Vol. 3)]], perseguir Product-Market Fit na [[IGNICAO-Vol-3-Tracao#FASE 12 — PRODUCT-MARKET FIT|Fase 12 (Vol. 3)]], e depois estruturar formalmente a empresa e captar no **Volume 4 (Captação e Finanças)**, escalar receita, liderança e cultura no **Volume 5 (Receita e Pessoas)** e consolidar engenharia, operações e blindagem legal no **Volume 6 (Engenharia, Operações e Jurídico)**. Essa travessia do MVP à escala leva de três a cinco anos típicos. Muitas empresas morrem nessa etapa por três motivos: escalar antes do PMF, ficar presa em "quase-PMF" sem reconhecer, e não conseguir unit economics positivas.'
    );
  }
  if (key === 'FASE_12') {
    out = out.replace(
      /### Transição: do Volume 3 \(Tração\) para o Volume 4 \(Escala\)[\s\S]*?(?=\n\n> \[!warning\] Pré-condição para escalar)/,
      `### Transição: do Volume 3 (Tração) para a Tríade de Escala (Volumes 4, 5 e 6)\n\nO que você acabou de fazer ao longo das Fases 10 a 12 deste **Volume 3 (Tração)**: construiu o MVP, validou o modelo de negócio com dados reais e atingiu PMF (ou diagnosticou que não atingiu, e está iterando). Esse trecho foi a travessia da descoberta para o mercado real: saiu de protótipo para produto, e de hipótese para fato. A segunda parte deste volume reúne os **20 apêndices operacionais** de Go-to-Market, canais de aquisição, vendas, pricing, economia da recorrência, dados, produto com IA, pivô e gestão financeira operacional.\n\nO que vem nos **Volumes 4, 5 e 6 (Escala)**: no **Volume 4 (Captação e Finanças)**, a [[IGNICAO-Vol-4-Captacao-e-Financas#FASE 13 — ESTRUTURAÇÃO JURÍDICA, FINANCEIRA E OPERACIONAL|Fase 13 (Vol. 4)]] e seus 18 apêndices tratam da estruturação societária, captação de Venture Capital, valuation, contabilidade, tributário estratégico e FP&A; no **Volume 5 (Receita e Pessoas)**, a [[IGNICAO-Vol-5-Receita-e-Pessoas#FASE 14 — ESCALA: TIME, OPERAÇÕES, CRESCIMENTO E CAPITAL|Fase 14 (Vol. 5)]] e seus 19 apêndices tratam da máquina comercial enterprise, RevOps, liderança executiva, remuneração/ESOP e cultura; e o **Volume 6 (Engenharia, Operações e Jurídico)** aprofunda nos seus 23 apêndices a gestão de produto e engenharia em escala, IA operacional, design organizacional e blindagem jurídica e trabalhista.`
    );
  }
  if (key === 'FASE_13') {
    out = out.replace(
      'Com essa base formalizada, a [[#FASE 14 — ESCALA: TIME, OPERAÇÕES, CRESCIMENTO E CAPITAL|Fase 14]] pode ser executada: construir time, operação e máquina de crescimento sem o risco jurídico e tributário de uma empresa ainda informal.',
      'Com essa base formalizada e com o domínio dos 18 apêndices financeiros, de captação e societários deste **Volume 4**, a [[IGNICAO-Vol-5-Receita-e-Pessoas#FASE 14 — ESCALA: TIME, OPERAÇÕES, CRESCIMENTO E CAPITAL|Fase 14 (no Volume 5 — Receita e Pessoas)]] pode ser executada: construir time, operação e máquina de crescimento sem o risco jurídico, societário e tributário de uma empresa ainda informal.'
    );
  }
  if (key === 'FASE_14') {
    out = out.replace(
      /### Transição: das Fases de Escala para os Apêndices Operacionais \(Vol\. 4\) e o Ciclo Longo \(Vol\. 5\)[\s\S]*?(?=\n\n> \[!info\] Fases relacionadas)/,
      `### Transição: da Fase 14 para os Apêndices de Escala (Volumes 5 e 6) e para a Maturidade (Volume 7)\n\nO que você acabou de fazer ao longo dos **Volumes 3, 4 e 5 (Fases 10 a 14)**: construiu o MVP, validou o modelo de negócio e atingiu PMF (Vol. 3), estruturou a empresa juridicamente e financeiramente na [[IGNICAO-Vol-4-Captacao-e-Financas#FASE 13 — ESTRUTURAÇÃO JURÍDICA, FINANCEIRA E OPERACIONAL|Fase 13 (Vol. 4)]] e construiu a máquina de escala na [[#FASE 14 — ESCALA: TIME, OPERAÇÕES, CRESCIMENTO E CAPITAL|Fase 14]] — time, operação, crescimento e capital. Essa é a travessia que separa a startup da scaleup.\n\nO que vem a seguir neste **Volume 5 (Receita e Pessoas)**, no **Volume 6 (Engenharia, Operações e Jurídico)** e no **Volume 7 (Maturidade e Exit)**: a segunda parte deste Volume 5 reúne **19 apêndices temáticos** sobre crescimento em escala, vendas enterprise, RevOps, parcerias corporativas, marca, liderança executiva, contratação C-level, compensação/ESOP e cultura. O **Volume 6** aprofunda produto em escala, gestão de engenharia, dívida técnica, IA, design organizacional, processos e toda a blindagem contratual, trabalhista, LGPD e de segurança da informação. Já o **Volume 7 — Maturidade e Exit** cobre as [[IGNICAO-Vol-7-Maturidade-e-Exit#FASE 15 — REINVENÇÃO E SEGUNDA CURVA|Fase 15 — Reinvenção e Segunda Curva (Vol. 7)]] e [[IGNICAO-Vol-7-Maturidade-e-Exit#FASE 16 — EXIT STRATEGY|Fase 16 — Exit Strategy (Vol. 7)]], além de governança de conselho (Board), internacionalização, crise severa, M&A e IPO.\n\n> [!important] Como usar os apêndices dos Volumes 4, 5, 6 e 7\n> Você não precisa ler os apêndices operacionais do começo ao fim em sequência única. Leia a introdução de domínio na abertura de cada bloco para entender como os capítulos daquele tema se conectam e consulte o apêndice correspondente à decisão que você tem na mesa.`
    );
  }
  if (key === 'APÊNDICE — ÍNDICE REMISSIVO') {
    out = out.replace(
      '- **Escala (Volume 4 da jornada)**:',
      '- **Escala (Volumes 4, 5 e 6 da jornada)**:'
    );
  }
  return out;
}

for (const [k, v] of sectionsMap.entries()) {
  v.body = updateSectionProse(k, v.body);
}

// ---------------------------------------------------------------------------
// 3. Definição da Arquitetura dos 10 Volumes
// ---------------------------------------------------------------------------
const VOLUMES_SPEC = [
  {
    num: 1,
    slug: 'IGNICAO-Vol-1-Ideacao',
    title: 'IGNIÇÃO — Volume 1: Ideação',
    subtitle: 'Do Pré-Zero à Tese de Negócio (Fases 0 a 2B)',
    about: '', // Usa Nota do autor + Sobre este livro
    blocks: [
      {
        h1: 'FASES DA ETAPA — IDEAÇÃO',
        tocGroup: 'Fases da Etapa (Ideação)',
        intro: DOMAIN_INTROS.V1_FASES,
        keys: ['FASE_0', 'FASE_1', 'FASE_2', 'FASE_2B'],
      },
      {
        h1: 'FUNDADOR, CO-FOUNDERS E PREPARAÇÃO PESSOAL',
        tocGroup: 'Fundador, Co-founders e Preparação Pessoal',
        intro: DOMAIN_INTROS.V1_BLOCO_1,
        keys: ['AJ', 'Y', 'D', 'CS', 'CN'],
      },
      {
        h1: 'COGNIÇÃO, DECISÃO, COMUNICAÇÃO E PRODUTIVIDADE COM IA',
        tocGroup: 'Cognição, Decisão, Comunicação e Produtividade com IA',
        intro: DOMAIN_INTROS.V1_BLOCO_2,
        keys: ['EJ', 'EK', 'EW', 'EX', 'I', 'CT'],
      },
      {
        h1: 'ECOSSISTEMA, MENTORIA E APOIO INICIAL',
        tocGroup: 'Ecossistema, Mentoria e Apoio Inicial',
        intro: DOMAIN_INTROS.V1_BLOCO_3,
        keys: ['AK', 'AL'],
      },
    ],
  },
  {
    num: 2,
    slug: 'IGNICAO-Vol-2-Validacao',
    title: 'IGNIÇÃO — Volume 2: Validação',
    subtitle: 'Da Descoberta do Problema ao Protótipo Testado (Fases 3 a 9)',
    about:
      'Cobre o ciclo completo de validação antes do código em produção: descoberta do problema em campo com Mom Test (Fase 3), pesquisa aprofundada de usuários e Jobs-to-be-Done (Fase 4), mapeamento de mercado, concorrência e cunha de entrada (Fase 5), formulação de hipóteses falsificáveis (Fase 6), experimentos de validação com compromisso real (Fase 7), prototipagem enxuta (Fase 8) e testes de usabilidade e especificação vinculante de MVP (Fase 9), seguidos por 12 apêndices sobre método científico, psicologia do consumidor brasileiro, inteligência competitiva, design de categoria e arquiteturas de modelo de negócio.',
    blocks: [
      {
        h1: 'FASES DA ETAPA — VALIDAÇÃO',
        tocGroup: 'Fases da Etapa (Validação)',
        intro: DOMAIN_INTROS.V2_FASES,
        keys: ['FASE_3', 'FASE_4', 'FASE_5', 'FASE_6', 'FASE_7', 'FASE_8', 'FASE_9'],
      },
      {
        h1: 'METODOLOGIA CIENTÍFICA, GATES E MATURIDADE',
        tocGroup: 'Metodologia Científica, Gates e Maturidade',
        intro: DOMAIN_INTROS.V2_BLOCO_1,
        keys: ['F', 'G', 'H', 'L'],
      },
      {
        h1: 'CONSUMIDOR, INTELIGÊNCIA COMPETITIVA E POSICIONAMENTO DE CATEGORIA',
        tocGroup: 'Consumidor, Inteligência Competitiva e Posicionamento de Categoria',
        intro: DOMAIN_INTROS.V2_BLOCO_2,
        keys: ['FF', 'EE', 'S', 'AI'],
      },
      {
        h1: 'ARQUITETURA DE MODELO DE NEGÓCIO (MARKETPLACES, PLATAFORMAS, B2B2C E OPEN SOURCE)',
        tocGroup: 'Arquitetura de Modelo de Negócio (Marketplaces, Plataformas, B2B2C e Open Source)',
        intro: DOMAIN_INTROS.V2_BLOCO_3,
        keys: ['AE', 'CC', 'CK', 'BE'],
      },
    ],
  },
  {
    num: 3,
    slug: 'IGNICAO-Vol-3-Tracao',
    title: 'IGNIÇÃO — Volume 3: Tração',
    subtitle: 'Do MVP ao Product-Market Fit (Fases 10 a 12)',
    about:
      'Cobre a travessia crítica do lançamento do MVP em produção até a comprovação matemática e comportamental do Product-Market Fit: operação de MVP e métricas AARRR (Fase 10), validação de unit economics e sustentabilidade do modelo (Fase 11) e diagnóstico rigoroso de PMF por coorte (Fase 12), acompanhados por 20 apêndices sobre Go-to-Market até R$ 1M de ARR, canais de aquisição, vendas iniciais, precificação, economia da recorrência, Customer Success, analytics, produto AI-native, decisão de pivô e gestão de caixa.',
    blocks: [
      {
        h1: 'FASES DA ETAPA — TRAÇÃO',
        tocGroup: 'Fases da Etapa (Tração)',
        intro: DOMAIN_INTROS.V3_FASES,
        keys: ['FASE_10', 'FASE_11', 'FASE_12'],
      },
      {
        h1: 'GO-TO-MARKET, CANAIS DE AQUISIÇÃO E MARKETING INICIAL',
        tocGroup: 'Go-to-Market, Canais de Aquisição e Marketing Inicial',
        intro: DOMAIN_INTROS.V3_BLOCO_1,
        keys: ['DU', 'J', 'AR', 'AS', 'AY', 'DX', 'EA'],
      },
      {
        h1: 'VENDAS, PRICING, RECEITA RECORRENTE E SUCESSO DO CLIENTE',
        tocGroup: 'Vendas, Pricing, Receita Recorrente e Sucesso do Cliente',
        intro: DOMAIN_INTROS.V3_BLOCO_2,
        keys: ['CP', 'X', 'CB', 'DS', 'AA', 'DT'],
      },
      {
        h1: 'PRODUTO, DADOS, IA NO PRODUTO E PIVÔ',
        tocGroup: 'Produto, Dados, IA no Produto e Pivô',
        intro: DOMAIN_INTROS.V3_BLOCO_3,
        keys: ['AO', 'Z', 'CL'],
      },
      {
        h1: 'FINANÇAS OPERACIONAIS, DEMONSTRATIVOS, COORTES E CAIXA',
        tocGroup: 'Finanças Operacionais, Demonstrativos, Coortes e Caixa',
        intro: DOMAIN_INTROS.V3_BLOCO_4,
        keys: ['DR', 'AN', 'CD', 'AT'],
      },
    ],
  },
  {
    num: 4,
    slug: 'IGNICAO-Vol-4-Captacao-e-Financas',
    title: 'IGNIÇÃO — Volume 4: Captação e Finanças',
    subtitle: 'Estruturação Societária, Venture Capital, Tributário e FP&A (Fase 13)',
    about:
      'Primeiro volume da tríade de Escala (Volumes 4, 5 e 6). Cobre a estruturação jurídica, societária, contábil e financeira pós-PMF (Fase 13) e 18 apêndices dedicados à arquitetura de capital e finanças corporativas no Brasil: captação de Venture Capital, planejamento de rodada como processo, métodos de valuation, instrumentos conversíveis (SAFE/mútuo), financiamento não-diluitivo (FINEP/BNDES/FAPESP), venture debt, crowdfunding, tokenização, relações com investidores, regimes fiscais e Reforma Tributária, FP&A, revenue forecasting, capital de giro, relacionamento bancário, gestão de riscos/seguros, Marco Legal das Startups (LC 182/2021) e proteção patrimonial dos sócios.',
    blocks: [
      {
        h1: 'FASE DA ETAPA — ESTRUTURAÇÃO PARA A ESCALA',
        tocGroup: 'Fase da Etapa (Estruturação)',
        intro: DOMAIN_INTROS.V4_FASES,
        keys: ['FASE_13'],
      },
      {
        h1: 'CAPTAÇÃO DE CAPITAL, VALUATION E RELAÇÃO COM INVESTIDORES',
        tocGroup: 'Captação de Capital, Valuation e Relação com Investidores',
        intro: DOMAIN_INTROS.V4_BLOCO_1,
        keys: ['V', 'CF', 'CE', 'DF', 'P', 'BB', 'CI', 'CJ', 'DD'],
      },
      {
        h1: 'FINANÇAS EM ESCALA, PLANEJAMENTO, TRIBUTÁRIO, CRÉDITO E RISCOS',
        tocGroup: 'Finanças em Escala, Planejamento, Tributário, Crédito e Riscos',
        intro: DOMAIN_INTROS.V4_BLOCO_2,
        keys: ['W', 'EN', 'EC', 'EG', 'EZ', 'FA', 'EY'],
      },
      {
        h1: 'MARCO LEGAL E RESPONSABILIDADE SOCIETÁRIA NA ESTRUTURAÇÃO',
        tocGroup: 'Marco Legal e Responsabilidade Societária na Estruturação',
        intro: DOMAIN_INTROS.V4_BLOCO_3,
        keys: ['DA', 'EP'],
      },
    ],
  },
  {
    num: 5,
    slug: 'IGNICAO-Vol-5-Receita-e-Pessoas',
    title: 'IGNIÇÃO — Volume 5: Receita e Pessoas',
    subtitle: 'Vendas Enterprise, RevOps, Liderança Executiva, Talentos e Cultura em Escala (Fase 14)',
    about:
      'Segundo volume da tríade de Escala (Volumes 4, 5 e 6). Parte da construção da máquina integrada de hipercrescimento (Fase 14) e aprofunda, em 19 apêndices, os dois motores humanos e comerciais da scaleup: Growth como função organizacional, vendas complexas Enterprise, Revenue Operations (RevOps), Business Development, parcerias com grandes corporações brasileiras, canais indiretos, marca institucional e reputação do fundador; seguidos por Founder Mode vs. delegação, cadência operacional do CEO, contratação de executivos C-level, avaliação de performance, remuneração e benefícios no Brasil, Stock Options (ESOP), cultura em escala, diversidade e regimes de trabalho remoto/híbrido.',
    blocks: [
      {
        h1: 'FASE DA ETAPA — ESCALA COMERCIAL, PESSOAS E CULTURA',
        tocGroup: 'Fase da Etapa (Escala)',
        intro: DOMAIN_INTROS.V5_FASES,
        keys: ['FASE_14'],
      },
      {
        h1: 'CRESCIMENTO EM ESCALA, VENDAS ENTERPRISE, REVOPS, PARCERIAS E PR',
        tocGroup: 'Crescimento em Escala, Vendas Enterprise, RevOps, Parcerias e PR',
        intro: DOMAIN_INTROS.V5_BLOCO_1,
        keys: ['CG', 'EB', 'EH', 'DY', 'FD', 'CX', 'CQ', 'BM', 'CY'],
      },
      {
        h1: 'LIDERANÇA EXECUTIVA, CONTRATAÇÃO SÊNIOR, REMUNERAÇÃO E CULTURA',
        tocGroup: 'Liderança Executiva, Contratação Sênior, Remuneração e Cultura',
        intro: DOMAIN_INTROS.V5_BLOCO_2,
        keys: ['R', 'BQ', 'BN', 'BZ', 'ED', 'DB', 'AP', 'FG', 'BU', 'AG'],
      },
    ],
  },
  {
    num: 6,
    slug: 'IGNICAO-Vol-6-Engenharia-e-Juridico',
    title: 'IGNIÇÃO — Volume 6: Engenharia, Operações e Jurídico',
    subtitle: 'Produto em Escala, Gestão Técnica, IA, Design Organizacional e Blindagem Legal',
    about:
      'Terceiro volume da tríade de Escala (Volumes 4, 5 e 6) — o manual operacional do CTO, CPO, COO e General Counsel na scaleup brasileira. Reúne 23 apêndices divididos em três pilares: (1) descoberta contínua e produto em múltiplos squads, transição do fundador técnico para gestão, recrutamento de engenharia, Engineering Management e Developer Experience, gestão de dívida técnica, IA na engenharia de software e AI Ops; (2) design organizacional, gestão do conhecimento, comunicação interna assíncrona e excelência operacional; e (3) blindagem jurídica integral — propriedade intelectual/INPI, non-compete, LGPD, contratos operacionais e em profundidade, direito do trabalho para startups, compliance anticorrupção, contencioso, CDC, regulação de IA, prevenção a fraudes internas e segurança da informação (SOC 2 / ISO 27001).',
    blocks: [
      {
        h1: 'PRODUTO EM ESCALA, ENGENHARIA DE SOFTWARE, DÍVIDA TÉCNICA E IA',
        tocGroup: 'Produto em Escala, Engenharia de Software, Dívida Técnica e IA',
        intro: DOMAIN_INTROS.V6_BLOCO_1,
        keys: ['AB', 'DW', 'CO', 'CR', 'BC', 'CH', 'EI'],
      },
      {
        h1: 'ARQUITETURA ORGANIZACIONAL, CONHECIMENTO, COMUNICAÇÃO E OPERAÇÕES',
        tocGroup: 'Arquitetura Organizacional, Conhecimento, Comunicação e Operações',
        intro: DOMAIN_INTROS.V6_BLOCO_2,
        keys: ['FB', 'FC', 'DZ', 'DV'],
      },
      {
        h1: 'PROPRIEDADE INTELECTUAL, LGPD, CONTRATOS, TRABALHISTA, COMPLIANCE E SEGURANÇA',
        tocGroup: 'Propriedade Intelectual, LGPD, Contratos, Trabalhista, Compliance e Segurança',
        intro: DOMAIN_INTROS.V6_BLOCO_3,
        keys: ['DC', 'DJ', 'T', 'AH', 'EU', 'EL', 'EM', 'EO', 'EQ', 'ET', 'BW', 'CV'],
      },
    ],
  },
  {
    num: 7,
    slug: 'IGNICAO-Vol-7-Maturidade-e-Exit',
    title: 'IGNIÇÃO — Volume 7: Maturidade e Exit',
    subtitle: 'Ciclo Longo, Governança, Internacionalização, Crise e Saída (Fases 15 e 16)',
    about:
      'Cobre o horizonte de longo prazo da empresa consolidada e o encerramento ou renovação do ciclo empreendedor: diagnóstico de saturação e construção da segunda curva de crescimento (Fase 15) e planejamento e execução de saída (Fase 16), seguidos por 22 apêndices sobre Conselho de Administração (Board), empresas familiares e sucessão, resolução de disputas societárias, governança ESG, internacionalização, imigração/vistos, hedge cambial, tesouraria multi-moeda, comando e comunicação em crise severa, layoffs, recuperação judicial e wind-down, M&A ativo, Search Funds (ETA), IPO, liquidez secundária (secondaries), tributação de exit para o fundador, retenção pós-M&A, catálogo de post-mortems brasileiros, a jornada do second-time founder e o Epílogo da obra.',
    blocks: [
      {
        h1: 'FASES DA ETAPA — MATURIDADE E EXIT',
        tocGroup: 'Fases da Etapa (Maturidade e Exit)',
        intro: DOMAIN_INTROS.V7_FASES,
        keys: ['FASE_15', 'FASE_16'],
      },
      {
        h1: 'GOVERNANÇA CORPORATIVA, BOARD, SUCESSÃO E SOCIEDADE',
        tocGroup: 'Governança Corporativa, Board, Sucessão e Sociedade',
        intro: DOMAIN_INTROS.V7_BLOCO_1,
        keys: ['AM', 'BI', 'BP', 'AF'],
      },
      {
        h1: 'INTERNACIONALIZAÇÃO, IMIGRAÇÃO, CÂMBIO E TESOURARIA MULTI-MOEDA',
        tocGroup: 'Internacionalização, Imigração, Câmbio e Tesouraria Multi-Moeda',
        intro: DOMAIN_INTROS.V7_BLOCO_2,
        keys: ['CU', 'BS', 'BT', 'BY'],
      },
      {
        h1: 'GESTÃO DE CRISE, COMUNICAÇÃO CRÍTICA, LAYOFFS E RECUPERAÇÃO JUDICIAL',
        tocGroup: 'Gestão de Crise, Comunicação Crítica, Layoffs e Recuperação Judicial',
        intro: DOMAIN_INTROS.V7_BLOCO_3,
        keys: ['CW', 'EV', 'BV', 'ES'],
      },
      {
        h1: 'EXIT, M&A, IPO, LIQUIDEZ SECUNDÁRIA, POST-MORTEMS E NOVO CICLO',
        tocGroup: 'Exit, M&A, IPO, Liquidez Secundária, Post-Mortems e Novo Ciclo',
        intro: DOMAIN_INTROS.V7_BLOCO_4,
        keys: ['BR', 'BJ', 'BL', 'DE', 'BA', 'DH', 'DG', 'DI', 'BH', 'BF'],
      },
      {
        h1: 'ENCERRAMENTO DA TRILHA PRINCIPAL',
        tocGroup: 'Encerramento',
        intro: DOMAIN_INTROS.V7_EPILOGO,
        keys: ['EPÍLOGO'],
      },
    ],
  },
  {
    num: 8,
    slug: 'IGNICAO-Vol-8-Playbooks-Setoriais',
    title: 'IGNIÇÃO — Volume 8: Playbooks Setoriais',
    subtitle: 'Verticais Brasileiras, Regulação Setorial, Macroeconomia e Catálogo de Métricas',
    about:
      'Primeiro volume da Biblioteca de Referência Transversal (Volumes 8, 9 e 10). Reúne os instrumentos de governança de passagem de fase (Committed Next Move — Apêndice B), o Catálogo Completo de Métricas e Benchmarks por Fase (Apêndice C) e o guia de leituras recomendadas (Apêndice E); a análise do tabuleiro macro-institucional brasileiro — ciclos macroeconômicos (Selic, câmbio e liquidez), mapa das autarquias reguladoras (BACEN, CVM, SUSEP, ANVISA, ANS, ANATEL, ANEEL, ANP), defesa da concorrência no CADE e política pública como estratégia; e os 9 Playbooks Setoriais em profundidade para operar no Brasil: Biotech/Healthtech, Hardware/Deep Tech, Govtech, Agritech, Edtech, Cleantech/ESG, Proptech, Legaltech e Logtech.',
    blocks: [
      {
        h1: 'GUIAS DE PASSAGEM DE FASE, CATÁLOGO DE MÉTRICAS E LEITURAS',
        tocGroup: 'Guias de Passagem de Fase, Catálogo de Métricas e Leituras',
        intro: DOMAIN_INTROS.V8_BLOCO_1,
        keys: ['B', 'C', 'E'],
      },
      {
        h1: 'AMBIENTE MACROECONÔMICO, REGULATÓRIO SETORIAL, ANTITRUSTE E POLÍTICAS PÚBLICAS',
        tocGroup: 'Ambiente Macroeconômico, Regulatório Setorial, Antitruste e Políticas Públicas',
        intro: DOMAIN_INTROS.V8_BLOCO_2,
        keys: ['EF', 'AW', 'ER', 'FE'],
      },
      {
        h1: 'PLAYBOOKS DE VERTICAIS E SETORES REGULADOS NO BRASIL',
        tocGroup: 'Playbooks de Verticais e Setores Regulados no Brasil',
        intro: DOMAIN_INTROS.V8_BLOCO_3,
        keys: ['CM', 'CA', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ'],
      },
    ],
  },
  {
    num: 9,
    slug: 'IGNICAO-Vol-9-Ferramentario',
    title: 'IGNIÇÃO — Volume 9: Ferramentário',
    subtitle: 'Enciclopédia Prática de Métodos e Frameworks de Gestão, Produto e Estratégia (Apêndice BG)',
    about:
      'Segundo volume da Biblioteca de Referência Transversal (Volumes 8, 9 e 10). Consolida, em um livro autônomo de consulta permanente, o Índice Geral de Frameworks e o Apêndice BG completo (BG.1 a BG.19): 163 métodos e frameworks mundiais de estratégia clássica e moderna, planejamento de longo prazo, modelos mentais, tomada de decisão, pesquisa qualitativa, UX research, experimentação quantitativa, descoberta e priorização de produto, growth, marketing, vendas, negociação, operações, liderança, finanças/valuation e inovação — todos contextualizados com passo a passo operacional, casos brasileiros e armadilhas de aplicação.',
    blocks: [
      {
        h1: 'ÍNDICE E ARQUITETURA DO FERRAMENTÁRIO',
        tocGroup: 'Índice e Arquitetura do Ferramentário',
        intro: DOMAIN_INTROS.V9_BLOCO_1,
        keys: ['APÊNDICE: ÍNDICE DE FRAMEWORKS'],
      },
      {
        h1: 'FERRAMENTÁRIO COMPLETO DO EMPREENDEDOR (BG.1 A BG.19)',
        tocGroup: 'Ferramentário Completo do Empreendedor (Apêndice BG)',
        intro: DOMAIN_INTROS.V9_BLOCO_2,
        keys: ['BG'],
      },
    ],
  },
  {
    num: 10,
    slug: 'IGNICAO-Vol-10-Canvases-e-Templates',
    title: 'IGNIÇÃO — Volume 10: Canvases, Templates e Índices',
    subtitle: 'Mapas Visuais Preenchidos, Documentos Operacionais, Glossário, Bibliografia e Índices (Apêndices CZ e A)',
    about:
      'Terceiro volume da Biblioteca de Referência Transversal e volume de fechamento da coleção IGNIÇÃO. Reúne o caderno prático de instrumentos visuais e documentais da obra — os 20 Canvases e Mapas Visuais de Modelo preenchidos com casos brasileiros (Apêndice CZ) e os 30+ Templates Operacionais Prontos para Uso com exemplos reais e do caso contínuo PadariaPro (Apêndice A) — seguidos pelo aparelho crítico completo da enciclopédia: nota sobre envelhecimento de dados, Glossário de Termos Técnicos, Lista de Abreviações, Bibliografia Comentada e Unificada, Índice Analítico e Índices Remissivos.',
    blocks: [
      {
        h1: 'CANVASES E MAPAS VISUAIS DE MODELO (APÊNDICE CZ)',
        tocGroup: 'Canvases e Mapas Visuais de Modelo (Apêndice CZ)',
        intro: DOMAIN_INTROS.V10_BLOCO_1,
        keys: ['CZ'],
      },
      {
        h1: 'TEMPLATES OPERACIONAIS PRONTOS PARA USO (APÊNDICE A)',
        tocGroup: 'Templates Operacionais Prontos para Uso (Apêndice A)',
        intro: DOMAIN_INTROS.V10_BLOCO_2,
        keys: ['A'],
      },
      {
        h1: 'GLOSSÁRIOS, BIBLIOGRAFIAS E ÍNDICES GERAIS DA COLEÇÃO',
        tocGroup: 'Glossários, Bibliografias e Índices Gerais da Coleção',
        intro: DOMAIN_INTROS.V10_BLOCO_3,
        keys: [
          'APÊNDICE — DATA DE COMPILAÇÃO E NOTA SOBRE ENVELHECIMENTO',
          'APÊNDICE — GLOSSÁRIO DE TERMOS TÉCNICOS',
          'GLOSSÁRIO',
          'APÊNDICE — LISTA DE ABREVIAÇÕES',
          'APÊNDICE: BIBLIOGRAFIA',
          'APÊNDICE — BIBLIOGRAFIA UNIFICADA',
          'APÊNDICE: ÍNDICE ANALÍTICO',
          'APÊNDICE — ÍNDICE REMISSIVO',
          'ÍNDICE REMISSIVO DE TERMOS-CHAVE',
        ],
      },
    ],
  },
];

// Validar se todas as 175 chaves estão presentes exatamente uma vez em VOLUMES_SPEC
const usedKeys = new Set();
for (const v of VOLUMES_SPEC) {
  for (const b of v.blocks) {
    for (const k of b.keys) {
      if (!sectionsMap.has(k)) {
        throw new Error(`Chave '${k}' no Vol. ${v.num} não existe em sectionsMap!`);
      }
      if (usedKeys.has(k)) {
        throw new Error(`Chave duplicada '${k}' em VOLUMES_SPEC!`);
      }
      usedKeys.add(k);
    }
  }
}
if (usedKeys.size !== sectionsMap.size) {
  const missing = [...sectionsMap.keys()].filter((k) => !usedKeys.has(k));
  throw new Error(`Chaves faltando em VOLUMES_SPEC: ${missing.join(', ')}`);
}
console.log('Validação de partição: 175/175 seções alocadas sem duplicatas nem omissões.');

// ---------------------------------------------------------------------------
// 4. Builders de cabeçalho, "Sobre este livro", Mapa Mermaid e Sumário
// ---------------------------------------------------------------------------
function buildCollectionMapMermaid(activeVolNum) {
  return [
    '## Mapa da Coleção IGNIÇÃO',
    '',
    '```mermaid',
    'flowchart TD',
    '    subgraph JORNADA["Trilha Principal — Da Ideação ao Exit (Vols. 1 a 7)"]',
    '        V1["<b>Vol. 1 — Ideação</b><br/>Fases 0 a 2B · Fundador, Ideia e Tese"]',
    '        V2["<b>Vol. 2 — Validação</b><br/>Fases 3 a 9 · Descoberta, Hipóteses e Protótipo"]',
    '        V3["<b>Vol. 3 — Tração</b><br/>Fases 10 a 12 · MVP, GTM Inicial e PMF"]',
    '        V4["<b>Vol. 4 — Captação e Finanças</b><br/>Fase 13 · Societário, VC, Tributário e FP&A"]',
    '        V5["<b>Vol. 5 — Receita e Pessoas</b><br/>Fase 14 · Enterprise, RevOps, Liderança e Cultura"]',
    '        V6["<b>Vol. 6 — Engenharia e Jurídico</b><br/>Produto em Escala, IA, Operações e Blindagem Legal"]',
    '        V7["<b>Vol. 7 — Maturidade e Exit</b><br/>Fases 15 e 16 · Board, Internacionalização, Crise e Saída"]',
    '        V1 ==>|"Tese explícita"| V2',
    '        V2 ==>|"Problem-Solution Fit"| V3',
    '        V3 ==>|"Product-Market Fit"| V4',
    '        V4 ==>|"Base estruturada"| V5',
    '        V5 <==>|"Execução integrada"| V6',
    '        V5 & V6 ==>|"Operação madura"| V7',
    '    end',
    '    subgraph REFERENCIA["Biblioteca Transversal — Consulta Sob Demanda (Vols. 8 a 10)"]',
    '        V8["<b>Vol. 8 — Playbooks Setoriais</b><br/>Verticais Brasileiras, Regulação, Macro e Métricas"]',
    '        V9["<b>Vol. 9 — Ferramentário (BG)</b><br/>163 Frameworks de Estratégia, Produto, Vendas e Gestão"]',
    '        V10["<b>Vol. 10 — Canvases, Templates e Índices</b><br/>20 Mapas Visuais (CZ) · 30 Templates (A) · Glossário"]',
    '    end',
    '    REFERENCIA -.->|"Consulta transversal em todas as fases"| JORNADA',
    `    style V${activeVolNum} fill:#ff6b1a,color:#ffffff,stroke:#1a0a00,stroke-width:3px`,
    '```',
  ].join('\n');
}

function buildSobreEsteLivroVol1() {
  return `## Sobre este livro

### O que isto é

Esta obra tem cerca de 750 mil palavras. Cobre como começar uma empresa no Brasil, como validá-la, como tracioná-la, como escalá-la e como sair dela. Está organizada em **dez volumes** — sete volumes que acompanham a maturidade da jornada e três volumes de referência transversal:

- **Volume 1 — Ideação** (Fases 0 a 2B + 13 apêndices de preparação do fundador, cofundadores, decisão, comunicação e IA pessoal);
- **Volume 2 — Validação** (Fases 3 a 9 + 12 apêndices de método científico, consumidor brasileiro, inteligência competitiva e modelos de negócio);
- **Volume 3 — Tração** (Fases 10 a 12 + 20 apêndices de Go-to-Market até 1M ARR, canais, vendas iniciais, pricing, CS, dados, produto AI-native e caixa);
- **Volume 4 — Captação e Finanças** (Fase 13 + 18 apêndices de estruturação societária, Venture Capital, valuation, instrumentos conversíveis, contabilidade, Reforma Tributária, FP&A, capital de giro e bancos);
- **Volume 5 — Receita e Pessoas** (Fase 14 + 19 apêndices de Growth em escala, vendas Enterprise, RevOps, parcerias corporativas, marca, liderança executiva, contratação C-level, remuneração/ESOP e cultura);
- **Volume 6 — Engenharia, Operações e Jurídico** (23 apêndices de produto em escala, gestão de engenharia, dívida técnica, IA, design organizacional, processos e blindagem contratual, trabalhista, LGPD, compliance e segurança);
- **Volume 7 — Maturidade e Exit** (Fases 15 e 16 + 22 apêndices de Board, empresa familiar, disputas societárias, internacionalização, câmbio, crise aguda, layoffs, recuperação judicial, M&A, IPO, secondaries e post-mortems + Epílogo);
- **Volume 8 — Playbooks Setoriais** (Guias de passagem de fase B, Catálogo de Métricas C, Leituras E, macroeconomia, regulação setorial, CADE, políticas públicas e os 9 Playbooks das Verticais Brasileiras);
- **Volume 9 — Ferramentário** (Índice de Frameworks + Apêndice BG completo com 163 frameworks distribuídos em 19 disciplinas);
- **Volume 10 — Canvases, Templates e Índices** (20 Canvases preenchidos em CZ, 30+ Templates operacionais e casos brasileiros em A, Glossários, Bibliografias e Índices Remissivos).

Não é narrativa contínua. Não é livro inspiracional. É um documento para consulta em decisões reais. Foi escrito assumindo que você tem pressa, tem uma dor concreta, e precisa de resposta operacional.

### As duas vozes do livro

O livro alterna entre duas vozes. Quando trata de material consagrado, frameworks como OKR, Hoshin Kanri, JTBD, Crossing the Chasm, o registro é sóbrio, próximo do verbete enciclopédico. O autor se apaga. O que importa é fidelidade ao conceito original.

Em outros momentos o livro opina. Sobre quando não empreender, sobre saúde mental do fundador, sobre o ecossistema brasileiro, sobre padrões de fracasso que vi de perto. Quando há opinião, o livro avisa. Você lê algo como "minha leitura, contestável, é que" e sabe que entrou em terreno autoral. Os dois modos coexistem ao longo do livro, e você sabe qual está lendo a cada momento.

### Por que brasileiro

Empreender no Brasil tem especificidades que raramente aparecem em livros importados. Tributação, regulação, ciclos de capital local, estrutura de canais, relação com governo, dinâmica societária, operação em múltiplas moedas. Traduzir Silicon Valley direto para São Paulo gera decisões ruins. O livro parte do contexto brasileiro e estende para o global quando necessário, não o contrário. CLT, MEI, Simples Nacional, INPI, LGPD, BNDES, BACEN, CVM, Receita Federal. Não são detalhes. São a moldura.

### Como usar

O livro não pede leitura linear. Aceita ser aberto em qualquer volume ou página por quem tem problema concreto. Além disso, cada bloco temático dentro dos volumes conta com uma **Introdução de Domínio** que explica como aqueles capítulos se conectam e qual ler primeiro.

Se você está pensando em empreender, comece por este **Volume 1 (Ideação)**, nas Fases 0 a 2B. Preparação, encontrar a ideia, articular a ideia e construir a teoria do negócio. Reserve três a quatro horas. Pare e execute antes de continuar.

Se você já tem uma ideia mas ainda não validou, vá para o **Volume 2 (Validação)**, nas Fases 3 a 9. Descoberta do problema até experimentos de validação e testes de protótipo. De quatro a seis horas. Consulte o BG.6 (no **Volume 9 — Ferramentário**) para técnica de entrevista.

Se está construindo MVP ou buscando product-market fit, abra o **Volume 3 (Tração)**, que cobre as Fases 10 a 12, mais os apêndices de GTM, canais, pricing, dados e pivotagem, além de BG.10 e BG.11 no **Volume 9**.

Se já tem PMF e está estruturando a empresa, captando ou escalando, use a tríade de Escala (**Volumes 4, 5 e 6**): comece pela [[IGNICAO-Vol-4-Captacao-e-Financas#FASE 13 — ESTRUTURAÇÃO JURÍDICA, FINANCEIRA E OPERACIONAL|Fase 13 (Vol. 4)]] antes da [[IGNICAO-Vol-5-Receita-e-Pessoas#FASE 14 — ESCALA: TIME, OPERAÇÕES, CRESCIMENTO E CAPITAL|Fase 14 (Vol. 5)]], mesmo que pareça óbvia. Quem pula estruturação volta a ela depois de quebrar coisa cara. Para fundraising, valuation e tributário, fique no **Volume 4** (Apêndices V, CF, CE, W, EN). Para escalar vendas enterprise, RevOps, executivos e cultura, vá ao **Volume 5** (Apêndices CG, EB, EH, BN, AP). Para escalar engenharia, produto, operações e blindagem jurídica/LGPD, use o **Volume 6** (Apêndices AB, CR, FB, DV, T, EU, EL).

Se está em crise ou considerando pivô, há três rotas combinadas: [[IGNICAO-Vol-3-Tracao#APÊNDICE CL — PIVOT: TIPOLOGIA, DECISÃO E EXECUÇÃO|Apêndice CL — Pivot (Vol. 3)]], [[IGNICAO-Vol-7-Maturidade-e-Exit#APÊNDICE CW — CRISE E CONTINUIDADE: PREVENÇÃO, RESPOSTA, RECUPERAÇÃO|Apêndice CW — Crise (Vol. 7)]] e [[#APÊNDICE Y — SAÚDE MENTAL, DINÂMICA DE CO-FOUNDERS E HUMANIDADE DO FUNDADOR|Apêndice Y]] sobre saúde mental (neste Vol. 1). Crise societária acrescenta [[#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0]] e os Apêndices AH (Vol. 6) e BP (Vol. 7). Crise de caixa acrescenta [[IGNICAO-Vol-4-Captacao-e-Financas#FASE 13 — ESTRUTURAÇÃO JURÍDICA, FINANCEIRA E OPERACIONAL|Fase 13 (Vol. 4)]] e os Apêndices AN e AT (Vol. 3).

Se está preparando saída, governança de conselho ou gerindo segunda curva, abra o **Volume 7 (Maturidade e Exit)** na [[IGNICAO-Vol-7-Maturidade-e-Exit#FASE 15 — REINVENÇÃO E SEGUNDA CURVA|Fase 15 (Vol. 7)]], [[IGNICAO-Vol-7-Maturidade-e-Exit#FASE 16 — EXIT STRATEGY|Fase 16 (Vol. 7)]] e nos Apêndices AM, BR e BF.

Para consulta transversal, use os **Volumes 8, 9 e 10**: o **Volume 8 (Playbooks Setoriais)** reúne o Catálogo de Métricas por Fase (C), regulação e os playbooks de verticais brasileiras; o **Volume 9 (Ferramentário)** cataloga 163 frameworks em 19 categorias (BG); e o **Volume 10 (Canvases, Templates e Índices)** entrega os 20 canvases visuais (CZ), os 30+ templates copiáveis (A) e os glossários e índices gerais.

E se você só tem quinze minutos, abra o volume e a fase do seu momento atual. Leia a abertura, as armadilhas, e a saída da fase. É suficiente para reorientar foco.

### Sobre os exemplos: PadariaPro e os casos reais

Você vai encontrar PadariaPro mencionado em vários templates ao longo do livro. É um caso fictício, criado para ilustrar todo o ciclo de instrumentos do livro num único arco coerente, da Declaração Inicial da ideia, na [[#FASE 2 — ARTICULAÇÃO E CAPTURA DA IDEIA|Fase 2]], até o Plano de Exit, na [[IGNICAO-Vol-7-Maturidade-e-Exit#FASE 16 — EXIT STRATEGY|Fase 16 (Vol. 7)]]. PadariaPro é um SaaS de gestão para padarias artesanais brasileiras com três a cinco lojas. Você acompanha os fundadores, também fictícios, preenchendo cada template em sequência. Story Tree, Canvas da Cunha, Banco de Hipóteses, Cartão de Experimento, Especificação de MVP, OKRs, Plano de Time, e por aí vai. A função é pedagógica. Um caso único permite ver continuidade entre os instrumentos sem ter que reaprender contexto a cada novo template.

Onde o caso real funciona melhor, o livro usa empresas brasileiras documentadas. Stone, Quinto Andar, Hotmart, Magazine Luiza, RD Station, Linx. Os pontos onde elas aparecem são Especificação de MVP, Diagnóstico de PMF, Máquina de Crescimento em escala, Análise de Segunda Curva e Plano de Exit. Casos reais nesses pontos adicionam nuance e textura que um caso fictício não consegue produzir. Em alguns templates dos Volumes 1 e 2 (Ideação e Validação), como Declaração Inicial, Roteiro de Entrevista e Canvas da Cunha, você verá PadariaPro e um caso real lado a lado, para mostrar como o instrumento se comporta em contextos diferentes.

Tanto os casos reais quanto o PadariaPro são instrumentos. Nenhum dos dois é receita.

### Como este livro envelhece

Envelhece rápido: nomes de fundos, valuations específicos, ferramentas de IA, features de produtos, alíquotas tributárias, regimes regulatórios. Envelhece devagar: frameworks clássicos, padrões de descoberta, psicologia do fundador, dinâmicas de mercado. Ao reler em ano futuro, desconfie de datas e números. Confie em processos e padrões. A próxima edição vai corrigir o que envelheceu mal. Esse é o privilégio de documento canônico sobre livro impresso.

### O que este livro não é

Não substitui advogado, contador, terapeuta, consultor regulatório ou mentor humano. Não é bola de cristal. Quando diz que a chance de sucesso em X é baixa, isso reflete padrões observáveis, não destino. As respostas para seu caso específico envolvem pessoas e contextos que nenhuma enciclopédia consegue antecipar.

Empreender no Brasil é difícil. O livro não disfarça isso. Mas é possível, e milhares de pessoas conseguem todo ano. Este livro existe para aumentar a probabilidade de você estar entre elas, reduzindo erros evitáveis, preparando para os inevitáveis, e devolvendo o tempo que seria gasto descobrindo o que outros já descobriram.`;
}

function buildSobreEsteVolume(vol) {
  return `## Sobre este Volume

Este é o **Volume ${vol.num} (${vol.title.split(': ')[1]})** da coleção **IGNIÇÃO — O manual operacional do empreendedor brasileiro** (10 volumes).

${vol.about}

> [!note] Consulta transversal e navegação entre os 10 volumes
> Cada volume da coleção IGNIÇÃO reúne as **Fases**, as **Introduções de Domínio** e os **Apêndices temáticos** do seu respectivo estágio ou disciplina. Para métricas por fase e playbooks de verticais brasileiras, consulte o **[[IGNICAO-Vol-8-Playbooks-Setoriais#APÊNDICE C — CATÁLOGO DE MÉTRICAS POR FASE|Volume 8 — Playbooks Setoriais]]**. Para os 163 frameworks de gestão e produto, consulte o **[[IGNICAO-Vol-9-Ferramentario#APÊNDICE BG — FERRAMENTÁRIO COMPLETO DO EMPREENDEDOR|Volume 9 — Ferramentário (BG)]]**. Para canvases visuais (CZ), templates copiáveis (A) e glossário geral, consulte o **[[IGNICAO-Vol-10-Canvases-e-Templates#APÊNDICE CZ — CANVASES E MAPAS VISUAIS DE MODELO|Volume 10 — Canvases, Templates e Índices]]**. A Nota do Autor e o guia geral de uso da obra encontram-se na abertura do **[[IGNICAO-Vol-1-Ideacao#Nota do autor|Volume 1 — Ideação]]**.`;
}

function buildToc(vol) {
  const lines = ['## Sumário deste Volume', ''];
  for (const b of vol.blocks) {
    lines.push(`### ${b.tocGroup}`, '');
    for (const k of b.keys) {
      const sec = sectionsMap.get(k);
      lines.push(`- [[#${sec.heading}]]`);
    }
    lines.push('');
  }
  return lines.join('\n').trim();
}

// ---------------------------------------------------------------------------
// 5. Montar o texto bruto dos 10 volumes (Passo 1)
// ---------------------------------------------------------------------------
const rawVolumes = new Map(); // num -> { spec, bodyWithoutFm }

for (const vol of VOLUMES_SPEC) {
  const parts = [];
  parts.push(`# ${vol.title}`);
  parts.push('');
  parts.push(`*${vol.subtitle}*`);
  parts.push('');
  parts.push(
    '> [!tip] Dica para leitura no Obsidian e GitHub\n' +
      '> Este volume faz parte da coleção **IGNIÇÃO** (10 volumes). Os links para seções deste mesmo volume usam âncoras diretas (`[[#Seção]]`) e os links para outros volumes apontam para o arquivo correspondente (`[[IGNICAO-Vol-X-Nome#Seção]]`).'
  );
  parts.push('', '---', '');

  if (vol.num === 1) {
    parts.push(notaDoAutorBody);
    parts.push('', '---', '');
    parts.push(buildSobreEsteLivroVol1());
  } else {
    parts.push(buildSobreEsteVolume(vol));
  }

  parts.push('', '---', '');
  parts.push(buildCollectionMapMermaid(vol.num));
  parts.push('', '---', '');
  parts.push(buildToc(vol));

  for (const b of vol.blocks) {
    parts.push('', '---', '');
    parts.push(`# ${b.h1}`);
    parts.push('', '---', '');
    if (b.intro) {
      parts.push(b.intro.trim());
      parts.push('', '---', '');
    }
    for (let i = 0; i < b.keys.length; i++) {
      const sec = sectionsMap.get(b.keys[i]);
      parts.push(sec.body);
      if (i + 1 < b.keys.length) {
        parts.push('', '---', '');
      }
    }
  }

  rawVolumes.set(vol.num, {
    spec: vol,
    text: parts.join('\n') + '\n',
  });
}

// ---------------------------------------------------------------------------
// 6. Passo 2: Indexar todos os headings dos 10 volumes e resolver 100% dos wikilinks
// ---------------------------------------------------------------------------
const h2Index = new Map(); // slug -> { num, slugName, exactHeading }
const allHeadingIndex = new Map(); // slug -> [{ num, slugName, level, exactHeading }]

for (const [num, { spec, text }] of rawVolumes.entries()) {
  const clean = text.replace(/```[\s\S]*?```|`[^`\n]+`/g, '');
  for (const m of clean.matchAll(/^(#{1,4})\s+(.+)$/gm)) {
    const level = m[1].length;
    const exactHeading = m[2].trim();
    const s = slugify(exactHeading);
    if (!allHeadingIndex.has(s)) allHeadingIndex.set(s, []);
    allHeadingIndex.get(s).push({ num, slugName: spec.slug, level, exactHeading });
    if (level === 2 && !h2Index.has(s)) {
      h2Index.set(s, { num, slugName: spec.slug, exactHeading });
    }
  }
}

function resolveTargetVolume(targetHeading, currentVolNum) {
  const s = slugify(targetHeading);
  // Se for um H2 canônico único, priorizar o H2 (evita colisão com ### FASE X dentro do Apêndice C)
  if (h2Index.has(s)) {
    return h2Index.get(s);
  }
  const candidates = allHeadingIndex.get(s) || [];
  if (candidates.length === 1) {
    return candidates[0];
  }
  // Se houver candidato no próprio volume atual, manter no volume atual
  const sameVol = candidates.find((c) => c.num === currentVolNum);
  if (sameVol) return sameVol;
  return candidates[0] || null;
}

let rewrittenLinks = 0;

for (const [num, volObj] of rawVolumes.entries()) {
  const codeSpans = [];
  let protectedText = volObj.text.replace(/```[\s\S]*?```|`[^`\n]+`/g, (match) => {
    const idx = codeSpans.length;
    codeSpans.push(match);
    return `\u0000CODE_${idx}\u0000`;
  });

  protectedText = protectedText.replace(/\[\[((?:(?!\]\]).)*)\]\]/g, (fullMatch, inner) => {
    const hasEscapedPipe = inner.includes('\\|');
    const parts = inner.split(/\\?\|/);
    let rawTarget = parts[0].trim();
    if (rawTarget.endsWith('\\')) rawTarget = rawTarget.slice(0, -1).trim();
    let alias = parts.length > 1 ? parts.slice(1).join('|').trim() : null;

    if (!rawTarget.includes('#')) {
      return fullMatch;
    }

    const [, targetHeadingRaw] = rawTarget.split('#', 2);
    const targetHeading = targetHeadingRaw.trim();
    const dest = resolveTargetVolume(targetHeading, num);
    if (!dest) {
      console.warn(`[WARN] Destino não encontrado em Vol. ${num}: ${fullMatch}`);
      return fullMatch;
    }

    const pipeSep = hasEscapedPipe ? '\\|' : '|';

    if (dest.num === num) {
      // Link interno ao mesmo volume
      if (alias !== null) {
        // Remover eventual "(Vol. X)" obsoleto de link que agora é interno
        const cleanAlias = alias.replace(/\s*\(Vol\.\s*\d+\)/g, '').trim();
        const updated = `[[#${targetHeading}${pipeSep}${cleanAlias}]]`;
        if (updated !== fullMatch) rewrittenLinks++;
        return updated;
      } else {
        const updated = `[[#${targetHeading}]]`;
        if (updated !== fullMatch) rewrittenLinks++;
        return updated;
      }
    } else {
      // Link entre volumes diferentes
      if (alias !== null) {
        let updatedAlias = alias;
        if (/\(Vol\.\s*\d+\)/.test(updatedAlias)) {
          updatedAlias = updatedAlias.replace(/\(Vol\.\s*\d+\)/g, `(Vol. ${dest.num})`);
        } else {
          updatedAlias = `${updatedAlias} (Vol. ${dest.num})`;
        }
        const updated = `[[${dest.slugName}#${targetHeading}${pipeSep}${updatedAlias}]]`;
        if (updated !== fullMatch) rewrittenLinks++;
        return updated;
      } else {
        const updated = `[[${dest.slugName}#${targetHeading}]]`;
        if (updated !== fullMatch) rewrittenLinks++;
        return updated;
      }
    }
  });

  volObj.text = protectedText.replace(/\u0000CODE_(\d+)\u0000/g, (_, idx) => codeSpans[Number(idx)]);
}

console.log(`Wikilinks recalibrados para os 10 volumes: ${rewrittenLinks}`);

// ---------------------------------------------------------------------------
// 7. Remover arquivos antigos de `volumes/` e gravar os 10 novos volumes + manifest
// ---------------------------------------------------------------------------
for (const oldFile of fs.readdirSync(VOLUMES_DIR)) {
  if (oldFile.endsWith('.md')) {
    fs.unlinkSync(path.join(VOLUMES_DIR, oldFile));
  }
}

const manifest = [];

for (const [num, { spec, text }] of rawVolumes.entries()) {
  const fasesCount = spec.blocks.reduce(
    (acc, b) => acc + b.keys.filter((k) => k.startsWith('FASE_')).length,
    0
  );
  const apendicesCount = spec.blocks.reduce(
    (acc, b) => acc + b.keys.filter((k) => !k.startsWith('FASE_')).length,
    0
  );
  const diagramsCount = (text.match(/```mermaid/g) || []).length;

  // Montar YAML frontmatter
  const tempWords = text.trim().split(/\s+/).length + 45;
  const fm = [
    '---',
    `title: "${spec.title}"`,
    `subtitle: "${spec.subtitle}"`,
    `volume: ${spec.num}`,
    'collection: "IGNIÇÃO — O manual operacional do empreendedor brasileiro"',
    'author: "João Prado"',
    'type: enciclopédia',
    'status: living-document',
    'created: 2026-04-22',
    'updated: 2026-10-20',
    'version: "3.5"',
    'language: pt-BR',
    `phase_count: ${fasesCount}`,
    `appendix_count: ${apendicesCount}`,
    `diagram_count: ${diagramsCount}`,
    `word_count: ${tempWords}`,
    '---',
    '',
  ].join('\n');

  const fullContent = fm + text;
  const exactWords = fullContent.trim().split(/\s+/).length;
  const finalContent = fullContent.replace(`word_count: ${tempWords}`, `word_count: ${exactWords}`);
  const exactLines = finalContent.split('\n').length;

  const outFile = path.join(VOLUMES_DIR, `${spec.slug}.md`);
  fs.writeFileSync(outFile, finalContent, 'utf8');

  manifest.push({
    num: spec.num,
    file: `volumes/${spec.slug}.md`,
    title: spec.title,
    subtitle: spec.subtitle,
    fases: fasesCount,
    apendices: apendicesCount,
    diagrams: diagramsCount,
    words: exactWords,
    lines: exactLines,
  });

  console.log(
    `[OK] Vol. ${String(spec.num).padStart(2, ' ')} -> volumes/${spec.slug}.md (${exactWords.toLocaleString('en-US')} palavras, ${exactLines} linhas, ${fasesCount} fases, ${apendicesCount} apêndices)`
  );
}

fs.writeFileSync(
  path.join(BUILD_DIR, 'volumes_manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n',
  'utf8'
);
console.log('Manifesto salvo em build/volumes_manifest.json.');

# Changelog

Todas as mudanças significativas neste projeto são documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [5.3]: 2026-10-26

### Adicionado

- **Volume 11: Caderno de Trincheira, Simulações de Decisão e Cases Globais & Nacionais (`volumes/IGNICAO-Vol-11-Workbook-Cases-e-Exercicios.md`, 30 Capítulos, ~204k palavras / ~816 páginas)**:
  - **58 Estudos de Caso Profundos (Globais e Brasileiros)** estruturados em 4 atos (*Contexto e o Problema Real*, *O Dilema na Mesa do Fundador*, *Engenharia da Decisão e Métricas* e *Tradução para a Realidade Brasileira em Outubro de 2026*), cobrindo Airbnb, Stripe, Nubank, Notion, QuintoAndar, Figma, Superhuman, iFood, Intercom, VTEX, Segment, Wellhub, Zappos, Dropbox, DoorDash, Basecamp, GitLab/Elastic, Loggi/MadeiraMadeira, Slack, RD Station, HubSpot, Omie/Conta Azul, Canva, Snowflake/Datadog, TOTVS/Linx, Wise, Brex/Ramp/Creditas, Atlassian, Kavak, Mercado Livre/Mercado Pago, Salesforce, Netflix, O Boticário/Cacau Show/Smart Fit, Amazon, Spotify, Stone/Pagar.me, Duolingo/Klarna, Linear/Vercel, Facebook/Zipcar, Zenefits, Instagram/WhatsApp, 99/Movile, OpenAI/Uber, Adobe/Microsoft, Constellation Software, Asaas/Stark Bank/Adyen, Solinftec/Aegro/John Deere, Alice/Sami/Dr. Consulta, Gove/Aprova Digital, Órigo/Lemon/Mombak e Tractian/WEG/Samsara.
  - **50 Exercícios Práticos Mão na Massa com Gabarito Comentado** (5 por bloco temático espelhando os Volumes 1 a 10), com enunciados numéricos completos, fórmulas passo a passo, gabaritos comentados e armadilhas comuns.
  - **27 Simulações de Decisão e Roleplays Executivos** (3 para cada um dos Volumes 1 a 9), com pressões ocultas na mesa, diálogo do caminho armadilha, protocolo de alta precisão e rubrica de pontuação de 0 a 10 pontos.
  - **Capítulo 30: Simulador Integrador de Ponta a Ponta (O Jogo Completo das 21 Fases, da Fase 0 ao Exit)** com 21 cenários decisórios sequenciais, pontuação cumulativa (0 a 105 pontos) e protocolo de revisão trimestral.
- **Catálogo Completo das 224 Ferramentas no Volume 10 (`volumes/IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.md`)**: geração automatizada a partir do corpo dos Volumes 1 a 9 das três tabelas integrais de referência (**162 Frameworks**, **20 Canvases Visuais** e **42 Templates Operacionais**), com links diretos para cada cabeçalho `####` e para a Fase ou Capítulo correspondente.
- **Suíte de Validação de Ponto Fixo em 5 Camadas (`validate_v53.py`, `check_exemplos.py` e `audit.py` v5.3)**: validação determinística de estrutura Markdown, paridade de negrito e blocos de código, geometria de tabelas, hierarquia de cabeçalhos, ausência total de travessões (`U+2014`), resolução de 100% dos wikilinks (inclusive com escape `\|` em tabelas Markdown e navegação bidirecional com o Volume 11) e auditoria estrutural interna dos 12 EPUBs e 12 capas PNG.

### Corrigido e Atualizado

- **Revisão Integral da Planilha de Achados v5.2 -> v5.3 (`IGNICAO_v52_achados_da_revisao.xlsx`, 4.980 células de achados, checagem, pendências, remissões, moldes e links)**:
  - **Congelamento de numeração, remissões e links internos**: reconciliação integral das remissões a fases e capítulos (com número + título do capítulo) e eliminação de 100% dos links quebrados ou ambíguos nos 11 volumes (`3.277` wikilinks validados com `0` quebras, incluindo navegação de ida e volta entre os Volumes 1 a 10 e o Volume 11).
  - **Eliminação dos 175 parágrafos de molde de fechamento e 112 moldes de abertura**: substituição por prosa narrativa orgânica ancorada nos fatos, métricas e dilemas específicos dos quatro arquétipos da coleção (Lucas & Marina, Dra. Camila, Henrique e Rafael & Bia).
  - **Costura integral dos 25 capítulos fundidos**: remoção de blocos intermediários de `"Ver também"` e notas de bastidor, renumeração contínua de subseções e unificação de fechamentos.
  - **Eliminação de contradições internas e frases velhas residuais (`C5`)**: unificação das réguas numéricas da coleção (meta de entrevistas na Fase 4, escala de *Pain Level* 1 a 5, *Rule of 40*, *Burn Multiple*, *Magic Number*, *Quick Ratio*, retenção D30 e *Churn* mensal/anual) e remoção de redações antigas que haviam permanecido ao lado das correções.
  - **Atualização Jurídica, Tributária e Regulatória para Outubro de 2026**:
    - **LC 224/2025 e IN RFB 2.305/2025**: retenção de **17,5% de IRRF sobre JCP** desde 1º/01/2026, acréscimo de 10% nos percentuais de presunção do **Lucro Presumido** (32% -> **35,2%** em serviços para IRPJ e 12% -> **13,2%** para CSLL) sobre a parcela da receita bruta anual acima de R$ 5 milhões (R$ 1,25 milhão/trimestre) e redução linear de 10% em benefícios fiscais federais.
    - **Lei 15.270/2025**: retenção de **10% de IRRF sobre dividendos** pagos a pessoa física acima de R$ 50 mil/mês por uma mesma empresa no Brasil e IRPFM progressivo até 10% para rendas anuais acima de R$ 600 mil (e distinção da tributação do ganho de capital na venda da empresa via Holding vs. Pessoa Física).
    - **EC 132/2023, LC 214/2025 e LC 227/2026 (PLP 108/2024)**: cronograma da Reforma Tributária (CBS/IBS), Comitê Gestor do IBS e progressividade obrigatória do ITCMD.
    - **Temas Repetitivos 1.226 (2024) e 1.379 (14/10/2026) do STJ**: natureza mercantil dos planos de *Stock Options* (com onerosidade, voluntariedade e risco de mercado), afastando tanto o IRPF quanto a contribuição previdenciária (INSS) na outorga e no exercício, com tributação exclusiva de ganho de capital na alienação das ações.
    - **Emenda Constitucional 141 (16/10/2026) e Lei 15.371/2026**: redução gradual da jornada máxima constitucional para 42h semanais (dez/2026) e 40h semanais (dez/2027) em escala máxima 5x2 sem redução salarial, e ampliação escalonada da licença-paternidade (10 dias em 2027, 15 em 2028 e 20 em 2029).
    - **Lei 15.352/2026 (conversão da MP 1.317/2025) e Resolução CD/ANPD 15/2024**: transformação da ANPD em **Agência Nacional de Proteção de Dados** e prazo de **3 dias úteis** para comunicação de incidente de segurança com risco ou dano relevante (com guarda de registros por 5 anos).
    - **Resoluções BCB 494/2025 e 519 a 521/2025, Resoluções CVM 193 e 244/2026, Decreto 13.135/2026 (Novo SAC), Decreto 12.456/2025 (EAD) e Lei 15.211/2025 (ECA Digital)**: atualização integral nos Volumes 5, 6, 7, 8, 9, 10 e 11.
  - **Higiene Tipográfica e Sintática Completa**: eliminação de 100% dos travessões (`U+2014`: `0` ocorrências nos 11 volumes), correção de dois-pontos indevidos antes de conjunções (`, e`, `, mas`, `, ou`, `, que`), eliminação de células de tabela órfãs (`| : |`) e recompilação das 12 capas PNG e 12 EPUBs em `build/` com o selo `2026 · v5.3 · EDIÇÃO REVISADA E ATUALIZADA`.

---

## [5.2]: 2026-10-24

### Corrigido

- Primeira rodada de revisão factual, regulatória e de desduplicação inter-volumes sobre a Edição Narrativa Enxuta (reduzindo a repetição entre volumes de 9,9% para 0,8%) e consolidação da auditoria externa em `IGNICAO_v52_achados_da_revisao.xlsx`.

---

## [5.1]: 2026-10-22

### Otimizado e Consolidado

- **Desinchaço Cirúrgico Nível 2: Eliminação de 213.880 Palavras (~855 Páginas) com Zero Perda de Substância (`1.127.851` → `913.971` palavras | `180` → `155` capítulos)**:
  - **100% Zero Duplicatas de Frameworks, Canvases e Templates (`build/partition_10_volumes.js`)**: remoção das 98 réplicas secundárias de ferramentas (`sharedBgs`, `sharedCzs`, `sharedAs`, economizando ~78,3k palavras). Cada um dos **164 Frameworks (`BG`)**, **20 Canvases (`CZ`)** e **39 Templates (`A`)** aparece agora **exatamente uma única vez** em toda a coleção (em sua Fase ou Capítulo primário), com redirecionamento automático de 100% dos wikilinks.
  - **Unificação do Glossário e Siglas no Volume 10 (`build/partition_10_volumes.js`)**: remoção das 9 réplicas locais do glossário ao final dos Volumes 1 a 9 (~25,8k palavras eliminadas), mantendo o Glossário Técnico Completo e a Lista de Abreviações unificados no Volume 10.
  - **Remoção de Andaimes Burocráticos de Almanaque (`build/narrative_bible.js` e `build/domain_intros.js`)**: supressão das fichas `> [!abstract] Resumo operacional` duplicadas, das subseções burocráticas redundantes (`O que este capítulo cobre`, `Quando usar`, `Quem envolve`, `Definição de sucesso`, `PERGUNTAS A RESPONDER`, `Ver também / Conexões`, `Quando não usar`, `Conexão com outros canvases`) e substituição dos 30 resumos longos de abertura de bloco por pontes narrativas concisas (~44,8k palavras eliminadas).
  - **Fusão de 25 Capítulos "Gêmeos" em 23 Tratados Definitivos (`build/chapter_mergers.js`, reduzindo de 180 para 155 capítulos e eliminando ~65k palavras de sobreposição)**:
    - *Vol. 1 (13 → 12 caps)*: fusão de `I` + `CT` (*IA Generativa como Acelerador e Copiloto Diário do Fundador*).
    - *Vol. 2 (4 → 3 caps)*: fusão de `EE` + `S` (*Inteligência Competitiva, Posicionamento Estratégico e Category Design*).
    - *Vol. 3 (10 → 7 caps)*: fusão tripla de `G` + `H` + `B` (*Governança de Validação: Decisão por Gates, Maturidade TRL/CRL e Committed Next Move*) e fusão de `AE` + `CC` (*Dinâmica de Marketplaces, Plataformas e Efeitos de Rede*).
    - *Vol. 4 (16 → 11 caps)*: fusões de `DU` + `J` (*GTM Playbook e Arquitetura de Canais*), `AR` + `AS` (*Content Marketing, SEO e Community Building*), `DX` + `EA` (*Branding e Product Marketing: PMM*), `X` + `CB` (*Pricing Strategy e Economia da Assinatura*) e `AA` + `DT` (*Customer Success e Customer Experience*).
    - *Vol. 5 (21 → 15 caps)*: fusões de `W` + `EN` (*Contabilidade, Regimes Fiscais e Reforma Tributária IBS/CBS*), `AN` + `CD` (*Modelagem Financeira Operacional e Coortes*), `EC` + `EG` (*FP&A, Orçamento Vivo e Revenue Forecasting*), `EZ` + `AT` (*Capital de Giro, CCC, Tesouraria e Crise de Caixa*), `V` + `CF` (*Jornada e Processo de Captação / Fundraising*) e `CI` + `CJ` (*Equity Crowdfunding CVM 88, Tokenização, RWA e Drex*).
    - *Vol. 6 (20 → 15 caps)*: fusão de `DY` + `FD` (*Business Development e Parcerias com Grandes Corporações*), fusão tripla de `CQ` + `BM` + `CY` (*Relações Públicas, Comunicação Institucional e Marca Pessoal do Fundador*), fusão de `R` + `BQ` (*Founder Mode, Delegação, Gestão do Tempo e Cadência Operacional*) e fusão de `AP` + `FG` (*Cultura Organizacional como Disciplina e em Situações Críticas*).
    - *Vol. 7 (11 → 10 caps)*: fusão de `CR` + `BC` (*Engineering Management, DevEx e Gestão de Dívida Técnica*).
    - *Vol. 8 (14 → 13 caps)*: fusão de `EU` + `AH` (*Contratos Empresariais e Operacionais em Profundidade*).
    - *Vol. 9 (23 → 21 caps)*: fusões de `CW` + `EV` (*Gestão de Crise, Continuidade Operacional e Comunicação Crítica*) e `BR` + `DI` (*Integração Pós-M&A, Transição do Fundador, Retenção de Talentos e Earnout*).

---

## [5.0]: 2026-10-21

### Adicionado

- **Edição Narrativa Autocontida ("Do Almanaque ao Clássico de Trincheira": 202 Seções, 1,12 milhão de palavras)**: reconstrução literária completa de todas as **21 Fases**, **180 Capítulos** e **Epílogo** nos 10 volumes da coleção, inspirada na arquitetura narrativa dos 10 maiores clássicos de negócios (*Michael Gerber, Eric Ries, Peter Thiel, Jason Fried/DHH, Andy Grove, Gino Wickman, Ben Horowitz, Jim Collins, Geoffrey Moore* e *Clayton Christensen*):
  - **Nota do Autor v5.0 e Fio Condutor com os 4 Fundadores-Arquétipos Brasileiros (`build/narrative_bible.js`)**: introdução de **Lucas & Marina** (SaaS B2B / AI-Native em SP e Florianópolis), **Dra. Camila** (Economia Real, Saúde & Serviços em Belo Horizonte), **Henrique** (Industrial, Agro & B2G/GovTech em Curitiba, PR e MT) e **Rafael & Bia** (Varejo, D2C, Comércio & Marketplace em Recife e Goiânia), cujos dilemas, pivôs, crises de caixa e saídas atravessam os Volumes 1 a 9.
  - **Anatomia em 4 Atos Narrativos em 100% das 202 Seções (`build/narrative_vol1_refactor.js`, `narrative_vol2_vol4_refactor.js`, `narrative_vol5_vol6_refactor.js`, `narrative_vol7_vol9_refactor.js`, `narrative_vol10_refactor.js`)**:
    - *Ato 1: Abertura em Tensão*: nenhuma fase ou capítulo abre com definições frias ou fichas de resumo; todas as 202 seções abrem com cena visceral ou contraste de bastidor, um paradoxo contraintuitivo e um **conceito batizado em negrito** (ex.: **O Teatro de Café**, **A Mentira Educada do Café**, **A Falência com Lucro Contábil**, **O Imposto Invisível do Ciclo de Caixa**, **O ESOP de Papelão**, **O Cemitério dos Pilotos Gratuitos**).
    - *Atos 2 e 3: Tese, Mecanismo e Engenharia de Execução*: substituição integral de 100% dos subtítulos robóticos de enciclopédia (`### O que esta fase cobre`, `### O quê`, `### POR QUE`, `### Quando usar`, `### Quem envolve`, `### Como executar`, `### Armadilhas`, `### SAÍDA DESTA FASE`, `### PERGUNTAS A RESPONDER`, `### EXEMPLO PRÁTICO`) por **subtítulos-tese afirmativos e conversacionais**.
    - *Ato 4: O Espelho (Autodiagnóstico) e o Ritual de Segunda-Feira às 9h*: todas as 202 seções fecham a parte narrativa com 3 perguntas de autodiagnóstico, uma permissão/regra de bolso e uma ação imediata para a segunda-feira às 9h.
  - **Oficina de Trincheira (*Caderno de Campo*)**: reposicionamento dos quadros `> [!abstract] Resumo operacional` para a entrada da Oficina ao final da narrativa de cada fase e reescrita de 100% dos cabeçalhos internos dos **164 Frameworks (`BG`)** e **20 Canvases (`CZ`)** no tom de consultor ao lado do dono (*estilo Traction*).
- **Playbook de Bancas de Editais Públicos, Incubação e Diagnóstico Institucional GovTech (`build/govtech_banca_additions.js`)**:
  - **Vol. 10, Cap. 32 (GovTech)**: adicionada a seção *Anatomia Real do Problema Público (As 13 Variáveis Institucionais)*, o *Roteiro de Diagnóstico Institucional Pré-Solução*, o *Dossiê de Evidências de Validação com o Setor Público*, a *Matriz de Riscos de Implementação em Prefeituras* e o *Playbook de Aprovação em Editais de Incubação GovTech, Desafios Públicos e Subvenção*.
  - **Vol. 1, Cap. 9 (Pitch e Fala em Público)**: adicionado o *Cronômetro Implacável de Pitch para Bancas de Editais, Subvenção e Comitês (5 e 7 minutos)* e a *Regra de Ouro para Q&A de Banca Avaliadora*.
  - **Vol. 1, Cap. 12 (Aceleradoras e Programas)**: adicionado o *Checklist dos 6 Pilares de Avaliação de Bancas de Incubação, Aceleração e Fomento*.

### Melhorado

- **Normalização Tipográfica em Prosa (`build/partition_10_volumes.js`)**: conversão automática de referências de capítulos no meio de parágrafos e wikilinks para *Title Case* editorial (preservando siglas técnicas como `SaaS`, `B2B`, `PIX`, `LGPD`, `DRE`, `FP&A`, `IPO`, `M&A`), eliminando títulos em caixa alta no meio da leitura.
- **Auditoria Automatizada da Edição Narrativa (`audit.py` e `check_exemplos.py`)**: `audit.py` passa a verificar a ausência de cabeçalhos robóticos H3/H5 em todos os 10 volumes (`0` encontrados), e `check_exemplos.py` passa a validar os exemplos práticos também sob os novos títulos narrativos da v5.0.
- **11 Capas e 11 EPUBs (`build/render_cover.js`, `build/build_epubs.js`)**: atualização do selo editorial nas 11 capas (`cover.png` e `cover-vol-1.png` a `cover-vol-10.png`) para `2026 · v5.0 · EDIÇÃO NARRATIVA AUTOCONTIDA` e recompilação de todos os 11 EPUBs.

---

## [4.0]: 2026-10-21

### Adicionado

- **Coleção 100% Autocontida em 10 Volumes (`volumes/`) com Zero Dependências Cruzadas de Ferramentas (21 Fases, 180 Capítulos, ~995k palavras)**: reengenharia completa da arquitetura editorial para que cada volume funcione como um livro independente e 100% autocontido (~60k a ~175k palavras / ~240 a ~700 páginas impressas por volume), com **zero links de ferramentas (`#Framework:`, `#Canvas:`, `#Template:`) apontando para fora do próprio volume** nos Volumes 1 a 9, **Roteiros de Leitura por Perfil (*Fast-Tracks*)** e **Glossário e Siglas próprio ao final de cada volume**:
  - **Vol. 1: Ideação (`volumes/IGNICAO-Vol-1-Ideacao.md`)**: Fases 0 a 3 + Capítulos 1 a 13 + 8 Roteiros de Leitura por Perfil (*Fast-Tracks*) + 41 ferramentas embutidas + Glossário e Siglas do Volume (~114k palavras)
  - **Vol. 2: Descoberta e Mercado (`volumes/IGNICAO-Vol-2-Descoberta-e-Mercado.md`)**: Fases 4 a 6 + Capítulos 1 a 4 + 57 ferramentas embutidas + Glossário e Siglas do Volume (~82k palavras)
  - **Vol. 3: Experimentos e Prototipagem (`volumes/IGNICAO-Vol-3-Experimentos-e-Prototipagem.md`)**: Fases 7 a 10 + Capítulos 1 a 10 (incluindo o novo *Capítulo 10: Bootstrapping, Serviços Produtizados e a Transição Service-to-Product*) + 58 ferramentas embutidas + Glossário e Siglas do Volume (~81k palavras)
  - **Vol. 4: Tração e PMF (`volumes/IGNICAO-Vol-4-Tracao-e-PMF.md`)**: Fases 11 a 13 + Capítulos 1 a 16 + 40 ferramentas embutidas + Glossário e Siglas do Volume (~103k palavras)
  - **Vol. 5: Finanças e Captação (`volumes/IGNICAO-Vol-5-Financas-e-Captacao.md`)**: Fase 14 + Capítulos 1 a 21 (reordenados com Contabilidade, Tributário, FP&A, Capital de Giro, Bancos e o novo *Capítulo 10: Comércio Exterior, Importação Ásia-Brasil, Desembaraço Aduaneiro, Landed Cost e Benefícios Fiscais Estaduais* antes de VC/Valuation) + 20 ferramentas embutidas + Glossário e Siglas do Volume (~94k palavras)
  - **Vol. 6 (Receita e Pessoas (`volumes/IGNICAO-Vol-6-Receita-e-Pessoas.md`)**: Fases 15 e 16 + Capítulos 1 a 20 (incluindo o novo *Capítulo 7) Franchising, Licenciamento e Expansão de Redes Multi-Unidades: Lei 13.966/2019 e COF*) + 45 ferramentas embutidas + Glossário e Siglas do Volume (~110k palavras)
  - **Vol. 7: Produto, Engenharia e Operações (`volumes/IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes.md`)**: Fase 17 + Capítulos 1 a 11 + 27 ferramentas embutidas + Glossário e Siglas do Volume (~60k palavras)
  - **Vol. 8: Jurídico, LGPD e Segurança (`volumes/IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca.md`)**: Fase 18 + Capítulos 1 a 14 + 8 ferramentas embutidas + Glossário e Siglas do Volume (~64k palavras)
  - **Vol. 9: Maturidade, Exit e Family Office (`volumes/IGNICAO-Vol-9-Maturidade-e-Exit.md`)**: Fases 19 e 20 + Capítulos 1 a 23 (reordenados cronologicamente com M&A, Search Funds, o novo *Capítulo 15 (Spin-offs, Carve-outs e Venture Building Corporativo*, *Capítulo 16) Liquidez Secundária unificada*, IPO e Tributação do Exit antes de Transição Pós-Aquisição, Retenção Pós-M&A, Post-Mortems, Second-Time Founder e o novo *Capítulo 23: A Empresa Cash Cow (Dividendos Perpétuos), Holdings Patrimoniais, Family Office e Gestão de Fortuna Pós-Exit*) + Epílogo + 25 ferramentas embutidas + Glossário e Siglas do Volume (~104k palavras)
  - **Vol. 10: Economia da Inovação, Hubs Globais e Playbooks das 42 Verticais (`volumes/IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.md`)**: Capítulos 1 a 48 (A Economia da Inovação e seus 8 Atores, Geografia Mundial da Inovação por Continente + 15 Hubs Brasileiros, Ciclos Macroeconômicos, Regulação Setorial, CADE/Antitruste, Políticas Públicas e os **42 Playbooks Setoriais** agrupados em 6 Clusters da Economia Real) + Dicionário Geral Unificado (180+ termos), Lista de Abreviações (78 siglas), Bibliografia Geral e Índices da Coleção (~175k palavras)
- **Expansão Completa do Volume 10 para 48 Capítulos (35 Novos Capítulos Setoriais e de Ecossistema, Cobrindo 42 Verticais com Zero Redundâncias)**:
  - **2 Novos Capítulos Fundacionais de Ecossistema**: *Capítulo 1: A Economia da Inovação e seus Atores* (Schumpeter, retornos crescentes, *Power Law*, Universidades/ICTs e TRL 1–9, Estado e Fomento Finep/BNDES/EMBRAPII/FAPESP/CPSI, Incubadoras/Aceleradoras/Venture Studios, Anjos/Syndicates, matemática interna de Fundos de VC, Growth/PE/Venture Debt/Search Funds, Corporações/CVC/Open Innovation e Mercados de Capitais) e *Capítulo 2: Geografia Mundial da Inovação* (efeitos de aglomeração, máfias de fundadores, especialização nos 5 continentes, as 5 vantagens competitivas estruturais do Brasil e a radiografia dos 15 principais Hubs Brasileiros).
  - **33 Novos Playbooks Setoriais (totalizando 42 Verticais em 6 Clusters Econômicos, Capítulos 7 a 48)**:
    - *Cluster I (Finanças: Cap. 7 a 10)*: Fintech/Pagamentos/PIX/BaaS, Crédito Digital/FIDCs, Insurtech, Wealthtech/Cripto/Drex/RWA;
    - *Cluster II (Agro, Pecuária, Commodities, Bioeconomia, Infra, Energia, Resíduos e Indústria: Cap. 11 a 21)*: Agritech (Lavoura), Pecuária de Precisão (PecTech)/Genética Bovina (FIV)/Rastreabilidade (SISBOV/EUDR)/Aquicultura (AquaTech), Trading de Commodities/Originação/Barter/Armazenagem (Silos)/Hedge (CBOT/B3)/Arco Norte, Biocombustíveis (Etanol de Milho/E2G/SAF/CBIOs)/Bioinsumos/Agrominerais (Pó de Rocha)/Irrigação/Bioeconomia Extrativista (SisGen), Infratech/Saneamento/Concessões, Energytech/Mercado Livre/GD, Cleantech/Carbono, Gestão de Resíduos Sólidos/Biometano/Reciclagem/Base Florestal e Celulose, Miningtech/Oil & Gas, Indústria 4.0/Manutenção Preditiva, Hardware/Deep Tech;
    - *Cluster III (Logística, Mobilidade, Ativos Pesados, Imobiliário, Segurança, Telecom e Aeroespacial: Cap. 22 a 28)*: Logtech, Mobitech/Frotas/EV, Consórcios Administrados (BACEN Lei 11.795/2008)/Rental de Máquinas e Frotas Pesadas/Aftermarket Automotivo (Autopeças, Seminovos e Leilões), Proptech/Construtech, Segurança Privada/Portaria Remota e Autônoma/Visão Computacional/Facilities, Telecomunicações/Provedores Regionais de Fibra (ISPs)/5G Privativo/Data Centers de IA, Aerospace/Spacetech/Drones/Defesa Dual-Use;
    - *Cluster IV (Saúde, Educação, Governo e Jurídico: Cap. 29 a 33)*: Biotech/Healthtech, Saúde Física Privada (Redes de Clínicas Médicas e Odontológicas, Equiparação Hospitalar, Estética Avançada, Medicina Diagnóstica, Farmácias Magistrais e OPME), Edtech, Govtech, Legaltech/Regtech/Taxtech;
    - *Cluster V (Varejo, Consumo, Estilo de Vida, Longevidade e Assistência: Cap. 34 a 38)*: Retailtech/Omnichannel, Foodtech/Food Service, D2C/Beleza/Moda/CPG/Wellness, Traveltech/Eventos/SportsTech/PetTech/Silver Economy, Setor Funerário/Cemitérios/Crematórios/Planos de Assistência Familiar (Lei 13.261/2016)/DeathTech;
    - *Cluster VI (Software, Serviços B2B, IA, Cyber, DevTools, RH, Marketing, Creator e Games: Cap. 39 a 48)*: Horizontal B2B SaaS/ERPs, Vertical SaaS com Embedded Finance/IA, Serviços Profissionais B2B de Alta Margem/Consultorias/Software Houses/Nearshoring/BPO, AI-Native/Agentes/MLOps, Cybersecurity/Biometria/Antifraude, DevTools/Cloud/Open Source Comercial, HRTech/Folha/Benefícios, Martech/Salestech/WhatsApp-First/Retail Media, Creator Economy/Mídia/Infoprodutos e Gaming/E-Sports/iGaming Regulado.
  - **Eliminação de 4 Seções Duplicadas de Referência (~9,4k palavras removidas) e Polimento Integral dos Índices**: extintos o Glossário Temático redundante, a Bibliografia Unificada duplicada e os dois Índices Analítico/Remissivo redundantes do final do Volume 10; higienizadas todas as 17 células `| BG |` do Índice Geral de Frameworks para apontarem às Fases e Volumes exatos, corrigidos todos os artefatos de regex do Índice Remissivo e adicionados 42 novos verbetes técnicos, 36 siglas e o índice completo das 42 verticais.
- **Incorporação In-Place de 164 Frameworks Únicos (227 instâncias), 20 Canvases Únicos (42 instâncias), 39 Templates Únicos (52 instâncias), Métricas, Leituras e Glossário Local por Volume**:
  - Todos os **164 frameworks** (`BG.1.1` a `BG.19.4`), **20 canvases** (`CZ.1` a `CZ.20`), **39 templates e estudos de caso preenchidos** (`A.1` a `A.39`), **19 tabelas de métricas por fase** e **18 listas de leituras recomendadas** estão embutidos diretamente nas Fases e Capítulos onde são aplicados (incluindo ferramentas compartilhadas entre fases de volumes distintos, sem duplicatas dentro de um mesmo volume).
  - Adicionada a seção `## GLOSSÁRIO E SIGLAS DESTE VOLUME` ao final de cada um dos Volumes 1 a 9 com todos os termos técnicos e siglas utilizados naquele volume.

### Modificado

- **Numeração Sequencial Contínua das 21 Fases (`FASE 0` a `FASE 20`) e Limpeza Integral de `### FERRAMENTAS DESTA FASE`**:
  - Extinta a antiga nomenclatura `FASE 2B` (agora **`FASE 3: CONSTRUÇÃO DA TEORIA DO NEGÓCIO`**).
  - As antigas `Fases 3 a 12` passam a ser sequencialmente **`FASES 4 a 13`**.
  - As antigas subfases da `Fase 14` (`14D`, `14C`, `14A`, `14B`) e a antiga `Fase 13` foram promovidas a fases principais dos Volumes 5, 6, 7 e 8 (**`FASE 14`** a **`FASE 18`**).
  - As antigas `Fases 15 e 16` passam a ser **`FASE 19 (REINVENÇÃO E SEGUNDA CURVA`** e **`FASE 20) ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)`** no Volume 9.
  - Reescritas e higienizadas todas as 21 seções `### FERRAMENTAS DESTA FASE`, eliminando menções legadas a `Apêndice BG`, `Ferramentário` ou `Apêndice CZ` e convertendo cada ferramenta em link local dentro do próprio volume.
- **Transformação dos Apêndices em 180 Capítulos Orgânicos (`## CAPÍTULO 1` a `## CAPÍTULO N`)**:
  - Extintos os antigos códigos alfabéticos (`APÊNDICE AJ`, `APÊNDICE DU`, `APÊNDICE V`, etc.) nos títulos e no corpo do texto. Cada volume agora numera seus capítulos sequencialmente a partir do `CAPÍTULO 1`, com normalização completa das referências cruzadas em prosa e wikilinks (2.739 links auditados com 0 quebras e 0 links de ferramentas entre volumes nos Vols 1 a 9).

### Removido

- **Volumes separados de Ferramentário (`IGNICAO-Vol-9-Ferramentario.md`) e Canvases/Templates (`IGNICAO-Vol-10-Canvases-e-Templates.md`)**: todo o seu conteúdo técnico e prático foi distribuído organicamente dentro dos Volumes 1 a 9, mantendo-se os Índices Gerais e Glossários no Volume 10 (`IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.md`).

---

## [3.5]: 2026-10-20

### Adicionado

- **Coleção Rebalanceada em 10 Volumes Focais (`volumes/`)**: evolução arquitetural da coleção de 6 para 10 volumes canônicos homogêneos (~50k a ~88k palavras / ~200 a ~350 páginas cada), eliminando os monolitos dos antigos Volumes 4 (Escala) e 6 (Referência):
  - **Vol. 1: Ideação e Fundação (`volumes/IGNICAO-Vol-1-Ideacao.md`)**: Fases 0 a 2B + 13 apêndices fundacionais e do fundador (~74k palavras)
  - **Vol. 2: Validação, Descoberta e MVP (`volumes/IGNICAO-Vol-2-Validacao.md`)**: Fases 3 a 9 + 12 apêndices de descoberta, método científico, mercado e modelos (~71k palavras)
  - **Vol. 3: Tração, Go-to-Market e PMF (`volumes/IGNICAO-Vol-3-Tracao.md`)**: Fases 10 a 12 + 20 apêndices de GTM inicial, canais, pricing, vendas, dados e caixa (~88k palavras)
  - **Vol. 4: Captação, Venture Capital e Finanças (`volumes/IGNICAO-Vol-4-Captacao-e-Financas.md`)**: Fase 13 + 18 apêndices de fundraising, valuation, term sheets, cap table, dívida, FP&A, contabilidade e tributário (~75k palavras)
  - **Vol. 5: Receita, Pessoas e Operações em Escala (`volumes/IGNICAO-Vol-5-Receita-e-Pessoas.md`)**: Fase 14 + 19 apêndices de vendas enterprise, RevOps, CS, brand, hiring, cultura, liderança e remuneração/SOP (~84k palavras)
  - **Vol. 6: Engenharia, Produto, Dados, IA e Jurídico (`volumes/IGNICAO-Vol-6-Engenharia-e-Juridico.md`)**: 23 apêndices técnicos, operacionais e regulatórios de arquitetura, dívida técnica, segurança, dados, IA/LLMs, produto, supply chain, jurídico, LGPD e ESG (~84k palavras)
  - **Vol. 7: Maturidade, Governança, Crise e Exit (`volumes/IGNICAO-Vol-7-Maturidade-e-Exit.md`)**: Fases 15 e 16 + 22 apêndices de board, internacionalização, crise/turnaround, M&A, IPO, post-mortems, second-time founder e Epílogo (~76k palavras)
  - **Vol. 8: Playbooks Setoriais e Trilhas de Navegação (`volumes/IGNICAO-Vol-8-Playbooks-Setoriais.md`)**: Guias de Trilha (B, C, E) + 13 apêndices setoriais e de ecossistema cobrindo SaaS, Marketplace, Fintech, Healthtech, Edtech, Agro, Govtech, Hardware, Impacto, Ecossistema e Comunidades (~50k palavras)
  - **Vol. 9: Enciclopédia de Métodos e Frameworks (`volumes/IGNICAO-Vol-9-Ferramentario.md`)**: Índice Mestre de Frameworks + Apêndice BG completo (BG.1 a BG.19, 164 frameworks em 19 domínios) como tratado metodológico autônomo (~81k palavras)
  - **Vol. 10: Canvases, Templates, Glossário e Índices (`volumes/IGNICAO-Vol-10-Canvases-e-Templates.md`)**: Os 20 Canvases (CZ) + 42 Templates e Exemplos (A) + Glossários (AH, AI), Bibliografias (AF, AG), Dicionário de Erros, Checklists e Índices (~73k palavras)
- **30 Introduções Explicativas de Domínio (`build/domain_intros.js`)**: adição de textos introdutórios de costura editorial no início de cada um dos 30 blocos temáticos ao longo dos 10 volumes, detalhando a lógica sistêmica do domínio, a ordem recomendada de leitura, as dependências causais entre capítulos e a conexão direta com os frameworks do Vol. 9 (`BG.X.Y`) e os canvases/templates do Vol. 10 (`CZ.N` e `A.N`).
- **10 EPUBs individuais + Omnibus e 11 Capas (`build/`)**: geração automatizada dos 10 EPUBs por volume (`IGNICAO-Vol-1-Ideacao.epub` a `IGNICAO-Vol-10-Canvases-e-Templates.epub`), do EPUB Omnibus (`IGNICAO.epub`) e das 11 capas editoriais (`cover.png` e `cover-vol-1.png` a `cover-vol-10.png`) atualizadas para a versão `v3.5`.

### Melhorado

- **Cobertura de Referências Cruzadas (Zero Órfãos)**: integração orgânica de todos os sub-blocos do Ferramentário (`BG.1` a `BG.19`) e dos estudos de caso do Apêndice A (`A.20` a `A.26`) nas introduções de domínio correspondentes, reduzindo de 96 para **0 itens órfãos** em toda a coleção (`py audit.py --orphans`).
- **Resolução Global de Wikilinks (2.753 links)**: atualização automática de 100% dos wikilinks internos e inter-volumes para refletir a nova topologia de 10 volumes com 0 links quebrados (`py audit.py`).

---

## [3.4]: 2026-10-17

### Adicionado

- **Coleção em 6 Volumes (`volumes/`)**: divisão arquitetural do manuscrito monolítico em 6 volumes canônicos independentes por estágio da jornada empreendedora:
  - **Vol. 1: Ideação (`volumes/IGNICAO-Vol-1-Ideacao.md`)**: Fases 0 a 2B + 13 apêndices fundacionais e do fundador (~72k palavras)
  - **Vol. 2: Validação (`volumes/IGNICAO-Vol-2-Validacao.md`)**: Fases 3 a 9 + 12 apêndices de descoberta, método científico, mercado e modelos (~69k palavras)
  - **Vol. 3: Tração (`volumes/IGNICAO-Vol-3-Tracao.md`)**: Fases 10 a 12 + 20 apêndices de GTM inicial, canais, pricing, vendas, dados e caixa (~86k palavras)
  - **Vol. 4: Escala (`volumes/IGNICAO-Vol-4-Escala.md`)**: Fases 13 e 14 + 59 apêndices de captação, finanças, vendas enterprise, pessoas, engenharia e jurídico (~235k palavras)
  - **Vol. 5: Maturidade (`volumes/IGNICAO-Vol-5-Maturidade.md`)**: Fases 15 e 16 + 26 apêndices de board, internacionalização, crise, M&A, IPO, post-mortems e Epílogo (~90k palavras)
  - **Vol. 6: Referência (`volumes/IGNICAO-Vol-6-Referencia.md`)**: Ferramentário BG, Canvases CZ, Templates A, Catálogos B/C/E, 10 Verticais Setoriais, Glossários, Bibliografias e Índices (~189k palavras)
- **6 EPUBs por volume + Omnibus (`build/`)**: geração automatizada de `IGNICAO-Vol-1-Ideacao.epub` a `IGNICAO-Vol-6-Referencia.epub` com capas próprias (`cover-vol-1.png` a `cover-vol-6.png`), além da edição completa `IGNICAO.epub`.
- **Links cruzados inter-volumes**: wikilinks apontando para seções de outros volumes usam sintaxe `[[IGNICAO-Vol-X-Nome#Seção|Texto (Vol. X)]]`, mantendo navegação nativa no Obsidian, links clicáveis entre todos os volumes no EPUB Omnibus e referências formatadas em itálico nos EPUBs individuais.

### Corrigido

- **Fase 14 e Apêndice J**: restauradas para o final da Fase 14 as subseções `Exercício aplicado: Diagnóstico organizacional (Fase 14)`, `O momento 20 a 100 pessoas` e `Critérios de Transição de Papel do Fundador`, que estavam deslocadas ao final do Apêndice J.
- **Apêndice BE e Fase 15**: movida a seção de transição entre a etapa de Escala e o Ciclo Longo (antes `Transição, Parte III para Parte IV`, presa ao final do Apêndice BE) para a abertura da Fase 15 no Volume 5 (`Abertura da Etapa: da Escala (Vol. 4) para a Maturidade e o Ciclo Longo (Vol. 5)`).
- **Integridade de wikilinks, Apêndice DU e Índice de Frameworks**: corrigidos 9 links residuais em formato slug (`apendice-az`, `apendice-a#a31`, `apendice-fi`, `apendice-tr`, `apendice-q`), os links da abertura do `Apêndice DU` e 14 referências de fases na tabela do `APÊNDICE: ÍNDICE DE FRAMEWORKS` para apontarem às seções canônicas reais. Os scripts `audit.py` e `check_exemplos.py` foram atualizados para cobrir 100% dos 6 volumes.
- **Pipeline EPUB e Capas (`build/`)**: alinhado o algoritmo `slugify()` de `build/preprocess_epub.js` ao `auto_identifiers` do Pandoc (resolvendo 100% das âncoras entre capítulos XHTML nos 7 EPUBs), adicionada conversão de callouts Obsidian (`[!note]`, `[!tip]`, etc.) para blockquotes estilizados, proteção de blocos de código e atualização do selo das 7 capas PNG para `v3.4`.

### Removido

- **Manuscrito monolítico legado (`IGNIÇÃO - Manual de Campo do Empreendedor  - João Prado (2026).md`)**: substituído pelos 6 volumes canônicos em `volumes/`.
- **Script legado `build/convert_slug_wikilinks.js`**: substituído pela validação e resolução direta de wikilinks entre volumes em `build/preprocess_epub.js` e `audit.py`.

---

## [3.3]: 2026-05-02

### Adicionado

- **Fase 1**: nova seção `### FERRAMENTAS DESTA FASE` com 8 ferramentas (Idea→Wedge→Scale, Strategy Canvas, First Principles, Inversion, Wardley Mapping, Three Horizons, Mom Test, Lean/BMC). Antes a fase não tinha essa seção.
- **Todas as 18 fases**: callout `> [!abstract] Resumo operacional` com Entregável, Sinais de saída e Três armadilhas mais comuns.
- **Glossário**: ~40 termos novos (ACV, Advisor, BATNA, BCB, CIM, Closing, Delaware Flip, DPA, DPO, EBITDA, EOR, ESOP, Exit, Founder Mode, FP&A, IPO, LGPD, M&A, MECE, MEDDPICC, Mom Test, Moat, P&L, Positioning, RBF, RFC, ROFR, ROI, SAFE, SPADE, SPIN Selling, Term sheet, Venture Debt, WACC, ZOPA, e outros): total agora em 142 termos.
- **audit.py**: modo `--content` que valida sincronia parágrafo a parágrafo entre os arquivos modulares e o canônico (substitui a triagem por contagem de linhas).

### Melhorado

- **Fase 2 e Template A.1 (DII)**: framework evolui de 5 para 7 blocos. Acrescentados Modelo de Negócios e Por que Nós (FMF separado da tese de mercado). Bloco "Para quem" ganha sub-estrutura B2B (Quem é, Quem NÃO é, Decisor Econômico, Champion). Lista de incertezas categorizada em 6 buckets (Demanda, Mercado, Solução, Adoção, Canal, Modelo). Janela de palavras 600→800. Exemplos PadariaPro e iFood reescritos.
- **Apêndice CZ**: consolidação de 20 canvases com teoria, princípios, exemplo brasileiro preenchido e armadilhas. CZ vira o destino canônico para canvases (BMC, Lean, VPC, Strategy Canvas, Empathy Map, Customer Journey, Pirate/AARRR, MVP Canvas, Storytelling, Risk Canvas, Hypothesis Canvas, Canvas da Cunha, Theory Map, Capital Stack, Network Effects Map, Org Chart Evolution, Wardley Map e outros).
- **Intros de FERRAMENTAS DESTA FASE em 17 seções (16 fases + 3 subfases da Fase 14)**: cada intro agora nomeia explicitamente as ferramentas com seus códigos BG.X.Y embutidos (ex.: "Esta fase aplica seis ferramentas: First Principles Thinking (BG.4.1), Blue Ocean Strategy / ERRC Grid (BG.1.8), Playing to Win (BG.2.1)..."). Antes a frase de abertura era genérica ("Detalhamento no Apêndice BG").
- **Fases 15 e 16**: padronização ortográfica de quatro headers (`SAÍDA DESSA FASE` e `FERRAMENTAS DESSA FASE`) para `DESTA FASE`, alinhando com as outras 14 fases.
- **Glossário**: 36 entradas que terminavam em "Ver Apêndice X" sem contexto agora nomeiam o tópico específico em prosa (ex.: "Ver Apêndice DS: BATNA, ZOPA e o método Harvard de negociação"). Mais 4 correções de apêndice errado: SAFE de DG→DF, LGPD de Z→T, Term sheet/Liquidation/Anti-dilution/ROFR de DH→V, Delaware Flip de BS+BT→CU.
- **Apêndice A**: headers de A.13 a A.18 de-linkados (cabeçalho é nome, cross-ref vai para o corpo do template em prosa).
- **Apêndices internos**: 5 referências informais "Ver Apêndice de X" formalizadas (Visto→BS, Equity Crowdfunding→CI, Comunicação Pública→BM, Tokenização→CJ).

### Removido

- **6 stubs de redirect**: BG.2.9 (BMC), BG.2.10 (Lean Canvas), BG.10.10 (VPC), A.20 (BMC Nubank), A.21 (Lean QuintoAndar), A.22 (VPC Wellhub): todos eram seções de 1-2 parágrafos apontando para CZ. Conteúdo canônico vive integralmente em CZ.1, CZ.2, CZ.3. Códigos BG mantêm gaps de numeração (são identificadores estáveis).

### Corrigido

- README e introducao.md atualizados com contagens reais: 720 mil palavras (antes "500 mil"), 142 termos no glossário (antes "91"), 100 diagramas Mermaid (antes "58"), 163 frameworks em BG (antes "165", após deleção de 3 stubs).
- Caractere quebrado no README (`No` → `Não`).
- `check_exemplos.py`: regex de extração de labels mais tolerante a notações variadas; `META_FIELDS` ganha "resultado", "decisão", "decisao".

---

## [3.2.1]: 2026-05-01

### Corrigido

- Sincronização completa do documento canônico com todos os arquivos modulares
- Inseridos 21 apêndices ausentes do canônico: AA (Customer Success), AR (Content Marketing e SEO), AS (Community Building), CQ (Marca e PR), e os 17 apêndices DA-DQ do v3.1 (Marco Legal, Stock Options, PI, Investor Relations, IPO, SAFE/Nota Conversível, Tributação do Exit, Mercado Secundário, Retenção pós-M&A, Não-Concorrência, Govtech, Agritech, Edtech, Cleantech, Proptech, Legaltech, Logtech)
- Propagadas 47 callouts de gancho (adicionadas nas fases durante v3.2) para o documento canônico em todas as 18 fases (0-16)
- Canonical atualizado para 62.502 linhas e 150 apêndices confirmados

---

## [3.2]: 2026-05-01

### Adicionado

- 41 novos apêndices (DR–FF) em 10 fases temáticas cobrindo hard skills de negócio:
  - **Fase 1: Finanças do Fundador:** DR (Demonstrativos Financeiros), EC (Planejamento e Orçamento), EN (Tributário Estratégico), EY (Gestão de Risco e Seguros)
  - **Fase 2: Trabalhista e Contratos:** EL (Direito do Trabalho), EU (Contratos em Profundidade por Tipo), ED (Compensação e Benefícios)
  - **Fase 3: Habilidades Operacionais:** DS (Negociação), EJ (Tomada de Decisão), EK (Influência e Persuasão), EW (Comunicação Escrita), EX (Apresentação e Fala)
  - **Fase 4: Go-to-Market:** DU (GTM Playbook), EA (Product Marketing), DX (Branding), EE (Inteligência Competitiva), FF (Psicologia do Consumidor Brasileiro)
  - **Fase 5: Receita e CX:** EB (Vendas Enterprise), EH (Revenue Operations), DT (Customer Experience), EG (Revenue Forecasting)
  - **Fase 6: Operações e Org Design:** DV (Operações em Escala), DW (Management para Fundador Técnico), DZ (Comunicação Interna), FB (Design Organizacional), FC (Gestão do Conhecimento)
  - **Fase 7: Capital e Macro:** EZ (Capital de Giro e Recebíveis), FA (Relações Bancárias e Crédito), EF (Ciclos Macroeconômicos)
  - **Fase 8: Parcerias e AI:** DY (Business Development), FD (Parceria com Grandes Corporações), EI (AI Ops e Automação)
  - **Fase 9: Jurídico-Regulatório:** EO (Contencioso), EP (Responsabilidade do Sócio), EQ (CDC), EM (Compliance e Anticorrupção), ER (CADE), ES (Recuperação Judicial)
  - **Fase 10: Regulatório e Comunicação:** EV (Comunicação em Crise), ET (Regulatório de IA), FE (Política Pública como Estratégia)

### Melhorado

- **Apêndice CE:** adicionado pre-money/post-money, Rule of 40 2024-2025, desconto Brasil, checklist pré-negociação
- **Apêndice X:** adicionado WTP no Brasil, pricing para expansão (NRR 110%), psicologia de preço, SMB vs. enterprise
- **Apêndice AY:** reescrito do zero (era stub de 49 linhas): marketing de performance completo com 8 seções
- **Apêndice AP:** adicionado cultura em remote/híbrido, hipercrescimento, padrões tóxicos, integração pós-M&A
- **Apêndice CG:** adicionado benchmarks AARRR brasileiros, North Star Metric, growth tax, PLG em B2B
- README: atualizado de 109 para 150 apêndices, versão 3.2
- Total de apêndices: 150 (antes: 109)

---

## [3.1]: 2026-05-01

### Adicionado

- 17 novos apêndices (DA–DQ): Marco Legal das Startups, Stock Options/ESOP, Propriedade Intelectual, Investor Relations, IPO no Brasil, Instrumentos de captação, Tributação do exit, Mercado secundário, Retenção pós-M&A, Não-concorrência, Govtech, Agritech, Edtech, Cleantech/ESG, Proptech, Legaltech, Logtech
- 8 novos templates (A.31–A.38): board deck, data room, term sheet anotado, JDs, post-mortem técnico, OKR cascade, fundraising plan, template de 1:1
- 4 novos canvases (CZ.17–20): Team Canvas, Hypothesis Canvas, Canvas da Cunha, Theory Map
- 9 novos frameworks no Ferramentário (BG): VRIO, Impact Mapping, Hook Model, NFX Taxonomy, API Strategy/DevRel, Value Stream Mapping, Toyota Kata, SPADE, DuPont Analysis
- Expansão CZ.12: SCQA e Strategic Narrative Pyramid com exemplo brasileiro

### Melhorado

- **Fase 0**: seção de saúde mental em estágio zero (5 gatilhos psicológicos + protocolo semanal)
- **Fase 1**: scoring quantitativo de S-curve para geração de ideias (5 dimensões)
- **Fase 3**: Passo 7B: entrevista de raiz causal (técnica 3 camadas)
- **Fase 12**: PMF scorecard 6D com guia de interpretação
- **Fase 13**: metodologia de divisão de equity entre fundadores (Slicing Pie adaptado)
- **Fase 15**: modelo quantitativo pivot vs. persevere (6 dimensões, escala 1–5)
- **Fase 16**: earnout em profundidade: mecânica, 4 tipos de métricas, 5 cláusulas protetoras
- **Apêndice AB**: Shape Up (Ryan Singer / Basecamp) adicionado à seção de frameworks de produto
- **Apêndice AA**: CS-Led Growth como motor de expansão de receita
- **Apêndice AR**: SEO programático e Content Ops com casos brasileiros
- **Apêndice AS**: Community-Led Growth: flywheel, RD Station/Hotmart, 5 mecanismos
- **Apêndice Z**: Governança de IA Generativa (4 domínios, EU AI Act, LGPD)
- **Apêndice AO**: Data Mesh (4 princípios) e privacy-first tracking pós-cookies
- **Apêndice CR**: career ladder L3–L6 (IC e Manager) e plano de sucessão técnica
- **Apêndice J**: critérios de transição de papel do fundador (6 papéis × critérios de saída)
- Ferramentário atualizado: 165 frameworks (antes: 156)
- README e introducao.md: apêndices DK–DQ indexados

---

## [3.0]: 2026-04-27

### Adicionado

- Apêndice C: Catálogo de Métricas por Fase (referência rápida para todas as 17 fases)
- Apêndice: Glossário de Termos Técnicos (91 termos, A–Z)
- 58 diagramas Mermaid (fases 0, 1, 2, 8, 12, 13, 14, 15, 16 + apêndices)
- Mapa visual das 17 fases no início do livro
- Notas de compatibilidade para blocos Mermaid experimentais (xychart-beta, journey)

### Melhorado

- Voz autoral consistente em todos os 89 apêndices (Caminho C)
- 648 referências "Fase X" convertidas em wiki-links navegáveis
- 807 wiki-links totais (fases + apêndices)
- YAML com aliases, campos dataview e tags expandidas
- Terminologia padronizada: cofundador (antes: co-founder)
- Callouts Obsidian em 586 pontos críticos

### Corrigido

- Links quebrados: zero
- Headers maiúsculos (O QUE, POR QUÊ, etc.): zero
- Tiques de linguagem de IA eliminados
- Dado do Nubank atualizado (100M+ clientes, 2026)

---

## [2.0]: 2026-04-24

### Adicionado

- Fases 0–16 reescritas em voz autoral
- 89 apêndices com callouts Obsidian
- Sínteses de fase e transições entre partes

---

## [1.0]: 2026-04-22

### Adicionado

- Versão inicial do livro

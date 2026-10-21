# Changelog

Todas as mudanças significativas neste projeto são documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [4.0] — 2026-10-20

### Adicionado

- **Coleção 100% Autocontida em 10 Volumes (`volumes/`) com Zero Dependências Cruzadas de Ferramentas**: reengenharia completa da arquitetura editorial para que cada volume funcione como um livro independente e 100% autocontido (~60k a ~113k palavras / ~240 a ~450 páginas impressas por volume), com **zero links de ferramentas (`#Framework:`, `#Canvas:`, `#Template:`) apontando para fora do próprio volume** nos Volumes 1 a 9 e **Glossário e Siglas próprio ao final de cada volume**:
  - **Vol. 1 — Ideação (`volumes/IGNICAO-Vol-1-Ideacao.md`)**: Fases 0 a 3 + Capítulos 1 a 13 + 41 ferramentas embutidas + Glossário e Siglas do Volume (~113k palavras)
  - **Vol. 2 — Descoberta e Mercado (`volumes/IGNICAO-Vol-2-Descoberta-e-Mercado.md`)**: Fases 4 a 6 + Capítulos 1 a 4 + 57 ferramentas embutidas + Glossário e Siglas do Volume (~82k palavras)
  - **Vol. 3 — Experimentos e Prototipagem (`volumes/IGNICAO-Vol-3-Experimentos-e-Prototipagem.md`)**: Fases 7 a 10 + Capítulos 1 a 9 + 58 ferramentas embutidas + Glossário e Siglas do Volume (~77k palavras)
  - **Vol. 4 — Tração e PMF (`volumes/IGNICAO-Vol-4-Tracao-e-PMF.md`)**: Fases 11 a 13 + Capítulos 1 a 16 + 40 ferramentas embutidas + Glossário e Siglas do Volume (~103k palavras)
  - **Vol. 5 — Finanças e Captação (`volumes/IGNICAO-Vol-5-Financas-e-Captacao.md`)**: Fase 14 + Capítulos 1 a 20 + 20 ferramentas embutidas + Glossário e Siglas do Volume (~91k palavras)
  - **Vol. 6 — Receita e Pessoas (`volumes/IGNICAO-Vol-6-Receita-e-Pessoas.md`)**: Fases 15 e 16 + Capítulos 1 a 19 + 45 ferramentas embutidas + Glossário e Siglas do Volume (~107k palavras)
  - **Vol. 7 — Produto, Engenharia e Operações (`volumes/IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes.md`)**: Fase 17 + Capítulos 1 a 11 + 27 ferramentas embutidas + Glossário e Siglas do Volume (~60k palavras)
  - **Vol. 8 — Jurídico, LGPD e Segurança (`volumes/IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca.md`)**: Fase 18 + Capítulos 1 a 14 + 8 ferramentas embutidas + Glossário e Siglas do Volume (~64k palavras)
  - **Vol. 9 — Maturidade e Exit (`volumes/IGNICAO-Vol-9-Maturidade-e-Exit.md`)**: Fases 19 e 20 + Capítulos 1 a 22 + Epílogo + 25 ferramentas embutidas + Glossário e Siglas do Volume (~98k palavras)
  - **Vol. 10 — Economia da Inovação, Hubs Globais e Playbooks das 32 Verticais (`volumes/IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.md`)**: Capítulos 1 a 38 (A Economia da Inovação e seus 8 Atores, Geografia Mundial da Inovação por Continente + 15 Hubs Brasileiros, Ciclos Macroeconômicos, Regulação Setorial, CADE/Antitruste, Políticas Públicas e os **32 Playbooks Setoriais** agrupados em 6 Clusters da Economia Real) + Dicionário Geral Unificado, Lista de Abreviações, Bibliografia Geral e Índices da Coleção (~138k palavras)
- **Expansão Completa do Volume 10 para 38 Capítulos (25 Novos Capítulos Setoriais e de Ecossistema, Zero Redundâncias)**:
  - **2 Novos Capítulos Fundacionais de Ecossistema**: *Capítulo 1 — A Economia da Inovação e seus Atores* (Schumpeter, retornos crescentes, *Power Law*, Universidades/ICTs e TRL 1–9, Estado e Fomento Finep/BNDES/EMBRAPII/FAPESP/CPSI, Incubadoras/Aceleradoras/Venture Studios, Anjos/Syndicates, matemática interna de Fundos de VC, Growth/PE/Venture Debt/Search Funds, Corporações/CVC/Open Innovation e Mercados de Capitais) e *Capítulo 2 — Geografia Mundial da Inovação* (efeitos de aglomeração, máfias de fundadores, especialização nos 5 continentes, as 5 vantagens competitivas estruturais do Brasil e a radiografia dos 15 principais Hubs Brasileiros).
  - **23 Novos Playbooks Setoriais (totalizando 32 Verticais em 6 Clusters Econômicos, Capítulos 7 a 38)**: *Cluster I (Finanças)*: Fintech/Pagamentos/PIX/BaaS, Crédito Digital/FIDCs, Insurtech, Wealthtech/Cripto/Drex/RWA; *Cluster II (Agro, Infra, Energia e Indústria)*: Agritech, Infratech/Saneamento/Concessões, Energytech/Mercado Livre/GD, Cleantech/Carbono, Miningtech/Oil & Gas, Indústria 4.0/Manutenção Preditiva, Hardware/Deep Tech; *Cluster III (Logística, Mobilidade, Imobiliário e Aeroespacial)*: Logtech, Mobitech/Frotas/EV, Proptech/Construtech, Aerospace/Spacetech/Drones/Defesa Dual-Use; *Cluster IV (Saúde, Educação, Governo e Jurídico)*: Biotech/Healthtech, Edtech, Govtech, Legaltech/Regtech/Taxtech; *Cluster V (Varejo, Consumo e Serviços)*: Retailtech/Omnichannel, Foodtech/Food Service, D2C/Beleza/Moda/CPG/Wellness, Traveltech/Eventos/SportsTech/PetTech/Silver Economy; *Cluster VI (Software, IA, Cyber, DevTools, RH, Marketing, Creator e Games)*: Horizontal B2B SaaS/ERPs, Vertical SaaS com Embedded Finance/IA, AI-Native/Agentes/MLOps, Cybersecurity/Biometria/Antifraude, DevTools/Cloud/Open Source Comercial, HRTech/Folha/Benefícios, Martech/Salestech/WhatsApp-First/Retail Media, Creator Economy/Mídia/Infoprodutos e Gaming/E-Sports/iGaming Regulado.
  - **Eliminação de 4 Seções Duplicadas de Referência (~9,4k palavras removidas)**: extintos o Glossário Temático redundante, a Bibliografia Unificada duplicada e os dois Índices Analítico/Remissivo redundantes do final do Volume 10, mantendo um único bloco enxuto de Dicionário Geral (A–Z), Lista de Abreviações, Bibliografia Geral, Índice Geral de Frameworks e Índice Remissivo.
- **Incorporação In-Place de 164 Frameworks Únicos (227 instâncias), 20 Canvases Únicos (42 instâncias), 39 Templates Únicos (52 instâncias), Métricas, Leituras e Glossário Local por Volume**:
  - Todos os **164 frameworks** (`BG.1.1` a `BG.19.4`), **20 canvases** (`CZ.1` a `CZ.20`), **39 templates e estudos de caso preenchidos** (`A.1` a `A.39`), **19 tabelas de métricas por fase** e **18 listas de leituras recomendadas** estão embutidos diretamente nas Fases e Capítulos onde são aplicados (incluindo ferramentas compartilhadas entre fases de volumes distintos, sem duplicatas dentro de um mesmo volume).
  - Adicionada a seção `## GLOSSÁRIO E SIGLAS DESTE VOLUME` ao final de cada um dos Volumes 1 a 9 com todos os termos técnicos e siglas utilizados naquele volume.

### Modificado

- **Numeração Sequencial Contínua das 21 Fases (`FASE 0` a `FASE 20`) e Limpeza Integral de `### FERRAMENTAS DESTA FASE`**:
  - Extinta a antiga nomenclatura `FASE 2B` (agora **`FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO`**).
  - As antigas `Fases 3 a 12` passam a ser sequencialmente **`FASES 4 a 13`**.
  - As antigas subfases da `Fase 14` (`14D`, `14C`, `14A`, `14B`) e a antiga `Fase 13` foram promovidas a fases principais dos Volumes 5, 6, 7 e 8 (**`FASE 14`** a **`FASE 18`**).
  - As antigas `Fases 15 e 16` passam a ser **`FASE 19 — REINVENÇÃO E SEGUNDA CURVA`** e **`FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)`** no Volume 9.
  - Reescritas e higienizadas todas as 21 seções `### FERRAMENTAS DESTA FASE`, eliminando menções legadas a `Apêndice BG`, `Ferramentário` ou `Apêndice CZ` e convertendo cada ferramenta em link local dentro do próprio volume.
- **Transformação dos Apêndices em 166 Capítulos Orgânicos (`## CAPÍTULO 1` a `## CAPÍTULO N`)**:
  - Extintos os antigos códigos alfabéticos (`APÊNDICE AJ`, `APÊNDICE DU`, `APÊNDICE V`, etc.) nos títulos e no corpo do texto. Cada volume agora numera seus capítulos sequencialmente a partir do `CAPÍTULO 1`, com normalização completa das referências cruzadas em prosa e wikilinks (2.647 links auditados com 0 quebras e 0 links de ferramentas entre volumes nos Vols 1 a 9).

### Removido

- **Volumes separados de Ferramentário (`IGNICAO-Vol-9-Ferramentario.md`) e Canvases/Templates (`IGNICAO-Vol-10-Canvases-e-Templates.md`)**: todo o seu conteúdo técnico e prático foi distribuído organicamente dentro dos Volumes 1 a 9, mantendo-se os Índices Gerais e Glossários no Volume 10 (`IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.md`).

---

## [3.5] — 2026-10-20

### Adicionado

- **Coleção Rebalanceada em 10 Volumes Focais (`volumes/`)**: evolução arquitetural da coleção de 6 para 10 volumes canônicos homogêneos (~50k a ~88k palavras / ~200 a ~350 páginas cada), eliminando os monolitos dos antigos Volumes 4 (Escala) e 6 (Referência):
  - **Vol. 1 — Ideação e Fundação (`volumes/IGNICAO-Vol-1-Ideacao.md`)**: Fases 0 a 2B + 13 apêndices fundacionais e do fundador (~74k palavras)
  - **Vol. 2 — Validação, Descoberta e MVP (`volumes/IGNICAO-Vol-2-Validacao.md`)**: Fases 3 a 9 + 12 apêndices de descoberta, método científico, mercado e modelos (~71k palavras)
  - **Vol. 3 — Tração, Go-to-Market e PMF (`volumes/IGNICAO-Vol-3-Tracao.md`)**: Fases 10 a 12 + 20 apêndices de GTM inicial, canais, pricing, vendas, dados e caixa (~88k palavras)
  - **Vol. 4 — Captação, Venture Capital e Finanças (`volumes/IGNICAO-Vol-4-Captacao-e-Financas.md`)**: Fase 13 + 18 apêndices de fundraising, valuation, term sheets, cap table, dívida, FP&A, contabilidade e tributário (~75k palavras)
  - **Vol. 5 — Receita, Pessoas e Operações em Escala (`volumes/IGNICAO-Vol-5-Receita-e-Pessoas.md`)**: Fase 14 + 19 apêndices de vendas enterprise, RevOps, CS, brand, hiring, cultura, liderança e remuneração/SOP (~84k palavras)
  - **Vol. 6 — Engenharia, Produto, Dados, IA e Jurídico (`volumes/IGNICAO-Vol-6-Engenharia-e-Juridico.md`)**: 23 apêndices técnicos, operacionais e regulatórios de arquitetura, dívida técnica, segurança, dados, IA/LLMs, produto, supply chain, jurídico, LGPD e ESG (~84k palavras)
  - **Vol. 7 — Maturidade, Governança, Crise e Exit (`volumes/IGNICAO-Vol-7-Maturidade-e-Exit.md`)**: Fases 15 e 16 + 22 apêndices de board, internacionalização, crise/turnaround, M&A, IPO, post-mortems, second-time founder e Epílogo (~76k palavras)
  - **Vol. 8 — Playbooks Setoriais e Trilhas de Navegação (`volumes/IGNICAO-Vol-8-Playbooks-Setoriais.md`)**: Guias de Trilha (B, C, E) + 13 apêndices setoriais e de ecossistema cobrindo SaaS, Marketplace, Fintech, Healthtech, Edtech, Agro, Govtech, Hardware, Impacto, Ecossistema e Comunidades (~50k palavras)
  - **Vol. 9 — Enciclopédia de Métodos e Frameworks (`volumes/IGNICAO-Vol-9-Ferramentario.md`)**: Índice Mestre de Frameworks + Apêndice BG completo (BG.1 a BG.19, 164 frameworks em 19 domínios) como tratado metodológico autônomo (~81k palavras)
  - **Vol. 10 — Canvases, Templates, Glossário e Índices (`volumes/IGNICAO-Vol-10-Canvases-e-Templates.md`)**: Os 20 Canvases (CZ) + 42 Templates e Exemplos (A) + Glossários (AH, AI), Bibliografias (AF, AG), Dicionário de Erros, Checklists e Índices (~73k palavras)
- **30 Introduções Explicativas de Domínio (`build/domain_intros.js`)**: adição de textos introdutórios de costura editorial no início de cada um dos 30 blocos temáticos ao longo dos 10 volumes, detalhando a lógica sistêmica do domínio, a ordem recomendada de leitura, as dependências causais entre capítulos e a conexão direta com os frameworks do Vol. 9 (`BG.X.Y`) e os canvases/templates do Vol. 10 (`CZ.N` e `A.N`).
- **10 EPUBs individuais + Omnibus e 11 Capas (`build/`)**: geração automatizada dos 10 EPUBs por volume (`IGNICAO-Vol-1-Ideacao.epub` a `IGNICAO-Vol-10-Canvases-e-Templates.epub`), do EPUB Omnibus (`IGNICAO.epub`) e das 11 capas editoriais (`cover.png` e `cover-vol-1.png` a `cover-vol-10.png`) atualizadas para a versão `v3.5`.

### Melhorado

- **Cobertura de Referências Cruzadas (Zero Órfãos)**: integração orgânica de todos os sub-blocos do Ferramentário (`BG.1` a `BG.19`) e dos estudos de caso do Apêndice A (`A.20` a `A.26`) nas introduções de domínio correspondentes, reduzindo de 96 para **0 itens órfãos** em toda a coleção (`py audit.py --orphans`).
- **Resolução Global de Wikilinks (2.753 links)**: atualização automática de 100% dos wikilinks internos e inter-volumes para refletir a nova topologia de 10 volumes com 0 links quebrados (`py audit.py`).

---

## [3.4] — 2026-10-17

### Adicionado

- **Coleção em 6 Volumes (`volumes/`)**: divisão arquitetural do manuscrito monolítico em 6 volumes canônicos independentes por estágio da jornada empreendedora:
  - **Vol. 1 — Ideação (`volumes/IGNICAO-Vol-1-Ideacao.md`)**: Fases 0 a 2B + 13 apêndices fundacionais e do fundador (~72k palavras)
  - **Vol. 2 — Validação (`volumes/IGNICAO-Vol-2-Validacao.md`)**: Fases 3 a 9 + 12 apêndices de descoberta, método científico, mercado e modelos (~69k palavras)
  - **Vol. 3 — Tração (`volumes/IGNICAO-Vol-3-Tracao.md`)**: Fases 10 a 12 + 20 apêndices de GTM inicial, canais, pricing, vendas, dados e caixa (~86k palavras)
  - **Vol. 4 — Escala (`volumes/IGNICAO-Vol-4-Escala.md`)**: Fases 13 e 14 + 59 apêndices de captação, finanças, vendas enterprise, pessoas, engenharia e jurídico (~235k palavras)
  - **Vol. 5 — Maturidade (`volumes/IGNICAO-Vol-5-Maturidade.md`)**: Fases 15 e 16 + 26 apêndices de board, internacionalização, crise, M&A, IPO, post-mortems e Epílogo (~90k palavras)
  - **Vol. 6 — Referência (`volumes/IGNICAO-Vol-6-Referencia.md`)**: Ferramentário BG, Canvases CZ, Templates A, Catálogos B/C/E, 10 Verticais Setoriais, Glossários, Bibliografias e Índices (~189k palavras)
- **6 EPUBs por volume + Omnibus (`build/`)**: geração automatizada de `IGNICAO-Vol-1-Ideacao.epub` a `IGNICAO-Vol-6-Referencia.epub` com capas próprias (`cover-vol-1.png` a `cover-vol-6.png`), além da edição completa `IGNICAO.epub`.
- **Links cruzados inter-volumes**: wikilinks apontando para seções de outros volumes usam sintaxe `[[IGNICAO-Vol-X-Nome#Seção|Texto (Vol. X)]]`, mantendo navegação nativa no Obsidian, links clicáveis entre todos os volumes no EPUB Omnibus e referências formatadas em itálico nos EPUBs individuais.

### Corrigido

- **Fase 14 e Apêndice J**: restauradas para o final da Fase 14 as subseções `Exercício aplicado — Diagnóstico organizacional (Fase 14)`, `O momento 20 a 100 pessoas` e `Critérios de Transição de Papel do Fundador`, que estavam deslocadas ao final do Apêndice J.
- **Apêndice BE e Fase 15**: movida a seção de transição entre a etapa de Escala e o Ciclo Longo (antes `Transição, Parte III para Parte IV`, presa ao final do Apêndice BE) para a abertura da Fase 15 no Volume 5 (`Abertura da Etapa: da Escala (Vol. 4) para a Maturidade e o Ciclo Longo (Vol. 5)`).
- **Integridade de wikilinks, Apêndice DU e Índice de Frameworks**: corrigidos 9 links residuais em formato slug (`apendice-az`, `apendice-a#a31`, `apendice-fi`, `apendice-tr`, `apendice-q`), os links da abertura do `Apêndice DU` e 14 referências de fases na tabela do `APÊNDICE: ÍNDICE DE FRAMEWORKS` para apontarem às seções canônicas reais. Os scripts `audit.py` e `check_exemplos.py` foram atualizados para cobrir 100% dos 6 volumes.
- **Pipeline EPUB e Capas (`build/`)**: alinhado o algoritmo `slugify()` de `build/preprocess_epub.js` ao `auto_identifiers` do Pandoc (resolvendo 100% das âncoras entre capítulos XHTML nos 7 EPUBs), adicionada conversão de callouts Obsidian (`[!note]`, `[!tip]`, etc.) para blockquotes estilizados, proteção de blocos de código e atualização do selo das 7 capas PNG para `v3.4`.

### Removido

- **Manuscrito monolítico legado (`IGNIÇÃO - Manual de Campo do Empreendedor  - João Prado (2026).md`)**: substituído pelos 6 volumes canônicos em `volumes/`.
- **Script legado `build/convert_slug_wikilinks.js`**: substituído pela validação e resolução direta de wikilinks entre volumes em `build/preprocess_epub.js` e `audit.py`.

---

## [3.3] — 2026-05-02

### Adicionado

- **Fase 1**: nova seção `### FERRAMENTAS DESTA FASE` com 8 ferramentas (Idea→Wedge→Scale, Strategy Canvas, First Principles, Inversion, Wardley Mapping, Three Horizons, Mom Test, Lean/BMC). Antes a fase não tinha essa seção.
- **Todas as 18 fases**: callout `> [!abstract] Resumo operacional` com Entregável, Sinais de saída e Três armadilhas mais comuns.
- **Glossário**: ~40 termos novos (ACV, Advisor, BATNA, BCB, CIM, Closing, Delaware Flip, DPA, DPO, EBITDA, EOR, ESOP, Exit, Founder Mode, FP&A, IPO, LGPD, M&A, MECE, MEDDPICC, Mom Test, Moat, P&L, Positioning, RBF, RFC, ROFR, ROI, SAFE, SPADE, SPIN Selling, Term sheet, Venture Debt, WACC, ZOPA, e outros) — total agora em 142 termos.
- **audit.py**: modo `--content` que valida sincronia parágrafo a parágrafo entre os arquivos modulares e o canônico (substitui a triagem por contagem de linhas).

### Melhorado

- **Fase 2 e Template A.1 (DII)**: framework evolui de 5 para 7 blocos. Acrescentados Modelo de Negócios e Por que Nós (FMF separado da tese de mercado). Bloco "Para quem" ganha sub-estrutura B2B (Quem é, Quem NÃO é, Decisor Econômico, Champion). Lista de incertezas categorizada em 6 buckets (Demanda, Mercado, Solução, Adoção, Canal, Modelo). Janela de palavras 600→800. Exemplos PadariaPro e iFood reescritos.
- **Apêndice CZ**: consolidação de 20 canvases com teoria, princípios, exemplo brasileiro preenchido e armadilhas. CZ vira o destino canônico para canvases (BMC, Lean, VPC, Strategy Canvas, Empathy Map, Customer Journey, Pirate/AARRR, MVP Canvas, Storytelling, Risk Canvas, Hypothesis Canvas, Canvas da Cunha, Theory Map, Capital Stack, Network Effects Map, Org Chart Evolution, Wardley Map e outros).
- **Intros de FERRAMENTAS DESTA FASE em 17 seções (16 fases + 3 subfases da Fase 14)**: cada intro agora nomeia explicitamente as ferramentas com seus códigos BG.X.Y embutidos (ex.: "Esta fase aplica seis ferramentas: First Principles Thinking (BG.4.1), Blue Ocean Strategy / ERRC Grid (BG.1.8), Playing to Win (BG.2.1)..."). Antes a frase de abertura era genérica ("Detalhamento no Apêndice BG").
- **Fases 15 e 16**: padronização ortográfica de quatro headers (`SAÍDA DESSA FASE` e `FERRAMENTAS DESSA FASE`) para `DESTA FASE`, alinhando com as outras 14 fases.
- **Glossário**: 36 entradas que terminavam em "Ver Apêndice X" sem contexto agora nomeiam o tópico específico em prosa (ex.: "Ver Apêndice DS — BATNA, ZOPA e o método Harvard de negociação"). Mais 4 correções de apêndice errado: SAFE de DG→DF, LGPD de Z→T, Term sheet/Liquidation/Anti-dilution/ROFR de DH→V, Delaware Flip de BS+BT→CU.
- **Apêndice A**: headers de A.13 a A.18 de-linkados (cabeçalho é nome, cross-ref vai para o corpo do template em prosa).
- **Apêndices internos**: 5 referências informais "Ver Apêndice de X" formalizadas (Visto→BS, Equity Crowdfunding→CI, Comunicação Pública→BM, Tokenização→CJ).

### Removido

- **6 stubs de redirect**: BG.2.9 (BMC), BG.2.10 (Lean Canvas), BG.10.10 (VPC), A.20 (BMC Nubank), A.21 (Lean QuintoAndar), A.22 (VPC Wellhub) — todos eram seções de 1-2 parágrafos apontando para CZ. Conteúdo canônico vive integralmente em CZ.1, CZ.2, CZ.3. Códigos BG mantêm gaps de numeração (são identificadores estáveis).

### Corrigido

- README e introducao.md atualizados com contagens reais: 720 mil palavras (antes "500 mil"), 142 termos no glossário (antes "91"), 100 diagramas Mermaid (antes "58"), 163 frameworks em BG (antes "165", após deleção de 3 stubs).
- Caractere quebrado no README (`No` → `Não`).
- `check_exemplos.py`: regex de extração de labels mais tolerante a notações variadas; `META_FIELDS` ganha "resultado", "decisão", "decisao".

---

## [3.2.1] — 2026-05-01

### Corrigido

- Sincronização completa do documento canônico com todos os arquivos modulares
- Inseridos 21 apêndices ausentes do canônico: AA (Customer Success), AR (Content Marketing e SEO), AS (Community Building), CQ (Marca e PR), e os 17 apêndices DA-DQ do v3.1 (Marco Legal, Stock Options, PI, Investor Relations, IPO, SAFE/Nota Conversível, Tributação do Exit, Mercado Secundário, Retenção pós-M&A, Não-Concorrência, Govtech, Agritech, Edtech, Cleantech, Proptech, Legaltech, Logtech)
- Propagadas 47 callouts de gancho (adicionadas nas fases durante v3.2) para o documento canônico em todas as 18 fases (0-16)
- Canonical atualizado para 62.502 linhas e 150 apêndices confirmados

---

## [3.2] — 2026-05-01

### Adicionado

- 41 novos apêndices (DR–FF) em 10 fases temáticas cobrindo hard skills de negócio:
  - **Fase 1 — Finanças do Fundador:** DR (Demonstrativos Financeiros), EC (Planejamento e Orçamento), EN (Tributário Estratégico), EY (Gestão de Risco e Seguros)
  - **Fase 2 — Trabalhista e Contratos:** EL (Direito do Trabalho), EU (Contratos em Profundidade por Tipo), ED (Compensação e Benefícios)
  - **Fase 3 — Habilidades Operacionais:** DS (Negociação), EJ (Tomada de Decisão), EK (Influência e Persuasão), EW (Comunicação Escrita), EX (Apresentação e Fala)
  - **Fase 4 — Go-to-Market:** DU (GTM Playbook), EA (Product Marketing), DX (Branding), EE (Inteligência Competitiva), FF (Psicologia do Consumidor Brasileiro)
  - **Fase 5 — Receita e CX:** EB (Vendas Enterprise), EH (Revenue Operations), DT (Customer Experience), EG (Revenue Forecasting)
  - **Fase 6 — Operações e Org Design:** DV (Operações em Escala), DW (Management para Fundador Técnico), DZ (Comunicação Interna), FB (Design Organizacional), FC (Gestão do Conhecimento)
  - **Fase 7 — Capital e Macro:** EZ (Capital de Giro e Recebíveis), FA (Relações Bancárias e Crédito), EF (Ciclos Macroeconômicos)
  - **Fase 8 — Parcerias e AI:** DY (Business Development), FD (Parceria com Grandes Corporações), EI (AI Ops e Automação)
  - **Fase 9 — Jurídico-Regulatório:** EO (Contencioso), EP (Responsabilidade do Sócio), EQ (CDC), EM (Compliance e Anticorrupção), ER (CADE), ES (Recuperação Judicial)
  - **Fase 10 — Regulatório e Comunicação:** EV (Comunicação em Crise), ET (Regulatório de IA), FE (Política Pública como Estratégia)

### Melhorado

- **Apêndice CE:** adicionado pre-money/post-money, Rule of 40 2024-2025, desconto Brasil, checklist pré-negociação
- **Apêndice X:** adicionado WTP no Brasil, pricing para expansão (NRR 110%), psicologia de preço, SMB vs. enterprise
- **Apêndice AY:** reescrito do zero (era stub de 49 linhas) — marketing de performance completo com 8 seções
- **Apêndice AP:** adicionado cultura em remote/híbrido, hipercrescimento, padrões tóxicos, integração pós-M&A
- **Apêndice CG:** adicionado benchmarks AARRR brasileiros, North Star Metric, growth tax, PLG em B2B
- README: atualizado de 109 para 150 apêndices, versão 3.2
- Total de apêndices: 150 (antes: 109)

---

## [3.1] — 2026-05-01

### Adicionado

- 17 novos apêndices (DA–DQ): Marco Legal das Startups, Stock Options/ESOP, Propriedade Intelectual, Investor Relations, IPO no Brasil, Instrumentos de captação, Tributação do exit, Mercado secundário, Retenção pós-M&A, Não-concorrência, Govtech, Agritech, Edtech, Cleantech/ESG, Proptech, Legaltech, Logtech
- 8 novos templates (A.31–A.38): board deck, data room, term sheet anotado, JDs, post-mortem técnico, OKR cascade, fundraising plan, template de 1:1
- 4 novos canvases (CZ.17–20): Team Canvas, Hypothesis Canvas, Canvas da Cunha, Theory Map
- 9 novos frameworks no Ferramentário (BG): VRIO, Impact Mapping, Hook Model, NFX Taxonomy, API Strategy/DevRel, Value Stream Mapping, Toyota Kata, SPADE, DuPont Analysis
- Expansão CZ.12: SCQA e Strategic Narrative Pyramid com exemplo brasileiro

### Melhorado

- **Fase 0**: seção de saúde mental em estágio zero (5 gatilhos psicológicos + protocolo semanal)
- **Fase 1**: scoring quantitativo de S-curve para geração de ideias (5 dimensões)
- **Fase 3**: Passo 7B — entrevista de raiz causal (técnica 3 camadas)
- **Fase 12**: PMF scorecard 6D com guia de interpretação
- **Fase 13**: metodologia de divisão de equity entre fundadores (Slicing Pie adaptado)
- **Fase 15**: modelo quantitativo pivot vs. persevere (6 dimensões, escala 1–5)
- **Fase 16**: earnout em profundidade — mecânica, 4 tipos de métricas, 5 cláusulas protetoras
- **Apêndice AB**: Shape Up (Ryan Singer / Basecamp) adicionado à seção de frameworks de produto
- **Apêndice AA**: CS-Led Growth como motor de expansão de receita
- **Apêndice AR**: SEO programático e Content Ops com casos brasileiros
- **Apêndice AS**: Community-Led Growth — flywheel, RD Station/Hotmart, 5 mecanismos
- **Apêndice Z**: Governança de IA Generativa (4 domínios, EU AI Act, LGPD)
- **Apêndice AO**: Data Mesh (4 princípios) e privacy-first tracking pós-cookies
- **Apêndice CR**: career ladder L3–L6 (IC e Manager) e plano de sucessão técnica
- **Apêndice J**: critérios de transição de papel do fundador (6 papéis × critérios de saída)
- Ferramentário atualizado: 165 frameworks (antes: 156)
- README e introducao.md: apêndices DK–DQ indexados

---

## [3.0] — 2026-04-27

### Adicionado

- Apêndice C: Catálogo de Métricas por Fase (referência rápida para todas as 17 fases)
- Apêndice — Glossário de Termos Técnicos (91 termos, A–Z)
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

## [2.0] — 2026-04-24

### Adicionado

- Fases 0–16 reescritas em voz autoral
- 89 apêndices com callouts Obsidian
- Sínteses de fase e transições entre partes

---

## [1.0] — 2026-04-22

### Adicionado

- Versão inicial do livro

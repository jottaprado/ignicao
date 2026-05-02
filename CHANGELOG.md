# Changelog

Todas as mudanças significativas neste projeto são documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

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
- Caractere quebrado no README (`N�o` → `Não`).
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

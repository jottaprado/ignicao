---
title: "APÊNDICE AO — DADOS, ANALYTICS E EXPERIMENTAÇÃO"
appendix: "AO"
---

## APÊNDICE AO — DADOS, ANALYTICS E EXPERIMENTAÇÃO

> [!note] Nota de validade
> Arquitetura de dados evolui em ciclos de três a cinco anos (Lambda, depois Kappa, depois Modern Data Stack, depois emergente). Ferramentas específicas mudam a cada doze a vinte e quatro meses. Princípios (métricas claras, experimentação rigorosa, dado como contrato) são estáveis. Revisar anualmente.

Vários pontos do manual mencionam dados de forma tangencial. [[#APÊNDICE J — FRAMEWORK DE CANAIS DE AQUISIÇÃO|Apêndice J]] (AARRR), [[#APÊNDICE AB — PRODUTO EM ESCALA E DESCOBERTA CONTÍNUA|Apêndice AB]] (produto em escala), métricas em cada fase. Mas dados como disciplina operacional unificada (stack, time, processos, experimentação rigorosa) não tem casa no manual. Empresa pós-PMF, sem infra de dados funcional, toma decisões no escuro, executa experimentos que não medem o que dizem medir, e compromete escala.

Esse apêndice cobre dados como função. Stack moderno. Papéis do time de dados. Métricas com formulações precisas. Experimentação rigorosa (A/B testing com estatística, não achismo). E evolução em escala.

### O que esse apêndice cobre

Quatro camadas. Infraestrutura de dados (ingestão, armazenamento, transformação, consumo). Analytics e métricas (quais medir, como formular, como reportar). Experimentação (A/B testing rigoroso, design experimental, leitura correta de resultados). Time de dados (papéis, quando contratar, como estruturar).

### POR QUE

Decisões sem dados são achismos em escala. Em pré-PMF, a intuição do fundador é frequentemente correta (contexto denso, mercado pequeno). Em escala, ninguém vê o todo. Dados são única forma de ver.

Experimentos mal desenhados são piores que não experimentar. Resultado "ganhamos quinze por cento" em A/B test com amostra pequena, sem significância estatística, pode ser ruído. Decisão baseada nisso piora a empresa.

Stack de dados é infraestrutura. Não luxo. Sem stack adequado, os dados ficam em silos (CRM, produto, financeiro). As análises levam dias. Inconsistências entre áreas.

Time de dados em escala é multi-função. Analytics engineer, data scientist, PM de dados, data engineer. Papéis distintos que o fundador iniciante frequentemente confunde.

### Quando usar

Pré-PMF (Fases 2 a 11). Ferramentas simples (PostHog, Mixpanel, Google Analytics, planilha). Os dados são importantes, mas não requerem stack.

Pós-PMF ([[#FASE 12 — PRODUCT-MARKET FIT|Fase 12]] em diante). Começar a investir em stack moderno. Data warehouse, ferramentas de BI, processo de experimentação.

Pós-Série A. Primeira contratação de dados (analytics engineer, ou data engineer).

Pós-Série B. Time de dados formalizado (três a seis pessoas). Experimentação como disciplina, com plataforma dedicada.

### Quem envolve

Os papéis em time de dados, em escala crescente.

Analytics Engineer. Constrói transformações (dbt, SQL). Mantém modelo dimensional. Entrega data mart para analistas. Papel emergente, mais importante em data stack moderno.

Data Analyst. Constrói dashboards. Responde perguntas específicas de negócio. Trabalha com stakeholders.

Data Scientist. Modelagem estatística, ML, e experimentação complexa. Em muitas empresas, mais junior do que o título sugere.

Data Engineer. Pipelines de ingestão. Infraestrutura. Confiabilidade de dados.

ML Engineer. Opera modelos em produção (distinto de DS, que os constrói).

Data PM, ou Head of Data. Prioriza roadmap de dados. Stakeholder management com outras áreas.

Estágio versus contratação.

| Fase | Time típico |
|---|---|
| Pré-Seed | Ninguém dedicado, fundador técnico faz queries |
| Seed | Primeiro analista, part-time ou full-time generalista |
| Série A | Dois a três, analytics engineer mais um a dois analistas |
| Série B | Cinco a dez, head of data mais dois analytics eng, mais dois a três analistas, mais um DS |
| Série C em diante | Quinze a cinquenta ou mais, separação por domínio (produto, growth, finance) |

### Como executar

#### 1. Modern Data Stack

Arquitetura padrão em SaaS moderno (2023 a 2026).

```text
FONTES TRANSPORTE ARMAZENAMENTO MODELAGEM CONSUMO
- App database → - Fivetran → - Snowflake → - dbt → - Looker / Metabase
- CRM (HubSpot) - Airbyte - BigQuery - Coalesce - Mode / Hex
- CRM (Salesforce) - Stitch - Databricks - Notebooks
- Marketing - Redshift - Reverse ETL (Hightouch)
- Eventos (app) → - Segment → - Operacional
```

Os princípios em cinco peças.

ELT, não ETL. Ingestão bruta (Extract, Load), transformação no warehouse (dbt). Mais escalável, e reprocessável.

dbt como camada de transformação. Código versionado, testado, e documentado. Substitui stored procedures frágeis.

Warehouse dedicado. Não consultar direto na DB de produção (lock, lentidão, risco).

BI self-service. Os usuários de negócio podem fazer as próprias perguntas, sem passar por fila de analista.

Reverse ETL. Os dados transformados voltam para sistemas operacionais (enriquecimento de CRM, por exemplo).

Custo mensal típico, em empresa Série A. Fivetran, R$ 1-5 mil. Snowflake, R$ 2-10 mil. dbt Cloud, R$ 500-2 mil. Looker ou Metabase, R$ 1-5 mil. Segment, R$ 2-8 mil. Total. R$ 6-30 mil por mês. Escala com volume.

#### 2. Métricas, formulações precisas

Erro comum. Métrica nomeada ambiguamente, que cada área calcula diferente. "Churn de abril" varia por coorte (novos versus existentes), base (logo versus revenue), prazo (mensal versus anualizado), e pagamento versus uso.

> [!important] Regra para definir métricas-chave
> Toda métrica-chave da empresa deve ter definição formal escrita. Fórmula matemática. Fonte de dados. Cadência de update. Quem é dono. Sem isso, cada área reporta número diferente, e o board fica confuso.

Exemplo, churn de logo mensal.

```text
Fórmula:
 Churn_mensal(T) = Clientes_cancelados(T) / Clientes_ativos_no_início(T)

Definições:
 "Clientes_cancelados(T)": clientes cuja assinatura expirou em T sem renovação
 "Clientes_ativos_no_início(T)": clientes com assinatura ativa no dia 1 de T

Fonte: CRM (Salesforce), campo "cancellation_date"
Update: mensal, no dia 5 do mês seguinte
Dono: Head of CS
Dashboards: board_deck, cs_operational
```

Métricas SaaS essenciais com formulações.

MRR (Monthly Recurring Revenue). Soma de assinaturas recorrentes, normalizadas para valor mensal.

ARR (Annual Recurring Revenue). MRR vezes doze.

Net New MRR. Novo MRR mais Expansion MRR menos Churn MRR menos Contraction MRR.

NRR (Net Revenue Retention). (ARR_inicial_cohort mais Expansion menos Churn menos Contraction) dividido por ARR_inicial_cohort.

GRR (Gross Revenue Retention). (ARR_inicial_cohort menos Churn menos Contraction) dividido por ARR_inicial_cohort. A diferença em relação ao NRR. Não inclui expansion.

CAC. Gastos de S&M no período divididos por novos logos adquiridos no período.

LTV. (ARPU vezes Margem Bruta) dividido por Churn Mensal.

CAC Payback. CAC dividido por (ARPU vezes Margem Bruta) vezes doze, em meses.

Burn Multiple. Burn líquido no período dividido por Net New ARR no período.

Rule of 40. Percentual de Growth mais percentual de EBITDA Margin.

#### 3. Framework de experimentação (A/B testing rigoroso)

Erro clássico. Experimento sem significância estatística, tratado como "deu certo".

Os princípios corretos vêm em quatro fases.

**[[#FASE 1 — ENCONTRAR A IDEIA|Fase 1]], design do experimento.** Hipótese explícita ("Se mudarmos X, a métrica Y moverá em Z por cento ou mais"). Métrica primária clara, uma, não cinco. Métricas secundárias para guardrails. Sample size calculation, quantos usuários precisam passar pelo experimento para detectar efeito com oitenta por cento de power, e noventa e cinco por cento de confiança? Duração definida, baseada em cálculo, não "rodar até dar certo". Guardrails, métricas que NÃO podem cair (por exemplo, não queremos aumentar ativação às custas de churn).

Cálculo de sample size. Para A/B simples com métrica de conversão, fórmula aproximada.

```text
n = 16 × baseline_rate × (1 - baseline_rate) / MDE²

onde MDE = Minimum Detectable Effect (em pontos absolutos de conversão)
```

Exemplo. Baseline de conversão de vinte por cento, queremos detectar melhoria de dois pontos (vinte e dois por cento).

```text
n = 16 × 0.20 × 0.80 / 0.02² = 6.400 usuários por variante
```

Calculadoras online (Evan Miller's A/B test calculator, Optimizely Sample Size Calculator) fazem o cálculo com menos fricção.

**[[#FASE 2 — ARTICULAÇÃO E CAPTURA DA IDEIA|Fase 2]], execução.** Randomização rigorosa, por user ID hash, não round-robin (causa viés temporal). Sem peeking. Olhar resultado parcial leva a parar cedo quando "está ganhando", e continuar quando não. Destrói validade estatística. Revisar só no prazo pré-definido. Controle de confounders. Não rodar duas mudanças simultâneas. Considerar sazonalidade.

**[[#FASE 3 — DESCOBERTA DO PROBLEMA|Fase 3]], leitura de resultados.** P-value e intervalo de confiança, reportar ambos. P menor que zero vírgula cinco é convenção. A empresa pode ter política diferente (zero vírgula cinco mais conservador). Significância prática versus estatística. Zero vírgula um por cento de melhoria pode ser estatisticamente significante, mas sem impacto de negócio. Efeito em métricas guardrail. Se ganhou em primária, mas caiu em guardrail, é trade-off. Não vitória. Interpretação cuidadosa. Correlação. Causalidade. Generalização.

**Ferramentas.** Plataformas dedicadas. Optimizely, Eppo, Statsig, LaunchDarkly (feature flags mais experimentation), GrowthBook (open source). Mais simples. Google Optimize (descontinuado), VWO, Convert. In-house. Construir em cima de warehouse, e feature flags internos.

#### 4. Quando experimentar, e quando não experimentar

Experimentar é adequado quando o volume é suficiente para detectar efeito em prazo razoável (menos de oito semanas). O efeito esperado é mensurável numericamente. Há reversibilidade, se a variante perder, o custo de reverter é baixo. Há múltiplas ideias competindo por implementação.

Experimentar NÃO é adequado quando o volume é baixo demais (o resultado vai levar seis meses). A decisão é estratégica, ou estrutural (entrar em novo mercado, pivô). O efeito é qualitativo (melhorar brand perception). O custo de implementar a variante é altíssimo (refazer pricing, por exemplo).

Em pré-PMF, experimentação rigorosa raramente é possível (volume baixo). Os métodos alternativos são qualitativos (entrevistas), quasi-experimentos (comparar antes e depois com controle), e decisão por julgamento informado.

#### 5. Data team em escala, estrutura

**Padrão centralized.** Time de dados único, serve todas as áreas. Pros: foco, padrão, eficiência. Cons: pode virar gargalo, e desconhece contexto de áreas.

**Padrão embedded.** Data people alocados dentro de áreas (growth, produto, finance). Pros: contexto profundo, e velocidade. Cons: fragmentação, e inconsistências entre times.

**Padrão hub-and-spoke.** Time central mantém stack, e padrões. Data people embarcados em áreas usam o stack. Pros: melhor dos dois mundos. Cons: requer maturidade organizacional.

Em empresa Série A a B, centralized é mais pragmático. Hub-and-spoke vira sensato em Série C em diante.

#### 6. Governança de dados

Temas que aparecem em escala (Série B em diante). Data catalog, documentação de tabelas, colunas, e significados. Data lineage, rastreabilidade de onde vem cada número. Data quality, testes automatizados (dbt tests), e alertas para anomalias. Privacy e LGPD, quem pode acessar o quê, pseudonimização, e direito de esquecimento. SLA de dados, quando dashboards atualizam, e quem responde por atraso.

### Métricas

Tempo médio para responder pergunta de dados simples. Menos de um dia.

Percentual de métricas-chave com definição formal documentada. Cem por cento.

Cobertura de testes em pipelines de dados (dbt). Acima de oitenta por cento.

Disponibilidade de dashboards críticos. Acima de noventa e nove por cento.

Experimentos rodados por trimestre. Varia por time de produto, ou growth.

Percentual de experimentos com significância estatística atingida. Acima de sessenta por cento.

Adoção de BI self-service (usuários ativos semanais). Acima de cinquenta por cento dos usuários não-técnicos elegíveis.

### Definição de sucesso

Time, e stack, de dados estão saudáveis quando os oito itens estão em pé.

1. Modern data stack implementado (warehouse mais ELT mais dbt mais BI).
2. Métricas-chave têm definição formal escrita, e dono.
3. Dashboards críticos atualizados com SLA claro.
4. Experimentação usa framework rigoroso (sample size, duração, significância).
5. Time proporcional ao estágio, e à carga de trabalho.
6. Áreas de negócio conseguem fazer perguntas self-service para sessenta a oitenta por cento das dúvidas.
7. Board recebe dashboard consistente mensalmente.
8. Os dados são commoditizados, não gargalo.

### Armadilhas

"Precisamos de ML antes de ter dados consistentes". A empresa contrata DS sênior antes de ter o warehouse funcionando. O sênior fica frustrado, e vai embora.

Métricas sem definição. Cada área reporta número diferente. O board fica confuso.

Experimentos sem sample size calculation. Resultados falsos passam como verdade.

Peeking em experimentos. Olhar resultados diariamente destrói validade.

Comprar tool sem time. Snowflake ocioso, sem analytics engineer para usar bem.

Dashboard sem dono. A métrica quebra, ninguém nota, e decisões erradas são tomadas baseadas em número errado por semanas.

Centralização extrema. Fila de quarenta requests para o time de dados. As áreas esperando duas semanas para número trivial.

Ignorar qualidade. Os dados vão para dashboard sem teste. "Churn caiu trinta por cento", por bug em pipeline.

LGPD ignorada. Dados pessoais tratados sem pseudonimização. Acessíveis amplamente.

Correlação tratada como causalidade. Experimento mal desenhado gera insight espúrio, que vira estratégia.

### Checklist

- [ ] Stack de dados definido para o estágio atual?
- [ ] Métricas-chave têm definição formal documentada?
- [ ] Warehouse de dados implementado (Série A em diante)?
- [ ] dbt, ou equivalente, usado para transformações?
- [ ] BI com acesso self-service disponível?
- [ ] Framework de experimentação documentado?
- [ ] Calculadora de sample size usada antes de cada A/B?
- [ ] Duração, e guardrails, definidos pré-experimento?
- [ ] Análise de resultados considera significância estatística?
- [ ] Time de dados proporcional ao estágio?
- [ ] Data quality (testes, alertas) implementado?
- [ ] Governança LGPD para dados pessoais em dia?

### Ver também

[[#APÊNDICE CG — GROWTH COMO FUNÇÃO ORGANIZACIONAL: TIME DE GROWTH, BUILD VS HIRE, RELAÇÃO COM PRODUTO|Apêndice CG]], Growth como função. [[#APÊNDICE CD — MODELAGEM FINANCEIRA COM COHORTS: PROJEÇÕES QUE FUNCIONAM EM EMPRESA RECORRENTE|Apêndice CD]], Cohorts. [[#APÊNDICE AN — MODELAGEM FINANCEIRA OPERACIONAL|Apêndice AN]], Modelagem financeira.

---

---

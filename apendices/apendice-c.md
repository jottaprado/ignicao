---
title: "APÊNDICE C — CATÁLOGO DE MÉTRICAS POR FASE"
appendix: "C"
---

## APÊNDICE C — CATÁLOGO DE MÉTRICAS POR FASE

> [!note] Como usar
> Esse apêndice consolida as métricas-chave de cada fase em formato de referência rápida. Para cada fase, apresenta as métricas centrais de acompanhamento, os benchmarks (referências comparativas) quando existem e os sinais de alerta. Não substitui a leitura de cada fase, mas serve como painel de controle para diagnóstico rápido de onde a empresa está e o que medir no momento atual.

O diagnóstico correto começa pela fase. Se você não sabe em qual fase está, leia as seções de abertura de [[#FASE 10 — MVP E EXPERIMENTOS DE MERCADO|Fase 10]] a [[#FASE 14 — ESCALA: TIME, OPERAÇÕES, CRESCIMENTO E CAPITAL|Fase 14]] e verifique qual descreve sua situação. Cada fase tem métricas próprias que fazem sentido naquele contexto. Aplicar métricas de [[#FASE 14 — ESCALA: TIME, OPERAÇÕES, CRESCIMENTO E CAPITAL|Fase 14]] (escala) em empresa de [[#FASE 10 — MVP E EXPERIMENTOS DE MERCADO|Fase 10]] (MVP, ou produto mínimo viável) gera decisões erradas.

---

### Fase 0 — Preparação do empreendedor

As métricas de preparação são qualitativas. Runway pessoal em meses de subsistência sem renda (mínimo doze, ideal vinte e quatro). Clareza de motivação validada externamente (três ou mais pessoas próximas conseguem descrever sua motivação com precisão). Candidatos a cofundador entrevistados (cinco a dez pessoas). Horas dedicadas a exploração de problema (mínimo quarenta horas antes de qualquer decisão de build). Exercícios de autoconhecimento concluídos (FMF Check, teste de personalidade, análise de forças).

> [!warning] Sinal de alerta
> Runway menor que doze meses sem fonte de renda alternativa é pré-condição de falha, não de sucesso. Capital pessoal insuficiente produz decisões de negócio ruins.

---

### Fase 1 — Encontrar a ideia

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Candidatas geradas | Total de ideias avaliadas | 20 ou mais antes de decidir |
| Filtros aplicados | FMF, timing, mercado, execução | 4 filtros em todas as candidatas |
| Schlep blindness testada | Você consegue articular por que outros evitam o problema? | Sim |
| Janelas de timing mapeadas | Por que agora? | Resposta articulada em 2 frases |

---

### Fase 2 — Articulação da ideia

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Declaração Inicial preenchida | 6 campos da DII completos | Sim |
| Incertezas mapeadas | Número de incertezas críticas listadas | 10 a 20 |
| Suposições classificadas | % das suposições com peso e testabilidade | 100% |
| Inversão de Munger aplicada | Cenário de falha articulado | Sim |

---

### Fase 2B — Teoria do negócio

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Story Tree construída | Nós de causa-efeito com lógica causal explícita | Pelo menos 3 níveis |
| Apostas bet-the-company | Número de apostas centrais identificadas | 2 a 5 |
| Falsificabilidade | Cada aposta tem condição de refutação clara | Sim |
| DAG sem ciclos | Grafo causal sem loops | Sim |

---

### Fase 3 — Descoberta do problema

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Entrevistas realizadas | Total de entrevistas de problema | ≥ 20 antes de qualquer conclusão |
| Dores nível 8+ | % das entrevistas com dor acima de 8 em 10 | ≥ 60% |
| Citações documentadas | Citações verbatim sobre o problema | ≥ 30 |
| Padrões emergentes | Temas recorrentes identificados | 3 a 5 temas claros |
| Alternativas atuais mapeadas | Soluções que o cliente usa hoje | Mapeadas em 100% das entrevistas |
| Mom Test score | Entrevistas sem leading questions | ≥ 80% das perguntas abertas |

> [!important] Marco de saída da Fase 3
> Mínimo 20 entrevistas com pelo menos 12 confirmando dor nível 8 ou mais, descrevendo comportamento atual, e dispostos a ser early adopters.

---

### Fase 4 — Pesquisa com usuários

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Jobs-to-be-done mapeados | Jobs funcionais, emocionais e sociais identificados | ≥ 3 jobs por segmento |
| Jornada documentada | Pontos de dor na jornada atual mapeados | ≥ 5 pontos de fricção |
| Personas validadas | Personas com dados reais (não fictícios) | 2 a 3 personas primárias |
| Beachhead segment definido | Segmento inicial de 100 a 1.000 clientes | Identificado e justificado |
| Customer discovery score | Novos aprendizados por entrevista | Decrescente (sinal de saturação) |

---

### Fase 5 — Mapeamento de mercado

| Métrica | O que medir | Referência saudável |
|---|---|---|
| TAM calculado | Mercado total endereçável | Metodologia bottom-up |
| SAM calculado | Mercado serviceable com seu GTM | 1 a 10% do TAM |
| SOM ano 3 | Participação realista em 3 anos | 1 a 5% do SAM |
| Concorrentes mapeados | Diretos, indiretos e substitutos | ≥ 10 alternativas mapeadas |
| Wedge identificado | Ponto de entrada diferenciado | Sim, defensável |
| 5 Forças de Porter aplicadas | Análise estrutural da indústria | Completada |
| Posicionamento no Mapa de Valor | Localização diferenciada | Diferente de qualquer player |

---

### Fase 6 — Formulação de hipóteses

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Banco de hipóteses preenchido | Hipóteses críticas priorizadas | ≥ 10 hipóteses classificadas |
| Hipóteses bet-the-company | Apostas de alto impacto e alta incerteza | 2 a 5 identificadas |
| Sistema H-E (Hipótese/Experimento) | Cada hipótese tem experimento mapeado | 100% das bet-the-company |
| Critério de falsificação | Cada hipótese tem threshold de refutação | Sim |
| CSD (Certezas, Suposições, Dúvidas) | Distribuição documentada | Atualizado semanalmente |

---

### Fase 7 — Experimentos de validação

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Taxa de acerto de hipóteses | % confirmadas vs refutadas | 30 a 50% (muito alto = pouca aprendizagem) |
| Velocidade de aprendizado | Hipóteses testadas por semana | ≥ 2 por semana em sprint |
| Regra 9 em 10 | Threshold mínimo antes de pivotar | Definido antes do experimento |
| Pre-registro | % dos experimentos com hipótese registrada antes | 100% |
| Evidência qualitativa | Entrevistas de validação complementares | ≥ 5 por experimento crítico |
| Pré-vendas ou LOIs | Cartas de intenção ou pagamentos antes do produto | ≥ 3 antes de construir |

---

### Fase 8 — Ideação e prototipagem

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Variantes de solução testadas | Quantas ideias de solução avaliadas antes de escolher | ≥ 5 (Crazy 8s) |
| Fidelidade do protótipo | Nível de acabamento necessário para validar hipótese | Mínimo que responde à pergunta |
| Custo do protótipo | Tempo e recursos investidos antes de teste | Semanas, não meses |
| Feedback coletado | Usuários que testaram o protótipo | ≥ 5 por iteração |

---

### Fase 9 — Testes de solução

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Task completion rate | % dos usuários que completam tarefa-chave no protótipo | ≥ 70% |
| Erros de usabilidade críticos | Erros que bloqueiam uso | 0 antes de seguir |
| SUS (System Usability Scale) | Score de usabilidade padronizado | ≥ 68 (acima da média) |
| Desejabilidade | % que diz "compraria" ou "usaria" | ≥ 60% do segmento-alvo |
| Net Promoter Score de protótipo | Intenção de recomendar | ≥ 40 |

---

### Fase 10 — MVP e experimentos de mercado

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Tempo para primeiro usuário | Dias desde o lançamento | ≤ 30 dias |
| Tempo para primeiro pagante | Dias desde o lançamento | ≤ 60 dias (B2C), ≤ 90 dias (B2B) |
| Ativação | % dos usuários que atingem "momento aha" | ≥ 40% em D7 |
| Retenção D30 | % que retorna em 30 dias | ≥ 20% B2C, ≥ 40% B2B |
| Aprendizados por sprint | Hipóteses resolvidas por semana | ≥ 2 |
| Feature usage | Funcionalidades usadas por usuário ativo | Core features: ≥ 70% de adoção |

> [!warning] Sinal de alerta
> Retenção D30 abaixo de 15% em B2C ou 30% em B2B indica ausência de valor real. Adicionar funcionalidades não resolve retenção baixa.

---

### Fase 11 — Validação do modelo de negócio

| Métrica | O que medir | Referência saudável |
|---|---|---|
| CAC (Custo de Aquisição de Cliente) | Custo total de marketing e vendas / novos clientes | Calculado por canal, não blended |
| LTV (Lifetime Value) | Receita líquida por cliente ao longo da vida | LTV/CAC ≥ 3x |
| CAC Payback | Meses para recuperar custo de aquisição | ≤ 12 meses B2C, ≤ 18 meses B2B |
| Margem bruta | (Receita - COGS) / Receita | ≥ 60% SaaS, ≥ 40% marketplace |
| Churn mensal | % da receita perdida por mês | ≤ 2% B2C, ≤ 1% B2B |
| MRR | Receita recorrente mensal | Crescendo ≥ 10% mês a mês |
| Magic Number | Net new ARR / Sales & Marketing spend | ≥ 0.75 para escalar |

---

### Fase 12 — Product-Market Fit

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Retenção por coorte | Curva que estabiliza (não cai para zero) | Estabilização em ≥ 20% |
| NPS | Net Promoter Score | ≥ 40 consumer, ≥ 30 enterprise |
| Sean Ellis Test | % que ficaria "muito desapontado" sem o produto | ≥ 40% |
| Crescimento orgânico | % de novos usuários sem gasto em paid | ≥ 30% |
| Engagement (DAU/MAU) | Usuários diários / mensais | ≥ 20% produtos de frequência alta |
| NRR (Net Revenue Retention) | Expansão de receita na base atual | ≥ 100% (≥ 110% é excelente) |
| Qualitative PMF signals | Usuários reclamando quando feature some, compartilhando espontaneamente | Presente e documentado |

> [!important] Definição operacional de PMF
> PMF não é número. É curva de retenção que estabiliza, mais NPS acima de 40, mais crescimento orgânico ≥ 30%, mais evidência qualitativa de que a vida do cliente é pior sem o produto. Os três juntos.

---

### Fase 13 — Estruturação

| Métrica | O que medir | Referência saudável |
|---|---|---|
| MRR | Receita recorrente mensal | R$ 100 mil a R$ 500 mil (Série A típica) |
| Crescimento MoM | Crescimento mês a mês | ≥ 10-15% ao mês |
| Runway | Meses de caixa disponível | ≥ 18 meses pós-rodada |
| Cap table limpa | Sem problemas de governança ou direitos conflitantes | Sim |
| Compliance básico | LGPD, trabalhista, tributário em dia | Sim |
| Acordo de sócios | Vesting, drag-along, tag-along definidos | Sim |
| Data room Série A | Documentos para due diligence organizados | ≥ 80% completo |

---

### Fase 14 — Escala

| Métrica | O que medir | Referência saudável |
|---|---|---|
| ARR | Receita anual recorrente | Crescendo ≥ 3x ano a ano |
| NRR | Net Revenue Retention | ≥ 110% (expansão supera churn) |
| CAC Payback | Meses para recuperar aquisição | ≤ 18 meses |
| Magic Number | Net new ARR / S&M spend | ≥ 0.75 |
| Rule of 40 | Crescimento % + Margem EBITDA % | ≥ 40 |
| Headcount growth | Pessoas contratadas / quarter | Proporcional à receita |
| eNPS | Employee NPS | ≥ 30 |
| Attrition voluntária | % de saídas voluntárias / ano | ≤ 15% |
| Burn Multiple | Net burn / Net new ARR | ≤ 1.5x (eficiente), ≤ 2.5x (aceitável) |

> [!warning] Sinal de alerta
> Rule of 40 abaixo de 20 combinado com NRR abaixo de 100% indica empresa em deterioração. CAC Payback acima de 24 meses sem melhora trimestral indica modelo não escalável no ritmo atual.

---

### Fase 15 — Reinvenção e segunda curva

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Crescimento do core | Deceleração do modelo atual | Alerta se declina 2 trimestres |
| Revenue de produtos novos | % da receita de lançamentos <24 meses | ≥ 15-25% em scaleup |
| NPS por coorte temporal | Coortes novas vs antigas | Coorte nova ≥ coorte antiga |
| Concentração de receita | Top 20% dos clientes como % da receita | Crescente é sinal de saturação |
| Learning velocity (2ª curva) | Hipóteses resolvidas por mês na aposta nova | ≥ igual à [[#FASE 7 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA|Fase 7]] original |
| Alocação de tempo do CEO | % em new ventures vs core | ≥ 15-25% em new ventures |
| Pipeline segunda curva | Clientes-piloto ativos | ≥ 3 em primeiros 6 meses |

---

### Fase 16 — Exit

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Múltiplos de comparáveis | EV/ARR de transações similares no setor | Mapear 3+ por trimestre |
| Data room completude | % da documentação de DD organizada | ≥ 90% antes do processo |
| Pipeline de compradores | Potenciais compradores mapeados | 10 a 25 contatos |
| Diferença DCF vs market comp | Divergência entre métodos | ≤ 20% |
| Tax structuring implementado | Estrutura tributária preparada | Sim, ≥ 2 anos antes |
| Acordo de sócios robusto | Drag-along, tag-along, protections | Sim |
| Tempo de preparação | Meses antes do processo formal | ≥ 18 meses |

---

### Índice de benchmarks de referência rápida

| Métrica | Early-stage | Growth | Maduro |
|---|---|---|---|
| NRR | — | ≥ 100% | ≥ 110% |
| CAC Payback | ≤ 18 meses | ≤ 12 meses | ≤ 9 meses |
| Margem bruta SaaS | ≥ 50% | ≥ 65% | ≥ 75% |
| Churn mensal | ≤ 3% | ≤ 2% | ≤ 1% |
| Magic Number | — | ≥ 0.75 | ≥ 1.0 |
| Rule of 40 | — | ≥ 20 | ≥ 40 |
| Burn Multiple | — | ≤ 2.5x | ≤ 1.5x |
| DAU/MAU | ≥ 10% | ≥ 20% | ≥ 30% |
| NPS (consumer) | ≥ 30 | ≥ 40 | ≥ 50 |
| NPS (enterprise) | ≥ 20 | ≥ 30 | ≥ 40 |
| eNPS | — | ≥ 20 | ≥ 30 |

> [!note] Nota sobre benchmarks
> Benchmarks são médias de mercado e variam por setor, modelo de negócio e contexto macroeconômico. Usar como referência de diagnóstico, não como meta absoluta. O que importa é a tendência ao longo do tempo para a sua empresa, não a distância de um número de mercado.

### Ver também

[[#APÊNDICE BG — FERRAMENTÁRIO COMPLETO DO EMPREENDEDOR|Apêndice BG]] contém as ferramentas analíticas para cada métrica. As seções BG.18 (Finanças e Unit Economics) e BG.11 (Produto: Priorização e Métricas) aprofundam os cálculos.

> [!info] Fases relacionadas
> Referenciado em: Fase 12.

---

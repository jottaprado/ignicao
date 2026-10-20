---
title: "IGNIÇÃO — Volume 3: Hipóteses, Experimentos, Prototipagem e Modelos de Negócio"
subtitle: "Método Científico, Testes de Validação, Usabilidade e Arquitetura de Plataformas (Fases 7 a 10 e Capítulos 1 a 9)"
author: "João Prado"
date: 2026
version: "4.0"
volume: 3
collection: "IGNIÇÃO — O manual operacional do empreendedor brasileiro (10 Volumes Autocontidos)"
language: pt-BR
---

# IGNIÇÃO — Volume 3: Hipóteses, Experimentos, Prototipagem e Modelos de Negócio

**Método Científico, Testes de Validação, Usabilidade e Arquitetura de Plataformas (Fases 7 a 10 e Capítulos 1 a 9)**

*João Prado · 2026 — Edição Autocontida (v4.0)*

---

## Sobre este Volume

Este é o **Volume 3 (Hipóteses, Experimentos, Prototipagem e Modelos de Negócio)** da coleção **IGNIÇÃO — O manual operacional do empreendedor brasileiro** (10 volumes autocontidos).

Volume 100% autocontido dedicado à validação científica, experimentação prática e construção do protótipo testado: Formulação Rigorosa de Hipóteses (Fase 7), Experimentos de Validação com compromisso real (Fase 8), Ideação e Prototipagem de Soluções (Fase 9) e Testes de Solução, Usabilidade e Especificação de MVP (Fase 10) — trazendo embutidos 24 frameworks passo a passo de análise de risco, experimentação, design sprint e UX research, os canvases Hypothesis Canvas, Test Card, Opportunity Canvas e MVP Canvas preenchidos e 8 templates práticos —, seguidos por 9 capítulos sobre a abordagem científica ao empreendedorismo, níveis de maturidade, gates de evidência, fechamento de fase e as arquiteturas de Cunha (Wedge), Marketplaces, Efeitos de Rede/Plataformas, B2B2C e Open Source (COSS).

---

## Mapa da Coleção IGNIÇÃO

```mermaid
graph LR
    subgraph J1["Do Zero à Validação"]
        V1["<b>Vol. 1 — Ideação</b><br/>Fases 0 a 3 · Fundador e Teoria"]
        V2["<b>Vol. 2 — Descoberta e Mercado</b><br/>Fases 4 a 6 · Cliente e Cunha"]
        V3["<b>Vol. 3 — Hipóteses e Protótipo</b><br/>Fases 7 a 10 · Testes e Modelos"]
        V1 --> V2 --> V3
    end
    subgraph J2["Tração e Escala"]
        V4["<b>Vol. 4 — Tração e PMF</b><br/>Fases 11 a 13 · MVP, GTM e Vendas"]
        V5["<b>Vol. 5 — Finanças e Captação</b><br/>Fase 14 · Caixa, VC, Tributário e FP&A"]
        V6["<b>Vol. 6 — Receita e Pessoas</b><br/>Fases 15 e 16 · Enterprise, Líderes e Cultura"]
        V7["<b>Vol. 7 — Produto e Engenharia</b><br/>Fase 17 · Operações, IA e Arquitetura"]
        V8["<b>Vol. 8 — Jurídico e Segurança</b><br/>Fase 18 · Societário, Contratos e LGPD"]
        V3 --> V4 --> V5 --> V6 --> V7 --> V8
    end
    subgraph J3["Ciclo Longo e Setores"]
        V9["<b>Vol. 9 — Maturidade e Exit</b><br/>Fases 19 e 20 · Board, Crise, M&A e IPO"]
        V10["<b>Vol. 10 — Verticais e Glossário</b><br/>Regulação, 9 Setores e Índices Gerais"]
        V8 --> V9
    end
    V10 -. "Consulta Setorial e Dicionário" .-> J1
    V10 -. "Consulta Setorial e Dicionário" .-> J2
    V10 -. "Consulta Setorial e Dicionário" .-> J3
```

---

## Sumário deste Volume

### Fases da Etapa (Fases 7 a 10)
- [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES]]
- [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO]]
- [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES]]
- [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE]]
### Metodologia Científica, Maturidade e Gates de Evidência (Capítulos 1 a 4)
- [[#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA]]
- [[#CAPÍTULO 2 — FRAMEWORK DE DECISÃO POR GATES (PROBLEM CORE + SCALE LEVERS + EXPLORATORY)|CAPÍTULO 2 — FRAMEWORK DE DECISÃO POR GATES (PROBLEM CORE + SCALE LEVERS + EXPLORATORY)]]
- [[#CAPÍTULO 3 — TRL E CRL: MATURIDADE TECNOLÓGICA E DE MERCADO|CAPÍTULO 3 — TRL E CRL: MATURIDADE TECNOLÓGICA E DE MERCADO]]
- [[#CAPÍTULO 4 — COMO FECHAR UMA FASE: COMMITTED NEXT MOVE E SINAIS OBSERVÁVEIS|CAPÍTULO 4 — COMO FECHAR UMA FASE: COMMITTED NEXT MOVE E SINAIS OBSERVÁVEIS]]
### Arquitetura de Modelo de Negócio (Capítulos 5 a 9)
- [[#CAPÍTULO 5 — IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL|CAPÍTULO 5 — IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL]]
- [[#CAPÍTULO 6 — MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA|CAPÍTULO 6 — MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA]]
- [[#CAPÍTULO 7 — PLATAFORMA VS PRODUTO: QUANDO CONSTRUIR PLATAFORMA E QUANDO NÃO|CAPÍTULO 7 — PLATAFORMA VS PRODUTO: QUANDO CONSTRUIR PLATAFORMA E QUANDO NÃO]]
- [[#CAPÍTULO 8 — B2B2C: QUANDO SUA EMPRESA VENDE PARA OUTRA EMPRESA QUE VENDE PARA CONSUMIDOR|CAPÍTULO 8 — B2B2C: QUANDO SUA EMPRESA VENDE PARA OUTRA EMPRESA QUE VENDE PARA CONSUMIDOR]]
- [[#CAPÍTULO 9 — OPEN SOURCE COMO ESTRATÉGIA|CAPÍTULO 9 — OPEN SOURCE COMO ESTRATÉGIA]]

---

# FASES DA ETAPA — HIPÓTESES, EXPERIMENTOS, PROTOTIPAGEM E USABILIDADE (FASES 7 A 10)

### Arquitetura deste Domínio: Das Hipóteses Falsificáveis ao Protótipo Testado (Fases 7 a 10)

Com o cliente e o mercado mapeados no Volume 2, este **Volume 3** é o manual de laboratório científico e prototipagem da coleção: converter descobertas de campo em hipóteses matematicamente falsificáveis, testar apostas com compromisso real do cliente, idear e prototipar soluções sem escrever código descartável e validar a usabilidade antes de construir o MVP em produção. Este volume é **100% autocontido**, trazendo todos os frameworks de análise de risco, experimentação e UX, canvases de teste/MVP e templates práticos dentro de cada fase:

1. **A [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7 (Formulação Rigorosa de Hipóteses)]]** converte tudo o que você descobriu nas Fases 4, 5 e 6 em apostas priorizadas e falsificáveis (*"Se X, então Y, medido por Z"*). Traz integrados os manuais de *Red Team / Blue Team*, *Cost-Benefit Analysis*, *Expected Value / Bayesian Thinking*, *FMEA* e *Assumption Mapping*, além do *Hypothesis Canvas* e dos templates de *Declaração de Hipótese* e *Banco de Hipóteses*.
2. **A [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8 (Experimentos de Validação)]]** ensina a desenhar e rodar *smoke tests*, pré-vendas, *Concierge*, *Wizard of Oz* e cartas de intenção (LOIs) onde o cliente paga com dinheiro, tempo ou reputação. Traz embutidos os manuais completos de *Pretotyping*, *Customer Development*, *Build-Measure-Learn*, *Survey Design*, *Conjoint Analysis* e *MaxDiff*, o *Test Card Canvas* (PadariaPro) e os templates de *Cartão de Experimento* e *Tabela de Técnicas de Validação*.
3. **A [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Ideação e Prototipagem de Soluções)]]** traduz problemas validados em fluxos e protótipos de baixa e alta fidelidade. Traz embutidos os manuais de *Opportunity Solution Tree (OST)*, *Google Design Sprint*, *Design Thinking Double Diamond*, *Impact Mapping*, *Kano Model* e *Story Mapping*, os canvases *Opportunity Canvas* (Hotmart) e *MVP Canvas* (Wildlife Studios), e os exemplos práticos de *OST* e *Story Map*.
4. **A [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10 (Testes de Solução e Usabilidade)]]** coloca o protótipo na mão do usuário real para eliminar fricções de compreensão e uso, fechando com a especificação congelada do MVP. Traz embutidos todos os métodos de pesquisa de usabilidade (*Usability Testing*, *Heuristic Evaluation*, *Cognitive Walkthrough*, *Card Sorting*, *Tree Testing*, *Think-Aloud Protocol* e *System Usability Scale — SUS*) e os templates de *Especificação de MVP* e *Roteiro de Teste de Usabilidade*.

---

## FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES

> [!important] Antes de formular hipóteses, faça a Matriz CSD
> CSD significa Certezas, Suposições, Dúvidas. Organiza o seu mapa mental antes de gerar hipóteses. Regra: teste Suposições, não Certezas. Testar Certezas é desperdício. Testar Dúvidas é cedo demais (primeiro descubra do que duvida). Suposições bet-the-company (hipóteses que, se erradas, derrubam o negócio) têm prioridade máxima.

```mermaid
flowchart LR
 subgraph C["✅ CERTEZAS<br/>(evidência sólida)"]
 C1["Fatos comprovados<br/>por entrevistas, dados,<br/>observação direta"]
 C2["Ex: '15/15 entrevistados<br/>gastam 2h+/dia<br/>com este problema'"]
 end

 subgraph S["❓ SUPOSIÇÕES<br/>(acho mas não confirmei)"]
 S1["Crenças plausíveis<br/>sem evidência forte<br/>ainda"]
 S2["Ex: 'Acho que<br/>pagariam R$ 500/mês<br/>por uma solução'"]
 end

 subgraph D["⚠️ DÚVIDAS<br/>(nem sei o que não sei)"]
 D1["Áreas inexploradas<br/>onde precisa<br/>investigar primeiro"]
 D2["Ex: 'Não sei como<br/>decidem compra<br/>em empresa B2B'"]
 end

 C -.->|não testar, usar| Go1[✅ Base de execução]
 S -.->|TESTAR PRIMEIRO| Go2["🧪 Gerar hipóteses<br/>e experimentos"]
 D -.->|"investigar antes<br/>de hipotetizar"| Go3["🔍 Mais pesquisa<br/>qualitativa"]

 style C fill:#90EE90
 style S fill:#FFFF99
 style D fill:#FFB6B6
 style Go2 fill:#FFD700,stroke:#8B6914,stroke-width:3px
```

### O que esta fase cobre

Transformação das incertezas, crenças e intuições acumuladas nas fases anteriores em hipóteses testáveis. Escritas em formato padronizado, priorizadas por risco e impacto. O entregável é o Banco de Hipóteses: uma tabela viva que você vai revisitar durante todo o projeto.

> [!abstract] Resumo operacional
> **Entregável:** Banco de Hipóteses (Template: Banco de Hipóteses — modelo de planilha (Fase 7)) com vinte ou mais itens classificados, priorizados por Risco vezes Incerteza, e três a cinco bet-the-company com Hypothesis Canvas (Template da Fase 7) preenchido e método de teste desenhado.
>
> **Sinais de saída:**
> - Hipóteses cobrem as cinco categorias (problema, solução, cliente, canal, monetização) com pelo menos três em cada.
> - Cem por cento das hipóteses no formato SE-ENTÃO-MENSURA com critério de falsificação numérico explícito.
> - Hipóteses bet-the-company identificadas pelo Sistema H/E (H alto, E baixo) e priorizadas no topo.
> - Cada hipótese tem atributo da árvore de teoria (Fase 3) vinculado — nenhuma órfã.
> - Status (não testada, em teste, validada, invalidada) marcado em todas.
>
> **Três armadilhas mais comuns:**
> 1. Hipóteses vagas tipo "os clientes vão gostar" — sem critério numérico nem caminho de refutação, são crenças disfarçadas.
> 2. Só hipóteses de solução — empreendedor obcecado em testar "a solução funciona?" esquece de testar "o cliente paga?", que é a hipótese mais crítica.
> 3. Priorizar baixo-risco por ser fácil — confortável de confirmar, mas a regra é testar primeiro o que pode te matar, não o que é agradável.

### POR QUE

Toda decisão de negócio assume algo sobre o mundo. "O meu cliente vai pagar R$ 99." "O meu canal principal será Instagram." "Empresas maiores compram mais rápido." Cada uma dessas afirmações é uma hipótese. Se você as trata como verdades, constrói sobre areia. Se as escreve como hipóteses e as testa uma a uma, constrói sobre rocha. Empreender sem hipóteses explícitas é tomar todas as decisões com base em vibração.

A priorização de hipóteses também impede que você desperdice energia testando coisas de pouco impacto. Você quer testar primeiro o que, se for falso, derruba o negócio inteiro. Isso se chama "risco-maior-primeiro".

> [!note] Capítulo 1 — Científico vs Lean Startup
> A disciplina de formular hipóteses falsificáveis (hipóteses que podem ser provadas erradas) é o ponto de convergência entre o método científico e a metodologia Lean. O [[#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 — Científico vs Lean Startup]] mapeia as diferenças e complementaridades: quando o rigor hipotético-dedutivo aplica e quando o loop Build-Measure-Learn é mais adequado. Relevante especialmente para fundadores com background técnico ou científico que estão aplicando o método ao contexto de negócio pela primeira vez.

### Quando usar

Comece imediatamente depois das Fases 2, 3 e 4. Termine quando tiver quinze a trinta hipóteses escritas e priorizadas, e souber quais são as três a cinco bet-the-company que vai testar primeiro. Revisite a cada duas a quatro semanas. Hipóteses antigas viram verdades (validadas) ou são refutadas, e novas emergem.

### Quem envolve

O executor é você, e os sócios se houver. Os participantes são mentores ou pessoas experientes que ajudam a identificar hipóteses que você não enxerga sozinho. Empreender em câmara de eco é arriscado. O decisor é você.

### Como executar

Sete passos.

#### Passo 1, levante todas as suposições implícitas

Faça uma varredura completa. Classifique as hipóteses em cinco tipos.

Hipóteses de problema. O problema existe mesmo? Para quem? Quão doloroso?

Hipóteses de solução. A solução proposta resolve o problema? Os usuários vão adotá-la?

Hipóteses de cliente e mercado. Quem é o cliente ideal? Como ele decide?

Hipóteses de canal. Como eu alcanço o cliente? Qual canal tem CAC viável?

Hipóteses de monetização e modelo. O cliente vai pagar? Quanto? Com que frequência? LTV maior que CAC?

Para cada tipo, busque pelo menos três a cinco hipóteses. Total alvo: quinze a trinta hipóteses.

#### Passo 2, escreva cada hipótese no formato padronizado

Use esse formato rigoroso:

```text
HIPÓTESE: [afirmação clara e falsificável]
ATRIBUTO DA TEORIA: [qual nó ou seta da sua árvore de teoria esta hipótese testa]
PORQUÊ IMPORTA: [se for falsa, qual impacto no negócio]
PARA VALIDAR PRECISO VER: [critério objetivo e numérico]
MÉTODO: [experimento ou fonte de evidência]
CUSTO ESTIMADO: [tempo + dinheiro]
```

Para entender a diferença entre hipótese ruim e hipótese boa:

> [!warning] Hipótese ruim, impossível de falsificar
> "Os clientes vão gostar do produto." Impossível de testar. "Gostar" não é mensurável.

> [!tip] Hipótese boa, falsificável e numérica
> "Pelo menos trinta por cento dos donos de restaurante do nosso ICP (perfil de cliente ideal), depois de conhecer a solução por uma página de pré-cadastro, vão deixar e-mail e concordar com cobrança antecipada de R$ 49 para acesso ao beta. Se for falsa, significa que a nossa proposta de valor não é forte o bastante para pagamento antecipado, o que compromete a viabilidade do modelo."

> [!tip] Hypothesis Canvas e Test Card como par de ferramentas
> O formato padronizado acima é o coração do Hypothesis Canvas — registrado como template prático no [[#Template: Hypothesis Canvas|Template: Hypothesis Canvas]] e com tratamento teórico no [[#Canvas: Hypothesis Canvas (autoral IGNIÇÃO)|Canvas: Hypothesis Canvas (autoral IGNIÇÃO)]] (em construção). Cada hipótese bet-the-company deve gerar imediatamente 1-3 [[#Canvas: Test Card (David Bland & Alexander Osterwalder, 2019)|Canvas: Test Card (David Bland & Alexander Osterwalder, 2019)]] como follow-up: o Hypothesis Canvas articula *o que* testar; o Test Card articula *como* testar. A disciplina central do Test Card é definir critério de sucesso e critério de refutação **antes** de rodar o experimento — sem isso, qualquer resultado é racionalizado a favor da hipótese. O caso PadariaPro em Canvas: Test Card (David Bland & Alexander Osterwalder, 2019) (Fase 8) mostra como definir zona de incerteza no meio (entre sucesso e refutação) é o que protege contra auto-engano.

#### Passo 3, aplique o critério de falsificabilidade

> [!quote] Karl Popper sobre hipóteses
> Uma afirmação só é científica se for possível imaginar um resultado que a refute.

Toda hipótese sua precisa ter um caminho claro de refutação. Se não tiver, não é hipótese. É crença.

##### Teste de isolamento, uma hipótese, um elemento por vez

Esse é um dos erros mais comuns em iniciantes: empilhar múltiplos elementos numa única hipótese. Quando você testa coisas compostas, fica impossível saber qual parte foi refutada.

Exemplo de hipótese composta (ruim): "Mulheres em grandes capitais preferem táxi a bicicleta, e fazem isso por causa do conforto, mesmo pagando mais caro."

Essa hipótese junta três afirmações distintas. Mulheres em grandes capitais preferem táxi a bicicleta. O conforto é o principal fator de decisão. O preço mais alto do táxi é tolerado.

Se você testar tudo junto e quarenta e cinco por cento das entrevistadas concordar, o que isso significa? Nada. Pode ser que preferem táxi por outro motivo que não conforto. Pode ser que conforto importa, mas só para viagens longas. Pode ser que o preço é um limite, e acima de X reais elas voltam para a bicicleta. A hipótese composta esconde todas essas nuances.

A versão atômica (boa) quebra em três hipóteses separadas, cada uma testável sozinha. Se todas forem validadas, você tem a afirmação conjunta. Se alguma for refutada, você sabe exatamente qual parte da sua teoria precisa ser revisada.

> [!important] Regra do isolamento
> Cada hipótese deve testar um e apenas um atributo, ou uma e apenas uma relação causal da sua árvore de teoria. Se há "e" ou "porque" na frase, provavelmente você precisa quebrá-la.

##### Verifique a conexão com a teoria (integração)

Coloque a sua árvore de teoria ([[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]]) ao lado do Banco de Hipóteses. Para cada hipótese, responda: *Esta hipótese testa qual nó ou seta da árvore?* Se uma hipótese não pode ser mapeada na árvore, ela é órfã. Ou a hipótese é irrelevante, ou a sua árvore está incompleta. Em ambos os casos, corrija.

Esse exercício costuma revelar que o empreendedor criou hipóteses sobre o que é fácil de medir, em vez do que é importante testar. Se sobraram nós bet-the-company na árvore sem hipóteses correspondentes, você está prestes a testar o acessório enquanto deixa o crítico passar.

> [!note] Capítulo 6 (Vol. 1) — Tomada de Decisão como Disciplina
> Antes de comprometer recursos com as hipóteses bet-the-company, use o [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 — Tomada de Decisão como Disciplina (Vol. 1)]]: hipóteses de alto risco e baixa reversibilidade são decisões Tipo 1 (irreversíveis) e merecem pré-mortem formal antes de qualquer experimento. O apêndice também cobre o framework SPADE para estruturar esse processo em equipe.

#### Passo 4, priorize as hipóteses por Risco × Incerteza (primeiro pass)

> [!note] Dois sistemas de priorização, em ordem de aplicação
> Esta fase usa duas lentes complementares de priorização, aplicadas em sequência. **Primeiro pass: Risco × Incerteza (Passo 4).** Identifica quais hipóteses, se falsas, derrubam o negócio (Risco) e em quais você está mais no escuro (Incerteza). Filtra o conjunto de "vinte ou mais hipóteses" para "três a cinco bet-the-company". **Segundo pass: Sistema H/E (Passo 5).** Para cada bet-the-company já filtrada, mede a força teórica da hipótese (H) versus a evidência empírica já acumulada (E), definindo a ordem e o tipo de teste. R×I é sobre impacto de negócio. H/E é sobre estado epistêmico. Os dois sistemas não competem; trabalham em série.

Para cada hipótese, atribua duas notas de um a cinco. Risco (R): quão grave para o negócio se for falsa? (Cinco mata o negócio. Um é detalhe secundário.) Incerteza (I): quanta confiança real você tem nela hoje? (Cinco é totalmente no escuro. Um é muito fundamentada.)

Calcule Prioridade = R vezes I.

Hipóteses com prioridade igual ou maior que quinze são as suas bet-the-company. São coisas que podem matar o negócio se forem falsas, e que você ainda não testou. Essas vêm primeiro. Hipóteses com prioridade entre oito e quatorze são secundárias. Hipóteses com prioridade abaixo de oito ficam no backlog (lista de espera) para depois.

#### Passo 5, aplique o Sistema H/E (segundo pass de priorização)

Para cada hipótese bet-the-company já filtrada pelo Risco × Incerteza, atribua duas notas de um a dez.

H (Hypothesis Strength, força teórica da hipótese) mede quão bem fundamentada a sua hipótese está do ponto de vista teórico. H igual a dez significa que a cadeia causal é clara, consistente com o que se sabe do mercado, análoga a casos de sucesso conhecidos e faz sentido à luz da sua árvore de teoria. H igual a três significa um palpite, baseado em intuição pessoal, sem lógica rigorosa por trás.

E (Evidence Strength, força da evidência) mede o quanto você já tem de evidência empírica a favor (ou contra) essa hipótese hoje, antes de qualquer novo experimento. E igual a dez significa dados robustos, múltiplas entrevistas consistentes, benchmarks quantitativos de setor, pilotos pagos. E igual a um significa nenhuma evidência. Só a sua própria fala.

A visualização do sistema H/E:

```mermaid
quadrantChart
 title "Sistema H/E, Hipótese x Evidência já acumulada"
 x-axis "Baixa evidência" --> "Alta evidência"
 y-axis "Baixa importância" --> "Alta importância"
 quadrant-1 "ACEITAR documentar e avançar"
 quadrant-2 "TESTAR URGENTE bet-the-company sem validação"
 quadrant-3 "NÃO TESTAR irrelevante"
 quadrant-4 "TESTES BARATOS gate de consistência"
 "H1 preço aceitação": [0.2, 0.95]
 "H2 retenção 3m": [0.4, 0.9]
 "H3 canal CAC": [0.6, 0.7]
 "H4 feature premium": [0.3, 0.5]
 "H5 segundo mercado": [0.85, 0.4]
```

H/E responde a duas perguntas. *Essa hipótese é importante?* (H) E *já tenho evidência a favor?* (E). O quadrante superior-esquerdo (H alto e E baixo) é urgência máxima. Isso evita o erro comum de testar primeiro o que é fácil em vez do que é crítico.

Os dois scores juntos mostram onde você está em cada hipótese:

| Perfil (H, E) | Diagnóstico | O que fazer |
|---|---|---|
| H alto, E alto (8, 8) | Hipótese bem fundamentada, e já com evidência | Avançar com investimento ou execução |
| H alto, E baixo (8, 3) | Teoria forte, falta evidência | Prioridade máxima de experimento. É aqui que a próxima rodada de testes precisa estar |
| H baixo, E alto (4, 8) | Fato observado sem teoria clara | Reabrir a árvore de teoria. Por que esse padrão acontece? Sem saber por quê, não dá para escalar |
| H baixo, E baixo (3, 2) | Palpite sem fundamento nem dado | Ou descartar, ou iniciar investigação exploratória. Nunca investir capital |

> [!warning] Regra de ouro do Sistema H/E
> Todo investimento significativo (construir feature, contratar, levantar capital, expandir canal) deve ser precedido por H maior ou igual a sete e E maior ou igual a seis para as hipóteses críticas relacionadas àquela decisão. Se qualquer uma das notas está abaixo desses patamares, rode um experimento (Fase 7) antes.

#### Passo 6, monte o Banco de Hipóteses como planilha

Quatorze colunas. ID (H1, H2, e assim por diante). Tipo (Problema, Solução, Cliente, Canal, Monetização). Hipótese (texto completo). Atributo da teoria (vínculo com a árvore da [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]]). Porquê importa. Critério de validação. Método ou experimento. Custo estimado. Score H (Hipótese) de um a dez: quão forte é o raciocínio teórico antes de qualquer teste? Score E (Evidência) de um a dez: quanta evidência empírica você já tem hoje? Status (Nova, Em teste, Validada, Refutada, Abandonada). Resultado (quando testada). Data de teste. Aprendizado.

> [!important] Essa planilha é o coração operacional do negócio
> Nos próximos seis a doze meses, ela é o documento mais consultado da empresa. Nunca a perca de vista.

#### Passo 7, escolha as 3 a 5 primeiras hipóteses a testar e defina ordem de teste

Pegue as hipóteses do quadrante "H alto + E baixo" do Passo 5. Essas têm o maior retorno por experimento: teoria robusta, apenas faltando evidência. A escolha das três a cinco primeiras segue quatro critérios em ordem.

Maior risco primeiro. Entre as bet-the-company com mesmo perfil H/E, comece pela de maior R × I. Resolver o que pode matar o negócio antes do que é apenas importante.

Independência sobre dependência. Se a hipótese A precisa estar validada antes de B fazer sentido (por exemplo, "cliente reconhece o problema" antes de "cliente paga R$ 99 por uma solução"), teste A primeiro. Hipóteses dependentes em paralelo geram desperdício se a anterior cair.

Custo de teste e tempo de retorno. Entre hipóteses de impacto similar, prefira as que dão sinal mais barato e mais rápido. Smoke test de R$ 500 em uma semana antes de concierge experiment de R$ 5 mil em oito semanas. Use a velocidade para iterar.

Janela de teste paralela vs sequencial. Hipóteses independentes que usam canais diferentes podem rodar em paralelo (entrevistas + landing page + community test simultaneamente). Hipóteses sobre o mesmo público em canais sobrepostos rodam em sequência para não contaminar amostra.

Documente a ordem escolhida no Banco de Hipóteses (coluna "ordem de teste") com justificativa de uma linha. Essas três a cinco hipóteses prioritárias, com Test Card preenchido, vão para a [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]].

### Os sete passos aplicados, hipótese H1 do PadariaPro

Para tornar o método concreto, este é o detalhamento de uma hipótese bet-the-company da mesma ideia trabalhada nas fases anteriores, no formato padronizado dos Passos 2 a 5.

HIPÓTESE: Donos de padaria com três a cinco lojas têm perda de oito por cento ou mais de margem em ingredientes críticos por má gestão de estoque.

ATRIBUTO DA TEORIA: Nó "Dor real e frequente" da árvore de teoria (Fase 3). A árvore pressupõe que o problema existe na intensidade necessária para gerar disposição a pagar. Se falsa, todo o ramo de monetização cai antes de qualquer experimento de preço.

PORQUÊ IMPORTA (Risco × Incerteza): R = 5 (mata o negócio se falsa), I = 4 (auto-relato em entrevistas Fase 3 sugere a perda existe, mas sem dado de notas fiscais ainda). Prioridade R × I = 20. Bet-the-company.

PARA VALIDAR PRECISO VER: Sete em dez padarias com três a cinco lojas em SP com perda de oito por cento ou mais da margem bruta em trinta dias, verificada por análise de notas fiscais de compra, não só por auto-relato.

H/E: H = 8 (cadeia causal clara, consistente com casos análogos de food retail), E = 3 (auto-relato em 12 entrevistas, sem auditoria factual). Quadrante H alto + E baixo, prioridade máxima de experimento.

MÉTODO: Auditoria gratuita de estoque. Recrutar dez padarias via indicação direta. Coletar trinta dias de notas fiscais e comparar com o estoque físico inventariado. Complementar com entrevista de quarenta e cinco minutos com o dono para qualificar a dor.

CUSTO ESTIMADO: Catorze dias. Duas horas por padaria (vinte horas no total). R$ 0 em deslocamento (padarias em raio de cinco quilômetros do fundador). Custo de oportunidade equivalente a três semanas de um fundador.

> [!warning] Risco de interpretação enviesada
> Donos podem subestimar a perda (vergonha de admitir ineficiência) ou superestimá-la (para justificar tecnologia). Cruzar auto-relato com análise factual de notas fiscais reduz esse viés.

### Caso brasileiro real, hipóteses na Loft (iBuyer imobiliário)

A Loft, fundada em 2018 por Mate Pencz e Florian Hagenbuch (ex-Printi) em São Paulo, atacou o modelo iBuyer (instant buyer — compra direta de imóveis para revenda rápida com renovação) num mercado dominado por imobiliárias tradicionais com ciclo de venda de seis a doze meses.

A decisão central de modelo foi formal. Em vez de escolher diferencial por intuição, o time formalizou hipóteses priorizadas por R × I antes de comprometer capital. As bet-the-company giravam em torno de três variáveis. Sensibilidade a preço dos vendedores ("se oferecermos cinco por cento abaixo do valor de mercado, com pagamento em sete dias, X por cento dos vendedores aceitarão"). Elasticidade da velocidade ("se o prazo for três dias em vez de sete, a conversão sobe em Y por cento"). Conversão por perfil de urgência ("vendedores em divórcio, mudança de cidade, ou herança convertem Z por cento mais que vendedores oportunistas").

As hipóteses foram testadas em sequência, cada experimento com threshold pré-registrado. O resultado contraintuitivo foi que velocidade pesava mais que preço para o segmento-alvo. Vendedores urgentes aceitavam desconto significativo em troca de previsibilidade e prazo curto. O modelo final priorizou velocidade sobre preço, oposto da intuição inicial. A Loft levantou rodadas significativas (Andreessen Horowitz, Fifth Wall, Vulcan Capital) e atingiu valuation acima de US$ 2 bi em 2021.

A lição transferível. Hipóteses explícitas separam "o que eu acho" de "o que eu testei". A intuição inicial é frequentemente parcialmente certa e parcialmente errada. Só teste com threshold pré-registrado separa.

### PERGUNTAS A RESPONDER

- Eu identifiquei hipóteses de todas as cinco categorias (problema, solução, cliente, canal, monetização)?
- Cada hipótese é falsificável (tem critério de refutação)?
- Eu classifiquei cada hipótese por risco e incerteza?
- Eu sei quais são as três a cinco hipóteses bet-the-company que preciso testar primeiro?
- Eu tenho método de teste imaginado para cada hipótese prioritária?

> [!tip] Capítulo 2 — Framework de Gates
> A saída desta fase alimenta diretamente o gate (critério de passagem) para a Fase 7. O [[#CAPÍTULO 2 — FRAMEWORK DE DECISÃO POR GATES (PROBLEM CORE + SCALE LEVERS + EXPLORATORY)|Capítulo 2 — Framework de Gates]] define os critérios objetivos que uma hipótese bet-the-company deve satisfazer antes de passar para experimento: quórum mínimo de evidência, ausência de contradição fatal na árvore de teoria, e consenso do founding team (time fundador) sobre prioridade. Use para evitar avançar com hipóteses ainda sem clareza de critério de refutação.

### SAÍDA DESTA FASE

Você concluiu a [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]] quando todos os critérios abaixo estão cumpridos.

- [ ] Banco de Hipóteses (Template: Banco de Hipóteses — modelo de planilha (Fase 7)) com vinte ou mais itens classificados nas cinco categorias (problema, solução, cliente, canal, monetização). Pelo menos três em cada categoria, sem nenhuma vazia.
- [ ] Todas as hipóteses no formato padronizado (afirmação + atributo da teoria + porquê importa + critério de validação numérico + método + custo estimado).
- [ ] Cem por cento das hipóteses no formato SE-ENTÃO-MENSURA com critério de falsificação numérico explícito.
- [ ] Cada hipótese vinculada a um nó ou seta da árvore de teoria (Fase 3). Nenhuma órfã.
- [ ] Sistema H/E (Hypothesis Strength / Evidence Strength) aplicado a cada hipótese, de um a dez em cada eixo.
- [ ] Hipóteses bet-the-company identificadas pelo quadrante H alto + E baixo, priorizadas no topo (três a cinco).
- [ ] Três ou mais Hypothesis Canvas (Template: Hypothesis Canvas (Fase 7)) preenchidos para as bet-the-company.
- [ ] Status (não testada, em teste, validada, invalidada) marcado em todas.
- [ ] As três a cinco hipóteses prioritárias têm método de teste inicial desenhado e Test Card (Fase 8) com critério de sucesso e refutação definidos antes do experimento.

> [!warning] Critério de saída
> Se qualquer um desses itens falha, não avance. Resolva antes.

**Primeiros passos práticos.**

1. Abrir o Template Banco de Hipóteses (Fase 7) e listar toda hipótese implícita. Vinte a quarenta itens iniciais.
2. Classificar cada hipótese em categoria, status e prioridade.
3. Reformular as cinco a dez prioritárias em formato falsificável rigoroso.
4. Para cada hipótese das três do topo, preencher Hypothesis Canvas (Template: Hypothesis Canvas (Fase 7)) com detalhamento.

### Armadilhas

Hipóteses vagas. "Os clientes vão gostar." Use o formato do Passo 2: afirmação com critério numérico e caminho de refutação.

Só hipóteses de solução. Empreendedores ficam obcecados em testar "a solução funciona?", e esquecem de testar "o cliente paga?", que é a hipótese mais crítica.

Priorizar baixo-risco por ser fácil. Testar primeiro o que é confortável. Princípio: teste primeiro o que pode te matar, não o que é agradável de confirmar.

Esquecer de atualizar. A lista vira zumbi se não for visitada semanalmente. Reserve trinta minutos toda segunda para revisar.

Confundir "não refutada ainda" com "validada". Uma hipótese só é validada quando você tem evidência positiva a favor dela. Não apenas ausência de evidência contra.

---

### FERRAMENTAS DESTA FASE

Formulação de hipóteses exige disciplina analítica. Dez ferramentas essenciais. Canvases complementares: Canvas: Test Card (David Bland & Alexander Osterwalder, 2019) (Fase 8) e Canvas: Hypothesis Canvas (autoral IGNIÇÃO) (Fase 7).

- **McKinsey 7-Step Problem Solving** — Define, Structure (issue tree MECE), Prioritize, Plan, Conduct, Synthesize, Communicate. Para estruturação rigorosa da tese. Framework: McKinsey 7-Step Problem Solving (Fase 3, Vol. 1).
- **MECE** — hipóteses Mutuamente Exclusivas e Coletivamente Exaustivas. Sobreposição confunde experimentos. Framework: MECE (Mutually Exclusive, Collectively Exhaustive) — McKinsey (Fase 3, Vol. 1).
- **Pre-mortem** (Gary Klein) — imagine que cada hipótese crítica foi falsificada em seis meses. Por quê? Revela sinais precoces e critérios de refutação. Framework: Pre-mortem (Gary Klein, 2007) (Fase 0, Vol. 1).
- **Expected Value e Bayesian Thinking** — range de resultados vezes probabilidades. EV positivo justifica experimento. Framework: Expected Value / Bayesian Thinking (Fase 7).
- **Cost-Benefit Analysis** — custo (tempo, capital) versus benefício esperado (confiança ganha, valor da decisão). Para escolher quais hipóteses validar primeiro. Framework: Cost-Benefit Analysis (Jules Dupuit, 1844; refinado no séc. XX) (Fase 7).
- **Cynefin Framework** (Snowden) — Simples, Complicado, Complexo, Caótico. Calibra o método de validação. Framework: Cynefin Framework (Dave Snowden, 1999) (Fase 0, Vol. 1).
- **Red Team e Blue Team** — um grupo tenta derrubar a ideia (Red), outro defende (Blue). Para bet-the-company, monte um Red Team antes de investir. Framework: Red Team / Blue Team (Fase 7).
- **5 Whys** (Toyota) — "por que eu acredito nisso?" cinco vezes. Resposta final em "intuição" ou "porque o concorrente faz" sinaliza hipótese fraca. Framework: 5 Whys (Sakichi Toyoda / Toyota, anos 1930) (Fase 3, Vol. 1).
- **Pyramid Principle** (Minto) — hipótese principal no topo, sub-hipóteses no nível abaixo, evidências embaixo. Para comunicar a time, advisors, board. Framework: Pyramid Principle (Barbara Minto, 1985) (Fase 2, Vol. 1).
- **Inversion** (Munger) — "sob que condições essa hipótese é falsa?". Define o critério de falsificação. Framework: Inversion (Carl Jacobi; Charlie Munger, popularizado) (Fase 1, Vol. 1).

---


---

### MÉTRICAS E BENCHMARKS DESTA FASE (FASE 7)

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Banco de hipóteses preenchido | Hipóteses críticas priorizadas | ≥ 10 hipóteses classificadas |
| Hipóteses bet-the-company | Apostas de alto impacto e alta incerteza | 2 a 5 identificadas |
| Sistema H-E (Hipótese/Experimento) | Cada hipótese tem experimento mapeado | 100% das bet-the-company |
| Critério de falsificação | Cada hipótese tem threshold de refutação | Sim |
| CSD (Certezas, Suposições, Dúvidas) | Distribuição documentada | Atualizado semanalmente |

---

### MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE

> [!tip] Uso autocontido neste volume
> Todos os frameworks abaixo estão detalhados integralmente com origem, estrutura, passo a passo de aplicação, exemplo brasileiro e armadilhas para execução imediata nesta **Fase 7**.

#### Framework: Red Team / Blue Team

##### Origem

Prática militar americana dos anos 1960 (desenvolvida durante Guerra Fria para simular raciocínio soviético). Expandiu para cybersecurity nos anos 1990 (red team = atacantes simulados, blue team = defensores). Adotada em corporações grandes (Microsoft, Google, governments) para stress-testar decisões estratégicas.

##### O que é

Técnica de **desafio estruturado a uma decisão ou plano**: um time (red) ativamente busca fraquezas, outro (blue) defende ou refina. Força rigor. Previne groupthink.

##### Princípios / estrutura

Red Team: time designado para **atacar** a proposta/plano. Encontrar fraquezas. Agir como concorrente/adversário.

Blue Team: time que **defende** ou propõe, o time que fez o plano original.

Exercício: red team apresenta críticas, blue team responde. Se blue team não consegue defender, plano tem fraqueza real.

##### Como aplicar do jeito certo

Passo 1, Decisões importantes o suficiente para o esforço. Go/no-go em rodada, M&A, grande produto. Não para trivialidades.

Passo 2, Red team deve ter independência. Membros com autoridade para dissidência real. Não "red team que concorda no final por medo".

Passo 3, Red team prepara em separado. Com tempo adequado para análise crítica genuína.

Passo 4, Sessão formal. Apresentação do plano (blue), ataques (red), defesa (blue), discussão.

Passo 5, Documentar críticas e respostas. Mesmo se plano seguir, registro do que foi questionado.

Passo 6, Se red team conseguiu minar, revisar plano.

##### Exemplo aplicado

Decisão de aquisição de concorrente:

- Blue team (CEO + CFO + time de deal): apresenta tese, sinergia de clientes, ARR combinado, expansion.
- Red team (2 board members + 1 advisor externo): por uma semana, analisa crítica. Trazem: "integração cultural falha em 70% dos M&A, vocês nunca integraram, concorrente tem debt oculto, preço está no topo do razoável, oportunidade de custo alto (time executivo desviado por 18 meses)."
- Discussão: CEO convence em alguns pontos, mas concede em outros. Preço é renegociado para baixo, acordo estrutura earn-out para mitigar risco, integration team é pré-contratado.

Resultado: deal melhor (ou deal evitado, que também pode ser bom).

##### Erros comuns

Red team "de fachada": pessoas que vão dizer "tá tudo ok". Sem valor. Blue team defensivo em vez de analítico: reage emocionalmente a críticas em vez de refinar plano. Sem tempo adequado para red team: "analise este deal em 4 horas", vira checkbox. Não documentar decisão final: se 3 meses depois problema surge, sem rastro de que foi antecipado.

##### Quando NÃO usar

Decisões menores (custo do exercício > benefício), Em ambientes onde dissenso é punido, red team honesto impossível.

##### Leitura adicional

- Zenko, M. (2015). *Red Team: How to Succeed by Thinking Like the Enemy*. Basic Books.

---

#### Framework: Cost-Benefit Analysis (Jules Dupuit, 1844; refinado no séc. XX)

##### Origem

Engenheiro civil e economista francês Jules Dupuit publicou *On the Measurement of the Utility of Public Works* em 1844, estabelecendo os fundamentos do CBA ao introduzir a função de demanda derivada de utilidade marginal e o conceito de excedente do consumidor (depois reformulado por Marshall). Pigou e outros economistas refinaram no início do séc. XX. Hoje é padrão em decisões governamentais (análise de impacto de políticas), infraestrutura (projetos de engenharia) e decisões empresariais com múltiplos fatores.

##### O que é

Método sistemático de **comparar custos e benefícios quantificáveis** de uma decisão, frequentemente convertidos em valor monetário, permitindo decisão baseada em NPV (Net Present Value) ou ratio benefício/custo.

##### Princípios / estrutura

Componentes:

1. Identificar todos os custos (diretos, indiretos, de oportunidade).
2. Identificar todos os benefícios (monetários e não-monetários).
3. Quantificar em unidade comum (geralmente moeda).
4. Ajustar no tempo (net present value).
5. Calcular NPV ou razão B/C.
6. Considerar riscos (análise de sensibilidade).

##### Como aplicar do jeito certo

Passo 1, Horizonte temporal claro. CBA de 2 anos é muito diferente de 10.

Passo 2, Taxa de desconto apropriada. Custo de capital da empresa (WACC) ou taxa livre de risco ajustada.

Passo 3, Incluir custos de oportunidade. Se eng team trabalha em X, não trabalha em Y. Y é custo de oportunidade.

Passo 4, Quantificar benefícios intangíveis. Brand, cultura, learning, são reais mas difíceis. Usar proxies ou ranges.

Passo 5, Análise de sensibilidade. E se premissa X for 20% diferente? Decisão muda?

Passo 6, Documentar premissas. Facilita revisão e aprendizado.

##### Exemplo aplicado

Decisão: construir feature X (custo R$ 500k em engineering, 4 meses).

Custos:

- Engineering: R$ 500k.
- Oportunidade: 4 meses sem trabalhar em feature Y (valor estimado: R$ 800k em receita adicional).
- Maintenance ongoing: R$ 50k/ano.

Benefícios (horizonte 3 anos):

- Receita nova projetada: R$ 2.5M (Ano 1), R$ 4M (Ano 2), R$ 5M (Ano 3).
- Redução de churn em segmento que adota: R$ 600k/ano.
- Brand/differentiation: difícil quantificar, estimativa R$ 200k/ano.

NPV (desconto 12% a.a.):

- Custos descontados: R$ 1.350k.
- Benefícios descontados: R$ 7.8M.
- NPV: R$ 6.45M. Razão B/C: 5.8x.

Sensibilidade: se receita for 50% do projetado, NPV ainda positivo (R$ 2.7M). Robusto.

Decisão: feature X tem retorno forte mesmo em cenários pessimistas.

##### Erros comuns

Esquecer custos de oportunidade: muito comum. Faz todas as opções parecerem boas. Over-quantificar intangíveis: inventar número para "motivação do time" pode ser pior que admitir qualitativo. Ignorar sensibilidade: NPV positivo apenas em cenário ótimo. Decisão frágil. Horizonte curto demais: CBA de 6 meses ignora benefícios de longo prazo. Análise sem considerar risco/probabilidade: NPV esperado ≠ NPV garantido.

##### Quando NÃO usar

Decisões estratégicas que envolvem principalmente fatores qualitativos (cultura, posicionamento), quantificar distorce, Ambientes de alta incerteza onde premissas são chutes, Decisões reversíveis pequenas, overhead não vale.

##### Leitura adicional

- Boardman, A. et al. (2018). *Cost-Benefit Analysis: Concepts and Practice*. Cambridge UP.

---

#### Framework: Expected Value / Bayesian Thinking

##### Origem

Expected Value: conceito estatístico formalizado por Pierre Fermat e Blaise Pascal no séc. XVII. Aplicação a decisão de negócio popularizada por von Neumann e Morgenstern em *Theory of Games and Economic Behavior* (1944).

Bayesian Thinking: Thomas Bayes (séc. XVIII), popularizado em decisão contemporânea por Annie Duke (*Thinking in Bets*, 2018, ex-poker profissional). Aplicado em VCs (Chamath Palihapitiya, Elad Gil), trading, medicina.

##### O que é

Expected Value (EV): em decisão sob incerteza, calcular valor esperado ponderando resultados possíveis por suas probabilidades.

Bayesian Thinking: atualizar crenças (probabilidades) conforme nova evidência chega, em vez de tratar decisões como "certezas".

##### Princípios / estrutura

Expected Value fórmula:
EV = Σ (probabilidade_i × resultado_i)

Exemplo: investimento de R$ 1M com:

- 40% de chance de retornar R$ 5M.
- 40% de chance de retornar R$ 1M.
- 20% de chance de retornar R$ 0.

EV = (0.4 × 5M) + (0.4 × 1M) + (0.2 × 0) = R$ 2.4M.

Investimento positivo EV. Mas: **variância alta** (pode perder tudo). EV não mostra risco de ruína.

Bayesian:

- Começa com prior (crença inicial).
- Evidência nova chega.
- Atualiza para posterior (crença revisada).
- Decisões baseadas em posteriors atualizados, não em priors estáticos.

##### Como aplicar do jeito certo

EV:

1. Liste resultados possíveis.
2. Estime probabilidade de cada (difícil, mas tentar).
3. Estime valor/payoff de cada.
4. Multiplique e some.
5. Compare alternativas por EV.
6. Considere risco: EV sozinho ignora ruína.

Bayesian:

1. Comece com prior explícito (% de chance de hipótese ser verdade).
2. Ao receber evidência, pergunte: quão provável é essa evidência se hipótese for verdade vs. falsa?
3. Atualize usando Teorema de Bayes (ou aproximação informal).
4. Decisões baseadas em posteriors.

##### Exemplo aplicado

Decisão: perseverar em vertical X ou pivotar?

Opção A (perseverar):

- 30% chance: vertical ganha tração em 12 meses → R$ 20M ARR em 3 anos. Valor R$ 40M.
- 40% chance: tração moderada → R$ 5M ARR. Valor R$ 10M.
- 30% chance: falha → receita cai, encerramento. Valor R$ -5M (custo reestruturação).
- EV = (0.3 × 40) + (0.4 × 10) + (0.3 × -5) = 12 + 4 - 1.5 = **R$ 14.5M**.

Opção B (pivotar para vertical Y):

- 20% chance: vertical Y muito forte → Valor R$ 50M.
- 50% chance: tração ok → Valor R$ 8M.
- 30% chance: falha → Valor R$ -3M.
- EV = (0.2 × 50) + (0.5 × 8) + (0.3 × -3) = 10 + 4 - 0.9 = **R$ 13.1M**.

EV favorece opção A marginalmente. Mas considerar: variância, timing, opcionalidades futuras, etc.

##### Erros comuns

Probabilidades estimadas com precisão falsa: "30.2% de chance" quando realmente é "mais ou menos 25-35%". Ignorar risco de ruína: EV positivo com 5% de chance de falência = decisão ruim. Priors preguiçosos: começar análise Bayesiana com "não sei, 50%". Melhor pesquisar e estimar prior decente. Não atualizar Bayesian com evidência: trata priors como certezas. Quantificar o inquantificável: forçar números onde não há base vira teatro.

##### Quando NÃO usar

Decisões onde probabilidades são genuinamente impossíveis de estimar. Decisões onde resultado de single event importa mais que valor esperado (jogar russos roleta com EV positivo mas 17% de morte não é decisão racional).

##### Leitura adicional

- Duke, A. (2018). *Thinking in Bets*. Portfolio.
- Kahneman, D. (2011). *Thinking, Fast and Slow*.
- Silver, N. (2012). *The Signal and the Noise*. Penguin.

---

#### Framework: FMEA — Failure Mode and Effects Analysis (US Military, 1949)

##### Origem

Desenvolvida pelo exército dos EUA em 1949 (procedimento MIL-P-1629) para sistemas de defesa. Adotada pela NASA nos projetos Apollo. Expandiu para indústria automotiva (Ford nos anos 1970), aeronáutica, farmacêutica, e eventualmente tecnologia. Ferramenta central do Six Sigma e de gestão de risco em sistemas complexos.

##### O que é

Método sistemático para identificar, priorizar e mitigar modos de falha antes que ocorram. Para cada componente/processo: (1) identificar **modos de falha possíveis**, (2) avaliar **severidade** da consequência (1-10), (3) avaliar **ocorrência** estimada (1-10), (4) avaliar **detecção** (1-10, sendo 10 = muito difícil detectar antes do impacto). Multiplicar os três números gera o **RPN** (Risk Priority Number). Priorizar mitigação por RPN decrescente.

##### Como aplicar

Sessão com equipe multifuncional de 4-8 pessoas. Passo 1: listar componentes/processos a analisar (não tudo, o mais crítico). Passo 2: para cada um, brainstorm dos modos de falha (o que pode dar errado?). Passo 3: avaliar Severidade/Ocorrência/Detecção em escala 1-10 (usar guidelines para calibrar). Passo 4: calcular RPN. Passo 5: para RPN > 100 (ou threshold escolhido), definir ações de mitigação. Passo 6: revisar periodicamente conforme sistema evolui.

##### Exemplo aplicado

Fintech brasileira processando PIX. Componente: autorização de transação. Modos de falha: (a) sistema autoriza transação fraudulenta (S=10, O=5, D=6, RPN=300), (b) sistema nega transação legítima (S=7, O=4, D=3, RPN=84), (c) sistema fica fora por banco lento (S=8, O=2, D=2, RPN=32). Priorização: (a) requer ação imediata (adicionar modelo anti-fraude, monitoramento), (b) aceitável com monitoramento, (c) aceitável. Sem FMEA, intuição tende a focar em (c) porque é o mais visível. FMEA mostra (a) como risco muito maior.

##### Erros comuns

Pontuação inconsistente entre sessões (S/O/D calibrado diferente). FMEA como documento morto que ninguém revisa, foco apenas em RPN sem considerar impactos não-quantificáveis (reputação, regulatório).

##### Quando NÃO usar

Em sistemas simples onde análise é overkill, em estágio inicial de produto (iteração rápida é mais valiosa que análise de risco detalhada), em decisões estratégicas (ferramenta é para risco operacional).

##### Leitura adicional

*Effective FMEAs* (Carlson, 2012), materiais AIAG (Automotive Industry Action Group). ISO 31000 (gestão de risco).

---

#### Framework: Assumption Mapping (David J. Bland, 2019)

##### Origem

David J. Bland, colaborador de Alex Osterwalder (Strategyzer), publicou *Testing Business Ideas* (2019) sistematizando assumption mapping como prática. Baseado em décadas de Lean Startup e Customer Development, formalizou processo de mapeamento de premissas pré-experimentação.

##### O que é

Ferramenta para **mapear premissas** de uma ideia/produto em matriz 2x2 de **certeza × risco**, priorizando quais testar primeiro.

##### Princípios / estrutura

Matriz 2x2:

- Eixo X, Certeza: temos evidência para suportar? (baixa a alta).
- Eixo Y, Risco: se premissa for falsa, quebra o negócio? (alta = quebra).

Quadrantes:

- Alta certeza + alto risco: confortável, monitorar.
- Alta certeza + baixo risco: ignorar.
- Baixa certeza + alto risco: **testar URGENTEMENTE**. Premissas críticas não-validadas.
- Baixa certeza + baixo risco: testar depois.

##### Como aplicar do jeito certo

Passo 1, Liste premissas subjacentes à ideia. 3 categorias:

- Desejabilidade: clientes querem isso?
- Viabilidade: negócio fecha?
- Factibilidade: conseguimos construir?

Passo 2, Plote cada premissa na matriz.

Passo 3, Priorize quadrante "baixa certeza + alto risco".

Passo 4, Desenhe experimentos para cada premissa prioritária.

Passo 5, Teste, atualize mapa, itere.

##### Exemplo aplicado

Startup pré-MVP mapeia premissas:

Premissas listadas:

1. "PMEs pagarão R$ 200/mês", baixa certeza, alto risco → **PRIORIDADE**.
2. "Conseguimos construir integração com bancos", alta certeza, médio risco → monitorar.
3. "Mercado total é grande (> R$ 100M)", alta certeza, médio risco → monitorar.
4. "Contadores vão recomendar", baixa certeza, alto risco → **PRIORIDADE**.
5. "Adoção self-serve funciona", baixa certeza, médio risco → testar em seguida.

Experimentos prioritários:

- Premissa 1: Wizard of Oz / landing page com preço, medir intenção.
- Premissa 4: entrevistar 20 contadores sobre produto/parceria.

##### Erros comuns

Lista genérica de premissas: sem especificidade, teste é difícil, Autoavaliar certeza otimista: empreendedor confia na própria ideia, inflar certeza, Pular para experimentação sem mapear: testa algo aleatório, não o que mais importa.

##### Quando NÃO usar

Produto já validado no mercado (assumption mapping é para pré-PMF).

##### Leitura adicional

- Bland, D. & Osterwalder, A. (2019). *Testing Business Ideas*. Wiley/Strategyzer.

---

### CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)

#### Canvas: Hypothesis Canvas (autoral IGNIÇÃO)

##### Origem

O Hypothesis Canvas documentado neste livro é uma ferramenta autoral desenvolvida especificamente para o contexto de founder brasileiro operando com recursos limitados e necessidade de ciclos curtos de aprendizado. Parte da tradição do Lean Startup (Eric Ries, 2011) e da metodologia de hipóteses científicas aplicada a negócio (Karl Popper via Steve Blank), mas incorpora duas inovações práticas ausentes nos templates estrangeiros: (1) a ligação explícita entre cada hipótese e a **árvore de teoria** do negócio (Fase 3) — forçando o fundador a articular *qual premissa causal da teoria* está sendo testada; (2) o bloco de **due diligence da amostra** antes da comparação com o threshold — evitando o erro de aceitar resultado de amostra inadequada como evidência válida. O template completo preenchível está no [[#Template: Hypothesis Canvas|Template: Hypothesis Canvas]].

##### O que é

Artefato de uma página — estruturado como tabela de quatro quadrantes — que captura os oito elementos de uma hipótese rigorosamente testável:

- **Teoria**: qual parte da árvore de teoria (Fase 3) esta hipótese testa? Qual é o atributo ou seta causal em jogo?
- **Hipótese**: afirmação falsificável em uma frase — quantitativa sempre que possível.
- **Evidência**: como a evidência será coletada? Método, público-alvo, tamanho de amostra, duração, custo.
- **Medidas**: o que especificamente será contado? Qual é a fórmula da métrica? Quais medidas alternativas foram descartadas?
- **Threshold (pré-definido)**: qual resultado mínimo considera a hipótese suportada? Qual resultado a considera refutada? Qual é a zona inconclusiva entre os dois?
- **Due diligence da amostra**: antes de comparar resultado com threshold, a amostra é adequada? Representa o ICP? Há vieses identificados?
- **Avaliação**: resultado observado vs. threshold ajustado — Suportada / Refutada / Inconclusiva?
- **Decisão**: Perseverar / Pivotar / Mais dados / Abandonar + próxima ação concreta + impacto na árvore de teoria.

A sequência de preenchimento é deliberada: blocos superiores e médios **antes** de coletar dados; blocos inferiores **após** — respeitando a barreira anti-viés de confirmação.

##### Quando usar

Use o Hypothesis Canvas na Fase 6 (formulação de hipóteses) como artefato central — um canvas por hipótese bet-the-company. Use também em discovery contínuo pós-PMF: qualquer feature ou mudança de modelo que envolva uma crença não testada merece um canvas. Em times que fazem Test Cards (Fase 8), o Hypothesis Canvas é o nível acima: o Test Card registra um experimento; o Hypothesis Canvas registra a hipótese que o experimento testa, com contexto teórico e decisão final.

##### Princípios

Três princípios fundamentam o design do canvas:

**Primeiro: hipótese sem conexão teórica é ruído.** O bloco "Teoria" força o fundador a articular qual pressuposto da teoria do negócio está em jogo. Hipótese validada que não conecta à teoria pode ser irrelevante; hipótese refutada que conecta a um nó crítico da teoria pode matar o modelo inteiro — a diferença importa.

**Segundo: threshold pré-definido evita auto-engano.** Definir critério de sucesso e refutação antes de ver dados é o único mecanismo eficaz contra viés de confirmação. Times que definem threshold após o resultado invariavelmente o ajustam para validar o que já queriam. O bloco de due diligence da amostra acrescenta um segundo filtro: mesmo que o resultado supere o threshold, se a amostra era inadequada, o resultado não é evidência.

**Terceiro: decisão conecta de volta à teoria.** O bloco "Decisão" exige que o fundador articule o impacto na árvore de teoria — não só "vamos continuar" mas "este resultado fortalece/invalida qual nó ou seta da nossa teoria causal do negócio". Sem isso, aprendizados se acumulam sem atualizar a teoria, e a teoria fica desatualizada em relação à evidência coletada.

##### Como aplicar

Para cada hipótese bet-the-company da Fase 6, abra um canvas. Tempo de preenchimento inicial: 30-45 minutos (a parte antes de coletar dados). Conclusão: após coleta e análise.

Use o template completo do [[#Template: Hypothesis Canvas|Template: Hypothesis Canvas]] para o preenchimento. A estrutura do canvas orienta a sequência — não pule blocos, não preencha de baixo para cima.

**Sequência obrigatória:**

1. **Teoria**: abra a árvore de teoria da Fase 3. Qual atributo ou seta esta hipótese testa? Importância (1-5). É bet-the-company?
2. **Hipótese**: escreva como afirmação falsificável. "X% de [persona Y] fará [ação Z] em [contexto W]."
3. **Evidência**: escolha o método. Entrevista, questionário, landing page, pré-venda, concierge, A/B, fake door, etc. Tamanho de amostra, duração, custo.
4. **Medidas**: o que conta? Qual é a fórmula exata? Quais alternativas foram descartadas?
5. **Threshold**: defina sucesso, refutação e zona inconclusiva. Justifique os números. Assine e date.
6. **[Coleta de dados]**
7. **Due diligence da amostra**: tamanho efetivo coletado. Adequado? Representa o ICP? Vieses.
8. **Ajuste do threshold**: se necessário, documente a razão.
9. **Avaliação** e **Decisão**.

##### Exemplo brasileiro preenchido — startup de gestão de frota para transportadoras médias (2023)

Uma startup B2B de gestão de frota estava testando a hipótese de que transportadoras de 20-50 caminhões em SP pagariam R$ 180/veículo/mês por rastreamento + relatórios de eficiência integrados.

| Bloco | Conteúdo |
|---|---|
| **Teoria** | Atributo A3 da árvore: "cliente paga pelo relatório de eficiência, não só pelo rastreamento". Seta causal: relatório de eficiência → redução de custo de combustível → disposição a pagar premium. Importância: 5. Bet-the-company: sim (preço de R$ 180 vs. concorrente a R$ 90 depende desta hipótese). |
| **Hipótese** | Transportadoras de 20-50 caminhões em SP com gerente de frota dedicado pagarão R$ 180/veículo/mês por rastreamento + relatório de eficiência mensal, se o relatório mostrar redução ≥5% de consumo de combustível. |
| **Evidência** | 8 pré-vendas reais (contrato de 3 meses, reembolso se insatisfeito) via cold outreach para lista de 40 transportadoras identificadas em LinkedIn + associações de classe. |
| **Medidas** | Número de contratos assinados a R$ 180. Threshold: ≥4/8 (50%) = suportada. ≤1/8 (12,5%) = refutada. Entre 2-3 = inconclusivo. |
| **Threshold** | Sucesso: ≥4 contratos em 30 dias. Refutação: ≤1 contrato. Zona inconclusiva: 2-3 contratos (exige entrevistas adicionais para entender objeções). |
| **Due diligence** | 8 empresas abordadas, 6 tiveram reunião (2 declinaram). Das 6: 3 assinaram a R$ 180, 1 pediu R$ 120, 2 declinaram. Amostra de 8 é pequena mas representa o ICP (todas têm 20-50 caminhões, SP, gerente de frota). Viés possível: acesso via rede pessoal pode ter selecionado empresas mais abertas a inovação. |
| **Avaliação** | 3/6 reuniões = 50% de conversão das reuniões. Vs. threshold original (4/8 total): inconclusivo. Ajuste de threshold: com 6 reuniões em vez de 8, o critério proporcional seria ≥3 — resultado beira o limiar de sucesso. |
| **Decisão** | Mais dados. Ação: expandir para 20 novas abordagens antes de concluir. A 1 que pediu R$ 120 sinaliza que o relatório de eficiência não está bem justificado em termos de ROI — refinar a apresentação do relatório antes das próximas abordagens. Impacto na teoria: hipótese parcialmente suportada, mas seta causal "relatório → disposição a pagar premium" precisa ser reforçada com cálculo de ROI explícito na proposta. |

**Insight do caso.** O bloco de due diligence revelou que a amostra era pequena (6 reuniões, não 8 planejadas), e o resultado ficou na zona cinza. Sem o canvas, o time poderia ter concluído "50% de conversão — excelente, vamos escalar". Com o canvas, ficou claro que 3 contratos numa amostra de 6 é inconclusivo, e a ação certa era ampliar — não comemorar. **A lição: threshold sem due diligence da amostra é falsa precisão. O número de contratos importa, mas a qualidade da amostra que gerou esses contratos importa igualmente.**

##### Variações e extensões

- **Hypothesis Canvas Rápido**: versão de 4 blocos (Hipótese + Método + Threshold + Decisão) para hipóteses de menor risco onde o rigor completo é overhead excessivo.
- **Portfolio de Hipóteses**: planilha com todos os canvas abertos em paralelo, ranqueados por Importância e status (Pendente / Em teste / Suportada / Refutada). Útil para o "banco de hipóteses" da Fase 6.

##### Quando NÃO usar

Em decisões operacionais rotineiras que não testam premissa nova (ajuste de preço incremental, mudança de copy). Em hipóteses onde a coleta de evidência levaria mais de 90 dias — nesse horizonte, outros aspectos do negócio já terão mudado; redesenhe o experimento para ser mais rápido ou use o canvas como hipótese de longo prazo com checkpoint intermediário.

##### Conexão com outros canvases

O Hypothesis Canvas **sucede a Theory Map (Fase 3, Vol. 1)**: cada nó ou seta da árvore teórica gera hipóteses a testar. **Pareia com o Test Card (Fase 8)**: o Hypothesis Canvas define a hipótese e o contexto teórico; o Test Card define o experimento específico. **Alimenta o Lean Canvas (Fase 1, Vol. 1)**: hipóteses validadas atualizam os blocos do Lean Canvas com dado real. **Alimenta o Risk Canvas (Fase 12, Vol. 4)**: hipóteses refutadas são, frequentemente, a materialização de riscos previamente identificados.

##### Leitura adicional

- Template completo preenchível: [[#Template: Hypothesis Canvas|Template: Hypothesis Canvas]].
- *The Lean Startup* (Eric Ries, 2011) — fundação filosófica.
- *Thinking, Fast and Slow* (Daniel Kahneman, 2011) — viés de confirmação e por que threshold pré-definido importa.

---

### TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE

#### Template: Banco de Hipóteses — modelo de planilha

**Para que serve.** Centraliza todas as hipóteses do negócio em uma única planilha com tipo, critério de validação, método, custo e status, evitando que aprendizados se percam em conversas e documentos espalhados.

**Quando usar.** Ao iniciar a Fase 6 (priorização). Mantenha viva ao longo de toda a jornada até PMF, atualizando status sempre que um experimento for executado e adicionando hipóteses novas conforme descobertas.

**Exemplo de preenchimento.** Linha H03, tipo "Adoção", hipótese "operadores de loja farão login no app pelo menos 3x por semana", porquê importa "se falso, o produto vira shelfware mesmo com compra do dono", critério "≥60% dos usuários ativos D7 nas primeiras 4 semanas", método "piloto com 5 lojas medindo eventos de login", custo "R$2.000 + 6 semanas", status "Em teste".

| ID | Tipo | Hipótese | Porquê importa | Critério validação | Método | Custo | Status | Resultado |
|----|------|----------|----------------|-------------------|--------|-------|--------|-----------|
| H01 | Problema | Donos de restaurante perdem ≥3h/semana com conciliação de frete | Se falso, o problema não é dolorido o suficiente | ≥60% dos 20 entrevistados menciona espontaneamente | Entrevistas de problema | R$0 + 3 semanas | Em teste |, |
| H02 | Monetização | ICP pagará ≥R$149/mês pela solução | Determina viabilidade do modelo | ≥15% conversão em landing page com oferta | Smoke test + pré-venda | R$1.500 + 3 semanas | Nova |, |

---

#### Template: Hypothesis Canvas

Template central para conectar teoria, hipótese, evidência e avaliação. Use um canvas por hipótese prioritária. Preencha os blocos superior e médio **antes** de coletar dado, os blocos inferiores são preenchidos **após** a coleta, respeitando a ordem indicada.

> [!note] Teoria completa em Canvas: Hypothesis Canvas (autoral IGNIÇÃO) (Fase 7)
> Origem, estrutura, princípios, como aplicar e caso brasileiro do Hypothesis Canvas encontram-se em [[#Canvas: Hypothesis Canvas (autoral IGNIÇÃO)|Canvas: Hypothesis Canvas (autoral IGNIÇÃO)]]. Este template é o complemento prático (campos preencháveis) daquela seção.

```text
╔══════════════════════════════════════════════════════════╗
║ HYPOTHESIS CANVAS #___ ║
╠════════════════════════════╦═════════════════════════════╣
║ TEORIA ║ HIPÓTESE ║
║ Qual parte da sua árvore ║ Afirmação falsificável a ║
║ esta hipótese testa? ║ testar: ║
║ ║ ║
║ Atributo/seta: ___________ ║ ___________________________ ║
║ Importância (1-5): _______ ║ ___________________________ ║
║ É bet-the-company? S / N ║ ___________________________ ║
╠════════════════════════════╬═════════════════════════════╣
║ EVIDÊNCIA ║ MEDIDAS ║
║ Como vou coletar? ║ O que especificamente vou ║
║ [ ] Entrevista ║ contar? ║
║ [ ] Questionário ║ ║
║ [ ] Landing page ║ Pergunta/evento: __________ ║
║ [ ] Pré-venda ║ Respostas possíveis: ______ ║
║ [ ] Concierge ║ Fórmula da medida: ________ ║
║ [ ] Wizard of Oz ║ ___________________________ ║
║ [ ] A/B test ║ ║
║ [ ] Fake door ║ Medidas ALTERNATIVAS que eu ║
║ [ ] Outro: _______ ║ descartei e por quê: ______ ║
║ ║ ___________________________ ║
║ Público-alvo: ____________ ║ ║
║ Tamanho planejado: _______ ║ ║
║ Duração: _________________ ║ ║
║ Custo: R$ ________________ ║ ║
╠════════════════════════════╩═════════════════════════════╣
║ THRESHOLD (preencher ANTES de olhar os dados) ║
║ ║
║ Minha crença subjetiva Resultado mínimo para ║
║ sobre o valor real: considerar SUPORTADA: ║
║ ║
║ [ __________ ] [ __________ ] ║
║ ║
║ Resultado que considerarei REFUTADO: ║
║ [ __________ ] ║
║ ║
║ Zona INCONCLUSIVA (exige novo experimento): ║
║ entre [ ______ ] e [ ______ ] ║
║ ║
║ Justificativa do threshold: _____________________________ ║
║ __________________________________________________________ ║
╠════════════════════════════════════════════════════════════╣
║ DUE DILIGENCE DA AMOSTRA (antes de comparar com threshold)║
║ ║
║ Tamanho efetivo coletado: _____ ║
║ Adequado para o tipo de teste? [ ] Sim [ ] Não ║
║ ║
║ A amostra representa o ICP? [ ] Sim [ ] Parcial [ ] Não ║
║ Vieses identificados: ____________________________________║
║ ___________________________________________________________║
║ ║
║ AJUSTE DO THRESHOLD: ║
║ [ ] Mantido ║
║ [ ] Aumentado para ______ (amostra favorece a hipótese) ║
║ [ ] Diminuído para ______ (amostra desfavorece hipótese) ║
║ Justificativa do ajuste: ________________________________ ║
╠════════════════════════════╦═════════════════════════════╣
║ AVALIAÇÃO ║ DECISÃO ║
║ ║ ║
║ Resultado observado: ║ [ ] Perseverar ║
║ [ _____________ ] ║ [ ] Pivotar ║
║ ║ [ ] Mais dados ║
║ Vs. threshold ajustado: ║ [ ] Abandonar ║
║ [ ] SUPORTADA ║ ║
║ [ ] REFUTADA ║ Próxima ação concreta: ║
║ [ ] INCONCLUSIVA ║ __________________________ ║
║ ║ __________________________ ║
║ Explicação alternativa ║ ║
║ plausível? ______________ ║ Impacto na árvore de teoria:║
║ ________________________ ║ __________________________ ║
║ ║ __________________________ ║
╚════════════════════════════╩═════════════════════════════╝

Data de preenchimento inicial: ___/___/___
Data de conclusão: ___/___/___
Assinatura do empreendedor: _______________________________
```

**Observação sobre o Hypothesis Canvas**: o propósito dele é forçar o empreendedor a tornar visível cada passo do raciocínio. O canvas não é decorativo, se algum bloco estiver em branco quando o experimento começa, é porque esse passo não foi pensado. E um experimento iniciado com passos não pensados é um experimento que vai produzir conclusões erradas, mesmo se o resultado parecer claro.

---

### SÍNTESE DA FASE 7

O entregável é o Banco de Hipóteses priorizado: tabela viva, não documento que se arquiva. Hipóteses antigas viram verdades validadas ou são refutadas, e novas emergem ao longo do projeto. Revisitar a cada duas a quatro semanas é higiene. O Banco estrutura todas as fases seguintes: as Fases 8, 9, 10 e 11 não testam ideia em geral, testam hipóteses específicas na ordem do risco. A [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] pega as bet-the-company do topo do Banco e desenha experimentos com threshold pré-registrado para cada uma.

---

## FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO

> [!tip] Stack mínimo da Fase 7
> Para rodar experimentos baratos. Landing pages rápidas: Webflow, Framer, Carrd, Wix (R$ 0 a R$ 100 por mês, segundo o uso). Tráfego pago para testes: Meta Ads (R$ 500 a R$ 3.000 para primeiros testes), Google Ads (similar), LinkedIn Ads (se B2B, mais caro mas direto). Analytics: Google Analytics 4 (gratuito), Hotjar ou Microsoft Clarity (gratuitos para uso moderado) para heatmap. Plausible (alternativa simples e privacy-first). Pagamentos para pré-venda: Stripe, Asaas, Pagar.me, Stone, MercadoPago (cada um com particularidades regulatórias no Brasil). Regra: o stack de experimentação deveria custar menos de R$ 1.000 por mês no começo. Se está caro antes de aprender, algo está errado.

### O que esta fase cobre

Execução de experimentos estruturados para testar as hipóteses prioritárias levantadas na [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]]. Nesta fase, você ainda foca primariamente em validar o problema e o cliente, não a solução construída. Os experimentos são rápidos, baratos, e desenhados para dar evidência confiável de sim, não, ou talvez.

O entregável é um Relatório de Experimentos. Hipóteses testadas, resultados, aprendizados, e próximos passos.

> [!abstract] Resumo operacional
> **Entregável:** Relatório de Experimentos com três ou mais Cartões de Experimento (Template: Cartão de Experimento (Fase 8)) executados, threshold ex-ante registrado, decisão (perseverar, pivotar, abandonar) documentada para cada hipótese bet-the-company.
>
> **Sinais de saída:**
> - Três a cinco hipóteses bet-the-company testadas com critério de falsificação numérico pré-definido em cada cartão.
> - Banco de Hipóteses atualizado com status pós-experimento — uma ou mais invalidadas conta como aprendizado.
> - Evidência forte de problema real, disposição a pagar e pelo menos um canal de aquisição possível.
> - Critério mínimo atingido em pelo menos um de três sinais — dez pagamentos antecipados, vinte cartas de intenção, ou cem e-mails qualificados com conversão acima de quinze por cento.
> - Decisão tomada (perseverar, pivotar ou abandonar) e ação iniciada.
>
> **Três armadilhas mais comuns:**
> 1. Critérios de sucesso frouxos definidos depois do resultado — "vou considerar sucesso se alguém demonstrar interesse" transforma o experimento em racionalização.
> 2. Ignorar resultados negativos — desvalorizar dados contrários com "esse grupo não era o público certo" é fugir da verdade que o experimento revelou.
> 3. Esticar prazo ou gastar demais — experimento acima de R$ 3 mil ou mais de duas semanas está mal desenhado, e janela aberta vira espera de resultado conveniente.

### POR QUE

Hipóteses sem experimentos são só listas bonitas. Experimentos transformam suposição em evidência. Rápido e barato é fundamental. Se um experimento demora três meses, ou custa R$ 50 mil, você está gastando demais para aprender uma coisa só. Cada experimento deve gerar uma decisão clara. Continuar. Ajustar. Pivotar. Ou matar.

> [!note] Capítulo 1 — Científico vs Lean Startup
> O desenho de experimento descrito nesta fase combina rigor do método científico (threshold — ponto de corte numérico pré-definido — ex-ante, falsificabilidade, isolamento de variável) com velocidade do ciclo Lean (Build-Measure-Learn comprimido em dias, não meses). O [[#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 — Científico vs Lean Startup]] detalha quando priorizar profundidade (pré-registro formal, controle de viés) versus velocidade (experimento mais barato possível). A tensão entre os dois é permanente em early-stage; o apêndice oferece critério de decisão.

### CALIBRANDO EXPECTATIVAS, o espectro de resultados e a regra dos nove em dez

Antes de desenhar o primeiro experimento, calibre a expectativa. Empreendedores iniciantes frequentemente chegam à [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] esperando que "o experimento vai validar a minha ideia". Essa expectativa está calibrada errada. Entender a distribuição real de resultados é o que separa o fundador que aprende do fundador que se ilude.

Os resultados de experimentos caem em um espectro, inspirado no framework Antler de validação — uma referência usada pela aceleradora global para categorizar a força dos sinais de demanda. Com dois extremos e uma enorme zona intermediária.

O extremo negativo, "spaghetti sandwiches". A ideia teve rejeição clara. Entrevistados demonstraram pouco interesse. Landing page teve conversão baixa. Pré-venda fracassou. A decisão é fácil. Pivotar. Voltar à matriz de Problema versus ICP (Fases 2 e 4) e criar uma nova hipótese para testar.

O extremo positivo, "overnight cult following". A ideia teve adesão extraordinária. Clientes pagaram antecipado sem hesitar. Vieram indicações espontâneas. Early evangelists (clientes que viram o produto e passaram a defendê-lo publicamente) começaram a vender por você. Houve pedido explícito de acesso. A decisão é fácil. Construa a empresa. Esse cenário acontece em aproximadamente uma em cada dez tentativas.

O meio do espectro, "área cinzenta". Resultados fracos, confusos, conflitantes, ou enviesados. Alguns clientes interessados, outros indiferentes. Feedback misto. Esse é o cenário onde a maioria dos empreendedores realmente se encontra. É onde a maioria também se ilude e segue construindo algo que não deveria. A decisão é difícil. Exige critérios explícitos. Não intuição.

> [!important] A regra operacional mais importante deste manual
> Assuma que, em nove de cada dez ciclos de hipótese, experimento, e análise, a conclusão correta será recomeçar ou pivotar, não seguir. Essa é a distribuição de base. Se você está sempre chegando a conclusões que favorecem seguir em frente, quase certamente está torcendo em vez de analisando.

Essa calibração tem três implicações práticas.

A primeira ideia quase certamente não é a ideia final. Se você trabalha numa ideia única e nunca considera pivotar, está negando probabilidade pura. Identifique múltiplos ICPs e múltiplas hipóteses de teoria desde a [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]] exatamente porque nove em dez vão falhar.

Recomeçar não é fracasso. É o funcionamento normal do processo. O objetivo do manual inteiro é fazer você recomeçar barato, em vez de recomeçar caro. Recomeçar depois de R$ 3 mil gastos em quatro semanas é normal. Recomeçar depois de R$ 300 mil em dois anos é tragédia.

Quando você finalmente estiver naquele um em dez, vai saber. Não é ambíguo. Early adopters evangelizam, pagam antecipado, reclamam quando o produto falha, convidam outros. Se o sinal é ambíguo, você não está no um em dez. Está no meio do espectro.

##### Exemplo concreto do extremo positivo, Soylent

Quando o Soylent foi lançado por Rob Rhinehart em 2013, via crowdfunding, sem existir ainda em escala, os primeiros adotantes não só compravam. Escreviam no fórum. Publicavam receitas próprias. Respondiam dúvidas de outros compradores. Reportavam bugs de formulação. Defendiam a marca publicamente contra críticos. Eram, na prática, funcionários não-pagos da empresa nascente. O que a Antler chama de evangelistas.

Se a sua base de primeiros clientes se comporta assim, sem você ter que puxar, você está naquele um em dez. Se você precisa empurrar cada venda, responder cada objeção sozinho, e os clientes não convidam mais ninguém, você não está. Independentemente do que o seu otimismo te diga.

##### Como navegar o meio do espectro

Não interprete resultados medianos como validação fraca que vai melhorar. Na maior parte das vezes, não melhora.

Aplique os critérios duros da [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]]. Dez pagamentos antecipados, vinte cartas de intenção, ou cem e-mails a mais de quinze por cento de conversão. Abaixo disso, você está no meio. E o meio é pivô.

Considere seriamente a teoria alternativa que você mapeou na [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]]. Ela pode ser o caminho real.

Evite a tentação de "esperar mais um pouco". Prazos esticados quase nunca trazem dados melhores. Trazem mais dados medianos.

> [!warning] O pior não é falhar
> O pior é ficar preso em algo medíocre que não vai a lugar nenhum, consumindo tempo, dinheiro, e moral por meses ou anos.

### Quando usar

Comece assim que a [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]] priorizar as primeiras hipóteses. Termine quando as três a cinco hipóteses bet-the-company estiverem validadas ou refutadas com evidência suficiente. Revisite continuamente. O negócio gera novas hipóteses o tempo todo.

### Quem envolve

O executor é você. Alguns experimentos envolvem potenciais clientes, colaboradores externos, ou plataformas pagas (Facebook Ads, Google Ads, Typeform). O decisor é você, com base nos critérios de sucesso pré-definidos.

### Como executar

Nove passos.

#### Passo 1, desenhe cada experimento em cartão antes de executar

Use esse formato:

```text
EXPERIMENTO #N
Hipótese: [copiar da Fase 6]
Pergunta central: [o que especificamente quero responder]
Desenho: [o que vou fazer, passo a passo]
Público: [quantas pessoas, que perfil, como alcanço]
Métrica principal: [o número que vai decidir]
Critério de sucesso: [valor da métrica pra considerar validada]
Critério de refutação: [valor da métrica pra considerar refutada]
Duração: [tempo total]
Custo: [R$ estimado]
Riscos e vieses: [o que pode distorcer o resultado]
Data de início / fim: [planejadas]
```

##### Regra operacional para a duração, a janela de duas a três semanas

Empreendedores iniciantes tendem a desenhar experimentos com "duração aberta" ("vou rodar até ter dados suficientes"), ou com janelas longas demais ("três meses para validar"). Ambos são sintomas do mesmo problema. Medo de decisão.

A regra operacional, derivada da prática de aceleradoras como Antler e Y Combinator: cada experimento da [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] deve caber numa janela de duas a três semanas. Do desenho à decisão. Dois motivos.

Disciplina de decisão. Experimento com prazo aberto nunca termina. Sempre "precisa de mais uma semana". Janela fechada força você a concluir com o dado disponível. Reconhecer as limitações honestamente, em vez de empurrá-las com a barriga.

Paralelização. Com janelas curtas, você roda quatro a seis experimentos em três meses. Com janelas longas, roda um a dois. A velocidade de aprendizado é composta. Mais iterações dentro do mesmo tempo total geram aprendizados muito superiores.

Há duas exceções legítimas à janela. Experimentos concierge e wizard of oz frequentemente precisam de quatro a oito semanas para revelar valor real. Não force janela curta nesses casos. E experimentos com ciclo de venda B2B enterprise naturalmente exigem seis a doze semanas. A janela aqui aplica-se ao ciclo de decisão do cliente-alvo, não ao seu.

Para qualquer outro tipo de experimento (entrevistas, landing page, fake door, pré-venda direta a PMEs, community test, A/B), se o desenho não cabe em duas a três semanas, o experimento está grande demais. Quebre em dois ou três experimentos menores. Cada um testando um atributo isolado.

> [!important] Defina o critério antes de olhar o resultado
> Se você define depois, vai ajustar o critério para "validar" o que você já queria. Isso é auto-engano.

> [!tip] Test Card: a forma canônica do Cartão de Experimento
> O cartão de experimento descrito acima é a adaptação brasileira do **Test Card** — ferramenta de David Bland & Alexander Osterwalder (Strategyzer, 2019) para documentar hipótese, método, critério e decisão num único cartão antes de rodar qualquer experimento. O tratamento completo está no [[#Canvas: Test Card (David Bland & Alexander Osterwalder, 2019)|Canvas: Test Card (David Bland & Alexander Osterwalder, 2019)]] — origem histórica, princípios, exemplo brasileiro PadariaPro com smoke test (teste rápido de demanda com landing page ou anúncio, antes de construir qualquer coisa) de R$ 1.500 que produziu critério claro de Persevere/Pivote, e variações como Learning Card (cartão de aprendizado — registro estruturado do resultado de um experimento) e Riskiest Assumption Test (RAT) — teste da premissa mais arriscada. A regra de ouro de Canvas: Test Card (David Bland & Alexander Osterwalder, 2019) (Fase 8): critério de sucesso e critério de refutação devem ser **distintos com zona de incerteza no meio**. Se você define só "sucesso ≥10%" sem definir "refutação ≤2%", qualquer resultado entre 2 e 10% vira interpretação flexível conforme conveniência do time.

#### Passo 2, escolha os tipos de experimento apropriados

Catálogo dos oito experimentos mais úteis para validação de problema e cliente, antes de construir produto.

##### Problem Interview (entrevista de problema)

Já coberto na [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]]. Útil também para hipóteses emergentes. Custo baixo. Tempo de uma a duas semanas. Limitação: respostas são opiniões, não ações.

##### Landing Page Test ou Smoke Test (teste rápido de demanda)

Crie uma página que descreve a sua solução como se ela já existisse. Direcione tráfego por Ads ou e-mails a grupos. Meça a taxa de conversão em cadastros de e-mail, pré-pedidos, ou cliques em "quero comprar".

Como medir: conversão de visitante em ação. Benchmarks (referências de mercado) iniciais: conversão maior que cinco por cento em e-mail é sinal bom. Maior que dez por cento é forte. Abaixo de dois por cento, a sua promessa não ressoa. Custo de R$ 500 a R$ 2.000 em Ads, mais um dia para montar a página (use Carrd, Framer, Webflow, Unbounce). Tempo de uma a três semanas. Cuidado: tráfego pago precisa ser bem segmentado. Se o público é ruim, conversão baixa não significa que a ideia é ruim.

##### Concierge Experiment (experimento manual)

Você entrega manualmente o valor que o seu produto promete. Sem automatizar nada. Por exemplo: se o produto seria um app de gestão de frota, você mesmo gerencia a frota de um cliente usando planilha e WhatsApp, cobrando pelo serviço.

Como medir: o cliente percebeu valor? Pagou? Indicou? Custo: o seu tempo, durante duas a oito semanas. Tempo total de quatro a doze semanas. A vantagem é que você descobre os detalhes operacionais que uma entrevista nunca revelaria.

##### Wizard of Oz (produto simulado)

O produto parece funcionar com tecnologia avançada, mas por trás é você fazendo tudo manualmente. Por exemplo: você promete "IA que sugere horários de postagem ideais", e você mesmo, olhando cada cliente, sugere os horários. O cliente nem sabe.

Como medir: o usuário usa a "solução"? Volta? Paga? Custo baixo em construção, alto em tempo operacional. Tempo de quatro a doze semanas.

##### Pre-sale (venda antecipada)

Você vende o produto antes dele existir. Pede pagamento real ou carta de intenção assinada.

Como medir: número de vendas e cartas. Valor arrecadado. Critério forte: dinheiro no bolso é mais que carta de intenção, que é mais que interesse verbal. Custo baixo. Tempo de duas a seis semanas.

> [!important] Pre-sale é o experimento mais revelador de todos
> Se as pessoas pagam antecipado por algo que não existe, você tem evidência forte. Se não pagam, tem informação forte também.

##### Fake Door ou Botão Fantasma (testar interesse sem construir)

Dentro de um produto existente (blog, comunidade), ou de uma página, você coloca um botão que promete uma feature que ainda não construiu. Quando o usuário clica, aparece "em breve" mais formulário.

Como medir: percentual de usuários que clicam. Custo muito baixo. Limitação: mede interesse, não compra.

##### Community Test (teste em comunidade)

Compartilhe a ideia em comunidades relevantes (Reddit, grupos de Facebook, Discord, fóruns especializados). Meça reações genuínas, perguntas, pedidos de acesso.

Como medir: engajamento, comentários, DMs. Custo zero. Limitação: comunidades têm viés. Algumas são positivas demais. Outras cínicas demais.

##### A/B Test (teste comparativo de proposta de valor)

Teste duas ou três formas diferentes de descrever o problema ou a solução, e veja qual converte mais. Útil quando você ainda não sabe como falar com o cliente.

Como medir: conversão relativa. Custo moderado.

##### Guia rápido para escolher a técnica

| Fase de validação | Técnica mais apropriada |
|---|---|
| Entender o problema em profundidade (exploratória) | Entrevistas |
| Dimensionar o problema em escala | Questionários |
| Testar atratividade de uma proposta | Landing Page, Smoke Test, Fake Door |
| Testar disposição real a pagar | Pré-venda |
| Testar se a solução entrega valor de verdade | Concierge, Wizard of Oz |
| Comparar duas versões para identificar qual performa melhor | A/B Test |

Use entrevistas quando você precisa de profundidade e aprendizados qualitativos. Use questionários, landing pages, e pré-vendas quando precisa de números representativos e evidência quantitativa. Os dois tipos são complementares. Não substitutos.

#### Passo 3, operacionalize cada hipótese em uma medida concreta

Esse é a ponte entre teoria e experimento. É onde a maioria dos empreendedores erra. Para cada hipótese prioritária, responda quatro perguntas, nessa ordem.

Qual é a hipótese testável? Texto exato da hipótese da [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]].

O que eu vou perguntar ou observar? Pergunta específica no questionário. Ação observada no experimento. Evento rastreado no analytics.

Quais são as respostas ou eventos possíveis? Opções discretas, ou faixas numéricas.

O que eu vou efetivamente contar como medida? Fórmula exata. Por exemplo: "percentual de respondentes que escolheram X ou Y", "taxa de clique no botão Z", "valor médio ofertado em pré-venda".

Exemplo operacionalizado, inspirado no caso MiMoto, do paper de Coali e colegas (2024).

A hipótese: "Tráfego nas grandes capitais é um problema relevante para profissionais." A pergunta no questionário: "Em uma semana típica, quantos dias você fica preso no trânsito no trajeto casa-trabalho?" As respostas possíveis: (a) menos de um dia, (b) um a três dias, (c) três a cinco dias, (d) mais de cinco dias. A medida: percentual de respondentes que escolhem (c) ou (d).

Você pode escolher outra forma de medir (por exemplo, nota de um a sete, ou foco apenas na resposta "mais de cinco dias"). O importante é que a escolha seja feita antes de ver os dados, documentada, e aplicada de forma consistente na análise.

> [!important] Quatro regras de operacionalização
> Conecte a medida à hipótese de forma rastreável. Se alguém te perguntar "por que você escolheu essa métrica e não outra?", você precisa conseguir responder em termos da teoria. Defina ex-ante (antes de coletar). Definir medida depois de ver dados é auto-engano matemático — você vai inevitavelmente escolher a métrica que confirma o que já acredita. Pré-teste as suas perguntas com duas a três pessoas de confiança. Pergunta mal formulada gera lixo. Ajuste antes do campo. Prefira medidas já estabelecidas (KPIs do setor, escalas validadas da literatura de pesquisa) quando existirem, em vez de inventar métricas próprias. A sua métrica só é "nova" se não existir nada comparável.

> [!note] Capítulo 6 (Vol. 1) — Tomada de Decisão como Disciplina
> A decisão de rodar ou não um experimento — e com que profundidade — é ela mesma uma decisão estruturável. O [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 — Tomada de Decisão como Disciplina (Vol. 1)]] oferece o framework SPADE para documentar critérios antes de agir, e o pré-mortem para antecipar por que um experimento pode produzir conclusão errada. Use especialmente em hipóteses Tipo 1, onde errar o desenho do experimento tem custo alto.

#### Passo 4, defina o threshold antes de começar

Threshold (ponto de corte numérico) é o valor da sua medida a partir do qual a hipótese será considerada suportada. É o que separa decisão baseada em critério de torcida organizada.

Por exemplo: "Vou considerar a hipótese suportada se pelo menos sessenta por cento dos respondentes do meu ICP (perfil de cliente ideal) escolherem a opção (c) ou (d), ou seja, mais de três dias por semana no trânsito."

O threshold é subjetivo. Você define com base na sua teoria e experiência. Mas uma vez definido, é imóvel até os dados serem analisados. Se você mover o threshold depois, o experimento deixa de ser teste de hipótese, e vira confirmação do que você queria.

Documente o threshold no Cartão de Experimento. Se não houver threshold escrito, o experimento não está pronto para rodar.

#### Passo 5, pré-registre o desenho do experimento antes de coletar dados

Pré-registro é a prática adotada na pesquisa científica moderna (Simmons, Nelson, e Simonsohn, 2011; Wicherts e colegas, 2016) para eliminar o que os pesquisadores chamam de "p-hacking" — a tendência de ajustar análises até encontrar o resultado desejado. Em outras palavras, você decide como vai analisar os dados antes de coletá-los, não depois.

O empreendedor enfrenta exatamente o mesmo viés. Com custo maior. A análise enviesada aqui não produz artigo acadêmico duvidoso. Produz decisão de investimento com o seu próprio capital, baseada em evidência viciada.

Checklist mínimo de pré-registro a documentar antes de iniciar o experimento. Hipótese específica (texto exato, com atributo e direção). Medida operacional (fórmula exata). População-alvo, e critérios de inclusão e exclusão (quem entra no teste, quem não). Tamanho mínimo da amostra (número antes de começar, não "até o que conseguir"). Threshold de decisão (valor numérico exato). Plano de análise (como os dados serão agregados, se haverá subgrupos). O que faria você descartar resultados (contaminação, vazamento de intenção, falha técnica). O que faria você considerar resultado inconclusivo (não apenas "não suportado").

Documente isso em arquivo datado antes de iniciar o experimento. Compartilhe com sócios e advisors. Essa transparência externa cria pressão positiva para não trapacear consigo mesmo.

> [!tip] Por que pré-registro funciona em early-stage
> Pré-registro formal transforma experimento de "procura por evidência que confirme a minha ideia" em "teste imparcial da minha própria crença". É o mecanismo mais efetivo contra autoenganos. E autoenganos são a causa mais comum de decisão empreendedora catastrófica. Em contextos de alta incerteza (early-stage, deeptech, mercados novos), pré-registro é especialmente valioso. O empreendedor tipicamente tem pouca evidência externa para calibrar expectativas, e tende a preencher a incerteza com otimismo motivado.

#### Passo 6, execute e faça due diligence da amostra antes de olhar o resultado

Rode o experimento dentro do prazo planejado. Resista à tentação de esticar o prazo porque o resultado está ruim ("mais tempo vai melhorar"). De mudar o critério de sucesso no meio do caminho. De parar cedo porque o resultado está bom ("já sei, não preciso terminar").

Esse é o passo mais negligenciado por empreendedores. É o mais importante para uma avaliação honesta. Antes de comparar o resultado com o threshold, verifique três coisas.

Tamanho da amostra. Para entrevistas e MVPs qualitativos, dez a quinze pessoas já trazem insight. Para questionários e testes de conversão, você precisa de pelo menos oitenta a cem respostas. Idealmente centenas, se o mercado é massificado. Amostras muito pequenas produzem ruído, não sinal. Se a amostra está pequena, reconheça a limitação e seja mais conservador no próximo passo.

Representatividade. A amostra que você conseguiu reflete o ICP que descreveu na teoria? Mesmo sem amostragem aleatória (quase nunca viável para um empreendedor iniciante), os respondentes precisam ser um "retrato em miniatura" do público-alvo. Se o seu ICP é "donas de pet shop no interior", e oitenta por cento dos respondentes são de capital, a sua amostra está enviesada. Se é "CFOs de empresas de cem ou mais funcionários", e você só conseguiu falar com analistas juniores, você não testou a hipótese real.

Ajuste do threshold se a amostra for enviesada. Se a sua amostra está enviesada para um lado que favorece a hipótese (você testou com early adopters — primeiros adotantes entusiastas — quando o público final é mainstream), aumente o threshold. Seja mais rigoroso. Se está enviesada para um lado que prejudica a hipótese (você testou com um público que não tem o problema na intensidade esperada), considere se o teste faz sentido, ou se deveria ser refeito. Registre o ajuste no Cartão de Experimento, antes de olhar o resultado final.

> [!important] O princípio da avaliação objetiva
> Você reconhece as limitações da evidência, e as incorpora ao critério. Em vez de usar as limitações depois para explicar por que o resultado ruim "não conta".

#### Passo 7, analise com honestidade

Para cada experimento, responda cinco perguntas. Qual o resultado, comparado com o critério pré-definido? A hipótese foi validada, refutada, ou inconclusiva? Quais aprendizados secundários emergiram? Quais novas hipóteses surgiram? O que eu faria diferente da próxima vez?

#### Passo 8, compare o resultado com a teoria, não apenas com o threshold

Esse passo distingue o empreendedor que pensa de forma sistemática do empreendedor meramente "lean". O threshold te diz se a hipótese foi ou não suportada pela amostra. Mas a decisão final deve ser tomada comparando o resultado com a teoria inteira, não apenas com o número isolado.

Pergunte-se. Se a hipótese foi refutada: qual pedaço da minha árvore de teoria precisa ser revisado? Existe uma teoria alternativa (que eu já mapeei na [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]]) que explica melhor esse resultado? O problema é o atributo específico, a relação causal, ou o ICP escolhido?

Se a hipótese foi suportada: o resultado é consistente com o resto da teoria? Ou há uma explicação alternativa (viés do tráfego pago, comunidade entusiasta atípica) que poderia produzir o mesmo número sem a teoria ser verdadeira?

Se foi inconclusivo: o problema é a amostra, a operacionalização, ou a teoria em si?

> [!quote] Popper sobre evidência refutadora
> Você só pode aprender que está errado por meio de evidência. Nunca pode provar que está certo em definitivo.

Resultados negativos, nesse enquadramento, são informação valiosa. Não fracasso. Um empreendedor que trata toda evidência refutadora como ruído acaba cego para os sinais que mais deveriam fazê-lo repensar.

#### Passo 9, decida e atualize Banco de Hipóteses, árvore de teoria e Declaração

Depois de comparar resultado com teoria (Passo 8), tome uma das quatro decisões. **Persevere**: hipótese validada, continue no mesmo caminho. **Pivote**: hipótese refutada, mude de direção (cliente, problema, solução, ou canal). **Mais dados**: resultado inconclusivo, rode variante do experimento. **Abandone**: evidência clara e consistente de que não há negócio aqui.

> [!warning] Não fique em limbo
> Decida.

Atualize artefatos imediatamente após decidir. Versione: a Declaração vai para v0.2, v0.3, v0.4. Isso é saudável. Significa que você está aprendendo.

> [!tip] Canvases Visuais — Learning Card (Fase 11, Vol. 4)
> Depois de cada experimento, o par natural do Test Card é o [[IGNICAO-Vol-4-Tracao-e-PMF#Canvas: Pirate Canvas / AARRR (Dave McClure, 2007)|Canvas: Pirate Canvas / AARRR (Dave McClure, 2007) (Vol. 4)]] — cartão de uma página que registra o que foi observado (não interpretado), o que foi aprendido, e a decisão tomada (Persevere, Pivote, Abandone). A distinção entre "observação" e "interpretação" no Learning Card é o mecanismo central contra o viés de confirmação pós-experimento. O Banco de Hipóteses atualizado neste passo deve conter o Learning Card de cada experimento concluído.

### Os nove passos aplicados, Cartão de Experimento do PadariaPro (hipótese H2 — disposição a pagar)

A estrutura visual do Cartão de Experimento (Template: Cartão de Experimento (Fase 8)):

```mermaid
flowchart TD
 Card[🧪 CARTÃO DE EXPERIMENTO]

 Card --> H["1️⃣ HIPÓTESE<br/>'Acredito que... X<br/>causará... Y<br/>para... ICP Z'"]
 Card --> Met["2️⃣ MÉTODO<br/>como vai testar:<br/>landing page, entrevista,<br/>pré-venda, smoke test"]
 Card --> Am["3️⃣ AMOSTRA<br/>quantas pessoas,<br/>de qual ICP,<br/>como recrutar"]
 Card --> Th["4️⃣ THRESHOLD<br/>número específico<br/>de sucesso<br/>definido ANTES do teste"]
 Card --> Dur["5️⃣ DURAÇÃO<br/>prazo máximo<br/>2-4 semanas"]
 Card --> Dec["6️⃣ DECISÃO<br/>o que fazer se<br/>validar / refutar"]

 style Card fill:#FFD700,stroke:#8B6914,stroke-width:3px
 style Th fill:#FFB6B6,stroke:#8B0000,stroke-width:2px
```

> [!important] Threshold ex-ante é o elemento não-negociável
> "Vamos ver quantos se interessam", sem número pré-definido, vira racionalização. Três clientes pagantes viram "sinal promissor". Trinta clientes viram "pouco para concluir". Com threshold (doze ou mais conversões em duas semanas, por exemplo), a decisão é automática.

EXPERIMENTO #1

Hipótese: Donos de padaria pagariam R$ 400 por mês por loja pelo PadariaPro se a redução de perda for demonstrada em sessenta dias.

Pergunta central: Qual faixa de preço o dono de padaria com três a cinco lojas aceita pagar por software de gestão de estoque com garantia de resultado em sessenta dias?

Desenho: Criar landing page simples (Framer, quatro horas) com três planos — R$ 290, R$ 400 e R$ 590 por mês por loja. CTA (chamada para ação — botão ou link que convida o visitante a agir) "Quero ser um dos primeiros dez". Formulário pede nome, padaria, número de lojas, telefone e compromisso formal de pagar R$ X se a funcionalidade de previsão de demanda estiver pronta em sessenta dias. Tipo de experimento: Fake Door mais Carta de Intenção de Pagamento. Tráfego via três grupos de WhatsApp de donos de padaria (oitenta membros cada) mais LinkedIn. Para cada lead que preencher o formulário, ligar em quarenta e oito horas para confirmar disposição real.

Público: Donos de padaria com três a cinco lojas em SP. Meta mínima de trinta visitantes que se encaixem no perfil. Canal de recrutamento: grupos de WhatsApp mapeados na Fase 5.

Métrica principal: Taxa de conversão de visitantes ICP em formulários com compromisso de pagamento.

Critério de sucesso: Quinze por cento ou mais dos visitantes ICP preenchem o formulário. Três de cada cinco que atendem à ligação confirmam disposição a pagar R$ 400 por mês.

Critério de refutação: Menos de cinco por cento preenchem o formulário, ou menos de dois em cinco confirmam o preço em chamada. Nesse caso, revisar preço ou proposta de valor antes de continuar.

Duração: Catorze dias.

Custo: R$ 0 em mídia paga. Aproximadamente oito horas de trabalho (quatro horas para a landing page, quatro horas para as ligações de confirmação).

Riscos e vieses: Preencher formulário é barato e não equivale a pagar. Selection bias (viés de seleção): grupos de WhatsApp podem não representar o segmento completo. Confirmação telefônica mitiga o primeiro risco. Instagram ads segmentados em SP como canal paralelo mitiga o segundo.

Data de início / fim: Semana 1 — Semana 2 do mesmo mês.

**Resultado.** Quarenta e sete visitantes ICP. Doze formulários preenchidos (vinte e cinco por cento). Sete ligações realizadas: quatro confirmaram R$ 290, dois confirmaram R$ 400, um confirmou R$ 590.

**Decisão.** R$ 400 uniforme está invalidado. O mercado bifurca. Nova hipótese: tier duplo — R$ 290 entry com funcionalidade básica e R$ 590 premium com integrações adicionais. A hipótese original está refutada.

### Caso brasileiro real, Pulses (HRtech) e a landing page antes de construir

A Pulses, fundada em 2015 por Sady Ennes em Florianópolis (depois adquirida pela TOTVS em 2021), é uma plataforma de pesquisa de clima e cultura organizacional via micro-pulses semanais. Antes de comprometer meses construindo o produto, o fundador validou disposição a pagar via experimento clássico de pré-venda.

A decisão foi cirúrgica. Criou landing page em poucos dias prometendo "diagnóstico contínuo de cultura via micro-pesquisas semanais" com preço anunciado por funcionário/mês. Direcionou tráfego para VPs e diretores de RH em empresas médias e grandes via LinkedIn Ads e rede pessoal do fundador no setor.

Em poucas semanas o experimento gerou leads qualificados, reuniões com decisores de RH, e cartas de intenção de empresas dispostas a pagar pelo serviço sem o produto existir ainda. O custo total ficou na casa de poucos milhares de reais. Validou tanto a demanda quanto a disposição a pagar, antes de qualquer linha de código. Anos depois, em 2021, a empresa foi adquirida pela TOTVS — endossando a tese inicial validada por landing page antes do produto.

A lição transferível. Experimento barato antes de construir economiza meses. Pré-venda com carta de intenção (ou pagamento real) de comprador econômico é o teste mais forte de demanda em B2B.

### PERGUNTAS A RESPONDER

- A hipótese bet-the-company está validada, refutada, ou inconclusiva?
- Qual a evidência concreta? Números, verbatim, observações.
- O que eu aprendi de inesperado?
- Qual a próxima hipótese a testar?
- Continuo, ajusto, pivoto, ou abandono?

### SAÍDA DESTA FASE

Você concluiu a [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] quando todos os critérios abaixo estão cumpridos.

- [ ] Três ou mais Cartões de Experimento (Template: Cartão de Experimento (Fase 8)) preenchidos com hipótese, método, amostra, critério de sucesso, duração e custo.
- [ ] Cada experimento com critério de falsificação numérico, pré-definido e distinto do critério de sucesso (zona de incerteza no meio).
- [ ] Tipo de experimento apropriado para o que cada hipótese testa (landing page, fake door, concierge, Wizard of Oz, pré-venda, A/B).
- [ ] Três ou mais experimentos executados dentro da janela de duas a três semanas, com dados objetivos coletados.
- [ ] Banco de Hipóteses atualizado com status pós-experimento (uma ou mais invalidadas conta como aprendizado).
- [ ] Decisão documentada depois de cada experimento (perseverar, pivotar, mais dados, abandonar).
- [ ] Evidência forte de três coisas: o problema é real e doloroso para o ICP, o ICP está disposto a pagar (carta de intenção ou pré-venda), pelo menos um canal de aquisição possível.
- [ ] Critério duro atingido em ao menos um dos três sinais: dez pagamentos antecipados reais, vinte cartas de intenção assinadas, ou cem e-mails qualificados em landing page com conversão maior que quinze por cento.
- [ ] Benchmarks de resultado por tipo de experimento documentados quando aplicáveis: landing page (>5% bom, >10% forte, <2% fraco em e-mail cadastrado); pré-venda (>20% intenção, >10% conversão paga é muito forte); concierge (NPS >50); Wizard of Oz (uso >2x/semana).
- [ ] Custo por aprendizado abaixo de R$ 500 por hipótese respondida (alvo early-stage). Acima de R$ 3.000 indica experimento mal-desenhado.
- [ ] Velocidade de aprendizado de duas ou mais hipóteses bet-the-company resolvidas por mês em early-stage; quatro ou mais por mês em fase de MVP.
- [ ] Decisão final tomada (perseverar, pivotar, abandonar) e ação iniciada.

> [!warning] Critério de saída
> Os 5% (bom) e 10% (forte) descritos nos passos anteriores são benchmarks de leitura de sinal: indicam que a promessa ressoa o suficiente para continuar testando. Os 15% acima são critério de saída de fase: exigem sinal inequívoco antes de comprometer recursos para construir. Conversão entre 10% e 15% é zona ambígua, exige experimento adicional (preço diferente, segmento mais estreito, oferta mais específica) antes de avançar.

**Primeiros passos práticos.**

1. Escolher as três hipóteses de maior risco não testadas, e desenhar um experimento para cada (Template: Cartão de Experimento (Fase 8)).
2. Estimar custo por experimento. Se algum passa de R$ 5.000 ou de trinta dias, questionar se há versão mais barata.
3. Executar o experimento mais barato primeiro. Geralmente landing page ou fake door.
4. Registrar o resultado em planilha, com decisão associada.

### Armadilhas

Experimentos desenhados para validar, não para descobrir. Se a pessoa ama o empreendedor, o "experimento" sai positivo. Controle o viés.

Critérios de sucesso frouxos. "Vou considerar sucesso se alguém demonstrar interesse." Quase qualquer coisa vira sucesso. Seja rigoroso.

Ignorar resultados negativos. Muitos empreendedores desvalorizam dados contrários. "Esse grupo não era o público certo." Se você precisa justificar por que o resultado ruim "não conta", está fugindo da verdade.

Gastar muito em experimentos. Se um experimento custa mais de R$ 3.000, ou demora mais de duas semanas, provavelmente está mal desenhado. Vá mais simples.

Testar uma hipótese em vez da outra. Às vezes o que você testa não mede o que você acha. Pré-venda de um produto que não existe testa proposta mais preço mais timing. Não testa se o produto funcionaria. Saiba o que está medindo.

Não documentar o experimento. Sem registro escrito antes e depois, você reconstrói a narrativa para se beneficiar. Escreva antes e depois.

---

### FERRAMENTAS DESTA FASE

Experimentos de validação são o coração da metodologia. Quatro essenciais para a fase; o restante fica como referência consultiva. Canvases complementares: Canvas: Test Card (David Bland & Alexander Osterwalder, 2019) (Fase 8) e Canvas: Pirate Canvas / AARRR (Dave McClure, 2007) (Fase 11, Vol. 4). Catálogo operacional completo em [[#Template: Tabela de técnicas de validação por tipo de hipótese|Template: Tabela de técnicas de validação por tipo de hipótese]] (Tabela de técnicas de validação por tipo de hipótese).

**Essenciais para a Fase 7:**

- **The Mom Test** (Fitzpatrick, 2013) — perguntas sobre vida passada específica, não hipotéticos. Ferramenta número um para entrevistas de problema. Framework: The Mom Test (Rob Fitzpatrick, 2013) (Fase 4, Vol. 2).
- **JTBD Switch Interviews** (Moesta) — quatro forças (push, pull, anxiety, habit) no momento em que o cliente trocou de solução. Use quando o entrevistado é switcher. Framework: Jobs to Be Done Switch Interviews (Bob Moesta & Chris Spiek, via Clayton Christensen) (Fase 5, Vol. 2).
- **Pre-mortem** (Klein) — antes de rodar a bateria de experimentos, imagine que todos falharam. Por quê? Revela vieses no desenho. Framework: Pre-mortem (Gary Klein, 2007) (Fase 0, Vol. 1).
- **Assumption Mapping** (Bland, 2019) — matriz certeza versus risco das premissas. Para definir onde focar validação antes de gastar capital. Framework: Assumption Mapping (David J. Bland, 2019) (Fase 7).

**Complementares (consulte conforme o caso):**

- Contextual Inquiry (Beyer e Holtzblatt), Day in the Life e Ethnographic Research, In-Depth Interviews, Laddering Technique e Means-End Chain (Gutman), Diary Studies, Focus Groups (Merton, Krueger), Grounded Theory (Glaser e Strauss), Thematic Analysis (Braun e Clarke), Affinity Diagramming / KJ Method (Kawakita), Empathy Mapping (Gray), Expected Value (Pascal e Fermat para priorizar hipóteses por VE × probabilidade × custo). Detalhamento e quando usar cada uma em Framework: Contextual Inquiry (Hugh Beyer & Karen Holtzblatt, 1997) (Fase 5, Vol. 2) a Framework: Service Blueprinting (G. Lynn Shostack, 1984) (Fase 5, Vol. 2).

---


---

### MÉTRICAS E BENCHMARKS DESTA FASE (FASE 8)

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Taxa de acerto de hipóteses | % confirmadas vs refutadas | 30 a 50% (muito alto = pouca aprendizagem) |
| Velocidade de aprendizado | Hipóteses testadas por semana | ≥ 2 por semana em sprint |
| Regra 9 em 10 | Threshold mínimo antes de pivotar | Definido antes do experimento |
| Pre-registro | % dos experimentos com hipótese registrada antes | 100% |
| Evidência qualitativa | Entrevistas de validação complementares | ≥ 5 por experimento crítico |
| Pré-vendas ou LOIs | Cartas de intenção ou pagamentos antes do produto | ≥ 3 antes de construir |

---

### MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE

> [!tip] Uso autocontido neste volume
> Todos os frameworks abaixo estão detalhados integralmente com origem, estrutura, passo a passo de aplicação, exemplo brasileiro e armadilhas para execução imediata nesta **Fase 8**.

#### Framework: Pretotyping (Alberto Savoia, 2011)

##### Origem

Alberto Savoia, ex-engineering director do Google que liderou iniciativas de Inovação (Adwords, Google Shopping), cunhou o termo "pretotype" em 2011 (anterior ao "prototype"). Formalizou no livro *The Right It* (2019). Distingue **prototipo** (construir a coisa certa) de **pretotipo** (validar se a coisa é certa antes de construir). Savoia argumenta que 90% dos produtos lançados falham, mas não porque são mal construídos, e sim porque construíram a coisa errada.

##### O que é

Conjunto de técnicas rápidas e baratas para validar demanda por uma solução antes de gastar tempo construindo-a. **Oito técnicas principais**: (1) *The Pinocchio*, construir maquete não-funcional e testar se uso surge, (2) *The Mechanical Turk*, simular automação com humano por trás, (3) *Fake Door*, colocar botão/feature que não existe e medir clicks, (4) *One-Night Stand*, pretotipo funcional por um único uso, (5) *The Impersonator*, usar produto existente sob sua marca para testar demanda, (6) *The Relabel*, mudar apenas etiqueta/nome, (7) *The YouTube*, fazer vídeo demo do produto que ainda não existe, (8) *Provincial*, testar em um mercado pequeno antes de lançar global.

##### Princípios

Ideia + dado do mundo real > ideia + opinião de amigos. Dados do tipo YODA (*Your Own Data, acquired through Active experiments*) valem muito mais que opiniões, sondagens ou intuição. Custo de pretotype é medido em horas ou dias, não semanas, custo de protótipo é semanas ou meses. Errar rápido e barato em pretotype é aceitar que a maioria das ideias iniciais são erradas, mas aprender isso antes de investir.

##### Como aplicar

Para cada hipótese de produto: identificar qual é a decisão binária "vamos construir ou não". Escolher uma das oito técnicas que melhor responde essa decisão. Definir threshold de sucesso **antes** do experimento (quantos clicks no fake door? quantas compras no One-Night Stand?). Rodar por 1-7 dias. Decidir na base dos dados, não do desejo.

##### Exemplo aplicado

Airbnb 2007. Antes do produto existir, fundadores alugaram ar-mattress no próprio apartamento durante conferência de design em San Francisco. Três pessoas pagaram US$80 cada para dormir no chão em colchão de ar. Pretotype: comprovou que alguém paga por estadia alternativa no contexto específico (conferência sem hotel disponível). Decidiu a construção do produto.

Exemplo brasileiro, Wellhub pré-launch. Cesar Carvalho fundou Gympass (renomeado Wellhub em 2024) em 2012 em São Paulo. No início rodou teste em uma empresa grande com planilha em Excel e lista manual de academias parceiras, sem app, sem plataforma. Pretotype: validou que RH queria benefício unificado e que funcionários usariam. Só então investiu em construir tecnologia.

##### Erros comuns

(1) Pretotype sem threshold pré-definido, vira teatro. (2) Confundir pretotype com MVP, MVP é produto mínimo que funciona, pretotype é simulação de produto que não existe. (3) Fazer pretotype e ignorar resultado negativo ("mas eu acho que..."), dado é dado. (4) Um único pretotype, comportamento binário (funcionou/não funcionou) sem contexto pode induzir erro, múltiplos pretotypes em diferentes variações fornecem sinal melhor.

##### Quando NÃO usar

Em produtos que requerem integração complexa para gerar valor (não dá para pretotipar SaaS enterprise que exige acesso a dados do cliente). Em produtos puramente técnicos onde a pergunta é "funciona?" e não "alguém quer?", aí protótipo técnico, não pretotype.

##### Leitura adicional

*The Right It* (Alberto Savoia, 2019), *Pretotype It* (Savoia, e-book, 2011, grátis).

---

#### Framework: Customer Development (Steve Blank, 2005)

##### Origem

Steve Blank, fundador de oito startups e professor de Stanford/Berkeley, sistematizou Customer Development a partir de suas próprias experiências como fundador nos anos 1980-1990. Primeiro artigo em 2005, livro de referência *The Four Steps to the Epiphany* (2005) e *The Startup Owner's Manual* (2012, com Bob Dorf). É o framework que inspirou diretamente o Lean Startup de Eric Ries (seu aluno). Distinção central entre Customer Development (externo, descoberta e validação com clientes) e Product Development (interno, construção do produto), operando em paralelo.

##### O que é

Processo de quatro etapas sequenciais: (1) **Customer Discovery**: formular e testar hipóteses sobre quem é o cliente e qual problema eles têm, (2) **Customer Validation**: confirmar que os clientes pagarão pela solução proposta, construindo processo de venda repetível e escalável, (3) **Customer Creation**: crescer demanda no mercado primário e secundário, (4) **Company Building**: transição de modo "startup de busca" para modo "empresa de execução". As duas primeiras etapas são **iterativas**, o processo pode voltar a Discovery quando Validation revela que problema estava mal formulado.

##### Princípios / estrutura

"Get out of the building", o mais citado axioma de Blank. Hipóteses sobre clientes não podem ser validadas dentro do escritório, precisam confrontar realidade externa. Startup não é versão pequena de empresa grande, é organização temporária buscando modelo de negócio repetível e escalável, até achar esse modelo, executar como empresa é erro.

##### Como aplicar do jeito certo

Em Customer Discovery: 50-100 conversas com prospects potenciais nos primeiros meses ([[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]] do manual). Documentar hipóteses antes das conversas (quem, problema, solução). Ajustar hipóteses depois de cada conjunto de 5-10 conversas. Em Customer Validation: vender o produto (mesmo que ainda não existe plenamente) para primeiros early adopters, documentar processo de venda que funciona. Customer Creation e Company Building vêm após validação comprovada, correspondem às Fases 11-14 do manual.

Exemplo aplicado. Steve Blank usou Customer Development na E.piphany (sua startup de marketing software nos anos 1990). Processo: 6 meses em Customer Discovery conversando com VPs de Marketing de 60 empresas Fortune 500. Descobriu que problema inicial formulado (software de análise de campanhas) não era dor principal, dor real era integração de dados de múltiplos sistemas. Pivot orientado por Customer Discovery salvou a empresa, levou a IPO em 1999 com valuation de US$2.5B.

##### Erros comuns a evitar

(1) Pular Customer Discovery por "urgência" de construir produto, erro mais comum e mais caro do empreendedorismo tech. (2) Confundir Customer Development com pesquisa de mercado tradicional (focus groups, surveys), é descoberta por conversa 1-a-1, não quantitativa. (3) Parar conversa com cliente depois do pitch, a maior parte do aprendizado vem das perguntas *depois* que o cliente reage, não do seu pitch. (4) Descartar Customer Development como obsoleto depois de Lean Startup, os dois são complementares, não substitutos. Lean Startup adicionou Build-Measure-Learn mas Customer Development segue sendo método válido de descoberta.

##### Quando não usar

Em empresa já estabelecida com produto e clientes existentes, Customer Development é framework de busca, execução usa ferramentas diferentes. Em produtos B2C massivos com milhões de usuários potenciais, conversa 1-a-1 é insuficiente, complementar com métodos quantitativos (Frameworks da Fase 8).

##### Leitura adicional

*The Four Steps to the Epiphany* (Steve Blank, 2005), *The Startup Owner's Manual* (Blank & Dorf, 2012), blog steveblank.com (ativo desde 2009).

---

#### Framework: Build-Measure-Learn Loop (Eric Ries, 2011)

##### Origem

Eric Ries, aluno de Steve Blank em Berkeley e ex-fundador/CTO da IMVU, popularizou o ciclo Build-Measure-Learn no livro *The Lean Startup* (2011). Adaptou princípios do *Lean Manufacturing* de Toyota (minimizar desperdício, feedback rápido) para o contexto de desenvolvimento de produtos digitais em startups. Tornou-se o framework mais influente de empreendedorismo pós-2011, adotado por Google, GE, aceleradoras globais e disciplinas de empreendedorismo em universidades.

##### O que é

Ciclo iterativo de três etapas: **Build** (construir o menor experimento possível, MVP, para testar uma hipótese), **Measure** (coletar dados de uso, comportamento, feedback), **Learn** (decidir *continuar*, *pivotar*, ou *matar* com base no aprendizado). O objetivo não é entregar produto rápido, é acelerar o *aprendizado validado* sobre o que funciona e o que não funciona. Cada ciclo é curto (dias a semanas), múltiplos ciclos formam a jornada de validação.

##### Princípios / estrutura

*Aprendizado validado* é o tipo de progresso que importa, progressão em features construídas sem validação de mercado é desperdício. *Innovation accounting*, medir progresso em métricas que indicam aprendizado (retenção por cohort, conversão em cada etapa do funil), não em métricas de vaidade (downloads, pageviews). *Pivot ou persevere*, decisão explícita e documentada ao final de cada ciclo, não deriva implícita.

##### Como aplicar do jeito certo

Para cada hipótese de produto: (1) Definir métrica que validará ou refutará a hipótese. (2) Construir o menor MVP que permita medir essa métrica (pode ser pretotype, landing page, concierge MVP, ou versão funcional). (3) Rodar experimento por tempo suficiente para acumular dados estatisticamente significativos. (4) Medir resultado contra threshold pré-definido. (5) Decidir explicitamente o próximo ciclo: dobrar aposta, ajustar, ou pivotar. Documentar cada ciclo em 1 página, construir biblioteca de aprendizados.

Exemplo aplicado, Dropbox 2008. Hipótese: pessoas querem sincronização automática de arquivos entre dispositivos. Desafio: construir funcionalidade técnica é trabalho de meses. **Build**: Drew Houston fez vídeo demo de 3 minutos mostrando como o Dropbox funcionaria, postou no Hacker News. **Measure**: em um dia, waitlist cresceu de 5.000 para 75.000 pessoas. **Learn**: validou demanda antes de construir produto. Construiu depois com confiança de que mercado existia.

##### Erros comuns a evitar

(1) Build longo demais, se o ciclo dura meses, não é Build-Measure-Learn, é desenvolvimento tradicional. (2) Métrica vaga, "uso do produto" não é métrica, retenção na segunda semana é. (3) Learn sem decisão, ciclo termina com "vamos continuar refinando" sem pivot/persevere explícito, isso é deriva, não aprendizado validado. (4) Confundir com método Agile, Agile é sobre *entregar produto*. BML é sobre *validar modelo de negócio*. Agile pode ser bom e ainda assim BML ruim.

##### Quando não usar

Em produtos físicos de hardware onde ciclo de build é inerentemente longo (meses a anos), BML precisa adaptação significativa. Em produtos regulados (saúde, fintech, aviação) onde "MVP" tem custo regulatório alto. Em segmentos enterprise complexos onde venda consultiva precede experimentação, BML ainda se aplica, mas ciclos são mais longos.

##### Leitura adicional

*The Lean Startup* (Eric Ries, 2011), *The Startup Way* (Eric Ries, 2017), blog startuplessonslearned.com.

---

#### Framework: Survey Design (Don Dillman & Jon Krosnick, padrão moderno)

##### Origem

Don Dillman (Washington State University) é referência global em metodologia de survey, *Internet, Phone, Mail and Mixed-Mode Surveys: The Tailored Design Method* (1ª edição 1978, 5ª edição 2014) é texto canônico. Jon Krosnick (Stanford) complementa com pesquisa sobre **como formular perguntas** para minimizar viés de resposta. Juntos, são os dois nomes mais citados em literatura acadêmica de surveys.

##### O que é

Coleção de técnicas cientificamente validadas para **formular, administrar e analisar surveys** de forma a minimizar viés e maximizar validade. Fundador que aplica "4 perguntas no Google Forms" sem rigor coleta dados enganadores, pior que não coletar.

##### Princípios / estrutura

Erros comuns em surveys informais:

- Leading questions: "você concorda que X é importante?"
- Double-barreled: "o produto é fácil e bonito?" (2 perguntas em 1).
- Vagueness: "você usa com frequência?" (frequência o quê? Por dia/semana/mês?).
- Ordem enviesada: pergunta sobre satisfação após elogio enviesa, após reclamação, enviesa outro jeito.
- Escalas inconsistentes: ora 1-5, ora 0-10, confunde.
- Amostra auto-selecionada: só respondem quem já gosta.

Princípios de design rigoroso:

1. Objetivos claros: cada pergunta deve ter propósito de uso específico.
2. Perguntas específicas, concretas, unidimensionais.
3. Escalas consistentes (1-5 ou 0-10, usar uma).
4. Ordem aleatória de opções para evitar viés de posição.
5. Amostragem representativa (não só quem responde voluntário).
6. Tamanho de amostra suficiente para poder estatístico.
7. Piloto: testar survey com 10-20 pessoas antes de rodar em escala.

##### Como aplicar do jeito certo

Passo 1, Defina pergunta de pesquisa: "qual fração do nosso ICP está insatisfeita com solução atual?"

Passo 2, Desenhe amostra. Probabilística (ideal) ou pragmática (definida). Evitar "quem abrir o link".

Passo 3, Formule perguntas:

- Comportamentais: "na última semana, quantas vezes você usou X?"
- Atitudinais: "em escala 1-5, quão frustrado ficou com Y?"
- Factuais: "em que faixa de receita sua empresa está?"

Passo 4, Calcule tamanho de amostra. Para populações grandes, margem de erro 5% em CI 95% ≈ 385 respostas. Calculadoras online fazem o cálculo.

Passo 5, Piloto: 10-20 respostas, ajustar ambiguidades.

Passo 6, Distribua: mix de canais para reduzir viés (email, social, CRM).

Passo 7, Analise: estatística descritiva + cruzamentos por segmento + teste de significância quando comparar grupos.

##### Exemplo aplicado

Survey para validar dor em PMEs brasileiras:

- População: PMEs brasileiras com 5-100 funcionários.
- Amostra alvo: 400 respostas.
- Canais: email do próprio CRM + 2 parceiros (contabilidades) + anúncio LinkedIn.
- Perguntas:

 1. Em quais dos seguintes processos você gasta mais tempo por semana? (multi-select).
 2. Especificamente em [processo top], quantas horas/semana? (faixas).
 3. Em escala 1-5, quão frustrado você está com esse processo?
 4. Você já pagou por solução para este processo? Quanto?
 5. Dados demográficos (setor, porte, localização).

Insights (n=412):

- 68% respondem "gestão financeira" como top 3, 41% como #1.
- Entre os que citam financeiro como top: 73% gastam 5+ horas/semana, 22% gastam 15+.
- Frustração média 3.8/5 (alta).
- 34% já pagaram por solução, ticket médio R$ 180/mês.

Implicação: dor validada em escala. Willingness to pay existe.

##### Erros comuns

Perguntas leading: "você concorda que nossa solução resolve X?", Amostra viesada: só respondem clientes satisfeitos, n pequeno: 30 respostas não generalizam, Ignorar non-response bias: 10% dos enviados responderam, quem são os 90%?, Over-survey: 25 perguntas, dropout enorme, dados ruim.

##### Quando NÃO usar

Descoberta inicial (qualitativo é melhor), Comportamentos que as pessoas não relatam acuradamente (observar, não perguntar), Quando amostra suficiente é inviável.

##### Leitura adicional

- Dillman, D., Smyth, J. & Christian, L. (2014). *Internet, Phone, Mail and Mixed-Mode Surveys* (5th ed.). Wiley.
- Krosnick, J. (1999). "Survey Research". *Annual Review of Psychology*.
- Sauro, J. & Lewis, J. (2012). *Quantifying the User Experience*.

---

#### Framework: Conjoint Analysis (Paul Green, 1971)

##### Origem

Paul Green, professor da Wharton, e V. Srinivasan (Stanford) desenvolveram conjoint nos anos 1970 para analisar preferências de consumidores. "Conjoint Measurement for Quantifying Judgmental Data" (Green & Rao, 1971) é paper seminal. Hoje é padrão em pricing research, product positioning e desenvolvimento de produto em empresas como McKinsey, Bain, e grandes CPGs.

##### O que é

Técnica estatística que **decompõe preferências declaradas** em valor relativo de cada atributo que compõe a oferta. Usa o fato que consumidores fazem tradeoffs: não queremos tudo, negociamos features vs. preço vs. outras dimensões.

##### Princípios / estrutura

Problema que resolve: pergunte diretamente "quanto você pagaria por feature X?", respostas são infladas. Conjoint apresenta **bundles** realistas (ex.: "feature A + B + preço R$ 80/mês" vs. "feature C + D + preço R$ 150/mês") e pede preferência. Decompor matematicamente revela valor de cada atributo.

Tipos:

- CBC (Choice-Based Conjoint): mais popular. Usuário escolhe entre 2-3 bundles.
- Adaptive Choice-Based: dinamicamente ajusta opções.
- MaxDiff (Framework: MaxDiff Analysis (Louviere & Woodworth, 1990; popularizado por Sawtooth) (Fase 8)): variação para atributos individuais.

##### Como aplicar do jeito certo

Passo 1, Defina 3-6 atributos com 2-4 níveis cada. Ex.: pricing (R$ 50/100/200/400), suporte (email/chat/telefone/dedicado), features (básico/avançado/premium), etc.

Passo 2, Use ferramenta especializada: Sawtooth (padrão), Conjoint.ly, Qualtrics. DIY em Excel é possível mas limitado.

Passo 3, Amostra: 200-500 respondentes do ICP.

Passo 4, Desenho experimental: ferramenta gera bundles a mostrar (fractional factorial design).

Passo 5, Respondente escolhe entre bundles. Típico: 10-20 cenários.

Passo 6, Análise estatística: ferramenta calcula utilidades (part-worths) de cada nível de cada atributo.

Passo 7, Interpreta: qual atributo tem maior importância? Qual nível maximiza preferência?

Passo 8, Simulação: testa cenários de bundle novo vs. concorrência.

##### Exemplo aplicado

Conjoint para definir pricing e features de SaaS B2B:

Atributos:

- Preço: R$ 50, 100, 200, 400/mês.
- Suporte: email / chat / telefone / dedicado.
- Features: básico (só core), avançado (+relatórios), premium (+integrações).
- Contrato: mensal / anual com desconto.

Resultado (n=320 respondentes ICP):

- Preço é 45% da importância (sensibilidade alta).
- Features 25%.
- Suporte 20%.
- Contrato 10%.

Utilidades de preço: R$ 50 (+1.8), R$ 100 (+0.5), R$ 200 (-0.3), R$ 400 (-2.0). Preço acima de R$ 200 reduz drasticamente, abaixo de R$ 100 é quase equivalente.

Insight: empresa pode ir até R$ 200 sem perder muitos, acima disso, abandona. Features intermediárias (avançadas) são "sweet spot", premium agrega pouco incremental vs. avançado.

##### Erros comuns

Muitos atributos: > 6 atributos → fadiga cognitiva → respostas ruidosas, Níveis irrealistas: preço muito absurdo atrapalha, Não validar com comportamento real: conjoint é declarado, sempre complementar com dados reais (A/B tests de pricing), Amostra não-ICP: respondentes aleatórios viesam.

##### Quando NÃO usar

Early-stage sem claras dimensões de oferta, Produtos com muitos atributos não-comparáveis, Quando comportamento real já está disponível (use-o).

##### Leitura adicional

- Orme, B. (2010). *Getting Started with Conjoint Analysis*. Research Publishers.
- Rao, V. (2014). *Applied Conjoint Analysis*. Springer.

---

#### Framework: MaxDiff Analysis (Louviere & Woodworth, 1990; popularizado por Sawtooth)

##### Origem

Jordan Louviere e George Woodworth desenvolveram o método em 1990. Consolidou como alternativa pragmática a ranking para casos com muitos itens. Popularizou via Sawtooth Software nos anos 2000.

##### O que é

Técnica estatística para **priorizar um conjunto de atributos ou itens**. Respondente vê subsets de 4-5 itens e escolhe **o mais importante** e **o menos importante** (maximum difference). Repetido várias vezes, gera ranking completo com precisão estatística.

##### Princípios / estrutura

Problema que resolve: quando você tem 20 features candidatas e quer saber quais priorizar, perguntar "em escala 1-10, quão importante é X?" 20 vezes gera ratings inflacionados (tudo parece 8-9). MaxDiff força tradeoffs.

##### Como aplicar do jeito certo

Passo 1, Liste 15-30 itens a priorizar.

Passo 2, Ferramenta gera subsets: cada respondente vê ~12-15 sets de 4-5 itens.

Passo 3, Em cada set, respondente escolhe mais importante + menos importante.

Passo 4, Análise: algoritmo calcula score de importância de cada item (Hierarchical Bayes é padrão).

Passo 5, Ranking estatisticamente válido.

##### Exemplo aplicado

MaxDiff para priorizar 20 features candidatas:

Amostra: 250 clientes + prospects do ICP.

Resultado (top 5 e bottom 5):

Top 5 (prioridade alta):

1. Integração automática com bancos (score 9.2/10).
2. Relatório fiscal simplificado (8.7).
3. Dashboard móvel (7.8).
4. Notificações inteligentes de vencimento (7.2).
5. Importação de extratos PDF (6.9).

Bottom 5 (baixa prioridade):
16. Integração com Zapier (2.1).
17. Tema dark mode (1.8).
18. Modo offline (1.3).
19. Widget de calendário (1.1).
20. Assinatura eletrônica (0.8).

Insight: roadmap focado em integrações bancárias e relatórios fiscais, features como dark mode, Zapier, offline ficam para depois. Validação quantitativa clara.

##### Erros comuns

Items que se sobrepõem: "dashboard mobile" e "app iOS", qual é diferente?, n pequeno: < 100 respondentes gera estabilidade baixa, Items mal-descritos: respondente tem interpretação diferente do mesmo item.

##### Quando NÃO usar

Items < 10 (ranking direto suficiente), Items com dimensões muito diferentes (não são comparáveis).

##### Leitura adicional

- Orme, B. (2009). *MaxDiff Analysis: Simple Counting, Individual-Level Logit, and HB*. Sawtooth.

---

### CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)

#### Canvas: Test Card (David Bland & Alexander Osterwalder, 2019)

##### Origem

O Test Card foi formalizado no livro *Testing Business Ideas* (David Bland & Alexander Osterwalder, 2019), parte da família Strategyzer (mesma escola do BMC e VPC). É a sistematização — em formato de cartão único — do que já era prática tácita no Lean Startup desde Eric Ries (2011): para cada hipótese, defina o experimento que vai testá-la **antes** de coletar dados, com critério de sucesso explícito. O Test Card tornou esse exercício replicável: cabe numa folha A5, tem campos fixos, e força o time a articular o critério de sucesso antes do experimento começar (não depois, quando já há viés de confirmação).

O que o livro IGNIÇÃO chama de "Cartão de Experimento" (Template: Cartão de Experimento (Fase 8) da seção de Templates Operacionais) é uma adaptação direta do Test Card, com algumas extensões para o contexto brasileiro (custo em R$, linguagem local). A origem da ferramenta é Strategyzer.

##### O que é

Cartão de uma página com **oito campos** estruturados:

- **ID do experimento** (numeração sequencial).
- **Hipótese testada** (uma frase falsificável copiada do banco de hipóteses).
- **Pergunta central** (o que especificamente queremos responder).
- **Desenho** (passo a passo do experimento).
- **Público** (quantas pessoas, qual perfil, como alcançadas).
- **Métrica principal e critério de sucesso** (definido **antes** de ver dados).
- **Critério de refutação** (o que invalida a hipótese — também antes).
- **Custo e duração** (orçamento e prazo).

Após o experimento, o cartão se completa com:

- **Resultado observado**.
- **Decisão** (Persevere / Pivote / Ajuste / Abandone).
- **Aprendizados** (o que isso nos ensina sobre o modelo).

```mermaid
flowchart TB
    subgraph Pre["Antes do experimento"]
        H["💡 Hipótese<br/>(falsificável)"]
        P["❓ Pergunta<br/>central"]
        D["📋 Desenho<br/>(passo a passo)"]
        PU["👥 Público"]
        M["📊 Métrica + Critério<br/>de Sucesso"]
        R["🚫 Critério<br/>de Refutação"]
        CU["💰 Custo + Duração"]
    end
    subgraph Pos["Depois do experimento"]
        RE["📈 Resultado<br/>observado"]
        DE["✅ Decisão<br/>(Persevere/Pivote/<br/>Ajuste/Abandone)"]
        AP["💡 Aprendizados"]
    end
    Pre --> Pos
```

A disciplina central é definir **Critério de Sucesso e Critério de Refutação ANTES** de rodar o experimento. Times que definem critério depois invariavelmente racionalizam os dados a favor da hipótese ("converteu menos do que esperávamos, mas ainda é positivo porque..."). Critério pré-definido evita auto-engano.

##### Quando usar

Use o Test Card na Fase 7 (experimentos de validação do problema) como artefato central — um Test Card por experimento, vivo até o experimento concluir. Use também na Fase 6 (formulação de hipóteses) como follow-up imediato: cada hipótese bet-the-company gera 1-3 Test Cards. Em times pós-PMF com cultura de discovery contínuo, Test Card vira hábito semanal — qualquer feature ou mudança de fluxo gera Test Card antes da implementação.

##### Princípios

A tese de Bland & Osterwalder é que **experimento sem critério pré-definido não é experimento, é demonstração**. Demonstração começa com a conclusão pronta e busca evidência que confirme. Experimento começa com pergunta aberta e aceita qualquer resposta. A diferença é a definição prévia do critério de refutação. Test Card formaliza esse rigor — sem ele, a maioria dos "experimentos" em startup é teatro de método científico.

##### Como aplicar

Para cada hipótese a testar, abrir um Test Card. Tempo de preenchimento: 30-45 min. Participantes: 2-3 pessoas (PM + tech/design + 1 fundador).

1. **Hipótese** — copie da Fase 6, escreva como afirmação falsificável: "X% dos visitantes da landing page se cadastrarão em até 7 dias", não "as pessoas vão gostar".
2. **Pergunta central** — o que estamos testando especificamente? Frequentemente é o coração da hipótese reformulado.
3. **Desenho** — passo a passo do experimento. Concreto: que landing page? Quais ads? Que público?
4. **Público** — N planejado, perfil específico, canal. "100 visitantes ICP via Meta Ads" é diferente de "100 visitantes quaisquer".
5. **Métrica + Critério de Sucesso** — definir **antes**. "Sucesso = 8% de conversão visitante → cadastro em 14 dias."
6. **Critério de Refutação** — também antes. "Abaixo de 2% = hipótese refutada."
7. **Custo e Duração** — R$ X (Ads + ferramenta) + Y dias.
8. **Riscos e vieses** — o que pode distorcer? Tráfego ruim? Dia da semana? Novidade?

Rodar o experimento. Atualizar o cartão com resultado, decisão e aprendizados.

**Regra de ouro**: sucesso e refutação devem ser distintos com zona de incerteza no meio. Entre 2% e 8% no exemplo acima = inconclusivo, exige novo experimento. Sem zona de incerteza, qualquer resultado vira "sucesso" ou "fracasso" por viés.

##### Exemplo brasileiro preenchido — PadariaPro, smoke test de proposta de valor (2024)

Equipe da PadariaPro (caso recorrente do livro) considerava lançar produto de gestão de delivery próprio para padarias artesanais com 1-3 unidades em São Paulo. Antes de construir, rodaram este Test Card:

| Campo | Conteúdo |
|---|---|
| **ID** | EXP-2024-03 |
| **Hipótese testada** | Donos de padaria com 1-3 unidades em SP que fazem delivery próprio têm dor suficiente para pagar R$ 290/mês por software de gestão integrada de pedidos. |
| **Pergunta central** | Visitantes ICP convertem em formulário "quero conhecer" a ≥10%? Dos que preenchem, ≥30% confirmam disposição a pagar R$ 290 em ligação? |
| **Desenho** | (1) Landing page descrevendo o produto como se existisse, com R$ 290/mês destacado e formulário de "quero conhecer". (2) Meta Ads segmentando "donos de padaria em SP" via interesses + lookalike de base de email comprada. (3) Para cada formulário preenchido, ligar em 24h e fazer entrevista de 15 min. |
| **Público** | 100 visitantes ICP (donos/sócios de padaria 1-3 unidades em SP capital), via Meta Ads. Verba de R$ 1.500. |
| **Métrica principal** | Taxa de conversão visitante → formulário preenchido. Sucesso: ≥10%. Refutação: ≤2%. |
| **Métrica secundária** | Dos preenchimentos, % que confirma disposição a pagar R$ 290 em ligação. Sucesso: ≥30%. Refutação: ≤10%. |
| **Critério de Refutação** | Conversão <2% OU confirmação de pagamento <10% = hipótese refutada. Reconsiderar preço ou ICP. |
| **Custo e Duração** | R$ 1.500 em Ads + 14 dias (1 semana de tráfego + 1 semana de ligações) + ~10h do fundador em entrevistas. |
| **Riscos e vieses** | Público frio do Meta pode não bater com ICP real (donos de padaria não usam Meta Ads como ferramenta de descoberta de software B2B). Mitigação: reforçar segmentação por interesses + lookalike. |

**Resultado** (preenchido após 14 dias):

- 47 visitantes ICP confirmados via tag de evento (audience pequena demais, limitação de targeting).
- 12 preencheram formulário (25,5% — acima do critério de sucesso primário).
- 7 atendiam à ligação. Dos 7: 4 confirmaram disposição a R$ 290, 2 a R$ 400, 1 a R$ 590. Confirmação de pagamento: 4/7 = 57% (acima do critério).

**Decisão**: Persevere. Hipótese reforçada — disposição a pagar é maior que o teste assumia (alguns aceitariam R$ 400-590). Próximo experimento: pré-venda paga real (R$ 290 com reembolso garantido) para os 12 do formulário.

**Aprendizados**: (1) ICP via Meta Ads funcionou apesar de ceticismo inicial — segmentação por interesse "padaria artesanal" + lookalike captou perfil certo. (2) Disposição a pagar > preço testado sugere que estamos subprecificando — testar R$ 390 no próximo experimento. (3) Tempo de resposta importa: dos 12 que preencheram, os 5 que não atenderam ligação foram contatados em D+2 (vs D+1 nos 7 atendidos). Diferença de 24h em tempo de resposta queimou 40% da amostra.

**Insight do caso.** A disciplina do Test Card neste exemplo evitou três erros típicos: (1) **viés de confirmação** — sem critério pré-definido, "47 visitantes" pareceria sucesso ou fracasso conforme a vontade do time; com critério, é claramente "amostra menor que planejada, mas suficiente porque conversão alta compensa"; (2) **subestimação de preço** — sem perguntar preço de forma sistemática, a equipe assumiria R$ 290 e nunca testaria preços maiores; (3) **falsa sensação de progresso** — sem "Critério de Refutação" registrado, o time poderia ter levado meses para perceber que algo simples como "responder em 24h" estava destruindo a amostra. **A lição: Test Card não é burocracia — é o equipamento de proteção contra os auto-enganos sistemáticos do empreendedor entusiasmado.**

##### Variações e extensões

- **Learning Card** (Strategyzer): cartão complementar focado em "o que aprendemos" (não "o que testamos"). Útil para destilar insights de múltiplos Test Cards rodados.
- **Assumption Map** (Bland & Osterwalder): grid 2x2 que prioriza quais assumptions virar Test Cards primeiro (importância × evidência atual).
- **Riskiest Assumption Test (RAT)** (Lean Startup community / Lean UX): variação minimalista — só testa a única assumption que mais pode matar o produto.

##### Erros comuns

- Definir critério de sucesso depois de ver resultados — auto-engano garantido.
- Critério vago ("queremos boa adoção") em vez de quantitativo ("≥X% em Y dias") — resultado fica em zona cinza permanente.
- Não definir critério de refutação — só "sucesso" e "ainda não", nunca "refutado", impede aprendizado real.
- Rodar muitos Test Cards em paralelo sem capacidade de analisar — vira teatro de experimentação.
- Confundir Test Card com PRD (Product Requirements Document) — Test Card valida hipótese; PRD especifica construção. São documentos para fases distintas.

##### Quando NÃO usar

Em decisões reversíveis e baratas (pequena mudança de copy, ajuste de preço pontual) — overhead do cartão não compensa. Em decisões que não cabem em hipótese falsificável ("devemos ter cultura mais transparente?") — Test Card não serve para questões de identidade ou valores. Em ambientes onde o time não tem disciplina para parar e analisar antes de avançar — Test Card sem cultura de revisão vira papel.

##### Conexão com outros canvases

O Test Card **sucede o Hypothesis Canvas (Fase 7)**: cada hipótese vira 1-3 Test Cards. **Sucede o Lean Canvas (Fase 1, Vol. 1)**: cada bloco do Lean Canvas gera hipóteses, que geram Test Cards. **Antecede o MVP Canvas (Fase 9)**: depois de Test Cards validarem que a oportunidade existe, MVP Canvas define o escopo do que construir. **No livro IGNIÇÃO**, o Test Card é a fonte canônica do "Cartão de Experimento" do Template: Cartão de Experimento (Fase 8) — são a mesma ferramenta com nome localizado.

##### Leitura adicional

- *Testing Business Ideas* (David Bland & Alexander Osterwalder, 2019).
- *The Lean Startup* (Eric Ries, 2011) — origem filosófica da disciplina.
- [strategyzer.com/library](https://strategyzer.com/library) — biblioteca de Test Cards preenchidos por categoria.

---

### TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE

#### Template: Cartão de Experimento

**Para que serve.** Documenta um experimento individual em uma página com hipótese, desenho, métrica, critério de sucesso pré-registrado e decisão, garantindo rigor de método e prevenindo racionalização posterior do resultado.

**Quando usar.** Antes de cada experimento da Fase 7. O preenchimento dos blocos "Critério de Sucesso", "Riscos e Vieses" e "Métrica Principal" deve ocorrer ANTES de ver qualquer dado, não depois. Preencha "Resultado", "Decisão" e "Aprendizados" no encerramento.

**Exemplo de preenchimento.** Hipótese testada, "ICP paga R$149/mês". Pergunta central, "quantos visitantes da landing finalizam compra no checkout antes do produto existir?". Desenho, "rodar Google Ads para 5 termos de cauda longa por 14 dias, medir conversão até cartão informado". Métrica principal, "taxa de conversão visita→cartão". Critério de sucesso, "validar se ≥10%, refutar se ≤3%, zona cinzenta entre 3% e 10%".

```text
EXPERIMENTO #___
Data planejada: ___ a ___

HIPÓTESE TESTADA
___________________________________________

PERGUNTA CENTRAL
___________________________________________

DESENHO (passo a passo)
1) _______________________________________
2) _______________________________________
3) _______________________________________

PÚBLICO
Quantidade: _____ Perfil: _____________
Como alcanço: ___________________________

MÉTRICA PRINCIPAL
___________________________________________

CRITÉRIO DE SUCESSO (antes de ver resultado)
Validar se: ________________________________
Refutar se: _______________________________

DURAÇÃO E CUSTO
Tempo: _____ dias Custo: R$ _____

RISCOS E VIESES
___________________________________________

RESULTADO (preencher depois)
___________________________________________

DECISÃO
 Persevere Ajuste Pivote Abandone

APRENDIZADOS
___________________________________________
```

---

#### Template: Tabela de técnicas de validação por tipo de hipótese

Esta tabela resume as técnicas de coleta de evidência mais usadas no manual, organizadas pelo tipo de hipótese que cada uma testa melhor. Inspirada na Tabela 1 de Coali et al. (2024), com ajustes para operadores brasileiros.

| Técnica | Descrição | Melhor para... | Amostra típica | Onde no manual |
|---|---|---|---|---|
| **Entrevistas 1-a-1** | Conversas estruturadas de 30-60 min com perguntas no estilo Mom Test | Desenvolvimento de teoria ([[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]]), validação de problema ([[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]]), mecanismos causais da dor ([[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5 (Vol. 2)]]) | 15-30 entrevistados | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]]-3 |
| **Questionários (surveys)** | Série de perguntas fechadas em escala, distribuídas em grupos maiores | Validação de problema em escala, validação de atratividade de proposta | 100-500 respondentes | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]] late, 5-6 |
| **Landing page / smoke test** | Página descrevendo o produto antes dele existir, mede conversão de interesse | Validação de proposta de valor, teste de canal de aquisição, "fake door" | 500-5.000 visitantes | [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] |
| **Pré-venda** | Aceitar pagamento antecipado sem produto pronto | Teste máximo de Willingness to Pay, elimina viés de "eu pagaria" declarado | 10+ pagamentos reais | [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] |
| **Concierge / Wizard of Oz** | Entregar manualmente o valor que a solução automatizaria | Validar solução antes de build, aprender requisitos reais de uso | 3-10 clientes durante 4-8 semanas | [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]]-8 |
| **Protótipo interativo** | Versão clicável/funcional parcial submetida a uso real | Validação de fluxo de solução, identificação de pontos de atrito | 8-15 usuários qualitativo | [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]] |
| **MVP real** | Versão funcional mínima em produção com usuários pagantes | Validação de valor em uso prolongado, retenção, economics | 10+ usuários pagantes, 8-12 semanas | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] |
| **Teste A/B** | Comparação experimental controlada entre 2+ versões | Comparação de features, proposta de valor ou pricing, identificação de causalidade | Centenas a milhares de exposições | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]], 13C |

**Regra de escolha rápida**: quanto menos evidência você tem sobre o problema, mais qualitativa deve ser a técnica (entrevistas > questionários > A/B test). Quanto mais avançada a validação, mais quantitativa (A/B test > questionário > entrevistas). Landing page, pré-venda e concierge ficam no meio, são qualitativas em amostra e quantitativas em conversão.

**Nota de tradução vocabular, Problem / Offer / Solution validation (Ries, 2011).** Quem vem da literatura do Lean Startup encontrará três tipos distintos de validação que este manual cobre mas não nomeia sempre de forma unificada. A correspondência é:

- **Problem validation** (o problema é real, agudo, no ICP certo?) = Fases 2, 3 e parte da 6.
- **Offer validation** (a proposta de valor é atrativa? o cliente quer comprar isso?) = [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] late, 7 e 8.
- **Solution validation** (a solução específica funciona, escala, tem economics?) = Fases 8, 9 e 10.

Essa distinção importa operacionalmente: falhar na **Problem validation** exige pivotar de ICP ou problema (volta à [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]]). Falhar na **Offer validation** pode significar que o problema está certo mas a proposta de valor ou o preço estão errados (volta à [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]] ou 7). Falhar na **Solution validation** sugere que o problema e a oferta estão ok, mas a execução da solução não, iterar dentro da [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]]-9 costuma bastar. Saber qual das três está quebrando muda a decisão de pivot vs. iterate.

---

### SÍNTESE DA FASE 8

O entregável é o conjunto de cartões de experimento executados, cada um com decisão documentada (perseverar, pivotar, ou abandonar). Hipóteses testadas, resultados, aprendizados, próximos passos. O que sobrevive aos testes vira insumo da [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]], que usa os aprendizados para definir a solução. O que é refutado força reabertura da árvore de teoria, e às vezes da escolha de cunha. A [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] é o ponto onde a teoria do negócio enfrenta o mundo. Quem trata isso com rigor produz aprendizado real. Quem trata como teatro de validação produz documentação para investidor, e nada mais.

Para avançar à [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]], pelo menos três a cinco hipóteses bet-the-company devem ter sido testadas e mantidas. Se alguma foi refutada, reavalie a teoria antes de prototipar.

---

## FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES

> [!question] FMF Check da Fase 8
> As ideias de solução que estão emergindo são fruto da sua experiência única com o problema, ou são soluções genéricas que apareceriam em qualquer brainstorm? Se forem genéricas, provavelmente você não está no founder-market-fit que imagina, ou está no estágio em que precisa mergulhar mais fundo no mercado antes de prototipar. Entrevistar dez operadores experientes do setor antes de prototipar é mais barato que prototipar solução genérica.

### O que esta fase cobre

Geração, avaliação e prototipagem de diferentes soluções possíveis para o problema validado. Aqui você não constrói um produto real. Constrói representações: prototipagem em papel, protótipos clicáveis, mockups (telas estáticas de alta fidelidade), storyboards (sequências visuais mostrando o uso em contexto). Para testar a desejabilidade da solução antes de investir em construção.

O entregável é um Dossiê de Solução. Contém três a cinco conceitos de solução avaliados, pelo menos um protótipo interativo, e a recomendação de qual caminho seguir.

> [!abstract] Resumo operacional
> **Entregável:** Dossiê de Solução (Template: Persona com dados (Fase 5, Vol. 2)) com três a cinco conceitos avaliados em Desejabilidade, Viabilidade e Sustentabilidade; pelo menos um protótipo interativo low-fi testado com oito ou mais usuários do ICP; recomendação escrita de qual conceito levar para MVP.
>
> **Sinais de saída:**
> - Dez ou mais ideias geradas em sessão de divergência documentada (Crazy 8s, How Might We, analogias).
> - Matriz Impacto vezes Esforço aplicada com classificação clara dos finalistas.
> - Dois ou mais protótipos low-fi (papel ou Figma) prontos, resolvendo o job central da Fase 4 — não features periféricas.
> - Cinco ou mais (idealmente oito) testes documentados com usuários do ICP, com padrões de uso e reação registrados.
> - Decisão escrita sobre qual conceito vai virar MVP, com lista clara de essencial versus postergável.
>
> **Três armadilhas mais comuns:**
> 1. Apegar-se à primeira ideia e pular a divergência — diverge dói, mas a primeira ideia raramente é a melhor.
> 2. Prototipar com alta fidelidade cedo demais — protótipo bonito esconde problemas de fluxo que o low-fi revelaria em horas.
> 3. Ouvir opinião em vez de observar comportamento — o que importa é onde o usuário trava, não se "achou bonito" ou se "gostou".

### POR QUE

Entre entender o problema e construir a solução, existe um abismo de decisões. Quase todo problema validado pode ser resolvido de várias formas. App. SaaS. Serviço. Marketplace. Hardware. Comunidade. Curso. Pular direto para "app" é a preguiça que custa caro. Explorar alternativas gera insight, e reduz risco.

Prototipagem é a forma mais barata de testar. Com um dia de trabalho, e zero código, você consegue feedback sobre experiência, fluxo, e desejabilidade.

> [!warning] Construir a solução errada para o problema certo
> Antes da Tesla, existiam carros elétricos, e ninguém os queria de forma massiva. Não porque o problema (mobilidade limpa) fosse irreal. Mas porque as montadoras tradicionais assumiram que o cliente trocaria desempenho e estética por consciência ambiental. A Tesla atacou o mesmo problema com uma solução que não pedia essa troca. A lição transferível: validar o problema não te dá cheque em branco sobre a solução. Um problema real comporta várias hipóteses de solução. E apenas algumas delas funcionam. Teste problema e solução separadamente. E desconfie quando o resultado do primeiro se transferir automaticamente para o segundo. Esta é a tese central da Fase 8.

> [!note] Capítulo 3 — TRL e CRL
> Se a solução candidata envolve tecnologia nova (hardware, deeptech, biotech, energia), o nível de maturidade tecnológica (TRL) e comercial (CRL) é variável crítica antes de escolher qual conceito prototipar. O [[#CAPÍTULO 3 — TRL E CRL: MATURIDADE TECNOLÓGICA E DE MERCADO|Capítulo 3 — TRL e CRL]] define os nove níveis de TRL e os estágios de CRL correspondentes, e ajuda a calibrar o escopo do protótipo ao nível de maturidade real — evitando o erro de prototipar solução que requer TRL 6+ quando o projeto está em TRL 2.

> [!note] Capítulo 1 — Científico vs Lean Startup
> Esta fase aplica a lógica do ciclo Lean em seu ponto mais puro: prototipar barato, testar cedo, iterar. O [[#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 — Científico vs Lean Startup]] situa esse ciclo dentro da distinção entre validação qualitativa (protótipo, teste de fluxo) e validação quantitativa (métricas de uso, dados de retenção). Relevante especialmente para definir quando parar de iterar protótipos e comprometer recursos para o MVP.

### Quando usar

Comece depois da [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] confirmar que o problema é real. Termine quando tiver um protótipo interativo testado com pelo menos oito usuários, e uma direção clara de qual solução construir. Revisite antes de cada grande decisão de redesign.

### Quem envolve

O executor é você. Com apoio de designer (freelancer ou sócio) se tiver. Os participantes são oito a doze usuários do ICP, para testar protótipos. O decisor é você.

### Como executar

Sete passos.

```mermaid
flowchart LR
    subgraph DIV["Fase de Divergência<br/>(passos 1–2)"]
        D1["Crazy 8s<br/>8 ideias em 8 minutos"]
        D2["How Might We<br/>Reformular JTBDs"]
        D3["Analogias<br/>Outros setores"]
        D1 & D2 & D3 --> POOL["Pool de ideias<br/>20–40 candidatas"]
    end

    subgraph CONV["Fase de Convergência<br/>(passos 3–4)"]
        POOL --> VOTE["Priorizar<br/>impacto vs esforço"]
        VOTE --> SELECT["Selecionar 1–3<br/>para prototipar"]
    end

    subgraph PROTO["Prototipagem<br/>(passos 5–6)"]
        SELECT --> FID{"Fidelidade<br/>necessária?"}
        FID -->|Concept test| PAPER["Protótipo em papel<br/>Horas"]
        FID -->|Fluxo e UX| CLICK["Protótipo clicável<br/>Figma, dias"]
        FID -->|Serviço complexo| BLUEPRINT["Service blueprint<br/>Dias"]
    end

    subgraph TEST["Teste<br/>(passos 6–7)"]
        PAPER & CLICK & BLUEPRINT --> USER["5+ usuários<br/>testam"]
        USER --> INSIGHT["Capturar aprendizados<br/>e iterar"]
        INSIGHT -->|Hipótese validada| NEXT(["→ Fase 9<br/>Testes de solução"])
        INSIGHT -->|Hipótese refutada| DIV
    end
```

#### Passo 1, divergir com técnicas estruturadas

Não se limite ao que você imaginou. Faça sessões de brainstorm estruturadas. Sozinho ou com duas a três pessoas. Quatro técnicas úteis.

Crazy 8s (oito ideias em oito minutos, uma por minuto). Força quantidade sobre qualidade.

How Might We, "como poderíamos?". Reformule o *job to be done* em três a cinco perguntas abertas. Por exemplo: "Como poderíamos ajudar o dono de restaurante a encerrar o dia sem preocupação?"

Extremos. E se a solução fosse super-premium (R$ 5.000 por mês)? E se fosse de graça? E se fosse física? E se fosse humana (serviço)?

Analogias. Como outros setores resolvem problemas parecidos? O que o Uber ensinou sobre marketplaces pode se aplicar? O que o iFood ensinou sobre logística distribuída?

> [!tip] Meta da divergência
> Quinze a trinta ideias no papel, mesmo que a maioria seja ruim. A qualidade emerge da quantidade.

#### Passo 2, avalie e reduza (convergir)

Avalie cada ideia em três dimensões.

Desejabilidade. O usuário quer isso? Baseado em tudo que você aprendeu nas Fases 2 e 3.

Viabilidade. Você consegue entregar? Capacidades técnicas, financeiras, regulatórias.

Sustentabilidade. O modelo econômico fecha? Preço viável, custo viável, margem razoável.

Dê nota de um a cinco em cada dimensão. Multiplique. Selecione os três a cinco conceitos com maior pontuação.

> [!note] DVS e matriz Impacto-Esforço são complementares
> A avaliação por Desejabilidade, Viabilidade, e Sustentabilidade (DVS) é qualitativa. Útil para reduzir trinta ideias para cinco. Já a matriz Impacto vezes Esforço (que aparece no exemplo prático mais adiante) é visual. Útil para priorizar quais protótipos rodar primeiro entre os finalistas. Use as duas em sequência. Primeiro DVS para filtrar. Depois Impacto-Esforço para ordenar.

#### Passo 3, detalhe os 3 a 5 conceitos escolhidos

Para cada conceito, escreva em uma página seis itens. Nome do conceito (dê nome, facilita comunicação). Descrição em um parágrafo. Principal diferencial. Requisitos técnicos principais. Modelo de monetização imaginado. Principais riscos.

> [!note] Capítulo 1 (Vol. 2) — Psicologia do Consumidor Brasileiro
> A reação do usuário ao protótipo é moldada por fatores que vão além do fluxo. O [[IGNICAO-Vol-2-Descoberta-e-Mercado#CAPÍTULO 1 — PSICOLOGIA DO CONSUMIDOR BRASILEIRO — COMPORTAMENTO, DECISÃO E CONVERSÃO|Capítulo 1 — Psicologia do Consumidor Brasileiro (Vol. 2)]] cobre como o consumidor brasileiro processa proposta de valor — ancoragem de preço, mobile-first, e o peso da confiança percebida na primeira impressão. Leia antes de definir quais elementos incluir no protótipo de teste.

#### Passo 4, escolha 1 ou 2 conceitos para prototipar

Escolha o(s) com maior potencial percebido. Defina o formato do protótipo. Seis opções.

##### Storyboard

Sequência de seis a doze quadros mostrando a pessoa usando a solução em contexto. Útil para validar o fluxo geral.

##### Wireframes em papel ou ferramenta

Wireframes (esboços de tela que mostram estrutura sem detalhes visuais) são úteis para validar arquitetura de informação.

##### Mockups de alta fidelidade

Telas desenhadas com detalhe visual. Figma ou similar.

##### Protótipo clicável

Telas com fluxo de navegação. Pode ser feito em Figma, Marvel, Proto.io.

##### Protótipo em vídeo

Vídeo explicando a solução como se ela existisse. Excelente para testar com público amplo.

##### Protótipo de serviço (service blueprint)

Para negócios de serviço. Mapeie touchpoints (pontos de contato entre cliente e serviço), atores, sistemas, e tempo.

> [!tip] Para a maioria dos casos no início, protótipo clicável em Figma
> É o melhor custo-benefício. Permite testar fluxo real de navegação, sem precisar de código. Designer freelancer faz em dois ou três dias.

#### Passo 5, prepare roteiro de teste de protótipo

Cinco partes na estrutura do roteiro.

Contextualização (dois minutos). Descreva a situação real em que a pessoa estaria usando.

Tarefas (quinze minutos). Dê três a cinco tarefas para a pessoa executar no protótipo. Por exemplo: "Você acabou de fechar o caixa do dia. Use essa ferramenta para checar se houve alguma divergência."

Observação silenciosa. Deixe a pessoa errar. Anote onde ela travou.

Pensar em voz alta. Peça que verbalize o que está pensando enquanto navega.

Perguntas pós-teste (dez minutos). O que foi intuitivo? O que foi confuso? Usaria? Pagaria? Quanto?

> [!note] Capítulo 13 (Vol. 4) — Customer Experience
> O protótipo é o primeiro contato do usuário com a experiência do produto. O [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 13 — CUSTOMER EXPERIENCE: DA JORNADA AO NPS AO CHURN ZERO|Capítulo 13 — Customer Experience (Vol. 4)]] cobre como estruturar o onboarding (processo de ativação do novo usuário) desde o protótipo — o que o usuário precisa entender e sentir nos primeiros minutos determina retenção futura. Use os princípios de onboarding do DT para guiar quais tarefas incluir no roteiro de teste.

#### Passo 6, teste com 8 a 12 usuários do ICP e itere

A partir do oitavo teste, você começa a ver padrões claros. Se você achar que três testes bastam, está ignorando a diversidade de reações.

Não espere terminar todos os testes para iterar. Depois de cada ciclo de três a quatro testes, ajuste o protótipo com base nos padrões observados e teste a nova versão com os próximos três a quatro usuários. Esse loop curto (testar, ajustar, testar de novo) entrega muito mais aprendizado que oito testes seguidos da mesma versão.

#### Passo 7, consolide no Dossiê de Solução

Documento contendo seis itens. Conceitos gerados e avaliados. Conceitos selecionados, detalhados. Protótipos (ou links). Resumo dos testes com usuários (padrões observados, problemas encontrados, verbatim). Recomendação de conceito a construir, com justificativa. Riscos e incógnitas remanescentes.

> [!tip] Templates Operacionais — Template do Dossiê de Solução (Template da Fase 5, Vol. 2)
> O [[IGNICAO-Vol-2-Descoberta-e-Mercado#Template: Persona com dados|Template: Persona com dados (Vol. 2)]] contém o template preenchível do Dossiê de Solução com os seis campos acima em formato estruturado. Use-o para garantir que a documentação de cada conceito avaliado seja consistente entre si e comparável na tomada de decisão do Passo 4.

### Os sete passos aplicados, sessão de ideação do PadariaPro

Para tornar o método concreto, este é o desenrolar dos passos 1 a 6 aplicados à mesma ideia das fases anteriores.

O *job* central, identificado na [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5 (Vol. 2)]]: "Me devolver horas de foco executivo, sem aumentar o desperdício."

Crazy 8s, fragmento de oito ideias em oito minutos. App mobile para o gerente fazer pedido por voz. WhatsApp bot que pergunta o estoque diário e faz pedido automático. Dashboard web com previsão mais um clique para confirmar pedido. Etiquetas inteligentes (sensor) em sacos de farinha. Câmera no estoque com visão computacional. E-mail diário com "pedido sugerido" que requer aprovação. Integração com caixa, deduz estoque automaticamente. Parceria com fornecedor: o fornecedor envia semanalmente baseado em consumo.

Matriz Impacto vezes Esforço aplicada às oito ideias. Alto impacto e baixo esforço: a número 2 (WhatsApp bot) e a número 6 (e-mail diário). Prototipar essas duas. Alto impacto mas alto esforço: a número 3 (dashboard) e a número 7 (integração com caixa). Versão reduzida vale prototipar. Descarte inicial: a número 4 (etiquetas — caro, complexo) e a número 5 (câmera — infraestrutura). Guardar para fase pós-PMF.

**Protótipo número 2, WhatsApp Bot (low-fi).**

Sequência de seis mensagens em PDF, simulando o diálogo bot-usuário:

> *Bot:* "Bom dia, Fábio! Segundo o seu histórico, você vai precisar de 120 kg de farinha T1 esta semana. Confirmar pedido com Anaconda por R$ 2.340? (sim/não/ajustar)"
>
> *Usuário:* "Ajustar para 140 kg"
>
> *Bot:* "Ok, 140 kg por R$ 2.730. Confirmar? (sim/não)"
>
> *Usuário:* "Sim"
>
> *Bot:* "Pedido enviado. Entrega quarta-feira."

**Protótipo número 6, E-mail Diário.**

Imagem de um e-mail simulado, com lista de itens sugeridos, quantidades, valores, e dois botões. "Confirmar pedido" e "Ajustar".

**Testes com cinco usuários, reação bruta.**

| Usuário | Reação ao 2 (WhatsApp) | Reação ao 6 (E-mail) | Preferência |
|---|---|---|---|
| Fábio (Campinas) | "Isso é incrível, resolveria o meu dia" | "E-mail eu ignoro" | 2 |
| João (SP) | "Bom, mas e se errar?" | "Mais formal, mais bonito" | Empate |
| Paula (SP) | "O meu gerente não vai usar WhatsApp assim" | "E-mail ninguém abre" | Nenhum |
| Roberto (RM) | "Perfeito, WhatsApp é onde a gente vive" | "Fraco" | 2 |
| Márcia (Campinas) | "Confirmar compra de R$ 2 mil pelo WhatsApp me deixa insegura" | "Mais segurança visual" | 6 |

O aprendizado principal. WhatsApp é preferido pela conveniência, mas gera ansiedade em valores altos. E-mail gera segurança visual, mas tem problema de abertura.

> [!important] O insight crítico do teste
> Talvez a solução seja híbrida. WhatsApp para notificação, mais confirmação em app ou web para compras acima de R$ 1 mil. Não dicotomia entre os dois. Os testes raramente confirmam a hipótese binária. Geralmente revelam síntese inesperada.

### Caso brasileiro real, prototipagem na PlayKids

A PlayKids, fundada em 2013 por Eric Acher, Marcelo Roque e Gabriel Borges em São Paulo (parte do grupo Movile), construiu um aplicativo de conteúdo educativo infantil que chegou a mais de cem milhões de downloads e a presença em mais de 180 países. No início, o time precisava testar o fluxo de uso com crianças pequenas — público que não verbaliza preferência da forma que adultos fazem em entrevistas tradicionais.

A decisão foi simples e barata. Em vez de construir MVP digital, imprimiram telas em papel e pediram a crianças de diferentes faixas etárias (quatro, seis e oito anos) para "usar" o papel, observando como cada uma interpretava as telas, onde travavam, e que padrões espontâneos emergiam.

A descoberta foi cirúrgica. O fluxo inicial, pensado em padrão adulto (menu → categoria → item), não funcionava com crianças menores. Elas esperavam ver tudo numa tela única com imagens grandes e tocar diretamente no que queriam. O time redesenhou antes de escrever uma linha de código. Esse padrão de design por imersão visual virou marca registrada do produto e foi parte do que sustentou o crescimento internacional.

A lição transferível. Protótipo em papel revela falhas de experiência por algumas dezenas de reais (custo das impressões) que revelariam por dezenas de milhares depois de desenvolvido. Em produtos para públicos que não verbalizam bem (crianças, idosos, baixa escolaridade, falantes de outras línguas), observação supera entrevista.

### PERGUNTAS A RESPONDER

- Quais são as soluções alternativas possíveis para o problema?
- Qual conceito tem a melhor combinação de desejabilidade, viabilidade, e sustentabilidade?
- Como o usuário reage quando vê uma versão tangível da solução?
- Onde o usuário trava, se confunde, se encanta?
- O que tem que estar necessariamente no MVP? O que pode ficar para depois?
- Qual a linguagem visual e narrativa que o usuário entende e reconhece?

> [!tip] Opportunity Canvas e MVP Canvas como par de ferramentas desta fase
> Antes da sessão de divergência (Passo 1), use o Opportunity Canvas (Fase 9) para estruturar oportunidades por desejabilidade, viabilidade e usabilidade — priorizando onde prototipar. Antes de qualquer linha de código, use o MVP Canvas (Fase 9) para definir hipótese central, segmento do MVP, tipo de artefato mais barato e critério de invalidação. Veja instruções e casos em [[#Canvas: Opportunity Canvas (Jeff Patton, 2014)|Canvas: Opportunity Canvas (Jeff Patton, 2014)]] e [[#Canvas: MVP Canvas (Tristan Kromer)|Canvas: MVP Canvas (Tristan Kromer)]].

### SAÍDA DESTA FASE

Você concluiu a [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]] quando todos os critérios abaixo estão cumpridos.

- [ ] Dez ou mais ideias geradas em sessão de divergência documentada (Crazy 8s, How Might We, Extremos, Analogias). Sem prender à primeira ideia.
- [ ] Avaliação DVS (Desejabilidade, Viabilidade, Sustentabilidade) aplicada em todas as ideias, e Matriz Impacto vezes Esforço aplicada nos finalistas.
- [ ] Três a cinco conceitos detalhados (nome, descrição, diferencial, requisitos técnicos, modelo de monetização, riscos).
- [ ] Dois ou mais protótipos low-fi (papel ou Figma clicável) prontos, resolvendo o job central da Fase 4 — não features periféricas.
- [ ] Cinco ou mais testes documentados com usuários do ICP (idealmente oito ou mais).
- [ ] Insights qualitativos claros: padrões de uso, onde travam, onde se confundem, onde se encantam (não só "gostaram").
- [ ] Taxa de conclusão de tarefas sem ajuda acima de 70%; tempo de execução real não excede a expectativa pré-teste em mais de 50%.
- [ ] Mais de 50% dos testados demonstrando intenção real de uso após ver o protótipo.
- [ ] Disposição a pagar coletada via "quanto faria sentido cobrar por isso?" (em vez de "você pagaria?"): 70% ou mais sugerem valor igual ou superior ao preço-alvo.
- [ ] Decisão escrita sobre qual conceito vai virar MVP, com justificativa e lista clara de essencial versus postergável.

> [!warning] Critério de saída
> Se qualquer um desses itens falha, não avance. Resolva antes.

**Primeiros passos práticos.**

1. Reservar duas horas para sessão de ideação. Crazy 8s (oito ideias em oito minutos), mais detalhamento das três melhores.
2. Prototipar em Figma ou em papel as duas a três ideias mais promissoras. Low-fi. Não perca tempo em fidelidade.
3. Agendar cinco sessões com usuários ICP, mostrando os dois ou três protótipos lado a lado, e pedindo reação.
4. Documentar reações. O que chamou atenção. O que confundiu. O que ignoraram.

### Armadilhas

Apegar-se à primeira ideia. A primeira ideia raramente é a melhor. Divergir antes de convergir dói. Mas paga.

Prototipar com alta fidelidade cedo demais. Um protótipo bonito pode esconder problemas de fluxo. Comece em baixa fidelidade.

Testar com usuários errados. Teste com o ICP. Amigo designer dando feedback não substitui usuário real.

Ouvir opinião em vez de observar comportamento. O que importa é onde o usuário trava. Não se ele "acha bonito".

Usar o teste como confirmação. O objetivo é encontrar problemas, não receber elogios. Se ninguém achou nada errado, você fez um teste fraco.

Construir direto sem prototipar. "Já sei como vai ser." Constatação final: você descobre coisas no protótipo que não imagina na cabeça.

---

### FERRAMENTAS DESTA FASE

Quatro essenciais para a fase; o restante fica como referência consultiva nos Manuais de Frameworks das Fases.9-Frameworks da Fase 17, Vol. 7. Canvases complementares: Canvas: Opportunity Canvas (Jeff Patton, 2014) (Fase 9) e Canvas: MVP Canvas (Tristan Kromer) (Fase 9).

**Essenciais para a Fase 8:**

- **Design Thinking Double Diamond** (IDEO e British Design Council, 2005) — Discover, Define, Develop, Deliver. Diverge e converge duas vezes. Estrutura macro da fase. Framework: Design Thinking Double Diamond (British Design Council, 2005) (Fase 9).
- **Google Design Sprint** (Jake Knapp, 2016) — cinco dias de problema a solução testada com usuários. Use quando precisar comprimir a fase em uma semana focada. Framework: Google Design Sprint (Jake Knapp, 2016) (Fase 9).
- **Continuous Discovery Habits** (Teresa Torres, 2021) — entrevistas semanais com usuários, em paralelo com desenvolvimento. Para ritmo contínuo de aprendizado durante prototipagem e teste. Framework: Continuous Discovery Habits (Teresa Torres, 2021) (Fase 17, Vol. 7).
- **Opportunity Solution Tree** (Teresa Torres) — conecta outcome, oportunidades, soluções, experimentos em árvore. Use antes da divergência para mapear o espaço de soluções a partir das oportunidades validadas na Fase 7. Framework: Opportunity Solution Tree (Teresa Torres) (Fase 9).

**Complementares (consulte conforme o caso):**

- Working Backwards e PR-FAQ (Amazon), Dual-Track Agile (Marty Cagan), Impact Mapping (Gojko Adzic), Personas (Cooper), Customer Journey Mapping, Service Blueprinting (Shostack). Detalhamento e quando usar cada uma em Framework: Personas (Alan Cooper, 1998) (Fase 5, Vol. 2) a Framework: Impact Mapping (Gojko Adzic, 2012) (Fase 9).

---


---

### MÉTRICAS E BENCHMARKS DESTA FASE (FASE 9)

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Variantes de solução testadas | Quantas ideias de solução avaliadas antes de escolher | ≥ 5 (Crazy 8s) |
| Fidelidade do protótipo | Nível de acabamento necessário para validar hipótese | Mínimo que responde à pergunta |
| Custo do protótipo | Tempo e recursos investidos antes de teste | Semanas, não meses |
| Feedback coletado | Usuários que testaram o protótipo | ≥ 5 por iteração |

---

### MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE

> [!tip] Uso autocontido neste volume
> Todos os frameworks abaixo estão detalhados integralmente com origem, estrutura, passo a passo de aplicação, exemplo brasileiro e armadilhas para execução imediata nesta **Fase 9**.

#### Framework: Opportunity Solution Tree (Teresa Torres)

##### Origem

Teresa Torres desenvolveu OST ao longo dos anos 2010s, consolidando em *Continuous Discovery Habits*. Inspirada em work breakdown structures e em árvores de decisão, adaptada para discovery de produto.

##### O que é

Ferramenta visual em formato de árvore que conecta:

- Outcome desejado (topo).
- Opportunities (necessidades/dores do cliente que, se endereçadas, movem o outcome).
- Solutions (ideias de como endereçar cada oportunidade).
- Experiments (como testar cada solução).

##### Princípios / estrutura

```text
 OUTCOME
 |
 ----------------------------------------
 | | | |
OPPORTUNITY 1 OPPORTUNITY 2 OPPORTUNITY 3...
 | | |
 --- --- ---
 | | |
SOLUTION A SOLUTION B SOLUTION C
 | | |
EXPERIMENT EXPERIMENT EXPERIMENT
```

Princípios-chave:

- Oportunidades vêm de pesquisa com clientes, não de brainstorm interno.
- Múltiplas soluções por oportunidade: força comparação.
- Priorização por impacto no outcome, não por "ideia mais legal".
- Experimentos vêm antes de execução completa.

##### Como aplicar do jeito certo

Passo 1, Formule outcome mensurável.

Passo 2, Colete oportunidades via entrevistas com clientes (não speculation).

Passo 3, Para cada oportunidade, gere 3-5 soluções.

Passo 4, Priorize oportunidades por impacto potencial no outcome.

Passo 5, Para oportunidade top, priorize solução com melhor risk/reward.

Passo 6, Desenhe experimento mais rápido/barato para testar premissas.

Passo 7, Atualize árvore com aprendizados.

##### Exemplo aplicado

OST para outcome "aumentar NRR de 95% para 110%":

- Oportunidade 1: clientes não descobrem features avançadas (NRR impactado por baixo engagement).
- Solução 1.1: tutorial contextual.
- Solução 1.2: emails de ativação segmentados.
- Solução 1.3: AI-recommended features.
- Experimento prioritário: A/B test de 1.2 (mais simples, menor risco).

- Oportunidade 2: preços dos upgrades desconhecidos.
- Solução 2.1: página de pricing na app.
- Solução 2.2: in-app prompts para upgrade.
- Experimento: 2.1 primeiro.

- Oportunidade 3: contato com CS só na crise (não expansion).
- Solução 3.1: QBRs proativos.
- Solução 3.2: health score + outreach.
- Experimento: 3.2.

##### Erros comuns

Oportunidades = features: oportunidade é problema/necessidade do cliente, feature é solução, Árvore estática: não atualiza com pesquisa contínua, Soluções pré-decididas: árvore é retroajustada para justificar decisão.

##### Quando NÃO usar

Pré-PMF onde outcome ainda é ambíguo, Times que ainda não têm disciplina de discovery contínuo.

##### Leitura adicional

- Torres, T. (2021). *Continuous Discovery Habits*. Product Talk.

---

#### Framework: Google Design Sprint (Jake Knapp, 2016)

##### Origem

Jake Knapp desenvolveu o Design Sprint no Google Ventures (GV) entre 2012-2016, aplicando em dezenas de startups do portfolio. *Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days* (Knapp, Zeratsky & Kowitz, 2016) consolidou o método publicamente. Virou padrão em product discovery global.

##### O que é

**Processo de 5 dias** para ir de problema a solução testada. Cada dia tem atividades específicas:

- Segunda: entender o problema (mapear, expert interviews).
- Terça: gerar ideias (sketch individual).
- Quarta: decidir (votação estruturada, storyboard).
- Quinta: prototipar.
- Sexta: testar com 5 usuários reais.

Resultado: aprendizado rápido sobre direção promissora ou má.

##### Princípios / estrutura

Participantes: time de 5-7 pessoas (decisor, facilitador, designer, engineer, PM, outros especialistas).

Time boxed: 5 dias, não mais. Evita over-engineering.

Foco: 1 problema grande, não roadmap geral.

Método estruturado: atividades pré-definidas, minimiza discussão improdutiva.

##### Como aplicar do jeito certo

Segunda-feira: map do problema, long-term goal, sprint questions, 3-5 expert interviews, "How might we" notes, target definido.

Terça-feira: lightning demos (inspiração), sketch individual (4 etapas: notes, ideas, crazy 8s, solution sketch).

Quarta-feira: heatmap de sketches, speed critique, voto, supervote do decisor, storyboard.

Quinta-feira: prototype (facade, 10 horas). Pode ser Figma clicável, Keynote, ou realmente HTML/CSS.

Sexta-feira: testes com 5 usuários (entrevistas de 60 min, think-aloud).

##### Exemplo aplicado

Sprint em fintech early-stage para feature de "análise de gastos":

Segunda: define problema (usuários abandonam app após ver extrato sem aprendizados). Sprint question: "faremos o insight tão útil que users voltam diariamente?"

Terça: sketches individuais com ideias variadas (categorização automática, comparação com média, alertas, gráficos, AI suggestions).

Quarta: storyboard escolhido: categorização + comparação com pares + alerta de anomalia.

Quinta: prototype clicável em Figma, 8 telas.

Sexta: 5 entrevistas. Resultado: categorização adorada, comparação com pares gera desconforto, alerta útil mas intrusivo.

Decisão: lançar MVP com categorização, testar comparação com UI opcional, iterar em alerta.

##### Erros comuns

Extender o sprint para 2-3 semanas: perde rigor, decisões se arrastam, Decisor não participa: sem supervote, sprint trava, Não testar com usuários reais na sexta: 5 entrevistas são o coração do sprint, Decisor muda decisão na semana seguinte: trabalho jogado fora.

##### Quando NÃO usar

Problemas sem espaço para sprint (crise ativa, bug urgente), Decisões triviais (overkill), Quando não é possível liberar 5-7 pessoas por uma semana inteira.

##### Leitura adicional

- Knapp, J., Zeratsky, J. & Kowitz, B. (2016). *Sprint*. Simon & Schuster.
- gv.com/sprint, recursos online do Google Ventures.

---

#### Framework: Design Thinking Double Diamond (British Design Council, 2005)

##### Origem

Design Thinking tem raízes em Stanford d.school (David Kelley) e IDEO (fundada por Kelley em 1991). O **Double Diamond** propriamente é a visualização formal desenvolvida pelo British Design Council em 2005, após estudo dos processos de design de empresas como IDEO, Fjord e Seymourpowell — adaptando o modelo divergência-convergência de Béla Bánáthy (1996). A forma "diamante" já existia em IDEO no final dos anos 1990s (David Duncanson) sem esse nome. IDEO popularizou design thinking de forma mais ampla em produtos e serviços. Aplicado em empresas (P&G, Airbnb, Bank of America) e governos.

##### O que é

Processo de design em 4 fases, visualizado como dois diamantes:

Diamante 1, Discover → Define (o problema certo)

- Discover (abrir): pesquisa ampla, empatia, observação.
- Define (fechar): sintetizar, definir problema específico a resolver.

Diamante 2, Develop → Deliver (a solução certa)

- Develop (abrir): gerar muitas soluções possíveis.
- Deliver (fechar): selecionar, prototipar, testar.

Princípio-chave: **divergir antes de convergir** em cada diamante.

##### Princípios / estrutura

3 lentes de IDEO:

- Desirability: pessoas querem?
- Viability: negócio fecha?
- Feasibility: conseguimos construir?

Solução boa está na interseção.

5 fases operacionais (versão Stanford):

1. Empathize (empatizar).
2. Define (definir problema).
3. Ideate (ideias).
4. Prototype.
5. Test.

##### Como aplicar do jeito certo

Passo 1, Empathize: pesquisa profunda com usuários (pode ser 2-6 semanas).

Passo 2, Define: sintetize em "point of view" statement, "[Usuário] precisa [necessidade] porque [insight]".

Passo 3, Ideate: brainstorm extenso, "crazy 8s", "worst possible idea", outras técnicas.

Passo 4, Prototype: baixa fidelidade, rápido e descartável.

Passo 5, Test: com usuários reais, iterate.

##### Exemplo aplicado

Aplicação em serviço de atendimento ao cliente (case real IDEO):

- Empathize: shadowing de clientes e representantes por semanas.
- Define: "Clientes com problema urgente precisam de solução rápida porque estresse amplifica frustração."
- Ideate: 50+ ideias, app priorizando urgentes, chat humano proativo, "salas" para casos complexos, etc.
- Prototype: 5 protótipos de baixa fidelidade.
- Test: 15 usuários, refina para 2 conceitos, itera.

##### Erros comuns

Pular empatia: vai para ideação direto, soluciona problema errado, Ideate sem divergência real: grupo converge cedo na ideia do chefe, Prototype alto fidelidade muito cedo: desperdício quando iteração ainda necessária, Test com não-usuários: feedback enganoso.

##### Quando NÃO usar

Decisões quantitativas (design thinking é qualitativo), Problemas técnicos puros (engenharia, não design), Contextos com urgência extrema.

##### Leitura adicional

- Brown, T. (2009). *Change by Design*. HarperBusiness.
- IDEO (2015). *The Field Guide to Human-Centered Design* (gratuito online).

---

#### Framework: Impact Mapping (Gojko Adzic, 2012)

##### Origem

Gojko Adzic, consultor de software e autor de *Specification by Example*, publicou *Impact Mapping* em 2012 como resposta a um problema recorrente em desenvolvimento de produto: times que entregam features corretas em projetos errados. O framework surgiu da observação de que equipes de tecnologia frequentemente perdem a conexão entre o trabalho diário (stories, tasks) e os objetivos de negócio reais. Impact Mapping foi adotado amplamente em contextos ágeis, especialmente em ambientes onde stakeholders múltiplos têm visões diferentes sobre prioridade. Combina planejamento estratégico com design de produto numa ferramenta visual simples.

##### O que é

Mapa mental hierárquico de quatro níveis que responde a quatro perguntas encadeadas: **Por quê** (o objetivo de negócio que justifica o trabalho), **Quem** (os atores — usuários, clientes, parceiros — que influenciam ou são impactados pelo objetivo), **Como** (os comportamentos ou impactos que cada ator precisa ter ou mudar para contribuir com o objetivo), **O quê** (as entregas — features, conteúdos, integrações — que produzem cada impacto). A estrutura força a equipe a rastrear cada entrega até um comportamento de ator real e um objetivo de negócio real.

##### Princípios / estrutura

Impact Mapping é construído colaborativamente em sessão com product manager, stakeholders de negócio e representantes técnicos. O mapa é deliberadamente incompleto — lista as apostas de impacto mais relevantes, não todas as possibilidades. O impacto (nível "Como") é o coração do framework: é onde a maioria dos roadmaps falha, pulando direto de objetivo para feature sem mapear qual comportamento do usuário a feature deve mudar. Revisão do mapa a cada ciclo de planejamento revela hipóteses validadas vs. falsificadas.

##### Como aplicar do jeito certo

Passo 1, Definir o objetivo em formato SMART com prazo e métrica (ex.: "aumentar conversão de trial para pago de 8% para 15% em 90 dias"). Passo 2, Listar todos os atores relevantes — quem pode contribuir para ou contra esse objetivo? (usuário trial, equipe de CS, parceiro de integração, etc.) Passo 3, Para cada ator, mapear os impactos — que comportamento do ator contribuiria para o objetivo? (ex.: "usuário trial completa onboarding em menos de 10 min") Passo 4, Para cada impacto, listar as entregas que podem produzi-lo — features, conteúdo, automação. Passo 5, Priorizar: quais entregas têm maior probabilidade de produzir o impacto com menor esforço? Passo 6, Usar mapa como critério de aceite — uma feature que não aparece no mapa ou não está conectada a um impacto real não entra no sprint.

Exemplo aplicado, startup de RH tech (SaaS para PMEs). Objetivo: "aumentar DAU de 200 para 500 em 60 dias." Atores: gerente de RH (decisor de uso), funcionário (usuário do portal), time de CS (intermediário). Impactos para gerente: "acessa relatório de ponto sem ligar para CS" — gera entrega "relatório de ponto one-click". Impactos para funcionário: "marca ponto pelo celular sem login complexo" — gera entrega "login biométrico". CS: "resolve dúvida sem escalar para produto" — gera entrega "base de conhecimento interna". O mapa revelou que dois recursos de alta prioridade no backlog (painel de análise preditiva, integração com TOTVS) não estavam conectados a nenhum impacto no DAU — foram despriorizados.

##### Erros comuns a evitar

(1) Confundir impacto com entrega — "construir dashboard" é entrega, não impacto. Impacto é "gerente toma decisão de contratação com base em dados do dashboard." (2) Objetivos vagos — "melhorar engajamento" não é objetivo, é direção. Objetivo requer métrica e prazo. (3) Mapa muito grande — um Impact Map útil tem 1 objetivo, 3-7 atores, 2-5 impactos por ator. Se tiver mais, está descrevendo todo o produto, não uma sessão de planejamento. (4) Não revisitar — mapa criado em planejamento trimestral e nunca mais olhado não orienta nada. (5) Atores apenas externos — time de vendas, CS, suporte são atores internos que frequentemente têm impactos críticos.

##### Quando não usar

Para planejamento operacional de curto prazo (o que fazemos essa semana) — use sprint planning. Para decisões técnicas de arquitetura sem impacto direto em comportamento de usuário. Em projetos altamente regulados com escopo fixo por contrato onde o "por quê" já está determinado externamente.

##### Leitura adicional

Adzic, G. (2012). *Impact Mapping: Making a Big Impact with Software Products and Projects*. Provoking Thoughts. Adzic, G. & Evans, D. (2014). *Fifty Quick Ideas to Improve Your User Stories*. Provoking Thoughts.

---

#### Framework: Kano Model (Noriaki Kano, 1984)

##### Origem

Noriaki Kano, professor da Tokyo University of Science, publicou o modelo em 1984 em estudos sobre qualidade no Japão pós-guerra. Responde à pergunta: **nem todas as features são iguais, algumas são obrigatórias, outras encantam, outras são indiferentes**. Hoje é padrão em product management.

##### O que é

Framework que classifica features em **5 categorias** baseado em impacto na satisfação do cliente:

1. Basic (must-haves): cliente não nota quando presente, frustra quando ausente. Ex.: senha funcionando em login.

2. Performance (one-dimensional): mais é melhor, satisfação cresce linearmente com presença. Ex.: velocidade do app.

3. Excitement (delighters): cliente não espera, quando presente, cria entusiasmo. Pode virar basic com tempo (ex.: câmera de ré em carros era excitement em 2010, hoje é basic).

4. Indifferent: cliente não se importa, esforço desperdiçado.

5. Reverse: mais piora. Ex.: muitas notificações podem diminuir satisfação.

##### Princípios / estrutura

Pesquisa Kano: questionário de dupla formulação para cada feature:

- "Como você se sentiria SE o produto TIVESSE feature X?"
- "Como você se sentiria SE o produto NÃO TIVESSE feature X?"

Respostas (Kano 5-point scale): "Eu gostaria", "É esperado", "Neutro", "Posso aceitar", "Eu não gostaria".

Cruzar respostas gera classificação.

##### Como aplicar do jeito certo

Passo 1, Liste 10-20 features candidatas.

Passo 2, Pesquisa com 100+ respondentes do ICP.

Passo 3, Classifique cada feature.

Passo 4, Priorize:

- Basic: obrigatório. Resolver.
- Performance: investir proporcionalmente ao valor.
- Excitement: 1-2 delighters diferencia, mais dilui foco.
- Indifferent: não construir.
- Reverse: evitar ou ser opcional.

Passo 5, Re-classifique periodicamente: excitement de hoje é basic de amanhã (ratchet effect).

##### Exemplo aplicado

Kano survey para SaaS financeiro, 15 features candidatas:

- Login seguro com 2FA: **Basic** (obrigatório).
- Dashboard rápido (< 2s): **Performance** (importante).
- Integração com bancos: **Basic** em SaaS financeiro brasileiro (espera-se).
- AI que sugere categorização automática: **Excitement**.
- Relatório de fluxo de caixa: **Performance**.
- Integração com Zapier: **Indifferent**.
- Notificações por email diárias: **Reverse** (muitos responderam "não gostaria").
- Previsão de receita com IA: **Excitement**.
- Dark mode: **Indifferent** (neste ICP, pode ser diferente em outros).

Ação roadmap: basics são gates (sem eles, sem cliente), performance é competição linear, 1-2 excitement para diferenciar (AI categorização), cortar indifferent (Zapier), redesenhar reverse (notificações com controle).

##### Erros comuns

Pesquisa com ICP errado: respondentes não-target classificam features diferente, Todos features viram "Performance": sinal de amostra pequena ou questionário ruim, Construir "Excitement" sem os "Basics": produto encanta mas falha no básico, morre, Não re-classificar: excitement vira basic, produto estagna.

##### Quando NÃO usar

Pré-PMF onde ICP ainda é ambíguo, Features técnicas backend (Kano é mais útil em features visíveis).

##### Leitura adicional

- Kano, N. et al. (1984). "Attractive Quality and Must-Be Quality".
- Löfgren, M. & Witell, L. (2008). "Two Decades of Using Kano's Theory of Attractive Quality".

---

#### Framework: Story Mapping (Jeff Patton, 2014)

##### Origem

Jeff Patton, consultor e escritor de agile, popularizou Story Mapping em artigo de 2005 e no livro *User Story Mapping* (2014). Criado como resposta a uma frustração com product backlogs planos (listas lineares de features): não mostram jornada do usuário, não priorizam por liberação de valor, não facilitam conversas entre product e engenharia. Story Mapping organiza trabalho por jornada, não por ordem.

##### O que é

Representação visual bidimensional do produto: **eixo horizontal** é a jornada do usuário (atividades sequenciais que ele precisa fazer), **eixo vertical** é a profundidade de cada atividade (de essencial a avançado). As features do produto organizadas nessa grade. Na base, **releases horizontais**: primeira liberação corta uma faixa horizontal atravessando toda a jornada (MVP end-to-end), segunda liberação aprofunda funcionalidades, e assim por diante.

##### Princípios / estrutura

Produto não se entrega por features, entrega-se por jornadas de usuário completas. MVP horizontal (thin slice através de toda a jornada) entrega valor real ao usuário, features isoladas verticalmente não entregam valor até a jornada completa estar funcional. Conversa em volta do mapa produz alinhamento entre stakeholders que backlog linear nunca produz.

##### Como aplicar do jeito certo

Passo 1: mapear a jornada do usuário horizontalmente com post-its (ou equivalente digital em Miro/FigJam), cada post-it é uma "atividade de alto nível" que o usuário precisa fazer. Passo 2: para cada atividade, listar as "tarefas" concretas que a constituem. Passo 3: para cada tarefa, listar as "user stories" específicas em profundidade. Passo 4: desenhar linhas horizontais cortando o mapa, cada linha é um release. Primeiro release (MVP) corta o mínimo em cada coluna que ainda entrega jornada completa. Releases posteriores aprofundam.

Exemplo aplicado, E-commerce. Jornada horizontal: *Descobrir produto → Adicionar ao carrinho → Checkout → Pagar → Receber notificação → Recebimento*. Profundidade vertical em "Checkout": essencial (endereço único, frete grátis), intermediário (múltiplos endereços, escolha de frete), avançado (presentear, wishlist). MVP horizontal: apenas essencial em cada coluna, usuário consegue completar jornada inteira, mesmo que limitada. Release 2: adicionar intermediário nas colunas críticas (checkout, pagamento). Release 3: avançado.

##### Erros comuns a evitar

(1) Confundir com fluxograma, Story Map não é sobre lógica de fluxo (if-then), é sobre jornada do usuário. (2) Release vertical em vez de horizontal, "primeiro vamos fazer todo o checkout, depois todo o pagamento", isso entrega features, não jornadas. (3) Mapear sem ter pesquisa com usuário, Story Map baseado em hipótese sobre jornada é frequentemente errado, conectar com Customer Discovery (Framework: Customer Development (Steve Blank, 2005) (Fase 8)) ou JTBD Interview (Framework: Jobs to Be Done Switch Interviews (Bob Moesta & Chris Spiek, via Clayton Christensen) (Fase 5, Vol. 2)) antes. (4) Mapa grande demais, mais que 20-30 atividades horizontais vira ilegível, decomponha em mapas por persona ou por jornada principal vs auxiliar.

##### Quando não usar

Em produtos sem jornada clara de usuário (plataformas de API, produtos de infraestrutura), Story Mapping foi projetado para produtos com UX e jornada visível. Em times pequenos (< 5 pessoas) com comunicação próxima, o valor do Story Map é alinhamento em grupos maiores, em times pequenos, backlog regular funciona.

##### Leitura adicional

*User Story Mapping* (Jeff Patton, 2014), storymapping.com, blog jpattonassociates.com.

---

### CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)

#### Canvas: Opportunity Canvas (Jeff Patton, 2014)

##### Origem

Jeff Patton, autor de *User Story Mapping* (2014) e referência em product management ágil, criou o Opportunity Canvas como ferramenta para times de produto avaliarem se uma oportunidade vale a pena ser perseguida **antes** de comprometer roadmap. A motivação foi observação prática: PMs e times técnicos pulavam direto da ideia ("vamos construir feature X") para a especificação ("aqui está o PRD"), sem articular *por que* essa oportunidade deveria ser priorizada sobre todas as outras. O Opportunity Canvas força a explicitar a tese da oportunidade — quem ganha o quê, com que custo, contra qual alternativa — em uma página visual antes que se gaste tempo construindo.

##### O que é

Tela visual de uma página com **nove blocos** organizados em torno da pergunta central "vale a pena perseguir esta oportunidade?":

- **Problems / Solutions** (lado esquerdo): qual é o problema; qual é a solução proposta?
- **Users & Customers**: quem usa; quem paga (em B2B podem ser distintos)?
- **Solutions Today**: como o problema é resolvido hoje (concorrentes, workarounds, status quo)?
- **User Value**: que benefício tangível o usuário ganha?
- **Business Problems**: qual problema *do negócio* essa oportunidade resolve (retenção, aquisição, monetização)?
- **Adoption Strategy**: como vamos fazer o usuário descobrir e adotar?
- **Metrics**: quais números medem que está funcionando?
- **Budget**: quanto vamos investir antes de re-avaliar?

```mermaid
flowchart TB
    subgraph Top["Articulação da oportunidade"]
        direction LR
        PB["📋 Problems<br/>Que problema<br/>resolve?"]
        SOL["💡 Solutions<br/>Como propomos<br/>resolver?"]
        US["👥 Users<br/>& Customers"]
        ST["🔄 Solutions Today<br/>Como é resolvido<br/>hoje?"]
    end
    subgraph Mid["Valor"]
        direction LR
        UV["✨ User Value<br/>Benefício para<br/>o usuário"]
        BP["💼 Business Problems<br/>Problema do negócio<br/>que resolve"]
    end
    subgraph Bot["Execução"]
        direction LR
        AS["🎯 Adoption Strategy<br/>Como adotam?"]
        ME["📊 Metrics<br/>Como medimos?"]
        BU["💰 Budget<br/>Quanto investir<br/>antes de avaliar?"]
    end
    Top --> Mid --> Bot
```

##### Quando usar

Use o Opportunity Canvas na Fase 8 (ideação) e durante todo o ciclo de descoberta contínua pós-PMF. É a ferramenta certa para responder "vale a pena construir essa feature/produto/oportunidade adjacente?" antes de comprometer um trimestre de roadmap. Também use em comitês de priorização: comparar três Opportunity Canvases lado a lado é mais informativo que comparar três PRDs longos.

##### Princípios

A tese de Patton é que **decisão de roadmap é decisão de capital** — cada feature construída custa o custo de oportunidade da feature não construída. O Opportunity Canvas força articular *o trade-off* explicitamente. Diferente do BMC (que descreve o negócio inteiro) e do Lean Canvas (que descreve um modelo a validar), o Opportunity Canvas descreve **uma aposta específica de produto** e pode coexistir com vários outros: uma empresa madura típica tem 10-30 Opportunity Canvases ativos em portfólio.

##### Como aplicar

Reúna PM + tech lead + designer + 1 stakeholder de negócio (RH, vendas, operações) — 4-5 pessoas. Tempo: 60-90 minutos. Comece pelos Problems & Users; só depois vá para Solutions. A ordem importa: começar por Solutions reforça viés de "já sabemos o que construir" e mascara perguntas críticas sobre adoção.

1. **Problems**: descreva o problema sem mencionar a solução. "Usuário tipo X sofre com Y em contexto Z."
2. **Users & Customers**: quem especificamente. Em B2B, distinguir usuário (quem mexe), comprador (quem paga), influenciador (quem decide).
3. **Solutions Today**: como o problema é resolvido hoje? Excel, processo manual, concorrente, "não fazer nada". Liste 3-5 alternativas com prós/contras.
4. **User Value**: o que o usuário ganha que hoje não tem? Específico e mensurável.
5. **Business Problems**: que problema do negócio (retenção, aquisição, monetização, expansion) essa oportunidade endereça?
6. **Solutions**: agora sim, descreva o que vai construir.
7. **Adoption Strategy**: como o usuário descobre, experimenta, adota? In-app, email, CSM, marketing pago?
8. **Metrics**: 2-3 métricas leading + 1 lagging. Se não consegue definir, oportunidade está mal articulada.
9. **Budget**: quanto vai investir (pessoas × tempo + custo de aquisição) antes de reavaliar? Sem budget, Opportunity Canvas vira fantasia.

Tempo total: 60-90 minutos por canvas. Faça antes de comprometer roadmap — não depois.

##### Exemplo brasileiro preenchido — Hotmart, oportunidade "Hotmart Sparkle" para microcreators (2022)

Em 2022, a Hotmart já dominava infoprodutos médios e grandes (creators que vendiam cursos de R$ 300+ a milhares de alunos). Identificou uma oportunidade adjacente: **microcreators** — pessoas com audiência pequena (1-5k seguidores) que queriam monetizar conteúdo curto e barato (R$ 9-49 por item). O Opportunity Canvas dessa aposta:

| Bloco | Conteúdo |
|---|---|
| **Problems** | Microcreators têm audiência pequena mas engajada e querem monetizar, mas o setup atual da Hotmart (criar curso completo com landing page, hospedar conteúdo, configurar afiliados) é overkill para conteúdo de 30-90 minutos a R$ 19. |
| **Users & Customers** | Usuário e cliente são a mesma pessoa: microcreator brasileiro com 1-5k seguidores no Instagram/TikTok, audiência engajada, já tem conteúdo gravado mas não no formato curso. |
| **Solutions Today** | (1) Vender via DM no Instagram com PIX — alta fricção, sem rastreamento. (2) Plataformas estrangeiras (Gumroad) — barreiras de PIX/pagamento BR. (3) Não monetizar — "perder" a audiência. |
| **User Value** | Setup de produto digital em 5 minutos (vs 1-2h da plataforma principal). Pagamento via PIX integrado. Link de venda direto pra bio do Instagram. Sem necessidade de criar landing, configurar funil, integrar afiliados. |
| **Business Problems** | (1) Aquisição: capturar a base de microcreators que ainda não usa Hotmart e que daqui a 3-5 anos pode virar creator médio. (2) Diversificação: reduzir dependência de "top 1000 creators". (3) Defesa de mercado: bloquear entrada de Gumroad/Stan/Ko-fi no Brasil. |
| **Solutions** | "Hotmart Sparkle": fluxo simplificado de criação (3 telas), template de venda mobile-first, pagamento PIX nativo, link de bio gerado automaticamente, sem afiliados/cupons (corte deliberado). |
| **Adoption Strategy** | Indicação de creators existentes (microcreators são frequentemente fans/alunos de creators médios), parcerias com agências de microinfluência, conteúdo orgânico no Instagram da Hotmart focado nesse perfil. |
| **Metrics** | Leading: número de microcreators ativando produto/mês, GMV médio por microcreator, conversão de visitante em comprador no link de bio. Lagging: % de microcreators que migram para a plataforma principal em 12 meses. |
| **Budget** | 1 squad (5 pessoas) por 6 meses para MVP + 4 meses de aquisição inicial = ~R$ 1.5M. Reavaliar em 10 meses: se GMV mensal não chegar a R$ 2M ou 5k microcreators ativos, descontinuar. |

**Insight do caso.** O bloco mais valioso aqui é o **Business Problems** explícito — articula que essa oportunidade não é "feature legal", é resposta a três problemas estratégicos da Hotmart (aquisição de creators emergentes, diversificação de dependência, defesa de mercado). Sem essa articulação, "Hotmart Sparkle" pareceria projeto secundário; com ela, fica claro por que merece squad dedicado. **A lição: Opportunity Canvas força distinguir oportunidade-de-produto de oportunidade-de-negócio. Feature sem business problem definido raramente sobrevive a corte de roadmap.**

##### Variações e extensões

- **Lean UX Canvas** (Jeff Gothelf): variação focada em times UX-driven, com bloco de hipóteses explícito.
- **Product Discovery Canvas** (Roman Pichler): variação para PMs em ambientes ágeis, com ênfase em assumptions e experimentos.
- **Now/Next/Later Roadmap**: complementa o Opportunity Canvas — uma vez que a oportunidade vale a pena, onde no roadmap ela entra?

##### Erros comuns

- Pular Problems & Users e ir direto para Solutions — viés de "já sei o que construir" mascara perguntas críticas.
- Articular User Value em features ("vamos ter um botão de X") em vez de benefícios ("o usuário consegue Y em Z minutos vs hoje em W horas").
- Esquecer Business Problems — oportunidade que ajuda só o usuário sem resolver problema do negócio é caridade, não estratégia.
- Definir Metrics só lagging (GMV, retenção D90) sem leading — leva 3-6 meses para saber se está funcionando.
- Não definir Budget de saída — oportunidade roda indefinidamente sem reavaliação, consumindo time.

##### Quando NÃO usar

Em decisões muito pequenas (mudar copy de um botão, ajustar layout) — overhead de canvas não compensa. Em decisões muito grandes e estruturais (entrar em novo país, lançar segunda linha de produto) — use BMC (Fase 2, Vol. 1) ou Lean Canvas (Fase 1, Vol. 1), que dão visão de modelo completo. Em ambientes onde o roadmap é ditado de fora (clientes enterprise B2B com contratos) — espaço de manobra limitado torna o canvas teatro.

##### Conexão com outros canvases

O Opportunity Canvas **sucede o BMC/Lean** (Canvas: Business Model Canvas (Alexander Osterwalder, 2010) (Fase 2, Vol. 1)/2): depois que o modelo de negócio está claro, cada oportunidade-feature tem seu Opportunity Canvas próprio. **Pareia com o Hypothesis Canvas (Fase 7)**: cada Opportunity Canvas pode gerar 3-5 hipóteses falsificáveis para validar antes de construir. **Antecede o MVP Canvas (Fase 9)**: depois de aprovada, a oportunidade vira escopo de MVP.

##### Leitura adicional

- *User Story Mapping* (Jeff Patton, 2014).
- *Inspired* (Marty Cagan, 2008/2017) — escola de product discovery contínuo onde o Opportunity Canvas se encaixa.
- [jpattonassociates.com](https://www.jpattonassociates.com) — biblioteca de templates e ensaios de Patton.

---

#### Canvas: MVP Canvas (Tristan Kromer)

##### Origem

Tristan Kromer, coach de inovação e autor do blog Grasshopper Herder, desenvolveu o MVP Canvas como resposta a uma frustração recorrente: times que "lançavam MVPs" sem definir antecipadamente o que estavam tentando aprender. O MVP Canvas surgiu ao redor de 2013-2015 como artefato estruturado para forçar três definições antes de qualquer linha de código: qual é a hipótese que o MVP testa, quem são os usuários do MVP (não os usuários futuros do produto final), e qual é o critério de sucesso que dirá ao time o que construir a seguir. Kromer parte da premissa de Eric Ries (*The Lean Startup*, 2011) mas torna operacional a pergunta mais ignorada: "MVP de quê, exatamente?"

##### O que é

Tela visual de uma página com **sete blocos** distribuídos em torno da pergunta central "o que estamos aprendendo com este MVP?":

- **Hipótese central**: a crença que o MVP testa — escrita como falsificável.
- **Segmento de usuário do MVP**: não o cliente final do produto, mas o cliente específico que validará *essa hipótese* (pode ser subconjunto menor).
- **Proposta de valor do MVP**: o que o usuário ganha com o MVP — pode ser diferente do produto final.
- **Canais de recrutamento**: como vamos chegar nos usuários deste MVP.
- **Critério de sucesso**: o que precisamos ver para considerar a hipótese validada.
- **Critério de invalidação**: o que precisamos ver para considerar a hipótese refutada.
- **Tipo de MVP**: qual experimento — landing page, concierge, wizard of oz, protótipo clicável, pré-venda, fake door.

```mermaid
flowchart TB
    HI["💡 Hipótese central<br/>(falsificável)"]
    subgraph Quem["Quem"]
        SE["👥 Segmento<br/>do MVP"]
        CR["📡 Canais de<br/>recrutamento"]
    end
    subgraph Oque["O que"]
        PV["✨ Proposta de valor<br/>do MVP"]
        TI["🔧 Tipo de MVP"]
    end
    subgraph Resultado["Resultado"]
        CS["✅ Critério de<br/>sucesso"]
        CI["🚫 Critério de<br/>invalidação"]
    end
    HI --> Quem
    HI --> Oque
    Quem --> Resultado
    Oque --> Resultado
```

##### Quando usar

Use o MVP Canvas na Fase 8 (prototipagem e MVP) como artefato de entrada — antes de qualquer construção. Para cada MVP que o time planeja lançar, preencha o canvas em 30-45 minutos com as pessoas envolvidas. Em times pós-PMF com discovery contínuo, MVP Canvas precede qualquer sprint de desenvolvimento de feature nova: cada feature experimentada como "MVP de aprendizado" antes de virar permanente.

##### Princípios

A tese de Kromer é que **"MVP" sem hipótese explícita é só produto incompleto**. A maioria dos times chama de MVP qualquer versão inicial do produto, mas "versão inicial" sem hipótese não ensina nada — você lança, alguns usuários gostam, outros não, e o time não sabe o que isso significa. MVP Canvas faz a pergunta que a maioria evita: "Qual crença específica este MVP vai testar? E quando sabemos que foi refutada?" Sem essa resposta, o MVP nunca "falha" — ele simplesmente não tem critério de aprendizado.

##### Como aplicar

Reúna PM + tech lead + designer + fundador. Tempo: 30-45 minutos. **Sequência de preenchimento:**

1. **Hipótese central** — escreva primeiro, antes de falar sobre o MVP em si. "Acredito que [usuário Y] vai [fazer X] por causa de [razão Z]." Teste: a hipótese pode ser refutada? Se não, reescreva.
2. **Segmento do MVP** — quem especificamente vai testar esta hipótese? Pode ser 20 pessoas, não 20.000. Quanto mais estreito o segmento, mais limpa a evidência.
3. **Proposta de valor do MVP** — o que o usuário ganha hoje com esta versão? Não o que o produto promete no futuro — o que o MVP entrega agora.
4. **Canais de recrutamento** — como vai encontrar essas pessoas? "Nossos clientes" é vago; "lista de 50 churned users do último trimestre via email pessoal do founder" é um canal.
5. **Tipo de MVP** — qual é o formato do experimento? Não construa código se um protótipo clicável testa a mesma hipótese em 1/10 do tempo.
6. **Critério de sucesso** — define antes. Número específico.
7. **Critério de invalidação** — define antes. Zona de incerteza entre sucesso e invalidação = inconclusivo.

Após preencher, faça a pergunta de Kromer: "Se o MVP falhar pelo critério de invalidação, o que construímos a seguir?" Se a resposta for "pivotamos para X", o MVP está bem definido. Se a resposta for "não sabemos", a hipótese precisa ser mais específica.

##### Exemplo brasileiro preenchido — Wildlife Studios, MVP de novo mecanismo de monetização (2022)

A Wildlife Studios (São Paulo, one of the largest mobile game studios globally) testou em 2022 um novo mecanismo de monetização para seu jogo *Sniper 3D*: season passes (passe de temporada com recompensas progressivas), alternativa a loot boxes avulsas. O MVP Canvas:

| Bloco | Conteúdo |
|---|---|
| **Hipótese central** | Jogadores de Sniper 3D que compraram ao menos 1 item nos últimos 90 dias pagarão R$ 15 por season pass se perceberem progressão visual clara de recompensas ao longo de 30 dias. |
| **Segmento do MVP** | Cohort de 50.000 jogadores "moderate spenders" (1-3 compras/trimestre, ARPU R$ 18/mês) em mercado brasileiro. Excluídas as duas pontas — free-to-play puro e heavy spenders — para isolar o segmento mais sensível à proposta. |
| **Proposta de valor do MVP** | 30 recompensas progressivas (visuais, skins, boosters) por R$ 15 — previsibilidade de valor vs. loteria de loot box. |
| **Canais de recrutamento** | In-game banner para o cohort selecionado + push notification personalizada no D1 do teste. Sem anúncio externo — experimento contido na base existente. |
| **Tipo de MVP** | Feature real implementada no jogo para o cohort (não protótipo) — o investimento de desenvolvimento era pequeno o suficiente para ser justificado pela potencial monetização. |
| **Critério de sucesso** | ≥12% de conversão do cohort (compra do season pass) nos primeiros 7 dias. ARPU do cohort ≥ R$ 22 em 30 dias (vs. R$ 18 baseline). |
| **Critério de invalidação** | < 6% de conversão em 7 dias OU ARPU < R$ 16 em 30 dias = hipótese refutada. Considerar alternativas de monetização ou repricing. |

**Resultado:** 17% de conversão em D7 (acima do critério de sucesso). ARPU do cohort subiu para R$ 24 em 30 dias. Decisão: Persevere — expandir season pass para todos os usuários ativos + outros jogos do portfólio.

**Insight do caso.** O MVP Canvas forçou a Wildlife a definir o segmento com precisão — testar nos dois extremos (free-to-play puro e heavy spenders) contaminaria o resultado (FTP não compra nada; heavy spenders compram tudo, inclusive o que não funciona). A limpeza do cohort produziu evidência acionável: a proposta funciona para *moderate spenders*, que é exatamente o segmento de maior potencial de upgrade. **A lição: o trabalho mais importante do MVP Canvas é definir quem NÃO entra no experimento — não apenas quem entra.**

##### Variações e extensões

- **Concierge MVP Canvas**: variação específica para MVPs onde o serviço é entregue manualmente (você faz tudo na mão para 10-20 usuários). Canvas adiciona bloco "Script de operação manual".
- **Wizard of Oz Canvas**: variação onde o backend é falso (humano operando). Canvas adiciona bloco "O que o usuário vê" vs. "O que realmente acontece" para mapear a ilusão deliberada.
- **Sprint Goal Canvas** (adaptação ágil): integra MVP Canvas com sprint planning — cada sprint tem um canvas de hipótese + critério.

##### Erros comuns

- Chamar de "MVP" qualquer versão incompleta do produto — MVP sem hipótese é produto inacabado, não experimento.
- Segmento do MVP = segmento total do mercado — dilui o sinal; o experimento não produz evidência limpa.
- Tipo de MVP mais caro que o necessário — se landing page testa a hipótese, não construa produto; se protótipo clicável testa, não escreva código.
- Não definir critério de invalidação — MVP "sempre aprende algo", nunca "falha"; loop de aprendizado não fecha.
- Usar MVP Canvas para justificar construção que já foi decidida — canvas como teatro, não como ferramenta de decisão.

##### Quando NÃO usar

Em produtos altamente regulados onde qualquer versão pública precisa de certificação (healthtech com classe de risco II+, fintech com obrigação de compliance desde o primeiro usuário) — MVP Canvas pressupõe liberdade de lançar versão experimental; em ambientes regulados, o canvas é útil para MVPs internos e simulações. Em produtos onde o custo de construção do MVP mínimo é maior que o custo de validação por entrevistas — entrevista, não construa.

##### Conexão com outros canvases

O MVP Canvas **sucede o Opportunity Canvas (Fase 9)**: a oportunidade aprovada vira hipótese central do MVP Canvas. **Pareia com o Test Card (Fase 8)**: MVP Canvas define o experimento; Test Card registra e acompanha a execução. **Antecede o Pirate Canvas (Fase 11, Vol. 4)**: o MVP bem sucedido gera os primeiros dados reais do funil AARRR. **Alimenta o Lean Canvas (Fase 1, Vol. 1)**: Proposta de valor validada pelo MVP preenche o bloco "Solução" com dado real.

##### Leitura adicional

- Blog Grasshopper Herder (Tristan Kromer) — onde o MVP Canvas e variações são documentados.
- *The Lean Startup* (Eric Ries, 2011) — fundação filosófica.
- *Continuous Discovery Habits* (Teresa Torres, 2021) — escola de discovery contínuo onde MVP Canvas se integra ao ciclo semanal de produto.

---

### TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE

#### Template: Diagrama de Opportunity Solution Tree (Teresa Torres) — exemplo em SaaS brasileiro

```mermaid
graph TD
    A[Outcome: Aumentar retenção D30 de 45% para 60%] --> B1[Opportunity: Usuários não descobrem a feature core no primeiro dia]
    A --> B2[Opportunity: Onboarding focado em features, não em resultado]
    A --> B3[Opportunity: Falta de feedback positivo nas primeiras 72h de uso]

    B1 --> C1[Solução 1: Tour interativo no login]
    B1 --> C2[Solução 2: E-mail automático no D0 com link direto à feature]
    B1 --> C3[Solução 3: Pop-up contextual quando usuário está perdido]

    B2 --> C4[Solução 4: Redesenhar onboarding em torno de job-to-be-done]
    B2 --> C5[Solução 5: Case-study no onboarding com cliente similar]

    B3 --> C6[Solução 6: Notificação celebrando primeira ação completa]
    B3 --> C7[Solução 7: Follow-up humano da CS no D3]

    C1 --> D1{Experimento: A/B testing 2 semanas}
    C6 --> D2{Experimento: rollout 50/50 com medição}
```

**Uso:** o topo da árvore é o outcome desejado (métrica mensurável). Opportunities são hipóteses sobre o que, se resolvido, moveria o outcome. Solutions são experimentos específicos para cada opportunity. A disciplina é nunca pular direto de outcome para solution, sempre explicitar qual opportunity a solução tenta endereçar.

---

#### Template: Story Map exemplo — MVP de app de entrega regional

Horizontal (jornada): cliente *Descobre* → *Seleciona loja* → *Escolhe produtos* → *Paga* → *Acompanha* → *Recebe*

| Atividade | Essencial (Release 1) | Intermediário (Release 2) | Avançado (Release 3) |
|---|---|---|---|
| Descobre | Busca por CEP | Ordenação por distância | Recomendação personalizada |
| Seleciona loja | Lista com foto e nota média | Filtro por categoria | Favoritos e histórico |
| Escolhe produtos | Cardápio simples, uma foto por item | Variações (tamanho, sabor) | Personalização detalhada, combos |
| Paga | Cartão de crédito via gateway | PIX + carteira digital | Cashback, cupons, parcelamento |
| Acompanha | Status em texto (recebido, em preparo, saindo) | Mapa em tempo real | Chat com entregador |
| Recebe | Confirmação por SMS | Avaliação da entrega | Foto do produto na entrega |

**Insight:** Release 1 corta horizontalmente a jornada inteira, cliente consegue fazer todo o fluxo, mesmo que limitado. Release 1 é MVP de verdade. A tentação de começar por "release vertical" (construir todo o módulo de pagamento primeiro) é erro clássico: não entrega valor completo até o último release.

---

### SÍNTESE DA FASE 9

O entregável desta fase é o Dossiê de Solução. Três a cinco conceitos avaliados em Desejabilidade, Viabilidade e Sustentabilidade; pelo menos um protótipo interativo testado com oito ou mais usuários; e recomendação escrita de qual caminho seguir. Quem economiza no protótipo descobre os mesmos problemas na construção — em momento mais doloroso e caro de corrigir.

Esse dossiê é o insumo da [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]], onde o conceito escolhido passa por testes de usabilidade estruturados e se converte em Especificação do MVP. Quem chega à [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]] sem ter explorado alternativas e sem ter testado protótipo entra na especificação com hipótese implícita não testada. Isso aumenta a chance de retrabalho radical na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]].

---

## FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE

### O que esta fase cobre

Nesta fase você refina o conceito escolhido por meio de testes de usabilidade, entrevistas de solução (diferentes das de problema), e validação da proposta de valor com usuários reais. Você também define os requisitos funcionais mínimos do MVP que será construído na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]].

O entregável é a Especificação do MVP. Documento preciso sobre o que o MVP fará, para quem, com quais limitações, e como medirá sucesso.

> [!abstract] Resumo operacional
> **Entregável:** Especificação do MVP (Template: Especificação de MVP (Fase 10)) com MoSCoW de cinco a quinze Must Haves, faixa de preço justificada por Van Westendorp, protótipo de média fidelidade clicável testado, e aprovação no Gate de Direcionalidade e Scale Readiness Check.
>
> **Sinais de saída:**
> - Dez ou mais entrevistas de solução com escala de cinco dimensões (Relevância, Urgência, Preferência, Diferenciação, Disposição a pagar) — Urgência média igual ou acima de três.
> - Friction points documentados por tarefa e por usuário em matriz, com pelo menos uma iteração do protótipo baseada nos testes.
> - Teste de precificação Van Westendorp aplicado e faixa psicologicamente aceitável definida.
> - Gate de Direcionalidade aprovado — solução reduz ou elimina a dor de forma direta e mensurável.
> - Scale Readiness Check com cinco itens marcados — comprador definido, workflow doloroso, titularidade de orçamento, urgência observável, suposições não-validadas listadas.
>
> **Três armadilhas mais comuns:**
> 1. Bloat de escopo — Must Have inflando para vinte ou trinta itens transforma MVP em produto inflado e impossível de lançar.
> 2. Confiar em "eu pagaria" — a resposta na entrevista é sempre mais generosa que na carteira; aplique desconto de cinquenta a setenta por cento.
> 3. Especificar sem mensuração — "o MVP deve ser intuitivo" não é spec; sem critério de aceite objetivo, "pronto" vira debate filosófico.

### POR QUE

Protótipos testam fluxo e conceito. Mas não testam valor real em uso prolongado. Esta fase aprofunda o teste de solução e converte aprendizado em requisitos. Sem especificação clara antes de construir, você gasta mais, demora mais, e entrega menos.

### Quando usar

Comece depois da [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]] escolher o conceito. Termine quando a Especificação do MVP estiver escrita, priorizada, e aprovada por você (e sócios, se houver). Revisite a cada iteração maior do produto.

### Quem envolve

O executor é você. Com designer e tech lead se houver. Os participantes são dez a quinze usuários do ICP, para entrevistas de solução e testes. O decisor é você.

### Como executar

Oito passos.

#### Passo 1, conduza entrevistas de solução

Diferente da entrevista de problema ([[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]]), aqui você mostra o protótipo e pergunta ao usuário seis coisas, de forma estruturada. Se a solução resolve o problema dele. Como ela se compara com o que ele usa hoje. Quanto faria sentido cobrar. Quais features ele sente falta e quais acha supérfluas. Em que momento da rotina ele usaria. O que o impediria de usar.

Faça dez a quinze dessas entrevistas. Grave, transcreva, analise.

> [!tip] Canvases Visuais — Empathy Map (Fase 4, Vol. 2)
> Após cada rodada de testes de solução e usabilidade, o [[IGNICAO-Vol-2-Descoberta-e-Mercado#Canvas: Empathy Map (Dave Gray / XPLANE, 2009)|Canvas: Empathy Map (Dave Gray / XPLANE, 2009) (Vol. 2)]] — Says, Thinks, Does, Feels — sintetiza os estados internos do usuário em formato visual de uma página. Útil para alinhar time de produto sobre as descobertas qualitativas (frustração no fluxo X, expectativa não atendida no passo Y) sem que cada membro reconstrua mentalmente a sessão de teste do zero.

#### Passo 2, aplique a técnica das cinco escalas de valor

Para cada entrevistado, peça avaliação em escala de um a cinco em cinco dimensões: Relevância ("isso resolve um problema real?"), Urgência ("você precisaria disso nos próximos trinta dias?"), Preferência ("prefere ao que usa hoje?"), Diferenciação ("percebe como diferente das alternativas?") e Disposição a pagar ("quanto faria sentido cobrar?"). Calcule a média e o desvio-padrão de cada escala.

> [!warning] Urgência abaixo de três é alerta vermelho
> Se a Urgência média ficar abaixo de três, o problema existe mas não é prioridade. Você terá dificuldade de vender. Não é "ainda preciso polir o pitch". É "o problema não é dolorido o suficiente". Volte à Fase 3.

#### Passo 3, faça o teste de cinco segundos (five second test)

Mostre o protótipo ou a página principal por cinco segundos, e tire. Depois pergunte três coisas. O que você entendeu? Para quem é? Qual problema resolve?

Se cinquenta por cento dos testados não conseguem responder bem, o seu posicionamento está confuso. Isso vai matar o seu CAC (custo de aquisição de cliente) depois.

> [!note] Capítulo 1 (Vol. 2) — Psicologia do Consumidor Brasileiro
> As respostas nas entrevistas de solução são influenciadas por como a pergunta é feita e em que contexto. O [[IGNICAO-Vol-2-Descoberta-e-Mercado#CAPÍTULO 1 — PSICOLOGIA DO CONSUMIDOR BRASILEIRO — COMPORTAMENTO, DECISÃO E CONVERSÃO|Capítulo 1 — Psicologia do Consumidor Brasileiro (Vol. 2)]] detalha vieses de resposta específicos do consumidor brasileiro — incluindo tendência de superestimar intenção de uso e subestimar sensibilidade a preço — que distorcem as escalas de valor se não forem antecipados.

#### Passo 4, teste de precificação (price sensitivity, Van Westendorp)

Pergunte quatro coisas, nessa ordem.

Em que preço você começaria a achar muito barato? A ponto de desconfiar da qualidade.

Em que preço você começaria a achar barato? Bom negócio.

Em que preço você começaria a achar caro? Mas ainda consideraria.

Em que preço você começaria a achar caro demais? Não consideraria.

Com quinze a vinte respostas, plote as quatro curvas. A intersecção entre "caro" e "barato" indica a faixa de preço psicologicamente aceitável.

> [!tip] Van Westendorp é ponto de partida, não resposta final
> Essa não é a precificação ideal. Mas é um ponto de partida muito melhor do que chutar. Preço real será descoberto em mercado.

> [!tip] Capítulo 9 (Vol. 4) — Pricing Strategy
> Van Westendorp revela a faixa psicológica aceitável, mas não informa o modelo de precificação (assinatura, cobrança por uso, por licença, freemium) nem a estratégia de âncora. O [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 9 — PRICING STRATEGY COMO DISCIPLINA|Capítulo 9 — Pricing Strategy (Vol. 4)]] complementa este passo com os modelos de precificação aplicáveis ao estágio de MVP, a lógica de teste Gabor-Granger para granularidade maior, e os erros mais comuns de precificação em lançamento — incluindo o de começar com preço que não é possível aumentar depois.

> [!tip] Product discovery moderno é insumo recomendado para times com PM/designer/eng
> Para times com PM, designer e engenharia separados, quatro práticas contemporâneas de product discovery (Cagan, Torres) merecem incorporação na rotina desta fase: **Continuous discovery** (entrevistas semanais com clientes em paralelo com desenvolvimento, não fases separadas), **Opportunity Solution Tree** (conectar outcome, oportunidades, soluções, experimentos em árvore antes de priorizar features), **Dual-track agile** (Discovery e Delivery rodando em paralelo, não em sprints alternados), e **User stories INVEST** (Independent, Negotiable, Valuable, Estimable, Small, Testable, com acceptance criteria explícito que torna "pronto" auditável). Para fundadores solo ou pre-seed, são opcionais — ganham relevância quando o time passa de cinco a sete pessoas. Detalhamento e quando aplicar cada prática nos Apêndices BC (Technical Debt — implicações de dívida das decisões de MoSCoW) e Frameworks da Fase 17, Vol. 7 (Discovery & Product, com tratamento operacional dos quatro frameworks).

#### Passo 5, mapeie requisitos por ordem de prioridade (MoSCoW)

A priorização MoSCoW para escopo de MVP, em estrutura visual:

```mermaid
flowchart LR
 subgraph M["🔴 MUST HAVE<br/>sem isso não vai ao ar<br/>5-15 itens"]
 M1[Features core]
 M2["Sem elas, MVP<br/>não resolve a dor"]
 end

 subgraph S["🟠 SHOULD HAVE<br/>importante mas<br/>pode esperar 1-2 sprints"]
 S1[Features significativas]
 S2["Workarounds existem<br/>para primeira versão"]
 end

 subgraph C["🟡 COULD HAVE<br/>nice-to-have<br/>se sobrar tempo"]
 C1[Features desejáveis]
 C2[Mas não críticas]
 end

 subgraph W["⚪ WONT HAVE<br/>explicitamente FORA<br/>do escopo deste MVP"]
 W1["Features que<br/>NÃO vão ser feitas"]
 W2["Decisão consciente,<br/>não esquecimento"]
 end

 M -.-> Build["🔨 Build MVP<br/>sprint 1-4"]
 S -.-> Later["⏳ Roadmap<br/>sprint 5+"]
 C -.-> Nice["🎁 Se sobrar<br/>capacidade"]
 W -.-> Never["❌ Nunca<br/>neste MVP"]

 style M fill:#FFB6B6,stroke:#8B0000,stroke-width:2px
 style S fill:#FFD580
 style C fill:#FFFF99
 style W fill:#D3D3D3
```

A tentação é inflar Must Have para vinte ou trinta itens. MVP com vinte Must Haves não é MVP. É produto mínimo *impossível*.

Lista de requisitos funcionais. Cada um em uma das quatro categorias. Must Have. Sem isso, não há produto. Entra no MVP obrigatoriamente. Should Have. Deveria ter, mas dá para viver um tempo sem. Sprint três pós-MVP. Could Have. Desejável. Entra se houver tempo e capacidade. Won't Have (yet). Explicitamente fora do MVP.

> [!important] Regra dura do MoSCoW
> Um MVP com mais de dez a quinze Must Haves não é MVP. É produto inflado. Se a sua lista passa de quinze, você não dominou o problema ainda. Volte e corte.

#### Passo 6, escreva a Especificação do MVP

Documento contendo dez itens.

Proposta de valor final, em uma frase. Persona foco (beachhead). JTBDs principais a resolver. Lista de Must Haves. Lista de Should e Could Haves (roadmap futuro). Explicitamente: o que o MVP *não* fará (Won't Haves). Critérios de sucesso do MVP (métricas). Faixa de preço planejada. Canais de aquisição planejados. Prazo de desenvolvimento estimado. Orçamento.

> [!tip] Templates Operacionais — Template da Especificação do MVP (Template da Fase 10)
> O [[#Template: Especificação de MVP|Template: Especificação de MVP]] contém o template preenchível da Especificação do MVP com os dez campos acima, mais seção de riscos remanescentes e suposições ainda não validadas. Usar o template em vez de documento livre garante que nenhum campo crítico (Won't Haves, critério de sucesso mensurável) seja omitido por pressão de entrar logo em desenvolvimento.

#### Passo 7, aplique o Gate de Direcionalidade

Antes de avançar para a [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] e gastar tempo e dinheiro construindo o MVP, responda em voz alta, para um interlocutor externo (cofundador, mentor, advisor), a seguinte pergunta.

> [!important] A pergunta do gate
> A solução que estamos prestes a construir reduz ou elimina, de forma direta e mensurável, a dor que identificamos na beachhead?

Os três elementos da frase importam, e cada um é um teste por si só.

Reduz ou elimina. Não é "ajuda com", "apoia", "melhora a experiência de". Uma solução que não cruza essa barreira não justifica adoção, nem pagamento. Se você se vê usando verbos fracos para descrever o impacto, provavelmente está vendendo melhoria incremental onde o cliente precisa de ruptura.

De forma direta. A cadeia causal entre usar o produto e sentir a dor diminuir precisa ser curta e óbvia. Se a redução da dor depende de o cliente também mudar comportamento, também treinar a equipe, também integrar com outros sistemas que ele ainda não tem, a cadeia é longa demais para um MVP ganhar adoção.

De forma mensurável. O cliente precisa conseguir medir a redução. Em horas, reais, erros evitados, conversões geradas. Redução "sentida" mas não medida é indistinguível de placebo. E não financia renovação de contrato.

> [!warning] Se algum dos três elementos travar, não avance
> Volte ao Passo 6 (Especificação do MVP) e corte features que não contribuem diretamente para a redução da dor principal. Um MVP que resolve uma dor com direcionalidade clara supera consistentemente um MVP que resolve várias dores com direcionalidade difusa.

#### Passo 8, aplique o Scale Readiness Check

Esse checklist complementa o gate de direcionalidade. Enquanto o gate pergunta "a solução é a certa?", o Scale Readiness Check pergunta "você tem as condições para construir com segurança?". Os cinco itens precisam ser todos verdadeiros antes da [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] começar com intensidade de build.

- [ ] **Um comprador claramente definido.** Você tem nome, cargo, e empresa (ou perfil nomeado no caso B2C) do primeiro comprador. Não "pequenos negócios". Uma lista concreta de cinco a dez pessoas que você saberia chamar hoje para uma demo.
- [ ] **Um workflow doloroso identificado.** Você observou, não só ouviu, o workflow atual. Sabe onde o cliente trava, quantos minutos por semana ele gasta na gambiarra, e quem mais na organização é afetado.
- [ ] **Titularidade de orçamento clara.** Você sabe quem no fluxo comprador autoriza o gasto, de qual rubrica sai o dinheiro, e em que ordem de grandeza (R$ por mês ou por licença). Se a resposta é "a gente descobre depois", você ainda não tem clareza orçamentária suficiente para escalar.
- [ ] **Urgência observável.** Não declarada em entrevista. *Observável em comportamento*. O cliente já está pagando algo hoje para mitigar (mesmo que precariamente), já tentou resolver sozinho, ou tem prazo externo (regulatório, contratual, competitivo) que aperta.
- [ ] **Consciência de que escalar suposições amplifica ineficiência.** Você lista por escrito quais suposições ainda não foram validadas, e se comprometeu a validá-las na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] sem construir por cima delas. Ignorar essa etapa transforma dívida de suposição em dívida de produto, e cria retrabalho caro.

> [!warning] Se algum dos cinco itens não pode ser marcado, não avance em ritmo de produção
> Continue na Fase 9 em modo de investigação até fechar o item. Escalar desenvolvimento com suposições não-testadas é como colocar mais combustível em um carro que ainda não se sabe se tem direção funcionando. Você só vai chegar mais rápido no lugar errado.

### Os oito passos aplicados, roteiro de teste de usabilidade do PadariaPro (protótipo híbrido WhatsApp mais Web)

**Briefing ao usuário (cinco minutos).**

> "Oi, [Nome]. Hoje vou te mostrar uma versão não finalizada de uma ferramenta. Quero que você tente usá-la como se fosse a sua rotina, e fale em voz alta tudo que está pensando. Não tem resposta certa. Se você se perder, ótimo. É isso que a gente precisa saber. Posso gravar a tela?"

**Tarefa 1, onboarding inicial (dez minutos).**

> "Você acabou de receber a indicação do PadariaPro. Cadastre a sua padaria e adicione o seu primeiro fornecedor (Anaconda)."

Friction points observados em cinco usuários. Quatro de cinco travaram em "Inserir CNPJ", porque o sistema exigiu formato específico sem indicar. Três de cinco não entenderam o que "vincular fornecedor" significava na tela. Cinco de cinco pularam o campo "Inserir cardápio". Acharam irrelevante para onboarding.

**Tarefa 2, confirmar pedido via WhatsApp (oito minutos).**

> "Chegou uma mensagem do PadariaPro no seu WhatsApp com sugestão de pedido. Confirme."

Observações. Cinco de cinco confirmaram sem problema via "sim". Dois de cinco tentaram "ajustar" e ficaram confusos quando o bot pediu nova quantidade. Não estava claro se era em quilos ou em sacos. Quatro de cinco elogiaram a fluidez.

**Tarefa 3, ajustar pedido recorrente (dez minutos).**

> "Você percebeu que a sua padaria está desperdiçando farinha integral. Ajuste o pedido recorrente para pedir vinte por cento a menos."

Friction points. Cinco de cinco demoraram mais de três minutos para encontrar a configuração. Três de cinco desistiram, e disseram "eu pediria pelo WhatsApp direto". O insight: configurações devem poder ser feitas pelo WhatsApp também. Não só pela web.

**Síntese pós-cinco testes.**

Must-have para ativação. Onboarding em menos de cinco minutos (hoje leva doze a vinte). CNPJ com máscara. Explicação de fornecedor. Pular cardápio opcional.

Funcionalidade crítica a simplificar. Ajuste de pedido recorrente. Mover para WhatsApp com comando natural.

Descarte. Seção "cardápio" não é essencial para MVP. Cortar.

Iteração prioritária. Simplificar onboarding para três passos. CNPJ, depois primeiro fornecedor, depois primeiro pedido teste.

### Caso brasileiro real, Gupy e empresas-piloto

Em meados da década de 2010, a Gupy nascia da ideia de Mariana Dias, Bruna Guimarães, e Robinson Idalgo de substituir processos tradicionais de recrutamento por uma plataforma que usasse dados e IA para triagem.

A decisão foi cirúrgica. Antes de abrir comercial amplo, fizeram piloto com cinco a oito empresas-parceiras. Usavam a plataforma com acompanhamento próximo, e iteração semanal. Cada empresa tinha objetivo claro (redução de tempo de contratação, aumento de qualidade de candidato), medido pré e pós.

O resultado foi composto. As iterações cruas, baseadas em uso real, calibraram a plataforma antes do go-to-market geral. As empresas-piloto viraram primeiros cases. Depois evangelistas. Depois canal de referência. A Gupy se tornaria, anos depois, uma das maiores plataformas de recrutamento da América Latina.

A lição transferível. Piloto estruturado com poucas empresas gera aprendizados cem vezes mais úteis que lançamento aberto sem foco. E os primeiros pilotos viram, se bem cuidados, os primeiros vendedores da sua empresa.

### PERGUNTAS A RESPONDER

- A solução proposta resolve o problema de forma percebida como superior pelo ICP?
- Em que faixa de preço ela cabe no orçamento da beachhead?
- Quais são os requisitos absolutamente indispensáveis (Must Haves)?
- Quais seriam dispensáveis no primeiro release?
- Como vou medir sucesso do MVP em noventa dias depois de lançar?
- Quais são os três principais riscos do MVP?

> [!note] Capítulo 13 (Vol. 4) — Customer Experience
> O teste de solução é o primeiro onboarding real do usuário com o conceito do produto. O [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 13 — CUSTOMER EXPERIENCE: DA JORNADA AO NPS AO CHURN ZERO|Capítulo 13 — Customer Experience (Vol. 4)]] cobre como medir e otimizar time-to-value desde essa fase — o tempo que o usuário leva para perceber o valor central é o dado mais preditivo de retenção futura, e deve ser rastreado já nas sessões de teste da Fase 9.

### SAÍDA DESTA FASE

Você concluiu a [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]] quando todos os critérios abaixo estão cumpridos.

- [ ] Protótipo de média fidelidade clicável (Figma, Webflow, Framer) com fluxos principais navegáveis.
- [ ] Três a cinco tarefas-chave de teste definidas, com critério de conclusão.
- [ ] Dez ou mais entrevistas de solução ou sessões de teste com think-aloud, com cinco dimensões avaliadas (Relevância, Urgência, Preferência, Diferenciação, Disposição a pagar). Urgência média ≥3 (≥4 é forte; <3 é alerta vermelho); Preferência média ≥4 sobre alternativa atual.
- [ ] Taxa de entendimento no teste de cinco segundos ≥70% (o que entendeu, para quem é, qual problema resolve).
- [ ] Faixa de preço aceitável definida por Van Westendorp, com limite superior identificado.
- [ ] Número de Must Haves entre cinco e dez (crítico se mais de quinze; volta e corta).
- [ ] Friction points documentados por tarefa e por usuário em matriz.
- [ ] Pelo menos uma iteração do protótipo baseada nos testes.
- [ ] Teste de precificação Van Westendorp aplicado, faixa de preço psicologicamente aceitável definida.
- [ ] Especificação do MVP (Template: Especificação de MVP (Fase 10)) escrita com todos os dez campos, MoSCoW com cinco a quinze Must Haves.
- [ ] Gate de Direcionalidade aprovado: a solução reduz ou elimina, de forma direta e mensurável, a dor identificada na beachhead.
- [ ] Scale Readiness Check com cinco itens marcados (comprador definido, workflow doloroso, titularidade de orçamento, urgência observável, suposições não-validadas listadas).

> [!warning] Critério de saída
> Se qualquer um desses itens falha, não avance. Especialmente o Gate de Direcionalidade e o Scale Readiness Check. Avançar para construção com algum item em aberto custa duas a três vezes mais em retrabalho.

**Primeiros passos práticos.**

1. Escolher a solução vencedora da [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]], e refinar em Figma clicável (ou Webflow ou Framer, se web).
2. Escrever três a cinco tarefas concretas que um usuário novo tentaria fazer (por exemplo, "faça um pedido de farinha para a próxima semana").
3. Agendar cinco sessões de teste de usabilidade de quarenta e cinco minutos cada.
4. Pedir think-aloud. "Fale em voz alta tudo que está pensando enquanto tenta a tarefa." Observar. Não guiar.

### Armadilhas

Bloat de escopo. Sem disciplina, o MVP cresce. Para cada Must Have, pergunte: "se eu tirasse isso, o produto ainda resolveria o *job* principal?". Se sim, não é Must.

Confiar em "eu pagaria". A resposta é sempre mais generosa na entrevista do que na carteira. Trate com desconto de cinquenta a setenta por cento.

Ignorar quem não usaria. Quando um entrevistado diz "não é para mim", isso é informação. Pergunte por quê. Às vezes revela que o seu ICP está mal definido.

Especificar sem mensuração. "O MVP deve ser intuitivo." O que é intuitivo? Operacionalize em métricas testáveis.

Acreditar que precificação está resolvida. Van Westendorp dá um ponto de partida. Não a resposta final. Preço real será descoberto em mercado.

---

### FERRAMENTAS DESTA FASE

Três essenciais para a fase; o restante fica como referência consultiva nos Manuais de Frameworks das Fases.7. Canvas complementar: Canvas: Empathy Map (Dave Gray / XPLANE, 2009) (Fase 4, Vol. 2).

**Essenciais para a Fase 9:**

- **Usability Testing** (Nielsen e Norman) — usuários completam tarefas, pesquisador observa. Cinco usuários identificam cerca de 85% dos problemas. Ferramenta central da fase. Framework: Usability Testing (Jakob Nielsen & Don Norman, anos 1990) (Fase 10).
- **Think-Aloud Protocol** (Ericsson e Simon, 1984) — participante verbaliza pensamentos durante a tarefa. Revela raciocínio em tempo real. Use junto com Usability Testing. Framework: Think-Aloud Protocol (K. Anders Ericsson & Herbert Simon, 1984) (Fase 10).
- **System Usability Scale (SUS)** (Brooke, 1996) — questionário de dez afirmações, score de zero a cem. Benchmark de setor: cerca de 68. Complementa o qualitativo com nota objetiva. Framework: System Usability Scale (John Brooke, 1986; publicado 1996) (Fase 10).

**Complementares (consulte conforme o caso):**

- Heuristic Evaluation (10 Heurísticas de Nielsen, para triagem rápida com especialistas), Cognitive Walkthrough (para learnability e onboarding), Card Sorting (para arquitetura de informação), Tree Testing (depois do card sorting). Detalhamento e quando usar cada uma em Framework: Heuristic Evaluation (Jakob Nielsen e Rolf Molich, 1990; 10 heurísticas refinadas em 1994) (Fase 10) a Framework: Tree Testing (Donna Spencer; Dave O'Brien e Optimal Workshop, 2011) (Fase 10).

---


---

### MÉTRICAS E BENCHMARKS DESTA FASE (FASE 10)

| Métrica | O que medir | Referência saudável |
|---|---|---|
| Task completion rate | % dos usuários que completam tarefa-chave no protótipo | ≥ 70% |
| Erros de usabilidade críticos | Erros que bloqueiam uso | 0 antes de seguir |
| SUS (System Usability Scale) | Score de usabilidade padronizado | ≥ 68 (acima da média) |
| Desejabilidade | % que diz "compraria" ou "usaria" | ≥ 60% do segmento-alvo |
| Net Promoter Score de protótipo | Intenção de recomendar | ≥ 40 |

---

### MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE

> [!tip] Uso autocontido neste volume
> Todos os frameworks abaixo estão detalhados integralmente com origem, estrutura, passo a passo de aplicação, exemplo brasileiro e armadilhas para execução imediata nesta **Fase 10**.

#### Framework: Usability Testing (Jakob Nielsen & Don Norman, anos 1990)

##### Origem

Jakob Nielsen e Don Norman fundaram a Nielsen Norman Group em 1998, após Nielsen popularizar testes de usabilidade via "discount usability engineering" nos anos 1990. A prática remonta antes (Xerox PARC nos anos 1970, Apple no desenvolvimento do Macintosh), mas Nielsen formalizou como método estruturado replicável. Steve Krug (*Don't Make Me Think*, 2000) popularizou versões simplificadas para times sem pesquisador dedicado.

##### O que é

Método de avaliação em que usuários representativos **tentam completar tarefas** em um produto enquanto pesquisadores **observam** as dificuldades encontradas. Foco em identificar problemas de usabilidade, não em validar ideia de negócio.

##### Princípios / estrutura

**5 usuários bastam?** Nielsen (2000) argumenta que 5 usuários identificam ~85% dos problemas de usabilidade, depois, retorno diminui drasticamente. Debate acadêmico continua (alguns contestam), mas para contextos de startup early-stage, 5-8 usuários por rodada é pragmático.

Tipos:

- Moderated: pesquisador presente, conduz sessão (in-person ou remota). Rico, caro.
- Unmoderated: ferramentas como UserTesting.com, Maze. Escala, menos profundo.
- Formative (formativo): durante design, rápido, iterativo.
- Summative (somativo): ao fim de ciclo, avalia atingimento de metas.

##### Como aplicar do jeito certo

Passo 1, Defina tarefas específicas, não avaliações gerais. "Crie sua primeira nota fiscal" > "veja se gosta do app".

Passo 2, Recrute representativos. Usuários que parecem ICP, não colegas.

Passo 3, Roteiro de 45-60 min com 4-6 tarefas.

Passo 4, Think-aloud protocol (Framework: Think-Aloud Protocol (K. Anders Ericsson & Herbert Simon, 1984) (Fase 10)): usuário verbaliza pensamento enquanto faz.

Passo 5, Observe + não ajude. Tentador dar dica, resiste. Ajudar destrói o teste.

Passo 6, Documente tudo: gravação, notas, screenshots.

Passo 7, Analise por severidade: problema que bloqueia vs. problema estético.

Passo 8, Priorize fix: alto-impacto + alto-frequência primeiro.

##### Exemplo aplicado

Teste de usabilidade de app de gestão financeira para PMEs (5 sessões):

Tarefas:

1. Criar cadastro (0-5 min esperado).
2. Importar primeira transação do extrato bancário.
3. Categorizar 5 transações.
4. Gerar relatório mensal.
5. Exportar para contador.

Problemas identificados (5 sessões):

- 5/5 usuários hesitaram em "Categorizar", termo confuso, preferem "Classificar".
- 4/5 tentaram importar extrato antes de cadastrar empresa, fluxo força ordem não-natural.
- 3/5 perderam-se ao buscar onde gerar relatório (ícone inadequado).
- 2/5 desistiram de exportar para contador.

Prioridades: renomear "Categorizar", permitir importação antes de cadastro (salvando onboarding), melhorar ícone de relatório.

##### Erros comuns

Testa com colegas ou amigos: feedback é superficial ou enviesado, Fundador guia o teste: "aqui você clicaria...". Destrói teste, Tarefa vaga: "teste o app" não gera dado, Análise só de "likes": "gostou?" é inútil, onde falhou?, Não iterar: testa, lista problemas, nunca corrige, Pula para quantitativo cedo: n=5 é qualitativo, não gera estatística.

##### Quando NÃO usar

Quando produto não existe ainda (use Wizard of Oz, prototype testing), Para validar ideia de negócio (usability testing assume que há produto valendo a pena).

##### Leitura adicional

- Nielsen, J. (1993). *Usability Engineering*. Morgan Kaufmann.
- Krug, S. (2000). *Don't Make Me Think*. New Riders.
- Krug, S. (2009). *Rocket Surgery Made Easy*. New Riders (usability testing simplificado).
- Norman, D. (1988). *The Design of Everyday Things*. Basic Books.

---

#### Framework: Heuristic Evaluation (Jakob Nielsen e Rolf Molich, 1990; 10 heurísticas refinadas em 1994)

##### Origem

O método de heuristic evaluation foi co-desenvolvido por Jakob Nielsen e Rolf Molich em 1990, formalizado no paper "Heuristic evaluation of user interfaces" (Proc. ACM CHI'90). Em 1994, Nielsen publicou "Enhancing the explanatory power of usability heuristics" (CHI'94) com a versão refinada das 10 heurísticas, derivadas de factor analysis de 249 problemas de usabilidade reais — versão que permanece em uso desde então. As heurísticas são princípios gerais, não regras rígidas. Base da avaliação heurística: especialistas comparam interface contra princípios consolidados e identificam violações.

##### O que é

Método de avaliação em que 3-5 especialistas em UX avaliam interface **independentemente** contra lista de heurísticas consolidadas, identificando violações. Complementa (não substitui) testes com usuários reais, mas é rápido e barato para triagem inicial.

##### Princípios / estrutura — As 10 Heurísticas de Nielsen

1. Visibilidade do status do sistema: usuário sempre sabe o que está acontecendo.
2. Correspondência entre sistema e mundo real: linguagem do usuário, não jargão técnico.
3. Controle e liberdade do usuário: "saídas de emergência" (desfazer, cancelar).
4. Consistência e padrões: mesma ação tem mesmo label em todo o produto.
5. Prevenção de erros: melhor que tratamento de erro é impedir erro.
6. Reconhecimento em vez de memorização: opções visíveis, não "lembrar onde fica".
7. Flexibilidade e eficiência de uso: atalhos para power users.
8. Design estético e minimalista: só o que é relevante.
9. Ajudar usuários a reconhecer, diagnosticar e se recuperar de erros: mensagens claras.
10. Ajuda e documentação: quando necessária, fácil de encontrar.

##### Como aplicar do jeito certo

Passo 1, 3-5 avaliadores independentes. Cada um vê ~30% dos problemas, juntos, 75%+.

Passo 2, Cada avaliador percorre a interface duas vezes. Primeira: visão holística. Segunda: cada tela contra cada heurística.

Passo 3, Documente violações: qual heurística + descrição + screenshot.

Passo 4, Severidade: 0 (não é problema), 1 (cosmético), 2 (menor), 3 (maior), 4 (catastrófico).

Passo 5, Consolidar achados.

Passo 6, Priorizar fixes: severidade 4 e 3 primeiro.

##### Exemplo aplicado

Heuristic evaluation de app fintech:

3 avaliadores identificam 47 violações agregadas:

- 12 violações de H1 (visibilidade do status): "operação em processamento" sem feedback.
- 9 violações de H2 (linguagem): jargão tech ("endpoint", "webhook") em tela de usuário final.
- 8 violações de H3 (controle): confirmações irreversíveis sem "cancelar".
- 7 violações de H5 (prevenção de erro): formulários que aceitam input inválido.
- 11 violações diversas.

Severidade: 4 violações catastróficas (severity 4), 15 maiores (severity 3).

Ação: fix dos 19 itens críticos antes de próxima release.

##### Erros comuns

Um único avaliador: detecta só 30% dos problemas, Avaliadores sem experiência: identificam violações superficiais, não profundas, Confundir com usability testing: heurística é avaliação de especialista, teste é de usuário, Não priorizar: lista de 100 violações sem severidade vira paralisia.

##### Quando NÃO usar

Substituto de usability testing com usuários reais (é complementar), Avaliador sem treinamento em UX.

##### Leitura adicional

- Nielsen, J. (1994). "Enhancing the Explanatory Power of Usability Heuristics". *CHI '94*.
- Nielsen Norman Group (articles em nngroup.com, inúmeros exemplos aplicados).

---

#### Framework: Cognitive Walkthrough (Polson, Lewis, Rieman, Wharton, 1992)

##### Origem

Desenvolvido por Cathleen Wharton e Clayton Lewis em University of Colorado em 1990-92, cognitive walkthrough focou em pessoas novas ao sistema, imitando como novato raciocina. Inspirado em teoria de aprendizado por exploração ("exploratory learning"). É complementar a heuristic evaluation, foca em tarefa específica em vez de avaliação holística.

##### O que é

Método em que avaliadores **simulam mentalmente** o que usuário novato pensaria e faria em cada passo de uma tarefa específica, identificando onde o fluxo quebra. Foco: **aprendizado ao usar pela primeira vez** (learnability).

##### Princípios / estrutura

4 perguntas centrais em cada passo:

1. O usuário vai tentar fazer a ação correta?
2. O usuário vai perceber que a ação correta está disponível?
3. O usuário vai reconhecer que a ação leva ao efeito desejado?
4. Após ação, o usuário vai entender o feedback do sistema?

Se qualquer resposta é "não", há problema de usabilidade.

##### Como aplicar do jeito certo

Passo 1, Defina tarefa específica (ex.: "primeiro usuário cria primeira nota fiscal").

Passo 2, Liste os passos corretos para completar a tarefa.

Passo 3, Avaliadores percorrem cada passo aplicando as 4 perguntas.

Passo 4, Documente onde falha.

Passo 5, Priorizar por impacto no onboarding.

##### Exemplo aplicado

Cognitive walkthrough de onboarding de SaaS:

Tarefa: "Novo usuário completa configuração inicial e faz primeira ação."

Passos corretos:

1. Criar conta.
2. Confirmar email.
3. Preencher info da empresa.
4. Importar primeiro dado.
5. Executar primeira ação (criar orçamento).

Walkthrough revelou:

- Passo 2: usuário pode não perceber que email precisa ser confirmado (botão "continuar" ainda visível).
- Passo 4: opções de importação confusas, usuário pode tentar a errada.
- Passo 5: após importar, interface não dá pista clara sobre "próximo passo".

Fixes propostos: bloquear continuação até confirmar email, tutoriais contextuais em passo 4, call-to-action claro após importação.

##### Erros comuns

Avaliadores assumem familiaridade: esquecem que são experts, novato não sabe nada, Walkthrough mecânico: aplicar as 4 perguntas rapidamente sem reflexão real, Só tarefa principal: ignoram paths alternativos que usuário pode tomar.

##### Quando NÃO usar

Usuários experientes (é método focado em learnability), Substituição de teste real com novatos.

##### Leitura adicional

- Wharton, C., Rieman, J., Lewis, C. & Polson, P. (1994). "The cognitive walkthrough method: A practitioner's guide". In Nielsen & Mack (eds.), *Usability Inspection Methods*. Wiley.

---

#### Framework: Card Sorting (vários, anos 1980-presente)

##### Origem

Método de psicologia cognitiva adaptado para design de informação nos anos 1980. Consolidou como técnica padrão em information architecture com Donna Spencer (*Card Sorting: Designing Usable Categories*, 2009) e Rosenfeld & Morville (*Information Architecture*).

##### O que é

Método para entender **como usuários mentalmente categorizam** conteúdo ou funcionalidades. Participantes recebem conjunto de cards (cada com item ou conceito) e organizam em grupos que fazem sentido para eles. Revela modelo mental do usuário, base para information architecture e menus de navegação.

##### Princípios / estrutura

Três variações:

1. Open card sort: usuário cria categorias próprias e nomeia. Melhor para entender modelo mental livre.
2. Closed card sort: categorias pré-definidas, usuário aloca cards em categorias dadas. Testa se categorias propostas fazem sentido.
3. Hybrid: categorias iniciais + permissão de criar novas.

##### Como aplicar do jeito certo

Passo 1, Selecione 30-60 cards representativos da informação/funcionalidade.

Passo 2, Recrute 15-30 participantes (números baseados em pesquisa de Spencer).

Passo 3, Instruções claras: "agrupe estes cards em categorias que façam sentido pra você".

Passo 4, Remoto ou presencial: ferramentas como Optimal Workshop, UserZoom facilitam remoto.

Passo 5, Análise: matriz de co-ocorrência (qual par de cards foi mais frequentemente agrupado).

Passo 6, Cluster analysis: dendrograma ou algoritmo para identificar categorias emergentes.

Passo 7, Teste resultados com tree testing (Framework: Tree Testing (Donna Spencer; Dave O'Brien e Optimal Workshop, 2011) (Fase 10)).

##### Exemplo aplicado

Card sort de 45 funcionalidades em SaaS financeiro (25 participantes):

Cards incluíam: "Criar nota fiscal", "Conciliar extrato bancário", "Gerar DRE", "Cadastrar cliente", "Relatório de fluxo de caixa", etc.

Resultado, categorias emergentes dos participantes:

- "Dia a dia": criação de notas, recebimentos, pagamentos.
- "Financeiro": DRE, fluxo de caixa, relatórios.
- "Cadastros": clientes, fornecedores, produtos.
- "Fiscal/Contábil": DARF, impostos, obrigações.
- "Bancário": conciliação, extrato, tesouraria.

Insight: 5 categorias, não 3 (como inicialmente previsto pelo time). Menu redesenhado em 5 módulos.

##### Erros comuns

Amostra pequena (< 15): resultados não generalizam, Cards ambíguos: participantes confusos, dados ruins, Ignorar variabilidade: focar em "média" mas variações entre participantes revelam sub-segmentos.

##### Quando NÃO usar

Produto com poucos itens (< 15-20 cards), Informação altamente hierárquica já definida por padrão da indústria.

##### Leitura adicional

- Spencer, D. (2009). *Card Sorting: Designing Usable Categories*. Rosenfeld Media.
- Rosenfeld, L., Morville, P. & Arango, J. (2015). *Information Architecture* (4th ed.). O'Reilly.

---

#### Framework: Tree Testing (Donna Spencer; Dave O'Brien e Optimal Workshop, 2011)

##### Origem

A técnica original em formato paper-based foi criada por Donna Spencer no contexto de information architecture. Dave O'Brien (Optimal Workshop, Nova Zelândia) implementou a primeira versão online via Treejack em 2011 e publicou guia editorial completo, tornando aplicação rotineira em UX research. Complementa card sorting: enquanto card sorting explora modelo mental, tree testing valida estrutura existente.

##### O que é

Teste que valida **se hierarquia de navegação funciona**. Participantes recebem tarefa ("Onde você iria para fazer X?") e navegam **apenas pela estrutura de menus** (sem interface visual, sem busca). Mede: taxa de sucesso, diretness do caminho, confiança.

##### Princípios / estrutura

Task formulada como pergunta: "Você quer fazer X. Onde você clicaria primeiro?"

**Tree** = hierarquia de links, sem UI. Isola navegação de outros fatores.

Métricas:

- Success: % que chegou no destino correto.
- Directness: % que foi direto (sem voltar atrás).
- Confidence: o quanto estavam seguros da escolha.
- Path analysis: onde a maioria erra? Qual categoria é magnética?

##### Como aplicar do jeito certo

Passo 1, Prepare estrutura a testar: árvore completa de menus.

Passo 2, Formule 5-10 tarefas representativas do que usuários querem fazer.

Passo 3, Recrute 30-50 participantes.

Passo 4, Ferramenta como Treejack conduz teste remotamente.

Passo 5, Analise por tarefa: quais tiveram baixa taxa de sucesso? Quais categorias confundem?

Passo 6, Iterar estrutura: mover item, renomear categoria, dividir categoria saturada.

##### Exemplo aplicado

Tree test de menu de SaaS financeiro (40 participantes):

Tarefa: "Onde você iria para **conciliar extrato bancário**?"

Resultado:

- 45% clicaram primeiro em "Financeiro" (caminho correto).
- 30% clicaram em "Bancário" (caminho incorreto mas plausível).
- 15% clicaram em "Dia a dia" (inesperado).
- 10% outros.

Success rate: 40% (baixa).

Ação: mover "Conciliação bancária" de "Financeiro" para "Bancário" (onde maioria esperava), ou duplicar em ambos.

##### Erros comuns

Tarefa enviesada: "ir para bancário e conciliar" sugere caminho, Amostra pequena: resultados instáveis, Testar só novos cenários: testar também fluxos atuais para validar que não piora.

##### Quando NÃO usar

Produto simples com menu óbvio, Em estágio onde estrutura ainda está em definição (card sorting primeiro).

##### Leitura adicional

- O'Brien, D. (2013). *Tree Testing*. Posts em optimalworkshop.com.
- Whitenton, K. (2016). "Tree Testing: Fast, Iterative Evaluation of Menu Labels and Categories". NNgroup.

---

#### Framework: Think-Aloud Protocol (K. Anders Ericsson & Herbert Simon, 1984)

##### Origem

Psicólogos K. Anders Ericsson e Herbert A. Simon (Nobel de Economia 1978) publicaram *Protocol Analysis: Verbal Reports as Data* em 1984, estabelecendo bases teóricas do método. Adaptado para HCI/UX em *Think Aloud* clássico de Jakob Nielsen nos anos 1990. Virou padrão de usability testing.

##### O que é

Método em que participante **verbaliza pensamentos** enquanto realiza tarefa. Dados capturam raciocínio em tempo real, não recall post-hoc. Revela o "por que" por trás das ações.

##### Princípios / estrutura

Dois tipos:

- Concurrent think-aloud: verbalização durante ação.
- Retrospective think-aloud: participante descreve após tarefa, vendo gravação.

**Concurrent é mais rico** mas pode interferir com cognição (especialmente tarefas complexas).

##### Como aplicar do jeito certo

Passo 1, Treine participante: "quero que você fale em voz alta o que está pensando enquanto faz a tarefa. Não é para me explicar, é para eu ouvir seus pensamentos. Pode ser fragmentos, dúvidas, tudo."

Passo 2, Pratique com tarefa neutra (1-2 min) para participante se acostumar.

Passo 3, Durante tarefa real, pesquisador fica em silêncio. Só intervém se participante para de falar por > 15 seg: "o que está pensando?"

Passo 4, Grave (audio + tela).

Passo 5, Analise: onde houve confusão? Onde expressou frustração? Onde pensou em abandonar?

##### Exemplo aplicado

Think-aloud de novo usuário em app de investimentos:

Usuário: "OK, entrei, vejo... meu saldo. Vou clicar em 'Investir'... hum, aparece 'Renda Fixa', 'Fundos', 'Ações'... não sei a diferença. Vou clicar em 'Renda Fixa' porque parece seguro... agora aparece 'CDB', 'LCI', 'Tesouro'... isso é confuso. Quem sou eu para decidir? Vou sair..."

Insight: novos usuários (sem literacy financeira) travam imediatamente com opções técnicas. Sem camada de educação ou wizard, conversão de onboarding é baixa.

##### Erros comuns

Pesquisador interrompe: interrompe pensamento genuíno, Participante explica em vez de pensar em voz alta: diferença sutil mas importante. Treino ajuda, Analisar só conclusões: os momentos de confusão ou pausa dizem mais.

##### Quando NÃO usar

Tarefas com cognição complexa demais (verbalizar atrapalha demais), Culturas onde "pensar em voz alta" é desconfortável.

##### Leitura adicional

- Ericsson, K. A. & Simon, H. A. (1984). *Protocol Analysis: Verbal Reports as Data*. MIT Press.
- Nielsen, J. (2012). "Thinking Aloud: The #1 Usability Tool". NNgroup article.

---

#### Framework: System Usability Scale (John Brooke, 1986; publicado 1996)

##### Origem

John Brooke desenvolveu SUS em 1986 na Digital Equipment Corporation para medir usabilidade de sistemas de escritório. Publicado formalmente em 1996. É a escala de usabilidade **mais usada no mundo**: milhares de estudos a aplicaram, permitindo benchmarks robustos. É disponibilizado gratuitamente em domínio público.

##### O que é

Questionário de **10 afirmações** com escala Likert 1-5, aplicado após usuário usar um sistema. Gera **score 0-100** de usabilidade, comparável com benchmarks.

##### Princípios / estrutura — As 10 afirmações

Alternadas positivas e negativas:

1. Eu gostaria de usar este sistema frequentemente.
2. Achei o sistema desnecessariamente complexo.
3. Achei o sistema fácil de usar.
4. Achei que precisaria de apoio técnico para usar este sistema.
5. Achei que as funções eram bem integradas.
6. Achei muita inconsistência neste sistema.
7. Imagino que a maioria aprenderia a usar rápido.
8. Achei o sistema muito incômodo de usar.
9. Senti-me muito confiante usando o sistema.
10. Precisei aprender muitas coisas antes de começar.

##### Como aplicar do jeito certo

Passo 1, Aplicar logo após uso real (não descrito, mas experiência).

Passo 2, Cálculo:

- Ímpares: subtrair 1 da resposta.
- Pares: 5 menos a resposta.
- Somar tudo.
- Multiplicar por 2.5.
- Resultado: 0-100.

Passo 3, Interpretação:

- < 50: baixa usabilidade.
- 50-68: média.
- 68-80: boa.
- \> 80: excelente.
- Média global histórica: ~68.

Passo 4, Benchmark com concorrentes (quando possível).

##### Erros comuns

Amostra pequena (< 20): baixa confiança estatística, Aplicar sem uso real: "com base na descrição" invalida, Interpretar score absoluto sem contexto: comparar com benchmark é chave, Ignorar que SUS é unidimensional: não captura preferências específicas, só usabilidade geral.

##### Quando NÃO usar

Produto muito específico sem precedente (benchmark falta), Substituir pesquisa qualitativa (SUS mede, não diagnostica).

##### Leitura adicional

- Brooke, J. (1996). "SUS: A 'quick and dirty' usability scale". In P. W. Jordan et al. (eds.), *Usability Evaluation in Industry*. Taylor & Francis.
- Lewis, J. R. & Sauro, J. (2009). "The factor structure of the System Usability Scale".

---

### TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE

#### Template: Especificação de MVP

**Para que serve.** Define o escopo mínimo viável com proposta de valor, persona foco, JTBDs, listas MoSCoW (must/should/could/won't), critérios de sucesso pós-90 dias e orçamento, prevenindo escopo inflado.

**Quando usar.** Ao concluir validação de problema e solução (Fases 3-7) e entrar em Fase 9 (construção). Refaça toda vez que o time quiser adicionar feature ao escopo. A regra é mover algo para "won't have" antes de adicionar novo "must".

**Exemplo de preenchimento.** Proposta de valor, "concilia repasses de marketplace em 5 minutos por mês". Persona foco, "Carla operações de farmácia, 5 a 15 unidades". Must haves, "import de extrato CSV, conciliação com regra de tolerância R$2, relatório por unidade". Won't haves, "integração API direta com adquirentes (fica para v2)". Critério pós-90 dias, "10 clientes pagantes, retenção D30 ≥80%, NPS ≥30".

```text
ESPECIFICAÇÃO DO MVP
Versão: ___ | Data: ___

PROPOSTA DE VALOR (uma frase)
___________________________________________

PERSONA FOCO (beachhead)
___________________________________________

JTBDs PRINCIPAIS A RESOLVER
1) _______________________________________
2) _______________________________________

MUST HAVES (máximo 15)
□ _______________________________________
□ _______________________________________
...

SHOULD HAVES (roadmap pós-MVP)
□ _______________________________________

COULD HAVES (se tempo permitir)
□ _______________________________________

WON'T HAVES (explicitamente fora)
× _______________________________________

CRITÉRIOS DE SUCESSO DO MVP (após 90 dias)
- Usuários ativos: _____
- Retenção D30: _____
- Conversão trial → pago: _____
- NPS mínimo: _____

FAIXA DE PREÇO PLANEJADA
R$ ____ a R$ ____

CANAIS DE AQUISIÇÃO INICIAIS
1) _______________________________________
2) _______________________________________

PRAZO DE DESENVOLVIMENTO
Início: ___ Lançamento: ___

ORÇAMENTO
R$ _____
```

---

#### Template: Roteiro de Teste de Usabilidade

**Para que serve.** Estruturar uma sessao de teste de usabilidade com usuario real, garantindo que voce observa comportamento e nao opiniao.

**Quando usar.** Quando voce tem prototipo navegavel ou MVP funcional e quer descobrir onde os usuarios travam. Tipicamente 5 a 8 sessoes individuais de 45 a 60 minutos.

**Exemplo de preenchimento.** Sessao para testar app de pagamentos B2B com PME do varejo.

```
ROTEIRO DE TESTE DE USABILIDADE
Versao: ___ | Data: ___ | Participante: ___

1. RAPPORT (5 minutos)
- Apresentacao do testador e do contexto da sessao
- Confirmacao de que a sessao sera gravada
- Esclarecimento, "estamos testando o produto, nao voce"

2. PERFIL E CONTEXTO (5 minutos)
- Que ferramentas a pessoa usa hoje para o problema X?
- Frequencia e contexto de uso

3. TAREFAS (30 minutos)
- Tarefa 1, [descrever cenario sem dar instrucao especifica]
- Tarefa 2, idem
- Tarefa 3, idem

Em cada tarefa, observar e nao explicar.

4. PROBES (5 minutos)
- "Voce mencionou que travou em X. Conte mais."
- "Se voce pudesse mudar uma coisa, qual seria?"

5. ENCERRAMENTO (5 minutos)
- Agradecimento
- Compensacao se houver
```

---

### SÍNTESE DA FASE 10

A [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]] é a última ponte antes da construção. A diferença em relação à [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]] é de profundidade e comprometimento: a [[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9]] produziu conceitos testados em protótipo; a [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]] converte os aprendizados em especificação vinculante — o que o MVP fará, para quem, com quais limitações, e como medirá sucesso.

MoSCoW separa o MVP do produto sonhado. Van Westendorp antecipa o erro caro de descobrir tarde que o cliente nunca pagaria o preço imaginado. User stories INVEST impedem o gold-plating da primeira versão. Quem trata a [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]] como burocracia e pula direto para a construção descobre que estava construindo coisa diferente do que precisava. Retrabalho de MVP custa duas a três vezes mais do que retrabalho de spec.

---

### Transição: do Volume 3 (Hipóteses, Experimentos e Prototipagem) para o Volume 4 (Tração e PMF)

O que você acabou de fazer ao longo dos **Volumes 1, 2 e 3 (Fases 0 a 10)**: preparou-se como fundador, gerou ideias com método e construiu a teoria causal do negócio (Vol. 1); descobriu problemas reais em campo e mapeou usuários, mercado e cunha (Vol. 2); formulou hipóteses *bet-the-company*, validou as centrais com experimentos rigorosos, prototipou, testou com usuários reais e chegou a uma especificação de MVP com escopo disciplinado (*MoSCoW*) e *pricing* testado (Vol. 3). Os **9 capítulos** a seguir deste volume entregam o aparelho do método científico, os *gates* de evidência e os playbooks de arquiteturas de modelo de negócio (*Marketplaces*, *Plataformas*, *B2B2C* e *Open Source*).

O próximo passo está no **Volume 4 — Tração, Go-to-Market e Product-Market Fit (Fases 11 a 13)**: colocar o MVP em produção com clientes reais na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]], validar a equação econômica e os canais na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]] e comprovar o *Product-Market Fit* na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]].

> [!important] Sinais de progresso versus sinal de PMF
> Sinal de progresso: usuários pagantes em uso real do MVP. Sinal de PMF: Sean Ellis maior ou igual a quarenta por cento, mais retenção estabilizada, mais crescimento orgânico.

---

# METODOLOGIA CIENTÍFICA, MATURIDADE E GATES DE EVIDÊNCIA (CAPÍTULOS 1 A 4)

### Arquitetura deste Domínio: O Rigor do Método Científico e os Gates de Passagem (Capítulos 1 a 4)

Por que empreendedores inteligentes constroem produtos que ninguém compra? Porque tratam validação como um ritual burocrático para confirmar o que já decidiram fazer. Estes quatro capítulos fornecem o **aparelho epistemológico e de governança** das Fases 7 a 10:

- **[[IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario#C|Capítulo 1 — A Abordagem Científica ao Empreendedorismo (Vol. 10)]]:** Os experimentos de Camuffo, Gambardella e Spina (Bocconi/MIT) mostrando como fundadores que operam como cientistas geram mais receita, pivotam com mais precisão e desperdiçam menos capital (inclui a bibliografia acadêmica comentada).
- **[[IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario#C|Capítulo 2 — Sistema de Níveis de Maturidade por Dimensão (Vol. 10)]]:** Como avaliar se Problema, Persona, Proposta de Valor, Canal e Modelo estão no nível de evidência exigido ou se uma dimensão atrasada vai derrubar as demais.
- **[[IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario#C|Capítulo 3 — Gates de Evidência (Vol. 10)]]:** As travas objetivas que impedem o avanço prematuro para o código sem evidência comportamental sólida.
- **[[#CAPÍTULO 4 — COMO FECHAR UMA FASE: COMMITTED NEXT MOVE E SINAIS OBSERVÁVEIS|Capítulo 4 — Como Fechar uma Fase (Committed Next Move)]]:** O protocolo operacional de fechamento de cada fase — como definir o próximo passo comprometido e os quatro formatos de sinais observáveis.

---

## CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA

> [!important] Para o framework Antler em detalhe
> Este capítulo articula tres frameworks (cientifico, operacional, jornada PSF para PMF). Antler e o quarto framework relevante e merece tratamento proprio em [[#CAPÍTULO 5 — IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL|Capítulo 5 (IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL)]]. Aqui ele e mencionado, la e desdobrado.

> [!abstract] Como ler a Fatia Frameworks e Casos
> Esta fatia tem tres trilhas independentes,
>
> **Trilha de Decisao** (use quando precisa decidir agora). F (frameworks fundacionais) → G (gates) → L (Antler) → B (fechamento de fase) → EJ (decisao como disciplina)
>
> **Trilha de Casos e Aprendizado** (use quando quer evitar fracasso). AI (padroes) ↔ BH (casos) → BF (second-time)
>
> **Trilha de Catalogos e Capital Humano** (use como referencia de consulta). C (metricas) → D (vieses) → E (leituras) → AK (programas) → AL (rede) → EF (macro)

Esse manual se baseia na abordagem científica ao empreendedorismo, Camuffo et al., 2020, 2024, Felin et al., 2024, Coali et al., 2024, que tem pontos em comum com o Lean Startup, Ries, 2011, Blank, 2013, Maurya, 2016, mas se distingue em aspectos importantes. Entender essas diferenças ajuda você a escolher a ferramenta certa para cada tipo de decisão.

### Fundamentação acadêmica, as duas tradições por trás dos frameworks

Para entender por que esses dois frameworks coexistem (e por que nenhum é "certo" isoladamente), vale saber a linhagem intelectual de cada um. Ott et al. (2017) categoriza as abordagens à tomada de decisão em incerteza em duas famílias.

A primeira família é a das *cognition-based approaches* (abordagens baseadas em cognição). Elas pressupõem que decisores conseguem compreender o mercado e o comportamento do cliente ao raciocinar através de modelos mentais e estruturas cognitivas. A estratégia emerge de uma representação mental clara do problema. Os principais autores são Csaszar (2018), Csaszar e Laureiro-Martínez (2018), Csaszar e Levinthal (2016), Gary e Wood (2011), Walsh (1995), Felin e Zenger (2009, 2017), Ehrig e Schmidt (2022). O insight central é simples: pensar primeiro (teoria, atributos, causas), agir depois. Uma boa representação cognitiva reduz o espaço de busca.

A segunda família é a das *action-based approaches* (abordagens baseadas em ação). Elas pressupõem que a estratégia se forma iterativamente a partir do feedback de um conjunto inicial de ações. O aprendizado emerge da experimentação controlada. Os autores principais são Ries (2011), Blank (2013), Bingham e Davis (2012), Bingham e Eisenhardt (2011). O insight central inverte o anterior: fazer primeiro (MVP, experimentos), aprender depois. O contato com o mercado gera dados que o modelo mental não consegue antecipar.

A abordagem científica é uma síntese (Ott e Eisenhardt, 2020. Camuffo et al., 2020, 2024). Ela começa cognition-based (teoria, atributos, hipóteses) e passa a action-based (experimentos, evidência, avaliação). As duas tradições não são mutuamente exclusivas. São complementares quando integradas. O Lean Startup enfatiza fortemente a tradição action-based. A abordagem científica integra as duas com igual peso.

### Evidência empírica, os RCTs que mudaram a discussão

A abordagem científica não é só filosofia. Tem evidência empírica robusta de múltiplos RCTs (Randomized Controlled Trials) que comparam empreendedores treinados para usar a abordagem científica com grupos de controle que usam abordagens tradicionais.

Camuffo et al. (2020) fizeram o primeiro RCT, com cento e dezesseis startups italianas. Empreendedores treinados na abordagem científica apresentaram seleção de projetos melhor e performance de receita superior.

Camuffo et al., working paper 2024, com aproximadamente 750 empreendedores em quatro países (a publicação final poderá ajustar números). Os resultados foram consistentes em três dimensões: taxa maior de terminação de projetos (sinal de seleção mais honesta, não de fraqueza), pivôs mais focados (em vez de mudanças aleatórias) e receita realizada superior no período de observação.

Agarwal et al. (2024) rodaram um RCT na Tanzânia, no setor agrícola, com foco em theory-building. Empreendedores treinados em scientific approach com ênfase em teoria tiveram performance econômica superior e fizeram mudanças mais holísticas no modelo de negócio.

Novelli e Spina (2024) analisaram a moderação por estágio. O benefício da abordagem científica varia conforme o estágio de desenvolvimento do modelo de negócio. Empreendedores com modelo já parcialmente comprometido se beneficiam rapidamente (ajuste fino). Empreendedores ainda muito cedo são "puxados de volta à prancheta" com aumento temporário de incerteza epistêmica, mas com retornos positivos de longo prazo.

Coali et al. (2024), em análise longitudinal, mostraram que empreendedores científicos não descartam projetos melhores. Não há viés de excesso de terminação. Os projetos selecionados são, em média, melhores que os do grupo de controle, com performance superior persistente anos após o treinamento.

> [!info] Implicações para o leitor
> Quando esse manual insiste em formulação de teoria antes de teste, em thresholds ex-ante, em due diligence de amostra, não é rigor por rigor. É tradução de achados empíricos que mostram diferenças mensuráveis de performance entre empreendedores que aplicam esses princípios e os que pulam direto para "construir e ver". A abordagem tem custo, tempo de teorização, desconforto de falsificar as próprias teses, mas o retorno é sistemático.

### Pontos em comum

Ambas as abordagens recusam a ideia de plano de negócios extenso como ponto de partida. Tratam o empreendedor como alguém que precisa sair do prédio e buscar evidência real no mercado. Usam hipóteses testáveis e experimentação como motor de aprendizado. Preferem falhar cedo e barato a falhar tarde e caro. E valorizam MVPs e iteração.

### Diferenças fundamentais

| Dimensão | Lean Startup | Abordagem Científica |
|---|---|---|
| **Ponto de partida** | Hipóteses sobre o modelo de negócio (BMC/Lean Canvas) | Teoria causal explícita dos atributos e suas relações (Árvore de Teoria, DAG) |
| **Premissa sobre o cliente** | Assimetria de **informação**: o cliente tem conhecimento que o empreendedor precisa extrair | Assimetria de **crenças**: empreendedor e cliente têm representações diferentes do mundo, e a do empreendedor pode gerar valor novo |
| **Função da teoria** | Geralmente implícita, teoria emerge dos testes | Explícita e anterior, teoria guia quais testes vale a pena fazer |
| **Escolha de experimentos** | Iterativa, "construir-medir-aprender" baseado em aprendizado recente | Deliberada, experimentos escolhidos para testar os atributos bet-the-company primeiro |
| **Papel da probabilidade** | Pouco formalizado | Explícito, empreendedor atribui crenças subjetivas antes de testar |
| **Threshold de decisão** | Frequentemente formado após olhar os dados | Definido ex-ante e ajustado apenas por due diligence da amostra |
| **Resposta a resultado negativo** | Pivotar rápido para próxima hipótese | Comparar com a teoria completa, pivô pode ser dentro da teoria, mudança de teoria, ou abandono |
| **Natureza** | Mais adaptativa e representacional (espelhar o mercado existente) | Mais generativa (criar novas fontes de valor a partir de uma visão teórica) |

### Quando cada abordagem brilha

O Lean Startup é mais útil quando o problema é relativamente estruturado e há exemplos de negócios similares no mercado. Quando o custo marginal de experimentar é muito baixo (produto cem por cento digital, com usuários abundantes). Quando você tem muitos dados disponíveis sobre comportamento do mercado. Quando a solução é incremental, não radical. E quando a velocidade de iteração é mais importante que a profundidade de uma única decisão. Exemplo típico: app de produtividade em mercado com dezenas de concorrentes, onde a questão é "qual feature específica resolve melhor?".

A abordagem científica é mais útil quando o problema é Knightiano, com alta incerteza, poucos precedentes e nenhum mercado comparável. Quando experimentar é caro (produto físico, regulado, B2B enterprise). Quando as decisões são "low-frequency, high-impact" e erros grandes têm consequência grande. Quando a solução é potencialmente radical ou depende de mudança de comportamento. Quando você precisa reduzir o espaço de solução antes de gastar dinheiro em testes. Exemplo típico: hardware médico, novo mercado em país emergente, plataforma B2B com venda consultiva longa, biotecnologia.

### Como combinar as duas

Na prática, os bons empreendedores usam as duas de forma integrada.

Comece científico nas Fases 0 a 6 desse manual. Gaste tempo na teoria, atributos, hipóteses, thresholds. Isso reduz drasticamente o risco de testar a coisa errada nos meses seguintes.

Vire lean quando a teoria central estiver validada, nas Fases 7 a 10. Uma vez que você sabe que o problema é real, o ICP está certo, e há disposição a pagar, o ciclo construir-medir-aprender se torna muito eficaz. A teoria já filtrou as apostas ruins, agora é hora de iterar rapidamente sobre os detalhes.

Volte ao modo científico em decisões estratégicas grandes na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]] em diante. Quando precisar decidir sobre novo mercado, expansão internacional, novo produto, rodada de investimento ou mudança significativa de modelo, volte à árvore de teoria. Essas são novamente decisões de baixa frequência e alto impacto.

> [!warning] O erro mais comum
> Aplicar lean onde a abordagem científica é necessária (iterar muito sem teoria produz confusão e custo). Ou abordagem científica onde lean bastaria (teorizar demais quando o problema já está bem definido desacelera o aprendizado). Conheça seu contexto.

### Glossário comparativo rápido

"Hipótese" no Lean Startup é tipicamente sobre o modelo de negócio (por exemplo, "clientes B2B vão adotar auto-serviço"). Na abordagem científica, hipóteses são derivadas explicitamente de uma teoria causal sobre atributos do problema e da solução.

"Pivot" no Lean Startup é uma mudança de direção após aprendizado. Na abordagem científica, o pivô é informado pela teoria alternativa já mapeada. Você já sabia quais eram as direções possíveis.

"MVP" no Lean Startup é um produto mínimo que gera aprendizado. Na abordagem científica, o MVP é um experimento específico que testa uma hipótese específica derivada da teoria. Não é uma versão genérica do produto.

"Validado" no Lean Startup tende a significar "resultado positivo no último experimento". Na abordagem científica, validação é a convergência entre a teoria inicial, os resultados ajustados por due diligence da amostra, e a comparação com explicações alternativas.

### Como os três frameworks desse manual se relacionam

O manual articula três frameworks complementares. Empreendedores iniciantes às vezes se confundem sobre qual usar quando. Esse mapa esclarece.

O primeiro é a Abordagem Científica ao Empreendedorismo (Coali, Camuffo, Novelli, Spina e outros). É uma metodologia acadêmica de tomada de decisão baseada em teoria explícita mais hipóteses falsificáveis mais evidência rigorosa mais avaliação objetiva. Aparece na Introdução (com os cinco princípios), na [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]] (teoria), na [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]] (hipóteses), na [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]] (experimentos mais due diligence mais thresholds), e como ossatura metodológica de todas as fases. As ferramentas centrais são Story Tree, DAG, Theory Map, Hypothesis Canvas. Priorize esse framework em decisões de alta incerteza e alto impacto (contextos Knightianos), em estágios iniciais, em deeptech, em B2B enterprise com ciclo longo.

O segundo é o Operacional-prático (YC, Antler, João Prado, Blank, Maurya). Reúne heurísticas e frameworks de operadores de campo para diagnosticar qualidade de ideia, estreitar foco, e tomar decisões rápidas. Aparece nos filtros de problema ideal ([[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]]), Pain Levels ([[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]]), Estratégia da Cunha ([[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]]), Sistema H/E ([[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]]), Ciclo MVP em três fases ([[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]]), Framework de Decisão por Gates ([[#CAPÍTULO 2 — FRAMEWORK DE DECISÃO POR GATES (PROBLEM CORE + SCALE LEVERS + EXPLORATORY)|Capítulo 2 (FRAMEWORK DE DECISÃO POR GATES (PROBLEM CORE + SCALE LEVERS + EXPLORATORY))]]). Ferramentas centrais: Canvas da Cunha, scorecard de dez gates, Mom Test cheat sheet. Priorize esse framework para avaliação rápida de ideia, tomada de decisão sobre captação ou expansão, e diagnóstico de saúde do negócio em qualquer momento.

O terceiro é a Jornada PSF para PMF para Escala (Maurya, Moore, Ries). É o modelo de estágios pelo qual toda startup passa, cada um com clientes-alvo, métricas e focos diferentes. Aparece na distinção PSF versus PMF na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]], no ciclo de saturação de dezoito meses, na transição entre Fases 10 e 11. Ferramentas centrais: Sean Ellis Test, escolha de canvas por estágio (Opportunity Canvas para Lean Canvas para BMC). Priorize quando precisar saber em que ponto do ciclo você está e qual é o próximo milestone realista.

Como os três se encaixam na prática? No começo (Fases 0 a 1B), o Framework 1 (científico) domina. Você constrói teoria explícita com atributos e causas. O Framework 2 ajuda a filtrar se o problema tem qualidade (seis dimensões YC, cinco heartfelt). O Framework 3 te situa: você está em pré-PSF, começando o ciclo.

Na descoberta de problema e mercado (Fases 2 a 4), o Framework 2 domina na execução (Mom Test, Pain Levels, Cunha). O Framework 1 garante rigor metodológico (entrevistas estruturadas, saturação, evidência diferente de opinião). O Framework 3 é referência silenciosa, ainda pré-PSF.

Nas hipóteses e experimentos (Fases 5 e 6), os Frameworks 1 e 2 se fundem. O Framework 1 dá a disciplina (falsificabilidade, threshold ex-ante, due diligence de amostra). O Framework 2 dá a priorização operacional (R vezes I e H sobre E). O Framework 3 diz em qual tipo de validação você está (problema, oferta, ou solução).

Na construção de solução e MVP (Fases 7 a 9), o Framework 2 domina (ciclo MVP em três fases). O Framework 1 entra quando você precisa decidir entre alternativas competidoras (DAG comparando duas teorias da solução). O Framework 3 te diz: você está atravessando pré-PSF para PSF.

Na validação de modelo e PMF (Fases 10 e 11), o Framework 3 domina (PSF para PMF com métricas e sinais). O Framework 2 entra no Framework de Decisão por Gates ([[#CAPÍTULO 2 — FRAMEWORK DE DECISÃO POR GATES (PROBLEM CORE + SCALE LEVERS + EXPLORATORY)|Capítulo 2 (FRAMEWORK DE DECISÃO POR GATES (PROBLEM CORE + SCALE LEVERS + EXPLORATORY))]]). O Framework 1 é revisitado toda vez que uma decisão estratégica grande é feita (captar, expandir, pivotar).

Na estruturação e escala (Fases 12 e 13), os três frameworks quase desaparecem e entram outros (governança, finanças, recrutamento). Mas voltam em pontos específicos. Por exemplo, ao abrir novo mercado, você retorna ao Framework 1 (teoria do novo mercado) e ao Framework 2 (cunha do novo mercado).

> [!question] Confusões comuns entre as ferramentas
> "Uso R vezes I ou H sobre E para priorizar hipóteses?" Os dois, para propósitos diferentes. R vezes I (Risco vezes Incerteza) prioriza o que testar primeiro, quais hipóteses podem matar o negócio se falharem. H sobre E (Hypothesis Strength sobre Evidence Strength) informa quando investir capital. Não invista em nada com H abaixo de sete ou E abaixo de seis.
>
> "Fase 7 e Fase 10 ambas falam em Landing Page e Concierge. Preciso fazer duas vezes?" Não. Fase 6 usa essas técnicas para validar problema (dor existe? é dolorida? tem disposição a pagar?). Fase 9 usa as mesmas técnicas dentro do ciclo MVP para validar solução (a feature X realmente resolve? em qual versão?). Mesma ferramenta, pergunta diferente.
>
> "Sean Ellis quarenta por cento aparece em várias fases. É a mesma medida?" Sim, mas aplicada em escopos diferentes. Na Fase 10, você mede em cerca de dez usuários pioneiros para detectar sinal precoce. Na Fase 12, em centenas, para confirmar PMF. Na descrição PSF, pode ser aplicado ao nicho inicial (cerca de vinte evangelists). O threshold de quarenta por cento é o mesmo, a população muda.
>
> "Pain Level, CRL, PSF/PMF, Moore's Chasm, qual taxonomia devo usar para meus clientes?" Use em conjunto. Pain Level (um a cinco) classifica cada entrevistado individualmente. CRL (um a sete) classifica a maturidade da sua relação com o mercado como um todo (útil em editais). PSF/PMF classifica o estágio da sua startup. Moore classifica em qual onda de adoção você está (early adopters, early majority, late majority).
>
> "Árvore de teoria é o mesmo que Business Model Canvas?" Não. BMC é um inventário de blocos (o que você tem). Árvore de teoria é uma rede causal (por que funciona). O Theory Map ([[#TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE|Templates Operacionais da Fase]].9) conecta os dois explicitamente.

Tabela de tradução entre taxonomias de cliente e produto:

| Pain Level | CRL | PSF/PMF | Moore's Chasm |
|---|---|---|---|
| 1 (tem problema, nem sabe) | CRL 1 | Pré-descoberta | — |
| 2 (sabe que tem) | CRL 2 | Descoberta | — |
| 3 (procurando solução) | CRL 3 | Pré-PSF / Descoberta | Innovator |
| 4 (improvisou solução feia) | CRL 4 | PSF em validação | Early adopter |
| 5 (orçamento comprometido) | CRL 5-6 | PSF validado / PMF inicial | Early adopter / Early majority |
| — | CRL 7 | PMF estabelecido | Early majority |

> [!important] Regra final dos três frameworks
> Nenhum dos três é suficiente sozinho. Um empreendedor que só usa o Framework 1 (científico) teoriza demais e age pouco. Um que só usa o Framework 2 (operacional) toma atalhos e acumula decisões mal-fundamentadas. Um que só usa o Framework 3 (jornada) acerta o estágio mas não sabe o que fazer dentro dele. Os três são necessários e se reforçam mutuamente.

### Escolha de canvas por estágio: Opportunity, Lean, BMC

Uma confusão recorrente entre empreendedores iniciantes é qual "canvas" usar. Existem vários, e a maioria os trata como intercambiáveis. Não são. Cada canvas é otimizado para um estágio diferente do negócio. Usar o canvas errado no estágio errado produz documentos que parecem estruturados mas não ajudam em decisão nenhuma.

Há três canvases principais, e a ordem de uso importa.

O **Opportunity Canvas** é a ferramenta das Fases 1 a 4 (pré-PSF inicial). Seu propósito é avaliar se uma oportunidade específica merece investimento de desenvolvimento, antes de escrever a primeira linha de código. O foco é granular: usuários e clientes, problemas, soluções atuais, ideia de solução, o que os usuários vão fazer para obter valor, estratégia de adoção, métricas de usuário, desafios de negócio, budget, impacto de negócio. Use quando você tem uma ideia preliminar e precisa decidir se a oportunidade vale o custo de desenvolvimento. É útil em empresas estabelecidas com muitas ideias competindo por recursos e em startups em pré-seed avaliando pivots. Não use em negócios já em validação avançada. O Opportunity Canvas fica estreito para representar um modelo de negócio completo.

O **Lean Canvas** é a ferramenta das Fases 5 a 10 (alta incerteza, MVP, validação de modelo). Seu propósito é estruturar hipóteses de negócio sob alta incerteza, com foco em aprender rápido. Substitui o BMC quando o que importa é testar o problema e a solução antes de otimizar o modelo. Os nove blocos são Problema, Solução, Métricas-Chave, Proposta Única de Valor, Vantagem Injusta (esses cinco substituem os blocos do BMC focados em execução), mais Segmentos de Clientes, Canais, Estrutura de Custos e Fontes de Receita. Use em startup em estágio inicial, com alta incerteza sobre problema, cliente ou solução. Iterações rápidas (revise semanalmente ou quinzenalmente). Não use em negócios com modelo já validado, onde o foco é execução e expansão, ou em conversas com parceiros estratégicos corporativos que querem ver o BMC "sério".

O **Business Model Canvas (BMC)** é a ferramenta da [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]] em diante (pós-PSF, estruturação, escala e revisão no ciclo longo). Seu propósito é descrever o modelo de negócio já funcionando de forma compreensível para stakeholders externos. É visão macro, parceiros, canais de escala, estrutura de custos. Os nove blocos são Parceiros-Chave, Atividades-Chave, Recursos-Chave, Proposta de Valor, Relacionamento com Clientes, Canais, Segmentos de Clientes, Estrutura de Custos e Fontes de Receita. Use quando o negócio tem PMF confirmado, está buscando investimento Série A ou superior, está buscando parcerias estratégicas, ou está consolidando operação. Use também na [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]] (reinvenção) para revisar explicitamente o modelo vigente antes de desenhar a segunda curva, e na [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]] (exit) como documento de referência para due diligence e equity story. Não use em estágios iniciais de incerteza. O BMC incentiva otimização prematura porque seus blocos assumem que você já sabe o modelo, quando o ponto de uma startup inicial é descobri-lo. Na [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]], quando a segunda curva exige testar hipóteses novas sob alta incerteza, volte ao Lean Canvas para a curva nova enquanto mantém o BMC para o negócio principal.

> [!warning] O erro típico do iniciante
> Começar direto pelo BMC porque é o mais famoso. Resultado: nove blocos preenchidos com suposições disfarçadas de fatos, que ninguém testa depois. O caminho correto é subir na escada de canvases conforme a incerteza diminui.

| Estágio | Canvas principal | Por que |
|---|---|---|
| Ideia solta, múltiplas oportunidades competindo | Opportunity Canvas | Decidir qual oportunidade priorizar |
| Validação de problema e solução em curso | Lean Canvas | Estruturar hipóteses para teste |
| PSF confirmado, preparando PMF e captação | BMC | Comunicar modelo a stakeholders externos |
| Reinvenção ([[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]]), segunda curva em exploração | Lean Canvas (para a curva nova) e BMC (para o core) em paralelo | Curva nova volta a ter incerteza alta, core existente precisa de clareza para stakeholders |
| Exit ([[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]]), preparação e execução | BMC como referência canônica | Base para due diligence, tax structuring e equity story |

Cada canvas é a ferramenta certa para o seu momento. Usar o canvas errado não é neutro. É atraso disfarçado de produtividade.

Vale notar que canvases não se substituem completamente. Mesmo depois de ter BMC, você revisita Lean Canvas ao entrar em novo segmento de mercado (a incerteza volta a subir). E mesmo depois de Lean Canvas, você revisita Opportunity Canvas ao avaliar se vale expandir para produto adjacente. É uma escada, mas você pode descer degraus conforme a incerteza do problema aumenta.

### Sobre o quarto framework: Idea, Wedge, Scale (Antler)

O framework Antler tem desdobramento proprio em [[#CAPÍTULO 5 — IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL|Capítulo 5 (IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL)]] por densidade conceitual e integracao tematica ao manual.

---

### Como os três frameworks se reconciliam fase a fase

Este capítulo já cobriu a integração entre os frameworks científico (João Prado), operacional (YC e Antler), e descoberta contínua (Teresa Torres). Essa seção sumariza a reconciliação por fase em forma compacta.

| Fase | Framework dominante | Por que |
|---|---|---|
| 0 a 2B | Cientifico | Ideacao com hipoteses falsificaveis antes de construir |
| 3 a 6 | Lean Startup com Cientifico | Discovery rapido com threshold ex-ante |
| 7 a 10 | Lean Startup | Build-measure-learn em ciclos curtos |
| 11 a 13 | Cientifico de novo | Decisoes maiores (rodada, escala) precisam de threshold rigoroso |
| 14 em diante | Hibrido | Operacao ja madura, escolha por tipo de decisao |

> [!important] Princípio geral
> Nenhum framework desaparece em nenhuma fase. O que muda é qual está em primeiro plano. Fundador iniciante que usa só um framework em todas as fases está sub-otimizando. Reconhecer em qual modo estar e quando trocar é parte do método.

> [!info] Fases relacionadas
> Referenciado em: Fase 1, Fase 2.

---

### LEITURAS E REFERÊNCIAS COMPLEMENTARES

Camuffo, A., Cordova, A., Gambardella, A., e Spina, C. (2020). *A scientific approach to entrepreneurial decision making: Evidence from a randomized control trial*. Management Science. O estudo fundador que mostrou efeito positivo sobre performance. Camuffo, A., Gambardella, A., Messinese, D., Novelli, E., Paolucci, E., e Spina, C. (2024). *A scientific approach to entrepreneurial decision-making: Large-scale replication and extension*. Strategic Management Journal. Replicação em larga escala (mais de setecentos e cinquenta empreendedores) confirmando os achados. Coali, A., Novelli, E., Sirigiri, A., e Spina, C. (2024). *A scientific approach to decision-making: Key tools and design principles*. Journal of Business Venturing Design. O paper-fonte dos conceitos de atributos, teoria do negócio, thresholds e due diligence de amostra usados nesse manual. Felin, T., Gambardella, A., Novelli, E., e Zenger, T. (2024). *A scientific method for startups*. Journal of Management. Diferenças conceituais entre abordagem científica e Lean Startup. Novelli, E., e Spina, C. (2024). *Making business model decisions like scientists: Strategic commitment, uncertainty and economic performance*. Strategic Management Journal. Como o estágio de desenvolvimento do negócio modera o efeito da abordagem científica. Agarwal, R. et al. (2024). *Does a theory-of-value add value? Evidence from a Randomized Control Trial with Tanzanian Entrepreneurs*. Evidência do valor específico do componente de construção de teoria em contexto emergente. Ehrig, T., e Schmidt, J. (2022). *Theory-based learning and experimentation*. Strategic Management Journal. Fundamentação sobre como estratégias são geradas a partir de teorias. Zellweger, T. M., e Zenger, T. R. (2021). *Entrepreneurs as scientists: A pragmatist approach to producing value out of uncertainty*. Academy of Management Review. Perspectiva filosófica sobre empreendedor-cientista.

---

## CAPÍTULO 2 — FRAMEWORK DE DECISÃO POR GATES (PROBLEM CORE + SCALE LEVERS + EXPLORATORY)

> [!note] Quando aplicar
> Este capítulo é um sistema de avaliação numérica que você aplica à sua ideia em qualquer fase. É útil ao final da Fase 5, para decidir se prossegue, e ao final da Fase 11, para decidir se levanta capital ou escala. O framework combina o Sistema H/E, ver Fase 6, com gates de decisão em três categorias, derivadas do trabalho de operadores e investidores em estágio inicial.

O princípio é simples. Em qualquer ideia de negócio há perguntas deal-breakers, se uma falha, a ideia morre, e perguntas levers, fatores que, juntos, determinam a velocidade e a amplitude do crescimento. Não dá para compensar nota baixa num deal-breaker com notas altas nos levers. Daí a estrutura em duas fases.

Para ideias frontier, radicais, contrarian, criadoras de mercado novo, há uma terceira categoria, chamada Exploratory Gates. Algumas dessas ideias falham em todos os deal-breakers tradicionais e ainda assim são as que definem a década. OpenAI, Tesla e SpaceX nos momentos iniciais são exemplos.

### Como pontuar — o Sistema H/E aplicado a cada gate

Para cada gate você atribui duas notas, ambas de um a dez. O H (Hypothesis) mede a força do raciocínio teórico a favor da sua posição nesse gate antes de evidência empírica. H igual a dez é teoria robusta, H igual a um é palpite. O E (Evidence) mede a quantidade e a qualidade da evidência empírica que você acumulou. E igual a dez é dados robustos, múltiplos pilotos pagos, benchmarks de setor. E igual a um é nenhum dado.

A pontuação do gate é uma combinação dos dois. Se a avaliação é prospectiva (você está começando, quase sem dado), use H como número principal mas obrigatoriamente registre E. Se a avaliação é retrospectiva (já existem clientes, MVP em operação), use E como número principal. Um gate está em "Proceed" se H for maior ou igual a sete e E maior ou igual a seis. Está em "Iterate" se a combinação cair entre seis e sete. Está em "Pivot ou Kill" abaixo de seis, principalmente no Problem Core.

### Fase 2 do framework — Problem Core (deal-breakers)

Os quatro gates a seguir são deal-breakers. Qualquer um com nota H abaixo de sete significa que você ainda não pode seguir adiante e precisa voltar a gerar teoria ou coletar evidência. Antes de considerar qualquer lever, todos os quatro devem estar em H igual ou superior a sete, e idealmente E igual ou superior a seis.

**Gate 1, Problem Intensity (Intensidade do Problema).** A pergunta central: quem exatamente tem o problema, quão doloroso é, com que frequência ocorre, quanto custa hoje, o que acontece se for ignorado? Os sinais de H alto incluem você conseguir descrever o problema com verbatims de clientes, com métricas de tempo, dinheiro e risco, e os clientes reconhecerem que têm o problema e se importarem com ele. Sinais de E alto: pelo menos quinze entrevistas com Pain Level médio igual ou superior a quatro, pelo menos cinco clientes em Pain Level cinco (orçamento comprometido), e tentativas de solução improvisadas identificadas. Sinais de H ou E baixo: descrever o problema em termos genéricos como "gestão ineficiente" ou "falta de produtividade", entrevistados precisarem ser educados sobre o problema para reconhecê-lo.

**Gate 2, Economic Buyer (Comprador Econômico).** A pergunta central: quem paga, de qual rubrica orçamentária, quanto tempo leva a aprovação de compra, a pessoa tem autoridade e budget agora? Sinais de H alto: o comprador está mapeado nominalmente, você conhece o cargo, a rubrica e o ciclo de aprovação típico. Sinais de E alto: duas ou mais empresas assinaram cartas de intenção ou LOIs, pelo menos um piloto pago em andamento ou fechado. Sinais baixos: vender para influenciadores (quem usa) em vez de decisores (quem paga), ciclo de compra acima de seis meses sem justificativa clara.

**Gate 3, Market Size (Tamanho de Mercado).** Pergunta central: existe caminho crível para cem milhões de reais ou mais de receita recorrente anual em sete a dez anos? Quantos ICPs existem? Qual participação você pode ganhar? Sinais de H alto: modelo bottom-up triangulado com fontes públicas, você consegue explicar de onde vem cada número, múltiplos cenários. Sinais de E alto: dados de associações do setor, relatórios de pesquisa, benchmarks de empresas comparáveis. Sinais baixos: top-down preguiçoso ("mercado é de dez bilhões, só preciso um por cento"), ausência de número concreto, mercado em contração.

**Gate 4, Willingness to Pay e ROI (Disposição a Pagar).** Pergunta central: qual valor você cria em reais, e os compradores concordam? Eles têm orçamento substancial para resolver? Estão dispostos a comprar agora? Sinais de H alto: a proposta tem ROI claro (por exemplo, "economiza cinquenta mil reais por ano em mão de obra, custa dez mil em licença, ROI de cinco vezes no primeiro ano"). Sinais de E alto: pilotos pagantes com preço real, testes de Van Westendorp, pré-vendas realizadas. Sinais baixos: cliente elogia mas não paga, você precisa oferecer "grátis por enquanto" para conseguir uso.

> [!important] Regra dos quatro gates
> Todos os quatro deal-breakers devem atingir H igual ou superior a sete (idealmente E maior ou igual a seis) antes de você se mover para Scale Levers. Se qualquer um falhar, corrija antes de avançar. Capital aplicado em Problem Core fraco é capital queimado.

### Fase 3 do framework — Scale Levers (ponderados)

Os seis gates a seguir são ponderados. Nenhum sozinho é deal-breaker, mas juntos determinam a velocidade de crescimento e a capacidade de atrair investimento. Calcule a pontuação total somando o H de cada gate (máximo de sessenta) e compare com os thresholds no fim da seção.

**Gate 5, Must-Have Resonance (Ressonância de Indispensabilidade).** Os usuários ficariam muito decepcionados se o produto sumisse amanhã? Mede-se com Sean Ellis Test, e o threshold é pelo menos quarenta por cento de "muito decepcionado". Sinais fortes: retenção semanal alta, uso espontâneo em horários fora do esperado, reclamações ativas quando há bugs.

**Gate 6, GTM Fit e Unit Economics.** Você alcança o ICP repetidamente com CAC e LTV viáveis? Mede-se com LTV/CAC maior ou igual a três, payback abaixo de doze meses (B2B SaaS) ou abaixo de seis meses (consumo), canal repetível identificado. Sinais fracos: toda venda depende do fundador, canal único, CAC em crescimento mês a mês sem contrapartida em LTV.

**Gate 7, Defensibility Design (Defensibilidade).** Que fossos (moats) existem ou podem ser construídos? Por que comprariam de você e não de alternativa? Sinais fortes: efeito de rede, dados proprietários crescentes com uso, marca em nicho, integrações profundas, propriedade intelectual, switching costs altos. Sinais fracos: "fazemos melhor", qualquer concorrente pode copiar em três a seis meses.

**Gate 8, Retention e Expansion (Retenção e Expansão).** Clientes ficam? Expandem (upsell, cross-sell, mais usuários)? Mede-se com retenção de receita líquida (NRR) acima de cem por cento (excelente), churn mensal abaixo de três por cento para B2B SaaS, coortes com curva flattening (não zerando). Sinais fracos: churn crescente, clientes que pilotam e não convertem, sem expansão.

**Gate 9, Timing e Catalysts.** Por que agora? Que mudança externa (regulatória, tecnológica, comportamental) cria a janela? Sinais fortes: mudança regulatória recente, nova tecnologia habilitadora (LLMs para produtos de IA, por exemplo), mudança demográfica ou de comportamento identificada. Sinais fracos: "esse problema sempre existiu", nenhuma nova capacidade habilita a solução.

**Gate 10, Capital Intensity e Liquidity.** O negócio pode escalar de forma eficiente com dinheiro de VC? Ou consome capital demais? Sinais fortes: modelo SaaS com margens acima de setenta por cento, custos marginais baixos, unit economics melhoram com escala. Sinais fracos: negócio depende de ativo fixo pesado, margens baixas estruturalmente, escalar requer proporcionalmente mais capital.

### Como somar a pontuação total e decidir

Para cada gate de um a dez, anote a nota H. Some os dez Hs e use a tabela abaixo:

| Pontuação total H | Problem Core (Gates 1-4) | Decisão |
|---|---|---|
| ≥ 75 | Todos ≥ 7 | ✅ Proceed: captar ou escalar |
| 60 a 74 | Todos ≥ 7 | 🔄 Iterate: identificar os 2-3 gates mais fracos e rodar experimentos específicos |
| < 60 | — | 🔴 Pivot/Kill: o conjunto não sustenta um negócio viável |
| Qualquer | Qualquer Core < 7 | 🔴 Pivot/Kill ou voltar — Core quebrado mata a ideia |

### Exemplo trabalhado — LexiAI (assistente de IA para advogados de property conveyancing)

Esse exemplo foi adaptado de caso real e ilustra como o framework revela forças e fraquezas.

No Problem Core: Gate 1 (Problem Intensity) com H igual a nove (advogados gastam semanas caçando documentos, gargalo claro) e E igual a cinco (seis entrevistas estruturadas confirmam dor mas amostra é limitada), decisão é iterar com mais entrevistas. Gate 2 (Economic Buyer) com H igual a oito (sócios gerenciadores aprovam tecnologia que reduz tempo de caso) e E igual a seis (duas firmas disseram que pagariam mas nenhum piloto assinado), decisão é iterar e fechar três a cinco pilotos. Gate 3 (Market Size) com H igual a oito (cinquenta mil firmas vezes dez mil libras de ARPA vezes vinte por cento de penetração igual a cem milhões de libras de ARR) e E igual a sete (modelo bottom-up triangulado com dados da UK Law Society), decisão é prosseguir. Gate 4 (Willingness to Pay) com H igual a nove (ferramenta economiza cinquenta mil libras por ano em tempo faturável, preço de dez mil libras por ano) e E igual a oito (advogados em pilotos aceitaram preço), decisão é prosseguir.

Nos Scale Levers: Gate 5 (Must-have) com H igual a sete e E igual a quatro (ainda nice-to-have para alguns). Gate 6 (GTM Fit) com H igual a seis e E igual a três (canal não comprovado). Gate 7 (Defensibility) com H igual a seis e E igual a dois (sem moat ainda). Gate 8 (Retention) com H igual a sete e E igual a três (uso recorrente não comprovado). Gate 9 (Timing) com H igual a oito e E igual a seis (pressão regulatória em direção à automação). Gate 10 (Capital Intensity) com H igual a oito e E igual a sete (modelo tipo SaaS, boas margens).

Total H igual a setenta e seis, mas a decisão é Iterate. Embora o Problem Core seja forte e o total passe de setenta e cinco, os gates de GTM, Defensibility e Retention têm E muito baixo (igual ou inferior a três), o que significa que a evidência não está madura para justificar captação de escala. A mensagem é clara: não matar a ideia, mas não levantar rodada até fortalecer esses gates.

Esse é exatamente o tipo de clareza que fundadores e investidores precisam. O framework evita dois erros opostos. Matar prematuramente uma ideia com Problem Core forte. Ou levantar capital com evidência insuficiente em Scale Levers.

### Fase 4 do framework — Exploratory Gates (para outliers)

Algumas ideias não passam pelo Problem Core tradicional, mas ainda assim podem ser apostas que definem a década. Para essas há uma avaliação alternativa, aplicada apenas quando a ideia é frontier (radical, contrarian, criadora de mercado novo).

OpenAI em 2015 é o exemplo canônico. Problem Core falharia (não havia comprador claro, TAM mensurável ou ROI conhecido). Mas em Exploratory Gates tinha notas iguais ou superiores a nove em Tese Contrarian, Timing e Moat. Isso justificou mantê-la como aposta de longo prazo.

Os cinco Exploratory Gates são os seguintes. **Gate E1, Market Creation Potential**: a ideia pode criar um mercado novo, e não apenas disputar fatia de mercado existente? Airbnb criou o mercado de acomodação peer-to-peer. **Gate E2, Contrarian Thesis**: existe uma crença do mercado que sua tese questiona? "Modelos transformer escalam com compute" era contrarian em 2015. **Gate E3, Timing Inflection**: há um ponto de inflexão tecnológico ou comportamental que torna a ideia viável agora, quando era inviável cinco anos atrás? Custo de GPUs mais avanços em deep learning. **Gate E4, Compounding Moats**: os moats que a ideia pode construir compõem ao longo do tempo (dados, talento, compute, rede)? OpenAI acumulou talento mais compute mais dados de uso, reforçando a posição a cada ano. **Gate E5, Option Value**: mesmo se a tese principal falhar, a empresa terá construído capacidades valiosas (tecnologia, marca, equipe) que abrem outras opções?

> [!warning] Quando usar e quando não usar Exploratory
> Uma ou duas notas iguais ou superiores a nove em Exploratory Gates podem justificar manter viva uma ideia que falha Problem Core, como option play (aposta de opção). Mas isso só faz sentido quando você (ou o investidor) tem apetite real para perda total, o horizonte é de sete a dez anos ou mais, e há capacidade técnico-científica diferenciada para executar a tese. Para noventa e cinco por cento das ideias, ignore esse framework e use os dois primeiros (Problem Core e Scale Levers). Exploratory é para deep tech e ideias contrarian. Usá-lo como desculpa para ignorar fundamentos é auto-sabotagem.

**Segundo exemplo, Airbnb em 2008.** Airbnb também falharia em Problem Core tradicional. Hospedar estranhos na sua casa parecia absurdo. Não havia TAM mensurável de "pessoas querendo dormir no sofá alheio", e o ICP era difuso. Mas em Exploratory Gates tinha perfil distintivo. Market Creation Potential igual a nove (mercado peer-to-peer de acomodação era inexistente, seria criado). Contrarian Thesis igual a nove (a tese de que confiança entre estranhos pode escalar com reviews e pagamento protegido ia contra a sabedoria convencional da época). Timing Inflection igual a oito (smartphones mais pagamentos online mais a crise financeira de 2008 pressionando renda extra). Compounding Moats igual a sete (efeito de rede forte, mas não tão extremo quanto compute de IA). Option Value igual a dez (se a tese específica falhasse, a tecnologia e a marca ainda teriam valor em adjacências, viagens, experiências).

| Gate | OpenAI 2015 | Airbnb 2008 |
|---|---|---|
| Market Creation | 7 | 9 |
| Contrarian Thesis | 10 | 9 |
| Timing Inflection | 9 | 8 |
| Compounding Moats | 10 | 7 |
| Option Value | 8 | 10 |

Ambas as ideias tinham perfis Exploratory muito fortes, mas em dimensões diferentes. OpenAI apostava em compounding tecnológico. Airbnb em criação de mercado novo. A lição é que não há um perfil único de ideia frontier. Há pelo menos dois (tech-compounding e market-creation), e o framework distingue os dois.

### Template de scorecard

```text
SCORECARD DA IDEIA, v___ Data: ___/___/___

PROBLEM CORE (deal-breakers, todos devem ser H≥7)
Gate                           H (1-10)   E (1-10)   Decisão
1. Problem Intensity             ___        ___        ___
2. Economic Buyer                ___        ___        ___
3. Market Size                   ___        ___        ___
4. Willingness to Pay            ___        ___        ___

Algum Core < 7 em H? [ ] Não [ ] Sim → ⚠️ Voltar antes de prosseguir

SCALE LEVERS (ponderados)
Gate                           H (1-10)   E (1-10)
5. Must-Have Resonance           ___        ___
6. GTM Fit & Unit Economics      ___        ___
7. Defensibility                 ___        ___
8. Retention & Expansion         ___        ___
9. Timing & Catalysts            ___        ___
10. Capital Intensity            ___        ___

Pontuação total H (soma 1-10): _____

DECISÃO
[ ] ≥75 e Core ≥7 → ✅ Proceed
[ ] 60-74 e Core ≥7 → 🔄 Iterate (listar 2-3 gates mais fracos abaixo)
[ ] <60 ou Core <7 → 🔴 Pivot/Kill

Gates prioritários para experimentação nos próximos 90 dias:
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

EXPLORATORY GATES (apenas se ideia é frontier)
E1. Market Creation              ___
E2. Contrarian Thesis            ___
E3. Timing Inflection            ___
E4. Compounding Moats            ___
E5. Option Value                 ___

Justificativa para manter como option play, se aplicável:
___________________________________________________________
```

> [!tip] Ritmo de aplicação
> Aplique o scorecard ao final da Fase 5, depois ao final da Fase 11, e periodicamente daí em diante (trimestralmente nos primeiros dois anos, semestralmente depois). As variações ao longo do tempo contam uma história: em que gates você está melhorando? em quais está estagnando? Isso direciona onde investir energia.

> [!info] Fases relacionadas
> Referenciado em: Fase 1, Fase 6.

---

## CAPÍTULO 3 — TRL E CRL: MATURIDADE TECNOLÓGICA E DE MERCADO

Este capítulo é relevante para empreendedores que trabalham com tecnologia complexa, deeptech, biotech, energia, indústria ou hardware, ou que pretendem participar de programas corporativos de inovação, Petrobras, BNDES, Embraer, Embrapii, Inova Empresa ou editais de fomento governamental. Em negócios puramente digitais ou de serviços simples, os conceitos são úteis, porém menos críticos.

### TRL, Technology Readiness Level

TRL é uma escala de maturidade tecnológica de um a nove. Criada pela NASA nos anos 1970. E hoje padronizada internacionalmente (inclusive pela ISO 16290). ISO 16290:2013 padroniza TRL para sistemas espaciais. A aplicação analógica para software e produtos digitais é legítima mas requer adaptação. É universalmente aceita por programas de fomento, investidores em deeptech, e áreas de inovação aberta de grandes empresas.

| TRL | Descrição | Situação típica |
|---|---|---|
| TRL 1 | Princípio básico observado | Só existe como ideia ou insight teórico. |
| TRL 2 | Conceito tecnológico formulado | Conceito articulado, sem experimento. Papers, whitepapers. |
| TRL 3 | Prova de conceito experimental | Experimentos em bancada demonstram viabilidade crítica. |
| TRL 4 | Componentes validados em laboratório | Subsistemas testados em ambiente laboratorial controlado. |
| TRL 5 | Tecnologia validada em ambiente relevante simulado | Sistema integrado funcionando em simulação realista. |
| TRL 6 | Sistema demonstrado em ambiente operacional relevante | Piloto em ambiente próximo ao real, com limitações. |
| TRL 7 | Protótipo demonstrado em ambiente operacional real | Protótipo funcional em campo, uso real mas limitado. |
| TRL 8 | Sistema completo e qualificado | Produto final testado, certificado, pronto para operação. |
| TRL 9 | Sistema comprovado em operação real | Em operação comercial contínua, com histórico. |

**Como usar TRL no manual.**

Se a sua ideia é TRL 1 a 3, você ainda está em pesquisa, e desenvolvimento. Capital de risco tradicional não investe nesse estágio. A fonte típica é fomento público (FINEP, CNPq, Embrapii, e FAP estaduais), grants universitários, ou "friends and family".

Se é TRL 4 a 6, você está na zona de "vale da morte". A tecnologia existe. Mas falta integração, e mercado. Capital típico. Pré-seed, corporate venture, e aceleradoras técnicas.

Se é TRL 7 a 9, você é comercializável. Capital de VC tradicional faz sentido.

> [!warning] Não confunda TRL com estágio de startup
> Uma startup de software pode nascer em TRL 7 a 8 (a tecnologia base, a linguagem, o framework, já é madura). O que ela testa é *aplicação*. Já uma startup de biotech pode estar em TRL 3, mesmo após cinco anos de operação. Se estiver em ensaios clínicos.

### CRL, Customer Readiness Level

CRL complementa TRL medindo a maturidade da relação com o mercado, e clientes. É menos padronizado que TRL. Cada programa define a sua versão própria. Mas a seguinte gradação (usada pelo Radar Petrobras, e por outros programas brasileiros), é uma referência útil.

| CRL | Descrição |
|---|---|
| CRL 1 | Problema identificado, sem validação com clientes. |
| CRL 2 | Problema validado com entrevistas ou pesquisa (equivalente a final da [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]] deste manual). |
| CRL 3 | Solução apresentada e interesse confirmado por potenciais clientes (equivalente a final da [[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7]]/8). |
| CRL 4 | Proposta de valor validada, MVP testado com usuários reais (equivalente a [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] em curso). |
| CRL 5 | Piloto em andamento com cliente real (equivalente a final da [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]]/10). |
| CRL 6 | Primeiro contrato ou receita gerada. |
| CRL 7 | Solução adotada por múltiplos clientes (equivalente a PMF na [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]]). |

### Matriz combinada TRL versus CRL

Tecnologia madura sem mercado (TRL 9, e CRL 1) é tão ruim quanto mercado ávido sem tecnologia (CRL 5, e TRL 2). O ideal é progressão equilibrada dos dois eixos.

| TRL ↓ / CRL → | CRL 1-2 (Descoberta) | CRL 3-5 (Validação) | CRL 6-7 (Comercial) |
|---|---|---|---|
| TRL 1-3 | Zona de pesquisa (grants, labs) | Inconsistente, mercado ávido, tecnologia imatura. **Acelerar TRL**. | Raro e perigoso, vender sem tecnologia é risco alto. |
| TRL 4-6 | Zona de engenharia (seed, corporate) | **Zona-alvo para startups deeptech em aceleração**. | Ótima zona, tecnologia validada internamente, mercado pagante. |
| TRL 7-9 | Inconsistente, tecnologia pronta, mercado não conhece. **Investir em GTM**. | Zona comum de growth-stage. | Zona de escala, série A+ e além. |

### Mapeamento Fases do manual para TRL/CRL (referência)

| Fase do manual | TRL aproximado | CRL aproximado |
|---|---|---|
| 0-1 (preparação, ideia) | TRL 1-2 | CRL 1 |
| 1B-2 (teoria, problema) | TRL 1-2 | CRL 1-2 |
| 3-4 (usuários, mercado) | TRL 2 | CRL 2 |
| 5-6 (hipóteses, experimentos) | TRL 2-3 | CRL 2-3 |
| 7-8 (ideação, solução) | TRL 3-5 | CRL 3 |
| 9 (MVP) | TRL 5-7 | CRL 4-5 |
| 10 (validação de modelo) | TRL 7 | CRL 5-6 |
| 11 (PMF) | TRL 7-8 | CRL 6-7 |
| 12-13 (estruturação, escala) | TRL 8-9 | CRL 7+ |

Esse mapeamento é aproximado, e varia por setor. Use-o para se situar ao aplicar a editais, e fichas de cadastro em programas que exigem essas escalas. E para diagnosticar desbalanceamento entre os seus dois eixos de maturidade.

### Fases de captação (pré-Seed para Exit), escala de estágio da startup

Além de TRL (tecnologia), e CRL (cliente), existe uma terceira escala que você encontrará em formulários de editais, pitch decks, cadastros em hubs de inovação, e interações com investidores. Ela descreve o estágio de captação, e maturidade organizacional, da startup. Existe variação menor entre usuários, mas o padrão canônico (usado por Radar Petrobras, SP Stars, Scale-Up, e grande parte dos editais brasileiros), é o seguinte.

| Fase | Descrição | Características operacionais típicas | Captação típica |
|---|---|---|---|
| **Pré-Seed** | Fase de ideação e validação do problema | Sem produto acabado. Fundador(es) trabalhando em tempo integral ou parcial. Validação de problema em curso. | Recursos próprios, FFF (friends, family, fools), bootstrap. R$ 0 a R$ 500k. |
| **Seed** | Construção do MVP e validação com primeiros clientes | MVP em operação. Primeiros 5-30 clientes pagantes. PSF emergente. Time em formação. | Investidores-anjo, seed funds, aceleradoras. R$ 500k a R$ 5M. |
| **Early Stage** | Produto desenvolvido e em fase de tração inicial, fortalecendo base de clientes | PSF confirmado. Entre dezenas e centenas de clientes. Time estruturado. Canais de aquisição em teste. | Série A. R$ 5M a R$ 30M. |
| **Scale Up** | Modelo de negócio validado e em expansão no mercado | PMF confirmado. Crescimento acelerado (≥3x ao ano). Múltiplos canais, múltiplas geografias ou verticais. | Série B, C. R$ 30M a R$ 300M+. |
| **Late Stage** | Fase madura e estabelecida, otimização da lucratividade, preparação para IPO | Posição de mercado consolidada. Foco em margem, eficiência, expansão de categorias. | Série D+, pré-IPO. R$ 300M+. |
| **Exit** | Vendida (M&A) ou abertura de capital (IPO) | Liquidez para fundadores e investidores. | |

**Como usar essa escala.**

Ao preencher formulários (editais Inovativa, InovAtiva Brasil, BNDES Garagem, SP Stars, ou programas corporativos de inovação). Autoavalie honestamente. A maior parte dos editais é desenhada para estágios específicos. Aplicar fora do estágio previsto é desperdício de tempo.

Ao conversar com investidores. Saber em qual fase você está ajuda a evitar erros de enquadramento. Pitch de seed para fundo de Série A é perda mútua. Vice-versa também.

Ao preparar o pitch deck. A narrativa, e os números esperados, variam drasticamente. Pré-seed, ou Seed, vende visão, e evidência de PSF. Série A vende unit economics, e canal. Série B em diante vende máquina de crescimento.

**Mapeamento Fase do manual para Fase de captação (aproximação).**

| Fases do manual | Fase de captação correspondente |
|---|---|
| 0 a 6 | Pré-Seed |
| 7 a 10 | Pré-Seed tardio → Seed |
| 11 (PSF → PMF inicial) | Seed |
| 11 (PMF consolidado) | Early Stage |
| 12 a 13 | Early Stage → Scale Up |
| 14 (reinvenção) | Scale Up → Late Stage (reinvenção acontece em qualquer estágio pós-PMF) |
| 15 (exit) | Late Stage → Exit |

> [!warning] Falsos amigos de terminologia
> "Seed" significa coisas diferentes em diferentes ecossistemas. Para um VC americano pré-2020, "seed" podia significar algo entre pré-seed, e Série A brasileira. Hoje, pré-seed se consolidou como categoria à parte no Brasil, e EUA. Quando em dúvida, descreva por métricas (ARR, clientes, e time), em vez de nome do estágio.

### Como usar em formulários de editais, e programas corporativos

A maioria dos editais brasileiros de fomento, e programas corporativos, pede que você se autoavalie em TRL, e CRL. A tendência do iniciante é inflacionar as notas. Não faça isso. Os avaliadores são técnicos experientes, e identificam autoenganos rapidamente.

A avaliação honesta. Conta a seu favor em editais que buscam estágios específicos (TRL 4 a 6 é ouro para muitos programas de escalonamento). Evita você ser excluído em etapa posterior por desalinhamento. Mostra maturidade empreendedora. Autoconsciência é valorizada.

> [!tip] Se você não sabe onde está
> Prefira subestimar TRL, ou CRL, na primeira submissão. Você pode argumentar na entrevista que acabou de validar o salto para o próximo nível.

---

## CAPÍTULO 4 — COMO FECHAR UMA FASE: COMMITTED NEXT MOVE E SINAIS OBSERVÁVEIS

Este capítulo trata de algo que o checklist de SAÍDA DESTA FASE de cada fase não cobre, a estrutura do próximo passo a que você se compromete antes de virar a página. Os checklists de saída dizem "o que você precisa ter feito". Este capítulo diz "como você sabe que o próximo passo é experimento comprometido e não procrastinação disfarçada de rigor". Vale ao fim de qualquer fase.

### COMMITTED NEXT MOVE (próximo passo comprometido), a estrutura ao fim de cada fase

Antes de encerrar qualquer fase, e abrir a próxima, valide que você tem as quatro peças abaixo definidas com precisão. Elas traduzem a disciplina "committed experiments, not prolonged exploration" (experimentos comprometidos, e não exploração prolongada) do programa da Antler para o trabalho fase a fase desse manual.

> [!warning] A ausência de qualquer uma das quatro
> A ausência de qualquer uma das quatro é sinal de que você está ainda em exploração. Não em compromisso.

- [ ] **Uma cunha definida.** O comprador, o workflow, e o resultado exatos, que você está mirando *primeiro*. Se essa descrição muda dependendo do interlocutor, a cunha ainda não fechou (veja o Wedge Stress Test da [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]]).
- [ ] **Uma hipótese testável.** Uma afirmação única, falsificável, sobre o que precisa ser verdade para a fase avançar. Escrita antes do teste, com threshold ex-ante (veja [[#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 (ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA)]] sobre abordagem científica). Para os thresholds quantitativos de saude por fase que sustentam a decisao de COMMITTED NEXT MOVE, ver [[IGNICAO-Vol-5-Financas-e-Captacao#MÉTRICAS E BENCHMARKS DESTA FASE (FASE 14)|Catálogo de Métricas e Benchmarks (Vol. 5)]].
- [ ] **Um caminho de validação concreto.** A técnica específica que você vai usar para gerar o sinal. Não "várias técnicas possíveis" (veja a tabela Template: Theory Map — Conexão com Business Model Canvas (Fase 3, Vol. 1) para escolher entre entrevista, questionário, pré-venda, MVP, etc.).
- [ ] **Uma janela curta de execução.** Data de início, e data de fim. Duas a três semanas é o padrão para experimentos em early stage (estágio inicial). Mais que isso geralmente é procrastinação disfarçada de rigor. Janelas curtas forçam decisão. Janelas longas adiam o momento da verdade.

> [!important] Se as quatro peças não estão claras por escrito
> Se as quatro peças não estão claras por escrito, você ainda não tem um próximo passo comprometido. Tem uma lista de ideias. Resolva antes de considerar a fase fechada.

### SINAIS OBSERVÁVEIS, quatro formatos de evidência que provam que o próximo passo está andando

Um próximo passo bom produz evidência. Não apenas atividade. Pergunte, antes de começar. *Se o experimento funcionar, o que eu vou observar?*. Os quatro formatos de sinal abaixo, qualquer um deles, contam como evidência real. Se nenhum se materializa na janela de execução, o experimento não gerou aprendizado útil. Independentemente de quantas horas você gastou nele.

**Sinal de produto.** O mesmo usuário volta, e repete o workflow, sem você ter que convidar, lembrar, ou empurrar. Uso espontâneo repetido é o sinal mais forte em early stage. Curiosidade one-off não conta.

**Adoção no fluxo de trabalho.** O produto deixa de ser "uma demo que eu testei", e vira parte do processo real do cliente. Aparece no passo-a-passo natural dele. É mencionado em reuniões internas. Substitui algo que ele usava antes.

**Sinal econômico.** O cliente abre a conversa sobre orçamento. Pede proposta. Pergunta preço sem você puxar. Ou aloca tempo interno para avaliar compra. Interesse que se traduz em movimentação de recursos é diferente de interesse educado.

**Compromisso comportamental do comprador.** O comprador formal (não apenas usuário, ou champion) aceita fazer um piloto com critérios. Assinar carta de intenção. Disponibilizar um canal interno para o projeto. Ou permitir acesso à equipe. Qualquer um desses é ponte para contrato real.

> [!important] Regra combinada
> Para o Committed Next Move ser considerado bem-desenhado, ele precisa nominalmente especificar qual dos quatro sinais você espera ver. E qual volume desse sinal você considera suficiente para declarar sucesso. Sem essa especificação ex-ante, você vai terminar a janela olhando os dados em busca de confirmação. E isso é viés. Não aprendizado.

---

# ARQUITETURA DE MODELO DE NEGÓCIO: CUNHA, MARKETPLACES, PLATAFORMAS, B2B2C E OPEN SOURCE (CAPÍTULOS 5 A 9)

### Arquitetura deste Domínio: Da Cunha Inicial às Arquiteturas de Modelo de Negócio (Capítulos 5 a 9)

A forma como você experimenta e prototipa nas Fases 7 a 10 muda radicalmente conforme a **arquitetura estrutural do seu modelo de negócio**. Validar um SaaS linear de um único lado é completamente diferente de destravar a liquidez inicial de um *marketplace* de dois lados, construir efeitos de rede em uma plataforma, distribuir via parceiros em B2B2C ou monetizar um projeto *Open Source*.

Estes cinco capítulos fecham o Volume 3 entregando os playbooks arquiteturais de cada modelo:

- **[[#CAPÍTULO 5 — IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL|Capítulo 5 — Idea → Wedge → Scale]]:** Como escolher uma cunha (*wedge*) dolorosa, estreita e urgente para entrar no mercado sem precisar construir a plataforma inteira no dia um.
- **[[IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario#C|Capítulo 6 — Marketplaces e Negócios de Dois Lados (Vol. 10)]]:** Como resolver o dilema do ovo e da galinha (*Cold Start Problem*, incluído passo a passo neste capítulo), restringir geografia/categoria, medir *take rate* e evitar desintermediação (*leakage*).
- **[[IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario#C|Capítulo 7 — Efeitos de Rede e Plataformas (Vol. 10)]]:** Como desenhar efeitos de rede diretos, indiretos e de dados que aumentam o valor marginal do produto a cada novo usuário.
- **[[IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario#C|Capítulo 8 — B2B2C, White-Label e Modelos Híbridos (Vol. 10)]]:** Como usar empresas intermediárias (contabilidades, bancos, RHs, associações) para distribuir seu produto a milhares de clientes finais com CAC reduzido.
- **[[#CAPÍTULO 9 — OPEN SOURCE COMO ESTRATÉGIA|Capítulo 9 — Open Source como Estratégia de Negócio (COSS)]]:** Como combinar adoção *bottom-up* por desenvolvedores, *API Strategy & DevRel* (incluído passo a passo neste capítulo) e monetização *enterprise* (*open core* / nuvem gerenciada).

---

## CAPÍTULO 5 — IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL

> [!important] Relacao com F
> L desdobra o framework Antler como lente transversal. Para o mapa dos quatro frameworks fundacionais do livro (cientifico, operacional, jornada PSF-PMF, Antler), ver [[#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 (ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA)]].

### Por que este capítulo existe

No [[#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 (ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA)]], o "Antler" aparece citado dentro do Framework 2, Operacional-prático, junto com YC, João Prado, Blank e Maurya. Em sentido estrito, está correto. O Antler é uma voz do conjunto de operadores de campo, e o vocabulário dele, cunha, Pain Level, Mom Test, *heartfelt problems*, é compartilhado com outros. Mas há um corpo específico de pensamento, a síntese "Idea para Wedge para Scale", que merece tratamento destacado por três razões.

A primeira. É framework integrado com três estágios sequenciais, não coleção de heurísticas. Funciona como mapa de progressão do negócio, de forma análoga ao Framework 3, PSF para PMF para Escala. Os dois frameworks se complementam ao ponto de quase se fundirem.

A segunda. Foi integrado em profundidade a esse manual. Dezenas de elementos Antler estão distribuídos hoje nas Fases 3, 4, 6, 8, 13C e 14. Sem um mapa consolidado, a dívida conceitual com o framework fica invisível. E o leitor perde a capacidade de usar Antler como lente transversal quando trabalha em várias fases ao mesmo tempo.

A terceira. O Antler tem vocabulário próprio e preciso, wedge, scope instability, platform versus wedge, expansion discipline, que merece registro consolidado para consulta rápida.

Este capítulo complementa o [[#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 (ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA)]]. Trata o Antler como lente transversal, que pode ser invocada em qualquer fase. Não apenas como item de uma lista de operadores.

### Os três estágios

O framework Antler propõe uma progressão sequencial, que vai da concepção da ideia à capacidade de escalar, em três estágios fundamentais.

**1. Idea (Ideia).** O estágio em que o empreendedor ainda está identificando o problema, o ICP, e a proposição de valor. Perguntas dominantes. A dor é priorizada? O comprador é claro? O escopo é estável? Os riscos típicos nesse estágio são quatro sintomas clássicos listados no Antler. Escopo largo demais. Problema não-prioritário. Comprador mal definido. Construção antes da validação. Esse estágio mapeia essencialmente nas Fases 1 a 3 do manual.

**2. Wedge (Cunha).** O estágio em que a ideia genérica se transforma em um ponto de entrada cirúrgico. Um papel claro. Um workflow doloroso, e recorrente. Um resultado mensurável. E um comprador econômico específico.

> [!important] O estágio mais crítico do framework
> A passagem da Ideia para a Cunha é onde a maior parte dos fundadores falha. Porque exige renunciar a alternativas imaginadas, em troca de precisão. Mapeia essencialmente na Fase 4 (onde a Estratégia da Cunha é o entregável central).

**3. Scale (Escala).** O estágio em que a cunha dominada gera autorização para expandir. Em ordem, e com disciplina. Expansão respeita eixos (intra-conta antes de extra-conta), e a regra de variável isolada.

> [!warning] A passagem prematura à escala
> Sem a cunha realmente dominada, é o erro que o framework trata com mais rigor. "Plataforma é resultado de cunha dominada, não ponto de partida". Mapeia essencialmente na Fase 14 (Crescimento e Capital), com ecos na Fase 15 para diagnóstico de saturação.

A pedra angular do framework é que a progressão é unidirecional, e cumulativa. Você não pula da Ideia direto para a Escala. E não volta da Escala para a Ideia, sem ter estragado alguma coisa pelo caminho. Cada estágio autoriza o próximo. Nenhum estágio substitui o anterior.

### Mapa de integração, onde cada elemento Antler vive no manual

A tabela abaixo mapeia os principais elementos operacionais do framework, e onde eles são trabalhados em profundidade.

| Elemento Antler | Estágio | Onde vive no manual |
|---|---|---|
| Quatro sintomas de ideia estagnada (escopo largo, problema não-prioritário, comprador indefinido, construção antes da validação) | Idea | Implícito em Fases 1-3, explicitado nas Armadilhas das Fases 1 e 2 |
| Trio Usuário / Campeão Interno / Comprador Econômico | Idea→Wedge | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5 (Vol. 2)]], Passo 7 |
| Anatomia da Cunha (1 papel + 1 workflow + 1 resultado + 1 comprador) | Wedge | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], Estratégia da Cunha |
| Teste de Precisão do Comprador | Wedge | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], subseção própria, Template: Teste de Precisão do Comprador (Fase 6, Vol. 2) |
| Teste do grupo de WhatsApp | Wedge | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], Estratégia da Cunha |
| Wedge vs Plataforma (distinção) | Wedge | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], subseção própria |
| Sinais de escopo instável (4 sinais ordenados por gravidade) | Wedge | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], subseção própria |
| Canvas da Cunha | Wedge | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], entregável final |
| Concorrência como comportamento atual (não como outra startup) | Wedge | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], Passo 3 do COMO |
| Janela de 2 a 3 semanas por experimento | Idea→Wedge | [[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8]], Passo 1 do COMO |
| Gate de direcionalidade ("reduz ou elimina a dor") | Wedge→Scale | [[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10]], Definição de Sucesso |
| Três caminhos de expansão intra-conta (workflow adjacente, papel adjacente, ownership de sistema) | Scale | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]] (Crescimento e Capital), Passo 5 |
| Regra "mude uma variável por vez" | Scale | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]] (Crescimento e Capital), Passo 5 |
| Gate pré-reinvenção ("esgotou os seis caminhos?") | Scale | [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]], abertura do COMO |
| Epígrafe "startup é um experimento para provar uma hipótese não-óbvia" | Transversal | Abertura dos Princípios Fundamentais |

### Como Idea → Wedge → Scale se relaciona com os outros três frameworks

O quarto framework não substitui os três anteriores. Ele se inscreve neles. Trazendo um recorte pedagógico específico.

**Com o Framework 1 (Científico).** O Antler é silencioso sobre rigor metodológico de evidência (thresholds ex-ante, due diligence de amostra, e falsificabilidade). Essas continuam vindo do Framework 1. O Antler contribui com a hierarquia de decisões. O que validar primeiro, e em que ordem. Quando os dois se combinam, você obtém experimentos cientificamente sólidos sobre os atributos certos, na sequência certa.

**Com o Framework 2 (Operacional).** Há sobreposição real. Mom Test, Pain Levels, e filtros de problema ideal, são compartilhados entre operadores (YC, Antler, e João Prado). A contribuição específica do Antler, dentro do Framework 2, é a ênfase em disciplina de sequência. Não apenas "foque", mas "foque *nesse* ponto *nessa* ordem". O rigor sequencial é maior no Antler do que no YC original.

**Com o Framework 3 (Jornada PSF para PMF para Escala).** Os dois frameworks são quase isomórficos em seus primeiros movimentos. Mas com ênfases diferentes. PSF é atingido quando a Cunha está comprovada (o produto entrega o *job* principal para o ICP definido). PMF é atingido quando a expansão intra-conta começa a gerar retenção positiva (NRR maior que cem por cento). A Escala do Antler corresponde ao pós-PMF do Framework 3. Quando usados juntos, o Antler traz o *como* (três caminhos intra, mais três extra, mais disciplina de variável isolada). E o Framework 3 traz o *quando* (métricas de transição entre estágios).

> [!tip] Regra prática
> Quando em dúvida sobre qual framework invocar, pergunte o tipo de dúvida que está sendo feita.
>
> "Minha evidência é confiável?". Framework 1.
>
> "Minha ideia tem qualidade?". Framework 2 (filtros).
>
> "Em que ponto do ciclo eu estou, e o que esperar daqui?". Framework 3.
>
> "O que fazer *em ordem* para avançar daqui?". Framework 4 (Antler).

### Glossário Antler

Os conceitos abaixo aparecem em várias fases, e merecem definição consolidada. Para que o leitor possa navegar entre fases sem precisar reler o contexto de origem.

**Wedge (Cunha).** Ponto de entrada estreito no mercado. Definido por quatro elementos não-negociáveis. Um papel claro. Um workflow doloroso, e recorrente. Um resultado mensurável. Um comprador econômico, com orçamento identificado. A cunha é o equivalente operacional do *beachhead*.

**Scope Instability (Escopo Instável).** Situação em que o posicionamento do produto muda dependendo da audiência da conversa. Sintomas. Múltiplos ICPs primários. Demos diferentes para audiências diferentes. Propostas de valor diferentes por segmento. Roadmap cobrindo workflows não relacionados. Escopo instável é comumente confundido com ambição. Na prática, é falta de escolha.

**Buyer Precision Test (Teste de Precisão do Comprador).** Frase completável que valida o elemento quatro da Cunha. *"Nós vendemos para [cargo] em [tipo de empresa] porque essa pessoa é responsável por [resultado] e controla [orçamento]"*. Três critérios. Frase escrita em menos de trinta segundos. Cargo real (não genérico). Orçamento em rubrica existente (não nova).

**Platform vs Wedge.** Plataforma é amplitude de workflows, papéis, e integrações. Cunha é profundidade em um workflow, um papel, um resultado. Plataforma é tipicamente o *resultado* de cunha dominada. Não o ponto de partida.

**Expansion Discipline.** Princípio de que a expansão deve mudar uma variável por vez (papel, produto, workflow, segmento, ou geografia). Para preservar atribuição causal dos resultados. Violar esse princípio não é crescer mais rápido. É gastar tempo sem acumular aprendizado.

**Change One Variable at a Time.** Regra operacional correspondente ao Expansion Discipline. Escolher um caminho de expansão por vez. E executar por um a dois trimestres antes de abrir o segundo movimento. Expansões simultâneas em múltiplas dimensões transformam aprendizado em confusão.

**Directionality (Direcionalidade).** Propriedade da solução. Deve reduzir, ou eliminar, a dor (não apenas "ajudar com"). De forma direta (cadeia causal curta), e mensurável (cliente consegue quantificar o efeito). Gate obrigatório antes da construção do MVP.

**Idea → Wedge → Scale.** Progressão sequencial obrigatória. Saltar estágios produz, ou produto sem cliente (Idea para Scale), ou cliente sem produto escalável (Idea para Wedge ignorado). A passagem Ideia para Cunha é a mais difícil. A passagem Cunha para Escala é a mais frequentemente violada.

### Regra final

O framework Antler é especialmente útil, quando o empreendedor reconhece um ou mais desses sintomas. Não sabe por onde começar a vender. Tem cunha instável, mesmo após múltiplas iterações. Sente que "escalar" não está funcionando. Ou está prestes a declarar saturação, sem ter esgotado caminhos de expansão. Nesses momentos, abrir este capítulo, e percorrer o mapa de integração, tipicamente revela qual fase do manual precisa ser revisitada com atenção renovada.

> [!important] Antler é o mais prescritivo dos quatro frameworks
> Dos quatro frameworks articulados nesse manual, o Antler é o mais prescritivo. Ele diz o que fazer, em que ordem. Isso é força, e limite. É força quando o empreendedor está paralisado por excesso de opções, e precisa de disciplina de sequência. É limite quando o contexto exige reconfiguração não-sequencial. Por exemplo, em deeptech onde a tecnologia precisa amadurecer, antes da cunha ser definível. Ou em *platform plays* genuínos, onde amplitude inicial é intencional. Como qualquer framework, é ferramenta, não religião. Use onde ajuda. Adapte onde atrapalha.

> [!info] Fases relacionadas
> Referenciado em: Fase 1.

---

## CAPÍTULO 6 — MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA

> [!note] Nota de validade
> As dinâmicas de marketplace (mercados de dois lados — liquidez, efeitos de rede e desintermediação) têm vida útil longa. As políticas específicas de plataformas (Apple, Google, AWS e Shopify) mudam. Revisar anualmente, se a sua empresa depende delas.

Uma categoria crescente de startups opera como marketplace, conectando dois ou mais lados (oferta e demanda), ou construindo em cima de plataformas (apps em App Store, extensões de Shopify ou integradores com ERPs). Essas têm dinâmicas que não aparecem em SaaS clássico.

> [!warning] Risco de plataforma costuma ser maior que risco de produto
> A Apple muda regra de trinta por cento. A AWS muda preço. O Google muda algoritmo. O Shopify compra concorrente. A empresa constrói três anos e perde cinquenta por cento de margem em uma semana.

### O que este capítulo cobre

Dois temas relacionados. Primeiro, marketplace dynamics (dinâmicas de marketplace): liquidez, matching (correspondência entre os lados), cold start (partida a frio), defensibilidade e disintermediação. São dinâmicas próprias que não se aplicam em SaaS, e cujo erro de entendimento equivale a fracasso estrutural. Segundo, dependência de plataforma: quando a sua empresa é acessório de outra empresa. É categoria invisível de risco até acontecer, capaz de transformar empresa saudável em crise em dias.

### Quando usar

Este capítulo se aplica se: o seu produto é marketplace (conecta dois ou mais lados não-relacionados); o seu produto vive dentro de plataforma de terceiro (app, extensão ou integração); o seu canal de aquisição depende crucialmente de uma plataforma (Google, Meta ou Apple).

### Quem envolve

CEO, em estratégia, como dono do risco de plataforma. Dedicated relationship, ou partnerships manager (gerente de parcerias), com plataforma-chave em escala.

### Como executar

#### 1. Marketplace dynamics

**Problema do cold start.** Oferta sem demanda, e vice-versa, igual a morte. Padrões de solução. Single-side bootstrap. Começar resolvendo um lado (oferta, ou demanda) sozinho, sem marketplace (por exemplo, OpenTable começou como software SaaS para restaurantes, antes de virar marketplace). Subsídio. Pagar um lado para entrar (Airbnb pagando fotógrafos para listings). Restrição geográfica. Começar em um bairro, ou cidade. Garantir liquidez local antes de expandir. Importar oferta. Trazer dados de fontes externas para simular (OLX, early days).

**Liquidez.** Métrica crítica. Percentual de queries que resultam em match. Abaixo de threshold (varia. Cerca de trinta por cento em mobility. Cerca de quinze por cento em trabalho), o marketplace não funciona. Cold start é resolver liquidez em sub-mercado, antes de expandir.

**Defensibilidade.** Network effects. Mais usuários, igual a mais valor para usuários. Forte. Mas precisa ser cultivado. Data effects. Mais uso, igual a dados melhores, igual a produto melhor. Switching costs. Reputação acumulada, e histórico. Brand. Marketplace viram verbo (Uber, e Airbnb).

**Disintermediação.** Risco. Os usuários trocam off-platform após primeiro contato (contratam pedreiro diretamente, sem pagar fee ao marketplace). Mitigações. Pagamento escrow, seguros, warranties, identidade verificada, e features que só acontecem on-platform.

#### 2. Tipos de dependência de plataforma

**Dependência de distribuição.** App Store (Apple, e Google Play). Quinze a trinta por cento de fee. Guidelines arbitrárias. Possibilidade de remoção. Shopify App Store, Salesforce AppExchange, e Microsoft AppSource. Fee, mais aprovação, mais visibilidade algorítmica.

**Dependência técnica.** AWS, Google Cloud, e Azure. Mudança de preço, discontinuação de serviços, e lock-in. APIs de terceiros. Mudança de cota, deprecation, e preço.

**Dependência de canal.** Google Ads, e Meta Ads. Mudança de algoritmo. Preço do CPC. SEO. O Google atualiza. Tráfego orgânico cai trinta a sessenta por cento. Social. A plataforma prioriza conteúdo próprio. Reach de brand despenca.

**Dependência de integração.** Conectado a Salesforce, HubSpot, ou ERP específico. Se a plataforma fechar conexão, o produto perde valor para sessenta por cento dos clientes.

#### 3. Gestão de risco de plataforma

**Diagnóstico.** Listar toda plataforma em que a empresa tem dependência material. Para cada, percentual de receita, ou usuários, ou infraestrutura, dependente. Qual a probabilidade de mudança adversa em doze a vinte e quatro meses?

**Mitigações.** Diversificação. Múltiplas plataformas de distribuição, ou canal. Relação direta com usuário. Coletar email. Build community off-platform. Infraestrutura multicloud. Design que permite mudança de cloud (mais caro. Mas reduz lock-in). Relacionamento formal. Em plataforma-chave, ter sponsor interno. Participar de programas de partner. Plano B ativo. Não só teórico. Testado.

#### 4. Negociação com plataformas

Em escala, a empresa pode ter alavancagem.

Programas de partnership. Apple's App Store Small Business Program (quinze por cento para empresas menores que US$ 1 milhão). Shopify Plus partners.

Acordos customizados. Grandes clientes negociam terms específicos.

Antitrust, ou regulação. Empresas grandes sob pressão regulatória podem ceder.

### Métricas

**Marketplace.** Liquidity rate (percentual de queries com match). Take rate (fee, dividido por GMV). Repeat rate (percentual de usuários retornando). Match time (tempo para match). Disintermediation rate (estimada).

**Risco de plataforma.** Percentual de receita, ou usuários, dependente de cada plataforma. Concentration risk (se a top plataforma some, quanto sobra?). Cobertura de plano B (percentual de dependência com plano B ativo).

### Armadilhas

Cem por cento de aquisição em um canal. A Meta muda algoritmo. A receita cai quarenta por cento.

Infraestrutura em uma cloud, sem plano B. A AWS sobe trinta por cento. As margens viram negativas.

App em uma store, sem canal próprio. A Apple remove app. A empresa morre.

Ignorar mudanças em guidelines. App rejeitado em review. Revenda crítica não autorizada.

Não construir marca própria. O cliente só vê "App do [Marketplace]". Não "empresa X".

Complacência em marketplace. Liquidez estável vira risco, quando concorrente oferece melhor.

Disintermediação ignorada. Os usuários saem off-platform, sem sinal de alarme.

### Checklist

Marketplace e gestão de risco de plataforma estão saudáveis quando, sendo marketplace, há liquidez medida e ação quando abaixo de threshold; dependência de plataforma está listada e quantificada; plano B foi testado para cada plataforma crítica; há diversificação ativa em canais e plataformas principais; existe relação direta com usuário (email, comunidade) em construção; e o monitoring de mudanças em políticas de plataformas-chave está em pé. Os itens abaixo sustentam isso.

- [ ] Se marketplace. Liquidez medida mensalmente.
- [ ] Lista formal de todas as dependências de plataforma.
- [ ] Percentual de receita, ou operação, em cada plataforma crítica mapeado.
- [ ] Plano B ativo, e testado, para cada plataforma crítica.
- [ ] Canal de aquisição diversificado (não um canal maior que cinquenta por cento).
- [ ] Relação direta com usuário (email, e comunidade), em construção.
- [ ] Monitoring de mudanças em guidelines, ou políticas, das plataformas-chave.
- [ ] Se marketplace. Mitigações de disintermediação implementadas.

---

### Aprofundamento, mecânica operacional de marketplace

O conteúdo atual do AE cobre cold start, liquidez, defensibilidade, e risco de plataforma. Esse aprofundamento adiciona disciplinas operacionais específicas.

#### 1. Medição detalhada de liquidez

Liquidez por sub-mercado. Marketplace agregado pode ter liquidez global de trinta e cinco por cento. Mas sub-mercados (São Paulo versus interior. Categoria A versus categoria B), com liquidez muito diferente. Medir por geografia, mais categoria, mais timing, revela problemas ocultos.

Time-to-fill (tempo entre query, e match). Métrica complementar. Mesmo com trinta e cinco por cento de match rate, se leva quarenta e oito horas, a experiência é ruim. Alvo varia por categoria. Mobility. Segundos a minutos. Labor marketplace. Horas a dias. M&A. Semanas a meses.

Fill rate por horário, ou sazonalidade. Demanda concentrada em horário sem oferta suficiente, igual a experiência ruim, mesmo com liquidez agregada boa. Incentivos dinâmicos (surge pricing) ajustam.

#### 2. Take rate, quanto cobrar

Take rate, igual a fee do marketplace sobre GMV.

**Benchmarks globais.** Mobility (Uber, e 99). Vinte a trinta por cento. Food delivery (iFood, e Rappi). Vinte a trinta por cento. Horizontal marketplace (Mercado Livre). Dez a quinze por cento. Vertical especializado (StockX, e 1stDibs). Dez a vinte por cento. Real estate, ou M&A. Três a seis por cento. Professional services. Quinze a vinte e cinco por cento.

Decisão de take rate. Trade-off entre revenue da empresa, e atratividade para oferta (sellers). Take rate alto financia marketplace, mas reduz supply. Take rate baixo atrai supply, mas restringe revenue da empresa.

Estrutura de take rate por tier. Grandes sellers pagam menos (volume-based tiering). Comum em marketplaces maduros.

#### 3. Supply acquisition versus demand acquisition

> [!warning] Erro comum
> Tratar os dois lados como se fossem equivalentes. Em prática.

Supply-constrained markets (por exemplo, mobility em pico). O dinheiro vai para atrair motoristas.

Demand-constrained markets (por exemplo, maioria dos B2B marketplaces iniciais). O dinheiro vai para atrair compradores.

Identificar o lado constrained. Se baixar preço de aquisição de um lado, não melhora fill rate, esse não é o gargalo.

#### 4. Fraud management

Marketplaces são alvo fácil de fraude. Operação madura requer.

KYC (Know Your Customer). Verificação de identidade de ambos os lados.

Pagamento via plataforma. Nunca off-platform (gera disintermediação, mais fraude).

Escrow. A empresa retém valor até conclusão da transação.

Reviews, e reputação. Mecanismo de filtragem orgânica.

Team anti-fraude. Humanos, mais ML, para detectar patterns.

> [!important] Investimento típico em anti-fraude
> Um a cinco por cento do GMV. Sem isso, marketplace vira alvo.

#### 5. Regulamentação setorial específica

Dependendo do vertical. Mobility. Regulação municipal de Uber, ou 99-type services. Food delivery. Regulamentações sanitárias. Financial marketplaces. CVM, Banco Central, e prevenção a lavagem. Healthcare. ANVISA, CFM, e questões éticas. Real estate. CRECI, e regulação de corretagem.

Compliance específico pode ser custo estrutural, que define viabilidade.

### Ver também

[[#CAPÍTULO 7 — PLATAFORMA VS PRODUTO: QUANDO CONSTRUIR PLATAFORMA E QUANDO NÃO|Capítulo 7 (PLATAFORMA VS PRODUTO: QUANDO CONSTRUIR PLATAFORMA E QUANDO NÃO)]], Plataforma versus produto. [[#CAPÍTULO 8 — B2B2C: QUANDO SUA EMPRESA VENDE PARA OUTRA EMPRESA QUE VENDE PARA CONSUMIDOR|Capítulo 8 (B2B2C: QUANDO SUA EMPRESA VENDE PARA OUTRA EMPRESA QUE VENDE PARA CONSUMIDOR)]], B2B2C.

---

### FRAMEWORKS PASSO A PASSO DESTE CAPÍTULO

#### Framework: Cold Start Problem (Andrew Chen, 2021)

##### Origem

Andrew Chen, ex-head of Rider Growth da Uber e atualmente general partner na Andreessen Horowitz (a16z), sistematizou o Cold Start Problem no livro de mesmo nome (2021). Baseado em sua experiência escalando Uber e em entrevistas com founders de produtos com efeitos de rede (Slack, Zoom, Dropbox, Airbnb, LinkedIn, Instagram, Tinder, TikTok). Resolve problema específico que Clayton Christensen, Andrew Grove e outros não endereçaram diretamente: como *começar* um produto com efeito de rede, quando por definição o produto não tem valor até ter muitos usuários.

##### O que é

Framework para construir e escalar produtos com efeitos de rede, organizado em cinco estágios sequenciais: (1) *Cold Start Problem*, atingir "atomic network", a menor rede viável que gera valor (ex.: um Slack workspace ativo, um Uber city, um Airbnb cidade), (2) *Tipping Point*, pontos de inflexão onde o crescimento acelera, (3) *Escape Velocity*, crescimento autossustentável via três loops (engagement loop, acquisition loop, economic loop), (4) *The Ceiling*, saturação de mercado e estratégias para furar o teto, (5) *The Moat*, como o efeito de rede vira defensibilidade duradoura.

##### Princípios / estrutura

Efeitos de rede não são uma coisa, são cinco coisas diferentes que operam de formas diferentes. "Hard Side" (lado mais difícil de recrutar, tipicamente fornecedores/criadores) precisa ser resolvido primeiro, "Easy Side" (consumidores) vem depois quando o Hard Side gera valor. Atomic Network é o menor grupo coerente onde o produto funciona, para Uber era uma cidade específica, para Slack era uma empresa específica, para Tinder era uma universidade específica. Uma vez que uma Atomic Network funciona, replicação para outras Atomic Networks é técnica, não existencial.

##### Como aplicar do jeito certo

Passo 1: identificar se o produto tem efeitos de rede reais (nem todo marketplace/social tem efeito de rede verdadeiro, alguns apenas *parecem* ter). Passo 2: definir Atomic Network (o menor grupo onde produto funciona sem precisar de nada maior). Passo 3: identificar Hard Side e estratégia específica para adquirir primeiros 10, 100, 1000 do Hard Side (tipicamente manualmente, por founders, em processo "unscalable"). Passo 4: construir três growth loops (engagement para retenção, acquisition para aquisição, economic para unit economics). Passo 5: uma vez que uma Atomic Network funciona, replicar com playbook.

Exemplo aplicado, iFood. Atomic Network: restaurantes + consumidores em um bairro ou cidade pequena. Hard Side: restaurantes (difícil convencer a aderir antes de haver consumidores). Estratégia inicial: founders pessoalmente recrutaram dezenas de restaurantes nos primeiros meses, muitas vezes sem pagar taxa, em troca de exclusividade soft. Quando crítica massa foi atingida em Belo Horizonte (primeira Atomic Network), consumidores apareceram organicamente. Replicação: playbook para cada nova cidade foi expandindo gradualmente.

##### Erros comuns a evitar

(1) Lançar em mercado grande demais de uma vez (São Paulo inteira) em vez de Atomic Network menor (bairro específico ou vertical específico). (2) Focar no Easy Side antes do Hard Side, consumidores sem fornecedores é site vazio. (3) Usar marketing pago para resolver Cold Start, paga traz usuário mas não resolve Hard Side, que é problema de valor, não de descoberta. (4) Confundir efeito de rede real com efeito de escala, Netflix tem escala (mais conteúdo), não rede. Uber tem rede (mais motoristas = menos espera).

##### Quando não usar

Em produtos sem efeito de rede real (SaaS vertical B2B onde cada cliente é ilha, serviços profissionais, produtos sem componente social). O framework foi projetado para marketplaces, redes sociais, plataformas, outros negócios têm dinâmicas diferentes.

##### Leitura adicional

*The Cold Start Problem* (Andrew Chen, 2021), blog andrewchen.com, a16z.com.

---

## CAPÍTULO 7 — PLATAFORMA VS PRODUTO: QUANDO CONSTRUIR PLATAFORMA E QUANDO NÃO

> [!abstract] Posicao no livro
> Decisao estrutural entre produto integrado e plataforma de multiplos lados, com consequencias em valuation, capital e dinamica competitiva. Vizinhos relevantes,
> - [[#CAPÍTULO 6 — MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA|Capítulo 6 (MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA)]], dinamica especifica de marketplace como subtipo
> - [[#CAPÍTULO 8 — B2B2C: QUANDO SUA EMPRESA VENDE PARA OUTRA EMPRESA QUE VENDE PARA CONSUMIDOR|Capítulo 8 (B2B2C: QUANDO SUA EMPRESA VENDE PARA OUTRA EMPRESA QUE VENDE PARA CONSUMIDOR)]], modelo de tres lados com responsabilidades distribuidas
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 6 — CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL|Capítulo 6 (CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL) (Vol. 6)]], canal indireto como alternativa a plataforma
> - [[#CAPÍTULO 9 — OPEN SOURCE COMO ESTRATÉGIA|Capítulo 9 (OPEN SOURCE COMO ESTRATÉGIA)]], OSS como variante de plataforma com comunidade no lugar de marketplace

### O que é

Produto é um negócio que entrega valor direto ao cliente. Ele paga, recebe o que precisa, fim. Software de gestão financeira para PME é produto. Banco digital é produto. Carro vendido é produto.

Plataforma é um negócio que cria valor conectando múltiplos lados, oferta e demanda, e facilitando transações entre eles. iFood conecta restaurantes e consumidores. Mercado Livre conecta vendedores e compradores. Airbnb conecta anfitriões e hóspedes. Nubank Marketplace conecta usuários Nubank e fornecedores de serviços financeiros. A empresa cria infraestrutura, governança e monetização. A escala vem do crescimento combinado dos dois lados.

A distinção é crítica por três razões estratégicas. A economia é muito diferente (margens, unit economics ou economia por unidade de cliente, e defensabilidade). A execução é muito diferente (construir dois lados ao mesmo tempo é exponencialmente mais difícil). E o sucesso é muito diferente. Quando funciona, winner-takes-most (o vencedor leva a maior parte). Quando não funciona, queima capital monumental.

Os fundadores cometem um erro clássico. Lançam como produto, pensam "agora vou virar plataforma" e travam. Ou lançam como plataforma sem entender dinâmica de rede e queimam capital inicial por falta de massa crítica. Este capítulo trata de quando cada modelo é apropriado, como executar cada um e como fazer transições quando necessário.

### Por que importa

Valuation (avaliação de empresa) é radicalmente diferente. Empresa de produto de software (SaaS B2B) vende em múltiplo de cinco a quinze vezes receita. Plataforma que alcança escala vende em dez a trinta vezes receita, e ocasionalmente mais (iFood, Mercado Livre, Uber em momentos). A diferença vem de network effects (efeitos de rede). Plataforma defendida tem moat (barreira competitiva) crescente. Produto precisa manter competitividade continuamente.

A exigência de capital difere drasticamente. Produto SaaS B2B pode alcançar break-even (ponto de equilíbrio) com R$ 30 a 50 milhões de capital. Plataforma frequentemente precisa de R$ 200 milhões a R$ 1 bilhão para atingir massa crítica. Antes disso, unit economics é deficitário em pelo menos um lado. O iFood captou mais de US$ 1 bilhão antes de ser rentável. O Mercado Livre levou quase vinte anos para estabilizar. A 99 foi vendida por US$ 1 bilhão para Didi ainda queimando. Capital é parte do plano.

A dinâmica competitiva difere. Produto compete em features (funcionalidades), preço, e experiência. Plataforma compete em liquidez (quem tem mais oferta e demanda). Em plataforma, segundo lugar raramente existe. É Uber ou nada, iFood ou marginal. Produto pode ter cinco concorrentes saudáveis no mesmo mercado.

> [!example] Casos brasileiros emblemáticos
> Plataformas que vingaram: Mercado Livre, iFood, StoneCo (antes de virar produto), Rappi (parcialmente), 99 (exit via Didi), Loggi (parcialmente), Nubank Marketplace (em construção), GetNinjas (nicho).
>
> Plataformas que não vingaram: Easy Taxi (perdeu para 99 e Uber), Loggi foi ajustada para produto operacional, Magazine Luiza tentou seller marketplace e ainda busca escala, Americanas teve marketplace estruturalmente complicado.
>
> Produtos que poderiam ser plataformas mas não são, e fazem bem: Nubank (banco direto, não marketplace), Totvs (ERP, não plataforma), Creditas (crédito direto, não marketplace).

### Quando plataforma é o modelo certo

Plataforma funciona quando seis condições são verdadeiras simultaneamente.

Existem múltiplos lados com necessidade mútua. Oferta e demanda precisam existir independentemente, com necessidade de se encontrar. Restaurante quer vender mais, consumidor quer comer em casa sem cozinhar. Motorista quer trabalhar, passageiro quer transporte sob demanda. Sem esses dois lados com real necessidade, não é plataforma, é só software com ambição de plataforma.

Cada lado sozinho não resolve o problema. Consumidor não consegue facilmente encontrar restaurantes que entregam. Restaurante não consegue escalar delivery sozinho. Passageiro não conhece motorista. Motorista não sabe onde estão passageiros. A plataforma resolve esse matching problem.

A escala gera valor crescente (network effects). Mais restaurantes igual a mais opções igual a mais consumidores igual a mais pedidos igual a mais restaurantes. Loop positivo. Sem network effect, é só diretório. Sem diretório, é só marketplace estagnado.

As transações são recorrentes. Plataforma vive de frequência. Comida (iFood): várias vezes por semana. Transporte (Uber): várias vezes por semana. E-commerce (Mercado Livre): mensal para muitos usuários. Se a transação é rara (comprar carro a cada dez anos), a dinâmica de plataforma fica mais frágil. OLX, Webmotors existem, mas com valuation menor.

A liquidez importa mais que feature. Se o cliente escolhe por quem tem mais oferta disponível, plataforma vence. Se o cliente escolhe por feature, produto integrado pode vencer.

A monetização é viável sem ser extrativa demais. Plataforma que extrai trinta por cento ou mais do GMV gera revolta (Uber no Brasil, comissão de iFood debatida). Take rate viável depende do setor (vinte a trinta por cento em comida, dez a vinte por cento em varejo, um a três por cento em fintech por transação). Se só funciona com take rate alto, lado da oferta eventualmente foge.

> [!warning] Critério mínimo
> Se menos de cinco desses pontos estão presentes, reexamine a premissa. Pode ser produto com interface de marketplace, não verdadeira plataforma.

### Quando produto é o modelo certo

Produto funciona bem em sete condições.

O cliente paga diretamente pelo valor entregue, sem intermediação de "lado". SaaS cobra pelo uso do software. Banco cobra pela conta e crédito. Varejo cobra pelo produto físico.

O valor entregue é concreto e controlável. A empresa controla qualidade end-to-end. Não depende de terceiro (restaurante, motorista, vendedor) para entregar.

Feature e qualidade diferenciam. O cliente escolhe entre opções baseado em produto, não em oferta. HubSpot vence RD Station em feature, não em "ter mais clientes".

A escala não é exigida para viabilidade. Produto pode ser rentável com dez mil clientes. Plataforma frequentemente precisa de dez milhões ou mais para ser saudável.

A economia é previsível. Produto com unit economics positivo em cada cliente. Plataforma frequentemente tem unit economics negativo em um lado (motorista, ou restaurante) por longo período.

O capital disponível é limitado. Produto pode vingar com R$ 30 a 80 milhões total até break-even. Plataforma precisa ordens de magnitude a mais.

A defensabilidade vem de execução, não escala. Totvs tem moat por integração com ERP e conhecimento fiscal brasileiro, não por network effects. WEG tem moat por escala industrial e marca, não por plataforma.

### Dinâmicas críticas de plataformas

Se a decisão é ir para plataforma, há seis conceitos que definem a diferença entre queimar capital com propósito e queimar capital à toa.

O primeiro é o problema do ovo-e-galinha. Restaurante não entra se não há consumidor, consumidor não entra se não há restaurante. Resolver isso é o maior desafio de execução em plataforma. As estratégias que funcionam na prática são cinco. Subsidiar um lado agressivamente (Uber subsidiava motorista com garantia mínima, iFood subsidia restaurante com taxa reduzida no início, Mercado Pago subsidiou comerciante com maquininha barata e dinheiro na hora). Começar single-sided e escalar (Airbnb começou com quem aluga para hóspedes em eventos específicos, aos poucos adicionou demanda). Consolidar oferta existente antes de lançar para consumidor, fazendo parceria com cinquenta restaurantes, motoristas ou vendedores antes de abrir para o público (iFood e Rappi fizeram isso). Explorar assimetria de incentivos, porque motorista tem tempo ocioso e restaurante tem cozinha subutilizada fora do pico, e incentivar o lado com capacidade ociosa é sempre mais barato. E expansão geografia por geografia, atingindo liquidez local antes de ir para a próxima cidade (Uber, iFood e 99 operaram assim).

O segundo conceito é escala mínima viável. Quanto volume é necessário para a experiência funcionar? Em iFood, restaurante precisa de mais de cinco pedidos por dia para ser retido. Consumidor precisa de mais de dez opções de comida para voltar. Abaixo desses limiares, experiência é ruim e churn do lado A puxa churn do lado B numa espiral negativa. Toda plataforma precisa calcular quanto capital é necessário para atingir escala mínima, por geografia.

O terceiro é a distinção entre liquidez local e global. Comida é local (quem mora em São Paulo quer comer em São Paulo). Transporte é local. Classificados são locais. E-commerce é nacional ou global. Airbnb tem efeito global, porque quem vai viajar pode escolher qualquer lugar. Plataforma com liquidez local precisa atingir massa crítica cidade por cidade, o que encarece o CAC inicial.

O quarto é gestão de take rate. Cobrar demais expulsa o lado da oferta. Cobrar pouco não sustenta a operação. Os benchmarks setoriais são referência útil: food delivery fica entre quinze e trinta por cento do ticket (brasileiros reclamam de iFood cobrando entre vinte e dois e trinta por cento), ride sharing entre vinte e trinta por cento, e-commerce horizontal entre dez e vinte por cento do GMV, e-commerce vertical entre oito e quinze por cento, classificados entre zero e dez por cento (frequentemente por assinatura), fintech entre um e três por cento por transação, serviços profissionais entre dez e vinte e cinco por cento.

O quinto é qualidade como filtro. Plataforma que não filtra oferta ruim (restaurante que entrega atrasado, motorista com rating baixo, vendedor que envia errado) afasta demanda. Rating, reviews, ranking e penalização por performance são governança essencial.

O sexto é multi-homing. O lado da oferta frequentemente está em múltiplas plataformas (restaurante em iFood e Rappi, motorista em Uber e 99). Mitigar exige incentivos de exclusividade, features únicas e UX superior.

### Como construir plataforma (framework de execução)

A construção segue quatro fases que raramente são encurtáveis.

Na validação pré-plataforma (zero a doze meses), antes de investir em construir, o fundador precisa validar quatro coisas. Oferta e demanda reais existem? Não pergunte "você usaria?", observe comportamento atual ("onde você pede comida hoje?"). A dinâmica de matching resolve problema real? Entreviste cinquenta pessoas em cada lado. Monetização sustentável é possível? Se o take rate necessário é cinquenta por cento do GMV, não há plataforma sustentável. Escala mínima estimada em capital? Se é quinhentos milhões de reais ou mais e você não tem acesso a capital compatível, replaneje.

Na construção de massa crítica mínima (doze a vinte e quatro meses), o trabalho é construir o primeiro lado com capital subsidiário ou rent-seeking. Foco geográfico em uma cidade, bairro ou vertical. Subsídio agressivo do lado mais difícil. Produto single-sided que gere valor mesmo antes de ter dois lados. As métricas que importam nessa fase são número de ativos em cada lado, frequência de transação e liquidez local.

Na fase de liquidez e expansão (vinte e quatro a quarenta e oito meses), com um mercado funcionando, a expansão pode começar. Próximas geografias cidade a cidade, capitais primeiro. Verticais adjacentes (iFood lançou mercados, Rappi lançou farmácia, Uber lançou Uber Eats). E redução gradual de subsídio à medida que a liquidez se consolida.

Na fase de rentabilidade e moat (quarenta e oito meses em diante), liquidez consolidada gera poder de precificação. Competidores são afastados pelo custo de CAC. A plataforma se torna rentável e expande para categorias adjacentes, monetização secundária (publicidade, fintech, dados) e defensabilidade via network effect e switching cost.

### Exemplos brasileiros com aprendizados

iFood começou cidade a cidade, subsidiou restaurante. Conquistou o mercado brasileiro com capital massivo (Movile investiu, Just Eat via fusão parcial, SoftBank indireto). O take rate subiu ao longo do tempo, gerando atrito com restaurantes e um movimento de chefes contra a plataforma pós-2020. O moat atual é liquidez de consumidor, muito difícil de duplicar.

Mercado Livre é a plataforma brasileira que resistiu mais tempo. O diferencial foi construir Mercado Pago e Mercado Envios junto, criando ecossistema integrado. Network effect mais moat de logística mais moat de pagamentos.

99 entrou em mercado com Uber já estabelecido. Competiu por capital (SoftBank, Didi). Se diferenciou com bandeiras específicas para o Brasil, incluindo opção de pagamento em dinheiro. Exit via Didi em 2018 por um bilhão de dólares.

OLX opera classificados locais com take rate baixo, monetizando via assinatura de vendedor profissional e ads. A estratégia foi focar em verticais críticas (imóveis, carros, empregos). Mantém liderança em classificados mas com valuation menor que e-commerce transacional.

Magalu Seller (marketplace da Magazine Luiza) é a tentativa de transformar varejista em plataforma. Tem tração mas compete com Mercado Livre em liquidez, disputa estruturalmente difícil.

Rappi apostou em expansão agressiva em múltiplos verticais ao mesmo tempo (comida, farmácia, mercado, turbo). Queimou capital substancial. Ainda não é rentável no Brasil.

Loggi começou como plataforma de matching entre motoboy e demanda de entrega. Com o tempo virou mais operacional, com frota própria e contratos B2B. Modelo híbrido que ilustra a tensão entre plataforma pura e produto operacional.

### Transição entre produto e plataforma

A transição produto para plataforma é comum mas difícil. Nubank saiu de cartão e conta (produto) para Nubank Marketplace (plataforma), usando base de mais de cem milhões de clientes para monetizar via marketplace de produtos financeiros. Totvs saiu de ERP (produto) para Totvs Marketplace de apps, onde desenvolvedores terceiros criam módulos. Globo saiu de conteúdo (produto) para Globoplay com conteúdo de terceiros, construção ainda em andamento. A dificuldade é que base de clientes de produto não necessariamente tem necessidade de marketplace. Adicionar lado de oferta exige construir do zero.

A transição plataforma para produto é menos comum mas acontece. Airbnb adicionou Airbnb Plus (curado) e Airbnb Luxe (premium), ainda marketplace mas com verificação proprietária. Stone começou em maquininha (produto), evoluiu para banking e marketplace, modelo híbrido. iFood adicionou cozinhas próprias em alguns mercados, tentativa de verticalização. Produto vertical dentro de plataforma faz sentido quando a categoria tem oferta insuficiente que a plataforma pode preencher, quando qualidade é diferenciador e a plataforma pode controlar, e quando a margem do vertical é alta o suficiente para justificar a operação.

### Métricas

Para produto, as métricas são as clássicas de SaaS: ARR, MRR, CAC, LTV, churn, expansion, NPS, engagement (DAU sobre MAU), margem bruta e margem de contribuição.

Para plataforma, as métricas mudam de natureza: GMV (soma de transações), take rate (porcentagem da GMV que vira receita), número de ativos em cada lado (supply e demand), frequência de transação por usuário ativo, liquidez local (pedidos por dia por região, motoristas disponíveis por dia por região), multi-homing rate (porcentagem da oferta e demanda também em concorrentes), churn de oferta e demanda separadamente, network density (interações por nó, concentração) e unit economics por lado.

### Definição de sucesso

Plataforma saudável tem liquidez auto-sustentável (não depende de subsídio contínuo), network effect tangível (cada novo usuário aumenta valor para os existentes), take rate sustentável sem forçar fuga do lado da oferta e moat crescente com escala.

Produto saudável tem rentabilidade clara (Rule of 40 positivo), retenção alta (NRR acima de cento e dez por cento em B2B, acima de noventa por cento em B2C) e defensabilidade via switching cost, integração ou dados.

### Armadilhas

> [!warning] Armadilhas de plataforma vs produto
> Anunciar plataforma antes de ter liquidez. Marketing diz "marketplace de X", mas só existem três vendedores e dez compradores. Demanda chega, frustra, vai embora. Lance como marketplace só quando a liquidez mínima estiver operando.
>
> Confundir diretório com marketplace. Lista de fornecedores não é marketplace. Marketplace tem transação, pagamento, governança, rating, descoberta inteligente. Diretório é produto informacional. A diferença é estrutural.
>
> Take rate inicial alto demais. O lado da oferta reluta, CAC sobe. Comece baixo e suba gradualmente, mas se subir demais depois, a oferta se revolta. Dinâmica complicada que exige ajuste fino.
>
> Ignorar governança. Vendedor ruim, motorista ruim, conteúdo ruim geram experiência ruim na plataforma. Sem regras, verificação, rating ativo e remoção de maus atores, plataforma vira feira desorganizada.
>
> Tentar escalar todos os lados simultaneamente. Capital se esgota antes de atingir massa crítica em qualquer um deles. Foco em uma geografia, uma vertical, uma sequência (supply primeiro ou demand primeiro).
>
> Competir em capital com rival maior. Plataformas bem capitalizadas vencem guerras de subsídio. Entrar competindo frontalmente com Uber ou iFood raramente funciona. A alternativa é nicho vertical.
>
> Plataforma criada por varejista sem mindset de plataforma. Varejista pensa "é meu cliente", plataforma precisa pensar "cliente é do marketplace". Magazine Luiza, Americanas e Submarino lutaram com essa tensão cultural.
>
> Monetização secundária sem liquidez primária. Plataforma que tenta ganhar via ads antes de ter transações. Publicidade em marketplace pequeno rende pouco e rouba experiência.
>
> Tentar ser plataforma quando produto basta. Fundador brasileiro frequentemente romantiza plataforma pelo valuation maior. Produto pode ser igualmente bom negócio e muito mais executável. Nubank escolheu produto. Totvs escolheu produto. Creditas escolheu produto.

> [!tip] Checklist
> Decisão plataforma vs produto tomada com honestidade (seis ou mais critérios de plataforma presentes ou não?). Se plataforma: problema do ovo-e-galinha mapeado e estratégia definida. Capital estimado para atingir massa crítica em ordens de magnitude, não cinquenta por cento a mais. Foco geográfico inicial decidido. Take rate sustentável calculado e testado com oferta. Métricas duplas (supply, demand, GMV, liquidez) instrumentadas. Governança (rating, remoção, verificação) desenhada desde o MVP. Multi-homing monitorado com estratégia de retenção da oferta. Se produto: métricas SaaS ou transacionais instrumentadas. Defensabilidade via feature, integração ou switching cost planejada. Evitar pretensão de plataforma prematura. Transição produto para plataforma (se planejada): base de clientes adequada e ecossistema viável. Benchmarks setoriais revisados antes de modelagem financeira.

### Ver também

[[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 1 — PRODUTO EM ESCALA E DESCOBERTA CONTÍNUA|Capítulo 1 (PRODUTO EM ESCALA E DESCOBERTA CONTÍNUA) (Vol. 7)]] cobre produto em escala. [[#CAPÍTULO 6 — MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA|Capítulo 6 (MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA)]] cobre marketplace dynamics. [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 6 — CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL|Capítulo 6 (CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL) (Vol. 6)]] cobre franquias e canais.

---

## CAPÍTULO 8 — B2B2C: QUANDO SUA EMPRESA VENDE PARA OUTRA EMPRESA QUE VENDE PARA CONSUMIDOR

### O que é

B2B2C (*business-to-business-to-consumer*) é o modelo de negócio em que você (empresa A) vende produto ou serviço para outra empresa (B), que por sua vez usa esse produto para atender seu próprio consumidor final (C). Você não atende C diretamente. C frequentemente sabe da sua existência (via branding, ou seja, marca visível) ou não (via white-label, ou seja, produto rotulado com a marca de B, sem mencionar a sua).

A diferença para B2B puro é simples. Em B2B puro, o cliente B usa o produto internamente (ERP, CRM, ferramentas). Em B2B2C, o cliente B usa o produto para servir outro cliente. Os exemplos brasileiros ajudam a fixar a ideia. Pagar.me e Stripe vendem para lojistas (B), que cobram seus próprios clientes (C). Nuvemshop e VTEX vendem plataforma de e-commerce para lojistas (B), que vendem produtos a consumidores (C). Wellhub vende para empresas (B), que oferecem como benefício a funcionários (C). Olist integra sellers pequenos (B) em marketplaces e os ajuda a vender para consumidores (C). Hiandros e Evino vendem atacado para restaurantes e bares (B), que servem aos consumidores finais (C). O Nubank Marketplace é uma plataforma que integra fornecedores de serviços financeiros (B) para atender clientes Nubank (C). O iFood vende ferramentas aos restaurantes (B) que atendem usuários iFood (C). E o universo de white-label de fintech, conhecido como BaaS (*Banking-as-a-Service*, infraestrutura bancária oferecida como serviço), inclui Dock, Matera e Fitbank, que oferecem infraestrutura bancária a empresas (B) que oferecem contas digitais (C).

B2B2C é categoria ampla que combina dinâmicas de B2B (ciclo de venda complexo, contratos enterprise) com economia de C (volume, frequência, unit economics — ou seja, a economia unitária por cliente — pelo consumidor final). Esse híbrido exige estratégia específica.

### Por que importa

A primeira razão é alavancagem: uma venda, muitos consumidores. Vender para cem empresas B que cada uma tem dez mil consumidores significa alcance de um milhão de consumidores sem CAC (custo de aquisição de cliente) direto. A escala vem de cada B representar uma base ampla.

A segunda é moat (vantagem competitiva defensável) via integração. Produto integrado ao stack tecnológico de B é difícil de substituir. B que usa Pagar.me como gateway de pagamento não troca facilmente, porque a migração afeta milhares de clientes finais.

A terceira é dados e network effects (efeitos de rede, em que cada novo participante aumenta o valor para os demais). Com muitos Bs no sistema, você acumula dados agregados de comportamento de C. Insights valem ouro. Mais Bs atraem mais integrações, e mais integrações atraem mais Bs.

A quarta razão é o oposto da terceira: complexidade dobrada. Você precisa satisfazer B (contrato, integração, SLA, conformidade) e atender C indiretamente (experiência, disputas, atendimento) ao mesmo tempo. Mais peças em movimento.

A quinta razão é tensão estrutural. Os interesses de B e C podem divergir. Se a plataforma favorece C, B reclama. Se favorece B, C reclama. É gestão contínua de trade-offs.

### Quando B2B2C é o modelo certo

Os critérios positivos são quatro. B tem necessidade que você resolve melhor do que B resolveria sozinho (expertise específica, tecnologia, escala). C é melhor atendido se o serviço vier via B do que via você direto (contexto, B conhece C melhor). Volume de C atrás de cada B é suficiente para justificar a complexidade. E B está disposto a pagar por valor que você agrega (não é só "gateway" comoditizado).

Os critérios que sugerem modelo alternativo são igualmente claros. C é melhor atendido por você direto (B2C puro pode ser melhor). B resolve o problema internamente sem precisar de você. Comoditização alta (o spread que você ganha é fino demais para sustentar). Nenhum dos lados (B nem C) tem necessidade material.

### Arquétipos de B2B2C

São cinco arquétipos clássicos, e quase todo modelo B2B2C cabe em um deles.

O primeiro é white-label infrastructure. Você constrói a infra. B entrega ao C com a marca do B. BaaS (Dock, Swap, Matera), SaaS white-label, gateways de pagamento. C frequentemente nem sabe que você existe. Revenue vem de comissão sobre transações, fee por uso, ou assinatura. O moat é integração profunda, compliance certificada, confiabilidade.

O segundo é co-brand ou endorsed. Sua marca aparece ao lado do B. Wellhub (app Wellhub mais empresa cliente), parcerias Nubank, programas de milhagem com cartão de banco. C sabe de ambas as marcas. O revenue é híbrido, parte do B, parte do C às vezes. O moat é a experiência combinada.

O terceiro é enabler. Você fornece serviço especializado que B não faria internamente. Dock para fintech, Smartbill para emissão fiscal, integradores de logística como Loggi B2B e Kangu B2B. C raramente nota sua presença direta. Revenue vem de fee por uso ou comissão. O moat é especialização vertical.

O quarto é marketplace ou distribuição. Você dá a B distribuição para atingir C. Olist, Mercado Livre Marketplace, iFood para restaurantes, Magalu Seller. C sabe da plataforma e B aparece como vendor. O revenue vem de comissão sobre GMV, assinatura de seller. O moat é liquidez nos dois lados e tecnologia de matching.

O quinto é aggregation ou embedded. O produto entra embutido na experiência do B. Seguro embutido em venda de produto (ConsigaPar dentro do Magazine Luiza), crédito embutido em checkout (Creditas via parceiros). É contextual, integrado no fluxo de C com B. Revenue vem de fee por transação ou take rate. O moat é o ponto de venda proprietário.

### Estrutura de vendas em B2B2C

O ciclo de venda é mais longo que B2C, similar a B2B enterprise. Prospecção de B leva frequentemente seis a doze meses. A negociação de contrato leva três a nove meses em enterprise. A integração técnica leva três a doze meses. O ramp-up até volume pleno leva mais seis a dezoito meses.

> [!info] Tempo total ao volume pleno
> Em B2B2C enterprise, do primeiro contato ao volume pleno são dezoito a trinta e seis meses. Isso afeta burn, forecasting e paciência. Modele caixa contando com isso.

O tamanho da equipe de vendas é menor que B2B puro (menos deals, maiores) e maior que B2C (precisa de AEs). O CAC por B é alto, mas o LTV (via agregado de Cs) pode ser muito alto. A análise de unit economics precisa ser por B, não por C. E a função de Customer Success é tão crítica quanto a de vendas. B que implementa sua solução precisa de suporte para fazer ramp-up bem. CS ruim significa churn de B, que significa perda massiva.

### Produto para B2B2C

São dois usuários, com interesses diferentes. O usuário B (admin, comprador) precisa de dashboard, integração, compliance, SLA, suporte enterprise. O usuário C (fim) precisa de UX suave, confiabilidade, resposta rápida, talvez integração com a vida diária.

O produto tem duas "superfícies". A interface B (admin, analytics, customization, settings) e a interface C (produto final, white-label, cobranded, ou integrado no produto do B). Ambas precisam ser boas. Negligenciar qualquer uma quebra o modelo.

APIs e SDKs frequentemente são o "produto". B integra a API. Qualidade de documentação, developer experience, exemplos de código, SDK em múltiplas linguagens são diferencial competitivo.

White-label customization é outra dimensão. B quer colocar sua marca, suas cores, seu domínio. O produto precisa permitir isso (via admin) sem duplicação de código.

### Regulatório e compliance

B2B2C frequentemente opera em setores regulados (fintech, saúde, seguros). Há duas camadas de compliance. A primeira é sua empresa como prestadora: registros, licenças, compliance LGPD, auditoria. A segunda é B como seu cliente, que pode exigir compliance da sua parte para C (ISO 27001, SOC 2, PCI-DSS, HIPAA no exterior, LGPD detalhado).

Em BaaS, por exemplo, sua empresa tem licença de banco (ou parceria com um). B contrata sua infraestrutura para oferecer contas digitais. O compliance com KYC, PLD, Bacen, Receita, é tudo orquestrado entre você, B e, em última análise, C.

> [!warning] Compliance trava deals
> Compliance mal estruturado trava negócios. Enterprise no Brasil (especialmente grandes bancos e corporates) exige vendor assessment rigoroso. Ter SOC 2 Type II e ISO 27001 é diferencial de venda. Inicie o processo de certificação cedo, são seis a doze meses para SOC 2 Type II.

### Economia

Os unit economics são analisados em duas camadas. Por B: o CAC de aquisição de B é alto (sales cycle longo, enterprise). O revenue por B é variável (depende do tamanho da base de C de B). A margem por B depende do pricing model. Por C: o revenue por C é frequentemente pequeno (comissão ou fee pequeno por transação). O volume cruzado (Cs vezes transações por C) é o que gera escala.

Um modelo típico ajuda a visualizar. Imagine que B1 tem dez mil Cs. Cada C realiza cinco transações por ano. Sua comissão por transação é dois reais. O revenue anual de B1 é dez mil vezes cinco vezes dois, ou seja, cem mil reais. Com cem Bs desse perfil, são dez milhões de reais anuais. Com mil Bs, são cem milhões anuais. A escala vem da multiplicação, não do ticket grande de cada B.

### Riscos específicos

Há seis riscos que você precisa monitorar com vigilância.

A concentração por B é o primeiro. Se um B representa trinta por cento ou mais da sua receita, a perda desse B é material. É similar a concentração em cliente B2B, mas pior porque o impacto é mais amplo (perda de acesso a todos os Cs de B).

A desintermediação é o segundo. B aprende que pode construir infraestrutura internamente ou trocar de fornecedor. Se seu custo de switching é baixo, B vai. A defesa é integração profunda, SLA excelente, pricing competitivo, roadmap de features que B não consegue construir sozinho.

C muda expectativas e B pressiona você. Esse é o terceiro. C reclama de experiência. B te cobra. Você precisa ajustar. Os contratos de SLA precisam ser claros sobre responsabilidades.

O regulador muda regras e B te pressiona. O Bacen muda exigência de KYC, todos os Bs que usam você precisam atualizar, os custos de implementação sobem. Você absorve ou repassa.

Disputa entre B e C envolve você. C reclama diretamente do seu produto (mesmo sendo serviço de B). Atendimento, responsabilidade e resolução em contratos precisam definir claramente quem responde por quê.

E multi-tenancy técnico é o sexto. A plataforma serve múltiplos Bs com dados isolados, performance adequada a todos, sem um B impactar outro. Arquitetura multi-tenant desde o início. Retrofit é caríssimo.

### Métricas específicas

Além das métricas usuais (ARR, NRR, CAC, LTV), há algumas específicas de B2B2C. GMV (Gross Merchandise Value), que é o volume de transações processadas via seus Bs. Take rate, a porcentagem que você captura da GMV. Revenue por B e por cohort de B. NRR por B (expansão de B via mais Cs ou mais uso). Volume de Cs atingidos (alcance). Transações por C. Concentração (porcentagem de revenue de top dez Bs). Time-to-integration de novos Bs. B onboarding completion rate. SLA uptime por B.

### Armadilhas

> [!warning] Armadilhas mais comuns
> Vender a um B sem validar demanda de C. Contrato fechado, integração feita, B não consegue vender a seus Cs. Produto não se move. Cobrança diminui. B quer sair.
>
> Produto com duas interfaces mal pensadas. B reclama de admin ruim. C reclama de experiência. Produto tenta servir dois donos e serve mal aos dois.
>
> Pricing simplista demais. "Cobro dois por cento de transação" sem entender que alguns Bs são rentáveis e outros não. O pricing precisa tierar por volume, setor, risco.
>
> SLA sem definição clara. "Downtime máximo um por cento" mas sem especificar janela de medição, manutenção planejada, reembolso. Briga quando o incidente acontece.
>
> Não investir em developer experience. B decide usar competidor que tem doc melhor, SDK mais claro. DevX é competência core em B2B2C com API.
>
> Depender de um mega-B para validar modelo. Contrato com unicórnio valida mercado, mas se aquele cliente falha ou renegocia, toda a tese cai. Diversifique desde cedo.
>
> Escalar operações sem preparar compliance. Enterprise no Brasil exige SOC 2 e ISO. Sem isso, perde deals mesmo com produto competitivo.
>
> Ignorar relacionamento pós-signing. Contrato assinado. CS passa para operação. B se sente abandonado. CSM dedicado ao B é crítico.
>
> Monetização só via B, ignorando oportunidade em C. Algumas oportunidades permitem cross-sell de produto próprio para Cs (desde que B aprove). Deixar na mesa é perda.
>
> Não antecipar risco de B construir internamente. Fintech grande pode decidir construir infra própria. Antecipe com integração profunda, features únicas, roadmap que supera build-internal decision.
>
> Contrato com B sem cláusula de exclusividade ou non-compete adequada. B usa sua plataforma e a do competidor ao mesmo tempo, te usando como leverage de preço.

### Checklist

B2B2C saudável tem diversidade de Bs (nenhum acima de quinze a vinte por cento da receita), NRR de Bs acima de cento e dez por cento, time-to-integration decrescente, alcance de Cs crescendo exponencialmente, margem melhorando com escala, compliance em dia (SOC 2, ISO e o que mais for relevante) e relacionamento forte com top Bs. O perfil problemático é o oposto: concentração alta (top três Bs em sessenta por cento ou mais), churn de Bs acima de quinze por cento ao ano, suporte sobrecarregado e compliance reativo. Os itens abaixo viabilizam o cenário bom.

> [!tip] Checklist de B2B2C
>
> - Arquétipo B2B2C identificado (white-label, cobrand, enabler, marketplace, aggregation)
> - Dois usuários (B admin e C final) mapeados com necessidades distintas
> - Produto com duas interfaces pensadas (admin mais experiência final)
> - API ou SDK de alta qualidade mais developer docs (se relevante)
> - White-label customization suportada (marca, cores, domínio)
> - Pricing tierado por volume, setor e risco
> - SLA claro com métricas, janelas e consequências
> - Time de vendas enterprise preparado para ciclo longo
> - Customer Success dedicado para ramp-up pós-signing
> - Multi-tenancy arquitetural desde o início
> - Compliance (SOC 2, ISO, setoriais) planejado
> - Concentração monitorada (alerta se top B passar de vinte por cento)
> - NRR por B medido
> - Time-to-integration de novos Bs mensurado e reduzido
> - Contrato com cláusulas claras: responsabilidades, disputas C, confidencialidade, exclusividade
> - Estratégia para prevenção de B construir internamente
> - Relacionamento com top Bs cultivado (executive sponsor, trimestrais)
> - Alcance de Cs medido e reportado
> - Economics por B e por C separadamente modelados
> - Plano de expansão para novos arquétipos e segmentos de B

### Ver também

[[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 6 — CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL|Capítulo 6 (CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL) (Vol. 6)]] cobre parcerias estratégicas, franquias, e channel partnerships. [[#CAPÍTULO 6 — MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA|Capítulo 6 (MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA)]] cobre marketplace dynamics quando o B2B2C é especificamente do tipo marketplace.

---

## CAPÍTULO 9 — OPEN SOURCE COMO ESTRATÉGIA

> [!abstract] Posicao no livro
> Open source como estrategia de go-to-market e construcao de moat para startups dev-tools, infra e SaaS moderno. Vizinhos relevantes,
> - [[#CAPÍTULO 7 — PLATAFORMA VS PRODUTO: QUANDO CONSTRUIR PLATAFORMA E QUANDO NÃO|Capítulo 7 (PLATAFORMA VS PRODUTO: QUANDO CONSTRUIR PLATAFORMA E QUANDO NÃO)]], quando o projeto OSS pode virar plataforma com multiplos lados
> - [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 3 — PROPRIEDADE INTELECTUAL E INPI|Capítulo 3 (PROPRIEDADE INTELECTUAL E INPI) (Vol. 8)]], decisoes de licenciamento e protecao do core proprietario
> - [[#CAPÍTULO 6 — MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA|Capítulo 6 (MARKETPLACE DYNAMICS E RISCO DE PLATAFORMA)]], dinamica de network effects que tambem opera em comunidades OSS
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 6 — CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL|Capítulo 6 (CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL) (Vol. 6)]], comunidade e contribuidores como canal indireto de distribuicao
> - [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 11 — OPERAÇÕES EM ESCALA|Capítulo 11 (OPERAÇÕES EM ESCALA) (Vol. 7)]], operacao quando a comunidade vira parte do produto

> **Aplicabilidade**: empresas dev-tools ou infra. Crescente em SaaS moderno.

### O que este capítulo cobre

Usar open source (código aberto) como **estratégia de go-to-market (entrada no mercado)**, não só como prática de engenharia. O projeto open source vira funil de awareness (descoberta), community (comunidade), e conversão.

### Por que importa

- **Adoção orgânica massiva**: developers (desenvolvedores) experimentam sem atrito.
- **Community como moat (barreira competitiva)**: ecossistema de plugins, integrações, e contribuidores.
- **Credibilidade técnica**: código aberto sinaliza confiança.
- **CAC (custo de aquisição de cliente) muito baixo**: a conversão acontece pelo uso do produto, não por sales (vendas).

### Como executar

**1. Modelos de negócio:**

- **Open Core**: core open source + features pagas. Ex: GitLab, MongoDB.
- **SaaS sobre OSS**: managed hosting de projeto open source. Ex: Databricks, Confluent.
- **Serviços/support**: OSS grátis + support pago. Ex: Red Hat tradicional.
- **Dual licensing**: OSS com licença restritiva + licença comercial alternativa. Ex: MySQL histórico.

**2. Licenças principais:**

| Licença | Permissividade | Uso típico |
|---|---|---|
| **MIT** | Muito permissiva | Biblioteca que você quer ampla adoção |
| **Apache 2.0** | Permissiva + patent grant | Mais comum em empresa-backed |
| **GPL** | Copyleft | Ecossistema Linux |
| **AGPL** | Copyleft sobre rede | Evita "SaaS sem contribuir back" |
| **BSL (Business Source)** | Source-available, vira OSS depois de X anos | MariaDB, HashiCorp, CockroachDB |
| **SSPL** | Controversa, bloqueia cloud providers | MongoDB recent |

Escolha importa: MIT max adoção, pouco controle. AGPL/BSL mais controle, menos adoção.

**3. Community building:**

- **Docs excepcionais** (ver [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 4 — ENGINEERING MANAGEMENT: GESTÃO DO TIME TÉCNICO E DEVELOPER EXPERIENCE|Capítulo 4 (ENGINEERING MANAGEMENT: GESTÃO DO TIME TÉCNICO E DEVELOPER EXPERIENCE) (Vol. 7)]]).
- **Contributing guide** claro.
- **Welcome experience** para new contributors.
- **Governance**: quem decide? Em OSS empresa-backed, empresa tem controle, comunicar claramente.
- **Events e conferences**.

**4. Commercial conversion:**

- **OSS users → aware of commercial**: footer, docs, repo, product-led discovery.
- **Self-serve tier paid**: Hobby/Starter → Pro → Enterprise.
- **Enterprise sales** para grandes contas.

**5. Casos bem-sucedidos:**

- **MongoDB**: OSS → SaaS → IPO.
- **Elastic**: OSS → managed Elasticsearch → IPO.
- **Databricks**: construído sobre Apache Spark (OSS contribution).
- **Supabase**: OSS Firebase alternative → managed.
- **Hashi Corp**: múltiplos OSS projects → commercial offerings.

**6. Armadilhas:**

- **Cloud providers "stealing"**: Amazon oferecendo serviço baseado em seu OSS. MongoDB e Elastic mudaram licenças por isso.
- **Community expectations**: comunidade pode exigir features não-monetizáveis.
- **Support burden**: muitos users grátis geram tickets.
- **Conversão baixa**: 0.5-2% de free OSS users viram paid.

### Checklist

- [ ] Modelo de negócio claro (open core / SaaS / etc.)?
- [ ] Licença escolhida conscientemente?
- [ ] Community strategy (governance, contributing, docs)?
- [ ] Path de conversion OSS → paid definido?
- [ ] Defesa contra cloud providers pensada?
- [ ] Capacity de support planejado?

---

### FRAMEWORKS PASSO A PASSO DESTE CAPÍTULO

#### Framework: API Strategy & Developer Relations (Jeff Lawson / Twilio, 2008–2016)

##### Origem

A Twilio, fundada por Jeff Lawson em 2008, foi a primeira empresa a demonstrar que API-first não era apenas uma arquitetura técnica, mas uma estratégia de go-to-market completa. Ao tornar os desenvolvedores o canal de distribuição primário, a Twilio cresceu de zero para IPO em 2016 com net revenue retention acima de 150%. O modelo foi replicado por Stripe (payments), Plaid (open banking), Algolia (busca), SendGrid (email), Segment (dados), Cloudinary (mídia) e dezenas de outras empresas. Developer Relations (DevRel) emergiu como função organizacional específica — parte marketing, parte product, parte comunidade — para capturar esse canal. No Brasil, empresas como Pagar.me, Zoop e Belvo seguiram versões do modelo.

##### O que é

Estratégia de go-to-market onde o **produto primário é uma API** (interface de programação) e o canal de aquisição primário são desenvolvedores que integram essa API em seus próprios produtos. Developer Relations é a função que cultiva esse canal: criação de documentação de qualidade, SDKs, tutoriais, comunidade de desenvolvedores, advocate program e eventos. A lógica: desenvolvedores fazem a compra técnica (avaliam e integram), depois vendem para seu próprio empregador/cliente (bottom-up ou land-and-expand).

##### Princípios / estrutura

**Developer Experience (DX)** como produto: o "produto" que o desenvolvedor experimenta é o processo de integração — documentação, latência da API, qualidade dos erros, SDKs. DX ruim é produto ruim, independentemente da funcionalidade subjacente. **Time to first successful call (TTFSC)**: métrica central de onboarding de API — em quanto tempo um desenvolvedor faz a primeira chamada bem-sucedida? Twilio otimizou para < 5 minutos. **Land and expand**: desenvolvedor integra em projeto pessoal ou POC, demonstra valor, empresa compra acesso em escala. **Developer as champion**: desenvolvedor interno que integrou vira advogado da plataforma com a liderança técnica e de negócio.

##### Como aplicar do jeito certo

Produto: garantir que a API tem documentação de referência completa, exemplos em múltiplas linguagens, sandbox de testes, erros com mensagens informativas. Medir TTFSC semanalmente. Aquisição: presença em plataformas de desenvolvedores (GitHub, Stack Overflow, Dev.to, Hacker News), eventos técnicos (meetups, hackathons), conteúdo técnico (tutoriais, artigos de blog de engineering). Comunidade: programa de advocates (desenvolvedores externos que usam e promovem), fórum ou Discord, feedback loop direto entre comunidade e produto. Monetização: freemium ou pay-as-you-go para remover barreira de entrada, expansão automática com uso.

Exemplo aplicado, Pagar.me (Brasil). API de pagamentos com documentação em português, SDKs para PHP, Ruby, Python e Node. Estratégia de aquisição inicial: presença em eventos de desenvolvimento como Python Brasil e RubyConf. Desenvolvedores integram em projetos de e-commerce de pequeno porte. Projeto cresce, volume de transações cresce, receita cresce sem ação de vendas. Resultado: grande parte da base de clientes chegou via integração técnica direta, não via venda enterprise tradicional. DevRel como função híbrida (parte suporte técnico, parte evangelismo) foi central nos primeiros anos.

##### Erros comuns a evitar

(1) Documentação como afterthought — API com documentação incompleta ou desatualizada destrói DX. (2) Falta de sandbox — desenvolvedor não consegue testar sem conta de produção é churn antes de onboarding. (3) Preços complexos para experimento — desenvolvedor que precisa de aprovação de budget para testar nunca experimenta. (4) DevRel sem feedback loop com produto — relações públicas técnicas sem influência no roadmap é só marketing. (5) Ignorar comunidade existente — tentativa de criar comunidade nova quando existe Stack Overflow, Discord ou fórum ativo é desperdício.

##### Quando não usar

Para produtos onde o comprador primário não é técnico e o desenvolvedor não tem poder de decisão (enterprise top-down, governo). Para produtos com complexidade de integração muito alta onde o custo de implementação supera o benefício do modelo self-service. Em mercados onde privacidade de dados impede sandbox (saúde, finanças em alguns regimes regulatórios sem sandbox regulatório formal).

##### Leitura adicional

Lawson, J. (2023). *Ask Your Developer*. Harper Business. *The API Economy* — série de posts Apigee/Google. Kong, Twilio e Stripe Engineering blogs são referências de DX de alta qualidade.

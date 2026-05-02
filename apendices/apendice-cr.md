---
title: "APÊNDICE CR — ENGINEERING MANAGEMENT: GESTÃO DO TIME TÉCNICO E DEVELOPER EXPERIENCE"
appendix: "CR"
---

## APÊNDICE CR — ENGINEERING MANAGEMENT: GESTÃO DO TIME TÉCNICO E DEVELOPER EXPERIENCE

Engenharia (de software) é a função organizacional que escala de forma mais diferente das outras. As regras que funcionam para um time de vendas de 20 pessoas não funcionam para um time de engenharia de 20 pessoas. As ferramentas de performance management (gestão de desempenho) de marketing não cabem em avaliação técnica. A estrutura hierárquica que dá certo em operações quebra em produto de software. Fundadores não-técnicos frequentemente tentam aplicar ao time de engenharia o que aprenderam em outras áreas. O resultado é saída de engenheiros bons, débito técnico crescente, e time cada vez menos produtivo a cada contratação.

Esse apêndice trata das duas faces da disciplina. A **Parte 1** cobre Engineering Management (gestão de engenharia) em escala. Inclui career ladders (trilhas de carreira), levels (níveis), performance reviews (avaliações de desempenho), estrutura organizacional, o que fazer com o IC (Individual Contributor, contribuidor individual) sênior que não quer ser gerente, como montar chapters (capítulos) e squads (esquadrões), como dimensionar headcount (quadro de pessoal). A **Parte 2** cobre Developer Experience (experiência do desenvolvedor) como disciplina, relevante para empresas cujo produto é consumido por desenvolvedores (APIs, SDKs ou kits de desenvolvimento, developer tools ou ferramentas para devs). Mas com princípios que se aplicam também ao DX (developer experience) interno da sua própria engenharia.

---

### Parte 1 — ENGINEERING MANAGEMENT EM ESCALA

#### Por que engenharia precisa de regras próprias

Três características tornam engenharia uma disciplina de gestão particular. Primeira: o produto do trabalho é código, que é inspecionável de forma diferente de uma campanha de marketing ou de uma meta de vendas. Segunda: o melhor engenheiro individual pode gerar mais valor do que cinco engenheiros medianos juntos, o que distorce a economia do time. Terceira: há uma fratura cultural persistente entre os que querem codar (programar) para sempre e os que querem gerenciar pessoas. Forçar o caminho errado destrói talento em ambos os lados.

A consequência prática dessas três características é que Engineering Management tem um conjunto de boas práticas específicas, construídas pela indústria ao longo de décadas. As principais você encontra abaixo.

#### Career ladders duais: IC e Manager

O primeiro princípio: oferecer duas trilhas paralelas de carreira, não forçar todo engenheiro a virar gerente.

**Trilha de Individual Contributor (IC).** L3 Engineer (início de carreira), L4 Senior Engineer, L5 Staff Engineer, L6 Principal Engineer, L7+ Distinguished ou Fellow. Staff+ é um IC com impacto organizacional comparável ao de um gerente, frequentemente maior. Pessoas como Jeff Dean e Sanjay Ghemawat fizeram Google ser o que é sem nunca gerenciar ninguém oficialmente.

**Trilha de Manager.** L4 ou L5 Engineering Manager (gerencia 5-10 reports), L6 Senior EM (gerencia outros gerentes), L7 Director, L8 VP Engineering, L9 CTO.

Três princípios tornam o sistema funcional: (1) em cada level equivalente, IC e Manager têm o **mesmo impacto esperado e a mesma compensação**: um L5 Staff Engineer ganha o mesmo que um L5 EM, (2) a pessoa pode **transicionar entre trilhas** sem perder level, um Staff que quer virar EM, ou um EM que quer voltar para IC, mantém seu nível, (3) a trilha de IC tem teto alto, um Principal Engineer pode ter mais influência na empresa do que um Director.

Sem career ladder dual explícito, você perde o top IC que não quer gerenciar, e cria pressão perversa para que bons engenheiros virem maus gerentes só para subir.

#### Levels e critérios

Cada level precisa ter critérios **explícitos e documentados** do que se espera em três dimensões:

**Escopo.** O tamanho do problema que a pessoa resolve sozinha. L3: tarefa bem definida. L4: feature. L5: sistema. L6: plataforma. L7: estratégia técnica.

**Impacto.** O alcance do resultado. L3: no próprio time. L4: no time. L5: em múltiplos times. L6: na organização. L7: na indústria.

**Autonomia.** O grau de supervisão necessário. L3: supervisionado. L4: independente. L5: define direção de time. L6: define direção de área. L7: define direção da empresa.

Os critérios têm que estar escritos e ser compartilhados. Se a pergunta "por que ele é Senior e eu não?" não tem resposta clara e comparável, você tem um sistema injusto, e funcionários saindo como consequência.

#### Compensação por level

Empresas transparentes (GitLab, Buffer, Stripe em algumas faixas) publicam as bandas. Padrão médio de SaaS brasileiro mid-size em 2025-2026:

| Level | Salário mensal (R$) | Equity inicial |
|---|---|---|
| L3 | 10-16k | 0-0,05% |
| L4 | 15-25k | 0,05-0,15% |
| L5 Staff | 22-38k | 0,15-0,3% |
| L6 Principal | 30-55k | 0,2-0,5% |

Para empresas que captam em USD e operam no Brasil, as faixas podem ser substancialmente superiores. Benchmarking com serviços especializados (Radford, Option Impact, Pave) é obrigatório para evitar pagar muito acima ou muito abaixo do mercado, os dois destroem o time de formas diferentes.

Revisar bandas anualmente. Mercado de engenharia no Brasil teve inflação salarial entre 2020-2022 (dolarização, remoto global), correção parcial em 2023-2024, manter bandas estáticas por dois anos é fonte garantida de saídas.

#### Template de Career Ladder — Critérios por Dimensão

A tabela a seguir é um template base para formalizar o career ladder. Adapte para a realidade da sua empresa, mas mantenha os três eixos (Escopo, Impacto, Autonomia) e exemplos concretos para cada level — critérios vagos produzem avaliações inconsistentes.

| Level | Escopo | Impacto | Autonomia | Exemplo concreto |
|---|---|---|---|---|
| **L3 — Engineer** | Tarefa bem definida dentro de uma feature | Dentro do próprio time | Supervisionado; precisa de direcionamento frequente | Implementa endpoint específico dado design e spec claros |
| **L4 — Senior Engineer** | Feature completa, end-to-end | No time; influencia decisões técnicas do squad | Independente em execução; pede ajuda em arquitetura | Define e implementa módulo de autenticação sem supervisão |
| **L5 — Staff Engineer** | Sistema ou plataforma que serve múltiplos times | Multiplica times; muda como a organização resolve problemas | Define direção técnica de área; influencia roadmap | Redesenha a arquitetura de dados de toda a plataforma |
| **L6 — Principal Engineer** | Estratégia técnica da empresa | Organizacional; altera trajetória técnica de longo prazo | Define direção; age com mínimo contexto | Lidera migração de monolito para microserviços em empresa de 150+ eng |
| **L4 — Engineering Manager** | Time de 5-8 engineers | Saúde e performance do time; recrutamento | Gerencia pessoas; define processo do squad | Contrata 4 engineers, reduz cycle time do squad em 30% em 6 meses |
| **L5 — Senior EM** | Múltiplos times ou squads | Cultura de engenharia em área | Gerencia outros gerentes; define estrutura organizacional | Estrutura três squads autônomos com missões claras |
| **L6 — Director of Engineering** | Área de produto completa | Alinhamento eng × produto × negócio em escala | Define estratégia técnica de produto; representa eng no board | Entrega plataforma multitenancy que habilita expansão internacional |

**Como usar o template.** Para cada avaliação, o manager preenche os critérios do nível atual da pessoa e do nível seguinte, e documenta evidências concretas para cada dimensão. A decisão de promoção compara evidências com critérios — não com a percepção de "está pronto". Sem evidências documentadas, calibration é inviável.

**Promotion process.** Promoções não devem ser surpresa — manager e engineer concordam que a pessoa está "operando no próximo nível" com consistência antes da promoção formal. O processo típico: (1) manager identifica que engineer opera consistentemente no próximo nível por 2-3 meses, (2) manager elabora dossiê com evidências por dimensão, (3) calibration com outros managers para garantir consistência, (4) aprovação do director ou VP, (5) comunicação com o timeline de início da nova compensação. Promoções surpresa ou negadas sem feedback claro são as principais causas de saída de engenheiros seniores.

#### Performance reviews

A estrutura que funciona tem cadência semestral ou anual com cinco componentes. Self-review: o engenheiro escreve o que entregou, o impacto gerado e seus pontos de desenvolvimento. Manager review: avaliação do gerente direto, alinhada aos critérios do nível. Peer 360: feedback de três a cinco colegas próximos. Skip-level: conversa com o gerente do gerente, para capturar sinal que normalmente não sobe. Calibration: managers se reúnem em grupo para comparar notas e garantir consistência entre reviewers — sem calibration, gerente severo pune o próprio time e gerente leniente favorece o dele.

Ferramentas: Lattice, 15Five, Culture Amp. Empresas menores usam templates próprios em Notion ou documentos.

#### Tech Lead vs Engineering Manager

Um dos erros mais comuns em empresas brasileiras de porte médio: acumular as duas funções na mesma pessoa. Tech Lead e EM são papéis **diferentes**:

- **Tech Lead** é um IC com responsabilidade técnica sobre um time, define arquitetura, faz code reviews críticas, bloqueia decisões técnicas importantes. Não gerencia pessoas, não aprova férias, não faz 1:1s de desenvolvimento pessoal.
- **Engineering Manager** gerencia pessoas, desenvolvimento de carreira, performance reviews, alocação, contratações. Pode ou não codar no dia a dia, se codar, tende a fazer em menor escopo.

Acumular os dois papéis normalmente leva a negligência em um deles, ou a pessoa gerencia bem e o time perde referência técnica, ou a pessoa mantém contribuição técnica forte e abandona gestão. Em times de 6-10 pessoas, separar os papéis desde o começo é investimento com retorno garantido.

#### Chapters, Squads e Guilds

Modelos de organização em escala. O mais famoso é o modelo Spotify (publicado em 2012-2014 e adaptado em várias empresas desde então). Squads são times cross-funcionais orientados a produto ou missão, de seis a dez pessoas, com autonomia sobre como entregar. Chapters são agrupamentos horizontais por disciplina — todos os backend engineers de todos os squads formam um chapter, e o EM de backend gerencia o chapter, não o squad. Guilds são comunidades de interesse voluntárias (quem quer discutir IA/ML, segurança ou testing se junta à guild correspondente). Tribes são agrupamentos de squads relacionados.

O modelo funciona bem em empresas com mais de cem engenheiros. Abaixo disso, é complexo demais — introduz overhead organizacional sem o benefício que justifica. Para times menores, estruturas mais simples (squads ou um único time) funcionam melhor.

#### Headcount planning

Duas razões críticas que, desbalanceadas, criam problemas:

**Ratio Sênior:Júnior.** Ideal tipicamente 60:40, 60% de sêniores. Abaixo disso, você acumula débito de mentoria e qualidade técnica cai. Acima disso, você gasta caro sem retorno proporcional e pode sufocar desenvolvimento de júniores. Empresas early-stage tendem a ter ratio distorcido para sênior (não há tempo de treinar júnior), empresas maduras podem absorver mais júnior.

**Ratio EM:IC.** Ideal 1:6-8 (um gerente para cada 6 a 8 engenheiros). Acima de 1:10, a qualidade do management cai, o gerente não consegue acompanhar cada pessoa. Abaixo de 1:5, você tem mais managers do que o necessário, com overhead e risco de micromanagement.

#### Cultura de engenharia

Além de estrutura formal, há práticas culturais que definem times de engenharia saudáveis.

Code review obrigatório: todo merge precisa de pelo menos uma revisão de par. Exceções apenas para hotfix crítico, com post-review. Deployment frequente: continuous deployment ou, no mínimo, diário — releases mensais gigantescos geram risco e concentram debugging. Blameless post-mortems: quando algo dá errado, a investigação foca em sistema e processo, não em culpados. On-call justo: rotação com compensação adequada, alertas bem calibrados e documentação de runbooks. Tempo para refatoração e débito técnico: dez a vinte por cento do tempo do time alocado para trabalho não-de-feature. E decisões técnicas documentadas: ADRs (Architecture Decision Records) ou equivalente, para que quem chega depois entenda por que algo foi feito daquele jeito.

#### Promoção: processo, não prêmio

Promover é decisão organizacional, não recompensa por lealdade. Processo saudável de promoção:

1. **Pessoa candidata** ou gerente sinaliza que a pessoa está operando em level mais alto há algum tempo.
2. **Dossiê de promoção** é construído com evidências: projetos entregues, impacto medido, peer feedback, exemplos concretos do escopo/impacto/autonomia do novo level.
3. **Comitê de promoção** (managers pares do nível alvo ou acima) revisa o dossiê, compara com candidatos em outros times, toma decisão.
4. **Promoção oficializada** com mudança de level, título e compensação, tudo junto.

Promoção anunciada sem dossiê, sem comitê, sem comparação com outros candidatos é promoção enfraquecida. A pessoa promovida sente a diferença, colegas sentem a diferença.

---

### Parte 2 — DEVELOPER EXPERIENCE: PRODUTO PARA DEVELOPERS (E INTERNO)

#### O que é DX e por que importa

Developer Experience (DX, experiência do desenvolvedor) é a disciplina de construir produtos e interfaces técnicas que geram adoção e produtividade via qualidade técnica percebida. Aplica-se em dois contextos:

**DX externo:** quando seu produto é consumido por desenvolvedores. API, SDK, CLI (interface de linha de comando), biblioteca, developer tool (ferramenta para desenvolvedor). Neste caso, DX é o equivalente do UX (user experience, experiência do usuário) para consumer (consumidor final). É a principal alavanca de adoção. Exemplos: Stripe, Twilio, Vercel, Pagar.me, Pluggy.

**DX interno:** a experiência dos engenheiros da sua empresa em trabalhar no seu próprio codebase (base de código). Quanto tempo leva para um novo dev rodar o projeto pela primeira vez? Testes passam rápido? Build (compilação) é rápido? Deploy (publicação em produção) é simples? DX interno ruim é uma das principais fontes de queda de produtividade em empresas de engenharia em escala.

Esse apêndice foca principalmente em DX externo, mas os princípios se aplicam nos dois.

#### Por que DX é decisivo em produtos para devs

Desenvolvedores não toleram produtos mal-feitos. Documentação confusa, API inconsistente, error messages (mensagens de erro) opacos, SDK com bugs. Em minutos, o developer avaliando o seu produto decide que não vai adotar, e vai para o concorrente. Não há processo de venda que compense DX ruim. A decisão técnica acontece antes do comercial.

Produtos para developers frequentemente têm padrão de adoção bottom-up (de baixo para cima). O developer descobre, experimenta, integra. Depois a empresa paga. Se o desenvolvedor individual não consegue fazer o primeiro hello world em 5 minutos, nunca haverá cliente corporativo. DX ruim compromete o funil inteiro.

#### Os pilares de DX externo

**Documentação como produto.** Documentação não é auxílio à venda. É o produto em si, do ponto de vista do comprador. Investimento equivalente ao engineering do produto. Elementos.

Quickstart. Tutorial de "Hello World" em menos de cinco minutos. Copy-paste funciona. Stripe é referência. Em quatro linhas, você cobra a primeira taxa.

Guias de uso. Narrativos, por caso de uso ("Como receber pagamento por PIX", "Como listar usuários"). Não apenas referência.

API reference completo. Todos os endpoints, parâmetros, respostas, e códigos de erro. Exemplos em múltiplas linguagens.

Exemplos executáveis. Playgrounds, sandboxes, e Postman collections.

Versioning claro. O que mudou entre versões. Deprecations com prazo. Migration guides.

Ferramentas. Stoplight, ReadMe, Mintlify, Docusaurus. Empresas mais técnicas preferem Docusaurus mais custom.

**SDKs de qualidade.** Cobrir as linguagens principais do ICP (tipicamente Python, JS, ou TS, Go, Ruby, Java, PHP, e às vezes C#, ou Elixir). Type-safe, onde a linguagem permite. Retry, rate limiting, e error handling, built-in. Auto-gerados a partir da API spec (OpenAPI) mantêm consistência. Mas requerem revisão manual de ergonomia.

**Error messages que ajudam.** Mensagem clara do que deu errado (não apenas código genérico). Sugestão de solução, ou link para doc específica. Request ID para debug. Rate limit, quando aplicável, com `Retry-After` header. Error message ruim custa hora de suporte por cliente.

**Developer portal.** Playground para testar sem credenciais. API explorer inline na documentação. Dashboard de uso, logs, e debugging. Gestão de API keys. Webhook tester.

**Developer Relations (DevRel).** Engenheiros-advocates. Não marketeiros disfarçados. Perfil. Experiência de desenvolvimento real, capacidade de escrever código, e produzir conteúdo técnico, e presença em comunidade. Papel. Conteúdo técnico, participação em eventos, resposta em HackerNews, e Stack Overflow, e criação de exemplos. DevRel bem posicionado entrega pipeline qualificado. Mal posicionado vira marketing caro.

#### Métricas de DX

DX é disciplina mensurável.

TTFHW (Time To First Hello World). Tempo médio do signup, até a primeira chamada de API bem-sucedida. Minutos. Não horas.

TTFV (Time To First Value). Tempo do signup, até a primeira integração produtiva. Dias. Não semanas.

Weekly Active Developers (WAD). Developers únicos ativos por semana.

Ticket volume por MAU. Volume de support tickets, dividido por Monthly Active Users. Baixo é bom. Alto indica documentação, ou produto, ruim.

Developer NPS. Pesquisa direta com developers. Benchmark global. Trinta ou mais é bom. Cinquenta ou mais é excelente.

#### DX interno

Se os seus próprios engineers gastam horas por dia contornando a complexidade interna do seu produto, a produtividade cai linearmente. Sinais de DX interno ruim.

Setup de ambiente leva mais de meio dia, para novo dev.

Testes locais são lentos (mais de cinco minutos, para feedback).

Build lento, ou flaky.

Deploy complexo, requer memória humana ("precisa rodar script X antes").

Documentação interna desatualizada. Ou inexistente.

Débito técnico sobrepondo a qualquer feature nova.

> [!tip] Platform Engineering como ROI mensurável
> Investir em DX interno (Platform Engineering, como às vezes é chamado) é investimento com ROI mensurável. Um time de plataforma de dois a cinco engenheiros, atendendo trinta a cinquenta engenheiros de produto, pode ter ROI de duas a cinco vezes em produtividade. A matemática é simples. Cada hora economizada por engenheiro, multiplicada por trinta a cinquenta engenheiros, multiplicada por duzentos dias úteis, paga o time de plataforma rapidamente.

---

### ARMADILHAS EM ENGINEERING MANAGEMENT

Forçar carreira única. Toda pessoa boa "tem que virar gerente" é receita para perder IC bom.

Título sem critério. Dar Senior para todo mundo com três anos de experiência dilui o significado, e mina calibração.

Calibration ignorada. Managers severos punem times. Managers lenientes favorecem times. Sem calibration entre managers, a meritocracia é fictícia.

EM que também é tech lead de time grande. Sobrecarga garantida. Separar.

Headcount desalinhado. Crescer time sem sêniores suficientes para mentorar gera débito de qualidade.

Ignorar DX interno. Toda hora gasta contornando o produto próprio é hora não produzindo valor.

DX externo como afterthought. Em produto para dev, documentação é o produto. Tratar como "vamos fazer depois que tiver usuário" garante que não vai ter usuário.

---

#### Plano de Sucessão Técnica

"Bus factor" é o número de pessoas que, se fossem atropeladas por um ônibus, pararia um sistema crítico ou área de negócio. Bus factor de 1 é risco existencial. Em engenharia, bus factor baixo é a norma não-gerenciada: o único que sabe como o pipeline de dados funciona, o único que conhece a API legada de pagamentos, o único que consegue deployar em produção em crise.

**Diagnóstico do bus factor atual.** Para cada sistema crítico e área de conhecimento, mapear: (1) quem pode operar em produção sem ajuda, (2) quem pode debugar em crise sem ajuda, (3) quem pode refazer do zero se necessário. Qualquer coluna com apenas 1 nome é risco.

**Estratégias de redução.**

*Pair programming e mob programming rotativos*: conhecimento transfere quando duas pessoas trabalham no mesmo problema. Não precisa ser sistemático — uma sessão mensal de pair em áreas de bus factor alto é suficiente para começar. Mob programming (time inteiro em um problema complexo) é especialmente eficaz para sistemas legados opacos.

*Runbooks e incident playbooks*: o "saber como deployar em crise" é frequentemente tácito. Forçar o expert a escrever o runbook como se outra pessoa fosse usar transforma conhecimento tácito em explícito. Regra: nenhum sistema em produção sem runbook de incident response.

*Rotação de on-call*: quem não foi on-call em um sistema não conhece os modos de falha. Rotação de on-call com shadowing por engenheiros fora da squad que construiu o sistema é a melhor forma de distribuir conhecimento operacional.

*Architecture decision records (ADRs)*: documentar não apenas o que foi decidido, mas por quê — as alternativas consideradas, os trade-offs, o contexto do momento. Quem chega depois entende a história, não apenas o estado atual.

**Sucessão para papel de CTO ou Tech Lead sênior.** Para o papel mais crítico de conhecimento concentrado, o plano deve incluir: (1) identificar internamente 1-2 candidatos de longo prazo, (2) dar-lhes exposição gradual às responsabilidades de liderança técnica (representação em board, decisões de arquitetura), (3) documentar decisões estratégicas com raciocínio, para que successor entenda o "why" além do "what". Em scaleup, o CTO que não tem sucessor planejado é risco para a empresa inteira — especialmente em M&A, onde adquirente avalia dependência de pessoa-chave.

**Quando não há candidato interno.** Contratação de Staff ou Principal Engineer com mandato explícito de distribuir conhecimento antes de escalar. Consultant ou advisor técnico temporário para documentar sistemas legados. Engineering manager que faz pair sistemático com o technical lead para aprender suficiente para gerenciar em ausência.

---

### Checklist

**Engineering Management:**

- [ ] Career ladder dual (IC, mais Manager) documentado
- [ ] Levels com critérios explícitos (escopo, impacto, autonomia)
- [ ] Compensation bands definidos, e revisados anualmente
- [ ] Performance reviews com cadência fixa, e calibration
- [ ] Tech Lead, e EM, como papéis separados
- [ ] Ratio EM:IC saudável (um para seis a oito)
- [ ] Ratio sênior:júnior calibrado à fase da empresa
- [ ] Processo de promotion com dossiê, e comitê
- [ ] On-call rotation com compensação

**Developer Experience externo (se aplicável):**

- [ ] TTFHW medido, e otimizado para menos de cinco minutos
- [ ] SDKs nas linguagens principais do ICP
- [ ] API reference completo, e atualizado
- [ ] Error messages acionáveis, com request ID
- [ ] Playground, ou sandbox, funcional
- [ ] DevRel com engineering background
- [ ] Ticket volume por MAU monitorado

**Developer Experience interno:**

- [ ] Setup do ambiente menor que meio dia
- [ ] Testes locais menores que cinco minutos
- [ ] Deploy simples, e documentado
- [ ] Documentação interna viva
- [ ] Platform team proporcional à escala

### Ver também

[[#APÊNDICE BC — TECHNICAL DEBT COMO DISCIPLINA GERENCIADA|Apêndice BC]], Technical debt como disciplina. [[#APÊNDICE CH — IA NA ENGENHARIA INTERNA: COPILOT, AGENTES E PRODUTIVIDADE DE DEV|Apêndice CH]], IA na engenharia interna (Copilot, e AI tooling no time). [[#APÊNDICE CO — RECRUTAMENTO TÉCNICO EM PROFUNDIDADE|Apêndice CO]], Recrutamento técnico. [[#APÊNDICE AP — CULTURA COMO DISCIPLINA|Apêndice AP]], Cultura organizacional, incluindo cultura de engenharia.

---

---

---
title: "APÊNDICE EW — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS"
appendix: "EW"
---

## APÊNDICE EW — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS

> [!note] Nota editorial
> Esse apêndice trata de comunicação escrita como disciplina operacional em startups. Referências a práticas de empresas como Amazon, Stripe e GitLab baseiam-se em materiais públicos: handbooks, blogs de cultura organizacional e entrevistas com executivos. Não há vínculo comercial ou editorial com as organizações citadas.

Empresas com cultura escrita forte tomam decisões melhores. A hipótese parece abstrata, mas o mecanismo é concreto: escrita força clareza de raciocínio. Você só descobre que não entende algo de verdade quando tenta explicar por escrito. Reunião permite que ambiguidade passe sem ser detectada; texto exige que a ambiguidade seja resolvida antes de aparecer na tela.

Amazon proibiu PowerPoint em reuniões de revisão de produto em 2004. Jeff Bezos exigiu que propostas fossem escritas em prosa estruturada de seis páginas. A razão declarada: "o estilo narrativo forçado obriga o escritor a pensar e entender de forma mais completa do que possível em PowerPoint." Stripe construiu cultura de long-form writing desde o início. GitLab opera com mais de 3.000 funcionários em remote-first com handbook público de centenas de páginas. Notion documentou suas práticas em public antes de ter 100 funcionários.

O argumento para startup brasileira não é copiar essas empresas — é reconhecer que o benefício de escrever bem é real e acessível desde o primeiro dia, sem custos de ferramenta ou infraestrutura.

### Os três documentos que todo fundador precisa dominar

#### Memo estratégico

O memo estratégico é o instrumento para decisões importantes. Não para toda decisão — para aquelas que têm consequências significativas e onde o raciocínio precisa ser revisável depois.

**Estrutura:**

```text
Contexto (1 parágrafo)
  O que está acontecendo que torna essa decisão necessária agora.
  Fatos, não opinião. Quem é afetado, qual o tamanho do problema.

Problema (1 parágrafo)
  O problema específico que precisa ser resolvido.
  Separado do contexto porque contexto é situação; problema é o gap.

Alternativas consideradas
  3-5 opções reais, com prós e contras honestos.
  A alternativa que você não vai recomendar precisa ser apresentada
  de forma justa — quem lê precisa entender por que foi descartada,
  não apenas que foi.

Recomendação
  O que você recomenda e por quê.
  Inclua o raciocínio, não só a conclusão. O valor do memo está
  em tornar o raciocínio revisável.

Próximos passos
  Quem faz o quê até quando. Sem próximos passos, a decisão
  não existe — é só intenção.
```

**Regras de escrita para o memo:**

- Sem bullet points excessivos: bullets quebram raciocínio sequencial. Use quando a lista é genuinamente paralela (não quando você está evitando escrever argumentos em prosa).
- Frases completas com sujeito e verbo. "Problema de churn crescente" não é frase — é fragmento. "O churn mensal cresceu de 2,1% para 3,4% nos últimos três meses, concentrado em clientes com menos de 90 dias de uso" é frase que transmite informação acionável.
- Raciocínio explícito, não só conclusão. "Recomendamos a Opção B" sem explicar por que descartamos A e C não permite que o leitor avalie se a recomendação faz sentido ou concorde com o raciocínio mesmo que discorde da conclusão.

**Como conduzir reunião baseada em memo:**

Distribuir o memo antes da reunião não funciona — as pessoas chegam sem ter lido. O modelo da Amazon: 10 a 15 minutos de leitura silenciosa no início da reunião, todos na mesma sala (ou call), sem ninguém falando. Só depois começa a discussão. A qualidade da conversa muda porque todos têm o mesmo contexto e o escritor não pode "explicar" o memo — se precisa de explicação oral, o texto falhou.

**Quando usar o memo:**

- Decisões de produto com investimento significativo de tempo de engenharia
- Mudanças de estratégia go-to-market
- Propostas de novas contratações em nível de liderança
- Qualquer decisão que você vai querer rever em 6 meses

**Quando não usar:**

- Decisões reversíveis e de baixo impacto (escolha de ferramenta SaaS de R$ 200/mês, ajuste de processo de sprint)
- Situações de crise onde velocidade é mais importante que documentação de raciocínio

#### Update para investidores e board

O update mensal para investidores e trimestral para board formal é, ao lado do pitch, o documento que fundadores mais erram. Os dois erros mais comuns são opostos: ou o update é só boas notícias (investidor aprende a ignorar porque não confia que é completo) ou é tão detalhado que ninguém lê.

**Estrutura:**

```text
Headline (1 frase)
  Estado da empresa em uma frase. Honesta.
  "Crescemos 15% no trimestre mas churn subiu — estamos investigando."
  Não: "Tivemos um trimestre com aprendizados importantes."

Métricas principais (tabela)
  Métricas vs. mês anterior vs. budget.
  Incluir sempre: ARR/MRR, churn, CAC, LTV, runway, headcount.
  Apenas métricas que importam para esse estágio.

Highlights (3 wins do período)
  Conquistas reais com contexto.
  "Fechamos contrato com Ambev — primeiro enterprise tier 1 — após
  3 meses de ciclo. Deal de R$ 240k/ano."

Lowlights (3 problemas honestos)
  Aqui mora a maior resistência dos fundadores e o maior valor
  do update. Ver seção abaixo.

Asks (o que você precisa do investidor)
  Específico e acionável.
  "Preciso de introdução para o VP de TI da Natura — você tem
  conexão com a Flavia Mendes?" funciona.
  "Qualquer ajuda com o pipeline enterprise" não funciona.
```

**Por que os lowlights são o item mais importante:**

Investidor profissional sabe que empresa early-stage tem problemas toda semana. Update sem problemas não reflete realidade — reflete ou falta de honestidade ou falta de percepção do fundador. Os dois são red flags piores que os problemas em si.

Investidor que recebe lowlights honestos pode ajudar: fazer introdução, compartilhar experiência de portfólio, mobilizar recurso. Investidor que descobre problema três meses depois que você sabia sente que foi enganado — e esse sentimento corrói a relação de forma permanente.

A frequência: mensal para investidores (anjos, VCs), trimestral para board formal com reunião. Investidor que recebe update mensal mantém contexto e pode responder aos asks sem reunião. Investidor que só vê a empresa em board trimestral chega sem contexto e a reunião vira catching-up em vez de governança.

**O que não fazer:**

- Omitir problemas porque "vamos resolver antes da próxima reunião" — se não resolveu, vai aparecer com três meses de atraso e vai parecer que você escondeu.
- Linguagem vaga: "tivemos um mês desafiador", "o mercado está difícil", "estamos em fase de ajuste". Essas frases comunicam que você sabe que tem problema mas não vai ser específico sobre qual.
- Não incluir asks: update sem ask é relatório, não parceria. Investidor quer ser útil; dê a ele o que fazer.

#### Comunicado interno de decisão

Toda decisão significativa que afeta o time precisa de comunicado escrito, mesmo que você faça all-hands verbal. O escrito permite que quem não estava na reunião entenda, que quem estava revise, e que em 6 meses seja possível saber o que foi decidido e por quê.

**Estrutura:**

```text
O que foi decidido
  Frase objetiva. Sem qualificadores que diluem a decisão.
  "Vamos descontinuar o produto X em 31 de março."

Por que foi decidido (raciocínio completo)
  O que você viu que levou à decisão. Dados, análise, alternativas
  que foram descartadas e por quê. Esse é o parágrafo que as
  pessoas vão ler duas vezes e discutir com colegas.
  Se você não consegue escrever esse parágrafo, a decisão ainda
  não está madura o suficiente para ser comunicada.

O que não foi considerado e por que
  Antecipe as objeções óbvias.
  "Consideramos manter o produto X com time reduzido, mas a análise
  mostrou que o mercado endereçável não justifica o investimento
  mínimo necessário." Isso fecha o loop antes que a objeção apareça.

O que muda para cada área
  Produto, engenharia, comercial, suporte — o que cada área precisa
  fazer diferente a partir de quando.

Como dar feedback
  Canal, prazo e o que você vai fazer com o feedback recebido.
  Se a decisão já foi tomada, seja honesto sobre isso. Fingir que
  feedback pode reverter decisão já tomada é pior que não pedir.
```

**A armadilha do "just do it":**

Anunciar decisão sem explicar o raciocínio cria rumor. O time vai preencher o vácuo com a interpretação mais negativa disponível — não por maldade, mas porque é como cognição humana funciona em contexto de incerteza. O comunicado que explica o raciocínio não elimina discordância, mas elimina a narrativa paralela que surge na ausência de informação.

### Comparação: os três documentos por situação

| Documento | Quando usar | Tamanho típico | Audiência |
|---|---|---|---|
| Memo estratégico | Decisão importante com raciocínio auditável | 1-4 páginas | Decisores internos |
| Update para investidores | Alinhamento mensal sobre estado da empresa | 1-2 páginas | Investidores, board |
| Comunicado interno | Qualquer mudança que afeta comportamento do time | 0,5-1 página | Time inteiro ou área |
| RFC | Proposta para mudança técnica ou estratégica com input coletivo | 1-3 páginas | Pares e afetados |
| ADR | Registro de decisão técnica com raciocínio | 0,5-1 página | Time técnico |
| Runbook | Processo operacional com passos definidos | Variável | Executor do processo |
| Post-mortem | Análise retrospectiva de incidente | 1-2 páginas | Time e stakeholders |

### Princípios de escrita clara para negócios

**Uma ideia por parágrafo.** Se o parágrafo tem duas ideias, ele tem dois parágrafos. Parágrafos longos com múltiplas ideias forçam o leitor a manter contexto demais na memória de trabalho. Resultado: o leitor relê ou desiste.

**Sujeito mais verbo mais objeto.** "A análise foi conduzida pelo time de produto em relação aos dados de churn" tem sete palavras antes do verbo real. "O time de produto analisou os dados de churn" tem sujeito no começo, verbo depois, objeto claro. Voz ativa não é regra estética — é redução de esforço cognitivo para o leitor.

**Eliminar qualificadores vazios.** "Muito", "bastante", "de certa forma", "em algum momento", "relativamente", "algo como" — essas palavras existem porque o escritor não quer se comprometer com precisão. Comprometer-se com precisão é mais útil e mais honesto. "Crescemos bastante" não significa nada. "Crescemos 40% em ARR nos últimos 90 dias" é informação.

**Números concretos em vez de adjetivos.** "Tivemos um trimestre forte" é opinião. "ARR cresceu de R$ 1,2M para R$ 1,7M no trimestre" é fato. Para quem lê de fora (investidor, candidato), fatos específicos constroem credibilidade; adjetivos não constroem nada.

**Conclusão primeiro, argumento depois.** Jornalismo chama isso de pirâmide invertida: a informação mais importante no primeiro parágrafo, detalhes depois. Em comunicação de negócios, o leitor tem 30 segundos. Se a conclusão está no último parágrafo, a maioria não chega lá. Escreva a conclusão primeiro, expanda o raciocínio depois.

**Como revisar:** ler em voz alta. Frase que você tropeça ao ler em voz alta está mal escrita. Frase que você consegue ler em um fôlego, com entonação natural, geralmente está boa. Isso não é regra poética — é teste funcional de fluidez.

### Comunicação assíncrona como disciplina

Async não é o oposto de reunião — é um modo específico de comunicação com casos de uso próprios.

**Quando async é melhor que síncrono:**

- Tarefas que exigem contexto extenso: é mais eficiente escrever o contexto uma vez para todos do que explicar oralmente para cada pessoa individualmente.
- Decisões com múltiplos stakeholders em fusos diferentes: o síncrono exige que todos estejam disponíveis ao mesmo tempo, o que em times distribuídos é custo real.
- Atualizações de status recorrentes: standup diário via Slack (ou ferramenta similar) em texto estruturado economiza 30 minutos de reunião por pessoa por dia.
- Revisão de documento: comentário escrito no documento é mais rastreável e acionável que feedback verbal em reunião.

**Como escrever mensagem de Slack/Teams que não gera reunião:**

A causa principal de mensagem que resulta em reunião desnecessária é mensagem que não tem contexto suficiente para o destinatário responder sem perguntar mais. A estrutura que funciona:

```text
Contexto (1-2 frases): o que está acontecendo, por que estou te escrevendo
Pergunta específica: o que preciso de você, o mais específico possível
Prazo: até quando preciso (se não tem prazo, coloca)
Opcional: o que acontece se não houver resposta
```

"Preciso de ajuda com o contrato" gera reunião. "O contrato com a Petrobras tem cláusula de SLA de 99,9% de uptime — nossa infraestrutura suporta isso? Precisamos de resposta até quinta para a assinatura sexta." não gera reunião.

**RFC (Request for Comments):**

RFC é proposta escrita para mudança técnica ou estratégica que precisa de input de múltiplas pessoas antes de ser decidida. Estrutura mínima:

```text
Problema: o que precisa ser resolvido
Proposta: o que você está sugerindo fazer
Alternativas consideradas: o que mais foi avaliado
Impacto: o que muda e para quem
Prazo para comentários: data limite
Decisor: quem vai decidir com base nos comentários
```

RFC funciona porque separa coleta de input de tomada de decisão. A reunião, quando ocorre, é para decisão — não para descoberta de opiniões que poderiam ter sido coletadas em texto.

**Design docs:**

Design doc é RFC aplicado a decisão técnica com maior detalhe de implementação. O que incluir: contexto técnico que motivou a proposta, solução proposta com detalhes de implementação, alternativas descartadas, riscos identificados. Quem revisa: engenheiros afetados, tech lead, CTO quando a decisão é de arquitetura. Como arquivar: pasta de decisões técnicas no repositório ou wiki, com link a partir do código quando aplicável.

### Email como ferramenta de negócios

Email continua sendo o canal de comunicação formal mais confiável para comunicação externa. É onde decisões importantes são confirmadas, propostas são enviadas e relacionamentos com investidores são mantidos.

**Linha de assunto funcional:**

A linha de assunto deve conter ação necessária mais prazo quando existe. "Aprovação necessária: proposta técnica Ambev até sexta 17/01" é linha de assunto que permite ao destinatário priorizar sem abrir o email. "FYI: update do projeto" é linha de assunto que vai ser lida quando sobrar tempo — ou nunca.

**Estrutura do email de negócios:**

```text
Contexto mínimo (1-2 frases)
  Suficiente para o destinatário saber do que se trata sem
  ter que buscar conversa anterior.

Pedido claro
  O que você precisa que o destinatário faça.
  Uma coisa por email — dois pedidos em um email reduz a taxa
  de resposta do segundo.

O que acontece se não houver resposta
  "Se não tiver retorno até quarta, vou assumir aprovado e seguir."
  Isso não é indelicadeza — é gestão de expectativa e eliminação
  de gargalos.
```

**Follow-up sem ser invasivo:**

Primeiro follow-up: 3-5 dias úteis após envio, responder no mesmo thread, frase única de follow-up no topo. Segundo follow-up: 5-7 dias após o primeiro, com leve atualização de contexto ("segue minha mensagem anterior; a decisão precisa ser tomada antes de..."). Terceiro follow-up em canal diferente (ligação ou mensagem direta) se a decisão for urgente. Após três tentativas sem resposta, assumir que a decisão foi "não" implícito e agir de acordo.

**Email frio para investidor:**

O que funciona: objeto específico ("Seed round R$ 3M — edtech corporativa, 15k usuários, ex-Totvs founders"), parágrafo de abertura com por que você está escrevendo para esse investidor especificamente, 3 linhas sobre a empresa com métricas concretas, pedido específico ("15 minutos de call para compartilhar contexto"). Tamanho ideal: 150 a 250 palavras.

O que não funciona: email genérico enviado para 50 investidores sem personalização (detectado imediatamente), pitch completo em email (ninguém lê), pedir "feedback" quando você quer investimento (seja direto sobre o que quer).

### Documentação como produto interno

Wiki bem construída é sistema nervoso da empresa. Permite que novo funcionário se torne produtivo sem depender de uma pessoa específica, que decisões sejam revisadas sem reconstruir contexto, que processos escatem sem o fundador pessoalmente transmitir cada detalhe.

**O que documentar:**

- Decisões importantes com raciocínio (não só o que foi decidido, mas por quê)
- Processos que se repetem e têm mais de um executor
- Onboarding: o que novo funcionário precisa saber e fazer nas primeiras 2 semanas
- Acordos explícitos de cultura e comportamento esperado

**O que não documentar:**

- Detalhes que mudam toda semana (configuração específica de ferramenta, dados de campanha em andamento)
- Qualquer coisa que vai estar desatualizada antes de ser lida
- Processo de uma pessoa só que nunca vai ser delegado

> [!important] Documentação desatualizada é pior que ausência de documentação
> Pessoa que segue processo documentado desatualizado erra com confiança. A regra prática: toda documentação precisa de dono que faz revisão periódica. Se não tem dono, não deve existir como documento — deve existir como conhecimento de quem executa.

**Runbooks:**

Runbook é documentação de processo operacional com passos específicos e ordenados. Usado principalmente por engenharia (resposta a incidente, deploy, rollback) mas aplicável a qualquer processo crítico com sequência definida. Quando criar: quando processo for executado por mais de uma pessoa ou quando falha humana no processo tiver custo alto. Quem mantém: quem executa — não o manager. Como evitar que fique desatualizado: incluir data de última revisão e criar hábito de atualizar quando executar.

**ADRs (Architecture Decision Records):**

ADR é registro de decisão técnica importante com contexto, alternativas e raciocínio. Formato minimal:

```text
Título: [Número] - [Descrição curta]
Status: proposto / aceito / deprecado / substituído por [ADR-XXX]
Contexto: o que motivou a decisão
Decisão: o que foi decidido
Consequências: o que muda como resultado
```

ADRs acumulam historia da arquitetura do sistema. Quando engenheiro novo pergunta "por que usamos Postgres em vez de MongoDB?", a resposta não precisa vir de quem estava lá em 2021 — está no ADR-007.

**Onboarding por escrito:**

Onboarding documentado permite que novo funcionário navegue as primeiras duas semanas sem depender de um "buddy" disponível full-time. O que incluir: o que a empresa faz e para quem, como o time está organizado e quem faz o quê, ferramentas com acesso e tutoriais básicos, o que fazer nas primeiras 48 horas (concreto: "crie conta em X, leia documento Y, fale com pessoa Z"), primeira entrega esperada em 30 dias.

O teste do onboarding: se novo funcionário consegue chegar ao fim da primeira semana funcional sem fazer pergunta que não está documentada, o documento está bom o suficiente. Se a mesma pergunta aparece de dois funcionários consecutivos, adicione a resposta ao documento.

### Comunicação em crise por escrito

Crise tem dinâmica diferente de comunicação normal. Velocidade importa, mas imprecisão em momento de crise amplifica o problema. O equilíbrio correto: comunicar rapidamente o que sabe com certeza, e não comunicar o que ainda não sabe.

**As primeiras 2 horas:**

O que escrever: fatos confirmados, escopo do impacto conhecido, que você está investigando, quando vai dar próxima atualização. O que não escrever: especulação sobre causa, promessa sobre resolução sem saber se é possível, linguagem que implica culpa antes de investigação completa.

**Comunicado para clientes afetados:**

```text
O que aconteceu (factual, sem minimizar)
Quem foi afetado e como
O que estamos fazendo agora
Próxima atualização: [data e hora específicas]
Como entrar em contato se precisar
```

Tom: direto, sem linguagem corporativa defensiva. "Houve uma falha no nosso sistema de autenticação entre 14h e 16h30 de quinta-feira, afetando 1.200 usuários" é correto. "Tivemos uma situação técnica que pode ter causado algum inconveniente" é linguagem que parece minimização e aumenta a desconfiança.

**Comunicado interno em crise:**

Diferente do externo: pode e deve ter mais contexto interno sobre o que aconteceu e por que. O que o time precisa saber: o que está acontecendo, o que cada área precisa fazer, quem está coordenando, quando haverá próxima atualização. O que evitar: pânico sem informação de ação, e otimismo falso que será desmentido nas próximas horas.

**Post-mortem escrito:**

Post-mortem é documento de análise retrospectiva de incidente. Estrutura padrão:

```text
Resumo executivo (3-5 linhas)
Timeline do incidente (cronológica, factual)
Causa raiz (sem atribuição de culpa a pessoas)
Impacto (usuários afetados, receita, SLA violado)
O que funcionou bem na resposta
O que não funcionou
Ações corretivas (com responsável e prazo)
```

A regra do post-mortem: foco em sistema e processo, não em pessoa. "O processo de code review não pegou o bug" é acionável. "O engenheiro X fez um erro de código" não é — não existe ação além de culpa.

Quando publicar internamente: dentro de 72 horas após resolução do incidente. Esperar mais cria a percepção de que a análise está sendo enterrada. Publicar antes sem análise completa cria post-mortem raso que não tem valor.

### Armadilhas

> [!warning] Armadilhas de comunicação escrita
> **Escrever para mostrar que trabalhou, não para mover ação.** Update longo que documenta tudo que aconteceu mas não tem asks, não aponta problemas reais e não permite que o leitor tome nenhuma ação baseada no que leu é overhead, não comunicação. **Updates que só têm boas notícias.** Investidor aprende em dois ou três ciclos a ignorar esses updates porque não refletem realidade. O paradoxo: update honesto sobre problema aumenta confiança; update positivo artificial destrói. **Comunicados que pedem feedback mas já decidiram.** Fingir que input vai influenciar decisão já tomada é percebido imediatamente pelo time e destrói a credibilidade do próximo pedido de input genuíno. Se a decisão está tomada, comunique a decisão — não peça validação. **Documentação no lugar errado.** Documento que ninguém lê porque está na pasta errada, no sistema errado ou com nome impossível de encontrar tem valor zero. Documentação precisa ser encontrável antes de ser legível. **Memo que substitui conversa necessária.** Memo é excelente para decisões com tempo de análise. Decisão urgente ou situação de alto atrito interpessoal pode precisar de conversa direta primeiro, memo depois para registrar o que foi decidido.

### Ver também

[[apendice-dz|Apêndice DZ — Comunicação Interna]], [[apendice-ex|Apêndice EX — Apresentação]], [[apendice-ek|Apêndice EK — Influência]], [[apendice-dd|Apêndice DD — Investor Relations]]

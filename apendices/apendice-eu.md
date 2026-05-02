---
title: "APÊNDICE EU — CONTRATOS EM PROFUNDIDADE POR TIPO"
appendix: "EU"
---

## APÊNDICE EU — CONTRATOS EM PROFUNDIDADE POR TIPO

> [!note] Aviso legal
> Este apêndice é material educacional. Contratos têm efeitos jurídicos vinculantes e suas consequências dependem do contexto específico de cada negociação. As descrições aqui apresentadas refletem práticas de mercado e legislação brasileira vigente em maio de 2026. Consulte advogado especializado antes de assinar ou redigir contratos relevantes para a operação da empresa.

> [!note] Posição no livro
> Relevante para [[apendice-ah|Apêndice AH — Contratos e Aspectos Legais]], [[apendice-t|Apêndice T — LGPD]], [[apendice-dj|Apêndice DJ — Não-concorrência]], [[apendice-dc|Apêndice DC — Propriedade Intelectual]] e [[fases/fase-13|Fase 13 — Estruturação]].

---

### Por que o fundador precisa entender contratos, não só assinar

Existe uma ilusão confortável de que contratos são "coisa de advogado". O fundador assina onde o advogado manda e segue em frente. Essa postura funciona até o momento em que o contrato vira problema. Aí o fundador descobre que não entende o que assinou.

Os três erros mais caros que fundadores cometem em contratos:

**1. Assinar MSA (Master Services Agreement, contrato guarda-chuva entre empresas) com IP assignment (cessão de propriedade intelectual) irrestrito sem ler.**

Um grande cliente envia um MSA padrão. A equipe jurídica interna do cliente é bem treinada. A cláusula de propriedade intelectual diz que tudo que a startup desenvolver durante o contrato pertence ao cliente. O fundador assina sem ler. Dois anos depois, a startup percebe que funcionalidades desenvolvidas para esse cliente — e depois incorporadas ao produto base — pertencem juridicamente ao cliente. A due diligence (auditoria pré-investimento) de Série A revela o problema.

**2. Renovação automática de contrato de SaaS ou serviço com lock-in (período mínimo obrigatório) de 2 anos.**

Contrato com fornecedor crítico renova automaticamente por igual período se não houver notificação 90 dias antes. A startup não monitora o prazo. Renova por mais 2 anos um contrato que não quer mais. A rescisão antecipada tem multa de 12 meses.

**3. NDA (Non-Disclosure Agreement, acordo de confidencialidade) que não protege nada porque o confidencial não foi definido.**

A empresa assina um NDA bilateral com potencial parceiro. O contrato diz que "informações confidenciais são as assim marcadas por escrito". A startup compartilha verbalmente estratégia de produto e base de clientes em reunião, sem marcar como "confidencial". O parceiro usa a informação. A startup não tem proteção contratual porque não cumpriu os formalismos do próprio NDA.

Este apêndice desmonta os principais tipos de contrato que uma startup usa e explica o que está em jogo em cada um.

---

### Princípios gerais antes dos tipos específicos

#### Contrato é lei entre as partes

O art. 421 do Código Civil brasileiro estabelece a liberdade de contratar — e com ela, a responsabilidade pelo que foi acordado. Não existe proteção automática para a parte que leu mal o contrato. A ignorância do conteúdo não invalida as obrigações assumidas.

Isso tem uma implicação direta: toda cláusula que o fundador não entende deve ser explicada por alguém que entende, antes da assinatura — não depois.

#### Cláusulas abusivas vs. cláusulas incomuns

Nem toda cláusula dura é inválida. A nulidade por abusividade no direito civil brasileiro (diferente do CDC, que protege consumidores) é mais restrita. Entre empresas, presume-se negociação paritária. Uma cláusula draconiana que o fundador assinou porque não leu é, em geral, vinculante.

O que pode ser nulo entre empresas:

- Cláusula que viola norma de ordem pública (ex: contrato que exige descumprimento de lei).
- Cláusula que configura lesão enorme (uma parte recebe valor irrisório pelo que entrega).
- Cláusula inserida mediante dolo ou coação comprovada.

O que não invalida: cláusula que favorece muito o outro lado, se foi negociada livremente (mesmo que você não tenha lido com atenção).

#### Limitação de responsabilidade

Toda empresa de software deve incluir cláusula de limitação de responsabilidade nos seus contratos. Sem ela, a empresa fica exposta a pedidos de indenização irrestrita por danos consequenciais — que podem ser ordens de magnitude maiores do que o valor do contrato.

Estrutura padrão de limitação:

```text
A responsabilidade máxima da [EMPRESA] sob ou relacionada a este contrato
não excederá o valor total pago pelo CLIENTE nos 12 (doze) meses anteriores
ao evento que originou a responsabilidade.

Em nenhuma hipótese a [EMPRESA] será responsável por danos indiretos,
consequenciais, incidentais, punitivos ou danos por lucros cessantes,
mesmo que tenha sido avisada da possibilidade de tais danos.
```

Alguns clientes corporativos resistem a limitações de responsabilidade. A negociação é possível — mas o floor da limitação deve ser o valor do contrato, não responsabilidade ilimitada.

#### Foro e arbitragem

**Foro:** define qual comarca julgará disputas. Para empresas brasileiras, o padrão é o foro da sede do réu ou da sede do autor, com preferência pelo foro contratualmente eleito. Vantagem de escolher o foro: previsibilidade sobre onde a disputa ocorrerá.

**Arbitragem:** método alternativo de resolução de disputas — um árbitro privado (ou painel) julga em vez do Judiciário. Vantagens: mais rápido (6–18 meses vs. 3–7 anos no Judiciário), mais especializado (árbitros são técnicos no tema), sigiloso. Desvantagem: custo inicial mais alto (taxas administrativas da câmara + honorários dos árbitros).

Para contratos B2B acima de R$ 500K de valor anual ou alta complexidade técnica, arbitragem faz sentido. Para contratos menores, o custo da arbitragem pode ser desproporcional à disputa.

**Câmaras de arbitragem relevantes no Brasil:**

- CAM-CCBC (Centro de Arbitragem e Mediação da Câmara de Comércio Brasil-Canadá): referência em São Paulo.
- CAMARB: câmara com atuação nacional e custos moderados.
- FGV Câmara: especialização em disputas empresariais.

#### Legislação aplicável em contratos com empresas estrangeiras

Quando a startup brasileira contrata com empresa estrangeira (cliente, fornecedor, investidor), há escolha de lei aplicável. O Brasil adota a **Lei de Introdução às Normas do Direito Brasileiro (LINDB)**, que permite escolha de lei estrangeira para contratos internacionais desde que não viole a ordem pública brasileira.

Na prática: contratos com VCs americanos ou clientes americanos frequentemente escolhem lei de Nova York ou Delaware. Contratos com empresas europeias frequentemente escolhem lei inglesa ou de algum estado-membro da UE. Para o fundador brasileiro, isso significa que disputas nesses contratos são regidas por regras que ele provavelmente não conhece — mais uma razão para assessoria jurídica especializada antes de assinar.

---

### MSA — Master Services Agreement (contrato guarda-chuva B2B)

O MSA é o contrato base que rege toda a relação comercial com um cliente corporativo. Uma vez assinado, as transações específicas são formalizadas por Ordens de Serviço (SoW) que referenciam o MSA.

#### Estrutura do MSA

```text
MSA (Master Services Agreement)
├── Definições e interpretação
├── Escopo geral dos serviços
├── Propriedade intelectual
├── Confidencialidade
├── Representações e garantias
├── Limitação de responsabilidade
├── Indenização (indemnification)
├── Vigência e rescisão
├── Lei aplicável e foro/arbitragem
└── Anexos: SoW #1, SoW #2, DPA

SoW (Statement of Work) — por projeto/módulo
├── Descrição dos serviços específicos
├── Entregáveis e critérios de aceite
├── Cronograma
├── Valor e forma de pagamento
└── Responsabilidades de cada parte
```

#### O que deve estar no MSA — ponto por ponto

**Definições.** Criar glossário explícito das expressões usadas no contrato. Ambiguidade em definições é a origem de 80% das disputas contratuais. O que é "entregável"? O que é "defeito"? O que conta como "hora de suporte"?

**Propriedade intelectual.** Cláusula mais crítica para empresas de software. Há três abordagens possíveis:

- *IP fica com a startup (licença para o cliente):* a startup mantém a propriedade de tudo, o cliente recebe licença de uso. Ideal para produto SaaS ou desenvolvimento sobre plataforma própria.
- *IP fica com o cliente (work-for-hire):* tudo desenvolvido para o cliente pertence ao cliente. Cuidado extremo — se a startup desenvolver funcionalidade genérica que vai para o produto base, está cedendo seu próprio produto.
- *IP dividido:* a startup mantém o que é genérico (background IP), o cliente recebe o que é específico (foreground IP). É o modelo mais equilibrado para desenvolvimento customizado.

> [!warning] IP assignment irrestrito pode destruir o cap table
> Se um MSA cede ao cliente "todos os direitos sobre software desenvolvido durante o contrato", e a startup desenvolve funcionalidades para esse cliente que depois incorpora ao produto base, o cliente tem argumento jurídico sobre o produto. Isso aparece em due diligence e pode bloquear rodadas de investimento ou M&A.

**SLA e penalidades.** Define disponibilidade mínima do sistema (ex: 99,5% uptime) e as consequências do descumprimento (crédito de serviço, desconto em fatura). Negociar SLA realista — prometer 99,9% quando a infraestrutura não suporta cria passivo automático.

**Confidencialidade.** No MSA, confidencialidade recíproca com definição clara de o que é confidencial, como deve ser tratado, e prazo de vigência após o término do contrato.

**Vigência e rescisão.** Definir: prazo de vigência (se determinado ou indeterminado), condições de rescisão por justa causa (breach material não curado em X dias), rescisão imotivada com aviso prévio (tipicamente 30–90 dias), e o que acontece com SoWs em andamento na rescisão do MSA.

#### O que deve estar na SoW

A SoW é onde vive o escopo. Um MSA bem redigido com SoW mal escrita ainda causa problemas. O que uma SoW precisa definir:

- **Escopo exato dos serviços:** o que está incluído e, explicitamente, o que não está.
- **Entregáveis com critérios de aceite:** não "sistema funcionando" — "sistema que realiza as funções X, Y e Z conforme especificação em Anexo A, aprovada pelo cliente em até 5 dias úteis após entrega".
- **Cronograma com marcos:** datas específicas, não "aproximadamente".
- **Valor e forma de pagamento:** valor total, parcelamento, condição de reajuste.
- **Gestão de mudanças (change order):** o que acontece quando o cliente pede algo fora do escopo — não pode virar desconto no preço original.

**Armadilha do escopo aberto.** SoW que diz "desenvolver o sistema de gestão de estoque conforme necessidades do cliente" sem especificar funcionalidades cria escopo ilimitado. O cliente pode pedir qualquer coisa e argumentar que está no escopo. Cada funcionalidade deve ser listada explicitamente. O que não está na lista não está no escopo.

---

### DPA — Data Processing Agreement

O DPA formaliza a relação de tratamento de dados pessoais entre controlador (quem decide o que fazer com os dados) e operador (quem processa os dados a serviço do controlador).

#### Quando é obrigatório

A LGPD (Lei 13.709/2018) exige que o controlador firme contrato com operadores de dados pessoais que "preveja as obrigações do operador em relação às instruções do controlador" (art. 39). Na prática, toda relação SaaS ou de serviço gerenciado onde há tratamento de dados pessoais de terceiros exige DPA.

Exemplos que exigem DPA:

- Plataforma de RH que acessa dados de colaboradores do cliente.
- Software de CRM que armazena dados de leads e clientes do usuário.
- Serviço de analytics que processa dados comportamentais de usuários.
- Agência de marketing que acessa base de e-mails do cliente.

#### O que o DPA deve conter

```text
1. Identificação das partes (controlador / operador)
2. Finalidade do tratamento
3. Categorias de dados pessoais tratados
4. Categorias de titulares
5. Operações de tratamento realizadas
6. Instruções do controlador ao operador
7. Uso de suboperadores (subprocessadores)
8. Medidas técnicas e organizacionais de segurança
9. Notificação de incidentes de segurança (prazo e procedimento)
10. Cooperação com a ANPD
11. Retenção e exclusão de dados ao término do contrato
12. Auditoria e evidências de conformidade
13. Transferência internacional de dados (se aplicável)
```

**Medidas técnicas e organizacionais.** O DPA deve especificar (ou referenciar política separada) as salvaguardas aplicadas: criptografia em trânsito e em repouso, controle de acesso, logs de auditoria, política de senhas, backup, gestão de vulnerabilidades. Cláusula genérica "adotará medidas razoáveis de segurança" não é suficiente para demonstrar conformidade em uma auditoria.

**Suboperadores.** Se a startup usa AWS, Google Cloud, Twilio, SendGrid ou qualquer outro fornecedor que processa dados dos usuários do cliente, esses são suboperadores. O DPA deve listar os suboperadores aprovados ou exigir aprovação prévia do controlador para novos suboperadores.

**Notificação de incidentes.** A LGPD exige notificação à ANPD e ao titular em prazo razoável após descoberta do incidente. O DPA deve definir o prazo de notificação do operador ao controlador — na prática do mercado, 72 horas após descoberta do incidente é o padrão (alinhado ao GDPR europeu).

#### DPA BR vs. DPA EU

Se a startup opera com clientes europeus ou trata dados de residentes europeus, precisa de DPA conforme o GDPR — que tem requisitos mais detalhados que a LGPD.

| Aspecto | LGPD (Brasil) | GDPR (UE) |
|---|---|---|
| Prazo de notificação de incidente | "Prazo razoável" (ANPD orientou 72h para incidentes graves) | 72 horas para autoridade; sem demora injustificada para titulares |
| Suboperadores | Deve haver previsão contratual | Aprovação prévia específica ou geral com direito a objeção |
| Cláusulas contratuais padrão | Não há equivalente formal | SCCs (Standard Contractual Clauses) para transferência internacional |
| Transferência internacional | Autorização da ANPD ou salvaguardas específicas | Adequacy decisions, SCCs, ou BCRs |
| DPO obrigatório | Encarregado obrigatório para controladores (sem limiar claro) | DPO obrigatório acima de certos volumes ou categorias sensíveis |

Se a startup serve clientes nos dois mercados, o DPA pode ser estruturado para satisfazer ambos os regimes simultaneamente — incorporando as SCCs europeias como anexo quando aplicável.

---

### NDA — Acordo de Confidencialidade

#### NDA unilateral vs. bilateral

**Unilateral:** apenas uma parte divulga informação confidencial à outra, que assume obrigações de sigilo. Usado quando a relação é assimétrica — ex: startup apresentando pitch para potencial investidor ou parceiro.

**Bilateral (mutual):** ambas as partes divulgam informação confidencial entre si. Usado quando há troca recíproca de informações — ex: negociação de parceria, due diligence mútua, exploração conjunta de oportunidade.

Na dúvida, negociar bilateral — é mais equilibrado e não é mais difícil de redigir.

#### O que deve ser definido como confidencial

A definição de "informação confidencial" é a cláusula mais importante do NDA e a mais frequentemente mal redigida.

**Definição ruim:**

```text
"Qualquer informação trocada entre as partes."
```

Essa cláusula é tão ampla que é praticamente inaplicável — e pode incluir informações que uma das partes não considerou confidenciais.

**Definição ruim do outro lado:**

```text
"Apenas informações marcadas como CONFIDENCIAL por escrito no momento da divulgação."
```

Essa cláusula exige formalismo que ninguém cumpre em reuniões e e-mails. Informação estratégica compartilhada verbalmente fica desprotegida.

**Definição equilibrada:**

```text
"Informação confidencial inclui: (a) informações marcadas como confidenciais; (b)
informações divulgadas verbalmente e identificadas como confidenciais no ato
da divulgação; e (c) informações que, pela sua natureza, uma pessoa razoável
reconheceria como confidenciais, incluindo, sem limitação, tecnologia, dados de
clientes, estratégia de negócio, dados financeiros e pessoal."
```

#### Exceções à confidencialidade

Todo NDA bem redigido lista informações que não são confidenciais, mesmo que divulgadas pela outra parte:

- Informação que já era de domínio público antes da divulgação.
- Informação que se tornou pública sem culpa do receptor.
- Informação que o receptor já possuía antes da divulgação.
- Informação que o receptor recebeu legitimamente de terceiro sem obrigação de sigilo.
- Informação que o receptor desenvolveu independentemente (sem usar a informação divulgada).
- Divulgação exigida por lei ou ordem judicial (com notificação prévia à parte divulgante, se possível).

#### Prazo

NDAs com prazo vitalício ou indefinido são juridicamente questionáveis no Brasil — podem ser considerados excessivos pela doutrina e jurisprudência. O prazo razoável de mercado:

- **2 a 3 anos** após a divulgação ou término do relacionamento: padrão para informações comerciais.
- **5 anos** para informações técnicas sensíveis ou segredos industriais: justificável para tecnologia de produto.
- **Indefinido para segredos de negócio** (trade secrets): informações que não têm prazo de expiração econômico — ex: algoritmo proprietário, base de dados única — podem ter obrigação de sigilo indefinida, mas isso deve ser tratado por cláusula específica e separada do NDA geral.

#### NDA com colaboradores internos vs. externos

**Colaboradores CLT:** o dever de lealdade e confidencialidade já existe implicitamente na relação de emprego (art. 482, "g" e "h" da CLT). O NDA formaliza o dever e torna as obrigações mais claras — mas a inexistência de NDA assinado não elimina a obrigação de confidencialidade do empregado.

**Prestadores PJ:** não têm relação de emprego. A obrigação de confidencialidade existe apenas se contratualmente estabelecida. NDA é obrigatório.

**Advisors, investidores e parceiros:** não têm relação com a empresa além do contrato específico. NDA é obrigatório antes de qualquer divulgação de informação sensível.

#### NDAs que não protegem nada

- NDA assinado depois que a informação foi compartilhada.
- NDA com definição tão vaga que qualquer coisa é confidencial e nada é confidencial.
- NDA que não especifica consequências do descumprimento (ausência de multa contratual dificulta a quantificação de danos).
- NDA assinado por quem não tem poderes de representação da empresa (colaborador sem poderes de assinatura).
- NDA que exige marca "CONFIDENCIAL" por escrito, mas as partes nunca marcam nada.

> [!tip] Incluir cláusula penal no NDA
> Sem multa contratual, o descumprimento do NDA gera direito à indenização por danos — o que exige provar o dano e seu valor, o que é difícil. Com cláusula penal (ex: R$ 500.000 por violação), a empresa tem valor predefinido e exigível sem precisar provar o dano específico. Incluir cláusula penal razoável e proporcional.

---

### LOI e MOU — Letter of Intent e Memorando de Entendimento

#### A confusão sobre binding vs. non-binding

LOI (Letter of Intent) e MOU (Memorandum of Understanding) são documentos que formalizam o entendimento preliminar entre as partes sobre uma transação ou parceria. A natureza jurídica depende da linguagem — não do nome do documento.

Um documento chamado "MOU" pode ser completamente vinculante. Um documento chamado "LOI" pode ser completamente não vinculante. O que determina é o que está escrito.

**Non-binding:** as partes expressam intenção de negociar, mas sem obrigação de chegar a acordo. A recusa posterior de assinar o contrato definitivo não gera responsabilidade.

**Binding:** as partes assumem obrigação contratual sobre aquelas cláusulas específicas. O descumprimento gera responsabilidade.

Na prática, LOIs e MOUs têm um híbrido: a maioria das cláusulas é non-binding (o acordo em si é apenas intenção), mas algumas cláusulas são binding (exclusividade, confidencialidade, custos da transação).

#### O que costuma ser binding em LOI "non-binding"

Mesmo quando o LOI diz "este documento não é vinculante", as seguintes cláusulas costumam ser tratadas como vinculantes pelo mercado e pela jurisprudência:

- **Exclusividade (no-shop):** a parte que recebeu o LOI se compromete a não negociar com terceiros por determinado período. Binding quase universalmente.
- **Confidencialidade:** as informações trocadas durante a due diligence são confidenciais. Binding quase universalmente.
- **Custos da transação:** cada parte arca com seus próprios custos (advisors, advogados) durante a negociação.
- **Cláusula de good faith negotiation:** a obrigação de negociar de boa fé pode ser executável mesmo que o contrato definitivo não se concretize.

#### LOI em M&A

No contexto de aquisição de startup, o LOI define os termos indicativos da transação:

```text
Elementos típicos de um LOI de M&A:
- Valuation indicativo (ou range)
- Estrutura: compra de participação? Compra de ativos? Fusão?
- Condições para o closing (due diligence, aprovações regulatórias)
- Forma de pagamento (cash, ações do adquirente, earnout)
- Período exclusivo de due diligence (tipicamente 30–60 dias)
- Confidencialidade durante o processo
- Quais partes assumem custos da transação
- Prazo para assinar contrato definitivo após LOI
```

O LOI de M&A deve ser non-binding na maioria das cláusulas financeiras — o adquirente precisa de due diligence para confirmar o valuation. Mas a exclusividade deve ser binding, para dar ao adquirente segurança de que não está competindo enquanto faz a due diligence.

> [!warning] LOI sem prazo de exclusividade favorece o adquirente
> Se o LOI dá exclusividade ao adquirente por 60 dias sem limitação de escopo para a due diligence, a startup fica presa. Use prazo razoável (30–45 dias) com possibilidade de extensão bilateral.

#### LOI em parceria comercial

Em parceria entre startups ou entre startup e empresa, o LOI define os termos da colaboração antes do contrato definitivo. Risco principal: o LOI dá credibilidade à parceria (usada em pitch, press release, relação com investidores), mas sem contrato definitivo, não existe obrigação real.

Estrutura recomendada:

- Descrever o que cada parte fará (non-binding, mas claro).
- Estabelecer prazo para assinar contrato definitivo (binding).
- Estabelecer confidencialidade sobre a existência das negociações (binding).
- Não fazer anúncios públicos sem ambas as assinaturas no contrato definitivo.

#### Como redigir a cláusula de não-vinculatividade de forma robusta

```text
"Exceto pelas cláusulas [X, Y, Z] (exclusividade, confidencialidade e custos), este
instrumento tem caráter não vinculante e não cria obrigação para nenhuma das partes
de celebrar o Contrato Definitivo. Qualquer das partes poderá encerrar as negociações
a qualquer tempo, sem responsabilidade, mediante notificação escrita à outra parte."
```

Listar explicitamente quais cláusulas são vinculantes — não apenas dizer que "este instrumento não é vinculante".

---

### Contrato de advisor

#### Escopo de trabalho

O advisor fornece orientação estratégica, conexões e experiência — não executa trabalho operacional. O contrato deve refletir isso:

- O advisor não tem responsabilidade fiduciária (não é sócio, não é diretor).
- O advisor não tem metas de resultado — tem disponibilidade de tempo (ex: 2 horas por mês, reunião mensal).
- O advisor pode trabalhar simultaneamente com empresas concorrentes, a menos que haja restrição explícita e negociada.
- O advisor não recebe salário — recebe equity.

#### Equity de advisor

O mercado brasileiro (influenciado pelo padrão americano, especialmente o FAST Agreement) usa:

| Nível de advisor | Comprometimento mensal | Equity típico | Vesting |
|---|---|---|---|
| Standard | 1–2 horas/mês | 0,1% a 0,25% | 1–2 anos, cliff de 6 meses |
| Strategic | 2–5 horas/mês | 0,25% a 0,5% | 2 anos, cliff de 6 meses |
| Expert | 5+ horas/mês ou board observer | 0,5% a 1% | 2 anos, cliff de 6 meses |

Phantom shares ou opções são os instrumentos mais comuns para advisors (não quotas diretas). Ver [[apendice-db|Apêndice DB — Stock Options e ESOP]] para estruturação.

#### O que não incluir

- **Exclusividade:** advisors trabalham com múltiplas empresas. Pedir exclusividade setorial para um advisor que investe parte do valor no seu equity é irreal e afasta bons advisors.
- **Responsabilidade por resultados:** o advisor opina — não executa. Vincular o vesting ao atingimento de metas da empresa cria incentivo perverso e estrutura que se parece com relação de emprego.
- **Cargo executivo:** advisor com título de "Chief Advisor" ou "VP of Strategy" pode gerar questionamentos sobre relação de emprego e responsabilidade societária. Usar simplesmente "Advisor" ou "Conselheiro".

#### Cláusula de non-solicit

O contrato de advisor deve incluir cláusula de não-solicitação de colaboradores (non-solicit) pelo prazo de 12–24 meses após o encerramento. Advisor com acesso à equipe não pode sair e recrutar o time para outra empresa.

Não incluir non-compete (proibir o advisor de trabalhar em concorrentes) — viola a premissa de que o advisor tem portfolio diversificado.

#### Como encerrar um contrato de advisor que não está funcionando

O contrato deve ter cláusula de rescisão imotivada com aviso prévio de 30 dias. O que acontece com o equity depende do estágio de vesting:

- Opções vested até a data de rescisão: o advisor pode exercer dentro do prazo pós-saída (definido no contrato, tipicamente 90–180 dias).
- Opções não-vested: canceladas automaticamente.

Se não houver cláusula de rescisão explícita, a saída do advisor pode ser juridicamente mais complexa — especialmente se ele tiver equity real (não opções). Incluir sempre a cláusula de rescisão.

---

### Termos de Uso e Política de Privacidade como contratos com o usuário

#### Clickwrap vs. browsewrap

**Browsewrap:** o usuário "concorda" com os termos simplesmente usando o site ou produto. Validade jurídica baixa — tribunais brasileiros e americanos têm rejeitado browsewrap em disputas, especialmente quando os termos não eram claramente visíveis.

**Clickwrap:** o usuário marca ativamente uma caixa ("Li e aceito os Termos de Uso") ou clica em botão que claramente indica aceitação antes de concluir o cadastro. Validade jurídica muito maior — há ato afirmativo de aceitação.

Recomendação: usar clickwrap para cadastro e para atualizações materiais nos termos. Guardar logs de quando cada usuário aceitou quais versões dos termos — essa evidência é crítica em disputas.

#### O que os Termos de Uso devem cobrir

- **Escopo e descrição do serviço:** o que a plataforma faz e o que não faz.
- **Elegibilidade:** quem pode usar (idade mínima, restrições geográficas, tipos de usuário).
- **Obrigações do usuário:** o que o usuário pode e não pode fazer.
- **Proibições:** uso para fins ilegais, spam, scraping, engenharia reversa.
- **Conteúdo gerado pelo usuário:** quem é dono do conteúdo, que licença o usuário concede à plataforma para exibir/distribuir.
- **Limitação de responsabilidade:** a plataforma não garante disponibilidade ininterrupta, resultados específicos, ou adequação para fim específico.
- **Rescisão de conta:** quando e como a empresa pode suspender ou encerrar conta.
- **Foro e resolução de disputas.**

#### Política de Privacidade como contrato

A Política de Privacidade não é apenas documento de conformidade com a LGPD — é o contrato pelo qual o usuário entende e consente com o tratamento de seus dados. Deve incluir:

- Quais dados são coletados (listagem específica, não "outros dados pertinentes").
- Como são coletados (formulário, cookies, SDK, terceiros).
- Para que são usados (cada finalidade deve ser listada explicitamente).
- Bases legais para cada tratamento (consentimento, legítimo interesse, execução de contrato, etc.).
- Com quem são compartilhados (parceiros, anunciantes, suboperadores).
- Por quanto tempo são retidos.
- Direitos do titular (acesso, correção, exclusão, portabilidade, revogação do consentimento).
- Como exercer os direitos (canal de contato).
- Contato do encarregado de dados (DPO/Encarregado).

#### Atualizações — como fazer de forma legalmente válida

Atualizar os termos sem notificar usuários e esperar que aceitem passivamente é juridicamente frágil. Prática robusta:

- Notificar usuários com antecedência mínima de 30 dias antes de mudanças materiais (que afetem direitos ou forma de tratamento de dados).
- Enviar e-mail com resumo das mudanças e link para versão completa.
- Exigir novo clickwrap no próximo login após a data de vigência.
- Manter histórico de versões anteriores dos termos acessível publicamente.

---

### Contrato de fornecedor e SLA

#### O que negociar com fornecedores críticos

Fornecedores críticos são aqueles cuja interrupção paralisa a operação: provedores de cloud, gateways de pagamento, provedores de e-mail transacional, plataformas de CDN. Para esses, o contrato padrão do fornecedor não é suficiente.

O que negociar:

- **SLA com créditos:** o fornecedor deve compensar financeiramente por downtime acima do threshold definido. Créditos de 10x o valor proporcional do tempo de indisponibilidade é o padrão de mercado.
- **Prazo de notificação de incidente:** o fornecedor deve notificar dentro de X horas após descoberta de incidente de segurança.
- **Plano de continuidade:** o que o fornecedor faz em caso de desastre ou falha sistêmica.
- **Portabilidade de dados:** garantia de exportação dos dados em formato padrão (não proprietário) antes do término do contrato.
- **Prazo de saída:** o contrato deve permitir saída em 30–90 dias com acesso garantido aos dados durante o período.
- **Auditoria:** para fornecedores que tratam dados sensíveis, direito de auditar conformidade com LGPD/GDPR.

#### Cláusulas de exclusividade com fornecedores

Fornecedores tentam incluir exclusividade (a startup não pode contratar concorrentes do fornecedor). Aceitar exclusividade:

- Elimina o poder de negociação em renovações.
- Cria lock-in que pode ser difícil de dissolver.
- Pode ser problemático em due diligence (investidor pergunta por que a empresa não tem alternativa).

Recusar ou limitar exclusividade a segmentos muito específicos é o padrão de boas práticas.

#### Renovação automática — como rastrear

Contratos com renovação automática (auto-renewal) são a principal fonte de gastos indesejados em startups. O padrão: contrato de 1 ano renova automaticamente por igual período se não houver notificação 30–90 dias antes do vencimento.

Sistema mínimo de controle:

```text
Spreadsheet ou ferramenta de gestão de contratos com:
- Fornecedor
- Valor anual
- Data de vencimento
- Prazo de notificação para não-renovação
- Data limite para notificação (= data de vencimento - prazo de aviso)
- Responsável interno pelo contrato
- Alertas automáticos: 90 dias antes + 30 dias antes da data limite
```

#### Contrato com agências (marketing, desenvolvimento)

Contratos com agências merecem atenção especial porque frequentemente são redigidos pela agência — e favorecem a agência.

O que revisar:

- **IP:** quem é dono das peças criativas, código, lista de leads? Para criações sob encomenda, o IP deve pertencer à empresa contratante — mas isso precisa estar explícito. A Lei de Direitos Autorais presume que o autor é o criador, salvo cessão contratual.
- **Confidencialidade:** acesso a dados de clientes, estratégia, e marca exige NDA.
- **Critérios de entrega e aceite:** o que define que o trabalho está concluído?
- **Cláusula de saída:** com quanto de aviso a empresa pode encerrar? 30 dias é razoável.
- **Subconstratação:** a agência pode subcontratar sem autorização? Subcontratados têm acesso a dados da empresa?

---

### Checklist de revisão contratual

O que verificar em qualquer contrato antes de assinar:

- [ ] Quais são as obrigações da minha empresa? Consigo cumprir todas?
- [ ] Qual é a limitação de responsabilidade? Está do meu lado ou do outro?
- [ ] Quem é dono da propriedade intelectual gerada durante o contrato?
- [ ] Qual é o prazo de vigência? Há renovação automática?
- [ ] Como o contrato pode ser rescindido? Qual o aviso prévio?
- [ ] O que acontece se o outro lado não cumprir? Qual é a multa?
- [ ] Há cláusula de confidencialidade? Ela cobre o que precisa cobrir?
- [ ] Qual é o foro? Arbitragem ou Judiciário?
- [ ] Qual lei aplica?
- [ ] Há exclusividade? Por quê? Por quanto tempo?
- [ ] O DPA está incluído (se houver tratamento de dados pessoais)?
- [ ] Há cláusulas que limitam a capacidade de fazer negócios com terceiros?
- [ ] Um advogado leu este contrato?

---

**Ver também:** [[apendice-ah|Apêndice AH — Contratos e Aspectos Legais]], [[apendice-t|Apêndice T — LGPD]], [[apendice-dj|Apêndice DJ — Não-concorrência]], [[apendice-dc|Apêndice DC — Propriedade Intelectual]], [[apendice-el|Apêndice EL — Direito do Trabalho]]

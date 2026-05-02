---
title: "APÊNDICE ET — REGULATÓRIO DE IA NO BRASIL"
appendix: "ET"
---

## APÊNDICE ET — REGULATÓRIO DE IA NO BRASIL

> [!note] Escopo deste apêndice
> Este apêndice trata do ambiente regulatório de inteligência artificial relevante para startups e empresas brasileiras em 2025-2026. Cobre o cenário global (EU AI Act, OCDE), o projeto de lei brasileiro em tramitação, a interface com a LGPD, regras setoriais (Banco Central, SUSEP, ANPD), riscos de viés algorítmico, propriedade intelectual gerada por IA e o que analisar em contratos com fornecedores de modelos. Termina com um checklist de AI governance que permite crescer sem surpresa regulatória.

Regulatório (conjunto de leis e normas que governam um setor) de IA (inteligência artificial) é o tema que mais fundadores deixam para depois. E que frequentemente volta como problema no pior momento — quando o produto já está em produção, o dado de cliente já circula e o contrato com o fornecedor do modelo já foi assinado sem leitura.

O ambiente regulatório de IA está em formação. Não está finalizado. Esse é precisamente o motivo pelo qual agir agora custa menos. As obrigações de compliance (conformidade regulatória) são mais simples antes de você ter escala, antes de o regulador ter dentes, e antes de um incidente público criar pressão sobre o setor inteiro.

---

### 1. O cenário regulatório global de IA

O mapa regulatório global tem três camadas relevantes para uma empresa brasileira.

**EU AI Act — em vigor a partir de 2024-2025**

O EU AI Act é a primeira regulação abrangente de IA no mundo. Publicada como Regulamento (UE) 2024/1689, entrou em vigor em agosto de 2024, com implementação faseada até agosto de 2026. A lógica central é baseada em risco: quanto maior o risco de dano ao ser humano, maior a obrigação do sistema de IA.

A relevância para uma empresa brasileira não é óbvia à primeira vista. Mas é real. Qualquer empresa que:

- vende um produto com IA para usuários ou empresas na União Europeia
- usa IA em decisões que afetam cidadãos europeus
- tem parceiro ou investidor europeu que exige adequação

...está sujeita ao EU AI Act, independentemente de onde está incorporada. O princípio é o mesmo do GDPR: a lei segue o dado e o titular, não a sede da empresa.

As categorias do EU AI Act são:

```text
CATEGORIA          EXEMPLOS                          OBRIGAÇÃO
-----------------------------------------------------------------------
Proibida           Sistemas de crédito social,       Não pode existir
                   manipulação subliminar
Alto risco         Recrutamento, crédito,            Conformidade completa:
                   infraestrutura crítica,           avaliação de risco,
                   decisões de migração              documentação, supervisão
                                                     humana, registro na EU
Risco limitado     Chatbots, deepfakes               Transparência ao usuário
                   (conteúdo gerado por IA)          (aviso que é IA)
Risco mínimo       Filtros de spam,                  Nenhuma (conduta
                   recomendações de conteúdo         voluntária)
```

Para sistemas de alto risco, as obrigações incluem: avaliação de conformidade antes do lançamento, documentação técnica detalhada, registro em banco de dados europeu, supervisão humana obrigatória, monitoramento pós-mercado, e relatório de incidentes graves.

As multas chegam a 35 milhões de euros ou 7% do faturamento global anual para sistemas proibidos, e 15 milhões ou 3% para outros sistemas de alto risco.

**Princípios da OCDE sobre IA**

Os Princípios da OCDE sobre IA (2019, atualizados 2024) não são regulação vinculante, mas funcionam como referência global de soft law adotada por mais de 40 países. O Brasil é signatário. Os princípios cobrem: IA inclusiva e sustentável, valores centrados no ser humano, transparência e explicabilidade, robustez e segurança, e responsabilização. Qualquer empresa que vende para grandes corporações ou governo brasileiro já encontra esses princípios refletidos em editais, RFPs, e avaliações de due diligence de fornecedores.

**PL 2338/2023 — o projeto de lei brasileiro**

O Brasil não tem, ainda, lei de IA. O PL 2338/2023 está em tramitação no Senado Federal desde 2023. Foi aprovado na Comissão Especial do Senado em 2024 e aguarda votação no plenário. Pode ser aprovado em 2025 ou 2026, com período de vacatio legis de 18 a 24 meses após promulgação.

> [!warning] PL 2338/2023 ainda não é lei
> O conteúdo descrito neste apêndice reflete o texto do substitutivo aprovado em comissão em 2024. O texto final pode mudar na votação em plenário ou na sanção presidencial. Consulte a versão mais recente disponível no site do Senado Federal antes de tomar qualquer decisão de compliance baseada neste apêndice.

---

### 2. PL 2338/2023 em detalhes

O PL 2338/2023 adota a mesma abordagem baseada em risco do EU AI Act, com adaptações ao contexto brasileiro. A lógica central: sistemas de IA que podem causar dano significativo a pessoas têm obrigações mais pesadas.

**Três categorias de risco**

```text
NÍVEL DE RISCO    DEFINIÇÃO                            CONSEQUÊNCIA
----------------------------------------------------------------------
Alto risco        Pode afetar direitos fundamentais,   Obrigações de
                  saúde, segurança, subsistência       compliance completas
                  ou acesso a serviços essenciais

Risco limitado    Interação com humano sem             Transparência
                  decisão significativa sobre           obrigatória ao usuário
                  direitos ou acesso

Risco mínimo      Demais sistemas                      Código de conduta
                                                       voluntário
```

**Sistemas de alto risco no contexto brasileiro**

O PL lista explicitamente sistemas de IA de alto risco. Os mais relevantes para startups:

- Concessão de crédito, scoring de crédito, avaliação de solvência e seguros
- Contratação, seleção, avaliação de desempenho e demissão de trabalhadores
- Triagem, diagnóstico e tratamento em saúde
- Educação: admissão, avaliação, certificação, personalização de trilhas
- Segurança pública: identificação biométrica, avaliação de risco criminal, monitoramento
- Benefícios sociais: elegibilidade a programas governamentais

Para uma fintech de crédito, um RH-tech com triagem automatizada de candidatos, uma healthtech com triagem de sintomas, ou uma edtech com avaliação automatizada de aprendizado: o produto principal é quase certamente de alto risco segundo o PL.

**Obrigações dos desenvolvedores vs. implantadores**

O PL distingue dois papéis com obrigações diferentes.

O desenvolvedor (quem cria o modelo ou sistema) é responsável por: documentação técnica do modelo, avaliação de conformidade, monitoramento de desempenho pós-lançamento, e informar implantadores sobre limitações e riscos.

O implantador (quem usa o modelo ou sistema em contexto real) é responsável por: avaliar a adequação do sistema ao uso específico, garantir supervisão humana, manter registros de uso, comunicar incidentes, e assegurar que os usuários finais saibam que interagem com IA.

> [!important] Quem usa API de IA de terceiro é implantador
> Se sua startup usa GPT-4, Claude, Gemini ou qualquer modelo via API para tomar ou recomendar decisões sobre usuários, você é implantador segundo o PL 2338/2023. Isso significa que as obrigações de alto risco recaem sobre você, não sobre a OpenAI ou a Anthropic. A empresa que integra o modelo na decisão é quem responde perante o usuário e o regulador brasileiro.

**Sanções previstas**

As sanções do PL são graduadas:

- Advertência com prazo para correção
- Multa de até 2% do faturamento bruto do grupo econômico no Brasil no último exercício, limitada a R$ 50 milhões por infração
- Suspensão temporária da atividade de IA que causou o dano
- Proibição de atividade de IA em casos graves e reincidentes

> [!note] Comparação com LGPD
> A estrutura sancionatória do PL 2338/2023 espelha a da LGPD, com multa de até 2% do faturamento. A ANPD (Autoridade Nacional de Proteção de Dados) aparece como candidata natural ao papel de autoridade regulatória de IA no Brasil, embora o PL ainda deixe isso em aberto.

---

### 3. LGPD e IA: o que já existe hoje

Mesmo sem o PL aprovado, a LGPD já cria obrigações relevantes para sistemas de IA. O artigo 20 é o mais importante.

**Art. 20 da LGPD — Decisões automatizadas**

O Art. 20 da LGPD estabelece que o titular de dados tem direito de "solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses, incluídas as decisões destinadas a definir o seu perfil pessoal, profissional, de consumo e de crédito ou os aspectos de sua personalidade."

Três pontos práticos sobre o Art. 20:

Primeiro, o direito de revisão humana é do titular, não uma obrigação proativa da empresa. A empresa não precisa automaticamente revisar toda decisão automatizada. Mas precisa ter mecanismo funcional para atender a pedido de revisão.

Segundo, a LGPD exige que, quando solicitado, a empresa informe "os critérios e os procedimentos utilizados para a decisão automatizada". Na prática, isso significa que você precisa ser capaz de explicar a lógica do modelo ao titular. Não é necessário revelar o modelo inteiro, mas é obrigatório explicar quais fatores influenciaram a decisão específica.

Terceiro, o que "lógica utilizada" significa na prática:

```text
EXIGÊNCIA LEGAL     O QUE SIGNIFICA NA PRÁTICA
----------------------------------------------------------------
"Critérios          Quais variáveis o modelo considerou
utilizados"         (ex.: histórico de pagamento, renda, região)

"Procedimentos      Qual foi o processo de decisão — modelo de
utilizados"         crédito, algoritmo de scoring, política de
                    corte, supervisão humana envolvida

"Revisão humana"    Ter alguém capaz de analisar o caso
                    específico e tomar decisão diferente da
                    automática se pertinente
```

**Quando o Art. 20 é ativado**

O Art. 20 se aplica quando a decisão:

- é tomada unicamente com base em tratamento automatizado (sem intervenção humana real)
- usa dados pessoais do titular
- afeta interesses do titular de forma relevante

Isso inclui: recusa de crédito automatizada, rejeição de candidatura por triagem algorítmica, precificação diferenciada por perfil, e personalização que resulta em exclusão de oferta.

> [!tip] Documente a "lógica" antes de precisar explicar
> A maioria das startups não sabe exatamente o que o modelo usa para tomar uma decisão — especialmente se o modelo foi treinado por terceiro ou mudou desde o lançamento. Antes de escalar um sistema de decisão automatizada, documente: quais features entram no modelo, como o score é calculado, qual o threshold de corte, e quem pode fazer override. Essa documentação serve ao Art. 20, ao PL 2338/2023 e a qualquer due diligence de investidor.

---

### 4. Setores regulados com regras específicas de IA

Além do framework geral, três reguladores setoriais já publicaram orientações específicas sobre IA.

**Banco Central — Resolução CMN 4.557**

A Resolução CMN 4.557/2017 (Estrutura de Gerenciamento de Riscos e Capital) exige que instituições financeiras reguladas pelo Banco Central — fintechs com licença bancária, IPs, SCDs, SEPs — mantenham estrutura de gerenciamento de risco que inclui modelos usados em decisões de crédito e operação.

O BCB já publicou orientações adicionais (Carta Circular 3.978 sobre prevenção à lavagem de dinheiro com uso de IA, e Resolução BCB 85/2021 sobre critérios para uso de modelos em gestão de riscos) que impõem:

- Governança do ciclo de vida do modelo: desenvolvimento, validação, aprovação, monitoramento e descontinuação
- Validação independente: quem valida o modelo não pode ser quem o desenvolveu
- Backtesting: comparação periódica entre previsões do modelo e resultados reais
- Plano de contingência para falha de modelo crítico

Para fintechs que usam scoring de crédito com ML: a validação independente de modelo não é opcional, é obrigação regulatória do BCB. E o regulador tem pedido explicações sobre modelos de crédito em exames temáticos.

**SUSEP — seguradoras usando IA para precificação**

A SUSEP publicou a Circular 638/2021 e orientações posteriores sobre uso de modelos de ML em precificação de seguros. Os pontos centrais:

- O modelo precificador precisa ser explicável ao regulador
- Variáveis proxies de raça, gênero ou origem regional que não sejam atuarialmente justificadas são vedadas
- Backtesting obrigatório com frequência definida pela própria seguradora e reportada à SUSEP
- Seguradoras devem conseguir explicar, por escrito, por que uma apólice foi recusada ou precificada de determinada forma

Para insurtechs: o produto de IA que você chama de "modelo proprietário de risco" provavelmente já está no radar da SUSEP. Prepare-se para explicá-lo.

**ANPD — orientação sobre tratamento de dados em IA**

A Autoridade Nacional de Proteção de Dados publicou em 2024 o Guia Orientativo sobre IA e Proteção de Dados Pessoais. Os pontos práticos:

- Toda atividade de treinamento de modelo com dados pessoais exige base legal na LGPD (consentimento, legítimo interesse, ou obrigação legal)
- Dados usados para treinar modelos são "tratamento de dados" para fins da LGPD — mesmo que o modelo final não exponha os dados individualmente
- Transfer learning com modelos pré-treinados em dados de terceiros cria risco de vazamento de dados pessoais via "ataques de extração de membros"
- A ANPD considera que dados biométricos usados em IA (reconhecimento facial, de voz) são dados sensíveis e exigem consentimento explícito

> [!warning] Retreinamento com dados de usuário
> Se a sua empresa usa dados de usuários para retreinar ou ajustar o modelo de IA, essa atividade precisa de base legal LGPD e precisa estar descrita na política de privacidade. A maioria das startups não faz isso. A ANPD tem priorizado esse tema em sua agenda de fiscalização para 2025-2026.

---

### 5. Viés algorítmico como risco jurídico

Viés algorítmico é um problema técnico. Mas já é também um problema jurídico. E vai se tornar mais explicitamente um problema jurídico à medida que o PL 2338/2023 for aprovado.

**O que é viés algorítmico relevante do ponto de vista jurídico**

Viés jurídico relevante é quando um sistema de IA produz resultados sistematicamente desfavoráveis para grupos protegidos por lei, sem justificativa objetiva. O problema não é ter um modelo imperfeito. O problema é ter um modelo que discrimina de forma sistemática e injustificada.

**Crédito**

Um modelo de crédito que usa CEP como variável pode estar usando um proxy de raça e renda sem intenção. No Brasil, o CEP 08000 (Zona Leste de São Paulo) concentra população negra e de baixa renda de forma muito mais pronunciada que o CEP 01310. Um modelo que nega crédito mais frequentemente para CEP 08000 que para CEP 01310, com mesma faixa de renda e histórico, pode estar discriminando por raça indiretamente.

Isso não é ilegal de forma explícita no Brasil hoje — mas é um risco que cresce. A Lei 12.865/2013 e as regulações do BCB proíbem discriminação em serviços financeiros. E o Código de Defesa do Consumidor protege contra práticas comerciais abusivas.

**Seguros**

O mesmo raciocínio aplica-se a modelos de precificação de seguros que usam variáveis de localização, comportamento de navegação, ou histórico de consumo como proxies. A SUSEP já sinalizou que variáveis não atuarialmente justificadas são vedadas. Isso é, na prática, uma vedação a proxies discriminatórios.

**Contratação**

Sistemas de triagem de candidatos com IA são os mais expostos no Brasil. A Lei 9.029/1995 proíbe práticas discriminatórias em contratação por motivo de sexo, origem, raça, cor, estado civil, situação familiar, deficiência, reabilitação profissional, idade ou gravidez. Um sistema que treina com histórico de contratações passadas da empresa pode perpetuar vieses históricos de quem foi contratado.

A CF Art. 5, I (igualdade perante a lei) e Art. 7, XXX (proibição de diferença de salários por motivo de sexo, etnia, cor ou estado civil) criam base constitucional para contestar discriminação algorítmica.

**Casos internacionais como sinal**

- Amazon descontinuou em 2018 um sistema de triagem de CVs com IA que penalizava CVs com a palavra "feminino" e candidatas de faculdades femininas
- O caso COMPAS nos EUA (algoritmo de reincidência criminal) gerou decisões judiciais questionando o uso de IA em sentenças por viés racial documentado
- A Holanda teve sistema governamental de IA de benefícios sociais (SyRI) declarado ilegal por tribunal em 2020 por violar direitos humanos

O Brasil não tem jurisprudência consolidada sobre discriminação algorítmica. Mas a ausência de jurisprudência não é ausência de risco. É apenas ausência de precedente — que será criado quando o primeiro caso chegar ao Judiciário.

> [!important] Auditoria de viés é proteção, não compliance
> Auditar o modelo para viés não é só evitar multa. É evitar que o produto cause dano real a pessoas reais. E é evitar o risco reputacional de um jornalismo investigativo revelar que a sua fintech nega crédito para negros com o mesmo perfil financeiro de brancos. Esse risco reputacional mata empresas.

---

### 6. Propriedade intelectual e IA

**Quem é autor do conteúdo gerado por IA no Brasil**

A Lei 9.610/1998 (Lei de Direitos Autorais) exige que o autor de obra protegida seja pessoa natural. Isso é: um ser humano, não uma máquina. Em 2025, o Brasil não tem lei que atribua autoria a conteúdo gerado por IA. O que isso significa na prática:

- Texto, imagem, código, música ou outro conteúdo gerado inteiramente por IA não tem proteção autoral no Brasil
- Qualquer pessoa pode copiar, distribuir e vender esse conteúdo sem violação de direitos autorais
- Se você vende um produto cujo diferencial é conteúdo gerado por IA, esse conteúdo não está protegido

A exceção relevante: se um ser humano fez escolhas criativas relevantes na produção do resultado (seleção, curadoria, edição substancial, combinação com elementos originais humanos), a obra resultante pode ter proteção parcial pela contribuição humana. Mas a parte gerada por IA em si não está protegida.

> [!warning] Estratégia de IP que depende de conteúdo gerado por IA
> Se o seu moat competitivo é "a IA gera conteúdo único que a concorrência não tem", esse moat não existe do ponto de vista jurídico. A concorrência pode copiar todo o conteúdo gerado. A proteção real nesse cenário vem de: velocidade de geração, qualidade da curadoria humana, relacionamento com usuário, e rede de distribuição — não de IP formal.

**IP de modelos proprietários vs. open source**

Modelos de ML têm duas camadas de IP relevantes: a arquitetura (código) e os pesos (parâmetros treinados).

A arquitetura pode ser protegida como software — sujeita à Lei 9.609/1998 (Software) e à proteção de segredo industrial se não for publicada.

Os pesos treinados são a camada mais valiosa e a mais ambígua. O investimento em computação e dados para treinar o modelo é economicamente relevante, mas a proteção jurídica é incerta. Modelos open source (LLaMA, Mistral, Qwen) têm licenças específicas que variam de totalmente livres a restrições de uso comercial ou derivação. Ler as licenças antes de usar é obrigação, não opcional.

```text
LICENÇA             USO COMERCIAL     DERIVAÇÃO     REDISTRIBUIÇÃO
-------------------------------------------------------------------
MIT / Apache 2.0    Permitido         Permitida     Permitida
CC BY-SA            Permitido         SA obrigatório Permitida
Llama 3 Community   Permitido*        Permitida     Permitida*
  (* exceto empresas com >700M MAU)
OpenRAIL            Permitido         Permitida     Com restrições
                    (com restrições   (com cláusulas de uso)
                    de uso)
Proprietária        Depende do        Geralmente    Geralmente não
(OpenAI, Anthropic) contrato          não           permitida
```

**O risco de treinar com dados de terceiros**

Treinar um modelo com dados que você não tem direito de usar é um risco crescente. As ações judiciais no exterior:

- Getty Images vs. Stability AI: alegação de uso de imagens sem licença para treinar Stable Diffusion
- New York Times vs. OpenAI: alegação de uso de artigos para treinar GPT
- Grupo de autores vs. OpenAI e Meta: uso de livros para treinar LLMs

No Brasil, a Lei de Direitos Autorais não tem exceção explícita para treinamento de IA. Isso significa que treinar com conteúdo protegido sem licença pode ser infração autoral. E mesmo que a lei ainda não tenha jurisprudência consolidada nesse sentido, o risco em due diligence de aquisição ou investimento é real: um investidor sério vai perguntar sobre a origem dos dados de treinamento.

> [!tip] Documente a origem dos dados de treinamento
> Para cada conjunto de dados usado no treinamento, documente: fonte, licença, base legal para uso, e qualquer anonimização ou transformação aplicada. Essa documentação tem duas utilidades: responder ao regulador (ANPD, Art. 20 LGPD) e responder ao investidor em due diligence.

---

### 7. Contratos com fornecedores de IA

Usar a API do OpenAI, Anthropic ou Google não é uma decisão de infraestrutura. É uma decisão jurídica. Os Termos de Uso desses fornecedores têm cláusulas que afetam sua posição perante usuários, reguladores e a própria LGPD.

**Uso de prompts para retreinamento**

A OpenAI, historicamente, usou dados de conversas para melhorar seus modelos. A API (uso comercial) tem política diferente do produto consumer: dados enviados via API não são usados para treinamento por padrão desde 2023. Mas essa política pode mudar. E a versão gratuita de qualquer produto consumer tem regras distintas da API.

A Anthropic tem política similar: dados da API não são usados para treinamento por padrão, com possibilidade de opt-in. O Google tem variações dependendo do produto (Gemini API via Google AI Studio vs. Vertex AI têm políticas diferentes de retenção e uso).

O que verificar nos Termos de Uso de qualquer fornecedor de modelo de IA:

```text
CLÁUSULA A VERIFICAR         PERGUNTA RELEVANTE
--------------------------------------------------------------
Uso de dados para            Meus prompts e outputs podem
retreinamento                ser usados para treinar o modelo?
                             É opt-in ou opt-out?

Retenção de dados            Por quanto tempo o fornecedor
                             retém os dados enviados na API?

Propriedade do output        Quem é dono do conteúdo gerado?
                             O fornecedor tem alguma licença
                             sobre os outputs?

Subprocessadores             O fornecedor usa terceiros para
                             processar os dados? Quem são?

DPA (Data Processing         Existe acordo de processamento
Agreement)                   de dados compatível com LGPD?

Lei aplicável e foro         Em caso de disputa, qual lei
                             aplica? Qual o foro?

Limitação de                 Qual o cap de responsabilidade
responsabilidade             do fornecedor em caso de falha
                             ou vazamento?
```

**DPA para LGPD**

A LGPD exige que, quando uma empresa contrata terceiro para processar dados pessoais em seu nome, exista um contrato (ou aditivo) que estabeleça as obrigações do operador — o fornecedor de IA nesse caso. Esse documento é chamado de DPA (Data Processing Agreement) ou, na linguagem da LGPD, contrato de operação de dados.

OpenAI, Anthropic e Google oferecem DPAs para clientes enterprise. Para clientes de planos básicos de API, a cobertura contratual é menor. Se sua startup processa dados pessoais de usuários brasileiros via API de IA, você precisa de um DPA compatível com a LGPD com o fornecedor. Sem isso, você está operando sem a formalização exigida por lei.

> [!important] Versão enterprise vs. versão básica de API
> A diferença entre o plano básico de API do OpenAI e o ChatGPT Enterprise, do ponto de vista regulatório, é substancial. O Enterprise inclui: dados não usados para treinamento, retenção configurável, DPA disponível, acordo de confidencialidade, e suporte para compliance. Para qualquer produto que processe dados pessoais relevantes (saúde, financeiro, crédito), usar a versão enterprise — ou equivalente em outro fornecedor — não é luxo, é necessidade de compliance.

---

### 8. Como se preparar hoje: o checklist de AI governance

AI governance soa como burocracia corporativa. Na prática, é a diferença entre crescer com controle e ter que parar para apagar incêndio regulatório no momento em que você menos quer distrações — geralmente numa rodada de captação ou numa expansão internacional.

O checklist a seguir é calibrado para startups em estágio inicial e crescimento. Não para grandes corporações. O nível de formalidade e documentação deve ser proporcional ao estágio da empresa.

**Passo 1 — Inventário de sistemas de IA**

Antes de qualquer análise de risco, faça um inventário. Para cada sistema de IA em uso (modelos próprios, APIs de terceiros, ferramentas SaaS com IA embutida):

```text
CAMPO DO INVENTÁRIO          EXEMPLO
--------------------------------------------------------------
Nome/Identificação           "Modelo de scoring de crédito v3"

Função no produto            Recomendar limite de crédito para
                             novos usuários

Tipo de dado processado      CPF, histórico de pagamento,
                             renda declarada, CEP

Desenvolvedor                Interno (squad de dados)

Fornecedores externos        AWS SageMaker (infraestrutura),
                             bureau de crédito X (dados)

Usuários afetados            Todos os usuários que solicitam
                             crédito — atualmente 12 mil/mês

Data da última atualização   Outubro 2024

Responsável interno          Head de dados
```

**Passo 2 — Avaliação de risco por sistema**

Com o inventário em mãos, classifique cada sistema:

```text
PERGUNTA DE RISCO                          SIM / NÃO / PARCIAL
--------------------------------------------------------------
O sistema toma ou recomenda decisões
que afetam direitos de pessoas?

A decisão pode negar acesso a crédito,
trabalho, saúde ou serviço essencial?

O sistema usa dados pessoais de usuários?

A decisão é tomada "unicamente" por
algoritmo, sem revisão humana real?

O sistema opera em setor regulado
(financeiro, saúde, seguros, educação)?

Os dados de treinamento incluem grupos
sub-representados (risco de viés)?

O produto atende usuários europeus
(risco EU AI Act)?
```

Cada "sim" sobe o nível de risco. Sistemas com três ou mais "sim" em perguntas críticas requerem documentação de modelo, avaliação de viés e mecanismo de revisão humana antes de escalar.

**Passo 3 — Documentação de modelo**

Para cada sistema de alto risco, crie e mantenha um Model Card — documento de uma a três páginas que descreve:

- Propósito e escopo de uso
- Dados de treinamento: fonte, período, processo de limpeza
- Features de entrada: quais variáveis o modelo usa
- Métrica de desempenho: como o modelo é avaliado e qual o benchmark atual
- Limites conhecidos: o que o modelo não faz bem, onde falha mais
- Viés documentado: grupos onde a taxa de erro é diferente da média
- Versão e histórico de mudanças

Esse documento serve a três fins: onboarding de novos engenheiros, due diligence de investidor, e resposta ao Art. 20 da LGPD.

**Passo 4 — Mecanismo de revisão humana**

Para sistemas de alto risco, o mecanismo de revisão humana precisa ser real, não cosmético. Isso significa:

- Existe um canal claro pelo qual o usuário pode solicitar revisão da decisão
- Existe uma pessoa ou equipe capaz de fazer a revisão
- Essa pessoa tem autoridade para mudar a decisão do algoritmo
- O tempo de resposta é razoável (dias, não semanas)
- O resultado da revisão é registrado

Revisão humana cosmética — onde um humano "aprova" a decisão do algoritmo sem análise real — não atende o Art. 20 da LGPD nem o PL 2338/2023. O regulador vai perguntar quantas revisões foram feitas, em quanto tempo, e qual a taxa de reversão.

**Passo 5 — Monitoramento de desempenho e viés pós-lançamento**

Modelo que vai bem no dia do lançamento pode degradar com o tempo. Dados de produção mudam. Comportamento do usuário muda. A distribuição de entrada pode sair do domínio de treinamento. Para cada sistema crítico:

- Defina as métricas que você vai monitorar (acurácia, precisão, recall, taxa de falso positivo por grupo demográfico)
- Estabeleça limites de alerta (se a métrica cai abaixo de X, aciona revisão)
- Faça backtesting periódico (compare previsões do modelo com resultados reais observados)
- Registre os resultados e as ações tomadas

**Passo 6 — Gestão de fornecedores de IA**

Para cada API de IA ou fornecedor de modelo:

- Verifique e arquive o DPA atual (atualize quando o fornecedor revisar os termos)
- Confirme a política de uso de dados para retreinamento
- Avalie se a versão em uso (consumer vs. enterprise) é adequada para o dado processado
- Verifique a licença do modelo se for open source
- Documente a origem dos dados de treinamento se o modelo for próprio

**Passo 7 — Política interna de uso de IA**

Se a sua equipe usa IA generativa no trabalho (e usa), defina uma política interna que cubra:

- Quais dados podem ser enviados a ferramentas de IA externas (e quais não podem)
- Quais ferramentas são permitidas (e quais são vedadas por falta de DPA)
- Como atribuir conteúdo gerado por IA (quando e como divulgar ao cliente)
- Como revisar outputs antes de usar em produto, comunicação ou decisão

Não precisa ser longa. Uma página é suficiente para empresa de até 50 pessoas. O objetivo é que todos saibam o que é permitido sem precisar perguntar toda vez.

**Passo 8 — Responsável por AI governance**

Alguém precisa ser o dono desse processo. Em empresas pequenas, pode ser o CTO ou o Head de Dados. Em empresas maiores, pode ser um AI Governance Lead dedicado ou um comitê. O importante é que exista uma pessoa identificada que:

- Mantém o inventário atualizado
- Monitora novidades regulatórias (PL 2338/2023, ANPD, BCB, SUSEP)
- Conduz as avaliações de risco de novos sistemas antes do lançamento
- Responde a pedidos de revisão humana (Art. 20 LGPD)
- É o ponto de contato em caso de incidente

> [!tip] Não espere o regulador bater na porta
> O custo de implementar AI governance desde o início é baixo. O custo de retroativamente documentar, corrigir e explicar um sistema que já está em produção e já causou dano é alto — tanto em tempo quanto em reputação. A janela de menor custo é agora, quando o sistema é novo, a equipe é pequena, e o regulador ainda está formulando as regras.

---

### Linha do tempo regulatória

```text
DATA                MARCO
--------------------------------------------------------------
Ago 2024            EU AI Act em vigor (início implementação
                    faseada)

Ago 2025            EU AI Act: obrigações de sistemas de alto
                    risco para novos lançamentos

Ago 2026            EU AI Act: plena implementação (todos os
                    sistemas existentes)

2025 (estimado)     PL 2338/2023: votação no plenário do Senado

2026-2027           PL 2338/2023: possível vacatio legis
(estimado)          (18-24 meses após promulgação)

2027-2028           Primeiras obrigações do PL 2338/2023
(estimado)          plenamente em vigor no Brasil

Contínuo            LGPD Art. 20: já em vigor, sem data futura
                    a aguardar — aplica-se hoje
```

> [!note] Data de referência deste apêndice
> Este apêndice foi escrito com referência a maio de 2026. O ambiente regulatório de IA está em rápida evolução. A situação do PL 2338/2023, as orientações da ANPD e as resoluções do BCB podem ter mudado após essa data. Consulte fontes primárias para decisões de compliance.

---

**Ver também:**

- [[apendice-ct|Apêndice CT — IA como Co-Piloto do Fundador (2026)]] — uso prático de IA no dia a dia do fundador
- [[apendice-cv|Apêndice CV — Compliance e Regulatório para Startups]] — framework geral de compliance, não específico de IA
- [[apendice-cz|Apêndice CZ — Canvases e Mapas Visuais de Modelo]] — ferramentas visuais de análise, incluindo Risk Canvas
- [[fases/fase-02|Fase 2 — Articulação do Modelo de Negócio]] — onde as decisões sobre sistemas de IA são tomadas inicialmente
- [[fases/fase-11|Fase 11 — Modelo de Receita e Unit Economics]] — onde modelos de crédito e precificação com IA aparecem com maior frequência

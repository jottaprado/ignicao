'use strict';

/**
 * Adições cirúrgicas derivadas de bancas reais de Processos Seletivos Estruturados (PSE)
 * de Incubação GovTech e Editais Públicos no Brasil:
 * 1. Expansão profunda do Capítulo 32 do Volume 10 (DK — GovTech: Startup Vendendo para Governo)
 * 2. Expansão do Capítulo 9 do Volume 1 (EX — Apresentação e Fala em Público: Pitch Cronometrado de Banca)
 * 3. Expansão do Capítulo 12 do Volume 1 (AZ — Aceleradoras, Programas e Editais: Engenharia Reversa de Barema)
 */

const GOVTECH_DISCOVERY_AND_IT_SECTION = `
### Diagnóstico do problema público e a Matriz das 13 Variáveis Institucionais

O erro número um que reprova startups em bancas de incubação pública (como o Hub GovTech Paraná, Mobilab SP, Porto Digital ou chamadas de CPSI) e trava vendas para prefeituras não é falha de código — é a **simplificação ingênua do problema público**.

Fundadores vindos do mercado privado costumam formular problemas públicos como se fossem dores lineares de uma PME privada (*"a prefeitura demora para responder protocolos porque o atendimento é manual; nosso sistema com IA automatiza isso"*). Quando um avaliador experiente ou um secretário municipal ouve essa formulação, ele percebe imediatamente que a startup ainda não conhece a anatomia interna de um órgão público.

No setor público brasileiro, um problema raramente depende de uma única variável. Ele é o resultado de um sistema acoplado que envolve simultaneamente **13 variáveis institucionais, operacionais e tecnológicas**:

| # | Variável Institucional | Como ela trava a adoção na prática em uma Prefeitura ou Secretaria |
|---|---|---|
| **1** | **Processos administrativos formais** | O fluxo atual não existe por acaso: ele obedece a decretos municipais, portarias, regimentos internos e ritos de tramitação que não podem ser alterados apenas trocando a tela de um software. |
| **2** | **Sistemas legados e incumbentes** | Nenhuma prefeitura é uma folha em branco. Ela já roda ERPs públicos e sistemas estruturantes (como **e-Cidade**, **SEI**, **Betha**, **IPM**, **Fiorilli**, **Elotech**, **Governançabrasil**, ou companhias públicas de TI como **Celepar**, **Prodam**, **Prodabel**, **Procergs**, **Serpro** e **Dataprev**). |
| **3** | **Regras e normativos legais** | Leis orgânicas municipais, normas do Tribunal de Contas (TCE/TCU), exigências do Ministério Público e regras setoriais (SUS/RNDS na saúde, MEC/Censo na educação, STN/Siconfi nas finanças). |
| **4** | **Múltiplas áreas co-responsáveis** | Um único processo (ex: alvará, compra, atendimento ao cidadão, prontuário) atravessa 3 a 5 secretarias diferentes (Fazenda, Administração, Procuradoria, TI e a pasta finalística), sem que uma mande na outra. |
| **5** | **Limitações orçamentárias (PPA/LDO/LOA)** | Mesmo que o benefício econômico seja óbvio, a despesa precisa caber em uma rubrica orçamentária existente e respeitar a Lei de Responsabilidade Fiscal (LRF). |
| **6** | **Infraestrutura tecnológica local** | Computadores com 8 anos de uso, links de internet instáveis em postos de saúde ou escolas rurais, ausência de rede Wi-Fi corporativa ou bloqueios severos de firewall. |
| **7** | **Disponibilidade e qualidade dos dados** | Bases cadastrais duplicadas, CPFs ausentes, dados presos em PDFs escaneados sem OCR ou tabelas proprietárias cujo dicionário de dados pertence ao fornecedor atual. |
| **8** | **Segurança da informação e LGPD pública** | Medo legítimo de vazamento de dados pessoais/sensíveis do cidadão, sequestro por *ransomware* e responsabilização sob os arts. 23 a 30 da LGPD (capítulo exclusivo do Poder Público). |
| **9** | **Resistência organizacional e carreira** | O servidor efetivo (concursado) viu dezenas de "projetos de inovação de prefeito" nascerem e morrerem a cada 4 anos, deixando passivo e retrabalho manual para quem fica. |
| **10** | **Competências digitais das equipes** | Alta rotatividade de cargos comissionados combinada com servidores próximos da aposentadoria que rejeitam interfaces complexas ou que exijam treinamento longo. |
| **11** | **Fornecedores existentes e contratos vigentes** | A empresa que fornece o sistema atual da prefeitura muitas vezes cobra caro (ou cria barreiras técnicas) para liberar APIs de leitura e escrita para uma startup terceira. |
| **12** | **Integrações e interoperabilidade** | Se a sua solução exigir que o servidor digite a mesma informação duas vezes (uma no seu sistema e outra no sistema legado oficial), a ferramenta será abandonada em 30 dias. |
| **13** | **Maturidade institucional heterogênea** | Um município de 15 mil habitantes não tem equipe de TI própria nem procuradoria especializada; uma capital tem 400 analistas na empresa municipal de informática e comitê rígido de governança. |

> [!important] A Regra da Inversão em GovTech: *Problem-First* vs. *Tech-First*
> Um dos erros mais fatais ao empreender para o setor público é **partir da tecnologia antes de compreender o contexto institucional** (*"construímos uma plataforma de agentes de IA / blockchain / IoT e agora vamos vender para prefeituras"*). No governo, a solução tecnicamente mais sofisticada quase nunca é a mais viável institucionalmente.
>
> Trabalhe sempre na direção inversa:
> **Problema Institucional Concreto → Processo Administrativo Existente → Atores Envolvidos → Restrições Legais e Técnicas → Oportunidade Delimitada de Melhoria → Solução Necessária → Tecnologia Adequada.**

Antes de escrever uma única linha de código ou subir no palco de uma banca, sua equipe precisa saber responder com precisão cirúrgica às **8 Perguntas de Diagnóstico do Problema Público**:

1. **Qual problema específico** (e não genérico) está sendo resolvido?
2. **Onde exatamente ele acontece** (qual secretaria, departamento, equipamento público e porte de município)?
3. **Quem é diretamente afetado** (qual perfil de servidor interno e qual grupo de cidadãos)?
4. **Quais áreas e órgãos participam** do início ao fim desse fluxo administrativo?
5. **Como o problema é tratado atualmente** (passo a passo do processo *AS-IS*, incluindo planilhas paralelas, carimbos, WhatsApp pessoal e sistemas legados)?
6. **Por que as soluções atuais são insuficientes** (qual é a falha estrutural do sistema legado ou do rito manual)?
7. **Quais restrições institucionais existem** (normas, leis, contratos vigentes, limitações de TI e segurança)?
8. **Qual consequência concreta e mensurável** é produzida hoje pela situação atual (horas de servidor desperdiçadas, fila em dias, perda de arrecadação em R$, judicialização ou glosa de repasses)?

#### Como delimitar um Caso de Uso Municipal Específico (A Cunha B2G)

Diante da complexidade administrativa, **nunca tente resolver "a gestão das prefeituras brasileiras" de uma só vez**. Escolha inicialmente um recorte (*beachhead* / cunha) extremamente fechado de 6 dimensões:

- **1 tipo de município** (ex: municípios de 50 mil a 200 mil habitantes do Sul/Sudeste que já utilizam protocolo eletrônico);
- **1 secretaria ou área específica** (ex: Secretaria Municipal de Saúde — Atenção Primária, ou Secretaria de Fazenda — Dívida Ativa/ISS);
- **1 processo administrativo específico** (ex: triagem e regulação de exames de média complexidade, ou análise documental de licenciamento ambiental simplificado);
- **1 usuário operador definido** (ex: o servidor administrativo regulador na ponta);
- **1 dor quantificável** (ex: 40% dos pedidos voltam por erro de preenchimento documental, gerando 18 dias de atraso);
- **1 resultado esperado verificável** (ex: redução de 70% no tempo de triagem sem alterar a portaria municipal vigente).

---

### Customer Discovery no setor público: os 7 atores da prefeitura e a Escada de Evidências B2G

Conversar com um prefeito ou secretário em um evento e ouvir *"achei sua ideia excelente, precisamos muito disso aqui"* **não é validação**. No setor público, o entusiasmo político desacompanhado de pesquisa operacional com os servidores de carreira vale zero.

Para transformar hipóteses internas em conhecimento sustentado pelo contexto público, o *Customer Discovery* de uma GovTech precisa entrevistar diretamente **os 7 papéis institucionais** que tocam o processo:

| Ator Institucional | Qual é a agenda real dele | O que você precisa descobrir na entrevista (Mom Test Público) |
|---|---|---|
| **1. Secretário / Gestor da Pasta** | Entregar resultado visível dentro do mandato sem gerar crise na imprensa ou no legislativo | Qual indicador tira o sono dele hoje? Existe prioridade política e dotação na LOA para atacar esse gargalo este ano? |
| **2. Servidor Responsável pelo Processo (Ponta)** | Reduzir retrabalho manual, não ser culpado por erros e não ter que alimentar dois sistemas ao mesmo tempo | Como ele executa a tarefa hoje, tela por tela? Quais gambiarras (*workarounds* em Excel/papel) ele usa? O que já tentaram implantar lá que fracassou e por quê? |
| **3. Equipe de TI da Prefeitura / Órgão** | Manter sistemas no ar, evitar passivos de manutenção sem equipe e impedir vazamentos de dados | Quais sistemas legados rodam hoje? O banco de dados é local ou nuvem? Existem APIs ou rotinas de importação/exportação? Quais são os padrões exigidos pela TI? |
| **4. Segurança da Informação e DPO (LGPD)** | Garantir conformidade com a LGPD (arts. 23–30), controle de acesso e rastreabilidade contra auditorias | Quais dados pessoais ou sensíveis transitam no processo? Quais são as exigências de guarda, anonimização, logs de auditoria e isolamento? |
| **5. Área Administrativa e Compras** | Seguir estritamente a Lei 14.133/2021 ou LC 182/2021 sem risco de impugnação ou representação no TCE | Como o órgão costuma contratar software? Já usaram dispensa por inovação, CPSI, adesão a ata de registro de preços ou inexigibilidade? |
| **6. Gestor / Fiscal de Contrato** | Ter métricas claras e relatórios auditáveis para assinar o ateste mensal da nota fiscal com segurança no CPF | Como ele mede se um fornecedor atual entregou o serviço? Que relatório mensal ele precisa anexar ao processo de liquidação de despesa? |
| **7. Controle Interno / Procuradoria** | Blindar a legalidade do ato administrativo e a titularidade pública sobre os dados e decisões | Quais normas ou pareceres jurídicos restringem a automação desse processo? Qual ato exige assinatura/decisão exclusiva de servidor concursado? |

#### A Escada de Evidências de Validação em GovTech (Pesos Reais de Banca e Mercado)

Tanto em bancas de seleção (incubadoras, Finep, FAPs) quanto diante de investidores e novos prefeitos, é fundamental separar o peso de cada evidência construída. Construa sua validação subindo degrau por degrau nesta escada de **6 níveis**:

1. **Nível 1 — Opinião Informal (*Peso Mínimo*):** conversa casual em que um gestor diz que o problema "parece interessante". Não valida processo, orçamento nem viabilidade técnica.
2. **Nível 2 — Diagnóstico Estruturado de Campo (*Peso Básico*):** 10 a 20 entrevistas estruturadas documentadas com servidores, gestores e TI de municípios reais, acompanhadas do mapeamento do fluxo atual (*AS-IS*) e de dados quantitativos sobre a frequência e o impacto financeiro/operacional do problema.
3. **Nível 3 — Validação de Fluxo e Teste de Protótipo (*Peso Intermediário*):** demonstração e teste de protótipo navegável diretamente nas mãos dos servidores que operam o processo, validando que o fluxo proposto é compreendido, resolve o gargalo real e respeita o rito administrativo.
4. **Nível 4 — Validação de Arquitetura junto à TI Pública (*Peso Técnico*):** apresentação do dossiê de arquitetura, segurança e integração para equipes municipais de TI, obtendo validação técnica de que a solução é aceitável e implantável no ambiente da prefeitura.
5. **Nível 5 — Ambiente Institucional Real / Piloto Formalizado (*Peso Alto*):** formalização de carta de intenção, **Acordo de Cooperação Técnica (ACT sem repasse financeiro)** ou projeto-piloto em 1 município/órgão parceiro, com utilização real pelos servidores e coleta de indicadores antes/depois.
6. **Nível 6 — Contratação Pública e Utilização Recorrente (*Peso Máximo*):** contrato assinado (via LC 182/CPSI, dispensa, inexigibilidade ou pregão), nota de empenho emitida, implantação em produção e renovação comprovada.

> [!tip] Como validar dentro de uma prefeitura sem esperar 12 meses por uma licitação
> Você **não precisa de um contrato licitado para fazer *discovery* e rodar um teste de validação** com uma prefeitura. O instrumento jurídico padrão no Brasil é o **Acordo de Cooperação Técnica (ACT)** sem transferência de recursos financeiros (previsto na Lei nº 14.133/2021, art. 184, e no Marco Legal de CT&I — Lei nº 13.243/2016), ou a atuação dentro de hubs e laboratórios públicos de inovação (como Hub GovTech PR, Mobilab+ SP, iGov, GNova). Um ACT simples de 60 a 90 dias permite mapear o processo in loco, testar o protótipo com servidores reais, validar requisitos com a TI municipal e gerar os indicadores quantitativos que destravarão suas primeiras contratações remuneradas.

---

### Estruturação da solução: a Jornada Operacional (*Service Blueprint* Institucional)

Um erro clássico de startups técnicas ao apresentar para o governo é descrever a solução pela pilha tecnológica (*"usamos LLMs com RAG, visão computacional e mensageria assíncrona"*), deixando uma lacuna cognitiva enorme sobre **como o trabalho administrativo acontece na prática dentro da repartição**.

Para que gestores de negócio, servidores e auditores compreendam e confiem na proposta, decomponha sempre sua solução em uma **Jornada Operacional de 8 Etapas**, deixando explícito o que o software faz, com qual sistema legado ele conversa e **qual responsabilidade permanece humana (*Human-in-the-Loop*)** — já que, no Direito Administrativo brasileiro, atos decisórios que afetam direitos do cidadão ou o erário exigem chancela de agente público competente:

\`\`\`mermaid
flowchart LR
    S1["1. Situação Atual\n(Gatilho do Processo)"] --> S2["2. Entrada de Dados\n(Cidadão, Servidor ou Legado)"]
    S2 --> S3["3. Processamento\n(Regras, Validação ou IA)"]
    S3 --> S4["4. Ação da Solução\n(Triagem, Cálculo ou Minuta)"]
    S4 --> S5["5. Informação Gerada\n(Painel, Alerta ou Parecer)"]
    S5 --> S6["6. Servidor Responsável\n(Revisão Human-in-the-Loop)"]
    S6 --> S7["7. Decisão ou Ato\n(Despacho e Integração)"]
    S7 --> S8["8. Resultado Esperado\n(KPI Público Mensurável)"]
\`\`\`

Para cada etapa dessa jornada operacional, documente a matriz de execução da sua solução:

| Dimensão da Etapa | Pergunta Obrigatória que o Produto Precisa Responder | Exemplo Prático em um Caso de Uso Municipal |
|---|---|---|
| **1. Quem participa** | Qual ator inicia ou opera esta etapa? | Cidadão no portal / Servidor analista de tributos ou regulação |
| **2. Informação necessária** | Quais documentos ou campos estruturados entram? | Requerimento + CPF/CNPJ + comprovantes via formulário ou API |
| **3. Tecnologia utilizada** | O que é regra determinística vs. OCR/IA? | Validação cadastral via API + extração documental assistida por IA |
| **4. Dado gerado** | Qual artefato auditável o sistema produz? | Pré-análise estruturada com checklist de conformidade e score de risco |
| **5. Sistema legado integrado** | Onde esse dado precisa ser lido ou gravado? | Consulta ao cadastro imobiliário/tributário e envio de minuta ao **SEI / e-Cidade** |
| **6. Responsabilidade humana** | O que **não** é automatizado e exige decisão do servidor? | O fiscal ou analista concursado revisa a evidência e assina o deferimento/indeferimento |
| **7. Resultado produzido** | Qual métrica comprova o ganho público? | Tempo de análise cai de 15 dias para 20 minutos; 0% de perda de rastro de auditoria |

Essa decomposição cumpre um duplo papel estratégico: mostra ao órgão público que você respeita a governança administrativa e permite à sua própria engenharia separar **o que realmente precisa ser construído do zero** do que pode ser resolvido integrando sistemas existentes.

---

### O "Segundo Pitch": como dialogar com a TI das prefeituras, Segurança da Informação e as 9 resistências técnicas

Em mais de 70% dos projetos GovTech que morrem após o entusiasmo inicial do secretário da pasta, o óbito acontece na mesa do **Departamento de Tecnologia da Informação (TI)** da prefeitura ou da empresa pública de informática.

A resistência da área de TI **não deve ser tratada como má vontade comercial ou sabotagem burocrática**. Ela é uma **resposta perfeitamente racional à assimetria de risco**: quando uma startup implanta um sistema novo na Saúde, Educação ou Fazenda municipal, o secretário ganha os aplausos políticos se der certo; mas se o sistema ficar fora do ar, corromper a base legada, vazar dados de prontuários/contribuintes ou se a startup falir daqui a 12 meses sem dar manutenção, **quem responde ao Processo Administrativo Disciplinar (PAD) e reconstrói a operação no fim de semana é a equipe de TI da prefeitura**.

Por isso, toda GovTech precisa construir, desde o primeiro dia, **dois materiais distintos**:
1. **O Pitch Principal (Comercial e Institucional):** focado no problema público, impacto operacional, economia de recursos e validação para o Secretário e Gestores de Negócio;
2. **A Proposta Técnica e de Segurança da Informação (O "Deck da TI"):** um dossiê objetivo desenhado especificamente para conquistar a confiança e a aprovação dos arquitetos, analistas de suporte e gestores de segurança da informação do município.

#### Os 10 Blocos Obrigatórios da Proposta Técnica para a TI Municipal

| Bloco Técnico | As Perguntas Exatas que a TI da Prefeitura Fará | Como a GovTech Deve Estruturar a Resposta |
|---|---|---|
| **1. Arquitetura** | Como a solução está estruturada? É monolito, microsserviços, SaaS multi-tenant ou instalação local? | Diagrama limpo de arquitetura em camadas (front-end web responsivo, API gateway, banco de dados com isolamento lógico estrito por *tenant*/município). |
| **2. Infraestrutura e Hospedagem** | Onde o sistema será executado? Quem paga a nuvem? Os dados saem do Brasil? | Hospedagem em nuvem pública certificada (AWS, GCP, Azure) obrigatoriamente em **região brasileira (sa-east-1 — São Paulo)**, garantindo soberania de dados exigida pelo setor público. |
| **3. Integração e Interoperabilidade** | Com quais sistemas da prefeitura precisa conversar e como? | Suporte nativo a **APIs REST/JSON**, Webhooks, importação/exportação assíncrona segura (SFTP/CSV padronizado quando o legado não tem API) e integração com **Login Único Gov.br**, **SEI** e ERPs municipais. |
| **4. Dados e LGPD Pública** | Quais dados coleta, processa e produz? Quem é o dono do banco de dados? | **Titularidade 100% do Município (Controlador)**; a startup atua estritamente como **Operadora** (arts. 23 a 30 da LGPD). Garantia contratual de exportação integral da base em formato aberto ao fim do contrato (zero *vendor lock-in* de dados). |
| **5. Segurança da Informação** | Como dados, acessos e modelos de IA são protegidos? | Criptografia em trânsito (**TLS 1.3**) e em repouso (**AES-256**); segregação de ambientes; se usar IA/LLMs, garantia contratual de **zero treinamento de modelos públicos com dados municipais** e anonimização de PII. |
| **6. Autenticação, Autorização e Logs** | Quem acessa o quê e como auditamos desvios? | Controle de acesso baseado em papéis (**RBAC** por perfil de servidor/secretaria), suporte a **SSO / MFA**, e **Logs de Auditoria Imutáveis** registrando *quem*, *quando*, *IP*, *ação* e *valor anterior/novo* de toda operação. |
| **7. Disponibilidade, Backup e Contingência** | O que acontece se o servidor cair? Como funciona a recuperação? | SLA de disponibilidade (ex: 99,5%+), rotinas de backup automatizadas diárias com retenção geográfica redundante, **RPO** (perda máxima de dados) e **RTO** (tempo máximo de restauração) explícitos. |
| **8. Implantação (*Zero-Footprint*)** | O que o município precisa disponibilizar? Vai dar trabalho para a TI local? | Demonstrar que a implantação é 100% web/SaaS, exigindo **zero alocação de desenvolvedores da prefeitura** e zero compra de servidores locais (apenas liberação de domínio/credenciais de integração). |
| **9. Manutenção e Atualizações** | Como correções de bugs e novas versões são aplicadas? | Atualizações contínuas transparentes em janelas fora do expediente municipal, sem custo adicional de versão e com ambiente de homologação (*staging*) separado de produção. |
| **10. Suporte e Matriz de Responsabilidades** | Quem atende incidentes quando o servidor da ponta tiver dúvida? | Central de suporte própria da startup (N1 para dúvidas de usuários, N2/N3 para engenharia) — tirando o fardo do *helpdesk* das costas da TI municipal — e matriz **RACI** clara entre Empresa e Órgão. |

#### Mapa das 9 Resistências Racionais da TI Pública e Como Neutralizá-las

Antes de qualquer reunião técnica com a prefeitura ou banca avaliadora, antecipe estas 9 objeções:

1. *"Mais um sistema isolado (silo) que não conversa com nosso ERP."* → **Resposta:** Mostrar o conector de API/arquivo já previsto para o sistema legado deles e garantir que o sistema oficial continua sendo a fonte da verdade (*System of Record*).
2. *"Nossa equipe de TI está sobrecarregada e não tem braço para implantar nem dar suporte aos servidores."* → **Resposta:** Assumir contratualmente o onboarding, o treinamento dos servidores da ponta e o suporte N1/N2 direto no sistema.
3. *"Se vocês usam IA generativa, os dados sigilosos dos munícipes vão vazar para a OpenAI/Google?"* → **Resposta:** Demonstrar uso de endpoints corporativos com *Zero Data Retention*, mascaramento de dados pessoais (CPF/nome) antes da inferência e hospedagem em nuvem privada/nacional.
4. *"Se um servidor mal-intencionado alterar um registro ou vazar informação, como descobrimos?"* → **Resposta:** Mostrar a tela de trilha de auditoria (*audit log*) completa por CPF do servidor, exportável para sindicância e Controle Interno.
5. *"E se a startup quebrar ou o contrato acabar? Ficamos reféns sem nossos dados?"* → **Resposta:** Cláusula expressa de reversibilidade e entrega periódica do *dump* estruturado e documentado de todos os dados e documentos ao município.
6. *"A internet das nossas unidades de ponta cai toda semana."* → **Resposta:** Interface leve, tolerância a falhas de conexão, salvamento automático de rascunho local ou operação assíncrona.
7. *"Como ficam os perfis quando um servidor muda de secretaria ou é exonerado?"* → **Resposta:** Painel simples de gestão de identidades e revogação instantânea de acesso pelo gestor ou integração com o Active Directory / LDAP municipal.
8. *"Isso vai exigir comprar servidor ou licença de banco de dados pela prefeitura?"* → **Resposta:** Modelo 100% SaaS em nuvem já precificado na assinatura, sem custo oculto de infraestrutura ou licenças de terceiros para o município.
9. *"Quem garante que esse sistema aguenta o pico de acessos no último dia do prazo fiscal/matrícula?"* → **Resposta:** Arquitetura elástica com *auto-scaling* comprovado por teste de carga documentado.
`;

const PITCH_BANCA_CRONOMETRADO_SECTION = `
### Pitch cronometrado para bancas de editais, incubadoras, subvenção e Processos Seletivos Estruturados (PSE)

Apresentar para uma banca de edital público, programa de incubação/aceleração (como Hub GovTech, InovAtiva, Sebrae, Cubo, Eretz.bio) ou agência de fomento (Finep, FAPESP PIPE, Centelha, BNDES) é uma disciplina radicalmente diferente de uma reunião de 30 minutos com um fundo de Venture Capital.

Em uma reunião com VC, o tempo é elástico e as perguntas acontecem durante a conversa. Em um **Processo Seletivo Estruturado (PSE)** ou banca de edital, você enfrenta **duas regras implacáveis**:

1. **A Guilhotina do Cronômetro (3, 5, 7 ou 10 minutos):** o tempo é uma restrição física absoluta. Quando o cronômetro zera, o microfone é cortado ou a apresentação é interrompida imediatamente, independentemente do slide em que você esteja.
2. **A Planilha de Barema (Rubrica de Avaliação por Critérios):** os avaliadores da banca não dão uma "nota subjetiva geral". Eles têm na tela uma planilha oficial do edital com 5 a 10 critérios obrigatórios (ex: *Compreensão do Problema*, *Grau de Inovação e Estrutura da Solução*, *Nível de Validação e Evidências*, *Viabilidade Técnica e Segurança*, *Capacidade de Execução da Equipe*, *Modelo de Negócio e Próximos Passos*).

> [!danger] O erro que mais elimina boas startups em bancas de seleção
> O fundador gasta 60% do tempo nos primeiros 3 slides contando a visão macro e contextualizando o problema, se alonga na explicação conceitual e **o tempo acaba antes de chegar nos slides de Validação, Arquitetura/Segurança, Equipe e Próximos Passos**.
>
> O resultado é matemático e letal: mesmo que a equipe seja brilhante e já tenha conversado com clientes, **o avaliador da banca é proibido de pontuar o que não foi apresentado dentro do tempo regulamentar**. Você recebe nota baixa ou zero nos 4 últimos blocos do barema e fica fora das vagas por falha pura de gestão de pitch.

#### Engenharia Reversa do Barema e a Estrutura dos 10 Blocos Cronometrados

Para nunca deixar um critério de avaliação sem resposta, construa sua apresentação espelhando os **10 blocos canônicos de uma banca técnica e de negócios**, com orçamento rígido de segundos por bloco:

| Bloco | O que precisa ficar cristalino no slide e na fala | Tempo em Pitch de 5 min (300s) | Tempo em Pitch de 10 min (600s) |
|---|---|---|---|
| **1. Problema e Recorte** | Qual problema concreto está sendo resolvido, onde ele acontece, quem sofre a dor e qual é o recorte inicial (*caso de uso específico*). | **30s** | **60s** |
| **2. Evidência do Problema** | Que dados quantitativos, pesquisas próprias ou entrevistas provam que esse problema existe, é frequente e custa caro? | **30s** | **60s** |
| **3. Contexto e Processo Atual** | Como esse processo funciona hoje na prática (*AS-IS*), quais áreas/sistemas legados participam e por que as soluções atuais falham? | **30s** | **60s** |
| **4. Solução Proposta** | O que exatamente a sua empresa propõe e qual é o diferencial direto frente às alternativas existentes? | **30s** | **60s** |
| **5. Funcionamento (Jornada Operacional)** | Como a solução opera passo a passo: *Entrada de dados → Processamento → Ação do sistema → Ação humana → Integração → Resultado*. | **45s** | **90s** |
| **6. Validação Realizada** | Onde, como e com quem a proposta já foi testada? Qual degrau da **Escada de Evidências** você já atingiu (entrevistas, protótipo testado, piloto, clientes)? | **30s** | **60s** |
| **7. Arquitetura e Segurança** | Como a solução opera de forma segura, onde é hospedada, como integra com sistemas legados e como trata LGPD, controle de acesso e logs? | **30s** | **60s** |
| **8. Equipe e Capacidade de Execução** | Quem executará o projeto, quais competências técnicas e de domínio possui, o que já está pronto hoje e por que esse time dá conta desse escopo? | **30s** | **60s** |
| **9. Modelo de Negócio e Contratação** | Quem paga, quanto custa, qual é a unidade econômica e (se B2G/Enterprise) por qual modalidade jurídica o cliente contrata? | **20s** | **45s** |
| **10. Próximos Passos (Hipóteses)** | Quais são as 3 ou 4 hipóteses críticas que serão validadas nos próximos meses e com qual meta objetiva de experimento? | **25s** | **45s** |

#### Como Demonstrar Capacidade de Execução (*Coerência Desafio × Time*)

Um motivo recorrente de reprovação em bancas e comitês de investimento é a **assimetria entre a ambição do problema apresentado e a capacidade demonstrada de execução**. Se você apresenta um problema gigantesco, mas não deixa claro quem vai construir, o que já existe e como vai entregar os próximos 90 dias, a banca conclui que o projeto não sairá do papel.

No seu Bloco 8 (*Equipe e Capacidade de Execução*), nunca coloque apenas fotos com cargos genéricos (*CEO, CTO, COO*). Explicite obrigatoriamente estas **9 evidências de execução**:

1. **Quem compõe a equipe core** e qual é a dedicação real de cada integrante;
2. **Papel operacional exato** de cada pessoa no ciclo atual;
3. **Competências técnicas instaladas dentro de casa** (engenharia, dados, segurança, produto);
4. **Competências de negócio e domínio setorial** (experiência prévia no setor-alvo, vendas complexas, regulação);
5. **Experiências anteriores diretamente conectadas ao problema** (por que este time tem vantagem injusta neste tema);
6. **O que JÁ foi desenvolvido e validado até hoje** (transparência total sobre o estágio atual: conceito, protótipo, MVP funcional ou produto em produção);
7. **O que AINDA precisa ser desenvolvido** para o primeiro caso de uso;
8. **Quais recursos e parcerias são necessários** (e como o programa/edital ou rodada se encaixa nisso);
9. **Entregas concretas dos próximos 3 a 6 meses**, demonstrando que o escopo inicial foi recortado para caber perfeitamente na capacidade atual do time.

#### Como Estruturar o Slide de "Próximos Passos" Orientado a Hipóteses

Nunca encerre um pitch de estágio inicial ou de incubação com um roadmap genérico de funcionalidades (*"Mês 1: Módulo Financeiro; Mês 2: App iOS; Mês 3: Expansão Nacional"*). Avaliadores experientes sabem que construir software antes de validar premissas é desperdício de capital.

Estruture seus **Próximos Passos** sempre como uma **Matriz de Desbloqueio de Incertezas**, conectando cada prioridade imediata a uma hipótese falsificável e a um experimento concreto:

| Prioridade | Hipótese Crítica a Validar | Ação / Experimento de Validação (Próximos 60–90 dias) | Evidência / Indicador de Sucesso (Critério de Passagem) |
|---|---|---|---|
| **Passo 1 (Problema e Processo)** | **H1:** O gargalo operacional ocorre da forma mapeada e gera custo crítico para a área X. | Realizar 15 entrevistas estruturadas com gestores e operadores da ponta em 5 organizações/municípios-alvo. | Mapa do processo *AS-IS* validado + confirmação quantitativa da dor em $\ge 70\%$ dos entrevistados. |
| **Passo 2 (Solução e Usabilidade)** | **H2:** O fluxo proposto resolve o gargalo principal sem gerar retrabalho para o operador. | Testar protótipo navegável da jornada operacional com 10 usuários reais executando a tarefa crítica. | Taxa de conclusão da tarefa $\ge 80\%$ e redução demonstrada no tempo de execução do fluxo. |
| **Passo 3 (Viabilidade Técnica e TI)** | **H3:** A arquitetura, segurança e modelo de integração são aceitáveis para a TI do cliente/órgão. | Submeter o Dossiê Técnico de 10 Pontos à avaliação de 3 diretores/equipes de TI do setor-alvo. | Requisitos técnicos e de segurança (LGPD/logs/APIs) validados sem bloqueios arquiteturais impeditivos. |
| **Passo 4 (Adoção Institucional)** | **H4:** Existe interesse concreto de implantação em um caso de uso delimitado. | Formalizar 1 a 2 cartas de manifestação de interesse, Acordo de Cooperação Técnica (ACT) ou contrato-piloto. | Piloto iniciado em ambiente real com linha de base (*baseline*) medida antes da implantação. |

> [!tip] O Protocolo do Cronômetro Impiedoso
> Ensaie a apresentação em voz alta com um cronômetro regressivo visível na tela até conseguir concluir os **10 blocos com 30 segundos de folga** (ex: terminar em **4min30s** para uma banca de 5 minutos, ou em **9min00s** para uma banca de 10 minutos). Marque checkpoints de tempo nos slides 3, 6 e 8: se no minuto 3 você ainda não chegou ao slide 6, corte imediatamente os exemplos secundários e avance para garantir que Validação, Arquitetura/Segurança, Equipe e Próximos Passos sejam sempre apresentados por inteiro.
`;

const ACCELERATORS_PSE_SECTION = `
### Como vencer Processos Seletivos Estruturados (PSE), bancas de incubação e editais públicos

Diferente de aceleradoras privadas americanas que selecionam por uma entrevista rápida de 10 minutos focada nos fundadores, os programas brasileiros de incubação setorial (como **Hub GovTech Paraná**, **Eretz.bio / Einstein**, **Cubo**, **AgTech Garage / Pulse**, **Tecnopuc**, **CIETEC**) e os editais públicos de subvenção e inovação aberta (**Finep**, **FAPESP PIPE**, **Centelha**, **InovAtiva**, **Sebrae**, **EMBRAPII** e chamadas de **CPSI**) operam por meio de **Processos Seletivos Estruturados (PSE)** regidos por edital.

Para aumentar drasticamente sua taxa de aprovação nesses processos, aplique estas quatro disciplinas operacionais:

1. **Faça a Engenharia Reversa do Barema antes de escrever o projeto:** todo edital público ou institucional possui uma tabela de critérios de avaliação com pesos específicos (ex: *Problema e Aderência ao Setor = 25 pts; Solução e Viabilidade Técnica = 25 pts; Maturidade e Validação = 20 pts; Equipe = 15 pts; Plano de Trabalho = 15 pts*). Nunca use um *pitch deck* genérico de VC em uma banca de edital. Reordene seus slides e seu texto para responder explicitamente, na mesma ordem e com o mesmo vocabulário, a cada item da planilha do avaliador.
2. **Chegue na banca com evidências primárias do setor-alvo (e não apenas teses internas):** bancas setoriais (GovTech, HealthTech, Agro, Energia) são compostas por especialistas que vivem a rotina daquele mercado. Apresentar um problema amplo sem ter entrevistado pelo menos 10 a 15 profissionais da ponta (servidores públicos, médicos, agrônomos, engenheiros de TI do cliente) sinaliza imaturidade imediata. Traga citações reais de entrevistas, mapeamento do processo atual, análise dos sistemas legados que o cliente já usa e um caso de uso piloto estreito e bem recortado.
3. **Antecipe a viabilidade técnica, regulatória e de segurança da informação:** em setores regulados ou institucionais, a banca avalia se a sua solução sobrevive ao primeiro contato com a área de TI, Segurança da Informação e Jurídico do cliente. Inclua sempre no material a arquitetura básica, o modelo de integração com o legado, o tratamento de dados sob a LGPD, o controle de acesso/logs e a divisão clara de responsabilidades entre a startup e a instituição parceira.
4. **Transforme devolutivas de reprovação no seu roteiro de *discovery* do próximo ciclo:** receber um "não" acompanhado de uma devolutiva qualitativa detalhada da banca é um dos ativos mais valiosos que uma startup em estágio inicial pode ganhar. Em vez de engavetar o parecer ou mudar de ideia por frustração, transforme cada apontamento da banca em uma **lista de verificação de campo para os próximos 60 dias**: vá até um cliente/município-laboratório, faça as entrevistas que faltavam, documente o fluxo operacional passo a passo, valide a arquitetura com um gestor de TI real, colha uma carta de intenção ou termo de cooperação para piloto e reaplique no ciclo seguinte com todas as objeções neutralizadas.
`;

function enrichGovtechBody(rawBody) {
  const target = '### Casos brasileiros';
  const idx = rawBody.indexOf(target);
  if (idx === -1) {
    return rawBody + '\n\n' + GOVTECH_DISCOVERY_AND_IT_SECTION.trim() + '\n';
  }
  return (
    rawBody.slice(0, idx) +
    GOVTECH_DISCOVERY_AND_IT_SECTION.trim() +
    '\n\n' +
    rawBody.slice(idx)
  );
}

function enrichPitchBody(rawBody) {
  const target = '### Armadilhas';
  const idx = rawBody.indexOf(target);
  if (idx === -1) {
    return rawBody + '\n\n' + PITCH_BANCA_CRONOMETRADO_SECTION.trim() + '\n';
  }
  return (
    rawBody.slice(0, idx) +
    PITCH_BANCA_CRONOMETRADO_SECTION.trim() +
    '\n\n' +
    rawBody.slice(idx)
  );
}

function enrichAcceleratorsBody(rawBody) {
  const target = '### Como avaliar uma oferta';
  const idx = rawBody.indexOf(target);
  if (idx === -1) {
    return rawBody + '\n\n' + ACCELERATORS_PSE_SECTION.trim() + '\n';
  }
  return (
    rawBody.slice(0, idx) +
    ACCELERATORS_PSE_SECTION.trim() +
    '\n\n' +
    rawBody.slice(idx)
  );
}

module.exports = {
  enrichGovtechBody,
  enrichPitchBody,
  enrichAcceleratorsBody,
};

/**
 * Costura Editorial Enxuta ("Pontes Narrativas") para os blocos dos 10 Volumes da coleção IGNIÇÃO (v5.0).
 *
 * Substitui as antigas listas enciclopédicas que repetiam o sumário de cada capítulo
 * por aberturas curtas e diretas que preparam o espírito do leitor para o bloco.
 */

const DOMAIN_INTROS = {
  // VOLUME 1 — IDEAÇÃO E FUNDAÇÃO (Fases 0 a 3 e Capítulos 1 a 12)
  V1_FASES: `Os quatro primeiros estágios da subida (**[[#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0]]**, **[[#FASE 1 — ENCONTRAR A IDEIA|Fase 1]]**, **[[#FASE 2 — ARTICULAÇÃO E CAPTURA DA IDEIA|Fase 2]]** e **[[#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3]]**) formam um filtro progressivo de lucidez antes de você gastar um real em código ou abrir um CNPJ. Ao final de cada fase, a **Oficina de Trincheira** entrega os frameworks passo a passo, os canvases visuais preenchidos com casos brasileiros e os templates prontos para rodar na mesa com seus sócios.`,

  V1_BLOCO_1: `Mais de 60% das empresas que morrem nos primeiros dois anos não quebram porque o mercado encolheu — quebram porque o caixa pessoal do fundador secou antes da tração, porque os cofundadores entraram em guerra por expectativas caladas ou porque captaram capital de risco para um negócio que pedia *bootstrapping*. Os capítulos a seguir blindam o seu CPF, a sua mente e a sua sociedade antes do primeiro tiro.`,

  V1_BLOCO_2: `Quando você ainda não tem marca famosa, verba de mídia nem trinta engenheiros, seus únicos multiplicadores de força são a qualidade das suas decisões sob incerteza, a capacidade de persuadir clientes e talentos sem autoridade formal e o uso de Inteligência Artificial e agentes como força de trabalho ampliada.`,

  V1_BLOCO_3: `Empreender não significa caminhar isolado. Um bom conselheiro (*advisor*) ou programa de aceleração sério economiza seis meses de cabeçada em uma tarde; um programa predatório toma 8% da sua empresa em troca de palestras genéricas. Estes dois capítulos ensinam a separar alavancagem real de turismo de ecossistema.`,

  // VOLUME 2 — DESCOBERTA DE CLIENTE E MAPEAMENTO DE MERCADO (Fases 4 a 6 e Capítulos 1 a 3)
  V2_FASES: `Se o Volume 1 organizou sua hipótese no papel, as **[[#FASE 4 — DESCOBERTA DO PROBLEMA|Fases 4]]**, **[[#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|5]]** e **[[#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|6]]** jogam essa tese no choque com a rua. Aqui você aprende a ouvir a dor real do cliente sem ouvir elogios falsos (*The Mom Test*), dissecar o *Job to Be Done* que faz alguém trocar de fornecedor e escolher uma cunha de entrada (*wedge*) onde você consiga ser imbatível.`,

  V2_BLOCO_1: `Você não descobre um cliente nem posiciona uma empresa no vácuo cultural: um comprador no Brasil decide de forma completamente diferente de um comprador no Vale do Silício. Os capítulos a seguir dissecam a psicologia de confiança e conversão do comprador brasileiro, a inteligência competitiva combinada à criação de categoria (*Category Design*) e as lições reais de empresas brasileiras que ignoraram a gravidade do mercado.`,

  // VOLUME 3 — HIPÓTESES, EXPERIMENTOS, PROTOTIPAGEM E MODELOS DE NEGÓCIO (Fases 7 a 10 e Capítulos 1 a 7)
  V3_FASES: `Com a dor do cliente mapeada no Volume 2, as **[[#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fases 7]]**, **[[#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|8]]**, **[[#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|9]]** e **[[#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|10]]** transformam a sua empresa num laboratório disciplinado: formular hipóteses *bet-the-company*, cobrar compromisso real antes do produto existir, prototipar rápido e testar a usabilidade até congelar o escopo do MVP.`,

  V3_BLOCO_1: `Por que fundadores inteligentes passam doze meses construindo produtos que ninguém usa? Porque tratam validação como teatro para confirmar o que já queriam programar. Estes dois capítulos instalam o rigor do método científico no negócio e unificam a régua de maturidade (TRL/CRL), os *gates* de evidência e o fechamento disciplinado de cada fase (*Committed Next Move*).`,

  V3_BLOCO_2: `A forma como você experimenta e financia os primeiros passos muda radicalmente conforme a física do seu modelo de negócio. Estes cinco capítulos entregam os playbooks arquiteturais da cunha estratégica (*Idea → Wedge → Scale*), da dinâmica de *Marketplaces*, Plataformas e Efeitos de Rede, da distribuição *B2B2C*, do *Open Source Comercial (COSS)* e do *Bootstrapping* via *Serviços Produtizados* (*Service-to-Product*).`,

  // VOLUME 4 — TRAÇÃO, GO-TO-MARKET E PRODUCT-MARKET FIT (Fases 11 a 13 e Capítulos 1 a 11)
  V4_FASES: `Aqui o protótipo vira operação viva: nas **[[#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fases 11]]**, **[[#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|12]]** e **[[#FASE 13 — PRODUCT-MARKET FIT|13]]**, você coloca o MVP na rua com clientes reais, valida a equação de *unit economics* (LTV, CAC e *Payback*) e persegue a prova matemática e comportamental de que o mercado finalmente puxa o seu produto.`,

  V4_BLOCO_1: `Nenhum produto alcança *Product-Market Fit* trancado no laboratório: PMF é, na prática, *Product-Market-Channel-Model Fit*. Os quatro capítulos deste bloco constroem a sua máquina de aquisição de zero ao primeiro milhão de receita anual — unindo o playbook de Go-to-Market e seleção de canais, o motor orgânico de SEO/Conteúdo e Comunidades, a disciplina de mídia paga com ROAS real e o posicionamento de Marca e *Product Marketing (PMM)*.`,

  V4_BLOCO_2: `Atrair atenção é metade do jogo; a outra metade é converter interesse em contratos assinados no preço certo e fazer cada coorte expandir mês após mês. Este bloco reúne a engenharia de vendas consultivas B2B, *Pricing* e Economia da Recorrência, Negociação empresarial (*BATNA/ZOPA*) e a operação unificada de *Customer Success (CS)* e *Customer Experience (CX)* rumo ao *churn* zero.`,

  V4_BLOCO_3: `Fechando a etapa de Tração, estes três capítulos atacam três decisões estruturais: como instrumentar sua *stack* de dados e métricas sem cair em vaidade, como desenhar produtos *AI-Native* com margem saudável e fosso defensável, e como executar um pivô estratégico com coragem analítica quando a tese original bate no teto.`,

  // VOLUME 5 — FINANÇAS, CAPTAÇÃO E VENTURE CAPITAL (Fase 14 e Capítulos 1 a 15)
  V5_FASES: `Com o *Product-Market Fit* comprovado, você entra na etapa de Escala. A **[[#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14]]** abre o manual do CEO e do CFO ensinando como monitorar as nove métricas vitais de uma *scaleup*, estruturar o *data room* e levantar capital em posição de força, com todos os 11 frameworks financeiros e de *valuation* e os 6 templates de rodada integrados na Oficina.`,

  V5_BLOCO_1: `Lucro no DRE não paga boleto na segunda-feira, e um enquadramento tributário errado drena silenciosamente a geração de caixa da empresa. Estes quatro capítulos constroem a base contábil, fiscal (incluindo a transição para o **IBS/CBS** e incentivos como a Lei do Bem), a modelagem financeira *bottom-up* por coortes e o processo vivo de *FP&A* e *Revenue Forecasting*.`,

  V5_BLOCO_2: `No Brasil, empresas em pleno crescimento quebram por asfixia de capital de giro. Este bloco mostra como dominar o Ciclo de Conversão de Caixa, a gestão profunda de tesouraria e recebíveis, o relacionamento com bancos e FIDCs, a operação completa de Comércio Exterior e Importação (Ásia-Brasil, *Landed Cost* e benefícios fiscais estaduais) e a blindagem do balanço via seguros corporativos.`,

  V5_BLOCO_3: `Com a operação financeira sob controle, estes sete capítulos dissecam todas as fontes de capital institucional: o processo completo de captação de Venture Capital e planejamento de rodada, os métodos reais de *Valuation*, os contratos conversíveis (Mútuo, SAFE), o fomento não-diluitivo (Finep, BNDES, FAPESP), *Venture Debt / RBF*, captação pública via *Crowdfunding CVM 88* e Tokenização, e a governança de *Investor Relations* pós-aporte.`,

  // VOLUME 6 — RECEITA ENTERPRISE, LIDERANÇA E CULTURA (Fases 15 e 16 e Capítulos 1 a 15)
  V6_FASES: `As **[[#FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA|Fases 15]]** e **[[#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|16]]** atacam a travessia humana e comercial mais difícil de uma empresa em crescimento: substituir o heroísmo comercial do fundador por uma máquina previsível de receita e escalar o time de 20 para 200+ pessoas sem deixar a burocracia matar a velocidade.`,

  V6_BLOCO_1: `Para crescer de R$ 2 milhões para R$ 100 milhões de receita anual no Brasil, o improviso comercial para de funcionar. Estes sete capítulos detalham a engenharia de times de Growth, vendas complexas *Enterprise*, *Revenue Operations (RevOps)*, parcerias corporativas e *Business Development*, canais indiretos, expansão em rede via **Franchising (Lei 13.966/2019 e COF)** e a construção de marca corporativa, PR e autoridade pública do fundador.`,

  V6_BLOCO_2: `A segunda metade do volume é o manual de liderança executiva e cultura do CEO: como calibrar o *Founder Mode* com delegação e cadência operacional semanal, contratar e demitir executivos C-level, rodar ciclos justos de avaliação de performance, desenhar remuneração estratégica e *Stock Options (ESOP)* no Brasil e sustentar uma cultura de alta exigência em regimes presenciais, híbridos ou remotos.`,

  // VOLUME 7 — PRODUTO, ENGENHARIA, DADOS, IA E OPERAÇÕES (Fase 17 e Capítulos 1 a 10)
  V7_FASES: `Quando a empresa passa de um único time para múltiplos *squads* e milhares de clientes, a coordenação informal colapsa. A **[[#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17]]** abre o manual do CTO, do CPO e do COO instalando a cadência operacional, os OKRs e os 20 frameworks mundiais de produto e operações que impedem que o crescimento gere lentidão.`,

  V7_BLOCO_1: `Estes seis capítulos formam o guia integrado de liderança técnica e de produto em escala: como operar *discovery* contínuo em múltiplos *squads*, fazer a transição de fundador técnico para gestor, recrutar engenheiros de elite, liderar a organização de engenharia pagando a dívida técnica com disciplina e multiplicar a capacidade de entrega com agentes de código e *AI Ops*.`,

  V7_BLOCO_2: `A estrutura do seu organograma determina a arquitetura do seu produto e a velocidade das suas decisões. Estes quatro capítulos mostram como desenhar topologias organizacionais enxutas, instalar documentação viva e gestão do conhecimento, alinhar a comunicação interna sem reuniões inúteis e operar processos com excelência industrial.`,

  // VOLUME 8 — BLINDAGEM JURÍDICA, SOCIETÁRIA, LGPD E SEGURANÇA (Fase 18 e Capítulos 1 a 13)
  V8_FASES: `No Brasil, um único ponto cego societário, trabalhista ou contratual pode destruir anos de criação de valor e atingir o patrimônio pessoal dos fundadores. A **[[#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18]]** abre este volume com o roteiro prático de 10 passos para formalizar e blindar a companhia desde a fundação até a *due diligence* institucional.`,

  V8_BLOCO_1: `A primeira muralha jurídica protege quem é dono da empresa, até onde vai o risco do CPF dos sócios e quem detém a tecnologia e a marca: o uso estratégico do Marco Legal das Startups (LC 182/2021), a defesa contra a desconsideração da personalidade jurídica, o registro de Propriedade Intelectual no INPI e a validade real de cláusulas de *non-compete* e segredo de negócio.`,

  V8_BLOCO_2: `A segunda muralha regula os contratos e as relações diárias da empresa com clientes, fornecedores, colaboradores e o Judiciário: arquitetura contratual completa e *due diligence* reversa, estruturação trabalhista segura (CLT vs. PJ e prevenção de passivos), Código de Defesa do Consumidor aplicado a negócios digitais e gestão estratégica de contencioso.`,

  V8_BLOCO_3: `Para vender a grandes corporações, operar em setores regulados ou passar pelo crivo de fundos globais e compradores de M&A, sua empresa precisa comprovar maturidade em privacidade de dados (LGPD), governança de Inteligência Artificial, *compliance* anticorrupção, controles internos contra fraude e segurança da informação (SOC 2 e ISO 27001).`,

  // VOLUME 9 — MATURIDADE, GOVERNANÇA, CRISE, EXIT E FAMILY OFFICE (Fases 19 e 20, Capítulos 1 a 21 e Epílogo)
  V9_FASES: `As **[[#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fases 19]]** e **[[#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|20]]** abrem o volume do ciclo longo: como perceber a exaustão da primeira curva S a tempo de construir um segundo motor de crescimento e como preparar a empresa com 18 a 24 meses de antecedência para negociar um M&A, uma liquidez secundária ou um IPO em posição de força.`,

  V9_BLOCO_1: `Na companhia madura, as decisões mais críticas passam pelo Conselho de Administração (*Board*) e pela estabilidade societária de longo prazo. Estes quatro capítulos cobrem o funcionamento real de um *Board*, a governança e sucessão em empresas familiares, a resolução cirúrgica de disputas e divórcios societários e a integração de ESG à estratégia do negócio.`,

  V9_BLOCO_2: `Expandir para fora do Brasil ou estruturar veículos internacionais exige dominar quatro frentes simultâneas: a estratégia de internacionalização e o *Flip* societário (Delaware/Cayman), o planejamento de vistos e imigração para fundadores, a proteção cambial (*hedging*) e a gestão de tesouraria multi-moeda e multi-país.`,

  V9_BLOCO_3: `Toda empresa duradoura atravessa pelo menos uma tempestade severa. Estes três capítulos formam o manual de comando em tempo de guerra: prevenção, *war room* e comunicação crítica nos primeiros 60 minutos de uma crise, execução digna e cirúrgica de *layoffs* quando é preciso salvar o caixa, e o uso estratégico da Recuperação Judicial ou de um encerramento ordenado (*wind-down*).`,

  V9_BLOCO_4: `O bloco final percorre todas as rotas de consolidação, liquidez e perenidade do patrimônio do fundador: M&A *buy-side* e *roll-ups*, *Search Funds (ETA)*, *Spin-offs* e *Carve-outs* corporativos, Liquidez Secundária (*Secondaries*), IPO, tributação de *exit*, transição pós-M&A e retenção de talentos, lições dos *post-mortems* brasileiros, a jornada do *Second-Time Founder* e a arquitetura da empresa **Cash Cow (dividendos perpétuos)** combinada à gestão de fortuna em **Holdings Patrimoniais, Offshores e Family Office**.`,

  V9_EPILOGO: `O **[[#EPÍLOGO|Epílogo]]** encerra a caminhada das 21 Fases e sintetiza a filosofia de trincheira que atravessa toda a coleção.`,

  // VOLUME 10 — ECONOMIA DA INOVAÇÃO, GEOGRAFIA DE HUBS E 42 PLAYBOOKS SETORIAIS (Capítulos 1 a 48 e Índices)
  V10_BLOCO_1: `Nenhuma empresa opera no vácuo: seu acesso a capital, talento e margem depende da física econômica do ecossistema, da geografia onde ela se instala e do ambiente regulatório. Estes seis capítulos dissecam os 8 atores da Economia da Inovação, os hubs mundiais por continente e os 15 polos brasileiros, os ciclos macroeconômicos da Selic e do câmbio, as autarquias reguladoras (BACEN, CVM, SUSEP, ANVISA, ANS, ANATEL, ANEEL, ANP), o CADE e a estratégia de políticas públicas.`,

  V10_CLUSTER_1: `Impulsionado pela infraestrutura pública digital do Banco Central (PIX e Open Finance) e pelos *spreads* historicamente altos do país, o setor financeiro é a maior vertical tecnológica da América Latina. Os 4 playbooks a seguir dissecam Fintechs de Pagamentos/BaaS, Crédito Digital e FIDCs, Insurtechs e Wealthtechs/Tokenização.`,

  V10_CLUSTER_2: `Aqui estão os 11 setores primários, extrativistas, energéticos e industriais onde o Brasil é potência mundial e gera margens extraordinárias de caixa: Agritech (lavoura), Pecuária de Precisão e Aquicultura, Trading de Commodities, Barter, Silos e Arco Norte, Biocombustíveis (Etanol de Milho, SAF, CBIOs), Bioinsumos, Irrigação e Bioeconomia Amazônica, Infratech/Saneamento, Energytech, Cleantech, Resíduos Sólidos/Biometano e Base Florestal/Celulose, Mineração/Óleo & Gás, Indústria 4.0 e Hardware/Deep Tech.`,

  V10_CLUSTER_3: `Este cluster reúne as 7 verticais que movem cargas, frotas, ativos pesados, imóveis e infraestrutura crítica em escala continental: Logtech, Mobitech, Consórcios Administrados (BACEN), Rental de Máquinas/Frotas e Aftermarket Automotivo, Proptech/Construtech, Segurança Privada, Portaria Remota e Facilities, Telecom/ISPs de Fibra e Data Centers de IA, e Aerospace/Drones/Defesa.`,

  V10_CLUSTER_4: `Cobrindo mais de um quarto do PIB brasileiro, estes 5 playbooks dissecam os setores regulados, assistenciais e institucionais: Saúde Digital e Biotech (ANVISA/ANS), Saúde Física Privada (Redes de Clínicas Médicas e Odontológicas, Estética, Medicina Diagnóstica, Farmácias Magistrais e OPME), Edtech, Govtech (vendas públicas, licitações e CPSI) e Legaltech/Regtech/Taxtech.`,

  V10_CLUSTER_5: `Estes 5 playbooks dissecam o comércio, a alimentação, as marcas nativas e os serviços recorrentes às famílias brasileiras: Retailtech e E-Commerce Omnichannel, Foodtech e Food Service, Marcas D2C, Beleza, Moda e Wellness, Traveltech, Eventos, PetTech e Economia da Longevidade (*Silver Economy*), e a máquina anticíclica do Setor Funerário, Cemitérios, Planos de Assistência Familiar e *DeathTech*.`,

  V10_CLUSTER_6: `Fechando os 42 playbooks setoriais, este cluster cobre as 10 verticais de software, serviços B2B de alta margem, IA, cibersegurança, trabalho e mídia: Horizontal B2B SaaS e ERPs, Vertical SaaS com *Embedded Finance*, Serviços Profissionais B2B, Consultorias, Software Houses e *Nearshoring*, Empresas *AI-Native*, Cybersecurity e Identidade Digital, DevTools e Cloud, HRTech e Benefícios, Martech/SalesTech (*WhatsApp-First*), Creator Economy e Gaming/iGaming Regulado.`,

  V10_BLOCO_3: `Este bloco final reúne de forma unificada — sem repetição nos demais volumes — o aparelho de consulta transversal de toda a coleção IGNIÇÃO: a Nota sobre Envelhecimento dos Dados, o **Glossário Geral de Termos Técnicos (A–Z)**, a **Lista Geral de Abreviações e Siglas**, a **Bibliografia Geral**, o **Índice Geral dos 164 Frameworks** e o **Índice Remissivo Completo**.`,
};

module.exports = { DOMAIN_INTROS };

/**
 * Expansões do Glossário Geral, Lista de Abreviações, Índice Remissivo e
 * Trilhas de Leitura por Arquétipo de Empreendedor (Fast-Tracks) para a v4.0
 * (10 Volumes Autocontidos, 21 Fases, 180 Capítulos, 42 Verticais Setoriais).
 */

const FAST_TRACKS_MD = `## Roteiros de Leitura por Arquétipo de Empreendedor (Fast-Tracks)

Com **10 volumes, 21 fases, 180 capítulos e 42 playbooks setoriais (~990 mil palavras)**, o **IGNIÇÃO** foi projetado tanto para leitura sequencial quanto para execução cirúrgica sob demanda. Se você precisa de resultados imediatos nos próximos 30 dias, siga a trilha correspondente ao seu momento atual:

| Perfil / Arquétipo | O que ler primeiro (Ordem Cirúrgica de Execução) |
| :--- | :--- |
| **1. Fundador de 1ª Viagem (Do Zero ao MVP e PMF)** | **Vol. 1** (Fases 0 a 3 + Caps. 1–4) $\\rightarrow$ **Vol. 2** (Fases 4 a 6) $\\rightarrow$ **Vol. 3** (Fases 7 a 10) $\\rightarrow$ **Vol. 4** (Fases 11 a 13 + Caps. 1, 2, 8 e 9) |
| **2. Bootstrapper (Consultoria / Agência / Serviço $\\rightarrow$ Produto SaaS sem VC)** | **Vol. 1** (Cap. 4: Bootstrap vs. VC) $\\rightarrow$ **Vol. 3** (Cap. 10: *Bootstrapping, Productized Services e Transição Service-to-Product*) $\\rightarrow$ **Vol. 4** (Caps. 1, 8, 9 e 10) $\\rightarrow$ **Vol. 5** (Caps. 1 a 3 e Cap. 8: Capital de Giro) $\\rightarrow$ **Vol. 10** (Cap. 41: *Serviços Profissionais B2B, Consultorias, Software Houses e Nearshoring*) |
| **3. Fundador Tech, SaaS B2B, AI-Native ou Deep Tech** | **Vol. 3** (Cap. 3: TRL/CRL e Cap. 9: Open Source) $\\rightarrow$ **Vol. 4** (Cap. 15: Produto AI-Native) $\\rightarrow$ **Vol. 7** (Fase 17 + Caps. 1 a 7: Arquitetura, Dívida Técnica e IA na Engenharia) $\\rightarrow$ **Vol. 10** (Cap. 1: Economia da Inovação/TRL + Caps. 39, 40, 42, 43 e 44: *Horizontal/Vertical SaaS, AI-Native, Cybersecurity e DevTools*) |
| **4. Empreendedor do Agro, Pecuária, Commodities e Bioeconomia** | **Vol. 5** (Cap. 8: Recebíveis/FIDC e Cap. 17: Finep/BNDES) $\\rightarrow$ **Vol. 9** (Cap. 7: Hedge Cambial) $\\rightarrow$ **Vol. 10** (Cap. 2: Hubs do Agro + Caps. 11 a 14: *Agritech, Pecuária de Precisão/AquaTech, Trading de Commodities/Barter/Silos/Arco Norte e Biocombustíveis/Bioinsumos/Irrigação/Bioeconomia Amazônica*) |
| **5. Indústria, Infraestrutura, Energia, Telecom e Operações Pesadas** | **Vol. 5** (Cap. 9: Bancos/BNDES, Cap. 10: Importação Ásia-Brasil e Cap. 17: Fomento) $\\rightarrow$ **Vol. 6** (Cap. 2: Vendas Complexas Enterprise e Cap. 5: Grandes Corporações) $\\rightarrow$ **Vol. 10** (Caps. 15 a 28: *Infratech, Energytech, Cleantech, Resíduos/Biometano/Florestal, Mining/Oil & Gas, Indústria 4.0, Hardware, Logtech, Mobitech, Consórcios/Rental/Aftermarket, Segurança/Facilities, Telecom/ISPs/Data Centers e Aerospace*) |
| **6. Varejo, Franquias, Marcas Próprias (D2C/Importação) e Serviços Locais** | **Vol. 2** (Cap. 1: Psicologia do Consumidor Brasileiro) $\\rightarrow$ **Vol. 5** (Cap. 3: Tributário/IBS-CBS e Cap. 10: *Comércio Exterior, Importação Ásia-Brasil, Landed Cost e TTD 409*) $\\rightarrow$ **Vol. 6** (Cap. 7: *Franchising, Licenciamento e COF — Lei 13.966*) $\\rightarrow$ **Vol. 10** (Caps. 30 e 34 a 38: *Clínicas/Odonto/Estética/Farma, Retailtech, Foodtech, D2C/Wellness, Travel/Pet/Silver e Setor Funerário/Assistência Familiar*) |
| **7. Setores Fortemente Regulados (Fintech, Crédito, Seguros, Saúde e Govtech)** | **Vol. 5** (Cap. 8: FIDCs) $\\rightarrow$ **Vol. 8** (Fase 18 + Caps. 1, 10, 11, 12 e 14: Marco Legal, LGPD, Regulação de IA, Compliance e SOC 2/ISO 27001) $\\rightarrow$ **Vol. 10** (Caps. 3 a 10 e 29 a 33: *Ciclos Macro/Selic, BACEN/CVM/SUSEP/ANVISA/ANS, CADE, Políticas Públicas, Fintech, Crédito Digital, Insurtech, Wealthtech/Drex, Biotech/Healthtech, Saúde Física/OPME, Edtech, Govtech e Legaltech*) |
| **8. CEO em Escala, Consolidador (M&A / Search Fund), Cash Cow e Family Office** | **Vol. 5** (Fase 14 + Caps. 13 a 16) $\\rightarrow$ **Vol. 6** (Fases 15 e 16 + Caps. 11 a 18: Founder Mode, Contratação C-Level, ESOP e Cultura) $\\rightarrow$ **Vol. 9** (Fases 19 e 20 + Caps. 1 a 23: *Board, Empresas Familiares, Internacionalização, Crise/Turnaround, M&A Buy-Side/Roll-ups, Search Funds, Spin-offs/Carve-outs, Secondaries, IPO, Tributação de Exit e A Empresa Cash Cow + Holdings, Offshores e Family Office*) |`;

const EXTRA_GLOSSARY_BY_LETTER = {
  A: [
    `**Arco Norte.** Complexo logístico-portuário brasileiro localizado acima do paralelo 16°S (portos de Itaqui/MA, Barcarena/PA, Santarém/PA, Santana/AP e estações de transbordo hidroviário de Miritituba/Rio Tapajós e Porto Velho/Rio Madeira), responsável por escoar mais de um terço da safra de grãos do Centro-Oeste e Matopiba.`,
  ],
  B: [
    `**BaaS (Banking-as-a-Service).** Infraestrutura regulatória e tecnológica que permite a empresas não-financeiras (varejistas, ERPs, plataformas) oferecerem contas digitais, PIX, cartões e crédito embutidos em seus próprios produtos (*Embedded Finance*) utilizando a licença de uma Instituição de Pagamento, SCD ou banco parceiro.`,
    `**Barter.** Operação triangular típica do agronegócio brasileiro em que o produtor rural adquire insumos (sementes, fertilizantes, defensivos) e paga com a entrega futura de parte física da sua produção (sacas de soja, milho, café ou algodão), formalizada via CPR e travada contra oscilação de preço na bolsa.`,
    `**Basis (Prêmio de Porto).** Diferença entre o preço físico de uma commodity em um porto de exportação (como Paranaguá, Santos ou Barcarena) e a cotação do contrato futuro de referência na bolsa internacional (CBOT ou ICE), refletindo frete marítimo, câmbio e oferta/demanda local.`,
    `**BECCS (Bioenergy with Carbon Cost Capture and Storage).** Captura e estocagem geológica de carbono associada à bioenergia. Na fermentação do etanol de cana ou milho no Brasil, o CO2 liberado nas dornas tem pureza próxima a 99%, tornando o custo de captura o mais competitivo do mundo.`,
    `**BESS (Battery Energy Storage System).** Sistemas de armazenamento de energia em baterias em escala comercial ou industrial, utilizados para arbitragem de tarifa na ponta, backup crítico e estabilização de redes elétricas com alta penetração solar e eólica.`,
    `**Bioinsumos.** Produtos de origem biológica (inoculantes fixadores de nitrogênio, bionematicidas, biofungicidas, bioinseticidas e extratos vegetais) utilizados na nutrição e no controle de pragas agrícolas, segmento em que o Brasil lidera a adoção global.`,
  ],
  C: [
    `**Carve-out (Equity Carve-out / Spin-off).** Operação societária em que uma empresa destaca uma unidade de negócio, tecnologia interna ou filial para um novo CNPJ independente (via cisão parcial ou *drop-down* de ativos), permitindo captar recursos próprios, vender para concorrentes da empresa-mãe e destravar múltiplos de valuation.`,
    `**Cash Cow (Empresa Pagadora de Dividendos).** Companhia madura com posição competitiva defensável, baixa necessidade de reinvestimento em CapEx, alta geração de fluxo de caixa livre (FCF) e ROIC elevado, operada para distribuir dividendos recorrentes aos sócios em vez de buscar venda (exit).`,
    `**CBIO (Crédito de Descarbonização).** Ativo ambiental financeiro emitido por produtores e importadores de biocombustíveis certificados no programa RenovaBio (Lei 13.576/2017) e negociado na B3, equivalente a 1 tonelada de CO2 evitada em comparação ao combustível fóssil.`,
    `**COF (Circular de Oferta de Franquia).** Documento jurídico obrigatório regido pela Lei de Franquias (Lei 13.966/2019) que a franqueadora deve entregar ao candidato com no mínimo 10 dias de antecedência da assinatura de qualquer contrato ou pagamento de taxa, sob pena de anulabilidade e devolução integral dos valores corrigidos.`,
    `**Consórcio Administrado.** Modalidade brasileira de compra programada baseada na união de pessoas físicas ou jurídicas em grupo fechado (Lei 11.795/2008, fiscalizada pelo BACEN), em que a administradora cobra taxa de administração (15% a 22%) sem risco de funding bancário, contemplando cotistas por sorteio ou lance.`,
    `**CPR (Cédula de Produto Rural).** Título de crédito líquido e certo (Lei 8.929/1994) emitido por produtor rural, associação ou cooperativa representativo de promessa de entrega física de produtos rurais (CPR Física) ou liquidação financeira (CPR Financeira), base das operações de *Barter* e de securitização em CRAs e FIAGROs.`,
    `**CPSI (Contrato Público para Solução Inovadora).** Modalidade especial de licitação criada pelo Marco Legal das Startups (LC 182/2021) que permite à administração pública contratar testes remunerados de soluções inovadoras por até R$ 1,6 milhão por contrato (com possibilidade de fornecimento posterior sem nova licitação até R$ 8 milhões).`,
  ],
  D: [
    `**DDGS (Dried Distillers Grains with Solubles).** Coproduto proteico de alto valor nutricional resultante da produção de etanol de milho, amplamente utilizado na nutrição de bovinos de corte e leite, aves, suínos e piscicultura.`,
    `**Drex (Real Digital).** Infraestrutura de moeda digital de atacado e liquidação tokenizada em desenvolvimento pelo Banco Central do Brasil para suportar contratos inteligentes e negociação de ativos reais tokenizados (RWA).`,
  ],
  E: [
    `**Equiparação Hospitalar.** Regime tributário previsto na Lei 9.249/1995 (art. 15, § 1º, III, "a" e Tema 217 do STJ) que reduz a base de cálculo presumida do IRPJ de 32% para 8% e da CSLL de 32% para 12% para clínicas médicas e odontológicas constituídas como sociedade empresária e que cumpram os requisitos sanitários da ANVISA (RDC 50/2002) em serviços cirúrgicos, diagnósticos e terapêuticos.`,
    `**EUDR (European Union Deforestation Regulation).** Regulamento da União Europeia que proíbe a importação de commodities (carne bovina, couro, soja, café, cacau, madeira e borracha) oriundas de áreas desmatadas após dezembro de 2020, exigindo geolocalização por polígonos e rastreabilidade completa de fornecedores diretos e indiretos.`,
  ],
  F: [
    `**Family Office (SFO / MFO).** Estrutura dedicada à governança, alocação patrimonial, planejamento tributário e sucessão da fortuna de uma única família (*Single Family Office* — SFO) ou de múltiplas famílias (*Multi-Family Office* — MFO) após eventos de liquidez (exit) ou acúmulo de dividendos.`,
    `**FIDC (Fundo de Investimento em Direitos Creditórios).** Veículo de securitização regulado pela CVM (Resolução CVM 175) que compra recebíveis comerciais, duplicatas, parcelas de cartão ou CCBs de crédito, dividindo o risco entre cotas sênior (renda fixa institucional), mezanino e subordinada (primeira perda retida pelo originador).`,
    `**FIV (Fertilização In Vitro).** Biotecnologia reprodutiva de multiplicação genética em laboratório (tanto na pecuária bovina de elite, onde o Brasil é líder mundial absoluto via aspiração folicular OPU-FIV, quanto na medicina reprodutiva humana).`,
  ],
  I: [
    `**ISP (Internet Service Provider / Provedor Regional de Fibra).** Operadoras regionais de telecomunicações detentoras de licença SCM na ANATEL que construíram a malha de fibra óptica até a residência (*FTTH*) no interior e nas periferias do Brasil.`,
  ],
  L: [
    `**Landed Cost (Custo Internado).** Custo total final de uma mercadoria importada posta no armazém do importador no Brasil, somando preço FOB, frete e seguro internacional, Imposto de Importação (II), IPI, PIS/COFINS-Importação, ICMS "por dentro" e despesas aduaneiras/portuárias.`,
  ],
  N: [
    `**Nearshoring (Exportação de Engenharia).** Modelo de negócios em que consultorias e *software houses* brasileiras exportam squads de engenharia de software, dados e IA para clientes nos Estados Unidos e Europa, combinando alinhamento de fuso horário (UTC-3) com arbitragem cambial (receita em dólar e folha em reais).`,
  ],
  O: [
    `**OPME (Órteses, Próteses e Materiais Especiais).** Insumos médicos de alto valor utilizados em procedimentos cirúrgicos e invasivos (stents, marca-passos, implantes ortopédicos e neurocirúrgicos), cujo ciclo de cotação, rastreabilidade ANVISA e auditoria responde por parcela crítica do custo hospitalar e odontológico.`,
  ],
  P: [
    `**Productized Service (Serviço Produtizado).** Serviço B2B ou B2C empacotado como se fosse um produto de software: escopo fechado, entregável padronizado, preço fixo mensal recorrente, SLA definido e procedimentos operacionais padrão (SOPs), servindo como ponte de *bootstrapping* para financiar a criação de um SaaS próprio.`,
  ],
  R: [
    `**Rental (Locação Pesada de Ativos).** Modelo de negócios intensivo em capital baseado na compra de frotas de caminhões, máquinas de linha amarela, equipamentos agrícolas ou industriais com desconto de montadora (OEM), locação de longo prazo (36 a 60 meses) dedutível como OpEx no Lucro Real do cliente e posterior revenda do ativo seminovo.`,
    `**RWA (Real World Assets).** Representação digital (tokenização em blockchain ou infraestrutura DLT) de ativos do mundo real, como recebíveis comerciais, cotas de consórcio, créditos de carbono, imóveis, títulos do agronegócio (CPR/CRA) e títulos públicos.`,
  ],
  S: [
    `**SAF (Sustainable Aviation Fuel / Combustível Sustentável de Aviação).** Biocombustível sintético ou derivado de matérias-primas renováveis (etanol via rota *Alcohol-to-Jet*, óleo de soja, macaúba ou sebo bovino via rota HEFA) certificado para substituir o querosene de aviação fóssil com redução drástica de emissões.`,
    `**Search Fund (ETA — Entrepreneurship Through Acquisition).** Veículo de investimento em que um ou dois empreendedores (*searchers*) captam capital de investidores para buscar, adquirir, assumir como CEO e escalar uma única empresa madura, lucrativa e com geração de caixa recorrente.`,
    `**Secondaries (Liquidez Secundária).** Compra e venda de ações ou cotas já existentes de uma startup (de fundadores, executivos com opções exercidas ou investidores iniciais) para novos investidores ou fundos especializados antes de um exit total (M&A ou IPO).`,
    `**SisGen (Sistema Nacional de Gestão do Patrimônio Genético).** Sistema eletrônico do Ministério do Meio Ambiente (Lei 13.123/2015) onde empresas de biotecnologia, cosméticos, fármacos e alimentos devem cadastrar obrigatoriamente o acesso ao patrimônio genético da biodiversidade brasileira (Amazônia, Cerrado, Caatinga, etc.) antes da comercialização ou pedido de patente.`,
    `**SISBOV.** Sistema Brasileiro de Identificação Individual de Bovinos e Bubalinos do MAPA, utilizado para certificar a rastreabilidade individual de animais do nascimento ao abate para mercados exigentes e conformidade socioambiental.`,
  ],
  T: [
    `**TTD 409/410 (Tratamento Tributário Diferenciado — SC).** Benefício fiscal estadual de Santa Catarina (similar ao Fundap/ES e Sistemática de Alagoas) que difere o ICMS na importação portuária/aeroportuária e reduz a carga efetiva de ICMS nas saídas interestaduais de mercadorias importadas.`,
  ],
  V: [
    `**Vertical SaaS.** Software em nuvem construído especificamente para ser o sistema operacional de missão crítica de um único setor (ex.: clínicas odontológicas, oficinas mecânicas, transportadoras, fazendas, salões, escolas), multiplicando sua receita por cliente ao embutir pagamentos, crédito, seguros e IA no fluxo de trabalho diário.`,
  ],
};

const EXTRA_ABBREVS = [
  `**ACL**: Ambiente de Contratação Livre (Mercado Livre de Energia Elétrica). *Energytech / Regulação.*`,
  `**ANA**: Agência Nacional de Águas e Saneamento Básico. *Regulação / Irrigação e Saneamento.*`,
  `**ANAC**: Agência Nacional de Aviação Civil. *Regulação / Aerospace e Drones.*`,
  `**ANATEL**: Agência Nacional de Telecomunicações. *Regulação / Telecom e ISPs.*`,
  `**ANEEL**: Agência Nacional de Energia Elétrica. *Regulação / Energia.*`,
  `**ANP**: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis. *Regulação / Óleo, Gás e Biocombustíveis.*`,
  `**ANS**: Agência Nacional de Saúde Suplementar. *Regulação / Planos de Saúde e Healthtech.*`,
  `**ANVISA**: Agência Nacional de Vigilância Sanitária. *Regulação / Saúde, Alimentos, Cosméticos e Agro.*`,
  `**BaaS**: Banking-as-a-Service. *Fintech / Infraestrutura Financeira.*`,
  `**BECCS**: Bioenergy with Carbon Capture and Storage (Bioenergia com Captura e Estocagem de Carbono). *Biocombustíveis / Clima.*`,
  `**BESS**: Battery Energy Storage System (Sistema de Armazenamento de Energia em Baterias). *Energytech.*`,
  `**CADE**: Conselho Administrativo de Defesa Econômica. *Antitruste / M&A.*`,
  `**CAR**: Cadastro Ambiental Rural. *Agronegócio / Compliance Ambiental.*`,
  `**CBIO**: Crédito de Descarbonização (RenovaBio). *Biocombustíveis / Mercado de Carbono.*`,
  `**CBOT**: Chicago Board of Trade (Bolsa de Mercadorias de Chicago). *Trading de Commodities.*`,
  `**CCEE**: Câmara de Comercialização de Energia Elétrica. *Energytech.*`,
  `**COF**: Circular de Oferta de Franquia (Lei 13.966/2019). *Franchising.*`,
  `**CPR**: Cédula de Produto Rural. *Crédito Rural / Barter / Agronegócio.*`,
  `**CPSI**: Contrato Público para Solução Inovadora (Marco Legal das Startups). *Govtech.*`,
  `**CRA / CRI**: Certificado de Recebíveis do Agronegócio / Imobiliários. *Mercado de Capitais / Securitização.*`,
  `**CVC**: Corporate Venture Capital. *Economia da Inovação / Investimentos.*`,
  `**DDGS**: Dried Distillers Grains with Solubles (Farelo proteico de etanol de milho). *Biocombustíveis / Nutrição Animal.*`,
  `**EUDR**: European Union Deforestation Regulation (Regulamento Europeu Antidesmatamento). *Exportação / Rastreabilidade.*`,
  `**FIDC**: Fundo de Investimento em Direitos Creditórios. *Crédito / Securitização.*`,
  `**FINEP**: Financiadora de Estudos e Projetos. *Fomento Não-Diluitivo / Inovação.*`,
  `**FIV**: Fertilização In Vitro (humana e bovina). *Biotecnologia / Pecuária e Saúde.*`,
  `**FTTH**: Fiber-to-the-Home (Fibra Óptica até a Residência). *Telecomunicações / ISPs.*`,
  `**GGR**: Gross Gaming Revenue (Receita Bruta de Jogos). *Gaming / iGaming Regulado.*`,
  `**GTA**: Guia de Trânsito Animal. *Pecuária / Rastreabilidade.*`,
  `**IBS / CBS**: Imposto sobre Bens e Serviços / Contribuição sobre Bens e Serviços (IVA Dual da Reforma Tributária). *Tributário.*`,
  `**ICT**: Instituição Científica, Tecnológica e de Inovação. *Economia da Inovação / Deep Tech.*`,
  `**INPI**: Instituto Nacional da Propriedade Industrial. *Propriedade Intelectual / Patentes e Marcas.*`,
  `**ISP**: Internet Service Provider (Provedor Regional de Internet). *Telecomunicações.*`,
  `**ITCMD**: Imposto sobre Transmissão Causa Mortis e Doação. *Sucessão / Family Office.*`,
  `**MAPA**: Ministério da Agricultura e Pecuária. *Regulação / Agronegócio e Bioinsumos.*`,
  `**MFO / SFO**: Multi-Family Office / Single Family Office. *Gestão de Fortuna / Pós-Exit.*`,
  `**NCM**: Nomenclatura Comum do Mercosul. *Comércio Exterior / Tributário.*`,
  `**NDF**: Non-Deliverable Forward (Contrato a Termo de Moeda sem Entrega Física). *Hedge Cambial / Tesouraria.*`,
  `**OEE**: Overall Equipment Effectiveness (Eficiência Global do Equipamento). *Indústria 4.0 / Manufatura.*`,
  `**OPME**: Órteses, Próteses e Materiais Especiais. *Saúde Física / Hospitais e Odontologia.*`,
  `**PNRS**: Política Nacional de Resíduos Sólidos (Lei 12.305/2010). *Gestão de Resíduos / Economia Circular.*`,
  `**RWA**: Real World Assets (Ativos Reais Tokenizados). *Wealthtech / Mercado de Capitais.*`,
  `**SAF**: Sustainable Aviation Fuel (Combustível Sustentável de Aviação). *Biocombustíveis / Aviação.*`,
  `**SCD / SEP**: Sociedade de Crédito Direto / Sociedade de Empréstimo entre Pessoas. *Fintech / Regulação BACEN.*`,
  `**SisGen**: Sistema Nacional de Gestão do Patrimônio Genético (Lei 13.123/2015). *Bioeconomia / Biodiversidade.*`,
  `**SISBOV**: Sistema Brasileiro de Identificação Individual de Bovinos e Bubalinos. *Pecuária / Rastreabilidade.*`,
  `**SUSEP**: Superintendência de Seguros Privados. *Regulação / Insurtech.*`,
  `**TISS / TUSS**: Troca de Informações na Saúde Suplementar / Terminologia Unificada da Saúde Suplementar. *Saúde / Glosas Médicas.*`,
  `**TRL / CRL**: Technology Readiness Level / Customer Readiness Level. *Deep Tech / Validação.*`,
  `**TTD**: Tratamento Tributário Diferenciado (benefício fiscal de importação). *Comércio Exterior.*`,
];

const EXTRA_INDEX_REMISSIVO_SECTION = `
### Índice de Ecossistemas, Ciclo de Vida e das 42 Verticais Setoriais (v4.0)

- **Aeroespacial, Spacetech, Drones e Defesa (Dual-Use)**: [[#CAPÍTULO 28 — AEROSPACE, SPACETECH, DRONES, SATÉLITES E TECNOLOGIA DE DEFESA (DUAL-USE)|Capítulo 28 (Vol. 10)]]
- **Aftermarket Automotivo, Autopeças, Seminovos e Leilões**: [[#CAPÍTULO 24 — CONSÓRCIOS ADMINISTRADOS (BACEN), RENTAL DE MÁQUINAS/FROTAS PESADAS E AFTERMARKET AUTOMOTIVO (AUTOPEÇAS, SEMINOVOS E LEILÕES)|Capítulo 24 (Vol. 10)]]
- **Agritech (Lavoura, Maquinário, Crédito Rural e Precisão)**: [[#CAPÍTULO 11 — AGRITECH: PLAYBOOK PARA O CAMPO BRASILEIRO|Capítulo 11 (Vol. 10)]]
- **AI-Native, Agentes Autônomos, Modelos Fundacionais e MLOps**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 15 — AI COMO PARTE DO PRODUTO (AI-NATIVE PRODUCT)|Capítulo 15 (Vol. 4)]], [[#CAPÍTULO 42 — AI-NATIVE, MODELOS FUNDACIONAIS, AGENTES AUTÔNOMOS, INFRAESTRUTURA DE DADOS E MLOPS|Capítulo 42 (Vol. 10)]]
- **Arco Norte, Hidrovias, Ferrovias e Portos Graneleiros**: [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13 (Vol. 10)]]
- **Armazenagem de Grãos, Silos Inteligentes e Classificação Óptica**: [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13 (Vol. 10)]]
- **Barter, Originação de Grãos, CPR e Hedge em Chicago (CBOT/B3)**: [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13 (Vol. 10)]]
- **Biocombustíveis (Etanol de Milho, E2G, SAF, Biodiesel e CBIOs/RenovaBio)**: [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]]
- **Bioeconomia Extrativista da Amazônia (Açaí, Cacau, Castanha e SisGen)**: [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]]
- **Bioinsumos (Controle Biológico, Inoculantes) e Pó de Rocha (Agrominerais)**: [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]]
- **Biotech e Healthtech (Saúde Digital, Ensaios Clínicos e ANVISA/ANS)**: [[#CAPÍTULO 29 — BIOTECH E HEALTHTECH: PLAYBOOK DE REGULAÇÃO, ENSAIOS E CAPITAL|Capítulo 29 (Vol. 10)]]
- **Bootstrapping, Serviços Produtizados (*Productized Services*) e *Service-to-Product***: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 10 — BOOTSTRAPPING, SERVIÇOS PRODUTIZADOS (PRODUCTIZED SERVICES) E A TRANSIÇÃO SERVICE-TO-PRODUCT|Capítulo 10 (Vol. 3)]]
- **CADE e Defesa da Concorrência (Antitruste)**: [[#CAPÍTULO 5 — CADE E ANTITRUSTE — QUANDO O CRESCIMENTO ATRAI O REGULADOR|Capítulo 5 (Vol. 10)]]
- **Cash Cow (Dividendos Perpétuos), Holdings Patrimoniais, Offshores e *Family Office***: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 23 — A EMPRESA CASH COW (DIVIDENDOS PERPÉTUOS), HOLDINGS PATRIMONIAIS, FAMILY OFFICE E GESTÃO DE FORTUNA PÓS-EXIT|Capítulo 23 (Vol. 9)]]
- **Cleantech, Mercado de Carbono e ESG Ambiental**: [[#CAPÍTULO 17 — CLEANTECH E ESG: STARTUPS DE IMPACTO AMBIENTAL NO BRASIL|Capítulo 17 (Vol. 10)]]
- **Clínicas Médicas Populares, Odontológicas, Estética Avançada, Diagnóstico, Farmácias Magistrais e OPME**: [[#CAPÍTULO 30 — SAÚDE FÍSICA PRIVADA: REDES DE CLÍNICAS MÉDICAS E ODONTOLÓGICAS, ESTÉTICA AVANÇADA, MEDICINA DIAGNÓSTICA, FARMÁCIAS MAGISTRAIS E OPME|Capítulo 30 (Vol. 10)]]
- **Comércio Exterior, Importação (Ásia-Brasil), Desembaraço, *Landed Cost* e TTD 409**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 10 — COMÉRCIO EXTERIOR, IMPORTAÇÃO (ÁSIA-BRASIL), DESEMBARAÇO ADUANEIRO, TRIBUTAÇÃO EM CASCATA E BENEFÍCIOS FISCAIS ESTADUAIS|Capítulo 10 (Vol. 5)]]
- **Consórcios Administrados (Lei 11.795/2008 e Regulação BACEN)**: [[#CAPÍTULO 24 — CONSÓRCIOS ADMINISTRADOS (BACEN), RENTAL DE MÁQUINAS/FROTAS PESADAS E AFTERMARKET AUTOMOTIVO (AUTOPEÇAS, SEMINOVOS E LEILÕES)|Capítulo 24 (Vol. 10)]]
- **Creator Economy, Mídia Digital, Streaming e Infoprodutos**: [[#CAPÍTULO 47 — CREATOR ECONOMY, MÍDIA DIGITAL, STREAMING, ÁUDIO, INFOPRODUTOS E PLATAFORMAS DE COMUNIDADE|Capítulo 47 (Vol. 10)]]
- **Crédito Digital, Lending, Securitização (FIDCs) e Cobrança**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 8 — CAPITAL DE GIRO E RECEBÍVEIS: A MECÂNICA QUE QUEBRA EMPRESAS LUCRATIVAS|Capítulo 8 (Vol. 5)]], [[#CAPÍTULO 8 — CRÉDITO DIGITAL, LENDING, SECURITIZAÇÃO (FIDCS), ANTECIPAÇÃO DE RECEBÍVEIS E COBRANÇA|Capítulo 8 (Vol. 10)]]
- **Cybersecurity, Identidade Digital, Biometria e Antifraude**: [[#CAPÍTULO 43 — CYBERSECURITY, IDENTIDADE DIGITAL, BIOMETRIA, PREVENÇÃO A FRAUDES E PRIVACIDADE|Capítulo 43 (Vol. 10)]]
- **D2C (Marcas Nativas Digitais), Beleza, Moda, CPG e Wellness**: [[#CAPÍTULO 36 — MARCAS NATIVAS DIGITAIS (D2C), BELEZA, MODA, BENS DE CONSUMO (CPG) E WELLNESS/FITNESS|Capítulo 36 (Vol. 10)]]
- **DevTools, Cloud Infrastructure, APIs e Open Source Comercial (COSS)**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 9 — OPEN SOURCE COMO ESTRATÉGIA DE NEGÓCIO|Capítulo 9 (Vol. 3)]], [[#CAPÍTULO 44 — DEVTOOLS, CLOUD INFRASTRUCTURE, APIS, OBSERVABILIDADE E OPEN SOURCE COMERCIAL (COSS)|Capítulo 44 (Vol. 10)]]
- **Economia da Inovação e seus 8 Atores (Universidades, Fomento, CVC, VC, PE)**: [[#CAPÍTULO 1 — A ECONOMIA DA INOVAÇÃO E SEUS ATORES: UNIVERSIDADE, ESTADO, CORPORAÇÕES, VENTURE STUDIOS E CAPITAL DE RISCO|Capítulo 1 (Vol. 10)]]
- **Edtech (Educação K-12, Superior/MEC, Corporativa e EdFin)**: [[#CAPÍTULO 31 — EDTECH: PLAYBOOK PARA TECNOLOGIA DE EDUCAÇÃO NO BRASIL|Capítulo 31 (Vol. 10)]]
- **Energytech (Mercado Livre de Energia, Geração Distribuída Solar e Baterias/BESS)**: [[#CAPÍTULO 16 — ENERGYTECH: GERAÇÃO DISTRIBUÍDA, MERCADO LIVRE DE ENERGIA, SMART GRIDS E ARMAZENAMENTO|Capítulo 16 (Vol. 10)]]
- **Fintech (Pagamentos, PIX, Open Finance e Banking-as-a-Service)**: [[#CAPÍTULO 7 — FINTECH: PAGAMENTOS, BANKING-AS-A-SERVICE (BAAS), PIX, OPEN FINANCE E INFRAESTRUTURA FINANCEIRA|Capítulo 7 (Vol. 10)]]
- **Foodtech, Food Service, Dark Kitchens e Novos Ingredientes**: [[#CAPÍTULO 35 — FOODTECH, FOOD SERVICE, DARK KITCHENS, SUPPLY CHAIN ALIMENTAR E NOVOS INGREDIENTES|Capítulo 35 (Vol. 10)]]
- **Franchising, Licenciamento e Redes Multi-Unidades (Lei 13.966/2019 e COF)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — FRANCHISING, LICENCIAMENTO E EXPANSÃO DE REDES MULTI-UNIDADES (LEI 13.966/2019)|Capítulo 7 (Vol. 6)]]
- **Funerário (Setor), Cemitérios, Crematórios, Planos de Assistência Familiar e DeathTech**: [[#CAPÍTULO 38 — SETOR FUNERÁRIO, CEMITÉRIOS, CREMATÓRIOS, PLANOS DE ASSISTÊNCIA FAMILIAR, DEATHTECH E SUCESSÃO|Capítulo 38 (Vol. 10)]]
- **Gaming, Estúdios de Jogos, E-Sports e Apostas Reguladas (iGaming/Bets)**: [[#CAPÍTULO 48 — GAMING, ESTÚDIOS DE JOGOS, E-SPORTS, APOSTAS REGULADAS (IGAMING/BETS) E ECONOMIA VIRTUAL|Capítulo 48 (Vol. 10)]]
- **Geografia Mundial da Inovação e os 15 Hubs de Inovação do Brasil**: [[#CAPÍTULO 2 — GEOGRAFIA MUNDIAL DA INOVAÇÃO: CONTINENTES, ESPECIALIZAÇÃO, VANTAGENS COMPETITIVAS E HUBS GLOBAIS E BRASILEIROS|Capítulo 2 (Vol. 10)]]
- **Govtech (Vendas para Governo, Lei 14.133/2021 e CPSI)**: [[#CAPÍTULO 32 — GOVTECH: STARTUP VENDENDO PARA GOVERNO|Capítulo 32 (Vol. 10)]]
- **Hardware, IoT, Robótica e Deep Tech Física**: [[#CAPÍTULO 21 — HARDWARE E DEEP TECH: CONSTRUIR NEGÓCIO COM FABRICAÇÃO, IP E HORIZONTES LONGOS|Capítulo 21 (Vol. 10)]]
- **Horizontal B2B SaaS, ERPs e Automação de Backoffice para PMEs**: [[#CAPÍTULO 39 — HORIZONTAL B2B SAAS, ERPS, PRODUTIVIDADE, AUTOMAÇÃO DE BACKOFFICE E PMES|Capítulo 39 (Vol. 10)]]
- **HRTech, Folha de Pagamento, Benefícios Flexíveis e Recrutamento**: [[#CAPÍTULO 45 — HRTECH, FOLHA DE PAGAMENTO, BENEFÍCIOS FLEXÍVEIS, RECRUTAMENTO E FUTURE OF WORK|Capítulo 45 (Vol. 10)]]
- **Indústria 4.0, Manufatura Avançada, IIoT e Manutenção Preditiva**: [[#CAPÍTULO 20 — INDÚSTRIA 4.0, MANUFATURA AVANÇADA, MANUTENÇÃO PREDITIVA, IIOT E AUTOMAÇÃO FABRIL|Capítulo 20 (Vol. 10)]]
- **Infratech (Saneamento, Concessões, PPPs e Obras Pesadas)**: [[#CAPÍTULO 15 — INFRATECH: SANEAMENTO, CONCESSÕES, PPPS, OBRAS PESADAS E INFRAESTRUTURA CRÍTICA|Capítulo 15 (Vol. 10)]]
- **Insurtech e Seguros Embarcados (*Embedded Insurance* / SUSEP)**: [[#CAPÍTULO 9 — INSURTECH: SEGUROS DIGITAIS, SEGUROS EMBARCADOS (EMBEDDED INSURANCE), SINISTROS E PREVIDÊNCIA|Capítulo 9 (Vol. 10)]]
- **Irrigação de Precisão, Pivôs Centrais e Outorga Hídrica (ANA)**: [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]]
- **Legaltech, Regtech e Taxtech**: [[#CAPÍTULO 33 — LEGALTECH: TECNOLOGIA JURÍDICA NO BRASIL|Capítulo 33 (Vol. 10)]]
- **Liquidez Secundária (*Secondaries* para Fundadores, Executivos e Investidores)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 16 — LIQUIDEZ SECUNDÁRIA (SECONDARIES): REALIZAÇÃO PARCIAL DE CAPITAL PARA FUNDADORES, EXECUTIVOS E INVESTIDORES ANTES DO EXIT|Capítulo 16 (Vol. 9)]]
- **Logtech, Frete e Supply Chain**: [[#CAPÍTULO 22 — LOGTECH: TECNOLOGIA EM LOGÍSTICA E SUPPLY CHAIN NO BRASIL|Capítulo 22 (Vol. 10)]]
- **Martech, SalesTech, CRM, WhatsApp-First e Retail Media**: [[#CAPÍTULO 46 — MARTECH, ADTECH, SALESTECH, CRM, ATENDIMENTO CONVERSACIONAL (WHATSAPP-FIRST) E RETAIL MEDIA|Capítulo 46 (Vol. 10)]]
- **Miningtech, Oil & Gas Tech e Recursos Naturais Pesados (ANP)**: [[#CAPÍTULO 19 — MININGTECH, OIL & GAS TECH, GEOLOGIA DIGITAL E RECURSOS NATURAIS PESADOS|Capítulo 19 (Vol. 10)]]
- **Mobitech, Gestão de Frotas, Telemetria e Eletromobilidade**: [[#CAPÍTULO 23 — MOBITECH: MOBILIDADE URBANA, GESTÃO DE FROTAS, TELEMETRIA, ELETROMOBILIDADE E AUTÔNOMOS|Capítulo 23 (Vol. 10)]]
- **Pecuária de Precisão (PecTech), Proteína Animal, Genética Bovina (FIV), Rastreabilidade (SISBOV/EUDR) e Aquicultura (AquaTech)**: [[#CAPÍTULO 12 — PECUÁRIA DE PRECISÃO (PECTECH), PROTEÍNA ANIMAL, GENÉTICA BOVINA (FIV), RASTREABILIDADE E AQUICULTURA (AQUATECH)|Capítulo 12 (Vol. 10)]]
- **Proptech e Construtech (Mercado Imobiliário e Construção Civil)**: [[#CAPÍTULO 25 — PROPTECH: TECNOLOGIA NO MERCADO IMOBILIÁRIO BRASILEIRO|Capítulo 25 (Vol. 10)]]
- **Rental (Locação de Máquinas Pesadas, Linha Amarela, Caminhões e Equipamentos)**: [[#CAPÍTULO 24 — CONSÓRCIOS ADMINISTRADOS (BACEN), RENTAL DE MÁQUINAS/FROTAS PESADAS E AFTERMARKET AUTOMOTIVO (AUTOPEÇAS, SEMINOVOS E LEILÕES)|Capítulo 24 (Vol. 10)]]
- **Resíduos Sólidos (Gestão de), Aterros, Biometano, Reciclagem e Base Florestal/Celulose**: [[#CAPÍTULO 18 — GESTÃO DE RESÍDUOS SÓLIDOS, ECONOMIA CIRCULAR, RECICLAGEM INDUSTRIAL, BIOMETANO E BASE FLORESTAL/CELULOSE|Capítulo 18 (Vol. 10)]]
- **Retailtech, E-Commerce, Omnichannel e Digitalização do Varejo**: [[#CAPÍTULO 34 — RETAILTECH, E-COMMERCE, OMNICHANNEL, SOCIAL COMMERCE E DIGITALIZAÇÃO DO VAREJO FÍSICO|Capítulo 34 (Vol. 10)]]
- **Segurança Privada, Portaria Remota/Autônoma, Visão Computacional e *Facilities***: [[#CAPÍTULO 26 — SEGURANÇA PRIVADA, PATRIMONIAL, CONDOMINIAL (PORTARIA REMOTA/AUTÔNOMA), VISÃO COMPUTACIONAL E FACILITIES|Capítulo 26 (Vol. 10)]]
- **Serviços Profissionais B2B, Consultorias, Software Houses, *Nearshoring* e BPO**: [[#CAPÍTULO 41 — SERVIÇOS PROFISSIONAIS B2B DE ALTA MARGEM, CONSULTORIAS, SOFTWARE HOUSES, EXPORTAÇÃO DE ENGENHARIA (NEARSHORING) E BPO|Capítulo 41 (Vol. 10)]]
- **Spin-offs, Carve-outs e Venture Building Corporativo**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 15 — SPIN-OFFS, CARVE-OUTS E VENTURE BUILDING CORPORATIVO: CRIANDO NOVAS EMPRESAS A PARTIR DE ATIVOS INTERNOS|Capítulo 15 (Vol. 9)]]
- **Telecomunicações, Provedores Regionais de Fibra (ISPs), 5G Privativo e Data Centers de IA**: [[#CAPÍTULO 27 — TELECOMUNICAÇÕES, PROVEDORES REGIONAIS DE FIBRA (ISPS), REDES PRIVATIVAS 5G, TORRES E DATA CENTERS DE IA|Capítulo 27 (Vol. 10)]]
- **Traveltech, Eventos, SportsTech, PetTech e Economia da Longevidade (*Silver Economy*)**: [[#CAPÍTULO 37 — TRAVELTECH, HOSPITALIDADE, EVENTOS, SPORTSTECH, PETTECH E ECONOMIA DA LONGEVIDADE (SILVER ECONOMY)|Capítulo 37 (Vol. 10)]]
- **Vertical SaaS (Sistemas Operacionais Setoriais com Pagamentos, Crédito e IA)**: [[#CAPÍTULO 40 — VERTICAL SAAS: SISTEMAS OPERACIONAIS SETORIAIS COM PAGAMENTOS, CRÉDITO E IA EMBARCADOS|Capítulo 40 (Vol. 10)]]
- **Wealthtech, Mercado de Capitais, Cripto, Drex e Tokenização (RWA)**: [[#CAPÍTULO 10 — WEALTHTECH, MERCADO DE CAPITAIS, GESTÃO PATRIMONIAL, CRIPTO E TOKENIZAÇÃO DE ATIVOS (DREX E RWA)|Capítulo 10 (Vol. 10)]]
`;

const FRAMEWORKS_BG_CELL_FIXES = {
  'Working Backwards':
    '[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]], [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]]',
  'Double Diamond':
    '[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]]',
  'Crazy 8s':
    '[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]]',
  'How Might We':
    '[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]]',
  MoSCoW:
    '[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]]',
  'Kano Model':
    '[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]]',
  RICE:
    '[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]]',
  WSJF:
    '[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]]',
  'Eisenhower Matrix':
    '[[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]]',
  'North Star Metric':
    '[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]]',
  'One Metric That Matters (OMTM)':
    '[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]]',
  'Hook Model':
    '[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]]',
  OKR:
    '[[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]]',
  'Radical Candor':
    '[[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]]',
  'Five Dysfunctions of a Team':
    '[[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]]',
  Multipliers:
    '[[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]]',
  'High Output Management':
    '[[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]]',
};

function enrichRawGlossaryBody(body) {
  let out = body;
  for (const [letter, entries] of Object.entries(EXTRA_GLOSSARY_BY_LETTER)) {
    const blockToInsert = entries.join('\n\n');
    const reHeader = new RegExp(`(### ${letter}\\n+)`);
    if (reHeader.test(out)) {
      out = out.replace(reHeader, `$1${blockToInsert}\n\n`);
    }
  }
  return out;
}

function enrichRawAbbrevBody(body) {
  const extraBlock = EXTRA_ABBREVS.join('\n\n');
  return body.replace(
    /(\*\*ZOPA\*\*:[^\n]+)/,
    `$1\n\n${extraBlock}`
  );
}

module.exports = {
  FAST_TRACKS_MD,
  EXTRA_INDEX_REMISSIVO_SECTION,
  FRAMEWORKS_BG_CELL_FIXES,
  enrichRawGlossaryBody,
  enrichRawAbbrevBody,
};

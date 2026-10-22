/**
 * Expansões e normalizações do Glossário Geral, Lista de Abreviações e
 * Roteiros de Leitura por Perfil (Fast-Tracks) para a Edição v5.2
 * (10 Volumes Autocontidos, 21 Fases, 155 Capítulos, 42 Verticais Setoriais).
 */

const refBibIndices = require('./vol10_ref_bib_indices');

const FAST_TRACKS_MD = `## Roteiros de Leitura por Perfil (Fast-Tracks)

Com **10 volumes, 21 fases, 155 capítulos e 42 playbooks setoriais (~915 mil palavras)**, o **IGNIÇÃO** foi projetado tanto para leitura sequencial quanto para consulta sob demanda. Se você precisa destravar decisões nos próximos 30 dias, siga a trilha correspondente ao seu perfil atual (e acompanhe o arquétipo correspondente da coleção):

| Perfil / Arquétipo | O que ler primeiro (Ordem de Leitura) |
| :--- | :--- |
| **1. Fundador de 1ª Viagem (Do Zero ao MVP e PMF)** | **Vol. 1** (Fases 0 a 3 + Caps. 1–4) → **Vol. 2** (Fases 4 a 6) → **Vol. 3** (Fases 7 a 10) → **Vol. 4** (Fases 11 a 13 + Caps. 1, 5 e 6) |
| **2. Bootstrapper e SaaS / IA (*Lucas & Marina*: Serviço → Produto sem VC)** | **Vol. 1** (Cap. 4: Bootstrap vs. VC) → **Vol. 3** (Cap. 7: *Bootstrapping, Serviços Produtizados e Transição Service-to-Product*) → **Vol. 4** (Caps. 1, 5, 6 e 10) → **Vol. 5** (Caps. 1, 2 e 5: Capital de Giro e Caixa) → **Vol. 10** (Caps. 40, 41 e 42: *Vertical SaaS, Serviços Profissionais B2B/Nearshoring e AI-Native*) |
| **3. Fundador Tech, SaaS B2B, AI-Native ou Deep Tech (*Lucas & Marina* / *Dra. Camila*)** | **Vol. 3** (Cap. 2: TRL/CRL/Gates e Cap. 6: Open Source) → **Vol. 4** (Cap. 10: Produto AI-Native) → **Vol. 7** (Fase 17 + Caps. 1 a 6: Arquitetura, Dívida Técnica e IA na Engenharia) → **Vol. 10** (Cap. 1: Economia da Inovação/TRL + Caps. 39, 40, 42, 43 e 44: *Horizontal/Vertical SaaS, AI-Native, Cybersecurity e DevTools*) |
| **4. Empreendedor do Agro, Pecuária, Commodities e Bioeconomia (*Dra. Camila*)** | **Vol. 5** (Cap. 5: Recebíveis/FIDC e Cap. 12: Finep/BNDES/FAPESP) → **Vol. 9** (Cap. 7: Hedge Cambial) → **Vol. 10** (Cap. 2: Hubs do Agro + Caps. 11 a 14: *Agritech, Pecuária de Precisão/AquaTech, Trading de Commodities/Barter/Silos/Arco Norte e Biocombustíveis/Bioinsumos/Irrigação/Bioeconomia Amazônica*) |
| **5. Indústria, Infraestrutura, Energia, Telecom e Operações Pesadas** | **Vol. 5** (Cap. 6: Bancos/BNDES, Cap. 7: Importação Ásia-Brasil e Cap. 12: Fomento) → **Vol. 6** (Cap. 2: Vendas Complexas Enterprise e Cap. 4: Grandes Corporações) → **Vol. 10** (Caps. 15 a 28: *Infratech, Energytech, Cleantech, Resíduos/Biometano/Florestal, Mining/Oil & Gas, Indústria 4.0, Hardware, Logtech, Mobitech, Consórcios/Rental/Aftermarket, Segurança/Facilities, Telecom/ISPs/Data Centers e Aerospace*) |
| **6. Varejo, Franquias, Marcas Próprias (D2C/Importação) e Serviços Locais (*Rafael & Bia*)** | **Vol. 2** (Cap. 1: Psicologia do Consumidor Brasileiro) → **Vol. 5** (Cap. 2: Tributário/IBS-CBS e Cap. 7: *Comércio Exterior, Importação Ásia-Brasil, Landed Cost e TTD 409*) → **Vol. 6** (Cap. 6: *Franchising, Licenciamento e COF, Lei 13.966*) → **Vol. 10** (Caps. 30 e 34 a 38: *Clínicas/Odonto/Estética/Farma, Retailtech, Foodtech, D2C/Wellness, Travel/Pet/Silver e Setor Funerário/Assistência Familiar*) |
| **7. Setores Fortemente Regulados (*Henrique* e *Dra. Camila*: Fintech, Crédito, Seguros, Saúde e Govtech)** | **Vol. 5** (Cap. 5: FIDCs) → **Vol. 8** (Fase 18 + Caps. 1, 9, 10, 11 e 13: Marco Legal, LGPD, Regulação de IA, Compliance e SOC 2/ISO 27001) → **Vol. 10** (Caps. 3 a 10 e 29 a 33: *Ciclos Macro/Selic, BCB/CVM/SUSEP/ANVISA/ANS, CADE, Políticas Públicas, Fintech, Crédito Digital, Insurtech, Wealthtech/Drex, Biotech/Healthtech, Saúde Física/OPME, Edtech, Govtech e Legaltech*) |
| **8. CEO em Escala, Consolidador (*Henrique*: M&A / Search Fund), Cash Cow e Family Office** | **Vol. 5** (Fase 14 + Caps. 9 a 11) → **Vol. 6** (Fases 15 e 16 + Caps. 8 a 13: Founder Mode, Contratação C-Level, ESOP e Cultura) → **Vol. 9** (Fases 19 e 20 + Caps. 1 a 21: *Conselho/Board, Empresas Familiares, Internacionalização, Crise/Turnaround, M&A Buy-Side/Roll-ups, Search Funds, Spin-offs/Carve-outs, Secondaries, IPO, Tributação de Exit e A Empresa Cash Cow + Holdings, Offshores e Family Office*) |`;

const EXTRA_GLOSSARY_BY_LETTER = {
  A: [
    `**Acordo de sócios (acordo de quotistas ou de acionistas).** Contrato parassocial (regido pelo art. 118 da Lei 6.404/1976) firmado entre os sócios para regular poder de voto, restrições à transferência de participação (lock-up, ROFR, tag-along, drag-along), vesting, resolução de impasses (shotgun) e governança. Ver [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]] e [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 3 — DISPUTA SOCIETÁRIA E SAÍDA DE SÓCIO|Capítulo 3 (Vol. 9)]].`,
    `**ACT (Acordo de Cooperação Técnica).** Instrumento jurídico público (Lei 14.133/2021, art. 184 e Marco Legal de CT&I) firmado entre órgãos públicos e startups ou instituições privadas sem transferência de recursos financeiros, utilizado para viabilizar descoberta de cliente, mapeamento de processos e testes de validação em ambiente municipal ou estadual real antes da licitação. Ver [[#CAPÍTULO 32 — GOVTECH: STARTUP VENDENDO PARA GOVERNO|Capítulo 32 (Vol. 10)]].`,
    `**Arco Norte.** Complexo logístico-portuário brasileiro localizado acima do paralelo 16°S (portos de Itaqui/MA, Barcarena/PA, Santarém/PA, Santana/AP e estações de transbordo hidroviário de Miritituba/Rio Tapajós e Porto Velho/Rio Madeira), responsável por cerca de um terço das exportações brasileiras de soja e milho (dados ANTAQ/CONAB, safra 2024/2025). Ver [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13 (Vol. 10)]].`,
  ],
  B: [
    `**Barter.** Operação triangular típica do agronegócio brasileiro em que o produtor rural adquire insumos (sementes, fertilizantes, defensivos) e paga com a entrega futura de parte física da sua produção (sacas de soja, milho, café ou algodão), formalizada via CPR e travada contra oscilação de preço na bolsa. Ver [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13 (Vol. 10)]].`,
    `**Basis (base).** Diferença entre o preço físico de uma commodity em determinada praça (no interior ou no litoral) e a cotação do contrato futuro de referência na bolsa internacional (CBOT ou ICE). Quando medida no porto de exportação (como Paranaguá, Santos ou Barcarena), chama-se prêmio de porto. Ver [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13 (Vol. 10)]].`,
    `**BECCS (Bioenergy with Carbon Capture and Storage, bioenergia com captura e armazenamento de carbono).** Captura e estocagem geológica de carbono associada à bioenergia. Como o CO2 liberado na fermentação do etanol de cana ou milho sai com pureza próxima a 99%, capturá-lo custa menos que em outras fontes industriais. Ver [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]].`,
    `**BESS (Battery Energy Storage System).** Sistemas de armazenamento de energia em baterias em escala comercial ou industrial, utilizados para arbitragem de tarifa no horário de ponta, backup crítico e estabilização de redes elétricas com alta penetração solar e eólica. Ver [[#CAPÍTULO 16 — ENERGYTECH: GERAÇÃO DISTRIBUÍDA, MERCADO LIVRE DE ENERGIA, SMART GRIDS E ARMAZENAMENTO|Capítulo 16 (Vol. 10)]].`,
    `**Bioinsumos.** Produtos de origem biológica (inoculantes fixadores de nitrogênio, bionematicidas, biofungicidas, bioinseticidas e extratos vegetais) utilizados na nutrição e no controle de pragas agrícolas, regulamentados pela Lei 15.070/2024. Ver [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]].`,
  ],
  C: [
    `**Carve-out (equity carve-out).** Operação societária em que uma empresa-mãe destaca uma unidade de negócio ou plataforma tecnológica para um novo CNPJ subsidiário e vende participação minoritária ou majoritária a investidores externos (ou em bolsa), destravando avaliação independente. Não confundir com spin-off, em que a nova empresa nasce distribuída aos próprios sócios da controladora. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 14 — SPIN-OFFS, CARVE-OUTS E VENTURE BUILDING CORPORATIVO: CRIANDO NOVAS EMPRESAS A PARTIR DE ATIVOS INTERNOS|Capítulo 14 (Vol. 9)]].`,
    `**Cash Cow (empresa pagadora de dividendos).** Companhia madura com posição competitiva defensável, baixa necessidade de reinvestimento em CapEx, alta geração de fluxo de caixa livre (FCF) e ROIC elevado, operada para distribuir dividendos recorrentes aos sócios em vez de buscar venda (exit). Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 21 — A EMPRESA CASH COW (DIVIDENDOS PERPÉTUOS), HOLDINGS PATRIMONIAIS, FAMILY OFFICE E GESTÃO DE FORTUNA PÓS-EXIT|Capítulo 21 (Vol. 9)]].`,
    `**CBIO (Crédito de Descarbonização).** Ativo ambiental financeiro emitido por produtores e importadores de biocombustíveis certificados no programa RenovaBio (Lei 13.576/2017) e negociado na B3, equivalente a 1 tonelada de CO2 evitada em comparação ao combustível fóssil. Ver [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]].`,
    `**COCP (Contrato de Opção de Subscrição ou Compra de Participação).** Instrumento previsto no Marco Legal das Startups (LC 182/2021, art. 5º, § 1º, I) e usado no Brasil para captação anjo/seed e planos de stock options com segurança jurídica de natureza mercantil, funcionando na prática como o equivalente brasileiro mais próximo do SAFE americano (sem natureza de dívida). Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 11 — INSTRUMENTOS DE CAPTAÇÃO: SAFE, NOTA CONVERSÍVEL E MÚTUO CONVERSÍVEL|Capítulo 11 (Vol. 5)]] e [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 1 — MARCO LEGAL DAS STARTUPS: LC 182/2021|Capítulo 1 (Vol. 8)]].`,
    `**COF (Circular de Oferta de Franquia).** Documento jurídico obrigatório regido pela Lei de Franquias (Lei 13.966/2019) que a franqueadora deve entregar ao candidato com no mínimo 10 dias de antecedência da assinatura de qualquer contrato ou pagamento de taxa, sob pena de anulabilidade e devolução integral dos valores corrigidos. Ver [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 6 — FRANCHISING, LICENCIAMENTO E EXPANSÃO DE REDES MULTI-UNIDADES (LEI 13.966/2019)|Capítulo 6 (Vol. 6)]].`,
    `**Consórcio.** Grupo de compra programada (Lei 11.795/2008) fiscalizado pelo BCB. A administradora cobra taxa de administração sobre o valor do crédito ao longo do plano sem risco de funding bancário, contemplando os consorciados por sorteio ou lance. Ver [[#CAPÍTULO 24 — CONSÓRCIOS ADMINISTRADOS (BACEN), RENTAL DE MÁQUINAS/FROTAS PESADAS E AFTERMARKET AUTOMOTIVO (AUTOPEÇAS, SEMINOVOS E LEILÕES)|Capítulo 24 (Vol. 10)]].`,
    `**CPR (Cédula de Produto Rural).** Título de crédito líquido e certo (Lei 8.929/1994, atualizada pela Lei 13.986/2020) emitido por produtor rural, associação ou cooperativa, representativo de promessa de entrega física de produtos rurais (CPR Física) ou liquidação financeira (CPR Financeira), base das operações de Barter e de securitização em CRAs e FIAGROs. Ver [[#CAPÍTULO 11 — AGRITECH: PLAYBOOK PARA O CAMPO BRASILEIRO|Capítulo 11 (Vol. 10)]] e [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13 (Vol. 10)]].`,
    `**CPSI (Contrato Público para Solução Inovadora).** Contrato firmado após licitação na modalidade especial criada pelo Marco Legal das Startups (LC 182/2021, arts. 13 e 14) para testar solução inovadora na administração pública por até R$ 1,6 milhão por contrato (valores originais sujeitos a atualização anual), com possibilidade de contrato posterior de fornecimento de até cinco vezes esse valor (R$ 8 milhões) sem nova licitação. Ver [[#CAPÍTULO 32 — GOVTECH: STARTUP VENDENDO PARA GOVERNO|Capítulo 32 (Vol. 10)]].`,
  ],
  D: [
    `**D2C (Direct-to-Consumer, venda direta ao consumidor).** Modelo de negócio em que uma marca de bens de consumo (beleza, vestuário, suplementos, alimentos, bem-estar) fabrica ou terceiriza a produção sob marca própria e vende diretamente ao consumidor final via e-commerce e lojas físicas próprias, capturando a margem do distribuidor e os dados primários do cliente. Ver [[#CAPÍTULO 36 — MARCAS NATIVAS DIGITAIS (D2C), BELEZA, MODA, BENS DE CONSUMO (CPG) E WELLNESS/FITNESS|Capítulo 36 (Vol. 10)]].`,
    `**DDGS (Dried Distillers Grains with Solubles).** Coproduto proteico de alto valor nutricional resultante da produção de etanol de milho, amplamente utilizado na nutrição de bovinos de corte e leite, aves, suínos e piscicultura. Ver [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]].`,
    `**Dívida técnica (technical debt).** Custo futuro de retrabalho decorrente de decisões técnicas tomadas no curto prazo para ganhar velocidade de lançamento. Assim como a dívida financeira, acumula juros na forma de lentidão progressiva da engenharia e instabilidade em produção se não for amortizada com disciplina. Ver [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 4 — ENGINEERING MANAGEMENT, DEVELOPER EXPERIENCE E GESTÃO DE DÍVIDA TÉCNICA|Capítulo 4 (Vol. 7)]].`,
    `**Drex (Real Digital).** Plataforma do BCB para registro, liquidação e reconciliação de ativos financeiros e garantias, nome dado em 2023 ao projeto do antigo Real Digital. Em 2025, o BCB reorientou a primeira fase operacional (prevista para 2026) para conciliação de gravames sem blockchain descentralizada, mantendo a agenda de testes de ativos reais tokenizados (RWA) para fases seguintes. Ver [[#CAPÍTULO 10 — WEALTHTECH, MERCADO DE CAPITAIS, GESTÃO PATRIMONIAL, CRIPTO E TOKENIZAÇÃO DE ATIVOS (DREX E RWA)|Capítulo 10 (Vol. 10)]].`,
  ],
  E: [
    `**Embedded Finance (finanças embarcadas).** Integração nativa de produtos financeiros (pagamentos, conta digital, antecipação de recebíveis, capital de giro, seguros) dentro da jornada de um software não financeiro (como um Vertical SaaS ou marketplace), utilizando infraestrutura de BaaS ou FIDC próprio. Ver [[#CAPÍTULO 7 — FINTECH: PAGAMENTOS, BANKING-AS-A-SERVICE (BAAS), PIX, OPEN FINANCE E INFRAESTRUTURA FINANCEIRA|Capítulo 7 (Vol. 10)]] e [[#CAPÍTULO 40 — VERTICAL SAAS: SISTEMAS OPERACIONAIS SETORIAIS COM PAGAMENTOS, CRÉDITO E IA EMBARCADOS|Capítulo 40 (Vol. 10)]].`,
    `**Equiparação Hospitalar.** Percentual reduzido de presunção dentro do Lucro Presumido (8% para IRPJ e 12% para CSLL, em vez de 32%) previsto na Lei 9.249/1995 (art. 15, § 1º, III, "a" e Tema 217 do STJ) para clínicas médicas e odontológicas constituídas como sociedade empresária e que cumpram os requisitos sanitários da ANVISA (RDC 50/2002) em serviços cirúrgicos, diagnósticos e terapêuticos. Pela LC 224/2025, a parcela de receita bruta anual acima de R$ 5 milhões sofre acréscimo de 10% sobre os percentuais de presunção. Ver [[#CAPÍTULO 30 — SAÚDE FÍSICA PRIVADA: REDES DE CLÍNICAS MÉDICAS E ODONTOLÓGICAS, ESTÉTICA AVANÇADA, MEDICINA DIAGNÓSTICA, FARMÁCIAS MAGISTRAIS E OPME|Capítulo 30 (Vol. 10)]].`,
    `**Equity (participação societária).** Fração do capital social de uma empresa representada por quotas (na LTDA) ou ações (na S.A.). É o ativo de longo prazo usado pelos fundadores para dividir a sociedade, atrair executivos via ESOP e captar recursos de investidores-anjo e fundos de Venture Capital. Ver [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]] e [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]].`,
    `**EUDR (European Union Deforestation Regulation).** Regulamento (UE) 2023/1115 que veda a entrada no mercado europeu de sete commodities (gado bovino, cacau, café, óleo de palma, borracha, soja e madeira, além de derivados como couro, carne e papel) oriundas de áreas desmatadas após 31 de dezembro de 2020, exigindo geolocalização por polígonos e rastreabilidade completa (com aplicação escalonada a partir de dezembro de 2025/2026 conforme o porte do operador). Ver [[#CAPÍTULO 12 — PECUÁRIA DE PRECISÃO (PECTECH), PROTEÍNA ANIMAL, GENÉTICA BOVINA (FIV), RASTREABILIDADE E AQUICULTURA (AQUATECH)|Capítulo 12 (Vol. 10)]].`,
  ],
  F: [
    `**Family Office (SFO / MFO).** Estrutura dedicada à governança, alocação patrimonial, planejamento tributário e sucessão da fortuna de uma única família (Single Family Office, SFO) ou de múltiplas famílias (Multi-Family Office, MFO) após eventos de liquidez (exit) ou acúmulo de dividendos. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 21 — A EMPRESA CASH COW (DIVIDENDOS PERPÉTUOS), HOLDINGS PATRIMONIAIS, FAMILY OFFICE E GESTÃO DE FORTUNA PÓS-EXIT|Capítulo 21 (Vol. 9)]].`,
    `**FAR e FRR (False Acceptance Rate e False Rejection Rate).** Métricas de acurácia de sistemas de biometria e antifraude: FAR mede a taxa de falsa aceitação (deixar passar um fraudador ou impostor) e FRR mede a taxa de falsa rejeição (barrar um usuário legítimo no onboarding ou pagamento). Ver [[#CAPÍTULO 43 — CYBERSECURITY, IDENTIDADE DIGITAL, BIOMETRIA, PREVENÇÃO A FRAUDES E PRIVACIDADE|Capítulo 43 (Vol. 10)]] e [[#CAPÍTULO 48 — GAMING, ESTÚDIOS DE JOGOS, E-SPORTS, APOSTAS REGULADAS (IGAMING/BETS) E ECONOMIA VIRTUAL|Capítulo 48 (Vol. 10)]].`,
    `**Fator R.** Regra tributária do Simples Nacional (LC 123/2006) que permite a empresas de serviços intelectuais, de tecnologia e de saúde tributarem pelo Anexo III (alíquota inicial de 6%) em vez do Anexo V (inicial de 15,5%) quando a folha de salários, pró-labore e encargos dos últimos 12 meses representa 28% ou mais da receita bruta do mesmo período. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 2 — CONTABILIDADE, REGIMES FISCAIS E TRIBUTÁRIO ESTRATÉGICO (REFORMA IBS/CBS E INCENTIVOS)|Capítulo 2 (Vol. 5)]].`,
    `**FIDC (Fundo de Investimento em Direitos Creditórios).** Veículo de securitização regulado pela CVM (Resolução CVM 175/2022, Anexo Normativo II) que adquire recebíveis comerciais, duplicatas, parcelas de cartão ou CCBs de crédito, dividindo o risco entre cotas sênior (renda fixa institucional), mezanino e subordinada (primeira perda retida pelo originador). Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 5 — CAPITAL DE GIRO, RECEBÍVEIS E GESTÃO DE CAIXA EM PROFUNDIDADE|Capítulo 5 (Vol. 5)]] e [[#CAPÍTULO 8 — CRÉDITO DIGITAL, LENDING, SECURITIZAÇÃO (FIDCS), ANTECIPAÇÃO DE RECEBÍVEIS E COBRANÇA|Capítulo 8 (Vol. 10)]].`,
    `**FIV (Fertilização In Vitro).** Produção de embriões em laboratório, aplicada tanto na pecuária (aspiração folicular OPU-FIV) quanto na reprodução humana assistida. O Brasil figura ao lado dos Estados Unidos entre os maiores produtores mundiais de embriões bovinos in vitro (relatórios anuais IETS/SBTE). Ver [[#CAPÍTULO 12 — PECUÁRIA DE PRECISÃO (PECTECH), PROTEÍNA ANIMAL, GENÉTICA BOVINA (FIV), RASTREABILIDADE E AQUICULTURA (AQUATECH)|Capítulo 12 (Vol. 10)]].`,
    `**Franquia (franchising).** Sistema contratual regido pela Lei 13.966/2019 pelo qual o franqueador cede ao franqueado o direito de uso de marca, know-how operacional e suporte contínuo em troca de taxa inicial de franquia e royalties periódicos, sem caracterizar vínculo empregatício nem grupo econômico quando respeitada a autonomia do franqueado. Ver [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 6 — FRANCHISING, LICENCIAMENTO E EXPANSÃO DE REDES MULTI-UNIDADES (LEI 13.966/2019)|Capítulo 6 (Vol. 6)]].`,
  ],
  H: [
    `**Holding (holding familiar e patrimonial).** Sociedade constituída para deter participações societárias em empresas operacionais (holding pura ou mista) ou bens imóveis e ativos financeiros da família, utilizada para governança sucessória, proteção patrimonial lícita e eficiência no recebimento de dividendos. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 21 — A EMPRESA CASH COW (DIVIDENDOS PERPÉTUOS), HOLDINGS PATRIMONIAIS, FAMILY OFFICE E GESTÃO DE FORTUNA PÓS-EXIT|Capítulo 21 (Vol. 9)]].`,
  ],
  I: [
    `**IA generativa e LLM (Large Language Model).** Modelos fundacionais de inteligência artificial treinados em grandes volumes de dados para gerar texto, código, imagem, áudio e ações estruturadas (agentes), Frequentemente combinados a bases proprietárias via RAG (Retrieval-Augmented Generation). Em startups, atuam tanto como acelerador de produtividade interna quanto como componente central de produtos AI-native (cujo custo de inferência impacta diretamente o COGS e a margem bruta). Ver [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 10 — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)|Capítulo 10 (Vol. 1)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 10 — AI COMO PARTE DO PRODUTO (AI-NATIVE PRODUCT)|Capítulo 10 (Vol. 4)]] e [[#CAPÍTULO 42 — AI-NATIVE, MODELOS FUNDACIONAIS, AGENTES AUTÔNOMOS, INFRAESTRUTURA DE DADOS E MLOPS|Capítulo 42 (Vol. 10)]].`,
    `**Investidor-anjo.** Pessoa física (empresário, executivo ou fundador experiente) que investe capital próprio nos estágios iniciais de uma startup (pré-seed e seed), agregando mentoria e rede de contatos. No Brasil, a LC 155/2016 e o Marco Legal das Startups (LC 182/2021) blindam o investidor-anjo contra responsabilidade por dívidas da empresa quando não exerce poder de gerência. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]] e [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 1 — MARCO LEGAL DAS STARTUPS: LC 182/2021|Capítulo 1 (Vol. 8)]].`,
    `**ISP (Internet Service Provider, provedor de acesso à internet).** Operadora que fornece conectividade à internet. Neste livro, designa sobretudo os provedores regionais de fibra óptica (FTTH) do interior e das periferias brasileiras, que operam mediante outorga de SCM (Serviço de Comunicação Multimídia) da ANATEL ou dispensa de autorização para pequeno porte. Ver [[#CAPÍTULO 27 — TELECOMUNICAÇÕES, PROVEDORES REGIONAIS DE FIBRA (ISPS), REDES PRIVATIVAS 5G, TORRES E DATA CENTERS DE IA|Capítulo 27 (Vol. 10)]].`,
  ],
  L: [
    `**Landed Cost (custo internado).** Custo total final de uma mercadoria importada posta no armazém do importador no Brasil. Na composição de 2026, soma preço FOB, frete e seguro internacional, AFRMM (no modal marítimo), taxa Siscomex, Imposto de Importação (II), IPI, PIS/COFINS-Importação, ICMS "por dentro" e despesas aduaneiras. Com a Reforma Tributária (LC 214/2025), PIS/COFINS-Importação dão lugar à CBS em 2027, o IPI é zerado para a maioria dos produtos e o ICMS é gradualmente substituído pelo IBS entre 2029 e 2033. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 7 — COMÉRCIO EXTERIOR, IMPORTAÇÃO (ÁSIA-BRASIL), DESEMBARAÇO ADUANEIRO, TRIBUTAÇÃO EM CASCATA E BENEFÍCIOS FISCAIS ESTADUAIS|Capítulo 7 (Vol. 5)]].`,
    `**Lucro Presumido.** Regime tributário federal para empresas com faturamento anual de até R$ 78 milhões em que o IRPJ e a CSLL incidem sobre uma margem de lucro pré-fixada pela lei (em regra 32% para serviços e 8%/12% para comércio, indústria e serviços com equiparação hospitalar), acrescido de PIS e COFINS cumulativos (3,65%) até a entrada plena da CBS em 2027. Pela LC 224/2025, a parcela de receita bruta anual acima de R$ 5 milhões sofre acréscimo de 10% nos percentuais de presunção. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 2 — CONTABILIDADE, REGIMES FISCAIS E TRIBUTÁRIO ESTRATÉGICO (REFORMA IBS/CBS E INCENTIVOS)|Capítulo 2 (Vol. 5)]].`,
    `**Lucro Real.** Regime tributário geral (obrigatório acima de R$ 78 milhões anuais ou para atividades financeiras/securitização) em que o IRPJ e a CSLL são calculados sobre o lucro contábil efetivo ajustado pelo LALUR. É o regime ideal para startups em fase de queima de caixa (prejuízo fiscal não paga IRPJ/CSLL), operações de margem estreita e empresas que utilizam os incentivos fiscais de P&D da Lei do Bem (Lei 11.196/2005). Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 2 — CONTABILIDADE, REGIMES FISCAIS E TRIBUTÁRIO ESTRATÉGICO (REFORMA IBS/CBS E INCENTIVOS)|Capítulo 2 (Vol. 5)]].`,
  ],
  M: [
    `**Mútuo conversível.** Contrato de empréstimo em dinheiro firmado entre o investidor e a startup (regido pelo Código Civil e reconhecido na LC 182/2021) cujo saldo devedor é convertido em participação societária em evento futuro (rodada qualificada, exit ou vencimento). Por ter natureza jurídica de dívida até a conversão, exige atenção contábil e contratual para afastar risco de cobrança em dinheiro se a startup não prosperar. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 11 — INSTRUMENTOS DE CAPTAÇÃO: SAFE, NOTA CONVERSÍVEL E MÚTUO CONVERSÍVEL|Capítulo 11 (Vol. 5)]].`,
  ],
  N: [
    `**Nearshoring (exportação de engenharia).** Modelo de negócios em que consultorias e software houses brasileiras exportam squads de engenharia de software, dados e IA para clientes nos Estados Unidos e Europa, combinando alinhamento de fuso horário (UTC-3) com arbitragem cambial (receita em dólar e folha em reais) e isenção de tributos indiretos na exportação de serviços. Ver [[#CAPÍTULO 41 — SERVIÇOS PROFISSIONAIS B2B DE ALTA MARGEM, CONSULTORIAS, SOFTWARE HOUSES, EXPORTAÇÃO DE ENGENHARIA (NEARSHORING) E BPO|Capítulo 41 (Vol. 10)]].`,
  ],
  O: [
    `**OPME (Órteses, Próteses e Materiais Especiais).** Insumos médicos de alto valor utilizados em procedimentos cirúrgicos e invasivos (stents, marca-passos, implantes ortopédicos e odontológicos), cujo ciclo de cotação, rastreabilidade ANVISA e auditoria de glosas responde por parcela crítica do custo hospitalar e odontológico. Ver [[#CAPÍTULO 30 — SAÚDE FÍSICA PRIVADA: REDES DE CLÍNICAS MÉDICAS E ODONTOLÓGICAS, ESTÉTICA AVANÇADA, MEDICINA DIAGNÓSTICA, FARMÁCIAS MAGISTRAIS E OPME|Capítulo 30 (Vol. 10)]].`,
  ],
  P: [
    `**Phantom shares (ações fantasmas).** Instrumento contratual de incentivo de longo prazo em que o colaborador recebe o direito a um bônus financeiro atrelado à valorização das quotas ou ações da empresa (tipicamente pago em evento de liquidez como M&A ou IPO), sem se tornar sócio no contrato social. Muito usado em sociedades limitadas (LTDAs) antes da transformação em S.A. Ver [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 12 — STOCK OPTIONS E ESOP NO BRASIL|Capítulo 12 (Vol. 6)]].`,
    `**Pipeline (funil de vendas).** Conjunto estruturado de oportunidades comerciais em andamento, organizadas por etapas desde a prospecção (MQL/SQL) até o fechamento do contrato (closing). A cobertura de pipeline (pipeline coverage, tipicamente de 3x a 4x a meta do trimestre) é o principal indicador antecedente da receita futura. Ver [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]] e [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 3 — REVENUE OPERATIONS: INFRAESTRUTURA, DADOS E PROCESSO PARA CRESCER COM PREVISIBILIDADE|Capítulo 3 (Vol. 6)]].`,
    `**Pitch e Pitch Deck.** Apresentação concisa (verbal e visual, tipicamente em 10 a 15 slides estruturados na lógica SCQA) pela qual o fundador comunica o problema, a solução, a tração, o mercado, o modelo de negócio, o time e o uso dos recursos para investidores, clientes corporativos ou bancas de fomento. Ver [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 9 — APRESENTAÇÃO E FALA EM PÚBLICO|Capítulo 9 (Vol. 1)]] e [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].`,
    `**Pix.** Sistema de pagamentos instantâneos criado e operado pelo Banco Central do Brasil (BCB), lançado em novembro de 2020. Funciona 24/7 com liquidação em segundos via SPI (Sistema de Pagamentos Instantâneos) e modalidades como Pix Automático, Pix Cobrança e Pix Garantido. Ver [[#CAPÍTULO 7 — FINTECH: PAGAMENTOS, BANKING-AS-A-SERVICE (BAAS), PIX, OPEN FINANCE E INFRAESTRUTURA FINANCEIRA|Capítulo 7 (Vol. 10)]].`,
    `**Productized Service (serviço produtizado).** Serviço B2B ou B2C empacotado como se fosse um produto: escopo fechado, entregável padronizado, preço fixo mensal recorrente, SLA definido e procedimentos operacionais padrão (SOPs), servindo como ponte de bootstrapping para financiar a criação de um SaaS próprio sem diluição precoce. Ver [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 7 — BOOTSTRAPPING, SERVIÇOS PRODUTIZADOS (PRODUCTIZED SERVICES) E A TRANSIÇÃO SERVICE-TO-PRODUCT|Capítulo 7 (Vol. 3)]].`,
  ],
  R: [
    `**Rental (locação pesada de ativos).** Modelo de negócios intensivo em capital baseado na compra de frotas de caminhões, máquinas de linha amarela, equipamentos agrícolas ou industriais com desconto de montadora (OEM), locação de longo prazo (36 a 60 meses) dedutível como OpEx no Lucro Real do cliente e posterior revenda do ativo seminovo. Ver [[#CAPÍTULO 24 — CONSÓRCIOS ADMINISTRADOS (BACEN), RENTAL DE MÁQUINAS/FROTAS PESADAS E AFTERMARKET AUTOMOTIVO (AUTOPEÇAS, SEMINOVOS E LEILÕES)|Capítulo 24 (Vol. 10)]].`,
    `**RWA (Real World Assets, ativos reais tokenizados).** Representação digital em infraestrutura de registro distribuído (DLT ou blockchain) de ativos do mundo real, como recebíveis comerciais, cotas de FIDC, créditos de carbono, imóveis, títulos do agronegócio (CPR/CRA) e títulos públicos. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 14 — CAPTAÇÃO ALTERNATIVA DIGITAL: EQUITY CROWDFUNDING (CVM 88) E TOKENIZAÇÃO DE ATIVOS|Capítulo 14 (Vol. 5)]] e [[#CAPÍTULO 10 — WEALTHTECH, MERCADO DE CAPITAIS, GESTÃO PATRIMONIAL, CRIPTO E TOKENIZAÇÃO DE ATIVOS (DREX E RWA)|Capítulo 10 (Vol. 10)]].`,
  ],
  S: [
    `**SAF (Sustainable Aviation Fuel, combustível sustentável de aviação).** Biocombustível sintético ou derivado de matérias-primas renováveis (etanol via rota Alcohol-to-Jet, óleo de soja, macaúba ou sebo bovino via rota HEFA) certificado para misturar ao querosene de aviação fóssil e reduzir as emissões do ciclo de vida. No Brasil, a Lei do Combustível do Futuro (Lei 14.993/2024) fixa metas crescentes de descarbonização para companhias aéreas a partir de 2027. Ver [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]].`,
    `**Search Fund (ETA, Entrepreneurship Through Acquisition).** Veículo de investimento em que um ou dois empreendedores (searchers) captam capital de investidores em duas etapas para buscar, adquirir, assumir como CEO e escalar uma única empresa madura, lucrativa e com geração recorrente de caixa. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 13 — SEARCH FUNDS E ETA (ENTREPRENEURSHIP THROUGH ACQUISITION)|Capítulo 13 (Vol. 9)]].`,
    `**Secondaries (liquidez secundária).** Compra e venda de ações ou quotas já existentes de uma startup (detidas por fundadores, executivos com opções exercidas ou investidores de rodadas iniciais) para novos investidores ou fundos especializados antes de um exit total (M&A ou IPO), sem emissão de novas ações pela companhia. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 15 — LIQUIDEZ SECUNDÁRIA (SECONDARIES): REALIZAÇÃO PARCIAL DE CAPITAL PARA FUNDADORES, EXECUTIVOS E INVESTIDORES ANTES DO EXIT|Capítulo 15 (Vol. 9)]].`,
    `**Série A.** Primeira rodada institucional de Venture Capital após a comprovação do Product-Market Fit e da eficiência inicial de aquisição (unit economics). No Brasil, situa-se tipicamente na faixa de R$ 15 milhões a R$ 60 milhões, exigindo governança formal (conselho, auditoria e transformação em S.A. ou flip internacional). Ver [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]] e [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]].`,
    `**Simples Nacional.** Regime tributário simplificado (LC 123/2006) para Microempresas (ME, receita bruta anual até R$ 360 mil) e Empresas de Pequeno Porte (EPP, até R$ 4,8 milhões), que recolhe tributos federais, ICMS e ISS em guia única (DAS). Na Reforma Tributária (LC 214/2025), o optante pelo Simples pode permanecer no regime unificado ou optar por apurar IBS e CBS pelo regime regular para transferir créditos integrais a clientes B2B. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 2 — CONTABILIDADE, REGIMES FISCAIS E TRIBUTÁRIO ESTRATÉGICO (REFORMA IBS/CBS E INCENTIVOS)|Capítulo 2 (Vol. 5)]].`,
    `**SISBOV (Serviço de Rastreabilidade da Cadeia Produtiva de Bovinos e Bubalinos).** Sistema oficial do MAPA para certificação e rastreabilidade individual de bovinos e bubalinos do nascimento ao abate, complementado pelo Plano Nacional de Identificação Individual de Bovinos e Búfalos (PNIB) para atender mercados exportadores e exigências como a EUDR. Ver [[#CAPÍTULO 12 — PECUÁRIA DE PRECISÃO (PECTECH), PROTEÍNA ANIMAL, GENÉTICA BOVINA (FIV), RASTREABILIDADE E AQUICULTURA (AQUATECH)|Capítulo 12 (Vol. 10)]].`,
    `**SisGen (Sistema Nacional de Gestão do Patrimônio Genético).** Sistema eletrônico do Ministério do Meio Ambiente (Lei 13.123/2015) onde empresas de biotecnologia, cosméticos, fármacos e alimentos devem cadastrar obrigatoriamente o acesso ao patrimônio genético ou ao conhecimento tradicional associado da biodiversidade brasileira antes da comercialização ou do pedido de patente. Ver [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14 (Vol. 10)]].`,
    `**Spin-off.** Operação societária em que uma nova empresa independente nasce a partir de uma unidade de negócio, tecnologia ou laboratório (spin-off corporativo ou acadêmico), mantendo inicialmente os mesmos sócios da controladora (no Brasil, em geral executada por cisão parcial). Não confundir com carve-out, em que parte do capital da unidade destacada é vendida a investidores externos. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 14 — SPIN-OFFS, CARVE-OUTS E VENTURE BUILDING CORPORATIVO: CRIANDO NOVAS EMPRESAS A PARTIR DE ATIVOS INTERNOS|Capítulo 14 (Vol. 9)]].`,
  ],
  T: [
    `**TTD 409/410 (Tratamento Tributário Diferenciado, SC).** Benefício fiscal estadual de Santa Catarina (consolidado no RICMS/SC) que difere o ICMS na importação portuária ou aeroportuária e reduz a carga efetiva nas saídas interestaduais (sujeitas à alíquota interestadual de 4% da Resolução do Senado 13/2012). Pela EC 132/2023 e LC 214/2025, os incentivos de ICMS têm prazo de extinção: começam a ser reduzidos na transição de 2029 a 2032 (compensados pelo Fundo de Compensação de Benefícios Fiscais) e se encerram em 2033 com a vigência plena do IBS. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 7 — COMÉRCIO EXTERIOR, IMPORTAÇÃO (ÁSIA-BRASIL), DESEMBARAÇO ADUANEIRO, TRIBUTAÇÃO EM CASCATA E BENEFÍCIOS FISCAIS ESTADUAIS|Capítulo 7 (Vol. 5)]].`,
  ],
  V: [
    `**Vertical SaaS.** Software em nuvem construído especificamente para ser o sistema operacional de missão crítica de um único setor (como clínicas odontológicas, oficinas mecânicas, transportadoras, fazendas, salões ou escolas), multiplicando sua receita por cliente ao embutir pagamentos, crédito, seguros (Embedded Finance) e agentes de IA no fluxo de trabalho diário. Ver [[#CAPÍTULO 40 — VERTICAL SAAS: SISTEMAS OPERACIONAIS SETORIAIS COM PAGAMENTOS, CRÉDITO E IA EMBARCADOS|Capítulo 40 (Vol. 10)]].`,
  ],
};

function sortGlossaryParagraphs(sectionContent) {
  const paras = sectionContent
    .trim()
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
  paras.sort((a, b) => {
    const keyA = a.replace(/^\*\*([^*]+?)\.\*\*[\s\S]*$/, '$1').trim();
    const keyB = b.replace(/^\*\*([^*]+?)\.\*\*[\s\S]*$/, '$1').trim();
    return keyA.localeCompare(keyB, 'pt-BR', { sensitivity: 'base' });
  });
  return paras.join('\n\n');
}

function enrichRawGlossaryBody(body) {
  let out = body;

  // 1) Ajustar nota introdutória (#5455)
  out = out.replace(
    'a definição autoritativa está aqui.',
    'a definição de referência está aqui.'
  );

  // 2) Remover verbete duplicado ou órfão do corpo base antes de inserir novos (#5462, #5479, #5491, #5498)
  out = out
    .replace(/^\*\*FRR \(Feature Request Rate\)\.\*\*[^\n]+\n+/m, '')
    .replace(/^\*\*Market fit\.\*\*[^\n]+\n+/m, '')
    .replace(/^\*\*Parity feature\.\*\*[^\n]+\n+/m, '');

  // 3) Corrigir verbetes existentes no corpo base (#5458..#5514)
  const baseReplacements = [
    [
      /^\*\*ANPD \(Autoridade Nacional de Proteção de Dados\)\.\*\*[^\n]+/m,
      '**ANPD (Agência Nacional de Proteção de Dados).** Agência reguladora federal brasileira (transformada de Autoridade em Agência pela MP 1.317/2025, com competência também sobre o ECA Digital, Lei 15.211/2025) responsável por fiscalizar e aplicar a LGPD. Pode aplicar sanções e multas de até 2% do faturamento no Brasil (limitadas a R$ 50 milhões por infração). Ver [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 9 — LGPD, COMPLIANCE E GOVERNANÇA DE DADOS|Capítulo 9 (Vol. 8)]].',
    ],
    [
      /^\*\*ARR \(Annual Recurring Revenue\)\.\*\*[^\n]+/m,
      '**ARR (Annual Recurring Revenue, receita recorrente anual).** Soma anualizada de todos os contratos recorrentes ativos (ARR = MRR × 12). Principal métrica de escala em empresas SaaS e de assinatura. Ver [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]] e [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
    [
      /^\*\*BaaS \(Banking as a Service\)\.\*\*[^\n]+/m,
      '**BaaS (Banking as a Service).** Serviço regulado em que uma instituição autorizada pelo BCB (banco, Instituição de Pagamento ou SCD) cede infraestrutura tecnológica e licença regulatória via API para que empresas não financeiras (varejistas, ERPs, plataformas) ofereçam conta digital, Pix, cartões e crédito embutidos em seus produtos (Embedded Finance). Ver [[#CAPÍTULO 7 — FINTECH: PAGAMENTOS, BANKING-AS-A-SERVICE (BAAS), PIX, OPEN FINANCE E INFRAESTRUTURA FINANCEIRA|Capítulo 7 (Vol. 10)]].',
    ],
    [
      /^\*\*BCB \(Banco Central do Brasil\)\.\*\*[^\n]+/m,
      '**BCB (Banco Central do Brasil, também Bacen).** Autoridade monetária e autarquia reguladora do Sistema Financeiro Nacional e do Sistema de Pagamentos Brasileiro. Regula bancos, cooperativas, Instituições de Pagamento (IPs), SCDs, SEPs, administradoras de consórcio, o Pix e o Open Finance. Ver [[#CAPÍTULO 4 — REGULATÓRIO SETORIAL BRASILEIRO|Capítulo 4 (Vol. 10)]] e [[#CAPÍTULO 7 — FINTECH: PAGAMENTOS, BANKING-AS-A-SERVICE (BAAS), PIX, OPEN FINANCE E INFRAESTRUTURA FINANCEIRA|Capítulo 7 (Vol. 10)]].',
    ],
    [
      /^\*\*Board\.\*\*[^\n]+/m,
      '**Conselho (board).** Órgão colegiado de governança. Na prática das startups, divide-se entre conselho consultivo (advisory board, informal e sem poder de veto societário, comum no estágio inicial) e conselho de administração (órgão deliberativo formal das S.A., tipicamente com 3 a 5 membros representando fundadores, investidores e conselheiros independentes a partir da Série A). Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 1 — BOARD E GOVERNANCE|Capítulo 1 (Vol. 9)]].',
    ],
    [
      /^\*\*Burn Multiple\.\*\*[^\n]+/m,
      '**Burn Multiple.** Queima líquida de caixa (net burn) dividida pelo novo ARR líquido (net new ARR) adicionado no mesmo período (conceito de David Sacks). Mede quantos reais a empresa queima para gerar R$ 1 de nova receita anual recorrente. Referência: abaixo de 1x excelente, de 1x a 2x bom, de 2x a 3x atenção, acima de 3x ineficiente. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
    [
      /^\*\*Burn rate\.\*\*[^\n]+/m,
      '**Burn rate (taxa de queima de caixa).** Velocidade mensal de consumo de caixa (burn bruto = total de saídas; burn líquido = saídas menos entradas operacionais do mês). Caixa disponível dividido pelo burn líquido mensal define o runway. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
    [
      /^\*\*CAC \(Customer Acquisition Cost\)\.\*\*[^\n]+/m,
      '**CAC (Customer Acquisition Cost, custo de aquisição de cliente).** Soma total dos gastos de marketing e vendas (incluindo mídia, ferramentas e salários/comissões comerciais) dividida pelo número de novos clientes conquistados no período. Deve ser apurado por canal (CAC pago vs. CAC misto ou total) para evitar que o tráfego orgânico mascare canais pagos deficitários. Ver [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]] e [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
    [
      /^\*\*Carta de intenção \(LOI, Letter of Intent\)\.\*\*[^\n]+/m,
      '**Carta de intenção (LOI, Letter of Intent).** Documento preliminar em regra não vinculante (exceto nas cláusulas de confidencialidade e exclusividade) que formaliza a intenção e as bases econômicas de uma transação comercial, rodada ou aquisição (M&A) antes da due diligence completa. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]].',
    ],
    [
      /^\*\*Cliff \(de vesting\)\.\*\*[^\n]+/m,
      '**Cliff (de vesting).** Período inicial de carência do vesting durante o qual nenhuma fração da participação societária é adquirida. Tipicamente de 12 meses para cofundadores e executivos: quem se desliga antes de completar um ano sai sem adquirir participação. Ver [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]].',
    ],
    [
      /^\*\*Cofundador\.\*\*[^\n]+/m,
      '**Cofundador.** Pessoa que funda a empresa em conjunto com um ou mais sócios desde o estágio inicial, assumindo risco empreendedor compartilhado. Equivale ao inglês co-founder; este livro adota o termo em português. Ver [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]] e [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 2 — SAÚDE MENTAL, DINÂMICA DE CO-FOUNDERS E HUMANIDADE DO FUNDADOR|Capítulo 2 (Vol. 1)]].',
    ],
    [
      /^\*\*Delaware Flip\.\*\*[^\n]+/m,
      '**Delaware Flip (e estrutura Cayman/Delaware).** Reestruturação societária internacional pela qual os sócios de uma startup brasileira passam a deter uma holding no exterior (frequentemente uma holding nas Ilhas Cayman no topo ou em estrutura "sanduíche" Cayman/Delaware LLC) que passa a ser a controladora de 100% da operacional brasileira. Exige avaliação tributária prévia porque a permuta de participações pode acionar ganho de capital no Brasil e porque a Lei 14.754/2023 alterou a tributação anual de controladas no exterior na pessoa física. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 5 — INTERNACIONALIZAÇÃO: ESTRUTURA E PRODUTO PARA MÚLTIPLOS MERCADOS|Capítulo 5 (Vol. 9)]].',
    ],
    [
      /^\*\*Dilution\.\*\*[^\n]+/m,
      '**Diluição (dilution).** Redução da participação percentual de um sócio ou acionista em decorrência da emissão de novas quotas ou ações em rodadas de captação ou na criação do pool de opções (ESOP). Ver [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
    [
      /^\*\*DPA \(Data Processing Agreement\)\.\*\*[^\n]+/m,
      '**DPA (Data Processing Agreement, adendo de tratamento de dados).** Contrato ou anexo entre controlador e operador de dados pessoais que fixa instruções de tratamento, medidas de segurança e responsabilidades. A LGPD não exige formalmente um documento com esse título, mas o DPA comprova que o operador segue as instruções do controlador (art. 39 da LGPD); no GDPR europeu (art. 28), o contrato escrito é obrigatório. Ver [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 9 — LGPD, COMPLIANCE E GOVERNANÇA DE DADOS|Capítulo 9 (Vol. 8)]].',
    ],
    [
      /^\*\*DPO \(Data Protection Officer\)\.\*\*[^\n]+/m,
      '**DPO (Data Protection Officer, encarregado de proteção de dados).** Pessoa indicada pelo controlador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD. Pela LGPD (art. 41), todo controlador deve indicar encarregado, mas a Resolução CD/ANPD nº 2/2022 dispensa agentes de pequeno porte (startups, MEs e EPPs) que não realizem tratamento de alto risco, desde que disponibilizem canal de atendimento aos titulares. Ver [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 9 — LGPD, COMPLIANCE E GOVERNANÇA DE DADOS|Capítulo 9 (Vol. 8)]].',
    ],
    [
      /^\*\*Dual-Track Agile\.\*\*[^\n]+/m,
      '**Dual-Track Agile.** Modelo descrito por Desirée Sy (2007) e popularizado por Marty Cagan e Jeff Patton, em que descoberta contínua (discovery) e entrega de engenharia (delivery) correm em trilhos paralelos e sincronizados. Ver [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 1 — PRODUTO EM ESCALA E DESCOBERTA CONTÍNUA|Capítulo 1 (Vol. 7)]].',
    ],
    [
      /^\*\*Founder Mode\.\*\*[^\n]+/m,
      '**Founder Mode (modo fundador).** Estilo de liderança direta do fundador-CEO em fase de crescimento e escala (conceito articulado por Brian Chesky e Paul Graham em 2024), caracterizado por envolvimento profundo nos detalhes críticos do produto e da operação (reuniões skip-level, revisão direta de produto), em contraste com o modo gestor (manager mode) puramente delegativo. Ver [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 8 — FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO|Capítulo 8 (Vol. 6)]].',
    ],
    [
      /^\*\*First Principles Thinking\.\*\*[^\n]+/m,
      '**First Principles Thinking (pensamento por primeiros princípios).** Método de raciocinar a partir das verdades fundamentais e restrições físicas ou econômicas de um problema, decompondo premissas herdadas por analogia e reconstruindo a solução do zero (atribuído a Aristóteles, c. 350 a.C., e popularizado por Elon Musk nos anos 2010). Ver [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]].',
    ],
    [
      /^\*\*Hipótese falsificável\.\*\*[^\n]+/m,
      '**Hipótese falsificável.** Hipótese formulada com critério numérico e temporal claro que pode ser refutada por evidência empírica observável. Hipóteses não falsificáveis são crenças, não hipóteses científicas. Central na metodologia do livro. Ver [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7 (Vol. 3)]].',
    ],
    [
      /^\*\*ICP \(Ideal Customer Profile\)\.\*\*[^\n]+/m,
      '**ICP (Ideal Customer Profile, perfil de cliente ideal).** Descrição precisa do tipo de empresa (no B2B) ou consumidor (no B2C) para quem o produto foi desenhado e que extrai o maior valor com o menor custo de aquisição e churn. Segmento, ICP e persona vão do geral ao específico: o segmento é o recorte de mercado, o ICP é a conta ideal dentro dele e a persona é a pessoa concreta que decide ou usa dentro da conta. Ver [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5 (Vol. 2)]] e [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 1 — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR|Capítulo 1 (Vol. 4)]].',
    ],
    [
      /^\*\*IP \(Intellectual Property\)\.\*\*[^\n]+/m,
      '**IP (Intellectual Property, propriedade intelectual).** Conjunto de ativos intangíveis protegidos por lei: patentes, marcas registradas no INPI, direitos autorais sobre código-fonte e segredos de negócio. Em startups, a cessão de IP dos fundadores para a empresa deve constar expressamente por escrito (no contrato social, acordo de sócios ou termo próprio), pois a Lei do Software (Lei 9.609/1998) transfere automaticamente ao empregador o código feito por empregado ou contratado, mas não cobre automaticamente o que o sócio fundador criou antes do CNPJ. Ver [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 3 — PROPRIEDADE INTELECTUAL E INPI|Capítulo 3 (Vol. 8)]].',
    ],
    [
      /^\*\*IPO \(Initial Public Offering\)\.\*\*[^\n]+/m,
      '**IPO (Initial Public Offering, oferta pública inicial).** Abertura de capital com listagem de ações em bolsa de valores (no Brasil, na B3; nos EUA, na Nasdaq ou NYSE). No mercado brasileiro, costuma exigir receita anual na faixa de R$ 500 milhões a R$ 1 bilhão, crescimento próximo a 40% ao ano e dois a três anos de preparação de governança e auditoria. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 16 — IPO NO BRASIL: QUANDO, COMO E O QUE MUDA|Capítulo 16 (Vol. 9)]].',
    ],
    [
      /^\*\*Liquidation preference\.\*\*[^\n]+/m,
      '**Preferência de liquidação (liquidation preference).** Direito contratual dos investidores detentores de participação preferencial de receber de volta o capital investido (1x, 2x ou mais, por vezes acrescido de dividendos acumulados) antes dos sócios ordinários (fundadores) em evento de venda ou liquidação. Pode ser não participativa (padrão de mercado saudável: 1x non-participating) ou participativa (double dip, em que o investidor recebe a preferência e ainda divide o saldo pro rata). Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]].',
    ],
    [
      /^\*\*LTV \(Lifetime Value\)\.\*\*[^\n]+/m,
      '**LTV (Lifetime Value, valor vitalício do cliente).** Margem bruta total que um cliente gera ao longo de toda a sua permanência na empresa: receita média mensal por cliente (ARPU) multiplicada pela margem bruta percentual e dividida pela taxa mensal de cancelamento (churn). Uma razão LTV/CAC de 3x ou mais, calculada obrigatoriamente sobre a margem bruta e nunca sobre a receita bruta, indica modelo econômico sustentável. Ver [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]].',
    ],
    [
      /^\*\*Magic Number\.\*\*[^\n]+/m,
      '**Magic Number.** Variação líquida de ARR no período (ou aumento da receita recorrente trimestral multiplicado por 4) dividida pelo gasto total em Vendas e Marketing do trimestre anterior. Mede a eficiência comercial de crescimento em SaaS: acima de 0,75 indica que vale acelerar o investimento em Go-to-Market; acima de 1,0 indica máquina comercial de alta eficiência. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
    [
      /^\*\*Margem bruta\.\*\*[^\n]+/m,
      '**Margem bruta.** Receita líquida menos o custo dos produtos ou serviços vendidos (COGS/CMV), dividida pela receita líquida. Em SaaS tradicional, a referência saudável é de 70% a 85%; em produtos com IA generativa (AI-native), o custo computacional de inferência pode comprimir a margem para 50% a 70%; em marketplaces sobre o take rate, 60% a 80%; em hardware e indústria, 30% a 55%. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 1 — DEMONSTRATIVOS FINANCEIROS PARA O FUNDADOR|Capítulo 1 (Vol. 5)]].',
    ],
    [
      /^\*\*Mom Test, The\.\*\*[^\n]+/m,
      '**Mom Test (The Mom Test).** Método de entrevista de descoberta de clientes formulado por Rob Fitzpatrick (2013) que evita respostas educadas ou elogios vazios ao perguntar exclusivamente sobre fatos concretos, rotinas e gastos passados do entrevistado, nunca sobre opiniões ou intenções de compra futura. Ver [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]].',
    ],
    [
      /^\*\*Moat\.\*\*[^\n]+/m,
      '**Moat (fosso competitivo).** Barreira estrutural difícil de copiar que protege as margens e a participação de mercado da empresa no longo prazo (efeitos de rede, custos de troca, economias de escala, recurso cativo, marca, propriedade intelectual ou posicionamento contrariante). Ver a taxonomia das 7 Forças (7 Powers, de Hamilton Helmer, 2016) na [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]].',
    ],
    [
      /^\*\*Net Revenue Retention \(NRR\)\.\*\*[^\n]+/m,
      '**Net Revenue Retention (NRR, retenção líquida de receita).** Percentual da receita recorrente mantida e expandida dentro de uma mesma coorte de clientes ao longo de 12 meses: soma a receita inicial mais expansões (upsell, cross-sell e novas licenças) menos cancelamentos (churn) e reduções de plano (downgrades), dividida pela receita inicial. NRR acima de 100% (idealmente ≥ 110% em B2B e ≥ 120% em enterprise) significa que a base atual cresce mesmo sem novos clientes. Ver [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] e [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
    [
      /^\*\*NPS \(Net Promoter Score\)\.\*\*[^\n]+/m,
      '**NPS (Net Promoter Score).** Métrica de lealdade e satisfação criada por Fred Reichheld (2003) a partir da pergunta "Em uma escala de 0 a 10, o quanto você recomendaria esta empresa ou produto a um amigo ou colega?". Calcula-se subtraindo o percentual de detratores (notas 0 a 6) do percentual de promotores (notas 9 e 10), gerando um índice de -100 a +100. Referência saudável: ≥ 40 em consumo (B2C) e ≥ 30 em software B2B. Ver [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]].',
    ],
    [
      /^\*\*OKR \(Objectives and Key Results\)\.\*\*[^\n]+/m,
      '**OKR (Objectives and Key Results, objetivos e resultados-chave).** Sistema de desdobramento de metas que combina um objetivo qualitativo inspirador com 3 a 5 resultados-chave mensuráveis em cadência trimestral. Criado na Intel por Andy Grove e popularizado no Google por John Doerr (1999). Ver [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]].',
    ],
    [
      /^\*\*Outbound\.\*\*[^\n]+/m,
      '**Outbound (prospecção ativa).** Modelo comercial em que a empresa vai ativamente atrás do potencial cliente (via mensagens frias, ligações, pré-vendedores SDRs e eventos dirigidos), em vez de aguardar que o cliente chegue sozinho por busca ou conteúdo (inbound). Ver [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]].',
    ],
    [
      /^\*\*Pivot\.\*\*[^\n]+/m,
      '**Pivô (pivot).** Mudança estrutural deliberada em uma ou mais dimensões do modelo de negócio (segmento de cliente, problema atacado, arquitetura da solução, canal de distribuição ou modelo de receita), preservando os aprendizados empíricos acumulados. Distingue-se do ajuste cosmético e do encerramento (wind-down). Ver [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 11 — PIVOT: TIPOLOGIA, DECISÃO E EXECUÇÃO|Capítulo 11 (Vol. 4)]].',
    ],
    [
      /^\*\*PLG \(Product-Led Growth\)\.\*\*[^\n]+/m,
      '**PLG (Product-Led Growth, crescimento liderado pelo produto).** Modelo comercial em que o próprio uso do produto (via versão gratuita freemium ou teste self-service) é o principal motor de aquisição, ativação, conversão paga e expansão viral, em contraste com o modelo liderado pela força de vendas (SLG). Ver [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 1 — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR|Capítulo 1 (Vol. 4)]].',
    ],
    [
      /^\*\*PMF \(Product-Market Fit\)\.\*\*[^\n]+/m,
      '**PMF (Product-Market Fit, encaixe produto-mercado).** Estágio em que o produto resolve uma dor prioritária de um mercado bem dimensionado com retenção estabilizada em coorte, recomendação orgânica (teste de Sean Ellis ≥ 40%) e economia unitária saudável. O encaixe depende também do momento de mercado (timing tecnológico e regulatório). Diagnóstico central da [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]].',
    ],
    [
      /^\*\*Positioning\.\*\*[^\n]+/m,
      '**Posicionamento (positioning).** Escolha estratégica de como a empresa e seu produto ocupam um espaço distinto e defensável na mente do cliente-alvo em relação às alternativas existentes (conceito de Al Ries e Jack Trout, 1981, e operacionalizado para tecnologia por April Dunford, 2019). Ver [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] e [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 4 — BRANDING, POSICIONAMENTO DE MARCA E PRODUCT MARKETING (PMM)|Capítulo 4 (Vol. 4)]].',
    ],
    [
      /^\*\*Pre-seed\.\*\*[^\n]+/m,
      '**Pre-seed (pré-seed).** Primeira rodada institucional ou de anjos da vida da startup, anterior ao estágio Seed. No Brasil, situa-se tipicamente entre R$ 500 mil e R$ 3 milhões, captada com investidores-anjo, sindicatos ou fundos micro-VC para financiar a validação do problema e o MVP inicial. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]].',
    ],
    [
      /^\*\*Radical Candor\.\*\*[^\n]+/m,
      '**Radical Candor (Empatia Assertiva).** Modelo de liderança e feedback formulado por Kim Scott (2017) que combina importar-se pessoalmente (care personally) com desafiar diretamente (challenge directly), servindo de antídoto à agressividade ofensiva, à insinceridade manipuladora e à empatia ruinosa. Ver [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]].',
    ],
    [
      /^\*\*Ratchet\.\*\*[^\n]+/m,
      '**Ratchet.** Cláusula contratual de ajuste de participação que protege o investidor em dois cenários distintos: (1) quando a empresa capta uma rodada futura a valuation menor (down round), repricando todas as ações do investidor pelo novo preço mais baixo (full ratchet de antidiluição); ou (2) quando a empresa não atinge metas operacionais combinadas no acordo de investimento (ratchet de desempenho). Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]].',
    ],
    [
      /^\*\*RBF \(Revenue-Based Financing\)\.\*\*[^\n]+/m,
      '**RBF (Revenue-Based Financing, financiamento baseado na receita).** Modalidade de crédito não diluitivo em que a empresa antecipa capital e amortiza a dívida pagando um percentual mensal variável da sua receita bruta até quitar um múltiplo pré-acordado do principal (cap). Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 13 — VENTURE DEBT E REVENUE-BASED FINANCING (RBF)|Capítulo 13 (Vol. 5)]].',
    ],
    [
      /^\*\*ROFR \(Right of First Refusal\)\.\*\*[^\n]+/m,
      '**ROFR (Right of First Refusal, direito de primeira recusa).** Cláusula do acordo de sócios que dá aos sócios ou investidores atuais a preferência para comprar participações existentes que outro sócio deseje vender a um terceiro, igualando o preço e as condições da proposta. Não confundir com o direito de preferência na subscrição de novas quotas ou ações (pro rata, art. 171 da Lei 6.404/1976), que protege contra diluição em novas rodadas. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]].',
    ],
    [
      /^\*\*Rockefeller Habits\.\*\*[^\n]+/m,
      '**Rockefeller Habits (Hábitos de Rockefeller).** Disciplina de execução empresarial sistematizada por Verne Harnish em *Mastering the Rockefeller Habits* (2002) e ampliada em *Scaling Up* (2014), baseada em prioridades trimestrais (Rocks), painel semanal de métricas e cadência estruturada de reuniões diárias, semanais, mensais e trimestrais. Ver [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]].',
    ],
    [
      /^\*\*RPO \(Recovery Point Objective\)\.\*\*[^\n]+/m,
      '**RPO (Recovery Point Objective).** Janela máxima de dados (medida em minutos ou horas) que a empresa tolera perder em caso de incidente grave ou queda de infraestrutura, determinando a frequência de backups e replicação dentro do Plano de Continuidade de Negócios (BCP). Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 (Vol. 9)]].',
    ],
    [
      /^\*\*Runway\.\*\*[^\n]+/m,
      '**Runway (pista de caixa).** Número de meses que a empresa consegue operar antes de o caixa zerar, calculado dividindo o saldo de caixa disponível pela queima líquida mensal (net burn). Referência saudável: mínimo de 12 meses de caixa em operação contínua e de 18 a 24 meses imediatamente após fechar uma rodada. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
    [
      /^\*\*SAFE \(Simple Agreement for Future Equity\)\.\*\*[^\n]+/m,
      '**SAFE (Simple Agreement for Future Equity).** Instrumento contratual criado pela Y Combinator (2013) para captação rápida: o investidor aporta recursos agora em troca do direito de converter em ações numa rodada futura (com teto de valuation cap e/ou desconto), sem juros e sem data de vencimento. No Brasil, o equivalente de natureza não creditícia é o COCP (LC 182/2021, art. 5º), enquanto o mútuo conversível tem natureza de dívida. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 11 — INSTRUMENTOS DE CAPTAÇÃO: SAFE, NOTA CONVERSÍVEL E MÚTUO CONVERSÍVEL|Capítulo 11 (Vol. 5)]].',
    ],
    [
      /^\*\*Scenario Planning\.\*\*[^\n]+/m,
      '**Scenario Planning (planejamento por cenários).** Método desenvolvido pela Royal Dutch Shell nos anos 1970 para preparar a empresa para múltiplos futuros plausíveis, em vez de apostar em uma única projeção linear. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]] e [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 11 — PIVOT: TIPOLOGIA, DECISÃO E EXECUÇÃO|Capítulo 11 (Vol. 4)]].',
    ],
    [
      /^\*\*Second-Order Thinking\.\*\*[^\n]+/m,
      '**Second-Order Thinking (pensamento de segunda ordem).** Método de avaliar não apenas o efeito imediato de uma decisão (primeira ordem), mas as consequências das consequências ao longo do tempo e a reação dos demais agentes (conceito central em Howard Marks, 2011). Ver [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]].',
    ],
    [
      /^\*\*Seed\.\*\*[^\n]+/m,
      '**Seed (rodada semente).** Rodada institucional inicial destinada a comprovar o Product-Market Fit e validar a repetibilidade dos canais de aquisição. No Brasil, situa-se tipicamente na faixa de R$ 2 milhões a R$ 12 milhões, liderada por fundos Seed ou micro-VCs. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]].',
    ],
    [
      /^\*\*SLG \(Sales-Led Growth\)\.\*\*[^\n]+/m,
      '**SLG (Sales-Led Growth, crescimento liderado por vendas).** Modelo comercial em que a aquisição e a expansão de receita dependem diretamente de uma equipe humana de vendas (pré-vendedores SDRs, executivos de contas AEs e engenheiros de vendas), padrão dominante em contratos B2B mid-market e enterprise. Contrapõe-se ao PLG. Ver [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]] e [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 2 — VENDAS COMPLEXAS ENTERPRISE: CICLO LONGO, ALTO VALOR, MÚLTIPLOS DECISORES|Capítulo 2 (Vol. 6)]].',
    ],
    [
      /^\*\*SPA \(Share Purchase Agreement\)\.\*\*[^\n]+/m,
      '**SPA (Share Purchase Agreement, contrato de compra e venda de ações ou quotas).** Contrato definitivo que rege a compra de participação societária existente, sendo o documento central de fechamento em aquisições (M&A) e operações secundárias (secondaries), contendo declarações e garantias (reps & warranties), indenizações e conta-garantia (escrow). Em rodadas primárias de Venture Capital, utiliza-se o Contrato de Investimento ou de Subscrição combinado ao Acordo de Sócios. Ver [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]].',
    ],
    [
      /^\*\*Technical debt \(dívida técnica\)\.\*\*[^\n]+\n+/m,
      '',
    ],
    [
      /^\*\*Valuation\.\*\*[^\n]+/m,
      '**Valuation (avaliação da empresa).** Valor econômico estimado de uma empresa. Em rodadas de captação, divide-se entre *pre-money valuation* (valor da empresa antes da entrada do novo cheque) e *post-money valuation* (valor imediatamente após a rodada, igual ao pre-money somado ao aporte recebido). Pode ser calculado por múltiplos (EV/ARR, EV/EBITDA), fluxo de caixa descontado (DCF) ou transações comparáveis. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 10 — VALUATION METHODS: COMO INVESTIDORES CALCULAM E COMO VOCÊ CALCULA PARA NEGOCIAR|Capítulo 10 (Vol. 5)]].',
    ],
    [
      /^\*\*Venture Debt\.\*\*[^\n]+/m,
      '**Venture Debt.** Financiamento por dívida estruturada voltado a startups que já captaram rodadas institucionais de equity, concedido por fundos especializados ou bancos de tecnologia. Não dilui diretamente os sócios como uma rodada de ações (embora costume incluir uma pequena parcela de warrants), mas exige garantias e covenants financeiros. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 13 — VENTURE DEBT E REVENUE-BASED FINANCING (RBF)|Capítulo 13 (Vol. 5)]].',
    ],
    [
      /^\*\*YoY \(Year over Year\)\.\*\*[^\n]+/m,
      '**YoY (Year over Year, ano contra ano).** Comparação percentual de uma métrica com o mesmo período do ano anterior, eliminando distorções sazonais. Triplicar o ARR ao ano (padrão T2D3) é referência nos primeiros anos pós-PMF; em escala avançada e pré-IPO, crescimentos de 30% a 50% YoY com geração de caixa livre são a referência. Ver [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]].',
    ],
  ];

  for (const [pattern, replacement] of baseReplacements) {
    out = out.replace(pattern, replacement);
  }

  // 4) Inserir os novos verbetes por letra
  for (const [letter, entries] of Object.entries(EXTRA_GLOSSARY_BY_LETTER)) {
    const blockToInsert = entries.join('\n\n');
    const reHeader = new RegExp(`(### ${letter}\\n+)`);
    if (reHeader.test(out)) {
      out = out.replace(reHeader, `$1${blockToInsert}\n\n`);
    } else if (letter === 'P') {
      // fallback
    }
  }

  // 5) Limpar travessões em texto visível fora de wikilinks e hifens de "não-" (#5481, #5500)
  out = out
    .split('\n')
    .map((line) => {
      if (!line.startsWith('**')) return line;
      const parts = line.split(/(\[\[[^\]]+\]\])/g);
      return parts
        .map((p) => {
          if (p.startsWith('[[')) return p;
          return p
            .replace(/\bnão-(falsificáveis|falsificável|vinculantes?|diluitivos?|diluitivas?|financeiras?|financeiros?|participativas?)\b/gi, 'não $1')
            .replace(/\s*—\s*/g, ': ');
        })
        .join('');
    })
    .join('\n');

  // 6) Reordenar alfabeticamente cada bloco de letra ### A .. ### Z (#5456)
  out = out.replace(/(### [A-Z]\n+)([\s\S]*?)(?=\n---\n+\n### [A-Z]|\n*$)/g, (_, header, content) => {
    return `${header}${sortGlossaryParagraphs(content)}\n`;
  });

  return out;
}

const UNIFIED_ABBREVS = [
  `**AARRR**: Acquisition, Activation, Retention, Referral, Revenue (funil de métricas piratas de growth, Dave McClure). *Growth.*`,
  `**AB / A/B**: Teste A/B (experimento controlado comparando duas variantes). *Experimentação.*`,
  `**ACL**: Ambiente de Contratação Livre (Mercado Livre de Energia Elétrica). *Energytech / Regulação.*`,
  `**ACT**: Acordo de Cooperação Técnica (validação e piloto público sem repasse financeiro). *Govtech / Setor Público. Ver Glossário.*`,
  `**ACV**: Annual Contract Value (valor anual de contrato). *Vendas B2B / Métricas. Ver Glossário.*`,
  `**ADR**: Architecture Decision Record (registro de decisão de arquitetura de software). *Engenharia. Ver Glossário.*`,
  `**AE**: Account Executive (executivo de contas responsável pelo fechamento de vendas). *Vendas B2B.*`,
  `**ANA**: Agência Nacional de Águas e Saneamento Básico. *Regulação / Irrigação e Saneamento.*`,
  `**ANAC**: Agência Nacional de Aviação Civil. *Regulação / Aerospace e Drones.*`,
  `**ANATEL**: Agência Nacional de Telecomunicações. *Regulação / Telecom e ISPs.*`,
  `**ANEEL**: Agência Nacional de Energia Elétrica. *Regulação / Energia.*`,
  `**ANP**: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis. *Regulação / Óleo, Gás e Biocombustíveis.*`,
  `**ANPD**: Agência Nacional de Proteção de Dados (antiga Autoridade, MP 1.317/2025). *Regulação / LGPD. Ver Glossário.*`,
  `**ANS**: Agência Nacional de Saúde Suplementar. *Regulação / Planos de Saúde e Healthtech.*`,
  `**ANVISA**: Agência Nacional de Vigilância Sanitária. *Regulação / Saúde, Alimentos, Cosméticos e Agro.*`,
  `**API**: Application Programming Interface (interface de programação de aplicações). *Tecnologia.*`,
  `**ARPU**: Average Revenue Per User (receita média por usuário ou conta). *Unit economics / SaaS.*`,
  `**ARR**: Annual Recurring Revenue (receita recorrente anual). *SaaS / Métricas. Ver Glossário.*`,
  `**ASP**: Average Selling Price (preço médio de venda). *Vendas / Pricing. Ver Glossário.*`,
  `**B2B**: Business-to-Business (empresa vendendo para empresa). *Modelo de negócio.*`,
  `**B2B2C**: Business-to-Business-to-Consumer (empresa vendendo por meio de outra empresa até o consumidor final). *Modelo de negócio.*`,
  `**B2C**: Business-to-Consumer (empresa vendendo direto ao consumidor final). *Modelo de negócio.*`,
  `**B2G**: Business-to-Government (empresa vendendo para órgãos públicos). *Govtech / Setor Público.*`,
  `**B3**: Brasil, Bolsa, Balcão (bolsa de valores e infraestrutura de mercado financeiro brasileira). *Mercado de capitais.*`,
  `**BaaS**: Banking as a Service (infraestrutura bancária como serviço via API). *Fintech. Ver Glossário.*`,
  `**BATNA**: Best Alternative to a Negotiated Agreement (melhor alternativa caso não haja acordo). *Negociação. Ver Glossário.*`,
  `**BCB**: Banco Central do Brasil (também grafado Bacen ou BACEN). *Regulação / Sistema Financeiro. Ver Glossário.*`,
  `**BCP**: Business Continuity Plan (plano de continuidade de negócios). *Gestão de crise / Operações.*`,
  `**BECCS**: Bioenergy with Carbon Capture and Storage (bioenergia com captura e armazenamento de carbono). *Biocombustíveis / Clima. Ver Glossário.*`,
  `**BESS**: Battery Energy Storage System (sistema de armazenamento de energia em baterias). *Energytech. Ver Glossário.*`,
  `**BMC**: Business Model Canvas (quadro de modelo de negócios em nove blocos). *Estratégia / Modelagem.*`,
  `**BNDES**: Banco Nacional de Desenvolvimento Econômico e Social. *Financiamento / Fomento.*`,
  `**BPO**: Business Process Outsourcing (terceirização de processos de negócios, como financeiro e folha). *Serviços B2B.*`,
  `**CAC**: Customer Acquisition Cost (custo de aquisição de cliente). *Unit economics. Ver Glossário.*`,
  `**CADE**: Conselho Administrativo de Defesa Econômica. *Antitruste / M&A.*`,
  `**CAR**: Cadastro Ambiental Rural. *Agronegócio / Compliance ambiental.*`,
  `**CBIO**: Crédito de Descarbonização (RenovaBio). *Biocombustíveis / Mercado de carbono. Ver Glossário.*`,
  `**CBOT**: Chicago Board of Trade (Bolsa de Mercadorias de Chicago). *Trading de commodities.*`,
  `**CCEE**: Câmara de Comercialização de Energia Elétrica. *Energytech.*`,
  `**CDC**: Código de Defesa do Consumidor (Lei 8.078/1990). *Jurídico / Consumo.*`,
  `**CDI**: Certificado de Depósito Interbancário (taxa de referência de renda fixa e custo de oportunidade no Brasil). *Finanças.*`,
  `**CEO**: Chief Executive Officer (diretor-presidente). *Gestão.*`,
  `**CFO**: Chief Financial Officer (diretor financeiro). Em saúde, Conselho Federal de Odontologia. *Gestão / Saúde.*`,
  `**CIM**: Confidential Information Memorandum (memorando confidencial de informações em M&A). *M&A / Exit. Ver Glossário.*`,
  `**CLT**: Consolidação das Leis do Trabalho (regime trabalhista formal com vínculo empregatício). *Trabalho.*`,
  `**CMO**: Chief Marketing Officer (diretor de marketing). *Gestão.*`,
  `**CMV**: Custo da Mercadoria Vendida (contabilidade comercial e industrial). *Finanças.*`,
  `**COCP**: Contrato de Opção de Subscrição ou Compra de Participação (LC 182/2021, art. 5º). *Captação / Jurídico. Ver Glossário.*`,
  `**COF**: Circular de Oferta de Franquia (Lei 13.966/2019). *Franchising. Ver Glossário.*`,
  `**COFINS**: Contribuição para o Financiamento da Seguridade Social (em transição para a CBS em 2027). *Tributos.*`,
  `**COGS**: Cost of Goods Sold (custo dos produtos ou serviços vendidos, equivalente ao CMV/CSP). *Finanças. Ver Glossário.*`,
  `**COO**: Chief Operating Officer (diretor de operações). *Gestão.*`,
  `**COSS**: Commercial Open Source Software (software de código aberto comercial). *Modelos de negócio / DevTools.*`,
  `**CPO**: Chief Product Officer (diretor de produto). *Gestão.*`,
  `**CPR**: Cédula de Produto Rural (Lei 8.929/1994). *Crédito rural / Barter / Agronegócio. Ver Glossário.*`,
  `**CPSI**: Contrato Público para Solução Inovadora (LC 182/2021). *Govtech. Ver Glossário.*`,
  `**CRA / CRI**: Certificado de Recebíveis do Agronegócio / Imobiliários. *Mercado de capitais / Securitização.*`,
  `**CRM**: Customer Relationship Management (sistema de gestão de relacionamento com clientes). Em saúde, Conselho Regional de Medicina. *Vendas / Saúde. Ver Glossário.*`,
  `**CRO**: Chief Revenue Officer (diretor de receita). Em saúde, Conselho Regional de Odontologia; em marketing digital, Conversion Rate Optimization; em biotecnologia, Contract Research Organization. *Gestão / Saúde / Growth.*`,
  `**CS**: Customer Success (sucesso do cliente). *Retenção / Expansão.*`,
  `**CSD**: Matriz de Certezas, Suposições e Dúvidas. *Validação / Pesquisa. Ver Glossário.*`,
  `**CSLL**: Contribuição Social sobre o Lucro Líquido. *Tributos.*`,
  `**CTO**: Chief Technology Officer (diretor de tecnologia). *Gestão.*`,
  `**CVC**: Corporate Venture Capital (braço de investimento de capital de risco de uma corporação). *Economia da inovação / Investimentos.*`,
  `**CVM**: Comissão de Valores Mobiliários. *Regulação / Mercado de capitais.*`,
  `**CVV**: Centro de Valorização da Vida (apoio emocional gratuito pelo telefone 188). *Saúde mental.*`,
  `**D2C**: Direct-to-Consumer (venda direta da marca ao consumidor final). *Varejo / Marcas nativas. Ver Glossário.*`,
  `**DAG**: Directed Acyclic Graph (grafo causal direcionado sem ciclos). *Teoria do negócio / Dados. Ver Glossário.*`,
  `**DAS**: Documento de Arrecadação do Simples Nacional. *Tributos.*`,
  `**DAU / MAU**: Daily Active Users / Monthly Active Users (usuários ativos diários sobre mensais). *Produto / Engajamento. Ver Glossário.*`,
  `**DCF**: Discounted Cash Flow (avaliação por fluxo de caixa descontado). *Finanças / Valuation. Ver Glossário.*`,
  `**DD**: Due Diligence (auditoria e investigação prévia a investimento ou M&A). *Captação / Jurídico. Ver Glossário.*`,
  `**DDGS**: Dried Distillers Grains with Solubles (farelo proteico do etanol de milho). *Biocombustíveis / Nutrição animal. Ver Glossário.*`,
  `**DPA**: Data Processing Agreement (adendo contratual de tratamento de dados pessoais). *LGPD. Ver Glossário.*`,
  `**DPO**: Data Protection Officer (encarregado pelo tratamento de dados pessoais sob a LGPD). *LGPD. Ver Glossário.*`,
  `**EBITDA**: Earnings Before Interest, Taxes, Depreciation and Amortization (lucro antes de juros, impostos, depreciação e amortização, LAJIDA). *Finanças. Ver Glossário.*`,
  `**eNPS**: Employee Net Promoter Score (métrica de recomendação interna por colaboradores). *Pessoas / Cultura. Ver Glossário.*`,
  `**EOR**: Employer of Record (empresa empregadora formal para contratação internacional). *Expansão / RH. Ver Glossário.*`,
  `**EPP**: Empresa de Pequeno Porte (faturamento anual entre R$ 360 mil e R$ 4,8 milhões). *Enquadramento societário e fiscal.*`,
  `**ERP**: Enterprise Resource Planning (sistema integrado de gestão empresarial). *Software B2B. Ver Glossário.*`,
  `**ESG**: Environmental, Social and Governance (práticas ambientais, sociais e de governança). *Governança / Sustentabilidade.*`,
  `**ESOP**: Employee Stock Option Plan (plano de opções de compra de ações para colaboradores). *Pessoas / Societário. Ver Glossário.*`,
  `**EUDR**: European Union Deforestation Regulation (Regulamento Europeu Antidesmatamento, UE 2023/1115). *Exportação / Rastreabilidade. Ver Glossário.*`,
  `**EV**: Enterprise Value (valor da firma: valor de mercado do patrimônio líquido somado à dívida líquida). *Valuation. Ver Glossário.*`,
  `**EVP**: Executive Vice President (vice-presidente executivo). No ecossistema Pix, Endereço Virtual de Pagamento (chave aleatória). *Gestão / Pagamentos.*`,
  `**FAR / FRR**: False Acceptance Rate / False Rejection Rate (taxas de falsa aceitação e falsa rejeição em biometria). *Segurança / Antifraude. Ver Glossário.*`,
  `**FGTS**: Fundo de Garantia do Tempo de Serviço. *Trabalhista / Encargos.*`,
  `**FIDC**: Fundo de Investimento em Direitos Creditórios. *Crédito / Securitização. Ver Glossário.*`,
  `**FINEP**: Financiadora de Estudos e Projetos. *Fomento não diluitivo / Inovação.*`,
  `**FIV**: Fertilização In Vitro (humana e bovina). *Biotecnologia / Pecuária e Saúde. Ver Glossário.*`,
  `**FMEA**: Failure Mode and Effects Analysis (análise dos modos de falha e seus efeitos). *Qualidade / Risco.*`,
  `**FMF**: Founder-Market Fit (encaixe entre o fundador e o mercado). *Ideação. Ver Glossário.*`,
  `**FP&A**: Financial Planning and Analysis (planejamento e análise financeira). *Finanças. Ver Glossário.*`,
  `**FTTH**: Fiber-to-the-Home (fibra óptica até a residência). *Telecomunicações / ISPs.*`,
  `**GGR**: Gross Gaming Revenue (receita bruta de jogos: total apostado menos prêmios pagos). *Gaming / iGaming regulado.*`,
  `**GMV**: Gross Merchandise Value (volume bruto de mercadorias e transações). *Marketplaces / Varejo. Ver Glossário.*`,
  `**GRR**: Gross Revenue Retention (retenção bruta de receita, sem contar expansão). *SaaS / Métricas. Ver Glossário.*`,
  `**GTA**: Guia de Trânsito Animal. *Pecuária / Rastreabilidade.*`,
  `**GTM**: Go-to-Market (estratégia de entrada e distribuição no mercado). *Comercial / Produto. Ver Glossário.*`,
  `**HR / RH**: Human Resources / Recursos Humanos. *Gestão de pessoas.*`,
  `**HRBP**: HR Business Partner (parceiro estratégico de recursos humanos junto às áreas de negócio). *Pessoas.*`,
  `**IA**: Inteligência Artificial. *Tecnologia / Produto. Ver Glossário.*`,
  `**IBS / CBS**: Imposto sobre Bens e Serviços / Contribuição sobre Bens e Serviços (IVA Dual da Reforma Tributária, EC 132/2023 e LC 214/2025). *Tributos.*`,
  `**ICE**: Em priorização de produto, Impact, Confidence, Ease (impacto, confiança e facilidade). Em commodities, Intercontinental Exchange (Bolsa de Nova York). *Produto / Commodities.*`,
  `**ICMS**: Imposto sobre Circulação de Mercadorias e Serviços (estadual, em transição para o IBS entre 2029 e 2033). *Tributos.*`,
  `**ICP**: Ideal Customer Profile (perfil de cliente ideal). *Vendas e marketing. Ver Glossário.*`,
  `**ICT**: Instituição Científica, Tecnológica e de Inovação. *Economia da inovação / Deep Tech.*`,
  `**IFRS**: International Financial Reporting Standards (normas internacionais de contabilidade). *Contabilidade.*`,
  `**INPI**: Instituto Nacional da Propriedade Industrial. *Propriedade intelectual / Patentes e marcas.*`,
  `**INSS**: Instituto Nacional do Seguro Social. *Previdência / Encargos trabalhistas.*`,
  `**IOF**: Imposto sobre Operações Financeiras. *Tributos / Crédito e câmbio.*`,
  `**IP**: Intellectual Property (propriedade intelectual). Em fintechs, Instituição de Pagamento autorizada pelo BCB. *Jurídico / Fintech. Ver Glossário.*`,
  `**IPCA**: Índice Nacional de Preços ao Consumidor Amplo (indicador oficial de inflação do Brasil, IBGE). *Macroeconomia.*`,
  `**IPI**: Imposto sobre Produtos Industrializados. *Tributos / Indústria e importação.*`,
  `**IPO**: Initial Public Offering (oferta pública inicial de ações). *Exit / Mercado de capitais. Ver Glossário.*`,
  `**IRPJ**: Imposto de Renda da Pessoa Jurídica. *Tributos.*`,
  `**ISP**: Internet Service Provider (provedor de acesso à internet). *Telecomunicações. Ver Glossário.*`,
  `**ISS**: Imposto Sobre Serviços de Qualquer Natureza (municipal, em transição para o IBS entre 2029 e 2033). *Tributos.*`,
  `**ITCMD**: Imposto sobre Transmissão Causa Mortis e Doação (estadual). *Sucessão / Family Office.*`,
  `**JTBD**: Jobs to Be Done (trabalhos a serem feitos pelo cliente). *Pesquisa e produto. Ver Glossário.*`,
  `**KPI / KR**: Key Performance Indicator (indicador-chave de desempenho) / Key Result (resultado-chave no OKR). *Planejamento e métricas.*`,
  `**KYC / KYB**: Know Your Customer / Know Your Business (validação de identidade de pessoa física ou jurídica e prevenção à lavagem de dinheiro). *Fintech / Segurança.*`,
  `**LGPD**: Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018). *Regulação / Privacidade. Ver Glossário.*`,
  `**LLM**: Large Language Model (grande modelo de linguagem de IA generativa). *Inteligência Artificial. Ver Glossário.*`,
  `**LOI**: Letter of Intent (carta de intenções em M&A, investimento ou contrato enterprise). *M&A / Vendas. Ver Glossário.*`,
  `**LTV**: Lifetime Value (margem bruta vitalícia gerada pelo cliente). *Unit economics. Ver Glossário.*`,
  `**LTV:CAC**: Razão entre o valor vitalício do cliente (na margem bruta) e o custo de aquisição. *Unit economics.*`,
  `**M&A**: Mergers and Acquisitions (fusões e aquisições). *Exit / Consolidação. Ver Glossário.*`,
  `**MAPA**: Ministério da Agricultura e Pecuária. *Regulação / Agronegócio e bioinsumos.*`,
  `**ME**: Microempresa (faturamento anual até R$ 360 mil). *Enquadramento societário e fiscal.*`,
  `**MECE**: Mutually Exclusive, Collectively Exhaustive (mutuamente exclusivo e coletivamente exaustivo). *Resolução de problemas. Ver Glossário.*`,
  `**MEDDIC / MEDDPICC**: Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition. *Vendas Enterprise. Ver Glossário.*`,
  `**MEI**: Microempreendedor Individual. *Enquadramento fiscal.*`,
  `**MFO / SFO**: Multi-Family Office / Single Family Office (gestora patrimonial familiar). *Gestão de fortuna / Pós-exit. Ver Glossário.*`,
  `**MQL**: Marketing Qualified Lead (potencial cliente qualificado pelo marketing). *Marketing e vendas. Ver Glossário.*`,
  `**MRR**: Monthly Recurring Revenue (receita recorrente mensal). *SaaS / Métricas. Ver Glossário.*`,
  `**MVP**: Minimum Viable Product (produto mínimo viável). *Produto / Validação. Ver Glossário.*`,
  `**NCM**: Nomenclatura Comum do Mercosul (código fiscal de classificação de mercadorias). *Comércio exterior / Tributário.*`,
  `**NDA**: Non-Disclosure Agreement (acordo de confidencialidade). *Jurídico. Ver Glossário.*`,
  `**NDF**: Non-Deliverable Forward (contrato a termo de moeda sem entrega física). *Hedge cambial / Tesouraria.*`,
  `**NPS**: Net Promoter Score (métrica de lealdade e recomendação de clientes). *Satisfação. Ver Glossário.*`,
  `**NRR**: Net Revenue Retention (retenção líquida de receita). *SaaS / Métricas. Ver Glossário.*`,
  `**OEE**: Overall Equipment Effectiveness (eficiência global do equipamento). *Indústria 4.0 / Manufatura.*`,
  `**OKR**: Objectives and Key Results (objetivos e resultados-chave). *Planejamento e execução. Ver Glossário.*`,
  `**OPME**: Órteses, Próteses e Materiais Especiais. *Saúde física / Hospitais e odontologia. Ver Glossário.*`,
  `**P&L / DRE**: Profit and Loss / Demonstração do Resultado do Exercício. *Contabilidade e finanças. Ver Glossário.*`,
  `**PIS**: Programa de Integração Social (contribuição federal em transição para a CBS em 2027). *Tributos.*`,
  `**PJ**: Pessoa Jurídica (empresa ou regime de contratação de prestadores de serviços). *Societário / Trabalho.*`,
  `**PLG**: Product-Led Growth (crescimento liderado pelo produto). *Growth. Ver Glossário.*`,
  `**PLR**: Participação nos Lucros ou Resultados (Lei 10.101/2000). *Remuneração / Trabalhista.*`,
  `**PM**: Product Manager (gerente de produto). *Produto.*`,
  `**PME**: Pequena e Média Empresa (equivalente ao inglês SMB). *Segmento de mercado.*`,
  `**PMF**: Product-Market Fit (encaixe produto-mercado). *Produto e tração. Ver Glossário.*`,
  `**PNRS**: Política Nacional de Resíduos Sólidos (Lei 12.305/2010). *Gestão de resíduos / Economia circular.*`,
  `**POC**: Proof of Concept (prova de conceito ou piloto técnico-comercial). *Vendas B2B / Engenharia.*`,
  `**PSF**: Problem-Solution Fit (encaixe problema-solução, etapa anterior ao PMF). *Validação.*`,
  `**QBR**: Quarterly Business Review (revisão executiva trimestral de resultados, interna ou com clientes enterprise). *Gestão / Customer Success.*`,
  `**RACI**: Responsible, Accountable, Consulted, Informed (matriz de responsabilidades: responsável, aprovador, consultado e informado). *Gestão e processos.*`,
  `**RAG**: Retrieval-Augmented Generation (geração aumentada por recuperação de dados proprietários em modelos de IA). *Inteligência Artificial.*`,
  `**RAPID**: Recommend, Agree, Perform, Input, Decide (protocolo de papéis em decisões críticas, Bain & Company). *Gestão e decisão.*`,
  `**RBF**: Revenue-Based Financing (financiamento baseado em percentual da receita futura). *Captação não diluitiva. Ver Glossário.*`,
  `**RFC**: Request for Comments (documento de proposta técnica aberta a revisão do time). *Engenharia. Ver Glossário.*`,
  `**RFP**: Request for Proposal (solicitação formal de proposta comercial em compras corporativas). *Vendas Enterprise.*`,
  `**RIPD**: Relatório de Impacto à Proteção de Dados Pessoais. *LGPD / Privacidade.*`,
  `**ROFR**: Right of First Refusal (direito de primeira recusa na venda de ações de sócios). *Societário. Ver Glossário.*`,
  `**ROI**: Return on Investment (retorno sobre o investimento). *Finanças. Ver Glossário.*`,
  `**RPO / RTO**: Recovery Point Objective / Recovery Time Objective (metas de perda máxima de dados e tempo máximo de recuperação). *Continuidade / Segurança. Ver Glossário.*`,
  `**RWA**: Real World Assets (ativos reais tokenizados). *Wealthtech / Mercado de capitais. Ver Glossário.*`,
  `**SaaS**: Software as a Service (software como serviço em assinatura). *Modelo de negócio.*`,
  `**SAF**: Sustainable Aviation Fuel (combustível sustentável de aviação). *Biocombustíveis / Aviação. Ver Glossário.*`,
  `**SAFE**: Simple Agreement for Future Equity (acordo simples para participação futura). *Captação. Ver Glossário.*`,
  `**SCD / SEP**: Sociedade de Crédito Direto / Sociedade de Empréstimo entre Pessoas. *Fintech / Regulação BCB.*`,
  `**SCQA**: Situation, Complication, Question, Answer (estrutura narrativa de Situação, Complicação, Pergunta e Resposta, Barbara Minto). *Comunicação / Pitch.*`,
  `**SDK**: Software Development Kit (kit de desenvolvimento de software). *Tecnologia. Ver Glossário.*`,
  `**SDR**: Sales Development Representative (pré-vendedor focado em prospecção e qualificação). *Vendas.*`,
  `**Selic**: Sistema Especial de Liquidação e de Custódia (taxa básica de juros da economia brasileira, definida pelo Copom/BCB). *Macroeconomia e finanças.*`,
  `**SEO**: Search Engine Optimization (otimização para mecanismos de busca e motores de resposta). *Marketing orgânico.*`,
  `**SIPOC**: Suppliers, Inputs, Process, Outputs, Customers (fornecedores, entradas, processo, saídas e clientes). *Operações.*`,
  `**SISBOV**: Serviço de Rastreabilidade da Cadeia Produtiva de Bovinos e Bubalinos (MAPA). *Pecuária / Rastreabilidade. Ver Glossário.*`,
  `**SisGen**: Sistema Nacional de Gestão do Patrimônio Genético (Lei 13.123/2015). *Bioeconomia / Biodiversidade. Ver Glossário.*`,
  `**SLA**: Service Level Agreement (acordo de nível de serviço). *Operações / Contratos B2B. Ver Glossário.*`,
  `**SLG**: Sales-Led Growth (crescimento liderado pela equipe comercial). *Vendas. Ver Glossário.*`,
  `**SMB**: Small and Medium Business (pequena e média empresa, PME). *Segmento de mercado.*`,
  `**SPA**: Em M&A e societário, Share Purchase Agreement (contrato de compra e venda de ações). Em jogos e apostas reguladas, Secretaria de Prêmios e Apostas do Ministério da Fazenda. *M&A / Regulação iGaming. Ver Glossário.*`,
  `**SQL**: Em vendas, Sales Qualified Lead (oportunidade qualificada pelo comercial). Em tecnologia, Structured Query Language (linguagem de consulta a bancos de dados). *Vendas / Dados. Ver Glossário.*`,
  `**SUSEP**: Superintendência de Seguros Privados. *Regulação / Insurtech.*`,
  `**SWOT**: Strengths, Weaknesses, Opportunities, Threats (matriz FOFA: forças, fraquezas, oportunidades e ameaças). *Estratégia.*`,
  `**TAM / SAM / SOM**: Total Addressable Market (mercado total), Serviceable Addressable Market (mercado endereçável) e Serviceable Obtainable Market (mercado alcançável). *Dimensionamento de mercado. Ver Glossário.*`,
  `**TISS / TUSS**: Troca de Informações na Saúde Suplementar / Terminologia Unificada da Saúde Suplementar (padrões ANS). *Saúde / Faturamento hospitalar.*`,
  `**TRL / CRL**: Technology Readiness Level / Customer Readiness Level (níveis de maturidade tecnológica e de cliente). *Deep Tech / Validação. Ver Glossário.*`,
  `**TTD**: Tratamento Tributário Diferenciado (regime especial de importação, como o TTD 409 em SC). *Comércio exterior / Tributário. Ver Glossário.*`,
  `**VC**: Venture Capital (capital de risco institucional). *Captação e investimentos.*`,
  `**VP**: Vice President (vice-presidente). *Gestão executiva.*`,
  `**VPC**: Value Proposition Canvas (quadro de proposta de valor, Osterwalder). *Produto e descoberta.*`,
  `**WACC**: Weighted Average Cost of Capital (custo médio ponderado de capital). *Finanças / Valuation. Ver Glossário.*`,
  `**YoY**: Year over Year (comparação ano contra ano). *Métricas. Ver Glossário.*`,
  `**ZOPA**: Zone of Possible Agreement (zona de acordo possível em negociação). *Negociação. Ver Glossário.*`,
];

function enrichRawAbbrevBody(_body) {
  const sorted = [...UNIFIED_ABBREVS].sort((a, b) => {
    const keyA = a.replace(/^\*\*([^*]+?)\*\*:[\s\S]*$/, '$1').trim();
    const keyB = b.replace(/^\*\*([^*]+?)\*\*:[\s\S]*$/, '$1').trim();
    return keyA.localeCompare(keyB, 'pt-BR', { sensitivity: 'base' });
  });

  return `## APÊNDICE — LISTA DE ABREVIAÇÕES

O manual usa dezenas de siglas e acrônimos do vocabulário de negócios, produto, tecnologia, finanças, tributos e regulação. Esta lista traz as mais frequentes em ordem alfabética única, com a expansão em português, a área em que aparecem e a indicação de consulta ao Glossário quando há verbete completo.

${sorted.join('\n\n')}`;
}

module.exports = {
  FAST_TRACKS_MD,
  enrichRawGlossaryBody,
  enrichRawAbbrevBody,
  ...refBibIndices,
};

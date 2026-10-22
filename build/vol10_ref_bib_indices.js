/**
 * IGNIÇÃO v5.2 — Enriquecimento de Data de Compilação, Bibliografia Geral,
 * Índice Geral de Frameworks e Índice Remissivo (Volume 10).
 * Resolve integralmente os achados #5452 a #5454 e #5525 a #5621.
 */

function enrichDataCompilacaoBody(body) {
  return `## DATA DE COMPILAÇÃO E NOTA SOBRE ENVELHECIMENTO

**IGNIÇÃO v5.2 (Edição Narrativa Enxuta) — Dados verificados até maio de 2026.**

Esta edição foi consolidada e verificada até maio de 2026, refletindo o estado do ecossistema empreendedor brasileiro, o quadro legal e tributário vigente e a arquitetura de 10 volumes da coleção naquele momento. Partes da obra envelhecem em velocidades diferentes:

**Envelhece devagar (meia-vida de décadas):** frameworks clássicos de estratégia, produto e decisão (Porter, Osterwalder, Christensen, Grove, Moore, Ries), padrões psicológicos do fundador, dinâmicas societárias entre cofundadores, princípios de descoberta de cliente, estrutura lógica de *unit economics* e governança corporativa.

**Envelhece em anos (revisar a cada dois anos — revisão bienal recomendada):** quadro regulatório e tributário brasileiro — em especial a Reforma Tributária do Consumo (instituída pela **EC 132/2023** e regulamentada pela **LC 214/2025**, com alíquota-teste de 0,9% de CBS e 0,1% de IBS em 2026, entrada plena da CBS e extinção de PIS/Cofins em 2027, transição gradual de redução de ICMS, ISS e benefícios fiscais estaduais entre 2029 e 2032, e vigência integral do sistema dual IVA/IBS em 2033), as regras de tributação sobre altas rendas e dividendos (**Lei 15.270/2025**) e de redução de benefícios fiscais e adicional no Lucro Presumido (**LC 224/2025**) —, além de ferramentas de IA generativa, plataformas de distribuição digital, faixas típicas de *valuation* por estágio e instrumentos contratuais de captação.

**Envelhece em meses (verificar antes de decidir):** taxas de juros (Selic/CDI), múltiplos de *valuation* de mercado secundário e público, preços de APIs e modelos de IA de terceiros, portarias infralegais de agências reguladoras (BCB, CVM, ANPD, ANVISA, ANS, SPA/MF, MAPA, ANEEL), fundos de investimento ativos e estatísticas conjunturais das empresas citadas.

Ao consultar esta coleção após 2027, utilize este filtro temporal: os princípios de engenharia de negócios permanecem válidos, mas alíquotas, limites legais e parâmetros de mercado devem ser conferidos na legislação e nas fontes primárias vigentes na data da sua decisão.`;
}

const CURRICULO_LEITURA_POR_FASE_MD = `### Leituras essenciais por fase (Currículo curado das 21 fases)

Para o leitor que deseja aprofundar a bagagem conceitual em paralelo à execução prática de cada etapa, a sequência abaixo indica a leitura essencial para cada uma das **21 Fases (Fases 0 a 20)** da coleção, incluindo as **10 obras canônicas** que inspiraram a arquitetura narrativa de *IGNIÇÃO*:

- **[[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]] — Preparação do Empreendedor:** *The E-Myth Revisited* (*O Mito do Empreendedor*, Michael E. Gerber, 1995) e *The Founder's Dilemmas* (Noam Wasserman, 2012). O diagnóstico entre técnico, gerente e empreendedor e as decisões societárias iniciais antes do primeiro código.
- **[[IGNICAO-Vol-1-Ideacao#FASE 1 — ENCONTRAR A IDEIA|Fase 1 (Vol. 1)]] — Encontrar a Ideia:** *Zero to One* (*De Zero a Um*, Peter Thiel & Blake Masters, 2014). Como identificar segredos de mercado, fugir da competição comoditizada e pensar em monopólios criativos.
- **[[IGNICAO-Vol-1-Ideacao#FASE 2 — ARTICULAÇÃO E CAPTURA DA IDEIA|Fase 2 (Vol. 1)]] — Articulação e Captura da Ideia:** *Business Model Generation* (Alexander Osterwalder & Yves Pigneur, 2010) e *Running Lean* (Ash Maurya, 2012). Como tirar a ideia da cabeça e colocá-la em uma página auditável.
- **[[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]] — Construção da Teoria do Negócio:** *Thinking, Fast and Slow* (*Rápido e Devagar: Duas Formas de Pensar*, Daniel Kahneman, 2011) e os estudos do método científico aplicado ao empreendedorismo (Arnaldo Camuffo, Alfonso Gambardella & Chiara Spina, 2020–2024).
- **[[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]] — Descoberta do Problema:** *The Mom Test* (Rob Fitzpatrick, 2013). O livro mais curto e de maior retorno imediato sobre como entrevistar clientes sem ouvir elogios falsos.
- **[[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5 (Vol. 2)]] — Pesquisa com Usuários (Customer Discovery):** *Competing Against Luck* (Clayton M. Christensen et al., 2016) e *Demand-Side Sales 101* (Bob Moesta, 2020). A anatomia do *Jobs to Be Done* (JTBD) e das forças que fazem o cliente mudar de solução.
- **[[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]] — Mapeamento de Mercado e Concorrência:** *Competitive Strategy* (Michael E. Porter, 1980), *7 Powers* (Hamilton Helmer, 2016) e *Obviously Awesome* (April Dunford, 2019). Estrutura competitiva, fossos defensáveis e posicionamento.
- **[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7 (Vol. 3)]] — Formulação Rigorosa de Hipóteses:** *The Four Steps to the Epiphany* (Steve Blank, 2005) e *Thinking in Bets* (Annie Duke, 2018). Como transformar suposições em apostas *bet-the-company* falsificáveis.
- **[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8 (Vol. 3)]] — Experimentos de Validação do Problema e da Solução:** *The Lean Startup* (*A Startup Enxuta*, Eric Ries, 2011) e *The Right It* (Alberto Savoia, 2019). Ciclos construir-medir-aprender, *pretotyping* e dados com pele em jogo.
- **[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]] — Ideação e Prototipagem de Soluções:** *Sprint* (Jake Knapp, John Zeratsky & Braden Kowitz, 2016) e *Inspired* (Marty Cagan, 2017). Prototipagem rápida em cinco dias e descoberta de produto.
- **[[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10 (Vol. 3)]] — Testes de Solução e Usabilidade:** *Testing Business Ideas* (David J. Bland & Alexander Osterwalder, 2019) e *User Story Mapping* (Jeff Patton, 2014). Validação de usabilidade e recorte cirúrgico de escopo antes da engenharia pesada.
- **[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] — MVP e Experimentos de Mercado:** *Rework* (*Rework: Reinvente a Sua Empresa*, Jason Fried & David Heinemeier Hansson, 2010) e *Shape Up* (Ryan Singer, 2019). Como colocar o produto mínimo na rua sem inchaço e com apetite de tempo fixo.
- **[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]] — Validação do Modelo de Negócio:** *Lean Analytics* (Alistair Croll & Benjamin Yoskovitz, 2013) e *Subscribed* (Tien Tzuo, 2018). As métricas financeiras e de coorte que provam se a equação unitária fecha.
- **[[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] — Product-Market Fit:** *Crossing the Chasm* (*Atravessando o Abismo*, Geoffrey A. Moore, 1991) e *Traction: How Any Startup Can Achieve Explosive Customer Growth* (*Tração*, Gabriel Weinberg & Justin Mares, 2015). A travessia dos *early adopters* para o mercado pragmático e os 19 canais de aquisição (*Bullseye*).
- **[[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]] — Capital para Escala, Rodadas e Eficiência Financeira:** *Venture Deals* (Brad Feld & Jason Mendelson, 2019) e *The Most Important Thing* (Howard Marks, 2011). Mecânica de *term sheets*, *cap table*, risco e alocação de capital.
- **[[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]] — Máquina de Receita, Go-to-Market em Escala e Expansão:** *Predictable Revenue* (*Receita Previsível*, Aaron Ross & Marylou Tyler, 2011) e *The Challenger Sale* (Matthew Dixon & Brent Adamson, 2011). Especialização de funil B2B e vendas consultivas complexas.
- **[[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]] — Time, Liderança Executiva e Cultura em Escala:** *High Output Management* (*Administração de Alta Performance*, Andrew S. Grove, 1983), *The Hard Thing About Hard Things* (*O Lado Difícil das Situações Difíceis*, Ben Horowitz, 2014) e *Scaling People* (Claire Hughes Johnson, 2023). Alavancagem gerencial, liderança em tempos de guerra e arquitetura humana.
- **[[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]] — Operações, Processos e Gestão em Escala:** *Traction: Get a Grip on Your Business* (Gino Wickman, 2007 — sistema EOS), *Measure What Matters* (John Doerr, 2018) e *Continuous Discovery Habits* (Teresa Torres, 2021). Cadência operacional, OKRs e engenharia/produto em escala.
- **[[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]] — Estruturação Jurídica, Societária e Blindagem Operacional:** *Getting to Yes* (*Como Chegar ao Sim*, Roger Fisher & William Ury, 1981) e *Never Split the Difference* (*Negocie como se Sua Vida Dependesse Disso*, Chris Voss, 2016), aliados ao estudo direto da LC 182/2021, Lei 6.404/1976 e Lei 13.709/2018 (LGPD).
- **[[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]] — Reinvenção e Segunda Curva:** *The Innovator's Dilemma* (*O Dilema da Inovação*, Clayton M. Christensen, 1997) e *Lead and Disrupt* (Charles A. O'Reilly & Michael L. Tushman, 2016). Ambidestria organizacional e construção da segunda curva antes que a primeira esgote.
- **[[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]] — Estratégia de Saída (Exit Strategy):** *Good to Great* (*Empresas Feitas para Vencer*, Jim Collins, 2001) e *Built to Last* (*Feitas para Durar*, Jim Collins & Jerry I. Porras, 1994). A preparação para M&A, IPO, *secondaries* ou perenidade geradora de dividendos.`;

function enrichBibliografiaBody(body) {
  return `## BIBLIOGRAFIA GERAL

> Obras citadas e utilizadas como base conceitual ao longo da coleção, organizadas alfabeticamente por sobrenome do autor (com título, editora e ano de publicação). Para ensaios digitais, relatórios setoriais e bases institucionais, indicam-se o domínio de referência e a data de verificação. Para obras estrangeiras, registra-se o título original em inglês acompanhado da edição brasileira quando consagrada no país.

> [!note] Como ler a bibliografia
> Esta seção começa com o **Currículo curado de leituras essenciais para as 21 Fases da jornada** e, em seguida, consolida os livros, artigos científicos, ensaios seminais, relatórios de ecossistema e diplomas legais brasileiros citados nos Volumes 1 a 10.

${CURRICULO_LEITURA_POR_FASE_MD}

---

### Livros

Blank, Steve. *The Four Steps to the Epiphany: Successful Strategies for Products that Win.* K&S Ranch, 2005 (rascunhos originais de curso em 2003; 2ª ed. Wiley, 2013).

Blank, Steve, e Bob Dorf. *The Startup Owner's Manual: The Step-By-Step Guide for Building a Great Company.* K&S Ranch, 2012.

Bland, David J., e Alexander Osterwalder. *Testing Business Ideas: A Field Guide for Rapid Experimentation.* Wiley, 2019.

Bosworth, Mike. *Solution Selling: Creating Buyers in Difficult Selling Markets.* McGraw-Hill, 1994.

Bryar, Colin, e Bill Carr. *Working Backwards: Insights, Stories, and Secrets from Inside Amazon.* St. Martin's Press, 2021.

Buckingham, Marcus, e Curt Coffman. *First, Break All the Rules: What the World's Greatest Managers Do Differently.* Simon & Schuster, 1999.

Cagan, Marty. *Inspired: How to Create Tech Products Customers Love.* 2ª ed. Wiley, 2017.

Chen, Andrew. *The Cold Start Problem: How to Start and Scale Network Effects.* Harper Business, 2021.

Chesbrough, Henry W. *Open Innovation: The New Imperative for Creating and Profiting from Technology.* Harvard Business Review Press, 2003.

Christensen, Clayton M. *The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail.* Harvard Business Review Press, 1997. (Edição brasileira: *O Dilema da Inovação.* M.Books / Alta Books.)

Christensen, Clayton M., Taddy Hall, Karen Dillon, e David S. Duncan. *Competing Against Luck: The Story of Innovation and Customer Choice.* Harper Business, 2016.

Christensen, Clayton M., e Michael E. Raynor. *The Innovator's Solution: Creating and Sustaining Successful Growth.* Harvard Business Review Press, 2003.

Cialdini, Robert B. *Influence: The Psychology of Persuasion.* Harper Business, 1984 (edição revista e ampliada, 2006 e 2021; edição brasileira: *As Armas da Persuasão.* Sextante).

Cialdini, Robert B. *Pre-Suasion: A Revolutionary Way to Influence and Persuade.* Simon & Schuster, 2016.

Collins, Jim. *Good to Great: Why Some Companies Make the Leap and Others Don't.* Harper Business, 2001. (Edição brasileira: *Empresas Feitas para Vencer.* Alta Books.)

Collins, Jim, e Jerry I. Porras. *Built to Last: Successful Habits of Visionary Companies.* Harper Business, 1994. (Edição brasileira: *Feitas para Durar.* Rocco / Alta Books.)

Coyle, Daniel. *The Culture Code: The Secrets of Highly Successful Groups.* Bantam, 2018.

Croll, Alistair, e Benjamin Yoskovitz. *Lean Analytics: Use Data to Build a Better Startup Faster.* O'Reilly, 2013.

Dixon, Matthew, e Brent Adamson. *The Challenger Sale: Taking Control of the Customer Conversation.* Portfolio, 2011.

Doerr, John. *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs.* Portfolio, 2018. (Edição brasileira: *Avalie o Que Importa.* Alta Books, 2019.)

Drucker, Peter F. *The Effective Executive.* Harper Business, 1967. (Edição brasileira: *O Gestor Eficaz.* LTC.)

Drucker, Peter F. *Management: Tasks, Responsibilities, Practices.* Harper Business, 1973.

Drucker, Peter F. *Innovation and Entrepreneurship: Practice and Principles.* Harper Business, 1985.

Duke, Annie. *Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts.* Portfolio, 2018.

Dunford, April. *Obviously Awesome: How to Nail Product Positioning so Customers Get It, Buy It, Love It.* Ambient Press, 2019.

Eyal, Nir. *Hooked: How to Build Habit-Forming Products.* Portfolio, 2014.

Feld, Brad, e Jason Mendelson. *Venture Deals: Be Smarter Than Your Lawyer and Venture Capitalist.* 4ª ed. Wiley, 2019.

Fisher, Roger, e William Ury. *Getting to Yes: Negotiating Agreement Without Giving In.* Penguin, 1981. (Edição brasileira: *Como Chegar ao Sim.* Sextante.)

Fitzpatrick, Rob. *The Mom Test: How to Talk to Customers and Learn if Your Business is a Good Idea When Everyone is Lying to You.* Founder Centric, 2013.

Forsgren, Nicole, Jez Humble, e Gene Kim. *Accelerate: The Science of Lean Software and DevOps.* IT Revolution Press, 2018.

Fried, Jason, e David Heinemeier Hansson. *Rework.* Crown Business, 2010. (Edição brasileira: *Rework: Reinvente a Sua Empresa.* Sextante, 2012.)

Gerber, Michael E. *The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It.* Harper Business, 1995. (Edição brasileira: *O Mito do Empreendedor.* Fundamento.)

Gompers, Paul A., e Josh Lerner. *The Money of Invention: How Venture Capital Creates New Wealth.* Harvard Business Review Press, 2001.

Grove, Andrew S. *High Output Management.* Random House, 1983 (reedição Vintage, 1995; edição brasileira: *Administração de Alta Performance.* Benvirá, 2020).

Hamel, Gary, e C. K. Prahalad. *Competing for the Future.* Harvard Business Review Press, 1994.

Harnish, Verne. *Scaling Up: How a Few Companies Make It and Why the Rest Don't.* Gazelles, 2014.

Hastings, Reed, e Erin Meyer. *No Rules Rules: Netflix and the Culture of Reinvention.* Penguin Press, 2020. (Edição brasileira: *A Regra É Não Ter Regras.* Intrínseca, 2020.)

Helmer, Hamilton. *7 Powers: The Foundations of Business Strategy.* Deep Strategy LLC, 2016.

Hoffman, Reid, e Chris Yeh. *Blitzscaling: The Lightning-Fast Path to Building Massively Valuable Companies.* Currency, 2018.

Horowitz, Ben. *The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers.* Harper Business, 2014. (Edição brasileira: *O Lado Difícil das Situações Difíceis.* Martins Fontes, 2015.)

Johnson, Claire Hughes. *Scaling People: Tactics for Management and Company Building.* Stripe Press, 2023.

Kahneman, Daniel. *Thinking, Fast and Slow.* Farrar, Straus and Giroux, 2011. (Edição brasileira: *Rápido e Devagar: Duas Formas de Pensar.* Objetiva, 2012.)

Kawasaki, Guy. *The Art of the Start 2.0: The Time-Tested, Battle-Hardened Guide for Anyone Starting Anything.* Portfolio, 2015.

Kim, W. Chan, e Renée Mauborgne. *Blue Ocean Strategy: How to Create Uncontested Market Space and Make the Competition Irrelevant.* Harvard Business Review Press, 2005. (Edição brasileira: *A Estratégia do Oceano Azul.* Sextante.)

Klein, Gary. *Sources of Power: How People Make Decisions.* MIT Press, 1998.

Knapp, Jake, John Zeratsky, e Braden Kowitz. *Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days.* Simon & Schuster, 2016.

Kohavi, Ron, Diane Tang, e Ya Xu. *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing.* Cambridge University Press, 2020.

Lafley, A. G., e Roger L. Martin. *Playing to Win: How Strategy Really Works.* Harvard Business Review Press, 2013.

Lencioni, Patrick. *The Five Dysfunctions of a Team: A Leadership Fable.* Jossey-Bass, 2002. (Edição brasileira: *Os 5 Desafios das Equipes.* Sextante.)

Marks, Howard. *The Most Important Thing: Uncommon Sense for the Thoughtful Investor.* Columbia Business School Publishing, 2011 (edição *Illuminated*, 2013).

Maurya, Ash. *Running Lean: Iterate from Plan A to a Plan That Works.* O'Reilly, 2012 (3ª ed. 2022).

Moesta, Bob. *Demand-Side Sales 101: Stop Selling and Help Your Customers Make Progress.* Lioncrest, 2020.

Moore, Geoffrey A. *Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers.* Harper Business, 1991 (3ª ed. revista, 2014; edição brasileira: *Atravessando o Abismo.* Alta Books).

Munger, Charles T. *Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger.* Editado por Peter D. Kaufman. Donning Company, 2005 (edição expandida Stripe Press, 2023).

O'Reilly, Charles A., e Michael L. Tushman. *Lead and Disrupt: How to Solve the Innovator's Dilemma.* Stanford Business Books, 2016.

Osterwalder, Alexander, e Yves Pigneur. *Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers.* Wiley, 2010.

Osterwalder, Alexander, Yves Pigneur, Greg Bernarda, e Alan Smith. *Value Proposition Design: How to Create Products and Services Customers Want.* Wiley, 2014.

Patton, Jeff. *User Story Mapping: Discover the Whole Story, Build the Right Product.* O'Reilly, 2014.

Pink, Daniel H. *Drive: The Surprising Truth About What Motivates Us.* Riverhead Books, 2009.

Porter, Michael E. *Competitive Strategy: Techniques for Analyzing Industries and Competitors.* Free Press, 1980.

Porter, Michael E. *Competitive Advantage: Creating and Sustaining Superior Performance.* Free Press, 1985.

Rackham, Neil. *SPIN Selling.* McGraw-Hill, 1988. (Edição brasileira: *Alcançando Excelência em Vendas — SPIN Selling.* M.Books.)

Ramachandran, Al, Dave Peterson, Christopher Lochhead, e Kevin Maney. *Play Bigger: How Pirates, Dreamers, and Innovators Create and Dominate Markets.* Harper Business, 2016.

Reichheld, Fred. *The Ultimate Question 2.0: How Net Promoter Companies Thrive in a Customer-Driven World.* Harvard Business Review Press, 2011.

Ries, Al, e Jack Trout. *Positioning: The Battle for Your Mind.* McGraw-Hill, 1981 (edição de 20º aniversário, 2001).

Ries, Eric. *The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses.* Crown Business, 2011. (Edição brasileira: *A Startup Enxuta.* Lua de Papel / Sextante, 2012.)

Ross, Aaron, e Marylou Tyler. *Predictable Revenue: Turn Your Business Into a Sales Machine with the \\$100 Million Best Practices of Salesforce.com.* PebbleStorm, 2011. (Edição brasileira: *Receita Previsível.* Autêntica Business, 2017.)

Rumelt, Richard P. *Good Strategy / Bad Strategy: The Difference and Why It Matters.* Crown Business, 2011.

Sarasvathy, Saras D. *Effectuation: Elements of Entrepreneurial Expertise.* Edward Elgar, 2008.

Savoia, Alberto. *The Right It: Why So Many Ideas Fail and How to Make Sure Yours Succeed.* HarperOne, 2019.

Scott, Kim. *Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity.* St. Martin's Press, 2017. (Edição brasileira: *Empatia Assertiva.* HSM, 2018.)

Singer, Ryan. *Shape Up: Stop Running in Circles and Ship Work that Matters.* Basecamp, 2019.

Smart, Bradford D. *Topgrading: How Leading Companies Win by Hiring, Coaching, and Keeping the Best People.* Portfolio, 1999 (3ª ed. 2012).

Smart, Geoff, e Randy Street. *Who: The A Method for Hiring.* Ballantine, 2008.

Thaler, Richard H., e Cass R. Sunstein. *Nudge: Improving Decisions About Health, Wealth, and Happiness.* Yale University Press, 2008.

Thiel, Peter, e Blake Masters. *Zero to One: Notes on Startups, or How to Build the Future.* Crown Business, 2014. (Edição brasileira: *De Zero a Um: O Que Aprender sobre Empreendedorismo com o Vale do Silício.* Objetiva, 2014.)

Torres, Teresa. *Continuous Discovery Habits: Discover Products that Create Customer Value and Business Value.* Product Talk, 2021.

Tzuo, Tien, e Gabe Weisert. *Subscribed: Why the Subscription Model Will Be Your Company's Future and What to Do About It.* Portfolio, 2018.

Ulwick, Anthony W. *What Customers Want: Using Outcome-Driven Innovation to Create Breakthrough Products and Services.* McGraw-Hill, 2005.

Ulwick, Anthony W. *Jobs to Be Done: Theory to Practice.* Idea Bite Press, 2016.

Voss, Chris, e Tahl Raz. *Never Split the Difference: Negotiating As If Your Life Depended On It.* Harper Business, 2016. (Edição brasileira: *Negocie como se Sua Vida Dependesse Disso.* Sextante, 2017.)

Wasserman, Noam. *The Founder's Dilemmas: Anticipating and Avoiding the Pitfalls That Can Sink a Startup.* Princeton University Press, 2012.

Weinberg, Gabriel, e Justin Mares. *Traction: How Any Startup Can Achieve Explosive Customer Growth.* Portfolio, 2015 (1ª ed. autopublicada em 2014; edição brasileira: *Tração: Domine os Canais de Crescimento para sua Startup.* Alta Books, 2020).

Wickman, Gino. *Traction: Get a Grip on Your Business.* BenBella Books, 2007 (edição expandida, 2011).

Wiseman, Liz. *Multipliers: How the Best Leaders Make Everyone Smarter.* Harper Business, 2010.

### Artigos acadêmicos e papers

Ansoff, H. Igor. "Strategies for Diversification." *Harvard Business Review* 35(5), 1957, pp. 113-124.

Blank, Steve. "Why the Lean Start-Up Changes Everything." *Harvard Business Review* 91(5), 2013, pp. 63-72.

Camuffo, Arnaldo, Alessandro Cordova, Alfonso Gambardella, e Chiara Spina. "A Scientific Approach to Entrepreneurial Decision Making: Evidence from a Randomized Control Trial." *Management Science* 66(2), 2020, pp. 564-586.

Camuffo, Arnaldo, Alfonso Gambardella, e Chiara Spina. "Why Entrepreneurs Should Think Like Scientists." *Harvard Business Review* (online), julho de 2024 (e série executiva correlata de divulgação do método científico, 2020–2024).

Camuffo, Arnaldo, Alfonso Gambardella, Danilo Messinese, Elena Novelli, Emilio Paolucci, e Chiara Spina. "A Scientific Approach to Entrepreneurial Decision-Making: Large-Scale Replication and Extension." *Strategic Management Journal* 45(6), 2024, pp. 1209-1237.

Coali, Andrea, Arnaldo Camuffo, e Alfonso Gambardella. "When Do Entrepreneurs Benefit from Acting Like Scientists?" Working paper, Bocconi University / SSRN, 2024.

Danziger, Shai, Jonathan Levav, e Liora Avnaim-Pesso. "Extraneous Factors in Judicial Decisions." *Proceedings of the National Academy of Sciences (PNAS)* 108(17), 2011, pp. 6889-6892 (acompanhado das análises metodológicas posteriores sobre efeitos de ordem de agendamento).

Felin, Teppo, Alfonso Gambardella, e Todd Zenger. "Value Lab: The Theory-Based Approach to Strategy and Entrepreneurship." *Strategy Science* (e working papers correlatos sobre *Theory-Based View*, 2020–2024).

Hagel, John, e Marc Singer. "Unbundling the Corporation." *Harvard Business Review* 77(2), 1999, pp. 133-141.

Kahneman, Daniel, e Amos Tversky. "Intuitive Prediction: Biases and Corrective Procedures." *TIMS Studies in Management Science* 12, 1979, pp. 313-327. (Origem do conceito de *planning fallacy*.)

Kozyrkov, Cassie. "The First Thing Great Decision Makers Do." *Harvard Business Review* (online), junho de 2019.

Lovallo, Dan, e Daniel Kahneman. "Delusions of Success: How Optimism Undermines Executives' Decisions." *Harvard Business Review* 81(7), 2003, pp. 56-63.

Norton, Michael I., Daniel Mochon, e Dan Ariely. "The IKEA Effect: When Labor Leads to Love." *Journal of Consumer Psychology* 22(3), 2012, pp. 453-460.

Novelli, Elena, e Chiara Spina. "Making Business Model Decisions Like Scientists: Strategic Commitment, Uncertainty, and Economic Performance." *Strategic Management Journal* 45(12), 2024.

Ott, Timothy E., e Kathleen M. Eisenhardt. "Decision Weaving: Forming Novel, Complex Strategy in Entrepreneurial Settings." *Strategic Management Journal* 41(12), 2020, pp. 2275-2314.

Porter, Michael E. "How Competitive Forces Shape Strategy." *Harvard Business Review* 57(2), 1979, pp. 137-145.

Porter, Michael E. "The Five Competitive Forces That Shape Strategy." *Harvard Business Review* 86(1), 2008, pp. 78-93.

Prahalad, C. K., e Gary Hamel. "The Core Competence of the Corporation." *Harvard Business Review* 68(3), 1990, pp. 79-91.

Sarasvathy, Saras D. "Causation and Effectuation: Toward a Theoretical Shift from Economic Inevitability to Entrepreneurial Contingency." *Academy of Management Review* 26(2), 2001, pp. 243-263.

Snowden, David J., e Mary E. Boone. "A Leader's Framework for Decision Making." *Harvard Business Review* 85(11), 2007, pp. 68-76. (Origem do framework *Cynefin*.)

### Ensaios, palestras e publicações digitais

Andreessen, Marc. "The Pmarca Guide to Startups" (série de ensaios sobre Product/Market Fit, equipe e mercado, 2007) e coletânea de ensaios a16z.com (2009 em diante). Acesso em maio de 2026.

Bezos, Jeff. "Cartas anuais aos acionistas da Amazon (1997 a 2020)." Disponíveis em aboutamazon.com e arquivos públicos da SEC. Acesso em maio de 2026.

Ellis, Sean. "The Startup Pyramid (40% Test for Product/Market Fit)." startup-marketing.com, 2009. Acesso em maio de 2026.

French, Adam (Antler). "The Ten Gates: Building an Outlier Company from Day Zero" e documentação metodológica Antler (*Idea-Wedge-Scale* e *Committed Next Move*). antler.co, 2017–2025. Acesso em maio de 2026.

Graham, Paul. "How to Start a Startup." paulgraham.com/start.html, março de 2005. Acesso em maio de 2026.

Graham, Paul. "The 18 Mistakes That Kill Startups." paulgraham.com/startupmistakes.html, outubro de 2006. Acesso em maio de 2026.

Graham, Paul. "Keep Your Identity Small." paulgraham.com/identity.html, fevereiro de 2009. Acesso em maio de 2026.

Graham, Paul. "Maker's Schedule, Manager's Schedule." paulgraham.com/makersschedule.html, julho de 2009. Acesso em maio de 2026.

Graham, Paul. "Mean People Fail." paulgraham.com/mean.html, novembro de 2014. Acesso em maio de 2026.

Graham, Paul. "Default Alive or Default Dead?" paulgraham.com/aord.html, outubro de 2015. Acesso em maio de 2026.

Graham, Paul. "Earnestness." paulgraham.com/earnest.html, dezembro de 2020. Acesso em maio de 2026.

Graham, Paul, e Brian Chesky. "Founder Mode" (ensaio de Paul Graham em paulgraham.com/foundermode.html a partir da palestra de Brian Chesky no evento da Y Combinator). Setembro de 2024. Acesso em maio de 2026.

McClure, Dave. "Startup Metrics for Pirates: AARRR!" 500hats.com, 2007. Acesso em maio de 2026.

Rachleff, Andy. "The Law of Market Failure" e notas do curso CS183 / Stanford GSB sobre *Value Hypothesis*, *Growth Hypothesis* e *Product-Market Fit*. Wealthfront Blog, 2013–2015. Acesso em maio de 2026.

Rajaram, Gokul. "SPADE: A Toolkit for Making Better Decisions." Square / Medium e gokulrajaram.com, 2015 (expandido em 2019). Acesso em maio de 2026.

Ressi, Adeo. "FAST Agreement (Founder/Advisor Standard Template)." Founder Institute, 2011 (e revisões posteriores em fi.co/fast). Acesso em maio de 2026.

Sacks, David. "The Burn Multiple" e "The SaaS Metrics That Matter." Craft Ventures / Substack, 2020–2023. Acesso em maio de 2026.

Thompson, Ben. "Stratechery: Aggregation Theory and Tech Strategy." stratechery.com, 2013 em diante. Acesso em maio de 2026.

### Estudos, relatórios setoriais e bases institucionais brasileiras

ABStartups (Associação Brasileira de Startups). *Mapeamento do Ecossistema Brasileiro de Startups e Relatórios Anuais.* abstartups.com.br. Acesso em maio de 2026.

ABVCAP (Associação Brasileira de Private Equity e Venture Capital) e TTR Data. *Consolidação de Dados da Indústria de Private Equity, Venture Capital e Corporate Venture no Brasil.* abvcap.com.br. Acesso em maio de 2026.

ANBIMA (Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais). *Boletins de Mercado de Capitais, FIDCs e Fundos de Investimento (Resolução CVM 175).* anbima.com.br. Acesso em maio de 2026.

Banco Central do Brasil (BCB). *Relatório de Economia Bancária, Estatísticas do Pix, Open Finance e Piloto Drex.* bcb.gov.br. Acesso em maio de 2026.

Brasscom (Associação das Empresas de Tecnologia da Informação e Comunicação e de Tecnologias Digitais). *Relatório Setorial de Macrossetor de TIC no Brasil.* brasscom.org.br. Acesso em maio de 2026.

Distrito. *Panorama Tech Brasil e Inside Reports Setoriais (Fintech, Agtech, Healthtech, Retailtech, Edtech e B2B SaaS).* distrito.me. Acesso em maio de 2026.

Endeavor Brasil. *Estudos sobre Scale-ups, Gargalos Regulatórios e Empreendedorismo de Alto Impacto no Brasil.* endeavor.org.br. Acesso em maio de 2026.

IBGE (Instituto Brasileiro de Geografia e Estatística). *Demografia das Empresas e Estatísticas do Cadastro Central de Empresas (CEMPRE) / Censo Demográfico 2022 e Projeções Populacionais.* ibge.gov.br. Acesso em maio de 2026.

Imprensa especializada de negócios, tecnologia e mercado de capitais no Brasil (acervos de reportagens sobre rodadas, M&A, IPOs e reestruturações citadas nos estudos de caso): *Valor Econômico* (valor.globo.com), *Pipeline Valor* (pipelinevalor.globo.com), *Brazil Journal* (braziljournal.com) e *NeoFeed* (neofeed.com.br). Acesso em maio de 2026.

Sebrae (Serviço Brasileiro de Apoio às Micro e Pequenas Empresas). *Sobrevivência das Empresas no Brasil e Pesquisas sobre MEI, Microempresas e Pequenos Negócios.* sebrae.com.br. Acesso em maio de 2026.

### Documentos legais e regulatórios brasileiros

Constituição da República Federativa do Brasil de 1988, com as alterações da **Emenda Constitucional 132/2023** (Reforma Tributária do Consumo — institui o IBS, a CBS e o Imposto Seletivo, e estabelece o cronograma de transição de 2026 a 2033).

Lei 4.595/1964. Dispõe sobre a Política e as Instituições Monetárias, Bancárias e Creditícias e cria o Conselho Monetário Nacional (Sistema Financeiro Nacional).

Lei 6.404/1976. Lei das Sociedades por Ações (S.A.), incluindo regras sobre conselho de administração, acordo de acionistas (art. 118), opções de compra de ações (art. 168, § 3º) e cisão/incorporação (arts. 227 a 233).

Lei 8.078/1990. Código de Defesa do Consumidor (CDC).

Lei 8.248/1991. Lei de Informática (incentivos fiscais para capacitação e competitividade do setor de TIC e hardware, atualizada pela Lei 13.969/2019).

Lei 9.249/1995. Legislação do IRPJ e da CSLL, incluindo o regime de Juros sobre o Capital Próprio (JCP, art. 9º).

Lei 9.279/1996. Lei da Propriedade Industrial (marcas, patentes, desenhos industriais e repressão à concorrência desleal perante o INPI).

Lei 9.456/1997. Lei de Proteção de Cultivares (SNPC/MAPA).

Lei 9.609/1998. Lei do Software (proteção da propriedade intelectual de programa de computador e regras de titularidade de código desenvolvido sob vínculo ou encomenda).

Lei 10.101/2000. Dispõe sobre a Participação dos Trabalhadores nos Lucros ou Resultados da empresa (PLR).

Lei 10.406/2002. Código Civil Brasileiro, em especial o Livro II — Do Direito de Empresa e o regime das Sociedades Limitadas (arts. 1.052 a 1.087).

Lei 10.973/2004. Lei de Inovação Tecnológica (atualizada pelo Novo Marco Legal de Ciência, Tecnologia e Inovação — Lei 13.243/2016 e Decreto 9.283/2018).

Lei 11.101/2005. Regula a Recuperação Judicial, a Extrajudicial e a Falência do empresário e da sociedade empresária (atualizada pela Lei 14.112/2020).

Lei 11.196/2005. Lei do Bem (incentivos fiscais à inovação tecnológica e P&D no regime de Lucro Real, arts. 17 a 26).

Lei Complementar 123/2006. Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte (Simples Nacional), com as alterações da **Lei Complementar 155/2016** (investidor-anjo, arts. 61-A a 61-D) e da **Lei Complementar 188/2021**.

Lei 11.788/2008. Lei do Estágio.

Lei 12.305/2010. Política Nacional de Resíduos Sólidos (PNRS).

Lei 12.529/2011. Estrutura o Sistema Brasileiro de Defesa da Concorrência (CADE) e dispõe sobre a prevenção e repressão às infrações contra a ordem econômica.

Lei 12.846/2013. Lei Anticorrupção Empresarial (responsabilização objetiva administrativa e civil de pessoas jurídicas pela prática de atos contra a administração pública).

Lei 12.865/2013. Marco Legal dos Arranjos e das Instituições de Pagamento integrantes do Sistema de Pagamentos Brasileiro (SPB).

Lei 13.123/2015. Marco Legal da Biodiversidade (acesso ao patrimônio genético, conhecimento tradicional associado, repartição de benefícios e cadastro no SisGen).

Lei 13.261/2016. Dispõe sobre a normatização, a fiscalização e a comercialização de planos de assistência funerária.

Lei 13.467/2017. Reforma Trabalhista (alterações na CLT — Decreto-Lei 5.452/1943, incluindo teletrabalho, negociação coletiva e empregado hipersuficiente).

Lei 13.483/2017. Institui a Taxa de Longo Prazo (TLP) e disciplina o uso da TJLP para cálculo de JCP.

Lei 13.576/2017. Institui a Política Nacional de Biocombustíveis (RenovaBio) e os Créditos de Descarbonização (CBIOs).

Lei 13.640/2018. Regulamenta o transporte remunerado privado individual de passageiros por aplicativos.

Lei 13.709/2018. Lei Geral de Proteção de Dados Pessoais (LGPD).

Lei 13.787/2018. Dispõe sobre a digitalização e a utilização de sistemas informatizados para a guarda, o armazenamento e o manuseio de prontuário de paciente.

Lei 13.966/2019. Nova Lei de Franquias Empresariais (revogou a antiga Lei 8.955/1994; disciplina a Circular de Oferta de Franquia — COF).

Lei 14.026/2020. Novo Marco Legal do Saneamento Básico.

Lei 14.133/2021. Nova Lei de Licitações e Contratos Administrativos (revogou a antiga Lei 8.666/1993; disciplina o Diálogo Competitivo, o PMI e os Acordos de Cooperação Técnica).

Lei Complementar 182/2021. Marco Legal das Startups e do Empreendedorismo Inovador (disciplina o Contrato de Opção de Compra de Participação Societária — COCP, o mútuo conversível, a proteção ao investidor-anjo contra desconsideração da personalidade jurídica e o Contrato Público para Solução Inovadora — CPSI).

Lei 14.300/2022. Marco Legal da Microgeração e Minigeração Distribuída de Energia Elétrica.

Lei 14.442/2022. Dispõe sobre o auxílio-alimentação (PAT) e regras de teletrabalho.

Lei 14.460/2022 e **Medida Provisória 1.317/2025**. Transformaram a ANPD em autarquia de natureza especial e, em 2025, em Agência Nacional de Proteção de Dados, integrante do quadro das agências reguladoras federais.

Lei 14.478/2022 e **Decreto 11.563/2023**. Marco Legal dos Criptoativos e designação do Banco Central do Brasil como regulador das Prestadoras de Serviços de Ativos Virtuais (PSAV / VASPs).

Lei 14.510/2022. Autoriza e disciplina a prática da telessaúde e telemedicina em todo o território nacional em caráter permanente.

Lei 14.754/2023. Tributação de aplicações em fundos de investimento no país (fundos exclusivos) e de rendimentos e controladas no exterior (*offshores* e *trusts*).

Lei 14.785/2023. Nova Lei de Defensivos Agrícolas / Agrotóxicos (revogou a antiga Lei 7.802/1989) e **Lei 15.070/2024** (Marco Legal dos Bioinsumos).

Lei 14.790/2023. Regulamenta as apostas de quota fixa (*iGaming / Bets*) sob supervisão da Secretaria de Prêmios e Apostas do Ministério da Fazenda (SPA/MF).

Lei 14.852/2024. Marco Legal dos Jogos Eletrônicos no Brasil.

Lei 14.967/2024. Estatuto da Segurança Privada e da Segurança das Instituições Financeiras.

Lei 14.993/2024. Lei do Combustível do Futuro (programas nacionais de SAF, Diesel Verde, Biometano e captura e estocagem geológica de carbono — CCS/BECCS).

Lei Complementar 214/2025. Regulamenta a Reforma Tributária do Consumo (institui o IBS, a CBS, o Imposto Seletivo, o *Split Payment* inteligente e os regimes diferenciados e específicos).

Lei Complementar 224/2025. Estabelece a redução linear de incentivos e benefícios fiscais federais, o acréscimo de 10% nos percentuais de presunção do Lucro Presumido sobre a parcela da receita bruta trimestral excedente a R$ 1,25 milhão (R$ 5 milhões anuais) e ajustes em JCP a partir de 2026.

Lei 15.270/2025. Institui a retenção de IRRF de 10% sobre dividendos pagos a uma mesma pessoa física acima de R$ 50 mil por mês por uma mesma empresa e o Imposto de Renda Pessoa Física Mínimo (IRPFM) progressivo até 10% para rendas anuais superiores a R$ 600 mil a partir de 2026.

Projeto de Lei 2.338/2023. Marco Legal da Inteligência Artificial no Brasil (aprovado no Senado Federal e em tramitação na Câmara dos Deputados em 2025/2026).

Decreto 9.057/2017 e **Decreto 12.456/2025**. Regulamentação da Educação a Distância (EAD) e Novo Marco Regulatório da EAD no ensino superior brasileiro (limites de carga a distância, cursos 100% presenciais obrigatórios e formatos semipresenciais).

Decreto 11.856/2023. Institui a Política Nacional de Cibersegurança (PNCiber).

Resolução CVM 88/2022. Disciplina as ofertas públicas de distribuição de valores mobiliários de emissão de sociedades empresárias de pequeno porte realizadas com dispensa de registro por meio de plataforma eletrônica de investimento participativo (*equity crowdfunding*, substituindo a antiga ICVM 588/2017).

Resolução CVM 175/2022 (e Anexo Normativo II). Marco regulatório dos Fundos de Investimento no Brasil, incluindo os Fundos de Investimento em Direitos Creditórios (FIDCs — revogando integralmente a antiga Instrução CVM 356/2001) e os Fundos de Investimento em Participações (FIPs, Anexo Normativo IV).

Instrução Normativa RFB 2.296/2025. Disciplina operacional da Receita Federal sobre limites de apuração, benefícios fiscais e regras de transição tributária aplicáveis a partir do exercício de 2026.

Legislação Estadual de Santa Catarina (RICMS/SC, Anexo 2, arts. 246 e seguintes — **TTD 409 e TTD 410**). Tratamentos Tributários Diferenciados para operações de comércio exterior e importação portuária/aeroportuária, sujeitos ao cronograma constitucional de transição e extinção gradual de benefícios de ICMS entre 2029 e 2032 (EC 132/2023).`;
}

function enrichIndiceFrameworksBody(body, bgItems, czItems, embeddedItemLocation) {
  const catalogRows = [];
  if (bgItems && embeddedItemLocation) {
    for (const [code, bgObj] of bgItems.entries()) {
      const loc = embeddedItemLocation.get(code);
      if (!loc) continue;
      const whereLabel = loc.phaseNewNum !== null && loc.phaseNewNum !== undefined
        ? `Fase ${loc.phaseNewNum} (Vol. ${loc.volNum})`
        : `Capítulo ${loc.chapNum} (Vol. ${loc.volNum})`;
      const cleanTitle = (bgObj.title || '').replace(/\s*—\s*/g, ': ');
      catalogRows.push(
        `| ${code} | ${cleanTitle} | [[${loc.volSlug}#${loc.heading}|${whereLabel}]] |`
      );
    }
  }
  const canvasRows = [];
  if (czItems && embeddedItemLocation) {
    for (const [code, czObj] of czItems.entries()) {
      const loc = embeddedItemLocation.get(code);
      if (!loc) continue;
      const whereLabel = loc.phaseNewNum !== null && loc.phaseNewNum !== undefined
        ? `Fase ${loc.phaseNewNum} (Vol. ${loc.volNum})`
        : `Capítulo ${loc.chapNum} (Vol. ${loc.volNum})`;
      const cleanTitle = (czObj.title || '').replace(/\s*—\s*/g, ': ');
      canvasRows.push(
        `| ${code} | ${cleanTitle} | [[${loc.volSlug}#${loc.heading}|${whereLabel}]] |`
      );
    }
  }

  const fullCatalogMd = catalogRows.length > 0
    ? `\n\n### Catálogo Completo dos 164 Frameworks da Coleção (Volumes 1 a 9)\n\n| Código | Framework (Autor / Origem) | Localização Canônica |\n|---|---|---|\n${catalogRows.join('\n')}\n\n### Catálogo Completo dos 20 Canvases Visuais da Coleção (Volumes 1 a 9)\n\n| Código | Canvas Visual | Localização Canônica |\n|---|---|---|\n${canvasRows.join('\n')}`
    : '';

  return `## ÍNDICE GERAL DE FRAMEWORKS DA COLEÇÃO

> [!note] Onde encontrar cada framework e canvas
> Na arquitetura autocontida da coleção IGNIÇÃO, todos os **164 frameworks** e **20 canvases visuais** estão detalhados passo a passo diretamente dentro das Fases e Capítulos dos **Volumes 1 a 9**. A primeira parte deste índice apresenta uma seleção temática rápida das ferramentas mais utilizadas por disciplina; em seguida, o **Catálogo Completo dos 164 Frameworks e 20 Canvases** lista integralmente todas as ferramentas da obra com link direto para a Fase ou Capítulo correspondente.

### Empreendedorismo científico

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| Lean Startup | Eric Ries | 2011 | Validar produto via ciclo construir-medir-aprender em ciclos curtos sob alta incerteza | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8 (Vol. 3)]], [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 (Vol. 3)]] |
| Customer Development | Steve Blank | 2005 | Sair do prédio, entrevistar clientes e validar o problema antes de escalar a solução | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]], [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8 (Vol. 3)]] |
| Abordagem Científica | Arnaldo Camuffo, Alfonso Gambardella e Chiara Spina (RCTs) | 2020 e 2024 | Tratar a startup como geradora de teorias causais testáveis, com hipóteses e limiares de refutação explícitos | [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]], [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 1 — ABORDAGEM CIENTÍFICA vs LEAN STARTUP: QUANDO USAR CADA UMA|Capítulo 1 (Vol. 3)]] |
| The Mom Test | Rob Fitzpatrick | 2013 | Conduzir entrevistas de descoberta focadas em fatos passados sem viés de confirmação | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]] |
| Jobs to Be Done (JTBD) | Anthony Ulwick, Clayton Christensen e Bob Moesta | 1990 a 2016 | Entender o "progresso" funcional, emocional e social que o cliente contrata um produto para realizar | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5 (Vol. 2)]] |
| Idea-Wedge-Scale | Antler (Adam French, *The Ten Gates*) | 2017 e 2025 | Decidir por qual cunha estreita (*wedge*) entrar no mercado e como expandir | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 3 — IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL|Capítulo 3 (Vol. 3)]] |
| Default Alive vs Default Dead | Paul Graham | 2015 | Diagnosticar se a empresa atinge o *breakeven* antes de o caixa acabar mantendo a trajetória atual | [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]] |
| Committed Next Move | Antler | 2017 e 2025 | Fechar cada fase da jornada com decisão observável e evidência documentada | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 2 — MATURIDADE (TRL/CRL), DECISÃO POR GATES E FECHAMENTO DE FASE (COMMITTED NEXT MOVE)|Capítulo 2 — Maturidade (TRL/CRL), Decisão por Gates e Fechamento de Fase (Vol. 3)]] |

### Estratégia

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| Porter Five Forces | Michael E. Porter | 1979 e 2008 | Mapear as cinco forças competitivas estruturais que determinam a rentabilidade de uma indústria | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]] |
| Blue Ocean Strategy | W. Chan Kim e Renée Mauborgne | 2005 | Criar espaço de mercado incontestado em vez de disputar margem em oceano vermelho | [[IGNICAO-Vol-1-Ideacao#FASE 1 — ENCONTRAR A IDEIA|Fase 1 (Vol. 1)]], [[IGNICAO-Vol-2-Descoberta-e-Mercado#Canvas: Strategy Canvas (W. Chan Kim & Renée Mauborgne, 2005)|Canvas: Strategy Canvas (Fase 6, Vol. 2)]] |
| Strategy Canvas e ERRC Grid | W. Chan Kim e Renée Mauborgne | 2005 | Visualizar fatores de competição e definir o que eliminar, reduzir, elevar e criar | [[IGNICAO-Vol-2-Descoberta-e-Mercado#Canvas: Strategy Canvas (W. Chan Kim & Renée Mauborgne, 2005)|Canvas: Strategy Canvas (Fase 6, Vol. 2)]] |
| 7 Powers | Hamilton Helmer | 2016 | Diagnosticar fontes duráveis de vantagem competitiva (*moat*) e poder de precificação | [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] |
| Wardley Mapping | Simon Wardley | 2005 | Posicionar componentes da cadeia de valor em estágios de evolução (Gênese a Commodity) | [[IGNICAO-Vol-1-Ideacao#FASE 1 — ENCONTRAR A IDEIA|Fase 1 (Vol. 1)]] |
| Crossing the Chasm | Geoffrey A. Moore | 1991 | Atravessar o abismo entre visionários (*early adopters*) e o mercado pragmático (*early majority*) | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] |
| Innovator's Dilemma | Clayton M. Christensen | 1997 | Compreender por que incumbentes racionais falham diante de disrupções inicialmente inferiores | [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]] |
| Ambidestria Organizacional e 70/20/10 | O'Reilly e Tushman / Nagji e Tuff | 2004 e 2012 | Equilibrar a operação principal (*exploit / core*) com apostas adjacentes e transformacionais (*explore*) | [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]] |
| Category Design | Al Ramadan, Dave Peterson, Christopher Lochhead e Kevin Maney (*Play Bigger*) | 2016 | Projetar e liderar uma nova categoria de mercado em vez de disputar participação na categoria antiga | [[IGNICAO-Vol-2-Descoberta-e-Mercado#CAPÍTULO 2 — INTELIGÊNCIA COMPETITIVA, POSICIONAMENTO E CATEGORY DESIGN|Capítulo 2 (Vol. 2)]] |

### Modelagem do negócio (canvases)

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| Business Model Canvas (BMC) | Alexander Osterwalder e Yves Pigneur | 2010 | Articular o modelo de negócio completo em nove blocos interdependentes numa página | [[IGNICAO-Vol-1-Ideacao#Canvas: Business Model Canvas (Alexander Osterwalder, 2010)|Canvas: Business Model Canvas (Fase 2, Vol. 1)]] |
| Lean Canvas | Ash Maurya | 2012 | Adaptar o BMC para estágio zero, destacando problema, alternativas, solução, métricas e vantagem injusta | [[IGNICAO-Vol-1-Ideacao#Canvas: Lean Canvas (Ash Maurya, 2012)|Canvas: Lean Canvas (Fase 1, Vol. 1)]] |
| Value Proposition Canvas (VPC) | Alexander Osterwalder, Yves Pigneur, Greg Bernarda e Alan Smith | 2014 | Detalhar o encaixe entre dores/ganhos/tarefas do cliente e analgésicos/criadores de ganho do produto | [[IGNICAO-Vol-2-Descoberta-e-Mercado#Canvas: Value Proposition Canvas (Alexander Osterwalder, 2014)|Canvas: Value Proposition Canvas (Fase 5, Vol. 2)]] |
| Opportunity Solution Tree (OST) | Teresa Torres | 2016 e 2021 | Conectar a métrica de resultado (*outcome*) às oportunidades de dor, soluções candidatas e experimentos | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]], [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 1 — PRODUTO EM ESCALA E DESCOBERTA CONTÍNUA|Capítulo 1 (Vol. 7)]] |

### Decisão e cognição

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| Pre-mortem | Gary Klein (popularizado por Daniel Kahneman) | 1998 e 2007 | Simular que o projeto fracassou daqui a um ano para identificar causas ocultas antes de lançar | [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]] |
| Inversion | Carl Jacobi / Charlie Munger | Século XIX e 2005 | Resolver problemas complexos de trás para frente, listando primeiro o que garante o fracasso | [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]] |
| First Principles Thinking | Aristóteles (popularizado por Elon Musk) | ~350 a.C. e anos 2010 | Decompor custos e restrições até verdades físicas ou econômicas elementares e reconstruir do zero | [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]] |
| SPADE | Gokul Rajaram | 2015 e 2019 | Estruturar decisões difíceis com *Setting, People, Alternatives, Decide, Explain* | [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]] |
| Type 1 vs Type 2 Decisions | Jeff Bezos | 2015 | Distinguir portas de mão única (irreversíveis) de portas de mão dupla (reversíveis) | [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]] |
| Thinking in Bets | Annie Duke | 2018 | Separar a qualidade do processo decisório da sorte do resultado (*resulting*) | [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]] |
| Cynefin Framework | David J. Snowden e Mary E. Boone | 1999 e 2007 | Classificar o contexto operacional em Claro, Complicado, Complexo ou Caótico antes de agir | [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]] |
| Princípios de Influência (6+1) | Robert B. Cialdini | 1984 e 2016 | Aplicar reciprocidade, escassez, autoridade, consistência, simpatia, prova social e unidade | [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 7 — INFLUÊNCIA E PERSUASÃO SEM AUTORIDADE FORMAL|Capítulo 7 (Vol. 1)]] |
| Working Backwards (PR-FAQ) | Colin Bryar e Bill Carr (Amazon) | 2004 e 2021 | Redigir o comunicado de imprensa e o FAQ do cliente antes de escrever a primeira linha de código | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]], [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]] |

### Validação e pesquisa

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| Matriz CSD | Prática brasileira de design e produto | Anos 2010 | Separar Certezas, Suposições e Dúvidas antes de ir a campo | [[IGNICAO-Vol-1-Ideacao#FASE 2 — ARTICULAÇÃO E CAPTURA DA IDEIA|Fase 2 (Vol. 1)]], [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7 (Vol. 3)]] |
| Story Tree e Mapa Causal (DAG) | Pesquisa formativa e inferência causal | Anos 2000 | Diagramar a teoria do negócio como cadeia causal com hipóteses ponderadas | [[IGNICAO-Vol-1-Ideacao#FASE 3 — CONSTRUÇÃO DA TEORIA DO NEGÓCIO|Fase 3 (Vol. 1)]] |
| Desejabilidade, Viabilidade, Exequibilidade (DVF) | IDEO (Tim Brown) | 2009 | Filtrar ideias pelo equilíbrio entre desejo do cliente, viabilidade econômica e factibilidade técnica | [[IGNICAO-Vol-1-Ideacao#FASE 1 — ENCONTRAR A IDEIA|Fase 1 (Vol. 1)]] |
| Van Westendorp Price Sensitivity Meter | Peter van Westendorp | 1976 | Descobrir a faixa de preço aceitável via quatro perguntas de sensibilidade | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 6 — PRICING STRATEGY E ECONOMIA DA RECORRÊNCIA (SUBSCRIPTION ECONOMY)|Capítulo 6 (Vol. 4)]] |
| Sean Ellis 40% Test | Sean Ellis | 2009 | Medir Product-Market Fit verificando se ao menos 40% dos usuários ficariam "muito desapontados" sem o produto | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] |

### Ideação e prototipagem

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| Double Diamond | British Design Council | 2005 | Estruturar a descoberta e a solução em dois ciclos de divergência e convergência | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]] |
| Crazy 8s | Jake Knapp (Google Ventures Design Sprint) | 2016 | Esboçar oito alternativas de solução em oito minutos para evitar apego à primeira ideia | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]] |
| How Might We (HMW) | Procter & Gamble e IDEO | Anos 1970 e 2000 | Converter dores observadas em perguntas abertas geradoras de soluções | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]] |

### Vieses e armadilhas mentais

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| IKEA Effect | Michael I. Norton, Daniel Mochon e Dan Ariely | 2012 | Reconhecer que supervalorizamos soluções construídas por nós mesmos | [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 3 — ARMADILHAS MENTAIS E VIESES|Capítulo 3 (Vol. 1)]] |
| Sunk Cost Fallacy e Escalation of Commitment | Barry M. Staw / Hal R. Arkes e Catherine Blumer | 1976 e 1985 | Interromper projetos inviáveis sem tentar "recuperar" o tempo e o dinheiro já perdidos | [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 3 — ARMADILHAS MENTAIS E VIESES|Capítulo 3 (Vol. 1)]] |
| Planning Fallacy | Daniel Kahneman e Amos Tversky | 1979 | Corrigir a tendência sistemática de subestimar prazos, custos e atritos de implementação | [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 3 — ARMADILHAS MENTAIS E VIESES|Capítulo 3 (Vol. 1)]] |

### Priorização

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| MoSCoW | Dai Clegg (Oracle) | 1994 | Classificar escopo do MVP em *Must have, Should have, Could have, Won't have* | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] |
| Kano Model | Noriaki Kano | 1984 | Distinguir atributos obrigatórios (básicos), lineares (performance) e encantadores (*delighters*) | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 9 — IDEAÇÃO E PROTOTIPAGEM DE SOLUÇÕES|Fase 9 (Vol. 3)]] |
| RICE Scoring | Intercom (Sean McBride) | Circa 2016 | Priorizar iniciativas de produto ponderando *Reach, Impact, Confidence* e *Effort* | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] |
| ICE Scoring | Sean Ellis | Anos 2010 | Priorizar experimentos rápidos de growth por *Impact, Confidence* e *Ease* | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] |
| WSJF (Weighted Shortest Job First) | Don Reinertsen / SAFe | 2009 | Priorizar fila de engenharia dividindo o Custo do Atraso (*Cost of Delay*) pela duração do trabalho | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] |

### PMF e crescimento

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| AARRR Pirate Metrics | Dave McClure | 2007 | Diagnosticar o funil completo em *Acquisition, Activation, Retention, Referral, Revenue* | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 1 — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR|Capítulo 1 (Vol. 4)]] |
| North Star Metric | Sean Ellis e Amplitude | Anos 2010 | Alinhar produto e crescimento em torno de uma métrica central de valor entregue ao cliente | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]] |
| One Metric That Matters (OMTM) | Alistair Croll e Benjamin Yoskovitz | 2013 | Concentrar o foco tático da equipe na métrica mais crítica do estágio atual | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] |
| Hooked Model | Nir Eyal | 2014 | Construir hábito recorrente via ciclo de gatilho, ação, recompensa variável e investimento | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] |
| Bullseye Framework | Gabriel Weinberg e Justin Mares (*Traction*) | 2014 e 2015 | Testar e selecionar canais de aquisição em três anéis concêntricos | [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 1 — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR|Capítulo 1 (Vol. 4)]] |

### Vendas

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| BANT | IBM | Anos 1960 | Triagem rápida de oportunidades por *Budget, Authority, Need, Timeline* | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]] |
| MEDDIC / MEDDPICC | Dick Dunkel e Jack Napoli (PTC) | 1996 | Qualificar vendas complexas B2B/Enterprise mapeando métricas, comprador econômico, critérios, processo e campeão | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 2 — VENDAS COMPLEXAS ENTERPRISE: CICLO LONGO, ALTO VALOR, MÚLTIPLOS DECISORES|Capítulo 2 (Vol. 6)]] |
| SPIN Selling | Neil Rackham | 1988 | Conduzir descoberta comercial consultiva com perguntas de Situação, Problema, Implicação e Necessidade de Solução | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]] |
| Solution Selling | Mike Bosworth | 1994 | Estruturar a venda a partir da dor diagnosticada e da visão compartilhada de solução | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]] |
| The Challenger Sale | Matthew Dixon e Brent Adamson | 2011 | Ensinar algo novo sobre o negócio do cliente, personalizar a tese e conduzir a decisão | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]] |
| Sandler Selling System | David Sandler | 1967 | Qualificar dor real, orçamento e processo decisório antes de investir em demonstrações e propostas | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]] |

### Liderança e organização

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| OKRs (Objectives and Key Results) | Andrew S. Grove (Intel) e John Doerr | Anos 1970 e 1999 | Alinhar objetivos qualitativos com resultados-chave mensuráveis em cadência trimestral | [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]] |
| Founder Mode | Brian Chesky e Paul Graham | 2024 | Manter o fundador conectado aos detalhes críticos de produto e operação sem cair em microgestão cega | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 8 — FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO|Capítulo 8 (Vol. 6)]] |
| Radical Candor | Kim Scott | 2017 | Construir cultura de feedback combinando cuidado pessoal genuíno com desafio direto | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]] |
| Five Dysfunctions of a Team | Patrick Lencioni | 2002 | Diagnosticar falta de confiança, medo de conflito, falta de compromisso, evasão de responsabilidade e desatenção a resultados | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]] |
| Situational Leadership | Paul Hersey e Ken Blanchard | 1969 | Adaptar o estilo de liderança (direção vs. apoio) à maturidade específica do liderado na tarefa | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]] |
| Topgrading e Who (A-Method) | Bradford D. Smart / Geoff Smart e Randy Street | 1999 e 2008 | Elevar a barra de contratação com *scorecard*, entrevista cronológica profunda e checagem de referências | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 9 — EXECUTIVE HIRING: CONTRATAR LÍDERES SÊNIOR E C-LEVEL|Capítulo 9 (Vol. 6)]] |
| High Output Management | Andrew S. Grove | 1983 | Medir a produção do gestor pelo resultado das equipes que ele lidera e influencia | [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]] |

### Captação e finanças

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| Pre-money e Post-money Valuation | Prática de Venture Capital | Anos 1980 | Calcular *valuation* antes e depois do aporte para determinar a diluição exata da rodada | [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 10 — VALUATION METHODS: COMO INVESTIDORES CALCULAM E COMO VOCÊ CALCULA PARA NEGOCIAR|Capítulo 10 (Vol. 5)]] |
| Anti-dilution (Full Ratchet e Weighted Average) | Prática societária de VC | Anos 1990 | Compreender e negociar cláusulas de proteção contra *down round* em *term sheets* | [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]] |
| Modelagem de Cap Table e Waterfall | Prática societária de VC | Anos 1990 | Simular diluição acumulada, *pool* de opções (ESOP), conversões de mútuo/SAFE e cascata de liquidação no *exit* | [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]] |
| Fluxo de Caixa Direto de 13 Semanas (*13-Week Cash Flow*) | Prática de tesouraria e *turnaround* | Anos 1980 | Projetar entradas e saídas de caixa em granularidade semanal para blindar a liquidez | [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 5 — CAPITAL DE GIRO, RECEBÍVEIS E GESTÃO DE CAIXA EM PROFUNDIDADE|Capítulo 5 (Vol. 5)]] |

### Maturidade tecnológica e de mercado

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| TRL (Technology Readiness Level) | NASA (padronizado pela ISO 16290) | 1974 e 2013 | Medir a maturidade tecnológica em 9 níveis, do princípio científico básico (TRL 1) à operação real (TRL 9) | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 2 — MATURIDADE (TRL/CRL), DECISÃO POR GATES E FECHAMENTO DE FASE (COMMITTED NEXT MOVE)|Capítulo 2 — Maturidade (TRL/CRL), Decisão por Gates e Fechamento de Fase (Vol. 3)]] |
| CRL (Commercial / Customer Readiness Level) | KTH Innovation / Innovation Norway | Anos 2010 | Avaliar a maturidade comercial e de mercado em paralelo ao TRL para evitar engenharia sem cliente | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 2 — MATURIDADE (TRL/CRL), DECISÃO POR GATES E FECHAMENTO DE FASE (COMMITTED NEXT MOVE)|Capítulo 2 — Maturidade (TRL/CRL), Decisão por Gates e Fechamento de Fase (Vol. 3)]] |

### Operacional e controles

| Framework | Autor (Origem) | Ano | Quando usar | Aparece em |
|---|---|---|---|---|
| COSO Internal Control | Committee of Sponsoring Organizations | 1992 e 2013 | Estruturar controles internos, segregação de funções e prevenção a fraudes em cinco componentes | [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 12 — FRAUDE INTERNA E CONTROLES INTERNOS|Capítulo 12 (Vol. 8)]] |
| Framework de Decisão por Gates | Antler, *The Ten Gates* (Adam French, 2025), adaptado para a coleção | 2025 e 2026 | Governar a passagem entre etapas (*Problem Core, Scale Levers, Exploratory*) por critérios explícitos de avanço | [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 2 — MATURIDADE (TRL/CRL), DECISÃO POR GATES E FECHAMENTO DE FASE (COMMITTED NEXT MOVE)|Capítulo 2 — Maturidade (TRL/CRL), Decisão por Gates e Fechamento de Fase (Vol. 3)]] |${fullCatalogMd}

---

Se você está começando, não se intimide com a extensão deste catálogo: cada volume da coleção já traz integrados diretamente em suas Fases e Capítulos exatamente os frameworks e canvases necessários para executar aquela etapa do início ao fim.`;
}

function enrichIndiceRemissivoBody(body) {
  return `## ÍNDICE REMISSIVO

Índice alfabético geral de navegação da coleção IGNIÇÃO, organizado em duas partes complementares: **(1) Índice Alfabético Geral de Conceitos, Regulação, Casos e Capítulos (A–Z)** e **(2) Índice de Ecossistemas, Ciclo de Vida e dos 48 Capítulos do Volume 10**. Utilize-o em conjunto com o Sumário de cada volume e com o Glossário de Termos Técnicos.

### A

- **A/B Testing rigoroso**: Framework: A/B Testing Rigoroso (Ron Kohavi, décadas de pesquisa na Microsoft/Airbnb) (Fase 11, Vol. 4)
- **AARRR (Pirate Metrics)**: Framework: AARRR Pirate Metrics (Dave McClure, 2007) (Fase 11, Vol. 4), aplicação em [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]] e [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 1 — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR|Capítulo 1 (Vol. 4)]]
- **Acordo de sócios**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 5 — ARQUITETURA CONTRATUAL PARA STARTUPS: OPERAÇÃO E CONTRATOS EM PROFUNDIDADE POR TIPO|Capítulo 5 (Vol. 8)]]
- **ANPD (Agência Nacional de Proteção de Dados)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 9 — LGPD, COMPLIANCE E GOVERNANÇA DE DADOS|Capítulo 9 — LGPD, Compliance e Governança de Dados (Vol. 8)]], [[#CAPÍTULO 4 — PADRÕES REGULATÓRIOS TRANSVERSAIS: SANDBOX, OPEN DATA E RELAÇÃO COM REGULADOR|Capítulo 4 (Vol. 10)]]
- **Anti-dilution clauses**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]]
- **ANVISA e ANS (regulação em saúde, estética e alimentos)**: [[#CAPÍTULO 3 — REGULAÇÃO SETORIAL NO BRASIL: MAPA DAS AUTARQUIAS E QUANDO CADA UMA IMPORTA|Capítulo 3 (Vol. 10)]], [[#CAPÍTULO 29 — BIOTECH E HEALTHTECH: PLAYBOOK DE REGULAÇÃO, ENSAIOS E CAPITAL|Capítulo 29 (Vol. 10)]], [[#CAPÍTULO 30 — SAÚDE FÍSICA PRIVADA: REDES DE CLÍNICAS MÉDICAS E ODONTOLÓGICAS, ESTÉTICA AVANÇADA, MEDICINA DIAGNÓSTICA, FARMÁCIAS MAGISTRAIS E OPME|Capítulo 30 (Vol. 10)]]
- **Aquisição estratégica (M&A como comprador e consolidação)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 11 — M&A COMO COMPRADOR: AQUISIÇÃO ESTRATÉGICA POR STARTUP EM ESCALA|Capítulo 11 — M&A como Comprador (Vol. 9)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]]
- **ARR / MRR**: [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]], [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]], Framework: Unit Economics (Fase 14, Vol. 5)
- **Assumption Mapping**: Framework: Assumption Mapping (David J. Bland, 2019) (Fase 7, Vol. 3)
- **Autoestima e saúde mental do fundador**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 2 — SAÚDE MENTAL, DINÂMICA DE CO-FOUNDERS E HUMANIDADE DO FUNDADOR|Capítulo 2 (Vol. 1)]]

### B

- **B2B2C (venda através de parceiros e canais)**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 5 — B2B2C: QUANDO SUA EMPRESA VENDE ATRAVÉS DE OUTRA EMPRESA|Capítulo 5 — B2B2C (Vol. 3)]]
- **Banco Central do Brasil (BCB), Pix, Open Finance e Drex**: [[#CAPÍTULO 3 — REGULAÇÃO SETORIAL NO BRASIL: MAPA DAS AUTARQUIAS E QUANDO CADA UMA IMPORTA|Capítulo 3 (Vol. 10)]], [[#CAPÍTULO 7 — FINTECH: PAGAMENTOS, BANKING-AS-A-SERVICE (BAAS), PIX, OPEN FINANCE E INFRAESTRUTURA FINANCEIRA|Capítulo 7 (Vol. 10)]], [[#CAPÍTULO 10 — WEALTHTECH, MERCADO DE CAPITAIS, GESTÃO PATRIMONIAL, CRIPTO E TOKENIZAÇÃO DE ATIVOS (DREX E RWA)|Capítulo 10 (Vol. 10)]]
- **BANT (Budget-Authority-Need-Timeline)**: Framework: BANT (IBM, anos 1960) (Fase 15, Vol. 6)
- **Blitzscaling**: Framework: Blitzscaling (Reid Hoffman & Chris Yeh, 2018) (Fase 15, Vol. 6), aplicação em [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]]
- **Blue Ocean Strategy**: Framework: Blue Ocean Strategy (W. Chan Kim & Renée Mauborgne, 2005) (Fase 1, Vol. 1)
- **BNDES, FINEP, FAPESP PIPE, EMBRAPII e Lei do Bem**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 11 — CAPITAL NÃO DILUITIVO NO BRASIL: FINEP, FAPESP PIPE, BNDES, SEBRAE, LEI DO BEM|Capítulo 11 — Capital Não Diluitivo no Brasil (Vol. 5)]], [[#CAPÍTULO 1 — A ECONOMIA DA INOVAÇÃO E SEUS ATORES: UNIVERSIDADE, ESTADO, CORPORAÇÕES, VENTURE STUDIOS E CAPITAL DE RISCO|Capítulo 1 (Vol. 10)]]
- **Board (composição, atas e governança do conselho)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 1 — BOARD E GOVERNANCE|Capítulo 1 — Board e Governance (Vol. 9)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]]
- **Bootstrap vs Venture Capital**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 4 — BOOTSTRAP vs VENTURE CAPITAL: A ESCOLHA FUNDACIONAL|Capítulo 4 — Bootstrap vs Venture Capital (Vol. 1)]], [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 7 — BOOTSTRAPPING, SERVIÇOS PRODUTIZADOS (PRODUCTIZED SERVICES) E A TRANSIÇÃO SERVICE-TO-PRODUCT|Capítulo 7 (Vol. 3)]]
- **Branding, Posicionamento e Product Marketing (PMM)**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 4 — BRANDING, POSICIONAMENTO DE MARCA E PRODUCT MARKETING (PMM)|Capítulo 4 (Vol. 4)]]
- **Burn Multiple**: Framework: Burn Multiple (David Sacks, 2020) (Fase 14, Vol. 5)
- **Business Model Canvas (BMC)**: [[IGNICAO-Vol-1-Ideacao#Canvas: Business Model Canvas (Alexander Osterwalder, 2010)|Canvas: Business Model Canvas (Fase 2, Vol. 1)]]

### C

- **CAC (Customer Acquisition Cost) e LTV/CAC**: [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]], [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 3 — MODELAGEM FINANCEIRA OPERACIONAL BOTTOM-UP E PROJEÇÕES POR COORTES (COHORTS)|Capítulo 3 (Vol. 5)]]
- **CADE e Defesa da Concorrência (Antitruste)**: [[#CAPÍTULO 5 — CADE E ANTITRUSTE — QUANDO O CRESCIMENTO ATRAI O REGULADOR|Capítulo 5 (Vol. 10)]]
- **Canvases Visuais (20 ferramentas distribuídas pelas Fases)**: [[IGNICAO-Vol-1-Ideacao#Canvas: Lean Canvas (Ash Maurya, 2012)|Lean Canvas (Fase 1, Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#Canvas: Business Model Canvas (Alexander Osterwalder, 2010)|Business Model Canvas (Fase 2, Vol. 1)]], [[IGNICAO-Vol-2-Descoberta-e-Mercado#Canvas: Value Proposition Canvas (Alexander Osterwalder, 2014)|Value Proposition Canvas (Fase 5, Vol. 2)]], [[IGNICAO-Vol-2-Descoberta-e-Mercado#Canvas: Strategy Canvas (W. Chan Kim & Renée Mauborgne, 2005)|Strategy Canvas (Fase 6, Vol. 2)]] e catálogo completo no [[#ÍNDICE GERAL DE FRAMEWORKS DA COLEÇÃO|Índice Geral de Frameworks]]
- **Cap Table e diluição**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]]
- **Captação de recursos (processo completo, pitch e instrumentos)**: [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 12 — INSTRUMENTOS DE CAPTAÇÃO NO BRASIL: MÚTUO, SAFE, FIDC, CROWDFUNDING|Capítulo 12 (Vol. 5)]]
- **Casos brasileiros de fracasso e lições de trincheira**: [[IGNICAO-Vol-2-Descoberta-e-Mercado#CAPÍTULO 3 — CASOS DE FRACASSO BRASILEIROS: LIÇÕES DE TRINCHEIRA|Capítulo 3 — Casos de Fracasso Brasileiros (Vol. 2)]]
- **Casos brasileiros de referência (Nubank, iFood, TOTVS, WEG, Embraer, Mercado Livre, RD Station, Creditas, QuintoAndar, Wellhub)**: distribuídos ao longo das Fases 0 a 20 e nos 42 Playbooks Setoriais deste Volume 10
- **Churn, retenção e NRR**: [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 8 — CUSTOMER SUCCESS (CS) E CUSTOMER EXPERIENCE (CX): DA JORNADA AO CHURN ZERO E NRR POSITIVO|Capítulo 8 (Vol. 4)]]
- **Cofundador (escolha, alinhamento e acordo)**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]] (Encontrar cofundador), [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 2 — SAÚDE MENTAL, DINÂMICA DE CO-FOUNDERS E HUMANIDADE DO FUNDADOR|Capítulo 2 (Vol. 1)]]
- **Cold Start Problem**: Framework: Cold Start Problem (Andrew Chen, 2021) (Cap. 4, Vol. 3)
- **Compras, Fornecedores e Terceirização (Procurement e BPO)**: [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 10 — PROCUREMENT, GESTÃO DE FORNECEDORES E TERCEIRIZAÇÃO (BPO)|Capítulo 10 (Vol. 7)]]
- **Comunicação pública, PR e marca pessoal do fundador**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Vol. 6)]]
- **Comunidade e Marketing de Conteúdo / SEO**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 2 — CONTENT MARKETING, SEO E COMMUNITY BUILDING|Capítulo 2 (Vol. 4)]]
- **Conformidade, Anticorrupção (Lei 12.846/2013) e Controles Internos**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 10 — COMPLIANCE E ANTICORRUPÇÃO|Capítulo 10 (Vol. 8)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 12 — FRAUDE INTERNA E CONTROLES INTERNOS|Capítulo 12 (Vol. 8)]]
- **Consultoria, Serviços Produtizados e Software Houses**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 7 — BOOTSTRAPPING, SERVIÇOS PRODUTIZADOS (PRODUCTIZED SERVICES) E A TRANSIÇÃO SERVICE-TO-PRODUCT|Capítulo 7 (Vol. 3)]], [[#CAPÍTULO 41 — SERVIÇOS PROFISSIONAIS B2B DE ALTA MARGEM, CONSULTORIAS, SOFTWARE HOUSES, EXPORTAÇÃO DE ENGENHARIA (NEARSHORING) E BPO|Capítulo 41 (Vol. 10)]]
- **Contabilidade, Demonstrativos Financeiros e Regimes Tributários**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 1 — DEMONSTRATIVOS FINANCEIROS PARA O FUNDADOR|Capítulo 1 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 2 — CONTABILIDADE, REGIMES FISCAIS E TRIBUTÁRIO ESTRATÉGICO (REFORMA IBS/CBS E INCENTIVOS)|Capítulo 2 — Contabilidade, Regimes Fiscais e Tributário Estratégico (Reforma IBS/CBS e Incentivos) (Vol. 5)]]
- **Contratação (primeiros funcionários e liderança executiva)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 9 — EXECUTIVE HIRING: CONTRATAR LÍDERES SÊNIOR E C-LEVEL|Capítulo 9 — Executive Hiring (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 10 — COMPENSAÇÃO, INCENTIVOS E PLANO DE CARREIRA|Capítulo 10 — Compensação e Incentivos (Vol. 6)]]
- **Contratos operacionais e societários**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 5 — ARQUITETURA CONTRATUAL PARA STARTUPS: OPERAÇÃO E CONTRATOS EM PROFUNDIDADE POR TIPO|Capítulo 5 (Vol. 8)]]
- **Corporate Venture Capital (CVC) e Inovação Aberta**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 14 — CORPORATE VENTURE CAPITAL (CVC): COMO CAPTAR DE CORPORATES SEM PERDER LIBERDADE ESTRATÉGICA|Capítulo 14 (Vol. 5)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 7 — INOVAÇÃO ABERTA E PARCERIA COM CORPORATES: COMO VENDER, CO-DESENVOLVER E NÃO SER ENGOLIDO|Capítulo 7 (Vol. 9)]]
- **Crise (gestão de crise, continuidade e turnaround)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 8 — GESTÃO DE CRISE, TURNAROUND E REESTRUTURAÇÃO OPERACIONAL|Capítulo 8 (Vol. 9)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 (Vol. 9)]]
- **Cultura organizacional e trabalho remoto/híbrido**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 12 — TRABALHO REMOTO, HÍBRIDO E PRESENCIAL: ESCOLHA E OPERAÇÃO|Capítulo 12 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 13 — CULTURA COMO DISCIPLINA E EM SITUAÇÕES CRÍTICAS (HIPERCRESCIMENTO, M&A E REMOTO)|Capítulo 13 (Vol. 6)]]
- **Customer Development**: Framework: Customer Development (Steve Blank, 2005) (Fase 8, Vol. 3)
- **Customer Discovery**: [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5 (Vol. 2)]]
- **Customer Journey Map**: Framework: Customer Journey Mapping (Ron Zemke e Chip Bell, anos 1990s; popularizado nos 2000s) (Fase 5, Vol. 2), Template: Customer Journey Map: compra em e-commerce brasileiro (Fase 5, Vol. 2)
- **CVM (Comissão de Valores Mobiliários), Crowdfunding (Res. 88) e FIDCs (Res. 175)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 12 — INSTRUMENTOS DE CAPTAÇÃO NO BRASIL: MÚTUO, SAFE, FIDC, CROWDFUNDING|Capítulo 12 (Vol. 5)]], [[#CAPÍTULO 3 — REGULAÇÃO SETORIAL NO BRASIL: MAPA DAS AUTARQUIAS E QUANDO CADA UMA IMPORTA|Capítulo 3 (Vol. 10)]], [[#CAPÍTULO 10 — WEALTHTECH, MERCADO DE CAPITAIS, GESTÃO PATRIMONIAL, CRIPTO E TOKENIZAÇÃO DE ATIVOS (DREX E RWA)|Capítulo 10 (Vol. 10)]]

### D

- **Dados, Analytics e Engenharia de IA/ML**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 9 — DADOS E ANALYTICS PARA STARTUP: DA INSTRUMENTAÇÃO AO DATA TEAM|Capítulo 9 (Vol. 4)]], [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 5 — DATA ENGINEERING, ML ENGINEERING E AI OPS EM ESCALA|Capítulo 5 (Vol. 7)]]
- **Data (compilação e atualização do livro)**: [[#DATA DE COMPILAÇÃO E NOTA SOBRE ENVELHECIMENTO|Data de Compilação e Nota sobre Envelhecimento (maio de 2026)]]
- **DCF (Discounted Cash Flow)**: Framework: Discounted Cash Flow (DCF) (Fase 14, Vol. 5), [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 10 — VALUATION METHODS: COMO INVESTIDORES CALCULAM E COMO VOCÊ CALCULA PARA NEGOCIAR|Capítulo 10 (Vol. 5)]]
- **Decisão (tomada de decisão como disciplina)**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]], Frameworks da Fase 0 e da Fase 3 (Vol. 1)
- **Demissão e Layoffs**: [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 10 — LAYOFFS E DOWNSIZING: COMO DEMITIR EM ESCALA SEM DESTRUIR A EMPRESA|Capítulo 10 (Vol. 9)]]
- **Descoberta contínua (Continuous Discovery)**: Framework: Continuous Discovery Habits (Teresa Torres, 2021) (Fase 17, Vol. 7), [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 1 — PRODUTO EM ESCALA E DESCOBERTA CONTÍNUA|Capítulo 1 (Vol. 7)]], [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 2 — MATURIDADE (TRL/CRL), DECISÃO POR GATES E FECHAMENTO DE FASE (COMMITTED NEXT MOVE)|Capítulo 2 — Maturidade (TRL/CRL) (Vol. 3)]]
- **Design System, UX e Acessibilidade**: [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 2 — DESIGN SYSTEM, UX EM ESCALA E ACESSIBILIDADE|Capítulo 2 (Vol. 7)]]
- **Design Sprint**: Framework: Google Design Sprint (Jake Knapp, 2016) (Fase 9, Vol. 3)
- **Design Thinking**: Framework: Design Thinking Double Diamond (British Design Council, 2005) (Fase 9, Vol. 3)
- **Disciplinas éticas, ESG e Impacto**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 5 — ÉTICA DO FUNDADOR: ZONA CINZENTA, LINHAS INTRANSPONÍVEIS E DILEMAS REAIS|Capítulo 5 (Vol. 1)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 4 — ESG, IMPACT E GOVERNANÇA PARA STARTUP|Capítulo 4 — ESG, Impact e Governança (Vol. 9)]]
- **DORA Metrics**: Framework: DORA Metrics (Forsgren, Humble, Kim, 2014); SPACE Framework (Forsgren, Storey et al., 2021) (Fase 17, Vol. 7)
- **Due diligence (em captação e M&A)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]]

### E

- **Effectuation**: Framework: Effectuation (Saras Sarasvathy, 2001) (Fase 0, Vol. 1)
- **Empathy Map**: Framework: Empathy Map (Dave Gray / XPlane, 2010) (Fase 5, Vol. 2)
- **Encerramento voluntário (shutdown e insolvência)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 19 — ENCERRAMENTO, FALÊNCIA E RECOMEÇO NO BRASIL|Capítulo 19 (Vol. 9)]]
- **Engenharia de Software, Arquitetura e Dívida Técnica**: [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 3 — ARQUITETURA TÉCNICA PARA FUNDADORES NÃO-TÉCNICOS E CTO DE PRIMEIRA VIAGEM|Capítulo 3 (Vol. 7)]], [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 4 — ENGINEERING MANAGEMENT, DEVELOPER EXPERIENCE E GESTÃO DE DÍVIDA TÉCNICA|Capítulo 4 (Vol. 7)]]
- **Entrevista de usuário (Mom Test)**: Framework: The Mom Test (Rob Fitzpatrick, 2013) (Fase 4, Vol. 2), [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 5 — PESQUISA COM USUÁRIOS (CUSTOMER DISCOVERY)|Fase 5 (Vol. 2)]]
- **EOR (Employer of Record) e Internacionalização**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 5 — INTERNACIONALIZAÇÃO: ESTRUTURA E PRODUTO PARA MÚLTIPLOS MERCADOS|Capítulo 5 (Vol. 9)]]
- **Equity (divisão inicial, vesting e ESOP/Stock Options)**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 2 — STOCK OPTIONS, VESTING E ESOP NO BRASIL|Capítulo 2 (Vol. 8)]]
- **Escala (time, receita, operações e capital)**: [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]]
- **Escolha de investidor**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]]
- **Ética empreendedora**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 5 — ÉTICA DO FUNDADOR: ZONA CINZENTA, LINHAS INTRANSPONÍVEIS E DILEMAS REAIS|Capítulo 5 (Vol. 1)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 4 — ESG, IMPACT E GOVERNANÇA PARA STARTUP|Capítulo 4 (Vol. 9)]]
- **Exit (estratégias, M&A, IPO, Secondaries e Pós-Exit)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]], Capítulos 15 a 18 (Vol. 9)
- **Experimentos controlados**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8 (Vol. 3)]], Framework: A/B Testing Rigoroso (Fase 11, Vol. 4)

### F

- **Fail-fast / pivotar / matar**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 11 — PIVOT: TIPOLOGIA, DECISÃO E EXECUÇÃO|Capítulo 11 (Vol. 4)]]
- **Financeiro (modelagem operacional, coortes, FP&A e forecasting)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 3 — MODELAGEM FINANCEIRA OPERACIONAL BOTTOM-UP E PROJEÇÕES POR COORTES (COHORTS)|Capítulo 3 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 4 — PLANEJAMENTO FINANCEIRO (FP&A), ORÇAMENTO VIVO E PREVISIBILIDADE DE RECEITA (REVENUE FORECASTING)|Capítulo 4 (Vol. 5)]]
- **First Principles Thinking**: Framework: First Principles Thinking (Aristóteles, ~350 a.C.; popularizado por Elon Musk, anos 2010) (Fase 0, Vol. 1)
- **Fiscal e Reforma Tributária Brasileira (IBS, CBS, Split Payment, Simples, Presumido e Real)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 2 — CONTABILIDADE, REGIMES FISCAIS E TRIBUTÁRIO ESTRATÉGICO (REFORMA IBS/CBS E INCENTIVOS)|Capítulo 2 — Contabilidade, Regimes Fiscais e Tributário Estratégico (Reforma IBS/CBS e Incentivos) (Vol. 5)]]
- **FMEA (análise de risco)**: Framework: FMEA: Failure Mode and Effects Analysis (US Military, 1949) (Fase 7, Vol. 3)
- **Framework de decisão (DACI / RACI / RAPID)**: Framework: DACI / RACI / RAPID (Fase 16, Vol. 6), [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 6 — TOMADA DE DECISÃO COMO DISCIPLINA|Capítulo 6 (Vol. 1)]]
- **Fundraising**: [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 10 — VALUATION METHODS: COMO INVESTIDORES CALCULAM E COMO VOCÊ CALCULA PARA NEGOCIAR|Capítulo 10 (Vol. 5)]]

### G

- **Gestão de Projetos, PMO Enxuto e Execução Cross-Functional**: [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 8 — GESTÃO DE PROJETOS, PMO LEAN E EXECUÇÃO CROSS-FUNCTIONAL|Capítulo 8 (Vol. 7)]]
- **Gestão de tempo do fundador e Founder Mode**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 8 — FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO|Capítulo 8 (Vol. 6)]]
- **Governança (board, acionistas e family business)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 1 — BOARD E GOVERNANCE|Capítulo 1 (Vol. 9)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 2 — RELAÇÕES COM INVESTIDORES PÓS-CAPTAÇÃO|Capítulo 2 (Vol. 9)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 3 — FAMILY BUSINESS E TRANSIÇÃO GERACIONAL|Capítulo 3 (Vol. 9)]]
- **Growth (função organizacional e loops)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 1 — GROWTH COMO FUNÇÃO ORGANIZACIONAL: TIME DE GROWTH, BUILD VS HIRE, RELAÇÃO COM PRODUTO|Capítulo 1 (Vol. 6)]], Framework: Growth Loops (Fase 15, Vol. 6)

### H

- **Hipóteses (formulação rigorosa)**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 7 — FORMULAÇÃO RIGOROSA DE HIPÓTESES|Fase 7 (Vol. 3)]]
- **Hiring (primeiros líderes e C-level)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 9 — EXECUTIVE HIRING: CONTRATAR LÍDERES SÊNIOR E C-LEVEL|Capítulo 9 — Executive Hiring (Vol. 6)]]
- **Hoshin Kanri**: Framework: Hoshin Kanri (Japão, anos 1950-1970) (Fase 19, Vol. 9)

### I

- **IA Generativa e Agentes (como copiloto do fundador e produto AI-Native)**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 10 — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)|Capítulo 10 (Vol. 1)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 10 — AI COMO PARTE DO PRODUTO (AI-NATIVE PRODUCT)|Capítulo 10 (Vol. 4)]], [[#CAPÍTULO 42 — AI-NATIVE, MODELOS FUNDACIONAIS, AGENTES AUTÔNOMOS, INFRAESTRUTURA DE DADOS E MLOPS|Capítulo 42 (Vol. 10)]]
- **Ideias (como encontrar e filtrar)**: [[IGNICAO-Vol-1-Ideacao#FASE 1 — ENCONTRAR A IDEIA|Fase 1 (Vol. 1)]]
- **Impacto (negócio de impacto socioambiental e ESG)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 4 — ESG, IMPACT E GOVERNANÇA PARA STARTUP|Capítulo 4 — ESG, Impact e Governança (Vol. 9)]]
- **INPI e Propriedade Intelectual (marcas, patentes e software)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 3 — PROPRIEDADE INTELECTUAL E INPI|Capítulo 3 — Propriedade Intelectual e INPI (Vol. 8)]]
- **Intrapreneurship (Intraempreendedorismo corporativo)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 6 — INTRAPRENEURSHIP: COMO APLICAR ESTE LIVRO DENTRO DE UMA EMPRESA EXISTENTE|Capítulo 6 (Vol. 9)]]
- **Internacionalização e expansão LatAm/Global**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 5 — INTERNACIONALIZAÇÃO: ESTRUTURA E PRODUTO PARA MÚLTIPLOS MERCADOS|Capítulo 5 (Vol. 9)]]
- **Investidores (tipos, critérios e relação pós-aporte)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 2 — RELAÇÕES COM INVESTIDORES PÓS-CAPTAÇÃO|Capítulo 2 (Vol. 9)]]
- **Ishikawa Diagram**: Framework: Ishikawa / Fishbone Diagram (Kaoru Ishikawa, 1968) (Fase 3, Vol. 1)

### J

- **Jobs to Be Done (JTBD)**: Framework: Jobs to Be Done Framework (Clayton Christensen, Anthony Ulwick, Bob Moesta) (Fase 5, Vol. 2), Framework: Jobs to Be Done Switch Interviews (Fase 5, Vol. 2), Framework: Outcome-Driven Innovation (Fase 5, Vol. 2)
- **Jurídico (estruturação societária, trabalhista, contratual e contencioso)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], Capítulos 1 a 11 (Vol. 8)

### K

- **Kano Model**: Framework: Kano Model (Noriaki Kano, 1984) (Fase 9, Vol. 3)

### L

- **Launch (playbook de lançamento e Product Marketing)**: [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 4 — BRANDING, POSICIONAMENTO DE MARCA E PRODUCT MARKETING (PMM)|Capítulo 4 (Vol. 4)]]
- **Lean Canvas**: [[IGNICAO-Vol-1-Ideacao#Canvas: Lean Canvas (Ash Maurya, 2012)|Canvas: Lean Canvas (Fase 1, Vol. 1)]]
- **Lean Startup (Build-Measure-Learn Loop)**: Framework: Build-Measure-Learn Loop (Eric Ries, 2011) (Fase 8, Vol. 3)
- **LGPD (Lei Geral de Proteção de Dados e governança)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 9 — LGPD, COMPLIANCE E GOVERNANÇA DE DADOS|Capítulo 9 — LGPD, Compliance e Governança de Dados (Vol. 8)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 13 — SEGURANÇA DA INFORMAÇÃO: DA CERTIFICAÇÃO À ENGENHARIA|Capítulo 13 (Vol. 8)]]
- **Liderança e gestão de pessoas**: [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], Capítulos 8 a 14 (Vol. 6)
- **Liquidation preference (preferência de liquidação)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]]

### M

- **Marca pessoal do fundador e comunicação executiva**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Vol. 6)]]
- **Marco Legal das Startups (LC 182/2021 — COCP, Anjo e CPSI)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 12 — INSTRUMENTOS DE CAPTAÇÃO NO BRASIL: MÚTUO, SAFE, FIDC, CROWDFUNDING|Capítulo 12 (Vol. 5)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[#CAPÍTULO 32 — GOVTECH: STARTUP VENDENDO PARA GOVERNO|Capítulo 32 (Vol. 10)]]
- **Marketing de Performance e Mídia Paga (ROAS e CAC)**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 3 — MARKETING DE PERFORMANCE E MÍDIA PAGA|Capítulo 3 (Vol. 4)]]
- **Marketplace e efeitos de rede**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 4 — MARKETPLACES, PLATAFORMAS E EFEITOS DE REDE: LIQUIDEZ, OVO-E-GALINHA E RISCO DE PLATAFORMA|Capítulo 4 (Vol. 3)]], Framework: Cold Start Problem (Cap. 4, Vol. 3)
- **MEDDIC / MEDDPICC**: Framework: MEDDIC / MEDDPICC (Jack Napoli / Dick Dunkel, PTC, 1996) (Fase 15, Vol. 6)
- **Mercado (mapeamento, TAM/SAM/SOM e inteligência competitiva)**: [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], [[IGNICAO-Vol-2-Descoberta-e-Mercado#CAPÍTULO 2 — INTELIGÊNCIA COMPETITIVA, POSICIONAMENTO E CATEGORY DESIGN|Capítulo 2 (Vol. 2)]]
- **Mom Test**: Framework: The Mom Test (Rob Fitzpatrick, 2013) (Fase 4, Vol. 2)
- **Mulheres fundadoras e Diversidade, Equidade e Inclusão (DEI)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 14 — DIVERSIDADE, EQUIDADE E INCLUSÃO (DEI) EM STARTUP BRASILEIRA|Capítulo 14 — Diversidade, Equidade e Inclusão (DEI) em Startup Brasileira (Vol. 6)]]
- **MVP (Produto Mínimo Viável)**: [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 11 — MVP E EXPERIMENTOS DE MERCADO|Fase 11 (Vol. 4)]]

### N

- **Negociação empresarial (BATNA, ZOPA, Harvard e Chris Voss)**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 7 — NEGOCIAÇÃO COMO DISCIPLINA|Capítulo 7 (Vol. 4)]], Frameworks do Capítulo 7, Vol. 4
- **Never Split the Difference**: Framework: Never Split the Difference (Chris Voss, 2016) (Cap. 7, Vol. 4)
- **North Star Framework**: Framework: North Star Framework (Amplitude / Sean Ellis) (Fase 13, Vol. 4)
- **NPS (Net Promoter Score)**: Framework: Net Promoter Score (Fred Reichheld, 2003) (Fase 12, Vol. 4)

### O

- **OKRs**: Framework: OKRs: Objectives and Key Results (Andy Grove, 1970s; John Doerr) (Fase 17, Vol. 7), Template: Template de OKRs trimestral preenchido (Fase 17, Vol. 7)
- **Open Innovation**: Framework: Open Innovation (Henry Chesbrough, 2003) (Fase 19, Vol. 9), [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 7 — INOVAÇÃO ABERTA E PARCERIA COM CORPORATES: COMO VENDER, CO-DESENVOLVER E NÃO SER ENGOLIDO|Capítulo 7 (Vol. 9)]]
- **Operação, processos, qualidade (Lean/Six Sigma) e suporte**: [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]], Capítulos 7 a 11 (Vol. 7)
- **Opportunity Solution Tree**: Framework: Opportunity Solution Tree (Teresa Torres) (Fase 9, Vol. 3), Template: Diagrama de Opportunity Solution Tree (Fase 9, Vol. 3)
- **Outcome-Driven Innovation (ODI)**: Framework: Outcome-Driven Innovation (Anthony Ulwick, 1991; livro 2005) (Fase 5, Vol. 2)

### P

- **Parcerias estratégicas, Canais Indiretos e Franquias**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 5 — CANAIS INDIRETOS E PARCERIAS: PARCERIAS, FRANQUIAS, CHANNEL|Capítulo 5 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 6 — FRANCHISING, LICENCIAMENTO E EXPANSÃO DE REDES MULTI-UNIDADES (LEI 13.966/2019)|Capítulo 6 (Vol. 6)]]
- **Pareto Analysis**: Framework: Pareto Analysis (Joseph Juran, 1940s; Vilfredo Pareto, 1896) (Fase 3, Vol. 1)
- **Personas**: Framework: Personas (Alan Cooper, 1998) (Fase 5, Vol. 2)
- **Pesquisa, Escrita Executiva e Aprendizado Acelerado**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 8 — COMUNICAÇÃO E ESCRITA EXECUTIVA|Capítulo 8 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 9 — APRENDIZADO ACELERADO E GESTÃO DO CONHECIMENTO PESSOAL|Capítulo 9 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 11 — PESQUISA PROFUNDA E SÍNTESE: COMO DOMINAR UM DOMÍNIO NOVO EM SEMANAS|Capítulo 11 (Vol. 1)]]
- **Pivot**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 11 — PIVOT: TIPOLOGIA, DECISÃO E EXECUÇÃO|Capítulo 11 (Vol. 4)]]
- **PMF (Product-Market Fit)**: [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]]
- **Posicionamento (Positioning)**: Framework: Positioning (Al Ries & Jack Trout, 1981) (Fase 13, Vol. 4), Framework: Obviously Awesome / April Dunford Positioning (April Dunford, 2019) (Fase 13, Vol. 4), [[IGNICAO-Vol-2-Descoberta-e-Mercado#CAPÍTULO 2 — INTELIGÊNCIA COMPETITIVA, POSICIONAMENTO E CATEGORY DESIGN|Capítulo 2 (Vol. 2)]]
- **Pré-PMF (navegação de testes ao modelo de negócio)**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10 (Vol. 3)]] a [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]]
- **Prestação de contas ao conselho e investidores**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 1 — BOARD E GOVERNANCE|Capítulo 1 (Vol. 9)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 2 — RELAÇÕES COM INVESTIDORES PÓS-CAPTAÇÃO|Capítulo 2 (Vol. 9)]]
- **Pretotyping**: Framework: Pretotyping (Alberto Savoia, 2011) (Fase 8, Vol. 3)
- **Pricing e Economia da Assinatura**: [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]], [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 6 — PRICING STRATEGY E ECONOMIA DA RECORRÊNCIA (SUBSCRIPTION ECONOMY)|Capítulo 6 (Vol. 4)]]
- **Priorização (RICE, ICE, MoSCoW, WSJF)**: Frameworks da Fase 11 e da Fase 13 (Vol. 4)
- **Processo de produto em escala**: [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#FASE 17 — OPERAÇÕES, PROCESSOS E GESTÃO EM ESCALA|Fase 17 (Vol. 7)]], [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 1 — PRODUTO EM ESCALA E DESCOBERTA CONTÍNUA|Capítulo 1 (Vol. 7)]]
- **Proposta de valor**: [[IGNICAO-Vol-2-Descoberta-e-Mercado#Canvas: Value Proposition Canvas (Alexander Osterwalder, 2014)|Canvas: Value Proposition Canvas (Fase 5, Vol. 2)]], [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 4 — DESCOBERTA DO PROBLEMA|Fase 4 (Vol. 2)]]
- **Psicologia do consumidor brasileiro**: [[IGNICAO-Vol-2-Descoberta-e-Mercado#CAPÍTULO 1 — PSICOLOGIA DO CONSUMIDOR BRASILEIRO: COMPORTAMENTO, DECISÃO, CONFIANÇA E CONVERSÃO|Capítulo 1 (Vol. 2)]]

### Q

- **Qualidade, Lean e Six Sigma**: [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 9 — GESTÃO DE QUALIDADE, SIX SIGMA E LEAN APLICADOS A TECNOLOGIA E OPERAÇÕES|Capítulo 9 (Vol. 7)]], Framework: Ishikawa / Fishbone Diagram (Fase 3, Vol. 1), Framework: Pareto Analysis (Fase 3, Vol. 1) e Framework: FMEA (Fase 7, Vol. 3)

### R

- **RACI / DACI / RAPID**: Framework: DACI / RACI / RAPID (Fase 16, Vol. 6)
- **Radical Candor**: Framework: Radical Candor (Kim Scott, 2017) (Fase 16, Vol. 6)
- **Recrutamento e seleção**: [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], Framework: Who / A Method for Hiring (Geoff Smart & Randy Street, 2008) (Fase 16, Vol. 6), [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 9 — EXECUTIVE HIRING: CONTRATAR LÍDERES SÊNIOR E C-LEVEL|Capítulo 9 (Vol. 6)]]
- **Rede, Mentores e Advisors (Contrato FAST)**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 12 — REDE, MENTORES E ADVISORS — COMO CONSTRUIR O CAPITAL HUMANO DO EMPREENDEDOR|Capítulo 12 (Vol. 1)]]
- **Referências (checagem de candidatos e investidores)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]]
- **Relatórios financeiros (DRE, Balanço e Fluxo de Caixa)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 1 — DEMONSTRATIVOS FINANCEIROS PARA O FUNDADOR|Capítulo 1 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 3 — MODELAGEM FINANCEIRA OPERACIONAL BOTTOM-UP E PROJEÇÕES POR COORTES (COHORTS)|Capítulo 3 (Vol. 5)]]
- **Retention Analysis e Coortes**: [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 13 — PRODUCT-MARKET FIT|Fase 13 (Vol. 4)]], Framework: Cohort Analysis (Fase 14, Vol. 5)
- **Revenue Operations (RevOps) e Expansão de Contas (KAM)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 3 — REVENUE OPERATIONS (REVOPS): ALINHANDO MARKETING, VENDAS E CS SOB UMA ÚNICA ARQUITETURA|Capítulo 3 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 4 — EXPANSÃO DE CONTAS E ACCOUNT MANAGEMENT ESTRATÉGICO|Capítulo 4 (Vol. 6)]]
- **RICE Scoring**: Framework: RICE Scoring (Intercom, circa 2016) (Fase 13, Vol. 4)
- **Riscos Corporativos e Seguros (D&O, E&O, Cyber)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 8 — GESTÃO DE RISCOS CORPORATIVOS E SEGUROS ESSENCIAIS (D&O, E&O, CYBER)|Capítulo 8 (Vol. 5)]]
- **Runway (pessoal e corporativo)**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 5 — CAPITAL DE GIRO, RECEBÍVEIS E GESTÃO DE CAIXA EM PROFUNDIDADE|Capítulo 5 (Vol. 5)]]

### S

- **SaaS (métricas, benchmarks e modelos Horizontais e Verticais)**: Frameworks da Fase 14 (Vol. 5), [[#CAPÍTULO 39 — HORIZONTAL B2B SAAS, ERPS, PRODUTIVIDADE, AUTOMAÇÃO DE BACKOFFICE E PMES|Capítulo 39 (Vol. 10)]], [[#CAPÍTULO 40 — VERTICAL SAAS: SISTEMAS OPERACIONAIS SETORIAIS COM PAGAMENTOS, CRÉDITO E IA EMBARCADOS|Capítulo 40 (Vol. 10)]]
- **SAFE e COCP (LC 182/2021)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 12 — INSTRUMENTOS DE CAPTAÇÃO NO BRASIL: MÚTUO, SAFE, FIDC, CROWDFUNDING|Capítulo 12 (Vol. 5)]]
- **Saúde mental do fundador**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 2 — SAÚDE MENTAL, DINÂMICA DE CO-FOUNDERS E HUMANIDADE DO FUNDADOR|Capítulo 2 (Vol. 1)]]
- **Scaling Up (Rockefeller Habits)**: Framework: Scaling Up / Rockefeller Habits (Verne Harnish, 2014) (Fase 17, Vol. 7)
- **Second-Time Founder (empreendedor de segunda viagem)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 20 — SECOND-TIME FOUNDER|Capítulo 20 (Vol. 9)]]
- **Segunda curva (reinvenção e portfólio)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 19 — REINVENÇÃO E SEGUNDA CURVA|Fase 19 (Vol. 9)]]
- **Segurança da Informação (ISO 27001, SOC 2 e engenharia)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 13 — SEGURANÇA DA INFORMAÇÃO: DA CERTIFICAÇÃO À ENGENHARIA|Capítulo 13 (Vol. 8)]]
- **Series A, B, C (captações institucionais)**: [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]]
- **Shutdown voluntário e insolvência**: [[IGNICAO-Vol-9-Maturidade-e-Exit#FASE 20 — ESTRATÉGIA DE SAÍDA (EXIT STRATEGY)|Fase 20 (Vol. 9)]], [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 19 — ENCERRAMENTO, FALÊNCIA E RECOMEÇO NO BRASIL|Capítulo 19 (Vol. 9)]]
- **SIPOC**: Framework: SIPOC (Motorola, anos 1980) (Fase 17, Vol. 7)
- **Sócios (escolha, conflitos e dissolução)**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 2 — SAÚDE MENTAL, DINÂMICA DE CO-FOUNDERS E HUMANIDADE DO FUNDADOR|Capítulo 2 (Vol. 1)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 7 — RESOLUÇÃO DE CONFLITOS SOCIETÁRIOS E COMERCIAIS: MEDIAÇÃO, ARBITRAGEM E JUDICIAL|Capítulo 7 (Vol. 8)]]
- **Spotify Model**: Framework: Spotify Model (Henrik Kniberg & Anders Ivarsson, 2012) (Fase 17, Vol. 7)
- **Story Mapping**: Framework: Story Mapping (Jeff Patton, 2014) (Fase 9, Vol. 3), Template: Story Map exemplo (Fase 9, Vol. 3)
- **SWOT / TOWS**: Framework: SWOT / TOWS Matrix (Albert Humphrey, 1960s) (Fase 6, Vol. 2)

### T

- **TAM / SAM / SOM**: [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]]
- **Taxas e Tributos no Brasil (Simples, Lucro Presumido, Lucro Real e Reforma IBS/CBS)**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 2 — CONTABILIDADE, REGIMES FISCAIS E TRIBUTÁRIO ESTRATÉGICO (REFORMA IBS/CBS E INCENTIVOS)|Capítulo 2 — Contabilidade, Regimes Fiscais e Tributário Estratégico (Reforma IBS/CBS e Incentivos) (Vol. 5)]]
- **Time (primeiros líderes, C-level e remuneração)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 16 — TIME, LIDERANÇA EXECUTIVA E CULTURA EM ESCALA|Fase 16 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 9 — EXECUTIVE HIRING: CONTRATAR LÍDERES SÊNIOR E C-LEVEL|Capítulo 9 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 10 — COMPENSAÇÃO, INCENTIVOS E PLANO DE CARREIRA|Capítulo 10 (Vol. 6)]]
- **Tipos societários (MEI, ME, EPP, LTDA, S.A.)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 1 — ESTRUTURA SOCIETÁRIA AVANÇADA: HOLDINGS, OFFSHORE (CAYMAN/DELAWARE), FLIP E REORGANIZAÇÃO|Capítulo 1 (Vol. 8)]]
- **Trabalhista (CLT vs PJ, teletrabalho e sindicatos)**: [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 4 — DIREITO TRABALHISTA ESTRATÉGICO: CLT vs PJ, REMOTO, SINDICATOS E PASSIVO|Capítulo 4 (Vol. 8)]]

### U

- **Unit economics**: Framework: Unit Economics (Fase 14, Vol. 5), [[IGNICAO-Vol-4-Tracao-e-PMF#FASE 12 — VALIDAÇÃO DO MODELO DE NEGÓCIO|Fase 12 (Vol. 4)]]
- **Usabilidade (testes)**: Framework: Usability Testing (Jakob Nielsen & Don Norman, anos 1990) (Fase 10, Vol. 3), [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE|Fase 10 (Vol. 3)]]
- **UX Research**: Frameworks da Fase 10 (Vol. 3)

### V

- **Validação de problema e de solução**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#FASE 8 — EXPERIMENTOS DE VALIDAÇÃO DO PROBLEMA E DA SOLUÇÃO|Fase 8 (Vol. 3)]]
- **Valuation**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 10 — VALUATION METHODS: COMO INVESTIDORES CALCULAM E COMO VOCÊ CALCULA PARA NEGOCIAR|Capítulo 10 (Vol. 5)]], Framework: Discounted Cash Flow (DCF) (Fase 14, Vol. 5), Framework: Comparable Company Analysis / Precedent Transactions (Fase 14, Vol. 5)
- **Value Proposition Canvas (VPC)**: [[IGNICAO-Vol-2-Descoberta-e-Mercado#Canvas: Value Proposition Canvas (Alexander Osterwalder, 2014)|Canvas: Value Proposition Canvas (Fase 5, Vol. 2)]]
- **Vendas B2B e Enterprise**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 5 — SALES: MOTION COMPLETA, DO OUTBOUND AO RENEWAL|Capítulo 5 (Vol. 4)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#FASE 15 — MÁQUINA DE RECEITA, GO-TO-MARKET EM ESCALA E EXPANSÃO|Fase 15 (Vol. 6)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 2 — VENDAS COMPLEXAS ENTERPRISE: CICLO LONGO, ALTO VALOR, MÚLTIPLOS DECISORES|Capítulo 2 (Vol. 6)]]
- **Venture Capital e Venture Debt**: [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 4 — BOOTSTRAP vs VENTURE CAPITAL: A ESCOLHA FUNDACIONAL|Capítulo 4 (Vol. 1)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 13 — VENTURE DEBT E REVENUE-BASED FINANCING (RBF)|Capítulo 13 (Vol. 5)]]
- **Vesting e Cliff**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#FASE 18 — ESTRUTURAÇÃO JURÍDICA, SOCIETÁRIA E BLINDAGEM OPERACIONAL|Fase 18 (Vol. 8)]], [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 2 — STOCK OPTIONS, VESTING E ESOP NO BRASIL|Capítulo 2 (Vol. 8)]]
- **V2MOM**: Framework: V2MOM (Marc Benioff / Salesforce, 1999) (Fase 17, Vol. 7)

### W

- **Wardley Mapping**: Framework: Wardley Mapping (Simon Wardley, 2005) (Fase 1, Vol. 1)
- **Wedge (cunha estratégica de entrada)**: [[IGNICAO-Vol-1-Ideacao#FASE 1 — ENCONTRAR A IDEIA|Fase 1 (Vol. 1)]], [[IGNICAO-Vol-2-Descoberta-e-Mercado#FASE 6 — MAPEAMENTO DE MERCADO E CONCORRÊNCIA|Fase 6 (Vol. 2)]], [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 3 — IDEA → WEDGE → SCALE: O FRAMEWORK ANTLER COMO LENTE TRANSVERSAL|Capítulo 3 (Vol. 3)]]
- **Working Backwards (Amazon PR-FAQ)**: Framework: Working Backwards / PR-FAQ (Amazon, internal method) (Fase 17, Vol. 7)

### Y

- **Y Combinator (filosofia, Default Alive e Founder Mode)**: [[IGNICAO-Vol-1-Ideacao#FASE 0 — PREPARAÇÃO DO EMPREENDEDOR|Fase 0 (Vol. 1)]], [[IGNICAO-Vol-5-Financas-e-Captacao#FASE 14 — CAPITAL PARA ESCALA, RODADAS E EFICIÊNCIA FINANCEIRA|Fase 14 (Vol. 5)]], [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 8 — FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO|Capítulo 8 (Vol. 6)]]

---

## ÍNDICE DE ECOSSISTEMAS, CICLO DE VIDA E DAS 42 VERTICAIS SETORIAIS

- **Aeroespacial, Spacetech, Drones e Defesa (Dual-Use)**: [[#CAPÍTULO 28 — AEROSPACE, SPACETECH, DRONES, SATÉLITES E TECNOLOGIA DE DEFESA (DUAL-USE)|Capítulo 28]]
- **Aftermarket Automotivo, Autopeças, Seminovos e Leilões**: [[#CAPÍTULO 24 — CONSÓRCIOS ADMINISTRADOS (BACEN), RENTAL DE MÁQUINAS/FROTAS PESADAS E AFTERMARKET AUTOMOTIVO (AUTOPEÇAS, SEMINOVOS E LEILÕES)|Capítulo 24]]
- **Agritech (Lavoura, Maquinário, Crédito Rural e Precisão)**: [[#CAPÍTULO 11 — AGRITECH: PLAYBOOK PARA O CAMPO BRASILEIRO|Capítulo 11]]
- **AI-Native, Agentes Autônomos, Modelos Fundacionais e MLOps**: [[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 10 — AI COMO PARTE DO PRODUTO (AI-NATIVE PRODUCT)|Capítulo 10 (Vol. 4)]], [[#CAPÍTULO 42 — AI-NATIVE, MODELOS FUNDACIONAIS, AGENTES AUTÔNOMOS, INFRAESTRUTURA DE DADOS E MLOPS|Capítulo 42]]
- **Arco Norte, Hidrovias, Ferrovias e Portos Graneleiros**: [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13]]
- **Armazenagem de Grãos, Silos Inteligentes e Classificação Óptica**: [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13]]
- **Barter, Originação de Grãos, CPR e Hedge em Chicago (CBOT/B3)**: [[#CAPÍTULO 13 — TRADING DE COMMODITIES, ORIGINAÇÃO, BARTER, ARMAZENAGEM (SILOS), HEDGE (CBOT/B3) E ESCOAMENTO (ARCO NORTE)|Capítulo 13]]
- **Biocombustíveis (Etanol de Milho, E2G, SAF, Biodiesel e CBIOs/RenovaBio)**: [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14]]
- **Bioeconomia Extrativista da Amazônia (Açaí, Cacau, Castanha e SisGen)**: [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14]]
- **Bioinsumos (Controle Biológico, Inoculantes) e Pó de Rocha (Agrominerais)**: [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14]]
- **Biotech e Healthtech (Saúde Digital, Ensaios Clínicos e ANVISA/ANS)**: [[#CAPÍTULO 29 — BIOTECH E HEALTHTECH: PLAYBOOK DE REGULAÇÃO, ENSAIOS E CAPITAL|Capítulo 29]]
- **Bootstrapping, Serviços Produtizados (*Productized Services*) e *Service-to-Product***: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 7 — BOOTSTRAPPING, SERVIÇOS PRODUTIZADOS (PRODUCTIZED SERVICES) E A TRANSIÇÃO SERVICE-TO-PRODUCT|Capítulo 7 (Vol. 3)]]
- **Brasis fora do Eixo (Regionalidades, Interior, Logística e Cultura de Negócios)**: [[#CAPÍTULO 6 — OPERANDO NOS BRASIS FORA DO EIXO|Capítulo 6]]
- **CADE e Defesa da Concorrência (Antitruste)**: [[#CAPÍTULO 5 — CADE E ANTITRUSTE — QUANDO O CRESCIMENTO ATRAI O REGULADOR|Capítulo 5]]
- **Cash Cow (Dividendos Perpétuos), Holdings Patrimoniais, Offshores e *Family Office***: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 21 — A EMPRESA CASH COW (DIVIDENDOS PERPÉTUOS), HOLDINGS PATRIMONIAIS, FAMILY OFFICE E GESTÃO DE FORTUNA PÓS-EXIT|Capítulo 21 (Vol. 9)]]
- **Cleantech, Mercado de Carbono e ESG Ambiental**: [[#CAPÍTULO 17 — CLEANTECH E ESG: STARTUPS DE IMPACTO AMBIENTAL NO BRASIL|Capítulo 17]]
- **Clínicas Médicas Populares, Odontológicas, Estética Avançada, Diagnóstico, Farmácias Magistrais e OPME**: [[#CAPÍTULO 30 — SAÚDE FÍSICA PRIVADA: REDES DE CLÍNICAS MÉDICAS E ODONTOLÓGICAS, ESTÉTICA AVANÇADA, MEDICINA DIAGNÓSTICA, FARMÁCIAS MAGISTRAIS E OPME|Capítulo 30]]
- **Comércio Exterior, Importação (Ásia-Brasil), Desembaraço, *Landed Cost* e TTD 409/410**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 7 — COMÉRCIO EXTERIOR, IMPORTAÇÃO (ÁSIA-BRASIL), DESEMBARAÇO ADUANEIRO, TRIBUTAÇÃO EM CASCATA E BENEFÍCIOS FISCAIS ESTADUAIS|Capítulo 7 (Vol. 5)]]
- **Consórcios Administrados (Lei 11.795/2008 e Regulação BCB)**: [[#CAPÍTULO 24 — CONSÓRCIOS ADMINISTRADOS (BACEN), RENTAL DE MÁQUINAS/FROTAS PESADAS E AFTERMARKET AUTOMOTIVO (AUTOPEÇAS, SEMINOVOS E LEILÕES)|Capítulo 24]]
- **Creator Economy, Mídia Digital, Streaming e Infoprodutos**: [[#CAPÍTULO 47 — CREATOR ECONOMY, MÍDIA DIGITAL, STREAMING, ÁUDIO, INFOPRODUTOS E PLATAFORMAS DE COMUNIDADE|Capítulo 47]]
- **Crédito Digital, Lending, Securitização (FIDCs) e Cobrança**: [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 5 — CAPITAL DE GIRO, RECEBÍVEIS E GESTÃO DE CAIXA EM PROFUNDIDADE|Capítulo 5 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 6 — RELAÇÕES BANCÁRIAS, LINHAS DE CRÉDITO E GARANTIAS NO BRASIL|Capítulo 6 (Vol. 5)]], [[IGNICAO-Vol-5-Financas-e-Captacao#CAPÍTULO 12 — INSTRUMENTOS DE CAPTAÇÃO NO BRASIL: MÚTUO, SAFE, FIDC, CROWDFUNDING|Capítulo 12 (Vol. 5)]], [[#CAPÍTULO 8 — CRÉDITO DIGITAL, LENDING, SECURITIZAÇÃO (FIDCS), ANTECIPAÇÃO DE RECEBÍVEIS E COBRANÇA|Capítulo 8]]
- **Cybersecurity, Identidade Digital, Biometria e Antifraude**: [[#CAPÍTULO 43 — CYBERSECURITY, IDENTIDADE DIGITAL, BIOMETRIA, PREVENÇÃO A FRAUDES E PRIVACIDADE|Capítulo 43]]
- **D2C (Marcas Nativas Digitais), Beleza, Moda, CPG e Wellness**: [[#CAPÍTULO 36 — MARCAS NATIVAS DIGITAIS (D2C), BELEZA, MODA, BENS DE CONSUMO (CPG) E WELLNESS/FITNESS|Capítulo 36]]
- **DevTools, Cloud Infrastructure, APIs e Open Source Comercial (COSS)**: [[IGNICAO-Vol-3-Experimentos-e-Prototipagem#CAPÍTULO 6 — OPEN SOURCE COMO ESTRATÉGIA|Capítulo 6 (Vol. 3)]], [[#CAPÍTULO 44 — DEVTOOLS, CLOUD INFRASTRUCTURE, APIS, OBSERVABILIDADE E OPEN SOURCE COMERCIAL (COSS)|Capítulo 44]]
- **Economia da Inovação e seus 8 Atores (Universidades, Fomento, CVC, VC, PE)**: [[#CAPÍTULO 1 — A ECONOMIA DA INOVAÇÃO E SEUS ATORES: UNIVERSIDADE, ESTADO, CORPORAÇÕES, VENTURE STUDIOS E CAPITAL DE RISCO|Capítulo 1]]
- **Edtech (Educação K-12, Superior/MEC, Corporativa e EdFin)**: [[#CAPÍTULO 31 — EDTECH: PLAYBOOK PARA TECNOLOGIA DE EDUCAÇÃO NO BRASIL|Capítulo 31]]
- **Energytech (Mercado Livre de Energia, Geração Distribuída Solar e Baterias/BESS)**: [[#CAPÍTULO 16 — ENERGYTECH: GERAÇÃO DISTRIBUÍDA, MERCADO LIVRE DE ENERGIA, SMART GRIDS E ARMAZENAMENTO|Capítulo 16]]
- **Fintech (Pagamentos, Pix, Open Finance e Banking-as-a-Service)**: [[#CAPÍTULO 7 — FINTECH: PAGAMENTOS, BANKING-AS-A-SERVICE (BAAS), PIX, OPEN FINANCE E INFRAESTRUTURA FINANCEIRA|Capítulo 7]]
- **Foodtech, Food Service, Dark Kitchens e Novos Ingredientes**: [[#CAPÍTULO 35 — FOODTECH, FOOD SERVICE, DARK KITCHENS, SUPPLY CHAIN ALIMENTAR E NOVOS INGREDIENTES|Capítulo 35]]
- **Franchising, Licenciamento e Redes Multi-Unidades (Lei 13.966/2019 e COF)**: [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 6 — FRANCHISING, LICENCIAMENTO E EXPANSÃO DE REDES MULTI-UNIDADES (LEI 13.966/2019)|Capítulo 6 (Vol. 6)]]
- **Funerário (Setor), Cemitérios, Crematórios, Planos de Assistência Familiar e DeathTech**: [[#CAPÍTULO 38 — SETOR FUNERÁRIO, CEMITÉRIOS, CREMATÓRIOS, PLANOS DE ASSISTÊNCIA FAMILIAR, DEATHTECH E SUCESSÃO|Capítulo 38]]
- **Gaming, Estúdios de Jogos, E-Sports e Apostas Reguladas (iGaming/Bets)**: [[#CAPÍTULO 48 — GAMING, ESTÚDIOS DE JOGOS, E-SPORTS, APOSTAS REGULADAS (IGAMING/BETS) E ECONOMIA VIRTUAL|Capítulo 48]]
- **Geografia Mundial da Inovação e os 15 Hubs de Inovação do Brasil**: [[#CAPÍTULO 2 — GEOGRAFIA MUNDIAL DA INOVAÇÃO: CONTINENTES, ESPECIALIZAÇÃO, VANTAGENS COMPETITIVAS E HUBS GLOBAIS E BRASILEIROS|Capítulo 2]]
- **Govtech (Vendas para Governo, Discovery Público, Dossiê de TI/Segurança, ACT, Lei 14.133/2021 e CPSI)**: [[#CAPÍTULO 32 — GOVTECH: STARTUP VENDENDO PARA GOVERNO|Capítulo 32]]
- **Hardware, IoT, Robótica e Deep Tech Física**: [[#CAPÍTULO 21 — HARDWARE E DEEP TECH: CONSTRUIR NEGÓCIO COM FABRICAÇÃO, IP E HORIZONTES LONGOS|Capítulo 21]]
- **Horizontal B2B SaaS, ERPs e Automação de Backoffice para PMEs**: [[#CAPÍTULO 39 — HORIZONTAL B2B SAAS, ERPS, PRODUTIVIDADE, AUTOMAÇÃO DE BACKOFFICE E PMES|Capítulo 39]]
- **HRTech, Folha de Pagamento, Benefícios Flexíveis e Recrutamento**: [[#CAPÍTULO 45 — HRTECH, FOLHA DE PAGAMENTO, BENEFÍCIOS FLEXÍVEIS, RECRUTAMENTO E FUTURE OF WORK|Capítulo 45]]
- **Indústria 4.0, Manufatura Avançada, IIoT e Manutenção Preditiva**: [[#CAPÍTULO 20 — INDÚSTRIA 4.0, MANUFATURA AVANÇADA, MANUTENÇÃO PREDITIVA, IIOT E AUTOMAÇÃO FABRIL|Capítulo 20]]
- **Infratech (Saneamento, Concessões, PPPs e Obras Pesadas)**: [[#CAPÍTULO 15 — INFRATECH: SANEAMENTO, CONCESSÕES, PPPS, OBRAS PESADAS E INFRAESTRUTURA CRÍTICA|Capítulo 15]]
- **Insurtech e Seguros Embarcados (*Embedded Insurance* / SUSEP)**: [[#CAPÍTULO 9 — INSURTECH: SEGUROS DIGITAIS, SEGUROS EMBARCADOS (EMBEDDED INSURANCE), SINISTROS E PREVIDÊNCIA|Capítulo 9]]
- **Irrigação de Precisão, Pivôs Centrais e Outorga Hídrica (ANA)**: [[#CAPÍTULO 14 — BIOCOMBUSTÍVEIS (ETANOL DE MILHO, SAF, CBIOS), BIOINSUMOS, AGROMINERAIS, IRRIGAÇÃO E BIOECONOMIA EXTRATIVISTA|Capítulo 14]]
- **Legaltech (Tecnologia Jurídica, Automação Contratual e Jurimetria)**: [[#CAPÍTULO 33 — LEGALTECH: TECNOLOGIA JURÍDICA NO BRASIL|Capítulo 33]]
- **Liquidez Secundária (*Secondaries* para Fundadores, Executivos e Investidores)**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 15 — LIQUIDEZ SECUNDÁRIA (SECONDARIES): REALIZAÇÃO PARCIAL DE CAPITAL PARA FUNDADORES, EXECUTIVOS E INVESTIDORES ANTES DO EXIT|Capítulo 15 (Vol. 9)]]
- **Logtech, Frete e Supply Chain**: [[#CAPÍTULO 22 — LOGTECH: TECNOLOGIA EM LOGÍSTICA E SUPPLY CHAIN NO BRASIL|Capítulo 22]]
- **Martech, SalesTech, CRM, WhatsApp-First e Retail Media**: [[#CAPÍTULO 46 — MARTECH, ADTECH, SALESTECH, CRM, ATENDIMENTO CONVERSACIONAL (WHATSAPP-FIRST) E RETAIL MEDIA|Capítulo 46]]
- **Miningtech, Oil & Gas Tech e Recursos Naturais Pesados (ANP)**: [[#CAPÍTULO 19 — MININGTECH, OIL & GAS TECH, GEOLOGIA DIGITAL E RECURSOS NATURAIS PESADOS|Capítulo 19]]
- **Mobitech, Gestão de Frotas, Telemetria e Eletromobilidade**: [[#CAPÍTULO 23 — MOBITECH: MOBILIDADE URBANA, GESTÃO DE FROTAS, TELEMETRIA, ELETROMOBILIDADE E AUTÔNOMOS|Capítulo 23]]
- **Padrões Regulatórios Transversais (Sandbox Regulatório, Open Data e Relação com Autarquias)**: [[#CAPÍTULO 4 — PADRÕES REGULATÓRIOS TRANSVERSAIS: SANDBOX, OPEN DATA E RELAÇÃO COM REGULADOR|Capítulo 4]]
- **Pecuária de Precisão (PecTech), Proteína Animal, Genética Bovina (FIV), Rastreabilidade (SISBOV/EUDR) e Aquicultura (AquaTech)**: [[#CAPÍTULO 12 — PECUÁRIA DE PRECISÃO (PECTECH), PROTEÍNA ANIMAL, GENÉTICA BOVINA (FIV), RASTREABILIDADE E AQUICULTURA (AQUATECH)|Capítulo 12]]
- **Proptech e Construtech (Mercado Imobiliário e Construção Civil)**: [[#CAPÍTULO 25 — PROPTECH: TECNOLOGIA NO MERCADO IMOBILIÁRIO BRASILEIRO|Capítulo 25]]
- **Regulação Setorial no Brasil (Mapa das Autarquias — BCB, CVM, SUSEP, ANVISA, ANS, ANATEL, ANEEL, ANP, ANAC, MAPA, MEC, ANPD)**: [[#CAPÍTULO 3 — REGULAÇÃO SETORIAL NO BRASIL: MAPA DAS AUTARQUIAS E QUANDO CADA UMA IMPORTA|Capítulo 3]]
- **Rental (Locação de Máquinas Pesadas, Linha Amarela, Caminhões e Equipamentos)**: [[#CAPÍTULO 24 — CONSÓRCIOS ADMINISTRADOS (BACEN), RENTAL DE MÁQUINAS/FROTAS PESADAS E AFTERMARKET AUTOMOTIVO (AUTOPEÇAS, SEMINOVOS E LEILÕES)|Capítulo 24]]
- **Resíduos Sólidos (Gestão de), Aterros, Biometano, Reciclagem e Base Florestal/Celulose**: [[#CAPÍTULO 18 — GESTÃO DE RESÍDUOS SÓLIDOS, ECONOMIA CIRCULAR, RECICLAGEM INDUSTRIAL, BIOMETANO E BASE FLORESTAL/CELULOSE|Capítulo 18]]
- **Retailtech, E-Commerce, Omnichannel e Digitalização do Varejo**: [[#CAPÍTULO 34 — RETAILTECH, E-COMMERCE, OMNICHANNEL, SOCIAL COMMERCE E DIGITALIZAÇÃO DO VAREJO FÍSICO|Capítulo 34]]
- **Segurança Privada, Portaria Remota/Autônoma, Visão Computacional e *Facilities***: [[#CAPÍTULO 26 — SEGURANÇA PRIVADA, PATRIMONIAL, CONDOMINIAL (PORTARIA REMOTA/AUTÔNOMA), VISÃO COMPUTACIONAL E FACILITIES|Capítulo 26]]
- **Serviços Profissionais B2B, Consultorias, Software Houses, *Nearshoring* e BPO**: [[#CAPÍTULO 41 — SERVIÇOS PROFISSIONAIS B2B DE ALTA MARGEM, CONSULTORIAS, SOFTWARE HOUSES, EXPORTAÇÃO DE ENGENHARIA (NEARSHORING) E BPO|Capítulo 41]]
- **Spin-offs, Carve-outs e Venture Building Corporativo**: [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 14 — SPIN-OFFS, CARVE-OUTS E VENTURE BUILDING CORPORATIVO: CRIANDO NOVAS EMPRESAS A PARTIR DE ATIVOS INTERNOS|Capítulo 14 (Vol. 9)]]
- **Telecomunicações, Provedores Regionais de Fibra (ISPs), 5G Privativo e Data Centers de IA**: [[#CAPÍTULO 27 — TELECOMUNICAÇÕES, PROVEDORES REGIONAIS DE FIBRA (ISPS), REDES PRIVATIVAS 5G, TORRES E DATA CENTERS DE IA|Capítulo 27]]
- **Traveltech, Eventos, SportsTech, PetTech e Economia da Longevidade (*Silver Economy*)**: [[#CAPÍTULO 37 — TRAVELTECH, HOSPITALIDADE, EVENTOS, SPORTSTECH, PETTECH E ECONOMIA DA LONGEVIDADE (SILVER ECONOMY)|Capítulo 37]]
- **Vertical SaaS (Sistemas Operacionais Setoriais com Pagamentos, Crédito e IA)**: [[#CAPÍTULO 40 — VERTICAL SAAS: SISTEMAS OPERACIONAIS SETORIAIS COM PAGAMENTOS, CRÉDITO E IA EMBARCADOS|Capítulo 40]]
- **Wealthtech, Mercado de Capitais, Cripto, Drex e Tokenização (RWA)**: [[#CAPÍTULO 10 — WEALTHTECH, MERCADO DE CAPITAIS, GESTÃO PATRIMONIAL, CRIPTO E TOKENIZAÇÃO DE ATIVOS (DREX E RWA)|Capítulo 10]]`;
}

module.exports = {
  enrichDataCompilacaoBody,
  enrichBibliografiaBody,
  enrichIndiceFrameworksBody,
  enrichIndiceRemissivoBody,
};


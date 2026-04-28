---
title: "APÊNDICE CD — MODELAGEM FINANCEIRA COM COHORTS: PROJEÇÕES QUE FUNCIONAM EM EMPRESA RECORRENTE"
appendix: "CD"
---

## APÊNDICE CD — MODELAGEM FINANCEIRA COM COHORTS: PROJEÇÕES QUE FUNCIONAM EM EMPRESA RECORRENTE

### O QUE É

Modelagem financeira com cohorts é a forma de projetar receita, custo, e caixa, de uma empresa de receita recorrente (SaaS, D2C assinatura, ou serviço continuado). Em que a projeção não parte de "vou vender X em Y". Parte de "cada grupo de clientes adquiridos no mês Y vai se comportar assim ao longo dos próximos N meses". A soma dessas cohorts, compostas mês a mês, produz projeção que reflete a realidade da retention, e expansão. Em vez da fantasia de vender, e reter, tudo igual.

A diferença entre modelo "tradicional", e modelo com cohorts, é tão significativa que muitos founders olham projeção convencional de uma startup de assinatura, e concluem "esse modelo não diz nada real". O motivo. A receita de SaaS no mês 24 não é "quanto vendi no mês 24". É "soma do que ficou vivo de cada cohort, desde o mês um até o mês 24. Cada um com sua curva de churn, e expansão". Projeção sem cohort ignora esse mecanismo.

Esse apêndice é o que separa financeiro que entende subscription, de financeiro que faz orçamento de varejo com nome diferente. É material técnico. Assume que o leitor conhece conceitos de MRR, ARR, LTV, e CAC (cobertos em apêndices anteriores).

### POR QUE IMPORTA

Projeção realista é condição de sobrevivência. Empresa que projeta com modelo errado decide investir baseado em receita fantasiada. Chega no mês dezoito sem a receita. Caixa queimado. Modelo de cohort revelaria "essa tese precisa de melhor retention para fazer sentido" antes de investir.

Fundraising mais sofisticado exige cohort. Os VCs Série A em diante não olham "receita projetada" sem olhar cohorts. Investidor bom quer ver. Como o cohort 2023 performa? E 2022? Degradação? Melhora? Empresa que não tem essa análise aparenta imaturidade.

Decisões de produto, e GTM, dependem. Churn concentrado em cohort de clientes pequenos? O produto para SMB tem problema. Churn alto em clientes vindo de canal X? O canal está vendendo errado. Sem cohort, o diagnóstico é genérico.

Valuation depende de cohort curves. Comprador enterprise, ou VC, que faz diligência financeira vai construir cohort analysis da sua empresa. Se a sua cohort curve é saudável, o valuation é defendível. Se é ruim, o valuation cai, ou o deal não fecha. Melhor conhecer a sua cohort antes do comprador.

> [!warning] Diferença invisível em métricas agregadas
> A diferença entre sucesso, e falha, em cohort é invisível em métricas agregadas. Empresa pode ter MRR crescendo, e cohorts de 2023 colapsando. Métricas agregadas dizem "tudo bem". Cohort analysis diz "o crescimento depende só de aquisição. E quando aquisição parar, MRR cai". Sem cohort, o CEO é surpreendido.

### COHORT 101 (FUNDAMENTOS RÁPIDOS)

Cohort é o grupo de clientes adquiridos em um determinado período (tipicamente mês, ou trimestre), e analisado ao longo do tempo.

**Cohort de retention em logos.** Percentual de clientes adquiridos no período, que ainda estão ativos N meses depois.

Exemplo. Cohort jan/2024 tem 100 clientes. Mês um, 100 ativos (cem por cento). Mês três, 92 ativos (noventa e dois por cento). Mês seis, 85 ativos (oitenta e cinco por cento). Mês doze, 76 ativos (setenta e seis por cento).

Essa é a cohort curve de retention em logos.

**Cohort de retention em receita.** Percentual da receita inicial do cohort, que ainda está presente N meses depois. Considerando churn, downgrade, e upgrade.

Mesmo cohort jan/2024, com MRR inicial de R$ 10.000. Mês um, R$ 10.000 (cem por cento). Mês três, R$ 10.500 (cento e cinco por cento). Alguns clientes expandiram. Mês seis, R$ 11.200 (cento e doze por cento). Mês doze, R$ 13.500 (cento e trinta e cinco por cento).

> [!important] NRR no cohort
> Curva crescente igual a NRR maior que cem por cento no cohort. É o objetivo. Se a curva cai, NRR é menor que cem por cento no cohort, e a empresa precisa adquirir só para repor.

### CONSTRUÇÃO DO MODELO, PASSO A PASSO

Passo 1, histórico por cohort.**

Reunir dados históricos. Para cada cohort (mês, ou trimestre, de aquisição). Número de clientes, e MRR inicial. Para cada cohort, status mensal. Quantos ainda ativos, MRR total, downgrade, upgrade, e churn.

Planilha, ou tool. Looker, Tableau, Power BI, Amplitude, Mixpanel, ou Excel para empresas menores. No mínimo doze meses de histórico, para construir curva confiável.

Passo 2, identificar padrões de cohort curves.**

Padrões típicos em SaaS B2B.

Curva "J" (ideal). Cai um pouco nos primeiros meses (alguns cancelam após trial). Estabiliza. Depois sobe por expansão. Final após vinte e quatro meses, cento e dez a cento e quarenta por cento do inicial.

Curva "plateau". Cai para cerca de oitenta por cento nos primeiros doze meses. Fica constante. NRR cerca de oitenta por cento. SaaS comum em SMB.

Curva "decay". Cai continuamente, sem estabilizar. Setenta por cento aos doze meses. Cinquenta por cento aos vinte e quatro. Problema estrutural de retention. Típico em D2C de assinatura, com produto commodity.

Curva "J invertida". Sobe nos primeiros meses, e cai depois. Sinal de que o aha moment é rápido, mas o produto não sustenta valor de longo prazo.

Passo 3, segmentar cohorts.**

Um cohort agregado esconde variação. Segmentações úteis. Por canal de aquisição (direto, pago, referral, ou parceiro). Por tier, ou plano (SMB, Mid-Market, ou Enterprise). Por vertical (setor do cliente). Por geografia (BR, US, EU, ou LatAm). Por produto principal contratado (se multi-produto). Por volume de uso inicial (heavy user versus light user).

Cada segmento pode ter cohort curve muito diferente. A média esconde sinal. Por exemplo, cohort enterprise pode ter NRR de cento e trinta por cento, enquanto SMB tem NRR de oitenta e cinco por cento.

Passo 4, fitting de curva, e projeção forward.**

Com histórico de doze meses ou mais, ajustar função matemática que descreva o comportamento médio de cohorts. Abordagens.

**Abordagem simples (spreadsheet).** Calcular percentual de retention por mês, como média dos cohorts históricos. Aplicar essa percentagem a novos cohorts projetados.

Exemplo. Cohorts históricos mostram em média noventa e cinco por cento de retention no mês um, noventa por cento no mês três, oitenta e cinco por cento no mês seis, oitenta por cento no mês doze, e setenta e cinco por cento no mês 24. Para cohort projetado de jun/2026, com 200 novos clientes a R$ 500 por mês. MRR inicial, R$ 100.000. Mês um projetado, R$ 95.000. Mês três projetado, R$ 90.000. Mês doze projetado, R$ 85.000. Etc.

**Abordagem sofisticada (modelagem estatística).** Modelo de sobrevivência (Kaplan-Meier, ou Weibull) para churn. Regressão para expansion. Validação out-of-sample (predizer cohort 2024 usando modelo treinado em cohort 2022. Verificar erro).

Para startup Série A, a abordagem simples basta. Para Série C em diante, com sofisticação financeira, a abordagem estatística.

Passo 5, compor receita total por mês.**

Receita do mês X é soma das cohorts ativas.

MRR(X) igual a MRR remanescente de cohorts anteriores, mais MRR de novo cohort no mês X.

Em planilha, tipicamente. Linha, mês. Colunas, cohorts (cohort jan/24, fev/24, mar/24, etc.). Cada célula, MRR da cohort Y no mês X.

Cohort jan/24 no mês jan/24, MRR inicial. Cohort jan/24 no mês fev/24, MRR inicial vezes retention percentual. Cohort fev/24 no mês fev/24, MRR inicial de fev/24. E assim por diante. Soma de cada linha igual a MRR total do mês.

Passo 6, projetar aquisição de novos cohorts.**

A projeção de novos cohorts é onde mora a imaginação (e o erro). Precisa ser honesto sobre. Canais de aquisição, e quanto vão gerar. CAC por canal (esperado versus histórico). Ciclo de venda (lead, depois close). Saturação de canal (conforme cresce, o CAC sobe).

Métodos. Bottom-up. Capacidade de cada canal, vezes eficácia. Por exemplo, SEO gera mil leads por mês. Conversão cinco por cento. Ticket médio R$ 500, igual a R$ 25.000 em novos MRR via SEO. Top-down. Mercado endereçável, vezes share, vezes growth. "Podemos alcançar dez por cento do mercado SMB de financeiro em três anos". Útil para visão. Ruim para modelagem operacional.

Modelo saudável usa bottom-up, com constraints realistas. Canal X saturará em Y escala. O ciclo de venda é Z. A conversão costuma ser W por cento.

Passo 7, custos variáveis por cohort.**

Cada cohort tem custo associado. CAC inicial (marketing, mais sales, alocado). COGS por mês por cliente ativo (infra, suporte, e CS). Onboarding, ou implementação (one-time, nos primeiros meses).

Permitindo calcular LTV por cohort. LTV igual a soma (MRR por mês, vezes gross margin) ao longo da vida esperada da cohort. Se o cohort tem NRR de cento e dez por cento, o LTV cresce com o tempo.

LTV dividido por CAC, por cohort. Métrica-chave. Maior que três vezes em SaaS B2B é saudável. Menor que dois vezes preocupa. Maior que cinco vezes pode indicar sub-investimento em aquisição (oportunidade).

Passo 8, cenários.**

Modelo completo projeta três cenários. Base. Premissas realistas, com base em histórico. Upside. Retention melhora cinco pontos percentuais. Aquisição vinte por cento maior. Expansão trinta por cento maior. Downside. Retention piora dez pontos percentuais. Aquisição quarenta por cento abaixo. Expansão estagna.

Runway em cada cenário. Decisões disparadas por cada cenário. Ponto de no-return em downside.

### SINAIS QUE SÓ COHORT REVELA

**Sinal 1, retention melhorando entre cohorts.** Cohort 2023 estava em oitenta por cento no mês doze. Cohort 2024 está em oitenta e sete por cento no mês doze. O produto está melhorando. O onboarding evoluiu. O ICP (Ideal Customer Profile) está mais afinado. Sinal bom.

**Sinal 2, retention piorando entre cohorts.** Cohort 2022 em oitenta e cinco por cento. Cohort 2023 em setenta e cinco por cento. Cohort 2024 projeta setenta por cento. Algo estrutural piorando. Pode ser. Cliente errado entrando (canal pago mais agressivo trazendo ICP errado). Concorrência crescente. Produto estagnado. Onboarding pior. Diagnóstico urgente.

**Sinal 3, expansão concentrada em poucos cohorts.** Oitenta por cento da expansão vem de cohorts pré-2020. Cohorts novos não estão expandindo. Pode significar. Mercado de SMB tem menos headroom. Novo produto não está sendo comprado por clientes novos. Upsell depende de relacionamento de longo prazo.

**Sinal 4, churn concentrado em um segmento.** A segmentação revela. Cohorts de clientes adquiridos via ad pago têm churn três vezes maior que orgânico. O CAC justifica esse churn? Se não, o canal está destruindo valor. Com cohort segmentado, fica claro. Sem, invisível.

**Sinal 5, payback aumentando.** CAC payback em cohort 2022 era catorze meses. Em 2024 é vinte e dois meses. O custo de aquisição cresceu mais rápido que LTV. Economia piorando. A empresa cresce ARR, mas perde dinheiro por cliente marginal.

### APLICAÇÃO, DECISÕES BASEADAS EM COHORT

**Decisão 1, investir ou não em canal.** Canal X tem CAC alto, mas cohort curve forte (NRR cento e trinta por cento). Payback longo. LTV alto. Investir. Canal Y tem CAC baixo, mas cohort curve ruim (NRR oitenta por cento). Payback curto. LTV baixo. Cuidado com escalada.

**Decisão 2, segmentar produto.** Cohort segmentado revela. Tier Basic tem NRR de setenta e cinco por cento. Tier Pro tem NRR de cento e quinze por cento. Tier Enterprise tem NRR de cento e quarenta por cento. Conclusão. Investir em elevação (mais cohort Pro, ou Enterprise). Possivelmente descontinuar, ou endurecer, tier Basic.

**Decisão 3, foco geográfico.** Cohort por geografia. BR NRR cento e dez por cento. LatAm NRR noventa e cinco por cento. US NRR cento e vinte e cinco por cento. Expansão US (apesar de difícil) parece mais rentável que LatAm.

**Decisão 4, preço.** Cohort de clientes que compraram com desconto de vinte por cento ou mais, tem churn duas vezes maior. O desconto está atraindo cliente errado. O cliente não vê valor real. Revisar política de desconto.

**Decisão 5, fundraising timing.** Cohort curve mostra que NRR vai superar cento e vinte por cento em seis meses, com melhorias de produto previstas. Esperar para fundraise, até as métricas consolidarem. O valuation sobe. Ou captar agora, e usar capital para acelerar.

### FERRAMENTAS

**Startup seed, ou Série A.** Excel, ou Google Sheets. Com template bom (templates gratuitos da Christoph Janz, Jason Lemkin, e OpenView), é suficiente.

**Série B a C.** Tools específicos de SaaS analytics. ChartMogul, ProfitWell (agora Paddle), Baremetrics, e Recurly Analytics. Integram com Stripe, ou Chargebee, e geram cohort analysis automaticamente.

**Série C em diante.** BI tools (Looker, Tableau, PowerBI, Metabase, e Hex), com modelagem própria. Time de Data Analytics dedicado. Modelos financeiros em Anaplan, Pigment, Causal, Finmark, ou similares.

### VALIDADE E REAVALIAÇÃO

A cohort curve pode mudar com o tempo. Razões. Produto melhorou, ou piorou. ICP mudou (segmentos diferentes entraram). Mercado mudou (concorrência, ou macroeconomia). Preço mudou. Processo de CS mudou.

> [!warning] Modelo desatualizado
> O modelo precisa ser revisto trimestralmente. Com cohorts mais recentes atualizando as premissas. Cohort que ficou doze meses sem atualizar pode estar projetando curva de dois anos atrás, num mercado diferente.

### DEFINIÇÃO DE SUCESSO DO MODELO

Modelo de cohort é bom quando os sete itens estão em pé.

1. Projeta com erro menor que dez por cento, para seis meses à frente. Validar sempre que cohort real chega a seis meses. Comparar real versus previsto.
2. Segmentação revela padrões acionáveis. Não é cohort agregado único. É análise que gera decisão por segmento.
3. Três cenários construídos consistentemente. Base, up, e down, com premissas explícitas.
4. Atualizado trimestralmente, com novos dados reais.
5. Usado em decisões de board. Não só em pitch. Se o modelo só sai para VC em rodada, virou pitch deck. Se é a referência operacional, virou ferramenta.
6. CFO, e CEO, entendem as premissas. Não é modelo só da analista financeira. É modelo que liderança interroga, e usa.
7. Custo de erro de premissa testado. "Se NRR cai dez pontos percentuais, o runway cai três meses. Ação. Reduzir S&M em X". O modelo responde "e se".

### Armadilhas

Premissas chutadas. "NRR vai ser cento e quinze por cento em dois anos". Com base em quê? Sem lastro em histórico, é pensamento positivo. Não projeção.

Single cohort agregado. O cohort médio esconde tudo. Segmentar é essencial.

Ignorar seasonalidade. Cohort de dezembro pode comportar diferente de cohort de julho (sazonalidade de compra de SaaS, e inverno de consumo). Normalizar, ou segmentar, por mês de aquisição.

Não separar logos de receita. Cohort em logos. Quantos clientes ficaram. Cohort em receita. Quanto de MRR ficou. Ambos são relevantes, e podem divergir significativamente.

Tratar projeção como garantia. O modelo projeta. O real ajusta. Se o time acredita em projeção como certeza, não reage a sinais de desvio.

Não conectar com caixa. O modelo projeta receita, mas não caixa (cobrança anual versus mensal afeta caixa). Caixa real pode ser muito diferente de receita projetada.

Confundir crescimento com cohort saudável. Empresa com MRR crescendo pode ter cohorts piorando. Cresce porque adquire muito. Não porque retém bem. Se a aquisição parar, MRR despenca.

Linear no que não é linear. Cohort curves são tipicamente não-lineares (decaem rápido no começo, e estabilizam). Modelo linear projeta errado.

Modelo complexo demais, sem adicionar valor. Modelo com cinquenta abas, mil premissas, e linhas que ninguém entende. Funcionalidade é maior que sofisticação. Modelo que CEO pode olhar, e interrogar, é útil. Modelo ilegível não.

Não atualizar premissas. Cohort curve medida em 2022, aplicada a projeção de 2026. Mercado mudou. Produto mudou. Premissas desatualizadas.

Ignorar canibalização. Lançamento de tier Pro tira clientes de tier Basic. Sem modelar, a receita nova parece cem por cento incremental. Na verdade, é sessenta por cento. Modelo sem canibalização super-estima.

Não validar CAC atribuído a cohort. O modelo assume "CAC é X, aplicado ao cohort de janeiro". Mas o CAC real foi atribuído errado (marketing de janeiro gerou leads em março). Timing de CAC versus receita importa.

### Checklist

- [ ] Dados históricos de doze meses ou mais por cohort disponíveis
- [ ] MRR por mês por cohort ativo (matriz cohort versus mês)
- [ ] Cohorts segmentadas por canal, tier, vertical, e geografia
- [ ] Cohort curve em logos, e em receita, calculadas separadamente
- [ ] Padrão de cohort identificado (J, plateau, decay, ou J-invertida)
- [ ] Função, ou percentual médio, de retention extraída para projeção forward
- [ ] NRR por cohort calculado (não só agregado)
- [ ] LTV por cohort, com gross margin, e custos variáveis, incluídos
- [ ] CAC por cohort, e por canal, com atribuição correta de timing
- [ ] LTV dividido por CAC, por cohort, vigiado. Alerta se menor que três vezes
- [ ] CAC payback por cohort calculado
- [ ] Modelo projeta 24-36 meses forward, com cohorts novos, e existentes
- [ ] Três cenários (base, up, down) construídos, e documentados
- [ ] Runway calculado em cada cenário
- [ ] Gatilhos de ação por cenário documentados ("se X, faço Y")
- [ ] Validação out-of-sample aplicada (projetar cohort real, e comparar com previsto)
- [ ] Modelo atualizado trimestralmente, com cohorts atualizadas
- [ ] CFO, e CEO, interrogam o modelo regularmente (não é tabela esquecida)
- [ ] Análise de sensibilidade documentada (mudar NRR em cinco pontos percentuais. Quanto muda tudo)
- [ ] Canibalização modelada, se há múltiplos produtos, ou tiers
- [ ] Conectado a projeção de caixa (não só receita contábil)
- [ ] Premissas explícitas (não chutadas), com fonte, ou histórico, documentado

> [!tip] Referências úteis
> Christoph Janz (Point Nine) tem templates públicos excelentes. Jason Lemkin (SaaStr) para benchmarks setoriais. Livro "Hypergrowth", de David Skok, e blog For Entrepreneurs. Tom Tunguz (Theory Ventures) para análises quantitativas específicas. Pigment, e Finmark, para tools modernas de FP&A.

### Ver também

[[#APÊNDICE AN — MODELAGEM FINANCEIRA OPERACIONAL|Apêndice AN]], Modelagem financeira. [[#APÊNDICE CE — VALUATION METHODS: COMO INVESTIDORES CALCULAM E COMO VOCÊ CALCULA PARA NEGOCIAR|Apêndice CE]], Valuation methods. [[#APÊNDICE CB — SUBSCRIPTION ECONOMY EM PROFUNDIDADE: ALÉM DO "COBRA MENSALMENTE"|Apêndice CB]], Subscription economy.

---

---

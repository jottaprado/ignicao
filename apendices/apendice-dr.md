---
title: "APÊNDICE DR — DEMONSTRATIVOS FINANCEIROS PARA O FUNDADOR"
appendix: "DR"
---

## APÊNDICE DR — DEMONSTRATIVOS FINANCEIROS PARA O FUNDADOR

> [!note] Nota de validade
> As estruturas de DRE, Balanço, e DFC descritas aqui seguem as normas contábeis brasileiras (CPC/IFRS). Limites e alíquotas do Simples Nacional são revisados anualmente pela Receita Federal. Benchmarks de margem por segmento variam com o ciclo econômico. Este apêndice reflete o cenário de abril de 2026. Revisar anualmente com o contador responsável.

O [[apendice-an|Apêndice AN]] cobre como construir um modelo financeiro a partir de drivers (variáveis-chave) operacionais. O [[apendice-ec|Apêndice EC]] cobre como transformar esse modelo em orçamento aprovado pelo board (conselho). Este apêndice cobre o que acontece antes disso: a capacidade de ler o que já aconteceu. Demonstrações financeiras são o registro histórico da empresa. Fundador que não sabe ler esse registro governa no escuro.

### O que esse apêndice cobre

Três demonstrações que toda empresa produz, e como elas se conectam.

1. DRE — Demonstração do Resultado do Exercício. A fotografia do que a empresa ganhou e gastou em um período.
2. Balanço Patrimonial. A fotografia do que a empresa tem e deve em uma data específica.
3. DFC — Demonstração de Fluxo de Caixa. O filme de como o dinheiro entrou e saiu.

Mais: a diferença entre lucro e caixa, EBITDA (lucro antes de juros, impostos, depreciação e amortização), margens críticas, capital de giro, sinais de alerta, e como ler demonstrações de concorrentes abertos na B3.

### Por que o fundador precisa ler, não delegar

O contador produz as demonstrações. O fundador precisa interpretá-las.

Delegar a leitura ao contador cria três problemas. Primeiro, o contador responde perguntas feitas, não perguntas que o fundador não sabe que deveria fazer. Segundo, a interpretação estratégica dos números cabe a quem conhece o negócio. O contador conhece normas contábeis. Terceiro, em reunião de board (conselho) ou conversa com investidor, o fundador que não sabe explicar sua própria DRE perde credibilidade rapidamente.

Leitura de demonstrativos não é habilidade de CFO (Chief Financial Officer — diretor financeiro). É habilidade básica de fundador. O CFO a aprofunda. O fundador a usa.

> [!important] O número que o contador relata e o número que importa para decisão podem ser diferentes
> DRE fiscal é produzida para a Receita Federal. DRE gerencial é produzida para decisão interna. Em empresas no Simples Nacional, as duas divergem significativamente. Ver seção sobre contexto brasileiro ao final deste apêndice.

---

### Os três demonstrativos e como se conectam

#### DRE — Demonstração do Resultado do Exercício

A DRE responde à pergunta: a empresa foi lucrativa neste período?

```text
Receita Bruta
(-) Deduções de receita (impostos sobre vendas, devoluções, abatimentos)
= Receita Líquida
(-) CMV / CPV (Custo das Mercadorias Vendidas / Custo dos Produtos Vendidos)
= Lucro Bruto
(-) Despesas Operacionais
   (-) Despesas com Vendas (comissões, marketing, frete)
   (-) G&A — Geral e Administrativa (salários administrativos, aluguel, TI, jurídico)
   (-) P&D — Pesquisa e Desenvolvimento (engenharia de produto)
= EBITDA (Lucro antes de Juros, Impostos, Depreciação e Amortização)
(-) Depreciação e Amortização (D&A)
= EBIT (Lucro Operacional)
(+/-) Resultado Financeiro (juros pagos, juros recebidos, variação cambial)
= LAIR (Lucro Antes do Imposto de Renda)
(-) IR / CSLL
= Lucro Líquido
```

**O que cada linha diz.**

- **Receita Bruta** é o faturamento total antes de qualquer dedução. É o número que aparece na nota fiscal e no DAS do Simples.
- **Deduções** incluem PIS, COFINS, ISS ou ICMS dependendo da atividade. No Lucro Presumido ou Real, aparecem como linhas separadas. No Simples, estão embutidas no DAS e a DRE gerencial pode precisar de ajuste.
- **CMV/CPV** são os custos diretamente ligados ao que foi vendido. Para SaaS, inclui hospedagem, processamento de pagamentos, suporte de primeiro nível, e licenças de terceiros. Para varejo, é o custo do produto comprado para revenda.
- **Lucro Bruto e Margem Bruta** dizem quanto sobra depois dos custos diretos. É a primeira linha estratégica: se a margem bruta é negativa, o modelo de negócio está com problema estrutural.
- **EBITDA** é o resultado operacional antes de efeitos não-caixa (D&A) e financeiros. O indicador mais usado por investidores para comparar empresas entre si.
- **Resultado Financeiro** captura o custo da dívida e o rendimento do caixa. Empresa com muito endividamento vê EBIT bom virar LAIR ruim aqui.
- **Lucro Líquido** é o que sobra para os sócios após tudo. Pode ser distribuído como dividendos ou reinvestido.

#### Balanço Patrimonial

O Balanço responde à pergunta: o que a empresa tem e o que ela deve nesta data?

```text
ATIVO                              PASSIVO + PATRIMÔNIO LÍQUIDO
─────────────────────────────────  ─────────────────────────────────
Ativo Circulante                   Passivo Circulante
  Caixa e Equivalentes               Fornecedores
  Aplicações Financeiras             Salários e Encargos a Pagar
  Contas a Receber                   Impostos a Recolher
  Estoques                           Empréstimos de Curto Prazo
  Despesas Antecipadas               Receita Diferida
                                     Outras Obrigações CP

Ativo Não Circulante               Passivo Não Circulante
  Realizável a Longo Prazo           Empréstimos de Longo Prazo
  Investimentos                      Debêntures
  Imobilizado                        Provisões LP
  Intangível
  Ágio                            Patrimônio Líquido
                                     Capital Social
                                     Reservas de Capital (APIC)
                                     Lucros / Prejuízos Acumulados
                                     Ajustes de Avaliação
─────────────────────────────────  ─────────────────────────────────
Total do Ativo = Total do Passivo + PL (sempre igual)
```

**O que cada bloco diz sobre a saúde da empresa.**

- **Caixa e equivalentes**: dinheiro disponível imediatamente. Número bruto. Compare com o burn mensal para calcular runway.
- **Contas a receber**: receita faturada ainda não recebida. Se cresce mais rápido que a receita, clientes estão atrasando pagamentos ou os prazos se alongaram.
- **Estoques**: capital imobilizado em produto não vendido. Para software puro, costuma ser zero. Para hardware, marketplace com consignação, ou serviços com insumos, é relevante.
- **Imobilizado**: ativos físicos de longo prazo (equipamentos, mobiliário, veículos). Em startup de tecnologia, tende a ser pequeno. Cresce em empresas industriais.
- **Intangível**: software proprietário capitalizado, marcas, patentes, e contratos de clientes adquiridos em M&A. Atenção: goodwill (ágio em aquisições) pode inflar o balanço se a aquisição não performar.
- **Passivo Circulante**: o que vence em até doze meses. Se maior que o Ativo Circulante, a empresa pode ter problema de liquidez no curto prazo.
- **Receita Diferida**: dinheiro recebido de clientes por serviço ainda não prestado (ex: assinatura anual paga antecipadamente). É passivo porque a empresa ainda deve o serviço. Irrelevante na DRE do mês, mas importante no fluxo de caixa.
- **Patrimônio Líquido**: o que sobra para os sócios se todos os passivos forem pagos. Pode ser negativo em startups em fase de crescimento — não é necessariamente sinal de problema, mas exige monitoramento.

#### DFC — Demonstração de Fluxo de Caixa

A DFC responde à pergunta: como o dinheiro de fato entrou e saiu?

Há dois métodos de apresentação.

**Método Direto**: lista as entradas e saídas brutas de caixa (recebimentos de clientes, pagamentos a fornecedores, etc.). Mais intuitivo. Menos comum porque exige mapeamento detalhado de cada transação.

**Método Indireto**: começa pelo lucro líquido e ajusta pelos itens não-caixa e variações de capital de giro. Mais usado na prática porque deriva do DRE e do Balanço.

```text
ATIVIDADES OPERACIONAIS (método indireto)
  Lucro Líquido
  (+) Depreciação e Amortização (não-caixa)
  (+/-) Variação em Contas a Receber
  (+/-) Variação em Estoques
  (+/-) Variação em Contas a Pagar
  (+/-) Variação em Receita Diferida
  (+/-) Outras variações de capital de giro
= Caixa Gerado pelas Operações

ATIVIDADES DE INVESTIMENTO
  (-) Aquisição de Imobilizado (Capex)
  (-) Aquisição de Intangíveis
  (+) Venda de Ativos
  (-) Aquisições / M&A
= Caixa Líquido de Investimentos

ATIVIDADES DE FINANCIAMENTO
  (+) Captação de Equity (aporte de investidores)
  (+) Novos Empréstimos / Debêntures
  (-) Amortização de Dívidas
  (-) Distribuição de Dividendos
= Caixa Líquido de Financiamentos

Variação Total de Caixa = Op + Inv + Fin
Caixa Inicial + Variação = Caixa Final (deve bater com o Balanço)
```

**Por que o fluxo operacional é o número mais importante.**

Fluxo de caixa operacional positivo significa que o negócio gera dinheiro por conta própria, independente de captações ou venda de ativos. É o sinal mais claro de sustentabilidade.

Startups em crescimento tipicamente têm fluxo operacional negativo por anos — esse é o burn. O que importa é a trajetória: está melhorando trimestre a trimestre? O fluxo de financiamento (aportes de investidores) precisa cobrir o operacional até o breakeven.

Atividades de investimento negativas são sinal neutro ou positivo: a empresa está investindo em crescimento. Atividades de financiamento negativas em startup (amortização de dívida, dividendos) merecem atenção — está drenando caixa para fora.

---

### A diferença entre lucro e caixa

Esta é a confusão mais comum e mais cara que um fundador pode ter.

**Regime de competência** (base do DRE): receita é reconhecida quando o serviço é prestado ou o produto é entregue, independente de quando o dinheiro entra. Custo é reconhecido quando incorrido, independente de quando é pago.

**Regime de caixa** (base do DFC): registra apenas quando o dinheiro de fato entra ou sai.

> [!warning] Empresa lucrativa pode quebrar por falta de caixa
> Uma empresa B2B com prazo de recebimento de 90 dias reconhece receita em março mas recebe em junho. Se crescer rápido, a DRE mostra lucro, mas o caixa está sempre negativo. Sem funding para cobrir esse gap, a empresa fecha com balanço positivo.

**Exemplo prático.**

Uma empresa de software B2B fecha R$ 1 milhão em contratos anuais em janeiro, recebíveis em 60 dias. Ela incorre em R$ 600 mil de custos pagos mensalmente. A DRE de janeiro mostra receita de R$ 83 mil (1/12 do anual) e custo de R$ 50 mil — lucro de R$ 33 mil. O caixa de janeiro recebe zero (ainda dentro dos 60 dias) e paga R$ 50 mil — caixa negativo de R$ 50 mil.

A empresa é lucrativa. E pode não ter dinheiro para pagar a folha de fevereiro se não tiver reserva.

---

### EBITDA: o que é, por que importa, e por que não é suficiente

**Definição.** EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) é o resultado operacional excluindo efeitos de estrutura de capital (juros), tributários (impostos), e contábeis não-caixa (depreciação e amortização).

**Como calcular a partir da DRE.**

```text
EBITDA = Lucro Líquido + IR/CSLL + Resultado Financeiro + D&A

ou, de cima para baixo:
EBITDA = Receita Líquida - CMV/CPV - Despesas Operacionais (antes de D&A)
```

**Por que investidores usam.** EBITDA permite comparar empresas com estruturas de capital e regimes tributários diferentes. Uma empresa alavancada (muita dívida, muito juro) e uma empresa sem dívida podem ter EBITDA similar mesmo com lucros líquidos muito diferentes. Para valuation por múltiplos (EV/EBITDA), é a base mais comum.

**Por que EBITDA não é suficiente.**

EBITDA ignora três itens que custam dinheiro real:

1. **Capex**: investimento em ativo imobilizado e intangível. Uma empresa com EBITDA de R$ 10 milhões mas Capex de R$ 8 milhões gera R$ 2 milhões de caixa livre, não R$ 10 milhões.
2. **Variação de capital de giro**: crescimento rápido consome capital de giro. EBITDA não captura esse consumo.
3. **Impostos efetivos pagos**: o EBITDA exclui IR/CSLL. Mas eles são saídas reais de caixa.

**Free Cash Flow (FCF) = EBITDA - Capex - Impostos - Variação de Capital de Giro.**

FCF é o número que mede geração real de caixa. Para avaliação de sustentabilidade e eventual M&A ou IPO, FCF supera EBITDA como indicador de saúde.

> [!tip] Regra prática
> Em startups early-stage, EBITDA é o alvo de médio prazo (provar que o modelo é lucrativo na operação). FCF positivo é o alvo de longo prazo (provar que gera caixa sem depender de capital externo). Não confunda os dois.

---

### Margens críticas

**Margem Bruta** = Lucro Bruto / Receita Líquida × 100

Indica o quanto sobra depois dos custos diretos de entrega. É a primeira linha estratégica.

**Margem EBITDA** = EBITDA / Receita Líquida × 100

Indica eficiência operacional antes de efeitos financeiros e contábeis.

**Margem Líquida** = Lucro Líquido / Receita Líquida × 100

Indica o resultado final após todos os custos, impostos, e efeitos financeiros.

#### Benchmarks por segmento no Brasil (referência 2025-2026)

| Segmento | Margem Bruta | Margem EBITDA | Margem Líquida |
|---|---|---|---|
| SaaS B2B (maduro) | 70-80% | 20-35% | 15-25% |
| SaaS B2B (crescimento) | 60-75% | -20% a 0% | -30% a -10% |
| Marketplace (take rate) | 60-80% | 15-30% | 10-20% |
| E-commerce / Varejo Digital | 30-50% | 5-15% | 2-8% |
| Serviços Profissionais | 40-60% | 15-25% | 10-18% |
| Fintech (crédito) | 40-65% | 20-35% | 10-20% |
| Healthtech B2B | 55-70% | 10-25% | 8-18% |
| Hardware / IoT | 35-55% | 8-18% | 5-12% |

> [!warning] Benchmarks são referências, não metas automáticas
> Margem bruta de 75% para SaaS não significa que toda empresa SaaS deve ter 75%. Depende do custo de entrega, percentual de serviços profissionais na receita, e maturidade do produto. Use benchmarks para identificar desvio significativo, não para copiar.

**O que uma queda de margem bruta trimestre a trimestre sinaliza.**

- Custos de hospedagem crescendo mais rápido que receita (escala não gerenciada)
- Crescimento via contratos com alto componente de serviços (diluindo margem de software)
- Fornecedor repassando aumento sem contrapartida no preço
- Mix de produto mudando para SKUs de menor margem

Qualquer queda de mais de dois pontos percentuais por trimestre por dois trimestres consecutivos exige diagnóstico formal.

---

### Capital de giro e ciclo financeiro

Capital de giro é o dinheiro necessário para financiar o gap entre pagar fornecedores e receber de clientes. Quem não entende capital de giro confunde crescimento saudável com crise de caixa.

**Os três prazos.**

- **PMR — Prazo Médio de Recebimento**: quantos dias, em média, a empresa espera para receber de clientes após faturar.
- **PME — Prazo Médio de Estoque**: quantos dias, em média, o produto fica no estoque antes de ser vendido. Para software puro, é zero.
- **PMC — Prazo Médio de Pagamento**: quantos dias, em média, a empresa tem para pagar seus fornecedores.

**Ciclo Financeiro = PMR + PME - PMC**

Quanto maior o ciclo financeiro, mais capital de giro a empresa precisa para cada real de receita.

**Cálculo dos prazos.**

```text
PMR = (Contas a Receber / Receita Bruta) × 30 dias
PME = (Estoques / CMV) × 30 dias
PMC = (Fornecedores a Pagar / CMV) × 30 dias
```

**Exemplo prático.**

Uma empresa de software com serviços recorrentes e entregas mensais:

- Contas a receber: R$ 2 milhões
- Receita mensal: R$ 1 milhão → PMR = (2/1) × 30 = 60 dias
- Sem estoques → PME = 0
- Fornecedores a pagar: R$ 150 mil, CMV mensal: R$ 200 mil → PMC = (150/200) × 30 = 22 dias
- Ciclo Financeiro = 60 + 0 - 22 = 38 dias

Isso significa que a empresa financia 38 dias de operação com capital próprio. Se cresce R$ 100 mil/mês de receita, precisa de R$ 127 mil adicionais de capital de giro (38 dias × R$ 100 mil / 30).

> [!tip] Alavancas para reduzir o ciclo financeiro
> Cobrar antecipadamente (anuais pré-pagos reduzem PMR para zero em SaaS), negociar prazo maior com fornecedores (aumentar PMC), e reduzir estoques. Cada ação reduz a necessidade de capital de giro e melhora o fluxo operacional.

---

### Sinais de alerta nos demonstrativos

Oito padrões que merecem investigação imediata quando aparecem nos demonstrativos.

**1. Margem bruta caindo trimestre a trimestre.**

Causas prováveis: custo de entrega crescendo sem repasse de preço, mudança de mix de produto, ou contrato grande com condições comerciais ruins. Ação: mapear COGS por componente e por cliente.

**2. Contas a receber crescendo mais rápido que receita.**

Se receita cresceu 10% no trimestre e contas a receber cresceram 30%, o PMR está se alongando. Clientes estão pagando mais devagar ou a empresa está aceitando prazos maiores para fechar contratos. Ação: analisar aging de recebíveis e política de cobrança.

**3. Caixa operacional negativo com lucro positivo.**

O caso clássico da diferença entre lucro e caixa. Causas: aumento de contas a receber (crescimento rápido), aumento de estoques, ou redução de contas a pagar. Não é necessariamente emergência, mas requer diagnóstico.

**4. Passivo circulante maior que ativo circulante (liquidez corrente < 1).**

```text
Liquidez Corrente = Ativo Circulante / Passivo Circulante
```

Razão abaixo de 1 significa que a empresa não teria como pagar suas obrigações de curto prazo com seus ativos de curto prazo. Em startups financiadas com caixa em caixa (não em recebíveis), isso pode aparecer temporariamente e não ser grave. Em empresas sem reserva de caixa, é sinal de risco de insolvência.

**5. Dívida financeira crescendo sem EBITDA correspondente.**

Alavancagem medida por Dívida Líquida / EBITDA. Abaixo de 2x é confortável para a maioria dos setores. Acima de 4x começa a gerar tensão com credores. Se EBITDA não cresce mas dívida cresce, o múltiplo piora mesmo sem novo endividamento.

**6. Receita diferida caindo em empresa de assinaturas.**

Receita diferida (unearned revenue) em SaaS representa anuidades pagas antecipadamente. Se está caindo, ou a empresa parou de vender novos contratos anuais, ou os clientes estão migrando para mensal (sinal de menor comprometimento, risco de churn maior).

**7. D&A crescendo desproporcionalmente.**

Pode indicar que a empresa está capitalizando despesas que deveriam ser reconhecidas imediatamente (prática agressiva de reconhecimento), ou que fez aquisições com goodwill alto que está sendo amortizado.

**8. Resultado financeiro muito negativo.**

Custo da dívida consumindo o resultado operacional. Em ambiente de juros altos como o Brasil, empresa com CDI + 5% em dívida de R$ 10 milhões paga R$ 1,5 a 2 milhões por ano só em juros. Esse número precisa ser monitorado junto com o EBITDA.

---

### Como ler demonstrativos de concorrentes na B3

Toda empresa de capital aberto no Brasil é obrigada a publicar demonstrativos financeiros trimestralmente (ITR — Informações Trimestrais) e anuais (IAN / DFP — Demonstrações Financeiras Padronizadas).

**Como acessar.**

1. Acesse o site de Relações com Investidores (RI) da empresa, ou
2. Acesse o sistema EDES da CVM em `dados.cvm.gov.br`, ou
3. Use o portal da B3 em `b3.com.br → Empresas Listadas`.

**O que procurar como fundador.**

- **DRE**: evolução de receita líquida, COGS, e EBITDA por trimestre. Calcule as margens e veja a tendência.
- **Notas Explicativas da DRE**: detalhamento de receita por segmento, produto, ou geografia. Benchmarks reais de custo de entrega.
- **DFC operacional**: a empresa está gerando ou consumindo caixa na operação? Em que ritmo?
- **Balanço**: nível de endividamento (dívida bruta e líquida), contas a receber, e estrutura do patrimônio líquido.
- **Releases de Resultados (MD&A)**: o comentário da administração sobre os números. Linguagem estratégica que complementa os números contábeis.

> [!tip] Empresas comparáveis úteis para startups brasileiras
> Para SaaS e tech: TOTVS, Linx (agora Stone), Locaweb, Neogrid. Para fintech: PagSeguro, StoneCo, Inter, Nubank (NYSE). Para marketplace: Mercado Livre (NASDAQ), B2W/Americanas (com ressalva pós-fraude contábil), Enjoei. Use-os como benchmarks de margem e estrutura de custo, não como modelo de governança.

**Ressalva importante.** Empresas abertas têm demonstrativos auditados e atendem a IFRS pleno. Startups em Simples Nacional seguem normas simplificadas. A comparação de margens é válida como referência, mas ajuste pela diferença de regime tributário.

---

### Contexto brasileiro: DRE fiscal vs. DRE gerencial

Esta seção é específica para quem opera no Brasil, e é onde a maioria dos fundadores se perde.

**O problema do Simples Nacional.**

No Simples Nacional, os impostos sobre receita (PIS, COFINS, ISS/ICMS, IRPJ, CSLL, e contribuições previdenciárias) são recolhidos em uma guia única, o DAS, com alíquota calculada sobre a receita bruta. Isso significa que a DRE fiscal produzida pelo sistema contábil pode não separar esses componentes de forma útil para gestão.

**DRE fiscal vs. DRE gerencial.**

| Item | DRE Fiscal | DRE Gerencial |
|---|---|---|
| Objetivo | Atender Receita Federal e CVM | Apoiar decisão operacional |
| Tratamento do DAS (Simples) | Uma linha no total | Decomposto em tributos individuais |
| Regime | Competência (CPC) | Pode ser caixa ou competência |
| Frequência | Mensal / trimestral / anual | Semanal / mensal |
| Quem usa | Contador, fisco, auditoria | CEO, CFO, board |

**Como montar DRE gerencial no Simples.**

O contador entrega os números brutos. O fundador (ou o CFO) precisa adicionar uma camada de interpretação:

1. Calcular a alíquota efetiva do DAS sobre a receita bruta.
2. Separar os componentes do DAS (contribuições previdenciárias vão para folha, ISS/ICMS vão para deduções, IRPJ/CSLL vão para imposto de renda).
3. Recriar a DRE com essas linhas separadas para ver margem bruta real e EBITDA real.

Sem esse ajuste, a "margem bruta" calculada da DRE fiscal no Simples pode estar superestimada (porque os impostos sobre receita não aparecem no COGS) ou não comparável com empresas em outros regimes.

**DRE societária vs. DRE para gestão.**

A DRE societária segue CPC e é entregue formalmente. A DRE para gestão pode ter ajustes específicos da empresa: tratamento de stock options (IFRS 2), capitalização de software desenvolvido internamente, ou segregação de receita por linha de produto. As duas são válidas para seus fins. O fundador precisa saber qual está lendo.

---

### Glossário: termos que todo fundador confunde

| Termo | Definição objetiva | Erro comum |
|---|---|---|
| Receita Bruta vs. Receita Líquida | Bruta é antes das deduções fiscais. Líquida é depois. | Usar "faturamento" como sinônimo de receita líquida |
| EBITDA vs. Lucro Operacional | EBITDA exclui D&A. EBIT (lucro operacional) inclui D&A. | Usar os dois de forma intercambiável |
| Caixa vs. Lucro | Caixa é efetivo. Lucro é por competência. | Assumir que lucro = dinheiro no banco |
| Passivo Circulante vs. Exigível Total | Circulante vence em até 12 meses. Total inclui longo prazo. | Calcular endividamento só pelo circulante |
| Ativo Circulante vs. Caixa | Circulante inclui recebíveis e estoques. Caixa é só o disponível imediato. | Calcular runway com o total do ativo circulante |
| CMV vs. COGS | Mesma coisa: CMV é a nomenclatura brasileira, COGS é o acrônimo em inglês usado no Brasil tech. | Nenhum — apenas nomenclatura diferente |
| Margem Bruta vs. Markup | Margem bruta = (receita - custo) / receita. Markup = (preço - custo) / custo. Uma margem de 50% equivale a markup de 100%. | Usar os dois como se fossem iguais |
| D&A | Depreciação (ativos tangíveis) + Amortização (ativos intangíveis). Ambos são não-caixa, reduzem o EBIT, e são excluídos no EBITDA. | Incluir D&A no cálculo do EBITDA |
| Patrimônio Líquido vs. Valuation | PL é valor contábil histórico. Valuation é valor de mercado negociado. | Usar PL como proxy de valuation |
| Receita Diferida vs. Receita Reconhecida | Diferida é dinheiro recebido, serviço ainda não prestado (passivo). Reconhecida já passou pela DRE. | Contar a anualdade como receita toda no mês do recebimento |

---

### Ver também:

- [[apendice-an|Apêndice AN — Modelagem Financeira Operacional]]
- [[apendice-ec|Apêndice EC — Planejamento Financeiro e Orçamento]]
- [[apendice-en|Apêndice EN — Tributário Estratégico]]
- [[apendice-at|Apêndice AT — Gestão de Caixa]]

---
title: "APÊNDICE EZ — CAPITAL DE GIRO E RECEBÍVEIS"
appendix: "EZ"
---

## APÊNDICE EZ — CAPITAL DE GIRO E RECEBÍVEIS

Capital de giro (caixa necessário para sustentar a operação no curto prazo) é o assunto que mais mata startups que já provaram o modelo. Não falta receita. Não falta cliente. Não falta NPS. Falta caixa para pagar o time enquanto o dinheiro do cliente ainda não chegou. Esse fenômeno tem nome: descasamento de caixa. E ele é previsível, calculável e gerenciável — desde que o fundador entenda o mecanismo antes de cair no buraco.

Este apêndice cobre o ciclo de conversão de caixa, os instrumentos de financiamento de recebíveis (direitos a receber de clientes) disponíveis no Brasil, os custos reais de cada linha, a lógica do FIDC (Fundo de Investimento em Direitos Creditórios) para empresas com volume alto, os indicadores que devem estar no painel semanal de caixa, e a matriz de decisão entre dívida e equity para financiar operação.

---

### 1. Lucro contábil não é caixa — e startups lucrativas morrem por essa confusão

O DRE (Demonstração de Resultado do Exercício) mostra o resultado do período pelo regime de competência. A empresa reconhece a receita quando presta o serviço ou entrega o produto, não quando o dinheiro entra na conta. Essa convenção contábil é correta para fins de apuração de resultado. Mas ela pode esconder uma empresa destruindo caixa enquanto reporta lucro.

**Exemplo concreto.** Uma startup B2B vende contratos anuais de R$ 120 mil com pagamento parcelado em 12 boletos mensais de R$ 10 mil. O contrato é assinado em janeiro. O DRE de janeiro reconhece R$ 10 mil de receita (a competência do mês). Mas o fundador comemorou o contrato de R$ 120 mil como se esse dinheiro já existisse. Ele existe como receita futura, não como caixa presente.

Se a empresa contratou dois desenvolvedores para entregar esse cliente, pagou o salário em janeiro, e o segundo boleto só vence em fevereiro, ela pagou R$ 25 mil de custo antes de receber R$ 10 mil de receita. A margem contábil pode ser positiva. O caixa é negativo.

> [!warning] O erro de leitura mais perigoso
> Fundadores em fase de crescimento leem o DRE como referência primária de saúde financeira. O fluxo de caixa fica relegado ao contador. Essa inversão é a principal causa de crise de liquidez em startups com modelo de negócio validado. O DRE diz o que você ganhou. O fluxo de caixa diz o que você tem.

**Por que o crescimento piora o descasamento.** Em uma startup em expansão, mais vendas significam mais custos adiantados: mais time contratado, mais infraestrutura provisionada, mais custo de aquisição pago antes da receita recorrente se consolidar. Startups SaaS com expansão rápida costumam ter fluxo de caixa livre negativo por 12 a 24 meses mesmo com margens brutas de 70%. Isso não é anomalia — é a matemática do crescimento no regime de caixa. O problema é não saber o número, não o número em si.

**A distinção operacional.** Toda decisão de contratação, de expansão de time comercial, de abertura de canal novo deve ser avaliada pelo seu impacto no caixa no prazo de 30, 60 e 90 dias, não apenas pelo impacto no DRE do trimestre. A pergunta correta não é "essa contratação melhora minha margem?" mas "tenho caixa para bancar esse salário pelos próximos 4 meses enquanto a receita associada ainda não chegou?"

---

### 2. Ciclo de conversão de caixa — o número que todo fundador deveria saber de cor

O Ciclo de Conversão de Caixa (CCC) mede quantos dias, em média, o dinheiro fica preso no ciclo operacional da empresa antes de se tornar caixa disponível. A fórmula é:

```text
CCC = PMR + PME - PMC

PMR  Prazo Médio de Recebimento     = quantos dias o cliente demora para pagar
PME  Prazo Médio de Estoque         = quantos dias o produto fica parado (para SaaS: zero ou próximo)
PMC  Prazo Médio de Pagamento       = quantos dias a empresa demora para pagar fornecedores

CCC positivo  → empresa financia o giro com capital próprio ou dívida
CCC negativo  → negócio autofinancia o crescimento (model de supermercado)
```

**CCC negativo é o nirvana do capital de giro.** Supermercados, e-commerces grandes e aplicativos de delivery chegam a CCC de menos 10 a menos 30 dias: cobram do cliente no ato (PMR próximo de zero), pagam fornecedor em 30 dias (PMC alto), e giram estoque rápido. O crescimento gera caixa, não consome.

**Exemplo 1 — Startup SaaS B2B brasileiro.**

```text
Cenário: SaaS de gestão para clínicas, ticket R$ 800/mês, cobrança via boleto mensal

PMR  = 22 dias (cliente paga boleto com algum atraso, média entre vencimento e liquidação)
PME  = 0 dias (software, sem estoque físico)
PMC  = 30 dias (fornecedores de infraestrutura, SaaS de terceiros pagos no boleto)

CCC  = 22 + 0 - 30 = -8 dias

Interpretação: empresa recebe antes de pagar. CCC ligeiramente negativo.
Capital de giro necessário: baixo. O crescimento não drena caixa estruturalmente.
```

**Exemplo 2 — Marketplace de serviços com repasse ao prestador.**

```text
Cenário: marketplace de reforma e construção, ticket médio R$ 8.000,
         cliente paga via cartão parcelado em 3x, marketplace repassa ao prestador em D+2 após
         conclusão do serviço (média 45 dias após pagamento do cliente)

PMR  = 32 dias (cartão crédito: liquidação em D+30 para a adquirente, mais 2 dias de processamento)
PME  = 0 dias (sem estoque)
PMC  = 15 dias (prestadores são pagos 15 dias após conclusão, antes da liquidação do cartão)

CCC  = 32 + 0 - 15 = +17 dias

Interpretação: empresa precisa bancar o repasse ao prestador por 17 dias em média
               antes de receber da adquirente. Com R$ 5M/mês em GMV, isso representa
               aproximadamente R$ 2,8M de capital de giro imobilizado permanentemente.
```

> [!note] Impacto do parcelamento no PMR brasileiro
> O parcelamento no cartão de crédito é cultural no Brasil. A liquidação para o lojista de uma compra parcelada em 6x pode chegar a D+180 nos planos padrão de adquirência. Startups de e-commerce ou marketplace que não antecipam recebíveis têm PMR naturalmente alto — e precisam financiar esse gap estruturalmente.

**Como calcular o capital de giro necessário a partir do CCC.**

```text
Capital de giro mínimo = (Receita mensal / 30) × CCC

Exemplo: startup com R$ 2M/mês de receita e CCC de +20 dias
Capital de giro mínimo = (2.000.000 / 30) × 20 = R$ 1.333.333
```

Esse valor precisa existir como reserva permanente de caixa ou como linha de crédito disponível. Não é temporário: enquanto a empresa crescer com o mesmo CCC, a necessidade de capital de giro cresce proporcionalmente à receita.

---

### 3. Recebíveis como ativo financiável — antecipação no Brasil

Recebível é um direito futuro de receber dinheiro. Esse direito pode ser vendido (cedido) a um terceiro — banco, fintech, fundo — em troca de caixa imediato com deságio. Esse mecanismo se chama antecipação de recebíveis ou desconto de recebíveis.

**Modalidades disponíveis no Brasil em 2025-2026.**

```text
Tipo de recebível     Instrumento              Prazo típico   Quem opera
─────────────────────────────────────────────────────────────────────────
Cartão de crédito     Antecipação na           D+1 a D+2      Adquirente (Cielo,
                      adquirente ou banco                     Stone, PagSeguro)
                                                              ou banco da conta

Boleto bancário       Desconto de títulos      D+1            Banco comercial,
                      (borderô)                               fintech de crédito

Duplicata             Desconto de duplicata    D+1 a D+3      Banco comercial,
                      ou cessão fiduciária                    FIDC

NF + contrato         CCB (Cédula de           D+3 a D+5      Banco, fintech
(recebível futuro)    Crédito Bancário)                       especializada
```

**Custo real da antecipação.** O mercado cita taxas em percentual ao mês sobre o valor nominal do recebível. Em 2025, com Selic na faixa de 13% a 14% ao ano, as taxas típicas são:

```text
Modalidade                         Taxa mensal típica    Equivalente CDI + spread
──────────────────────────────────────────────────────────────────────────────────
Antecipação na adquirente          1,5% a 2,8% a.m.     CDI + 2% a 8% a.a.
Desconto de boleto (banco)         1,8% a 3,2% a.m.     CDI + 4% a 10% a.a.
Desconto de duplicata (banco)      1,6% a 2,5% a.m.     CDI + 3% a 7% a.a.
Fintech de antecipação             2,0% a 4,5% a.m.     CDI + 5% a 15% a.a.
```

> [!important] Comparar taxas pelo custo efetivo total
> Taxa ao mês não é o custo efetivo total (CET). Há IOF (0,38% fixo + 0,0082% ao dia), tarifas de operação, e eventual custo de cadastro. Sempre calcule o CET antes de comparar linhas. O IOF sozinho em uma antecipação de 30 dias soma aproximadamente 0,62% ao período — relevante quando se compara opções.

**Quando faz sentido antecipar.**

A antecipação faz sentido quando o custo da antecipação é menor do que o custo da alternativa — que pode ser capital parado, atraso em fornecedor, ou perda de oportunidade de crescimento.

```text
Regra prática: antecipe se o custo do recebível antecipado for menor do que:

  (a) o custo de capital da empresa (hurdle rate)
  (b) o desconto que você perderia por não pagar fornecedor no prazo
  (c) o custo de oportunidade de não executar uma campanha ou contratação
```

Antecipação sistemática como política de caixa — antecipar tudo sempre — tende a ser cara. A abordagem mais eficiente é manter um fluxo de caixa projetado com 13 semanas de horizonte e usar antecipação cirurgicamente quando o projetado mostra risco de insuficiência.

> [!tip] Antecipação como ferramenta, não como muleta
> Empresas que antecipam recebíveis de forma sistemática sem reduzir o CCC estrutural estão pagando para manter um problema operacional. A antecipação resolve o sintoma. Renegociar prazo de pagamento com fornecedores, cobrar mais rápido, ou migrar modelo de cobrança (anual à vista com desconto) ataca a causa.

---

### 4. FIDC — Fundo de Investimento em Direitos Creditórios

O FIDC é um veículo de securitização regulado pela CVM (Instrução CVM 356 e, a partir de 2023, Resolução CVM 175) que permite a uma empresa ceder sua carteira de recebíveis para um fundo, que por sua vez emite cotas vendidas a investidores. A empresa recebe caixa imediato; os investidores recebem rendimento quando os recebíveis são liquidados.

**Estrutura simplificada de um FIDC.**

```text
  ┌─────────────┐   cede recebíveis   ┌───────────────┐
  │  Empresa    │ ─────────────────── │  FIDC         │
  │  (cedente)  │ ◄── caixa imediato ─│  (fundo)      │
  └─────────────┘                     └───────┬───────┘
                                              │ emite cotas
                                    ┌─────────┴──────────┐
                                    │ Cota sênior         │ ← investidor externo
                                    │ (prioridade de      │   (menor risco, menor retorno)
                                    │  pagamento)         │
                                    ├─────────────────────┤
                                    │ Cota subordinada    │ ← geralmente a própria
                                    │ (absorve perdas     │   empresa cedente
                                    │  primeiro)          │   (maior risco, maior alinhamento)
                                    └─────────────────────┘
```

**Quando o FIDC faz sentido para startups.**

O FIDC tem custo fixo elevado de estruturação — gestor, custodiante, auditor, advogado, registro na CVM — que varia entre R$ 200 mil e R$ 600 mil no setup inicial, mais custos correntes de R$ 150 mil a R$ 350 mil por ano. Isso só faz sentido econômico quando o volume de recebíveis cedidos é alto o suficiente para diluir esses custos.

```text
Volume mínimo para FIDC ser competitivo: R$ 8M a R$ 15M/mês em recebíveis cedidos

Abaixo desse volume: antecipação bancária ou de adquirente é mais barata (apesar
da taxa unitária maior) porque não tem custo fixo de estrutura.

Acima de R$ 15M/mês: o FIDC costuma ter custo total menor que antecipação bancária
em 1,5 a 3 pontos percentuais ao ano, com maior previsibilidade de limite.
```

**Vantagens do FIDC para startups maduras.**

- Limite de crédito baseado no volume de recebíveis, não no balanço da empresa (off-balance para o cedente em estrutura apropriada).
- Taxa travada no momento da estrutura — proteção contra alta de Selic se o FIDC for emitido com spread fixo.
- Permite securitizar recebíveis de prazo mais longo (90, 120, 180 dias) com custo menor que desconto bancário convencional.
- Investidores do FIDC aceitam recebíveis com risco de crédito pulverizado (muitos devedores pequenos) que o banco convencional não aceita como garantia limpa.

**Desvantagens e riscos.**

- Tempo de estruturação: 3 a 6 meses do início até o primeiro desembolso.
- Exige governança: relatórios mensais de desempenho da carteira, covenants de inadimplência, e subordinação mínima (a empresa precisa manter cota subordinada como "skin in the game", geralmente 10% a 20% do patrimônio líquido do fundo).
- Covenants podem restringir outros instrumentos de crédito da empresa.
- Em caso de deterioração da carteira (inadimplência acima do gatilho), o fundo pode ser bloqueado e a empresa perde acesso ao caixa.

> [!warning] FIDC não é para todas as startups
> FIDC exige contabilidade organizada, carteira de recebíveis auditável, e histórico de inadimplência. Startup sem 12 a 18 meses de dados de recebíveis limpos provavelmente não passará no processo de estruturação. O gestor do fundo fará due diligence profunda da carteira antes de montar a estrutura.

---

### 5. Crédito de capital de giro no Brasil — linhas, garantias e custo real

O mercado brasileiro oferece diversas linhas de crédito para capital de giro. As características, garantias exigidas e custo variam significativamente. Conhecer cada opção evita pagar mais caro por ignorância ou recusar crédito barato por desconhecimento.

**Mapa das linhas disponíveis.**

```text
Linha                  Operador          Taxa típica (2025)    Garantia mínima
────────────────────────────────────────────────────────────────────────────────
Capital de giro        Banco privado     CDI + 4% a 12% a.a.  Recebíveis,
convencional           (Itaú, Bradesco,                        aval dos sócios,
                       Santander, C6)                          imóvel (às vezes)

Capital de giro        Fintechs de       CDI + 6% a 18% a.a.  Recebíveis,
(fintech)              crédito           (varia muito)         dados transacionais

Pronampe               Banco agente      Selic + 6% a.a.       Aval dos sócios
                       (Caixa, BB,       (lei 13.999/2020)     (+ FGO, quando ativo)
                       outros)           — teto regulado

BNDES Giro             Banco agente      TJLP + spread         Análise do agente
                       (repassador)      banco agente          (varia por porte)

FGI (Fundo de          Banco agente      Vinculado à linha     Garantia parcial do
Garantia para          c/ habilitação    principal             fundo (complementa
Investimentos)         BNDES             contratada            garantia própria)

Crédito com            Banco privado     CDI + 2% a 6% a.a.   Ativo imobilizado
garantia real          ou BDC            (mais barato pela     ou imóvel (alienação
                                         garantia)             fiduciária)
```

**Pronampe — detalhes importantes.**

O Pronampe (Programa Nacional de Apoio às Microempresas e Empresas de Pequeno Porte) é a linha mais acessível para startups com faturamento até R$ 4,8 milhões (MEI e ME) ou até R$ 78 milhões (EPP, com variações). Em períodos de ativação pelo governo federal, oferece:

- Limite: até 30% da receita bruta anual do último exercício fiscal.
- Prazo de pagamento: 48 meses com até 11 meses de carência.
- Taxa teto: Selic + 6% a.a. (em 2025, com Selic a 13,75%, o teto é aproximadamente 19,75% a.a. — ainda abaixo do capital de giro convencional de banco privado).
- Garantia: aval solidário dos sócios (FGO cobre parte do risco para o banco).

> [!note] Pronampe não está sempre disponível
> O Pronampe opera com dotação orçamentária do governo federal. Em anos de aperto fiscal, as cotas esgotam rapidamente após a abertura. Monitorar a abertura de novas rodadas e estar com o cadastro em dia no banco operador (imposto em dia, CNPJ ativo, Certidões negativas) é o que diferencia quem acessa quem não acessa.

**Garantias: o que os bancos pedem na prática.**

Startups sem histórico de crédito longo e sem imóvel em nome da empresa raramente conseguem capital de giro sem aval pessoal dos sócios. Esse é um risco real que os fundadores precisam entender antes de assinar: em inadimplência, o banco pode executar bens pessoais dos avalistas. Alternativas para reduzir o uso de garantia pessoal:

- Cessão fiduciária de recebíveis: o banco fica com o direito de receber os recebíveis cedidos se a empresa não pagar.
- FGI/FGO: fundos de garantia governamentais que cobrem parte da exposição do banco, reduzindo ou eliminando a necessidade de aval pessoal.
- Trava de recebíveis com adquirente: o banco trava os recebíveis de cartão diretamente na adquirente como garantia da operação.

**Custo efetivo total — como calcular.**

```text
CET = taxa de juros + IOF + tarifas + seguros obrigatórios

Exemplo: capital de giro de R$ 500.000 por 12 meses
  Taxa nominal:       CDI + 5% a.a. → ~19% a.a. em 2025
  IOF:                0,38% flat + 0,0082% ao dia × 365 = ~3,38% no período
  Tarifa de abertura: R$ 2.500 (0,5% sobre o capital)
  Seguro obrigatório: 0,3% a.a. sobre saldo devedor

  CET aproximado:     ~23% a.a.
  Custo total no período: R$ 115.000 em 12 meses sobre R$ 500.000
```

> [!tip] Negociar spread é possível
> Bancos comerciais têm margem para negociar spread, especialmente se a empresa mover conta movimento, folha de pagamento e investimentos para o banco credor. Apresentar fluxo de caixa projetado, DRE e balanço atualizado demonstra organização e tende a reduzir o spread cobrado por risco percebido de inadimplência.

---

### 6. Recebíveis em marketplace — chargeback, conciliação e float de repasse

Marketplace tem dinâmica de capital de giro própria porque o operador está no meio do fluxo financeiro: recebe do comprador, retém o float por algum período, e repassa ao vendedor. Cada dia de float é capital gerenciável — mas também responsabilidade operacional e regulatória.

**O float de repasse ao seller.**

```text
  Comprador paga      Adquirente liquida     Marketplace repassa
  no cartão           para o marketplace     para o seller
  D+0                 D+28 a D+32            D+2 após liquidação
  ────────────────────────────────────────────────────────────
                                             ← float de 30 dias →
```

Esse float, enquanto está nas contas do marketplace, gera rendimento se aplicado (CDI em fundo DI, por exemplo). Para marketplace com GMV de R$ 20M/mês, um float médio de 30 dias representa R$ 20M aplicados. Com CDI a 13,75% a.a., isso gera aproximadamente R$ 230 mil/mês de receita financeira — relevante para a P&L e para a estratégia de capital de giro.

**Chargeback e seu impacto no capital de giro.**

Chargeback ocorre quando o portador do cartão contesta a transação junto à emissora. A adquirente debita o valor do marketplace. O marketplace já pode ter repassado o valor ao seller. O resultado é uma perda que deve ser absorvida pelo operador (se o seller não tiver saldo retido suficiente) ou pelo próprio seller (se houver retenção de garantia).

```text
Impacto no capital de giro:

1. Chargeback não repassado ao seller → perda direta do marketplace
2. Chargeback com retenção insuficiente → marketplace adianta e cobra depois
3. Chargeback com reserve account adequado → marketplace neutro

Taxa de chargeback saudável: < 0,5% do GMV (acima de 1% gera risco de descredenciamento)
Reserve account típica para sellers novos: 5% a 10% do GMV retido por 90 a 180 dias
```

**Conciliação de cartão como processo crítico.**

A conciliação financeira de um marketplace envolve cruzar três fluxos distintos: o fluxo do comprador (o que foi cobrado), o fluxo da adquirente (o que foi liquidado, com ou sem chargeback), e o fluxo do seller (o que foi repassado). Cada discrepância entre esses fluxos é dinheiro não rastreado — que pode ser perda, erro operacional, ou fraude.

> [!warning] Conciliação manual é armadilha de escala
> Marketplace que concilia recebíveis em planilha suporta até certo volume. A partir de R$ 3M a R$ 5M em GMV mensal, a taxa de erro manual começa a gerar perdas maiores que o custo de uma solução automatizada. Ferramentas como Celcoin, Conta Simples, ou soluções próprias de ERP financeiro se pagam rapidamente nesse ponto.

**Float e regulação de pagamentos.**

O Banco Central, via Resolução BCB 80/2021 e atualizações do marco regulatório de pagamentos, define regras de segregação de conteúdo de clientes para Instituições de Pagamento. Marketplace que opera contas de sellers e retém float por mais de 1 dia útil pode precisar de autorização como IP (Instituição de Pagamento) ou operar via parceiro autorizado. Esse risco regulatório tem impacto direto na estrutura de capital de giro do operador.

---

### 7. Indicadores de alerta de caixa — o painel que não pode faltar

O fundador que olha o extrato bancário para saber se a empresa tem caixa já chegou tarde. O painel de caixa deve ser prospectivo, não histórico. Os indicadores abaixo formam o conjunto mínimo para gestão de liquidez operacional.

**DSO — Days Sales Outstanding (Prazo Médio de Recebimento).**

```text
DSO = (Contas a receber / Receita do período) × número de dias do período

Exemplo:
  Contas a receber em aberto: R$ 480.000
  Receita dos últimos 30 dias: R$ 720.000
  DSO = (480.000 / 720.000) × 30 = 20 dias

Interpretação: clientes estão pagando, em média, 20 dias após o faturamento.
DSO crescendo sem aumento de vendas = deterioração de cobrança ou aumento de inadimplência.
```

**DPO — Days Payable Outstanding (Prazo Médio de Pagamento a Fornecedores).**

```text
DPO = (Contas a pagar / Custo das mercadorias/serviços) × número de dias

DPO alto = empresa demora para pagar = benefício temporário de caixa
DPO baixo = empresa paga rápido = possível perda de float, mas pode gerar desconto
```

**O fluxo de caixa semanal de 13 semanas.**

O instrumento mais eficaz de gestão de liquidez para startup em crescimento é o fluxo de caixa projetado para 13 semanas (90 dias) com granularidade semanal. Esse horizonte captura o ciclo operacional completo e permite ação antecipada antes que o caixa fique crítico.

```text
Estrutura mínima do fluxo semanal de 13 semanas:

  Semana        S1      S2      S3      S4     ...    S13
  ─────────────────────────────────────────────────────────
  Saldo inicial
  + Recebimentos previstos
    - Recebíveis vencendo (boletos, contratos)
    - Antecipações contratadas
    - Outras entradas
  - Desembolsos previstos
    - Folha e encargos
    - Fornecedores (datas de vencimento reais)
    - Tributos (calendário fiscal)
    - Outras saídas
  = Saldo final da semana
  = Saldo mínimo aceitável (linha de alerta)
  = Gap de caixa (negativo = ação necessária)
```

> [!important] O saldo mínimo aceitável é uma decisão de política
> Definir o piso de caixa antes da crise (ex.: 45 dias de despesas fixas) cria um gatilho automático de ação: quando o projetado cruza esse piso em qualquer semana do horizonte de 13, a equipe sabe que precisa tomar decisão (antecipar recebíveis, acionar linha de crédito, reduzir despesas discricionárias) naquela semana, não no dia em que o caixa zerar.

**Outros indicadores de alerta.**

```text
Indicador                      Sinal de alerta
──────────────────────────────────────────────────────────────────────────
DSO crescendo > 20% em 60 dias  Inadimplência aumentando ou cobrança fraca
Contas a pagar > contas a       Empresa financiando fornecedor com mais
receber (sem sazonalidade)       rapidez do que recebe de clientes
Queima mensal > 15% do saldo    Runway < 7 meses — janela de captação estreita
de caixa atual
Uso de limite de crédito        Empresa operando com liquidez de emergência,
rotativo > 60%                  não planejada
Churn de receita > 5% a.m.      Receita futura projetada superestimada;
(SaaS)                          rever projeção de recebíveis
```

---

### 8. Dívida ou equity para financiar capital de giro — matriz de decisão

A pergunta aparece em todo ciclo de crescimento: levantar rodada (equity) para ter mais caixa de giro, ou estruturar dívida? A resposta certa depende da combinação de quatro variáveis: custo, dilução, velocidade, e risco de descasamento.

**Princípio fundamental.** Capital de giro é necessidade operacional recorrente, não investimento pontual. Financiar necessidade recorrente com equity é caro (dilução permanente para resolver problema temporário). Financiar com dívida é mais barato quando a empresa tem receita previsível suficiente para servir a dívida.

```text
MATRIZ DE DECISÃO: DÍVIDA vs. EQUITY para capital de giro

                        RECEITA PREVISÍVEL?
                        Sim                     Não
                  ┌─────────────────────┬──────────────────────┐
CUSTO DA DÍVIDA   │ Dívida é a escolha  │ Equity ou redução    │
< Custo do equity │ correta. Preserve   │ de burn. Dívida sem  │
(dilução ajustada)│ o equity para capex │ receita é roleta.    │
                  │ ou crescimento não  │                      │
                  │ orgânico.           │                      │
                  ├─────────────────────┼──────────────────────┤
CUSTO DA DÍVIDA   │ Avaliar caso a caso:│ Equity obrigatório   │
> Custo do equity │ taxa muito alta =   │ se a empresa ainda   │
(ex.: empresa em  │ dívida destrói      │ for de alto risco    │
escala rápida com │ valor. Equity pode  │ e não tiver          │
múltiplo alto)    │ ser mais barato     │ acesso a dívida      │
                  │ pelo múltiplo atual.│ razoável.            │
                  └─────────────────────┴──────────────────────┘
```

**Critérios objetivos para escolher dívida.**

- A empresa tem 12+ meses de receita recorrente com churn mensal abaixo de 3%.
- O serviço da dívida (juros + amortização) representa menos de 15% da receita mensal.
- O CCC é positivo e mensurável, e a dívida financia especificamente esse gap.
- Existe garantia ou recebível para lastrear a operação (reduz taxa significativamente).
- A empresa não está em captação de rodada de equity nos próximos 6 meses (dívida não fecha rodada — ao contrário, pode complementar).

**Critérios objetivos para escolher equity.**

- A empresa está em pré-receita ou receita muito cedo (< 6 meses de dados).
- O capital será usado para investimento em produto ou time — não apenas giro.
- O crescimento esperado justifica o múltiplo: pagar 20% de dilução para crescer 5x em 18 meses é matematicamente favorável.
- A dívida disponível tem taxa acima de 24% a.a. (capital de giro de banco privado sem garantia para empresa jovem): nesse ponto, a dilução pode ser mais barata que o juro.

> [!tip] Venture Debt como híbrido
> Para startups que já levantaram rodada seed ou Série A, o Venture Debt (dívida com warrant opcional) é uma alternativa que combina acesso a capital com dilução mínima. Operadores no Brasil incluem fintechs especializadas e fundos de crédito para tecnologia. Ticket típico: R$ 2M a R$ 20M, prazo 24 a 48 meses, taxa CDI + 5% a 10% a.a. mais warrant de 1% a 5% do cap table. Faz sentido entre rodadas, quando equity está caro e a empresa tem métricas para mostrar.

**O erro mais comum: levantar equity caro para cobrir gap de caixa barato.**

Startup que levanta R$ 5M de Série A e usa R$ 2M apenas para cobrir necessidade permanente de capital de giro (que poderia ser financiada com FIDC ou linha de crédito a CDI + 5%) diluiu os sócios desnecessariamente. Essa decisão parece conservadora mas é financeiramente ineficiente. A regra prática: use a forma de capital mais barata para cada finalidade. Dívida para operação recorrente. Equity para apostas de crescimento que dívida não financia.

---

### Síntese operacional

```text
QUANDO AGIR EM CADA FRENTE DE CAPITAL DE GIRO

Situação                         Ação prioritária
────────────────────────────────────────────────────────────────────────
CCC > 30 dias e crescendo        Renegociar PMC com fornecedores;
                                 avaliar cobrança antecipada (plano anual)

Gap de caixa nos próximos 30 d   Antecipar recebíveis imediatamente;
                                 acionar linha de crédito rotativo

Volume de recebíveis > R$10M/mês Iniciar estruturação de FIDC
                                 (prazo: 3 a 6 meses)

Chargeback > 0,8% do GMV         Revisar política de antifraude e
(marketplace)                    reserve account de sellers

DSO crescendo > 25% sem          Auditar cobrança: boletos sendo
crescimento de vendas            enviados? Régua de cobrança ativa?

Rodada de equity planejada        Não use a rodada para cobrir giro
em 6 meses                       recorrente — estruture dívida agora
                                 e preserve equity para crescimento
```

> [!note] Capital de giro é gestão, não crise
> O fundador que só pensa em capital de giro quando está sem caixa já perdeu o melhor momento de agir. As decisões de estrutura — FIDC, linhas de crédito, política de antecipação, prazo de repasse ao seller — devem ser tomadas com 3 a 6 meses de antecedência. A empresa que estrutura essas linhas antes de precisar delas consegue taxas menores, condições melhores, e não negocia sob pressão.

---

**Ver também:**

- [[apendice-ea|Apêndice EA — Modelagem Financeira para Startups]] para construção do fluxo de caixa projetado e premissas de crescimento
- [[apendice-eb|Apêndice EB — Unit Economics e Margem de Contribuição]] para calcular o break-even por unidade antes de projetar necessidade de giro
- [[apendice-ec|Apêndice EC — Rodadas de Captação e Term Sheet]] para entender quando equity faz sentido e como negociar termos
- [[apendice-ck|Apêndice CK — Métricas de SaaS]] para DSO, churn e demais indicadores aplicados ao modelo recorrente
- [[fases/fase-11|Fase 11 — Modelo de Negócio e Monetização]] onde a estrutura de cobrança e ciclo financeiro são definidos pela primeira vez
- [[fases/fase-14|Fase 14 — Escala Operacional]] onde a gestão de capital de giro se torna crítica com o crescimento do volume

---
title: "APÊNDICE BY — TESOURARIA EM ESCALA: GESTÃO DE CAIXA MULTI-MOEDA, MULTI-PAÍS E MULTI-CONTA"
appendix: "BY"
---

## APÊNDICE BY — TESOURARIA EM ESCALA: GESTÃO DE CAIXA MULTI-MOEDA, MULTI-PAÍS E MULTI-CONTA

> [!warning] Validade
> Esse apêndice reflete taxas, produtos e práticas típicas de tesouraria corporativa para startups brasileiras em 2025 e 2026. Taxas (CDI, SOFR), instrumentos disponíveis, regulamentação cambial BCB e condições bancárias evoluem. Revisar anualmente. Para aprofundamento, materiais da Association for Financial Professionals (AFP) sobre corporate treasury. Tesouraria Corporativa e Administração Financeira (Fernando Motta Fortuna) para contexto brasileiro. CFA Institute, seção de corporate finance, para frameworks conceituais.

### O que é

Tesouraria em escala é a função financeira que gerencia caixa, liquidez, moedas e contas bancárias de uma empresa que deixou de ter "uma conta no Itaú e outra no Bradesco" e passou a ter dezenas de contas, em múltiplas moedas, em vários países, com necessidades de pagamento diárias que somam centenas de milhões de reais por mês. É diferente de finanças corporativas (que planeja) e de FP&A (que analisa resultado). Tesouraria executa: move dinheiro, garante liquidez, protege caixa, otimiza rendimento do ocioso, paga fornecedores e salários, recebe de clientes, faz hedge, gerencia relacionamento bancário.

Para startups, tesouraria vira função dedicada quando três condições se acumulam. Caixa relevante (mais de cinquenta milhões de reais ou equivalente em dólar). Operação multi-moeda ou multi-país. E volume de pagamentos que não cabe mais em processo manual. Antes disso, CFO ou controller acumula a função. Depois disso, sem tesoureiro dedicado, a empresa perde dinheiro de quatro formas. Em FX mal executado. Em conta errada. Em liquidez insuficiente forçando venda de ativo em má hora. E em fraude operacional por falta de controle.

### Por que importa

Tesouraria mal executada é sangria silenciosa. Nenhum resultado trimestral explode por isso, mas meio ponto percentual de spread cambial mal negociado em vinte milhões de dólares de pagamento mensal são cem mil dólares por mês, um milhão e duzentos mil dólares por ano, equivalente a dois engenheiros sêniores. Caixa em conta corrente rendendo zero quando poderia render CDI são milhões por ano jogados fora. Conta em moeda errada forçando conversão em spot urgente paga spread de dois a três por cento em operação que poderia ter custado meio por cento. Operação multi-país sem visibilidade consolidada de caixa implica em captar dívida no Brasil enquanto sobra caixa na subsidiária mexicana, ou seja, capital que você paga juro sem precisar.

No Brasil, tesouraria tem camada adicional. IOF, retenção na fonte, remessa BCB, registro de operação cambial, limite de saída de dólar sem burocracia adicional. Empresa que cresce multi-país e não estrutura tesouraria desde cedo vira refém de banco, paga o que banco cobra, aceita condições que banco oferece, perde controle sobre o próprio caixa.

> [!important] Runway extra via tesouraria
> Para startups com caixa de rodada de Série B (tipicamente trinta a cem milhões de dólares), tesouraria é diferença entre runway extra de três a seis meses só por gestão melhor e mesmo montante captado mal gerido. É diferença material entre empresas que sobrevivem ao inverno e empresas que não sobrevivem.

### Quando estruturar

Há cinco fases de maturação da função.

Na primeira, "CFO faz" (pré-Série A, até dez ou vinte milhões de reais em caixa), a estrutura é simples: uma conta PJ por empresa (Itaú, Bradesco, BTG, C6, Inter), aplicação automática em CDB ou fundo DI rendendo ao redor de CDI, controller ou CFO executando pagamentos manualmente ou via Omie, ContaAzul. Tesouraria como função não existe.

Na segunda, "Controller dedicado a caixa" (Série A e B, vinte a cem milhões de reais em caixa), há duas a cinco contas PJ (operacional, aplicação, folha, offshore se houver operação). CDB DI, LFT, fundo de renda fixa. Reconciliação diária. Planejamento de caixa semanal. Controller sênior acumula a função com CFO supervisionando. Possivelmente já há exposição cambial e precisa-se de NDF ocasional (tratado no [[#APÊNDICE BT — HEDGING CAMBIAL E GESTÃO DE MOEDA MULTICOUNTRY|Apêndice BT]]).

Na terceira, "Tesoureiro dedicado" (Série B, cem a quinhentos milhões de reais em caixa, multi-país), entra tesoureiro com dez a quinze anos de experiência (normalmente vindo de corporate treasury de multinacional ou de banco, mesa de tesouraria). Dez a trinta contas, três a oito moedas, cinco a quinze bancos. TMS (Treasury Management System), Kyriba, Reval, GTreasury, ou solução customizada. Gestão ativa de caixa, política de investimento escrita, relacionamento com mesa institucional.

Na quarta, "Treasury department" (Série D, mais de duzentos milhões de dólares em caixa, operação internacional consolidada), há equipe de três a seis pessoas. Tesoureiro mais dois ou três analistas mais coordenador de relacionamento bancário. Política de tesouraria formal aprovada por board. Comitê de tesouraria mensal. Política de hedge, investment policy statement, controle de contrapartes, relatório de exposure semanal. Tesoureiro reporta ao CFO mas tem linha pontilhada para CEO em decisões materiais.

### Quem faz

O tesoureiro (treasurer) é função que deveria ser sênior dentro da empresa, não analista. Reporta ao CFO. Perfil: CFA, formação em finanças ou economia, dez ou mais anos de experiência (sendo pelo menos cinco em tesouraria de verdade, em corporate, banking ou fundo), fluência em inglês (lida com bancos internacionais e contrapartes em FX), noção de sistemas (TMS, integração bancária), maturidade para dizer não a fornecedor que quer antecipar pagamento fora do prazo aprovado.

O analista de tesouraria tem perfil júnior ou pleno. Executa operações, concilia contas, monitora saldos, prepara reports. Reporta ao tesoureiro. Pode crescer para tesoureiro em cinco a oito anos.

O coordenador de relacionamento bancário, em empresas grandes, é pessoa dedicada a gerir relacionamento com dez a quinze bancos. Negocia taxas, linhas de crédito, tarifas, serviços. Muitas vezes acumulado com o tesoureiro ou o CFO em fases intermediárias.

O CFO supervisiona, aprova política, aprova contrapartes, aprova investimentos acima de threshold. Não executa. O board aprova política de tesouraria (investment policy statement, política de hedge) e recebe report trimestral.

### Como estruturar

#### Arquitetura de contas

O princípio é uma conta por função, não "uma conta que serve para tudo". Modelo típico de startup Série C com operação em Brasil, EUA e México fica assim. No Brasil (entidade R$), conta operacional para pagamentos de fornecedores, conta de folha (separada por compliance e controle), conta de recebimento (clientes pagam aqui, varre para operacional ou aplicação), conta de aplicação (CDB, fundo DI), conta de reserva estratégica (só movimenta com aprovação CFO mais CEO). Nos EUA (entidade USD), conta operacional (SVB, Mercury, Brex, JP Morgan), conta de aplicação (Treasury bills, money market fund), conta de recebimento em outra moeda se cliente paga em MXN ou GBP. No México (entidade MXN), conta operacional local, conta em dólar se recebe ou paga em dólar. E se houver holding offshore (Cayman ou Delaware), conta em dólar.

Isso parece excesso. Não é. Conta dedicada a folha protege empresa de fraude (nenhum outro pagamento sai dessa conta). Conta de recebimento separada facilita reconciliação automática. Conta de aplicação separada evita que caixa de trabalho seja sacado acidentalmente de aplicação.

#### Visibilidade consolidada (cash position)

TMS ou planilha viva que mostra, por dia: saldo por conta por moeda, saldo consolidado em moeda base (normalmente USD ou BRL, dependendo da empresa), fluxo esperado dos próximos trinta a noventa dias (contas a pagar e a receber), posição líquida de caixa (depois de obrigações), exposição cambial líquida.

Empresas Série B normalmente fazem isso em planilha atualizada diariamente. Série C migra para TMS. Planilha funciona mas é frágil: depende de uma pessoa atualizar, propensa a erro humano, sem trilha de auditoria.

#### Política de investimento (Investment Policy Statement, IPS)

Documento aprovado por board que define o objetivo da tesouraria (tipicamente preservação de capital, depois liquidez, depois rendimento, nessa ordem); os instrumentos permitidos (CDB DI de banco com rating mínimo X, LFT, fundo DI, Treasury bills até doze meses, money market fund com rating AAA); os instrumentos proibidos (ações, crypto, derivativo especulativo, fundo multimercado alavancado); concentração máxima por contraparte (vinte por cento do caixa total em único banco, dez por cento em único fundo, por exemplo); duration máxima (noventa dias no Brasil, doze meses nos EUA, por exemplo); e a política de hedge (quando hedgiar, percentual, instrumentos).

> [!tip] IPS é proteção pessoal
> IPS formal protege CFO e CEO de board depois. Decisão seguiu IPS aprovado. Sem IPS, toda perda vira questionamento pessoal.

#### Política de pagamentos (Treasury Operations Manual)

Define quem aprova o que (matriz de alçada: até cinquenta mil reais, controller; até quinhentos mil, CFO; até cinco milhões, CEO; até vinte milhões, board). Define o processo de pagamento (PO, fatura, aprovação, agendamento, liberação). Estabelece segregação de funções (quem aprova nunca executa). Define dupla assinatura acima de threshold. Exige fornecedor cadastrado antes de pagamento, com prazo mínimo de quarenta e oito horas entre cadastro e primeiro pagamento, o que reduz fraude por engenharia social. E exige conferência de dados bancários por canal alternativo, ou seja, não aceitar mudança de conta bancária só por email.

#### Relacionamento bancário

O princípio é mínimo de três bancos, máximo de sete. Três para redundância e competição. Sete como teto, porque cada relacionamento tem custo.

No Brasil, mix típico: um grande (Itaú ou Bradesco) para operação tradicional, um digital (BTG, Inter, C6) para tarifa baixa e API, um internacional (Santander ou substituto do HSBC) para operação em moeda. Em dólar, mix típico: um grande americano (JP Morgan, Citi, BofA) para treasury, um especialista em startup (Mercury, Brex, ou pós-SVB First Citizens, ou Stripe Treasury) para operação ágil, um private banking se o caixa pessoal do fundador também está envolvido.

O tratamento bancário escalona com a empresa. Série A tem atendimento via gerente de PJ. Série B consegue middle market. Série C consegue corporate. Série D tem mesa institucional dedicada. Em cada nível, taxas caem e serviços crescem.

#### Pricing de operações

Tudo é negociável. A lista do que negociar inclui taxas de câmbio (spread sobre PTAX em operações acima de cem mil dólares); tarifas de TED, DOC, PIX (muitas vezes zero em alto volume); tarifas de manutenção de conta (zero em contas PJ de alto saldo); spread em aplicação (CDB DI a cento e dois por cento contra noventa e oito por cento, em cem milhões de reais é quatro milhões por ano de diferença); linhas de crédito (mesmo sem usar, linha pré-aprovada barata é seguro); tarifas de cobrança e boletagem (relevante em empresa com muitos recebimentos); comissões de derivativos (NDF, swap).

Tesoureiro bom renegocia bancário pelo menos anualmente. O benchmark é consultoria de tesouraria (A2 Banking, Tesouro Direto Consultoria, Tesouraria Empresarial) ou ex-colega em outra empresa, comparando condições.

#### Gestão de liquidez

Há três níveis. Liquidez operacional (zero a trinta dias) cobre folha, aluguel, fornecedores essenciais. Mantém em conta corrente ou CDB DI de liquidez diária. Tipicamente um a dois meses de queima. Liquidez tática (trinta a cento e oitenta dias) cobre operação planejada, pagamentos grandes previstos (imposto trimestral, bônus anual). CDB com carência de trinta a noventa dias, LFT curta. Reserva estratégica (cento e oitenta dias ou mais) é caixa de reserva para investimento, aquisição, inverno. LFT longa, Treasury bills, aplicação com rendimento maior aceitando menos liquidez.

> [!warning] Erros típicos em liquidez
> Deixar tudo em conta corrente por "precaução" é precaução cara: em cem milhões de reais, rendimento perdido é doze a quinze milhões por ano. Mas deixar tudo em aplicação de liquidez diária "por se acaso" também é caro. A diferença entre CDB DI 103% (liquidez diária) e CDB 109% (trinta dias de carência) é seis por cento ao ano. Em cem milhões de reais, são seis milhões por ano. Segmentação por liquidez requer planejamento de caixa real, e ele existe em toda empresa com tesoureiro competente.

Cash pooling multi-país é a oitava camada. Empresa com operação em Brasil, México e Estados Unidos tem caixa distribuído, e existem três caminhos. O primeiro é não ter pool nenhum. Cada entidade gere o próprio caixa, simples mas ineficiente, porque uma entidade pode estar sobrando enquanto outra capta dívida cara para tampar buraco. O segundo é o pool físico, em que o caixa é efetivamente concentrado numa entidade (em geral a holding) e repassado via empréstimo intercompany ou capital. Funciona, mas exige documentação fiscal séria (transfer pricing, tratado em [[#APÊNDICE BT — HEDGING CAMBIAL E GESTÃO DE MOEDA MULTICOUNTRY|Apêndice BT]]) e tem custo de remessa. O terceiro é o pool virtual, ou notional pooling, em que o banco agrupa saldos virtualmente para fins de cálculo de rendimento e custo, sem movimentar dinheiro. É mais comum na Europa, está disponível com JP Morgan, Citi e HSBC, e no Brasil é limitado pela regulação cambial.

A decisão depende de escala, estrutura societária e tolerância a complexidade. Abaixo de cem milhões de dólares em caixa total, normalmente não compensa montar pool. O custo operacional supera o ganho.

A nona camada é risco de contraparte, e ela merece atenção redobrada. Depois do colapso do SVB em março de 2023, ficou claro que "banco é seguro" é premissa frágil. A gestão prática passa por distribuir caixa entre bancos (máximo de trinta a quarenta por cento em um único banco), monitorar rating (Moody's, S&P, Fitch) dos bancos com exposição relevante, e entender as garantias reais. FDIC nos Estados Unidos cobre até duzentos e cinquenta mil dólares. FGC no Brasil cobre até duzentos e cinquenta mil reais por CPF ou CNPJ, irrelevante em empresa com cem milhões em caixa. Em operação de derivativo (NDF, swap), ISDA Master Agreement com cláusulas de collateral é o piso, e em volume grande o CSA (Credit Support Annex) exige garantia quando a exposição passa de um threshold definido.

> [!warning] Lição do SVB
> Empresas brasileiras que tinham exposição em SVB em março de 2023 e sobreviveram fizeram três coisas. Diversificavam entre bancos antes da crise. Atuaram nas primeiras quarenta e oito horas movendo fundos. Tinham garantia FDIC ou linha de crédito alternativa pré-aprovada. Quem dependia de um banco só para caixa, folha e linha de crédito teve dia ruim. Quem dependia de um banco só e estava acima dos duzentos e cinquenta mil de FDIC teve semana ruim.

A décima camada é a rotina diária. Um tesoureiro competente trabalha com cadência clara. Pela manhã cedo, entre oito e nove, faz a posição de caixa consolidada do dia anterior, checa pagamentos executados, valida recebimentos. Entre nove e onze, executa pagamentos do dia, operações de câmbio se houver, aplicações e resgates. No meio-dia, review com o CFO se aparecer item material. À tarde, planejamento da semana, reconciliação bancária, revisão de contas a pagar, projeção de caixa atualizada. Toda sexta, report de tesouraria para o CFO com caixa total, exposição cambial, investimentos e próximas necessidades. Mensalmente, report para CEO e board, renegociação bancária se houver, análise de performance da tesouraria (yield contra benchmark).

### Métricas que tesouraria acompanha

Caixa disponível total, em dólar, em real e na soma consolidada. Runway, ou seja, meses de caixa divididos pela queima mensal. Yield da carteira contra benchmark (CDI no Brasil, SOFR nos Estados Unidos), com meta entre noventa e oito e cento e cinco por cento do benchmark. Custo de capital efetivo, o custo médio ponderado de dívida mais equity, útil para decidir entre investir caixa e pagar dívida. Concentração por contraparte, em percentual por banco, por fundo e por instrumento. Exposição cambial líquida, ativos menos passivos em cada moeda. Dias de caixa operacional, quantos dias de operação o caixa cobre sem entrar nada. Working capital (contas a receber mais estoque menos contas a pagar). DSO, ou Days Sales Outstanding, quanto tempo médio o cliente leva para pagar. DPO, ou Days Payable Outstanding, quanto tempo a empresa leva para pagar fornecedor.

### Definição de sucesso

Sucesso em tesouraria é silencioso. Você sabe que a tesouraria está bem quando o CEO nunca precisa perguntar "temos caixa pra fazer isso?", quando nenhum pagamento atrasou por falha operacional, quando o yield da carteira fica consistentemente acima do benchmark, quando há zero incidente de fraude em pagamento, quando o caixa está visível em dashboard que qualquer diretor pode checar a qualquer momento, quando o board recebe report trimestral sem surpresas, e quando o banco liga para oferecer produtos em vez de cobrar.

Falha em tesouraria, ao contrário, fica muito visível. Folha atrasa porque saiu da conta errada. Pagamento para fornecedor em moeda errada custou três por cento extra. Caixa em conta corrente rendendo zero enquanto o CDI está em treze. Fraude em transferência porque fornecedor novo foi cadastrado com conta errada. Banco principal entra em dificuldade e a empresa não tem alternativa rápida. Liquidez insuficiente para pagamento trimestral de imposto, forçando resgate antecipado com perda.

### Armadilhas

A primeira armadilha é manter "o CFO faz" depois de cem milhões de reais em caixa. O CFO tem outras funções. Tesouraria executada como tarefa secundária perde dinheiro silenciosamente. Contratar tesoureiro custa entre quarenta e setenta mil reais por mês incluindo encargos, e o retorno é cinco a dez vezes em empresa de escala adequada.

A segunda é banco único. Cômodo, arriscado. Queda do banco (SVB), mudança de política (limite de crédito revisado de uma hora para outra), conflito de relacionamento, qualquer um desses vira crise quando você só tem um. Mínimo três, mesmo que um seja pequeno.

> [!warning] Aplicação em fundo multimercado "por melhor rendimento"
> Fundo multimercado tem risco de perda material. Tesouraria corporativa existe para preservar capital, não para buscar alpha. Fundo multimercado é aceitável na pessoa física do fundador, não no caixa corporativo de uma startup. Quando o tesoureiro vier oferecer "olha, esse fundo deu vinte por cento ano passado", a resposta é não. Aliás, esse "vinte por cento ano passado" geralmente vem com drawdown de quinze por cento em algum mês que você não vai querer ver no extrato.

Empréstimo intercompany sem documentação é outro clássico. A matriz transfere dinheiro para a subsidiária como "capital". Anos depois, a Receita questiona se aquilo era dívida (com juros, retenção) ou capital (com impacto em patrimônio líquido). Documentar desde o dia um. Tratado em detalhe no [[#APÊNDICE BT — HEDGING CAMBIAL E GESTÃO DE MOEDA MULTICOUNTRY|Apêndice BT]].

Mudança de dados bancários por email é a fraude que mais derruba empresa séria. Golpista manda email "olá, mudamos de banco, agora é a conta X". Tesouraria paga sem validar. Milhões perdidos. A regra é simples e inegociável: mudança de conta bancária só com validação por telefone usando o número cadastrado, nunca com o número do email.

> [!warning] Single point of failure no tesoureiro
> Tesoureiro fica duas semanas doente e a operação quebra porque só ele sabe a senha, o token, o processo, o contato no banco. Em algum momento isso acontece, e quando acontece é caro. Ter analista de tesouraria treinado para assumir em emergência, documentação de processo atualizada, e duplo factor de autenticação acessível por mais de uma pessoa autorizada. Não é paranoia, é continuidade.

Over-hedge é a armadilha do tesoureiro que quer parecer prudente. Hedge é caro. Fazer hedge de cem por cento da exposição é comprar seguro caro que você nem sempre precisa. Política de hedge define percentual, tipicamente cinquenta a oitenta por cento da exposição conhecida dos próximos doze meses. Acima disso é especulação, mesmo que com boa intenção. Detalhado no [[#APÊNDICE BT — HEDGING CAMBIAL E GESTÃO DE MOEDA MULTICOUNTRY|Apêndice BT]].

Relação pessoal com o gerente do banco viesando decisões aparece em quase toda empresa. O gerente é amigo, oferece CDB "especial", você aceita. As condições eram piores que mercado, só você não comparou. Benchmarking via consultoria de tesouraria ou par de outra empresa é barato e resolve.

Política de investimento não atualizada também derruba muita empresa em auditoria. IPS aprovado em 2020 com duration máxima de cento e oitenta dias. Em 2024, o tesoureiro investe em LFT de vinte e quatro meses sem atualizar a política. Auditoria depois questiona. Política deve ser revista anualmente, ponto.

Ignorar IOF e retenções em remessa é a última armadilha clássica. Remessa Brasil para o exterior tem IOF (zero vírgula trinta e oito por cento, ou um vírgula um, ou três vírgula cinco, dependendo do tipo de operação), tem retenção de imposto de renda (quinze ou vinte e cinco por cento), tem registro no Banco Central. Pagamento de cem mil dólares pode custar cento e quatro a cento e dez mil com tributação mal planejada. Tesoureiro precisa conhecer.

### Checklist

- [ ] Arquitetura de contas definida (mínimo: operacional, folha, recebimento, aplicação por entidade)
- [ ] Cash position consolidado atualizado diariamente, acessível a CFO e CEO
- [ ] Política de investimento (IPS) escrita e aprovada por board
- [ ] Política de pagamentos (matriz de alçada, segregação de funções) escrita
- [ ] Mínimo três bancos no Brasil, mínimo dois em cada país estrangeiro de operação
- [ ] Tesoureiro dedicado a partir de cem milhões de reais em caixa ou operação multi-país
- [ ] Analista de tesouraria backup para o tesoureiro (evitar single point of failure)
- [ ] Yield da carteira medido mensalmente contra benchmark (CDI ou SOFR)
- [ ] Concentração por contraparte monitorada semanalmente (teto vinte a trinta por cento por banco)
- [ ] Exposição cambial líquida calculada semanalmente
- [ ] Política de hedge escrita, aprovada e revisada trimestralmente
- [ ] Relacionamento bancário renegociado anualmente
- [ ] Benchmark externo de condições (consultoria ou par) anualmente
- [ ] Report de tesouraria para CFO semanal, para CEO mensal, para board trimestral
- [ ] Documentação de processos em lugar acessível ao analista backup
- [ ] Validação de mudança de dados bancários por canal alternativo ao email
- [ ] Auditoria interna de tesouraria anual (pode ser rotação com time financeiro)
- [ ] ISDA Master Agreement com contrapartes de derivativos
- [ ] Linha de crédito pré-aprovada com mínimo dois bancos (mesmo sem usar)
- [ ] Plano de contingência para queda de banco principal (playbook escrito)

> [!note] Validade
> Esse apêndice reflete taxas, produtos e práticas típicas de tesouraria corporativa para startups brasileiras em 2025 e 2026. Taxas (CDI, SOFR), instrumentos disponíveis, regulamentação cambial do BCB e condições bancárias evoluem. Revisar anualmente. Para aprofundamento: Association for Financial Professionals (AFP) tem material sólido sobre corporate treasury. *Tesouraria Corporativa e Administração Financeira* (Fernando Motta Fortuna) cobre o contexto brasileiro. O CFA Institute, na seção de corporate finance, tem frameworks conceituais sólidos.

### Ver também

- [[#APÊNDICE AT — GESTÃO DE CAIXA EM PROFUNDIDADE|Apêndice AT]] sobre gestão de caixa em pré-operação e sobrevivência em crise.
- [[#APÊNDICE BT — HEDGING CAMBIAL E GESTÃO DE MOEDA MULTICOUNTRY|Apêndice BT]] sobre hedging cambial e operação em múltiplas moedas.
- [[#APÊNDICE W — CONTABILIDADE, TRIBUTÁRIO E REGIMES FISCAIS PARA STARTUP BRASILEIRA|Apêndice W]] sobre contabilidade para startups brasileiras.

---

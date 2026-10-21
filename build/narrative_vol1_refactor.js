/**
 * IGNIÇÃO v5.0 — Refatoração Narrativa Completa do Volume 1 (Onda 1 — Padrão-Ouro)
 * Cobre as 4 Fases (FASE_0, FASE_1, FASE_2, FASE_2B) e os 13 Capítulos (AJ, Y, D, CS, CN, EJ, EK, EW, EX, I, CT, AK, AL)
 * DNA Literário: Michael Gerber (O Mito do Empreendedor) + Eric Ries (Startup Enxuta) + Peter Thiel (De Zero a Um) + Rework.
 */

const NARRATIVE_VOL1 = {
  FASE_0: {
    openingTitle: 'O contrato invisível que você assina antes de abrir o CNPJ',
    openingBody: `São 23h40 de um domingo em Belo Horizonte. A **Dra. Camila**, cirurgiã-dentista de 34 anos reconhecida como uma das melhores especialistas em reabilitação oral da sua região, fecha o computador na mesa da sala com um nó no estômago. Na sexta-feira, ela havia pedido demissão da clínica onde trabalhava há oito anos para realizar o sonho de abrir sua própria rede odontológica. Só que, ao somar pela primeira vez na ponta do lápis o aluguel do ponto comercial, a parcela dos equipamentos importados, a escola dos dois filhos e o seu custo de vida real, ela descobriu uma verdade gelada: se a clínica demorasse mais de quatro meses para empatar, o limite do cheque especial da família inteira iria explodir.

Qual é a mentira mais cara que o imaginário do empreendedorismo vende todos os dias no Brasil? **A mentira de que empresas quebram por falta de boas ideias, quando na vida real a maioria morre porque o fundador quebrou emocional ou financeiramente seis meses antes de o negócio ter tempo de aprender a ficar de pé.**

Em *O Mito do Empreendedor*, Michael Gerber descreve a **"Convulsão Empreendedora"**: aquele instante em que um excelente técnico — um programador brilhante como **Lucas** em São Paulo, uma clínica impecável como **Camila** em BH, ou um engenheiro industrial como **Henrique** em Curitiba — acorda cansado de ter chefe e confunde *saber fazer o trabalho técnico* com *estar pronto para sustentar o peso de uma empresa*. Antes de escrever uma única linha de código ou desenhar uma logomarca, você precisa auditar a única máquina que não tem peça de reposição no início da jornada: **você mesmo, seu caixa pessoal e os loops abertos dentro da sua casa**.`,
    headingMap: {
      'O que esta fase cobre': 'A fundação invisível: por que preparar a pessoa vem antes de desenhar o negócio',
      'POR QUE': 'Por que negócios promissores morrem no CPF do fundador antes de quebrar no CNPJ',
      'Quando não empreender, um roteiro honesto de autoexclusão': 'Permissão para dizer "ainda não": os 10 sinais de que começar hoje é uma armadilha',
      'Quando usar': 'O momento exato de travar o relógio antes de queimar sua reserva',
      'Quem envolve': 'As conversas na mesa de jantar: quem paga o preço invisível da sua decisão',
      'Como executar': 'A auditoria de trincheira em 8 passos: do Runway Pessoal ao ponto de parada escrito',
      'PERGUNTAS A RESPONDER': 'O interrogatório de bolso antes de atravessar a porta sem volta',
      'Métricas': 'Os números que não mentem sobre o seu fôlego inicial',
      'SAÍDA DESTA FASE': 'A trava de segurança: você realmente ganhou o direito de ir para a Fase 1?',
      'Armadilhas': 'Onde os otimistas tropeçam: otimismo financeiro, sociedade de bar e fuga disfarçada',
      'FERRAMENTAS DESTA FASE': 'Como usar a Oficina de Trincheira desta Fase',
      'SÍNTESE DA FASE 0': 'O que muda na sua postura ao sair da Fase 0',
    },
    mirrorTitle: 'O Espelho da Fase 0 e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho do Fundador (Autodiagnóstico Rápido)
> Antes de virar a página para procurar uma ideia de negócio, responda sem dourar a pílula:
> 1. **O Teste do Extrato:** Se a sua futura empresa gerar exatamente **R$ 0 de pró-labore pelos próximos 14 meses**, sua família dorme em paz ou você precisará tomar decisões desesperadas no mês 5?
> 2. **O Teste do Banho (Paul Graham):** Nos últimos sete dias, quando sua mente vagou no chuveiro ou no trânsito, ela foi para o problema que você quer construir ou foi sequestrada por uma dívida pessoal, uma briga familiar ou o medo de falhar?
> 3. **Fuga vs. Construção:** Você quer abrir um negócio porque encontrou uma dor que te obceca ou apenas porque não suporta mais a sua segunda-feira no emprego atual?
>
> **Sua permissão (*estilo Rework*):** Você está autorizado a **não** pedir demissão agora. Começar *part-time* ou passar seis meses acumulando caixa pessoal não é covardia — é engenharia de sobrevivência.
>
> **O que fazer na próxima segunda-feira às 9h:** Abra uma planilha em branco, calcule seu **Runway Pessoal Real** ($\text{Reserva Líquida} \div \text{Custo Mínimo Familiar} \times 1{,}5$) e agende a conversa de 60 minutos com seu cônjuge ou família usando o roteiro desta fase.`,
  },

  FASE_1: {
    openingTitle: 'O mito da lâmpada acesa: por que boas ideias são garimpadas no tédio, não no chuveiro',
    openingBody: `Em uma cafeteria em Pinheiros, **Lucas** (engenheiro de software recém-saído de um grande banco) mostra orgulhoso para **Marina** (sua futura sócia comercial) um caderno com três ideias de startups que teve durante o fim de semana: uma rede social para donos de pets, um aplicativo de divisão de contas em bares com IA e um marketplace de chefs em domicílio. Marina escuta em silêncio, fecha o caderno e faz uma única pergunta: *"Lucas, na última terça-feira, qual dessas três pessoas acordou às sete da manhã suando frio e disposta a passar o cartão corporativo para resolver isso?"* Lucas trava. Nenhuma delas. Eram ideias divertidas de contar num jantar, mas pésimas para construir uma empresa.

Peter Thiel abre *De Zero a Um* perguntando qual verdade importante você enxerga e quase ninguém concorda. Na geração de ideias, a verdade contraintuitiva é brutal: **as ideias mais lucrativas do Brasil quase nunca parecem "geniais" ou cinematográficas à primeira vista — elas parecem problemas operacionais chatos, burocráticos e dolorosos que todo mundo ao redor aprendeu a tolerar como se fossem parte da paisagem.**

Chamamos o erro de Lucas de **Síndrome da Ideia de Vitrine**: o impulso de procurar ideias que rendem elogios de amigos em vez de garimpar **atritos caros, repetitivos e urgentes**. Enquanto o fundador amador fica esperando um raio cair na cabeça, o fundador profissional opera como um garimpeiro sistemático: ele gera trinta hipóteses a partir de fricções reais da economia, passa todas por quatro peneiras frias e só avança quando encontra uma dor que já custa tempo ou dinheiro todos os meses.`,
    headingMap: {
      'O que esta fase cobre': 'Do acaso ao garimpo sistemático: como trocar a espera pelo método',
      'POR QUE': 'Por que apaixonar-se pela primeira ideia que apareceu na sua cabeça custa três anos de vida',
      'Quando usar': 'Quando abrir o funil de geração (e quando parar de procurar para começar a testar)',
      'Quem envolve': 'Com quem conversar para enxergar os pontos cegos do mercado',
      'Como executar': 'As 7 fontes de onde realmente nascem os negócios que dão lucro no Brasil',
      'Os quatro filtros, depois de gerar, escolher': 'A peneira implacável: os 4 filtros que matam ideias sedutoras antes que elas matem seu caixa',
      'Semana das Ideias, exercício prático de cinco dias': 'Protocolo de 5 dias: como sair do zero para uma Lista Curta blindada em uma semana',
      'Armadilhas específicas desta fase': 'As 5 ciladas clássicas: da ideia "Tinder de X" ao perfeccionismo paralisante',
      'Entregável desta fase': 'Sua Lista Curta de Sobreviventes (3 a 5 apostas ranqueadas)',
      'Checklist GO/NO-GO': 'A catraca de passagem para a Fase 2',
      'Métricas de qualidade desta fase': 'Como medir se a sua geração de ideias foi rigorosa ou superficial',
      'FERRAMENTAS DESTA FASE': 'Como usar a Oficina de Trincheira desta Fase',
      'SÍNTESE DA FASE 1': 'Lição de bolso da Fase 1: ideias baratas, filtros caros',
    },
    mirrorTitle: 'O Espelho da Fase 1 e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho do Garimpeiro (Autodiagnóstico Rápido)
> Olhe para a ideia favorita que você tem hoje na cabeça e faça três perguntas:
> 1. **Analgésico ou Vitamina?** O seu cliente futuro já está gastando dinheiro ou mantendo uma planilha monstruosa para tentar resolver isso hoje, ou você terá que "educá-lo" de que o problema existe?
> 2. **Direito de Vencer (*Founder-Market Fit*):** Por que **você** — e não outras quinhentas pessoas inteligentes com ChatGPT — tem acesso privilegiado, vivência de trincheira ou conhecimento técnico nesse problema?
> 3. **A Regra das 20 Candidatas:** Essa ideia venceu uma disputa contra outras 19 alternativas avaliadas com frieza, ou é simplesmente a única filha que você teve e por isso tem medo de criticá-la?
>
> **Sua permissão (*estilo Rework*):** Você tem permissão para construir um negócio em um setor "sem glamour" (reconciliação fiscal, manutenção de frotas, gestão de resíduos, agendamento de clínicas). O tédio do setor é o melhor protetor da sua margem.
>
> **O que fazer na próxima segunda-feira às 9h:** Abra seu **Diário de Fricções**, anote pelos próximos 5 dias todos os gargalos onde empresas ou pessoas perdem horas e dinheiro, e passe suas top 5 ideias pela matriz dos **4 Filtros** desta fase.`,
  },

  FASE_2: {
    openingTitle: 'Se você não consegue escrever em uma página sem usar jargão, você ainda não tem uma ideia',
    openingBody: `Em Curitiba, **Henrique** passou quatro meses dizendo a amigos e ex-colegas da indústria que estava montando *"uma plataforma integrada de inteligência operacional com IA e IoT para descarbonização e eficiência energética no setor produtivo"*. Todo mundo balançava a cabeça nos cafés, dizia *"que animal, mercado gigante!"* e desejava boa sorte. Até que um diretor industrial veterano, amigo do seu pai, pediu para Henrique escrever em uma única folha de papel: **quem assina o cheque, qual dor faz essa pessoa perder o sono na segunda-feira, como ela resolve isso hoje na unha e o que precisa ser verdade para ela trocar o sistema atual pelo seu.** Henrique levou três horas diante da página em branco e suou frio: por trás do vocabulário bonito, ele tinha três negócios diferentes misturados e não sabia dizer se seu comprador era o gerente de manutenção, o diretor financeiro ou a área de sustentabilidade.

Eric Ries conta em *A Startup Enxuta* como meses de trabalho duro são jogados no lixo quando construímos sobre pressupostos vagos que nunca foram colocados sob a luz fria do papel. **Na cabeça do fundador, toda ideia funciona com perfeição cinematográfica porque o cérebro preenche os buracos lógicos com entusiasmo.**

Chamamos esse fenômeno de **A Miragem da Ideia Falada**: enquanto a ideia vive apenas na sua voz durante um café, você muda o discurso a cada segundo para agradar o interlocutor e esconde de si mesmo o que não sabe. Colocar a ideia na **Declaração Inicial da Ideia (DII)** de uma página — com seus sete blocos cirúrgicos e sua lista nua e crua de incertezas — não é burocracia. É o primeiro choque de realidade entre o seu entusiasmo e a física dos negócios.`,
    headingMap: {
      'O que esta fase cobre': 'A autópsia de uma página: tirando a ideia da neblina mental para o papel',
      'POR QUE': 'Por que ideias que só existem na conversa mudam de forma e enganam o próprio dono',
      'Quando usar': 'A hora exata de congelar o rascunho v1 antes de ir para a rua',
      'Quem envolve': 'O teste do estranho inteligente: quem deve ler sua página para caçar jargões',
      'Como executar': 'Os 7 blocos da Declaração Inicial da Ideia (DII) e o mapa honesto do que você não sabe',
      'PERGUNTAS A RESPONDER': 'As 5 perguntas que separam clareza estratégica de poesia corporativa',
      'SAÍDA DESTA FASE': 'O teste de fogo dos 90 segundos: como saber se sua DII v1 está pronta',
      'EXEMPLO PRÁTICO': 'Na trincheira real: como uma ideia vaga de "SaaS para restaurantes" vira uma DII cirúrgica',
      'Armadilhas': 'Onde o papel mente: esconder incertezas por orgulho e confundir solução com problema',
      'FERRAMENTAS DESTA FASE': 'Como usar a Oficina de Trincheira desta Fase',
      'SÍNTESE DA FASE 2': 'Da neblina ao alvo fixo: o que você ganha ao fechar a Fase 2',
    },
    mirrorTitle: 'O Espelho da Fase 2 e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho da Clareza (Autodiagnóstico Rápido)
> Pegue a descrição atual do seu negócio e passe por estes três cortes:
> 1. **O Corte da Solução Oculta:** No seu bloco de "Problema", você escreveu uma dor real do mundo (*"donos de padarias perdem 4 horas por semana conciliando taxas erradas de cartões"*) ou escreveu a ausência do seu produto (*"o problema é que não existe um app integrado com IA"* )?
> 2. **O Teste dos 20 Nomes:** O seu bloco "Para quem" é tão específico que você consegue abrir o LinkedIn ou o Google Maps agora mesmo e listar o nome e o telefone de **20 clientes reais** que se encaixam perfeitamente nele?
> 3. **A Coragem da Ignorância:** Sua lista de incertezas tem pelo menos 10 dúvidas reais espalhadas entre Demanda, Canal e Modelo, ou você deixou categorias em branco para fingir segurança?
>
> **Sua permissão (*estilo Rework*):** Você está proibido de fazer uma apresentação de 20 slides bonitos no Canva nesta fase. Slide colorido no dia zero é maquiagem para falta de clareza. Escreva texto puro em uma página.
>
> **O que fazer na próxima segunda-feira às 9h:** Bloqueie 2 horas sem celular, preencha os 7 blocos da sua **DII v1** (usando o template da Oficina ao final desta fase) e leia em 90 segundos para 3 pessoas fora do seu setor. Se elas não conseguirem repetir com as próprias palavras quem paga e qual é a dor, reescreva.`,
  },

  FASE_2B: {
    openingTitle: 'Todo negócio é uma aposta em dominós invisíveis: qual é o dominó que derruba a sua empresa se não cair?',
    openingBody: `Em Recife, **Rafael e Bia** tiveram a ideia de criar uma plataforma de compras coletivas de embalagens biodegradáveis para pequenas cafeterias e hamburguerias artesanais. A Declaração da Ideia parecia impecável: os donos de hamburgueria reclamavam do preço das embalagens e diziam amar sustentabilidade. Mas antes de alugar um galpão e encomendar o primeiro lote da fábrica, Bia desenhou no quadro branco a cadeia de eventos que precisava acontecer para a empresa dar lucro — a **Árvore de Teoria do Negócio**. Foi ali que o dominó mortal apareceu: para conseguir desconto de 30% na indústria (Nó C), eles precisavam que 40 hamburguerias comprassem exatamente a mesma medida de caixa na mesma terça-feira do mês (Nó B) e pagassem à vista antecipado (Nó A). Quando ligaram para seis donos de hamburgueria para checar apenas o Nó A, descobriram que 100% deles compravam embalagem no cartão em 60 dias porque operavam sem capital de giro. Um único dominó invisível mataria o negócio inteiro — e eles descobriram isso gastando zero reais em estoque.

Andy Grove, em *High Output Management*, ensinou a olhar para qualquer empresa como um fluxo causal onde um único passo limitante dita o resultado do sistema inteiro. Na ciência do empreendedorismo (Felin, Gambardella, Stern e Zenger), dar um passo além do canvas estático e desenhar a **Teoria Causal do Negócio (*Story Tree* e *DAG*)** é o que separa quem testa o que é fácil de quem testa o que é fatal.

Chamamos o erro de pular esta etapa de **A Cegueira dos Quadradinhos Soltos**: preencher nove blocos num canvas na parede sem desenhar as **setas de causa e efeito** entre eles — e sem ter a honestidade brutal de marcar quais setas são apostas **bet-the-company** (aquelas que, se forem falsas, reduzem o valor de todo o resto a zero).`,
    headingMap: {
      'O que esta fase cobre': 'Além dos quadradinhos do Canvas: desenhando a física de causa e efeito da sua empresa',
      'POR QUE': 'Por que testar as premissas fáceis primeiro é a forma mais cara de adiar o fracasso',
      'Quando usar': 'O elo perdido entre ter uma ideia articulada (Fase 2) e ir para a rua entrevistar (Fase 4)',
      'Quem envolve': 'Como construir a árvore causal a quatro mãos sem cair em pensamento de grupo',
      'Como executar': 'Do Story Tree ao Grafo Causal (DAG): os 9 passos para isolar suas apostas bet-the-company',
      'Os nove passos aplicados, Story Tree do PadariaPro': 'Anatomia completa em campo: dissecando os dominós causais do caso PadariaPro',
      'Caso ilustrativo, marca fictícia de moda sustentável e ética': 'A autópsia de uma ilusão: como a árvore causal revela quando o cliente elogia mas não paga',
      'Caso brasileiro real, teoria do negócio na Hotmart': 'Caso real brasileiro — Hotmart: a seta causal que destravou a economia de criadores no Brasil',
      'PERGUNTAS A RESPONDER': 'O filtro de parcimônia: quais peças sobram e qual seta concentra o risco mortal',
      'SAÍDA DESTA FASE': 'Checklist de saída: sua teoria causal aguenta o choque com a rua?',
      'Armadilhas': 'Quando o mapa vira religião: árvores gigantes, setas circulares e otimismo de 90%',
      'FERRAMENTAS DESTA FASE': 'Como usar a Oficina de Trincheira desta Fase',
      'SÍNTESE DA FASE 3': 'O fechamento do ciclo de Ideação: você agora sabe exatamente o que precisa provar',
    },
    mirrorTitle: 'O Espelho da Fase 3 e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho Causal (Autodiagnóstico Rápido)
> Olhe para a cadeia de causa e efeito do seu negócio hoje:
> 1. **A Falácia do Operador vs. Pagador:** Na sua teoria, a pessoa que sente a dor todo dia no operacional (o usuário) é a mesma que tem poder e orçamento para assinar o contrato (o decisor)? Se não for, qual é a probabilidade real da seta que liga o incômodo do operador à carteira do dono?
> 2. **Honestidade nas Probabilidades:** Se você multiplicar as probabilidades reais das 4 ou 5 setas críticas até o cliente pagar ($P(A) \times P(B|A) \times P(C|B)$), o resultado dá algo realista entre 15% e 45%, ou você pintou tudo de 90% para se sentir seguro?
> 3. **Isolamento do Dominó Mortal:** Você sabe apontar em 10 segundos quais são as **duas premissas bet-the-company** que, se forem refutadas na próxima semana, obrigam você a mudar a rota imediatamente?
>
> **Sua permissão (*estilo Rework*):** Você está autorizado a admitir que tem apenas **30% de confiança** na premissa mais importante do seu negócio hoje. Nomear a dúvida baixa não enfraquece a empresa — ela diz exatamente onde mirar a lanterna na segunda-feira.
>
> **O que fazer na próxima segunda-feira às 9h:** Desenhe em uma folha de papel os 6 a 8 nós da sua **Story Tree**, circule em vermelho as **2 setas bet-the-company** de menor confiança e leve apenas essas duas setas como alvo para as entrevistas de campo do Volume 2.`,
  },

  AJ: {
    openingTitle: 'O oxigênio invisível: por que o caixa da sua casa dita a coragem das suas decisões na empresa',
    openingBody: `Quando **Lucas** deixou seu cargo de engenheiro sênior em um banco na Faria Lima para fundar sua startup com **Marina**, ele tinha um salário líquido de R$ 22 mil por mês, plano de saúde de primeira linha sem coparticipação e bônus anual garantido. No entusiasmo da partida, ele manteve exatamente o mesmo apartamento alugado no Itaim, as mesmas assinaturas, as mesmas viagens e não conversou com a esposa sobre como ficaria o orçamento doméstico após o sexto mês. No décimo mês de operação, justamente quando o produto começou a tracionar mas ainda exigia mais seis meses de validação para levantar um *Seed* decente, a conta pessoal de Lucas bateu no fundo. Resultado? Com o aluguel atrasando em casa, Lucas forçou a empresa a aceitar a primeira proposta predatória de um investidor-anjo oportunista, entregando **35% da companhia por R$ 250 mil** e assinando cláusulas de veto que travariam a startup pelos três anos seguintes.

Ben Horowitz, em *O Lado Difícil das Situações Difíceis*, lembra que a coragem de um CEO em tempo de guerra é inseparável da sua capacidade de suportar pressão psicológica. E nada destrói o córtex pré-frontal de um fundador brasileiro mais rápido do que **O Imposto do Desespero Doméstico**: quando o boleto da escola dos seus filhos ou o rotativo de 400% ao ano do cartão de crédito pessoal entra na sala de reunião da sua empresa.

Cuidar do dinheiro pessoal do fundador — da blindagem entre CPF e CNPJ ao cálculo cirúrgico de *pró-labore*, seguros de proteção familiar, regime de casamento e preservação de *score* bancário no Brasil — não é egoísmo. É a única garantia de que você jamais venderá o futuro da sua empresa a preço de banana para pagar o supermercado de sexta-feira.`,
    headingMap: {
      'O quê': 'As 5 engrenagens das finanças pessoais de quem vive no risco',
      'Por quê': 'Por que um fundador quebrado na pessoa física destrói valor na pessoa jurídica',
      'Quando': 'Os momentos de revisão obrigatória: do dia zero às vésperas da rodada',
      'Quem': 'O conselho doméstico: cônjuge, contador, corretor independente e planejador',
      'Como': 'Manual de blindagem financeira no Brasil: reserva em Selic, escada de pró-labore, seguros e crédito',
      'Métricas': 'O painel financeiro do seu CPF: os números que protegem sua paz de espírito',
      'Definição de sucesso': 'Como saber se a sua retaguarda pessoal está blindada para uma maratona de 5 anos',
      'Armadilhas': 'Erros fatais: misturar cartão PJ com mercado de casa, ignorar regime de bens e queimar reserva em renda variável',
      'Ver também': 'Conexões diretas na coleção',
    },
    mirrorTitle: 'O Espelho do CPF do Fundador e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho Financeiro Pessoal (Autodiagnóstico Rápido)
> 1. **A Fronteira CPF/CNPJ:** Se um auditor fiscal ou um investidor de *due diligence* abrir hoje o extrato da sua empresa, ele encontrará zero despesas pessoais misturadas ou encontrará contas de restaurante, farmácia e Uber de domingo pagas no cartão da empresa?
> 2. **A Proteção contra Cisne Negro:** Se você sofrer um acidente ou ficar 60 dias hospitalizado amanhã, sua família tem seguro de vida/invalidez e plano de saúde blindados, ou o seu risco pessoal está 100% descoberto desde que saiu da CLT?
> 3. **Onde Está Sua Reserva:** O dinheiro que paga os próximos 12 meses da sua casa está 100% em liquidez diária segura (Tesouro Selic / CDB DI de bancão) ou está travado em cripto, ações ou imóveis ilíquidos?
>
> **O que fazer na próxima segunda-feira às 9h:** Separe definitivamente suas contas bancárias PF e PJ, defina um valor fixo de transferência mensal (ou zero, se estiver na reserva), contrate um seguro de vida/invalidez básico e revise seu custo fixo doméstico cortando toda gordura de status.`,
  },

  Y: {
    openingTitle: 'A máquina humana sob pressão: como escolher quem senta no cockpit com você (e como não quebrar por dentro)',
    openingBody: `Em Goiânia, **Rafael e Bia** são sócios há três anos. De fora, nos painéis de eventos e nos posts de LinkedIn, a história parece uma linha reta de sucesso. Por dentro, às 4h da manhã de uma quinta-feira, Rafael está sentado na beira da cama com taquicardia pela terceira vez na semana: um grande fornecedor acabou de cancelar o prazo de pagamento, um colaborador-chave pediu demissão levando clientes e Rafael e Bia não têm uma conversa honesta sobre o próprio cansaço há oito meses. Cada um engole o medo em silêncio para "não desanimar o outro", até que uma discussão banal sobre o layout de uma embalagem vira um grito de duas horas na sala de reunião.

Ben Horowitz batizou esse abismo psicológico de **"A Luta" (*The Struggle*)**: o lugar onde o suor frio bate no estômago, onde tudo o que podia dar errado dá errado ao mesmo tempo e onde ninguém de fora consegue aliviar o peso da sua cadeira. Segundo estudos de Noam Wasserman em Harvard (*The Founder's Dilemmas*), **65% das startups de alto potencial que fracassam morrem por explosão na relação entre os cofundadores e colapso emocional**, e não por falha técnica do produto.

Chamamos a ilusão inicial entre sócios de **A Lua de Mel Sem Contrato**: quando dois fundadores dividem o *cap table* num guardanapo achando que amizade de faculdade substitui conversas difíceis sobre dinheiro, ritmo de trabalho, *vesting* com *cliff* e protocolos de saúde mental.`,
    headingMap: {
      'O que este capítulo cobre': 'Os dois pilares que sustentam o teto quando a tempestade chega: mente sã e sociedade blindada',
      'Por que importa': 'Por que 65% dos fracassos começam num silêncio acumulado entre sócios ou num burnout negado',
      'Quando aplicar': 'Os momentos de maior tensão psicológica da jornada (e como agir antes do colapso)',
      'Quem envolver': 'A rede de contenção: cofundadores, terapeutas, pares de trincheira e família',
      'Como executar': 'Protocolos reais de sobrevivência: higiene psíquica, rituais de check-in entre sócios e divisão justa de equity',
      'Métricas': 'Indicadores antecedentes de saúde do fundador e do casamento societário',
      'Definição de sucesso': 'Como se parece uma sociedade madura que aguenta cinco anos de pressão sem rachar',
      'Armadilhas': 'As bombas-relógio societárias: 50/50 sem desempate, falta de vesting e positividade tóxica',
      'Momentos-chave psicológicos — guidance específico para eventos críticos': 'Manual de emergência emocional para os 6 piores dias da vida de um fundador',
      'Fechamento por fracasso e lições de encerramento Fechamento por fracasso: dimensão emocional': 'Quando é hora de desligar os aparelhos: como atravessar o luto de fechar uma empresa sem destruir sua identidade',
      'Fechamento por fracasso — o que acontece dentro do fundador': 'Separando o fracasso de um CNPJ do valor do seu CPF',
      'A saúde mental ao longo das fases — mapa do que esperar quando': 'O mapa climático da mente do fundador da Fase 0 ao Exit',
    },
    mirrorTitle: 'O Espelho da Sociedade e da Mente — Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho Humano (Autodiagnóstico Rápido)
> 1. **A Conversa Evitada:** Qual é o assunto delicado com seu cofundador (ritmo de entrega, retirada financeira, qualidade técnica ou ego) que você vem adiando há mais de 30 dias para evitar conflito?
> 2. **A Proteção do Cap Table:** Se o seu sócio acordar amanhã e decidir abandonar a empresa para aceitar um emprego no exterior, existe uma cláusula de **vesting de 4 anos com cliff de 1 ano** assinada, ou ele sairá levando metade da empresa debaixo do braço?
> 3. **O Termômetro do Corpo:** Quantas noites você dormiu pelo menos 7 horas contínuas na última semana sem acordar às 3h da manhã checando mensagens?
>
> **O que fazer na próxima segunda-feira às 9h:** Agende o primeiro **Check-in Estruturado de Cofundadores** mensal (fora do escritório, sem falar de tarefas operacionais) usando as perguntas de alinhamento deste capítulo e coloque no calendário a assinatura do seu Acordo de Sócios com *vesting*.`,
  },

  D: {
    openingTitle: 'O inimigo no espelho: por que pessoas brilhantes tomam decisões estúpidas quando se apaixonam pela própria tese',
    openingBody: `Na sua clínica em Belo Horizonte, a **Dra. Camila** investiu R$ 95 mil em um equipamento importado de escaneamento facial que prometia revolucionar a venda de tratamentos estéticos. Nos seis primeiros meses, apenas três pacientes aceitaram pagar pelo exame. Qualquer observador externo veria que a aposta deu errado e venderia a máquina no mercado secundário para recuperar R$ 70 mil de caixa. Mas Camila fez o oposto: contratou uma agência de tráfego pago de R$ 8 mil mensais só para divulgar a máquina e obrigou a recepcionista a oferecê-la para todos os pacientes, travando a agenda dos procedimentos que realmente davam lucro. Quando seu marido perguntou por que ela insistia naquilo, a resposta saiu no automático: *"Eu não posso desistir agora depois de tudo o que já gastei nessa máquina!"*

Daniel Kahneman e Amos Tversky ganharam o Prêmio Nobel demonstrando que o cérebro humano não é um computador frio de probabilidades — é uma máquina de contar histórias para proteger o próprio ego. Na trincheira empreendedora, onde você precisa vender otimismo para clientes, funcionários e investidores todos os dias, você se torna a vítima número um da **Cegueira do Próprio Pitch**.

Este capítulo não é uma aula acadêmica de psicologia. É um **manual de desarmamento de bombas cognitivas**: como identificar o instante exato em que a *Falácia do Custo Afundado*, o *Viés de Confirmação* ou o *Efeito Dunning-Kruger* sequestraram o volante da sua empresa — e quais travas mecânicas instalar para que você não destrua seu caixa tentando provar que estava certo.`,
    headingMap: {
      'Armadilhas de parcerias e canais': 'A miragem do parceiro salvador: vieses que cegam acordos comerciais',
      'LEITURAS E REFERÊNCIAS COMPLEMENTARES': 'Arsenal bibliográfico para blindar seu julgamento',
    },
    mirrorTitle: 'O Espelho Cognitivo e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho Antiviés (Autodiagnóstico Rápido)
> 1. **O Teste de Irving Grousbeck (Zero-Base Thinking):** Se você não tivesse investido nenhum real e nenhuma hora no projeto, feature ou contratação que mais te dá dor de cabeça hoje, sabendo o que sabe agora, você entraria nele hoje de manhã?
> 2. **Caça à Confirmação:** Nas últimas 5 conversas com clientes, você procurou provas de que sua tese está errada ou comemorou o único comentário educado ignorando quatro sinais de indiferença?
> 3. **Taxa Base vs. Exceção:** Ao projetar que vai fechar 30 clientes B2B em 60 dias, você olhou o ciclo médio real do setor ou assumiu que sua empresa é mágica?
>
> **O que fazer na próxima segunda-feira às 9h:** Escolha a decisão mais cara do seu mês e nomeie um **Advogado do Diabo oficial (*Red Team*)** na reunião — alguém cuja única missão durante 20 minutos seja provar com dados por que esse plano vai dar errado.`,
  },

  CS: {
    openingTitle: 'Foguete de Venture Capital ou Máquina de Lucro Bootstrapped: você quer ser rico ou quer ser rei?',
    openingBody: `Dois amigos de turma da engenharia da UFSC, em Florianópolis, abrem empresas de software B2B no mesmo mês. O primeiro levanta R$ 15 milhões em três rodadas de Venture Capital, contrata 90 pessoas, estampa capas de portais de inovação e, cinco anos depois, vende a empresa por R$ 80 milhões. Parece um triunfo — até você abrir a planilha de liquidação: após as cláusulas de *liquidation preference* de 1x dos fundos e a diluição acumulada que reduziu sua fatia a 9%, sobram para ele R$ 4,8 milhões líquidos. O segundo amigo nunca captou um centavo de fundo: cresceu financiando o produto com o dinheiro dos próprios clientes (*bootstrapping*), manteve uma equipe enxuta de 22 pessoas com alta automação, tirou R$ 1,5 milhão de dividendos isentos por ano a partir do terceiro ano e, no quinto ano, vendeu 80% da operação para um grupo estratégico por R$ 35 milhões — embolsando **R$ 28 milhões à vista** além dos dividendos já acumulados.

Noam Wasserman resumiu esse dilema em uma pergunta que todo fundador deveria tatuar no braço antes de marcar o primeiro café na Faria Lima: **"Você quer ser Rei (manter controle e lucros) ou quer ser Rico via hipercrescimento — sabendo que escolher o veículo errado para o tamanho da sua pista destrói os dois?"**

Chamamos o erro mais comum do ecossistema de **A Vaidade do Cheque Alheio**: tratar a captação de Venture Capital como medalha de sucesso em vez de entendê-la pelo que ela realmente é — uma **esteira rolante de velocidade máxima** onde qualquer resultado abaixo de multiplicar a empresa por 10x a 20x é tratado como fracasso.`,
    headingMap: {
      'Definições práticas': 'Dois esportes com regras opostas: a física do Bootstrapper vs. a física do Venture Capital',
      'A diferença fundamental, expectativa de outlier': 'A matemática implacável da Lei de Potência: por que um fundo de VC precisa que você tente o tudo-ou-nada',
      'Quando bootstrap é a escolha certa': 'Quando o cliente é o seu melhor investidor: a liberdade da máquina de caixa própria',
      'Quando VC é a escolha certa (ou obrigatória)': 'Quando o mercado é uma corrida de captura rápida ou exige capital pesado antes do primeiro real',
      'O ponto de não-retorno': 'A porta giratória que só abre para um lado: o que muda no minuto em que o cheque do fundo cai na conta',
      'Framework de decisão, as quatro perguntas': 'As 4 perguntas de filtro para escolher sua arquitetura de capital sem ilusão',
      'O caminho híbrido': 'A terceira via inteligente: fazer Bootstrap até a tração e levantar capital com poder de barganha',
      'Armadilhas clássicas': 'Erros mortais: rodar empresa bootstrapped com custo de VC ou levantar VC para um nicho de R$ 30 milhões',
      'Sinal final': 'Como alinhar sua ambição pessoal com o motor financeiro do negócio',
    },
    mirrorTitle: 'O Espelho do Capital e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho da Escolha Fundacional (Autodiagnóstico Rápido)
> 1. **Tamanho Real da Pista:** O seu mercado comporta genuinamente uma empresa faturando R$ 300 milhões+ por ano em 7 anos (requisito mínimo para a conta do VC fechar), ou é um excelente nicho de R$ 15M a R$ 40M/ano com 40% de margem líquida que faria você milionário no *bootstrap*?
> 2. **Apetite por Governança e Pressão:** Você quer ter liberdade para decidir se cresce 30% ao ano distribuindo dividendos (como a **Dra. Camila**), ou quer um conselho exigindo 100%+ de crescimento anual rumo ao *exit* obrigatório (como **Lucas e Marina**)?
> 3. **Alavanca do Cliente:** Existe uma forma de cobrar *setup fee*, anuidade antecipada ou um *Serviço Produtizado* para que o seu cliente financie a construção do seu produto?
>
> **O que fazer na próxima segunda-feira às 9h:** Responda por escrito às **4 Perguntas de Decisão** deste capítulo junto com seu sócio e deixe registrado no Acordo de Sócios qual jogo vocês estão jogando nos próximos 24 meses.`,
  },

  CN: {
    openingTitle: 'Fora da bolha da Faria Lima: por que as maiores vantagens injustas do Brasil nascem longe do estereótipo',
    openingBody: `Quando **Henrique** apresentou sua primeira solução de telemetria industrial e eficiência hídrica para um investidor em São Paulo, ouviu um comentário atravessado: *"Vocês estão sediados no interior do Paraná, não vieram de banco de investimento nem de unicórnio paulistano... como vão competir?"* Dois anos depois, enquanto três concorrentes bem-nascidos da capital queimavam milhões tentando entender por vídeo como funcionava uma planta agroindustrial, Henrique já estava dentro de 45 usinas e cooperativas. Sua "desvantagem" geográfica e seu perfil de engenheiro de chão de fábrica eram, na verdade, um **fosso competitivo intransponível**: os diretores industriais confiavam nele no primeiro aperto de mão porque ele falava a língua da caldeira e não o inglês da Faria Lima.

Em *Empresas Feitas para Vencer*, Jim Collins mostrou que os líderes que constroem empresas extraordinárias quase nunca se parecem com as celebridades barulhentas das capas de revista. No Brasil — um país continental onde o PIB pulsa no interior, nas cidades médias, nos serviços essenciais e nas mãos de fundadoras e fundadores que conhecem a dor real da população —, **não se encaixar no molde de "garoto de 23 anos com moletom do Vale do Silício" frequentemente é a sua maior vantagem assimétrica.**`,
    headingMap: {
      'Mulheres fundadoras no Brasil': 'Liderança feminina na trincheira brasileira: dados reais, barreiras de capital e vantagens de execução',
      'Casos fora do eixo São Paulo–Rio': 'A potência do Brasil profundo: como construir gigantes a partir de SC, PR, MG, PE, GO e do interior',
      'Empreendedorismo em setores não-tech': 'Onde mora o fluxo de caixa silencioso: tecnologia aplicada a setores tradicionais e "sem glamour"',
      'Empreendedorismo de impacto, e questões éticas': 'Lucro e impacto real: resolvendo gargalos estruturais brasileiros sem depender de filantropia',
      'Nota de método': 'Como transformar sua origem e trajetória singular em Founder-Market Fit imbatível',
    },
    mirrorTitle: 'O Espelho da Sua Vantagem Assimétrica — Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho da Singularidade (Autodiagnóstico Rápido)
> 1. **De Defeito a Fosso:** Qual característica da sua trajetória (viver fora de SP, ter mais de 40 anos, vir de um setor tradicional como saúde, agro, contabilidade ou indústria) você estava tentando esconder no pitch, quando na verdade ela é a prova de que você conhece a dor melhor que qualquer outsider?
> 2. **Arbitragem Geográfica:** Você está usando o custo operacional menor e a retenção altíssima de talentos da sua região a seu favor, enquanto vende para o Brasil inteiro?
>
> **O que fazer na próxima segunda-feira às 9h:** Reescreva o bloco **"Por que nós"** da sua apresentação substituindo credenciais genéricas pela sua vivência concreta de trincheira no problema.`,
  },

  EJ: {
    openingTitle: 'Portas de mão única vs. portas de duas mãos: por que decidir devagar o que é reversível mata a velocidade da sua empresa',
    openingBody: `Na segunda-feira de manhã, **Lucas e Marina** entram em uma reunião às 9h para decidir duas coisas na sua startup: (1) se vão mudar o preço do plano básico no site de R$ 199 para R$ 249 por mês nos próximos quinze dias de teste, e (2) se vão assinar um contrato de exclusividade comercial de três anos com uma grande distribuidora que exige travar 60% do roadmap de engenharia. Inacreditavelmente, eles passam **duas horas e meia** debatendo a mudança de R$ 50 no preço do site — pedindo mais planilhas e adiando para a semana seguinte — e aprovam a cláusula de exclusividade de três anos nos últimos dez minutos da reunião porque estavam atrasados para o almoço.

Jeff Bezos, em sua célebre carta aos acionistas da Amazon, deu nome a essa patologia organizacional: **confundir Decisões Tipo 1 (portas de mão única, quase irreversíveis, que exigem lentidão, pré-mortem e cálculo frio) com Decisões Tipo 2 (portas de duas mãos, onde você pode atravessar, ver o que acontece e voltar atrás em cinco minutos se der errado).**

Quando uma empresa jovem cresce, o medo de errar faz os fundadores aplicarem o peso burocrático das decisões Tipo 1 nas dezenas de escolhas reversíveis do dia a dia (paralisando a execução), enquanto a pressa e o cansaço fazem com que atravessem portas irreversíveis (contratar sócio, assinar exclusividade, queimar metade do caixa) no impulso.`,
    headingMap: {
      'O que este capítulo cobre': 'A arquitetura do julgamento: transformando a tomada de decisão em sistema repetível',
      'POR QUE': 'Por que uma única decisão irreversível mal tomada apaga dois anos de execução brilhante',
      'Quando usar': 'O filtro instantâneo: como separar em 30 segundos o que exige rito do que exige ação imediata',
      'Como executar': 'O arsenal prático: Portas Tipo 1 vs. Tipo 2, matriz SPADE, Regra 70% de Bezos e Diário de Decisões',
      'Armadilhas': 'Paralisia por análise, consenso covarde e confundir sorte com boa decisão (resulting)',
      'Checklist': 'O protocolo de bolso antes de bater o martelo em uma decisão Tipo 1',
      'Ver também': 'Conexões diretas na coleção',
    },
    mirrorTitle: 'O Espelho da Decisão e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho do Decisor (Autodiagnóstico Rápido)
> 1. **A Fila Travada:** Quantas decisões **Tipo 2 (totalmente reversíveis)** estão paradas hoje na sua mesa há mais de uma semana esperando 100% de certeza, quando deveriam ter sido testadas em 24 horas com 70% das informações?
> 2. **A Porta de Mão Única:** Qual decisão **Tipo 1 (irreversível ou caríssima de reverter)** você está prestes a tomar neste mês sem ter escrito um memorando de 1 página e sem ter ouvido quem discorda?
>
> **O que fazer na próxima segunda-feira às 9h:** Pegue as 5 pendências que estão travando sua semana, classifique cada uma como **Tipo 1** ou **Tipo 2**, execute todas as Tipo 2 até o meio-dia e rode o protocolo **SPADE + Pré-Mortem** apenas na única decisão Tipo 1.`,
  },

  EK: {
    openingTitle: 'O chefe que não manda em ninguém: como mover clientes, talentos e investidores quando seu crachá não vale nada',
    openingBody: `Quando **Henrique** era gerente de engenharia em uma multinacional no Paraná, bastava enviar um e-mail convocando sua equipe ou um fornecedor homologado e oito pessoas apareciam na sala no horário marcado. Na primeira semana como fundador da sua própria startup — sem marca famosa, sem orçamento milionário e sem poder hierárquico sobre absolutamente ninguém —, ele precisou convencer um diretor de usina a abrir os dados de produção para um teste, um engenheiro sênior de IA a trocar um salário alto por risco, a própria esposa a apoiar um ano de aperto e um investidor a assinar o primeiro cheque. Nenhum deles devia obediência a Henrique.

Esse é o choque estrutural de todo fundador no dia 1: **você passa a ter responsabilidade total pelo resultado tendo zero autoridade formal sobre as pessoas de quem mais depende.**

Chamamos esse superpoder silencioso de **A Alavanca da Influência Assimétrica**: a capacidade de alinhar incentivos, enquadrar riscos (*framing*), construir prova social legítima e praticar escuta cirúrgica para que clientes, talentos, parceiros e familiares queiram caminhar na sua direção pelos motivos deles, e não porque você implorou.`,
    headingMap: {
      'A situação estrutural do fundador': 'O paradoxo do fundador: responsabilidade infinita com autoridade formal zero',
      'Os seis princípios de Cialdini no contexto do fundador': 'As 6 alavancas psicológicas de Cialdini aplicadas à venda, recrutamento e captação ética',
      'Framing: como a mesma informação gera decisões diferentes': 'A arte do Enquadramento (Framing): por que o medo de perder move o decisor 2x mais que a promessa de ganho',
      'Storytelling como ferramenta de influência': 'Narrativa que move capital e pessoas: estrutura de história para quem não tem tempo a perder',
      'Influência em situações específicas do fundador': 'Táticas de trincheira: convencendo o primeiro cliente cético, o primeiro talento sênior e o parceiro de canal',
      'Escuta ativa como fundamento da influência': 'Por que ouvir onde o sapato do outro aperta persuade mais do que qualquer argumento brilhante',
      'Quando a influência não funciona': 'Quando parar de tentar convencer: reconhecendo incentivos estruturalmente opostos',
      'Ética em persuasão': 'A linha vermelha entre persuasão de longo prazo e manipulação que destrói reputação',
      'Construção de credibilidade de longo prazo': 'Capital reputacional composto: por que cumprir micro-promessas abre portas em 5 anos',
      'Quando a influência falha: análise de padrões': 'Autópsia de um "não": por que seu pedido foi ignorado',
      'Métricas e sinais de desenvolvimento': 'Como medir se sua capacidade de mobilizar pessoas está crescendo',
      'Ver também': 'Conexões diretas na coleção',
    },
    mirrorTitle: 'O Espelho da Influência e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho da Persuasão (Autodiagnóstico Rápido)
> 1. **A Lente do Outro:** Na última proposta que você fez a um cliente ou candidato, você gastou 80% do tempo falando de como **a sua empresa é incrível** ou falando do **risco concreto que você tira das costas dele**?
> 2. **Redução de Atrito:** Quando você pede algo a um mentor, cliente ou parceiro, você entrega o caminho mastigado (um e-mail pronto para ele encaminhar em 15 segundos) ou joga trabalho nas costas dele?
>
> **O que fazer na próxima segunda-feira às 9h:** Pegue a mensagem ou proposta comercial mais importante que você vai enviar hoje e reescreva os dois primeiros parágrafos aplicando **Aversão à Perda + Especificidade** (*o que o destinatário perde toda semana mantendo o status quo*).`,
  },

  EW: {
    openingTitle: 'Escrita nebulosa é pensamento nebuloso: por que a clareza de um parágrafo vale mais que dez reuniões',
    openingBody: `Na fábrica da Amazon, Jeff Bezos proibiu apresentações de PowerPoint em reuniões executivas e instituiu o ritual silencioso dos memorandos de seis páginas (*6-pagers*). O motivo é simples: **em um slide com três tópicos soltos ("1. Escalar vendas; 2. Reduzir churn; 3. Usar IA"), qualquer ideia preguiçosa parece genial; mas quando você é obrigado a escrever frases completas com sujeito, verbo, causa e consequência, os furos do seu raciocínio ficam nus na página.**

Quando **Marina** assumiu a operação comercial e de relacionamento com investidores da startup que fundou com **Lucas**, ela percebeu que 70% dos retrabalhos da equipe e 90% dos *follow-ups* ignorados por clientes vinham do mesmo vício: textos prolixos, e-mails que escondiam o pedido principal no quarto parágrafo e mensagens de WhatsApp quebradas em doze linhas que ninguém conseguia processar.

No mundo real dos negócios, **a sua escrita é a interface pública do seu cérebro**. Dominar os três documentos vitais de um fundador — o *One-Pager* que abre portas, o *Memo de Decisão* que alinha o time e o *Investor/Client Update* que constrói confiança — aplicando o *Princípio da Pirâmide* de Barbara Minto (começar sempre pela conclusão) é a alavanca mais barata e poderosa que existe.`,
    headingMap: {
      'Os três documentos que todo fundador precisa dominar': 'As 3 armas escritas do fundador: o One-Pager, o Memorando de Decisão e o Update Mensal',
      'Comparação: os três documentos por situação': 'Qual documento sacar em cada batalha (e quanto tempo gastar em cada um)',
      'Princípios de escrita clara para negócios': 'A cirurgia da frase curta: Princípio da Pirâmide (BLUF), voz ativa e corte impiedoso de adjetivos',
      'Comunicação assíncrona como disciplina': 'Como substituir reuniões inúteis por escrita assíncrona que respeita o foco da equipe',
      'Email como ferramenta de negócios': 'A anatomia do e-mail frio e do follow-up que são respondidos em menos de 2 minutos',
      'Documentação como produto interno': 'Por que documentar processos cedo liberta você de responder a mesma pergunta cinquenta vezes',
      'Comunicação em crise por escrito': 'Como escrever quando tudo deu errado: assumindo o controle da narrativa sem rodeios',
      'Armadilhas': 'Os pecados capitais da escrita empresarial: enterrar a conclusão, jargão vazio e tom passivo-agressivo',
      'Ver também': 'Conexões diretas na coleção',
    },
    mirrorTitle: 'O Espelho da Escrita e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho da Página (Autodiagnóstico Rápido)
> 1. **O Teste da Primeira Linha (BLUF — Bottom Line Up Front):** Se alguém ler apenas as **duas primeiras frases** do último e-mail ou proposta que você enviou, essa pessoa sabe exatamente o que você quer e qual decisão precisa tomar, ou você gastou três parágrafos "aquecendo o assunto"?
> 2. **Corte de Adjetivos:** Seu texto diz *"temos uma solução inovadora, robusta e líder"* (adjetivos vazios que todo mundo ignora) ou diz *"reduzimos o tempo de fechamento de folha de 4 dias para 18 minutos em 34 empresas"* (fatos e números concretos)?
>
> **O que fazer na próxima segunda-feira às 9h:** Pegue o texto da sua página inicial, proposta comercial ou *One-Pager*, corte **30% das palavras**, troque todos os adjetivos por números verificáveis e coloque a conclusão principal na primeira frase do topo.`,
  },

  EX: {
    openingTitle: 'Ninguém lembra do seu décimo slide: como falar em público e vencer bancas quando você tem apenas cinco minutos',
    openingBody: `Quando **Henrique** subiu ao palco virtual para defender sua startup diante da banca avaliadora de um concorrido edital público de incubação GovTech no Paraná, ele tinha 10 minutos no cronômetro e 22 slides preparados. Apaixonado pela engenharia da solução, ele gastou os primeiros seis minutos explicando o contexto histórico do setor e a arquitetura técnica do sistema. Quando faltavam noventa segundos para o gongo tocar, ele ainda estava na metade da apresentação. Correu pelos slides finais atropelando as palavras e o tempo acabou antes que ele mostrasse o mais importante: **quais prefeituras já haviam validado a dor em campo, por que a equipe tinha capacidade institucional de implantar aquilo sem travar na TI pública e quais eram os marcos concretos dos próximos 12 meses.** A devolutiva da banca foi cirúrgica e implacável: o projeto ficou de fora das vagas não porque a tecnologia era ruim, mas porque o pitch simplificou demais a complexidade do problema e deixou todas as provas de execução de fora do tempo regulamentar.

Seja diante de uma banca de subvenção pública (Finep, FAPESP, Hub GovTech), de um comitê de compras corporativo ou de uma sala de Venture Capital, a regra física da comunicação oral é uma só: **a atenção humana cai em penhasco após os primeiros 90 segundos, e o avaliador não julga o que está na sua cabeça — ele julga apenas as evidências que você conseguiu provar dentro do relógio.**`,
    headingMap: {
      'Os três tipos de apresentação que o fundador precisa dominar': 'As 3 arenas de palco do fundador: o Pitch de Captação, a Demo de Vendas e o All-Hands com o Time',
      'Comparação: os tipos de apresentação por contexto': 'O mapa tático: como mudam o objetivo, a prova e o fechamento em cada arena',
      'Os elementos técnicos da boa apresentação': 'A engenharia da atenção: arco SCQA, um único argumento por slide e contraste visual',
      'Preparação para apresentação de alto impacto': 'O segredo do ensaio com cronômetro: por que improvisar em reunião cara é amadorismo',
      'Entrevista de mídia': 'Como falar com jornalistas e podcasts sem cair em armadilhas ou vazar estratégia',
      'Board presentation': 'Como conduzir uma reunião de Conselho: mandando os números antes e debatendo apenas os gargalos',
      'Apresentação para clientes grandes': 'Apresentando para o Comitê Enterprise: como fazer o cliente se ver dentro da história',
      'Comunicação não-verbal e presença': 'Voz, pausa e postura: por que a velocidade da sua fala denuncia sua insegurança',
      'Pitch cronometrado para bancas de editais, incubadoras, subvenção e Processos Seletivos Estruturados (PSE)': 'O Playbook de Banca de Edital (5 e 10 minutos): como gabaritar o barema dos avaliadores sem estourar o relógio',
      'Armadilhas': 'Onde grandes projetos perdem no gongo: estourar o tempo, simplificar o problema e esquecer as provas de validação',
      'Ver também': 'Conexões diretas na coleção',
    },
    mirrorTitle: 'O Espelho do Palco e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho da Apresentação (Autodiagnóstico Rápido)
> 1. **A Regra dos 80% do Tempo:** Se você tem uma apresentação de 10 minutos, você consegue entregar **todos os 10 blocos essenciais** (incluindo provas reais de validação, capacidade da equipe e próximos passos) em **8 minutos cravados**, deixando 2 minutos de margem de segurança?
> 2. **Títulos-Tese nos Slides:** Se alguém ler **apenas a frase de título no topo dos seus 10 slides** em sequência sem ouvir sua voz, a história inteira com números e provas faz sentido, ou seus títulos dizem apenas *"Problema"*, *"Solução"*, *"Equipe"*?
>
> **O que fazer na próxima segunda-feira às 9h:** Abra seu *pitch deck* atual, reescreva todos os títulos de slides como **afirmações completas com dados** (*headline assertions*) e grave-se no celular apresentando em 5 minutos cravados sem passar do segundo 300.`,
  },

  I: {
    openingTitle: 'A alavanca de Arquimedes de 2026: como dois fundadores com IA operam com a velocidade que antes exigia trinta pessoas',
    openingBody: `Em 2016, quando uma startup brasileira queria validar uma hipótese de mercado, construir um protótipo funcional, analisar trinta entrevistas de clientes, redigir rascunhos de contratos e produzir conteúdo de aquisição, ela precisava contratar pelo menos seis pessoas e gastar R$ 80 mil por mês durante meio ano. Em 2026, **Lucas e Marina** fazem exatamente esse mesmo ciclo entre a manhã de segunda-feira e a tarde de quarta-feira — mantendo a folha de pagamento em zero enquanto não comprovam o *Product-Market Fit*.

Como Jason Fried e DHH escreveram em *Rework*, o segredo das empresas mais lucrativas e resilientes não é contratar exércitos de pessoas cedo demais — é manter a estrutura pequena, ágil e letal. A Inteligência Artificial Generativa é o maior multiplicador de força da história para quem sabe usá-la como **exoesqueleto operacional em cada uma das 21 fases da jornada**, mas também é a forma mais rápida de produzir lixo em escala industrial para o fundador preguiçoso que tenta terceirizar o próprio pensamento crítico e o contato humano com o cliente.`,
    headingMap: {
      'Fases 0 a 3 — Preparação, Ideia, Articulação e Teoria': 'Nas Fases 0 a 3 (Ideação): usando IA como sparring socrático implacável para furar sua tese',
      'Fases 4 e 5 — Descoberta do Problema e Pesquisa com Usuários': 'Nas Fases 4 e 5 (Descoberta): síntese de padrões em 30 entrevistas (sem jamais terceirizar a escuta humana)',
      'Fase 6 — Mapeamento de Mercado e Concorrência': 'Na Fase 6 (Mercado): radiografia competitiva e análise de reviews de concorrentes em minutos',
      'Fases 7 e 8 — Hipóteses e Experimentos de Validação': 'Nas Fases 7 e 8 (Experimentos): gerando landing pages, copies e variações de teste em horas',
      'Fases 9 e 10 — Ideação, Prototipagem e Testes de Solução': 'Nas Fases 9 e 10 (Prototipagem): do rascunho de fluxo ao código funcional no mesmo dia',
      'Fases 11 e 12 — MVP e Validação do Modelo de Negócio': 'Nas Fases 11 e 12 (MVP): operação concierge assistida por agentes antes de automatizar tudo',
      'Fases 13 a 18 — Product-Market Fit, Escala e Estruturação': 'Nas Fases 13 a 18 (Escala): automação de backoffice, vendas, engenharia e revisão jurídica',
      'Fases 19 e 20 — Reinvenção e Estratégia de Saída (Exit)': 'Nas Fases 19 e 20 (Maturidade e Exit): simulação de cenários, preparação de Data Room e Q&A de M&A',
      'Usos transversais (em qualquer fase)': 'Alavancas transversais para qualquer segunda-feira do ano',
      'Armadilhas a evitar ao usar IA generativa': 'O pecado mortal: usar IA para inventar pesquisas de cliente falsas ou enviar spam genérico',
      'Stack recomendado (minimalista) para empreendedor iniciante em 2026': 'O kit enxuto de ferramentas para começar sem inflar assinaturas',
    },
    mirrorTitle: 'O Espelho da Alavancagem com IA e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho da IA (Autodiagnóstico Rápido)
> 1. **Amplificador vs. Muleta:** Você está usando IA para comprimir 40 horas de trabalho braçal (transcrição, código boilerplate, pesquisa regulatória) em 2 horas, ou está usando IA para evitar o desconforto de ligar para clientes reais?
> 2. **Regra da Folha Enxuta:** Antes de abrir uma vaga para contratar mais um analista júnior, você já tentou desenhar um fluxo automatizado com IA que resolva 80% daquela rotina?
>
> **O que fazer na próxima segunda-feira às 9h:** Pegue a sua **Declaração Inicial da Ideia (DII)** e a sua **Árvore de Teoria** e peça a um modelo de raciocínio profundo que atue como um investidor cético e um cliente ocupado, listando as 5 falhas lógicas mais prováveis da sua tese.`,
  },

  CT: {
    openingTitle: 'O segundo cérebro do fundador: transformando modelos de IA em conselheiros céticos, analistas financeiros e red teams',
    openingBody: `Sozinha no consultório às 20h em Belo Horizonte, a **Dra. Camila** não tem um CFO de R$ 35 mil por mês, nem um diretor jurídico, nem um estrategista de precificação sentado ao lado. Mas, antes de assinar o contrato de locação do seu segundo ponto comercial, ela sobe o PDF da minuta contratual, a planilha de fluxo de caixa dos últimos doze meses e as regras tributárias do seu município em um projeto dedicado no seu co-piloto de IA, com uma instrução cirúrgica: *"Atue como um advogado imobiliário empresarial brasileiro e como um CFO conservador. Aponte as 5 cláusulas de multa e reajuste que podem quebrar meu caixa se a obra atrasar 90 dias e simule o impacto no meu ponto de equilíbrio."* Em quatro minutos, ela descobre uma cláusula de renúncia ao direito de preferência e uma trava de carência que teriam lhe custado R$ 140 mil.

A diferença entre o fundador que brinca de fazer perguntas soltas num chat e o fundador que instala um **Sistema de Co-Piloto com Contexto Permanente** é abismal. Quando você alimenta a IA com os documentos vivos da sua empresa (sua DII, sua Árvore de Teoria, seus números reais de *unit economics* e suas restrições) e proíbe a máquina de ser bajuladora, você ganha um comitê executivo disponível 24 horas por dia pelo custo de um almoço mensal.`,
    headingMap: {
      'O estado de abril de 2026': 'Onde estamos em 2026: da conversa solta aos projetos com memória, agentes e execução de código',
      'Casos de uso de alto ROI para o fundador': 'Os 7 casos de uso que devolvem 10 horas por semana para a agenda do fundador',
      'Workflows que valem adotar em 2026': 'Rituais práticos: como configurar seu espaço de trabalho com contexto fixo da empresa',
      'Armadilhas frequentes': 'Quando o co-piloto mente com confiança: alucinação jurídica, bajulação algorítmica e vazamento de dados',
      'Para fundador que está começando a usar IA sériamente': 'O plano de voo das primeiras duas semanas para dominar a ferramenta',
    },
    mirrorTitle: 'O Espelho do Co-Piloto e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho do Co-Piloto (Autodiagnóstico Rápido)
> 1. **Contexto Vivo:** Você já tem um Projeto/Workspace fixo no seu modelo de IA contendo sua DII, sua planilha de custos e o perfil do seu ICP, ou você começa toda conversa do zero perdendo tempo?
> 2. **Vacina contra Bajulação:** Suas instruções exigem explicitamente que a IA aponte furos, critique premissas e nunca concorde por educação?
>
> **O que fazer na próxima segunda-feira às 9h:** Crie hoje o **"Projeto [Nome da Sua Empresa] — Conselho Cético"** no seu assistente de IA, suba os documentos das Fases 0 a 3 e adicione no prompt de sistema a regra: *"Nunca valide minhas ideias por cortesia; aponte sempre os riscos de 2ª ordem, falhas matemáticas e pontos cegos."*`,
  },

  AK: {
    openingTitle: 'O pedágio do ecossistema: quando uma aceleradora ou edital multiplica sua velocidade (e quando rouba 10% da sua empresa por café e crachá)',
    openingBody: `Quando **Lucas e Marina** abriram o CNPJ da startup, receberam em menos de um mês três convites tentadores: uma aceleradora privada desconhecida que pedia **12% de participação societária (*equity*)** em troca de R$ 100 mil e "mentorias exclusivas"; um programa de inovação aberta de um grande banco sem tomada de participação; e um edital de subvenção econômica estadual de R$ 300 mil a fundo perdido. Se Lucas tivesse assinado o primeiro contrato no calor da empolgação, teria avaliado sua empresa em míseros R$ 833 mil e entregado um pedaço irreversível do *cap table* — um erro que bloquearia rodadas sérias de *Seed* no futuro. Em vez disso, Marina ligou para quatro ex-participantes do programa, descobriu que as mentorias eram palestras genéricas e recusou o acordo, focando na subvenção não-diluitiva e no piloto comercial direto com o banco.

No Brasil, o ecossistema de incubadoras, aceleradoras, hubs corporativos (Cubo, InovaBra, Distrito, Porto Digital, ACATE) e editais públicos (Finep, FAPs, SEBRAE, programas GovTech) pode ser uma **catapulta extraordinária de distribuição, selo institucional e capital barato** — ou pode ser um **teatro de eventos** que consome seis meses da sua atenção em troca de fotos no palco enquanto seu caixa seca.`,
    headingMap: {
      'O quê': 'O mapa real do ecossistema brasileiro: quem é quem entre aceleradoras, incubadoras, hubs e editais',
      'Por quê': 'Quando entrar em um programa destrava portas que levariam dois anos para abrir no frio',
      'Quando': 'O timing certo: por que entrar cedo demais distrai e entrar tarde demais custa caro',
      'Quem': 'Quem decide e como separar mentores operadores de "consultores de palco"',
      'Como mapear programas por categoria': 'Radiografia completa: Y Combinator, Latitud, Antler, Cubo, Porto Digital, FAPESP PIPE, Finep e Hubs Setoriais',
      'Como avaliar uma oferta': 'A matemática fria do Equity: quando ceder 5% a 7% vale uma fortuna e quando 2% já é um assalto',
      'Estratégia de aplicação': 'Como vencer processos seletivos e bancas técnicas: engenharia reversa do edital e dossiê de provas',
      'Métricas': 'Como medir o retorno real (ROI) de cada hora gasta em programas e hubs',
      'Definição de sucesso': 'Sinais concretos de que o programa pagou a conta em clientes, talento ou capital',
      'Armadilhas': 'O turismo de eventos, o cap table sujo e os pilotos corporativos que nunca viram contrato',
    },
    mirrorTitle: 'O Espelho do Ecossistema e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho das Aceleradoras e Editais (Autodiagnóstico Rápido)
> 1. **A Regra de Ouro do Equity:** Alguém está pedindo participação na sua empresa sem colocar dinheiro vivo na conta ou pagando um valuation que dilui mais de 7% por menos de R$ 300 mil? Se sim, fuja — *cap table* manchado no início afasta bons fundos depois.
> 2. **Turismo de Crachá:** Quantas horas no último mês você gastou em coquetéis, *demo days* e bancas onde **nenhum cliente pagante do seu ICP** estava presente?
>
> **O que fazer na próxima segunda-feira às 9h:** Selecione no máximo **2 programas ou editais não-diluitivos** (ou de primeiríssima linha) para o seu semestre, faça *reference check* com 3 fundadores de turmas anteriores em ligação fechada e diga "não" a todo o resto para proteger seu tempo de venda e produto.`,
  },

  AL: {
    openingTitle: 'Ninguém constrói nada relevante sozinho: como montar seu conselho informal de trincheira sem colecionar "advisors zumbis"',
    openingBody: `No primeiro ano da sua rede de clínicas em Belo Horizonte, a **Dra. Camila** cometeu um erro clássico: convidou um executivo famoso do setor hospitalar para ser seu *advisor*, prometendo verbalmente 1% da empresa só para colocar a foto dele na apresentação institucional. Resultado? Em doze meses, o executivo apareceu em apenas um almoço, deu conselhos genéricos que serviam para um hospital de 500 leitos (mas quebrariam uma clínica enxuta) e nunca abriu uma única porta comercial. No segundo ano, Camila mudou completamente a estratégia: mapeou três operadores que estavam apenas **dois degraus à frente dela** — uma fundadora que havia escalado de 1 para 12 clínicas em São Paulo, um contador especialista em tributação médica e um gestor de tráfego local — e estabeleceu reuniões cirúrgicas de 45 minutos a cada trimestre com perguntas enviadas 48 horas antes. Uma única dica da fundadora paulista sobre negociação de insumos odontológicos economizou R$ 180 mil no ano seguinte.

Reid Hoffman e Ben Casnocha mostraram em *The Startup of You* que o capital humano e a rede de confiança de um fundador não nascem em coquetéis distribuindo cartões — **nascem quando você aborda operadores reais com problemas específicos, executa o que eles recomendaram em duas semanas e fecha o loop mostrando o resultado.**`,
    headingMap: {
      'O quê': 'A arquitetura do seu capital humano: a diferença real entre Mentor, Advisor Formal, Coach e Par de Trincheira',
      'Por quê': 'Como comprimir cinco anos de tentativa e erro em uma conversa de 45 minutos com quem já tem a cicatriz',
      'Quando': 'Como a sua roda de conselheiros precisa mudar quando a empresa passa de R$ 0 para R$ 10M e R$ 100M',
      'Quem': 'O filtro "Dois Degraus Acima": por que operadores com cicatriz recente valem mais que celebridades distantes',
      'Como': 'Do primeiro e-mail frio ao contrato FAST: como atrair, conduzir e recompensar pessoas muito mais experientes que você',
      'O problema do advisor zumbi': 'Como evitar o "Advisor de Slide": vesting obrigatório, escopo claro e demissão educada de quem sumiu',
      'Métricas': 'Indicadores de uma rede viva e de alta reciprocidade',
      'Definição de sucesso': 'Como saber se o seu conselho informal está realmente destravando gargalos',
      'Armadilhas': 'Terceirizar decisões para mentores, dar equity sem cliff e esquecer de fechar o loop de gratidão',
    },
    mirrorTitle: 'O Espelho da Rede e o Ritual de Segunda-Feira',
    mirrorBody: `> [!tip] O Espelho do Capital Humano (Autodiagnóstico Rápido)
> 1. **A Regra dos 5 Nomes:** Quem são as **três pessoas com cicatriz real de operação** para quem você pode mandar um áudio no WhatsApp hoje às 18h quando tiver uma dúvida crítica de vendas, caixa ou produto?
> 2. **Fechamento de Loop:** Da última vez que alguém mais experiente te deu um conselho ou fez uma introdução comercial, você voltou 15 dias depois com uma mensagem de 5 linhas contando exatamente o que executou e qual foi o resultado?
>
> **O que fazer na próxima segunda-feira às 9h:** Identifique **3 operadores brasileiros** que estão exatamente dois degraus à frente do seu estágio atual e envie o e-mail curto de 4 frases deste capítulo pedindo 20 minutos para fazer 3 perguntas específicas sobre um obstáculo que eles já venceram.`,
  },
};

module.exports = { NARRATIVE_VOL1 };


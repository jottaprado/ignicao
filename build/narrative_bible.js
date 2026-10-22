/**
 * IGNIÇÃO v5.0 — A Bíblia Narrativa e o Motor de Transformação Literária
 *
 * Transforma a experiência de leitura dos 10 volumes:
 *  - Substitui o antigo formato de "almanaque/verbete" pela arquitetura de 4 Atos Narrativos + Oficina de Trincheira.
 *  - Apresenta os 4 fundadores-arquétipos brasileiros recorrentes (Lucas & Marina, Dra. Camila, Henrique, Rafael & Bia).
 *  - Remove os andaimes enciclopédicos redundantes ("O que este capítulo cobre", "Quando usar", "Quem envolve",
 *    "Definição de sucesso", "Perguntas a responder", "Ver também", caixas de resumo repetidas e "Leitura adicional" avulsa).
 *  - Converte os subtítulos restantes em títulos-tese provocativos e conversacionais inspirados nos 10 maiores clássicos de negócios.
 *  - Reescreve a moldura dos 164 Frameworks, 20 Canvases e 39 Templates no tom de consultor ao lado do dono (estilo Traction).
 */

const NOTA_DO_AUTOR_V5 = `## Nota do autor

Este livro começou como um caderno de campo aberto às onze da noite. Uma cicatriz anotada aqui, uma conta que não fechou ali, uma pergunta difícil que eu gostaria que alguém tivesse me feito seis meses antes de eu descobrir a resposta pelo caminho mais caro.

Durante muito tempo, resisti à ideia de publicar essas notas. Existem centenas de livros de negócios nas livrarias, muitos escritos no Vale do Silício por bilionários que operam com custo de capital próximo de zero, segurança jurídica previsível e clientes que compram software pelo cartão corporativo em cinco minutos. Só que quem tenta construir uma empresa séria no Brasil descobre rápido que o nosso jogo tem outra gravidade. Aqui você precisa validar produto e conquistar clientes enquanto desvia da Selic em dois dígitos, de um ISS que ainda muda de cidade para cidade enquanto a transição da Reforma Tributária e da NFS-e nacional (LC 214/2025) não se completa, de passivos trabalhistas ocultos, de ciclos de pagamento de noventa dias e do peso de quem responde com o próprio CPF.

Na primeira versão deste projeto, cometi o erro de organizar tudo como se fosse uma enciclopédia fria, cheia de verbetes, definições formais e fichas técnicas. Mas negócios reais não acontecem dentro de um dicionário. **Negócios acontecem numa terça-feira chuvosa quando o seu melhor cliente ameaça cancelar, quando o seu cofundador trava na conversa difícil ou quando você olha para o extrato bancário e precisa decidir entre cortar custos ou dobrar a aposta.**

Por isso, reconstruí inteiramente esta obra na tradição dos livros que mudaram a minha própria cabeça como fundador. De **Michael Gerber** (*O Mito do Empreendedor*), trouxe a conversa direta, olho no olho, e a compreensão de que saber fazer o trabalho técnico não é saber construir uma empresa. De **Eric Ries** (*A Startup Enxuta*) e **Peter Thiel** (*De Zero a Um*), trouxe o ceticismo científico contra o achismo e as perguntas contraintuitivas que desmontam o senso comum. De **Jason Fried e DHH** (*Rework*), trouxe a permissão libertadora para construir negócios enxutos, lucrativos e sem teatro corporativo.

Já para a etapa de manter a operação de pé e evoluir no longo prazo, bebi na engenharia de processos de **Andy Grove** (*High Output Management*), no foco em um nicho de cabeça de praia de **Geoffrey Moore** (*Atravessando o Abismo*) e nos rituais práticos de segunda-feira às nove da manhã de **Gino Wickman** (*Traction*), somados à franqueza direta de **Ben Horowitz** (*O Lado Difícil das Situações Difíceis*), **Jim Collins** (*Empresas Feitas para Vencer*) e **Clayton Christensen** (*O Dilema da Inovação*) sobre o medo, as demissões, as crises de caixa e os paradoxos de crescer sem destruir o que fez você vencer.

Mais importante: você não fará esta leitura sozinho. Além de centenas de casos reais de empresas brasileiras e globais (do Nubank, WEG, TOTVS, iFood e Tractian a negócios do interior que nunca saíram no jornal), você acompanhará ao longo dos volumes a jornada viva de **quatro fundadores-arquétipos brasileiros** (**Lucas & Marina**, **Dra. Camila**, **Henrique** e **Rafael & Bia**), enfrentando exatamente os mesmos dilemas que tiram o seu sono.

Cada capítulo e fase deste livro agora respira em **dois tempos**:
1. **A Narrativa Viva:** abro sempre no meio da tensão real, nunca com definições de manual, disseco a física do problema, dou nome às armadilhas recorrentes e fecho com **O Espelho** (autodiagnóstico direto, retomando o desfecho do arquétipo da abertura) e **O Ritual de Segunda-Feira**;
2. **A Oficina de Trincheira (Caderno de Campo):** nas fases operacionais e nos capítulos de aprofundamento, você encontra as ferramentas, *frameworks*, *canvases* com reconstruções didáticas e *templates* prontos para abrir na mesa com os seus sócios e executar imediatamente, impressos uma única vez na coleção inteira, exatamente na etapa em que entram em ação.

Eu não escrevi este livro de um camarote distante. Escrevi sentado à mesma mesa de trabalho em que você está agora, fechando as contas do mês e decidindo o próximo passo. Leia os capítulos corridos para mudar a sua forma de enxergar o jogo; abra a Oficina de Trincheira quando precisar agir sob pressão. Se uma única página aqui evitar que você queime dois anos de vida na ideia errada, no sócio errado ou no contrato errado, cada linha terá valido a pena.

Um bom trabalho, e que estas páginas sirvam bem à sua empresa.

*João Prado*`;

const APRESENTACAO_ARQUETIPOS_MD = `---

## Os 4 Fundadores que Acompanham Você Nesta Jornada (O Espelho Brasileiro)

Em *O Mito do Empreendedor*, Michael Gerber criou **Sarah**, a dona de uma confeitaria que amava assar tortas e acabou virando escrava da própria loja. Todo leitor se enxerga em Sarah porque conceitos abstratos só ganham alma quando têm rosto, boleto para pagar e medo de errar.

Ao longo dos **Volumes 1 a 10**, além das histórias reais de grandes empresas brasileiras e mundiais, você acompanhará de perto a evolução, os tropeços, as brigas societárias, os pivôs e as vitórias de **quatro arquétipos que representam a vida real do empreendedor brasileiro** (com arco narrativo contínuo nos Volumes 1 a 9 e aplicação direta nos playbooks setoriais do Volume 10):

| Arquétipo | Quem São e Onde Operam | A Dor Inicial (Volumes 1 a 4, *Criar*) | O Desafio de Escala e Saída (Volumes 5 a 9, *Manter e Evoluir*) |
| :--- | :--- | :--- | :--- |
| **1. Lucas & Marina**<br/>*(SaaS B2B & AI-Native)* | **Lucas** (29, ex-engenheiro sênior de banco em SP, brilhante mas tentado a programar escondido) e **Marina** (31, comercial nata e pragmática, baseada em Florianópolis). | Quase quebram construindo um produto cheio de funcionalidades que ninguém pediu; aprendem a ouvir o cliente no *Mom Test* e financiam o MVP vendendo um *Serviço Produtizado* antes de escalar o SaaS. | Focam sua plataforma de tesouraria preditiva e *Embedded Finance* (serviços financeiros embarcados) em distribuidores e empresas médias, enfrentam *churn* (cancelamento de clientes), contratam o primeiro VP de Vendas, negociam *Series A* em São Paulo e recebem uma proposta de **M&A estratégico** (fusão e aquisição) no Volume 9. |
| **2. Dra. Camila**<br/>*(Economia Real, Saúde & Serviços)* | **Camila** (34, cirurgiã-dentista especializada em reabilitação oral em Belo Horizonte que abriu clínica própria e corre o risco clássico de virar refém da própria cadeira 14h por dia). | Mistura contas de casa com o CNPJ, compra equipamento caro por impulso (*custo afundado*) e tem medo de cobrar o que vale até dominar margem de contribuição e processos. | Transforma o consultório em máquina autogerenciável (*estilo Traction/Grove*), expande via **Franquias (Lei 13.966/2019)**, passa o bastão para um CEO profissional com *Phantom Shares* (participação fantasma liquidada em caixa) e constrói uma **Cash Cow (geradora de dividendos) + Holding Familiar** no Volume 9. |
| **3. Henrique**<br/>*(Industrial, Agro & B2G / GovTech)* | **Henrique** (38, engenheiro mecânico de Curitiba com forte trânsito no interior do Paraná e Mato Grosso, vendendo hardware e software para usinas, indústrias e prefeituras). | Sofre com discursos técnicos cheios de jargão, leva "não" em banca de edital GovTech por não provar validação institucional e quase morre no purgatório de pilotos gratuitos (*POCs, provas de conceito*). | Aprende a vender para comitês complexos de seis cadeiras, usa subvenção **Finep, BNDES e EMBRAPII** e importação da Ásia (**TTD 409**), faz o **Spin-off** (cisão societária) de uma unidade interna e consolida concorrentes via **M&A Buy-Side** (aquisição estratégica de outras empresas). |
| **4. Rafael & Bia**<br/>*(Varejo, D2C, Comércio & Marketplace)* | **Rafael** (27, criativo de marketing, com sede comercial no Recife) e **Bia** (28, engenheira de produção, liderando o centro de distribuição e operações em Goiânia). | Iludem-se com faturamento bruto alto movido a tráfego pago caro, sofrem com ruptura de estoque e descobrem o peso da cadeia logística e tributária brasileira. | Sobrevivem a uma crise severa de capital de giro e à transição da **Reforma Tributária (IBS/CBS)**, lideram um *turnaround* (reestruturação operacional) difícil com corte de custos e constroem uma marca *omnichannel* (integrando canais físicos e digitais) com retenção real. |`;

/**
 * Reescreve os subtítulos internos dos 164 Frameworks (BG) para o tom de consultor ao lado do dono (Traction)
 * e enxuga as subseções finais redundantes ("Quando não usar" e "Leitura adicional").
 */
function transformFrameworkToOficina(content) {
  let cleaned = content
    .replace(/\n##### (?:Quando n[ãa]o usar|Leitura adicional)\n[\s\S]*?(?=\n##### |$)/gi, '')
    .trim();

  return cleaned
    .replace(/^##### Origem$/gim, '##### De onde vem a ferramenta (e por que sobreviveu ao filtro do tempo)')
    .replace(/^##### O que [ée]$/gim, '##### A mecânica central (sem jargão)')
    .replace(/^##### Princ[íi]pios \/ estrutura$/gim, '##### As regras do jogo')
    .replace(/^##### Princ[íi]pios$/gim, '##### As regras do jogo')
    .replace(/^##### Como aplicar do jeito certo$/gim, '##### Como rodar na segunda-feira às 9h com seu time')
    .replace(/^##### Como aplicar$/gim, '##### Como rodar na segunda-feira às 9h com seu time')
    .replace(/^##### Exemplo aplicado$/gim, '##### Na trincheira real: como isso funciona na prática')
    .replace(/^##### Erros comuns(?: a evitar)?$/gim, '##### Onde o papel aceita tudo (armadilhas de execução)')
    .replace(/^##### Quando usar$/gim, '##### O gatilho exato para sacar este framework');
}

/**
 * Reescreve os subtítulos internos dos 20 Canvases (CZ) para o tom da Oficina de Trincheira
 * e remove subseções finais redundantes.
 */
function transformCanvasToOficina(content) {
  let cleaned = content
    .replace(
      /\n##### (?:Quando n[ãa]o usar|Conex[ãa]o com outros canvases|Leitura adicional)\n[\s\S]*?(?=\n##### |$)/gi,
      ''
    )
    .trim();

  return cleaned
    .replace(/^##### Origem$/gim, '##### Por que este quadro visual foi criado')
    .replace(/^##### O que [ée]$/gim, '##### A anatomia visual de uma página')
    .replace(/^##### Quando usar$/gim, '##### O momento exato de colocar este canvas na parede')
    .replace(/^##### Princ[íi]pios$/gim, '##### As regras de ouro para preencher sem se enganar')
    .replace(/^##### Como aplicar$/gim, '##### Passo a passo na parede da sala (30 a 60 minutos)')
    .replace(/^##### Erros comuns(?: a evitar)?$/gim, '##### Onde os fundadores mentem para si mesmos neste canvas')
    .replace(
      /^##### Exemplo (?:brasileiro )?preenchido\s*[—–-]\s*(.+)$/gim,
      '##### Exemplo brasileiro preenchido: $1 (reconstrução didática com base em dados públicos)'
    );
}

const DEFAULT_HEADING_FALLBACKS = {
  'O que esta fase cobre': 'O campo de batalha desta etapa: o que realmente está em jogo aqui',
  'O que este capítulo cobre': 'O que realmente está em jogo neste capítulo (e por que você não pode terceirizar isso)',
  'O quê': 'A anatomia real do problema: separando o sinal do ruído',
  'O QUE É': 'A anatomia real do problema: separando o sinal do ruído',
  'POR QUE': 'Por que ignorar esta disciplina cobra juros compostos no seu caixa',
  'Por quê': 'Por que ignorar esta disciplina cobra juros compostos no seu caixa',
  'Por que importa': 'Por que esta decisão muda a trajetória do negócio',
  'Quando usar': 'O gatilho de ação: o momento exato de puxar o freio e executar',
  'Quando aplicar': 'O gatilho de ação: quando entrar em campo (e quando esperar)',
  'Quando': 'O relógio operacional: em qual segundo da jornada esta decisão bate à porta',
  'Quem envolve': 'Quem senta à mesa: decisores reais, operadores e quem não deve dar palpite',
  'Quem envolver': 'Quem senta à mesa: decisores reais, operadores e quem não deve dar palpite',
  'Quem': 'As cadeiras da sala: quem executa, quem aprova e quem responde pelo resultado',
  'Como executar': 'Mão na massa na trincheira: o passo a passo sem atalhos',
  'COMO': 'Mão na massa na trincheira: a engenharia da execução passo a passo',
  'Como': 'Mão na massa na trincheira: a engenharia da execução passo a passo',
  'PERGUNTAS A RESPONDER': 'O interrogatório da verdade: as perguntas que você não pode varrer para debaixo do tapete',
  'SAÍDA DESTA FASE': 'A catraca de saída: as provas concretas de que você ganhou o direito de avançar',
  'Armadilhas': 'Onde os fundadores inteligentes morrem na praia: as ciladas clássicas desta etapa',
  'ARMADILHAS': 'Onde os fundadores inteligentes morrem na praia: as ciladas clássicas desta etapa',
  'Métricas': 'O painel de controle: os únicos números que separam progresso real de teatro',
  'Definição de sucesso': 'Como se parece a vitória real quando a poeira baixa',
  'Checklist': 'Checklist de execução prática',
  'FERRAMENTAS DESTA FASE': 'Abrindo a Oficina de Trincheira desta Fase',
  'EXEMPLO PRÁTICO': 'Na trincheira real: como esta etapa ganha vida em um caso concreto',
  'QUANDO CONSIDERAR': 'O gatilho estratégico: quando vale a pena entrar neste jogo (e quando passar longe)',
  'RELAÇÃO COM O RESTO DO MANUAL': 'Como esta decisão se conecta ao resto da sua arquitetura de negócio',
  'CHECKLIST PARA DECIDIR SE VALE TENTAR': 'O filtro de bolso antes de comprometer tempo e caixa',
  'EXPANSÃO, PRODUCT-LED GROWTH (PLG)': 'Quando o próprio produto vende: a mecânica real do Product-Led Growth (PLG)',
  'CHECKLIST TRANSVERSAL DE VENDAS': 'A auditoria comercial de bolso: o que checar antes de escalar o time de vendas',
  'TAXONOMIA, NÃO TUDO É SAAS B2B': 'Nem toda recorrência é SaaS B2B: a anatomia dos diferentes motores de assinatura',
  'MÉTRICAS AVANÇADAS, ALÉM DE ARR': 'Muito além do ARR: os indicadores que revelam a saúde real da receita recorrente',
  'DESENHO DE PLANOS (PRICING PACKAGING)': 'A arquitetura de planos e pacotes: como empacotar valor sem confundir o comprador',
  'GOVERNANÇA DE CHURN': 'Estancando o balde furado: rituais e governança rigorosa contra o churn',
  'EXPANSÃO COMO MOTOR DE CRESCIMENTO': 'Crescer dentro de casa: como fazer a carteira atual pagar o próximo ciclo de escala',
  'TRANSIÇÃO DE TRANSACIONAL PARA RECORRENTE': 'A travessia da venda avulsa para a assinatura: como migrar sem quebrar o caixa no meio',
  'QUANDO SUBSCRIPTION NÃO SERVE': 'Quando forçar assinatura é um erro: negócios que lucram mais no modelo transacional',
  'GOVERNANÇA FINANCEIRA DE SUBSCRIPTION': 'A contabilidade real da recorrência: receita diferida, caixa antecipado e disciplina financeira',
  'FERRAMENTAS': 'A caixa de ferramentas práticas deste capítulo',
  'VALIDADE E REAVALIAÇÃO': 'Prazo de validade: quando jogar o plano antigo fora e recalibrar a rota',
  'VER TAMBÉM': 'Ver também',
  'CHECKLIST OPERACIONAL': 'O ritual de bolso: checklist operacional para rodar sem esquecer o básico',
  'CONTEXTO BRASIL': 'A gravidade brasileira: o que muda quando você aplica isso no Brasil',
  'PADRÕES TRANSVERSAIS NOS 12 CASOS': 'O que os 12 casos têm em comum: os padrões estruturais que se repetem',
  'MÉTRICAS E AUTOAVALIAÇÃO': 'O termômetro da maturidade: como medir onde você está hoje sem se enganar',
};

/**
 * Remove subseções H3 puramente enciclopédicas ("O que este capítulo cobre", "Quando usar",
 * "Quem envolve", "Definição de sucesso", "PERGUNTAS A RESPONDER", "FERRAMENTAS DESTA FASE",
 * "Ver também", "Conexões", "QUANDO", "QUEM", etc.) que duplicam a abertura narrativa e o fechamento.
 */
const REDUNDANT_ALMANAC_H3_RE =
  /^(?:O que (?:est[ea]|ess[ea]) (?:fase|cap[íi]tulo|ap[êe]ndice) cobre|Quando (?:usar(?: ess[ea] (?:cap[íi]tulo|ap[êe]ndice))?|aplicar|considerar|atuar|estruturar)|Quando|QUANDO|QUANDO CONSIDERAR|Quem (?:envolve|envolver|responde)|Quem|QUEM|QUEM PARTICIPA|Defini[çc][ãa]o de sucesso(?: do modelo)?|DEFINI[ÇC][ÃA]O DE SUCESSO DO MODELO|PERGUNTAS A RESPONDER|FERRAMENTAS DESTA FASE|Ap[êe]ndices Operacionais desta Etapa|Ver tamb[ée]m|VER TAMB[ÉE]M|Conex[ãa]o com outros (?:cap[íi]tulos|ap[êe]ndices)|Conex[õo]es (?:diretas na cole[çc][ãa]o|no livro)|Rela[çc][ãa]o com (?:outros (?:cap[íi]tulos|ap[êe]ndices) e fases|o resto do manual)|RELA[ÇC][ÃA]O COM O RESTO DO MANUAL)$/i;

function stripRedundantAlmanacH3Sections(body) {
  const lines = body.split('\n');
  const out = [];
  let inFence = false;
  let skipping = false;

  for (const line of lines) {
    if (line.trim().startsWith('```')) inFence = !inFence;
    if (!inFence && /^#{1,3}\s/.test(line)) {
      if (line.startsWith('### ')) {
        const hTitle = line.slice(4).trim();
        skipping = REDUNDANT_ALMANAC_H3_RE.test(hTitle);
      } else {
        skipping = false;
      }
    }
    if (!skipping) {
      out.push(line);
    }
  }

  return out
    .join('\n')
    .replace(/(?:\n+---){2,}/g, '\n\n---')
    .replace(/\n{3,}/g, '\n\n');
}

function buildArchetypeArcEnrichment(sectionKey, openingBody, mirrorBody) {
  let enrichedOpening = (openingBody || '').trim();
  let enrichedMirror = (mirrorBody || '').trim();

  const hasLM = /\b(?:Lucas|Marina)\b/.test(enrichedOpening);
  const hasCamila = /\bCamila\b/.test(enrichedOpening);
  const hasHenrique = /\bHenrique\b/.test(enrichedOpening);
  const hasRB = /\b(?:Rafael|Bia)\b/.test(enrichedOpening);

  let chosen = null;
  if (hasLM) chosen = 'LM';
  else if (hasCamila) chosen = 'CAMILA';
  else if (hasHenrique) chosen = 'HENRIQUE';
  else if (hasRB) chosen = 'RB';
  else {
    // Se a abertura usava apenas caso externo ou fundador secundário, conecta a um dos 4 arquétipos
    const hash = Array.from(String(sectionKey)).reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 4;
    if (hash === 0) {
      chosen = 'LM';
      enrichedOpening +=
        '\n\nNa mesma semana, **Lucas e Marina** enfrentavam exatamente esse dilema na operação da sua plataforma B2B entre São Paulo e Florianópolis: ou traduziam essa tese em critério objetivo de produto e vendas, ou continuariam queimando caixa em esforço disperso.';
    } else if (hash === 1) {
      chosen = 'CAMILA';
      enrichedOpening +=
        '\n\nEm Belo Horizonte, a **Dra. Camila** vivia o mesmo ponto de inflexão na sua rede de reabilitação oral: continuar tratando o problema no improviso diário ou instalar um protocolo claro que funcionasse sem depender da sua presença física em cada sala.';
    } else if (hash === 2) {
      chosen = 'HENRIQUE';
      enrichedOpening +=
        '\n\nEm Curitiba, **Henrique** viu esse exato gargalo travar a expansão dos seus sistemas de telemetria industrial e contratos públicos: sem estruturar essa decisão com método, cada novo contrato parecia recomeçar do zero.';
    } else {
      chosen = 'RB';
      enrichedOpening +=
        '\n\nEntre o escritório no Recife e o galpão em Goiânia, **Rafael e Bia** sentiram na pele a mesma pressão sobre a margem e o capital de giro da marca: ou corrigiam a arquitetura operacional agora, ou o crescimento do faturamento só aceleraria o desgaste do caixa.';
    }
  }

  const mirrorHasArchetype = /\b(?:Lucas|Marina|Camila|Henrique|Rafael|Bia)\b/.test(enrichedMirror);
  if (!mirrorHasArchetype) {
    let resolutionPara = '';
    if (chosen === 'LM') {
      resolutionPara =
        '**Fechando o ciclo na trincheira:** Quando **Lucas e Marina** aplicaram as travas deste capítulo na rotina entre São Paulo e Florianópolis, a tensão da cena de abertura deixou de ser discussão subjetiva de corredores e virou regra clara de priorização, retenção e proteção de caixa.';
    } else if (chosen === 'CAMILA') {
      resolutionPara =
        '**Fechando o ciclo na trincheira:** Quando a **Dra. Camila** trouxe este protocolo para a operação da clínica em Belo Horizonte, o gargalo que abriu este capítulo deixou de depender do seu heroísmo pessoal na cadeira e passou a rodar como sistema auditável pela equipe.';
    } else if (chosen === 'HENRIQUE') {
      resolutionPara =
        '**Fechando o ciclo na trincheira:** Quando **Henrique** incorporou este filtro nas negociações industriais e públicas a partir de Curitiba, o impasse da abertura foi substituído por critérios técnicos de aprovação, margem protegida e ciclo previsível.';
    } else {
      resolutionPara =
        '**Fechando o ciclo na trincheira:** Quando **Rafael e Bia** conectaram esta disciplina entre a aquisição no Recife e a operação logística em Goiânia, o vazamento que abriu este capítulo estancou e o crescimento voltou a gerar caixa livre.';
    }
    enrichedMirror = `${resolutionPara}\n\n${enrichedMirror}`;
  }

  return { enrichedOpening, enrichedMirror };
}

/**
 * Aplica a arquitetura narrativa de 4 Atos + Oficina de Trincheira a uma Fase ou Capítulo.
 */
function applyNarrativeRefactor(sectionKey, rawBody, allSpecsMap) {
  const spec = allSpecsMap[sectionKey];
  if (!spec) return rawBody;

  let body = rawBody;

  // 1) Remover callout "> [!abstract] Resumo operacional..." redundante (já substituído pelo Ato 1 + Ato 4)
  const resumoRegex = /\n(> \[!abstract\] Resumo operacional[^\n]*(?:\n>.*)*)\n/;
  body = body.replace(resumoRegex, '\n');

  // 1b) Remover subseções H3 de andaime enciclopédico ("O que este capítulo cobre", "Quando usar", "Quem envolve", "Ver também", etc.)
  body = stripRedundantAlmanacH3Sections(body);

  // Enriquecer arco dos 4 arquétipos (garantindo presença na abertura e retomada no Espelho)
  const { enrichedOpening, enrichedMirror } = buildArchetypeArcEnrichment(
    sectionKey,
    spec.openingBody,
    spec.mirrorBody
  );

  // 2) Inserir o Ato 1 (Abertura em Tensão: Cena Visceral + Paradoxo + Conceito com Nome Próprio)
  //    logo após o título H2 (## FASE ... ou ## CAPÍTULO ... ou ## EPÍLOGO)
  const h2Match = body.match(/^(## [^\n]+\n+)/);
  if (h2Match && spec.openingTitle && enrichedOpening) {
    const h2Header = h2Match[1];
    const restAfterH2 = body.slice(h2Header.length);
    const openingBlock = `### ${spec.openingTitle}\n\n${enrichedOpening}\n\n---\n\n`;
    body = h2Header + openingBlock + restAfterH2;
  }

  // 3) Inserir o Ato 4 (O Espelho de Autodiagnóstico + Ritual de Segunda-Feira)
  //    no fechamento narrativo ANTES de renomear os H3
  if (spec.mirrorTitle && enrichedMirror) {
    const mirrorSection = `\n\n---\n\n### ${spec.mirrorTitle}\n\n${enrichedMirror}\n`;

    // Se for Fase com blocos da Oficina, inserir imediatamente antes:
    const oficinaTriggerRe =
      /\n(?:---\n\n)?### (?:MÉTRICAS E BENCHMARKS DESTA FASE|MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE|CANVASES VISUAIS DESTA FASE|TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE|LEITURAS E RECURSOS RECOMENDADOS DESTA FASE)/;
    const mOficina = body.match(oficinaTriggerRe);
    if (mOficina) {
      const idx = mOficina.index;
      body = body.slice(0, idx) + mirrorSection + '\n' + body.slice(idx + 1);
    } else {
      // Se for Capítulo com seção final de frameworks/referências/transição, inserir antes:
      const tailRe =
        /\n(?:---\n\n)?### (?:FRAMEWORKS PASSO A PASSO DESTE CAPÍTULO|LEITURAS E REFERÊNCIAS COMPLEMENTARES|Transição:)/;
      const mTail = body.match(tailRe);
      if (mTail) {
        const idx = mTail.index;
        body = body.slice(0, idx) + mirrorSection + '\n' + body.slice(idx + 1);
      } else {
        body = body.trimEnd() + mirrorSection;
      }
    }
  }

  // 4) Substituir todos os subtítulos enciclopédicos H3 restantes ("### O quê", "### POR QUE", etc.)
  //    pelos títulos-tese customizados de spec.headingMap ou pelos fallbacks narrativos
  const mergedMap = { ...DEFAULT_HEADING_FALLBACKS, ...(spec.headingMap || {}) };
  const lowerMap = new Map();
  for (const [k, v] of Object.entries(mergedMap)) {
    lowerMap.set(k.trim().toLowerCase(), v);
  }

  const PROTECTED_OFICINA_H3 = new Set([
    'MANUAL PASSO A PASSO DOS FRAMEWORKS DESTA FASE',
    'CANVASES VISUAIS DESTA FASE (COM EXEMPLOS BRASILEIROS PREENCHIDOS)',
    'TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE',
    'LEITURAS E RECURSOS RECOMENDADOS DESTA FASE',
    'FRAMEWORKS PASSO A PASSO DESTE CAPÍTULO',
    'LEITURAS E REFERÊNCIAS COMPLEMENTARES',
  ]);

  const lines = body.split('\n');
  let inFence = false;
  const transformedLines = lines.map((line) => {
    if (line.trim().startsWith('```')) inFence = !inFence;
    if (!inFence && line.startsWith('### ')) {
      const hText = line.slice(4).trim();
      if (
        PROTECTED_OFICINA_H3.has(hText) ||
        hText.startsWith('MÉTRICAS E BENCHMARKS DESTA FASE') ||
        hText === spec.openingTitle ||
        hText === spec.mirrorTitle
      ) {
        return line;
      }
      if (mergedMap[hText]) {
        return `### ${mergedMap[hText]}`;
      }
      if (lowerMap.has(hText.toLowerCase())) {
        return `### ${lowerMap.get(hText.toLowerCase())}`;
      }
      const mSint = hText.match(/^SÍNTESE DA FASE (\d+)$/i);
      if (mSint) {
        return `### Fechamento da Fase ${mSint[1]}: o que muda na sua cabeça e na sua empresa a partir de agora`;
      }
    }
    return line;
  });
  body = transformedLines.join('\n');

  return body;
}

module.exports = {
  NOTA_DO_AUTOR_V5,
  APRESENTACAO_ARQUETIPOS_MD,
  transformFrameworkToOficina,
  transformCanvasToOficina,
  applyNarrativeRefactor,
};

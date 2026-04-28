---
title: "APÊNDICE CO — RECRUTAMENTO TÉCNICO EM PROFUNDIDADE"
appendix: "CO"
---

## APÊNDICE CO — RECRUTAMENTO TÉCNICO EM PROFUNDIDADE

### O QUE É

Processo completo de atrair, avaliar, contratar, e integrar, engenheiros, e talentos técnicos (software, dados, ML, produto, design técnico, SRE, security, platform). Cobre sourcing, avaliação, decisão, oferta, onboarding, e retenção. E os trade-offs entre velocidade, qualidade, e custo.

Esse apêndice diferencia-se dos apêndices gerais de pessoas, ou talentos, por focar nas particularidades da função técnica. Pipelines escassos. Sinais difíceis de ler. Remuneração pressionada por mercado global. Avaliação que exige rigor, sem virar teatro.

### POR QUE IMPORTA

Engenharia é produto. Produto é empresa. Contratar errado em eng degrada velocidade, qualidade, e moral.

O mercado é global, e competitivo. Dev sênior brasileiro compete com ofertas de gringa em dólar. Perder três contratações seguidas para gringa pode custar seis a doze meses de roadmap.

> [!warning] Custo de erro em engenharia
> Dev ruim contratado demora seis a doze meses para sair. Deixa dívida técnica. Contamina cultura. E ainda gasta tempo de sêniors que poderiam estar construindo, em code review remediativo.

A diversidade de time importa. Times homogêneos têm pontos cegos previsíveis.

Os engenheiros avaliam o processo. Processo ruim perde bons candidatos, que têm várias opções.

### QUEM CONDUZ

Founders, ou CTO. Em early stage, o fundador técnico conduz as entrevistas mais importantes. Não delegável antes de cerca de vinte engs.

Engineering Managers. Hiring managers responsáveis por contratações no time deles.

Senior, Staff, ou Principal Engineers. Conduzem entrevistas técnicas profundas.

Recruiters in-house, ou tech recruiters. Sourcing, triagem, coordenação, e fechamento.

Agências (última opção). Caras. Mas úteis para posições críticas, e difíceis (por exemplo, staff em diante, com expertise rara). Custo de quinze a vinte e cinco por cento do salário anual.

Recruiting coordinators. Logística de entrevista em empresas maiores.

### FUNIL CLÁSSICO (E VARIAÇÕES)

Funil padrão para engenheiros, em ordem aproximada.

1. Sourcing, ou applicants. Os candidatos entram (inbound, ou outbound).
2. Recruiter screen. Vinte a trinta minutos. Filtra expectativas, motivação, e compensação.
3. Hiring manager screen. Trinta a quarenta e cinco minutos. Fit técnico, e de contexto.
4. Technical screen(s). Uma a duas sessões de sessenta a noventa minutos. Coding, system design, ou case técnico.
5. On-site (remoto, ou presencial). Três a cinco sessões em bloco. Coding, system design, behavioral, values, e tech leadership.
6. Debrief. Painel discute, e decide.
7. Reference checks. Dois a três ex-colegas, ou gestores.
8. Offer mais fechamento. Negocia, e fecha.

Taxa de conversão esperada. Sourcing para hire, cerca de um a três por cento no inbound. Outbound ativo, três a oito por cento.

### SOURCING, ONDE ENCONTRAR

**Inbound.** Página de carreiras. Objetiva, atrativa, e honesta. Descrição realista, salário (transparência vale ouro), stack, valores, e processo. LinkedIn Jobs, AngelList (Wellfound), Programa Vagas.com, Revelo, Turing, e similares. GitHub. Perfil público, issues abertas, e contribuições open source. Twitter, ou X técnico. Pessoas que escrevem sobre tech. Discord, ou Slack communities. Dev Brasil, Stack Overflow, Reactiflux, Rust, Go, etc. Referrals. Bônus para indicação (R$ 3 a R$ 10 mil é padrão). Indicações têm taxa de contratação três a cinco vezes maior que inbound frio. Eventos técnicos. RubyConf Brasil, The Developers Conference (TDC), Rust BR, PyCon, e meetups regionais.

**Outbound.** LinkedIn Recruiter. Mensagem personalizada, não template. GitHub search, mais e-mail. Funciona, se a mensagem for específica (viu projeto dele, elogio real, pergunta real). Sequences com toque humano. Lemlist, Gem, Woodpecker, são ferramentas. Mas a mensagem precisa ser de humano. Reverse-recruit (Gupy, Revelo). Os candidatos cadastrados, e você busca. Poaching ético. Mira em empresas adjacentes, com gente insatisfeita. Pesquisa via Glassdoor, LinkedIn, e network.

O que converte. Mensagem que mostra pesquisa genuína (não template). Clareza sobre o que a vaga é, e não é. Transparência de salário (mesmo que faixa ampla). Valor além de salário, o que o cara vai aprender, quem trabalhará com ele, e o impacto real.

O que não converte. Template que claramente é template. "Temos uma vaga incrível", sem dizer qual. Cold mais vaga júnior mais ping genérico mais exigência de leetcode. Processo com oito etapas.

### AVALIAÇÃO TÉCNICA, O TRADE-OFF CENTRAL

**Leetcode, ou algoritmos puros.** Prós. Escalável, mensurável, e reduz variância entre entrevistadores. Contras. Mede habilidade desligada do trabalho real. Favorece quem pode estudar, ou treinar (viés de classe). Hostil. Muitos bons engenheiros recusam. Quando faz sentido. FAANG competindo por volume massivo. Para startups, raramente faz sentido.

**Pair programming, ou live coding em problema real (não leetcode).** Prós. Mede como a pessoa pensa, colabora, debuga, e comunica. Contras. Nervosismo deforma sinal. Exige entrevistador treinado. Bom padrão. Sessenta a noventa minutos, problema real (extensão do que o seu time faz), com suporte (Google, docs permitidos, IDE local).

**Take-home challenge.** Prós. Ambiente calmo. Simula trabalho real. O candidato mostra estilo. Contras. Exige tempo do candidato (cinco a dez horas, e o sênior com oferta competitiva não faz). Difícil garantir autoria (agora com IA, ainda mais). Viés a favor de quem tem tempo. Bom padrão. Take-home pequeno (duas a três horas no máximo), com discussão pós, via call de quarenta e cinco minutos.

**System design.** Prós. Fundamental para sênior em diante. Mede abstração, trade-offs, e experiência. Contras. Exige entrevistador experiente. Sinal ruim, se mal conduzido. Bom padrão. Problema aberto, quarenta e cinco a sessenta minutos, entrevistador guia com perguntas, e o candidato projeta sistema discutindo alternativas.

**Behavioral, ou situation.** Prós. Mede cultura, comunicação, e maturidade. Contras. Fácil de fakear, sem rubric. Bom padrão. STAR method (Situation, Task, Action, Result). Perguntas comportamentais específicas. Rubric escrito. Entrevistador treinado.

**Work sample, ou projeto colaborativo.** Prós. Sinal altíssimo. O candidato passa um a dois dias dentro do time. Contras. Exige candidato disponível (raro em sênior empregado). Pagar pelo tempo. Quando. Contratações críticas (staff em diante, e fundadores técnicos adjacentes).

> [!tip] Recomendação sintética para startup brasileira
> Evitar leetcode clássico. Usar problemas reais. Mix. Recruiter screen mais hiring manager screen mais um coding real mais um system design (para sênior) mais um behavioral, ou values, mais debrief, mais references. Total. Cinco a sete horas para o candidato. Mais do que isso, e você está perdendo bons candidatos.

### O QUE AVALIAR (RUBRIC)

Sinais que realmente importam.

Qualidade do pensamento. Ordena ideias, identifica trade-offs, e considera casos de borda.

Domínio técnico. Profundidade na stack relevante mais amplitude.

Capacidade de aprender. Não precisa saber tudo. Precisa aprender rápido.

Comunicação. Explica decisões, recebe feedback, e argumenta sem ego.

Autonomia, e julgamento. Decide sozinho, ou precisa de mão na cabeça?

Entrega. Histórico de coisas completadas (não começadas).

Colaboração. Trabalha com PM, design, outras engs, e stakeholders.

Values fit. Alinha com como você trabalha (não "gosta de cerveja igual").

Ownership. Acha problema, e resolve? Ou só reclama que o time anterior era ruim?

Sinais enganosos (não confiar). Currículo impressionante, sem profundidade na conversa. Muita teoria, sem experiência prática. "Construí sistema X", sem detalhar contribuição real. Carisma alto, mais respostas vagas. Exatamente o perfil que você imaginou (viés de confirmação).

### LEVEL SETTING: JUNIOR, PLENO, SENIOR, STAFF, PRINCIPAL

Framework típico (varia por empresa).

Junior (L1 a L2). Autônomo em tarefas simples. Precisa de supervisão para projetos. Zero a dois anos.

Mid, ou Pleno (L3). Autônomo em features. Contribui para decisões técnicas. Dois a cinco anos.

Senior (L4 a L5). Autônomo em projetos grandes. Mentora plenos, e juniors. Técnico sólido mais comunicação. Cinco a dez anos.

Staff (L6). Impacto cross-team. Define arquitetura. Multiplica o time. Raro. Dez ou mais anos, com histórico excepcional.

Principal, ou Distinguished (L7 em diante). Impacto na empresa. Visão técnica de longo prazo. Muito raro. Geralmente contratação mundial.

> [!warning] Armadilha de nivelamento
> Nivelar errado na oferta. Contratar "senior" alguém pleno, porque você precisa desesperadamente, igual a frustração de ambos os lados em seis meses. A pessoa pleno não consegue entregar no nível esperado, e perde confiança. A empresa frustra-se com a entrega, e não consegue justificar o salário.

### REMUNERAÇÃO

Mercado brasileiro de engenharia (ordens de grandeza 2024 a 2026, sujeito a mudança).

Junior. R$ 4 a R$ 10 mil por mês CLT, ou R$ 8 a R$ 15 mil PJ.

Mid, ou Pleno. R$ 10 a R$ 22 mil CLT, ou R$ 18 a R$ 35 mil PJ.

Senior. R$ 20 a R$ 40 mil CLT, ou R$ 30 a R$ 60 mil PJ.

Staff. R$ 40 a R$ 80 mil CLT, ou R$ 60 a R$ 120 mil PJ.

Principal. R$ 60 a R$ 150 mil em diante, ou equivalente.

Ofertas gringa para brasileiros (cem por cento remoto). Senior, US$ 80 a US$ 180 mil (R$ 400 mil a R$ 900 mil ao ano). Competição direta. Staff em diante, US$ 200 a US$ 400 mil em diante all-in.

Decisões. CLT versus PJ. O candidato ganha mais PJ. Mas perde benefícios. Mix é comum. Em scale-up regulada, forçar CLT pode custar salário. Equity. Em startup early-stage, parte da comp é equity. Explique bem. Quanto é, strike price, vesting (quatro anos, e um cliff), e o que acontece no exit. Bônus. Menos comum em tech brasileiro do que nos EUA. Startups em crescimento, às vezes, têm bônus semestral. Benefícios. PJ sem plano de saúde, mais VR, mais VT, é oferta inferior. CLT tem CLT.

Transparência de salário. Alinhe cedo (recruiter screen). Candidato com expectativa de R$ 50 mil, sabendo que o teto é R$ 30 mil, economiza tempo de todos. Páginas de carreiras com faixas salariais convertem mais (vide empresas como Buffer, Basecamp, e muitas startups europeias).

### DIVERSIDADE

Se você não age ativamente, acaba com time de homens brancos de seis universidades. Não é acaso. É pipeline, viés de entrevista, e rede.

Ações que movem. Sourcing deliberado. Fontes específicas (PrograMaria, PretaLab, Reprograma, Code Like a Girl). Não depende só de indicações. Job description neutra. Linguagem inclusiva, sem exigir unicórnios. "Requisitos" curtos, "nice-to-have" separados. Panels diversos. Candidato mulher vê só homens no processo. Passa por cima de você. Rubric escrito. Reduz viés subjetivo. Treinamento em viés inconsciente, para entrevistadores. Meta por nível, ou time. Não "contratar mais mulheres" genérico. "Em doze meses, pipeline L3 de eng precisa ser trinta e cinco por cento mulheres, ou minorias". Paridade de oferta. Revisar ofertas por demografia. Pay gap surge por diferença de negociação.

### ONBOARDING TÉCNICO

Primeira semana. Laptop configurado no dia 1. Acessos resolvidos. Buddy técnico designado. Setup local funcional. Repositório clonado, build passa, testes rodam. Primeira PR (pequena), arrumar typo, ou adicionar teste. Objetivo. Contribuir código na primeira semana. Não no primeiro mês.

Primeiras duas a quatro semanas. Dominar primeiro serviço, ou área. Sombrear, ou pair programar, com duas a três pessoas do time. Ler documentação arquitetural, runbooks, e histórico de decisões. Participar de code reviews (passivamente primeiro).

Trinta-sessenta-noventa. Trinta dias, código em produção. Entende time, e contexto. Sessenta dias, feature pequena sua, fim-a-fim. Noventa dias, contribuição estável. Autonomia em tarefas de tamanho médio. Conversa de calibração com manager.

Red flags no onboarding. Buddy inexistente, ou desinteressado. Documentação ausente, ou errada. "Corre" já no primeiro mês. Ninguém explica "por que" das coisas. Expectativas não claras.

### RETENÇÃO

Contratar é metade da guerra. Reter é a outra metade.

Drivers de retenção técnica, em ordem de impacto. Qualidade do trabalho, problemas interessantes, tecnologia relevante, e aprendizado contínuo. Time, pessoas respeitáveis, e relações saudáveis. Manager, as pessoas saem de managers, não de empresas. Progresso de carreira, caminho visível, e promoções com critério. Compensação, dentro do mercado, e revisada. Autonomia, e propósito, confiança, impacto, e significado do trabalho. Flex, ou remoto, cultura de flexibilidade importa.

Drivers de saída, em ordem de prevalência. Manager ruim. Pouco aprendizado. Oferta melhor externa (salário, ou problema). Política interna, ou time tóxico. Falta de carreira visível. Burnout.

Intervenções. Um a um semanais regulares (manager-engineer), sem cancelar. Career conversations trimestrais. Revisão de compensação anual, idealmente duas vezes por ano para top performers. Internal mobility, mover dentro, em vez de perder. Stay interviews (perguntar "o que te manteria aqui?", antes da exit interview).

### Armadilhas

Over-hiring em bull market. Contratar cinquenta em seis meses, depois precisar demitir vinte. Destrói cultura.

Pressão por "fill the seat". Baixar barra, porque tem vaga aberta há quatro meses. Erro dolorosíssimo depois.

Processo lento. Candidato esperou três semanas pela oferta. Já tem outra.

Debrief fraco. "Ele é bom?". "Acho que sim". Decisão sem rubric.

Entrevista sem rubric. Viés vence. Qualidade desce.

Falta de bar-raiser. Ninguém responsável por manter barra, quando há pressão para contratar.

CTO que contrata por gut feeling. Funciona até os primeiros dez. Depois, quebra.

Excesso de etapas. Sete entrevistas, para um pleno.

Entrevistadores despreparados. Chegam sem ler CV. Fazem mesma pergunta cinco vezes.

"Cultural fit" sem definição. Virou proxy de "parece comigo". Define valores concretos, e avalia contra eles.

Ignorar referência. Reference check bem feito capta sinais que cinco entrevistas não pegam.

Contratar só seniors. Time sem pipeline jr, ou mid, fica caro. E tem problemas de mentoria invertida.

Contratar só juniors. Sem sêniors para mentorar, os juniors não crescem. O produto decai.

Contratar estranho "brilhante". 160 QI mais personalidade difícil afunda time inteiro.

Perder candidato bom por R$ 2 mil. Economia pontual, que custa três a seis meses de busca.

### CONTEXTO BRASIL

Mercado aquecido, para sênior em diante, que fala inglês. Competição direta com gringa.

Juniors abundantes. Pretos no mercado limitado. Formar juniors é investimento necessário. Mas não cabe em tudo.

PJ predominante em tech. CLT vira obstáculo em atração. Mas scale-ups reguladas (fintech com cuidado CARF, financeiras BCB) frequentemente forçam CLT.

Home office, ou remoto, virou default em tech pós-2020. Empresas que forçam presencial perdem talento.

Bootcamps, e programas alternativos (Kenzie Academy, Driven, Reprograma, Awari, Trybe), formam devs sem graduação tradicional. Sinal válido. Olhe portfolio, ou código.

Universidades referência. USP, Unicamp, UFMG, UFRJ, ITA, UFPE, UFRGS, UnB. Mas pedigree não é tudo. Muitos excelentes vieram de outros caminhos.

Regulatório. eSocial, e CLT, traz obrigações pesadas. PJ com exclusividade é frequentemente reclassificado pelo fisco. Risco real.

### Checklist

- [ ] JDs honestas, com salário ou faixa, stack real, e o que é, e não é
- [ ] Funil de entrevista definido (cinco a sete etapas, no máximo, para a maioria)
- [ ] Rubric escrito, por tipo de entrevista
- [ ] Entrevistadores treinados (inclusive em viés)
- [ ] Diversidade no painel
- [ ] Debrief estruturado, com decisão clara
- [ ] Reference checks antes da oferta
- [ ] Oferta rápida (idealmente vinte e quatro a quarenta e oito horas, após a decisão)
- [ ] Negociação com flexibilidade, mais equity explicada
- [ ] Onboarding com buddy, e primeira PR em uma semana
- [ ] Trinta-sessenta-noventa review com manager
- [ ] Um a um semanais estabelecidos
- [ ] Revisão de compensação pelo menos anual
- [ ] Stay interviews com top performers
- [ ] Offboarding construtivo, quando sai

### Ver também

[[#APÊNDICE BN — EXECUTIVE HIRING: CONTRATAR LÍDERES SÊNIOR E C-LEVEL|Apêndice BN]], Executive hiring. [[#APÊNDICE BZ — PERFORMANCE REVIEWS ESTRUTURADOS: CICLO, CALIBRAÇÃO E CONEXÃO COM COMPENSAÇÃO|Apêndice BZ]], Performance reviews. [[#APÊNDICE AP — CULTURA COMO DISCIPLINA|Apêndice AP]], Cultura. [[#APÊNDICE BU — DIVERSIDADE, EQUIDADE E INCLUSÃO (DEI) EM STARTUP BRASILEIRA|Apêndice BU]], DEI. [[#APÊNDICE CR — ENGINEERING MANAGEMENT: GESTÃO DO TIME TÉCNICO E DEVELOPER EXPERIENCE|Apêndice CR]], Engineering management em escala.

---

---

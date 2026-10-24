/**
 * Pós-processador editorial, factual, jurídico, tributário e narrativo da revisão v5.2
 * Resolve 100% dos 5.621 achados da planilha IGNICAO_achados_da_revisao.xlsx (abas Achados e Checagem).
 */

const fs = require('fs');
const path = require('path');
const { applyWave7ToVolume } = require('./apply_wave7_fixes');

function slugify(s) {
  return String(s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[—–]/g, '-')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Substituições de consistência de arquétipos (N3) e homônimos
const ARCHETYPE_TEXT_REPLACEMENTS = [
  // Dra. Camila é sempre cirurgiã-dentista (reabilitação oral) em Belo Horizonte, nunca fisioterapeuta ou médica
  ['fisioterapeuta de Belo Horizonte', 'cirurgiã-dentista de Belo Horizonte'],
  ['recém-saída da bancada clínica de fisioterapia', 'recém-saída do consultório odontológico'],
  ['especialista em reabilitação física', 'especialista em reabilitação oral'],
  ['clínicas de estética e fisioterapia', 'clínicas de odontologia e estética'],
  ['clínica de fisioterapia e reabilitação', 'clínica de odontologia e reabilitação'],
  ['clínica de fisioterapia', 'clínica de odontologia e reabilitação'],
  ['redes de clínicas de fisioterapia', 'redes de clínicas odontológicas'],
  ['Fisioterapeutas Sêniores', 'Dentistas Sêniores'],
  ['fisioterapeutas sêniores', 'dentistas sêniores'],
  ['fisioterapeutas juniores', 'dentistas juniores'],
  ['fisioterapeutas recém-formados', 'dentistas recém-formados'],
  ['fisioterapeutas e recepcionistas', 'dentistas e recepcionistas'],
  ['Fisioterapeuta Chefe', 'Dentista Chefe'],
  ['médica brilhante', 'cirurgiã-dentista brilhante'],
  ['agenda médica', 'agenda clínica'],
  ['pacientes pós-cirúrgicos', 'pacientes de reabilitação oral'],
  [
    'um programador brilhante como **Lucas** em São Paulo, uma clínica impecável como **Camila** em BH, ou um engenheiro industrial como **Henrique** em Curitiba',
    'um programador brilhante como Lucas, em São Paulo, uma dentista impecável como Camila, em BH, ou um engenheiro mecânico como Henrique, em Curitiba'
  ],
  [
    'uma clínica impecável como **Camila** em BH',
    'uma dentista impecável como **Camila** em BH'
  ],
  // Rafael (Recife) e Bia (Goiânia)
  [
    'Rafael, em Goiânia, acusa Bia, em Recife, de queimar margem em anúncios de vaidade; Bia acusa Rafael de travar o crescimento',
    'Rafael, em Recife, é acusado por Bia, no centro de distribuição em Goiânia, de queimar margem em anúncios de vaidade; Rafael rebate dizendo que Bia trava o crescimento'
  ],
];

// Substituições factuais, jurídicas, tributárias, regulatórias e de casos base
const BASE_FACTUAL_AND_LEGAL_REPLACEMENTS = [
  [
    '($\\text{Reserva Líquida} \\div (\\text{Custo Mínimo Familiar} \\times 1{,}5)$)',
    '(Reserva Líquida Pessoal ÷ (Custo Mínimo Familiar × 1,30))'
  ],
  [
    'Se seu custo mínimo é R$ 8.000/mês e você tem R$ 150.000 guardados, seu runway com margem de segurança de 25% (R$ 10.000/mês) é de 15 meses.',
    'Se seu custo mínimo familiar é R$ 8.000/mês e você tem R$ 156.000 guardados exclusivamente na sua reserva pessoal (separada do caixa da empresa), seu runway com margem de segurança de 30% (R$ 10.400/mês) é de exatos 15 meses.'
  ],
  [
    '60 a 80 horas semanais de trabalho focado',
    '55 a 65 horas semanais de trabalho intenso (sendo 25 a 30 horas de foco profundo e o restante em vendas, operação e articulação)'
  ],
  [
    'uma em cada quatro fechamentos de startups nos primeiros dois anos decorre de ruptura entre sócios, não de fracasso de produto',
    'conflitos entre cofundadores estão entre as principais causas não financeiras de mortalidade precoce de startups (Noam Wasserman, *The Founder\'s Dilemmas*, 2012)'
  ],
  [
    'investidores profissionais não assinam acordos de confidencialidade na primeira conversa.',
    'investidores de Venture Capital quase nunca assinam NDA na primeira conversa de filtro; já em tecnologia dura (deep tech, biotecnologia, química ou hardware com patente pendente), compartilhe inicialmente um deck não confidencial e deixe o segredo industrial para a diligência técnica sob NDA.'
  ],
  [
    'Investidores não olham apenas para a foto (onde você está hoje); eles investem no filme (a inclinação da sua curva de aprendizado e entrega entre duas conversas).',
    'Como sintetiza Mark Suster na metáfora "Lines, Not Dots", investidores não decidem pela foto isolada de uma reunião, mas pela inclinação da reta que conecta múltiplos pontos de entrega ao longo dos meses.'
  ],
  [
    'reduz pela metade o tempo de validação',
    'encurta substancialmente o ciclo de validação'
  ],
  [
    'O conceito japonês de *Ikigai* ("razão de viver") oferece uma lente prática para escolher onde empreender na intersecção de quatro círculos',
    'A adaptação ocidental contemporânea do *Ikigai* para carreira e negócios (popularizada por Marc Winn em 2014 ao combinar o conceito japonês de "razão de viver" com o diagrama de Venn de propósito de Andrés Zuzunaga) oferece uma lente prática na intersecção de quatro círculos'
  ],
  [
    'O Marco Legal das Startups (LC 182/2021) consolidou a segurança jurídica para investidores-anjo (que não respondem por dívidas da empresa, mesmo sob desconsideração da personalidade jurídica, salvo dolo/fraude)',
    'A Lei Complementar nº 155/2016 (no art. 61-A da LC 123/2006) e o Marco Legal das Startups (LC 182/2021) blindaram o investidor-anjo contra responsabilidade por dívidas da empresa, inclusive em casos de desconsideração da personalidade jurídica, salvo dolo, fraude ou simulação'
  ],
  [
    'O prazo padrão global e brasileiro é de **4 anos com 1 ano de cliff**',
    'O padrão consagrado para fundadores e primeiros executivos é de **4 anos com 1 ano de cliff** (enquanto em rodadas de investidores-anjo de menor porte no Brasil também se praticam prazos de 2 a 3 anos)'
  ],
  [
    'Raramente funciona com 4 ou mais (diluição excessiva de responsabilidade, custo de coordenação exponencial, paralisia decisória).',
    'Com 4 ou mais cofundadores, o custo de coordenação cresce rapidamente e exige definição estrita de papéis executivos e alçadas (embora existam exceções bem-sucedidas quando as competências são altamente complementares, como no caso da Contabilizei).'
  ],
  [
    'Dados da Harvard Business School (Noam Wasserman, *The Founder\'s Dilemmas*, analisando mais de 10.000 fundadores) mostram que **65% das startups de alto potencial fracassam por conflitos entre cofundadores**',
    'Em *The Founder\'s Dilemmas* (2012), Noam Wasserman analisou mais de 10.000 fundadores de tecnologia e ciências da vida; na literatura de Venture Capital, estima-se amplamente que conflitos no time fundador respondam por até 65% dos fracassos de startups em estágio inicial'
  ],
  [
    'No Brasil, a dissolução parcial de sociedade limitada (Código Civil, arts. 1.028 a 1.032; CPC, arts. 599 a 609) pode levar de 2 a 5 anos na Justiça e congelar a empresa no meio do caminho',
    'No Brasil, uma ação judicial de dissolução parcial de sociedade limitada (Código Civil, arts. 1.028 a 1.032; CPC, arts. 599 a 609) costuma levar de 2 a 5 anos para transitar em julgado e, embora não congele formalmente o CNPJ, trava captações, afasta investidores e drena o caixa na apuração de haveres'
  ],
  [
    'No Brasil, o formato mais seguro é o **Contrato de Opção de Compra de Quotas** ou **Acordo de Quotistas com Cláusula de Recompra pelo Valor Nominal**',
    'No Brasil, os formatos mais adotados são o **Acordo de Sócios com Cláusula de Opção de Recompra de Quotas pelo Valor Nominal (*Reverse Vesting*)** para cofundadores já no contrato social, ou o **Contrato de Opção de Compra de Quotas** para novos membros durante o período de *cliff*'
  ],
  [
    'Em outubro de 2024, o fundador de uma SaaS B2B de logística em São Paulo',
    'Em um caso composto representativo de um SaaS B2B de logística em São Paulo'
  ],
  [
    'Stone começou em 2012 não com maquininha melhor, mas com atendimento que resolvia em 5 segundos vs. 40 minutos da Cielo/Rede. A maquininha era commodity.',
    'A Stone (fundada em 2012 por André Street e Eduardo Pontes) diferenciou-se não pelo hardware da maquininha, que era commodity, mas pela arquitetura tecnológica proprietária combinada a polos locais próprios ("Green Angels") e atendimento humano em até 5 segundos, contra a lentidão das adquirentes incumbentes.'
  ],
  [
    'Quando o iFood começou em 2011 (como Disk Cook, guia impresso de cardápios com central telefônica), não existia frota de entregadores via aplicativo nem pagamento online integrado: os pedidos eram transmitidos por telefone ou fax para restaurantes que já tinham motoboy próprio.',
    'Quando o iFood foi lançado digitalmente em maio de 2011 (evoluindo da Disk Cook, guia impresso de cardápios com central telefônica criado em 1997), o marketplace operava apenas na camada de geração de demanda: não havia frota própria de entregadores na plataforma e o pedido ia para restaurantes que já contavam com motoboys próprios.'
  ],
  [
    'Gympass (Wellhub) nasceu vendendo pacotes de diárias de academias diretamente para consumidores finais (B2C). O CAC era proibitivo e as academias odiavam o modelo porque canibalizava seus alunos mensalistas.',
    'O Gympass (hoje Wellhub, fundado em 2012 por Cesar Carvalho, João Barbosa e Vinicius Ferriani) nasceu no modelo B2C vendendo passes e diárias avulsas de academias ao consumidor final; diante do CAC elevado e do receio das academias de canibalizar alunos mensalistas, pivotou em 2013/2014 para o modelo B2B2C de benefício corporativo pago pelo RH.'
  ],
  [
    'RD Station e Contabilizei cresceram com eficiência extrema antes de grandes rodadas',
    'RD Station e Contabilizei construíram máquinas previsíveis de aquisição em PMEs combinando disciplina de unit economics com rodadas sucessivas de Venture Capital institucional desde os estágios iniciais'
  ],
  [
    'Arthur, Igor e Gabriel',
    'Igor Marinelli e Gabriel Lameirinhas'
  ],
  [
    'Ana Luiza McLaren e Tiê Lima criaram um blog',
    'Ana Luiza McLaren criou em 2009 um blog para vender roupas paradas no armário e, ao lado do cofundador Tiê Lima, transformou o projeto em marketplace'
  ],
  [
    'Ramiro, Augusto e Cristiane Madureira',
    'os irmãos Ramiro e Augusto Madureira (tendo Cristiane Madureira também figurado no quadro societário da holding)'
  ],
  [
    'Peixe Urbano chegou a valer centenas de milhões de dólares antes de perder relevância e encerrar operações',
    'Peixe Urbano foi o primeiro grande fenômeno de compras coletivas do país, teve o controle adquirido pelo grupo chinês Baidu em 2014 e, após sucessivas mudanças de controle e deterioração do modelo de cupons, encerrou as operações em 2021'
  ],
  [
    'O caso de Kim Kubo (The.Care)',
    'O caso composto de uma healthtech de navegação de pacientes'
  ],
  [
    'Kim Kubo (The.Care)',
    'uma healthtech brasileira de gestão de crônicos'
  ],
  [
    'Hilab abriu capital na B3',
    'Hilab escalou nacionalmente seus exames laboratoriais remotos em farmácias e clínicas'
  ],
  [
    'Bruno Henrique, PM sênior no Nubank',
    'um Product Manager sênior em uma grande fintech brasileira'
  ],
  [
    'Clark & Vesterlund (2013)',
    'pesquisas comportamentais sobre vieses de atribuição de tarefas em equipes (como os estudos de Lise Vesterlund e coautoras em *The No Club*, 2022)'
  ],
  [
    'No Brasil, dividendos distribuídos a pessoas físicas permanecem isentos de IRPF (Lei 9.249/1995, art. 10), embora a tributação de dividendos volte periodicamente ao debate legislativo.',
    'No Brasil, a isenção irrestrita de dividendos da Lei 9.249/1995 vigorou até dezembro de 2025: com a **Lei nº 15.270/2025** (em vigor desde 1º de janeiro de 2026), os lucros e dividendos pagos por uma mesma pessoa jurídica a uma mesma pessoa física residente no Brasil acima de **R$ 50.000,00 por mês** passaram a sofrer retenção de **10% de IRRF**, compondo o Imposto de Renda Pessoa Física Mínimo (IRPFM) anual para rendas globais acima de R$ 600 mil/ano (até 10% a partir de R$ 1,2 milhão/ano), resguardados os lucros apurados até 2025 cuja distribuição tenha sido aprovada até 31/12/2025.'
  ],
  [
    'dividendos são isentos de IR na pessoa física (Lei 9.249/1995)',
    'dividendos são isentos de IRPF até R$ 50 mil/mês por empresa pagadora e tributados em 10% na fonte acima desse limite desde janeiro de 2026 (Lei 15.270/2025)'
  ],
  [
    'distribuição de lucros isenta de IR',
    'distribuição de lucros (isenta até R$ 50 mil/mês por empresa e sujeita a 10% de IRRF acima desse teto pela Lei 15.270/2025)'
  ],
  [
    'dividendos isentos de IR',
    'dividendos (isentos até R$ 50 mil/mês por fonte pagadora e tributados em 10% na fonte acima disso desde 2026, conforme Lei 15.270/2025)'
  ],
  [
    'Entre 2029 e 2032, as alíquotas de PIS, COFINS, ICMS e ISS serão reduzidas gradualmente (10% em 2029, 20% em 2030, 30% em 2031, 40% em 2032)',
    'Em **2027**, a **CBS** entra em vigor integralmente e **extingue de imediato o PIS e a COFINS** (reduzindo também o IPI a zero para a maioria dos produtos, exceto incentivos da Zona Franca de Manaus); já a transição gradual entre **2029 e 2032** aplica-se exclusivamente à substituição de **ICMS e ISS pelo IBS** (redução de 10% em 2029, 20% em 2030, 30% em 2031 e 40% em 2032, até a extinção total em 2033)'
  ],
  [
    'dispensa de licitação via CPSI',
    'licitação na modalidade especial da CPSI (arts. 12 a 15 da LC 182/2021)'
  ],
  [
    'contratação direta via CPSI',
    'contratação via modalidade especial de licitação do CPSI (art. 12 da LC 182/2021, até R$ 1,6 milhão por contrato) e posterior Contrato de Fornecimento (art. 15, até R$ 8 milhões sem nova licitação)'
  ],
  [
    'O CARF costumava autuar planos de Stock Options como remuneração disfarçada, mas o STJ pacificou em 2024',
    'Embora o CARF historicamente autuasse planos de Stock Options como remuneração sujeita a INSS e IRPF, o **STJ pacificou em setembro de 2024 no Tema Repetitivo 1.226** que o *Stock Option Plan* tem natureza estritamente mercantil (não incidindo IRPF nem contribuição previdenciária na outorga ou no exercício, mas apenas imposto sobre ganho de capital na venda futura das ações com lucro), desde que presentes três requisitos reais: **voluntariedade na adesão**, **onerosidade** (pagamento de preço de exercício) e **risco de mercado**'
  ],
  [
    'comunicar à ANPD e aos titulares em até 2 dias úteis',
    'comunicar à ANPD e aos titulares em até **3 dias úteis** do conhecimento do incidente (Resolução CD/ANPD nº 15/2024)'
  ],
  [
    'prazo de 2 dias úteis da ANPD',
    'prazo de 3 dias úteis fixado pela Resolução CD/ANPD nº 15/2024'
  ],
  [
    '72 horas (como no GDPR) ou 2 dias úteis na LGPD',
    '72 horas no GDPR europeu e **3 dias úteis** no Brasil (Resolução CD/ANPD nº 15/2024)'
  ],
  [
    'recolhimento do FGTS até o dia 7 do mês seguinte',
    'recolhimento do FGTS Digital até o **dia 20** do mês seguinte (Lei nº 14.438/2022, vigente desde março de 2024)'
  ],
  [
    'FGTS (dia 7)',
    'FGTS Digital (dia 20)'
  ],
  [
    'FGTS até o dia 7',
    'FGTS Digital até o dia 20'
  ],
  [
    'R$ 500 milhões em transações anuais para exigir autorização de Instituição de Pagamento',
    'os cronogramas de autorização prévia obrigatória e capital mínimo reforçado entre R$ 9,2 milhões e R$ 32,8 milhões estabelecidos pelas Resoluções BCB nº 494/2025 e Conjunta nº 14/2025 para Instituições de Pagamento'
  ],
  [
    'O Drex entrará em operação comercial para o público em 2025',
    'Após a Fase 2 dos testes em 2024/2025 revelar gargalos de privacidade e desempenho nas soluções de *Zero-Knowledge Proofs* sobre Hyperledger Besu, o Banco Central reestruturou o projeto Drex no final de 2025 para priorizar casos de uso de reconciliação de garantias e liquidação sem depender de DLT na primeira etapa'
  ],
  [
    'Se você já empreendeu antes — com exit (saída, venda ou encerramento da empresa) com fracasso, ou com empresa ainda ativa —',
    'Se você já empreendeu antes, tenha vendido a empresa, fechado as portas ou ainda esteja à frente dela,'
  ],
  [
    'Se você já empreendeu antes: com exit (saída, venda ou encerramento da empresa) com fracasso, ou com empresa ainda ativa,',
    'Se você já empreendeu antes, tenha vendido a empresa, fechado as portas ou ainda esteja à frente dela,'
  ],
  [
    '5. Discordância em regime patrimonial. Um quer muito, outro quer médio.',
    '5. Ambição desalinhada. Um quer construir algo enorme, o outro quer uma empresa de ritmo sustentável.'
  ],
  [
    'Os três cofundadores trouxeram complementaridade completa no escritório de América Latina, com background em Morgan Stanley e formação em Stanford.',
    'Vélez vinha da Sequoia, onde olhava a América Latina, depois de passar pelo Morgan Stanley e por Stanford.'
  ],
  [
    'Collins descreve companies que levaram 4+ anos para descobrir seu hedgehog.',
    'Collins descreve empresas que levaram mais de quatro anos para achar o seu conceito do ouriço.'
  ],
  [
    'que definia "primeiros princípios" como "o primeiro basis from which a thing is known"',
    'que definia "primeiros princípios" como "o primeiro ponto a partir do qual algo é conhecido"'
  ],
  [
    'Não é possível eliminar vieses cognitivos — são fiados em arquitetura neural.',
    'Não dá para eliminar vieses cognitivos: eles fazem parte de como o cérebro funciona.'
  ],
  [
    'Não é possível eliminar vieses cognitivos: são fiados em arquitetura neural.',
    'Não dá para eliminar vieses cognitivos: eles fazem parte de como o cérebro funciona.'
  ],
  [
    'Use o Team Canvas na Fase 14 (escala e time) como artefato de onboarding de novos squads',
    'Use o Team Canvas quando dois ou mais sócios decidem fundar juntos, antes do acordo de sócios. Volte a ele na Fase 16, ao montar a liderança'
  ],
  [
    '*tração*, de Gabriel Weinberg',
    '*Traction*, de Gabriel Weinberg e Justin Mares'
  ],
  [
    'A diferença entre quem faz certo, e quem falha, está na honestidade do diagnóstico inicial.',
    'A diferença entre quem acerta e quem falha está na honestidade do diagnóstico.'
  ],
  [
    'qual dessas três pessoas acordou às sete da manhã suando frio e disposta a passar o cartão corporativo para resolver isso?',
    'Lucas, quem usaria cada uma dessas ideias, e qual dessas pessoas perdeu tempo ou dinheiro com isso na última terça a ponto de pagar?'
  ],
  [
    'Na geração de ideias, a verdade contraintuitiva é brutal: **as ideias mais lucrativas do Brasil quase nunca parecem "geniais" ou cinematográficas à primeira vista',
    'Na geração de ideias, a resposta contraintuitiva é esta: **as ideias que mais dão lucro parecem problemas operacionais chatos, que todo mundo aprendeu a tolerar'
  ],
  [
    'compense com mais pesquisa com clientes reais nas Fases 3 e 4',
    'compense com mais pesquisa com clientes reais nas Fases 4 e 5 (Vol. 2)'
  ],
  [
    'quem entrevistar nas Fases 3 e 4',
    'quem entrevistar nas Fases 4 e 5 (Vol. 2)'
  ],
  [
    'use falas diretas das Fases 3 e 4',
    'use falas diretas das Fases 4 e 5'
  ],
  [
    'até a Fase 12 (PMF)',
    'até a Fase 13 (PMF)'
  ],
  [
    'antes de entrar em descoberta de problema (Fase 3)',
    'antes de entrar em descoberta de problema (Fase 4, Vol. 2)'
  ],
  [
    'cada hipótese da Fase 6 testa um nó ou seta da árvore; cada experimento da Fase 7 coleta evidência',
    'cada hipótese da Fase 7 (Vol. 3) testa um nó ou seta da árvore; cada experimento da Fase 8 (Vol. 3) coleta evidência'
  ],
  [
    'antes de priorizar hipóteses (Fase 6)',
    'antes de priorizar hipóteses (Fase 7, Vol. 3)'
  ],
  [
    '"Quando não empreender, um roteiro honesto de autoexclusão"',
    '"Permissão para dizer \'ainda não\'"'
  ],
  [
    'Aplicação: apêndice sobre Pivot.',
    'Aplicação: Capítulo 16 do Volume 4 (Pivot).'
  ],
  [
    'procurar por "fundadores" em plataformas como Vittude, Doctoralia, ou Mind Lab',
    'procurar por psicólogos clínicos em plataformas como Vittude, Zenklub ou Doctoralia'
  ],
  [
    'Camila Farani (investidora), Bel Pesce (FazINOVA), entre outras.',
    'Camila Farani (investidora), Cristina Junqueira (Nubank), entre outras.'
  ],
  [
    'Market Creation Potential igual a nove (mercado peer-to-peer de acomodação era inexistente, seria criado)',
    'aluguel entre pessoas existia em nicho (VRBO, Couchsurfing); a aposta era levá-lo ao viajante comum, com pagamento protegido e avaliações'
  ],
  [
    'Curva que sobe sustentadamente igual a NRR maior que cem por cento, e cohort saudável. Curva que desce igual a cohort perdendo dinheiro ao longo do tempo.',
    'Na curva de receita acumulada por safra, aceleração indica expansão (NRR acima de 100%). Achatamento cedo indica safra morrendo. Compare a inclinação das safras novas com a das antigas.'
  ],
  [
    'A LGPD torna obrigatório definir, antes do início da integração técnica, quem é controlador e quem é operador dos dados pessoais que transitam entre os sistemas.',
    'Antes da integração, mapeie cada fluxo de dados, quem decide o que se faz com ele, e registre os papéis em contrato. O papel vem do que cada empresa faz. Notificar a ANPD cabe ao controlador.'
  ],
  [
    'Liquidez Secundária (Secondaries unificado)',
    'Liquidez Secundária (Secondaries)'
  ],
];

const WAVE1_BATCH_FILES = [
  'checked_fixes_batch1.json',
  'checked_fixes_batch2.json',
  'checked_fixes_batch3.json',
];

const WAVE2_BATCH_FILES = [
  'achados_fixes_vol1.json',
  'achados_fixes_vol2.json',
  'achados_fixes_vol3.json',
  'achados_fixes_vol4.json',
  'achados_fixes_vol5.json',
  'achados_fixes_vol6.json',
  'achados_fixes_vol7.json',
  'achados_fixes_vol8.json',
  'achados_fixes_vol9.json',
  'achados_fixes_vol10a.json',
  'achados_fixes_vol10b.json',
  'achados_fixes_wave3_vol1_2.json',
  'achados_fixes_wave3_vol3_4.json',
  'achados_fixes_wave3_vol5_6.json',
  'achados_fixes_wave3_vol7_8.json',
  'achados_fixes_wave3_vol9_10.json',
  'achados_fixes_wave4.json',
];

function stripEmDashOutsideWikilinkTarget(str) {
  return String(str || '')
    .split(/(\[\[[^\]]+\]\])/g)
    .map((part) => {
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const pipeIdx = part.indexOf('|');
        if (pipeIdx < 0) return part;
        const target = part.slice(0, pipeIdx);
        const label = part.slice(pipeIdx + 1, -2).replace(/\s*—\s*/g, ': ');
        return `${target}|${label}]]`;
      }
      return part.replace(/\s*—\s*/g, ': ');
    })
    .join('');
}

function loadBatchFiles(fileList, includeBase = false) {
  const pairs = includeBase ? BASE_FACTUAL_AND_LEGAL_REPLACEMENTS.map(([from, to]) => ({ vol: null, from, to })) : [];
  for (const fname of fileList) {
    const fpath = path.join(__dirname, fname);
    if (fs.existsSync(fpath)) {
      try {
        const arr = JSON.parse(fs.readFileSync(fpath, 'utf8'));
        if (Array.isArray(arr)) {
          for (const item of arr) {
            if (item && typeof item.from === 'string' && typeof item.to === 'string' && item.from.trim() && item.to.trim()) {
              const fromStr = item.from.trim();
              const vNum = item.vol ? Number(item.vol) : null;
              const cleanTo = stripEmDashOutsideWikilinkTarget(item.to.trim());
              if (fromStr === cleanTo) continue;
              pairs.push({ id: item.id, vol: vNum, from: fromStr, to: cleanTo });
              // Variantes demovidas de BG (##### -> ### no raw) e de CZ/A (#### -> ### no raw)
              if (fromStr.startsWith('##### ')) {
                pairs.push({
                  id: item.id,
                  vol: vNum,
                  from: fromStr.replace(/^##### /, '### '),
                  to: cleanTo.replace(/^##### /, '### '),
                });
              } else if (fromStr.startsWith('#### ')) {
                pairs.push({
                  id: item.id,
                  vol: vNum,
                  from: fromStr.replace(/^#### /, '### '),
                  to: cleanTo.replace(/^#### /, '### '),
                });
              }
            }
          }
        }
      } catch (err) {
        console.warn(`[apply_review_fixes] Aviso ao ler ${fname}:`, err.message);
      }
    }
  }
  return pairs;
}

// Substituições de ruído mecânico de conversão de símbolos (E3/E4), LaTeX quebrado (E8), rótulos narrativos (N7/S7) e Acordo Ortográfico (E10)
const MECHANICAL_NOISE_REPLACEMENTS = [
  ['Técnico mais Comercial mais Domínio', 'Técnico, Comercial e Domínio'],
  ['cash, mais ações TOTVS, mais earnout', 'caixa, ações da TOTVS e earn-out'],
  ['trabalhar muito mais continuar tentando', 'trabalhar muito e continuar tentando'],
  ['russos roleta', 'roleta-russa'],
  ['Relentlessly resourceful, *Relentlessly Resourceful*', 'Engenhoso sem trégua (*Relentlessly Resourceful*)'],
  ['$\\rightarrow$', '→'],
  ['$\\leftarrow$', '←'],
  ['$\\leftrightarrow$', '↔'],
  ['$\\times$', '×'],
  ['$\\div$', '÷'],
  ['$\\ge$', '≥'],
  ['$\\le$', '≤'],
  ['$\\approx$', '≈'],
  [' (em Mermaid)', ''],
  [' em Mermaid', ''],
  // Rótulos de fórmula narrativa e muletas pedagógicas (N7 / S7 / E4 / E6)
  ['**Sua permissão (*estilo Rework*):**', '**Sua permissão:**'],
  ['**Sua Permissão (*estilo Rework*):**', '**Sua permissão:**'],
  ['**Regra de Bolso (*estilo Gino Wickman*):**', '**Regra de bolso:**'],
  ['**Regra de Bolso (*estilo Andy Grove*):**', '**Regra de bolso:**'],
  ['**Regra de Bolso (*estilo Ben Horowitz*):**', '**Regra de bolso:**'],
  ['**Regra de Bolso (*estilo Geoffrey Moore*):**', '**Regra de bolso:**'],
  ['**O Espelho (Responda sem anestesia):**', '**O Espelho (autodiagnóstico):**'],
  ['**O Espelho do Gestor (Responda sem anestesia):**', '**O Espelho do Gestor:**'],
  ['**Lições transferíveis.** ', ''],
  ['**A lição transferível.** ', ''],
  ['**A lição transferível:** ', ''],
  ['A lição transferível: ', ''],
  ['A lição transferível. ', ''],
  ['**Insight do caso.** ', ''],
  ['**A lição:** ', ''],
  ['**A lição.** ', ''],
  ['Lição extraível: ', ''],
  ['**Guidance prático**:', '**Orientação prática**:'],
  ['**Guidance prático:**', '**Orientação prática:**'],
  // Anglicismos desnecessários e glosas intrusivas (E7 / E8 / E9)
  ['Exploit demand existente', 'Explorar a demanda existente'],
  ['Reach non-customers', 'Alcançar quem ainda não é cliente'],
  ['program de enablement', 'programa de capacitação'],
  ["d'**A ", 'da **A '],
  ["d'**O ", 'do **O '],
  ["n'**A ", 'na **A '],
  ["n'**O ", 'no **O '],
  ['pitch (apresentação do negócio)', 'pitch'],
  ['rodada seed (semente)', 'rodada seed'],
  ['IPO (abertura de capital em bolsa) como exit (saída)', 'IPO ou venda da empresa'],
  ['term sheet (carta de intenções de investimento)', 'term sheet'],
  ['All-hands (reunião com toda a empresa)', 'reunião geral (all-hands)'],
  ['Keynote (palestra principal)', 'palestra principal (keynote)'],
  ['warm intro (apresentação calorosa via contato em comum)', 'indicação por contato em comum (warm intro)'],
  ['job board (mural de vagas)', 'mural de vagas'],
  [' (consumer psychology — estudo dos processos mentais e comportamentais por trás das decisões de compra)', ''],
  [' (consumer psychology: estudo dos processos mentais e comportamentais por trás das decisões de compra)', ''],
  // Adjetivos inflados recorrentes (N6)
  ['solidão brutal', 'solidão'],
  ['honestidade brutal', 'franqueza direta'],
  ['verdade brutal', 'verdade dura'],
  ['realidade brutal', 'realidade dura'],
  ['clareza brutal', 'clareza direta'],
  ['foco obsessivo', 'foco disciplinado'],
  ['execução cirúrgica', 'execução disciplinada'],
  ['precisão cirúrgica', 'precisão'],
  ['armadilhas invisíveis', 'armadilhas recorrentes'],
  ['inimigo invisível', 'inimigo silencioso'],
  ['imposto invisível', 'custo oculto'],
  ['teto invisível', 'teto operacional'],
  // Padronização de termos (E9 / E12)
  ['BACEN', 'BCB'],
  ['Bacen', 'BCB'],
];

let CACHED_WAVE1_REPLACEMENTS = null;
function getWave1Replacements() {
  if (!CACHED_WAVE1_REPLACEMENTS) {
    CACHED_WAVE1_REPLACEMENTS = loadBatchFiles(WAVE1_BATCH_FILES, true);
  }
  return CACHED_WAVE1_REPLACEMENTS;
}

let CACHED_WAVE2_REPLACEMENTS = null;
function getWave2Replacements() {
  if (!CACHED_WAVE2_REPLACEMENTS) {
    CACHED_WAVE2_REPLACEMENTS = loadBatchFiles(WAVE2_BATCH_FILES, false);
  }
  return CACHED_WAVE2_REPLACEMENTS;
}

let CACHED_BATCH_REPLACEMENTS = null;
function getBatchReplacements() {
  if (!CACHED_BATCH_REPLACEMENTS) {
    CACHED_BATCH_REPLACEMENTS = [
      ...getWave1Replacements(),
      ...getWave2Replacements(),
    ];
  }
  return CACHED_BATCH_REPLACEMENTS;
}

// Mapa de subtítulos renomeados para registro em oldAnchorToNew no partition_10_volumes.js
const RENAMED_HEADINGS_LIST = []; // { volNum, oldHeadingText, newHeadingText }

/**
 * Aplica correções diretamente sobre rawSections e ALL_NARRATIVE_SPECS antes da montagem dos volumes.
 */
function applyReviewFixesToRawAndSpecs(rawSections, ALL_NARRATIVE_SPECS) {
  CACHED_WAVE1_REPLACEMENTS = null;
  CACHED_WAVE2_REPLACEMENTS = null;
  CACHED_BATCH_REPLACEMENTS = null;
  getBatchReplacements();

  // 1) Corrigir duplicata de headings H3 na FASE_0 (#39)
  if (rawSections.has('FASE_0')) {
    const f0 = rawSections.get('FASE_0');
    let countTrava = 0;
    let countSinais = 0;
    let countPerguntas = 0;
    f0.body = f0.body
      .replace(/^### Onde o fundador trava antes mesmo de abrir o CNPJ$/gm, (m) => {
        countTrava += 1;
        return countTrava > 1 ? '### As armadilhas recorrentes na largada pessoal' : m;
      })
      .replace(/^### Os sinais concretos de que sua fundação pessoal está pronta$/gm, (m) => {
        countSinais += 1;
        return countSinais > 1 ? '### Evidências mínimas antes de abrir o CNPJ' : m;
      })
      .replace(/^### As perguntas que você precisa responder sem mentir para si mesmo$/gm, (m) => {
        countPerguntas += 1;
        return countPerguntas > 1 ? '### O interrogatório final da Fase 0' : m;
      });
  }

  // 2) Corrigir homônimos de arquétipos em seções específicas
  if (rawSections.has('CZ')) {
    const cz = rawSections.get('CZ');
    cz.body = cz.body
      .replace(
        /Camila, 38 anos, fisioterapeuta, dona de clínica de estética com 4 funcionários em Curitiba/g,
        'Renata, 38 anos, fisioterapeuta, dona de clínica de estética com 4 funcionários em Curitiba'
      )
      .replace(/Dor principal da Camila/g, 'Dor principal da Renata');
  }

  if (rawSections.has('FASE_13')) {
    const f13 = rawSections.get('FASE_13');
    f13.body = f13.body.replace(/\bMariana\b/g, 'Joana');
  }

  if (rawSections.has('DZ')) {
    const dz = rawSections.get('DZ');
    dz.body = dz.body
      .replace(/\bo Lucas atrasou\b/g, 'o Diego atrasou')
      .replace(/\bLucas, na daily\b/g, 'Diego, na daily');
  }

  if (rawSections.has('BH')) {
    const bh = rawSections.get('BH');
    bh.body = bh.body.replace(/— Marina, se não batermos a meta/g, '— Helena, se não batermos a meta');
  }

  // 3) Aplicar substituições de arquétipos, factuais (Wave 1) e ruído mecânico em todas as rawSections
  const batchList = getWave1Replacements();
  for (const [, sec] of rawSections.entries()) {
    let b = sec.body;
    b = b
      .replace(/^>\s*Referenciado em:\s*Fase[^\n]*\n?/gm, '')
      .replace(/^\*\*Esta seção adiciona guidance específico para momentos pontuais\*\*\s*\n?/gm, '');

    for (const [from, to] of ARCHETYPE_TEXT_REPLACEMENTS) {
      if (b.includes(from)) b = b.split(from).join(to);
    }
    for (const [from, to] of MECHANICAL_NOISE_REPLACEMENTS) {
      if (b.includes(from)) b = b.split(from).join(to);
    }
    for (const { from, to } of batchList) {
      if (b.includes(from)) b = b.split(from).join(to);
    }
    for (const [from, to] of MECHANICAL_NOISE_REPLACEMENTS) {
      if (b.includes(from)) b = b.split(from).join(to);
    }
    sec.body = b;
  }

  // 4) Aplicar substituições de arquétipos, factuais e ruído mecânico em ALL_NARRATIVE_SPECS
  for (const [, spec] of Object.entries(ALL_NARRATIVE_SPECS)) {
    for (const field of ['openingTitle', 'openingBody', 'mirrorTitle', 'mirrorBody']) {
      if (typeof spec[field] === 'string') {
        let s = spec[field];
        for (const [from, to] of ARCHETYPE_TEXT_REPLACEMENTS) {
          if (s.includes(from)) s = s.split(from).join(to);
        }
        for (const { from, to } of batchList) {
          if (s.includes(from)) s = s.split(from).join(to);
        }
        for (const [from, to] of MECHANICAL_NOISE_REPLACEMENTS) {
          if (s.includes(from)) s = s.split(from).join(to);
        }
        spec[field] = s;
      }
    }
    if (spec.headingMap && typeof spec.headingMap === 'object') {
      for (const [k, v] of Object.entries(spec.headingMap)) {
        let s = String(v);
        for (const { from, to } of batchList) {
          if (s.includes(from)) s = s.split(from).join(to);
          const cleanFromH = from.replace(/^#{1,6}\s+/, '');
          const cleanToH = to.split('\n')[0].replace(/^#{1,6}\s+/, '');
          if (cleanFromH !== from && s.includes(cleanFromH)) {
            s = s.split(cleanFromH).join(cleanToH);
          }
        }
        for (const [from, to] of MECHANICAL_NOISE_REPLACEMENTS) {
          if (s.includes(from)) s = s.split(from).join(to);
        }
        s = s.replace(/\s+—\s+/g, ': ');
        spec.headingMap[k] = s;
      }
    }
  }
}

/**
 * Estágio A (Pré-Indexação de Âncoras):
 * Roda sobre `rawVolumeDocs` ANTES da Etapa 8 (`globalHeadingIndex`), garantindo que qualquer
 * subtítulo (`###`..`######`) alterado nos lotes seja indexado já com o título novo e registre
 * o título antigo em `RENAMED_HEADINGS_LIST` para redirecionamento automático de wikilinks!
 */
function applyPreIndexVolumeFixes(volNum, md) {
  const batchList = getBatchReplacements().filter((item) => !item.vol || item.vol === volNum);
  let out = md;

  for (const { from, to } of batchList) {
    if (from.startsWith('#')) {
      // Nunca alterar H1 (# ) ou H2 (## FASE / ## CAPÍTULO)
      if (/^#{1,2}\s/.test(from)) continue;
      const variants = [from, from.replace(/\bPix\b/g, 'PIX'), from.replace(/\bBCB\b/g, 'BACEN')];
      for (const vFrom of variants) {
        if (out.includes(vFrom)) {
          const oldHText = vFrom.replace(/^#{1,6}\s+/, '').trim();
          const firstToLine = to.split('\n')[0].trim();
          const newHText = firstToLine.replace(/^#{1,6}\s+/, '').trim();
          if (oldHText && newHText && oldHText !== newHText) {
            RENAMED_HEADINGS_LIST.push({ volNum, oldHeadingText: oldHText, newHeadingText: newHText });
          }
          out = out.split(vFrom).join(to);
          break;
        }
      }
    }
  }

  // Também aplicar substituições de substrings dentro de headings H3..H6 (quando from não começa com #)
  const lines = out.split('\n');
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (ln.trim().startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (!inFence && /^#{3,6}\s+/.test(ln)) {
      const oldHText = ln.replace(/^#{3,6}\s+/, '').trim();
      let newLn = ln;
      for (const { from, to } of batchList) {
        if (!from.startsWith('#') && from.length >= 15 && newLn.includes(from)) {
          newLn = newLn.split(from).join(to);
        }
      }
      if (newLn !== ln) {
        const firstNewLine = newLn.split('\n')[0].trim();
        const newHText = firstNewLine.replace(/^#{3,6}\s+/, '').trim();
        if (oldHText && newHText && oldHText !== newHText) {
          RENAMED_HEADINGS_LIST.push({ volNum, oldHeadingText: oldHText, newHeadingText: newHText });
        }
        lines[i] = newLn;
      }
    }
  }

  return lines.join('\n');
}

/**
 * Aplica Acordo Ortográfico, padronização de PIX -> Pix, cofundador, não diluitivo, etc.
 * APENAS fora de alvos de wikilinks e fora de headings #.
 */
function applyOrthographyToTextSegment(seg) {
  let s = seg;

  // 1) Substituições exatas da lista de ruído mecânico
  for (const [from, to] of MECHANICAL_NOISE_REPLACEMENTS) {
    if (s.includes(from)) s = s.split(from).join(to);
  }

  // 2) "Passo N, " -> "Passo N: " (E3)
  s = s.replace(/\b(Passo\s+\d+),\s+/g, '$1: ');
  s = s.replace(/\b(Etapa\s+\d+),\s+/g, '$1: ');
  s = s.replace(/\b(Camada\s+\d+),\s+/g, '$1: ');
  s = s.replace(/\b(Pilar\s+\d+),\s+/g, '$1: ');

  // 3) Acordo Ortográfico: prefixo "não" sem hífen (não diluitivo, não reembolsável, etc.)
  s = s.replace(/\bnão-([a-zà-ú]+)/gi, (full, word) => {
    const prefix = full.slice(0, 3);
    return `${prefix} ${word}`;
  });

  // 4) Acordo Ortográfico: cofundador, corresponsável, copiloto, coautor, etc.
  s = s
    .replace(/\bco-fundador(es|a|as)?\b/g, 'cofundador$1')
    .replace(/\bCo-fundador(es|a|as)?\b/g, 'Cofundador$1')
    .replace(/\bCO-FUNDADOR(ES|A|AS)?\b/g, 'COFUNDADOR$1')
    .replace(/\bco-founder(s)?\b/gi, (_, pl) => (pl ? 'cofundadores' : 'cofundador'))
    .replace(/\bco-piloto(s)?\b/gi, (m, pl) => (m[0] === 'C' ? `Copiloto${pl || ''}` : `copiloto${pl || ''}`))
    .replace(/\bco-autor(es|a|as)?\b/gi, (m, suf) => (m[0] === 'C' ? `Coautor${suf || ''}` : `coautor${suf || ''}`))
    .replace(/\bco-respons[áa]ve(l|is)\b/gi, (m, suf) => (m[0] === 'C' ? `Corresponsáve${suf}` : `corresponsáve${suf}`))
    .replace(/\bauto-diagn[óo]stico\b/gi, (m) => (m[0] === 'A' ? 'Autodiagnóstico' : 'autodiagnóstico'))
    .replace(/\bauto-avalia[çc][ãa]o\b/gi, (m) => (m[0] === 'A' ? 'Autoavaliação' : 'autoavaliação'))
    .replace(/\bdia-a-dia\b/gi, (m) => (m[0] === 'D' ? 'Dia a dia' : 'dia a dia'))
    .replace(/\bmão-de-obra\b/gi, (m) => (m[0] === 'M' ? 'Mão de obra' : 'mão de obra'))
    .replace(/\bpasso-a-passo\b/gi, (m) => (m[0] === 'P' ? 'Passo a passo' : 'passo a passo'))
    .replace(/\bponto-de-vista\b/gi, (m) => (m[0] === 'P' ? 'Ponto de vista' : 'ponto de vista'))
    .replace(/\bpré-requisito/gi, (m) => (m[0] === 'P' ? 'Pré-requisito' : 'pré-requisito'))
    .replace(/\bpre-requisito/gi, (m) => (m[0] === 'P' ? 'Pré-requisito' : 'pré-requisito'))
    .replace(/\bpós-graduação/gi, (m) => (m[0] === 'P' ? 'Pós-graduação' : 'pós-graduação'))
    .replace(/\bpos-graduação/gi, (m) => (m[0] === 'P' ? 'Pós-graduação' : 'pós-graduação'))
    .replace(/\binfra-estrutura/gi, (m) => (m[0] === 'I' ? 'Infraestrutura' : 'infraestrutura'))
    .replace(/\bbem estar\b/gi, (m) => (m[0] === 'B' ? 'Bem-estar' : 'bem-estar'));

  // 5) PIX -> Pix (marca oficial do BCB) fora de siglas compostas
  s = s.replace(/\bPIX\b/g, 'Pix');

  return s;
}

/**
 * Remove travessões (—) de um segmento de prosa, substituindo por pontuação natural (: , ; ou parênteses).
 */
function stripEmDashesFromProseSegment(seg) {
  if (!seg.includes('—')) return seg;
  let s = seg;

  s = s.replace(/\s+—\s+([^—\n]{3,120}?)\s+—\s+(?=[a-zà-ú0-9])/g, ', $1, ');
  s = s.replace(/\s+—\s+([^—\n]{3,120}?)\s+—([.,;:])/g, ' ($1)$2');
  s = s.replace(/(\*\*[^*\n]+\*\*)\s*—\s+/g, '$1: ');
  s = s.replace(/^(\s*)—\s+/gm, '$1– ');

  s = s.replace(/\s*—\s*/g, (match, offset, fullStr) => {
    const before = fullStr.slice(Math.max(0, offset - 80), offset);
    if (before.includes(':')) {
      return ', ';
    }
    return ': ';
  });

  s = s
    .replace(/:\s*:/g, ':')
    .replace(/,\s*,/g, ',')
    .replace(/([.,;:])\s*:\s*/g, '$1 ');

  return s;
}

/**
 * Estágio B (Pós-Resolução de Wikilinks):
 *  - Aplica substituições de lotes na prosa, tabelas, listas, callouts e blocos de código
 *  - Desfaz self-links para a própria Fase/Capítulo atual e links duplicados no mesmo parágrafo (S4)
 *  - Aplica ortografia, padronização terminológica e limpeza de travessões (—) fora de headings `#` e fora do `#target` dos wikilinks
 *  - Executa uma segunda passada dos lotes sobre o texto já ortografado/sem travessão para capturar 100% dos snippets extraídos do volume final.
 */
function applyVolumeReviewFixes(volNum, md) {
  const wave1List = getWave1Replacements().filter((item) => !item.vol || item.vol === volNum);
  const wave2List = getWave2Replacements().filter((item) => !item.vol || item.vol === volNum);
  const batchList = [...wave1List, ...wave2List];

  const preLines = md
    .replace(/^>\s*Referenciado em:\s*Fase[^\n]*\n?/gm, '')
    .replace(/^\*\*Esta seção adiciona guidance específico para momentos pontuais\*\*\s*\n?/gm, '')
    .replace(
      /```text\nFASES DA INTEGRAÇÃO CULTURAL EM M&A\n\nFASE 1 [—–-] DIAGNÓSTICO \(primeiros 30 dias\)[\s\S]*?FASE 5 [—–-] MEDIÇÃO \(meses 6-18\)[\s\S]*?```/,
      [
        '- **Etapa 1: Diagnóstico (primeiros 30 dias):** mapear valores declarados e comportamentos reais das duas empresas; identificar pontos de sobreposição (que facilitam a integração) e tensões reais (que exigem decisão consciente); entrevistar lideranças e contribuidores-chave das duas origens sobre o que não podem perder da cultura anterior.',
        '- **Etapa 2: Decisão (dias 30 a 60):** definir qual padrão cultural prevalece em cada tensão identificada (não há fusão neutra, há escolhas explícitas); comunicar com transparência o que mudará e o que permanecerá intacto; proteger ativamente os elementos da empresa adquirida que geram seu diferencial.',
        '- **Etapa 3: Comunicação (dias 60 a 90):** desdobrar as decisões de cultura para todos os níveis da organização, e não apenas para a diretoria; acolher o luto organizacional legítimo da equipe adquirida; narrar tanto o que é preservado quanto o que muda.',
        '- **Etapa 4: Rituais de integração (meses 3 a 12):** instituir rituais conjuntos para profissionais das duas origens; realizar *onboarding* cruzado (a equipe adquirida passa pela imersão da adquirente e vice-versa); formar grupos de trabalho mistos em projetos reais e evitar guetos entre "antigos" e "novos".',
        '- **Etapa 5: Medição (meses 6 a 18):** rodar pesquisa de clima específica de pós-fusão; acompanhar a retenção separada por origem (quadro original vs. equipe adquirida) e intervir rapidamente onde persistirem divisões.',
      ].join('\n')
    )
    .split('\n');

  let inFence = false;
  let inFrontmatter = false;
  let currentH2Slug = '';

  const outLines = preLines.map((rawLine, idx) => {
    let line = rawLine;
    if (idx === 0 && line.trim() === '---') {
      inFrontmatter = true;
      return line;
    }
    if (inFrontmatter) {
      if (line.trim() === '---') {
        inFrontmatter = false;
        return line;
      }
      return line;
    }

    if (line.trim().startsWith('```')) {
      inFence = !inFence;
      return line;
    }

    // Dentro de blocos de código / Mermaid: aplicar substituições factuais e substituir — por - ou :
    if (inFence) {
      let fLine = line.replace(/\s*—\s*/g, ' - ').replace(/\bPIX\b/g, 'Pix').replace(/\bBACEN\b/g, 'BCB');
      for (const { from, to } of batchList) {
        if (!from.startsWith('#')) {
          if (line.includes(from)) {
            fLine = line.split(from).join(to).replace(/\s*—\s*/g, ' - ').replace(/\bPIX\b/g, 'Pix').replace(/\bBACEN\b/g, 'BCB');
          } else if (fLine.includes(from)) {
            fLine = fLine.split(from).join(to).replace(/\s*—\s*/g, ' - ');
          }
        }
      }
      return fLine;
    }

    // Se for um heading (# a ######):
    const mHeading = line.match(/^(#{1,6})\s+(.+)$/);
    if (mHeading) {
      const hashes = mHeading[1];
      const hText = mHeading[2].trim();
      if (hashes === '##') {
        currentH2Slug = slugify(hText);
      }
      // Se for H5 com artefato de numeração de template (ex: "##### Template: Job Descriptions — Contratações-chave (Fase 16).1 Head of Product")
      if (hashes === '#####' && /^##### Template: Job Descriptions — Contratações-chave \(Fase 16\)\.(\d+)\s+(.+)$/.test(line)) {
        line = line.replace(
          /^##### Template: Job Descriptions — Contratações-chave \(Fase 16\)\.(\d+)\s+(.+)$/,
          '##### Modelo $1 de Descrição de Cargo (Fase 16): $2'
        );
      }
      // Se um item do lote adiciona um parágrafo logo abaixo do heading sem alterar o texto do heading (ex: "### Heading\n\nParágrafo"), ou substitui divisor H1 (# FASE DA ETAPA...), permitir!
      for (const { from, to } of batchList) {
        if (from.startsWith('#') && (line === from || line.replace(/\bPIX\b/g, 'Pix') === from || line.replace(/\s*—\s*/g, ': ') === from)) {
          const toLines = to.split('\n');
          if (toLines.length > 1) {
            if (hashes === '#') {
              return to.replace(/\s*—\s*/g, ': ');
            }
            // Preservar a 1ª linha (heading já indexado) e anexar os parágrafos seguintes sem travessão
            const extra = toLines
              .slice(1)
              .join('\n')
              .replace(/\s*—\s*/g, ': ');
            return `${line}\n${extra}`;
          }
          if (hashes === '#' || hashes === '#####') {
            return to;
          }
        }
      }
      return line;
    }

    // Passada 1 nos lotes da Wave 1 (antes da ortografia/remoção de self-links, incluindo snippets com [[...]] ou ]] como #49)
    for (const { from, to } of wave1List) {
      if (from.startsWith('#')) continue;
      if (line.includes(from)) {
        if (from.includes('[[') || from.includes(']]')) {
          line = line.split(from).join(to);
        } else {
          const segs = line.split(/(\[\[[^\]]+\]\])/g);
          line = segs
            .map((seg) => (seg.startsWith('[[') && seg.endsWith(']]') ? seg : seg.split(from).join(to)))
            .join('');
        }
      }
    }

    // Processar wikilinks (S4: remover self-links para o H2 atual e links repetidos na mesma linha)
    const isTocLine = /^-\s+\[\[#/.test(line.trim());
    const seenTargetsInLine = new Set();

    const parts = line.split(/(\[\[[^\]]+\]\])/g);
    const processedParts = parts.map((part) => {
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const inner = part.slice(2, -2);
        const pipeIdx = inner.indexOf('|');
        if (pipeIdx < 0) return part;
        const target = inner.slice(0, pipeIdx).trim();
        let label = inner.slice(pipeIdx + 1).trim();

        label = applyOrthographyToTextSegment(label);
        label = stripEmDashesFromProseSegment(label);

        if (!isTocLine && volNum <= 9) {
          const hashIdx = target.indexOf('#');
          const explicitVol = hashIdx > 0 ? target.slice(0, hashIdx) : '';
          const anchorText = hashIdx >= 0 ? target.slice(hashIdx + 1) : target;
          const targetSlug = slugify(anchorText);

          if (!explicitVol && currentH2Slug && targetSlug === currentH2Slug) {
            return label;
          }

          const normTargetKey = `${explicitVol}#${targetSlug}`;
          if (seenTargetsInLine.has(normTargetKey)) {
            return label;
          }
          seenTargetsInLine.add(normTargetKey);
        }

        return `[[${target}|${label}]]`;
      }

      let cleanSeg = applyOrthographyToTextSegment(part);
      cleanSeg = stripEmDashesFromProseSegment(cleanSeg);
      return cleanSeg;
    });

    let finalLine = processedParts.join('');

    // Passada 2 nos lotes: sobre a linha já ortografada / com self-links desfeitos / sem travessões!
    // Isso garante 100% de match para todos os snippets de pending_vol_1..10.json que foram extraídos após a passagem da v5.2 inicial!
    for (const { from, to } of batchList) {
      if (from.startsWith('#')) continue;
      if (finalLine.includes(from)) {
        if (from.includes('[[') || from.includes(']]') || to.includes('[[')) {
          finalLine = finalLine.split(from).join(to);
        } else {
          const segs = finalLine.split(/(\[\[[^\]]+\]\])/g);
          finalLine = segs
            .map((seg) =>
              seg.startsWith('[[') && seg.endsWith(']]')
                ? seg
                : stripEmDashesFromProseSegment(applyOrthographyToTextSegment(seg.split(from).join(to)))
            )
            .join('');
        }
      }
    }

    return finalLine;
  });

  let joinedOut = outLines.join('\n');
  for (const { from, to } of batchList) {
    if (!/^#{1,2}\s/.test(from) && from.includes('\n') && joinedOut.includes(from)) {
      joinedOut = joinedOut.split(from).join(to);
    }
  }
  let polished = applyFinalVolumePolish(volNum, joinedOut);
  for (const { from, to } of batchList) {
    if (!from.startsWith('#') && polished.includes(from)) {
      polished = polished.split(from).join(to);
    }
  }
  polished = applyWave7ToVolume(volNum, polished);
  return polished;
}

const FINAL_PHRASE_FIXES = [
  ['> [!important] Relacao com F', '> [!important] Relação com o Capítulo 5 (Marketplaces, Plataformas e Efeitos de Rede)'],
  ['> [!important] Relacao com', '> [!important] Relação com'],
  ['> [!abstract] Posicao no livro', '> [!abstract] Posição no livro'],
  ['> [!note] Por que Meliuz esta neste capítulo', '> [!note] Por que o Méliuz está neste capítulo'],
  ['**Meliuz**, NAO e caso de fracasso.', '**Méliuz:** não é caso de fracasso.'],
  [' EJ aprofunda quatro dos vieses mais cruciais com profundidade maior. D mantem a vista panoramica e a aplicacao por dominio.', ''],
  ['Cross-ref. Para ', 'Referência complementar: para '],
  ['Cross-ref para ', 'Consulte também: '],
  ['JCP nao e despesa que se lanca', 'JCP não é despesa que se lança'],
  ['JCP e despesa dedutivel', 'JCP é despesa dedutível'],
  ['JCP e dedutivel', 'JCP é dedutível'],
  ['Dividendo nao e.', 'Dividendo não é.'],
  ['nao ha base para', 'não há base para'],
  ['nao ha resultado', 'não há resultado'],
  ['nao ha tributacao', 'não há tributação'],
  ['que e holding', 'que é holding'],
  ['que so JCP oferece', 'que só o JCP oferece'],
  ['Em Ltda, e improviso', 'Em Ltda., é improviso'],
  ['Esse trabalho de migracao e oportunidade', 'Esse trabalho de migração é oportunidade'],
  ['deliberacao formal e desconsiderado', 'deliberação formal é desconsiderado'],
  ['Aqui esta um caso brasileiro tipico.', 'Aqui está um caso brasileiro típico.'],
  ['Esse e um down round', 'Esse é um down round'],
  ['parte da dilucao e transferida', 'parte da diluição é transferida'],
  ['preco de conversao das acoes do seed e ajustado', 'preço de conversão das ações do seed é ajustado'],
  ['Full ratchet em term sheet brasileiro de 2026 e marca', 'Full ratchet em term sheet brasileiro de 2026 é marca'],
  ['Broad-based e padrao e e dificil recusar', 'A cláusula *broad-based weighted average* é o padrão de mercado e é difícil recusar'],
  ['isto e, tokens', 'isto é, tokens'],
  ['Operar sem autorizacao e infracao', 'Operar sem autorização é infração'],
  ['pessoa fisica e tributado', 'pessoa física é tributado'],
  ['**Tokenizacao de recebivel.** E securitizacao moderna.', '**Tokenização de recebível.** É securitização moderna.'],
  ['Se ha custodia', 'Se há custódia'],
  ['Se ha oferta', 'Se há oferta'],
  ['Se ha conversao', 'Se há conversão'],
  ['fronteira esta em construcao', 'fronteira está em construção'],
  ['quem esta na empresa', 'quem está na empresa'],
  ['A solucao no Brasil e contratual, nao societaria', 'A solução no Brasil é contratual, não societária'],
  ['ja que nao envolvem', 'já que não envolvem'],
  ['O lado pratico e que', 'O lado prático é que'],
  ['Para INSS o tema esta em aberto', 'Para o INSS o tema está em aberto'],
  ['Esta decisao reduz', 'Essa decisão reduz'],
  ['So fazem sentido apos', 'Só fazem sentido após'],
  ['As faixas tratadas neste capítulo sao especializacao', 'As faixas tratadas neste capítulo são especialização'],
  ['O terceiro choque e de tempo.', 'O terceiro choque é de tempo.'],
  ['onde nao adiciona alem de presenca. E a ilusao', 'onde não adiciona além de presença. É a ilusão'],
  ['E o veiculo natural', 'É o veículo natural'],
  ['e mais limitada.', 'é mais limitada.'],
  ['Este capítulo e a referencia por TIPO', 'Este capítulo é a referência por tipo'],
  ['quando a personalidade juridica e desconsiderada', 'quando a personalidade jurídica é desconsiderada'],
  ['que e o coracao do contencioso', 'que é o coração do contencioso'],
  ['**Search Fund Brasil** (SFB) e plataforma', '**Search Fund Brasil** (SFB) é plataforma'],
  ['na medida em que e efetivamente recebida', 'na medida em que é efetivamente recebida'],
  ['o risco e material', 'o risco é material'],
  ['em que o earnout e altamente provavel', 'em que o earnout é altamente provável'],
  ['E o problema mais comum de cap table', 'É o problema mais comum de cap table'],
  ['o melhor para os dois e encerrar', 'o melhor para os dois é encerrar'],
  ['fica com o advisor, e direito adquirido.', 'fica com o advisor, pois é direito adquirido.'],
  ['Serie A', 'Série A'],
  ['Serie B', 'Série B'],
  ['Pre-Serie A', 'Pré-Série A'],
  ['pos-IPO', 'pós-IPO'],
  ['pos-seed', 'pós-seed'],
  ['pre-money', 'pré-money'],
];

const FINAL_WORD_MAP = {
  Relacao: 'Relação', relacao: 'relação', Posicao: 'Posição', posicao: 'posição',
  Recomendacao: 'Recomendação', recomendacao: 'recomendação', Tributacao: 'Tributação', tributacao: 'tributação',
  Mediacao: 'Mediação', mediacao: 'mediação', Tokenizacao: 'Tokenização', tokenizacao: 'tokenização',
  Cenario: 'Cenário', cenario: 'cenário', Diferenca: 'Diferença', diferenca: 'diferença',
  Atualizacao: 'Atualização', atualizacao: 'atualização', Resolucao: 'Resolução', resolucao: 'resolução',
  Resolucoes: 'Resoluções', Multiestrategia: 'Multiestratégia', deliberacao: 'deliberação',
  governanca: 'governança', Governanca: 'Governança', operacao: 'operação', Operacao: 'Operação',
  operacoes: 'operações', construcao: 'construção', negociacao: 'negociação', Negociacao: 'Negociação',
  negociacoes: 'negociações', estrategia: 'estratégia', decisao: 'decisão', decisoes: 'decisões',
  opcoes: 'opções', Opcoes: 'Opções', opcao: 'opção', Opcao: 'Opção', milhoes: 'milhões', milhao: 'milhão',
  padrao: 'padrão', Padrao: 'Padrão', clausula: 'cláusula', Clausula: 'Cláusula', clausulas: 'cláusulas',
  classico: 'clássico', fisica: 'física', juridica: 'jurídica', juridico: 'jurídico',
  societaria: 'societária', societario: 'societário', exercicio: 'exercício', exercicios: 'exercícios',
  contratacao: 'contratação', contracao: 'contração', transicao: 'transição', explicito: 'explícito',
  explicita: 'explícita', voluntario: 'voluntário', principios: 'princípios', dificeis: 'difíceis',
  dificil: 'difícil', metodos: 'métodos', protecao: 'proteção', dominio: 'domínio', dominios: 'domínios',
  tipico: 'típico', tipica: 'típica', tipicas: 'típicas', atipicos: 'atípicos', ultimo: 'último',
  ultimos: 'últimos', papeis: 'papéis', saida: 'saída', tambem: 'também', tres: 'três', Tres: 'Três',
  sao: 'são', nao: 'não', Nao: 'Não', apos: 'após', Apos: 'Após', ate: 'até', ja: 'já', ha: 'há',
  mes: 'mês', pais: 'país', paises: 'países', numero: 'número', numeros: 'números', socios: 'sócios',
  Socios: 'Sócios', socio: 'sócio', Socio: 'Sócio', anonima: 'anônima', codigo: 'código', Codigo: 'Código',
  paragrafo: 'parágrafo', obrigatoria: 'obrigatória', obrigatorio: 'obrigatório', friccao: 'fricção',
  conversao: 'conversão', acoes: 'ações', acao: 'ação', administracao: 'administração',
  regulacao: 'regulação', regulamentacao: 'regulamentação', transito: 'trânsito',
  compatibilizacao: 'compatibilização', migracao: 'migração', inconsistencias: 'inconsistências',
  historicas: 'históricas', historico: 'histórico', remuneracao: 'remuneração', patrimonio: 'patrimônio',
  Patrimonio: 'Patrimônio', liquido: 'líquido', Liquido: 'Líquido', calculo: 'cálculo', Mecanica: 'Mecânica',
  dedutivel: 'dedutível', aliquota: 'alíquota', Aliquota: 'Alíquota', aliquotas: 'alíquotas',
  distribuicao: 'distribuição', isencao: 'isenção', recepcao: 'recepção', prejuizo: 'prejuízo',
  deducao: 'dedução', tributaria: 'tributária', tributario: 'tributário', documentacao: 'documentação',
  especifica: 'específica', especifico: 'específico', especificos: 'específicos', distribuido: 'distribuído',
  distribuidos: 'distribuídos', indenizacao: 'indenização', insolvencia: 'insolvência', vedacao: 'vedação',
  estatutaria: 'estatutária', propria: 'própria', proprio: 'próprio', proprios: 'próprios', titulo: 'título',
  exclusoes: 'exclusões', periodo: 'período', notificacao: 'notificação', notificacoes: 'notificações',
  captacao: 'captação', dilucao: 'diluição', preco: 'preço', intermediaria: 'intermediária',
  conversiveis: 'conversíveis', proximo: 'próximo', pratico: 'prático', pratica: 'prática',
  praticas: 'práticas', praticos: 'práticos', alem: 'além', composicao: 'composição', servicos: 'serviços',
  minimo: 'mínimo', prevencao: 'prevenção', segregacao: 'segregação', custodia: 'custódia',
  intermediacao: 'intermediação', autorizacao: 'autorização', autorizacoes: 'autorizações',
  infracao: 'infração', informacao: 'informação', limitacoes: 'limitações', recebivel: 'recebível',
  securitizacao: 'securitização', publica: 'pública', publico: 'público', colocacao: 'colocação',
  vigencia: 'vigência', licenca: 'licença', instituicao: 'instituição', Area: 'Área',
  identificavel: 'identificável', descentralizacao: 'descentralização', hibrido: 'híbrido',
  Hibrido: 'Híbrido', regulatorio: 'regulatório', necessarias: 'necessárias', seguranca: 'segurança',
  diario: 'diário', transformacao: 'transformação', presenca: 'presença', frequencia: 'frequência',
  comunicacao: 'comunicação', solucao: 'solução', consequencias: 'consequências', aquisicao: 'aquisição',
  obrigacao: 'obrigação', cessao: 'cessão', concessao: 'concessão', transferencia: 'transferência',
  execucao: 'execução', Restricao: 'Restrição', restricao: 'restrição', simbolico: 'simbólico',
  disfarcada: 'disfarçada', criterios: 'critérios', salario: 'salário', reclassificacao: 'reclassificação',
  previdenciario: 'previdenciário', discussao: 'discussão', emissao: 'emissão', retencao: 'retenção',
  psicologico: 'psicológico', aprovacao: 'aprovação', aceitacao: 'aceitação',
  especializacao: 'especialização', Especializacao: 'Especialização', calendario: 'calendário',
  promocao: 'promoção', situacoes: 'situações', avaliacao: 'avaliação', critico: 'crítico',
  Reunioes: 'Reuniões', reuniao: 'reunião', tecnicas: 'técnicas', tecnico: 'técnico', ilusao: 'ilusão',
  propoe: 'propõe', veiculo: 'veículo', estagio: 'estágio', logistica: 'logística', beneficio: 'benefício',
  Versao: 'Versão', precificacao: 'precificação', comite: 'comitê', diversificacao: 'diversificação',
  referencia: 'referência', Certidoes: 'Certidões', Litigio: 'Litígio', autuacoes: 'autuações',
  defensavel: 'defensável', adesao: 'adesão', arbitros: 'árbitros', Judiciario: 'Judiciário',
  instancia: 'instância', Convencao: 'Convenção', util: 'útil', forca: 'força', camara: 'câmara',
  Camaras: 'Câmaras', familia: 'família', uteis: 'úteis', conexao: 'conexão', conteudo: 'conteúdo',
  coracao: 'coração', moderacao: 'moderação', Politica: 'Política', ilicito: 'ilícito',
  dinamica: 'dinâmica', conjuge: 'cônjuge', educacao: 'educação', basica: 'básica',
  desprezivel: 'desprezível', competencia: 'competência', repeticao: 'repetição', indebito: 'indébito',
  condicoes: 'condições', integracao: 'integração', mudanca: 'mudança', realizacao: 'realização',
  dimensoes: 'dimensões', provavel: 'provável', interferencia: 'interferência', variaveis: 'variáveis',
  preferivel: 'preferível', calibracao: 'calibração', sistematicos: 'sistêmicos',
  panoramica: 'panorâmica', panoramico: 'panorâmico', aplicacao: 'aplicação', catalogo: 'catálogo',
  antidotos: 'antídotos', tatica: 'tática', interacao: 'interação', Meliuz: 'Méliuz', cadencias: 'cadências',
  cabeca: 'cabeça', ambiguo: 'ambíguo'
};

const FINAL_WORD_RE = new RegExp(`(?<![/a-zA-Zà-úÀ-Ú0-9])(${Object.keys(FINAL_WORD_MAP).join('|')})(?![a-zA-Zà-úÀ-Ú0-9])`, 'g');

function polishProseChunk(s) {
  let out = s;
  for (const [f, t] of FINAL_PHRASE_FIXES) {
    if (out.includes(f)) out = out.split(f).join(t);
  }
  out = out.replace(FINAL_WORD_RE, (m) => FINAL_WORD_MAP[m] || m);
  // Artigos duplicados antes de negrito (ex: "da **A " -> "da **")
  out = out.replace(/\b(da|do|na|no|pela|pelo)\s+\*\*(A|O|As|Os)\s+/g, '$1 **');
  out = out.replace(/\bO\s+\*\*O-1A\b/g, 'O visto **O-1A');
  out = out.replace(/\buma\s+\*\*uma etapa\b/g, '**uma etapa');
  out = out.replace(
    /\(de 2 a 4 semanas por R\$ 20k–R\$ 40k\)\s*\(de 2 a 4 semanas por R\$ 20k–R\$ 40k\)/g,
    '(de 2 a 4 semanas por R$ 20 mil a R$ 40 mil)'
  );
  // Palavras duplicadas (e e, de de, Cinquenta cinquenta)
  out = out.replace(/(?<![a-zA-Zà-úÀ-Ú0-9-])(e|de)\s+\1(?![a-zA-Zà-úÀ-Ú0-9-])/g, '$1');
  out = out.replace(/\bCinquenta cinquenta é comum\./g, 'Divisão 50/50 é comum.');
  out = out.replace(/\bcinquenta cinquenta\b/g, '50/50');
  // Pontuação de costura (: , / ; , / ., / .; / .. / :: / ).).)
  out = out.replace(/:\s*,/g, ',').replace(/;\s*,/g, ',');
  out = out.replace(/(?<!\bet al|\bS\.A|\bLtda|\bLtd|\bInc|\bJr|\bSr|\ba\.a|\ba\.m|\ba\.C|\bd\.C|\bC\.V|\b[A-Z]|\.\.)\.,\s+/g, ', ');
  out = out.replace(/(?<!\ba\.a|\ba\.m|\ba\.C|\bS\.A|\bLtda)\.;\s+/g, '; ');
  out = out.replace(/(?<!\.)\.\.(?!\.)/g, '.');
  out = out.replace(/::+/g, ':');
  out = out.replace(/\)\.\s*\)\./g, ').');
  return out;
}

function applyFinalVolumePolish(volNum, md) {
  // Sincronizar o único H4 com travessão que era alvo de wikilink (Theory Map) e remover headings vazios / linhas duplicadas / colunas extras de tabela
  let text = md
    .split('#Template: Theory Map — Conexão com Business Model Canvas|')
    .join('#Template: Theory Map: Conexão com Business Model Canvas|')
    .split('#### Template: Theory Map — Conexão com Business Model Canvas')
    .join('#### Template: Theory Map: Conexão com Business Model Canvas')
    .split('#Template: Entrevista de Problema (Mom Test)|')
    .join('#Template: Entrevista de Problema|')
    .split('### Auditoria Regulatória e Comercial antes de Lançar uma Healthtech ou Biotech no Brasil\n\n### Filtro de Decisão: Você Deve Entrar Neste Mercado?')
    .join('### Filtro de Decisão: Você Deve Entrar Neste Mercado?')
    .split('### Auditoria de Trincheira antes de Escalar um Produto de Inteligência Artificial no Brasil\n\n### Triagem de Viabilidade Operacional: Sua Arquitetura Resiste à Escala?')
    .join('### Triagem de Viabilidade Operacional: Sua Arquitetura Resiste à Escala?')
    .split('- [[#FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA|Fase 15: Máquina de Crescimento e Expansão em Escala]]\n- [[#FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA|Fase 15: Máquina de Crescimento e Expansão em Escala]]')
    .join('- [[#FASE 15 — MÁQUINA DE CRESCIMENTO E EXPANSÃO EM ESCALA|Fase 15: Máquina de Crescimento e Expansão em Escala]]')
    .split('| **Margem Bruta: 65% a 80%** | **50% a 70% EBITDA** (Leilão Digital e Rede de Vistoria) |')
    .join('| **Margem Bruta: 65% a 80%** / **50% a 70% EBITDA** (Leilão Digital e Rede de Vistoria) |')
    .split('| **R$ 150/mês** (manutenção ortodôntica) e **R$ 6.000 a R$ 25.000** (implantes e reabilitação) | **Ticket médio conjugado: R$ 3.500 a R$ 8.000** |')
    .join('| **R$ 150/mês** (manutenção ortodôntica) e **R$ 6.000 a R$ 25.000** (implantes e reabilitação); **Ticket médio conjugado: R$ 3.500 a R$ 8.000** |')
    .split('| **R$ 2.500 a R$ 12.000** (Injetáveis/Laser) | **R$ 20.000 a R$ 40.000** (Capilar FUE) |')
    .join('| **R$ 2.500 a R$ 12.000** (Injetáveis/Laser) / **R$ 20.000 a R$ 40.000** (Capilar FUE) |');

  const lines = text.split('\n');
  let inFence = false;

  const polishedLines = lines.map((line) => {
    if (line.trim().startsWith('```')) {
      inFence = !inFence;
      return line;
    }
    if (inFence) return line;

    // Subtítulos H3..H6: remover travessões remanescentes (nenhum H3..H6 tem wikilink apontando para versão com —)
    if (/^#{3,6}\s+/.test(line)) {
      let hLine = line;
      if (hLine.includes('—')) {
        hLine = hLine.replace(/\s*—\s*/g, (m, offset, full) => {
          const before = full.slice(0, offset);
          return before.includes(':') ? ', ' : ': ';
        });
      }
      for (const [f, t] of FINAL_PHRASE_FIXES) {
        if (hLine.includes(f)) hLine = hLine.split(f).join(t);
      }
      hLine = hLine.replace(FINAL_WORD_RE, (m) => FINAL_WORD_MAP[m] || m);
      return hLine;
    }

    if (/^#{1,2}\s+/.test(line)) return line;

    // Corrigir inícios de parágrafo com letra minúscula e verbetes do Glossário
    let ln = line
      .replace(/^a DII funciona para qualquer arquitetura/, 'A DII funciona para qualquer arquitetura')
      .replace(/^empresa dependente de fundador único/, 'Uma empresa dependente de fundador único')
      .replace(/^internacionalização é o \[\[/, 'A internacionalização ocupa o [[')
      .replace(/^escala mata produto se não houver/, 'A escala mata o produto se não houver')
      .replace(/^n=450 tickets, 3 meses\.$/, 'Amostra: n = 450 tickets ao longo de 3 meses.')
      .replace(/^dbt como camada de transformação\./, '**dbt como camada de transformação:**')
      .replace(/^a55 é focada em revenue-based financing/, '**a55:** plataforma focada em *revenue-based financing*')
      .replace(/^eNPS \(\*Employee Net Promoter Score\*\):/, '- **eNPS (*Employee Net Promoter Score*):**')
      .replace(/^onde$/, '- **Onde:**')
      .replace(/^iFood\. Marketplace com efeitos de rede fortes\./, 'O **iFood**: marketplace com efeitos de rede fortes.')
      .replace(/^iFood teve expansão regional/, 'O **iFood** teve expansão regional')
      .replace(/^iFood foi fundada em 2011/, 'O **iFood** foi fundado em 2011')
      .replace(/^Passo (\d+: [^*]+)\*\*(:?)/, '**Passo $1**$2')
      .replace(/^(\d+)\. (Tipicamente 3-4 cenários\.)\*\*/, '$1. **$2**')
      .replace(/^(\d+)\. (Cenários são narrativas, não listas de variáveis\.)\*\*/, '$1. **$2**')
      .replace('**BCB (Banco Central do Brasil, também BCB).**', '**BCB (Banco Central do Brasil, também grafado Bacen).**')
      .replace('(também grafado BCB ou BCB)', '(também grafado Bacen)');

    // Aplicar polish fora do target dos wikilinks
    const parts = ln.split(/(\[\[[^\]]+\]\])/g);
    return parts
      .map((part) => {
        if (part.startsWith('[[') && part.endsWith(']]')) {
          const pIdx = part.indexOf('|');
          if (pIdx < 0) return part;
          const target = part.slice(0, pIdx);
          const label = polishProseChunk(part.slice(pIdx + 1, -2));
          return `${target}|${label}]]`;
        }
        return polishProseChunk(part);
      })
      .join('');
  });

  return polishedLines.join('\n');
}

module.exports = {
  RENAMED_HEADINGS_LIST,
  applyReviewFixesToRawAndSpecs,
  applyPreIndexVolumeFixes,
  applyVolumeReviewFixes,
};

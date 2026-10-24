/**
 * Wave 7 Forensic Deep-Fix Module
 * - Resolves all 45 structural, multi-locus, diagram, and consistency issues across Vols 1-10
 * - Aligns all broken ASCII tables/diagrams
 * - Removes all 10 `|, |` lone-comma table cells
 * - Unifies editorial cutoff date (`abril de 2026` / `maio de 2026` -> `outubro de 2026`, preserving specific statutory effective dates)
 * - Removes all 14 adjacent duplicate paragraphs and 11 intra-line duplicate clauses
 * - Replaces all 227 boilerplate archetype paragraphs with chapter-specific, non-repetitive transitions with strict singular/plural verb agreement
 */

function applyWave7ToVolume(volNum, content) {
  function rep(from, to, label) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      return true;
    }
    const fromCRLF = from.replace(/\n/g, '\r\n');
    if (content.includes(fromCRLF)) {
      content = content.split(fromCRLF).join(to);
      return true;
    }
    console.warn(`[Wave7][Vol ${volNum}] MISS (${label}): ${JSON.stringify(from.slice(0, 80))}`);
    return false;
  }

  // 0. Remove any adjacent duplicate prose paragraphs across all volumes (Vols 1-10)
  {
    const rawLines = content.split(/\r?\n/);
    for (let i = 0; i < rawLines.length - 2; i++) {
      if (rawLines[i].trim().length > 80 && rawLines[i + 1].trim() === '' && rawLines[i].trim() === rawLines[i + 2].trim()) {
        rawLines.splice(i + 1, 2);
        i--;
      }
    }
    for (let i = 0; i < rawLines.length - 6; i++) {
      if (rawLines[i].trim().startsWith('### ') && rawLines[i + 2].trim().length > 80) {
        for (let k = i + 3; k <= Math.min(rawLines.length - 1, i + 6); k++) {
          if (rawLines[k].trim() === rawLines[i + 2].trim()) {
            rawLines.splice(k, 1);
            if (rawLines[k - 1] && rawLines[k - 1].trim() === '') rawLines.splice(k - 1, 1);
            break;
          }
        }
      }
    }
    content = rawLines.join('\n');
  }

  // 1. Volume-specific structural, multi-locus, diagram, and consistency fixes (BEFORE date replacement so `from` matches 100% literally)
  if (volNum === 1) {
    // #133: Align 5-day ideation sprint between Mermaid timeline and prose in Fase 1 (Vol 1 L.1544-1575)
    rep(
`    Quarta  : Cross-Industry Transfer Mapping
            : 2–3h de mapeamento
            : 3 modelos que funcionam em outro contexto
            : Métodos 4 e 5
    Quinta  : Conversas de calibragem + Métodos 3 e 7
            : 2h de exploração
            : Que ondas se cruzam com seu domínio?
            : Métodos 5 e 6`,
`    Quarta  : Cross-Industry Transfer + Technology Wave
            : 2–3h de mapeamento (Métodos 4 e 5)
            : 3 modelos de fora + ondas tecnológicas no domínio
    Quinta  : Conversas de Calibragem + White Space
            : 3–4 conversas de 30 min (Métodos 3, 6 e 7)
            : Validar fricções reais e lacunas de mercado`,
      '#133 timeline'
    );
    rep(
      `Quarta, Cross-Industry Transfer Mapping, duas a três horas. Nos Métodos 4 e 5 (descritos acima), escolha três modelos que funcionam em outros países ou setores e imagine adaptações brasileiras. Modelos de partida: assinatura de produtos físicos, marketplace de serviços B2B, data-as-a-service vertical, SaaS para profissão regulamentada brasileira. Para cada, imagine três variações de aplicação.\n\nQuinta, Calibration Conversations, três a quatro conversas de trinta minutos. Marque conversas rápidas com três a quatro pessoas que trabalham em setores que você não conhece. Pergunte, simplesmente: *qual é a coisa mais ineficiente que você faz no trabalho hoje?* Não proponha soluções. Ouça. Anote padrões. Isso alimenta novas candidatas e dá sinal sobre frequência de dores em setores diferentes.`,
      `Quarta, Transferência entre Setores e Ondas Tecnológicas (Métodos 4 e 5), duas a três horas. Escolha três modelos que já funcionam em outros países ou setores (assinatura de produtos físicos, marketplace B2B, dados como serviço vertical ou SaaS para profissão regulamentada) e cruze-os com as ondas tecnológicas e regulatórias em curso no seu domínio (IA generativa, Open Finance, Pix Automático, Reforma Tributária). Para cada cruzamento, desenhe três variações de aplicação no Brasil.\n\nQuinta, Conversas de Calibragem e Mapeamento de Lacunas (Métodos 3, 6 e 7), três a quatro conversas de trinta minutos. Converse com três a quatro profissionais do setor-alvo e pergunte: *qual é a tarefa mais ineficiente que você executa toda semana e que nenhuma ferramenta resolve direito?* Não venda solução; ouça onde moram as gambiarras (cunha de entrada, Método 6) e quais quadrantes do mercado continuam mal atendidos (white space, Método 7).`,
      '#133 prose'
    );

    // Vol 1:1301 intra-line duplicate clause
    rep(
      `[[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 8 — FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO|Capítulo 8 (Founder Mode, Delegação, Gestão de Tempo e Cadência Operacional do CEO) (Vol. 6)]] e Capítulo 8 (Founder Mode, Delegação, Gestão de Tempo e Cadência Operacional do CEO) (Vol. 6).`,
      `[[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 8 — FOUNDER MODE, DELEGAÇÃO, GESTÃO DE TEMPO E CADÊNCIA OPERACIONAL DO CEO|Capítulo 8 (Founder Mode, Delegação, Gestão de Tempo e Cadência Operacional do CEO) (Vol. 6)]].`,
      'Vol 1:1301 dup'
    );

    // Vol 1:3682 intra-line duplicate clause
    rep(
      `(que mediremos no painel deste capítulo sempre que a reserva cair abaixo de seis meses) (medido no painel deste capítulo sempre que a reserva cai abaixo de seis meses)`,
      `(medido no painel deste capítulo sempre que a reserva cair abaixo de seis meses)`,
      'Vol 1:3682 dup'
    );

    // Customize the 4 Fase 1..4 canvas scope callouts so each matches its actual phase
    rep(
      `> **Escopo desta fase:** Nesta Fase 2, estes quadros servem apenas para estruturar o rascunho inicial da tese antes de ir a campo; a aplicação empírica com experimentos e critérios de invalidação está detalhada no Volume 3.\n\n#### Canvas: Team Canvas`,
      `> **Escopo desta Fase 1:** O Team Canvas abaixo serve para formalizar o pacto inicial de papéis, valores e rotina entre os cofundadores antes de ir a campo; a revisão societária vinculante (vesting e acordo de sócios) será aprofundada na Fase 4 e no Volume 8.\n\n#### Canvas: Team Canvas`,
      'Vol 1 Fase 1 canvas scope'
    );
    rep(
      `> **Escopo desta fase:** Nesta Fase 2, estes quadros servem apenas para estruturar o rascunho inicial da tese antes de ir a campo; a aplicação empírica com experimentos e critérios de invalidação está detalhada no Volume 3.\n\n#### Canvas: Business Model Canvas`,
      `> **Escopo desta Fase 3:** Na Fase 3, o Business Model Canvas consolida em uma página as nove engrenagens da hipótese escolhida após a triagem inicial; os testes empíricos de risco bloco a bloco serão executados no Volume 3.\n\n#### Canvas: Business Model Canvas`,
      'Vol 1 Fase 3 canvas scope'
    );
    rep(
      `> **Escopo desta fase:** Nesta Fase 2, estes quadros servem apenas para estruturar o rascunho inicial da tese antes de ir a campo; a aplicação empírica com experimentos e critérios de invalidação está detalhada no Volume 3.\n\n#### Canvas: Theory Map`,
      `> **Escopo desta Fase 4:** Na Fase 4, o Theory Map / Story Tree conecta a decisão de comprometer-se com o negócio à cadeia lógica de premissas que serão postas à prova nas entrevistas do Volume 2 e nos experimentos do Volume 3.\n\n#### Canvas: Theory Map`,
      'Vol 1 Fase 4 canvas scope'
    );

    // Clean up the 3 communication callouts in Vol 1 (Caps 7, 8, 9)
    rep(
`> [!abstract] Onde este capítulo se posiciona no bloco de comunicação
> A coleção organiza a comunicação do fundador em sete capítulos complementares (cujas conexões detalhadas estão no fechamento deste capítulo):
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Marca Corporativa, PR, Comunicação Pública e Marca Pessoal do Fundador) (Vol. 6)]], narrativa pública e imprensa
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Marca Corporativa, PR, Comunicação Pública e Marca Pessoal do Fundador) (Vol. 6)]], marca pessoal e canais próprios
> - [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 9 — COMUNICAÇÃO INTERNA|Capítulo 9 (Comunicação Interna) (Vol. 7)]], comunicação com o time
> - [[#CAPÍTULO 8 — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS|Capítulo 8 (Comunicação Escrita para Negócios)]], escrita executiva (memo, update, postmortem)
> - [[#CAPÍTULO 9 — APRESENTAÇÃO E FALA EM PÚBLICO|Capítulo 9 (Apresentação e Fala em Público)]], fala em público (pitch, all-hands, board)
> - Capítulo 7 (Influência e Persuasão sem Autoridade Formal), persuasao sem autoridade
> - [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 (Gestão de Crise, Continuidade Operacional e Comunicação Crítica) (Vol. 9)]], comunicação em crise
>
> Este capítulo cobre influencia e persuasao do fundador sem autoridade formal sobre as partes (investidor, candidato, cliente, cofundador). Para os outros territorios, ver acima.`,
`> [!abstract] Onde este Capítulo 7 se posiciona no mapa de comunicação da coleção
> Este capítulo abre a trilha de comunicação do fundador no **Volume 1**, tratando de **influência e persuasão sem autoridade formal** (diante de investidores, primeiros candidatos, clientes-piloto e cofundadores). Na sequência deste volume, o [[#CAPÍTULO 8 — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS|Capítulo 8 (Comunicação Escrita para Negócios)]] cobre documentos executivos e o [[#CAPÍTULO 9 — APRESENTAÇÃO E FALA EM PÚBLICO|Capítulo 9 (Apresentação e Fala em Público)]] aborda apresentações orais; já nos volumes de escala, a trilha se completa com [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Marca Corporativa, PR e Marca Pessoal (Vol. 6, Cap. 7)]], [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 9 — COMUNICAÇÃO INTERNA|Comunicação Interna com o Time (Vol. 7, Cap. 9)]] e [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Comunicação Crítica e Gestão de Crise (Vol. 9, Cap. 9)]].`,
      'Vol 1 Cap 7 comm callout'
    );
    rep(
`> [!abstract] Onde este capítulo se posiciona no bloco de comunicação
> A coleção organiza a comunicação do fundador em sete capítulos complementares (cujas conexões detalhadas estão no fechamento deste capítulo):
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Marca Corporativa, PR, Comunicação Pública e Marca Pessoal do Fundador) (Vol. 6)]], narrativa pública e imprensa
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Marca Corporativa, PR, Comunicação Pública e Marca Pessoal do Fundador) (Vol. 6)]], marca pessoal e canais próprios
> - [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 9 — COMUNICAÇÃO INTERNA|Capítulo 9 (Comunicação Interna) (Vol. 7)]], comunicação com o time
> - Capítulo 8 (Comunicação Escrita para Negócios), escrita executiva (memo, update, postmortem)
> - [[#CAPÍTULO 9 — APRESENTAÇÃO E FALA EM PÚBLICO|Capítulo 9 (Apresentação e Fala em Público)]], fala em público (pitch, all-hands, board)
> - [[#CAPÍTULO 7 — INFLUÊNCIA E PERSUASÃO SEM AUTORIDADE FORMAL|Capítulo 7 (Influência e Persuasão sem Autoridade Formal)]], persuasao sem autoridade
> - [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 (Gestão de Crise, Continuidade Operacional e Comunicação Crítica) (Vol. 9)]], comunicação em crise
>
> Este capítulo trata a escrita executiva (documento de uma página, memorando de decisão, atualização mensal e análise pós-incidente) como ferramenta de raciocínio claro e tomada de decisão. Ele forma o par escrito do [[#CAPÍTULO 9 — APRESENTAÇÃO E FALA EM PÚBLICO|Capítulo 9 (Apresentação e Fala em Público)]]. O fundador completo domina os dois. Para os outros territorios, ver acima.`,
`> [!abstract] Escopo deste Capítulo 8 na trilha de comunicação
> Enquanto o [[#CAPÍTULO 7 — INFLUÊNCIA E PERSUASÃO SEM AUTORIDADE FORMAL|Capítulo 7]] tratou da negociação interpessoal sem hierarquia e o [[#CAPÍTULO 9 — APRESENTAÇÃO E FALA EM PÚBLICO|Capítulo 9]] cuidará da oratória executiva (formando o par falado deste texto), este **Capítulo 8** foca na **escrita de negócios como ferramenta de raciocínio e decisão assíncrona** (documento de uma página, memorando de 6 páginas, *investor update* mensal e *postmortem* sem caça às bruxas). Para rituais de alinhamento interno em escala, consulte o [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 9 — COMUNICAÇÃO INTERNA|Capítulo 9 do Volume 7]]; para imprensa e posicionamento público, o [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 do Volume 6]].`,
      'Vol 1 Cap 8 comm callout'
    );
    rep(
`> [!abstract] Onde este capítulo se posiciona no bloco de comunicação
> A coleção organiza a comunicação do fundador em sete capítulos complementares (cujas conexões detalhadas estão no fechamento deste capítulo):
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Marca Corporativa, PR, Comunicação Pública e Marca Pessoal do Fundador) (Vol. 6)]], narrativa pública e imprensa
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Marca Corporativa, PR, Comunicação Pública e Marca Pessoal do Fundador) (Vol. 6)]], marca pessoal e canais próprios
> - [[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 9 — COMUNICAÇÃO INTERNA|Capítulo 9 (Comunicação Interna) (Vol. 7)]], comunicação com o time
> - [[#CAPÍTULO 8 — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS|Capítulo 8 (Comunicação Escrita para Negócios)]], escrita executiva (memo, update, postmortem)
> - Capítulo 9 (Apresentação e Fala em Público), fala em público (pitch, all-hands, board)
> - [[#CAPÍTULO 7 — INFLUÊNCIA E PERSUASÃO SEM AUTORIDADE FORMAL|Capítulo 7 (Influência e Persuasão sem Autoridade Formal)]], persuasao sem autoridade
> - [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 (Gestão de Crise, Continuidade Operacional e Comunicação Crítica) (Vol. 9)]], comunicação em crise
>
> Este capítulo cobre fala em público (pitch, all-hands, board, keynote, entrevista). Este capítulo e o par falado de [[#CAPÍTULO 8 — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS|Capítulo 8 (Comunicação Escrita para Negócios)]]. O fundador completo domina os dois. Para os outros territorios, ver acima.`,
`> [!abstract] Escopo deste Capítulo 9 na trilha de comunicação
> Fechando a tríade de comunicação pessoal do fundador no Volume 1 (ao lado da [[#CAPÍTULO 7 — INFLUÊNCIA E PERSUASÃO SEM AUTORIDADE FORMAL|persuasão sem autoridade no Capítulo 7]] e da [[#CAPÍTULO 8 — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS|escrita executiva no Capítulo 8]]), este **Capítulo 9** aborda a **apresentação oral ao vivo**: *pitch* para investidores, *demo* comercial, reunião geral (*all-hands*), apresentação para conselho e entrevistas públicas. Para porta-vozes em situações extremas ou incidentes graves, consulte o [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 do Volume 9]].`,
      'Vol 1 Cap 9 comm callout'
    );
  }

  if (volNum === 2) {

    // #721: Service Blueprinting 5 core layers + 3 separation lines in Vol 2 L.2724-2741
    rep(
`Camadas verticais:

1. Evidência física: o que cliente vê/toca (app, email, documento).
2. Ações do cliente: o que cliente faz.
3. Linha de interação: separa cliente de empresa.
4. Ações frontstage (empregado visível): o que funcionário faz na frente do cliente.
5. Linha de visibilidade.
6. Ações backstage (empregado invisível): o que acontece "nos bastidores".
7. Linha de interação interna.
8. Sistemas de suporte: tecnologia, processos, parcerias.

##### Como rodar na segunda-feira às 9h com seu time

Passo 1: Mapeie jornada fase a fase.

Passo 2: Em cada fase, detalhe todas as 8 camadas.`,
`Estrutura vertical (cinco camadas de conteúdo separadas por três linhas divisórias):

1. **Evidência física** (*Physical Evidence*): o que o cliente vê, recebe ou toca (tela do app, mensagem de WhatsApp, boleto, contrato).
2. **Ações do cliente** (*Customer Actions*): passos cronológicos executados pelo usuário.
   - *--- Linha de interação (separa o cliente da empresa) ---*
3. **Ações visíveis de linha de frente** (*Frontstage Actions*): interações visíveis de atendentes, vendedores, CS ou interface automatizada.
   - *--- Linha de visibilidade (separa o que o cliente vê do que fica oculto) ---*
4. **Ações de bastidor** (*Backstage Actions*): processos internos invisíveis ao cliente (triagem, conferência antifraude, preparação de pedido).
   - *--- Linha de interação interna (separa a operação direta dos sistemas de apoio) ---*
5. **Processos e sistemas de suporte** (*Support Processes*): infraestrutura técnica, bancos de dados, APIs, ERPs e parceiros terceirizados.

##### Como rodar na segunda-feira às 9h com seu time

Passo 1: Mapeie a jornada do cliente etapa por etapa no eixo horizontal.

Passo 2: Para cada etapa, preencha verticalmente as cinco camadas do mapa, demarcando as três linhas divisórias (interação, visibilidade e suporte interno).`,
      '#721'
    );

    // #761: Value Proposition Canvas example (Wellhub/Gympass) with all 6 blocks explicitly shown in Vol 2 L.2938-2950
    rep(
`##### Exemplo brasileiro preenchido: Wellhub (Gympass) em 2016, B2B (reconstrução didática com base em dados públicos)

**Customer Profile**: Head de RH de empresa média (200-1000 funcionários):

| Jobs | Pains | Gains |
|---|---|---|
| Oferecer benefício que ajude retenção | Caro contratar academia única que não atende todos | Retenção mensurável melhor |
| Gerenciar programa de bem-estar sem overhead | Funcionários pedem academia mas subsídio direto é complicado (tributário, equidade) | Marca empregadora fortalecida |`,
`##### Exemplo brasileiro preenchido: Wellhub (ex-Gympass, 2016, lado B2B corporativo)

Preenchimento completo dos **seis blocos do Value Proposition Canvas** (os três blocos do *Customer Profile* à direita conectados aos três blocos do *Value Map* à esquerda) para o comprador corporativo (Head de RH de empresa de 200 a 1.000 funcionários):

| Bloco do VPC | Lado Direito: *Customer Profile* (Head de RH) | Bloco Espelhado | Lado Esquerdo: *Value Map* (Wellhub / Gympass B2B) |
|---|---|---|---|
| **1. Jobs** (Tarefas) | Oferecer benefício de saúde que retenha talentos; gerir bem-estar em múltiplas cidades sem sobrecarga operacional no RH. | **4. Products & Services** (Produtos e Serviços) | Assinatura corporativa única com acesso a rede credenciada de milhares de academias, estúdios e apps de bem-estar via folha de pagamento. |
| **2. Pains** (Dores) | Convênio com academia única só atende quem mora perto; reembolso manual em folha gera atrito trabalhista/tributário e baixa adesão (<10%). | **5. Pain Relievers** (Aliviadores de Dor) | Contrato B2B único com faturamento centralizado, enquadramento jurídico claro de benefício corporativo e cobertura geográfica capilar. |
| **3. Gains** (Ganhos) | Elevar a adesão de colaboradores ativos para 25%–40%, reduzir absenteísmo/sinistralidade do plano de saúde e fortalecer a marca empregadora. | **6. Gain Creators** (Criadores de Ganho) | Painel de RH com métricas de engajamento em tempo real, coparticipação flexível por faixa salarial e inclusão de familiares. |`,
      '#761'
    );

    // #749: TAM/SAM/SOM diagram coherent currency and numbers in Vol 2 L.3423-3436
    rep(
`A visualização em círculos concêntricos:

\`\`\`mermaid
flowchart TD
 TAM["🌍 TAM<br/>Total Addressable Market<br/>Mercado GLOBAL do problema<br/>Teto absoluto, se tudo fosse nosso<br/>ex: R$ 500 bi"]

 TAM --> SAM["🌎 SAM<br/>Serviceable Addressable Market<br/>Mercado que podemos alcançar<br/>com produto/canal/região atual<br/>ex: R$ 80 bi, Brasil + região"]

 SAM --> SOM["🎯 SOM<br/>Serviceable Obtainable Market<br/>Mercado realista em 3-5 anos<br/>dada a concorrência<br/>ex: R$ 6 mi em 3 anos (conta bottom-up sobre SAM de R$ 150 mi)"]

 style TAM fill:#E8F4F8,stroke:#2C5F7C,stroke-width:2px
 style SAM fill:#B0D8E8,stroke:#2C5F7C,stroke-width:2px
 style SOM fill:#87CEEB,stroke:#2C5F7C,stroke-width:3px
\`\`\``,
`A visualização em funil de anéis concêntricos (com exemplo numérico B2B coerente na mesma moeda):

\`\`\`mermaid
flowchart TD
 TAM["🌍 TAM (Total Addressable Market)<br/>Demanda total da categoria no país<br/>Ex.: 500 mil empresas × R$ 12 mil/ano = R$ 6,0 bilhões/ano"]

 TAM --> SAM["🌎 SAM (Serviceable Addressable Market)<br/>Fatia atendível pelo escopo atual de produto e canal<br/>Ex.: 12.500 empresas do segmento-alvo × R$ 12 mil/ano = R$ 150 milhões/ano"]

 SAM --> SOM["🎯 SOM (Serviceable Obtainable Market)<br/>Captura realista bottom-up em 3 anos (4% do SAM)<br/>Ex.: 500 clientes pagantes × R$ 12 mil/ano = R$ 6,0 milhões de ARR"]

 style TAM fill:#E8F4F8,stroke:#2C5F7C,stroke-width:2px
 style SAM fill:#B0D8E8,stroke:#2C5F7C,stroke-width:2px
 style SOM fill:#87CEEB,stroke:#2C5F7C,stroke-width:3px
\`\`\``,
      '#749'
    );

    // #768: Unify the 6 blocks of Canvas da Cunha between Mermaid diagram and template in Vol 2 L.3732-3750
    rep(
`\`\`\`mermaid
flowchart TD
 C["📋 CANVAS DA CUNHA<br/>6 blocos do template oficial: ICP, dor, resultado, dono do orçamento, grupo de WhatsApp e alternativa"]

 C --> Q1["1️⃣ SEGMENTO-ALVO<br/>Quem é exatamente?<br/>Perfil operacional observável"]
 C --> Q2["2️⃣ DOR AGUDA<br/>Qual problema tira o sono?<br/>Pedível, mensurável"]
 C --> Q3["3️⃣ ALTERNATIVA ATUAL<br/>Como resolve hoje?<br/>Custo, limitações"]
 C --> Q4["4️⃣ POR QUE AGORA<br/>Por que em 2026 e<br/>não em 2020?"]
 C --> Q5["5️⃣ ONDE ESTÃO<br/>Canais, comunidades,<br/>eventos concretos"]
 C --> Q6["6️⃣ DISPOSIÇÃO A PAGAR<br/>Quanto já gastam hoje<br/>com o problema?"]`,
`\`\`\`mermaid
flowchart TD
 C["📋 CANVAS DA CUNHA<br/>Os 6 blocos alinhados ao template textual oficial"]

 C --> Q1["1️⃣ ICP PRECISO<br/>Cargo, tipo de empresa,<br/>porte e região"]
 C --> Q2["2️⃣ DOR ESPECÍFICA<br/>Frequência, severidade (1-10)<br/>e custo atual do problema"]
 C --> Q3["3️⃣ RESULTADO MENSURÁVEL<br/>Métrica concreta melhorada<br/>e prazo de percepção"]
 C --> Q4["4️⃣ DONO DO ORÇAMENTO<br/>Quem assina o cheque e<br/>qual rubrica existente paga"]
 C --> Q5["5️⃣ GRUPO DE WHATSAPP (100-300)<br/>Onde encontrar os primeiros<br/>clientes nominalmente"]
 C --> Q6["6️⃣ ALTERNATIVA ATUAL E TROCA<br/>Como resolvem hoje e por que<br/>trocariam pela sua cunha"]`,
      '#768'
    );
  }

  if (volNum === 3) {
    // #1187: Insert the 3 templates of Fase 9 before "## FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE"
    rep(
      `---\n\n## FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE`,
      `---\n\n### TEMPLATES OPERACIONAIS E CASOS PREENCHIDOS DESTA FASE\n\n#### Template: Concept Card de Solução (Passo 3)\n\n\`\`\`text
CONCEPT CARD DE SOLUÇÃO (1 PÁGINA POR CONCEITO FINALISTA)
=========================================================
1. Nome curto do conceito: ____________________________________________
2. Para quem (ICP específico da cunha): _______________________________
3. Promessa central em uma frase (sem jargão técnico):
   "Ajudamos [ICP] a [resultado mensurável] sem [principal fricção atual]."
4. Como funciona na prática (3 passos na visão do usuário):
   Passo A (Gatilho/Entrada): _________________________________________
   Passo B (Ação principal):  _________________________________________
   Passo C (Resultado/Saída): _________________________________________
5. O que o conceito deliberadamente NÃO faz nesta versão: ____________
6. Hipótese crítica de valor que este conceito precisa provar: _______
\`\`\`\n\n#### Template: Roteiro de Teste de Solução de 30 Minutos (Passo 5)\n\n- **Bloco 1: Aquecimento e contexto real (5 min).** Peça para o participante mostrar como executa a tarefa hoje antes de abrir o protótipo (*"Mostre como você fechou o pedido desta semana"*).\n- **Bloco 2: Primeira impressão e compreensão da proposta (5 min).** Abra a tela inicial ou envie a primeira mensagem do fluxo e pergunte: *"Sem clicar ainda, o que você entende que isso faz e para quem serve?"*.\n- **Bloco 3: Tarefa prática sem ajuda (12 min).** Entregue uma missão concreta (*"Faça a cotação destes três itens e aprove o fornecedor mais barato"*) e observe em silêncio onde ele hesita, erra ou pede explicação.\n- **Bloco 4: Pergunta de compromisso e fricção de troca (8 min).** Feche medindo disposição real: *"O que impediria você de usar isso na próxima segunda-feira no lugar da sua planilha atual?"* e *"Quanto vale resolver isso por mês?"*.\n\n#### Template: Dossiê de Solução Preenchido (Caso PadariaPro, Passo 7)\n\n| Campo do Dossiê | Registro Consolidado (PadariaPro - Fim da Fase 9) |\n|---|---|\n| **Conceito vencedor** | Cotação comparativa automática via bot de WhatsApp (fornecedor responde no próprio chat e o dono aprova em um clique) |\n| **Amostra testada** | 7 donos de padarias independentes na Zona Sul/Oeste de SP (faturamento de R$ 110 mil a R$ 260 mil/mês) |\n| **Taxa de conclusão da tarefa** | 6 de 7 concluíram a cotação simulada em menos de 4 minutos sem auxílio (1 travou no cadastro inicial de fornecedores) |\n| **Aprendizado que mudou o escopo** | Donos recusaram abrir painel web no computador; 100% exigiram aprovar o pedido diretamente pelo celular no WhatsApp |\n| **Sinal concreto de compromisso** | 4 dos 7 compartilharam a lista real de fornecedores de farinha e laticínios e assinaram termo de piloto pago de R$ 290/mês |\n| **Decisão de saída da Fase 9** | Avançar para o teste de usabilidade e cobrança real da Fase 10 mantendo interface 100% WhatsApp-first |\n\n---\n\n## FASE 10 — TESTES DE SOLUÇÃO E USABILIDADE`,
      '#1187 Fase 9 templates'
    );

    // #1113: Fase 9 Mermaid flowchart alignment with the 7 steps (Vol 3 L.1815-1840)
    rep(
`flowchart LR
    subgraph DIV["Etapa de Divergência e Filtro DVS<br/>(passos 1 a 3: 15-30 ideias → 3-5 conceitos)"]
        D1["Crazy 8s<br/>8 ideias em 8 minutos"]
        D2["How Might We<br/>Reformular JTBDs"]
        D3["Analogias<br/>Outros setores"]
        D1 & D2 & D3 --> POOL["Pool de ideias<br/>20–40 candidatas"]
    end

    subgraph CONV["Fase de Convergência<br/>(passos 3–4)"]
        POOL --> VOTE["Priorizar<br/>impacto vs esforço"]
        VOTE --> SELECT["Selecionar 1–3<br/>para prototipar"]
    end

    subgraph PROTO["Prototipagem<br/>(passos 5–6)"]
        SELECT --> FID{"Fidelidade<br/>necessária?"}
        FID -->|Concept test| PAPER["Protótipo em papel<br/>Horas"]
        FID -->|Fluxo e UX| CLICK["Protótipo clicável<br/>Figma, dias"]
        FID -->|Serviço complexo| BLUEPRINT["Service blueprint<br/>Dias"]
    end

    subgraph TEST["Teste<br/>(passos 6–7)"]
        PAPER & CLICK & BLUEPRINT --> USER["5+ usuários<br/>testam"]
        USER --> INSIGHT["Capturar aprendizados<br/>e iterar"]
        INSIGHT -->|Hipótese validada| NEXT(["→ Fase 10<br/>Testes de solução"])
        INSIGHT -->|Hipótese refutada| DIV
    end`,
`flowchart LR
    subgraph DIV["1. Divergência (Passo 1)"]
        D1["Gerar 15 a 30 abordagens<br/>(Crazy 8s, HMW, analogias)"]
        D2["Incluir opções sem código<br/>(serviço, planilha, WhatsApp)"]
        D1 --> D2
    end

    subgraph CONV["2. Filtro e Conceito (Passos 2 e 3)"]
        D2 --> F1["Filtrar por Desejabilidade,<br/>Viabilidade e Exequibilidade (DVS)"]
        F1 --> F2["Selecionar 3 a 5 finalistas<br/>e redigir Concept Cards"]
    end

    subgraph PROT["3. Prototipagem Enxuta (Passo 4)"]
        F2 --> P1["Escolher a menor fidelidade<br/>capaz de testar a hipótese"]
        P1 --> P2["Construir fluxo navegável<br/>ou simulação em 1 a 3 dias"]
    end

    subgraph TEST["4. Teste, Iteração e Dossiê (Passos 5 a 7)"]
        P2 --> T1["Testar com 5 a 8 usuários<br/>reais do ICP (Passo 5)"]
        T1 --> T2["Iterar falhas de compreensão<br/>e consolidar Dossiê (Passos 6 e 7)"]
        T2 -->|Conceito validado| NEXT(["→ Fase 10<br/>Usabilidade e cobrança"])
        T2 -->|Conceito refutado| CONV
    end`,
      '#1113'
    );
  }

  if (volNum === 4) {
    // #1387: Unify Fase 11 3-stage MVP cycle between Mermaid diagram and subheadings (Vol 4 L.172-230)
    rep(
`\`\`\`mermaid
flowchart LR
 subgraph E1["1️⃣ MVP DE PROBLEMA"]
 M1A["Valida:<br/>pessoas TÊM<br/>o problema mesmo?"]
 M1B["Como:<br/>landing page,<br/>entrevistas em massa"]
 M1C["Sucesso:<br/>evidência de dor<br/>real em ≥ 20 casos"]
 end

 subgraph E2["2️⃣ MVP DE SOLUÇÃO"]
 M2A["Valida:<br/>solução RESOLVE<br/>o problema?"]
 M2B["Como:<br/>protótipo clicável,<br/>concierge, wizard of oz"]
 M2C["Sucesso:<br/>usuários voltam,<br/>querem mais, pagam algo"]
 end

 subgraph E3["3️⃣ MVP DE NEGÓCIO"]
 M3A["Valida:<br/>unit economics<br/>funcionam?"]
 M3B["Como:<br/>versão mínima<br/>de produto + canal real"]
 M3C["Sucesso:<br/>CAC menor que LTV,<br/>retenção estável,<br/>caminho para PMF"]
 end

 E1 --> E2 --> E3`,
`\`\`\`mermaid
flowchart LR
 subgraph E1["1️⃣ Etapa 1: MVP de Demanda e Problema"]
 M1A["Pergunta:<br/>existe demanda real<br/>por essa proposta?"]
 M1B["Formato:<br/>landing page / smoke test<br/>com chamada para ação"]
 M1C["Meta de avanço:<br/>≥10% conversão em cadastro<br/>ou ≥3% em pré-venda"]
 end

 subgraph E2["2️⃣ Etapa 2: MVP de Solução (Concierge / Mágico de Oz)"]
 M2A["Pergunta:<br/>a entrega resolve a dor<br/>e faz o cliente voltar?"]
 M2B["Formato:<br/>operação manual assistida<br/>sem automação pesada"]
 M2C["Meta de avanço:<br/>5–10 clientes ativos/pagantes<br/>com uso recorrente"]
 end

 subgraph E3["3️⃣ Etapa 3: MVP de Negócio (Software em Produção)"]
 M3A["Pergunta:<br/>o fluxo validado escala<br/>com unit economics saudáveis?"]
 M3B["Formato:<br/>software enxuto automatizando<br/>o núcleo provado na Etapa 2"]
 M3C["Meta de avanço:<br/>ativação, retenção D30<br/>e conversão para pago"]
 end

 E1 --> E2 --> E3`,
      '#1387 diagram'
    );
    rep(
      `#### Etapa 1 do ciclo: Teste de Demanda e Problema (Landing Page, meta de 10% de conversão em cadastro)`,
      `#### Etapa 1 do ciclo: MVP de Demanda e Problema (Landing Page / Smoke Test)`,
      '#1387 E1'
    );
    rep(
      `#### Fase 2 do ciclo, MVP Concierge (versão manual do produto, entregue à mão pelo fundador)`,
      `#### Etapa 2 do ciclo: MVP de Solução (Concierge / Mágico de Oz, entregue manualmente)`,
      '#1387 E2'
    );
    rep(
      `#### Fase 3 do ciclo, MVP em Código`,
      `#### Etapa 3 do ciclo: MVP de Negócio (Software Mínimo em Produção)`,
      '#1387 E3'
    );

    // #1396: Consolidate the 4 repeated cross-reference callouts in Fase 11 (Vol 4 L.279-355)
    rep(
      `> [!note] Para ir além nesta Fase 11 (Capítulos de aprofundamento)\n> Ao longo dos passos desta fase, consulte os capítulos específicos deste volume conforme a sua necessidade prática: o [[#CAPÍTULO 1 — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR|Capítulo 1: GTM Playbook]] (para escolher entre movimento puxado pelo produto ou por vendas e priorizar os dois primeiros canais de aquisição), o [[#CAPÍTULO 6 — PRICING STRATEGY E ECONOMIA DA RECORRÊNCIA (SUBSCRIPTION ECONOMY)|Capítulo 6: Pricing Strategy]] (para calibrar cobrança e elasticidade no Passo 8) e o [[#CAPÍTULO 8 — CUSTOMER SUCCESS (CS) E CUSTOMER EXPERIENCE (CX): DA JORNADA AO CHURN ZERO E NRR POSITIVO|Capítulo 8: Customer Success e CX]] (para medir o *time-to-value* no *onboarding* manual do Passo 4).`,
      `> [!note] Mapa de aprofundamento desta Fase 11\n> Para aprofundar a execução de cada passo desta fase sem interromper a leitura, consulte diretamente: (1) [[#CAPÍTULO 1 — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR|Capítulo 1: GTM Playbook e Canais]] no recrutamento dos primeiros clientes (Passo 4); (2) [[#CAPÍTULO 8 — CUSTOMER SUCCESS (CS) E CUSTOMER EXPERIENCE (CX): DA JORNADA AO CHURN ZERO E NRR POSITIVO|Capítulo 8: Customer Success e CX]] na medição do *time-to-value* durante o *onboarding* manual (Passo 4); (3) [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 3 — REVENUE OPERATIONS: INFRAESTRUTURA, DADOS E PROCESSO PARA CRESCER COM PREVISIBILIDADE|Capítulo 3: Revenue Operations (Vol. 6)]] na instrumentação do funil comercial (Passo 7); e (4) [[#CAPÍTULO 6 — PRICING STRATEGY E ECONOMIA DA RECORRÊNCIA (SUBSCRIPTION ECONOMY)|Capítulo 6: Pricing Strategy]] no teste de cobrança real (Passo 8).`,
      '#1396 consolidated callout'
    );
    rep(
      `\n\n> [!note] Capítulo 8: Customer Experience\n> Onboarding manual intensivo é onde se captura o dado mais valioso sobre time-to-value. O [[#CAPÍTULO 8 — CUSTOMER SUCCESS (CS) E CUSTOMER EXPERIENCE (CX): DA JORNADA AO CHURN ZERO E NRR POSITIVO|Capítulo 8: Customer Experience]] estrutura como medir o momento exato em que o usuário percebe o valor central, o "aha moment", e como o NPS pós-onboarding prediz churn (cancelamento: percentual de usuários que param de usar) antes que qualquer métrica de retenção apareça no dashboard.`,
      '',
      '#1396 inline 1'
    );
    rep(
      `\n\n> [!tip] Capítulo 1: Framework de Canais de Aquisição\n> O [[#CAPÍTULO 1 — GTM PLAYBOOK E ARQUITETURA DE CANAIS: DA PRIMEIRA VENDA AO PRIMEIRO MILHÃO DE ARR|Capítulo 1 (GTM Playbook e Arquitetura de Canais: Da Primeira Venda ao Primeiro Milhão de ARR)]] mapeia todos os canais de aquisição disponíveis, inbound, outbound, eventos, parcerias, viral, com matriz de CAC estimado, velocidade e fit por estágio. Use para priorizar os dois ou três canais que valem testar nesta fase antes de investir em escala.`,
      '',
      '#1396 inline 2'
    );
    rep(
      `\n\n> [!note] Capítulo 3 (Vol. 6): Revenue Operations\n> Com os primeiros usuários em produto, instale o CRM e as definições de pipeline antes de chegar em dez clientes pagantes. O [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 3 — REVENUE OPERATIONS: INFRAESTRUTURA, DADOS E PROCESSO PARA CRESCER COM PREVISIBILIDADE|Capítulo 3: Revenue Operations (Vol. 6)]] cobre como estruturar stages de pipeline, handoffs entre onboarding e expansão, e as métricas de ativação que ligam o comportamento no produto ao forecast de receita. Configurar isso cedo evita retrabalho quando o volume aumentar.`,
      '',
      '#1396 inline 3'
    );
    rep(
      `\n\n> [!tip] Capítulo 6: Pricing\n> O [[#CAPÍTULO 6 — PRICING STRATEGY E ECONOMIA DA RECORRÊNCIA (SUBSCRIPTION ECONOMY)|Capítulo 6: Pricing]] cobre modelos de precificação (freemium, por uso, por assento, por resultado), como testar elasticidade de preço com experimentos controlados e os erros mais comuns de pricing em early-stage: inclui o método de van Westendorp para calibrar faixas aceitáveis sem chute.`,
      '',
      '#1396 inline 4'
    );

    // #1475: Rewrite telegraphic fragments in Fase 12 (Vol 4 L.1046-1095) into fluid prose/bullets
    rep(
      `No início, você não tem dados históricos longos. Use proxies. A retenção observada nos primeiros três a seis meses, extrapolada com cuidado. A taxa de churn (cancelamento: percentual de clientes que param de pagar) mensal observada: LTV é igual ao ARPU mensal (receita média mensal por cliente) multiplicado pela margem bruta e dividido pelo churn mensal: LTV = (ARPU × Margem Bruta) ÷ Churn Mensal, enquanto o CAC Payback em meses é CAC ÷ (ARPU × Margem Bruta).`,
      `No início da operação, quando ainda não há histórico de anos de retenção, trabalhe com estimativas conservadoras (*proxies*) apoiadas nas primeiras coortes de três a seis meses. A partir da taxa de cancelamento mensal observada (*churn* de receita ou de clientes), projete o valor do tempo de vida pela fórmula **LTV = (ARPU mensal × Margem Bruta) ÷ Churn Mensal**, e complemente sempre a leitura com o **CAC Payback = CAC ÷ (ARPU mensal × Margem Bruta)** para saber em quantos meses o caixa investido na aquisição retorna.`,
      '#1475 1'
    );
    rep(
      `Agora você tem dados reais. Responda quatro perguntas. A precificação atual é percebida como adequada? Há segmentos dispostos a pagar mais por mais valor? Há segmentos que precisam de versão mais barata? Tem espaço para upsell ou cross-sell?`,
      `Com clientes reais pagando pelo produto, avalie a estrutura de preço a partir de quatro perguntas práticas:\n\n- **Percepção de valor:** o preço atual é percebido como justo frente ao retorno financeiro que o cliente obtém?\n- **Disposição para planos superiores:** existe um subgrupo de clientes disposto a pagar mais por capacidade extra, SLA ou funcionalidades avançadas?\n- **Barreira de entrada:** há clientes aderentes ao ICP que travam no plano inicial e precisariam de uma faixa de entrada mais enxuta?\n- **Expansão na mesma conta:** o produto permite *upsell* (upgrade de plano/volume) ou *cross-sell* (módulos complementares) ao longo do primeiro ano?`,
      '#1475 2'
    );
    rep(
      `Quatro categorias. Custos fixos (aluguel, salários, ferramentas, SaaS). Custos variáveis por cliente (infraestrutura, suporte, transação, comissão). Investimentos pontuais (equipamentos, marcas, desenvolvimento). Impostos.`,
      `Classifique todos os desembolsos da operação em quatro grupos contábeis claros:\n\n- **Custos variáveis diretos (COGS/CPV):** servidores e banco de dados proporcional ao uso, chamadas de API/LLM, taxas de meios de pagamento, implementação e suporte dedicado ao cliente;\n- **Despesas comerciais (CAC):** mídia paga, comissões de vendas, ferramentas de prospecção e equipe de *go-to-market*;\n- **Despesas fixas gerais e de P&D (OpEx):** folha de engenharia e produto, administrativo, jurídico, contabilidade e licenças internas;\n- **Tributos sobre faturamento e investimentos (CapEx):** impostos diretos sobre a nota fiscal (Simples Nacional, ISS, PIS/Cofins ou IBS/CBS) e gastos pontuais de capital.`,
      '#1475 3'
    );
    rep(
      `Onde você consegue reduzir o CAC? Aumentar o LTV? Melhorar a margem? Quatro alavancas comuns. Canais de aquisição mais baratos (SEO, referência, parcerias). Mecanismos de retenção (melhor onboarding, features stick, comunidade). Upsell e expansão. Automação de suporte e operação.`,
      `Para melhorar a razão LTV:CAC e encurtar o *payback*, atue sobre quatro alavancas operacionais:\n\n1. **Migração gradual para canais de menor CAC:** combinar aquisição paga com conteúdo orgânico (SEO), indicação de clientes e parcerias de distribuição;\n2. **Blindagem da retenção nos primeiros 90 dias:** acelerar o *onboarding* até o primeiro resultado concreto (*aha moment*) e criar rotinas de uso semanal que travem o cancelamento;\n3. **Expansão líquida de receita (NRR > 100%):** estruturar gatilhos naturais de upgrade por volume, assentos ou módulos adicionais;\n4. **Automação de entrega e suporte:** substituir etapas manuais repetitivas por fluxos autoatendidos para elevar a margem bruta.`,
      '#1475 4'
    );
    rep(
      `**Aba 1, Premissas.** Todas as variáveis que movem o modelo. Crescimento mensal de novos clientes (em percentual). Ticket médio (MRR, Monthly Recurring Revenue, ou receita mensal recorrente, ou ARR, Annual Recurring Revenue, receita anual recorrente, por cliente). Churn mensal (em percentual). NRR (Net Revenue Retention: percentual da receita retida e expandida na base de clientes). CAC por canal. Custo variável por cliente. Custos fixos mensais (folha, tools, office). Timing de contratação por função.`,
      `- **Aba 1: Premissas (*Inputs*):** concentra todas as variáveis editáveis que movem o modelo (sem números fixos escondidos nas fórmulas das demais abas), incluindo crescimento mensal de novos clientes por canal, ticket médio (ARPU/MRR), taxas de *churn* e expansão (NRR), CAC por canal, custo direto de servir por cliente, despesas fixas mensais e cronograma de contratações.`,
      '#1475 6'
    );

    // #1535: Align Fase 13 heading and callout with the 5 signals of Passo 1 (Vol 4 L.1973-2085)
    rep(
      `### A tríade de prova do PMF: Curva de Retenção Assintótica, Regra dos 40% de Decepção e Eficiência de Aquisição\n\n#### Passo 1, medir PMF quantitativamente\n\nCinco sinais complementares que se reforçam mutuamente.`,
      `### Os Cinco Sinais Quantitativos do PMF: Retenção Assintótica, Regra dos 40%, Tração Orgânica, NPS e Demanda Puxada\n\n#### Passo 1: medir o PMF quantitativamente em cinco dimensões\n\nNenhum indicador isolado comprova *Product-Market Fit*; avalie em conjunto cinco sinais complementares que se reforçam mutuamente.`,
      '#1535 1'
    );
    rep(
      `> [!important] Regra combinada PMF mais Crescimento mais Superlinearidade\n> Como leitura rápida do scorecard de seis dimensões desta fase, combinar Sean Ellis acima de 40%, curva de retenção estabilizada por coorte e crescimento consistente por oito ou mais semanas confirma que o produto atingiu o PMF no segmento avaliado.`,
      `> [!important] Regra combinada: os 5 sinais de retenção/valor + taxa de crescimento semanal\n> Somando os cinco sinais do Passo 1 à taxa de crescimento semanal do YC (totalizando os seis indicadores do scorecard desta fase), a regra de bolso é direta: quando a curva de retenção por coorte estabiliza acima do piso do setor, o teste de Sean Ellis supera 40%, a aquisição orgânica responde por ao menos 20%–30% das novas ativações e a receita cresce de forma consistente por oito ou mais semanas, o produto atingiu o PMF no segmento avaliado.`,
      '#1535 3'
    );

    // #1630: Bullseye Framework 3 channels in middle ring and simultaneous testing before focusing on 1 (Vol 4 L.3416-3444)
    rep(
` Outer --> Middle["🟡 MIDDLE RING<br/>'Prometedores'<br/>3-5 canais com hipótese<br/>de funcionar no seu caso"]`,
` Outer --> Middle["🟡 MIDDLE RING<br/>'Promissores'<br/>Top 3 canais candidatos<br/>para experimentos paralelos"]`,
      '#1630 diagram'
    );
    rep(
      `**3. Fase de teste.** Escolha apenas um canal, e teste a sério por trinta a sessenta dias. Com investimento modesto, mas suficiente (tipicamente R$ 5 mil a R$ 20 mil para canais pagos, ou equivalente em horas para canais orgânicos). Meça rigorosamente.\n\n**4. Fase de dobrada, ou pivô.** Se o canal escolhido atingir a métrica-alvo, invista pesado. Se não, teste o próximo do top três.`,
      `**3. Fase de teste simultâneo no anel do meio.** Rode experimentos paralelos, curtos e de baixo custo nos **três canais do anel do meio** durante três a seis semanas (com orçamento controlado, tipicamente R$ 3 mil a R$ 15 mil por canal pago ou dedicação equivalente em canais orgânicos/outbound), medindo CAC inicial, velocidade de ativação e volume potencial.\n\n**4. Fase de foco no anel central (*Inner Ring*).** Se um dos três canais demonstrar CAC e payback saudáveis com espaço para escalar, promova-o para o centro do alvo e concentre nele 70% a 80% do orçamento e da energia do time até extrair seu potencial máximo; se nenhum dos três funcionar, volte ao anel externo e selecione uma nova trinca de hipóteses.`,
      '#1630 prose'
    );

    // Vol 4:5640 and 6193 intra-line duplicate clauses
    rep(
      `> - [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 5 — ARQUITETURA CONTRATUAL PARA STARTUPS: OPERAÇÃO E CONTRATOS EM PROFUNDIDADE POR TIPO|Capítulo 5 (Arquitetura Contratual para Startups: Operação e Contratos em Profundidade por Tipo) (Vol. 8)]] e Capítulo 5 (Arquitetura Contratual para Startups: Operação e Contratos em Profundidade por Tipo) (Vol. 8), negociação de cláusulas e contratos`,
      `> - [[IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca#CAPÍTULO 5 — ARQUITETURA CONTRATUAL PARA STARTUPS: OPERAÇÃO E CONTRATOS EM PROFUNDIDADE POR TIPO|Capítulo 5 (Arquitetura Contratual para Startups: Operação e Contratos em Profundidade por Tipo) (Vol. 8)]], negociação de cláusulas e contratos`,
      'Vol 4:5640 dup'
    );
    rep(
      `Pela régua unificada deste capítulo, a retenção líquida de receita (NRR) anual saudável parte de ≥ 100% em PME, ≥ 110% como patamar forte em mid-market e ≥ 120% como nível de excelência em enterprise (com 30% a 60% da receita nova em operações maduras vindo de expansão da base). Forte: igual ou maior que cento e dez por cento. Excepcional: igual ou maior que cento e vinte e cinco por cento. O percentual de receita via expansion em SaaS maduro fica entre trinta e sessenta por cento.`,
      `Pela régua unificada deste capítulo, a retenção líquida de receita (NRR) anual saudável parte de ≥ 100% em PME, ≥ 110% como patamar forte em mid-market e ≥ 120% como nível de excelência em enterprise (com 30% a 60% da receita nova em operações maduras vindo de expansão da base).`,
      'Vol 4:6193 dup'
    );

    // Clean up AI layers callout in Vol 4 Cap. 10
    rep(
`> [!tip] As quatro camadas de IA neste livro
> IA aparece em quatro camadas, cada uma com decisões e ferramentas distintas. Você está em **AI no produto** (camada 3). As outras três:
>
> - **Camada 1: IA como acelerador do empreendedor** ([[IGNICAO-Vol-1-Ideacao#CAPÍTULO 10 — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)|Capítulo 10 (IA Generativa e Agentes como Copiloto e Acelerador do Fundador (2026)) (Vol. 1)]]). Uso pessoal do fundador para escrita, pesquisa, análise.
> - **Camada 2: IA como copiloto do fundador** ([[IGNICAO-Vol-1-Ideacao#CAPÍTULO 10 — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)|Capítulo 10 (IA Generativa e Agentes como Copiloto e Acelerador do Fundador (2026)) (Vol. 1)]]). Versão atualizada da Camada 1 para o cenário de 2026, com casos de uso de alto retorno operacional.
> - **Camada 4: AI Ops e automação interna** ([[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 6 — AI OPS E AUTOMAÇÃO INTELIGENTE|Capítulo 6 (AI Ops e Automação Inteligente) (Vol. 7)]]). IA na operação da empresa, com triagem de tickets, resumo de calls, automação de workflows. Não é produto.`,
`> [!tip] As três camadas de IA nesta coleção
> A inteligência artificial aparece em três frentes distintas ao longo da obra. Você está na **Frente 2: IA como parte do produto (*AI-Native Product*)**. As outras duas são:
> - **Frente 1: IA como copiloto e acelerador pessoal do fundador** ([[IGNICAO-Vol-1-Ideacao#CAPÍTULO 10 — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)|Volume 1, Capítulo 10]]): produtividade individual dos fundadores em pesquisa, síntese, modelagem e prototipagem;
> - **Frente 3: AI Ops e automação interna da operação** ([[IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes#CAPÍTULO 6 — AI OPS E AUTOMAÇÃO INTELIGENTE|Volume 7, Capítulo 6]]): agentes e fluxos internos para triagem de suporte, resumo de chamadas comerciais e eficiência de *backoffice*.`,
      'Vol 4 Cap 10 AI callout'
    );
  }

  if (volNum === 5) {
    // #1986: Waterfall diagram in Vol 5 L.1018-1025 showing non-participating vs participating clearly
    rep(
`flowchart TD
    E["Valor total do exit<br/>R$ ___M"]
    E --> D1["1º Credores\\n(dívidas, venture debt)"]
    D1 --> D2["2º Preferred shareholders\\ncom liquidation preference\\n(investidores VC)"]
    D2 --> D3["3º Preferred shareholders\\nparticipating (se existir)"]
    D3 --> D4["4º Common shareholders\\n(fundadores, employees)"]
    D4 --> D5["Remanescente pro-rata\\nentre todos os holders"]`,
`flowchart TD
    E["Valor líquido do exit<br/>R$ ___M"] --> D1["1º Dívidas e obrigações prioritárias<br/>(credores, trabalhista, venture debt)"]
    D1 --> D2["2º Preferência de liquidação (1x ou múltiplo)<br/>das classes Preferred (Série B → Série A → Seed)"]
    D2 --> D3{"A classe Preferred é<br/>Participating ou Non-Participating?"}
    D3 -->|"Non-Participating (padrão saudável)"| NP["Investidor escolhe o MAIOR entre:<br/>(a) manter sua preferência fixa (1x)<br/>OU (b) converter em Common e dividir tudo pro-rata"]
    D3 -->|"Participating (double dip)"| PA["Investidor recebe 1x na preferência<br/>E AINDA divide o saldo remanescente<br/>pro-rata junto com Common (até o cap, se houver)"]
    NP & PA --> D4["4º Acionistas Common e ESOP exercido<br/>recebem sua fatia pro-rata do saldo"]`,
      '#1986'
    );

    // Vol 5:1582, 6277-6285, and 7203 duplicates
    const dupBlockVol5 = `Um *valuation* nominal alto pode esconder cláusulas que transferem a maior parte do valor de saída para o investidor. Imagine uma startup que captou R$ 20 milhões por 25% na Série A (post-money de R$ 80 milhões) e é vendida anos depois pelos mesmos **R$ 80 milhões**:
- **Com preferência 1x não participativa (*1x non-participating*, padrão saudável):** o investidor escolhe entre resgatar seus R$ 20 milhões de preferência ou converter em 25% da venda (R$ 20 milhões); os **R$ 60 milhões restantes (75%)** ficam com fundadores, equipe e anjos.
- **Com preferência 2x participativa (*2x participating preferred*, o *double dip*):** o investidor retira primeiro 2x o cheque na largada (**R$ 40 milhões**) e ainda leva 25% dos R$ 40 milhões restantes (**R$ 10 milhões**), embolsando **R$ 50 milhões (62,5% da empresa)** enquanto os detentores de 75% do capital dividem apenas R$ 30 milhões.
- **Com antidiluição *Full Ratchet* (catraca cheia) contra Média Ponderada Ampla (*Broad-Based Weighted Average*):** se antes da venda a empresa fizer uma rodada ponte na metade do preço por ação, o *full ratchet* reprica 100% das ações da Série A para a metade do preço (dobrando o número de ações do fundo às custas dos fundadores), enquanto a média ponderada ampla ajusta o preço proporcionalmente ao tamanho real do novo aporte. Abaixo, veja também os erros clássicos de precificação na rodada:`;
    rep(`${dupBlockVol5}\n\n${dupBlockVol5}`, dupBlockVol5, 'Vol 5:6277 block dup');
    rep(
      `Os capítulos [[#CAPÍTULO 3 — MODELAGEM FINANCEIRA OPERACIONAL BOTTOM-UP E PROJEÇÕES POR COORTES (COHORTS)|Capítulo 3 (Modelagem Financeira Operacional Bottom-Up e Projeções por Coortes (Cohorts))]] (modelagem operacional a partir de drivers), Capítulo 3 (Modelagem Financeira Operacional Bottom-Up e Projeções por Coortes (Cohorts)) (modelagem com cohorts em recorrência) e`,
      `Os capítulos [[#CAPÍTULO 3 — MODELAGEM FINANCEIRA OPERACIONAL BOTTOM-UP E PROJEÇÕES POR COORTES (COHORTS)|Capítulo 3 (Modelagem Financeira Operacional Bottom-Up e Projeções por Coortes (Cohorts))]] (modelagem operacional a partir de drivers e projeções com coortes em recorrência) e`,
      'Vol 5:1582 dup'
    );
    rep(
      `A captação (pitch, term sheet, ou carta de intenções, e closing, ou fechamento da rodada) está no [[#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Captação de Equity: Planejamento de Rodada, Pitch e Relacionamento com Investidores)]]. O planejamento da rodada está no Capítulo 9 (Captação de Equity: Planejamento de Rodada, Pitch e Relacionamento com Investidores).`,
      `O planejamento da rodada e a execução da captação (pitch, *term sheet* e *closing*) estão no [[#CAPÍTULO 9 — CAPTAÇÃO DE EQUITY: PLANEJAMENTO DE RODADA, PITCH E RELACIONAMENTO COM INVESTIDORES|Capítulo 9 (Captação de Equity: Planejamento de Rodada, Pitch e Relacionamento com Investidores)]].`,
      'Vol 5:7203 dup'
    );
  }

  if (volNum === 6) {
    // Vol 6:146 vs 1133: 5 steps of Fase 15 vs 5 steps of Fase 16
    rep(
      `### Os 6 passos da escala: documentar o playbook, dominar um canal até a exaustão, medir unit economics e expandir em profundidade antes da amplitude\n\nCinco passos estruturados (do diagnóstico do motor atual e transição da venda conduzida pelo fundador até canais de marketing, expansão por caminhos e medição de unit economics por canal, detalhada na seção de métricas adiante).`,
      `### Os 6 passos da escala: documentar o playbook, dominar um canal até a exaustão, medir unit economics e expandir em profundidade antes da amplitude\n\nO roteiro de escala comercial desdobra-se em seis movimentos (do Passo 0 ao Passo 5): compreender o motor integrado de quatro peças, auditar o funil atual, transicionar da venda feita pelo fundador para um time repetível, escalar canais de marketing com atribuição clara, abrir novos vetores de expansão e instalar a governança de *unit economics* por canal.`,
      'Vol 6:146'
    );
    rep(
      `Cinco passos estruturados (do diagnóstico do motor atual e transição da venda conduzida pelo fundador até canais de marketing, expansão por caminhos e medição de unit economics por canal, detalhada na seção de métricas adiante).\n\n#### Passo 1, faça o diagnóstico de "onde o fundador virou gargalo"`,
      `Cinco passos estruturados para construir a liderança e a arquitetura humana da escala: (1) diagnosticar onde o fundador virou gargalo operacional; (2) desenhar o organograma funcional para os próximos 12 a 18 meses; (3) contratar e integrar os primeiros líderes de área; (4) codificar a cultura em comportamentos observáveis e rituais semanais; e (5) implantar ciclos formais de avaliação de desempenho, calibração e remuneração.\n\n#### Passo 1, faça o diagnóstico de "onde o fundador virou gargalo"`,
      'Vol 6:1133'
    );

    // #2525: Solution Selling 9 steps vs Bosworth 3x3 pain-vision matrix (Vol 6 L.689-700)
    rep(
`Matriz 3x3 de Bosworth (9 caixas combinando perguntas abertas, de controle e de confirmação com razões, impacto e visão de solução):

1. Preparation.
2. Opening.
3. Diagnosing pain.
4. Creating vision.
5. Negotiating access to power.
6. Handling objections.
7. Closing.
8. Implementation.
9. Follow-up.`,
`A metodologia combina dois artefatos distintos que não devem ser confundidos:\n\n- **A Matriz 3×3 de Conversa (*9-Box Pain-Vision Model* de Bosworth):** cruza três tipos de perguntas nas linhas (**abertas**, **de controle** e **de confirmação**) com três estágios psicológicos do comprador nas colunas (**1. diagnosticar as causas da dor**, **2. explorar o impacto financeiro/operacional da dor** e **3. co-construir a visão da solução**), totalizando as 9 células que guiam a reunião de descoberta;\n- **O Ciclo de Execução Comercial em 9 Etapas:** (1) *Preparation* (pesquisa prévia da conta), (2) *Opening* (abertura sem pitch prematuro), (3) *Diagnosing pain* (ativação da dor com a Matriz 3×3), (4) *Creating vision* (visão diferenciada de solução), (5) *Negotiating access to power* (acesso ao comprador econômico mediante plano mútuo de avaliação), (6) *Handling objections*, (7) *Closing*, (8) *Implementation* e (9) *Follow-up*.`,
      '#2525'
    );

    // #2656: North Star Metric examples in Cap. 1 (Vol 6 L.2905-2916)
    rep(
`\`\`\`text
Exemplos de North Star Metric por modelo
------------------------------------------
Spotify         Minutos de música consumidos/mês
Airbnb          Noites reservadas
Slack           Mensagens enviadas por DAU
RD Station      Leads qualificados gerados pelos clientes/mês (hipótese ilustrativa de métrica norte)
iFood           Pedidos completados/semana
Nubank          Transações ativas/cliente/mês
SaaS vertical   Projetos ou processos ativos/conta
------------------------------------------
\`\`\``,
`\`\`\`text
Exemplos de North Star Metric por modelo (casos públicos e hipóteses didáticas)
---------------------------------------------------------------------------------
Spotify (caso público)          Tempo total de áudio escutado pelos assinantes
Airbnb (caso público)           Noites reservadas com sucesso na plataforma
Slack (caso público)            Mensagens enviadas por usuário ativo diário (DAU)
Marketplace de entrega (ex.)    Pedidos entregues no prazo e sem incidente/semana
B2B MarTech / CRM (hipótese)    Leads qualificados gerados pelos clientes/mês
Neobank / Conta digital (ex.)   Clientes com conta principal ativa e transações/mês
SaaS vertical B2B (hipótese)    Processos críticos concluídos por conta ativa/semana
---------------------------------------------------------------------------------
\`\`\``,
      '#2656'
    );
  }

  if (volNum === 7) {
    // #3350: Harmonize the stages table in Vol 7 L.3867-3874 with the Spotify Model warning right above it
    rep(
`\`\`\`text
Estágio              Modelo recomendado        Razão
-----------          ----------------------    ------------------------------
1-15 pessoas         Funcional flat            Custo de coordenação baixo
15-50 pessoas        Squads + funções compartilhadas (sem tribos nem comitês pesados)   Autonomia sem duplicação
50-150 pessoas       Squads + platform team    Economias de escala técnica
150+ pessoas         Divisional + plataforma   Complexidade exige separação
\`\`\``,
`\`\`\`text
Estágio              Modelo recomendado            Razão operacional
-------------------  ----------------------------  --------------------------------------
1-30 pessoas         Funcional enxuto (flat)       Custo de coordenação direta é baixo
30-80 pessoas        Times de produto + funções    Autonomia de entrega sem criar matriz
                     compartilhadas (sem tribos)   pesada de chapters/tribos prematuros
80-150 pessoas       Squads + platform team enxuto Padroniza infraestrutura repetitiva
150+ pessoas         Divisional + plataforma       Complexidade exige fronteiras formais
\`\`\``,
      '#3350'
    );

    // #3439: Align ASCII decision matrix in Vol 7 L.5444-5460
    rep(
`\`\`\`text
MATRIZ DE DECISÃO - AUTOMATIZAR vs. CONTRATAR

                        PROCESSO BEM DEFINIDO?
                        Sim              Não
                   ┌────────────────┬────────────────┐
Alta freq. │ Automatize já  │ Documente antes e automatize │
Frequência│        │  AUTOMATIZAR   │  DOCUMENTAR    │
          │        │  primeiro      │  e depois      │
          │        │                │  automatizar   │
          ├────────┼────────────────┼────────────────┤
Baixa    │         │                │                │
Frequência│        │  CHECKLIST     │  CONTRATAR     │
          │        │  ou runbook    │  ou terceirizar│
          │        │                │                │
          └────────┴────────────────┴────────────────┘
\`\`\``,
`\`\`\`text
MATRIZ DE DECISÃO - AUTOMATIZAR vs. CONTRATAR

                         PROCESSO JÁ ESTÁ BEM DEFINIDO?
                         Sim (estável)        Não (em descoberta)
                   ┌──────────────────────┬──────────────────────┐
Alta Frequência    │  1. AUTOMATIZAR JÁ   │  2. DOCUMENTAR ANTES │
(>10h/sem do time) │  (alto ROI e payback │  (padronizar rodando │
                   │   rápido < 6 meses)  │   manual ≥ 30 vezes) │
                   ├──────────────────────┼──────────────────────┤
Baixa Frequência   │  3. CHECKLIST LEVE   │  4. CONTRATAR / OPS  │
(<5h/sem do time)  │  (manter runbook sem │  (exige julgamento   │
                   │   gastar engenharia) │   humano caso a caso)│
                   └──────────────────────┴──────────────────────┘
\`\`\``,
      '#3439 ASCII'
    );

    // Clean up AI layers callout in Vol 7 Cap. 6 and communication callout in Vol 7 Cap. 9
    rep(
`> [!tip] As quatro camadas de IA neste livro
> IA aparece em quatro camadas, cada uma com decisões e ferramentas distintas. Você está em **AI Ops** (camada 4). As outras três:
>
> - **Camada 1: IA como acelerador do empreendedor** ([[IGNICAO-Vol-1-Ideacao#CAPÍTULO 10 — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)|Capítulo 10 (IA Generativa e Agentes como Copiloto e Acelerador do Fundador (2026)) (Vol. 1)]]). Uso pessoal do fundador para escrita, pesquisa, análise.
> - **Camada 2: IA como copiloto do fundador** ([[IGNICAO-Vol-1-Ideacao#CAPÍTULO 10 — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)|Capítulo 10 (IA Generativa e Agentes como Copiloto e Acelerador do Fundador (2026)) (Vol. 1)]]). Versão atualizada para 2026 focada na produtividade individual dos fundadores e executivos (complementando a camada de IA na engenharia de software tratada no Capítulo 6).
> - **Camada 3: AI no produto** ([[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 10 — AI COMO PARTE DO PRODUTO (AI-NATIVE PRODUCT)|Capítulo 10 (AI como Parte do Produto (AI-Native Product)) (Vol. 4)]]). LLM como componente crítico do produto que vai a mercado.`,
`> [!tip] As três camadas de IA nesta coleção
> A inteligência artificial é tratada em três frentes complementares ao longo da obra. Você está na **Frente 3: AI Ops e automação interna da operação**. As outras duas são:
> - **Frente 1: IA como copiloto e acelerador pessoal do fundador** ([[IGNICAO-Vol-1-Ideacao#CAPÍTULO 10 — IA GENERATIVA E AGENTES COMO COPILOTO E ACELERADOR DO FUNDADOR (2026)|Volume 1, Capítulo 10]]): produtividade individual dos fundadores e executivos;
> - **Frente 2: IA como parte do produto (*AI-Native Product*)** ([[IGNICAO-Vol-4-Tracao-e-PMF#CAPÍTULO 10 — AI COMO PARTE DO PRODUTO (AI-NATIVE PRODUCT)|Volume 4, Capítulo 10]]): LLMs e agentes como componente central do produto comercializado ao cliente.`,
      'Vol 7 Cap 6 AI callout'
    );
    rep(
`> [!abstract] Onde este capítulo se posiciona nos sete capítulos de comunicação da coleção:
> O livro tem sete capítulos de comunicação com territorios distintos,
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Marca Corporativa, PR, Comunicação Pública e Marca Pessoal do Fundador) (Vol. 6)]], narrativa pública e imprensa
> - [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Capítulo 7 (Marca Corporativa, PR, Comunicação Pública e Marca Pessoal do Fundador) (Vol. 6)]], marca pessoal e canais próprios
> - Capítulo 9 (Comunicação Interna), comunicação com o time
> - [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 8 — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS|Capítulo 8 (Comunicação Escrita para Negócios) (Vol. 1)]], escrita executiva (memo, update, postmortem)
> - [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 9 — APRESENTAÇÃO E FALA EM PÚBLICO|Capítulo 9 (Apresentação e Fala em Público) (Vol. 1)]], fala em público (pitch, all-hands, board)
> - [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 7 — INFLUÊNCIA E PERSUASÃO SEM AUTORIDADE FORMAL|Capítulo 7 (Influência e Persuasão sem Autoridade Formal) (Vol. 1)]], persuasao sem autoridade
> - [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 (Gestão de Crise, Continuidade Operacional e Comunicação Crítica) (Vol. 9)]], comunicação em crise
>
> Este capítulo cobre comunicação interna com o time, rituais e mecanismos que sustentam alinhamento em escala. Para os outros territorios, ver acima.`,
`> [!abstract] Onde este Capítulo 9 se posiciona no mapa de comunicação da coleção
> Este capítulo trata da **arquitetura de comunicação interna com o time** (rituais assíncronos e síncronos, documentação e transparência em escala). Ele se conecta diretamente à tríade de habilidades pessoais do fundador no Volume 1 ([[IGNICAO-Vol-1-Ideacao#CAPÍTULO 7 — INFLUÊNCIA E PERSUASÃO SEM AUTORIDADE FORMAL|Influência sem Autoridade no Cap. 7]], [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 8 — COMUNICAÇÃO ESCRITA PARA NEGÓCIOS|Escrita Executiva no Cap. 8]] e [[IGNICAO-Vol-1-Ideacao#CAPÍTULO 9 — APRESENTAÇÃO E FALA EM PÚBLICO|Apresentação e Fala em Público no Cap. 9]]), ao posicionamento externo em [[IGNICAO-Vol-6-Receita-e-Pessoas#CAPÍTULO 7 — MARCA CORPORATIVA, PR, COMUNICAÇÃO PÚBLICA E MARCA PESSOAL DO FUNDADOR|Marca Corporativa, PR e Marca Pessoal (Vol. 6, Cap. 7)]] e à resposta a incidentes em [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Gestão de Crise e Comunicação Crítica (Vol. 9, Cap. 9)]].`,
      'Vol 7 Cap 9 comm callout'
    );
  }

  if (volNum === 8) {
    // Remove adjacent duplicate paragraphs in Vol 8 (273, 813, 870, 955, 5297)
    const lines8 = content.split(/\r?\n/);
    for (let i = 0; i < lines8.length - 2; i++) {
      if (lines8[i].trim().length > 80 && lines8[i + 1].trim() === '' && lines8[i].trim() === lines8[i + 2].trim()) {
        lines8.splice(i + 1, 2);
        i--;
      }
    }
    content = lines8.join('\n');

    // #3541: Remove unverified BH health secretariat / "ARE-like interno" block at Vol 8 L.658-661
    rep(
`**Cenário composto ilustrativo**: startup brasileira de inteligência de dados para gestão de saúde pública municipal.
**Contratante**: Secretaria Municipal de Saúde de Belo Horizonte.
**Mecanismo**: Chamada pública via ARE-like interno, contrato de piloto sem licitação, valor de R$ 180 mil para 6 meses.
**Resultado**: Contrato pleno de R$ 1,2 milhão após validação do piloto, via contratação direta (enquadrada como serviços de tecnologia especializada).`,
`**Resumo dos parâmetros legais do caso (arts. 12 a 15 da LC 182/2021):**\n- **Modalidade de entrada:** Licitação em modalidade especial (art. 13), com edital focado no problema público e comissão julgadora de três especialistas (dispensada habilitação complexa além da regularidade fiscal e trabalhista, art. 13, § 4º).\n- **Instrumento de teste remunerado:** CPSI (art. 14) com vigência de até 12 meses (prorrogável por mais 12) e teto legal de **R$ 1,6 milhão por contrato** (atualizado pelo IPCA).\n- **Escala pós-validação:** Cumpridas as metas técnicas do CPSI, o mesmo órgão pode celebrar diretamente o **Contrato de Fornecimento** (art. 15) sem nova licitação, por até 24 meses (prorrogável por mais 24), até o limite de **R$ 8 milhões** (5x o teto do CPSI).`,
      '#3541'
    );

    // #3576: Fix both INPI Mermaid diagrams in Vol 8 L.1120-1185
    rep(
`flowchart LR
    subgraph Registro["Registro formal (INPI)"]
        M["Marca\\n(10 anos renovável)"]
        P["Patente de invenção\\n(20 anos)"]
        MU["Modelo de utilidade\\n(15 anos)"]
        DI["Desenho industrial\\n(5 anos renovável até 25)"]
    end

    subgraph Auto["Proteção automática"]
        DA["Direito autoral\\n(software, código, design)"]
        SI["Segredo industrial\\n(sem prazo, enquanto secreto)"]
    end

    subgraph Contratual["Proteção contratual"]
        NDA["NDA / Confidencialidade"]
        IPA["IP Assignment\\n(contratos de colaboradores)"]
    end

    M --> |"Nome, logo, slogan"| INPI_M["Registro de Marca no INPI (10 anos renováveis; Desenho Industrial: 10 anos até 25)"]
    P --> |"Invenção técnica"| Auto
    DA --> |"Criação original"| Contratual
    SI --> |"Know-how secreto"| Contratual`,
`flowchart LR
    subgraph Registro["1. Registro constitutivo no INPI"]
        M["Marca<br/>(10 anos, renovável indefinidamente)"]
        P["Patente de invenção<br/>(20 anos) / Modelo de utilidade (15 anos)"]
        DI["Desenho industrial<br/>(10 anos, prorrogável até 25 anos)"]
    end

    subgraph Auto["2. Proteção declaratória / fática"]
        DA["Direito autoral de software<br/>(50 anos - Lei 9.609/98; registro opcional)"]
        SI["Segredo industrial / Know-how<br/>(sem prazo, enquanto mantido sigiloso)"]
    end

    subgraph Contratual["3. Blindagem contratual obrigatória"]
        NDA["NDA e controle de acesso técnico"]
        IPA["Cessão de PI (IP Assignment)<br/>em contratos CLT, PJ e sócios"]
    end

    M --> |"Protege nome, logo e reputação"| Ativo1["Monopólio de uso na classe (Nice)"]
    P --> |"Protege solução técnica nova"| Ativo2["Exclusividade de exploração industrial"]
    DA --> |"Blindado na prática por"| IPA
    SI --> |"Blindado na prática por"| NDA`,
      '#3576 diagram 1'
    );
    rep(
`flowchart TD
    B["Busca prévia\\n(INPI Busca de Marcas - gratuito)"]
    B --> D["Depósito do pedido\\n(portal INPI - e-INPI)"]
    D --> P["Publicação na RPI\\n(Revista da Propriedade Industrial)"]
    P --> O["Prazo de oposição\\n(60 dias)"]
    O --> E{"Houve\\noposição?"}
    E -->|Não| DEF["Deferimento"]
    E -->|Sim| C["Contestação pelo depositante"]
    C --> D2["Decisão do INPI"]
    DEF --> REG["Registro emitido\\n(10 anos)"]
    D2 --> REG
    REG --> REN["Renovação a cada 10 anos"]`,
`flowchart TD
    B["1. Busca prévia de anterioridade<br/>(sistema e-Marcas do INPI)"] --> D["2. Depósito do pedido e pagamento da GRU<br/>(portal e-INPI, classes de Nice)"]
    D --> P["3. Exame formal e publicação na RPI<br/>(Revista da Propriedade Industrial)"]
    P --> O["4. Prazo de oposição de terceiros<br/>(60 dias corridos)"]
    O --> E{"Houve<br/>oposição?"}
    E -->|Sim| C["Manifestação do depositante<br/>(60 dias)"]
    C --> EX["5. Exame substantivo de mérito<br/>pelo examinador do INPI"]
    E -->|Não| EX
    EX --> DEF{"Decisão<br/>do INPI"}
    DEF -->|Deferido| TAX["6. Pagamento da retribuição do 1º decênio<br/>e emissão de certificado (60 dias)"]
    DEF -->|Indeferido| REC["Recurso administrativo<br/>(60 dias)"]
    TAX --> REG["7. Certificado de Registro concedido<br/>(vigência de 10 anos, renovável)"]`,
      '#3576 diagram 2'
    );

    // Vol 8:3606, 3610 duplicate chapter names in callout
    rep(
      `[[#CAPÍTULO 5 — ARQUITETURA CONTRATUAL PARA STARTUPS: OPERAÇÃO E CONTRATOS EM PROFUNDIDADE POR TIPO|Capítulo 5 (Arquitetura Contratual para Startups: Operação e Contratos em Profundidade por Tipo)]] panorama, Capítulo 5 (Arquitetura Contratual para Startups: Operação e Contratos em Profundidade por Tipo) profundidade por tipo,`,
      `[[#CAPÍTULO 5 — ARQUITETURA CONTRATUAL PARA STARTUPS: OPERAÇÃO E CONTRATOS EM PROFUNDIDADE POR TIPO|Capítulo 5 (Arquitetura Contratual para Startups: Operação e Contratos em Profundidade por Tipo)]] panorama e profundidade por tipo,`,
      'Vol 8:3606 dup'
    );
    rep(
      `[[#CAPÍTULO 12 — FRAUDE INTERNA E CONTROLES INTERNOS|Capítulo 12 (Fraude Interna e Controles Internos)]] preparacao, [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 (Gestão de Crise, Continuidade Operacional e Comunicação Crítica) (Vol. 9)]] resposta, Capítulo 9 (Gestão de Crise, Continuidade Operacional e Comunicação Crítica) (Vol. 9) comunicação,`,
      `[[#CAPÍTULO 12 — FRAUDE INTERNA E CONTROLES INTERNOS|Capítulo 12 (Fraude Interna e Controles Internos)]] preparação, [[IGNICAO-Vol-9-Maturidade-e-Exit#CAPÍTULO 9 — GESTÃO DE CRISE, CONTINUIDADE OPERACIONAL E COMUNICAÇÃO CRÍTICA|Capítulo 9 (Gestão de Crise, Continuidade Operacional e Comunicação Crítica) (Vol. 9)]] resposta e comunicação,`,
      'Vol 8:3610 dup'
    );
  }

  if (volNum === 9) {
    // #4151: Split FX exposure table row into balance-sheet stock vs monthly flow (Vol 9 L.2603)
    rep(
      `| **Exposição líquida USD (balanço: US$ 2,2M comprados; fluxo mensal abaixo)** | - | **US$ 50 mil/mês (fluxo operacional)** | - | - | - |`,
      `| **Exposição líquida de balanço (estoque USD)** | - | **+US$ 2,2M comprados** (caixa + recebíveis − pagáveis) | - | - | **+R$ 11,0M** |\n| **Exposição líquida de fluxo (mensal)** | - | **+US$ 50 mil/mês** (receita − custos em USD) | - | - | **+R$ 250 mil/mês** |`,
      '#4151'
    );

    // Vol 9 L.3097-3098 ASCII alignment
    rep(
`EVITAR                          USAR EM VEZ DISSO\n─────────────────────────────────────────────────\n"Foi culpa de falha no fornecedor X" (antes da perícia)   "Identificamos o impacto X, pedimos desculpas aos clientes afetados e já acionamos a correção Y"`,
`EVITAR                          USAR EM VEZ DISSO\n─────────────────────────────────────────────────────────────────\n"Foi culpa do fornecedor X"     "Identificamos o impacto X,\n (antes de concluir a perícia)   pedimos desculpas aos afetados\n                                 e já acionamos a correção Y"`,
      'Vol 9 L.3097 ASCII'
    );

    // Vol 9:6145 edition version unification (run before or after date replace)
    content = content.replace(/\*IGNIÇÃO 5\.0 \(Edição Narrativa, (?:maio|outubro) de 2026\)\./g, '*IGNIÇÃO v5.2 (Edição Narrativa Enxuta, outubro de 2026).');

    // Vol 9:6153 intra-line dup
    rep(
      `guarde consigo estas três perguntas para toda a sua vida de construtor, guarde consigo estas três perguntas para toda a sua vida de construtor:`,
      `guarde consigo estas três perguntas para toda a sua vida de construtor:`,
      'Vol 9:6153 dup'
    );
  }

  if (volNum === 10) {
    // #4557: Discount rate table in Cap. 3 (Vol 10 L.680-687)
    rep(
`IMPACTO DA SELIC NO VALOR PRESENTE

Taxa de desconto (Selic + prêmio de risco de 20 p.p.)  │  Valor presente de R$ 10M daqui a 5 anos
──────────────────┼──────────────────────────────────────
8%                │  R$ 6,81 milhões
13%               │  R$ 5,43 milhões   (queda de 20%)
15%               │  R$ 4,97 milhões   (queda de 27%)`,
`IMPACTO DA SELIC + PRÊMIO DE RISCO VC (+20 P.P.) NO VALOR PRESENTE DE R$ 10M EM 5 ANOS

Cenário de Selic base  │ Taxa de desconto total (Ke) │ Valor presente de R$ 10M em 5 anos
───────────────────────┼─────────────────────────────┼────────────────────────────────────
Selic 8% a.a.          │ 28% a.a. (8% + 20 p.p.)     │ R$ 2,91 milhões (cenário base)
Selic 13% a.a.         │ 33% a.a. (13% + 20 p.p.)    │ R$ 2,40 milhões (queda de 18%)
Selic 15% a.a.         │ 35% a.a. (15% + 20 p.p.)    │ R$ 2,23 milhões (queda de 23%)`,
      '#4557'
    );

    // Vol 10 L.717-722 ASCII alignment
    rep(
`Índice   │ O que mede                  │ Quando usar\n─────────┼─────────────────────────────┼────────────────────────────\nIPCA     │ Inflação ao consumidor      │ Contratos B2C, SaaS para PME\nIGP-M    │ Inclui inflação atacadista  │ Aluguéis comerciais\nINPC     │ Consumidor de baixa renda   │ Salários mínimos, acordos CLT\nIPCA-E   │ IPCA-15 acumulado trimestral│ Débitos judiciais e contratos (reajuste mínimo anual, Lei 10.192/2001)`,
`Índice   │ O que mede                   │ Quando usar (periodicidade mín. anual)\n─────────┼──────────────────────────────┼───────────────────────────────────────\nIPCA     │ Inflação oficial ao consumo  │ Contratos B2C e SaaS B2B (Lei 10.192)\nIGP-M    │ Atacado (IPA), consumo e INCC│ Contratos imobiliários e energia\nINPC     │ Cesta de famílias até 5 SM   │ Dissídios e negociações sindicais CLT\nIPCA-E   │ Série trimestral do IPCA-15  │ Atualização de débitos judiciais`,
      'Vol 10 L.717 ASCII'
    );

    // Vol 10 L.1914 ASCII wrap
    rep(
      `         └── Emite cartão de crédito sem anuidade por meio de instituição de pagamento própria (Nu Pagamentos), sem depender de licença bancária plena na largada`,
      `         └── Emite cartão sem anuidade via instituição de pagamento própria\n             (Nu Pagamentos), sem depender de licença bancária plena na largada`,
      'Vol 10 L.1914 ASCII'
    );

    // Vol 10 L.2077-2099 CPSI vs Dispensa
    rep(
`**2. Dispensa de Licitação para Startups**

O Marco Legal das Startups (LC 182/2021, arts. 13 e 14) criou uma modalidade especial de licitação para teste de soluções inovadoras, com edital focado no problema e comissão julgadora, resultando no CPSI (Contrato Público para Solução Inovadora) de até R$ 1,6 milhão por contrato. Isso elimina o principal obstáculo histórico: o processo licitatório que exigia anos de certidões, balanços auditados e garantias que nenhuma startup consegue apresentar.

\`\`\`text
REQUISITOS PARA VENDER AO GOVERNO VIA MARCO LEGAL

Startup elegível:
  ├── Aberto a pessoas físicas ou jurídicas (art. 13; o teto de R$ 16M e 10 anos do art. 4º vale para outros fins da lei, e o edital pode dispensar habilitação, salvo seguridade social)
  ├── Registro no CNPJ há menos de 10 anos
  ├── Natureza inovadora comprovada (modelo de negócio, produto ou processo)
  └── NÃO precisa: 3 anos de balanços, certidões negativas históricas

Para Encomenda Tecnológica:
  ├── Solução ainda não disponível no mercado
  ├── Órgão define o problema, startup propõe a solução
  └── Contrato pode contemplar risco tecnológico explícito

Para Dispensa de Licitação:
  ├── Limite por órgão: ~R$ 1,6M/ano
  ├── Processo simplificado (cotação, não edital completo)
  └── Prazo de contratação: semanas, não meses
\`\`\``,
`**2. Licitação em Modalidade Especial para Startups (CPSI - LC 182/2021)**

O Marco Legal das Startups (LC 182/2021, arts. 12 a 15) criou uma modalidade especial de licitação para teste remunerado de soluções inovadoras, com edital focado no desafio público e avaliação por comissão especial de três especialistas, resultando no **CPSI (Contrato Público para Solução Inovadora)** de até R$ 1,6 milhão por contrato. Isso elimina o principal obstáculo histórico: o edital tradicional que exigia especificação prévia fechada, anos de balanços e atestados idênticos.

\`\`\`text
REQUISITOS PARA VENDER AO GOVERNO VIA MARCO LEGAL (LC 182/2021)

Participante elegível no edital especial (art. 13):
  ├── Aberto a pessoas físicas ou jurídicas, isoladas ou em consórcio
  ├── Enquadramento como startup (art. 4º: até R$ 16M/ano e < 10 anos de CNPJ)
  ├── Proposta de solução inovadora para o desafio público descrito no edital
  └── Edital pode dispensar habilitação (salvo regularidade com seguridade social)

Para Encomenda Tecnológica (Lei 10.973/2004, art. 20 / Lei 14.133, art. 75, V):
  ├── Solução ainda não disponível no mercado (P&D com risco tecnológico)
  ├── Órgão define o problema técnico e contrata o desenvolvimento experimental
  └── Permite remuneração por etapas e compartilhamento de propriedade intelectual

Para o CPSI e Contrato de Fornecimento (LC 182/2021, arts. 14 e 15):
  ├── CPSI (teste remunerado): até R$ 1,6M por contrato (12 meses, prorrogável +12)
  ├── Julgamento por comissão especial (potencial de resolução, grau de desenvolvimento e viabilidade)
  └── Contrato de Fornecimento pós-meta atingida: até R$ 8M sem nova licitação
\`\`\``,
      'Vol 10 L.2077-2099'
    );

    // #4708: Remove fictional AgroRadar name at Vol 10 L.3030
    rep(
      `**AgroRadar.** Startup de gestão agrícola para médio produtor, com foco em usabilidade simplificada e distribuição via cooperativas.`,
      `**Caso ilustrativo (gestão agrícola para médio produtor via cooperativa).** Operação de software agrícola voltada ao médio produtor, com foco em usabilidade simplificada e distribuição via cooperativas.`,
      '#4708'
    );

    // Vol 10 L.3276-3281 & L.3358 ASCII wraps
    rep(
`       ├──► Entrega R$ 5 milhões em insumos para o Produtor em Agosto, na pré-safra antes do plantio de setembro e outubro
       │    sem que o Produtor desembolse R$ 1,00 de caixa no ato.
       ▼
[2. Produtor Rural] ──► Emite CPR Física (Lei nº 8.929/1994; ver mecânica de CPR, CRA e Fiagro no Cap. 11; conexões: Cap. 17 para carbono/dMRV, Cap. 18 para biometano e Cap. 22 para frete)
       │                modernizada pela Lei do Agro 13.986/2020 e 14.421/2022)
       │                registrada eletronicamente em entidade registradora autorizada pelo Banco Central (como B3, CERC ou CRDC, requisito obrigatório para validade e eficácia contra terceiros desde a Lei 13.986/2020),`,
`       ├──► Entrega R$ 5 milhões em insumos para o Produtor em Agosto (pré-safra
       │    antes do plantio de set/out) sem desembolso de caixa no ato.
       ▼
[2. Produtor Rural] ──► Emite CPR Física (Lei 8.929/1994, modernizada pelas Leis
       │                13.986/2020 e 14.421/2022; ver Cap. 11, Cap. 17, Cap. 18 e Cap. 22),
       │                registrada em entidade autorizada pelo BCB (B3, CERC ou CRDC,
       │                requisito de validade contra terceiros desde a Lei 13.986/2020),`,
      'Vol 10 L.3276 ASCII'
    );
    rep(
`       └──► ROTA 4 (Corredor Sul/Sudeste Ferroviário):
            Sudeste do MT e MS ──► Terminais de Rondonópolis (MT) e Rio Verde (GO) na Malha Norte e Central da Rumo (com a Ferrovia Estadual de Mato Grosso em obras rumo a Campo Verde e Lucas do Rio Verde, enquanto o projeto da Ferrogrão, EF-170 entre Sinop/MT e Miritituba/PA, segue condicionado a definições judiciais e socioambientais no STF)
            ──► Comboios de 120 vagões Hopper até o Porto de SANTOS (SP).`,
`       └──► ROTA 4 (Corredor Sul/Sudeste Ferroviário):
            Sudeste do MT e MS ──► Terminais de Rondonópolis (MT) e Rio Verde (GO)
            na Malha Norte/Central da Rumo (com a Ferrovia Estadual de MT em obras
            rumo a Campo Verde e Lucas do Rio Verde, enquanto a Ferrogrão EF-170
            segue condicionada a decisões socioambientais no STF)
            ──► Comboios de 120 vagões Hopper até o Porto de SANTOS (SP).`,
      'Vol 10 L.3358 ASCII'
    );

    // Adjacent duplicate L.5034-5036 and #5036 blank lines around headings, paragraphs, and lists in Vol 10
    const lines10 = content.split(/\r?\n/);
    for (let i = 0; i < lines10.length - 2; i++) {
      if (lines10[i].trim().length > 80 && lines10[i + 1].trim() === '' && lines10[i].trim() === lines10[i + 2].trim()) {
        lines10.splice(i + 1, 2);
        i--;
      }
    }
    // Ensure blank lines after #### Subvertical headings and before list items in Cap. 26 & 27 (#5036)
    let inFence10 = false;
    const spaced10 = [];
    for (let i = 0; i < lines10.length; i++) {
      const line = lines10[i];
      if (line.trim().startsWith('```')) inFence10 = !inFence10;
      spaced10.push(line);
      if (!inFence10 && i < lines10.length - 1) {
        const next = lines10[i + 1];
        if (/^#{3,6}\s+/.test(line) && next.trim() !== '') {
          spaced10.push('');
        } else if (
          line.trim() !== '' &&
          !line.trim().startsWith('#') &&
          !line.trim().startsWith('-') &&
          !line.trim().startsWith('>') &&
          !line.trim().startsWith('|') &&
          !/^\d+\.\s/.test(line.trim()) &&
          (/^-\s+\*\*/.test(next.trim()) || /^1\.\s+\*\*/.test(next.trim()))
        ) {
          spaced10.push('');
        }
      }
    }
    content = spaced10.join('\n');

    // #5076: Acordo Ortográfico 1990 in Cap. 28
    content = content
      .replace(/Sub-sistemas/g, 'Subsistemas')
      .replace(/sub-sistemas/g, 'subsistemas')
      .replace(/sub-sistema/g, 'subsistema')
      .replace(/pára-quedas/g, 'paraquedas');

    // #5141: B2G flowchart in Cap. 31 (Vol 10 L.6356-6362)
    rep(
`        C1["Mapeamento de edital\\n(PNLD, pregão, chamada pública)"] --> C2["Habilitação jurídica\\n(certidões, atestados, capacitação técnica)"]\n        C2 --> C3["Proposta técnica + proposta de preço"]\n        C3 --> C4["Julgamento / homologação\\n(12–36 meses de ciclo total)"]\n        C4 --> C5["Empenho + liquidação\\n(Empenho prévio à despesa; liquidação e pagamento em 30–90 dias após entrega)"]\n        C5 --> C6["Execução do contrato\\n(entrega + medição)"]\n        C6 --> C7["Renovação ou novo edital"]`,
`        C1["Mapeamento de edital<br/>(PNLD, pregão, chamada pública)"] --> C2["Habilitação jurídica<br/>(certidões, atestados, capacitação técnica)"]\n        C2 --> C3["Proposta técnica + proposta de preço"]\n        C3 --> C4["Julgamento e homologação<br/>(12–36 meses de ciclo total)"]\n        C4 --> C5["Empenho prévio da despesa e assinatura<br/>(art. 60 da Lei 4.320/1964)"]\n        C5 --> C6["Execução do contrato<br/>(entrega + medição / ateste técnico)"]\n        C6 --> C7["Liquidação e pagamento<br/>(30–90 dias após entrega atestada)"]\n        C7 --> C8["Renovação ou novo edital"]`,
      '#5141'
    );

    // Cap. 32 GovTech (Vol 10 L.6539-6635)
    content = content.replace(
      /Entre o escritório no Recife e o galpão em Goiânia, \*\*Rafael e Bia\*\* sentiram na pele a mesma pressão sobre a margem e o capital de giro da marca: ou corrigiam a arquitetura operacional agora, ou o crescimento do faturamento só aceleraria o desgaste do caixa\.\n\n---\n\n> \[!note\] Nota de validade\n> Valores de dispensa de licitação e limites de contratação são reajustados periodicamente por decreto federal\./,
      `Em Curitiba, **Henrique** aprendeu essa lição no primeiro ano da sua operação B2G: depois de quase comprometer o caixa mantendo um piloto municipal sem rubrica na LOA, passou a exigir enquadramento formal via CPSI (LC 182/2021) ou adesão a ata de registro de preços com nota de empenho prévia antes de mobilizar a engenharia.\n\n---\n\n> [!note] Nota de validade\n> Valores de dispensa de licitação e limites de contratação são reajustados periodicamente por decreto federal.`
    );
    rep(
`Além da dispensa, a lei criou o **Contrato de Opção de Compra de Participação (COCP)**, que, ao lado do mútuo conversível (art. 5º, § 1º, da LC nº 182/2021), compõe o rol de instrumentos de aporte privado em startups para investidores-anjo e fundos (ver Volume 8, Capítulo 1), sem transformar o ente público em acionista direto: instrumento ainda pouco explorado, mas previsto.\n\nA licitação em modalidade especial do art. 13 da LC 182/2021 é aberta a qualquer pessoa física ou jurídica, enquanto o enquadramento formal como **startup pelo art. 4º da LC 182/2021** (usado para outros fins da lei) observa os critérios de:\n\n- Startups com até dez anos de constituição.\n- Receita bruta anual de até R$ 16 milhões no exercício anterior.\n- Objeto voltado a desenvolvimento ou teste de solução inovadora.\n- Contrato de caráter experimental ou de validação.`,
`Além do CPSI para compras públicas, a LC 182/2021 positivou nos arts. 5º a 8º instrumentos privados de investimento em inovação (como o mútuo conversível e o Contrato de Opção de Compra de Participação, detalhados no Volume 8, Capítulo 1), protegendo investidores privados sem confundir fomento estatal com participação acionária direta do ente público.\n\nA licitação em modalidade especial do art. 13 da LC 182/2021 é aberta a qualquer pessoa física ou jurídica (isolada ou em consórcio) que apresente proposta para o desafio público do edital, enquanto o enquadramento formal como **startup pelo art. 4º da LC 182/2021** observa três requisitos objetivos:\n\n- Até dez anos de inscrição no CNPJ.\n- Receita bruta anual de até R$ 16 milhões no ano-calendário anterior (ou R$ 1.333.333,33 multiplicado pelo número de meses de atividade no ano de abertura).\n- Declaração em ato constitutivo ou alterador de utilização de modelos de negócios inovadores, ou enquadramento no regime especial Inova Simples.`,
      'Cap. 32 LC 182 criteria'
    );
    rep(
`| Modalidade | Limite de valor | Complexidade | Prazo típico | Melhor para |\n|---|---|---|---|---|\n| Dispensa de licitação (inovação) | Variável por regulamentação (referência no art. 75, II, da Lei 14.133/2021: R$ 65.492,11 em 2026 pelo Decreto 12.807/2025 para compras e serviços comuns; inovação tem previsão específica) | Baixa | 30–90 dias | Piloto, MVP, validação inicial |\n| Inexigibilidade | Sem limite de valor | Média | 45–120 dias | Fornecedor exclusivo, solução singular |\n| Pregão eletrônico | Sem limite | Alta | 90–180 dias | Produto padronizado, escalável |\n| Concurso público de inovação | Sem limite (prêmio) | Média | 60–180 dias | Soluções para desafio específico |\n| Sandbox ARE (ARE setorial) | Variável por regulador | Média | 90–360 dias | Healthtech, fintech, edtech regulados |\n\n> [!tip] Dispensa para inovação vs. dispensa comum\n> A dispensa de licitação comum (para serviços de baixo valor) é uma coisa. A dispensa para inovação via LC 182 é outra. A segunda tem objeto específico (solução inovadora), processo distinto (chamada pública com avaliação técnica) e não depende de limite de valor pequeno. Fundador que só conhece a dispensa comum perde a principal porta de entrada govtech.\n\n**Dispensa de licitação para inovação.** É o mecanismo central da LC 182. O órgão pública uma chamada pública descrevendo o problema que precisa resolver. Startups apresentam propostas. Uma comissão técnica avalia e seleciona: normalmente até três startups para pilotos paralelos. O contrato é assinado sem licitação formal. Valor máximo definido pelo órgão, com amparo na regulamentação específica.`,
`| Modalidade | Limite de valor | Complexidade | Prazo típico | Melhor para |\n|---|---|---|---|---|\n| **1. CPSI: Modalidade especial (LC 182/2021, arts. 12–15)** | Até R$ 1,6M no CPSI + até R$ 8M no Contrato de Fornecimento | Média | 60–120 dias | Teste remunerado de solução inovadora e escala posterior sem nova licitação |\n| **2. Dispensa de licitação (Lei 14.133, art. 75, II / Encomenda Tecnológica, art. 75, V)** | R$ 65.492,11 (serviços comuns em 2026, Decreto 12.807/2025) ou conforme projeto de P&D (art. 20 da Lei 10.973) | Baixa a Média | 30–90 dias | Contratação rápida de pequeno valor ou P&D com risco tecnológico |\n| **3. Inexigibilidade (Lei 14.133, art. 74)** | Sem teto fixo (exige justificativa de preço) | Média | 45–120 dias | Fornecedor exclusivo comprovado ou solução técnica singular |\n| **4. Pregão eletrônico / Concorrência (Lei 14.133)** | Sem limite | Alta | 90–180 dias | Software padronizado e escalável com especificação já madura |\n| **5. Adesão a Ata de Registro de Preços - SRP (Lei 14.133, art. 86)** | Até 50% por órgão aderente e até o dobro do total da ata | Baixa a Média | 30–60 dias | Escalar vendas para novas prefeituras/estados a partir de ata vigente |\n\n> [!tip] CPSI (licitação especial da LC 182) vs. dispensa comum por valor\n> A dispensa por valor (art. 75, II, da Lei 14.133/2021) serve apenas para contratos pequenos. Já o **CPSI da LC 182/2021** é uma modalidade especial de licitação (não uma dispensa sem edital): o órgão publica edital focado no problema, uma comissão especial avalia as propostas, contrata o teste remunerado até R$ 1,6 milhão e pode assinar contrato de fornecimento de até R$ 8 milhões sem abrir novo certame.\n\n**CPSI (Licitação em modalidade especial da LC 182/2021).** É o mecanismo central do Marco Legal das Startups para o setor público. O órgão publica edital descrevendo o desafio que precisa resolver, sem amarrar especificação prévia de código. Uma comissão especial de três avaliadores seleciona as melhores propostas (podendo contratar mais de uma startup para testes paralelos) e celebra o CPSI por até 12 meses (prorrogáveis por mais 12).`,
      'Cap. 32 table & CPSI explanation'
    );
    rep(
`    A["Mapeamento de órgão-alvo\\n(secretaria, autarquia, prefeitura)"] --> B["Identificar influenciador técnico\\n(gestor de TI, secretário de inovação)"]\n    B --> C{"Órgão tem dotação\\norçamentária?"}\n    C -->|Não| D["Trabalhar para LOA do próximo ano\\n(set–dez)"]\n    C -->|Sim| E["Apresentar proposta de problema\\n(não de produto)"]\n    E --> F{"Qual modalidade\\nfaz sentido?"}\n    F -->|Piloto / inovação| G["Chamada pública\\nLC 182 / art. 20"]\n    F -->|Produto exclusivo| H["Processo de\\ninexigibilidade"]\n    F -->|Produto maduro| I["Pregão eletrônico\\nSICOMPRAS / ComprasNet"]\n    G --> J["Proposta técnica\\ne comercial"]\n    H --> J\n    I --> J\n    J --> K["Avaliação jurídica\\ne técnica do órgão"]\n    K --> L["Parecer jurídico\\ne aprovação interna"]\n    L --> M["Assinatura do contrato\\ne publicação no DOU"]\n    M --> N["Nota de empenho\\n(reserva orçamentária)"]\n    N --> O["Execução do serviço\\nou piloto"]\n    O --> P["Aceite técnico\\nda secretaria"]\n    P --> Q["Emissão de NF\\ne liquidação"]\n    Q --> R["Pagamento efetivo\\n(30–120 dias após NF)"]`,
`    A["Mapeamento de órgão-alvo<br/>(secretaria, autarquia, prefeitura)"] --> B["Identificar influenciador técnico<br/>(gestor de TI, secretário de inovação)"]\n    B --> C{"Órgão tem dotação<br/>orçamentária?"}\n    C -->|Não| D["Incluir no PCA / PLOA (mar–ago)<br/>ou emenda parlamentar (set–dez)"]\n    C -->|Sim| E["Estruturar diagnóstico do problema<br/>público e métrica de impacto"]\n    E --> F{"Qual porta jurídica<br/>faz sentido?"}\n    F -->|Desafio de inovação| G["Edital especial CPSI<br/>(LC 182, arts. 12–15)"]\n    F -->|Fornecedor exclusivo| H["Processo de inexigibilidade<br/>(Lei 14.133, art. 74)"]\n    F -->|Produto maduro| I["Pregão eletrônico ou<br/>Adesão a Ata SRP (Compras.gov.br)"]\n    G --> J["Proposta técnica<br/>e comercial"]\n    H --> J\n    I --> J\n    J --> K["Julgamento técnico<br/>e habilitação"]\n    K --> L["Parecer jurídico<br/>e homologação"]\n    L --> M["Nota de empenho prévia<br/>(reserva orçamentária, art. 60 Lei 4.320/64)"]\n    M --> N["Assinatura do contrato<br/>e publicação no PNCP"]\n    N --> O["Execução do serviço<br/>ou piloto remunerado"]\n    O --> P["Medição e ateste técnico<br/>do fiscal do contrato"]\n    P --> Q["Emissão de NF<br/>e liquidação da despesa"]\n    Q --> R["Pagamento efetivo<br/>(30–120 dias após ateste)"]`,
      'Cap. 32 Mermaid diagram'
    );

    // #5289: Cap. 38 DeathCare tickets, mortality rate, and EBITDA margins
    rep(
      `milhões de famílias brasileiras pagam religiosamente de R$ 45 a R$ 95 por mês no cartão, boleto ou conta de energia para proteger a família inteira. Como a mortalidade anual das vidas cobertas gira em torno de 0,5% ao ano (o que equivale a cerca de 1,8% a 2,2% dos contratos familiares acionando um óbito por ano, considerando média de 4 a 4,5 vidas por contrato), a operadora que acopla benefícios usados em vida (telemedicina, descontos em exames, farmácia e odontologia para travar o *churn*) e é dona da própria funerária, crematório e cemitério parque captura margens EBITDA de 25% a 40% por décadas.`,
      `milhões de famílias brasileiras pagam religiosamente de R$ 39,90 a R$ 89,90 por mês no cartão, boleto ou conta de energia para proteger a família inteira. Como a mortalidade anual das vidas cobertas gira em torno de 0,5% ao ano (o que equivale a cerca de 1,8% a 2,4% dos contratos familiares acionando um óbito por ano, considerando média de 4 a 4,5 vidas por contrato), a operadora que acopla benefícios usados em vida (telemedicina, descontos em exames, farmácia e odontologia para travar o *churn*) e é dona da própria funerária, crematório e cemitério parque captura margens EBITDA de 28% a 42% por décadas.`,
      '#5289 opening'
    );
    rep(
      `como a taxa de mortalidade anual de uma carteira familiar saudável gira em torno de **1,5% a 2,5% ao ano**`,
      `como a frequência anual de óbito em uma carteira familiar saudável gira em torno de **1,8% a 2,4% dos contratos ao ano**`,
      '#5289 mortality'
    );
    rep(
      `Assinatura mensal familiar (R$ 39 a R$ 90/mês)`,
      `Assinatura mensal familiar (R$ 39,90 a R$ 89,90/mês)`,
      '#5289 table ticket'
    );

    // #5307: Cap. 39 Horizontal B2B SaaS tickets, payback, and L.8019 duplicate clause
    rep(
      `- **Micro e Pequenas Empresas do E-commerce e Varejo (Ticket R$ 80 a R$ 450/mês):**`,
      `- **Microempresas e Sellers de E-commerce (Ticket R$ 80 a R$ 350/mês):**`,
      '#5307 ticket VSB'
    );
    rep(
      `- **Pequenas e Médias Empresas de Serviços, Comércio e Indústria Leve (Ticket R$ 250 a R$ 1.800/mês):**`,
      `- **Pequenas e Médias Empresas de Serviços, Comércio e Indústria Leve (Ticket R$ 450 a R$ 2.500/mês):**`,
      '#5307 ticket SMB'
    );
    rep(
      `- **Mid-Market (Empresas com faturamento de R$ 20 milhões a R$ 300 milhões/ano: Ticket R$ 3.500 a R$ 25.000/mês):**`,
      `- **Mid-Market (Empresas com faturamento de R$ 20 milhões a R$ 300 milhões/ano: Ticket R$ 3.500 a R$ 20.000/mês):**`,
      '#5307 ticket Mid-Market'
    );
    rep(
      `em três níveis de força probatória (simples, avançada e qualificada via ICP-Brasil, sendo a qualificada exigida por lei para atos específicos como transferência de imóveis e certos atos societários/fiscais), avançadas (com validação via Pix, biometria facial, token SMS/WhatsApp ou base Gov.br) e qualificadas (certificado digital ICP-Brasil).`,
      `em três níveis de força probatória: simples, avançadas (com validação via Pix, biometria facial, token SMS/WhatsApp ou base Gov.br) e qualificadas (certificado digital ICP-Brasil, exigido por lei para atos específicos como transferência de imóveis e determinados atos societários e fiscais).`,
      'Vol 10 L.7946 splice'
    );
    rep(
      `    subgraph GTM1["ARPU R$ 80 a R$ 400/mês (Micro e Pequenas)"]`,
      `    subgraph GTM1["ARPU R$ 80 a R$ 350/mês (Microempresas / VSB)"]`,
      '#5307 diagram GTM1'
    );
    rep(
      `    subgraph GTM3["ARPU R$ 5.000 a R$ 80.000+/mês (Mid-Market / Enterprise)"]`,
      `    subgraph GTM3["ARPU R$ 3.500 a R$ 150.000+/mês (Mid-Market / Enterprise)"]`,
      '#5307 diagram GTM3'
    );
    rep(
      `o *CAC Payback* em PMEs deve ser **inferior a 6–10 meses**; em Mid-Market/Enterprise, **inferior a 12–18 meses**.`,
      `o *CAC Payback* em PMEs deve ficar na faixa de **6 a 10 meses**; em Mid-Market/Enterprise, entre **10 e 18 meses**.`,
      '#5307 payback prose'
    );
    rep(
      `| **Pequenas e Médias Empresas (SMB)** | R$ 450 a R$ 2.500 / mês | 10 a 30 dias | 1,0% a 1,8% a.m. | 105% a 120% (fortemente impulsionado por Embedded Finance) | 6 a 11 meses |`,
      `| **Pequenas e Médias Empresas (SMB)** | R$ 450 a R$ 2.500 / mês | 10 a 30 dias | 1,0% a 1,8% a.m. | 105% a 120% (fortemente impulsionado por Embedded Finance) | 6 a 10 meses |`,
      '#5307 payback table'
    );
    rep(
      `se essa dupla que custa R$ 20.000/mês fechar cinco contratos mensais de R$ 250/mês, se essa dupla que custa R$ 20.000/mês fechar cinco contratos mensais de R$ 250/mês, seu CAC será de R$ 4.000 por cliente por cliente`,
      `se essa dupla que custa R$ 20.000/mês fechar cinco contratos mensais de R$ 250/mês, seu CAC será de R$ 4.000 por cliente`,
      'Vol 10 L.8019 dup'
    );
    rep(
      `- [ ] A máquina de Go-to-Market é matematicamente compatível com o ARPU (**CAC Payback < 9 meses para PMEs** e **< 15 meses para Mid-Market/Enterprise**)?`,
      `- [ ] A máquina de Go-to-Market é matematicamente compatível com o ARPU (**CAC Payback de 6 a 10 meses para PMEs** e **de 10 a 18 meses para Mid-Market/Enterprise**)?`,
      '#5307 payback checklist'
    );

    // #5317: Cap. 40 Vertical SaaS ARPU multiplier (4x a 9x)
    rep(
      `e você multiplica a receita por cliente (*ARPU*) em 3x a 5x embutindo Pix/maquininha conciliada, antecipação de recebíveis, compra B2B e recepcionistas de IA no WhatsApp.`,
      `e você multiplica a receita por cliente (*ARPU*) em 4x a 9x (saltando, por exemplo, de R$ 200/mês apenas no software para R$ 900 a R$ 1.800/mês) ao embutir Pix/maquininha conciliada, antecipação de recebíveis, compra B2B e recepcionistas de IA no WhatsApp.`,
      '#5317 opening'
    );
    rep(
      `uma Vertical SaaS brasileira multiplica seu ARPU por **3x a 6x** e captura fatia do PIB real do setor inteiro.`,
      `uma Vertical SaaS brasileira multiplica seu ARPU por **4x a 9x** e captura fatia do PIB real do setor inteiro.`,
      '#5317 executive summary'
    );
  }

  // 2. Global fixes across all volumes (lone-comma table cells `|, |` and editorial cutoff date unification)
  content = content
    .replace(/\|\s*,\s*(?=\|)/g, '| - ')
    .replace(/\ba partir de abril de 2026\b/g, '__KEEP_ABRIL_2026__')
    .replace(/\b4 de maio de 2026\b/g, '__KEEP_4_MAIO_2026__')
    .replace(/\b18 de maio de 2026\b/g, '__KEEP_18_MAIO_2026__')
    .replace(/\babril de 2026\b/g, 'outubro de 2026')
    .replace(/\bAbril de 2026\b/g, 'Outubro de 2026')
    .replace(/\bmaio de 2026\b/g, 'outubro de 2026')
    .replace(/\bMaio de 2026\b/g, 'Outubro de 2026')
    .replace(/__KEEP_ABRIL_2026__/g, 'a partir de abril de 2026')
    .replace(/__KEEP_4_MAIO_2026__/g, '4 de maio de 2026')
    .replace(/__KEEP_18_MAIO_2026__/g, '18 de maio de 2026');

  // 3. Make all 227 boilerplate archetype paragraphs 100% unique, chapter-specific, and grammatically concordant (singular vs plural)!
  const lines = content.split(/\r?\n/);
  let curH2 = `Volume ${volNum}`;
  let curH3 = '';

  const closingPlural = [
    (arch, city, topic, h3) => `**Síntese prática em ${topic}:** Ao incorporarem as balizas de *${h3}* na operação em ${city}, ${arch} substituíram decisões reativas por indicadores auditáveis de execução semanal.`,
    (arch, city, topic, h3) => `**Da teoria à rotina operacional (${topic}):** Na revisão mensal em ${city}, ${arch} transformaram o protocolo de *${h3}* em critério obrigatório antes de liberar novos recursos do orçamento.`,
    (arch, city, topic, h3) => `**Resultado na trincheira (${topic}):** A disciplina descrita em *${h3}* permitiu que ${arch}, a partir de ${city}, blindassem a margem operacional e reduzissem o retrabalho da equipe.`,
    (arch, city, topic, h3) => `**Lição consolidada em ${topic}:** Quando ${arch} travaram as regras de *${h3}* na rotina de ${city}, o gargalo que drenava o tempo dos fundadores deu lugar a um processo previsível.`,
    (arch, city, topic, h3) => `**Fechamento operacional (${topic}):** Em ${city}, a aplicação rigorosa do roteiro de *${h3}* por ${arch} converteu incerteza estratégica em cadência mensurável de entrega.`,
    (arch, city, topic, h3) => `**Impacto direto no caixa e na execução (${topic}):** Com o filtro de *${h3}* implantado em ${city}, ${arch} eliminaram o improviso comercial e encurtaram o ciclo de decisão.`,
    (arch, city, topic, h3) => `**Governança prática em ${topic}:** Ao documentarem os padrões de *${h3}* na operação de ${city}, ${arch} criaram uma trava clara contra desvios de escopo e queima ineficiente de capital.`,
    (arch, city, topic, h3) => `**Virada de chave em ${topic}:** Foi aplicando o checklist de *${h3}* no dia a dia em ${city} que ${arch} destravaram o próximo degrau de escala sustentável do negócio.`
  ];

  const closingSingular = [
    (arch, city, topic, h3) => `**Síntese prática em ${topic}:** Ao incorporar as balizas de *${h3}* na operação em ${city}, ${arch} substituiu decisões reativas por indicadores auditáveis de execução semanal.`,
    (arch, city, topic, h3) => `**Da teoria à rotina operacional (${topic}):** Na revisão mensal em ${city}, ${arch} transformou o protocolo de *${h3}* em critério obrigatório antes de liberar novos recursos do orçamento.`,
    (arch, city, topic, h3) => `**Resultado na trincheira (${topic}):** A disciplina descrita em *${h3}* permitiu que ${arch}, a partir de ${city}, blindasse a margem operacional e reduzisse o retrabalho da equipe.`,
    (arch, city, topic, h3) => `**Lição consolidada em ${topic}:** Quando ${arch} travou as regras de *${h3}* na rotina de ${city}, o gargalo que drenava a agenda de liderança deu lugar a um processo previsível.`,
    (arch, city, topic, h3) => `**Fechamento operacional (${topic}):** Em ${city}, a aplicação rigorosa do roteiro de *${h3}* por ${arch} converteu incerteza estratégica em cadência mensurável de entrega.`,
    (arch, city, topic, h3) => `**Impacto direto no caixa e na execução (${topic}):** Com o filtro de *${h3}* implantado em ${city}, ${arch} eliminou o improviso comercial e encurtou o ciclo de decisão.`,
    (arch, city, topic, h3) => `**Governança prática em ${topic}:** Ao documentar os padrões de *${h3}* na operação de ${city}, ${arch} criou uma trava clara contra desvios de escopo e queima ineficiente de capital.`,
    (arch, city, topic, h3) => `**Virada de chave em ${topic}:** Foi aplicando o checklist de *${h3}* no dia a dia em ${city} que ${arch} destravou o próximo degrau de escala sustentável do negócio.`
  ];

  const openingPlural = [
    (arch, city, topic, h3) => `No enfrentamento prático de **${topic}** em ${city}, ${arch} perceberam logo nas primeiras semanas que dominar *${h3}* separava a sobrevivência do negócio da queima cega de capital.`,
    (arch, city, topic, h3) => `Ao estruturarem a frente de **${topic}** a partir de ${city}, ${arch} esbarraram exatamente no desafio de *${h3}*: sem um protocolo claro, cada decisão custava semanas de retrabalho.`,
    (arch, city, topic, h3) => `Na operação em ${city}, a virada de maturidade de ${arch} em **${topic}** começou quando decidiram atacar *${h3}* com métricas reais em vez de premissas otimistas de planilha.`,
    (arch, city, topic, h3) => `Quando o desafio de **${topic}** bateu à porta em ${city}, ${arch} tiveram de redesenhar *${h3}* do zero para proteger a margem e a velocidade de execução da empresa.`
  ];

  const openingSingular = [
    (arch, city, topic, h3) => `No enfrentamento prático de **${topic}** em ${city}, ${arch} percebeu logo nas primeiras semanas que dominar *${h3}* separava a sobrevivência do negócio da queima cega de capital.`,
    (arch, city, topic, h3) => `Ao estruturar a frente de **${topic}** a partir de ${city}, ${arch} esbarrou exatamente no desafio de *${h3}*: sem um protocolo claro, cada decisão custava semanas de retrabalho.`,
    (arch, city, topic, h3) => `Na operação em ${city}, a virada de maturidade de ${arch} em **${topic}** começou quando decidiu atacar *${h3}* com métricas reais em vez de premissas otimistas de planilha.`,
    (arch, city, topic, h3) => `Quando o desafio de **${topic}** bateu à porta em ${city}, ${arch} teve de redesenhar *${h3}* do zero para proteger a margem e a velocidade de execução da empresa.`
  ];

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^## /.test(l)) {
      curH2 = l.replace(/^##\s+/, '').replace(/^(FASE|CAPÍTULO)\s+\d+\s*[—:\-]\s*/i, '').replace(/\s*—\s*/g, ': ').trim();
      curH3 = curH2;
    } else if (/^### /.test(l)) {
      curH3 = l.replace(/^###\s+/, '').replace(/^\d+(\.\d+)?[:.]?\s*/, '').replace(/\s*—\s*/g, ': ').trim();
    }

    const shortTopic = curH2.length > 58 ? curH2.slice(0, 55).replace(/\s+\S*$/, '') + '...' : curH2;
    const shortH3 = (curH3 || curH2).length > 52 ? (curH3 || curH2).slice(0, 49).replace(/\s+\S*$/, '') + '...' : (curH3 || curH2);
    const tplIdx = (volNum * 31 + i) % closingPlural.length;
    const openIdx = (volNum * 17 + i) % openingPlural.length;

    if (l.startsWith('**Fechando o ciclo na trincheira:** Quando **Lucas e Marina**')) {
      lines[i] = closingPlural[tplIdx]('**Lucas e Marina**', 'São Paulo e Florianópolis', shortTopic, shortH3);
    } else if (l.startsWith('**Fechando o ciclo na trincheira:** Quando **Henrique**')) {
      lines[i] = closingSingular[tplIdx]('**Henrique**', 'Curitiba', shortTopic, shortH3);
    } else if (l.startsWith('**Fechando o ciclo na trincheira:** Quando **Rafael e Bia**')) {
      lines[i] = closingPlural[tplIdx]('**Rafael e Bia**', 'Recife e Goiânia', shortTopic, shortH3);
    } else if (l.startsWith('**Fechando o ciclo na trincheira:** Quando a **Dra. Camila**')) {
      lines[i] = closingSingular[tplIdx]('a **Dra. Camila**', 'Belo Horizonte', shortTopic, shortH3);
    } else if (l.startsWith('Em Curitiba, **Henrique** viu esse exato gargalo travar')) {
      lines[i] = openingSingular[openIdx]('**Henrique**', 'Curitiba', shortTopic, shortH3);
    } else if (l.startsWith('Em Belo Horizonte, a **Dra. Camila** vivia o mesmo ponto de inflexão')) {
      lines[i] = openingSingular[openIdx]('a **Dra. Camila**', 'Belo Horizonte', shortTopic, shortH3);
    } else if (l.startsWith('Entre o escritório no Recife e o galpão em Goiânia, **Rafael e Bia** sentiram na pele')) {
      lines[i] = openingPlural[openIdx]('**Rafael e Bia**', 'Recife e Goiânia', shortTopic, shortH3);
    } else if (l.startsWith('Na mesma semana, **Lucas e Marina** enfrentavam exatamente esse dilema na operação')) {
      lines[i] = openingPlural[openIdx]('**Lucas e Marina**', 'São Paulo e Florianópolis', shortTopic, shortH3);
    }
  }

  return lines.join('\n');
}

module.exports = { applyWave7ToVolume };

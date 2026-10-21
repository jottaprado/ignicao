# Como contribuir com o IGNIÇÃO

Obrigado por querer contribuir. Este manual existe para servir fundadores brasileiros, e melhora com colaboração da comunidade.

---

## Arquitetura dos 10 volumes autocontidos

O conteúdo do IGNIÇÃO é mantido em **10 volumes canônicos 100% autocontidos** dentro da pasta [`volumes/`](volumes/). Cada volume reúne suas Fases sequenciais, seus Capítulos temáticos e — embutidos dentro de cada Fase ou Capítulo — todos os Frameworks, Canvases, Templates, Exemplos preenchidos, Métricas e Leituras daquela etapa:

| Volume | Arquivo Canônico | Escopo |
|---|---|---|
| **Vol. 1 — Ideação** | [`volumes/IGNICAO-Vol-1-Ideacao.md`](volumes/IGNICAO-Vol-1-Ideacao.md) | Fases 0 a 3 + Capítulos 1 a 13 (preparação, fundador, tese causal, decisão, comunicação e IA pessoal) |
| **Vol. 2 — Descoberta e Mercado** | [`volumes/IGNICAO-Vol-2-Descoberta-e-Mercado.md`](volumes/IGNICAO-Vol-2-Descoberta-e-Mercado.md) | Fases 4 a 6 + Capítulos 1 a 4 (entrevistas Mom Test, JTBD, TAM/SAM/SOM, competição, posicionamento e category design) |
| **Vol. 3 — Experimentos e Prototipagem** | [`volumes/IGNICAO-Vol-3-Experimentos-e-Prototipagem.md`](volumes/IGNICAO-Vol-3-Experimentos-e-Prototipagem.md) | Fases 7 a 10 + Capítulos 1 a 10 (hipóteses, método científico, experimentos, protótipos, testes SUS, modelos de plataforma/marketplace/B2B2C e Bootstrapping/Service-to-Product) |
| **Vol. 4 — Tração e PMF** | [`volumes/IGNICAO-Vol-4-Tracao-e-PMF.md`](volumes/IGNICAO-Vol-4-Tracao-e-PMF.md) | Fases 11 a 13 + Capítulos 1 a 16 (MVP, unit economics, PMF, GTM até 1M ARR, canais, vendas iniciais, pricing, CS, CX, dados e produto AI-native) |
| **Vol. 5 — Finanças e Captação** | [`volumes/IGNICAO-Vol-5-Financas-e-Captacao.md`](volumes/IGNICAO-Vol-5-Financas-e-Captacao.md) | Fase 14 + Capítulos 1 a 21 (DRE/DFC, contabilidade, Reforma Tributária, FP&A, capital de giro, bancos, comércio exterior/importação, crise de caixa, Venture Capital, valuation, SAFE/mútuo e dívida) |
| **Vol. 6 — Receita e Pessoas** | [`volumes/IGNICAO-Vol-6-Receita-e-Pessoas.md`](volumes/IGNICAO-Vol-6-Receita-e-Pessoas.md) | Fases 15 e 16 + Capítulos 1 a 20 (Growth, vendas enterprise, RevOps, parcerias, Franchising/COF, marca/PR, Founder Mode, hiring C-level, remuneração/ESOP e cultura) |
| **Vol. 7 — Produto, Engenharia e Operações** | [`volumes/IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes.md`](volumes/IGNICAO-Vol-7-Produto-Engenharia-e-Operacoes.md) | Fase 17 + Capítulos 1 a 11 (produto em escala, gestão de engenharia, dívida técnica, IA na engenharia/AI Ops, design organizacional e processos) |
| **Vol. 8 — Jurídico, LGPD e Segurança** | [`volumes/IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca.md`](volumes/IGNICAO-Vol-8-Juridico-LGPD-e-Seguranca.md) | Fase 18 + Capítulos 1 a 14 (estruturação societária, Marco Legal, proteção patrimonial, INPI, contratos, trabalhista, CDC, LGPD, IA e segurança da informação) |
| **Vol. 9 — Maturidade, Exit e Family Office** | [`volumes/IGNICAO-Vol-9-Maturidade-e-Exit.md`](volumes/IGNICAO-Vol-9-Maturidade-e-Exit.md) | Fases 19 e 20 + Capítulos 1 a 23 + Epílogo (governança/board, internacionalização, crise, layoffs, RJ, M&A, Search Funds, Spin-offs, Secondaries, IPO, post-mortems, Cash Cow e Family Office) |
| **Vol. 10 — Economia da Inovação, Hubs Globais e Playbooks das 42 Verticais** | [`volumes/IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.md`](volumes/IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.md) | Capítulos 1 a 48 (Economia da Inovação, Hubs Globais e Brasileiros, macroeconomia, autarquias, CADE, políticas públicas e 42 Playbooks Setoriais em 6 Clusters) + Dicionário Geral e Índices da Coleção |

---

## Tipos de contribuição

### 🐛 Reportar erro de fato

Se encontrou dado desatualizado, número incorreto, empresa com situação diferente da descrita ou referência equivocada:

1. Abra uma [Issue](../../issues/new?template=erro-de-fato.md)
2. Informe: onde está o erro (volume e seção, ex: `Vol. 4 — ## FASE 13`), o que está errado e a fonte correta

### 💡 Sugerir conteúdo novo

Para sugerir novo capítulo, framework, caso brasileiro ou seção:

1. Abra uma [Discussion](../../discussions) na categoria "Ideias"
2. Descreva: o que falta, em qual volume se encaixa, por que é relevante para fundadores brasileiros e se tem disposição para escrever

### ✏️ Correção textual

Para erros de português, formatação ou clareza:

1. Faça fork do repositório
2. Edite a seção relevante no arquivo correspondente dentro de `volumes/IGNICAO-Vol-X-*.md`. Use `Ctrl+F` para encontrar `## FASE X` ou `## CAPÍTULO X`
3. Rode `py audit.py` para garantir que nenhum wikilink foi quebrado e abra um Pull Request com descrição curta da mudança

### 📊 Atualizar dados e benchmarks

Benchmarks de mercado, valuations e dados do ecossistema mudam. Se você tem fonte mais recente:

1. Abra Issue com `[DATA]` no título
2. Indique: o dado atual, o dado correto e a fonte (link ou publicação)

---

## O que não aceitamos

- Conteúdo promocional de produtos ou serviços
- Remoção de casos brasileiros por pedido de terceiros (o conteúdo é baseado em informação pública)
- Mudanças de perspectiva sem argumento fundamentado

---

## Padrões de estilo

- **Português brasileiro**, não europeu
- **Prosa**, não bullets (exceto em checklists funcionais)
- **Exemplos brasileiros** sempre que possível
- **Fontes**: cite a origem de dados específicos
- **Autocontenção**: novos frameworks, canvases ou templates devem ser inseridos diretamente na Fase ou Capítulo em que são utilizados
- **Links entre volumes**: use `[[#SEÇÃO|Texto]]` para seções do mesmo volume e `[[IGNICAO-Vol-X-Nome#SEÇÃO|Texto (Vol. X)]]` para seções de outro volume

---

## Processo de review

Pull requests de correção simples: aprovados em até 7 dias.  
Adições de conteúdo novo: discussão aberta por 14 dias antes de merge.  
Mudanças estruturais: decisão dos mantenedores.

---

*Dúvidas? Abra uma Discussion.*

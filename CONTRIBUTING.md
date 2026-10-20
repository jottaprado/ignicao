# Como contribuir com o IGNIÇÃO

Obrigado por querer contribuir. Este manual existe para servir fundadores brasileiros, e melhora com colaboração da comunidade.

---

## Arquitetura dos volumes canônicos

O conteúdo do IGNIÇÃO é mantido em **10 volumes canônicos** dentro da pasta [`volumes/`](volumes/):

| Volume | Arquivo Canônico | Escopo |
|---|---|---|
| **Vol. 1 — Ideação** | [`volumes/IGNICAO-Vol-1-Ideacao.md`](volumes/IGNICAO-Vol-1-Ideacao.md) | Fases 0 a 2B + Apêndices de preparação, fundador, decisão, comunicação e IA pessoal |
| **Vol. 2 — Validação** | [`volumes/IGNICAO-Vol-2-Validacao.md`](volumes/IGNICAO-Vol-2-Validacao.md) | Fases 3 a 9 + Apêndices de descoberta, validação científica, mercado e modelos |
| **Vol. 3 — Tração** | [`volumes/IGNICAO-Vol-3-Tracao.md`](volumes/IGNICAO-Vol-3-Tracao.md) | Fases 10 a 12 + Apêndices de GTM inicial, canais, pricing, vendas, dados e caixa |
| **Vol. 4 — Captação e Finanças** | [`volumes/IGNICAO-Vol-4-Captacao-e-Financas.md`](volumes/IGNICAO-Vol-4-Captacao-e-Financas.md) | Fase 13 + Apêndices de Venture Capital, valuation, instrumentos conversíveis, tributário, FP&A, capital de giro e bancos |
| **Vol. 5 — Receita e Pessoas** | [`volumes/IGNICAO-Vol-5-Receita-e-Pessoas.md`](volumes/IGNICAO-Vol-5-Receita-e-Pessoas.md) | Fase 14 + Apêndices de Growth, vendas enterprise, RevOps, parcerias, marca, liderança C-level, remuneração/ESOP e cultura |
| **Vol. 6 — Engenharia, Operações e Jurídico** | [`volumes/IGNICAO-Vol-6-Engenharia-e-Juridico.md`](volumes/IGNICAO-Vol-6-Engenharia-e-Juridico.md) | Apêndices de produto em escala, engenharia, dívida técnica, IA, design organizacional, processos, PI, LGPD, contratos, trabalhista e compliance |
| **Vol. 7 — Maturidade e Exit** | [`volumes/IGNICAO-Vol-7-Maturidade-e-Exit.md`](volumes/IGNICAO-Vol-7-Maturidade-e-Exit.md) | Fases 15 e 16 + Apêndices de governança/board, internacionalização, crise, layoffs, RJ, M&A, IPO, post-mortems e Epílogo |
| **Vol. 8 — Playbooks Setoriais** | [`volumes/IGNICAO-Vol-8-Playbooks-Setoriais.md`](volumes/IGNICAO-Vol-8-Playbooks-Setoriais.md) | Guias de Fase (B), Catálogo de Métricas (C), Leituras (E), macroeconomia, autarquias, CADE, políticas públicas e 9 Playbooks Verticais |
| **Vol. 9 — Ferramentário** | [`volumes/IGNICAO-Vol-9-Ferramentario.md`](volumes/IGNICAO-Vol-9-Ferramentario.md) | Índice de Frameworks + Apêndice BG completo (BG.1 a BG.19 — 163 frameworks) |
| **Vol. 10 — Canvases, Templates e Índices** | [`volumes/IGNICAO-Vol-10-Canvases-e-Templates.md`](volumes/IGNICAO-Vol-10-Canvases-e-Templates.md) | Canvases (CZ), Templates e casos brasileiros (A), Glossários, Abreviações, Bibliografias e Índices Remissivos |

---

## Tipos de contribuição

### 🐛 Reportar erro de fato

Se encontrou dado desatualizado, número incorreto, empresa com situação diferente da descrita ou referência equivocada:

1. Abra uma [Issue](../../issues/new?template=erro-de-fato.md)
2. Informe: onde está o erro (volume e seção, ex: `Vol. 3 — ## FASE 12`), o que está errado e a fonte correta

### 💡 Sugerir conteúdo novo

Para sugerir novo apêndice, caso brasileiro ou seção:

1. Abra uma [Discussion](../../discussions) na categoria "Ideias"
2. Descreva: o que falta, em qual volume se encaixa, por que é relevante para fundadores brasileiros e se tem disposição para escrever

### ✏️ Correção textual

Para erros de português, formatação ou clareza:

1. Faça fork do repositório
2. Edite a seção relevante no arquivo correspondente dentro de `volumes/IGNICAO-Vol-X-*.md`. Use `Ctrl+F` para encontrar `## FASE X` ou `## APÊNDICE X`
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
- **Links entre volumes**: use `[[#SEÇÃO|Texto]]` para seções do mesmo volume e `[[IGNICAO-Vol-X-Nome#SEÇÃO|Texto (Vol. X)]]` para seções de outro volume

---

## Processo de review

Pull requests de correção simples: aprovados em até 7 dias.  
Adições de conteúdo novo: discussão aberta por 14 dias antes de merge.  
Mudanças estruturais: decisão dos mantenedores.

---

*Dúvidas? Abra uma Discussion.*

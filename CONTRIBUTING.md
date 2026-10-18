# Como contribuir com o IGNIÇÃO

Obrigado por querer contribuir. Este manual existe para servir fundadores brasileiros, e melhora com colaboração da comunidade.

---

## Arquitetura dos volumes canônicos

O conteúdo do IGNIÇÃO é mantido em **6 volumes canônicos** dentro da pasta [`volumes/`](volumes/):

| Volume | Arquivo Canônico | Escopo |
|---|---|---|
| **Vol. 1 — Ideação** | [`volumes/IGNICAO-Vol-1-Ideacao.md`](volumes/IGNICAO-Vol-1-Ideacao.md) | Fases 0 a 2B + Apêndices de preparação, fundador, decisão, comunicação e IA pessoal |
| **Vol. 2 — Validação** | [`volumes/IGNICAO-Vol-2-Validacao.md`](volumes/IGNICAO-Vol-2-Validacao.md) | Fases 3 a 9 + Apêndices de descoberta, validação científica, mercado e modelos |
| **Vol. 3 — Tração** | [`volumes/IGNICAO-Vol-3-Tracao.md`](volumes/IGNICAO-Vol-3-Tracao.md) | Fases 10 a 12 + Apêndices de GTM inicial, canais, pricing, vendas, dados e caixa |
| **Vol. 4 — Escala** | [`volumes/IGNICAO-Vol-4-Escala.md`](volumes/IGNICAO-Vol-4-Escala.md) | Fases 13 e 14 + Apêndices de captação, finanças, vendas enterprise, pessoas, engenharia e jurídico |
| **Vol. 5 — Maturidade** | [`volumes/IGNICAO-Vol-5-Maturidade.md`](volumes/IGNICAO-Vol-5-Maturidade.md) | Fases 15 e 16 + Apêndices de governança/board, internacionalização, crise, M&A, IPO e Epílogo |
| **Vol. 6 — Referência** | [`volumes/IGNICAO-Vol-6-Referencia.md`](volumes/IGNICAO-Vol-6-Referencia.md) | Ferramentário (BG), Canvases (CZ), Templates (A), Métricas (C), Verticais Setoriais e Glossários |

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
3. Abra um Pull Request com descrição curta da mudança

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

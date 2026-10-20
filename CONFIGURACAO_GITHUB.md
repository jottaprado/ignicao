# Configurando o repositório no GitHub

## 1. Criando o repositório

1. Acesse [github.com/new](https://github.com/new)
2. **Repository name:** `ignicao` (ou `ignição`, mas sem acento é mais seguro para URLs)
3. **Description:** `Manual de campo do empreendedor brasileiro — 10 volumes, 18 fases, 146 apêndices, 760 mil palavras. Do pré-zero ao exit.`
4. **Public** (obrigatório para ser manual aberto)
5. **NÃO** inicializar com README (você vai enviar o seu)

## 2. Publicando os arquivos

```bash
cd ignicao/
git init
git add .
git commit -m "feat: IGNIÇÃO v3.5 — manual de campo do empreendedor brasileiro (10 volumes)"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/ignicao.git
git push -u origin main
```

## 3. Configurações no GitHub (Settings)

### Description e topics
- **Description:** `Manual de campo do empreendedor brasileiro — 10 volumes, 18 fases, 146 apêndices, 760 mil palavras.`
- **Website:** (deixe em branco ou coloque URL futura do GitHub Pages)
- **Topics (tags do repo):**
  ```
  empreendedorismo startup brasil pmf product-market-fit
  venture-capital saas growth fundador open-source
  portuguese brazil manual enciclopedia
  ```

### Social Preview (imagem de capa)
Settings → General → Social Preview → Upload image
- Recomendado: imagem 1280×640px com fundo escuro, logo IGNIÇÃO, tagline
- Aparece quando o link é compartilhado no Twitter/LinkedIn/WhatsApp

### GitHub Discussions
Settings → Features → Discussions ✓
- Permite que a comunidade sugira conteúdo e discuta

### About (sidebar direita)
Edite o "About" para aparecer na sidebar:
- Description: `Manual de campo do empreendedor brasileiro (10 volumes)`
- Topics adicionados acima
- ✓ Releases, ✓ Packages desmarcados (não usamos)

## 4. Criando um release

Após o push, crie um release:
1. Releases → Create a new release
2. **Tag:** `v3.5.0`
3. **Title:** `IGNIÇÃO v3.5 — Coleção Completa em 10 Volumes Focais`
4. **Description:**
```
IGNIÇÃO — Manual de Campo do Empreendedor Brasileiro (v3.5), organizado em 10 volumes focais + edição Omnibus, com introduções explicativas de domínio em todos os 30 blocos temáticos.

✅ 10 volumes homogêneos (~50k a ~88k palavras cada): Ideação, Validação, Tração, Captação e Finanças, Receita e Pessoas, Engenharia e Jurídico, Maturidade e Exit, Playbooks Setoriais, Ferramentário (BG) e Canvases/Templates/Índices (CZ e A)
✅ 30 Seções Introdutórias de Domínio conectando fases, apêndices, frameworks e templates
✅ 18 fases (Fase 0 a Fase 16, incluindo Fase 2B)
✅ 146 apêndices codificados (A a FG) + 11 seções de referência, glossários e índices
✅ 108 diagramas Mermaid
✅ ~760 mil palavras com contexto regulatório, tributário e cultural brasileiro
```
5. Faça upload dos arquivos `.epub` gerados em `build/` (`IGNICAO.epub` e `IGNICAO-Vol-1-Ideacao.epub` a `IGNICAO-Vol-10-Canvases-e-Templates.epub`) como assets do release

## 5. Divulgação

Posts recomendados para lançamento:

**Twitter/X:**
```
🔥 IGNIÇÃO — manual de campo do empreendedor brasileiro, aberto no GitHub

10 volumes. 18 fases. 146 apêndices. 760 mil palavras. Do pré-zero ao exit.

Não é livro pra ler do início ao fim. É enciclopédia operacional pra consultar quando você precisa.

github.com/SEU_USUARIO/ignicao

#empreendedorismo #startup #brasil
```

**LinkedIn:**
```
Depois de meses construindo, estou publicando o IGNIÇÃO como coleção aberta em 10 volumes focais.

O problema: a maioria dos recursos sobre empreendedorismo está em inglês, para o contexto americano. CAC de SaaS americano não é referência para startup brasileira. ANVISA e Reforma Tributária não aparecem no YC Application Guide.

O IGNIÇÃO cobre a jornada completa — da geração de ideia ao exit — com contexto, regulação, benchmarks e casos do Brasil:
• Vol. 1 — Ideação (Fases 0 a 2B)
• Vol. 2 — Validação (Fases 3 a 9)
• Vol. 3 — Tração (Fases 10 a 12)
• Vol. 4 — Captação e Finanças (Fase 13 + VC, Valuation e Tributário)
• Vol. 5 — Receita e Pessoas (Fase 14 + Enterprise, RevOps, Liderança e Cultura)
• Vol. 6 — Engenharia, Operações e Jurídico (Produto, IA, Org Design e Blindagem Legal)
• Vol. 7 — Maturidade e Exit (Fases 15 e 16 + Board, Crise, M&A e IPO)
• Vol. 8 — Playbooks Setoriais, Regulação, Macroeconomia e Métricas
• Vol. 9 — Ferramentário Completo (163 Frameworks em BG)
• Vol. 10 — Canvases (CZ), Templates Prontos (A), Glossário e Índices

18 fases. 146 apêndices. 108 diagramas. 760 mil palavras. Grátis e aberto (Markdown + EPUB).

[link do repo]
```

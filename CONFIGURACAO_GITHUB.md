# Configurando o repositório no GitHub

## 1. Criando o repositório

1. Acesse [github.com/new](https://github.com/new)
2. **Repository name:** `ignicao` (ou `ignição`, mas sem acento é mais seguro para URLs)
3. **Description:** `Manual operacional do empreendedor brasileiro — 17 fases, 91 apêndices, 400 mil palavras. Do pré-zero ao exit.`
4. **Public** (obrigatório para ser manual aberto)
5. **NÃO** inicializar com README (você vai enviar o seu)

## 2. Publicando os arquivos

```bash
cd ignicao/
git init
git add .
git commit -m "feat: IGNIÇÃO v3.0 — manual operacional do empreendedor brasileiro"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/ignicao.git
git push -u origin main
```

## 3. Configurações no GitHub (Settings)

### Description e topics
- **Description:** `Manual operacional do empreendedor brasileiro — 17 fases, 91 apêndices, 400 mil palavras.`
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
- Description: `Manual operacional do empreendedor brasileiro`
- Topics adicionados acima
- ✓ Releases, ✓ Packages desmarcados (não usamos)

## 4. Primeiro release

Após o push, crie um release:
1. Releases → Create a new release
2. **Tag:** `v3.0.0`
3. **Title:** `IGNIÇÃO v3.0 — Lançamento`
4. **Description:**
```
Primeira versão pública do IGNIÇÃO — manual operacional do empreendedor brasileiro.

✅ 17 fases (Fase 0 a Fase 16)
✅ 91 apêndices temáticos
✅ 58 diagramas Mermaid
✅ 156 frameworks com contexto brasileiro
✅ Glossário com 91 termos
✅ Catálogo de métricas por fase
✅ Casos brasileiros: Nubank, iFood, Stone, Hotmart, Natura e outros
```
5. Faça upload do arquivo IGNIÇÃO_v3.md como asset do release

## 5. Divulgação

Posts recomendados para lançamento:

**Twitter/X:**
```
🔥 IGNIÇÃO — manual operacional do empreendedor brasileiro, agora aberto

17 fases. 91 apêndices. 400 mil palavras. Do pré-zero ao exit.

Não é livro pra ler do início ao fim. É enciclopédia pra consultar quando você precisa.

github.com/SEU_USUARIO/ignicao

#empreendedorismo #startup #brasil
```

**LinkedIn:**
```
Depois de meses construindo, estou publicando o IGNIÇÃO como manual aberto.

O problema: a maioria dos recursos sobre empreendedorismo está em inglês, para o contexto americano. CAC de SaaS americano não é referência para startup brasileira. ANVISA não aparece no YC Application Guide.

O IGNIÇÃO cobre a jornada completa — da geração de ideia ao exit — com contexto, regulação, benchmarks e casos do Brasil.

17 fases. 91 apêndices. 58 diagramas. 400 mil palavras. Grátis e aberto.

[link do repo]
```


# Configurando o repositório no GitHub

## 1. Criando o repositório

1. Acesse [github.com/new](https://github.com/new)
2. **Repository name:** `ignicao` (ou `ignição`, mas sem acento é mais seguro para URLs)
3. **Description:** `Manual de campo do empreendedor brasileiro — 10 volumes autocontidos, 21 fases, 141 capítulos, 765 mil palavras. Do pré-zero ao exit.`
4. **Public** (obrigatório para ser manual aberto)
5. **NÃO** inicializar com README (você vai enviar o seu)

## 2. Publicando os arquivos

```bash
cd ignicao/
git init
git add .
git commit -m "feat: IGNIÇÃO v4.0 — 10 volumes 100% autocontidos (21 fases, 141 capítulos)"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/ignicao.git
git push -u origin main
```

## 3. Configurações no GitHub (Settings)

### Description e topics
- **Description:** `Manual de campo do empreendedor brasileiro — 10 volumes autocontidos, 21 fases, 141 capítulos, 765 mil palavras.`
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
- Description: `Manual de campo do empreendedor brasileiro (10 volumes autocontidos)`
- Topics adicionados acima
- ✓ Releases, ✓ Packages desmarcados (não usamos)

## 4. Criando um release

Após o push, crie um release:
1. Releases → Create a new release
2. **Tag:** `v4.0.0`
3. **Title:** `IGNIÇÃO v4.0 — Coleção em 10 Volumes 100% Autocontidos`
4. **Description:**
```
IGNIÇÃO — Manual de Campo do Empreendedor Brasileiro (v4.0), organizado em 10 volumes 100% autocontidos + edição Omnibus.

✅ Autocontenção total: 164 frameworks, 20 canvases, 39 templates preenchidos, métricas e leituras integrados diretamente dentro das Fases e Capítulos onde são utilizados
✅ 21 fases sequenciais (Fase 0 a Fase 20)
✅ 141 capítulos temáticos (Capítulo 1 a Capítulo N dentro de cada volume)
✅ 10 volumes homogêneos (~55k a ~98k palavras cada): Ideação, Descoberta e Mercado, Experimentos e Prototipagem, Tração e PMF, Finanças e Captação, Receita e Pessoas, Produto/Engenharia/Operações, Jurídico/LGPD/Segurança, Maturidade e Exit, e Playbooks Setoriais e Glossário
✅ 108 diagramas Mermaid
✅ ~765 mil palavras com contexto regulatório, tributário e cultural brasileiro
```
5. Faça upload dos arquivos `.epub` gerados em `build/` (`IGNICAO.epub` e `IGNICAO-Vol-1-Ideacao.epub` a `IGNICAO-Vol-10-Playbooks-Setoriais-e-Glossario.epub`) como assets do release

## 5. Divulgação

Posts recomendados para lançamento:

**Twitter/X:**
```
🔥 IGNIÇÃO v4.0 — manual de campo do empreendedor brasileiro, aberto no GitHub

10 volumes 100% autocontidos. 21 fases. 141 capítulos. 765 mil palavras. Do pré-zero ao exit.

Cada volume traz as fases, capítulos, frameworks, canvases, templates e casos brasileiros daquela etapa — sem precisar abrir outro livro.

github.com/SEU_USUARIO/ignicao

#empreendedorismo #startup #brasil
```

**LinkedIn:**
```
Acabo de publicar a v4.0 do IGNIÇÃO — coleção aberta em 10 volumes 100% autocontidos para o empreendedor brasileiro.

Na v4.0, redesenhamos toda a arquitetura editorial: cada volume agora traz dentro das próprias Fases (Fase 0 a Fase 20) e Capítulos (141 capítulos) todos os 164 frameworks, 20 canvases, 39 templates preenchidos, métricas e leituras daquele estágio. Você pode pegar apenas o volume do seu momento atual e ter o manual completo em mãos:

• Vol. 1 — Ideação (Fases 0 a 3 + Capítulos 1 a 13)
• Vol. 2 — Descoberta e Mercado (Fases 4 a 6 + Capítulos 1 a 4)
• Vol. 3 — Experimentos e Prototipagem (Fases 7 a 10 + Capítulos 1 a 9)
• Vol. 4 — Tração e PMF (Fases 11 a 13 + Capítulos 1 a 16)
• Vol. 5 — Finanças e Captação (Fase 14 + Capítulos 1 a 20)
• Vol. 6 — Receita e Pessoas (Fases 15 e 16 + Capítulos 1 a 19)
• Vol. 7 — Produto, Engenharia e Operações (Fase 17 + Capítulos 1 a 11)
• Vol. 8 — Jurídico, LGPD e Segurança (Fase 18 + Capítulos 1 a 14)
• Vol. 9 — Maturidade e Exit (Fases 19 e 20 + Capítulos 1 a 22)
• Vol. 10 — Playbooks Setoriais e Glossário (Capítulos 1 a 13 + Glossários e Índices)

21 fases. 141 capítulos. 108 diagramas. 765 mil palavras. Grátis e aberto (Markdown + EPUB).

[link do repo]
```

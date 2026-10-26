# Configurando o repositório no GitHub

## 1. Criando o repositório

1. Acesse [github.com/new](https://github.com/new)
2. **Repository name:** `ignicao` (ou `ignição`, mas sem acento é mais seguro para URLs)
3. **Description:** `Manual operacional do empreendedor brasileiro — 11 volumes autocontidos (v5.3), 21 fases, 185 capítulos, 42 verticais, 1,41 milhão de palavras. Do pré-zero ao exit e Family Office.`
4. **Public** (obrigatório para ser manual aberto)
5. **NÃO** inicializar com README (você vai enviar o seu)

## 2. Publicando os arquivos

```bash
cd ignicao/
git init
git add .
git commit -m "feat: IGNIÇÃO v5.3 — 11 volumes 100% autocontidos (21 fases, 185 capítulos, 42 verticais)"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/ignicao.git
git push -u origin main
```

## 3. Configurações no GitHub (Settings)

### Description e topics
- **Description:** `Manual operacional do empreendedor brasileiro — 11 volumes autocontidos (v5.3), 21 fases, 185 capítulos, 42 verticais, 1,41 milhão de palavras.`
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
- Description: `Manual operacional do empreendedor brasileiro (11 volumes autocontidos · v5.3)`
- Topics adicionados acima
- ✓ Releases habilitado

## 4. Criando um release

Após o push, crie um release via CLI (`gh release create v5.3.0 ...`) ou interface web:
1. Releases → Create a new release
2. **Tag:** `v5.3.0`
3. **Title:** `IGNIÇÃO v5.3.0 — Edição Narrativa Enxuta & Caderno de Trincheira (11 Volumes)`
4. **Description:**
```
IGNIÇÃO — Manual Operacional do Empreendedor Brasileiro (v5.3.0), organizado em 11 volumes 100% autocontidos + edição Omnibus.

✅ Autocontenção total: 162 frameworks, 20 canvases, 42 templates preenchidos (224 ferramentas únicas), métricas e leituras integrados diretamente dentro das Fases e Capítulos onde são utilizados
✅ 21 fases sequenciais (Fase 0 a Fase 20) + 8 Roteiros de Leitura por Perfil (Fast-Tracks)
✅ 185 capítulos temáticos (155 capítulos nos Volumes 1 a 10 + 30 capítulos práticos no Volume 11)
✅ 42 Playbooks Setoriais da economia real brasileira em 6 Clusters + Economia da Inovação e 15 Hubs Brasileiros
✅ Volume 11 (Caderno de Trincheira, Simulações de Decisão e Cases Globais & Nacionais): 58 cases em 4 atos, 50 exercícios com gabarito comentado, 27 simulações de roleplay executivo e o Simulador Integrador das 21 Fases (0 a 105 pontos)
✅ 11 volumes autocontidos (~74k a ~294k palavras cada)
✅ 131 diagramas Mermaid
✅ ~1,41 milhão de palavras com contexto regulatório, tributário e cultural brasileiro atualizado para Outubro de 2026
```
5. Faça upload dos 12 arquivos `.epub` gerados em `build/` (`IGNICAO.epub` e `IGNICAO-Vol-1-Ideacao.epub` a `IGNICAO-Vol-11-Workbook-Cases-e-Exercicios.epub`) como assets do release.

## 5. Divulgação

Posts recomendados para lançamento:

**Twitter/X:**
```
🔥 IGNIÇÃO v5.3 — manual operacional do empreendedor brasileiro, aberto no GitHub

11 volumes 100% autocontidos. 21 fases. 185 capítulos. 42 verticais. 224 ferramentas. 1,41 milhão de palavras. Do pré-zero ao exit e Family Office.

Inclui o novo Volume 11 com 58 cases globais e nacionais, 50 exercícios resolvidos, 27 roleplays executivos e o simulador completo das 21 fases.

github.com/jottaprado/ignicao

#empreendedorismo #startup #brasil
```

**LinkedIn:**
```
Acabo de publicar a v5.3 do IGNIÇÃO — coleção aberta em 11 volumes 100% autocontidos para o empreendedor brasileiro.

Na v5.3, consolidamos toda a arquitetura narrativa, regulatória e tributária (Outubro de 2026) e adicionamos o Volume 11 (Caderno de Trincheira, Simulações de Decisão e Cases Globais & Nacionais). Cada volume traz dentro das próprias Fases (Fase 0 a Fase 20) e Capítulos (185 capítulos) todos os 162 frameworks, 20 canvases e 42 templates preenchidos daquele estágio:

• Vol. 1 — Ideação (Fases 0 a 3 + Capítulos 1 a 12)
• Vol. 2 — Descoberta e Mercado (Fases 4 a 6 + Capítulos 1 a 3)
• Vol. 3 — Experimentos e Prototipagem (Fases 7 a 10 + Capítulos 1 a 7)
• Vol. 4 — Tração e PMF (Fases 11 a 13 + Capítulos 1 a 11)
• Vol. 5 — Finanças e Captação (Fase 14 + Capítulos 1 a 15)
• Vol. 6 — Receita e Pessoas (Fases 15 e 16 + Capítulos 1 a 15)
• Vol. 7 — Produto, Engenharia e Operações (Fase 17 + Capítulos 1 a 10)
• Vol. 8 — Jurídico, LGPD e Segurança (Fase 18 + Capítulos 1 a 13)
• Vol. 9 — Maturidade, Exit e Family Office (Fases 19 e 20 + Capítulos 1 a 21 + Epílogo)
• Vol. 10 — Economia da Inovação, Hubs Globais e Playbooks das 42 Verticais (Capítulos 1 a 48 + Dicionário Geral)
• Vol. 11 — Caderno de Trincheira, Simulações de Decisão e Cases Globais & Nacionais (Capítulos 1 a 30 + Simulador 21 Fases)

21 fases. 185 capítulos. 42 setores. 224 ferramentas. 1,41 milhão de palavras. Grátis e aberto (Markdown + EPUB).

https://github.com/jottaprado/ignicao
```

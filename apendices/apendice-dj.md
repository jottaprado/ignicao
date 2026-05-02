---
title: "APÊNDICE DJ — NÃO-CONCORRÊNCIA E NÃO-SOLICITAÇÃO NO BRASIL"
appendix: "DJ"
---

## APÊNDICE DJ — NÃO-CONCORRÊNCIA E NÃO-SOLICITAÇÃO NO BRASIL

> [!note] Aviso legal
> Este apêndice é material educacional. A validade de cláusulas de não-concorrência no Brasil é questão jurídica ativa, com jurisprudência divergente. Consulte advogado trabalhista com experiência em tecnologia e startups antes de assinar ou incluir essas cláusulas.

> [!note] Posição no livro
> Relevante para [[fases/fase-13|Fase 13 — Estruturação]], [[apendice-ah|Apêndice AH — Contratos e Aspectos Legais]], [[apendice-co|Apêndice CO — Recrutamento Técnico]] e [[fases/fase-16|Fase 16 — Exit]] (onde o adquirente frequentemente exige não-concorrência do fundador).

---

### O estado atual da não-concorrência no Brasil

Diferente dos EUA (onde estados como Califórnia proíbem completamente a non-compete) ou da Europa (onde regulação específica existe), o Brasil não tem lei explícita sobre não-concorrência pós-emprego. O que existe é um equilíbrio tenso entre:

- **Art. 5º, XIII da Constituição Federal:** livre exercício de trabalho, ofício ou profissão
- **Art. 421 do Código Civil:** liberdade contratual limitada pela boa-fé e função social
- **Art. 482 da CLT (implicitamente):** concorrência desleal como falta grave

O resultado é que tribunais brasileiros tratam não-concorrência de forma ambígua. Algumas decisões consideram válida a cláusula; outras consideram nula por ofensa à liberdade de trabalho. O que determina o resultado é a forma como a cláusula é escrita.

---

### Tipos de restrição pós-vínculo

#### 1. Não-concorrência (non-compete)

Proíbe o ex-funcionário de trabalhar para concorrentes ou criar empresa concorrente por período determinado após o desligamento.

**Validade jurídica no Brasil:**

O TST (Tribunal Superior do Trabalho) tem decidido que a cláusula de não-concorrência pós-emprego é válida **se cumulativamente:**

- Tiver prazo determinado (máximo entendido pela maioria da doutrina: 1–2 anos)
- Tiver âmbito geográfico e setorial delimitado (não pode ser "qualquer empresa em qualquer lugar")
- Tiver **contraprestação econômica** ao ex-funcionário pelo período de restrição

A ausência de contraprestação é o principal motivo de nulidade. Cláusula que diz "você não pode trabalhar para concorrentes por 2 anos após a saída" sem pagamento pelo período é, na maioria das decisões recentes, nula.

> [!warning] Sem contraprestação = sem validade
> Se a empresa não está pagando pelo período de não-concorrência, dificilmente conseguirá executar a cláusula na Justiça do Trabalho. A maioria dos juízes entende que impedir trabalho sem pagamento viola a dignidade da pessoa humana e a liberdade de trabalho constitucionalmente garantida.

**Contraprestação mínima sugerida pela prática:**

Não há valor legal fixo. A doutrina e jurisprudência mais recentes indicam que o valor deve ser proporcional ao período e à perda efetiva de renda. Referências informais:

- 50–100% do salário mensal para cada mês de restrição é o patamar mais citado
- Para cargos de R$ 15K/mês com non-compete de 12 meses: R$ 90K–180K de contraprestação

**Como estruturar a contraprestação:**

- Paga mensalmente durante o período de restrição (melhor para o funcionário, pior para o fluxo de caixa da empresa)
- Paga de uma vez na rescisão (melhor para a empresa, mas exige capital)
- Incorporada ao salário durante o emprego (prática comum mas juridicamente questionável — o TST tem criticado)

#### 2. Não-solicitação de clientes (non-solicit clients)

Proíbe o ex-funcionário de abordar clientes da empresa anterior por período determinado.

**Validade:** Mais aceita pelos tribunais do que o non-compete puro, especialmente quando focada em clientes com os quais o funcionário teve contato direto. Exige a mesma estrutura: prazo, delimitação e (para ser robusta) contraprestação.

#### 3. Não-solicitação de funcionários (non-solicit employees)

Proíbe o ex-funcionário de recrutar colegas para outra empresa.

**Validade:** Geralmente mais aceita do que non-compete geral, pois restringe comportamento ativo (recrutar), não a mera existência de emprego paralelo.

#### 4. Confidencialidade (NDA)

Tecnicamente não é non-compete — é proteção de informação confidencial. A obrigação de não divulgar segredos industriais, dados de clientes e informações estratégicas pode ter prazo indefinido e é mais robusta juridicamente do que o non-compete.

> [!tip] NDA é mais executável do que non-compete
> Se o objetivo da empresa é proteger informação estratégica e relacionamentos com clientes, um NDA bem redigido combinado com não-solicitação tem mais chance de ser executado do que um non-compete genérico. Foque na proteção de informação, não no impedimento de trabalho.

---

### Non-compete em contratos de M&A

O contexto mais robusto para não-concorrência no Brasil é o contrato comercial (não trabalhista) entre pessoas jurídicas. Quando um fundador vende sua empresa, o adquirente quase sempre exige cláusula de não-concorrência — desta vez entre empresas, não entre empregado e empregador.

**Por que é diferente:**

- O fundador assina como sócio (PJ) vendendo participação, não como empregado
- O Código Civil admite restrições comerciais entre partes iguais com maior amplitude
- A liberdade de trabalho constitucionalmente protegida é do trabalhador; o empresário tem autonomia de vontade mais ampla
- Tribunais civis (não trabalhistas) aplicam regras diferentes

**Estrutura típica em M&A:**

```
Não-concorrência: 3–5 anos após o closing
Âmbito: produtos/serviços similares aos da empresa vendida
Geografia: Brasil + países onde a empresa opera
Contrapartida: parte do preço de venda é alocada à não-concorrência
```

**O que não se pode incluir nem em M&A:**

- Restrição vitalícia (viola liberdade de trabalho mesmo em contexto comercial, segundo doutrina dominante)
- Âmbito absolutamente genérico ("qualquer atividade empresarial") sem delimitação de setor
- Multa desproporcionalmente alta sem base econômica (pode ser reduzida pelo juiz)

---

### Não-concorrência para cofundadores e sócios

Acordos de sócios frequentemente incluem cláusula de não-concorrência para o sócio que sai. Contexto societário é diferente do trabalhista:

- Não há relação de subordinação — é acordo entre empresários
- Código Civil admite restrições desde que não sejam abusivas
- A cláusula deve ter prazo, âmbito e (para ser robusta) contraprestação

Para sócio que sai voluntariamente vs. sócio excluído: a validade pode variar. Sócio que saiu voluntariamente com pagamento pelo valor de suas cotas tem argumento para aceitar a restrição; sócio excluído sem justa causa tem argumento mais forte para contestar.

---

### Comparativo internacional (para founders com estrutura offshore)

| Jurisdição | Regime | Observação |
|---|---|---|
| **Califórnia (EUA)** | Non-compete proibido | Exceto em contexto de venda de empresa |
| **Delaware (EUA)** | Non-compete válido com limitações razoáveis | Padrão para acordos de M&A americanos |
| **Reino Unido** | Válido se razoável (prazo, âmbito, proteção de interesse legítimo) | Garden leave comum para executivos |
| **Portugal** | Código do Trabalho: non-compete pós-emprego válido com contraprestação (mínimo 50% do salário) | Similar ao Brasil |
| **Brasil** | Sem lei específica; validade dependente de jurisprudência e estrutura | Este apêndice |

---

### Checklist para o fundador — antes de assinar

**Como empregador (inserindo cláusula nos contratos do time):**

- [ ] A cláusula tem prazo determinado (máximo 24 meses para empregado)?
- [ ] Há delimitação geográfica e setorial (não pode ser "qualquer concorrente no mundo")?
- [ ] Há contraprestação explícita e proporcional ao período de restrição?
- [ ] A cláusula é de confidencialidade + não-solicitação (mais executável) ou non-compete puro (mais contestável)?
- [ ] A cláusula foi revisada por advogado trabalhista?

**Como fundador (assinando em contrato de M&A):**

- [ ] Qual o prazo? 3 anos é razoável; 5 anos é prazo que começa a ser questionado
- [ ] Qual o âmbito? "Produtos similares aos da empresa" é razoável; "qualquer negócio digital" é excessivo
- [ ] Qual a contraprestação alocada especificamente à non-compete (separada do goodwill)?
- [ ] Qual a multa por violação? Proporcional à contraprestação recebida?
- [ ] O que acontece se o adquirente me demitir antes do prazo — a non-compete persiste?
- [ ] Há exceções (ex: posso ser advisor de empresa não-concorrente)?

> [!info] Fases relacionadas
> Referenciado em: Fase 16.

---

### Armadilhas

1. **Non-compete sem contraprestação para empregados.** Juridicamente frágil; gera ônus de prova invertido para a empresa na Justiça do Trabalho.
2. **Âmbito genérico demais.** "Não pode trabalhar em tecnologia" não é executável. "Não pode trabalhar em SaaS de gestão para padarias no Brasil por 12 meses" é.
3. **Non-compete para cargos com pouco acesso a informação sensível.** Quanto menor o acesso a segredos industriais, menor a justificativa — e menor a chance de execução.
4. **Confundir NDA com non-compete.** São instrumentos diferentes para fins diferentes. NDA protege informação; non-compete protege mercado.
5. **Ignorar a non-compete do adquirente no M&A.** Assinar sem ler ou sem negociar âmbito e exceções pode prender o fundador por 5 anos.
6. **Non-compete excessivamente longa em M&A com earnout.** Se o adquirente tem meios de demitir o fundador antes do earnout terminar, a non-compete que persiste é instrumento de pressão desproporcional.

**Ver também:** [[apendice-ah|Apêndice AH — Contratos]], [[apendice-dc|Apêndice DC — Propriedade Intelectual]], [[fases/fase-16|Fase 16 — Exit]], [[apendice-bj|Apêndice BJ — M&A]]

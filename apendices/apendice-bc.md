---
title: "APÊNDICE BC — TECHNICAL DEBT COMO DISCIPLINA GERENCIADA"
appendix: "BC"
---

## APÊNDICE BC — TECHNICAL DEBT COMO DISCIPLINA GERENCIADA

> [!note] Aplicabilidade
> Empresas pós-Série A, com time de engenharia de dez ou mais pessoas.

### O que esse apêndice cobre

Technical debt (dívida técnica) é trabalho de engenharia acumulado que, deixado em aberto, aumenta o custo de mudanças futuras. A analogia útil são juros compostos negativos em codebase (base de código).

### POR QUE

Sem gestão explícita, o tech debt (dívida técnica) acumula até travar desenvolvimento.

Os sintomas. Velocity (velocidade de entrega) caindo, bugs aumentando, contratados desistindo, e incidents (incidentes em produção) crescendo.

> [!warning] Board, e investidor, não veem
> Tech debt é problema invisível, até explodir. O board (conselho) olha para velocity, e roadmap (mapa de produto), sem ver as causas. Quando a velocity cai trinta por cento de um trimestre para o outro, e o motivo é débito acumulado por dois anos, a conversa é dolorosa. Antecipar essa conversa é parte da disciplina.

### Como executar

#### 1. Medição

Qualitativo. Ticket bugs por sprint, e tempo para adicionar feature simples.

Engineering Time Survey. Percentual de tempo em "necessário, mas não agrega valor" (manutenção, e workarounds).

SPACE framework. Satisfaction, Performance, Activity, Communication, Efficiency.

DORA metrics. Deployment frequency, lead time for changes, MTTR, e change failure rate.

#### 2. Categorização

Deliberate debt. Conscientemente contraído por prazo ("vamos arrumar depois"). Deve ter prazo de pagamento.

Accidental debt. A decisão foi boa na hora. O contexto mudou. E agora é débito.

Rot. Debt de dependências desatualizadas, linguagens, ou frameworks antigos.

#### 3. Priorização de pagamento

High frequency vezes high cost. Pagar primeiro. Code path mexido diariamente, com custo alto de mudança.

Blocker. Bloqueia features planejadas.

Risk. Segurança, e confiabilidade.

Low frequency vezes low cost. Aceitar. Não pagar.

#### 4. Alocação de capacity

> [!important] Regra dos vinte por cento
> Vinte por cento do sprint capacity dedicado a debt. Não negociável. Cair abaixo disso por mais de dois trimestres seguidos é o sinal mais claro de que a empresa está priorizando velocity de curto prazo, em detrimento de capacidade de execução de longo prazo. A consequência aparece seis a doze meses depois. Sempre.

Fix-it weeks. Uma a duas semanas por trimestre, dedicadas cem por cento a debt.

Rewrite versus refactor. Reescrita raramente justifica custo. Refactor incremental é norma.

#### 5. Comunicação ao board

Em termos de business. Não "temos debt técnico". Mas "velocity caiu trinta por cento, quarenta por cento do tempo vai em manutenção, e isso impacta delivery de roadmap em dois trimestres".

Tradeoff explícito. Features de produto, versus pagamento de debt. O board precisa saber.

KPIs. Deployment frequency, MTTR, e percentual de tempo em features versus manutenção.

#### 6. Prevention

Code review rigoroso. Catch debt antes de merge.

Automated testing. Regression prevention.

Architecture decisions documented (ADRs). Raciocínio preservado.

Regular refactoring. Pequenos pagamentos contínuos.

### Checklist

- [ ] Tech debt mensurado (qualitativa, ou quantitativamente)?
- [ ] Capacity dedicado regularmente (regra dos vinte por cento, ou fix-it weeks)?
- [ ] Priorização clara (high-freq vezes high-cost primeiro)?
- [ ] Comunicação estruturada ao board, ou liderança não-técnica?
- [ ] DORA metrics, ou equivalente, rastreados?
- [ ] Prevention prática (reviews, testing, ADRs)?

### Ver também

[[#APÊNDICE CH — IA NA ENGENHARIA INTERNA: COPILOT, AGENTES E PRODUTIVIDADE DE DEV|Apêndice CH]], IA na engenharia interna. [[#APÊNDICE CR — ENGINEERING MANAGEMENT: GESTÃO DO TIME TÉCNICO E DEVELOPER EXPERIENCE|Apêndice CR]], Engineering management em escala, e Developer Experience.

---

---

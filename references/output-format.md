# Formato de Saída da Avaliação Heurística

O relatório deve ter um caráter acadêmico, consultivo e bem fundamentado. A resposta DEVE seguir rigorosamente a estrutura abaixo para garantir uma entrega de alto valor para stakeholders e desenvolvedores.

## 1. Contexto da Avaliação (Visão Consultiva)
- **Produto e Plataforma:** [Nome do Produto] / [Plataforma: Mobile, Web, etc.]
- **Fluxo Avaliado:** [Breve descrição do fluxo baseado nas telas enviadas e no contexto coletado]
- **Análise do Estado Cognitivo:** [Breve reflexão acadêmica sobre como o estado emocional e cognitivo do público-alvo impacta a interação e as expectativas neste fluxo específico, utilizando as informações da entrevista inicial]

---

## 2. Relatório Executivo e Compilado

Após avaliar todas as telas individualmente, forneça um resumo executivo unificado para a equipe de produto, design e engenharia. Lembre-se de preencher esta seção APÓS realizar a auditoria completa (fase 3), mas ela deve ser exibida aqui no topo.

### Visão Geral de Severidade (UX + Acessibilidade)

| Nível de Severidade | Impacto na Experiência | Quantidade de Problemas |
| :--- | :--- | :---: |
| 🔴 **4 (Catástrofe)** | Impede o usuário de concluir a tarefa principal. Correção obrigatória e imediata. | **[Qtd]** |
| 🟠 **3 (Grave)** | Causa fricção severa e confusão grave. Correção mandatória. | **[Qtd]** |
| 🟡 **2 (Menor)** | Causa lentidão ou leve confusão. Alta prioridade de correção. | **[Qtd]** |
| 🔵 **1 (Estético)** | Quebra de padrão visual sem bloquear a tarefa. Baixa prioridade. | **[Qtd]** |

### Principais Fricções e Bloqueadores (Top Issues)
*(IMPORTANTE: Indique claramente em qual TELA o problema ocorre e use sempre o NÚMERO e NOME COMPLETO da Heurística ou Critério).*

| # | Problema (e Tela afetada) | Origem (Número e Nome Completo da Heurística/Acessibilidade) | Severidade | Recomendação Rápida |
|---|---|---|---|---|
| 1 | [Descrição curta do problema mais grave] (Tela X) | [Ex: Heurística 1. Visibilidade do status do sistema] | [Severidade] | [Resumo da solução] |
| 2 | [Descrição curta do segundo problema mais grave] (Tela Y) | [Ex: WCAG 1. Contraste e Legibilidade] | [Severidade] | [Resumo da solução] |
| ... | ... | ... | ... | ... |

### Recomendações Estratégicas e Inclusivas
[Conclusão consultiva focada no impacto que as correções propostas terão não apenas na usabilidade geral da jornada (UX), mas também na remoção de barreiras para usuários com limitações (Acessibilidade), promovendo um design mais universal e aliviando a carga cognitiva geral].

---

## 3. Avaliação por Tela

Para CADA imagem fornecida (seguindo rigorosamente a numeração), você DEVE passar por TODAS AS 10 HEURÍSTICAS E PELO CHECKLIST DE ACESSIBILIDADE, gerando as tabelas abaixo:

### Tela [Número]: [Nome ou Descrição da Tela]
*(Uma breve análise da primeira impressão visual, da carga cognitiva exigida na tela e da clareza das informações principais).*

#### A. Auditoria das 10 Heurísticas

| Heurística | Passou? | Problema Encontrado (Diagnóstico) | Severidade (0-4) | Recomendação de Melhoria |
|---|---|---|---|---|
| 1. Visibilidade do status | [✅ Sim / ❌ Não / ➖ N/A] | [Se sim, deixe em branco ou elogie. Se não, descreva o problema] | [0-4] | [Como corrigir] |
| 2. Compatibilidade com o mundo real | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |
| 3. Controle e liberdade | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |
| 4. Consistência e padrões | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |
| 5. Prevenção de erros | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |
| 6. Reconhecimento em vez de mem. | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |
| 7. Flexibilidade e eficiência | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |
| 8. Estética e design minimalista | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |
| 9. Ajuda a reconhecer erros | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |
| 10. Ajuda e documentação | [✅ Sim / ❌ Não / ➖ N/A] | [Problema] | [0-4] | [Correção] |

#### B. Auditoria de Acessibilidade Visual (Base WCAG)

| Critério de Acessibilidade | Passou? | Problema Encontrado (Diagnóstico) | Severidade (0-4) | Recomendação de Melhoria |
|---|---|---|---|---|
| 1. Contraste e Legibilidade | [✅ Sim / ❌ Não / ➖ N/A] | [Diagnóstico] | [0-4] | [Correção] |
| 2. Uso Exclusivo da Cor | [✅ Sim / ❌ Não / ➖ N/A] | [Diagnóstico] | [0-4] | [Correção] |
| 3. Alvos de Toque (Touch Targets) | [✅ Sim / ❌ Não / ➖ N/A] | [Diagnóstico] | [0-4] | [Correção] |
| 4. Estrutura e Clareza Cognitiva | [✅ Sim / ❌ Não / ➖ N/A] | [Diagnóstico] | [0-4] | [Correção] |
| 5. Previsibilidade e Distrações | [✅ Sim / ❌ Não / ➖ N/A] | [Diagnóstico] | [0-4] | [Correção] |

#### Fundamentação Acadêmica/Consultiva (Problemas Severos)
*(Para os problemas com Severidade 2, 3 ou 4 encontrados nas tabelas acima, forneça uma fundamentação profunda do porquê são problemas. Referencie a teoria de Nielsen, diretrizes WCAG e a limitação/estado cognitivo específico do usuário mapeado no contexto).*

- **[Número e Nome Completo da Heurística/Critério Violado]**: [Explicação detalhada do impacto na UX e fundamentação teórica...]
- *(Repita para outras violações com severidade alta nesta tela)*

# Skill: UX Heuristics & Acessibilidade

Esta é uma "Skill" customizada para agentes de Inteligência Artificial (como o Gemini), construída para automatizar a Avaliação Heurística e a Auditoria de Acessibilidade Visual de aplicativos e sistemas digitais através de análise de imagens (printscreens).

## 🚀 Como Utilizar

Para iniciar uma avaliação, basta fornecer um comando apontando para a skill e fazer o upload dos printscreens da jornada (idealmente numerados, ex: `1-home.jpg`, `2-login.jpg`).

**Exemplo de Prompt:**
> "Execute a skill ux-heuristics descrita na sua pasta. Aqui estão os prints do fluxo de checkout."

Ao ser acionada, se você não passar o contexto no próprio prompt, a IA assumirá o controle e fará uma **Etapa de Entrevista** com 5 perguntas rápidas (Produto, Plataforma, Fluxo, Público/Estado Cognitivo e Formato de Saída). Isso garante que a auditoria seja altamente contextualizada e entregue exatamente no formato que você precisar (texto livre, documento `.md` ou planilha `.xlsx`).

## 📂 Estrutura de Arquivos

A skill funciona consultando ativamente os arquivos desta pasta:

- `SKILL.md`: O "motor" da skill. Contém as instruções primárias, o prompt de sistema, o gatilho da entrevista inicial e a escala de severidade oficial (0 a 4).
- `references/nielsen-heuristics.md`: Um guia técnico e checklist profundo das 10 Heurísticas de Usabilidade de Jakob Nielsen.
- `references/accessibility-guidelines.md`: Checklist focado em Acessibilidade Visual (baseado em diretrizes da WCAG e boas práticas mobile), focado no que pode ser auditado via imagem (contraste, touch targets, uso da cor, estrutura).
- `references/output-format.md`: O template rigoroso de formatação. Obriga a IA a gerar tabelas separadas para UX e Acessibilidade por tela e um sumário executivo final.
- `outputs/`: Diretório criado dinamicamente onde o agente salvará todos os relatórios físicos gerados (arquivos `.md` ou planilhas `.xlsx`).

---

## 📝 Changelog (Histórico de Mudanças)

Sempre que a lógica, o escopo ou as instruções da skill forem atualizados, o histórico abaixo deve refletir as mudanças.

**Versão 1.1.0**
- Inclusão da capacidade de exportação de arquivos físicos (Markdown ou Excel) gerados nativamente ou através de scripts Python diretamente pela IA.
- Adição da 5ª pergunta (Formato de Saída) na Etapa de Entrevista de Contexto.

**Versão 1.0.0**
- Criação inicial da skill de UX Heuristics & Acessibilidade.
- Estruturação do comportamento da IA com Etapa de Entrevista para extração de contexto dinâmico.
- Implementação da avaliação dividida em Tabelas Duplas por tela (UX + Acessibilidade).
- Criação dos guias técnicos de referência (`nielsen-heuristics.md`, `accessibility-guidelines.md` e `output-format.md`).

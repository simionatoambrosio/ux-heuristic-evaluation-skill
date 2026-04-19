# Checklist de Acessibilidade Visual (Análise Heurística)

A acessibilidade digital garante que produtos possam ser usados pelo maior número de pessoas possível, incluindo pessoas com deficiências visuais, motoras, cognitivas ou situacionais.

Em uma auditoria baseada em imagens (printscreens), não é possível verificar o código por trás da interface (ex: não é possível atestar o funcionamento de leitores de tela ou navegação por teclado). Portanto, a análise de acessibilidade do agente deve focar estritamente nos **aspectos visuais e estruturais** descritos abaixo, baseados nas diretrizes WCAG (Web Content Accessibility Guidelines).

## 1. Contraste e Legibilidade (Visão)
A falta de contraste é o problema de acessibilidade número um na web.
- [ ] **Contraste de Texto:** O texto tem contraste suficiente com o fundo? (A proporção ideal é de pelo menos 4.5:1 para texto normal). *Atenção especial a textos em cinza-claro sobre fundo branco ou textos brancos sobre imagens de fundo variadas.*
- [ ] **Contraste de Componentes:** Botões, campos de formulário e ícones essenciais (que transmitem informação vital) têm bordas ou preenchimentos visíveis o suficiente para serem identificados sem esforço?
- [ ] **Tamanho da Fonte:** A fonte base é legível? (Geralmente recomenda-se 16px como mínimo confortável para corpo de texto em mobile e web).

## 2. Uso Exclusivo da Cor (Visão / Daltonismo)
A cor nunca deve ser a única forma de transmitir uma informação ou requerer uma ação.
- [ ] **Dependência de Cor:** A interface usa apenas a cor para comunicar o status de algo? (Ex: Apenas pintar a borda do campo de formulário de vermelho em um erro, sem incluir um ícone ❌ ou texto explicativo de erro embaixo).
- [ ] **Links Embutidos:** Os links de texto posicionados no meio de parágrafos normais possuem algum indicador visual extra além da cor (como um sublinhado ou ícone de seta)?

## 3. Alvos de Toque / Touch Targets (Motora)
Áreas interativas muito pequenas prejudicam pessoas com problemas motores, tremores nas mãos ou pessoas em movimento físico.
- [ ] **Tamanho do Touch Target:** Botões, ícones clicáveis, links de texto e abas têm área de toque suficiente? (Mínimo de 44x44 CSS pixels de acordo com a Apple HIG, ou 48x48dp de acordo com o Google Material Design).
- [ ] **Espaçamento:** Há espaço em branco (respiro) suficiente entre botões adjacentes para evitar que o usuário clique no botão errado acidentalmente?

## 4. Estrutura e Clareza Cognitiva (Cognitiva)
Interfaces superlotadas prejudicam pessoas com TDAH, dislexia, autismo ou pessoas em estado de estresse severo.
- [ ] **Hierarquia Visual:** O design possui focos claros? O olho é guiado facilmente para a ação principal, ou as informações concorrem e "gritam" todas ao mesmo tempo na tela?
- [ ] **Alinhamento e Agrupamento (Lei da Proximidade):** Elementos relacionados estão agrupados visualmente em "cards" ou sessões claras?
- [ ] **Texto em Imagem:** Existe texto importante que está "preso" dentro de um banner ou imagem (o que impossibilita o zoom nativo do sistema operacional sem distorção e a leitura por screen readers)?

## 5. Previsibilidade e Distrações (Cognitiva)
- [ ] **Controles Claros de Saída:** Modais, janelas de pop-up e abas possuem controles claros, com alto contraste e óbvios de fechamento (um ícone de "X" evidente ou botão "Cancelar")?
- [ ] **Elementos Obstrutivos:** Banners fixos, cookies pop-ups ou botões flutuantes (FABs) ocultam ou sobrepõem informações vitais de leitura na parte inferior da tela sem permitir sua remoção?

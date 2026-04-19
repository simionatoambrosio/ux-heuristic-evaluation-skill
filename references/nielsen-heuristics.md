# 10 Heurísticas de Usabilidade de Nielsen (Guia e Checklist)

As 10 heurísticas de Jakob Nielsen são regras gerais para o design de interfaces de interação. Elas não são diretrizes específicas inesgotáveis, mas sim princípios gerais de design. 

Abaixo você encontra a descrição teórica, exemplos clássicos e um **Checklist de Avaliação** embutido para cada heurística.
> **Nota Importante:** O checklist serve como um apoio valioso para guiar a sua análise e expandir a visão, mas **não é exaustivo**. Ele não cobre todos os cenários possíveis do mundo real. Utilize a definição teórica e descritiva da heurística como fundamento primário para identificar problemas e acertos que possam não estar listados diretamente no checklist.

---

## 1. Visibilidade do status do sistema
O sistema deve sempre manter os usuários informados sobre o que está acontecendo, por meio de feedback apropriado dentro de um tempo razoável.
- **Exemplo**: Barras de progresso durante o upload de um arquivo; indicação visual de que um item foi adicionado ao carrinho.

**Checklist de Avaliação (Apoio):**
- [ ] O usuário sabe em qual tela/passo ele está agora?
- [ ] O sistema fornece feedback visual imediato após uma ação (ex: botão muda de cor ao clicar, spinner de carregamento)?
- [ ] Mudanças de estado são óbvias (ex: item adicionado ao carrinho é sinalizado visualmente)?
- [ ] Processos longos mostram o tempo restante estimado ou uma barra de progresso clara?
- [ ] O usuário entende que o sistema está processando informações e não travou?

---

## 2. Compatibilidade entre o sistema e o mundo real
O sistema deve falar a linguagem do usuário, com palavras, frases e conceitos familiares ao usuário, em vez de termos orientados ao sistema. Siga as convenções do mundo real, fazendo com que a informação apareça em uma ordem natural e lógica.
- **Exemplo**: Um ícone de lixeira para excluir itens; usar a palavra "Comprar" em vez de "Executar transação".

**Checklist de Avaliação (Apoio):**
- [ ] A linguagem usada é livre de jargões técnicos ou institucionais (ex: "Liquidação extrajudicial" vs "Banco fechado")?
- [ ] Os ícones utilizados têm um significado claro e universal no mundo real (ex: ícone de disquete para salvar, lixeira para apagar)?
- [ ] As informações estão ordenadas de forma lógica e natural para o ser humano?
- [ ] A interface se comporta de acordo com as expectativas mentais do usuário sobre como as coisas funcionam fora da tela?

---

## 3. Controle e liberdade do usuário
Os usuários muitas vezes escolhem funções do sistema por engano e precisarão de uma "saída de emergência" claramente marcada para sair do estado indesejado sem ter que passar por um diálogo extenso. Suporte desfazer e refazer.
- **Exemplo**: Um botão "Cancelar" bem visível em um formulário; a opção "Desfazer" ao arquivar um e-mail.

**Checklist de Avaliação (Apoio):**
- [ ] Existe um botão de "Voltar" ou "Cancelar" sempre visível e funcional?
- [ ] É fácil fechar modais, banners ou janelas sobrepostas (ex: botão 'X' com área de toque visível)?
- [ ] O usuário pode desfazer (Undo) uma ação destrutiva recém-tomada?
- [ ] O usuário pode pular passos que não são estritamente obrigatórios?
- [ ] O usuário se sente preso em algum fluxo (ex: impossibilidade de fechar uma tela)?

---

## 4. Consistência e padrões
Os usuários não devem ter que se perguntar se diferentes palavras, situações ou ações significam a mesma coisa. Siga as convenções da plataforma.
- **Exemplo**: O botão de "Busca" deve estar no mesmo lugar (geralmente no topo) em todas as telas do aplicativo.

**Checklist de Avaliação (Apoio):**
- [ ] Os botões primários têm sempre a mesma cor, forma e peso visual em todas as telas?
- [ ] Elementos interativos (links, abas, botões) parecem clicáveis e não se confundem com texto puro?
- [ ] A interface segue os padrões de usabilidade e arquitetura de sistemas operacionais móveis (ex: navegação inferior, botões de ação)?
- [ ] A terminologia é consistente em todo o aplicativo (ex: se usar "Entrar", não use "Login" na tela seguinte)?
- [ ] O posicionamento de ícones (Busca, Perfil) permanece no mesmo lugar da tela através da jornada?

---

## 5. Prevenção de erros
Ainda melhor do que boas mensagens de erro é um design cuidadoso que previne a ocorrência de problemas. Elimine condições propensas a erros ou verifique-as e apresente aos usuários uma opção de confirmação antes de cometerem a ação.
- **Exemplo**: Formatar automaticamente o número de telefone ou CPF; desabilitar o botão de envio até que todos os campos obrigatórios sejam preenchidos.

**Checklist de Avaliação (Apoio):**
- [ ] Ações destrutivas exigem confirmação (ex: "Tem certeza que deseja encerrar o pedido?")?
- [ ] Formulários possuem restrições ou máscaras que impedem a inserção de dados inválidos (ex: apenas números em campo de telefone)?
- [ ] Os campos de preenchimento informam, de antemão, quais são as regras (ex: "A senha deve ter letras e números")?
- [ ] Botões de ação ficam desabilitados ou alertam o usuário até que os campos obrigatórios sejam preenchidos?

---

## 6. Reconhecimento em vez de memorização
Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O usuário não deve ter que se lembrar de informações de uma parte do diálogo para outra. Instruções de uso do sistema devem ser visíveis ou facilmente recuperáveis sempre que apropriado.
- **Exemplo**: Mostrar buscas recentes; exibir os itens visualizados recentemente em um e-commerce.

**Checklist de Avaliação (Apoio):**
- [ ] As informações necessárias para a tarefa atual estão visíveis, sem exigir que o usuário decore algo de uma tela anterior?
- [ ] A interface fornece sugestões ou respostas prontas (ex: preenchimento automático, buscas recentes)?
- [ ] Os ícones vêm acompanhados de labels (legendas) em texto quando o seu significado visual não é universal?
- [ ] A navegação mostra claramente o caminho já percorrido?

---

## 7. Flexibilidade e eficiência de uso
Aceleradores - não vistos pelo usuário novato - muitas vezes podem acelerar a interação para o usuário especialista, de modo que o sistema possa atender a usuários inexperientes e experientes. Permita que os usuários adaptem ações frequentes.
- **Exemplo**: Atalhos de teclado; opção de salvar endereços e cartões para checkout rápido (1-click).

**Checklist de Avaliação (Apoio):**
- [ ] Existem atalhos/aceleradores para tarefas frequentes (ex: entrar com biometria no lugar da senha)?
- [ ] O fluxo exige a menor quantidade de cliques ou toques possível para chegar ao final?
- [ ] As áreas de toque (touch targets) são grandes o suficiente para garantir toques rápidos e eficientes, especialmente em celulares?
- [ ] É possível filtrar, ordenar ou buscar rapidamente listas de informações extensas?

---

## 8. Estética e design minimalista
Os diálogos não devem conter informações que sejam irrelevantes ou raramente necessárias. Cada unidade extra de informação em um diálogo compete com as unidades relevantes de informação e diminui sua visibilidade relativa.
- **Exemplo**: Interfaces com espaços em branco (white space) adequados; remoção de textos explicativos longos que ninguém lê.

**Checklist de Avaliação (Apoio):**
- [ ] A interface possui "ruídos" visuais (muitas cores conflitantes, excesso de banners flutuantes, modais sobrepostos)?
- [ ] O contraste de texto e fundo garante a legibilidade acessível para todos os perfis de visão?
- [ ] Há espaços de respiro (white space) suficientes para separar blocos de conteúdo e evitar uma sensação de superlotação?
- [ ] A hierarquia visual guia o olho naturalmente para a ação mais importante (foco), obscurecendo o secundário?

---

## 9. Ajudar os usuários a reconhecer, diagnosticar e recuperar-se de erros
As mensagens de erro devem ser expressas em linguagem simples (sem códigos), indicar com precisão o problema e sugerir construtivamente uma solução.
- **Exemplo**: Em vez de "Erro 404", usar "Página não encontrada. Tente buscar pelo produto ou volte para a página inicial".

**Checklist de Avaliação (Apoio):**
- [ ] A mensagem de erro aponta visualmente *onde* está o erro (ex: campo sublinhado em vermelho)?
- [ ] A explicação do problema está em linguagem civil e compreensível, sem termos de programação ("Erro interno 500")?
- [ ] A mensagem orienta explicitamente *como* resolver a falha?
- [ ] O sistema preserva os dados digitados anteriormente pelo usuário, poupando-o do retrabalho?

---

## 10. Ajuda e documentação
Mesmo que seja melhor se o sistema puder ser usado sem documentação, pode ser necessário fornecer ajuda e documentação. Qualquer informação desse tipo deve ser fácil de pesquisar, focada na tarefa do usuário, listar etapas concretas a serem realizadas e não ser muito grande.
- **Exemplo**: FAQs fáceis de encontrar; tutoriais (onboarding) focados na primeira utilização; dicas de ferramentas (tooltips) em campos complexos.

**Checklist de Avaliação (Apoio):**
- [ ] As dicas, modais de ajuda ou ícones de informação ("i") aparecem exatamente no contexto onde a dúvida surge?
- [ ] O chat, suporte ou seção de dúvidas frequentes (FAQ) são localizáveis sem esforço?
- [ ] As orientações no FAQ ou tutoriais são objetivas, baseadas em passos diretos, e não em longos textos densos?

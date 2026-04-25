import pandas as pd
import os

output_dir = r"c:\Users\Gabriel\AI Agents\skills\ux-heuristic-evaluation-skill\outputs"
os.makedirs(output_dir, exist_ok=True)
output_file = os.path.join(output_dir, "FGC_2026-04-22_Auditoria.xlsx")

# Data for Resumo Executivo
df_severidade = pd.DataFrame([
    {"Nível de Severidade": "🔴 4 (Catástrofe)", "Impacto na Experiência": "Impede o usuário de concluir a tarefa principal.", "Quantidade de Problemas": 1},
    {"Nível de Severidade": "🟠 3 (Grave)", "Impacto na Experiência": "Causa fricção severa e confusão grave.", "Quantidade de Problemas": 4},
    {"Nível de Severidade": "🟡 2 (Menor)", "Impacto na Experiência": "Causa lentidão ou leve confusão.", "Quantidade de Problemas": 3},
    {"Nível de Severidade": "🔵 1 (Estético)", "Impacto na Experiência": "Quebra de padrão visual sem bloquear a tarefa.", "Quantidade de Problemas": 0}
])

df_top_issues = pd.DataFrame([
    {"#": 1, "Problema (e Tela afetada)": "Mensagens contraditórias de disponibilidade (Tela 3)", "Origem": "Heurística 1 / Heurística 8", "Severidade": "🔴 4", "Recomendação Rápida": "Alinhar o status real do pedido entre os componentes da tela para evitar informações conflitantes."},
    {"#": 2, "Problema (e Tela afetada)": "Imagem de fundo inadequada ao estado cognitivo (Tela 1)", "Origem": "Heurística 2. Compatibilidade com o mundo real", "Severidade": "🟠 3", "Recomendação Rápida": "Substituir por imagem mais neutra ou institucional que transmita segurança."},
    {"#": 3, "Problema (e Tela afetada)": "Modal sem botão explícito de fechar (Tela 3)", "Origem": "Heurística 3. Controle e liberdade", "Severidade": "🟠 3", "Recomendação Rápida": "Adicionar ícone de 'X' ou botão explícito de 'Fechar' no modal."},
    {"#": 4, "Problema (e Tela afetada)": "Toggle switch para ação de login (Tela 2)", "Origem": "Heurística 4. Consistência / Acessibilidade 4", "Severidade": "🟠 3", "Recomendação Rápida": "Substituir o toggle por um botão de ação 'Entrar com biometria'."}
])

# Tela 1
df_tela1_heur = pd.DataFrame([
    {"Heurística": "1. Visibilidade do status", "Passou?": "✅ Sim", "Problema Encontrado": "Toast informativo claro sobre a disponibilidade na parte inferior.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "2. Compatibilidade com mundo real", "Passou?": "❌ Não", "Problema Encontrado": "A imagem de fundo (mulher sorrindo e muito relaxada) está em dissonância cognitiva com o estado do usuário, que está apreensivo para resgatar dinheiro de um banco que sofreu intervenção.", "Severidade (0-4)": "3", "Recomendação": "Usar imagem mais séria, institucional ou elementos gráficos neutros que reforcem segurança e estabilidade."},
    {"Heurística": "3. Controle e liberdade", "Passou?": "✅ Sim", "Problema Encontrado": "Toast de notificação possui botão 'X' para ser descartado.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "4. Consistência e padrões", "Passou?": "❌ Não", "Problema Encontrado": "O botão flutuante do chat sobrepõe a leitura de itens da lista ao final da tela ('WILL FINANCEIRA...').", "Severidade (0-4)": "2", "Recomendação": "Adicionar um 'padding-bottom' na lista para garantir que o último item não fique sob o FAB (Floating Action Button)."},
    {"Heurística": "5. Prevenção de erros", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "6. Reconhecimento em vez de mem.", "Passou?": "✅ Sim", "Problema Encontrado": "Lista de instituições exibida diretamente, não precisando decorar o nome.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "7. Flexibilidade e eficiência", "Passou?": "✅ Sim", "Problema Encontrado": "Botão principal 'Entrar' destacado para quem já sabe o que fazer.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "8. Estética e design minimalista", "Passou?": "❌ Não", "Problema Encontrado": "O texto branco do título pode perder contraste e legibilidade dependendo da imagem carregada ao fundo.", "Severidade (0-4)": "2", "Recomendação": "Aumentar a opacidade do 'scrim' (camada de escurecimento) sobre a fotografia."},
    {"Heurística": "9. Ajuda a reconhecer erros", "Passou?": "➖ N/A", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "10. Ajuda e documentação", "Passou?": "✅ Sim", "Problema Encontrado": "Acesso fácil ao suporte através do ícone de chat.", "Severidade (0-4)": "0", "Recomendação": "-"}
])

df_tela1_acess = pd.DataFrame([
    {"Critério WCAG": "1. Contraste e Legibilidade", "Passou?": "❌ Não", "Problema Encontrado": "Possível falha de contraste (abaixo de 4.5:1) em textos sobre a imagem clara ao fundo.", "Severidade (0-4)": "2", "Recomendação": "Escurecer fundo ou aplicar sombra projetada nos textos."},
    {"Critério WCAG": "2. Uso Exclusivo da Cor", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Critério WCAG": "3. Alvos de Toque", "Passou?": "✅ Sim", "Problema Encontrado": "Botões primários têm bom tamanho.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Critério WCAG": "4. Estrutura e Clareza Cognitiva", "Passou?": "✅ Sim", "Problema Encontrado": "Hierarquia adequada.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Critério WCAG": "5. Previsibilidade e Distrações", "Passou?": "❌ Não", "Problema Encontrado": "A imagem de fundo com uma pessoa feliz gera distração emocional negativa considerando o cenário crítico do usuário.", "Severidade (0-4)": "3", "Recomendação": "Trocar o estilo visual para algo que não denote comemoração."}
])

# Tela 2
df_tela2_heur = pd.DataFrame([
    {"Heurística": "1. Visibilidade do status", "Passou?": "✅ Sim", "Problema Encontrado": "Spinner no botão indica carregamento ativo durante a ação de login.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "2. Compatibilidade com mundo real", "Passou?": "✅ Sim", "Problema Encontrado": "Termos padrão e compreensíveis.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "3. Controle e liberdade", "Passou?": "✅ Sim", "Problema Encontrado": "Botão 'voltar' disponível no topo.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "4. Consistência e padrões", "Passou?": "❌ Não", "Problema Encontrado": "O elemento 'Entrar com biometria' utiliza um toggle switch. Toggles são para alterar estados contínuos (configurações), não para disparar ações imediatas como um login.", "Severidade (0-4)": "3", "Recomendação": "Mudar para um botão tradicional de ação, ex: ícone de impressão digital com texto 'Usar biometria'."},
    {"Heurística": "5. Prevenção de erros", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "6. Reconhecimento em vez de mem.", "Passou?": "✅ Sim", "Problema Encontrado": "Opção para revelar a senha (ícone olho) previne erros de digitação.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "7. Flexibilidade e eficiência", "Passou?": "✅ Sim", "Problema Encontrado": "Biometria oferecida como acelerador.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "8. Estética e design minimalista", "Passou?": "✅ Sim", "Problema Encontrado": "Aparência limpa e focada no formulário principal.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "9. Ajuda a reconhecer erros", "Passou?": "➖ N/A", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "10. Ajuda e documentação", "Passou?": "✅ Sim", "Problema Encontrado": "Link de recuperação de senha bem posicionado.", "Severidade (0-4)": "0", "Recomendação": "-"}
])

df_tela2_acess = pd.DataFrame([
    {"Critério WCAG": "1. Contraste e Legibilidade", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Critério WCAG": "2. Uso Exclusivo da Cor", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Critério WCAG": "3. Alvos de Toque", "Passou?": "✅ Sim", "Problema Encontrado": "Inputs com boa área tocável.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Critério WCAG": "4. Estrutura e Clareza Cognitiva", "Passou?": "❌ Não", "Problema Encontrado": "O toggle para login quebra a previsibilidade de formulários padrão, exigindo maior esforço para entender como ele interage com o botão 'Entrar' bloqueado.", "Severidade (0-4)": "2", "Recomendação": "Adequar componente de ação."},
    {"Critério WCAG": "5. Previsibilidade e Distrações", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"}
])

# Tela 3
df_tela3_heur = pd.DataFrame([
    {"Heurística": "1. Visibilidade do status", "Passou?": "❌ Não", "Problema Encontrado": "Exibição de informações conflitantes: Toast/Modal indicam 'disponível/liberado', enquanto o card ao fundo exibe 'Pedido não disponível'. Para um usuário sob alto estresse financeiro, isso gera extrema confusão e quebra de confiança no sistema.", "Severidade (0-4)": "4", "Recomendação": "Garantir consistência na atualização de estados da UI. Se a notificação do modal é a verdade, o card atrás já deve refletir 'Disponível'."},
    {"Heurística": "2. Compatibilidade com mundo real", "Passou?": "✅ Sim", "Problema Encontrado": "Utilização correta da linguagem.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "3. Controle e liberdade", "Passou?": "❌ Não", "Problema Encontrado": "O modal inferior (bottom sheet) não possui um controle claro para fechar (X). Depender apenas do swipe-down pode prender usuários com menor letramento digital.", "Severidade (0-4)": "3", "Recomendação": "Adicionar um botão 'X' explícito no canto superior direito do modal."},
    {"Heurística": "4. Consistência e padrões", "Passou?": "✅ Sim", "Problema Encontrado": "Bottom navigation segue padrão mobile.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "5. Prevenção de erros", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "6. Reconhecimento em vez de mem.", "Passou?": "✅ Sim", "Problema Encontrado": "Saudação com nome e datas visíveis.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "7. Flexibilidade e eficiência", "Passou?": "✅ Sim", "Problema Encontrado": "Navegação por carrossel nas notificações agrupa informações úteis.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "8. Estética e design minimalista", "Passou?": "❌ Não", "Problema Encontrado": "A sobreposição do modal com o card gera ruído visual e múltiplos botões de ação ('Saiba mais' x 'Saiba mais') visíveis ao mesmo tempo.", "Severidade (0-4)": "2", "Recomendação": "O modal poderia obscurecer mais o fundo (scrim) para manter o foco na mensagem principal."},
    {"Heurística": "9. Ajuda a reconhecer erros", "Passou?": "➖ N/A", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Heurística": "10. Ajuda e documentação", "Passou?": "✅ Sim", "Problema Encontrado": "Sino de notificação de fácil acesso.", "Severidade (0-4)": "0", "Recomendação": "-"}
])

df_tela3_acess = pd.DataFrame([
    {"Critério WCAG": "1. Contraste e Legibilidade", "Passou?": "❌ Não", "Problema Encontrado": "A tag 'Pedido não disponível' utiliza texto cinza escuro sobre fundo cinza claro, o que pode não atingir a taxa mínima de 4.5:1 para leitura acessível.", "Severidade (0-4)": "2", "Recomendação": "Aumentar o contraste alterando a cor de fundo ou da fonte da tag."},
    {"Critério WCAG": "2. Uso Exclusivo da Cor", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Critério WCAG": "3. Alvos de Toque", "Passou?": "✅ Sim", "Problema Encontrado": "Botões com boa área de clique.", "Severidade (0-4)": "0", "Recomendação": "-"},
    {"Critério WCAG": "4. Estrutura e Clareza Cognitiva", "Passou?": "❌ Não", "Problema Encontrado": "A contradição severa da disponibilidade do pedido afeta gravemente usuários com menor resiliência cognitiva ou sob forte estresse, podendo causar ansiedade imediata e abandono.", "Severidade (0-4)": "4", "Recomendação": "Rever a lógica de renderização de estados paralelos no app."},
    {"Critério WCAG": "5. Previsibilidade e Distrações", "Passou?": "✅ Sim", "Problema Encontrado": "-", "Severidade (0-4)": "0", "Recomendação": "-"}
])

with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
    df_severidade.to_excel(writer, sheet_name='Resumo Executivo', index=False)
    df_top_issues.to_excel(writer, sheet_name='Top Fricções', index=False)
    
    # Write heuristic and access tables to each sheet, separated by a few rows
    df_tela1_heur.to_excel(writer, sheet_name='Tela 1 - Landing Page', index=False, startrow=0)
    df_tela1_acess.to_excel(writer, sheet_name='Tela 1 - Landing Page', index=False, startrow=len(df_tela1_heur) + 3)
    
    df_tela2_heur.to_excel(writer, sheet_name='Tela 2 - Login', index=False, startrow=0)
    df_tela2_acess.to_excel(writer, sheet_name='Tela 2 - Login', index=False, startrow=len(df_tela2_heur) + 3)
    
    df_tela3_heur.to_excel(writer, sheet_name='Tela 3 - Home Logada', index=False, startrow=0)
    df_tela3_acess.to_excel(writer, sheet_name='Tela 3 - Home Logada', index=False, startrow=len(df_tela3_heur) + 3)

print("Planilha gerada com sucesso em:", output_file)

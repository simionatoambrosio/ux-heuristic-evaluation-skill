const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

async function createExcel() {
    const workbook = new ExcelJS.Workbook();
    
    const addTable = (sheet, title, headers, data, startRow) => {
        sheet.getCell(`A${startRow}`).value = title;
        sheet.getCell(`A${startRow}`).font = { bold: true, size: 14 };
        
        const headerRow = sheet.getRow(startRow + 1);
        headers.forEach((header, index) => {
            const cell = headerRow.getCell(index + 1);
            cell.value = header;
            cell.font = { bold: true };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD3D3D3' } };
        });

        data.forEach((row, rowIndex) => {
            const rowData = sheet.getRow(startRow + 2 + rowIndex);
            headers.forEach((header, colIndex) => {
                rowData.getCell(colIndex + 1).value = row[header];
                rowData.getCell(colIndex + 1).alignment = { wrapText: true, vertical: 'top' };
            });
        });
        
        headers.forEach((header, index) => {
            sheet.getColumn(index + 1).width = index === 0 ? 30 : index === 1 ? 15 : index === 2 ? 50 : 20;
        });
        
        return startRow + 2 + data.length + 2;
    };

    const sheetResumo = workbook.addWorksheet('Resumo Executivo');
    addTable(sheetResumo, 'Visão Geral de Severidade (UX + Acessibilidade)', 
        ['Nível de Severidade', 'Impacto na Experiência', 'Quantidade de Problemas'], [
        { 'Nível de Severidade': '🔴 4 (Catástrofe)', 'Impacto na Experiência': 'Impede o usuário de concluir a tarefa principal.', 'Quantidade de Problemas': 1 },
        { 'Nível de Severidade': '🟠 3 (Grave)', 'Impacto na Experiência': 'Causa fricção severa e confusão grave.', 'Quantidade de Problemas': 4 },
        { 'Nível de Severidade': '🟡 2 (Menor)', 'Impacto na Experiência': 'Causa lentidão ou leve confusão.', 'Quantidade de Problemas': 3 },
        { 'Nível de Severidade': '🔵 1 (Estético)', 'Impacto na Experiência': 'Quebra de padrão visual sem bloquear a tarefa.', 'Quantidade de Problemas': 0 }
    ], 1);

    const sheetTopFricoes = workbook.addWorksheet('Top Fricções');
    addTable(sheetTopFricoes, 'Principais Fricções e Bloqueadores', 
        ['#', 'Problema (e Tela afetada)', 'Origem', 'Severidade', 'Recomendação Rápida'], [
        { '#': 1, 'Problema (e Tela afetada)': 'Mensagens contraditórias de disponibilidade (Tela 3)', 'Origem': 'Heurística 1 / Heurística 8 / Acess. 4', 'Severidade': '🔴 4', 'Recomendação Rápida': 'Alinhar o status real do pedido entre os componentes da tela para evitar informações conflitantes.' },
        { '#': 2, 'Problema (e Tela afetada)': 'Imagem de fundo inadequada ao estado cognitivo (Tela 1)', 'Origem': 'Heurística 2. Compatibilidade com o mundo real', 'Severidade': '🟠 3', 'Recomendação Rápida': 'Substituir por imagem mais neutra ou institucional que transmita segurança.' },
        { '#': 3, 'Problema (e Tela afetada)': 'Modal sem botão explícito de fechar (Tela 3)', 'Origem': 'Heurística 3. Controle e liberdade', 'Severidade': '🟠 3', 'Recomendação Rápida': "Adicionar ícone de 'X' ou botão explícito de 'Fechar' no modal." },
        { '#': 4, 'Problema (e Tela afetada)': 'Toggle switch para ação de login (Tela 2)', 'Origem': 'Heurística 4. Consistência / Acessibilidade 4', 'Severidade': '🟠 3', 'Recomendação Rápida': "Substituir o toggle por um botão de ação 'Entrar com biometria'." }
    ], 1);
    sheetTopFricoes.getColumn(2).width = 40;
    sheetTopFricoes.getColumn(5).width = 40;

    const heurHeaders = ['Heurística', 'Passou?', 'Problema Encontrado', 'Severidade (0-4)', 'Recomendação'];
    const acessHeaders = ['Critério WCAG', 'Passou?', 'Problema Encontrado', 'Severidade (0-4)', 'Recomendação'];

    const sheetT1 = workbook.addWorksheet('Tela 1 - Home Pública');
    let nextRow = addTable(sheetT1, 'Auditoria das 10 Heurísticas', heurHeaders, [
        { 'Heurística': '1. Visibilidade do status', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Toast informativo claro sobre a disponibilidade.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '2. Compatibilidade com mundo real', 'Passou?': '❌ Não', 'Problema Encontrado': 'A imagem de fundo (mulher sorrindo relaxada) está em dissonância com o estado do usuário apreensivo para resgatar dinheiro.', 'Severidade (0-4)': '3', 'Recomendação': 'Usar imagem mais séria, institucional ou grafismos.' },
        { 'Heurística': '3. Controle e liberdade', 'Passou?': '✅ Sim', 'Problema Encontrado': "Toast de notificação possui botão 'X'.", 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '4. Consistência e padrões', 'Passou?': '❌ Não', 'Problema Encontrado': "O botão do chat sobrepõe a leitura do último item da lista ('WILL FINANCEIRA...').", 'Severidade (0-4)': '2', 'Recomendação': "Adicionar 'padding-bottom' na lista." },
        { 'Heurística': '5. Prevenção de erros', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '6. Reconhecimento em vez de mem.', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Lista de instituições visível na tela.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '7. Flexibilidade e eficiência', 'Passou?': '✅ Sim', 'Problema Encontrado': "Botão 'Entrar' bem destacado.", 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '8. Estética e design minimalista', 'Passou?': '❌ Não', 'Problema Encontrado': 'O texto branco do título perde legibilidade dependendo da imagem de fundo.', 'Severidade (0-4)': '2', 'Recomendação': 'Aumentar opacidade do overlay (scrim) escuro.' },
        { 'Heurística': '9. Ajuda a reconhecer erros', 'Passou?': '➖ N/A', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '10. Ajuda e documentação', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Ícone de chat disponível.', 'Severidade (0-4)': '0', 'Recomendação': '-' }
    ], 1);
    addTable(sheetT1, 'Auditoria de Acessibilidade Visual', acessHeaders, [
        { 'Critério WCAG': '1. Contraste e Legibilidade', 'Passou?': '❌ Não', 'Problema Encontrado': 'Possível falha de contraste em textos sobre imagem clara.', 'Severidade (0-4)': '2', 'Recomendação': 'Escurecer fundo ou adicionar sombra.' },
        { 'Critério WCAG': '2. Uso Exclusivo da Cor', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Critério WCAG': '3. Alvos de Toque', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Botões com bom tamanho.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Critério WCAG': '4. Estrutura e Clareza Cognitiva', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Critério WCAG': '5. Previsibilidade e Distrações', 'Passou?': '❌ Não', 'Problema Encontrado': 'Imagem com pessoa feliz distrai e gera atrito emocional ao cenário crítico.', 'Severidade (0-4)': '3', 'Recomendação': 'Substituir a imagem.' }
    ], nextRow);

    const sheetT2 = workbook.addWorksheet('Tela 2 - Login');
    nextRow = addTable(sheetT2, 'Auditoria das 10 Heurísticas', heurHeaders, [
        { 'Heurística': '1. Visibilidade do status', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Spinner de carregamento visível no botão.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '2. Compatibilidade com mundo real', 'Passou?': '✅ Sim', 'Problema Encontrado': "Termos 'CPF' e 'Senha'.", 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '3. Controle e liberdade', 'Passou?': '✅ Sim', 'Problema Encontrado': "Botão 'voltar' disponível.", 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '4. Consistência e padrões', 'Passou?': '❌ Não', 'Problema Encontrado': "Uso de toggle switch para ação de 'Entrar com biometria', quebrando o padrão de uso do componente (que é para configurações).", 'Severidade (0-4)': '3', 'Recomendação': "Mudar para botão de ação tradicional (ex: ícone de digital com 'Usar biometria')." },
        { 'Heurística': '5. Prevenção de erros', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '6. Reconhecimento em vez de mem.', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Ícone olho para revelar a senha previne erros de digitação.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '7. Flexibilidade e eficiência', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Biometria agiliza acesso.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '8. Estética e design minimalista', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Foco no formulário.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '9. Ajuda a reconhecer erros', 'Passou?': '➖ N/A', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '10. Ajuda e documentação', 'Passou?': '✅ Sim', 'Problema Encontrado': "Link 'Esqueci minha senha'.", 'Severidade (0-4)': '0', 'Recomendação': '-' }
    ], 1);
    addTable(sheetT2, 'Auditoria de Acessibilidade Visual', acessHeaders, [
        { 'Critério WCAG': '1. Contraste e Legibilidade', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Critério WCAG': '2. Uso Exclusivo da Cor', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Critério WCAG': '3. Alvos de Toque', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Inputs com boa área.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Critério WCAG': '4. Estrutura e Clareza Cognitiva', 'Passou?': '❌ Não', 'Problema Encontrado': 'O toggle para login quebra a previsibilidade de formulários, gerando esforço extra para compreender a ação.', 'Severidade (0-4)': '2', 'Recomendação': 'Adequar o componente de ação.' },
        { 'Critério WCAG': '5. Previsibilidade e Distrações', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' }
    ], nextRow);

    const sheetT3 = workbook.addWorksheet('Tela 3 - Home Logada');
    nextRow = addTable(sheetT3, 'Auditoria das 10 Heurísticas', heurHeaders, [
        { 'Heurística': '1. Visibilidade do status', 'Passou?': '❌ Não', 'Problema Encontrado': "Exibição conflitante: Toast/Modal indicam liberação, enquanto o card ao fundo exibe 'Pedido não disponível'. Gera grave ansiedade.", 'Severidade (0-4)': '4', 'Recomendação': "Alinhar o estado do pedido. Se está disponível na notificação, o card não pode dizer 'não disponível'." },
        { 'Heurística': '2. Compatibilidade com mundo real', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Linguagem adequada.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '3. Controle e liberdade', 'Passou?': '❌ Não', 'Problema Encontrado': "O modal inferior não possui controle claro para fechar (botão 'X').", 'Severidade (0-4)': '3', 'Recomendação': "Adicionar um botão 'X' explícito no topo do modal." },
        { 'Heurística': '4. Consistência e padrões', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Bottom navigation padrão.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '5. Prevenção de erros', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '6. Reconhecimento em vez de mem.', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Saudação e dados visíveis.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '7. Flexibilidade e eficiência', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Carrossel de notificações.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '8. Estética e design minimalista', 'Passou?': '❌ Não', 'Problema Encontrado': "Sobreposição de múltiplos botões 'Saiba mais' gerando poluição visual.", 'Severidade (0-4)': '2', 'Recomendação': "Aumentar scrim do modal para não competir com o card." },
        { 'Heurística': '9. Ajuda a reconhecer erros', 'Passou?': '➖ N/A', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Heurística': '10. Ajuda e documentação', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Sino de notificações disponível.', 'Severidade (0-4)': '0', 'Recomendação': '-' }
    ], 1);
    addTable(sheetT3, 'Auditoria de Acessibilidade Visual', acessHeaders, [
        { 'Critério WCAG': '1. Contraste e Legibilidade', 'Passou?': '❌ Não', 'Problema Encontrado': "A tag 'Pedido não disponível' usa cinza sobre cinza, dificultando a leitura para pessoas com baixa visão.", 'Severidade (0-4)': '2', 'Recomendação': 'Aumentar o contraste alterando a cor de fundo da tag.' },
        { 'Critério WCAG': '2. Uso Exclusivo da Cor', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Critério WCAG': '3. Alvos de Toque', 'Passou?': '✅ Sim', 'Problema Encontrado': 'Botões com boa área de clique.', 'Severidade (0-4)': '0', 'Recomendação': '-' },
        { 'Critério WCAG': '4. Estrutura e Clareza Cognitiva', 'Passou?': '❌ Não', 'Problema Encontrado': 'A contradição severa afeta usuários sob alto estresse ou com menor resiliência cognitiva.', 'Severidade (0-4)': '4', 'Recomendação': 'Rever a lógica de exibição de estados globais vs do card.' },
        { 'Critério WCAG': '5. Previsibilidade e Distrações', 'Passou?': '✅ Sim', 'Problema Encontrado': '-', 'Severidade (0-4)': '0', 'Recomendação': '-' }
    ], nextRow);

    const outDir = path.join(__dirname, '..', 'outputs');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
    const outFile = path.join(outDir, 'FGC_2026-04-22_Auditoria.xlsx');
    await workbook.xlsx.writeFile(outFile);
    console.log('Planilha gerada com sucesso em:', outFile);
}

createExcel().catch(console.error);

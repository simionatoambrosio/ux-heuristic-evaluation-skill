require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// Verifica a chave de API
if (!process.env.GEMINI_API_KEY) {
    console.error("ERRO: GEMINI_API_KEY não encontrada no ambiente ou no arquivo .env.");
    console.error("Por favor, crie um arquivo .env na pasta scratch/ com o conteúdo: GEMINI_API_KEY=sua_chave_aqui");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Diretório de inputs e outputs
const inputsDir = path.join(__dirname, '..', 'inputs');
const outputsDir = path.join(__dirname, '..', 'outputs');

if (!fs.existsSync(inputsDir)) fs.mkdirSync(inputsDir, { recursive: true });
if (!fs.existsSync(outputsDir)) fs.mkdirSync(outputsDir, { recursive: true });

function getImages() {
    const files = fs.readdirSync(inputsDir).filter(f => f.match(/\.(png|jpe?g)$/i));
    if (files.length === 0) {
        console.error(`ERRO: Nenhuma imagem encontrada em ${inputsDir}.`);
        console.error("Coloque as telas do aplicativo nesta pasta antes de executar.");
        process.exit(1);
    }
    return files.map(file => {
        const filePath = path.join(inputsDir, file);
        return {
            inlineData: {
                data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
                mimeType: "image/" + path.extname(file).replace('.', '')
            }
        };
    });
}

// Definição das Personas
const personas = [
    {
        name: "Inspetor de Fluxo",
        prompt: `Você é "O Inspetor de Fluxo" (Guardião da Lógica) em um colegiado de avaliação UX. 
Sua função é inspecionar rigorosamente a integridade do sistema. Você deve avaliar TODAS as 10 heurísticas de Nielsen, mas com foco principal e aprofundado nas Heurísticas 1, 3, 5 e 9, que são a sua especialidade.
Avalie as telas fornecidas sob a ótica de um usuário de um aplicativo bancário (FGC) cujo dinheiro de investimento está bloqueado e em intervenção judicial (estado ansioso).
Gere um relatório detalhado passando por todas as heurísticas, apontando falhas lógicas e estruturais graves, mas dedicando maior peso e detalhamento ao seu grupo de foco.`
    },
    {
        name: "Curador de Experiência",
        prompt: `Você é "O Curador de Experiência" (Tradutor de Contexto) em um colegiado de avaliação UX. 
Sua função é avaliar a clareza e interface. Você deve avaliar TODAS as 10 heurísticas de Nielsen, mas com foco principal e aprofundado nas Heurísticas 2, 4 e 6 e em Acessibilidade, que são a sua especialidade.
Avalie as telas fornecidas sob a ótica de um usuário do FGC sob extremo estresse e ansiedade com seu dinheiro bloqueado.
Gere um relatório passando por todas as heurísticas, focando na dissonância cognitiva e adequação, mas dedicando maior peso e detalhamento ao seu grupo de foco.`
    },
    {
        name: "Otimizador de Atrito",
        prompt: `Você é "O Otimizador de Atrito" (Minimalista Impaciente) em um colegiado de avaliação UX.
Sua função é avaliar a agilidade e estética. Você deve avaliar TODAS as 10 heurísticas de Nielsen, mas com foco principal e aprofundado nas Heurísticas 7, 8 e 10, que são a sua especialidade.
Identifique qualquer poluição visual, cliques desnecessários ou obstáculos para um usuário ansioso do FGC tentando resgatar seu dinheiro.
Gere um relatório passando por todas as heurísticas, listando pontos de fricção desnecessários, mas dedicando maior peso e detalhamento ao seu grupo de foco.`
    }
];

async function runParallelAgents() {
    console.log("Iniciando Orquestração Multi-Agentes...");
    const imageParts = getImages();
    console.log(`Carregadas ${imageParts.length} imagens. Disparando os 3 agentes especialistas em paralelo...\n`);

    try {
        // Leitura das referências obrigatórias
        const nielsenPath = path.join(__dirname, '..', 'references', 'nielsen-heuristics.md');
        const accessPath = path.join(__dirname, '..', 'references', 'accessibility-guidelines.md');
        const outputPath = path.join(__dirname, '..', 'references', 'output-format.md');
        
        let contextDocs = "\n\n--- BASE DE CONHECIMENTO ---";
        let hasRefs = false;

        if (fs.existsSync(nielsenPath)) {
            contextDocs += `\n\nHEURÍSTICAS:\n${fs.readFileSync(nielsenPath, 'utf8')}`;
            hasRefs = true;
        }
        if (fs.existsSync(accessPath)) {
            contextDocs += `\n\nACESSIBILIDADE:\n${fs.readFileSync(accessPath, 'utf8')}`;
            hasRefs = true;
        }
        if (fs.existsSync(outputPath)) {
            contextDocs += `\n\nFORMATO DE SAÍDA:\n${fs.readFileSync(outputPath, 'utf8')}`;
            hasRefs = true;
        }

        if (!hasRefs) {
            console.warn("[AVISO] Nenhum arquivo de referência encontrado. Executando com conhecimento base do modelo.");
            contextDocs = "";
        }

        // Dispara as chamadas de forma sequencial com delay para respeitar o limite do Free Tier
        const reports = [];
        for (const persona of personas) {
            console.log(`[>>] Iniciando agente: ${persona.name}...`);
            const finalPrompt = persona.prompt + contextDocs;
            const result = await model.generateContent([finalPrompt, ...imageParts]);
            const response = await result.response;
            const text = response.text();
            
            // Salva o relatório isolado
            const reportPath = path.join(outputsDir, `Relatorio_${persona.name.replace(/ /g, '_')}.md`);
            fs.writeFileSync(reportPath, text);
            console.log(`[OK] Agente ${persona.name} concluiu a análise.`);
            
            reports.push({ name: persona.name, content: text });
            
            // Delay de 15 segundos entre as requisições para evitar erro 429 (Quota Exceeded) do Free Tier
            if (persona.name !== personas[personas.length - 1].name) {
                console.log("Aguardando 15 segundos para respeitar o limite da API Gratuita (Free Tier)...");
                await new Promise(resolve => setTimeout(resolve, 15000));
            }
        }

        console.log("\nTodas as 3 instâncias finalizaram com sucesso. Isolamento garantido.");

        // Fase de Moderação
        console.log("\n[>>] Iniciando agente: Moderador Sênior (Consolidação)...");
        const moderadorPrompt = `Você é o Moderador Sênior. Abaixo estão três relatórios isolados gerados por especialistas em UX avaliando o app do FGC.
Sua tarefa é ler os 3 relatórios, unificar as informações, remover redundâncias (falhas apontadas por mais de um agente) e gerar o Relatório Executivo Consolidado.

MUITO IMPORTANTE: O seu relatório final DEVE seguir estritamente a estrutura do template de saída original. Não desconfigure a tabela nem o formato.
${ fs.existsSync(outputPath) ? `\nTEMPLATE DE SAÍDA OBRIGATÓRIO:\n${fs.readFileSync(outputPath, 'utf8')}\n` : '' }
Relatório do Inspetor:
${reports.find(r => r.name === 'Inspetor de Fluxo').content}

Relatório do Curador:
${reports.find(r => r.name === 'Curador de Experiência').content}

Relatório do Otimizador:
${reports.find(r => r.name === 'Otimizador de Atrito').content}
`;

        const resultMod = await model.generateContent([moderadorPrompt]);
        const finalReport = resultMod.response.text();
        
        const finalPath = path.join(outputsDir, 'Relatorio_Final_Consolidado.md');
        fs.writeFileSync(finalPath, finalReport);
        console.log(`[OK] Consolidação concluída! Arquivo salvo em: ${finalPath}`);
        
    } catch (error) {
        console.error("Erro durante a execução dos agentes:", error);
    }
}

runParallelAgents();

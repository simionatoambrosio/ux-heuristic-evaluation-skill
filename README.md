# Skill: UX Heuristics & Acessibilidade

Esta é uma "Skill" avançada customizada para agentes de Inteligência Artificial (como o Gemini), construída para automatizar a Avaliação Heurística e a Auditoria de Acessibilidade Visual de aplicativos e sistemas digitais através de análise de imagens (printscreens).

## 🚀 Como Funciona (O Processo)

O fluxo da Skill pode ser visualizado abaixo, bifurcando-se entre uma análise rápida (Agente Único) ou uma profunda orquestração paralela (Colegiado Multi-Agente):

```text
+-------------------------------------------------+
|             1. GATILHO E SETUP                  |
|  Usuário envia printscreens do app para a IA.   |
|  A IA realiza a "Entrevista" (Público, Modo...) |
+-----------------------+-------------------------+
                        |
            +-----------v-----------+
            | 2. ESCOLHA DE MODO    |
            | Como será a análise?  |
            +---+---------------+---+
                |               |
      +---------v--+         +--v---------+
      |  MODO A    |         |  MODO B    |
      |  (Único)   |         |(Colegiado) |
      +---------+--+         +--+---------+
                |               |
                |     +---------v---------------------------+
                |     | 3. ORQUESTRAÇÃO MULTI-AGENTE        |
                |     | (Execução via orchestrator.js)      |
                |     +----+----------+----------+----------+
                |          |          |          |
                |     +----v----+ +---v-----+ +--v--------+
                |     |Inspetor | | Curador | |Otimizador |
                |     |(Lógica) | |(Clareza)| | (Atrito)  |
                |     +----+----+ +---+-----+ +--+--------+
                |          |          |          |
                |     +----v----------v----------v----------+
                |     |       MODERADOR SÊNIOR              |
                |     | (Consolida, remove redundâncias)    |
                |     +-------------------+-----------------+
                |                         |
            +---v-------------------------v---+
            |        4. SAÍDA DE DADOS        |
            | Exporta no formato desejado:    |
            | Chat, Markdown ou Excel (.xlsx) |
            +---------------------------------+
```

## 🧠 Como Utilizar

Para iniciar uma avaliação, basta fornecer um comando apontando para a skill e fazer o upload dos printscreens da jornada.

**Exemplo de Prompt:**
> "Execute a skill ux-heuristic-evaluation-skill. Aqui estão os prints do fluxo. Quero a avaliação no Modo Colegiado."

Ao ser acionada, se você não passar o contexto no próprio prompt, a IA assumirá o controle e fará uma **Etapa de Entrevista** com 4 perguntas rápidas. Isso garante que a auditoria seja contextualizada para o estado mental do usuário e entregue exatamente no formato que você precisar.

## ⚙️ Pré-requisitos e Instalação

Para que o **Modo Colegiado (Multi-Agente)** e a exportação em Excel funcionem corretamente na sua máquina, você precisa preparar o ambiente:

1. **Instale o Node.js:** Necessário para rodar os scripts da pasta `scratch/`.
2. **Instale as dependências:** Abra o terminal na pasta `scratch/` e execute:
   ```bash
   cd scratch
   npm install
   ```
3. **Configure sua Chave de API:**
   Dentro da pasta `scratch/`, faça uma cópia do arquivo `.env.example` e renomeie para `.env`.
   Abra o arquivo `.env` e cole a sua chave do Gemini.
   *(Se você não tem uma chave, acesse o [Google AI Studio](https://aistudio.google.com/app/apikey), crie um projeto e gere uma chave gratuita).*
   `GEMINI_API_KEY="sua_chave_aqui"`

## 📂 Estrutura de Arquivos

A skill funciona consultando ativamente os arquivos desta pasta e disparando scripts quando necessário:

- `SKILL.md`: O "motor" da skill. Contém a identidade, gatilho, regras e tratamentos de exceção para a IA.
- `scratch/orchestrator.js`: Script Node.js de paralelismo. Executado fisicamente pela IA quando o "Modo Colegiado" é solicitado.
- `scratch/generate_excel.js` / `.py`: Scripts para conversão e estilização do relatório em planilha `.xlsx`.
- `references/nielsen-heuristics.md`: Base de conhecimento com as 10 Heurísticas de Jakob Nielsen.
- `references/accessibility-guidelines.md`: Checklist focado em Acessibilidade Visual (WCAG).
- `references/output-format.md`: Template rigoroso de formatação garantindo a padronização dos relatórios.
- `outputs/`: Diretório de exportação final dos arquivos gerados.

---

## 📝 Changelog (Histórico de Mudanças)

Sempre que a lógica, o escopo ou as instruções da skill forem atualizados, o histórico abaixo deve refletir as mudanças.

**Versão 2.1.0**
- Substituição do paralelismo de requisições (`Promise.all`) por uma execução sequencial com *Throttling* (delay de 15 segundos entre cada agente). Otimização vital para evitar o erro `429 Too Many Requests` e respeitar os limites de Rate Limit do **Free Tier** do Gemini.
- Troca do modelo de auditoria de `gemini-1.5-pro-latest` para `gemini-2.5-flash`, maximizando o limite de tokens TPM (Tokens Per Minute) em contas gratuitas sem perda de capacidade analítica visual.

**Versão 2.0.0**
- Implementação da arquitetura **Multi-Agent System (MAS)** via `orchestrator.js` para rodar 3 personas de IA isoladas (Inspetor, Curador e Otimizador) + 1 Moderador Sênior.
- Injeção dinâmica de contexto local (arquivos de referência) dentro do script Node.
- Refatoração profunda do `SKILL.md` adotando linguagem imperativa de alta performance, eliminando redundâncias e criando fallbacks para exceções (Edge Cases).

**Versão 1.1.0**
- Inclusão da capacidade de exportação de arquivos físicos (Markdown ou Excel) gerados nativamente ou através de scripts Python diretamente pela IA.
- Adição da 5ª pergunta (Formato de Saída) na Etapa de Entrevista de Contexto.

**Versão 1.0.0**
- Criação inicial da skill de UX Heuristics & Acessibilidade.
- Estruturação do comportamento da IA com Etapa de Entrevista para extração de contexto dinâmico.
- Criação dos guias técnicos de referência (`nielsen-heuristics.md`, `accessibility-guidelines.md` e `output-format.md`).

# Organizador de Algoritmos

App web para treinar **lógica de programação** organizando passos em **cards** arrastáveis (drag & drop).  
Separe as tarefas por **Pseudocódigo** (com pré-visualização automática do algoritmo) ou **Sequencial** (execução passo a passo).  
Inclui **tema claro/escuro**, **atalhos de teclado**, **acessibilidade**, **importar/exportar biblioteca**, e **criador de tarefas** com modal de confirmação.

---

## ✨ Recursos

- **Cards arrastáveis** com slots numerados e verificação de solução
- **Duas categorias**:
  - **Pseudocode**: mostra o pseudocódigo conforme você organiza
  - **Sequential**: foca na ordem dos passos do cotidiano
- **Busca e filtro** por categoria
- **Dica, embaralhar, limpar e checar** a sequência
- **Adicionar tarefa** via modal (com **resumo de confirmação**)
- **Salvar no navegador** (`localStorage`)
- **Exportar/Importar JSON** e **Gerar `biblioteca.js`** para embutir no código
- **Tema claro/escuro** persistido
- **Acessibilidade e teclado**:
  - Cards e slots recebem foco
  - **Espaço/Enter**: pegar/soltar card
  - **ESC**: fecha modais
- **Sem dependências**: HTML + CSS + JavaScript puro

---

## 🚀 Demo

> Hospede a pasta em qualquer servidor estático (GitHub Pages, Vercel, Netlify).  
> Ex.: abra `index.html` em `Live Server` (VS Code) ou publique no GitHub Pages.

---

## 🧩 Como usar

1.  Selecione um **desafio**.
2.  **Arraste** os cards para os slots na ordem correta.
3. Use os botões:
   - **💡 Dica** para o primeiro passo
   - **🔀 Embaralhar** para reordenar os cards
   - **🧼 Limpar** para esvaziar os slots
   - **✅ Verificar** para checar sua solução
4. Em tarefas **Pseudocódigo**, o preview atualiza conforme a ordem.

---

## 🗂️ Estrutura (essencial)
/assets
  index.html
  styles.css
  script.js
  biblioteca.js (opcional, gerado pelo app)


> Se usar `biblioteca.js`, ele deve definir `window.EMBEDDED_TASKS = [ ... ]`.  
> O `script.js` detecta e mescla automaticamente com as tarefas internas.

---

## ➕ Adicionar tarefas

### Via interface (recomendado)
1. Clique em **Nova Tarefa**.
2. Preencha:
   - Título, Categoria (**pseudocode** ou **sequential**)
   - Descrição (opcional)
   - **Cards** (um por linha)
   - **Ordem** (opcional): informe índices separados por vírgula (ex.: `1,2,3,4`).  
     Se vazio, a ordem espera `1..N`.
3. **Confirmar** no modal de resumo.

A tarefa é salva em `localStorage` e aparece na lista.

### Via código
No `script.js`, dentro do array `DEFAULT_TASKS`, adicione um objeto no padrão:

```js
{
  id: "meu_id_unico",
  title: "Nome da tarefa",
  category: "pseudocode" | "sequential",
  description: "Breve explicação",
  cards: [
    { id: "c1", text: "passo 1" },
    { id: "c2", text: "passo 2" }
  ],
  solutions: [["c1","c2"]],
  slots: 2
}

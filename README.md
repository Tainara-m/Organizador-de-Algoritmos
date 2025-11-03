# 🧩 Organizador de Algoritmos

App web para treinar **lógica de programação** organizando passos em **cards arrastáveis** (*drag & drop*).
Permite separar as tarefas por **Pseudocódigo** (com pré-visualização automática do algoritmo) ou **Sequencial** (execução passo a passo).

Inclui **tema claro/escuro**, **atalhos de teclado**, **acessibilidade**, **importar/exportar biblioteca** e um **criador de tarefas com modal de confirmação**.

---

## ✨ Recursos

* 🎿 **Cards arrastáveis** com slots numerados e verificação de solução
* 🧠 **Duas categorias**:

  * **Pseudocódigo:** mostra o pseudocódigo conforme você organiza
  * **Sequencial:** foca na ordem dos passos do cotidiano
* 🔍 **Busca** por categoria
* 💡 **Embaralhar, limpar e checar** a sequência
* ➕ **Adicionar tarefa** via modal (com resumo de confirmação)
* 💾 **Salvar no navegador** (`localStorage`)
* 📤 **Exportar JSON** e **gerar `biblioteca.js`** para embutir no código
* 🎨 **Tema claro/escuro** persistido
* ♿ **Acessibilidade e teclado**:

  * Cards e slots recebem foco
  * **Espaço/Enter:** pegar/soltar card
  * **ESC:** fecha modais
* ⚙️ **Sem dependências:** HTML + CSS + JavaScript puro

---

## 🚀 Demo

Hospede a pasta em qualquer servidor estático (GitHub Pages, Vercel, Netlify).
Ou execute localmente com o **Live Server** do VS Code.

> Exemplo: abra `index.html` com Live Server ou publique no GitHub Pages.

---

## 🧩 Como usar

1. Selecione um **desafio**.
2. **Arraste** os cards para os slots na ordem correta.
3. Use os botões:
   * 🔀 **Embaralhar** — reordena os cards
   * 🧼 **Limpar** — esvazia os slots
   * ✅ **Verificar** — confere a solução
4. Em tarefas **Pseudocódigo**, o preview é gerado automaticamente conforme a ordem.

---

## 🗂️ Estrutura essencial

```
/assets
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png
index.html
styles.css
script.js
biblioteca.js  (opcional, gerado pelo app)
```

> Se usar `biblioteca.js`, ele deve definir:
>
> ```js
> window.EMBEDDED_TASKS = [ ... ];
> ```
>
> O `script.js` detecta e mescla automaticamente com as tarefas internas.

---

## ➕ Adicionar tarefas

### Via interface (recomendado)

1. Clique em **Nova Tarefa**.
2. Preencha:

   * **Título**, **Categoria** (`pseudocode` ou `sequential`)
   * **Descrição** (opcional)
   * **Cards** — um por linha
   * **Ordem** (opcional): índices separados por vírgula (ex.: `1,2,3,4`).
     Se vazio, assume a sequência `1..N`.
3. Clique em **Confirmar** no modal de resumo.

A tarefa será salva no `localStorage` e aparecerá automaticamente na lista.

---

### Via código

No `script.js`, dentro do array `DEFAULT_TASKS`, adicione um novo objeto seguindo o padrão:

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
  solutions: [["c1", "c2"]],
  slots: 2
}
```

---

## 📦 Exportar / Importar / Embutir

* **Exportar JSON** — baixa `biblioteca-algoritmos.json` com todas as tarefas (padrão + criadas).
* **Gerar `biblioteca.js`** — cria um arquivo com
  `window.EMBEDDED_TASKS = [...]`
  para versionar no repositório e embutir no app (sem depender do `localStorage`).

---

## 🎨 Tema

* Botão **Tema** alterna entre 🌙 **escuro** e 🌞 **claro**.
* Preferência salva em `localStorage` (`algOrganizer.theme`).

---

## ♿ Acessibilidade & Teclado

* **Tab** — navega entre cards, slots e botões
* **Enter / Espaço**:

  * No card: “pega/solta” o card
  * No slot: solta o card selecionado
* **ESC** — fecha modais

---

## 🔧 Desenvolvimento

* Não há *build step*: é um app 100% estático.
* Recomendado usar **VS Code + Live Server** para testes locais.
* Se algo não aparecer, verifique no **Console (F12)** se todos os IDs existem no HTML.

---

## 🐞 Solução de problemas

| Problema                       | Solução                                                                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Nada aparece / lista vazia** | Verifique se o HTML contém os IDs esperados (`#challenge`, `#cards`, `#slots`, etc.).                                                    |
| **Minha nova tarefa sumiu**    | Está salva no `localStorage`. Se o navegador foi limpo, reimporte o JSON ou gere novamente `biblioteca.js`.                              |
| **Quebrou após colar tarefas** | Confirme que todas as tarefas estão **dentro** do array `DEFAULT_TASKS` e que não há vírgulas ou colchetes sobrando.                     |
| **Favicon não aparece**        | Confira o caminho das tags `<link rel="icon"...>` no `index.html` e se os arquivos estão em `/assets/`. Use caminhos relativos corretos. |

---

## 🚿 Roadmap

* [ ] Múltiplas soluções por tarefa
* [ ] Edição e remoção de tarefas pela interface
* [ ] Compartilhar tarefas via link
* [ ] Estatísticas de acertos/tempo
* [ ] Exportar **PDF** do pseudocódigo

---

## 🤝 Contribuindo

1. Faça um **fork** do projeto
2. Crie uma **branch**: `feat/minha-ideia`
3. Faça o **commit**: `feat: descrição`
4. Abra um **Pull Request** descrevendo a mudança

---

## 📄 Licença

Este projeto está sob a **GNU GENERAL PUBLIC LICENSE (GPL)**.
Veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.

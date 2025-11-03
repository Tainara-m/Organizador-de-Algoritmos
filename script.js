/* =========================================================================
   Organizador de Algoritmos — script.js (completo)
   =========================================================================
   IDs esperados no HTML (confira!):
   #category, #challenge, #search, #description, #cards, #slots,
   #feedback, #preview, #shuffle, #clear, #hint, #check,
   #addTaskBtn, #exportBtn, #importFile, #exportEmbedBtn, #libStatus,
   #taskModal, #taskForm, #tf_title, #tf_category, #tf_description,
   #tf_cards, #tf_solution, #cancelTask,
   #confirmModal, #confirmSummary, #confirmYes, #confirmNo,
   #themeToggle
   (opcional) #clearStorageBtn
   ========================================================================= */

/* =========
   Biblioteca de Tarefas (todas dentro do array!)
   ========= */
const DEFAULT_TASKS = [
  /* ===== 12 novas tarefas de PSEUDOCÓDIGO ===== */
  /* ========== 3 SIMPLES ========== */
  {
    id: "s1_ligar_pc",
    title: "Ligar o computador",
    category: "pseudocode",
    description: "Ligar o PC e abrir o navegador.",
    cards: [
      { id: "s1_c1", text: "pressionar o botão de ligar" },
      { id: "s1_c2", text: "aguardar inicialização do sistema" },
      { id: "s1_c3", text: "inserir senha do usuário" },
      { id: "s1_c4", text: "abrir o navegador" },
      { id: "s1_c5", text: "acessar a página inicial desejada" },
    ],
    solutions: [["s1_c1","s1_c2","s1_c3","s1_c4","s1_c5"]],
    slots: 5,
  },
  {
    id: "s2_media_duas_notas",
    title: "Calcular média de duas notas",
    category: "pseudocode",
    description: "Ler duas notas, calcular a média e exibir.",
    cards: [
      { id: "s2_c1", text: "declarar n1, n2, media" },
      { id: "s2_c2", text: "ler n1" },
      { id: "s2_c3", text: "ler n2" },
      { id: "s2_c4", text: "media ← (n1 + n2) / 2" },
      { id: "s2_c5", text: "exibir media" },
    ],
    solutions: [["s2_c1","s2_c2","s2_c3","s2_c4","s2_c5"]],
    slots: 5,
  },
  {
    id: "s3_celsius_fahrenheit",
    title: "Converter °C para °F",
    category: "pseudocode",
    description: "Converter uma temperatura em Celsius para Fahrenheit.",
    cards: [
      { id: "s3_c1", text: "declarar c, f" },
      { id: "s3_c2", text: "ler c" },
      { id: "s3_c3", text: "f ← c * 9/5 + 32" },
      { id: "s3_c4", text: "exibir f" },
    ],
    solutions: [["s3_c1","s3_c2","s3_c3","s3_c4"]],
    slots: 4,
  },

  /* ========== 3 COM DESVIO CONDICIONAL (IF) ========== */
  {
    id: "if1_maioridade",
    title: "Verificar maioridade",
    category: "pseudocode",
    description: "Ler idade e informar se é maior ou menor de idade.",
    cards: [
      { id: "if1_c1", text: "declarar idade" },
      { id: "if1_c2", text: "ler idade" },
      { id: "if1_c3", text: "se idade ≥ 18 então" },
      { id: "if1_c4", text: "exibir \"maior de idade\"" },
      { id: "if1_c5", text: "senão" },
      { id: "if1_c6", text: "exibir \"menor de idade\"" },
      { id: "if1_c7", text: "fim-se" },
    ],
    solutions: [["if1_c1","if1_c2","if1_c3","if1_c4","if1_c5","if1_c6","if1_c7"]],
    slots: 7,
  },
  {
    id: "if2_validar_senha",
    title: "Validar senha",
    category: "pseudocode",
    description: "Checar se a senha digitada está correta.",
    cards: [
      { id: "if2_c1", text: "declarar senha" },
      { id: "if2_c2", text: "ler senha" },
      { id: "if2_c3", text: "se senha = \"1234\" então" },
      { id: "if2_c4", text: "exibir \"acesso permitido\"" },
      { id: "if2_c5", text: "senão" },
      { id: "if2_c6", text: "exibir \"acesso negado\"" },
      { id: "if2_c7", text: "fim-se" },
    ],
    solutions: [["if2_c1","if2_c2","if2_c3","if2_c4","if2_c5","if2_c6","if2_c7"]],
    slots: 7,
  },
  {
    id: "if3_temperatura",
    title: "Checar temperatura corporal",
    category: "pseudocode",
    description: "Indicar febre quando temperatura > 37 °C.",
    cards: [
      { id: "if3_c1", text: "declarar temp" },
      { id: "if3_c2", text: "ler temp" },
      { id: "if3_c3", text: "se temp > 37 então" },
      { id: "if3_c4", text: "exibir \"febre\"" },
      { id: "if3_c5", text: "senão" },
      { id: "if3_c6", text: "exibir \"normal\"" },
      { id: "if3_c7", text: "fim-se" },
    ],
    solutions: [["if3_c1","if3_c2","if3_c3","if3_c4","if3_c5","if3_c6","if3_c7"]],
    slots: 7,
  },

  /* ========== 3 COM LAÇO DE REPETIÇÃO ========== */
  {
    id: "loop1_contar_1_a_5",
    title: "Contar de 1 a 5",
    category: "pseudocode",
    description: "Usar um laço para exibir números de 1 a 5.",
    cards: [
      { id: "loop1_c1", text: "declarar i" },
      { id: "loop1_c2", text: "i ← 1" },
      { id: "loop1_c3", text: "enquanto i ≤ 5 faça" },
      { id: "loop1_c4", text: "exibir i" },
      { id: "loop1_c5", text: "i ← i + 1" },
      { id: "loop1_c6", text: "fim-enquanto" },
    ],
    solutions: [["loop1_c1","loop1_c2","loop1_c3","loop1_c4","loop1_c5","loop1_c6"]],
    slots: 6,
  },
  {
    id: "loop2_somar_10_numeros",
    title: "Somar 10 números",
    category: "pseudocode",
    description: "Ler 10 números e somar todos.",
    cards: [
      { id: "loop2_c1", text: "declarar i, n, soma" },
      { id: "loop2_c2", text: "soma ← 0" },
      { id: "loop2_c3", text: "para i de 1 até 10 faça" },
      { id: "loop2_c4", text: "ler n" },
      { id: "loop2_c5", text: "soma ← soma + n" },
      { id: "loop2_c6", text: "fim-para" },
      { id: "loop2_c7", text: "exibir soma" },
    ],
    solutions: [["loop2_c1","loop2_c2","loop2_c3","loop2_c4","loop2_c5","loop2_c6","loop2_c7"]],
    slots: 7,
  },
  {
    id: "loop3_tabuada_do_3",
    title: "Tabuada do 3",
    category: "pseudocode",
    description: "Exibir 3 × i para i de 1 a 10.",
    cards: [
      { id: "loop3_c1", text: "declarar i" },
      { id: "loop3_c2", text: "para i de 1 até 10 faça" },
      { id: "loop3_c3", text: "exibir 3 × i" },
      { id: "loop3_c4", text: "fim-para" },
    ],
    solutions: [["loop3_c1","loop3_c2","loop3_c3","loop3_c4"]],
    slots: 4,
  },

  /* ========== 3 COM IF + LAÇO ========== */
  {
    id: "mix1_pares_1_a_10",
    title: "Contar apenas pares (1 a 10)",
    category: "pseudocode",
    description: "Percorrer 1..10 e exibir apenas números pares.",
    cards: [
      { id: "mix1_c1", text: "declarar i" },
      { id: "mix1_c2", text: "para i de 1 até 10 faça" },
      { id: "mix1_c3", text: "se i % 2 = 0 então" },
      { id: "mix1_c4", text: "exibir i" },
      { id: "mix1_c5", text: "fim-se" },
      { id: "mix1_c6", text: "fim-para" },
    ],
    solutions: [["mix1_c1","mix1_c2","mix1_c3","mix1_c4","mix1_c5","mix1_c6"]],
    slots: 6,
  },
  {
    id: "mix2_somar_positivos_5",
    title: "Somar apenas positivos (5 valores)",
    category: "pseudocode",
    description: "Ler 5 números e somar somente os positivos.",
    cards: [
      { id: "mix2_c1", text: "declarar i, n, soma" },
      { id: "mix2_c2", text: "soma ← 0" },
      { id: "mix2_c3", text: "para i de 1 até 5 faça" },
      { id: "mix2_c4", text: "ler n" },
      { id: "mix2_c5", text: "se n > 0 então" },
      { id: "mix2_c6", text: "soma ← soma + n" },
      { id: "mix2_c7", text: "fim-se" },
      { id: "mix2_c8", text: "fim-para" },
      { id: "mix2_c9", text: "exibir soma" },
    ],
    solutions: [["mix2_c1","mix2_c2","mix2_c3","mix2_c4","mix2_c5","mix2_c6","mix2_c7","mix2_c8","mix2_c9"]],
    slots: 9,
  },
  {
    id: "mix3_aprovacao_3_alunos",
    title: "Aprovação de 3 alunos",
    category: "pseudocode",
    description: "Ler a nota de 3 alunos e exibir se cada um está aprovado (≥ 60) ou em recuperação.",
    cards: [
      { id: "mix3_c1", text: "declarar i, nota" },
      { id: "mix3_c2", text: "para i de 1 até 3 faça" },
      { id: "mix3_c3", text: "ler nota" },
      { id: "mix3_c4", text: "se nota ≥ 60 então" },
      { id: "mix3_c5", text: "exibir \"Aprovado\"" },
      { id: "mix3_c6", text: "senão" },
      { id: "mix3_c7", text: "exibir \"Recuperação\"" },
      { id: "mix3_c8", text: "fim-se" },
      { id: "mix3_c9", text: "fim-para" },
    ],
    solutions: [["mix3_c1","mix3_c2","mix3_c3","mix3_c4","mix3_c5","mix3_c6","mix3_c7","mix3_c8","mix3_c9"]],
    slots: 9,
  },

  /* ===== Extra: sua tarefa de pseudocódigo “soma” ===== */
  {
    id: "soma",
    title: "Somar dois valores",
    category: "pseudocode",
    description: "Receber dois valores do usuário, somá-los e exibir o resultado",
    cards: [
      { id: "so_c1", text: "declarar variáveis" },
      { id: "so_c2", text: "receber o primeiro valor" },
      { id: "so_c3", text: "receber o segundo valor" },
      { id: "so_c4", text: "resultado ← primeiroValor + segundoValor" },
      { id: "so_c5", text: "exibir o resultado" },
    ],
    solutions: [["so_c1","so_c2","so_c3","so_c4","so_c5"]],
    render(lines) {
      const out = ["início"];
      lines.forEach((id) => {
        const t = this.cards.find((c) => c.id === id)?.text || id;
        out.push("  " + t);
      });
      out.push("fim");
      return out.join("\n");
    },
    slots: 5,
  },

  /* ===== SEQUENCIAIS originais ===== */
  {
    id: "omelete",
    title: "Fazer omelete",
    category: "sequential",
    description: "Quebrar ovos, bater, temperar e cozinhar em frigideira. Objetivo: omelete simples.",
    cards: [
      { id: "om_c1", text: "quebrar ovos na tigela" },
      { id: "om_c2", text: "bater ovos" },
      { id: "om_c3", text: "temperar (sal, pimenta)" },
      { id: "om_c4", text: "aquecer frigideira com óleo/manteiga" },
      { id: "om_c5", text: "despejar mistura na frigideira" },
      { id: "om_c6", text: "cozinhar até firmar e dobrar" },
    ],
    solutions: [["om_c1","om_c2","om_c3","om_c4","om_c5","om_c6"]],
    slots: 6,
  },
  {
    id: "cafe_coado",
    title: "Fazer café coado",
    category: "sequential",
    description: "Coar café no filtro com água quente. Objetivo: uma xícara de café.",
    cards: [
      { id: "cf_c1", text: "ferver água" },
      { id: "cf_c2", text: "colocar filtro no suporte" },
      { id: "cf_c3", text: "adicionar pó de café no filtro" },
      { id: "cf_c4", text: "umidificar pó com um pouco de água" },
      { id: "cf_c5", text: "despejar água em movimentos circulares" },
      { id: "cf_c6", text: "servir na xícara" },
    ],
    solutions: [["cf_c1","cf_c2","cf_c3","cf_c4","cf_c5","cf_c6"]],
    render(lines) {
      const out = ["procedimento FazerCafe()"];
      lines.forEach((id) => {
        const t = this.cards.find((c) => c.id === id)?.text || id;
        out.push("  etapa: " + t);
      });
      out.push("fim-procedimento");
      return out.join("\n");
    },
    slots: 6,
  },
  {
    id: "calcar_tenis",
    title: "Calçar tênis",
    category: "sequential",
    description: "Colocar meias, calçar tênis e amarrar cadarços.",
    cards: [
      { id: "ct_c1", text: "calçar meias" },
      { id: "ct_c2", text: "afrouxar cadarços do tênis" },
      { id: "ct_c3", text: "calçar o tênis" },
      { id: "ct_c4", text: "ajustar o calcanhar" },
      { id: "ct_c5", text: "amarrar cadarços" },
    ],
    solutions: [["ct_c1","ct_c2","ct_c3","ct_c4","ct_c5"]],
    slots: 5,
  },

  /* ===== +10 SEQUENCIAIS novas ===== */
  {
    id: "seq1_trocar_lampada",
    title: "Trocar lâmpada",
    category: "sequential",
    description: "Substituir uma lâmpada queimada com segurança.",
    cards: [
      { id: "seq1_c1", text: "desligar o interruptor" },
      { id: "seq1_c2", text: "aguardar a lâmpada esfriar" },
      { id: "seq1_c3", text: "desrosquear a lâmpada queimada" },
      { id: "seq1_c4", text: "rosquear a lâmpada nova" },
      { id: "seq1_c5", text: "ligar o interruptor e testar" },
    ],
    solutions: [["seq1_c1","seq1_c2","seq1_c3","seq1_c4","seq1_c5"]],
    slots: 5,
  },
  {
    id: "seq2_lavar_louca",
    title: "Lavar a louça",
    category: "sequential",
    description: "Deixar pratos e talheres limpos e escorrendo.",
    cards: [
      { id: "seq2_c1", text: "organizar a pia (separar resíduos)" },
      { id: "seq2_c2", text: "ensaboar pratos e talheres" },
      { id: "seq2_c3", text: "esfregar com esponja" },
      { id: "seq2_c4", text: "enxaguar em água corrente" },
      { id: "seq2_c5", text: "colocar no escorredor" },
    ],
    solutions: [["seq2_c1","seq2_c2","seq2_c3","seq2_c4","seq2_c5"]],
    slots: 5,
  },
  {
    id: "seq3_varrer_casa",
    title: "Varrer a casa",
    category: "sequential",
    description: "Remover poeira e sujeira do chão.",
    cards: [
      { id: "seq3_c1", text: "retirar objetos do chão" },
      { id: "seq3_c2", text: "varrer do fundo para a frente" },
      { id: "seq3_c3", text: "juntar o lixo em um montinho" },
      { id: "seq3_c4", text: "recolher o lixo com pá" },
      { id: "seq3_c5", text: "descartar no lixo" },
    ],
    solutions: [["seq3_c1","seq3_c2","seq3_c3","seq3_c4","seq3_c5"]],
    slots: 5,
  },
  {
    id: "seq4_regar_plantas",
    title: "Regar as plantas",
    category: "sequential",
    description: "Hidratar as plantas sem encharcar.",
    cards: [
      { id: "seq4_c1", text: "verificar umidade do solo" },
      { id: "seq4_c2", text: "encher o regador" },
      { id: "seq4_c3", text: "regar próximo ao caule" },
      { id: "seq4_c4", text: "parar quando o solo estiver úmido" },
      { id: "seq4_c5", text: "esvaziar o excesso do pratinho" },
    ],
    solutions: [["seq4_c1","seq4_c2","seq4_c3","seq4_c4","seq4_c5"]],
    slots: 5,
  },
  {
    id: "seq5_organizar_mochila",
    title: "Organizar a mochila",
    category: "sequential",
    description: "Separar materiais e conferir itens obrigatórios.",
    cards: [
      { id: "seq5_c1", text: "conferir lista de materiais" },
      { id: "seq5_c2", text: "separar cadernos e livros" },
      { id: "seq5_c3", text: "guardar estojo" },
      { id: "seq5_c4", text: "colocar garrafa d’água" },
      { id: "seq5_c5", text: "fechar zíper e conferir peso" },
    ],
    solutions: [["seq5_c1","seq5_c2","seq5_c3","seq5_c4","seq5_c5"]],
    slots: 5,
  },
  {
    id: "seq6_preparar_sanduiche",
    title: "Preparar um sanduíche",
    category: "sequential",
    description: "Montar sanduíche simples de frios.",
    cards: [
      { id: "seq6_c1", text: "separar pão e recheios" },
      { id: "seq6_c2", text: "passar molho/patê se desejar" },
      { id: "seq6_c3", text: "adicionar queijo e presunto" },
      { id: "seq6_c4", text: "adicionar folhas e tomate" },
      { id: "seq6_c5", text: "fechar e cortar ao meio" },
    ],
    solutions: [["seq6_c1","seq6_c2","seq6_c3","seq6_c4","seq6_c5"]],
    slots: 5,
  },
  {
    id: "seq7_lavar_roupas",
    title: "Lavar roupas",
    category: "sequential",
    description: "Usar a máquina para lavar uma carga de roupas.",
    cards: [
      { id: "seq7_c1", text: "separar roupas por cor/tipo" },
      { id: "seq7_c2", text: "colocar roupas na máquina" },
      { id: "seq7_c3", text: "adicionar sabão e amaciante" },
      { id: "seq7_c4", text: "selecionar o ciclo adequado" },
      { id: "seq7_c5", text: "ligar a máquina" },
      { id: "seq7_c6", text: "estender no varal quando terminar" },
    ],
    solutions: [["seq7_c1","seq7_c2","seq7_c3","seq7_c4","seq7_c5","seq7_c6"]],
    slots: 6,
  },
  {
    id: "seq8_cozinhar_arroz",
    title: "Cozinhar arroz",
    category: "sequential",
    description: "Preparar arroz branco simples.",
    cards: [
      { id: "seq8_c1", text: "lavar o arroz" },
      { id: "seq8_c2", text: "refogar alho/cebola em óleo" },
      { id: "seq8_c3", text: "acrescentar o arroz e mexer" },
      { id: "seq8_c4", text: "adicionar água e sal" },
      { id: "seq8_c5", text: "cozinhar até a água secar" },
      { id: "seq8_c6", text: "abafar e descansar 5 minutos" },
    ],
    solutions: [["seq8_c1","seq8_c2","seq8_c3","seq8_c4","seq8_c5","seq8_c6"]],
    slots: 6,
  },
  {
    id: "seq9_trocar_lencois",
    title: "Trocar lençóis da cama",
    category: "sequential",
    description: "Deixar a cama com roupa de cama limpa.",
    cards: [
      { id: "seq9_c1", text: "retirar lençóis e fronhas usados" },
      { id: "seq9_c2", text: "estender lençol de baixo" },
      { id: "seq9_c3", text: "colocar lençol de cima" },
      { id: "seq9_c4", text: "colocar fronhas nos travesseiros" },
      { id: "seq9_c5", text: "alisar e ajustar cantos" },
    ],
    solutions: [["seq9_c1","seq9_c2","seq9_c3","seq9_c4","seq9_c5"]],
    slots: 5,
  },
  {
    id: "seq10_montar_mesa",
    title: "Montar a mesa do jantar",
    category: "sequential",
    description: "Preparar a mesa para a refeição.",
    cards: [
      { id: "seq10_c1", text: "colocar toalha ou jogo americano" },
      { id: "seq10_c2", text: "posicionar pratos" },
      { id: "seq10_c3", text: "colocar talheres ao lado dos pratos" },
      { id: "seq10_c4", text: "colocar copos" },
      { id: "seq10_c5", text: "adicionar guardanapos" },
    ],
    solutions: [["seq10_c1","seq10_c2","seq10_c3","seq10_c4","seq10_c5"]],
    slots: 5,
  },
];

/* Mescla biblioteca embutida opcional (biblioteca.js) */
if (typeof window !== "undefined" && Array.isArray(window.EMBEDDED_TASKS)) {
  DEFAULT_TASKS.push(...window.EMBEDDED_TASKS.filter(Boolean));
}

const STORAGE_KEY = "algOrganizer.tasks.v1";

/* =========
   Helpers e coleta de elementos (seguros)
   ========= */
const $  = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

const els = {
  category: $("#category"),
  challenge: $("#challenge"),
  search: $("#search"),
  description: $("#description"),
  cards: $("#cards"),
  slots: $("#slots"),
  feedback: $("#feedback"),
  preview: $("#preview"),
  shuffle: $("#shuffle"),
  clear: $("#clear"),
  hint: $("#hint"),
  check: $("#check"),

  // biblioteca
  addTaskBtn: $("#addTaskBtn"),
  exportBtn: $("#exportBtn"),
  importFile: $("#importFile"),
  exportEmbedBtn: $("#exportEmbedBtn"),
  libStatus: $("#libStatus"),

  // modais e form
  taskModal: $("#taskModal"),
  confirmModal: $("#confirmModal"),
  taskForm: $("#taskForm"),
  tf_title: $("#tf_title"),
  tf_category: $("#tf_category"),
  tf_description: $("#tf_description"),
  tf_cards: $("#tf_cards"),
  tf_solution: $("#tf_solution"),
  cancelTask: $("#cancelTask"),
  confirmSummary: $("#confirmSummary"),
  confirmYes: $("#confirmYes"),
  confirmNo: $("#confirmNo"),

  // tema
  themeToggle: $("#themeToggle"),
};

/* =========
   Estado
   ========= */
let LIBRARY = loadLibrary();
let state = {
  currentId: null,
  pickedId: null,
  filterCategory: "all",
  searchTerm: "",
};

/* =========
   Persistência
   ========= */
function loadLibrary() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_TASKS.slice();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_TASKS.slice();
  } catch {
    return DEFAULT_TASKS.slice();
  }
}
function saveLibrary() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(LIBRARY));
  pingStatus("Biblioteca salva.");
}
function pingStatus(msg) {
  if (!els.libStatus) return;
  els.libStatus.textContent = "• " + msg;
  setTimeout(() => (els.libStatus.textContent = ""), 2200);
}

/* =========
   Filtro e listagem
   ========= */
function filteredTasks() {
  const cat = state.filterCategory;
  const term = state.searchTerm.trim().toLowerCase();
  return LIBRARY
    .filter((t) => {
      const okCat = cat === "all" ? true : t.category === cat;
      const okTerm =
        term.length === 0 ||
        (t.title || "").toLowerCase().includes(term) ||
        (t.description || "").toLowerCase().includes(term);
      return okCat && okTerm;
    })
    .sort((a, b) => (a.title || "").localeCompare(b.title || "", "pt"));
}

function rebuildChallengeList() {
  if (!els.challenge) return;
  const tasks = filteredTasks();
  els.challenge.innerHTML = "";
  if (tasks.length === 0) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "Nenhuma tarefa encontrada";
    els.challenge.appendChild(opt);
    state.currentId = null;
    renderChallenge();
    return;
  }
  tasks.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = t.title + (t.category === "pseudocode" ? " • PSEUDO" : " • SEQ.");
    els.challenge.appendChild(opt);
  });
  const stillExists = tasks.some((t) => t.id === state.currentId);
  if (!stillExists) state.currentId = tasks[0].id;
  els.challenge.value = state.currentId;
  renderChallenge();
}

/* =========
   Renderização do desafio
   ========= */
function getTaskById(id) {
  return LIBRARY.find((t) => t.id === id) || null;
}
function sampleShuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderChallenge() {
  const task = getTaskById(state.currentId);
  if (els.cards) els.cards.innerHTML = "";
  if (els.slots) els.slots.innerHTML = "";
  if (els.feedback) els.feedback.style.display = "none";
  if (els.preview) els.preview.textContent = "Em tarefas SEQUENCIAIS, a pré-visualização fica desativada";

  if (!task) {
    if (els.description) els.description.textContent = "Selecione uma tarefa para começar.";
    return;
  }
  if (els.description) els.description.textContent = "💡 " + (task.description || "");

  // cards
  const shuffled = sampleShuffle(task.cards || []);
  shuffled.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("role", "listitem");
    card.setAttribute("tabindex", "0");
    card.draggable = true;
    card.dataset.id = c.id;
    card.textContent = c.text;
    addCardDnD(card);
    els.cards.appendChild(card);
  });

  // slots
  const fallbackLen = (task.cards || []).length || 1;
  const count = task.slots || (task.solutions && task.solutions[0]?.length) || fallbackLen;
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.className = "slot empty";
    slot.setAttribute("tabindex", "0");
    slot.innerHTML = `<div class="index" aria-hidden="true">${i + 1}</div><div class="muted">solte um card aqui</div>`;
    addSlotDnD(slot);
    els.slots.appendChild(slot);
  }

  if (task.category === "pseudocode") updatePreview();
}

function getCurrentLines() {
  return $$(".slot").map((slot) => {
    const card = slot.querySelector(".card");
    return card ? card.dataset.id : null;
  }).filter(Boolean);
}

function updatePreview() {
  const task = getTaskById(state.currentId);
  if (!task || task.category !== "pseudocode" || !els.preview) {
    if (els.preview) els.preview.textContent = "// em tarefas SEQUENCIAIS, a pré-visualização fica desativada";
    return;
  }
  const ids = getCurrentLines();
  if (ids.length === 0) {
    els.preview.textContent = "// arraste os cards para ver o pseudocódigo aqui";
    return;
  }
  if (typeof task.render === "function") {
    els.preview.textContent = task.render(ids);
  } else {
    const out = ["início"];
    ids.forEach((id) => {
      const t = task.cards.find((c) => c.id === id)?.text || id;
      out.push("  " + t);
    });
    out.push("fim");
    els.preview.textContent = out.join("\n");
  }
}

function setFeedback(type = null, text = "") {
  if (!els.feedback) return;
  els.feedback.style.display = type ? "block" : "none";
  els.feedback.className = "notice " + (type || "");
  if (type === "ok") els.feedback.innerHTML = "✅ " + text;
  else if (type === "err") els.feedback.innerHTML = "❌ " + text;
  else if (type === "hint") els.feedback.innerHTML = "💭 " + text;
  else els.feedback.innerHTML = "";
}

function showHint() {
  const task = getTaskById(state.currentId);
  if (!task) return;
  const first = task.solutions?.[0]?.[0];
  if (!first) return;
  const firstCard = task.cards.find((c) => c.id === first)?.text || "o primeiro passo correto";
  setFeedback("hint", `Dica: comece com **${firstCard}**.`);
}

function checkSolution() {
  const task = getTaskById(state.currentId);
  if (!task) return;
  const ids = getCurrentLines();

  const target = (task.solutions && task.solutions[0]) || [];
  const needed = task.slots || target.length || ids.length;

  if (ids.length < needed) {
    setFeedback("err", "Complete todos os passos antes de verificar.");
    return;
  }
  const ok = (task.solutions || []).some(
    (sol) => sol.length === ids.length && sol.every((v, i) => v === ids[i])
  );
  ok ? setFeedback("ok", "Perfeito! A sequência está correta. 🎉")
     : setFeedback("err", "Ainda não. Ajuste a ordem e tente novamente.");
}

function clearSlots() {
  $$(".slot .card").forEach((card) => els.cards.appendChild(card));
  $$(".slot").forEach((s, idx) => {
    s.classList.add("empty");
    s.innerHTML = `<div class="index" aria-hidden="true">${idx + 1}</div><div class="muted">solte um card aqui</div>`;
  });
  setFeedback();
  updatePreview();
}

function shuffleCards() {
  const cards = $$(".cards .card");
  const shuffled = sampleShuffle(cards);
  shuffled.forEach((c) => els.cards.appendChild(c));
  setFeedback();
}

/* =========
   Drag & Drop + Teclado
   ========= */
let dragging = null;

function addCardDnD(card) {
  card.addEventListener("dragstart", (e) => {
    dragging = card;
    card.classList.add("is-picked");
    e.dataTransfer.setData("text/plain", card.dataset.id);
    e.dataTransfer.effectAllowed = "move";
  });
  card.addEventListener("dragend", () => {
    dragging = null;
    card.classList.remove("is-picked");
    $$(".slot").forEach((s) => s.classList.remove("drop-hint"));
  });

  // teclado (pegar/soltar)
  card.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (state.pickedId === card.dataset.id) {
        state.pickedId = null;
        card.classList.remove("is-picked");
      } else {
        $$(".card.is-picked").forEach((c) => c.classList.remove("is-picked"));
        state.pickedId = card.dataset.id;
        card.classList.add("is-picked");
      }
    }
  });
}

function addSlotDnD(slot) {
  slot.addEventListener("dragover", (e) => {
    e.preventDefault();
    slot.classList.add("drop-hint");
  });
  slot.addEventListener("dragleave", () => {
    slot.classList.remove("drop-hint");
  });
  slot.addEventListener("drop", (e) => {
    e.preventDefault();
    slot.classList.remove("drop-hint");
    const id = e.dataTransfer.getData("text/plain");
    dropCardInSlot(slot, id);
  });

  // teclado (soltar aqui)
  slot.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      if (!state.pickedId) return;
      e.preventDefault();
      dropCardInSlot(slot, state.pickedId);
      state.pickedId = null;
      slot.focus();
    }
  });
}

function dropCardInSlot(slot, cardId) {
  const card = document.querySelector(`.card[data-id="${cardId}"]`);
  if (!card) return;

  const existing = slot.querySelector(".card");
  if (existing) els.cards.appendChild(existing);

  slot.innerHTML = `<div class="index" aria-hidden="true">${slotIndex(slot) + 1}</div>`;
  slot.appendChild(card);
  slot.classList.remove("empty");
  card.classList.remove("is-picked");
  updatePreview();
}

function slotIndex(slot) {
  return $$(".slot").indexOf(slot);
}

/* =========
   Modais
   ========= */
function openModal(el){ if (!el) return; el.hidden = false; el.classList.add("open"); }
function closeModal(el){ if (!el) return; el.classList.remove("open"); el.hidden = true; }
function toggleTaskForm(show){ if (show) openModal(els.taskModal); else closeModal(els.taskModal); }

/* =========
   Formulário: adicionar tarefa (com confirmação)
   ========= */
function parseCardsTextarea(text) {
  return (text || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((line, idx) => ({
      id: `u${Date.now().toString(36)}_${idx + 1}`,
      text: line,
    }));
}
function parseSolutionInput(solText, cardCount) {
  const s = (solText || "").trim();
  if (!s) return [Array.from({ length: cardCount }, (_, i) => i + 1)];
  const indices = s
    .split(",")
    .map((x) => parseInt(x.trim(), 10))
    .filter((n) => Number.isInteger(n) && n >= 1 && n <= cardCount);
  return [indices];
}

let _draftTask = null;

function onSubmitTask(e){
  e.preventDefault();
  const title = (els.tf_title?.value || "").trim();
  const category = els.tf_category?.value || "sequential";
  const description = (els.tf_description?.value || "").trim();
  const cards = parseCardsTextarea(els.tf_cards?.value || "");

  if (!title){ alert("Informe o título."); return; }
  if (cards.length === 0){ alert("Adicione ao menos um card."); return; }

  const solIndicesList = parseSolutionInput(els.tf_solution?.value, cards.length);
  const solutions = solIndicesList.map((indices) => indices.map((i) => cards[i - 1].id));

  const idBase = title
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || `t_${Date.now().toString(36)}`;

  let uniqueId = idBase, k = 2;
  while (LIBRARY.some(t => t.id === uniqueId)) uniqueId = `${idBase}_${k++}`;

  _draftTask = { id: uniqueId, title, category, description, cards, solutions, slots: solutions[0].length };

  if (els.confirmSummary) {
    els.confirmSummary.innerHTML = `
      <strong>Título:</strong> ${_draftTask.title}<br>
      <strong>Categoria:</strong> ${_draftTask.category === "pseudocode" ? "Pseudocódigo" : "Sequencial"}<br>
      <strong>Cards:</strong> ${_draftTask.cards.length}<br>
      <strong>Ordem:</strong> ${_draftTask.solutions[0].map(id => {
        const c = _draftTask.cards.find(x => x.id === id);
        return c ? c.text : id;
      }).join(" → ")}
    `;
  }
  openModal(els.confirmModal);
}

/* Confirmar inclusão */
on(els.confirmYes, "click", () => {
  if (!_draftTask) return;
  LIBRARY.push(_draftTask);
  saveLibrary();

  closeModal(els.confirmModal);
  toggleTaskForm(false);

  els.taskForm && els.taskForm.reset();
  _draftTask = null;

  rebuildChallengeList();
  state.currentId = LIBRARY.at(-1).id;
  if (els.challenge) els.challenge.value = state.currentId;
  renderChallenge();
  pingStatus("Tarefa adicionada.");
});

/* Voltar para edição */
on(els.confirmNo, "click", () => {
  closeModal(els.confirmModal);
  openModal(els.taskModal);
});

/* Abrir/fechar modal de Nova tarefa */
on(els.addTaskBtn, "click", () => {
  els.taskForm && els.taskForm.reset();
  openModal(els.taskModal);
  setTimeout(() => els.tf_title && els.tf_title.focus(), 0);
});
on(els.cancelTask, "click", () => {
  _draftTask = null;
  toggleTaskForm(false);
});

/* Submit do formulário abre confirmação */
on(els.taskForm, "submit", onSubmitTask);

/* Fecha modais com ESC */
on(document, "keydown", (e) => {
  if (e.key === "Escape") {
    if (els.confirmModal && !els.confirmModal.hidden) closeModal(els.confirmModal);
    else if (els.taskModal && !els.taskModal.hidden) toggleTaskForm(false);
  }
});

/* =========
   Exportar / Importar biblioteca
   ========= */
function exportLibrary() {
  const blob = new Blob([JSON.stringify(LIBRARY, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "biblioteca-algoritmos.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  pingStatus("Arquivo exportado.");
}
function importLibrary(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const arr = JSON.parse(reader.result);
      if (!Array.isArray(arr)) throw new Error("JSON inválido.");
      const map = new Map(LIBRARY.map((t) => [t.id, t]));
      arr.forEach((t) => map.set(t.id, t));
      LIBRARY = Array.from(map.values());
      saveLibrary();
      rebuildChallengeList();
      pingStatus("Importação concluída.");
    } catch (e) {
      alert("Falha ao importar: " + e.message);
    }
  };
  reader.readAsText(file, "utf-8");
}
on(els.exportBtn, "click", exportLibrary);
on(els.importFile, "change", (e) => {
  const file = e.target?.files?.[0];
  if (file) importLibrary(file);
  e.target.value = "";
});

/* =========
   Exportar biblioteca embutida (.js)
   ========= */
function downloadEmbeddedJS(){
  const content = `/* Biblioteca embutida gerada automaticamente */
window.EMBEDDED_TASKS = ${JSON.stringify(LIBRARY, null, 2)};
`;
  const blob = new Blob([content], { type: "text/javascript;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "biblioteca.js";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  pingStatus("biblioteca.js gerado.");
}
on(els.exportEmbedBtn, "click", downloadEmbeddedJS);

/* =========
   Tema (dark/light) com localStorage
   ========= */
const THEME_KEY = "algOrganizer.theme";
function getSavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = els.themeToggle;
  if (btn) {
    btn.textContent = theme === "light" ? "🌞" : "🌙";
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }
}
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || getSavedTheme();
  setTheme(current === "dark" ? "light" : "dark");
}
on(els.themeToggle, "click", toggleTheme);

/* =========
   Outros eventos de UI
   ========= */
on(els.category, "change", () => {
  state.filterCategory = els.category.value;
  rebuildChallengeList();
});
on(els.search, "input", () => {
  state.searchTerm = els.search.value;
  rebuildChallengeList();
});
on(els.challenge, "change", () => {
  state.currentId = els.challenge.value;
  state.pickedId = null;
  renderChallenge();
});
on(els.shuffle, "click", shuffleCards);
on(els.clear, "click", clearSlots);
on(els.hint, "click", showHint);
on(els.check, "click", checkSolution);

/* =========
   Botão opcional para limpar tudo (se existir no HTML)
   ========= */
on($("#clearStorageBtn"), "click", () => {
  if (confirm("Tem certeza que deseja apagar todas as tarefas e configurações salvas?")) {
    localStorage.clear();
    location.reload();
  }
});

/* =========
   Boot Único
   ========= */
(function init(){
  setTheme(getSavedTheme());
  state.filterCategory = "all";
  state.searchTerm = "";
  state.currentId = LIBRARY[0]?.id || null;
  rebuildChallengeList();
})();

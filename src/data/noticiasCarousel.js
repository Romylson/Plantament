import { formatarDataBR } from "../utils/date";

export const noticiasCarousel = [
  {
    slug: "atualizacoes-sobre-alzheimer",
    tituloKey: "carousel_1_titulo",
    subtituloKey: "carousel_1_subtitulo",
    resumoKey: "carousel_1_resumo",
    dataISO: "2026-03-05",
    data: "05 de março de 2026",
    imagem: "/images/alzheimer2.jpg",
    categoriaKey: "cat_atualizacoes",
    leituraMin: 8,
    tags: ["biomarcadores", "tratamento", "diagnostico", "prevencao"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "carousel_1_lead" },
      { tipo: "h2", textoKey: "carousel_1_h2_1" },
      { tipo: "p", textoKey: "carousel_1_p_1" },
      { tipo: "p", textoKey: "carousel_1_p_2" },
      { tipo: "h2", textoKey: "carousel_1_h2_2" },
      { tipo: "p", textoKey: "carousel_1_p_3" },
      {
        tipo: "lista",
        itensKeys: [
          "carousel_1_item_1",
          "carousel_1_item_2",
          "carousel_1_item_3",
          "carousel_1_item_4"
        ]
      },
      { tipo: "h2", textoKey: "carousel_1_h2_3" },
      { tipo: "p", textoKey: "carousel_1_p_4" },
      { tipo: "p", textoKey: "carousel_1_p_5" },
      { tipo: "callout", tituloKey: "carousel_1_callout_title", textoKey: "carousel_1_callout_text" },
      { tipo: "h2", textoKey: "carousel_1_h2_4" },
      { tipo: "p", textoKey: "carousel_1_p_6" },
      { tipo: "p", textoKey: "carousel_1_p_7" }
    ]
  },
  {
    slug: "fisiopatologia-do-alzheimer",
    tituloKey: "carousel_2_titulo",
    subtituloKey: "carousel_2_subtitulo",
    resumoKey: "carousel_2_resumo",
    dataISO: "2026-02-20",
    data: "20 de fevereiro de 2026",
    imagem: "/images/fisiopatologia2.jpg",
    categoriaKey: "cat_fisiopatologia",
    leituraMin: 9,
    tags: ["amiloide", "tau", "sinapse", "inflamacao", "neurodegeneracao"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "carousel_2_lead" },
      { tipo: "h2", textoKey: "carousel_2_h2_1" },
      { tipo: "p", textoKey: "carousel_2_p_1" },
      { tipo: "p", textoKey: "carousel_2_p_2" },
      { tipo: "h2", textoKey: "carousel_2_h2_2" },
      { tipo: "p", textoKey: "carousel_2_p_3" },
      { tipo: "p", textoKey: "carousel_2_p_4" },
      { tipo: "h2", textoKey: "carousel_2_h2_3" },
      { tipo: "p", textoKey: "carousel_2_p_5" },
      {
        tipo: "lista",
        itensKeys: [
          "carousel_2_item_1",
          "carousel_2_item_2",
          "carousel_2_item_3",
          "carousel_2_item_4"
        ]
      },
      { tipo: "h2", textoKey: "carousel_2_h2_4" },
      { tipo: "p", textoKey: "carousel_2_p_6" },
      { tipo: "callout", tituloKey: "carousel_2_callout_title", textoKey: "carousel_2_callout_text" },
      { tipo: "h2", textoKey: "carousel_2_h2_5" },
      { tipo: "p", textoKey: "carousel_2_p_7" },
      { tipo: "p", textoKey: "carousel_2_p_8" }
    ]
  },
  {
    slug: "plantas-em-evidencia",
    tituloKey: "carousel_3_titulo",
    subtituloKey: "carousel_3_subtitulo",
    resumoKey: "carousel_3_resumo",
    dataISO: "2026-01-30",
    data: "30 de janeiro de 2026",
    imagem: "/images/plantasalzheimer.jpg",
    categoriaKey: "cat_produtos_naturais",
    leituraMin: 8,
    tags: ["fitoterapia", "seguranca", "interacoes", "neuroprotecao", "evidencia"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "carousel_3_lead" },
      { tipo: "h2", textoKey: "carousel_3_h2_1" },
      { tipo: "p", textoKey: "carousel_3_p_1" },
      { tipo: "p", textoKey: "carousel_3_p_2" },
      { tipo: "h2", textoKey: "carousel_3_h2_2" },
      { tipo: "p", textoKey: "carousel_3_p_3" },
      {
        tipo: "lista",
        itensKeys: [
          "carousel_3_item_1",
          "carousel_3_item_2",
          "carousel_3_item_3",
          "carousel_3_item_4"
        ]
      },
      { tipo: "h2", textoKey: "carousel_3_h2_3" },
      { tipo: "p", textoKey: "carousel_3_p_4" },
      { tipo: "p", textoKey: "carousel_3_p_5" },
      { tipo: "callout", tituloKey: "carousel_3_callout_title", textoKey: "carousel_3_callout_text" },
      { tipo: "h2", textoKey: "carousel_3_h2_4" },
      { tipo: "p", textoKey: "carousel_3_p_6" },
      { tipo: "p", textoKey: "carousel_3_p_7" }
    ]
  }
];
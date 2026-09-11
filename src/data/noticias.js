import { formatarDataBR } from "../utils/date";

export const noticias = [
  {
    slug: "biomarcadores-sanguineos-triagem-precoce",
    tituloKey: "noticia_1_titulo",
    subtituloKey: "noticia_1_subtitulo",
    resumoKey: "noticia_1_resumo",
    dataISO: "2026-01-10",
    data: "10 de janeiro de 2026",
    categoriaKey: "cat_diagnostico",
    leituraMin: 8,
    imagem: "/images/biomarcadores-noticia.jpg",
    imagemCapa: "/images/biomarcadores-noticia.jpg",
    fonte: "Fonte: Unsplash / Freepik",
    tags: ["biomarcadores", "p-tau", "NfL", "triagem", "diagnostico"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "noticia_1_lead" },
      { tipo: "h2", textoKey: "noticia_1_h2_1" },
      { tipo: "p", textoKey: "noticia_1_p_1" },
      { tipo: "h2", textoKey: "noticia_1_h2_2" },
      { tipo: "p", textoKey: "noticia_1_p_2" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_1_item_1",
          "noticia_1_item_2",
          "noticia_1_item_3",
          "noticia_1_item_4"
        ]
      },
      { tipo: "h2", textoKey: "noticia_1_h2_3" },
      { tipo: "p", textoKey: "noticia_1_p_3" },
      { tipo: "callout", tituloKey: "noticia_1_callout_title", textoKey: "noticia_1_callout_text" },
      { tipo: "h2", textoKey: "noticia_1_h2_4" },
      { tipo: "p", textoKey: "noticia_1_p_4" },
      { tipo: "h2", textoKey: "noticia_1_h2_5" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_1_rec_1",
          "noticia_1_rec_2",
          "noticia_1_rec_3",
          "noticia_1_rec_4"
        ]
      },
      { tipo: "p", textoKey: "noticia_1_p_final" }
    ]
  },
  {
    slug: "sono-fragmentado-e-risco-demencia",
    tituloKey: "noticia_2_titulo",
    subtituloKey: "noticia_2_subtitulo",
    resumoKey: "noticia_2_resumo",
    dataISO: "2026-01-24",
    data: "24 de janeiro de 2026",
    categoriaKey: "cat_prevencao",
    leituraMin: 9,
    imagem: "/images/sono.jpg",
    imagemCapa: "/images/sono.jpg",
    fonte: "Fonte: Unsplash",
    tags: ["sono", "memoria", "apneia", "prevencao", "neuroprotecao"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "noticia_2_lead" },
      { tipo: "h2", textoKey: "noticia_2_h2_1" },
      { tipo: "p", textoKey: "noticia_2_p_1" },
      { tipo: "h2", textoKey: "noticia_2_h2_2" },
      { tipo: "p", textoKey: "noticia_2_p_2" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_2_item_1",
          "noticia_2_item_2",
          "noticia_2_item_3",
          "noticia_2_item_4"
        ]
      },
      { tipo: "h2", textoKey: "noticia_2_h2_3" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_2_alerta_1",
          "noticia_2_alerta_2",
          "noticia_2_alerta_3",
          "noticia_2_alerta_4",
          "noticia_2_alerta_5"
        ]
      },
      { tipo: "callout", tituloKey: "noticia_2_callout_title", textoKey: "noticia_2_callout_text" },
      { tipo: "h2", textoKey: "noticia_2_h2_4" },
      { tipo: "p", textoKey: "noticia_2_p_3" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_2_plano_1",
          "noticia_2_plano_2",
          "noticia_2_plano_3",
          "noticia_2_plano_4",
          "noticia_2_plano_5"
        ]
      },
      { tipo: "p", textoKey: "noticia_2_p_final" }
    ]
  },
  {
    slug: "intervencoes-multidominio-melhores-resultados",
    tituloKey: "noticia_3_titulo",
    subtituloKey: "noticia_3_subtitulo",
    resumoKey: "noticia_3_resumo",
    dataISO: "2026-02-07",
    data: "07 de fevereiro de 2026",
    categoriaKey: "cat_prevencao",
    leituraMin: 10,
    imagem: "/images/intervencao.jpg",
    imagemCapa: "/images/intervencao.jpg",
    fonte: "Fonte: Freepik",
    tags: ["multidominio", "dieta", "atividade fisica", "treino cognitivo", "prevencao"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "noticia_3_lead" },
      { tipo: "h2", textoKey: "noticia_3_h2_1" },
      { tipo: "p", textoKey: "noticia_3_p_1" },
      { tipo: "h2", textoKey: "noticia_3_h2_2" },
      { tipo: "p", textoKey: "noticia_3_p_2" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_3_item_1",
          "noticia_3_item_2",
          "noticia_3_item_3",
          "noticia_3_item_4"
        ]
      },
      { tipo: "h2", textoKey: "noticia_3_h2_3" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_3_ex_1",
          "noticia_3_ex_2",
          "noticia_3_ex_3",
          "noticia_3_ex_4"
        ]
      },
      { tipo: "callout", tituloKey: "noticia_3_callout_title", textoKey: "noticia_3_callout_text" },
      { tipo: "p", textoKey: "noticia_3_p_final" }
    ]
  },
  {
    slug: "ia-em-neuroimagem-reduz-tempo",
    tituloKey: "noticia_4_titulo",
    resumoKey: "noticia_4_resumo",
    dataISO: "2026-02-21",
    data: formatarDataBR("2026-02-21"),
    imagem: "/images/Ia.jpg",
    fonte: "Fonte: Freepik",
    categoriaKey: "cat_tecnologia",
    leituraMin: 5,
    tags: ["IA", "neuroimagem", "diagnostico"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "noticia_4_lead" },
      { tipo: "h2", textoKey: "noticia_4_h2_1" },
      { tipo: "p", textoKey: "noticia_4_p_1" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_4_item_1",
          "noticia_4_item_2",
          "noticia_4_item_3",
          "noticia_4_item_4"
        ]
      },
      { tipo: "h2", textoKey: "noticia_4_h2_2" },
      { tipo: "p", textoKey: "noticia_4_p_2" },
      { tipo: "h2", textoKey: "noticia_4_h2_3" },
      { tipo: "p", textoKey: "noticia_4_p_3" },
      { tipo: "callout", tituloKey: "noticia_4_callout_title", textoKey: "noticia_4_callout_text" },
      { tipo: "h2", textoKey: "noticia_4_h2_4" },
      { tipo: "p", textoKey: "noticia_4_p_4" }
    ]
  },
  {
    slug: "atividade-fisica-novas-evidencias",
    tituloKey: "noticia_5_titulo",
    resumoKey: "noticia_5_resumo",
    dataISO: "2026-03-04",
    data: formatarDataBR("2026-03-04"),
    imagem: "/images/prevencao.jpg",
    fonte: "Fonte: Unsplash",
    categoriaKey: "cat_prevencao",
    leituraMin: 5,
    tags: ["exercicio", "risco", "idosos"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "noticia_5_lead" },
      { tipo: "h2", textoKey: "noticia_5_h2_1" },
      { tipo: "p", textoKey: "noticia_5_p_1" },
      { tipo: "h2", textoKey: "noticia_5_h2_2" },
      { tipo: "p", textoKey: "noticia_5_p_2" },
      { tipo: "h2", textoKey: "noticia_5_h2_3" },
      { tipo: "p", textoKey: "noticia_5_p_3" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_5_item_1",
          "noticia_5_item_2",
          "noticia_5_item_3",
          "noticia_5_item_4"
        ]
      },
      { tipo: "callout", tituloKey: "noticia_5_callout_title", textoKey: "noticia_5_callout_text" },
      { tipo: "h2", textoKey: "noticia_5_h2_4" },
      { tipo: "p", textoKey: "noticia_5_p_4" }
    ]
  },
  {
    slug: "terapias-antiamiloide-avaliacao",
    tituloKey: "noticia_6_titulo",
    resumoKey: "noticia_6_resumo",
    dataISO: "2026-03-19",
    data: formatarDataBR("2026-03-19"),
    imagem: "/images/avancos.jpg",
    fonte: "Fonte: Divulgação",
    categoriaKey: "cat_tratamento",
    leituraMin: 6,
    tags: ["antiamiloide", "monitoramento", "subgrupos"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "noticia_6_lead" },
      { tipo: "h2", textoKey: "noticia_6_h2_1" },
      { tipo: "p", textoKey: "noticia_6_p_1" },
      { tipo: "h2", textoKey: "noticia_6_h2_2" },
      { tipo: "p", textoKey: "noticia_6_p_2" },
      { tipo: "h2", textoKey: "noticia_6_h2_3" },
      { tipo: "p", textoKey: "noticia_6_p_3" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_6_item_1",
          "noticia_6_item_2",
          "noticia_6_item_3",
          "noticia_6_item_4"
        ]
      },
      { tipo: "callout", tituloKey: "noticia_6_callout_title", textoKey: "noticia_6_callout_text" },
      { tipo: "h2", textoKey: "noticia_6_h2_4" },
      { tipo: "p", textoKey: "noticia_6_p_4" }
    ]
  },
  {
    slug: "estimulacao-cognitiva-domiciliar-adesao",
    tituloKey: "noticia_7_titulo",
    resumoKey: "noticia_7_resumo",
    dataISO: "2026-04-02",
    data: formatarDataBR("2026-04-02"),
    imagem: "/images/protocolos.jpg",
    fonte: "Fonte: Equipe PlantaMente",
    categoriaKey: "cat_educacao",
    leituraMin: 5,
    tags: ["aplicativos", "cognicao", "adesao"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "noticia_7_lead" },
      { tipo: "h2", textoKey: "noticia_7_h2_1" },
      { tipo: "p", textoKey: "noticia_7_p_1" },
      { tipo: "h2", textoKey: "noticia_7_h2_2" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_7_item_1",
          "noticia_7_item_2",
          "noticia_7_item_3",
          "noticia_7_item_4",
          "noticia_7_item_5"
        ]
      },
      { tipo: "p", textoKey: "noticia_7_p_2" },
      { tipo: "h2", textoKey: "noticia_7_h2_3" },
      { tipo: "p", textoKey: "noticia_7_p_3" },
      { tipo: "callout", tituloKey: "noticia_7_callout_title", textoKey: "noticia_7_callout_text" },
      { tipo: "h2", textoKey: "noticia_7_h2_4" },
      { tipo: "p", textoKey: "noticia_7_p_4" }
    ]
  },
  {
    slug: "nutricao-e-microbiota-neuroprotecao",
    tituloKey: "noticia_8_titulo",
    resumoKey: "noticia_8_resumo",
    dataISO: "2026-04-16",
    data: formatarDataBR("2026-04-16"),
    imagem: "/images/microbiota.jpg",
    fonte: "Fonte: Unsplash",
    categoriaKey: "cat_nutricao",
    leituraMin: 6,
    tags: ["microbiota", "dieta", "inflamacao"],
    conteudoKeys: [
      { tipo: "lead", textoKey: "noticia_8_lead" },
      { tipo: "h2", textoKey: "noticia_8_h2_1" },
      { tipo: "p", textoKey: "noticia_8_p_1" },
      { tipo: "h2", textoKey: "noticia_8_h2_2" },
      { tipo: "p", textoKey: "noticia_8_p_2" },
      {
        tipo: "lista",
        itensKeys: [
          "noticia_8_item_1",
          "noticia_8_item_2",
          "noticia_8_item_3",
          "noticia_8_item_4"
        ]
      },
      { tipo: "h2", textoKey: "noticia_8_h2_3" },
      { tipo: "p", textoKey: "noticia_8_p_3" },
      { tipo: "callout", tituloKey: "noticia_8_callout_title", textoKey: "noticia_8_callout_text" },
      { tipo: "h2", textoKey: "noticia_8_h2_4" },
      { tipo: "p", textoKey: "noticia_8_p_4" }
    ]
  }
];

export const ultimasNoticias = [...noticias]
  .sort((a, b) => new Date(b.dataISO) - new Date(a.dataISO))
  .slice(0, 8);

export function getNoticiaBySlug(slug) {
  return noticias.find((n) => n.slug === slug);
}
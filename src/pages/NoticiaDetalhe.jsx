// src/pages/NoticiaDetalhe.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { noticias } from "../data/noticias";
import { noticiasCarousel } from "../data/noticiasCarousel";
import "./NoticiaDetalhe.css";

export default function NoticiaDetalhe() {
  const { slug } = useParams();
  const { t } = useTranslation();

  // Junta TODAS as notícias
  const todasNoticias = [...noticias, ...noticiasCarousel];

  const noticia = todasNoticias.find((n) => n.slug === slug);

  if (!noticia) {
    return (
      <div className="container py-5">
        <h2>{t("noticia_nao_encontrada", "Notícia não encontrada")}</h2>
        <p>
          {t(
            "noticia_nao_encontrada_desc",
            "O link pode estar incorreto ou a notícia foi removida."
          )}
        </p>
        <Link to="/" className="btn btn-dark">
          {t("voltar", "Voltar")}
        </Link>
      </div>
    );
  }

  // Resolução de título
  const titulo = noticia.tituloKey ? t(noticia.tituloKey) : noticia.titulo;

  // Resolução da lista de blocos de conteúdo
  const blocos = noticia.conteudoKeys || noticia.conteudo || [];

  return (
    <div className="container py-4">
      <h1 className="mb-3">{titulo}</h1>

      <p className="text-muted">
        {noticia.data} • {noticia.leituraMin} {t("leitura_min", "min")}
      </p>

      {noticia.imagem && (
        <div>
          <img
            src={noticia.imagem}
            alt={titulo}
            style={{
              width: "100%",
              maxHeight: "420px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "20px"
            }}
          />

          {noticia.fonte && (
            <span
              className="text-xs text-gray-500 italic block mt-1"
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                fontStyle: "italic",
                marginTop: "6px",
                display: "block"
              }}
            >
              {noticia.fonte}
            </span>
          )}
        </div>
      )}

      <div className="noticia-conteudo">
        {blocos.map((bloco, i) => {
          if (typeof bloco === "string") {
            return <p key={i}>{bloco}</p>;
          }

          const texto = bloco.textoKey ? t(bloco.textoKey) : bloco.texto;
          const tituloCallout = bloco.tituloKey ? t(bloco.tituloKey) : bloco.titulo;

          if (bloco.tipo === "lead") {
            return (
              <p key={i} className="noticia-lead">
                {texto}
              </p>
            );
          }

          if (bloco.tipo === "h2") {
            return <h2 key={i}>{texto}</h2>;
          }

          if (bloco.tipo === "p") {
            return <p key={i}>{texto}</p>;
          }

          if (bloco.tipo === "callout") {
            return (
              <div key={i} className="noticia-callout">
                <strong>{tituloCallout}</strong>
                <p>{texto}</p>
              </div>
            );
          }

          if (bloco.tipo === "lista") {
            const itens = bloco.itensKeys
              ? bloco.itensKeys.map((k) => t(k))
              : bloco.itens || [];

            return (
              <ul key={i}>
                {itens.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
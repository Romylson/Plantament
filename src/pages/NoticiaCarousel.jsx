// src/pages/NoticiaCarousel.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { noticiasCarousel } from "../data/noticiasCarousel";
import "./NoticiaCarousel.css";

export default function NoticiaCarousel() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const noticia = noticiasCarousel.find((n) => n.slug === slug);

  if (!noticia) {
    return (
      <div className="noticia-page">
        <h2>{t("noticia_nao_encontrada", "Notícia não encontrada")}</h2>
        <Link to="/" className="btn btn-outline-dark mt-3">
          {t("voltar", "Voltar")}
        </Link>
      </div>
    );
  }

  // Resolução de título e resumo
  const titulo = noticia.tituloKey ? t(noticia.tituloKey) : noticia.titulo;
  const resumo = noticia.resumoKey ? t(noticia.resumoKey) : noticia.resumo;

  // Resolução dos blocos de conteúdo
  const blocos = noticia.conteudoKeys || noticia.conteudo || [];

  return (
    <div className="noticia-page">
      <Link to="/" className="btn btn-outline-dark mb-3">
        ← {t("voltar", "Voltar")}
      </Link>

      <h1 className="noticia-title">{titulo}</h1>
      
      <div className="noticia-meta">
        <span>
          <b>{t("data_rotulo", "Data:")}</b> {noticia.data || noticia.dataISO}
        </span>
      </div>

      {noticia.imagem && (
        <img className="noticia-capa" src={noticia.imagem} alt={titulo} />
      )}

      {noticia.fonte && (
        <span className="text-xs text-gray-500 italic block mt-1">
          {noticia.fonte}
        </span>
      )}

      <p className="noticia-resumo">{resumo}</p>

      <div className="noticia-content">
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
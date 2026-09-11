// src/pages/NoticiaCarousel.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ultimasNoticias } from "../data/noticias";

export default function NoticiaCarousel() {
  const { t } = useTranslation();

  // Verifica se há notícias para exibir
  if (!ultimasNoticias || ultimasNoticias.length === 0) {
    return <div style={{ padding: "20px", textAlign: "center" }}>Nenhuma notícia encontrada.</div>;
  }

  return (
    <div className="news-carousel-container">
      <div className="news-grid">
        {ultimasNoticias.map((n) => {
          // Garante fallback visual caso a chave do i18n venha vazia
          const rawTitulo = n.tituloKey ? t(n.tituloKey) : "";
          const tituloText = rawTitulo && !rawTitulo.includes("noticia_") ? rawTitulo : `Notícia: ${n.slug}`;
          
          const rawResumo = n.resumoKey ? t(n.resumoKey) : "";
          const resumoText = rawResumo && !rawResumo.includes("noticia_") ? rawResumo : "Resumo indisponível no momento.";

          const categoriaText = n.categoriaKey ? t(n.categoriaKey) : "Geral";

          return (
            <Link key={n.slug} to={`/noticias/${n.slug}`} className="news-card">
              <div className="news-thumb">
                <img src={n.imagem} alt={tituloText} />
              </div>
              {n.fonte && (
                <span className="text-xs text-gray-500 italic block mt-1">
                  {n.fonte}
                </span>
              )}
              <div className="news-body">
                <div className="news-meta">
                  <span className="news-badge">{categoriaText}</span>
                  <span className="news-date">{n.data}</span>
                  <span className="news-read">
                    {n.leituraMin} {t("leitura_min", "min")}
                  </span>
                </div>

                <h3 className="news-title">{tituloText}</h3>
                <p className="news-resume">{resumoText}</p>

                <span className="news-cta">
                  {t("ler_noticia", "Ler notícia")} <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
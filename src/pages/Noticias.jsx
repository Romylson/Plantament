// src/pages/Noticias.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { noticias } from "../data/noticias";
import "./NoticiasPages.css";

export default function Noticias() {
  const { t } = useTranslation();

  return (
    <main className="news-page">
      <div className="news-container">
        <div className="news-header">
          <h1>{t("noticias_pagina_titulo", "Últimas Notícias")}</h1>
          <p>
            {t(
              "noticias_pagina_subtitulo",
              "Atualizações do PlantaMente organizadas por temas: diagnóstico, prevenção, tecnologia, nutrição e produtos naturais."
            )}
          </p>
        </div>

        <div className="news-grid">
          {noticias.map((n) => {
            const tituloText = n.tituloKey ? t(n.tituloKey) : n.titulo;
            const categoriaText = n.categoriaKey ? t(n.categoriaKey) : n.categoria;
            const resumoText = n.resumoKey ? t(n.resumoKey) : n.resumo;

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
    </main>
  );
}
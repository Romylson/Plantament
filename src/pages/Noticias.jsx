// src/pages/Noticias.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { noticias } from "../data/noticias";
import "./NoticiasPages.css";

export default function Noticias() {
  const { t } = useTranslation();

  // Verificação de segurança: se noticias não for um array, avisa na tela
  if (!Array.isArray(noticias)) {
    return (
      <main className="news-page">
        <div className="news-container" style={{ color: "red", padding: "20px" }}>
          <h2>Erro Crítico: 'noticias' não é um array!</h2>
          <p>Verifique a exportação no arquivo noticias.js</p>
        </div>
      </main>
    );
  }

  return (
    <main className="news-page">
      <div className="news-container">
        <div className="news-header">
          <h1>{t("noticias_pagina_titulo", "Últimas Notícias")}</h1>
          <p>
            {t(
              "noticias_pagina_subtitulo",
              "Atualizações do PlantaMente organizadas por temas."
            )}
          </p>
        </div>

        <div className="news-grid">
          {noticias.map((n, index) => {
            // Teste seguro para exibir o título sem depender ainda do i18n
            const tituloText = n.tituloKey ? `Chave: ${n.tituloKey}` : `Notícia ${index}`;

            return (
              <div key={n.slug || index} className="news-card" style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}>
                <h3 className="news-title">{tituloText}</h3>
                <p className="news-resume">Slug: {n.slug}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
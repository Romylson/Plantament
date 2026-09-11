// src/pages/NoticiaCarousel.jsx
import React from "react";
import { ultimasNoticias } from "../data/noticias";

export default function NoticiaCarousel() {
  console.log("Variável ultimasNoticias:", ultimasNoticias);

  return (
    <div style={{ padding: "30px", background: "#f0f0f0", border: "2px solid red", margin: "20px" }}>
      <h2 style={{ color: "red" }}>TESTE DO CARROSSEL FUNCIONANDO!</h2>
      <p>Total de itens no array: {ultimasNoticias ? ultimasNoticias.length : "Array não encontrado!"}</p>
      
      <ul>
        {ultimasNoticias && ultimasNoticias.map((item, idx) => (
          <li key={idx} style={{ marginBottom: "10px" }}>
            <strong>Slug:</strong> {item.slug} | <strong>Título Key:</strong> {item.tituloKey}
          </li>
        ))}
      </ul>
    </div>
  );
}
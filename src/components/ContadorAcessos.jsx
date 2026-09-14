import React, { useState, useEffect } from "react";
import "./ContadorAcessos.css";

export default function ContadorAcessos() {
  const [visitas, setVisitas] = useState(null);

  useEffect(() => {
    // Usamos um serviço gratuito de contagem (ex: CountAPI)
    // Substitua "plantamente" por um nome único para o seu projeto caso queira isolar a contagem
    fetch("https://api.countapi.xyz/hit/plantamente-org/acessos")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.value) {
          setVisitas(data.value);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar contador de acessos:", error);
      });
  }, []);

  if (visitas === null) return null; // Não exibe nada enquanto carrega

  return (
    <div className="contador-acessos-container">
      <span className="contador-icone">📊</span>
      <span className="contador-texto">
        Visitas totais: <strong>{visitas.toLocaleString("pt-BR")}</strong>
      </span>
    </div>
  );
}
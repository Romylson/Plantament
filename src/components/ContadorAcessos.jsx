import React, { useState, useEffect } from "react";
import "./ContadorAcessos.css";

export default function ContadorAcessos() {
  const [visitas, setVisitas] = useState(0);

  useEffect(() => {
    // Pega o número atual do navegador ou começa do 120 (por exemplo)
    let totalVisitas = localStorage.getItem("plantamente_visitas");
    
    if (!totalVisitas) {
      totalVisitas = 10; // Número inicial base para o site
    } else {
      totalVisitas = parseInt(totalVisitas, 10) + 1; // Incrementa +1 a cada acesso
    }

    localStorage.setItem("plantamente_visitas", totalVisitas);
    setVisitas(totalVisitas);
  }, []);

  return (
    <div className="contador-acessos-container">
      <span className="contador-icone">📊</span>
      <span className="contador-texto">
        Visitas totais: <strong>{visitas.toLocaleString("pt-BR")}</strong>
      </span>
    </div>
  );
}
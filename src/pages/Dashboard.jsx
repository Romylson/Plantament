import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";
import ImageCarousel from "../components/ImageCarousel";
import NoticiasAvancosAlzheimer from "../components/NoticiasAvancosAlzheimer";
import BannerDiferenciais from "../components/BannerDiferenciais";
import DiferenciaisInovadores from "../components/DiferenciaisInovadores";
import IntroBlock from "../components/IntroBlock";
import logosParceiros from "../assets/parceiros-rodapé.png";
import cerebroplanta from "../assets/cerebroplanta.png";
import logoPlantamente from "../assets/plantamente.jpg";
import cerebroroxo from "../assets/cerebroroxo.jpg";
import plantamedicinal from "../assets/plantamedicinal.jpg";
import molecula from "../assets/molecula.jpg";
import farmacoroxo from "../assets/farmacoroxo.jfif";
import aprenda from "../assets/aprenda.jpg";
import qualidade from "../assets/qualidade.jfif";
import rosmarinus from "../assets/rosmarinus.jpg";
import terpineno from "../assets/terpineno.png";
import cerebroRegioesImg from "../assets/regioescerebro.jfif";

// Mapeamento dos 6 cards principais da tela
const cardsPrincipais = [
  {
    titulo: "Entenda o Alzheimer",
    descricao: "Causas, sintomas, estágios e avanços na pesquisa.",
    rota: "/alzheimer-dados",
    img: cerebroroxo,
  },
  {
    titulo: "Explore a Farmacologia",
    descricao: "Alvos moleculares, fármacos e compostos naturais.",
    rota: "/farmacos",
    img: farmacoroxo,
  },
  {
    titulo: "Descubra as Plantas Medicinais",
    descricao: "Espécies, compostos bioativos e evidências no Alzheimer.",
    rota: "/plantas",
    img: plantamedicinal,
  },
  {
    titulo: "Moléculas em Destaque",
    descricao: "Estruturas, mecanismos e aplicações.",
    rota: "/fisiopatologia",
    img: molecula,
  },
  {
    titulo: "Aprenda",
    descricao: "Mapas mentais, fluxogramas, linha do tempo, quiz e mais.",
    rota: "/educacional",
    img: aprenda,
  },
  {
    titulo: "Qualidade de Vida",
    descricao: "Exercício, dieta, sono, natureza e bem-estar.",
    rota: "/qualidade-de-vida",
    img: qualidade,
  },
];

export default function Dashboard() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Buscando por:", searchTerm);
    }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      alert("Obrigado por se inscrever!");
      setNewsletterEmail("");
    }
  };

  return (
    <div className="plantamente-landing">
      {/* 1. Header / Navbar Superior */}
      <header className="site-header">
        <div className="header-container">
          <div className="logo-brand">
            <Link to="/" className="brand-link">
              <img src={logoPlantamente} alt="Logo PlantaMente" className="header-logo-img" />
              <div className="brand-text">
                <span className="logo-title">Plantamente<small>.org</small></span>
                <span className="logo-subtitle">PLANTAS • CIÊNCIA • CÉREBRO</span>
              </div>
            </Link>
          </div>

          <nav className="main-nav">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Início</Link>
            <Link to="/alzheimer-dados">Alzheimer</Link>
            <Link to="/farmacos">Farmacologia</Link>
            <Link to="/plantas">Plantas Medicinais</Link>
            <Link to="/fisiopatologia">Moléculas</Link>
            <Link to="/secao-cientifica">Evidências Científicas</Link>
            <Link to="/educacional">Aprender</Link>
            <Link to="/qualidade-de-vida">Qualidade de Vida</Link>
            <Link to="/jogos">Jogos</Link>
            <Link to="/artigos-cientificos">Artigos Científicos</Link>
            <Link to="/historico">Sobre</Link>
          </nav>

          <div className="header-actions">
            <form onSubmit={handleSearch} className="search-box">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" aria-label="Buscar">🔍</button>
            </form>
            <button className="accessibility-btn">
              ♿ Acessibilidade
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tagline">CIÊNCIA HOJE, MAIS MEMÓRIAS AMANHÃ</span>
            <h1 className="hero-title">
              Plantamente<br />
              <span>Alzheimer, Plantas e Ciência</span>
            </h1>
            <p className="hero-description">
              Uma plataforma digital que conecta neurociência, farmacologia
              e plantas medicinais para informar, educar e inspirar uma vida
              com mais saúde cerebral.
            </p>
            <div className="hero-buttons">
              <Link to="/secao-cientifica" className="btn btn-primary">
                Explorar conteúdos &rarr;
              </Link>
              <Link to="/historico" className="btn btn-outline">
                Conheça o projeto
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <img src={cerebroplanta} alt="Cérebro e Plantas Medicinais" />
          </div>

          <div className="hero-slogan-card">
            <p className="handwritten-text">Plantas hoje, mentes amanhã.</p>
            <ul className="slogan-list">
              <li><span className="icon">🧠</span> NEUROPROTEÇÃO</li>
              <li><span className="icon">🌿</span> PLANTAS MEDICINAIS</li>
              <li><span className="icon">📖</span> EVIDÊNCIAS CIENTÍFICAS</li>
              <li><span className="icon">💜</span> QUALIDADE DE VIDA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Grid de Categorias (6 Cards) */}
      <section className="categories-section">
        <div className="section-container">
          <div className="cards-grid">
            {cardsPrincipais.map((card) => (
              <div key={card.rota} className="feature-card">
                <div className="card-media">
                  <img src={card.img} alt={card.titulo} />
                </div>
                <h3>{card.titulo}</h3>
                <p>{card.descricao}</p>
                <Link to={card.rota} className="card-arrow-btn" aria-label={`Acessar ${card.titulo}`}>
                  &gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrossel de Imagens */}
      <div className="full-bleed-carousel">
        <ImageCarousel />
      </div>

      {/* Banner de Diferenciais e Introdução */}
      <BannerDiferenciais />
      <IntroBlock />

      {/* Notícias de Avanços no Alzheimer */}
      <NoticiasAvancosAlzheimer />

      {/* Diferenciais Inovadores */}
      <DiferenciaisInovadores />

      {/* 4. Faixa de Pilares e Valores */}
      <section className="pillars-bar">
        <div className="pillars-container">
          <div className="pillar-item">
            <span className="pillar-icon">📋</span>
            <span className="pillar-text">CONTEÚDO BASEADO EM EVIDÊNCIAS</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-icon">🎯</span>
            <span className="pillar-text">LINGUAGEM ACESSÍVEL</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-icon">👥</span>
            <span className="pillar-text">INFORMAÇÃO PARA TODOS</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-icon">🌿</span>
            <span className="pillar-text">PLANTAS A FAVOR DO CÉREBRO</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-icon">💜</span>
            <span className="pillar-text">MAIS QUALIDADE DE VIDA</span>
          </div>
          <div className="pillar-quote">
            “Conhecimento é uma semente que nunca se perde.”
          </div>
        </div>
      </section>

          {/* ==========================================================================
        5. SEÇÃO DOS 4 BLOCOS LADO A LADO
        ========================================================================== */}
          <section className="interactive-highlights-section">
            <div className="four-blocks-container">
              
              {/* BLOCO 1: EXPLORE O CÉREBRO */}
              <div className="block-item explore-brain-card">
                <div className="block-info">
                  <h2>Explore o Cérebro</h2>
                  <p>Clique nas regiões para conhecer suas funções e relação com o Alzheimer.</p>
                  <Link to="/anatomia-interativa" className="btn-primary">
                    Ver anatomia interativa &rarr;
                  </Link>
                </div>
                <div className="block-media">
                  <img src={cerebroImg} alt="Cérebro" />
                </div>
              </div>

              {/* BLOCO 2: PLANTA EM FOCO */}
              <div className="block-item highlight-card">
                <div className="block-media highlight-media">
                  <img src={rosmarinus} alt="Rosmarinus officinalis" className="highlight-img" />
                </div>
                <div className="block-info">
                  <span className="badge plant">PLANTA EM FOCO</span>
                  <h3>Rosmarinus officinalis</h3>
                  <p>Memória, antioxidante e neuroproteção.</p>
                  <Link to="/plantas" className="link-more">Saiba mais &rarr;</Link>
                </div>
              </div>

              {/* BLOCO 3: MOLÉCULA EM FOCO */}
              <div className="block-item highlight-card">
                <div className="block-media highlight-media">
                  <img src={terpineno} alt="γ-Terpineno" className="highlight-img" />
                </div>
                <div className="block-info">
                  <span className="badge molecule">MOLÉCULA EM FOCO</span>
                  <h3>γ-Terpineno</h3>
                  <p>Propriedades e alvos investigados.</p>
                  <Link to="/moleculas" className="link-more">Saiba mais &rarr;</Link>
                </div>
              </div>

              {/* BLOCO 4: NEWSLETTER */}
              <div className="block-item newsletter-card">
                <h2>Receba novidades do Plantamente</h2>
                <p>Artigos, atualizações e novos conteúdos.</p>

                <form onSubmit={handleNewsletter} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit">&gt;</button>
                </form>

                <div className="social-links-block">
                  <p>Siga-nos</p>
                  <div className="social-icons">
                    <a href="#instagram" aria-label="Instagram">📷</a>
                    <a href="#youtube" aria-label="YouTube">▶️</a>
                    <a href="#linkedin" aria-label="LinkedIn">in</a>
                    <a href="#x" aria-label="X">𝕏</a>
                  </div>
                </div>
              </div>

            </div>
          </section>
      {/* 6. Rodapé Institucional */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-title">Plantamente<small>.org</small></span>
            <span className="footer-subtitle">PLANTAS • CIÊNCIA • CÉREBRO</span>
          </div>

          <div className="footer-links">
            <Link to="/termos">Termos de uso</Link>
            <span className="divider">|</span>
            <Link to="/privacidade">Política de privacidade</Link>
            <span className="divider">|</span>
            <Link to="/contato">Contato</Link>
          </div>

          <div className="footer-partners">
            <img src={logosParceiros} alt="Apoiadores: UFPI, PPGFarm, NPPM, LAFAC-UFPI" />
          </div>
        </div>
      </footer>
    </div>
  );
}
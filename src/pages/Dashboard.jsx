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
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Dashboard() {
  const { t } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

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
      alert(t("newsletter_success", "Obrigado por se inscrever!"));
      setNewsletterEmail("");
    }
  };

  // Mapeamento dos 6 cards principais dentro do componente para acesso dinâmico ao 't'
  const cardsPrincipais = [
    {
      titulo: t("card_alzheimer_title", "Entenda o Alzheimer"),
      descricao: t("card_alzheimer_desc", "Causas, sintomas, estágios e avanços na pesquisa."),
      rota: "/alzheimer-dados",
      img: cerebroroxo,
      fonte: "Fonte: Pixabay (www.pixabay.com)",
    },
    {
      titulo: t("card_pharmacology_title", "Explore a Farmacologia"),
      descricao: t("card_pharmacology_desc", "Alvos moleculares, fármacos e compostos naturais."),
      rota: "/farmacos",
      img: farmacoroxo,
      fonte: "Fonte: Pixabay (www.pixabay.com)",
    },
    {
      titulo: t("card_plants_title", "Descubra as Plantas Medicinais"),
      descricao: t("card_plants_desc", "Espécies, compostos bioativos e evidências no Alzheimer."),
      rota: "/plantas",
      img: plantamedicinal,
      fonte: "Fonte: Pixabay (www.pixabay.com)",
    },
    {
      titulo: t("card_molecules_title", "Moléculas em Destaque"),
      descricao: t("card_molecules_desc", "Estruturas, mecanismos e aplicações."),
      rota: "/fisiopatologia",
      img: molecula,
      fonte: "Fonte: Pixabay (www.pixabay.com)",
    },
    {
      titulo: t("card_learn_title", "Aprenda"),
      descricao: t("card_learn_desc", "Mapas mentais, fluxogramas, linha do tempo, quiz e mais."),
      rota: "/educacional",
      img: aprenda,
      fonte: "Fonte: Pixabay (www.pixabay.com)",
    },
    {
      titulo: t("card_quality_title", "Qualidade de Vida"),
      descricao: t("card_quality_desc", "Exercício, dieta, sono, natureza e bem-estar."),
      rota: "/qualidade-de-vida",
      img: qualidade,
      fonte: "Fonte: Pixabay (www.pixabay.com)",
    },
  ];

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
                <span className="logo-subtitle">{t("site_tagline", "PLANTAS • CIÊNCIA • CÉREBRO")}</span>
              </div>
            </Link>
          </div>

          <nav className="main-nav">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>{t("nav_home", "Início")}</Link>
            <Link to="/alzheimer-dados">{t("nav_alzheimer", "Alzheimer")}</Link>
            <Link to="/farmacos">{t("nav_pharmacology", "Farmacologia")}</Link>
            <Link to="/plantas">{t("nav_plants", "Plantas Medicinais")}</Link>
            <Link to="/artigos-cientificos">{t("nav_articles", "Artigos Científicos")}</Link>
            <Link to="/secao-cientifica">{t("nav_evidences", "Evidências Científicas")}</Link>
            <Link to="/diferenciais-inovadores">{t("nav_differentials", "Diferenciais Inovadores")}</Link>
            <Link to="/blog-cientifico">{t("nav_blog", "Blog Científico")}</Link>
            <Link to="/jogos">{t("nav_games", "Jogos")}</Link>
            <Link to="/historico">{t("nav_about", "Sobre")}</Link>

            {/* Seletor de Idioma Perfeitamente Alinhado */}
            <div className="lang-dropdown-wrapper">
              <span
                id="langDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="lang-trigger-text"
              >
                🌐<span className="caret-icon">▼</span>
              </span>

              <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="langDropdown">
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={() => changeLanguage("pt")}>
                    <span style={{ fontSize: "1.2rem" }} role="img" aria-label="Português">🇧🇷</span>
                    <span className="ms-2">Português</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={() => changeLanguage("en")}>
                    <span style={{ fontSize: "1.2rem" }} role="img" aria-label="English">🇺🇸</span>
                    <span className="ms-2">English</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={() => changeLanguage("es")}>
                    <span style={{ fontSize: "1.2rem" }} role="img" aria-label="Español">🇪🇸</span>
                    <span className="ms-2">Español</span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header-actions">
            <form onSubmit={handleSearch} className="search-box">
              <input
                type="text"
                placeholder={t("search_placeholder", "Buscar...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" aria-label={t("search_button", "Buscar")}>🔍</button>
            </form>
            <button 
              className="accessibility-btn"
              onClick={() => {
                const elemento = document.getElementById("recursos-acessibilidade");
                if (elemento) {
                  elemento.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              ♿ {t("accessibility", "Acessibilidade")}
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tagline">{t("hero_tagline", "CIÊNCIA HOJE, MAIS MEMÓRIAS AMANHÃ")}</span>
            <h1 className="hero-title">
              Plantamente<br />
              <span>{t("hero_subtitle", "Alzheimer, Plantas e Ciência")}</span>
            </h1>
            <p className="hero-description">
              {t("hero_description", "Uma plataforma digital que conecta neurociência, farmacologia e plantas medicinais para informar, educar e inspirar uma vida com mais saúde cerebral.")}
            </p>
            <div className="hero-buttons">
              <Link to="/secao-cientifica" className="btn btn-primary">
                {t("hero_btn_explore", "Explorar conteúdos")} &rarr;
              </Link>
              <Link to="/historico" className="btn btn-outline">
                {t("hero_btn_project", "Conheça o projeto")}
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <img src={cerebroplanta} alt="Cérebro e Plantas Medicinais" />
          </div>

          <div className="hero-slogan-card">
            <p className="handwritten-text">{t("slogan_handwritten", "Plantas hoje, mentes amanhã.")}</p>
            <ul className="slogan-list">
              <li><span className="icon">🧠</span> {t("pillar_neuroprotection", "NEUROPROTEÇÃO")}</li>
              <li><span className="icon">🌿</span> {t("pillar_plants", "PLANTAS MEDICINAIS")}</li>
              <li><span className="icon">📖</span> {t("pillar_evidences", "EVIDÊNCIAS CIENTÍFICAS")}</li>
              <li><span className="icon">💜</span> {t("pillar_quality", "QUALIDADE DE VIDA")}</li>
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
                  {/* Linha que exibe a fonte sobreposta à imagem */}
                  {card.fonte && <span className="card-fonte">{card.fonte}</span>}
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
            <span className="pillar-text">{t("pillar_evidence_based", "CONTEÚDO BASEADO EM EVIDÊNCIAS")}</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-icon">🎯</span>
            <span className="pillar-text">{t("pillar_accessible_language", "LINGUAGEM ACESSÍVEL")}</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-icon">👥</span>
            <span className="pillar-text">{t("pillar_for_everyone", "INFORMAÇÃO PARA TODOS")}</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-icon">🌿</span>
            <span className="pillar-text">{t("pillar_plants_for_brain", "PLANTAS A FAVOR DO CÉREBRO")}</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-icon">💜</span>
            <span className="pillar-text">{t("pillar_more_quality", "MAIS QUALIDADE DE VIDA")}</span>
          </div>
          <div className="pillar-quote">
            “{t("pillar_quote", "Conhecimento é uma semente que nunca se perde.")}”
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DOS 4 BLOCOS LADO A LADO */}
      <section className="interactive-highlights-section">
        <div className="four-blocks-container">
          
          {/* BLOCO 1: EXPLORE O CÉREBRO */}
          <div className="block-item explore-brain-card">
            <div className="block-info">
              <h2>{t("block_explore_brain_title", "Explore o Cérebro")}</h2>
              <p>{t("block_explore_brain_desc", "Clique nas regiões para conhecer suas funções e relação com o Alzheimer.")}</p>
              <Link to="/cerebro3d" className="btn-primary">
                {t("block_explore_brain_btn", "Ver anatomia interativa")} &rarr;
              </Link>
            </div>
            <div className="block-media">
              <img src={cerebroRegioesImg} alt="Cérebro" />
            </div>
          </div>

          {/* BLOCO 2: PLANTA EM FOCO */}
          <div className="block-item highlight-card">
            <div className="block-media highlight-media">
              <img src={rosmarinus} alt="Rosmarinus officinalis" className="highlight-img" />
            </div>
            <div className="block-info">
              <span className="badge plant">{t("badge_plant_focus", "PLANTA EM FOCO")}</span>
              <h3>Rosmarinus officinalis</h3>
              <p>{t("rosmarinus_desc", "Memória, antioxidante e neuroproteção.")}</p>
              <Link to="/plantas" className="link-more">{t("learn_more", "Saiba mais")} &rarr;</Link>
            </div>
          </div>

          {/* BLOCO 3: MOLÉCULA EM FOCO */}
          <div className="block-item highlight-card">
            <div className="block-media highlight-media">
              <img src={terpineno} alt="γ-Terpineno" className="highlight-img" />
            </div>
            <div className="block-info">
              <span className="badge molecule">{t("badge_molecule_focus", "MOLÉCULA EM FOCO")}</span>
              <h3>γ-Terpineno</h3>
              <p>{t("terpineno_desc", "Propriedades e alvos investigados.")}</p>
              <Link to="/fisiopatologia" className="link-more">{t("learn_more", "Saiba mais")} &rarr;</Link>
            </div>
          </div>

          {/* BLOCO 4: NEWSLETTER */}
          <div className="block-item newsletter-card">
            <h2>{t("newsletter_title", "Receba novidades do Plantamente")}</h2>
            <p>{t("newsletter_subtitle", "Artigos, atualizações e novos conteúdos.")}</p>

            <form onSubmit={handleNewsletter} className="newsletter-form">
              <input
                type="email"
                placeholder={t("newsletter_placeholder", "Seu e-mail")}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit">&gt;</button>
            </form>

            <div className="social-links-block">
              <p>{t("follow_us", "Siga-nos")}</p>
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
            <span className="footer-subtitle">{t("site_tagline", "PLANTAS • CIÊNCIA • CÉREBRO")}</span>
          </div>

          <div className="footer-links">
            <Link to="/apresentacao">{t("footer_presentation", "Apresentação")}</Link>
            <span className="divider">|</span>
            <Link to="/termos">{t("footer_terms", "Termos de uso")}</Link>
            <span className="divider">|</span>
            <Link to="/privacidade">{t("footer_privacy", "Política de privacidade")}</Link>
            <span className="divider">|</span>
            <Link to="/contato">{t("footer_contact", "Contato")}</Link>
          </div>

          <div className="footer-partners">
            <img src={logosParceiros} alt="Apoiadores: UFPI, PPGFarm, NPPM, LAFAC-UFPI" />
          </div>
        </div>
      </footer>
    </div>
  );
}
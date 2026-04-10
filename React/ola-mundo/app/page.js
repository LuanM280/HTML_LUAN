"use client";
import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const [theme, setTheme] = useState("light");

  // Load saved theme securely preventing hydration errors
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  return (
    <div className="theme-wrapper" data-theme={theme}>
      {/* NAVBAR */}
      <nav className="navbar">
        <a className="brand" href="#">
          EvoTech
        </a>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
          </button>
          <a href="#oferta" className="btn-outline">
            Ver Oferta
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-content">
          <span className="hero-badge">Lançamento Exclusivo</span>
          <h1 className="hero-title">
            Transforme sua Produtividade <br /> com a Tecnologia do Futuro
          </h1>
          <p className="hero-subtitle">
            O EvoTech é o sistema definitivo criado para otimizar seu fluxo de trabalho, poupar seu tempo e triplicar os seus resultados em menos de 30 dias.
          </p>
          <div className="hero-actions">
            <a href="#oferta" className="btn-primary">Comprar Agora →</a>
            <a href="#detalhes" className="btn-secondary">Saber Mais</a>
          </div>
        </div>
      </header>

      {/* FEATURES / BENEFITS */}
      <section id="detalhes" className="features">
        <h2 className="section-title">Por que escolher o EvoTech?</h2>
        <p className="section-subtitle">Desenvolvido com tecnologia de ponta para entregar a melhor experiência.</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Performance Extrema</h3>
            <p>Execute múltiplas tarefas simultaneamente com nossa otimização em nuvem que garante velocidade absurda sem travamentos.</p>
          </div>

          <div className="feature-card highlight">
            <div className="feature-icon">🛡️</div>
            <h3>Segurança Impecável</h3>
            <p>Sistema de criptografia nativo de ponta-a-ponta. Seus dados e da sua equipe sempre seguros contra qualquer ameaça.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Fácil Configuração</h3>
            <p>Com apenas três cliques você integra a ferramenta ao seu negócio. Design intuitivo feito para quem não quer perder tempo.</p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="testimonials">
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3.5rem" }}>Quem usa, recomenda.</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="quote">"O EvoTech simplesmente salvou a minha empresa. Ganhamos mais de 40 horas semanais por conta das automações."</p>
            <div className="author">
              <div className="author-name">Mariana Costa</div>
              <div className="author-title">CEO da InnovaCorp</div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">"Nenhuma outra plataforma chegou perto dessa facilidade. O design e as funcionalidades são de outro mundo."</p>
            <div className="author">
              <div className="author-name">Ricardo Almeida</div>
              <div className="author-title">Diretor de Operações</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / CTA */}
      <section id="oferta" className="pricing">
        <div className="pricing-wrapper">
          <div className="pricing-info">
             <h2>Ação Exclusiva!</h2>
             <p>Assinando hoje, você garante o plano Premium com preço de desconto vitalício, além de acesso imediato às próximas atualizações.</p>
             <div className="included-box">
                <h4>O que está incluso:</h4>
                <ul className="pricing-list">
                  <li>1 Usuário e Dispositivos ilimitados</li>
                  <li>Automações avançadas de sistema</li>
                  <li>Suporte VIP e Consultoria 24/7</li>
                  <li>Garantia de 30 dias incondicional</li>
                </ul>
             </div>
          </div>
          
          <div className="pricing-card-container">
            <div className="pricing-card">
               <div className="pricing-header">Plano Premium Vitalício</div>
               <div className="pricing-body">
                  <div className="price-strike">R$ 197,00</div>
                  <div className="price-current">
                    <span className="price-currency">R$</span>97
                  </div>
                  <div className="price-period">/mês</div>
                  
                  <div className="savings-badge">Você economiza 50% hoje!</div>
                  
                  <button className="btn-buy">Quero Meu Acesso Agora</button>
                  
                  <div className="security-note">
                    Cancele quando quiser. Menos de R$3,25 ao dia! <br/>
                    Compra protegida com criptografia de ponta
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p className="footer-text">&copy; {new Date().getFullYear()} EvoTech Solutions. Todos os direitos reservados.</p>
        <div className="footer-links">
           <a href="#">Termos de Uso</a>
           <a href="#">Privacidade</a>
           <a href="#">Contato</a>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from 'next/link';

export default function About() {
  return (
    <div>
      <div className="glow-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="bg-grid"></div>

      <nav className="nav-bar">
        <div className="logo">⚡ KODEX AI</div>
        <ul className="nav-links">
          <li><a href="/" target="_blank">HOME</a></li>
          <li><a href="/services" target="_blank">SERVICES</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/portfolio" target="_blank">PORTFOLIO</a></li>
          <li><a href="/contact" target="_blank">CONTACT</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>ABOUT KODEX AI</h1>
          <p>🚀 TRANSFORMING BUSINESSES WITH TECHNOLOGY 🚀</p>
        </div>
      </section>

      <section className="section container">
        <h2>📖 OUR STORY 📖</h2>
        <div style={{background: 'rgba(0, 255, 136, 0.1)', border: '2px solid #00ff88', borderRadius: '15px', padding: '30px', marginBottom: '40px'}}>
          <p style={{color: '#aaffff', fontSize: '18px', lineHeight: '1.8'}}>
            Founded in 2015, KODEX AI has been at the forefront of technological innovation. We started with a simple mission: 
            to make cutting-edge technology accessible to businesses of all sizes. Today, we serve over 1000+ clients across 50+ countries.
          </p>
        </div>
      </section>

      <section className="section container">
        <h2>💪 OUR TEAM 💪</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">👨‍💼</div>
            <h3>EXPERIENCED DEVELOPERS</h3>
            <p>Certified engineers with 10+ years in full-stack development, AI/ML, and cloud architecture.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎓</div>
            <h3>CONTINUOUS LEARNING</h3>
            <p>Our team stays updated with latest technologies, certifications, and industry best practices.</p>
          </div>
          <div className="card">
            <div className="card-icon">🌍</div>
            <h3>GLOBAL REACH</h3>
            <p>With offices in 5 countries, we provide round-the-clock support and development services.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>🎯 OUR VALUES 🎯</h2>
        <div className="cards-grid">
          <div className="card" style={{textAlign: 'center'}}>
            <div className="card-icon">🏆</div>
            <h3>EXCELLENCE</h3>
            <p>We deliver only the highest quality solutions and services.</p>
          </div>
          <div className="card" style={{textAlign: 'center'}}>
            <div className="card-icon">🤝</div>
            <h3>PARTNERSHIP</h3>
            <p>Your success is our success. We work as your trusted tech partner.</p>
          </div>
          <div className="card" style={{textAlign: 'center'}}>
            <div className="card-icon">💡</div>
            <h3>INNOVATION</h3>
            <p>We constantly innovate to bring cutting-edge solutions to our clients.</p>
          </div>
        </div>
      </section>

      <section className="section container" style={{textAlign: 'center'}}>
        <h2>📊 BY THE NUMBERS 📊</h2>
        <div className="cards-grid">
          <div className="card">
            <div style={{fontSize: '48px', color: '#00ff88'}}>10+</div>
            <h3>YEARS</h3>
            <p>Industry Experience</p>
          </div>
          <div className="card">
            <div style={{fontSize: '48px', color: '#00ffff'}}>50+</div>
            <h3>TEAM</h3>
            <p>Expert Professionals</p>
          </div>
          <div className="card">
            <div style={{fontSize: '48px', color: '#ff00ff'}}>99.9%</div>
            <h3>SUCCESS</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      <section className="section container" style={{textAlign: 'center'}}>
        <h2>🤝 LET'S WORK TOGETHER 🤝</h2>
        <button className="cta-button">CONTACT US</button>
      </section>

      <footer className="footer container">
        <h3>⚡ KODEX AI ⚡</h3>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services" target="_blank">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact" target="_blank">Contact</a></li>
        </ul>
        <p style={{marginTop: '30px', opacity: 0.7}}>© 2026 KODEX AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

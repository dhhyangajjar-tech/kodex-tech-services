"use client";

export default function Portfolio() {
  const projects = [
    { title: 'AI Chatbot Platform', category: 'AI/ML', icon: '🤖' },
    { title: 'E-Commerce Platform', category: 'Web Dev', icon: '🛒' },
    { title: 'Fitness Mobile App', category: 'Mobile', icon: '📱' },
    { title: 'Analytics Dashboard', category: 'Data', icon: '📊' },
    { title: 'Cloud Migration', category: 'Cloud', icon: '☁️' },
    { title: 'Security Audit', category: 'Security', icon: '🔒' },
  ];

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
          <li><a href="/about" target="_blank">ABOUT</a></li>
          <li><a href="/portfolio">PORTFOLIO</a></li>
          <li><a href="/contact" target="_blank">CONTACT</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>OUR PORTFOLIO</h1>
          <p>🎯 SHOWCASE OF SUCCESS STORIES 🎯</p>
        </div>
      </section>

      <section className="section container">
        <h2>🏆 RECENT PROJECTS 🏆</h2>
        <div className="cards-grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="card-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <p style={{marginTop: '10px'}}>Check out our latest work and success stories from real clients.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>🎬 PROJECT SHOWCASE 🎬</h2>
        <div className="image-box">📹 VIDEO CASE STUDIES</div>
      </section>

      <section className="section container" style={{textAlign: 'center'}}>
        <h2>💬 CLIENT TESTIMONIALS 💬</h2>
        <div className="cards-grid">
          <div className="card">
            <p style={{fontSize: '24px', marginBottom: '20px'}}>⭐⭐⭐⭐⭐</p>
            <p>"KODEX AI transformed our business with their innovative solutions. Highly recommended!" - CEO, TechCorp</p>
          </div>
          <div className="card">
            <p style={{fontSize: '24px', marginBottom: '20px'}}>⭐⭐⭐⭐⭐</p>
            <p>"The best tech team I've worked with. Professional, innovative, and on-time delivery." - Founder, StartupXYZ</p>
          </div>
          <div className="card">
            <p style={{fontSize: '24px', marginBottom: '20px'}}>⭐⭐⭐⭐⭐</p>
            <p>"Exceptional service and support. They truly understand our business needs." - Manager, BigCorp</p>
          </div>
        </div>
      </section>

      <section className="section container" style={{textAlign: 'center'}}>
        <h2>🚀 WANT YOUR PROJECT HERE? 🚀</h2>
        <button className="cta-button">START YOUR PROJECT</button>
      </section>

      <footer className="footer container">
        <h3>⚡ KODEX AI ⚡</h3>
        <ul className="footer-links">
          <li><a href="/" target="_blank">Home</a></li>
          <li><a href="/services" target="_blank">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact" target="_blank">Contact</a></li>
        </ul>
        <p style={{marginTop: '30px', opacity: 0.7}}>© 2026 KODEX AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

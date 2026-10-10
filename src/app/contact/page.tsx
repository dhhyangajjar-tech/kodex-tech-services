"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

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
          <li><a href="/portfolio" target="_blank">PORTFOLIO</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>GET IN TOUCH</h1>
          <p>📞 LET'S START YOUR PROJECT TODAY 📞</p>
        </div>
      </section>

      <section className="section container">
        <h2>💬 CONTACT US 💬</h2>
        <div style={{maxWidth: '600px', margin: '50px auto'}}>
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(0, 255, 136, 0.1)',
            border: '2px solid #00ff88',
            borderRadius: '15px',
            padding: '30px'
          }}>
            <div style={{marginBottom: '20px'}}>
              <label style={{color: '#00ffff', display: 'block', marginBottom: '10px', fontWeight: 'bold'}}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(0, 255, 136, 0.1)',
                  border: '2px solid #00ff88',
                  borderRadius: '8px',
                  color: '#00ffff',
                  fontFamily: 'inherit',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{marginBottom: '20px'}}>
              <label style={{color: '#00ffff', display: 'block', marginBottom: '10px', fontWeight: 'bold'}}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(0, 255, 136, 0.1)',
                  border: '2px solid #00ff88',
                  borderRadius: '8px',
                  color: '#00ffff',
                  fontFamily: 'inherit',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{marginBottom: '20px'}}>
              <label style={{color: '#00ffff', display: 'block', marginBottom: '10px', fontWeight: 'bold'}}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(0, 255, 136, 0.1)',
                  border: '2px solid #00ff88',
                  borderRadius: '8px',
                  color: '#00ffff',
                  fontFamily: 'inherit',
                  fontSize: '16px'
                }}
              />
            </div>
            <button type="submit" className="cta-button" style={{width: '100%'}}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <section className="section container">
        <h2>📍 OUR LOCATIONS 📍</h2>
        <div className="cards-grid">
          <div className="card" style={{textAlign: 'center'}}>
            <div className="card-icon">🇮🇳</div>
            <h3>INDIA</h3>
            <p>Bangalore, Mumbai, Delhi</p>
            <p>+91 9909901976</p>
          </div>
          <div className="card" style={{textAlign: 'center'}}>
            <div className="card-icon">🇺🇸</div>
            <h3>USA</h3>
            <p>New York, San Francisco</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="card" style={{textAlign: 'center'}}>
            <div className="card-icon">🇬🇧</div>
            <h3>UK</h3>
            <p>London, Manchester</p>
            <p>+44 (0) 20 7946 0958</p>
          </div>
        </div>
      </section>

      <section className="section container" style={{textAlign: 'center'}}>
        <h2>⏰ BUSINESS HOURS ⏰</h2>
        <div style={{fontSize: '18px', color: '#00ffff', lineHeight: '1.8'}}>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: CLOSED</p>
        </div>
      </section>

      <footer className="footer container">
        <h3>⚡ KODEX AI ⚡</h3>
        <ul className="footer-links">
          <li><a href="/" target="_blank">Home</a></li>
          <li><a href="/services" target="_blank">Services</a></li>
          <li><a href="/about" target="_blank">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <p style={{marginTop: '30px', opacity: 0.7}}>© 2026 KODEX AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

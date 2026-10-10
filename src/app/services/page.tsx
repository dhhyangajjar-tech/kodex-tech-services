"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.card').forEach((el) => observer.observe(el));
  }, []);

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
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/about" target="_blank">ABOUT</a></li>
          <li><a href="/portfolio" target="_blank">PORTFOLIO</a></li>
          <li><a href="/contact" target="_blank">CONTACT</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>OUR SERVICES</h1>
          <p>🔧 COMPREHENSIVE TECH SOLUTIONS 🔧</p>
        </div>
      </section>

      <section className="section container">
        <h2>💼 WHAT WE OFFER 💼</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>AI & MACHINE LEARNING</h3>
            <p>Custom AI models, natural language processing, computer vision, and predictive analytics to automate your business processes.</p>
          </div>
          <div className="card">
            <div className="card-icon">🌐</div>
            <h3>WEB DEVELOPMENT</h3>
            <p>Full-stack web applications built with React, Next.js, Node.js, and modern frameworks for optimal performance.</p>
          </div>
          <div className="card">
            <div className="card-icon">📱</div>
            <h3>MOBILE DEVELOPMENT</h3>
            <p>iOS and Android apps using Flutter, React Native, and native technologies with beautiful UX design.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎨</div>
            <h3>UI/UX DESIGN</h3>
            <p>User-centric design solutions with wireframing, prototyping, and interactive mockups for all platforms.</p>
          </div>
          <div className="card">
            <div className="card-icon">☁️</div>
            <h3>CLOUD INFRASTRUCTURE</h3>
            <p>AWS, Google Cloud, and Azure deployments with auto-scaling, CDN, and 24/7 monitoring.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔐</div>
            <h3>CYBERSECURITY</h3>
            <p>Penetration testing, vulnerability assessments, encryption, and compliance solutions.</p>
          </div>
          <div className="card">
            <div className="card-icon">📊</div>
            <h3>DATA ANALYTICS</h3>
            <p>Big data solutions, data warehouse design, and business intelligence dashboards.</p>
          </div>
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>DEVOPS & CI/CD</h3>
            <p>Automated deployment pipelines, containerization, and continuous integration/deployment.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>DIGITAL MARKETING</h3>
            <p>SEO, SEM, content marketing, and social media strategies to grow your online presence.</p>
          </div>
        </div>
      </section>

      <section className="section container" style={{textAlign: 'center'}}>
        <h2>💡 SPECIALIZED SERVICES 💡</h2>
        <div className="image-box">🛠️ CUSTOM SOLUTIONS FOR YOUR NEEDS</div>
        <p style={{fontSize: '18px', marginTop: '30px'}}>
          We tailor our services to fit your specific business requirements and budget constraints.
        </p>
      </section>

      <section className="section container" style={{textAlign: 'center'}}>
        <h2>🚀 READY TO GET STARTED? 🚀</h2>
        <button className="cta-button">BOOK CONSULTATION</button>
      </section>

      <footer className="footer container">
        <h3>⚡ KODEX AI ⚡</h3>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about" target="_blank">About</a></li>
          <li><a href="/contact" target="_blank">Contact</a></li>
        </ul>
        <p style={{marginTop: '30px', opacity: 0.7}}>© 2026 KODEX AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

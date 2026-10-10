"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.card, .section').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      {/* Background effects */}
      <div className="glow-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="bg-grid"></div>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="logo">⚡ KODEX AI</div>
        <ul className="nav-links">
          <li><a href="#">HOME</a></li>
          <li><a href="/services" target="_blank">SERVICES</a></li>
          <li><a href="/about" target="_blank">ABOUT</a></li>
          <li><a href="/portfolio" target="_blank">PORTFOLIO</a></li>
          <li><a href="/contact" target="_blank">CONTACT</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>KODEX AI TECH</h1>
          <p>🤖 CUTTING-EDGE AI SOLUTIONS FOR YOUR FUTURE 🤖</p>
          <button className="cta-button">GET STARTED</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="section container">
        <h2>⚙️ OUR CAPABILITIES ⚙️</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">🧠</div>
            <h3>AI ALGORITHMS</h3>
            <p>Advanced machine learning models trained on massive datasets for superior performance.</p>
          </div>
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>WEB DEVELOPMENT</h3>
            <p>High-performance web applications with cutting-edge technologies and frameworks.</p>
          </div>
          <div className="card">
            <div className="card-icon">📱</div>
            <h3>MOBILE APPS</h3>
            <p>Native and cross-platform mobile solutions for iOS and Android platforms.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎨</div>
            <h3>UI/UX DESIGN</h3>
            <p>Beautiful, intuitive interfaces designed for optimal user experience and engagement.</p>
          </div>
          <div className="card">
            <div className="card-icon">☁️</div>
            <h3>CLOUD SOLUTIONS</h3>
            <p>Scalable cloud infrastructure built on AWS, Google Cloud, and Azure platforms.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔒</div>
            <h3>CYBERSECURITY</h3>
            <p>Enterprise-grade security solutions to protect your digital assets and data.</p>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="section container">
        <h2>🎯 INNOVATIVE SOLUTIONS 🎯</h2>
        <div className="image-box">📊 AI ANALYTICS DASHBOARD</div>
        <p style={{textAlign: 'center', color: '#00ffff', fontSize: '18px'}}>
          Experience the power of artificial intelligence integrated into every aspect of your business.
        </p>
      </section>

      {/* Stats Section */}
      <section className="section container">
        <h2>📈 BY THE NUMBERS 📈</h2>
        <div className="cards-grid">
          <div className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize: '48px', color: '#00ff88', marginBottom: '10px'}}>500+</div>
            <h3>PROJECTS</h3>
            <p>Completed successful projects worldwide</p>
          </div>
          <div className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize: '48px', color: '#00ffff', marginBottom: '10px'}}>1000+</div>
            <h3>CLIENTS</h3>
            <p>Satisfied clients from 50+ countries</p>
          </div>
          <div className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize: '48px', color: '#ff00ff', marginBottom: '10px'}}>99.9%</div>
            <h3>UPTIME</h3>
            <p>Guaranteed service availability</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section container" style={{textAlign: 'center'}}>
        <h2>🚀 READY TO TRANSFORM YOUR BUSINESS? 🚀</h2>
        <p style={{fontSize: '20px', margin: '30px 0'}}>Join hundreds of companies leveraging AI-powered solutions</p>
        <button className="cta-button">START YOUR PROJECT TODAY</button>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <h3>⚡ KODEX AI ⚡</h3>
        <p>Powering the future with artificial intelligence</p>
        <ul className="footer-links">
          <li><a href="/services" target="_blank">Services</a></li>
          <li><a href="/about" target="_blank">About</a></li>
          <li><a href="/contact" target="_blank">Contact</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
        <p style={{marginTop: '30px', opacity: 0.7}}>© 2026 KODEX AI. All rights reserved. | Powered by Next.js</p>
      </footer>
    </div>
  );
}

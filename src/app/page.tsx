export default function Home() {
  const services = [
    {
      title: 'Web Designing & Development',
      text: 'Stunning, responsive and user-friendly websites that represent your brand and engage your audience.',
      accent: 'blue',
    },
    {
      title: 'Android & iOS App Development',
      text: 'Powerful mobile applications for Android & iOS platforms that deliver seamless performance and great user experience.',
      accent: 'green',
    },
    {
      title: 'Multimedia Solution',
      text: 'Creative multimedia services including animation, video editing, motion graphics, 2D/3D design and more to bring your ideas to life.',
      accent: 'violet',
    },
    {
      title: 'AND LOTS MORE',
      text: 'Software Development, UI/UX Design, Digital Marketing, E-Commerce Solutions, IT Consulting, Maintenance & Support, and more...',
      accent: 'cyan',
      list: true,
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Years of Experience' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  const reasons = [
    'Quality & Innovation',
    'Timely Delivery',
    'Client-Centric Approach',
    'Affordable Solutions',
    'Dedicated Support',
  ];

  return (
    <main className="page-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <header className="topbar">
        <nav className="nav-wrap">
          <div className="brand">
            <div className="brand-mark">K</div>
            <span>KODEX</span>
          </div>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#process">Process</a>
            <a href="#projects">Projects</a>
            <button className="primary-btn nav-btn">Get in Touch</button>
          </div>
        </nav>
      </header>

      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">Aesthetic Tech • Modern 2026</p>
          <h1>KODEX TECH SERVICES</h1>
          <h2>ONE STOP, EVERY TECH SOLUTION.</h2>
          <div className="hero-actions">
            <button className="primary-btn">Request a Quote</button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Premium device mockup">
          <div className="device-laptop">
            <div className="screen">
              <div className="screen-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="dashboard">
                <div className="mini-panel large" />
                <div className="mini-row">
                  <div className="mini-panel" />
                  <div className="mini-panel" />
                </div>
                <div className="mini-row">
                  <div className="mini-panel tall" />
                  <div className="mini-panel tall" />
                </div>
              </div>
            </div>
          </div>

          <div className="device-phone">
            <div className="phone-screen">
              <div className="phone-header">KODEX</div>
              <div className="phone-chart" />
              <div className="phone-list">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="floating-card card-one">UI/UX</div>
          <div className="floating-card card-two">Growth</div>
          <div className="floating-card card-three">Cloud</div>
        </div>
      </section>

      <section id="about" className="intro section-pad">
        <div className="intro-panel">
          <div className="portrait-wrap">
            <div className="portrait">
              <div className="portrait-face" />
            </div>
          </div>
          <p>
            At Kodex Tech Services, we turn ideas into reality with innovative technology and creative solutions. Our mission is to empower businesses and individuals with digital solutions that make a difference.
          </p>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="section-heading">
          <h3>OUR SERVICES</h3>
          <span>| All type of Tech Related Solution.</span>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article key={index} className={`service-card ${service.list ? 'list-card' : ''}`}>
              <div className={`service-art accent-${service.accent}`}>
                {service.list ? (
                  <div className="bullet-panel">
                    <div className="bullet-box" />
                    <div className="bullet-box" />
                    <div className="bullet-box" />
                  </div>
                ) : (
                  <div className="mini-preview">
                    <span className="preview-window" />
                    <span className="preview-line" />
                    <span className="preview-line short" />
                  </div>
                )}
              </div>

              {service.list ? (
                <>
                  <h4>AND LOTS MORE</h4>
                  <ul className="bullet-list">
                    <li>Software Development</li>
                    <li>UI/UX Design</li>
                    <li>Digital Marketing</li>
                    <li>E-Commerce Solutions</li>
                    <li>IT Consulting</li>
                    <li>Maintenance & Support</li>
                    <li>and more...</li>
                  </ul>
                </>
              ) : (
                <>
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="why-us section-pad">
        <div className="why-copy">
          <h3>WHY CHOOSE US?</h3>
          <div className="gem-structure">
            <div className="gem-core" />
          </div>
          <ul className="check-list">
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="stats-panel">
          <h3>OUR SUCCESS BY THE NUMBERS.</h3>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission section-pad">
        <div className="mission-card">
          <div className="vision-icon target-icon">
            <span className="target-ring" />
          </div>
          <p>To be a trusted technology partner, delivering innovative solutions that drive growth and create a lasting impact.</p>
        </div>

        <div className="mission-card">
          <div className="vision-icon diamond-icon">
            <span className="diamond-core" />
          </div>
          <p>To deliver cutting-edge, reliable and cost-effective solutions tailored to our clients' unique needs.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-cta">
          <h3>LET&apos;S BUILD SOMETHING AMAZING TOGETHER!</h3>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <span className="contact-icon phone">☎</span>
            <span>+91 990 990 1976</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon email">✉</span>
            <span>dhhyangajjar@gmail.com</span>
          </div>
        </div>

        <div className="legal">
          <span>Terms &amp; Conditions</span>
          <span>Privacy Policy</span>
          <span>© 2026 Kodex Tech Services</span>
        </div>
      </footer>
    </main>
  );
}

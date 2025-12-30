import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">ATHARV<span> INGAVLE</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="about">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Atharv Ingavale</span></h1>
          <h2>Associate MERN Stack Developer</h2>
          <p>
            I build scalable web applications at Comtranse Technology, specializing in 
            React, Node.js, and Python-driven architecture.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn primary">View My Work</a>
            <button className="btn secondary" onClick={() => window.print()}>Download CV</button>
          </div>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section id="stack" className="stack-section">
        <h3>My Tech Stack</h3>
        <div className="stack-grid">
          <div className="stack-item"><i className="fab fa-react"></i> <p>React</p></div>
          <div className="stack-item"><i className="fab fa-node-js"></i> <p>Node.js</p></div>
          <div className="stack-item"><i className="fas fa-database"></i> <p>MySQL & MongoDB</p></div>
          <div className="stack-item"><i className="fab fa-python"></i> <p>Python</p></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h3>Featured Projects</h3>
        <div className="project-container">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-info">
              <h4>Catering Management System</h4>
              <p>Developed interactive UI and management modules using React for catering business operations.</p>
              <div className="tags">
                <span>React</span><span>CSS</span><span>MERN</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-info">
              <h4>Admin Dashboard</h4>
              <p>Created a robust dashboard with Node.js and MySQL for corporate data management.</p>
              <div className="tags">
                <span>Node.js</span><span>MySQL</span><span>Express</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-info">
              <h4>Corporate Website</h4>
              <p>Built a professional corporate presence using Loopback API and modern frontend tools.</p>
              <div className="tags">
                <span>Loopback</span><span>API</span><span>React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h3>Get In Touch</h3>
        <div className="contact-details">
          <p>Email: atharvingavale69@gmail.com</p>
          <p>Phone: 8879142527</p>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2025 Atharv Ingavale. Built with the MERN Stack.</p>
      </footer>
    </div>
  );
}

export default App;
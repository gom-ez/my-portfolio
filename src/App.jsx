import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          AF<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#interests">Interests</a>
          <a href="#goals">Goals</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="welcome">
            WELCOME TO ATIWOTO FOSTER'S PORTFOLIO
          </p>

          <h1>
            Atiwoto <span>Foster</span>
          </h1>

          <h2>Future Engineer & Cybersecurity Enthusiast</h2>

          <p className="description">
            I am passionate about Mechanical Engineering, technology
            and Cybersecurity. I want to use engineering and technology
            to create solutions to real-world problems.
          </p>

          <a href="#about" className="main-button">
            Discover More →
          </a>
        </div>

        <div className="hero-image">
          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
              alt="Engineering"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <p className="label">01 — ABOUT ME</p>

        <h2 className="section-title">Who I Am</h2>

        <div className="about-box">
          <p>
            My name is <strong>Atiwoto Foster</strong>. I am a student
            with a strong interest in Mechanical Engineering,
            technology and computing.
          </p>

          <p>
            I enjoy learning how machines work and exploring how
            technology can be used to solve problems.
          </p>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="section" id="interests">
        <p className="label">02 — MY INTERESTS</p>

        <h2 className="section-title">What I Love</h2>

        <div className="cards">
          <div className="card purple">
            <div className="card-icon">⚙️</div>

            <h3>Mechanical Engineering</h3>

            <p>
              Machines, engines, equipment and mechanical systems
              interest me greatly.
            </p>
          </div>

          <div className="card blue">
            <div className="card-icon">🔐</div>

            <h3>Cybersecurity</h3>

            <p>
              I want to learn how to protect computer systems,
              networks and information.
            </p>
          </div>

          <div className="card dark">
            <div className="card-icon">💻</div>

            <h3>Technology</h3>

            <p>
              I enjoy software development, computers and modern
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="section goals" id="goals">
        <p className="label">03 — MY GOALS</p>

        <h2 className="section-title">My Future</h2>

        <div className="goal-box">
          <div>
            <span>01</span>

            <h3>Mechanical Engineer</h3>

            <p>
              Become a skilled engineer who can design and work
              with machines and mechanical systems.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>Cybersecurity Engineer</h3>

            <p>
              Develop strong cybersecurity skills and learn how
              to protect digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* MACHINERY */}
      <section className="machine-section">
        <div className="machine-text">
          <p className="label">04 — ENGINEERING</p>

          <h2>Built for the Future.</h2>

          <p>
            I am fascinated by heavy machinery and engineering
            equipment such as forklifts and industrial machines.
          </p>

          <div className="machine-tag">
            ⚙️ Future Engineer
          </div>
        </div>

        <div className="machine-card">
          <div className="machine-symbol">🏗️</div>

          <h3>Engineering & Machinery</h3>

          <p>Learning today. Building tomorrow.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <p className="label">05 — CONTACT</p>

        <h2 className="section-title">Let's Connect</h2>

        <p>
          Connect with me through Instagram, GitHub or WhatsApp.
        </p>

        <div className="contact-buttons">
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/shh.sosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            📸 Instagram
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/gom-ez"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/233556769714"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* FLOATING CONTACT BUTTONS */}
      <div className="contact-float">
        <a
          href="https://www.instagram.com/shh.sosa/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-float"
          aria-label="Instagram"
        >
          📸
        </a>

        <a
          href="https://wa.me/233556769714"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="WhatsApp"
        >
          💬
        </a>
      </div>

      {/* FOOTER */}
      <footer>
        © 2026 Atiwoto Foster — My Portfolio
      </footer>
    </div>
  );
}

export default App;
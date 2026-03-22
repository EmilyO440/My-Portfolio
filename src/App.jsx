import "./index.css";

function App() {
return ( <div>

```
  <nav className="nav">
    <h2>Emily.dev</h2>
    <div>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#creative">Creative</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section className="hero">
    <h1>Hi, I'm Emily 👋</h1>
    <p>
      Frontend Developer passionate about building clean modern interfaces,
      creative digital experiences, and meaningful user interactions.
    </p>
  </section>

  <section id="about" className="section">
    <h2>About Me</h2>
    <p>
      I'm a self-taught developer with a background in creative work including
      photography, design, and visual storytelling. I enjoy turning ideas into
      interactive web applications and continuously improving my skills in
      JavaScript and React.
    </p>
    <p>
      I value independence, curiosity, and problem-solving. Whether I am
      traveling, learning new technologies, or building projects from scratch,
      I am motivated by growth and creating meaningful experiences.
    </p>
  </section>

  <section id="projects" className="section">
    <h2>Technical Projects</h2>

    <div className="card">
      <h3>Task Manager App</h3>
      <p>CRUD productivity tool using React state and local storage.</p>
    </div>

    <div className="card">
      <h3>Weather Dashboard</h3>
      <p>API-driven interface displaying real-time weather data.</p>
    </div>

    <div className="card">
      <h3>Responsive UI Landing Page</h3>
      <p>Modern layout using Flexbox, Grid, and clean UX principles.</p>
    </div>

  </section>

  <section id="creative" className="section">
    <h2>Creative Work</h2>

    <div className="card">
      <h3>Photography</h3>
      <p>
        Experience capturing landscapes, architecture, and candid moments.
        Skilled in composition, lighting awareness, and visual storytelling.
      </p>
    </div>

    <div className="card">
      <h3>Design & Visual Content</h3>
      <p>
        Comfortable using creative tools to design layouts, branding elements,
        and digital visuals that enhance user experience.
      </p>
    </div>

  </section>

  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>Email: emilyobrien64728@yahoo.com</p>
    <p>GitHub: https://github.com/EmilyO440</p>
    <p>Location: Open to remote opportunities and relocation</p>
  </section>

</div>

);
}

export default App;

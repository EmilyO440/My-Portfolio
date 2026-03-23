import "./index.css"

import Amsterdamroof from "./assets/Amsterdam roof.jpg"
import emshibiscus from "./assets/ems hibiscus.JPG"
import motions from "./assets/motions.png"
import redlightdistrict from "./assets/RED LIGHT DISCTRICT.png"
import Glasgowrainynight from "./assets/Rain on a cheerful night. Glasgow, UK.JPG"
import pinkcityamsterdam from "./assets/pink city, Amsterdam, NL.jpg"
import Cambridgeriver from "./assets/Cambridge, UK.JPEG"
import oldTownMoers from "./assets/moers city walk.jpg"
import windowtogermany from "./assets/life through glass, Moers, Germany.png"


function App() {
return ( <div>

```
  <nav className="nav">
    <h2>Emily.dev</h2>
    <div>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#creative">Creative</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section className="hero">
    <img src={me} className="profile" />
    <h1>Emily — Frontend Developer</h1>
    <p>
      I build modern, user-focused web applications with a strong attention
      to design, usability, and clean code structure.
    </p>
  </section>

  <section id="about" className="section">
    <h2>About Me</h2>
    <p>
      I am a frontend developer with a creative background in photography,
      visual design, and digital content creation. My approach combines
      technical problem-solving with thoughtful visual execution.
    </p>

    <p>
      I enjoy learning new technologies, exploring new environments,
      and continuously improving both my development workflow and design
      intuition. I am comfortable working independently and collaborating
      in team-based environments.
    </p>
  </section>

  <section id="skills" className="section">
    <h2>Technical Skills</h2>

    <div className="grid">
      <div className="card">HTML / CSS</div>
      <div className="card">JavaScript</div>
      <div className="card">React</div>
      <div className="card">Responsive Design</div>
      <div className="card">UI / UX Awareness</div>
      <div className="card">Git / Version Control</div>
    </div>
  </section>

  <section id="projects" className="section">
    <h2>Projects</h2>

    <div className="card">
      <h3>Task Manager Application</h3>
      <p>
        A productivity-focused CRUD application built with React and local
        storage for state persistence.
      </p>
    </div>

    <div className="card">
      <h3>Weather Interface</h3>
      <p>
        API-driven weather dashboard featuring responsive layout,
        search functionality, and dynamic data rendering.
      </p>
    </div>

    <div className="card">
      <h3>Personal Portfolio Website</h3>
      <p>
        Modern responsive site designed to showcase technical projects
        alongside creative work and visual storytelling.
      </p>
    </div>

  </section>

  <section id="creative" className="section">
    <h2>Creative Work</h2>

    <p>
      My creative experience in photography and visual composition
      influences how I design layouts, structure content, and build
      engaging user interfaces.
    </p>

    <div className="gallery">
      <section id="creative" className="section">
  <h2>Photography</h2>

  <p>
    Photography has shaped how I think about layout, spacing, balance,
    and storytelling. I enjoy capturing architecture, landscapes,
    and candid moments that reflect mood and perspective.
  </p>

  <div className="gallery">

```
<img src={photo1} alt="Photography work" />
<img src={photo2} alt="Photography work" />
<img src={photo3} alt="Photography work" />
<img src={photo4} alt="Photography work" />
<img src={photo5} alt="Photography work" />
<img src={photo6} alt="Photography work" />
<img src={photo7} alt="Photography work" />
<img src={photo8} alt="Photography work" />
```

  </div>
</section>

    </div>
   </section>

  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>Email: your@email.com</p>
    <p>GitHub: github.com/yourusername</p>
    <p>Available for frontend or junior developer opportunities</p>
  </section>

</div>

)
}

export default App

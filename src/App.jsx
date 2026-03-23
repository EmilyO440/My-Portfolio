import "./index.css"

import hibiscus from "./assets/hibiscus.JPG"
import amsterdamRoof from "./assets/amsterdam-roof.jpg"
import motions from "./assets/motions.png"
import redLightDistrict from "./assets/red-light-district.png"
import glasgowNight from "./assets/glasgow-rainy-night.JPEG"
import pinkAmsterdam from "./assets/pink-city-amsterdam.jpg"
import cambridgeRiver from "./assets/cambridge-river.JPEG"
import moersWalk from "./assets/moers-city-walk.jpg"
import lifeThroughGlass from "./assets/lifethroughglass-moers-germany.png"

function App() {
return ( <div>

```
  <nav className="nav">
    <h2>Emily.dev</h2>
    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#creative">Photography</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section className="hero">
    <img src={hibiscus} className="hero-img" />

    <div className="hero-text">
      <h1>Emily — Frontend Developer</h1>
      <p>
        Creative-minded developer focused on building modern, responsive
        user interfaces with strong visual awareness and attention to detail.
      </p>
    </div>
  </section>

  <section id="about" className="section">
    <h2>About Me</h2>
    <p>
      I am a frontend developer with experience in web design, customer-focused
      roles, and creative digital work including photography and visual content.
      I enjoy building clean user interfaces, learning new technologies,
      and improving my problem-solving skills.
    </p>
    <p>
      My background includes administrative and client-facing work which
      strengthened my communication skills, organization, and ability to
      work independently.
    </p>
  </section>

  <section id="skills" className="section">
    <h2>Technical Skills</h2>

    <div className="grid">
      <div className="card">HTML</div>
      <div className="card">CSS</div>
      <div className="card">JavaScript</div>
      <div className="card">React</div>
      <div className="card">Responsive Design</div>
      <div className="card">Git / GitHub</div>
      <div className="card">UI / UX Awareness</div>
      <div className="card">VS Code</div>
    </div>
  </section>

  <section id="experience" className="section">
    <h2>Professional Experience</h2>

    <div className="card">
      <h3>Administrative / Client Support Roles</h3>
      <p>
        Experience managing documentation, assisting clients,
        coordinating communication, and maintaining organized workflows.
      </p>
    </div>

    <div className="card">
      <h3>Creative & Digital Work</h3>
      <p>
        Developed visual content, photography projects, and design layouts
        demonstrating strong composition and storytelling awareness.
      </p>
    </div>

  </section>

  <section id="creative" className="section">
    <h2>Photography</h2>

    <div className="gallery">
      <img src={amsterdamRoof} />
      <img src={motions} />
      <img src={redLightDistrict} />
      <img src={glasgowNight} />
      <img src={pinkAmsterdam} />
      <img src={cambridgeRiver} />
      <img src={moersWalk} />
      <img src={lifeThroughGlass} />
    </div>
  </section>

  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>Email: your@email.com</p>
    <p>GitHub: github.com/EmilyO440</p>
    <p>Location: Open to onsite, hybrid, or remote opportunities</p>
  </section>

</div>

)
}

export default App

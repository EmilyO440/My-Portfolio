import "./index.css"

import hibiscus from "./assets/hibiscus.JPG"
import amsterdamRoof from "./assets/amsterdam-roof.jpg"
import motions from "./assets/motions.png"
import redLightDistrict from "./assets/red-light-district.png"
import glasgowNight from "./assets/glasgow-rainy-night.JPEG"
import pinkAmsterdam from "./assets/pink-city-amsterdam.jpg"
import cambridgeRiver from "./assets/cambridge-river.JPEG"
import moersWalk from "./assets/moers-city-walk.jpg"
import moonlight from "./assets/moonlight.JPEG"
import farmperspective from "./assets/farm-perspective.JPEG"
import canalsandboats from "./assets/canals-and-boats.JPEG"
import dusseldorf from "./assets/dusseldorf-night.JPEG"
import busylife from "./assets/busy-life.JPEG"

function App() {
  return (
    <div>

      {/* NAV */}
      <nav className="nav">
        <h2 className="logo">Emily O’Brien</h2>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#creative">Photography</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src={hibiscus} className="hero-img" />

        <div className="hero-text">
          <h1 className="main-name">Emily O’Brien</h1>
          <p className="role">Frontend Developer</p>

          <p>
            I build clean, modern interfaces with a strong focus on layout,
            usability, and visual clarity. I care about how things actually
            feel to use, not just how they look.
          </p>

          <p>
            My background in customer-facing roles and creative work gives me a
            different perspective when it comes to building user experiences.
            I pay attention to details that affect how people interact with a
            product, not just how it functions.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Personal Portfolio</h3>
          <p>
            Built with React and custom CSS. Focused on layout, responsiveness,
            and creating a clean structure that showcases both technical and
            creative work.
          </p>
          <a href="#">View Project</a>
        </div>

        <div className="project-card">
  <h3>TaskFlow</h3>
  <p>
    A task management app for organizing tasks, setting priorities,
    and tracking progress.
  </p>

  <div className="project-links">
    <a href="https://my-taskflow-manager-app.netlify.app/" target="_blank">
      Live
    </a>
    <a href="https://github.com/EmilyO440" target="_blank">
      Code
    </a>
  </div>
</div>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I’m a frontend developer with a background in photography, design,
          and customer-facing roles. I’ve always been drawn to how things look,
          feel, and function together.
        </p>

        <p>
          I’ve worked in fast-paced environments where communication,
          organization, and problem solving were important every day. That
          experience carries into how I approach development.
        </p>

        <p>
          I’m currently focused on building real projects, improving my React
          skills, and becoming more confident in creating full user interfaces
          from start to finish.
        </p>
      </section>

      <section id="skills" className="section">
  <h2>Skills</h2>

  <div className="skills-grid">

    <div className="skill-box">
      <h3>Frontend</h3>
      <p>HTML, CSS, JavaScript, React</p>
    </div>

    <div className="skill-box">
      <h3>Design & UI</h3>
      <p>Responsive Design, Layout, Spacing, Visual Hierarchy</p>
    </div>

    <div className="skill-box">
      <h3>Tools</h3>
      <p>Git, GitHub, VS Code, Chrome DevTools</p>
    </div>

    <div className="skill-box">
      <h3>Workflow</h3>
      <p>Debugging, Component Structure, API Basics</p>
    </div>

    <div className="skill-box">
      <h3>Strengths</h3>
      <p>Communication, Organization, Problem Solving</p>
    </div>

    <div className="skill-box">
      <h3>Creative</h3>
      <p>Photography, Visual Thinking, Content Awareness</p>
    </div>

  </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Customer Service & Operations</h3>
          <p>
            Worked in fast-paced environments handling customers, solving
            issues, and managing responsibilities under pressure. Developed
            strong communication and problem-solving skills.
          </p>
        </div>

        <div className="card">
          <h3>Independent Web Development</h3>
          <p>
            Built personal projects using modern JavaScript and React,
            focusing on responsive layouts, usability, and improving
            development workflow.
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
          <img src={moonlight} />
          <img src={farmperspective} />
          <img src={canalsandboats} />
          <img src={dusseldorf} />
          <img src={busylife} />
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: emilyobrien64728@yahoo.com</p>
        <p>GitHub: github.com/EmilyO440</p>
        <p>Open to remote, hybrid, and international opportunities</p>
      </section>

    </div>
  )
}

export default App

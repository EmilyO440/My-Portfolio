import "./index.css";

import hibiscus from "./assets/hibiscus.JPG";
import amsterdamRoof from "./assets/amsterdam-roof.jpg";
import motions from "./assets/motions.png";
import redLightDistrict from "./assets/red-light-district.png";
import glasgowNight from "./assets/glasgow-rainy-night.JPEG";
import pinkAmsterdam from "./assets/pink-city-amsterdam.jpg";
import cambridgeRiver from "./assets/cambridge-river.JPEG";
import moersWalk from "./assets/moers-city-walk.jpg";
import moonlight from "./assets/moonlight.JPEG";
import farmperspective from "./assets/farm-perspective.JPEG";
import canalsandboats from "./assets/canals-and-boats.JPEG";
import dusseldorf from "./assets/dusseldorf-night.JPEG";
import busylife from "./assets/busy-life.JPEG";

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
            usability, and visual clarity.
          </p>

          <p>
            My background in customer-facing roles and creative work gives me a
            strong perspective when building user experiences.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Personal Portfolio</h3>
          <p>
            Built with React and custom CSS. Focused on layout,
            responsiveness, and clean structure.
          </p>
          <a href="#">View Project</a>
        </div>

        {/* ✅ FIXED: using SAME card class */}
        <div className="card">
          <h3>TaskFlow</h3>
          <p>
            A responsive task management app featuring priority levels,
            deadlines, and real-time progress tracking.
          </p>

          <div className="project-links">
            <a href="https://my-taskflow-manager-app.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I’m a frontend developer with a background in photography, design,
          and customer-facing roles.
        </p>

        <p>
          I’ve worked in fast-paced environments where communication,
          organization, and problem solving were essential.
        </p>

        <p>
          I’m focused on building real projects and becoming more confident
          creating full user interfaces.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-box">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skill-box">
            <h3>Design & UI</h3>
            <p>Responsive Design, Layout, Visual Hierarchy</p>
          </div>

          <div className="skill-box">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </div>

          <div className="skill-box">
            <h3>Workflow</h3>
            <p>Debugging, Component Structure</p>
          </div>

          <div className="skill-box">
            <h3>Strengths</h3>
            <p>Communication, Organization, Problem Solving</p>
          </div>

          <div className="skill-box">
            <h3>Creative</h3>
            <p>Photography, Visual Thinking</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Customer Service & Operations</h3>
          <p>
            Worked in fast-paced environments handling customers and solving problems.
          </p>
        </div>

        <div className="card">
          <h3>Independent Web Development</h3>
          <p>
            Built personal projects using React with a focus on usability and layout.
          </p>
        </div>
      </section>

      {/* PHOTOGRAPHY */}
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

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: emilyobrien64728@yahoo.com</p>
        <p>GitHub: github.com/EmilyO440</p>
        <p>Open to remote, hybrid, and international opportunities</p>
      </section>

    </div>
  );
}

export default App;

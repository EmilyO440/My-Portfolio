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
return ( <div>

```
  <nav className="nav">
    <h2>Emily.dev</h2>
    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#creative">Photography</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section className="hero">
    <img src={hibiscus} className="hero-img" />
    <div className="hero-text">
      <h1>Emily — Frontend Developer</h1>
      <p>
        Frontend developer focused on building clean, modern and responsive
        web interfaces with strong visual awareness and attention to detail.
      </p>
    </div>
  </section>

  <section id="about" className="section">
    <h2>About Me</h2>

    <p>
      I am a frontend developer with a creative background in photography,
      digital design, and client-focused administrative work. I enjoy
      building user-friendly web interfaces that balance functionality with
      visual clarity.
    </p>

    <p>
      My professional experience includes working in fast-paced environments
      where organization, communication, and problem-solving were essential.
      These roles helped me develop strong attention to detail, adaptability,
      and the ability to work both independently and within teams.
    </p>

    <p>
      I am currently focused on strengthening my technical skills through
      real-world development projects using JavaScript and React while
      continuing to expand my understanding of modern web technologies.
    </p>

    <p>
      Outside of development, I am passionate about travel, language
      learning, and visual storytelling. These interests influence how I
      approach layout design, user experience, and creative problem solving.
    </p>
  </section>

  <section id="skills" className="section">
    <h2>Technical Skills</h2>

    <div className="grid">
      <div className="card">
        <h3>Frontend Development</h3>
        <p>HTML, CSS, JavaScript, React</p>
      </div>

      <div className="card">
        <h3>Design & UX Awareness</h3>
        <p>Responsive Layouts, Visual Hierarchy, Layout Composition</p>
      </div>

      <div className="card">
        <h3>Tools & Workflow</h3>
        <p>Git, GitHub, VS Code, Chrome DevTools</p>
      </div>

      <div className="card">
        <h3>Development Concepts</h3>
        <p>Component Structure, State Basics, API Integration</p>
      </div>

      <div className="card">
        <h3>Professional Strengths</h3>
        <p>Problem Solving, Communication, Organization, Adaptability</p>
      </div>
    </div>
  </section>

  <section id="experience" className="section">
    <h2>Professional Experience</h2>

    <div className="card">
      <h3>Administrative & Operations Support</h3>
      <p>
        Managed documentation systems, coordinated scheduling, and supported
        internal workflows. Maintained accuracy in time-sensitive tasks and
        contributed to overall organizational efficiency.
      </p>
    </div>

    <div className="card">
      <h3>Customer Service Roles</h3>
      <p>
        Assisted customers, handled inquiries, and resolved issues in
        fast-paced environments. Developed strong interpersonal skills and
        the ability to remain solution-focused under pressure.
      </p>
    </div>

    <div className="card">
      <h3>Creative & Digital Projects</h3>
      <p>
        Produced photography and visual content while exploring layout
        design and digital presentation. Built an understanding of visual
        storytelling and user engagement.
      </p>
    </div>

    <div className="card">
      <h3>Independent Web Development</h3>
      <p>
        Designed and developed personal frontend projects including
        productivity tools, responsive layouts, and API-driven interfaces
        using modern JavaScript and React.
      </p>
    </div>
  </section>

  <section id="education" className="section">
    <h2>Education & Technical Training</h2>

    <div className="card">
      <h3>Frontend Development Coursework</h3>
      <p>
        Completed structured learning covering HTML, CSS, JavaScript
        fundamentals, React basics, and version control using Git.
      </p>
    </div>

    <div className="card">
      <h3>Ongoing Skill Development</h3>
      <p>
        Continuously building projects to strengthen debugging ability,
        improve UI implementation, and gain experience with real development
        workflows.
      </p>
    </div>

    <div className="card">
      <h3>Additional Interests</h3>
      <p>
        Language learning, international travel, and creative digital work
        which contribute to adaptability and a global perspective.
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
    <p>Open to onsite, hybrid, remote, and international opportunities</p>
  </section>

</div>

)
}

export default App

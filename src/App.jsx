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

      <nav className="nav">
        <h2 className="logo">My Portfolio</h2>
        <div className="nav-links">
          <a href="#projects">Projects</a>
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
          <h1 className="main-name">Emily O'Brien</h1>
          <p className="role">Remote Operations & Administrative Professional</p>

          <p>
            I provide high-level administrative and operational support to busy
            professionals remotely. Organized, proactive, and built for remote work.
          </p>

          <p>
            My background spans legal operations, client management, and workflow
            coordination across fast-paced environments.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>TaskFlow</h3>
          <p>
            A responsive task management app featuring priority levels,
            deadlines, and real-time progress tracking — built to help people
            organize, prioritize, and stay on top of what matters.
          </p>
          <div className="project-links">
            <a href="https://my-taskflow-manager-app.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440/TaskFlow-App" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Personal Portfolio</h3>
          <p>
            Built with React and custom CSS. Focused on layout,
            responsiveness, and clean structure.
          </p>
          <div className="project-links">
            <a href="https://emily-obrien-dev-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440/My-Portfolio" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Quiet Observations</h3>
          <p>
            An immersive, narrative-driven web experience that blends creative writing
            with visual storytelling, focusing on perception, stillness, and atmosphere.
          </p>
          <div className="project-links">
            <a href="https://quiet-observations.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440/Quiet-Observations" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>

        <div className="card">
          <h3>World Social</h3>
          <p>
            An interactive dashboard visualizing social media engagement trends
            across platforms. Toggle between Instagram, TikTok, YouTube, and
            LinkedIn to explore how different content formats perform in 2026.
            Built with React, Vite, and Recharts.
          </p>
          <div className="project-links">
            <a href="https://world-social.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440/world-social" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>

      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I'm a remote operations and administrative professional with experience
          supporting fast-paced legal, insurance, and tech environments. I thrive
          when given responsibility and trusted to deliver without micromanagement.
        </p>

        <p>
          My background in client management, workflow coordination, and documentation
          gives me a strong foundation for executive support. I'm organized, discreet,
          and genuinely invested in making the people I support more effective.
        </p>

        <p>
          I also build web applications independently — including TaskFlow, a task
          management app built to help people organize priorities and track progress.
          That same instinct for structure and clarity drives everything I do.
        </p>

        <p>
          I work best remotely, independently, and in environments where ownership
          and reliability matter more than oversight.
        </p>

      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-box">
            <h3>Administrative</h3>
            <p>Calendar Management, Email Management, Scheduling, Research & Briefing</p>
          </div>

          <div className="skill-box">
            <h3>Operations</h3>
            <p>CRM Platforms, Document Management, Workflow Coordination, Compliance</p>
          </div>

          <div className="skill-box">
            <h3>Communication</h3>
            <p>Client Relations, Written Communication, Discretion, Task Prioritization</p>
          </div>

          <div className="skill-box">
            <h3>Technology</h3>
            <p>AI Tools, Google Workspace, Microsoft Office, HTML, CSS, JavaScript</p>
          </div>

          <div className="skill-box">
            <h3>Strengths</h3>
            <p>Organization, Problem Solving, Attention to Detail, Independent Work</p>
          </div>

          <div className="skill-box">
            <h3>Creative</h3>
            <p>Photography, Visual Thinking, Storytelling, Design Awareness</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>AI Rater & Data Annotator — TELUS Digital</h3>
          <p>2026 – Present</p>
          <p>
            Assessing digital content and search results for quality, relevance, and
            user value. Contributing to AI model training through clear content
            evaluations and structured justifications.
          </p>
        </div>

        <div className="card">
          <h3>Client Services & Systems Coordinator — State Farm</h3>
          <p>2023 – 2025</p>
          <p>
            Managed 400+ client records within CRM platforms. Investigated and resolved
            30–40 client inquiries weekly including billing discrepancies and policy
            modifications, ensuring data consistency and streamlined operations.
          </p>
        </div>

        <div className="card">
          <h3>Operations & Administrative Coordinator — Law Office of MJ Chernin</h3>
          <p>2021 – 2023</p>
          <p>
            Provided dedicated administrative support to a practicing attorney —
            managing scheduling, case preparation, and research so the attorney
            could focus entirely on their work. Maintained 100+ active legal files
            with strict confidentiality and compliance standards.
          </p>
        </div>

        <div className="card">
          <h3>Web Development & Task Management Tools</h3>
          <p>
            Built TaskFlow, a responsive task management application with priority
            levels, deadlines, and real-time tracking. Additional projects include
            an interactive data dashboard and a narrative-driven storytelling site.
          </p>
        </div>

        <div className="card">
          <h3>Creative Work & Visual Storytelling</h3>
          <p>
            Background in photography and writing with a strong focus on observation,
            composition, and capturing subtle details. This perspective directly
            influences my approach to organization and communication.
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
        <p>LinkedIn: <a href="https://www.linkedin.com/in/emily-o-943809402/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/emily-o-943809402</a></p>
        <p>Email: emilyobrien64728@yahoo.com</p>
        <p>GitHub: <a href="https://github.com/EmilyO440" target="_blank" rel="noopener noreferrer">github.com/EmilyO440</a></p>
        <p>Portfolio: <a href="https://emily-obrien-dev-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">emily-obrien-dev-portfolio.netlify.app</a></p>
        <p>Open to remote contract and international opportunities</p>
      </section>

    </div>
  );
}

export default App;
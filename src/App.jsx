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
          <a href="#casestudy">Research</a>
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
          <p className="role">Genealogical Researcher · Remote Operations Professional · Web Developer</p>
          <p>I specialize in genealogical and historical research, with 5+ years of experience tracing family histories across U.S. and international records, DNA analysis, and archival sources — including Polish State Archives, German civil records, and Eastern European parish registers.</p>
          <p>My background also spans legal operations, client management, workflow coordination, and frontend web development. Based in Düsseldorf, Germany.</p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="card">
          <h3>TaskFlow</h3>
          <p>A responsive task management app featuring priority levels, deadlines, and real-time progress tracking.</p>
          <div className="project-links">
            <a href="https://my-taskflow-manager-app.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/TaskFlow-App" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div className="card">
          <h3>Personal Portfolio</h3>
          <p>Built with React and custom CSS. Focused on layout, responsiveness, and clean structure.</p>
          <div className="project-links">
            <a href="https://emily-obrien-dev-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/My-Portfolio" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div className="card">
          <h3>Quiet Observations</h3>
          <p>An immersive, narrative-driven web experience blending creative writing with visual storytelling.</p>
          <div className="project-links">
            <a href="https://quiet-observations.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/Quiet-Observations" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div className="card">
          <h3>World Social</h3>
          <p>An interactive dashboard visualizing social media engagement trends across platforms. Built with React, Vite, and Recharts.</p>
          <div className="project-links">
            <a href="https://world-social.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/world-social" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
      </section>

      <section id="casestudy" className="section">
        <h2>Research Case Study</h2>
        <div className="card casestudy-card">
          <div className="casestudy-header">
            <h3>Polish Citizenship by Descent — Six-Generation Family Line</h3>
            <span className="casestudy-tag">Active Legal Case · 2026</span>
          </div>
          <p className="casestudy-summary">
            Traced a complete six-generation Polish family line from a 23andMe result to original 19th-century birth records in the Polish State Archives — in under 48 hours — supporting an active citizenship by descent legal case alongside a Poland-based attorney and professional genealogist.
          </p>
          <div className="casestudy-grid">
            <div className="casestudy-item">
              <h4>The Challenge</h4>
              <p>Establish an unbroken line of Polish citizenship from a great great-grandmother born in 1886 through five subsequent generations, with no prior documentation and no knowledge of exact birthplace or family details.</p>
            </div>
            <div className="casestudy-item">
              <h4>The Research</h4>
              <p>Cross-referenced US Federal Census records (1920, 1930, 1940), WWI Draft Registration, WWII Alien Registration, Social Security applications, Find a Grave, Connecticut vital records, and Polish archives including Geneteka, Szukajwarchiwach, Geni, and MyHeritage.</p>
            </div>
            <div className="casestudy-item">
              <h4>Key Findings</h4>
              <p>Located the ancestor's original birth record in the Polish State Archives (Brudzew parish, Wielkopolska). Confirmed both Polish-born ancestors maintained alien status across five independent US government records spanning 40+ years. Identified the family grave in Zduńska Wola, Poland.</p>
            </div>
            <div className="casestudy-item">
              <h4>Archives Used</h4>
              <p>US Federal Census (NARA) · WWII Alien Registration · Connecticut Naturalization Records · Szukajwarchiwach · Geneteka · MyHeritage · Geni · Grobonet · FamilySearch · Ancestry.com</p>
            </div>
          </div>
          <div className="casestudy-outcome">
            <span>✓</span> Original birth record located in Polish State Archives
            <span>✓</span> Parents' marriage record confirmed
            <span>✓</span> Family grave in Poland identified
            <span>✓</span> Active legal case submitted to Polish citizenship attorney
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I'm a genealogical researcher and remote operations professional with 5+ years of experience tracing family histories across U.S. and international records. I specialize in Polish-American immigration research, Eastern European civil and church archives, and citizenship by descent cases.</p>
        <p>I've conducted research for myself, family members, friends, and independent clients — producing well-documented research logs, source citations, and narrative reports. Proficient in Ancestry.com, FamilySearch, Geneteka, Szukajwarchiwach, MyHeritage, Geni, Fold3, and a wide range of US and European archival sources.</p>
        <p>Alongside my research background, I have experience in legal operations, client management, and workflow coordination. I also build web applications independently. Based in Düsseldorf, Germany with access to Landesarchiv NRW and proximity to Polish state archives.</p>
        <p>I work best remotely, independently, and in environments where attention to detail and reliable follow-through matter most.</p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-box">
            <h3>Genealogical Research</h3>
            <p>Ancestry.com, FamilySearch, Geneteka, Szukajwarchiwach, MyHeritage, Geni, Fold3, newspapers.com, Census & Vital Records, Military Records</p>
          </div>
          <div className="skill-box">
            <h3>European & Polish Archives</h3>
            <p>Polish State Archives, Brudzew & Dynów parish records, Grobonet cemetery database, German civil records, Landesarchiv NRW, Austrian Galician records</p>
          </div>
          <div className="skill-box">
            <h3>DNA Analysis</h3>
            <p>AncestryDNA, 23andMe, MyHeritage — Cluster Analysis, Shared Match Methodology, Triangulation, Brick Wall Research</p>
          </div>
          <div className="skill-box">
            <h3>Research Documentation</h3>
            <p>Research Logs, Source Citations, Abstracts, Narrative Reports, Genealogical Proof Standards (GPS), Citizenship Case Documentation</p>
          </div>
          <div className="skill-box">
            <h3>Administrative</h3>
            <p>Calendar Management, Email Management, Scheduling, Client Communication, CRM Platforms, Document Management</p>
          </div>
          <div className="skill-box">
            <h3>Technology</h3>
            <p>HTML, CSS, JavaScript, React, Vite, AI Tools, Google Workspace, Microsoft Office</p>
          </div>
          <div className="skill-box">
            <h3>Communication</h3>
            <p>Client Relations, Written Communication, Discretion, Task Prioritization, Conflict Resolution</p>
          </div>
          <div className="skill-box">
            <h3>Languages</h3>
            <p>English (native) · German (A2, actively improving) · Polish record terminology (genealogical research)</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="card">
          <h3>Independent Genealogical Researcher</h3>
          <p>2019 – Present</p>
          <p>Conducted in-depth genealogical research for private clients, family members, and independent projects across US and international records. Specializations include Polish-American immigration research, naturalization and citizenship by descent cases, and Eastern European civil and church archives. Most recently documented a complete six-generation Polish family line for an active citizenship by descent legal case — locating original birth records in the Polish State Archives and collaborating with a Poland-based attorney and professional genealogist.</p>
        </div>
        <div className="card">
          <h3>Client Services & Systems Coordinator — State Farm</h3>
          <p>2023 – 2025</p>
          <p>Managed 400+ client records within CRM platforms. Investigated and resolved 30–40 client inquiries weekly including billing discrepancies and policy modifications.</p>
        </div>
        <div className="card">
          <h3>Operations & Administrative Coordinator — Law Office of MJ Chernin</h3>
          <p>2021 – 2023</p>
          <p>Provided dedicated administrative support to a practicing attorney — managing scheduling, case preparation, and research. Maintained 100+ active legal files with strict confidentiality standards.</p>
        </div>
        <div className="card">
          <h3>Web Development</h3>
          <p>Built TaskFlow, World Social, and other web applications independently using React, Vite, and JavaScript.</p>
        </div>
        <div className="card">
          <h3>Creative Work & Visual Storytelling</h3>
          <p>Background in photography and writing with a strong focus on observation, composition, and capturing subtle details.</p>
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
import "./index.css"

import hibiscus from "./assets/hibiscus.jpg"
import amsterdamRoof from "./assets/amsterdam-roof.jpg"
import motions from "./assets/motions.png"
import redLightDistrict from "./assets/red-light-district.png"
import glasgowNight from "./assets/glasgow-rainy-night.jpg"
import pinkAmsterdam from "./assets/pink-city-amsterdam.jpg"
import cambridgeRiver from "./assets/cambridge-river.jpeg"
import moersWalk from "./assets/moers-city-walk.jpg"
import lifeThroughGlass from "./assets/lifethroughglass-moers-germany.png"

function App() {
return ( <div>

```
  <nav className="nav">
    <h2>Emily.dev</h2>
  </nav>

  <section className="hero">
    <img src={hibiscus} className="hero-img" />

    <div className="hero-text">
      <h1>Emily — Frontend Developer</h1>
      <p>
        I build modern user-focused web experiences with strong visual
        awareness, creativity, and attention to detail.
      </p>
    </div>
  </section>

  <section className="section">
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

</div>

)
}

export default App

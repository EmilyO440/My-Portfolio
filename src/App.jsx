import "./index.css"

import hibiscus from "./assets/hibiscus"
import amsterdamRoof from "./assets/amsterdam-roof"
import motions from "./assets/motions"
import redLightDistrict from "./assets/red-light-district"
import glasgowNight from "./assets/glasgow-rainy-night"
import pinkAmsterdam from "./assets/pink-city-amsterdam"
import cambridgeRiver from "./assets/cambridge-river"
import moersWalk from "./assets/moers-city-walk"
import lifeThroughGlass from "./assets/lifethroughglass-moers-germany"

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

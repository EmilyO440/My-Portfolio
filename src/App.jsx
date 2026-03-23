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
   </nav>

   <section id="creative" className="section">
    <h2>Photography</h2>

    <div className="gallery">
      <img src={Amsterdamroof} />
      <img src={emshibiscus} />
      <img src={motions} />
      <img src={redlightdistrict} />
      <img src={Glasgowrainynight} />
      <img src={pinkcityamsterdam} />
      <img src={Cambridgeriver} />
      <img src={oldTownMoers} />
      <img src={windowtogermany} />
    </div>
 
  </section>

</div>

)
}

export default App

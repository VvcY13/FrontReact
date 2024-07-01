import Carrusel from "./Home/Carrusel";

import Iconos from "./Home/Iconos";
import Footer from "./Home/footer";


export default function Home() {
    return (
      <div className="container-fluid p-0">
        <Carrusel />
        
        <Iconos />
        <Footer />
      </div>
    );
  }

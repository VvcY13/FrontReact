import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container-fluid p-0">
    <footer className="bg-body-tertiary text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Dirección: Av. Principal 123</p>
            <p>Teléfono: 123-456-789</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/">Politica de Seguridad</a></li>
              <li><a href="/productos">Terminos y Condiciones</a></li>
              <li><a href="/contacto">Politica de Cookies</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <ul className="list-inline" style={{display:"flex", alignContent:"center", justifyContent:"space-between"}}>
              <li className="list-inline-item"><a href="#"><FaFacebook style={{ fontSize:"5rem"}} /></a></li>
              <li className="list-inline-item"><a href="#"><FaTwitter style={{ fontSize:"5rem"}}/></a></li>
              <li className="list-inline-item"><a href="#"><FaInstagram style={{ fontSize:"5rem"}}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

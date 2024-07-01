import subNavbarCliente from "./subNavbarCliente";
import imagen2 from "../../assets/imagenes/2.png"
import imagen3 from "../../assets/imagenes/3.png"
import imagen4 from "../../assets/imagenes/4.png"


export default function ClientePromociones() {
  return (
    <div className="container-fluid p-0">
      {subNavbarCliente()}
      <div className="container-fluid p-0 mt-5">
      <h1 style={{ textAlign: 'center', fontSize: '35px', marginBottom: '2rem' }}>Nuestras Promociones Actuales</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imagen2} className="card-img-top" alt="Promoción 1" />
            <div className="card-body">
              <h5 className="card-title">Promoción de Verano</h5>
              <p className="card-text">¡Descuentos increíbles en toda la colección de verano! Aprovecha ahora.</p>
              <a href="#" className="btn btn-primary">Ver Detalles</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imagen3} className="card-img-top" alt="Promoción 2" />
            <div className="card-body">
              <h5 className="card-title">Promoción de Otoño</h5>
              <p className="card-text">Compra dos prendas y llévate la tercera gratis. ¡No te lo pierdas!</p>
              <a href="#" className="btn btn-primary">Ver Detalles</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imagen4} className="card-img-top" alt="Promoción 3" />
            <div className="card-body">
              <h5 className="card-title">Promoción de Invierno</h5>
              <p className="card-text">Descuentos exclusivos en abrigos y chaquetas para este invierno.</p>
              <a href="#" className="btn btn-primary">Ver Detalles</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

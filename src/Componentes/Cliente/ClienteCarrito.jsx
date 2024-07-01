import TarjetaCarrito from "../Tarjetas/TarjetaCarrito";
import subNavbarCliente from "./subNavbarCliente";


export default function ClienteCarrito() {
  return (
    <div className="container-fluid p-0">
      {subNavbarCliente()}
      <div className="container-fluid p-0">
        <TarjetaCarrito/>
      </div>
    </div>
  )
}

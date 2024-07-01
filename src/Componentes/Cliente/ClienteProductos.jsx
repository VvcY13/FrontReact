import TarjetasProductos from "../TarjetasProductos";
import subNavbarCliente from "./subNavbarCliente";

export default function ClienteProductos() {
  return (
    <div className="container-fluid p-0">
      {subNavbarCliente()}
      <div className="container-fluid p-0">
        {TarjetasProductos()}
      </div>
    </div>
  )
}

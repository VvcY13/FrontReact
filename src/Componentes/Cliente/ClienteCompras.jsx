import ComponenteCompras from "./ComponenteCompras";
import subNavbarCliente from "./subNavbarCliente";

export default function ClienteCompras() {
  return (
    <div className="container-fluid p-0">
      {subNavbarCliente()}
      <div className="container-fluid p-0">
        <ComponenteCompras />
      </div>
    </div>
  )
}

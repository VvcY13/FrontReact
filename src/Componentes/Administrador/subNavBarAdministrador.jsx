import { Link } from "react-router-dom";

export default function SubNavBarAdministrador() {
  return (
    <div className="container-fluid p-0 m-0">
    <nav className="navbar" style={{background:"#8c8c8c"}}>
    <div className="container-fluid p-0 m-0 d-flex" style={{justifyContent:"space-around"}}>
            <li className="nav-item" style={{ color: "#fff", listStyle:"none" ,fontSize:"20px"}}>
                <Link className="nav-link active" aria-current="page" to={'/administradorHome'}><b>Home</b></Link>
            </li>
            <li className="nav-item" style={{ color: "#fff", listStyle:"none" ,fontSize:"20px"}}>
                <Link className="nav-link active" aria-current="page" to={'/administradorPerfil'}><b>Perfil</b></Link>
            </li>
            <li className="nav-item" style={{ color: "#fff",listStyle:"none", fontSize:"20px" }}>
                <Link className="nav-link active" aria-current="page" to={'/administradorProductos'}><b>Productos</b></Link>
            </li>
            <li className="nav-item" style={{ color: "#fff" , listStyle:"none",fontSize:"20px"}}>
                <Link className="nav-link active" aria-current="page" to={'/administradorPersonal'}><b>Personal</b></Link>
            </li>
            <li className="nav-item" style={{ color: "#fff" , listStyle:"none" ,fontSize:"20px"}}>
                <Link className="nav-link active" aria-current="page" to={'/administradorVentas'}><b>Ventas</b></Link>
            </li>
            <li className="nav-item" style={{ color: "#fff" , listStyle:"none" ,fontSize:"20px"}}>
                <Link className="nav-link active" aria-current="page" to={'/administradorQuejasyReclamos'}><b>Quejas y Reclamos</b></Link>
            </li>
            </div>
      </nav>
</div>
  )
}

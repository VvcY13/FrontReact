import { Link } from "react-router-dom";

export default function SubNavBarAdministrador() {
  return (
    <div className="container-fluid m-0 p-0">
    <nav className="container-fluid" style={{background:"#8c8c8c", maxWidth:"100%"}}>
    <div className="container-fluid d-flex p-1" style={{justifyContent:"space-around", marginLeft:"0px"}}>
           
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

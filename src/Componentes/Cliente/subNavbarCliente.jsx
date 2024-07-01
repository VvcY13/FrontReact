import { Link } from "react-router-dom";

export default function SubNavbarCliente() {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar" style={{background:"#8c8c8c"}}>
            <div className="container-fluid p-0 d-flex" style={{justifyContent:"space-around"}}>
                    <li className="nav-item" style={{ color: "#fff", listStyle:"none" ,fontSize:"20px"}}>
                        <Link className="nav-link active" aria-current="page" to="/clientePromociones"><b>Promociones</b></Link>
                    </li>
                    <li className="nav-item" style={{ color: "#fff", listStyle:"none" ,fontSize:"20px"}}>
                        <Link className="nav-link active" aria-current="page" to="/clientePerfil"><b>Perfil</b></Link>
                    </li>
                    <li className="nav-item" style={{ color: "#fff",listStyle:"none", fontSize:"20px" }}>
                        <Link className="nav-link active" aria-current="page" to="/clienteProductos"><b>Productos</b></Link>
                    </li>
                    <li className="nav-item" style={{ color: "#fff" , listStyle:"none",fontSize:"20px"}}>
                        <Link className="nav-link active" aria-current="page" to="/clienteCompras"><b>Compras</b></Link>
                    </li>
                    <li className="nav-item" style={{ color: "#fff" , listStyle:"none" ,fontSize:"20px"}}>
                        <Link className="nav-link active" aria-current="page" to="/clienteCarrito"><b>Carrito</b></Link>
                    </li>
                    <li className="nav-item" style={{ color: "#fff" , listStyle:"none" ,fontSize:"20px"}}>
                        <Link className="nav-link active" aria-current="page" to="/clienteQuejas"><b>Quejas y Reclamos</b></Link>
                    </li>
                    </div>
              </nav>
        </div>
    )
}

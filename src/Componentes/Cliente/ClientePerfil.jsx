import ComponentePerfil from "./ComponentePerfil";
import SubNavbarCliente from "./subNavbarCliente";



export default function ClientePerfil() {
    return (
        <div className="container-fluid p-0 m-0" style={{ height: "94vh", width: "100%" }}>
            <SubNavbarCliente />
            <ComponentePerfil />
        </div>
        
    );
}

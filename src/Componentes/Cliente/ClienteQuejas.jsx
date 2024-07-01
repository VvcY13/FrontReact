import FormularioQuejas from "../FormularioQuejas";
import SubNavbarCliente from "./subNavbarCliente";

export default function ClienteQuejas(){
    return(
        <div className="container-fluid p-0">
      <SubNavbarCliente />
      <div className="container-fluid p-0">
        <FormularioQuejas />
      </div>
    </div>
        
    )
}
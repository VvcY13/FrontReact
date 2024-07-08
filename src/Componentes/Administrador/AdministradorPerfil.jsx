import ComponentePerfil from "../Cliente/ComponentePerfil";
import SubNavBarAdministrador from "./subNavBarAdministrador";


export default function AdministradorPerfil() {
  return (
    <div className="container-fluid m-0" style={{background:"#DCEDC8"}}>
    <SubNavBarAdministrador/>
    <ComponentePerfil />
  </div>
  )
}

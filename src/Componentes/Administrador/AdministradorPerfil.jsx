import ComponentePerfil from "../Cliente/ComponentePerfil";
import SubNavBarAdministrador from "./subNavBarAdministrador";


export default function AdministradorPerfil() {
  return (
    <div className="container-fluid p-0">
    <SubNavBarAdministrador/>
    <ComponentePerfil />
  </div>
  )
}

import ComponenteQuejas from "./ComponenteQuejas";
import SubNavBarAdministrador from "./subNavBarAdministrador";

export default function AdministradorQuejas() {
  return (
    <div className="container-fluid p-0">
    <SubNavBarAdministrador/>
    <div className="container-fluid p-0">
      <ComponenteQuejas />
    </div>
  </div>
  )
}

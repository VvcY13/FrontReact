
import AdministradorComponenteCompras from './AdministradorComponenteCompras'
import SubNavBarAdministrador from './subNavBarAdministrador'

export default function AdministradorVentas() {
  return (
    <div className="container-fluid p-0">
    <SubNavBarAdministrador/>
    <div className="container-fluid p-0">
      <AdministradorComponenteCompras />
    </div>
  </div>
  )
}

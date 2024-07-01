import subNavbarCliente from "./subNavbarCliente"

export default function ClienteDashboard() {
  return (
    <div className="container-fluid p-0">
      {subNavbarCliente()}  
    </div>
  );
}


import { FcShop } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcLock } from "react-icons/fc";

export default function Iconos() {
  return (
    <div className="container-fluid" style={{display:"flex", flexWrap:"nowrap", justifyContent:"space-around"}}>
       <div className="container" style={{display: "flex",flexDirection: "column",alignItems: "center",  justifyContent: "center", textAlign: "center", margin: "20px"}} >
       <FcVoicePresentation style={{ fontSize:"10rem" }}/>
       <h2 style={{textAlign:"center"}}>Atencion 24/7</h2>
       </div>
       <div className="container" style={{display: "flex",flexDirection: "column",alignItems: "center",  justifyContent: "center", textAlign: "center", margin: "20px"}} >
       <FcShipped style={{ fontSize:"10rem"}}/>
       <h2 style={{textAlign:"center"}}>Delivery</h2>
       </div>
       <div className="container" style={{display: "flex",flexDirection: "column",alignItems: "center",  justifyContent: "center", textAlign: "center", margin: "20px"}} >
        <FcShop style={{ fontSize:"10rem"}}/>
        <h2 style={{textAlign:"center"}}>Recojo en Tienda</h2>
       </div>
       <div className="container" style={{display: "flex",flexDirection: "column",alignItems: "center",  justifyContent: "center", textAlign: "center", margin: "20px"}} >
       <FcLock style={{ fontSize:"10rem"}}/>
       <h2 style={{textAlign:"center"}}>Seguridad en tu compra</h2>
       </div>
    </div>
  )
}

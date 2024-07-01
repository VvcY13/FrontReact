import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'


export default function FormularioProd() {
    const [nombreProd, setNombreProd] = useState('')
    const [marcaProd, setMarcaProd] = useState('')
    const [presentacionProd, setPresentacionProd] = useState('')
    const [precioCompraProd, setPrecioCompraProd] = useState('')
    const [precioVentaProd, setPrecioVentaProd] = useState('')
    const [stockProd, setStockProd] = useState('')
    const [imagenProd, setImagenProd] = useState('')

    
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const formData = new FormData();
          formData.append('nombreProd', nombreProd);
          formData.append('marcaProd', marcaProd);
          formData.append('presentacionProd', presentacionProd);
          formData.append('precioCompraProd', precioCompraProd);
          formData.append('precioVentaProd', precioVentaProd);
          formData.append('stockProd', stockProd);
          formData.append('imagenProd', imagenProd);
      
          const response = await axios.post('http://127.0.0.1:8000/api/producto', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
          console.log(response.data);
        } catch (error) {
          console.error('Error:', error);
          if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
          }
        }
      };

    return (
        <>
            <div className='container-fluid m-4 d-flex align-self-center' style={{ width: "30%" }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex align-content-center flex-column">
                        <label htmlFor="nombreProd" className="form-label align-self-center">Nombre del producto</label>
                        <input type="text" className="form-control" id="nombreProd" value={nombreProd} onChange={(e) => setNombreProd(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex align-content-center flex-column">
                        <label htmlFor="marcaProd" className="form-label align-self-center">Marca del producto</label>
                        <input type="text" className="form-control" id="marcaProd" value={marcaProd} onChange={(e) => setMarcaProd(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex align-content-center flex-column">
                        <label htmlFor="presentacionProd" className="form-label align-self-center">Presentación del producto</label>
                        <input type="text" className="form-control" id="presentacionProd" value={presentacionProd} onChange={(e) => setPresentacionProd(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex align-content-center flex-column">
                        <label htmlFor="precioCompraProd" className="form-label align-self-center">Precio de compra</label>
                        <input type="number" className="form-control" id="precioCompraProd" value={precioCompraProd} onChange={(e) => setPrecioCompraProd(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex align-content-center flex-column">
                        <label htmlFor="precioVentaProd" className="form-label align-self-center">Precio de venta</label>
                        <input type="number" className="form-control" id="precioVentaProd" value={precioVentaProd} onChange={(e) => setPrecioVentaProd(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex align-content-center flex-column">
                        <label htmlFor="stockProd" className="form-label align-self-center">Stock del producto</label>
                        <input type="number" className="form-control" id="stockProd" value={stockProd} onChange={(e) => setStockProd(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex align-content-center flex-column">
                        <label htmlFor="imagenProd" className="form-label align-self-center">Imagen del producto</label>
                        <input type="file" className="form-control" id="imagenProd" onChange={(e) => setImagenProd(e.target.files[0])} />
                    </div>
                    <button type="submit" className="btn btn-danger align-self-center">Registrar</button>
                </form>
            </div>
        </>
    )
}
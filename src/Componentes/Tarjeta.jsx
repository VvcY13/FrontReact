import axios from 'axios';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export default function Tarjeta({ producto }) {
  const handleAddToCart = async () => {
    const token = localStorage.getItem('token'); // Obtén el token de autenticación si es necesario

    if (!token) {
        alert("Por favor, inicia sesión primero.");
        return;
    }

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/carrito/agregar', {
            id_producto: producto.id,
            cantidad: 1 
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        Swal.fire('Éxito', response.data.message, 'success');

        
    } catch (error) {
        console.error(error);
        alert('Hubo un error al agregar el producto al carrito');
    }
};


    return (
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
            <img src={`http://127.0.0.1:8000/${producto.imagenProd}`} className="card-img-top" alt="Producto" />
            <div className="card-body">
                <h5 className="card-title">{producto.nombreProd}</h5>
                <p className="card-text">
                    Marca: {producto.marcaProd}<br />
                    Presentación: {producto.presentacionProd}<br />
                    Precio de Compra: S/{producto.precioCompraProd}<br />
                    Precio de Venta: S/{producto.precioVentaProd}<br />
                    Stock: {producto.stockProd}
                </p>
                <a href="#" className="btn btn-primary" onClick={handleAddToCart}>Agregar a Carrito</a>
            </div>
        </div>
    );
}

Tarjeta.propTypes = {
    producto: PropTypes.shape({
        id: PropTypes.number.isRequired, 
        imagenProd: PropTypes.string.isRequired,
        nombreProd: PropTypes.string.isRequired,
        marcaProd: PropTypes.string.isRequired,
        presentacionProd: PropTypes.string.isRequired,
        precioCompraProd: PropTypes.number.isRequired,
        precioVentaProd: PropTypes.number.isRequired,
        stockProd: PropTypes.number.isRequired,
    }).isRequired,
};
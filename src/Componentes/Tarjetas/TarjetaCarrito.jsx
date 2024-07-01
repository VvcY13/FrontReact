import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function TarjetaCarrito() {
    const [datosCarrito, setDatosCarrito] = useState({});
    const [carga, setCarga] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get('http://127.0.0.1:8000/api/carrito', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.data && response.data.carrito && response.data.carrito.detalles.length > 0) {
                    setDatosCarrito(response.data);
                } else {
                    setDatosCarrito({ carrito: { detalles: [] }, totalCantidad: 0, totalMonto: 0 });
                }
                setCarga(false);
            })
            .catch(error => {
                Swal.fire('Error', error, 'error')
                setCarga(false);
            })
    }, []);

    const aumentarCantidad = (productoId) => {
        const token = localStorage.getItem('token');

        axios.post('http://127.0.0.1:8000/api/carrito/incrementarCantidad', { producto_id: productoId }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setDatosCarrito(response.data);
               
            })
            .catch(error => {
                Swal.fire('Error', error,'error')
                
            });
    };
    const disminuirCantidad = (productoId) => {
        const token = localStorage.getItem('token');
        axios.post('http://127.0.0.1:8000/api/carrito/disminuirCantidad', {
            producto_id: productoId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setDatosCarrito(response.data);
               
            })
            .catch(error => {
                console.error('Error disminuyendo cantidad', error);
            });
    }
    const eliminarProducto = (productoId) => {
        const token = localStorage.getItem('token');
        axios.post('http://127.0.0.1:8000/api/carrito/removerProducto', {
            producto_id: productoId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setDatosCarrito(response.data);
               
            })
            .catch(error => {
                console.error('Error eliminando producto', error);
            });
    };
    const limpiarCarrito = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/carrito/limpiar', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setDatosCarrito(response.data);
            Swal.fire('Éxito', response.data.message, 'success');
        } catch (error) {
            console.error('Error al limpiar el carrito', error);
            Swal.fire('Error', 'Ocurrió un error al intentar limpiar el carrito.', 'error');
        }
    };

    const finalizarCompra = async()=>{
        const token = localStorage.getItem('token');
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/checkout',{},{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            Swal.fire('Éxito', response.data.message, 'success');
            console.log(response.data)
           setDatosCarrito(response.data);
        }catch(error){
            console.error('Error al finalizar la compra:', error);
            alert('Ocurrió un error al intentar finalizar la compra.');
        }
    }

    if (carga) {
        return <div>Cargando...</div>;
    }
    return (
        <div className="card-body p-3 text-black text-center">
            <h2>Bienvenido a tu Carrito</h2>
            <button className="btn btn-sm btn-primary ms-1 align-self-center" style={{ height: "50px", width: "200px", marginTop: "20px", marginBottom: "20px" }} onClick={() => finalizarCompra()}>Realizar Compra</button>
            <button className="btn btn-sm btn-danger ms-1 align-self-center" style={{ height: "50px", width: "200px", marginTop: "20px", marginBottom: "20px" }} onClick={() => limpiarCarrito()}>Limpiar Carrito</button>
            {datosCarrito && datosCarrito.carrito && (
                <div className="bg-body-secondary p-0" style={{ marginLeft: "50px", marginRight: "50px" }}>
                    <h2 className="lead fw-normal mb-1">Detalles del Carrito:</h2>
                    <p>Total de Productos: {datosCarrito.totalCantidad}</p>
                    <p>Total a Pagar: S/{datosCarrito.totalMonto.toFixed(2)}</p>
                    {datosCarrito.carrito.detalles.map(detalle => (
                        <div key={detalle.id} className="cart-item">
                            <div className='p-1 m-2 d-flex flex-nowrap justify-content-around flex-row'>
                                <p className="font-italic mb-0 align-self-center" style={{ fontSize: "18px" }} >{detalle.producto.nombreProd}</p>
                                <p className="font-italic mb-0 align-self-center" style={{ fontSize: "18px" }}>{detalle.producto.marcaProd}</p>
                                <p className="font-italic mb-0 align-self-center" style={{ fontSize: "18px" }}>Cantidad: {detalle.cantidad}</p>
                                <p className="font-italic mb-0 align-self-center" style={{ fontSize: "18px" }}>Precio Unitario: S/{detalle.precio}</p>
                                <img src={`http://127.0.0.1:8000/${detalle.producto.imagenProd}`} alt="Producto" style={{ height: "100px" }} />
                                <button className="btn btn-sm btn-primary align-self-center" style={{ height: "50px", width: "100px" }} onClick={() => aumentarCantidad(detalle.producto.id)}>
                                    Aumentar
                                </button>
                                <button className="btn btn-sm btn-secondary ms-1 align-self-center" style={{ height: "50px", width: "100px" }} onClick={() => disminuirCantidad(detalle.producto.id)}>
                                    Disminuir
                                </button>
                                <button className="btn btn-sm btn-danger ms-1 align-self-center" style={{ height: "50px", width: "100px" }} onClick={() => eliminarProducto(detalle.producto.id)} >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {!datosCarrito || !datosCarrito.carrito || datosCarrito.carrito.detalles.length === 0 && (
                <div>No hay productos en el carrito.</div>
            )}


        </div>


    );
}

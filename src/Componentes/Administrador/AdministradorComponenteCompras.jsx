import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdministradorComponenteCompras() {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        fetchAllSales();
    }, []);

    const fetchAllSales = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/all-sales');
            setVentas(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error al obtener todas las ventas:', error);
        }
    };
    return (
        <div className="container-fluid p-5 mt-2">
            <div className="container-fluid m-0 d-flex flex-column">
                <h2>Todas las Ventas</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID Venta</th>
                            <th>ID Usuario</th>
                            <th>Total</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map((venta) => (
                            <tr key={venta.id}>
                                <td>{venta.id}</td>
                                <td>{venta.id_personal}</td>
                                <td>{venta.total}</td>
                                <td>
                                    <ul>
                                        {venta.detalles.map((detalle) => (
                                            <li key={detalle.id}>
                                                Producto: {detalle.producto.nombreProd}, Cantidad: {detalle.cantidad}, Precio: {detalle.precio}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

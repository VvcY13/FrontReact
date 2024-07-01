import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ComponenteCompras() {
    const [ventas, setVentas] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            console.error("Token no encontrado");
            return;
        }

        const fetchUserSales = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/user-sales', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                setVentas(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error al obtener las ventas del usuario:', error);
            }
        };

        fetchUserSales(); // Llamar la función fetchUserSales dentro de useEffect

    }, [token]); // Incluir token como dependencia

    return (
        <div className="container-fluid p-5 mt-2">
            <div className="container-fluid m-0 d-flex flex-column">
                <h2>Compras del Usuario</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID Venta</th>
                            <th>Total</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map((venta) => (
                            <tr key={venta.id}>
                                <td>{venta.id}</td>
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
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

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

    const calcularTotalVentas = () => {
        const total = ventas.reduce((acc, venta) => acc + parseFloat(venta.total), 0);
        Swal.fire({
            title: 'Total de Ventas',
            text: `El total de todas las ventas es: ${total.toFixed(2)}`,
            icon: 'info',
            confirmButtonText: 'Cerrar'
        });
    };

    return (
        <div className="container-fluid p-5 mt-2">
            <div className="container-fluid m-0 d-flex flex-column">
                <h2>Ventas</h2>
                <button onClick={calcularTotalVentas} className="btn btn-primary mb-3">
                    Ver Total de Ventas
                </button>

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

import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ComponenteQuejas() {

    const [quejasyreclamos, setQuejasyReclamos] = useState([]);

    useEffect(() => {
        fetchAllQuejas();
    }, []);

    const fetchAllQuejas = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/quejasyreclamos');
            setQuejasyReclamos(response.data.quejasyreclamos);
            
        } catch (error) {
            console.error('Error al obtener quejas y reclamos:', error);
        }
    };
    const handleViewMessage = (descripcion) => {
        Swal.fire({
            title: 'Mensaje',
            text: descripcion,
            icon: 'info',
            confirmButtonText: 'Cerrar'
        });
    };
  return (
    <div className="container-fluid p-5 mt-2">
            <div className="container-fluid m-0 d-flex flex-column">
                <h2>Quejas y Reclamos</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID Queja</th>
                            <th>ID Usuario</th>
                            <th>Motivo</th>
                            <th>Mensaje</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quejasyreclamos.map((queja) => (
                            <tr key={queja.id}>
                                <td>{queja.id}</td>
                                <td>{queja.id_personal}</td>
                                <td>{queja.asunto}</td>
                                <td>
                                    <button onClick={() => handleViewMessage(queja.comentario)} className="btn btn-primary">
                                        Ver mensaje
                                    </button>
                                </td>
                                <td>{queja.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

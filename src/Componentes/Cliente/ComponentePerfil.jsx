import { useState, useEffect } from "react";
import imagenusuario from '../../assets/imagenes/Userperfil.png';
import axios from 'axios';

export default function ComponentePerfil() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:8000/api/perfil', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);

            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
    <div className="container-fluid d-flex flex-wrap m-5">
      <div className="container-fluid">
        <img src={imagenusuario} alt="Imagen de usuario" style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
      </div>
      <div className="card-body p-3 text-black">
        <div className="mb-1 text-body">
          <p className="lead fw-normal mb-1">Información</p>
          <div className="p-4 bg-body-tertiary">
            <div className="row">
              <div className="col-md-6">
                <h5>Nombres</h5>
                <p className="font-italic mb-1">{user.nombres}</p>
                <h5>Apellidos</h5>
                <p className="font-italic mb-1">{user.apellidos}</p>
                <h5>Correo Electrónico</h5>
                <p className="font-italic mb-0">{user.email}</p>
                <h5>Dirección</h5>
                <p className="font-italic mb-0">{user.direccion}</p>
                <h5>Provincia</h5>
                <p className="font-italic mb-0">{user.provincia}</p>
                <h5>Distrito</h5>
                <p className="font-italic mb-0">{user.distrito}</p>
              </div>
              <div className="col-md-6">
                <h5>Tipo de Documento</h5>
                <p className="font-italic mb-0">{user.tipo_documento}</p>
                <h5>Número de Documento</h5>
                <p className="font-italic mb-0">{user.numero_documento}</p>
                <h5>Perfil Creado el</h5>
                <p className="font-italic mb-0">{user.created_at}</p>
                <h5>Perfil Actualizado el</h5>
                <p className="font-italic mb-0">{user.updated_at}</p> {/* Asumiendo que `updated_at` está disponible en `user` */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    );

}

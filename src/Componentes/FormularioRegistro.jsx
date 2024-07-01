import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from './Contexto/AuthContext';

export default function FormularioRegistro() {
    const {register}= useContext(AuthContext);
    const showRegisterForm =()=>{
        Swal.fire({
            title: 'Registrarse',
            html: `
                <div class="mb-3">
                    <label for="nombres" class="form-label">Nombres</label>
                    <input type="text" class="form-control" id="nombres" placeholder="Ingrese sus Nombres">
                </div>
                <div class="mb-3">
                    <label for="apellidos" class="form-label">Apellidos</label>
                    <input type="text" class="form-control" id="apellidos" placeholder="Ingrese sus Apellidos">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Direccion</label>
                    <input type="text" class="form-control" id="direccion" placeholder="Ingrese su direccion">
                </div>
                <div class="mb-3">
                    <label for="provincia" class="form-label">Provincia</label>
                    <input type="text" class="form-control" id="provincia" placeholder="Ingrese su provincia">
                </div>
                <div class="mb-3">
                    <label for="distrito" class="form-label">Distrito</label>
                    <input type="text" class="form-control" id="distrito" placeholder="Ingrese su distrito">
                </div>
                <div class="mb-3">
                     <label for="tipo_documento" class="form-label">Tipo de Documento</label>
                    <select class="form-select" id="tipo_documento">
                        <option value="">Seleccione un tipo de documento</option>
                        <option value="DNI">DNI</option>
                        <option value="carnet_extranjeria">Carnet de Extranjeria</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="numero_documento" class="form-label">Numero de Documento</label>
                    <input type="text" class="form-control" id="numero_documento" placeholder="Ingrese su numero de Documento">
                </div>
            `,
            showCloseButton: true,
            confirmButtonText: 'Registrarse',
            preConfirm: () => {
                const nombres = document.getElementById('nombres').value;
                const apellidos = document.getElementById('apellidos').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const direccion = document.getElementById('direccion').value;
                const provincia = document.getElementById('provincia').value;
                const distrito = document.getElementById('distrito').value;
                const tipo_documento = document.getElementById('tipo_documento').value;
                const numero_documento = document.getElementById('numero_documento').value;

                return {
                    nombres,
                    apellidos,
                    email,
                    password,
                    direccion,
                    provincia,
                    distrito,
                    tipo_documento,
                    numero_documento
                };
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                const userData = result.value;
                await register(userData);
            }
        });
    };

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={showRegisterForm}>Registrarse</button>
        </div>
    );
}

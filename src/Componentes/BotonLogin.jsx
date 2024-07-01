import { useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from './Contexto/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function BotonLogin() {
    
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const showLoginForm = () => {
        Swal.fire({
            title: 'Iniciar Sesión',
            html: `
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña">
                </div>
            `,
            showCloseButton: true,
            confirmButtonText: 'Iniciar Sesión',
            preConfirm: () => {
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                return { email, password };
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { email, password } = result.value;
                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
                    if (response.status === 200) {
                        const { token, rol } = response.data;
                        login(token);

                        const parsedRol = parseInt(rol, 10);
                        if (parsedRol === 0) {
                            navigate('/administradorHome');
                        } else if (parsedRol === 1) {
                            navigate('/ClientePromociones');
                        }
                       
                       Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');
                    } else {
                        Swal.fire('Error', 'Error al iniciar sesión', 'error');
                    }
                } catch (error) {
                    console.error('Error al iniciar sesión', error);
                    Swal.fire('Error', 'Ocurrió un error al iniciar sesión', 'error');
                }
            }
        });
    };

    return (
        <button className="btn btn-outline-success" onClick={showLoginForm}>
            Iniciar Sesión
        </button>
    );
    }


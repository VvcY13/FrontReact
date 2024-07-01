import { useEffect, useState } from "react";
import SubNavBarAdministrador from "./subNavBarAdministrador";
import axios from "axios";
import Swal from "sweetalert2";


export default function AdministradorPersonal() {
  const [personals, setPersonals] = useState([]);

  useEffect(() => {
    cargarPersonals();
  }, []);

  const cargarPersonals = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/personal');
      setPersonals(response.data.Personal);
    } catch (error) {
      console.log('Error al cargar personal', error);
    }
  };

  const handleEliminar = async (id) => {
    const confirm = await Swal.fire({
      title: '¿Está seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    });

    if (confirm.isConfirmed) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/personal/${id}`);
        if (response.status === 200) {
          Swal.fire(
            'Eliminado!',
            'El personal ha sido eliminado.',
            'success'
          );
          cargarPersonals(); 
        } else {
          Swal.fire('Error', 'Error al eliminar el personal', 'error');
        }
      } catch (error) {
        console.error('Error al eliminar el personal', error);
        Swal.fire('Error', 'Error al eliminar el personal', 'error');
      }
    }
  };

  const handleAgregar = () => {
    Swal.fire({
      title: 'Agregar Personal',
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
          <option value="1">DNI</option>
          <option value="2">Cédula</option>
          <!-- Agrega más opciones según necesites -->
      </select>
  </div>
  <div class="mb-3">
      <label for="numero_documento" class="form-label">Numero de Documento</label>
      <input type="text" class="form-control" id="numero_documento" placeholder="Ingrese su numero de Documento">
  </div>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Registrar',
      preConfirm: async () => {
                const nombres = document.getElementById('nombres').value;
                const apellidos = document.getElementById('apellidos').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const direccion = document.getElementById('direccion').value;
                const provincia = document.getElementById('provincia').value;
                const distrito = document.getElementById('distrito').value;
                const tipo_documento = document.getElementById('tipo_documento').value;
                const numero_documento = document.getElementById('numero_documento').value;

        if (!nombres ||!apellidos || !email|| !password || !direccion || !provincia || !distrito || !tipo_documento || !numero_documento) {
          Swal.showValidationMessage('Por favor complete todos los campos');
          return false;
        }
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
        const formData = new FormData();
        formData.append('nombres', result.value.nombres);
        formData.append('apellidos', result.value.apellidos);
        formData.append('email', result.value.email);
        formData.append('password', result.value.password);
        formData.append('direccion', result.value.direccion);
        formData.append('provincia', result.value.provincia);
        formData.append('distrito', result.value.distrito);
        formData.append('tipo_documento', result.value.tipo_documento);
        formData.append('numero_documento', result.value.numero_documento)
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/personal', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          if (response.status === 201) {
            Swal.fire('Exito', 'Personal registrado exitosamente', 'success');
            cargarPersonals();
            console.log(response.data);
          } else {
            Swal.fire('Error', 'Error al registrar producto', 'error');
          }
        } catch (error) {
          console.error('Error al registrar personal', error)
          Swal.fire('Error', 'Error al registrar personal', 'error');
        }

      }
    });
  };

  const handleEditar = (id) => {
    const personal = personals.find(p => p.id === id);

    Swal.fire({
      title: 'Editar Personal',
      html: `
      <div class="mb-3">
      <label for="nombres" class="form-label">Nombres</label>
      <input type="text" class="form-control" id="nombres" value="${personal.nombres}" placeholder="Ingrese sus Nombres">
  </div>
  <div class="mb-3">
      <label for="apellidos" class="form-label">Apellidos</label>
      <input type="text" class="form-control" id="apellidos" value="${personal.apellidos}" placeholder="Ingrese sus Apellidos">
  </div>
  <div class="mb-3">
      <label for="email" class="form-label">Correo Electrónico</label>
      <input type="email" class="form-control" id="email" value="${personal.email}" placeholder="Ingrese su correo electrónico">
  </div>
  <div class="mb-3">
      <label for="password" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="password" value="${personal.password}" placeholder="Ingrese su contraseña">
  </div>
  <div class="mb-3">
      <label for="direccion" class="form-label">Direccion</label>
      <input type="text" class="form-control" id="direccion" value="${personal.direccion}" placeholder="Ingrese su direccion">
  </div>
  <div class="mb-3">
      <label for="provincia" class="form-label">Provincia</label>
      <input type="text" class="form-control" id="provincia" value="${personal.provincia}" placeholder="Ingrese su provincia">
  </div>
  <div class="mb-3">
      <label for="distrito" class="form-label">Distrito</label>
      <input type="text" class="form-control" id="distrito" value="${personal.distrito}" placeholder="Ingrese su distrito">
  </div>
  <div class="mb-3">
      <label for="tipo_documento" class="form-label">Tipo de Documento</label>
      <select class="form-select" id="tipo_documento">
          <option value="1">DNI</option>
          <option value="2">Cédula</option>
          <!-- Agrega más opciones según necesites -->
      </select>
  </div>
  <div class="mb-3">
      <label for="numero_documento" class="form-label">Numero de Documento</label>
      <input type="text" class="form-control" id="numero_documento" value="${personal.numero_documento}" placeholder="Ingrese su numero de Documento">
  </div>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Actualizar',
      preConfirm: () => {
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const direccion = document.getElementById('direccion').value;
        const provincia = document.getElementById('provincia').value;
        const distrito = document.getElementById('distrito').value;
        const tipo_documento = document.getElementById('tipo_documento').value;
        const numero_documento= document.getElementById('numero_documento').value;
        
       
  
        if (!nombres || !apellidos || !email || !password || !direccion || !provincia || !distrito || !tipo_documento ||!numero_documento) {
          Swal.showValidationMessage('Por favor complete todos los campos');
          return false;
        }
        return {
          id,
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
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('nombres', result.value.nombres);
        formData.append('apellidos', result.value.apellidos);
        formData.append('email', result.value.email);
        formData.append('password', result.value.password);
        formData.append('direccion', result.value.direccion);
        formData.append('provincia', result.value.provincia);
        formData.append('distrito', result.value.distrito);
        formData.append('tipo_documento', result.value.tipo_documento);
        formData.append('numero_documento', result.value.numero_documento);
       
  
        try {
          const response = await axios.post(`http://127.0.0.1:8000/api/personal/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          if (response.status === 200) {
            Swal.fire('Éxito', 'Personal actualizado exitosamente', 'success');
            cargarPersonals();
          } else {
            Swal.fire('Error', 'Error al actualizar personal', 'error');
          }
        } catch (error) {
          console.error('Error al actualizar personal', error);
          Swal.fire('Error', 'Error al actualizar personal', 'error');
        }
      }
    });
  };

  return (
    <div className="container-fluid p-0 m-0">
      <SubNavBarAdministrador />
      <div className="container-fluid p-5 mt-2">
        <div className="container-fluid m-0 d-flex flex-column">
          <button className="btn btn-primary mb-3 w-25 align-self-center" onClick={handleAgregar}>
            Agregar Personal
          </button>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>E-mail</th>
                <th>Dirección</th>
                <th>Provincia</th>
                <th>Distrito</th>
                <th>Tipo de Documento</th>
                <th>Número de Documento</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {personals.map((Personal) => (
                <tr key={Personal.id}>
                  <td>{Personal.id}</td>
                  <td>{Personal.nombres}</td>
                  <td>{Personal.apellidos}</td>
                  <td>{Personal.email}</td>
                  <td>{Personal.direccion}</td>
                  <td>{Personal.provincia}</td>
                  <td>{Personal.distrito}</td>
                  <td>{Personal.tipo_documento}</td>
                  <td>{Personal.numero_documento}</td>
                  <td>{Personal.estado}</td>
                  <td>
                    <button className="btn btn-sm btn-primary" onClick={() => handleEditar(Personal.id)}>
                      Editar
                    </button>
                    <button className="btn btn-sm btn-danger ms-1" onClick={() => handleEliminar(Personal.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

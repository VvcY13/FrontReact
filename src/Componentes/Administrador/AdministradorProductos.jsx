import { useEffect, useState } from "react";
import SubNavBarAdministrador from "./subNavBarAdministrador";
import axios from "axios";
import Swal from 'sweetalert2';


export default function AdministradorProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/productos');
      setProductos(response.data);
    } catch (error) {
      console.log('Error al cargar productos', error);
    }
  };

  const handleEditar = (id) => {
    const producto = productos.find(p => p.id === id);

    Swal.fire({
      title: 'Editar Producto',
      html: `
        <div class="mb-3">
          <label for="nombreProd" class="form-label">Nombre del Producto</label>
          <input type="text" class="form-control" id="nombreProd" value="${producto.nombreProd}" placeholder="Nombre de Producto">
        </div>
        <div class="mb-3">
          <label for="marcaProd" class="form-label">Marca del Producto</label>
          <input type="text" class="form-control" id="marcaProd" value="${producto.marcaProd}" placeholder="Marca del Producto">
        </div>
        <div class="mb-3">
          <label for="presentacionProd" class="form-label">Presentación del producto</label>
          <input type="text" class="form-control" id="presentacionProd" value="${producto.presentacionProd}" placeholder="Presentación del producto">
        </div>
        <div class="mb-3">
          <label for="precioCompraProd" class="form-label">Precio de compra</label>
          <input type="number" class="form-control" id="precioCompraProd" value="${producto.precioCompraProd}" placeholder="Precio de compra">
        </div>
        <div class="mb-3">
          <label for="precioVentaProd" class="form-label">Precio de Venta</label>
          <input type="number" class="form-control" id="precioVentaProd" value="${producto.precioVentaProd}" placeholder="Precio de venta">
        </div>
        <div class="mb-3">
          <label for="stockProd" class="form-label">Stock del producto</label>
          <input type="number" class="form-control" id="stockProd" value="${producto.stockProd}" placeholder="Stock del producto">
        </div>
        <div class="mb-3">
          <label for="imagenProd" class="form-label">Foto del Producto</label>
          <input type="file" class="form-control" id="imagenProd" placeholder="Imagen del producto">
        </div>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Actualizar',
      preConfirm: () => {
        const nombreProd = document.getElementById('nombreProd').value;
        const marcaProd = document.getElementById('marcaProd').value;
        const presentacionProd = document.getElementById('presentacionProd').value;
        const precioCompraProd = document.getElementById('precioCompraProd').value;
        const precioVentaProd = document.getElementById('precioVentaProd').value;
        const stockProd = document.getElementById('stockProd').value;
        const imagenProd = document.getElementById('imagenProd').files[0];
  
        if (!nombreProd || !marcaProd || !presentacionProd || !precioCompraProd || !precioVentaProd || !stockProd) {
          Swal.showValidationMessage('Por favor complete todos los campos');
          return false;
        }
        return {
          id,
          nombreProd,
          marcaProd,
          presentacionProd,
          precioCompraProd,
          precioVentaProd,
          stockProd,
          imagenProd
        };
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('nombreProd', result.value.nombreProd);
        formData.append('marcaProd', result.value.marcaProd);
        formData.append('presentacionProd', result.value.presentacionProd);
        formData.append('precioCompraProd', result.value.precioCompraProd);
        formData.append('precioVentaProd', result.value.precioVentaProd);
        formData.append('stockProd', result.value.stockProd);
        if (result.value.imagenProd) {
          formData.append('imagenProd', result.value.imagenProd);
        }
  
        try {
          const response = await axios.post(`http://127.0.0.1:8000/api/producto/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          if (response.status === 200) {
            Swal.fire('Éxito', 'Producto actualizado exitosamente', 'success');
            cargarProductos();
          } else {
            Swal.fire('Error', 'Error al actualizar producto', 'error');
          }
        } catch (error) {
          console.error('Error al actualizar producto', error);
          Swal.fire('Error', 'Error al actualizar producto', 'error');
        }
      }
    });
  }
  const handleEliminar = async(id) => {
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
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/producto/${id}`);
        if (response.status === 200) {
          Swal.fire('Éxito', 'Producto eliminado exitosamente', 'success');
          cargarProductos();
      }else{
        Swal.fire('Error', 'Error al eliminar producto', 'error');
      }
    }catch (error){
      console.error('Error al eliminar producto', error);
      Swal.fire('Error', 'Error al eliminar producto', 'error');
    }
  }
  };
  const handleAgregar = () => {
    Swal.fire({
      title: 'Agregar Producto',
      html: ` 
        <div class="mb-3">
                    <label for="nombreProd" class="form-label">Nombre del Producto</label>
                    <input type="text" class="form-control" id="nombreProd" placeholder="Nombre de Producto">
                </div>
                <div class="mb-3">
                    <label for="marcaProd" class="form-label">Marca del Producto</label>
                    <input type="text" class="form-control" id="marcaProd" placeholder="Marca del Producto">
                </div>
                <div class="mb-3">
                <label for="presentacionProd" class="form-label">Presentación del producto</label>
                <input type="text" class="form-control" id="presentacionProd" placeholder="Presentación del producto">
            </div>
            <div class="mb-3">
                <label for="precioCompraProd" class="form-label">Precio de compra</label>
                <input type="number" class="form-control" id="precioCompraProd" placeholder="Precio de compra">
            </div>
            <div class="mb-3">
            <label for="precioVentaProd" class="form-label">Precio de Venta</label>
            <input type="number" class="form-control" id="precioVentaProd" placeholder="Precio de venta">
        </div>
        <div class="mb-3">
        <label for="stockProd" class="form-label">Stock del producto</label>
        <input type="number" class="form-control" id="stockProd" placeholder="Stock del producto">
    </div>
    <div class="mb-3">
    <label for="imagenProd" class="form-label">Foto del Producto</label>
    <input type="file" class="form-control" id="imagenProd" placeholder="Imagen del producto">
</div>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Registrar',
      preConfirm: async () => {
        const nombreProd = document.getElementById('nombreProd').value;
        const marcaProd = document.getElementById('marcaProd').value;
        const presentacionProd = document.getElementById('presentacionProd').value;
        const precioCompraProd = document.getElementById('precioCompraProd').value;
        const precioVentaProd = document.getElementById('precioVentaProd').value;
        const stockProd = document.getElementById('stockProd').value;
        const imagenProd = document.getElementById('imagenProd').files[0];

        if (!nombreProd || !marcaProd || !presentacionProd || !precioCompraProd || !precioVentaProd || !stockProd || !imagenProd) {
          Swal.showValidationMessage('Por favor complete todos los campos');
          return false;
        }
        return {
          nombreProd,
          marcaProd,
          presentacionProd,
          precioCompraProd,
          precioVentaProd,
          stockProd,
          imagenProd
        };
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('nombreProd', result.value.nombreProd);
        formData.append('marcaProd', result.value.marcaProd);
        formData.append('presentacionProd', result.value.presentacionProd);
        formData.append('precioCompraProd', result.value.precioCompraProd);
        formData.append('precioVentaProd', result.value.precioVentaProd);
        formData.append('stockProd', result.value.stockProd);
        formData.append('imagenProd', result.value.imagenProd);
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/producto', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          if (response.status === 200) {
            Swal.fire('Exito', 'Producto registrado exitosamente', 'success');
            cargarProductos();
            console.log(response.data);
          } else {
            Swal.fire('Error', 'Error al registrar producto', 'error');
          }
        } catch (error) {
          console.error('Error al registrar producto', error)
          Swal.fire('Error', 'Error al registrar producto', 'error');
        }

      }
    });
  }
  return (
    <div className="container-fluid p-0 m-0">
      <SubNavBarAdministrador />
      <div className="container-fluid p-5 mt-2">
        <div className="container-fluid m-0 d-flex flex-column">
          <button className="btn btn-primary mb-3 w-25 align-self-center" onClick={handleAgregar}>
            Agregar Producto
          </button>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Precio Compra</th>
                <th>Precio Venta</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombreProd}</td>
                  <td>{producto.marcaProd}</td>
                  <td>{producto.precioCompraProd}</td>
                  <td>{producto.precioVentaProd}</td>
                  <td>{producto.stockProd}</td>
                  <td>
                    <button className="btn btn-sm btn-primary" onClick={() => handleEditar(producto.id)}>
                      Editar
                    </button>
                    <button className="btn btn-sm btn-danger ms-1" onClick={() => handleEliminar(producto.id)}>
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
  )
}


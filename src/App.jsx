import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombres, apellidos, email, password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      // Aquí puedes realizar alguna acción adicional, como redirigir al usuario a otra página
    } catch (error) {
      console.error('Error:', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };



  return (
    <>
      <div className='container-fluid' style={{width: "30%"}}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombres</label>
            <input type="text" className="form-control" id="nombres" aria-describedby="emailHelp" value={nombres} onChange={(e)=> setNombres(e.target.value)} />
            
          </div>
          <div className="mb-3">
            <label className="form-label">Apellidos</label>
            <input type="text" className="form-control" id="apellidos" aria-describedby="emailHelp" value={apellidos} onChange={(e)=> setApellidos(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input type="email" className="form-control" id="correo"  aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" aria-describedby="emailHelp" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          
          <button type="submit" className="btn btn-danger">Registrar</button>
        </form>
      </div>
    </>
  )
}





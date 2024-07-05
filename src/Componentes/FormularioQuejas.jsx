import { useState } from "react"
import Swal from "sweetalert2";


export default function FormularioQuejas() {
  const [asunto, setAsunto] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error("token no encontrado")
      return;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const id_personal = parseInt(payload.sub, 10); 

    const queja = {
      id_personal,
      asunto,
      comentario
    };

    try {
      const response = await fetch("http://localhost:8000/api/quejasyreclamos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(queja),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire('Enviado', response.data, 'success');
        setAsunto("");
        setComentario("");

      } else {
        console.error("error al enviar la queja", data);
      }
    } catch (error) {
      console.error("error al enviar la queja catch", error);
    }

  };

  return (
    <div className="container-fluid" style={{ display: "flex", flexWrap: "nowrap", flexDirection: "column", width: "50rem", marginTop: "3rem" }}>
      <form onSubmit={handleSubmit}>

        <div className="mb-3" style={{ alignSelf: "center", width: "40rem" }}>
          <label htmlFor="asunto" className="form-label">Asunto</label>
          <select
            className="form-select"
            id="exampleFormControlInput1"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
          >
            <option value="">Seleccione un asunto</option>
            <option value="Quejas">QUEJAS</option>
            <option value="Sugerencias">SUGERENCIAS</option>
            <option value="Opiniones">OPINIONES</option>
          </select>
        </div>

        <div className="mb-3" style={{ alignSelf: "center", width: "40rem" }}>
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            style={{ resize: "none" }}
            id="exampleFormControlTextarea1"
            rows="5"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3" style={{ alignSelf: "center", width: "40rem" }}>
          <button type="submit" className="btn btn-danger">Enviar</button>
        </div>
      </form>
    </div>
  )
}

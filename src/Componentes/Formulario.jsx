import { useState } from "react";

function Formulario({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const manejarAgregar = () => {
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={manejarAgregar}>Agregar</button>
    </div>
  );
}

export default Formulario;
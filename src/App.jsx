import { useState, useEffect } from "react";
import Formulario from "./Componentes/Formulario";
import Lista from "./Componentes/Lista";

import "./App.css";

function App() {
  const [tareas, setTareas] = useState(() => {
    const datos = localStorage.getItem("tareas");
    return datos ? JSON.parse(datos) : [];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nombreLimpio = texto.trim();
    if (nombreLimpio === "") return;
    if (tareas.some((t) => t.nombre === nombreLimpio)) return;

    const nuevaTarea = {
      nombre: nombreLimpio,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  const completarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const completadas = tareas.filter((t) => t.completada).length;

  return (
    <div className="app">
      <h1>Lista interactiva de  Tareas</h1>

      <Formulario agregarTarea={agregarTarea} />

      <h3>
        Total: {tareas.length} | Completadas: {completadas}
      </h3>

      <Lista
        tareas={tareas}
        completarTarea={completarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
function Tarea({ tarea, index, completarTarea, eliminarTarea }) {
  return (
    <li
      style={{
        textDecoration: tarea.completada ? "line-through" : "none",
      }}
    >
      {tarea.nombre}{" "}
      <button onClick={() => completarTarea(index)}>
        {tarea.completada ? "Deshacer" : "Completar"}
      </button>
      <button onClick={() => eliminarTarea(index)}>Eliminar</button>
    </li>
  );
}

export default Tarea;
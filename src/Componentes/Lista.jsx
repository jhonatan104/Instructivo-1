import Tarea from "./Tarea";

function Lista({ tareas, completarTarea, eliminarTarea }) {
  if (tareas.length === 0) {
    return <p>No hay tareas registradas.</p>;
  }

  return (
    <ul>
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          index={index}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
}

export default Lista;
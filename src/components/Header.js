import { useSelector } from "react-redux";

export const Header = () => {
  const todos = useSelector((state) => state.todos);
  const selectedCount = todos.filter((todo) => todo.selected).length;

  return (
    <div className="row">
      <div className="col">
        <input type="checkbox"></input>
      </div>
      <div className="col">
        {selectedCount ? `${selectedCount} Seleccionados` : "Tareas"}
      </div>
      <div className="col">
        {selectedCount ? (
          <button onClick={() => console.log(`borrar seleccionados`)}>
            Borrar Seleccionados
          </button>
        ) : null}
      </div>
    </div>
  );
};

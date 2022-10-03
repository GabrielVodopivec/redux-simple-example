import { useSelector } from "react-redux";
import { todosSelector } from "../app/selectors";

export const Header = () => {
  const todos = useSelector(todosSelector);
  const selectedCount = todos.filter((todo) => todo.selected).length;

  return (
    <div className="d-flex flex-row align-items-center border px-3 mt-4">
      <input type="checkbox" className="form-check-input flex-shrink-0"></input>
      <span className="p-4 fs-5 fw-bold">
        {selectedCount ? `${selectedCount} Seleccionados` : "Tareas"}
      </span>
      {selectedCount ? (
        <button
          className="btn btn-danger m-4"
          onClick={() => console.log(`borrar seleccionados`)}
        >
          BORRAR
        </button>
      ) : null}
    </div>
  );
};

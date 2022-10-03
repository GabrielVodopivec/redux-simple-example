import { useDispatch, useSelector } from "react-redux";
import { deleteAllSelected, toggleSelectAll } from "../app/actions";
import { todosSelector } from "../app/selectors";

export const Header = () => {
  
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const selectedCount = todos.filter((todo) => todo.selected).length;

  const handleDeleteAllSelected = () => {
    dispatch(deleteAllSelected())
    const input = document.getElementById("checkSelectAll")
    input.checked = false;
  }
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    dispatch(toggleSelectAll(checked))
  }

  return (
    <div className="d-flex flex-row align-items-center border px-3 mt-4">
      <input
        disabled={todos.length ? false : true}
        id="checkSelectAll"
        onChange={handleSelectAll}
        type="checkbox"
        className="form-check-input flex-shrink-0"></input>
      <span className="p-4 fs-5 fw-bold">
        {selectedCount ? `${selectedCount} Seleccionados` : "Tareas"}
      </span>
      {selectedCount ? (
        <button
          className="btn btn-danger m-4"
          onClick={handleDeleteAllSelected}
        >
          BORRAR
        </button>
      ) : null}
    </div>
  );
};

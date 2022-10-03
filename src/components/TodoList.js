import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleSelection } from "../app/actions";
import { todosSelector } from "../app/selectors";

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const handleToggleSelection = (index) => () => {
    dispatch(toggleSelection(index));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className="list-group mx-0 w-auto">
      {todos.map(({ text, selected, id }) => (
        <label
          className="list-group-item d-flex gap-2 align-items-center justify-content-between"
          key={id}
        >
          <input
            type="checkbox"
            className="form-check-input flex-shrink-0"
            checked={selected}
            value={selected}
            onChange={handleToggleSelection(id)}
          />
          <span className="d-block">{text}</span>
          <button
            className="btn btn-close"
            onClick={() => handleDelete(id)}
          ></button>
        </label>
      ))}
    </div>
  );
};

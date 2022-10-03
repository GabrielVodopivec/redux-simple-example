import { useSelector, useDispatch } from "react-redux";
import { toggleSelection } from "../app/actions";
import { todosSelector } from "../app/selectors";

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const handleToggleSelection = (index) => () => {
    dispatch(toggleSelection(index));
  };

  return (
    <div className="list-group mx-0 w-auto">
      {todos.map(({ text, selected }, i) => (
        <label
          className="list-group-item d-flex gap-2 align-items-center justify-content-between"
          key={`row-${i}`}
        >
          <input
            type="checkbox"
            className="form-check-input flex-shrink-0"
            value={selected}
            onChange={handleToggleSelection(i)}
          />
          <span className="d-block">{text}</span>
          <button
            className="btn btn-close"
            onClick={() => console.log(`remove el item ${i}`)}
          ></button>
        </label>
      ))}
    </div>
  );
};

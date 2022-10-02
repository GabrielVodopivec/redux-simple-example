import { useSelector, useDispatch } from "react-redux";
import { toggleSelection } from "../app/actions";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleSelection = (index) => () => {
    dispatch(toggleSelection(index));
  };

  return (
    <div className="container-sm">
      {todos.map(({ text, selected }, i) => (
        <div className="row" key={`row-${i}`}>
          <div className="col">
            <input
              type="checkbox"
              value={selected}
              onChange={handleToggleSelection(i)}
            />
          </div>
          <div className="col">{text}</div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => console.log(`remove el item ${i}`)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../app/actions";

export const Footer = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask(text));
    setText("");
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="input-group w-100 my-4">
      <label className="input-group-text">Agregar</label>
      <input
        className="form-control"
        type="text"
        value={text}
        placeholder="Nueva Tarea"
        onKeyDown={handleKeyDown}
        onChange={handleChangeText}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
};

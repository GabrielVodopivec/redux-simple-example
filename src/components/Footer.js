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
    <div className="row">
      <div className="input-group col">
        <input
          type="text"
          value={text}
          onKeyDown={handleKeyDown}
          onChange={handleChangeText}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>+</button>
      </div>
    </div>
  );
};

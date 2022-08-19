import React from "react";

import "./inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="inputfield" onSubmit={handleAdd}>
      <input
        type="input"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Enter a task"
        className="inputfield__box"
      />
      <button type="submit" className="inputfield__submit">
        Go
      </button>
    </form>
  );
};

export default InputField;

import React, { useRef } from "react";
import "./inputfield.css";
import { InputFieldProps } from "../../types/components";

const InputField: React.FC<InputFieldProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="inputfield"
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
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

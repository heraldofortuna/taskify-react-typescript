import React from "react";

import "./inputfield.css";

const InputField: React.FC = () => {
  return (
    <form className="inputfield">
      <input
        type="input"
        placeholder="Enter a task"
        className="inputfield__box"
      />
      <button type="submit" className="inputfield__button">
        Go
      </button>
    </form>
  );
};

export default InputField;

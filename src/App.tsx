import React, { useState } from "react";

import InputField from "./components/InputField/InputField";
import { Todo } from "./model";

import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((item) => (
        <li key={item.id}>{item.todo}</li>
      ))}
    </div>
  );
};

export default App;

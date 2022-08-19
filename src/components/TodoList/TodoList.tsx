import React from "react";

import { Todo } from "../../model";

import "./TodoList.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((item) => (
        <li key={item.id}>{item.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;

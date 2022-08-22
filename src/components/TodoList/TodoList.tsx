import React, { useState, useEffect } from "react";

import { Todo } from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";

import "./TodoList.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.isDone));
    setActiveTodos(todos.filter((todo) => !todo.isDone));
  }, [todos]);

  return (
    <div className="container">
      <div className="todolist">
        <span className="todolist__heading">Active Tasks</span>
        {activeTodos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todolist todolist--remove">
        <span className="todolist__heading">Completed Tasks</span>
        {completedTodos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

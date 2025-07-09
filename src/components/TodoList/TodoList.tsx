import React, { useState, useEffect } from "react";
import { Todo } from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";
import { TodoListProps } from "../../types/components";
import "./TodoList.css";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
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
        {activeTodos.length > 0 ? 
          activeTodos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          )) : (
            <p>No active tasks</p>
          )}
      </div>
      <div className="todolist todolist--remove">
        <span className="todolist__heading">Completed Tasks</span>
        {completedTodos.length > 0 ? 
          completedTodos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              isCompleted
            />
          )) : (
            <p>No completed tasks</p>
          )}
      </div>
    </div>
  );
};

export default TodoList;

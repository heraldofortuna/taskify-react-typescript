import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../../model";

import "./SingleTodo.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="singletodo"
      onSubmit={(event) => handleEdit(event, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          className="singletodo__text"
          value={editTodo}
          onChange={(event) => setEditTodo(event.target.value)}
        />
      ) : todo.isDone ? (
        <s className="singletodo__text">{todo.todo}</s>
      ) : (
        <p className="singletodo__text">{todo.todo}</p>
      )}
      <div className="singletodo__icons">
        <span
          className="singletodo__icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="singletodo__icon"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span className="singletodo__icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

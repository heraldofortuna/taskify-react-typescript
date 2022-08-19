import React from "react";
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
  return (
    <form className="singletodo">
      <p className="singletodo__text">{todo.todo}</p>
      <div>
        <span className="singletodo__icon">
          <AiFillEdit />
        </span>
        <span className="singletodo__icon">
          <AiFillDelete />
        </span>
        <span className="singletodo__icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

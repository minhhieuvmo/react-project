import React from "react";
import TodoAction from "./TodoAction";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="w-full p-2 md:w-1/2 mx-auto">
      <h1 className="text-blue-300 text-8xl text-center md:text-7xl">Todos</h1>
      <div className="mt-5 border-2 rounded-md">
        <TodoInput />
        <TodoList />
        <TodoAction />
      </div>
    </div>
  );
};

export default TodoApp;

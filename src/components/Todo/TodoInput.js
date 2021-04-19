import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import PropsType from "prop-types";
import { addTodo } from "../../actions/todoAction";

const TodoInput = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const onTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle) {
      const newTodo = {
        id: uuidv4(),
        title: todoTitle,
        completed: false,
      };
      addTodo(newTodo);
      setTodoTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <i
        // onClick={handleCompleteAll}
        className="fas fa-chevron-down md:text-2xl text-gray-400"
      ></i>
      <input
        type="text"
        placeholder="What need to be done?"
        className="text-2xl focus:outline-none w-full"
        name="title"
        onChange={onTitleChange}
        value={todoTitle}
      />
      <div className="flex justify-center">
        <input type="submit" value="add" className="p-2 rounded my-1" />
      </div>
    </form>
  );
};

TodoInput.PropsType = {
  addTodo: PropsType.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTodo })(TodoInput);

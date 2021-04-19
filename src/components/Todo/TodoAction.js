import React from "react";
import { connect } from "react-redux";
import PropsType from "prop-types";
import {
  allTodo,
  activeTodo,
  completedTodo,
  clearAllTodo,
} from "../../actions/todoAction";

const TodoAction = ({ todos, allTodo }) => {
  return (
    <div className="text-center flex-col flex md:flex-row justify-evenly">
      <span>Total todos: {todos.length}</span>
      {/* <button className="focus:ouline-red" onClick={allTodo}>
        ALL
      </button> */}
    </div>
  );
};

TodoAction.PropsType = {
  todos: PropsType.array.isRequired,
};

const mapStateToProps = (state) => {
  return { todos: state.myTodos.todos };
};

export default connect(mapStateToProps, {
  allTodo,
  activeTodo,
  completedTodo,
  clearAllTodo,
})(TodoAction);

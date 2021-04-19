import React from "react";
import { connect } from "react-redux";
import PropsType from "prop-types";
import { markComplete, deleteTodo } from "../../actions/todoAction";

const TodoList = ({ todos, markComplete, deleteTodo }) => {
  // const renderList = () => {
  //     switch (todos.filter) {
  //         case 'all':
  //             return (

  //             )
  //     }
  // }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${
              todo.completed ? "bg-red-500 line-through" : ""
            } p-2 rounded`}
          >
            {todo.title}
            <div className="float-right px-1">
              <input
                type="checkbox"
                onChange={markComplete.bind(this, todo.id)}
                className="mr-2"
              />
              <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.PropsType = {
  todos: PropsType.array.isRequired,
  markComplete: PropsType.func.isRequired,
  deleteTodo: PropsType.func.isRequired,
};

const mapStateToProps = (state) => {
  return { todos: state.myTodos.todos };
};

export default connect(mapStateToProps, { markComplete, deleteTodo })(TodoList);

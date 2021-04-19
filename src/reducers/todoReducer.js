import {
  MARK_COMPLETE,
  ADD_TODO,
  DELETE_TODO,
  TODO_ALL,
  TODO_ACTIVE,
  TODO_COMPLETED,
  TODO_CLEAR_ALL,
} from "../actions/types";
const initialState = {
  todos: [
    {
      id: 1,
      title: "viec1",
      completed: false,
    },
    {
      id: 2,
      title: "viec2",
      completed: false,
    },
    {
      id: 3,
      title: "viec3",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) todo.completed = !todo.completed;
          return todo;
        }),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TODO_ALL:
      return {
        ...state,
        todos: [{ ...state.todos, filter: "all" }],
      };
    case TODO_ACTIVE:
      return {
        ...state,
        todos: [{ ...state.todos, filter: "active" }],
      };
    case TODO_COMPLETED:
      return {
        ...state,
        todos: [{ ...state.todos, filter: "completed" }],
      };
    case TODO_CLEAR_ALL:
      return {
        ...state,
        todos: [],
        filter: "",
      };
    default:
      return state;
  }
};

export default todoReducer;

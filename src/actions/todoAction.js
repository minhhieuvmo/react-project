import {
  MARK_COMPLETE,
  ADD_TODO,
  DELETE_TODO,
  TODO_ALL,
  TODO_ACTIVE,
  TODO_COMPLETED,
  TODO_CLEAR_ALL,
} from "./types";

export const markComplete = (id) => {
  const actionMarkComplete = (dispatch) => {
    dispatch({
      type: MARK_COMPLETE,
      payload: id,
    });
  };
  return actionMarkComplete;
};

export const addTodo = (newTodo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: newTodo,
  });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

export const allTodo = () => (dispatch) => {
  dispatch({
    type: TODO_ALL,
  });
};

export const activeTodo = () => (dispatch) => {
  dispatch({
    type: TODO_ACTIVE,
  });
};

export const completedTodo = () => (dispatch) => {
  dispatch({
    type: TODO_COMPLETED,
  });
};

export const clearAllTodo = () => (dispatch) => {
  dispatch({
    type: TODO_CLEAR_ALL,
  });
};

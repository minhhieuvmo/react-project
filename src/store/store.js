import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // dc su dung khi goi ham bat dong bo
import { counterReducer } from "../reducers/counterReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { quoteReducer } from "../reducers/quoteReducer";
import todoReducer from "../reducers/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  quotes: quoteReducer,
  myTodos: todoReducer,
});

// const initState = {};

let store = createStore(
  rootReducer,
  //   initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

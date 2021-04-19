import "./App.css";
//react router
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
//components
import Home from "./components/Home";
import Counter from "./components/CounterApp/CounterApp";
import Calculator from "./components/Calculator/Calculator";
import RandomQuote from "./components/RandomQuote/RandomQuote";
import Todo from "./components/Todo/TodoApp";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="font-bold">
          <h1 className="my-5 relative z-50">React Projects</h1>
        </Link>
      </div>

      <div className="container flex flex-wrap justify-center mx-auto my-5 z-50 relative">
        <Link
          to="/counter"
          className="bg-indigo-400 hover:bg-indigo-700 text-white rounded-full px-4 py-1 mr-4"
        >
          Counter
        </Link>
        <Link
          to="/randomquote"
          className="bg-indigo-400 hover:bg-indigo-700 text-white rounded-full px-4 py-1 mr-4"
        >
          RandomQuoteMachine
        </Link>
        <Link
          to="/calculator"
          className="bg-indigo-400 hover:bg-indigo-700 text-white rounded-full px-4 py-1 mr-4"
        >
          Calculator
        </Link>
        <Link
          to="/todo"
          className="bg-indigo-400 hover:bg-indigo-700 text-white rounded-full px-4 py-1 mr-4"
        >
          Todo List
        </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/randomquote">
          <RandomQuote />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

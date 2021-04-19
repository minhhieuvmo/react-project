import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createCounterReset,
  createCounterDecrease,
  createCounterIncrease,
} from "../../actions/counter";

const CounterRedux = (props) => {
  const { value } = useSelector((state) => state.counter);
  // console.log(value);

  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    <section className="bg-gray-200 shadow-lg h-72 mb-8 mt-10 rounded-xl w-2/6">
      <h3 className="text-center py-12 text-6xl">{value}</h3>
      <div className="flex justify-around text-center mb-6">
        <button
          className="btn bg-indigo-400 hover:bg-indigo-700 -mx-2 rounded text-white px-3 focus:outline-none"
          onClick={() => dispatch(createCounterDecrease())}
        >
          Decrease
        </button>
        <button
          className="btn bg-indigo-400 hover:bg-indigo-700 -mx-2 rounded text-white px-3 focus:outline-none"
          onClick={() => dispatch(createCounterReset())}
        >
          Reset
        </button>
        <button
          className="btn bg-indigo-400 hover:bg-indigo-700 -mx-2 rounded text-white px-3 focus:outline-none"
          onClick={() => dispatch(createCounterIncrease())}
        >
          Increase
        </button>
      </div>
      <div className="text-center mt-10 font-medium">
        <span>Functional Redux</span>
      </div>
    </section>
  );
};

export default CounterRedux;

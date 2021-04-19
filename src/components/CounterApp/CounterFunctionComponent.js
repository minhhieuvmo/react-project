import React, { useState } from "react";

const CounterFunctionComponent = () => {
  const [value, setValue] = useState(0);
  const handleReset = () => {
    setValue(0);
  };

  return (
    <section className="bg-gray-200 shadow-lg h-72 mb-8 mt-10 rounded-xl w-2/6">
      <h3 className="text-center py-12 text-6xl">{value}</h3>
      <div className="flex justify-around text-center mb-6">
        <button
          className="btn bg-indigo-400 hover:bg-indigo-700 -mx-2 rounded text-white px-3 focus:outline-none"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button
          className="btn bg-indigo-400 hover:bg-indigo-700 -mx-2 rounded text-white px-3 focus:outline-none"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="btn bg-indigo-400 hover:bg-indigo-700 -mx-2 rounded text-white px-3 focus:outline-none"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </div>
      <div className="text-center mt-10 font-medium">
        <span>Functional Component</span>
      </div>
    </section>
  );
};

export default CounterFunctionComponent;

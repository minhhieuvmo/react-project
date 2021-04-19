import React, { useEffect, useState } from "react";
import CounterFunctionComponent from "./CounterFunctionComponent";
import CounterRedux from "./CounterRedux";

const CounterApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <h2>Loading</h2>
        </div>
      ) : (
        <div className="h-full lg:h-screen text-center mt-5">
          <h2>My Counter</h2>
          <div className="flex justify-around items-center flex-wrap">
            <CounterFunctionComponent />
            <CounterRedux />
          </div>
        </div>
      )}
    </>
  );
};

export default CounterApp;

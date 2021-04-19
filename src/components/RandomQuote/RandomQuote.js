import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createFetchApi } from "../../actions/ramdomQuote";
import { useDispatch } from "react-redux";

const RandomQuote = (props) => {
  const makeColor = () => {
    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  const [color, setColor] = useState(null);
  const [index, setIndex] = useState(0);
  const [isFade, setIsFade] = useState(false);

  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(createFetchApi());
  }, [dispatch]);

  useEffect(() => {
    setColor(makeColor());
  }, []);

  useEffect(() => {
    setIsFade(true);
  }, [index]);

  const handleNewQuote = () => {
    let ramdomIndex = Math.round(Math.random() * quotes.length);
    setIsFade(false);
    setTimeout(() => {
      setIndex(ramdomIndex);
      setColor(makeColor());
    }, 700);
  };

  const styleColor = {
    color: color,
  };

  if (quotes.length === 0) {
    return "loading....";
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-0 p-2">
      <div className="w-full md:w-6/12 lg:w-4/12 md:p-3 mx-auto p-2 bg-white shadow-2xl rounded justify-center items">
        <div
          className={`transition duration-700 w-full text-center text-xl font-bold ${
            isFade ? "opacity-100" : "opacity-0"
          }`}
          style={styleColor}
        >
          <i className="fas fa-quote-left"></i>
          {quotes[index].quote}
        </div>
        <div
          style={styleColor}
          className="text-right mt-5 transition ease-in-out"
        >
          - {quotes[index].author}
        </div>
        <div className="flex mt-5">
          <button
            className="ml-auto px-3 py-2 transition duration-700 ease-in-out bg-indigo-700 text-white rounded"
            onClick={handleNewQuote}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;

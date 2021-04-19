import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={() => props.onClick(props.value)}
      value={props.value}
      className={`${props.noHeight ? "" : "h-16"} ${
        props.moreClass ? props.moreClass : ""
      } text-white border hover:text-black hover:border-gray-500 focus:outline-none text-xl flex justify-center items-center w-full border-black`}
    >
      {props.value}
    </button>
  );
};

export default Button;

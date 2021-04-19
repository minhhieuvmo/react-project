import React, { useState } from "react";
import Button from "./Button";
const Calculator = () => {
  const [resultInput, setResultInput] = useState("");
  const [resultOutput, setResultOutput] = useState([]);
  // console.log(resultOutput);
  // console.log(resultInput);
  const getValueNum = (value) => {
    if (resultInput.length >= 24) {
      setResultOutput("Number Limit");
      return;
    }
    const dataResultInput = resultInput + value;
    setResultInput(dataResultInput);
  };

  const getOperator = (value) => {
    if (resultInput.lastIndexOf("+") === resultInput.length - 1) {
      if (value === "+") {
        return;
      }
      let arrResultIn = resultInput.split("");
      arrResultIn[arrResultIn.length - 1] = value;
      setResultInput(arrResultIn.join(""));
      setResultOutput(value);
    }

    if (resultInput.lastIndexOf("-") === resultInput.length - 1) {
      if (value === "-") {
        return;
      }
      let arrResultIn = resultInput.split("");
      arrResultIn[arrResultIn.length - 1] = value;
      setResultInput(arrResultIn.join(""));
      setResultOutput(value);
    }

    if (resultInput.lastIndexOf("*") === resultInput.length - 1) {
      if (value === "*") {
        return;
      }

      let arrResultIn = resultInput.split("");
      arrResultIn[arrResultIn.length - 1] = value;
      setResultInput(arrResultIn.join(""));
      setResultOutput(value);
    }

    if (resultInput.lastIndexOf("/") === resultInput.length - 1) {
      if (value === "/") {
        return;
      }
      let arrResultIn = resultInput.split("");
      arrResultIn[arrResultIn.length - 1] = value;
      setResultInput(arrResultIn.join(""));
      setResultOutput(value);
    }
    const dataInput = resultInput + value;
    setResultInput(dataInput);
    setResultOutput(value);
  };

  const caculate = () => {
    if (!resultInput) {
      return;
    }
    try {
      const num = resultInput
        .replaceAll(/[^-()\d/*+.]/g, "")
        .replaceAll("--", "+")
        .replaceAll("++", "+");
      console.log("num: " + num);
      // eslint-disable-next-line no-eval
      const numTotal = resultInput + "=" + eval(num);
      // eslint-disable-next-line no-eval
      setResultOutput(eval(num));
      setResultInput(numTotal);
    } catch (error) {
      setResultOutput(error);
    }
    // console.log(eval(resultInput));
  };

  const onClear = () => {
    setResultInput("");
    setResultOutput([]);
  };

  return (
    <div className="w-72 md:w-80 mx-auto mt-7 bg-black p-2 font-mono">
      <div className="text-yellow-600 text-right">{resultInput}</div>
      <div className="text-right text-white">
        {resultOutput.length !== 0 ? resultOutput : 0}
      </div>
      <div className="w-full h-full grid grid-cols-4">
        <Button
          value="AC"
          moreClass="bg-red-500 col-span-2"
          onClick={() => {
            onClear();
          }}
        />
        <Button value="/" moreClass="bg-gray-400" onClick={getOperator} />
        <Button value="*" moreClass="bg-gray-400" onClick={getOperator} />

        <Button value="7" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button value="8" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button value="9" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button value="-" moreClass="bg-gray-400" onClick={getOperator} />

        <Button value="4" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button value="5" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button value="6" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button value="+" moreClass="bg-gray-400" onClick={getOperator} />

        <Button value="1" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button value="2" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button value="3" moreClass="bg-gray-600" onClick={getValueNum} />
        <Button
          value="="
          moreClass="row-span-2 bg-blue-800"
          noHeight
          onClick={caculate}
        />

        <Button
          value="0"
          moreClass="bg-gray-600 col-span-2"
          onClick={getValueNum}
        />
        <Button value="." moreClass="bg-gray-600" onClick={getOperator} />
      </div>
    </div>
  );
};

export default Calculator;

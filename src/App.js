import React, { useState } from "react";
import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { DisplayArea } from "./components/DisplayArea";

import a from "./assets/a.wav";

const operators = ["+", "-", "*", "/", "%"];
// what is the reason - operators are readable variables

function App() {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isPrank, setIsPrank] = useState(false);
  const [audio] = useState(new Audio(a));

  const handleOnClick = (value) => {
    isPrank && setIsPrank(false);
    if (value === "AC") {
      setStr("");
      return;
    }

    if (value === "C") {
      const temStr = str.slice(0, -1);
      setStr(temStr);
      return;
    }

    if (value === "=") {
      return onTotal();
    }

    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = str.slice(-1);
      if (operators.includes(lastChar)) {
        const temStr = str.slice(0, -1);
        setStr(temStr + value);
        return;
      }
    }

    if (value === ".") {
      if (lastOperator) {
        console.log(lastOperator);
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        // const beforeLastOperator = str.slice(0, positionOfLastOperator + 1);
        const afterLastOperator = str.slice(positionOfLastOperator + 1);

        if (afterLastOperator.includes(".")) {
          return;
        }
      } else {
        if (str.includes(".")) {
          return;
        }
      }
    }

    setStr(str + value);
  };

  const onTotal = () => {
    // const total = eval(str);
    // setStr(total.toFixed(2).toString());
    const prankValue = randomNumber();
    prankValue > 0 && audio.play() && setIsPrank(true);
    const total = eval(str) + prankValue;
    // eval is used to evaluate the string

    setStr(total.toFixed(2).toString());
    // toFixed(2) is used to display 2 decimal places
    // toString() is used to convert the number to string
  };

  const randomNumber = () => {
    const num = Math.ceil(Math.random() * 10);
    return num > 3 ? 0 : num;
  };

  return (
    // <!-- main content -->
    <div className="wrapper">
      {/* <!-- calc body --> */}
      <div className="calculator">
        {/* <!-- calculator header --> */}
        <div className="calc-header">
          <h1>Simple Calculator</h1>
        </div>

        {/* <!-- calculator body --> */}
        <div className="calc-body">
          {/* <!-- calculator input & display area --> */}
          <DisplayArea str={str} />
          {/* <!-- calculator input &buttons --> */}
          <ButtonArea handleOnClick={handleOnClick} />
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default App;

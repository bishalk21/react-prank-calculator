import { useState } from "react";
import "./App.css";
import { ButtonArea } from "./components/buttonArea";
import { DisplayComp } from "./components/displayComp.js";
import a from "./assets/a.wav";

// operators are readable variables so we can use them in the code
const operators = ["+", "-", "*", "/"];

function App() {
  // to display the value of the button on the display component from the button component
  // 1. to hold the state of the button, we need to create a state variable in the main component and pass it as props to the button component
  // 2. we need to create a function in the main component and pass it as props
  // 3. we need to call the function in the button component on click of the button
  // 4. we need to pass the value of the button as argument to the function
  // 5. we need to call the function in the main component and pass the value of the button as argument to the function
  // 6. we need to update the state variable in the main component with the value of the button
  // 7. we need to pass the state variable as props to the display component
  // 8. we need to display the state variable in the display component

  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  // to make prank value of the button on the display component from the button component
  const [prank, setPrank] = useState(false); // setting the initial value of the prank to false because we don't want to display the prank value on page load
  const [audio] = useState(new Audio(a));

  const handleOnClick = (val) => {
    prank && setPrank(false); // false because we don't want to display the prank value on page load

    // what we should do when the button is clicked

    // 1. if the value of the button is AC then we need to clear the display
    if (val === "AC") {
      setStr("");
      return;
    }

    // 3. if the value of the button is = then we need to calculate the total
    if (val === "=") {
      // calculation works because we have imported eval function from react
      onTotal();
      return;
    }

    // 2. if the value of the button is C then we need to clear the last character of the display
    if (val === "C") {
      const newStr = str.slice(0, -1);
      setStr(newStr);
      return;
    }

    // 4. if the value of the button is any number or operator then we need to add it to the display
    // 5. we need to check if the last character of the display is an operator and the current value is an operator then we need to replace the last character of the display with the current value
    if (operators.includes(val)) {
      setLastOperator(val); // to check if the last character of the display is an operator
      const lastChar = str[str.length - 1];
      // if the last character of the display is an operator and the current value is an operator then we need to replace the last character of the display with the current value
      if (operators.includes(lastChar)) {
        const strWithoutLastChar = str.slice(0, -1);
        setStr(strWithoutLastChar + val);
        return;
      }
    }

    // 6. if the value of the button is dot then we need to add it to the display only if the last character of the display is not a dot
    // - create a variable to hold the last character of the display
    // - check if the last character of the display is a dot
    // - if the last character of the display is a dot then we need to return
    // - if the last character of the display is not a dot then we need to add the dot to the display
    if (val === ".") {
      if (lastOperator) {
        const lastOperatorIndex = str.lastIndexOf(lastOperator);
        const beforeLastOperator = str.slice(lastOperatorIndex + 1);
        if (beforeLastOperator.includes(".")) {
          return;
        }
      } else {
        if (str.includes(".")) {
          return;
        }
      }
    }

    setStr(str + val);
  };

  // 2. total function to calculate the total
  const onTotal = () => {
    const prankValue = randomNumber();
    prankValue > 0 && audio.play() && setPrank(true);
    const total = eval(str) + prankValue;
    setStr(total.toFixed(2).toString());
    // toFixed(2) is used to round the number to 2 decimal places
    // toString() is used to convert the number to string
  };

  // 3. prank function to make prank value of the button on the display component from the button component
  const randomNumber = () => {
    // 1. to make prank value of the button on the display component from the button component
    // 2. we need to create a state variable in the main component and pass it as props to the button component
    // 3. we need to create a function in the main component
    // 4. we need to call the function in the button component on click of the button

    // math.ceil rounds the number up to the nearest integer (1.1 -> 2)
    // math.random generates a random number between 0 and 1
    const num = Math.ceil(Math.random() * 10);
    return num > 3 ? 0 : num;
  };

  return (
    <>
      {/* <!-- WRAPPER --> */}
      <div className="wrapper">
        <div className="container-fluid">
          {/* <!-- CALCULATORS --> */}
          <div className="simple-calculator">
            <h2 className="title">React Prank Calculator</h2>

            <div className="container">
              {/* DISPLAY COMPONENT */}
              <DisplayComp str={str} prank={prank} />

              {/* BUTTON AREA */}
              <ButtonArea handleOnClick={handleOnClick} />
            </div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

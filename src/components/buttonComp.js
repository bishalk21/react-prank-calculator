import React from "react";

export const ButtonComp = ({ className, label, handleOnClick }) => {
  // 1. to hold the state of the button, we need to create a state variable in the main component and pass it as props to the button component
  // 2. we need to create a function in the main component and pass it as props
  // 3. we need to call the function in the button component on click of the button
  // 4. we need to pass the value of the button as argument to the function
  // 5. we need to call the function in the main component and pass the value of the button as argument to the function
  // 6. we need to update the state variable in the main component with the value of the button
  // 7. we need to pass the state variable as props to the display component
  // 8. we need to display the state variable in the display component

  //   const handleOnClick = (val) => {
  //     console.log(val);
  //   };

  return (
    // now making button dynamic with props so that we can reuse the button component for all the buttons
    // if onClick = {handleOnClick} then it will call the function on page load and pass the event as argument to the functions
    // if onClick = {handleOnClick(label)} then it will call the function on page load and pass the label as argument to the functions - on one click it will call the function twice - once on page load and once on click
    // in this process, this one has to go through the compilation from virtual dom to real dom and then back to virtual dom and then back to real dom - this is called re-rendering and in react if the function is found to be same then it mean execution of function so to avoid this we use arrow function or anonymous function - this will create a new function on every render

    // if onClick = {() => handleOnClick(label)} then it will call the function on click and pass the label as argument to the functions - on one click it will call the function once
    <>
      {/* <div className="btn-ac">AC</div> */}
      <div className={className} onClick={() => handleOnClick(label)}>
        {label}
      </div>
    </>
  );
};

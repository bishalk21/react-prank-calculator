import React from "react";
import { ButtonComp } from "./buttonComp";

export const ButtonArea = ({ handleOnClick }) => {
  // iii. lets create an array of object and store the button label and class name in it
  const buttonArray = [
    {
      className: "btn-ac",
      label: "AC",
    },
    {
      className: "btn-del",
      label: "C",
    },
    {
      className: "btn-div",
      label: "/",
    },
    {
      className: "btn-mul",
      label: "*",
    },
    {
      className: "btn-seven",
      label: "7",
    },
    {
      className: "btn-eight",
      label: "8",
    },
    {
      className: "btn-nine",
      label: "9",
    },
    {
      className: "btn-plus",
      label: "+",
    },
    {
      className: "btn-four",
      label: "4",
    },
    {
      className: "btn-five",
      label: "5",
    },
    {
      className: "btn-six",
      label: "6",
    },
    {
      className: "btn-minus",
      label: "-",
    },
    {
      className: "btn-one",
      label: "1",
    },
    {
      className: "btn-two",
      label: "2",
    },
    {
      className: "btn-three",
      label: "3",
    },
    {
      className: "btn-equal",
      label: "=",
    },
    {
      className: "btn-zero",
      label: "0",
    },
    {
      className: "btn-dot",
      label: ".",
    },
  ];

  return (
    <>
      <div className="btns-area">
        {/* i. now making button dynamic with props so that we can reuse the button component for all the buttons */}
        {/* ii. now we have to pass the props to the button component */}
        {/* iii. lets create an array of object and store the button label and class name in it */}
        {/* iv. and we map through the array and pass the props to the button component */}

        {/* 1. --->  <div className="btn-ac">AC</div> */}
        {/* 2. ---> <ButtonComp className="btn-ac" label="AC" /> */}
        {/* <ButtonComp className="btn-ac" label="AC" />
        <ButtonComp className="btn-del" label="C" />
        <div className="btn-div">/</div>
        <div className="btn-mul">*</div>

        <div className="btn-seven">7</div>
        <div className="btn-eight">8</div>
        <div className="btn-nine">9</div>
        <div className="btn-plus">+</div>

        <div className="btn-four">4</div>
        <div className="btn-five">5</div>
        <div className="btn-six">6</div>
        <div className="btn-minus">-</div>

        <div className="btn-one">1</div>
        <div className="btn-two">2</div>
        <div className="btn-three">3</div>
        <div className="btn-equal">=</div>

        <div className="btn-zero">0</div>
        <div className="btn-dot">.</div> */}

        {/* iv. and we map through the array and pass the props to the button component */}
        {/* v. if we are looping through the elements in react then we have to give a unique key to each element */}
        {/* vi. since we have same props name in button component so we can pass the props as it is */}

        {buttonArray.map((item, i) => {
          return (
            //  <ButtonComp className={item.className} label={item.label} key={i} />
            // vi. since we have same props name in all items in the array so we can pass the props as it is by using spread operator
            <ButtonComp {...item} key={i} handleOnClick={handleOnClick} />
          );
        })}
      </div>
    </>
  );
};

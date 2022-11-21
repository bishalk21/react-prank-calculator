import React from "react";
import { Buttons } from "./Buttons";

export const ButtonArea = ({ handleOnClick }) => {
  const buttons = [
    {
      label: "AC",
      className: "btn-AC",
    },
    {
      label: "C",
      className: "btn-C",
    },
    {
      label: "/",
      className: "btn-div",
    },
    {
      label: "*",
      className: "btn-multi",
    },
    {
      label: "7",
      className: "btn-seven",
    },
    {
      label: "8",
      className: "btn-eight",
    },
    {
      label: "9",
      className: "btn-nine",
    },
    {
      label: "+",
      className: "btn-plus",
    },
    {
      label: "4",
      className: "btn-four",
    },
    {
      label: "5",
      className: "btn-five",
    },
    {
      label: "6",
      className: "btn-six",
    },
    {
      label: "-",
      className: "btn-minus",
    },
    {
      label: "1",
      className: "btn-one",
    },
    {
      label: "2",
      className: "btn-two",
    },
    {
      label: "3",
      className: "btn-three",
    },
    {
      label: "=",
      className: "btn-ans",
    },
    {
      label: ".",
      className: "btn-dot",
    },
    {
      label: "0",
      className: "btn-zero",
    },
    {
      label: "π",
      className: "btn-pi",
    },
  ];

  return (
    <div className="btn-area">
      {buttons.map((item, i) => {
        // return <Button key={i} className={item.className} label={item.label} />;
        return <Buttons handleOnClick={handleOnClick} key={i} {...item} />;
      })}
    </div>
  );
};

import React from "react";

export const Buttons = ({ className, label, handleOnClick }) => {
  return (
    <div
      className={className}
      onClick={() => {
        handleOnClick(label);
      }}
    >
      {label}
    </div>
  );
};

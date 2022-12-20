import React from "react";

export const DisplayComp = ({ str }) => {
  return (
    <>
      <div className="display">{str || "0.00"}</div>
    </>
  );
};

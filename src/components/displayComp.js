import React from "react";

export const DisplayComp = ({ str, prank }) => {
  const className = prank ? "display prank" : "display";
  return (
    <>
      <div className={className}>{str || "0.00"}</div>
    </>
  );
};

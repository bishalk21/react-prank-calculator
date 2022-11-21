import React from "react";

export const DisplayArea = ({ str, isPrank }) => {
  const clsName = isPrank ? "display prank" : "display";
  return <div className={clsName}>{str || "0.00"}</div>;
};

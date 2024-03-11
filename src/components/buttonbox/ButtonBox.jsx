import React from "react";
import "./ButtonBox.css";

import Button from "../button/Button";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn];
};
function ButtonBox({ btnValues, onClick }) {
  return (
    <div className="buttonBox">
      {btnValues.flat().map((btn, i) => (
        <Button
          key={i}
          className={`${getStyleName(btn) ? getStyleName(btn) : ""}`}
          value={btn}
          onClick={() => onClick(btn)}
        />
      ))}
    </div>
  );
}

export default ButtonBox;

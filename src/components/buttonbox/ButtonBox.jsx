import React from "react";
import "./ButtonBox.css";

import Button from "../button/Button";

const btnValues = [
  ["C", "+ -", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const handleClick = () => {
  console.log("Button clicked!");
};

function ButtonBox() {
  return (
    <div className="buttonBox">
      {btnValues.flat().map((btn, i) => (
        <Button
          key={i}
          className={btn === "=" ? "equals" : ""}
          value={btn}
          onClick={() => handleClick}
        ></Button>
      ))}
    </div>
  );
}

export default ButtonBox;

/*

 {Array.from({ length: 19 }, (_, i) => i + 1).map((num) => (
        <Button value={num} key={num} />
      ))}
*/

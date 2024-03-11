import React, { useState } from "react";
import Screen from "../screen/Screen";
import ButtonBox from "../buttonbox/ButtonBox";

import "./Wrapper.css";

const btnValues = [
  ["C", "+ -", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

  const math = (a, b, sign) => {
    const result = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      x: (a, b) => a * b,
      "/": (a, b) => a / b,
    };
    return result[sign](a, b);
  };


function Wrapper() {
  const [calc, setCalc] = useState({ sign: "", num: 0, res: 0 });


  const numClickHandler = (btn) => {
    const numString = btn.toString();

    let value = "";
    if (numString === "0" && calc.num === 0) {
      value = "0";
    } else {
      value = Number(calc.num + numString);
    }

    setCalc({ ...calc, num: value });
  };

  const resetClickHandler = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  const invertClickHandler = (btn) => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    setCalc({ num: calc.num / 100, res: calc.res / 100, sign: "" });
  };

  const equalsClickHandler = () => {
    if (calc.res && calc.num) {
      setCalc({ res: math(calc.res, calc.num, calc.sign), sign: "", num: 0 });
    }
  };

  const signClickHandler = (btn) => {
    if (calc.res && calc.num) {
      setCalc({
        sign: btn,
        res: math(calc.res, calc.num, calc.sign),
        num: 0,
      });
    } else {
      // allows for calculating larger mathematical operations (i.e. 2+3/5*8)
      setCalc({
        sign: btn,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0,
      });
    }
  };

  const commaClickHandler = (btn) => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + btn : calc.num,
    });
  };

  const handleBtnClick = (btn) => {
    const clicked = {
      C: resetClickHandler,
      "+ -": invertClickHandler,
      "%": percentClickHandler,
      "=": equalsClickHandler,
      "/": signClickHandler,
      x: signClickHandler,
      "-": signClickHandler,
      "+": signClickHandler,
      ".": commaClickHandler,
    };
    if (clicked[btn]) {
      return clicked[btn](btn);
    }
    return numClickHandler(btn);
  };

  return (
    <div className="wrapper">
      <Screen calc={calc} />
      <ButtonBox btnValues={btnValues} onClick={handleBtnClick} />
    </div>
  );
}

export default Wrapper;

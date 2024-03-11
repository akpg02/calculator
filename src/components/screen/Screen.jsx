import React from "react";
import { Textfit } from "react-textfit";

import "./Screen.css";

function Screen({ calc }) {
  return (
    <Textfit className="screen" max={70}>
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
}

export default Screen;

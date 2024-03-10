import React from "react";
import Screen from "../screen/Screen";
import ButtonBox from "../buttonbox/ButtonBox";

import "./Wrapper.css";

function Wrapper() {
  return (
    <div className="wrapper">
      <Screen value="0" />
      <ButtonBox />
    </div>
  );
}

export default Wrapper;

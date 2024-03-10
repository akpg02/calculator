import React from "react";

import "./Screen.css";

function Screen({ value }) {
  return (
    <div className="screen">
      <span className="value">{value}</span>
    </div>
  );
}

export default Screen;

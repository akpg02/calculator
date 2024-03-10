import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button({ className, value, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

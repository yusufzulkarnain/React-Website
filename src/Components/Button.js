import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZE = ["btn--medium", "btn--large"];
export const Button = ({
  childern,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.include(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZE.include(buttonSize) ? buttonSize : SIZE[0];

  return (
    <Link to={"/sign-up"} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onclick}
        type={type}
      >
        {childern}
      </button>
    </Link>
  );
};

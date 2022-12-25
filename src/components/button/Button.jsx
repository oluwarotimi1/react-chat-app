import React from "react";

const Button = ({ bgColor, textColor, btnText }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {btnText}
    </button>
  );
};

export default Button;

import React from "react";

const showLabel = (label) => {
  alert(`E aí, ${label}`);
};

const Button = ({ label }) => {
  return (
    <div>
      <button onClick={() => showLabel(label)}>{label}</button>
    </div>
  );
};

export default Button;

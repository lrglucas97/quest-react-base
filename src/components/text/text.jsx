import React from "react";
import "./text.css"

const Text = ({ text, color }) => {
  return (
    <div
      className="text"
      style={{
        color: color,
        textTransform: "uppercase",
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Text;

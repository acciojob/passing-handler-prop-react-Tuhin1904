import React, { useState } from "react";
import "./../styles/Child.css";

const Selection = ({ applyColor }) => {
  const [background, setBackground] = useState({ backgroundColor: "" });
  // console.log(applyColor, "applyColor");
  const updateSelectionStyle = (newBackground) => {
    setBackground(newBackground);
  };

  return (
    <div
      className="fix-box"
      style={background}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <p className="subheading">Selection</p>
    </div>
  );
};

export default Selection;

import React, { useState } from "react";
import "./ClassButtons.css";

function ClassButtons() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton((prev) => (prev === index ? null : index));
  };

  const buttons = ["Ett", "Två", "Tre", "Fyra"];

  return (
    <div className="class-buttons-container">
      {buttons.map((label, index) => (
        <button
          key={index}
          className={`btn ${activeButton === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ClassButtons;

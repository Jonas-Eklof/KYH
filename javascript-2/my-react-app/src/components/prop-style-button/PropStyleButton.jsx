import React from "react";
import "./PropStyleButton.css";

function PropStyleButton({
  variant = "Primary",
  size = "medium",
  onClick,
  disabled = false,
  children,
}) {
  const className = `button ${variant} ${size} ${disabled ? "disabled" : ""}`;

  return (
    <div className="prop-button-container">
      <button
        className={className}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

export default PropStyleButton;

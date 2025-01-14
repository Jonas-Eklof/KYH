import React, { useState } from "react";
import "./ToggleInvisible.css";

function ToggleInvisible() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="toggle-visible-container">
      <div className="toggle-buttons">
        <button className="visible-btn" onClick={() => setVisible(true)}>
          Visa
        </button>
        <button className="hidden-btn" onClick={() => setVisible(false)}>
          Dölj
        </button>
      </div>
      {visible && (
        <p className="toggle-text">Jag ska växla mellan synlig och osynlig.</p>
      )}
    </div>
  );
}

export default ToggleInvisible;

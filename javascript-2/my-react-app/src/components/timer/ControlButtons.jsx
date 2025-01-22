import React from "react";
import "./Timer.css";

function ControlButtons({
  active,
  handleStart,
  handlePauseResume,
  handleReset,
  isPaused,
}) {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={handleStart}>
      Start
    </div>
  );

  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );

  return (
    <div className="control-buttons">
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  );
}

export default ControlButtons;

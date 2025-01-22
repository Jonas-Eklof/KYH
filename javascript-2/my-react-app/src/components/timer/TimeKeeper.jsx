import React from "react";
import "./Timer.css";

function TimeKeeper({ time }) {
  return (
    <div className="timer-text">
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="digits milli-sec">
        {("0" + ((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
}

export default TimeKeeper;

import React, { useState } from "react";

export default function KnappMedState() {
  const [feeling, setFeeling] = useState("");

  const happy = () => {
    setFeeling("Happy");
  };

  const excited = () => {
    setFeeling("Excited");
  };

  return (
    <div className="state-button">
      <button className="happy" onClick={happy}>
        Happy
      </button>
      <button className="excited" onClick={excited}>
        Excited
      </button>
      <p>I am {feeling}</p>
    </div>
  );
}

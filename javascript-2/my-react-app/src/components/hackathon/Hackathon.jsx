import React, { useState } from "react";
import "./Hackathon.css";

function Hackathon() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const inputChange = (input) => setName(input.target.value);

  const createGreeting = () => {
    const hours = new Date().getHours();
    let timeOfDay = "";

    if (hours < 12) {
      timeOfDay = "God morgon";
    } else if (hours < 18) {
      timeOfDay = "God eftermiddag";
    } else {
      timeOfDay = "God kväll";
    }

    setGreeting(`${timeOfDay}, ${name}.`);
    setName("");
  };

  return (
    <div className="hackathon">
      <h1>"Hackathon"</h1>
      <input
        type="text"
        placeholder="Ditt namn..."
        value={name}
        onChange={inputChange}
      />
      <button className="greeting-btn" onClick={createGreeting}>
        Bli hälsad
      </button>
      {greeting && <div className="greeting-text">{greeting}</div>}
    </div>
  );
}

export default Hackathon;

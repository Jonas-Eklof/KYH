import React, { useState } from "react";

export default function Grandparent() {
  const [message, setMessage] = useState("");

  const giveCandy = () => {
    setMessage("Candy given!");
  };

  return (
    <div>
      <h1>Grandparent</h1>
      <button onClick={giveCandy}>Give candy</button>
      <Parent message={message} />
    </div>
  );
}

function Parent({ message }) {
  return (
    <div>
      <h2>Parent</h2>
      <Child message={message} />
    </div>
  );
}

function Child({ message }) {
  return (
    <div>
      <h3>Child</h3>
      <p>{message}</p>
    </div>
  );
}

import React, { useState } from "react";

export default function InputDisplay() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const showInput = () => {
    setDisplayValue(inputValue);
  };

  const clearInput = () => {
    setInputValue("");
    setDisplayValue("");
  };

  return (
    <div>
      <h1>Input Display</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Skriv något..."
      />
      <button onClick={showInput}>Visa text</button>
      <button onClick={clearInput}>Clear input</button>
      <p>{displayValue}</p>
    </div>
  );
}

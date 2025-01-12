import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => setCount(0);
  const increment = () => setCount((count) => count + 1);
  return (
    <div className="count">
      <h1>{count}</h1>
      <div className="count-buttons">
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

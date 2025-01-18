import { useState } from "react";

export default function ColorCard({ color }) {
  const [isFlipped, setIsFlipped] = useState(true);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <article
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={toggleFlip}
      style={{ backgroundColor: isFlipped ? "black" : color }}
    ></article>
  );
}

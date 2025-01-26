import React, { useEffect, useState } from "react";
import "./MemoryGame.css";

function MemoryGame() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const allCards = [...colors, ...colors];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i < 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [cards, setCards] = useState(shuffleArray(allCards));
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || matchedIndices.includes(index)) return;
    setFlippedIndices((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;

      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
        setFlippedIndices([]);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
        }, 1000);
      }
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    if (matchedIndices.length === cards.length) {
      setHasWon(true);
    }
  }, [matchedIndices, cards.length]);

  const resetGame = () => {
    setCards(shuffleArray(allCards));

    setFlippedIndices([]);
    setMatchedIndices([]);
    setHasWon(false);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      {hasWon && (
        <div className="win-message">Congratulations! You've won!</div>
      )}
      <div className="card-grid">
        {cards.map((color, index) => (
          <Card
            key={index}
            color={color}
            isFlipped={
              flippedIndices.includes(index) || matchedIndices.includes(index)
            }
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default MemoryGame;

const Card = ({ color, isFlipped, onClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}
      style={{ backgroundColor: isFlipped ? color : "black" }}
    ></div>
  );
};

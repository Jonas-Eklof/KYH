import React from "react";
import "./Card.css";
import ColorCard from "./ColorCard.jsx";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "lime",
];

export default function Card() {
  return (
    <>
      <h1>Card Memory Game</h1>
      <section className="card-container">
        {colors.map((color) => (
          <ColorCard color={color} key={color} />
        ))}
      </section>
    </>
  );
}

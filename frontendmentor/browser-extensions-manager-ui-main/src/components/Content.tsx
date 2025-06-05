import { useState } from "react";
import ExtensionCard from "./ExtensionCard";
import cardData from "../data.json";

interface CardData {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

const Content = () => {
  const [cards, setCards] = useState<CardData[]>(cardData as CardData[]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filteredExtensions =
    activeFilter === "All"
      ? cards
      : activeFilter === "Active"
      ? cards.filter((card) => card.isActive)
      : cards.filter((card) => !card.isActive);

  const filterButtons: string[] = ["All", "Active", "Inactive"];

  const toggleActiveStatus = (name: string) => {
    const updatedCards = cards.map((card) =>
      card.name === name ? { ...card, isActive: !card.isActive } : card
    );
    setCards(updatedCards);
  };

  return (
    <section className="content">
      <h1>Extensions List</h1>
      <div className="filter-buttons">
        {filterButtons.map((filterButton) => (
          <button
            key={filterButton}
            onClick={() => setActiveFilter(filterButton)}
            className={`... ${activeFilter === filterButton ? "active" : ""}`}
          >
            {filterButton}
          </button>
        ))}
      </div>
      <div className="extension-card-wrapper">
        <ExtensionCard
          cards={filteredExtensions}
          onToggleActive={toggleActiveStatus}
        />
      </div>
    </section>
  );
};

export default Content;

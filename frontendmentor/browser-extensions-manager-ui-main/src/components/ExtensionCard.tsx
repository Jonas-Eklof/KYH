interface Card {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

interface ExtensionCardProps {
  cards: Card[];
  onToggleActive: (name: string) => void;
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({
  cards,
  onToggleActive,
}) => {
  return (
    <div>
      {cards.map((card) => (
        <div key={card.name} className="card">
          <div className="card__info">
            <img src={card.logo} />
            <div className="card__info--text">
              <h2>{card.name}</h2>
              <p>{card.description}</p>
            </div>
          </div>
          <div className="card-buttons">
            <button>Remove</button>
            <label className="switch">
              <input
                type="checkbox"
                checked={card.isActive}
                onChange={() => onToggleActive(card.name)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtensionCard;

import "./Menu.css";

export default function MenuItem({ name, price, description, dips }) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <span>{name}</span>
        <span>{price} SEK</span>
      </div>
      {description && <p className="menu-item-description">{description}</p>}
      {dips && (
        <div className="dips">
          {dips.map((dip, index) => (
            <button key={index} className="dip">
              {dip}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

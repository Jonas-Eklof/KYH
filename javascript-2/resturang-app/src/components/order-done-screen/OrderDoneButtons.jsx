import { Link } from "react-router-dom";
import "./Buttons.css";

function OrderDoneButtons() {
  return (
    <div className="buttons">
      <Link to="/">
        <button className="order-more">Beställ mer</button>
      </Link>
      <button className="receipt">Se kvitto</button>
    </div>
  );
}

export default OrderDoneButtons;

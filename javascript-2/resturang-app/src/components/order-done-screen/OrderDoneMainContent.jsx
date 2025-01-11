import Boxtop from "../../assets/boxtop-1.svg";
import OrderDoneButtons from "./OrderDoneButtons";

function OrderDoneMainContent() {
  return (
    <main className="main-content">
      <img src={Boxtop} alt="Boxtop" />
      <h2 className="done-message">DINA WONTONS ÄR KLARA!</h2>

      <p className="order-code">#4kjwsdf234k</p>

      <OrderDoneButtons />
    </main>
  );
}

export default OrderDoneMainContent;

import Boxtop from "../../assets/boxtop-1.svg";
import "./eta-screen.css";

export default function EtaScreenMainContent() {
  return (
    <main className="main-content eta-content">
      <img src={Boxtop} alt="Boxtop" />
      <h2 className="eta-message">DINA WONTONS TILLAGAS!</h2>

      <h3 className="eta-time">ETA 5 MIN</h3>

      <p className="order-code">#4kjwsdf234k</p>
    </main>
  );
}

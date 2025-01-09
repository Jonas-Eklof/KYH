import React, { useState } from "react";
import OrderDoneMainContent from "./components/order-done-screen/OrderDoneMainContent.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import OrderDoneButtons from "./components/order-done-screen/OrderDoneButtons.jsx";
import EtaScreenMainContent from "./components/eta-screen/EtaScreenMainContent.jsx";
import MenuMainContent from "./components/menu/MenuMainContent.jsx";
import MenuItem from "./components/menu/MenuItem.jsx";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prev) => prev + 1);

  return (
    <>
      <Navigation count={count} />
      {/* <OrderDoneMainContent /> */}
      {/* <EtaScreenMainContent /> */}
      <MenuMainContent onAddToCart={incrementCount} />
      {/* <OrderDoneButtons /> */}
    </>
  );
}

export default App;

import React, { useState } from "react";
import OrderDoneMainContent from "./components/order-done-screen/OrderDoneMainContent.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import EtaScreenMainContent from "./components/eta-screen/EtaScreenMainContent.jsx";
import MenuMainContent from "./components/menu/MenuMainContent.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prev) => prev + 1);

  return (
    <>
      <Navigation count={count} />

      <main className="main-content-wrapper">
        <Routes>
          <Route
            path="/"
            element={<MenuMainContent onAddToCart={incrementCount} />}
          />
          <Route path="/order-eta" element={<EtaScreenMainContent />} />
          <Route path="/order-done" element={<OrderDoneMainContent />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

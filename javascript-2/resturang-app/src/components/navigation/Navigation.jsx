import React from "react";
import Logo from "../../assets/logo.svg";
import ShoppingCart from "../../assets/shoppingcart.svg";

function Navigation({ count }) {
  return (
    <nav className="navigation">
      <a href="/">
        <img src={Logo} className="logo" alt="Logo" />
      </a>

      <button className="shopping-cart">
        <img src={ShoppingCart} alt="" />
        <span className="cart-count">{count}</span>
      </button>
    </nav>
  );
}

export default Navigation;

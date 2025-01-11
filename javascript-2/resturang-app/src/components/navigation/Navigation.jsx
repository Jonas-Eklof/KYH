import React from "react";
import Logo from "../../assets/logo.svg";
import ShoppingCart from "../../assets/shoppingcart.svg";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ count }) {
  return (
    <nav className="navigation">
      <Link to="/">
        <img src={Logo} className="logo" alt="Logo" />
      </Link>

      <button className="shopping-cart">
        <img src={ShoppingCart} alt="Shopping cart" />
        <span className="cart-count">{count}</span>
      </button>
    </nav>
  );
}

export default Navigation;

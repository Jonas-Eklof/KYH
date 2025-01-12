import React from "react";
import { Link } from "react-router-dom";
import "./SidebarNav.css";

export default function SidebarNav() {
  return (
    <ul className="sidebar-nav">
      <Link to="/">
        <li>Profile Card</li>
      </Link>
      <Link to="/Ancestree">
        <li>Ancestree</li>
      </Link>
      <Link to="/Counter">
        <li>Counter</li>
      </Link>
      <Link to="/Greeting">
        <li>Greeting</li>
      </Link>
      <Link to="/InputDisplay">
        <li>Input Display</li>
      </Link>
      <Link to="/ButtonWithState">
        <li>Button with state</li>
      </Link>
      <Link to="/Themes">
        <li>Themes</li>
      </Link>
      <Link to="/MemoryGame">
        <li>Memory Game</li>
      </Link>
    </ul>
  );
}

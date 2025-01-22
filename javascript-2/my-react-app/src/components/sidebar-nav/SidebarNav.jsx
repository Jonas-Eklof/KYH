import React from "react";
import { Link } from "react-router-dom";
import "./SidebarNav.css";

export default function SidebarNav() {
  return (
    <ul className="sidebar-nav">
      <Link to="/">
        <li>Profile Card</li>
      </Link>
      <Link to="/ParentProfileCard">
        <li>Parent Profile Card</li>
      </Link>
      <Link to="/Ancestree">
        <li>Ancestree</li>
      </Link>
      <Link to="/Counter">
        <li>Counter</li>
      </Link>
      <Link to="/Timer">
        <li>Timer</li>
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
      <Link to="/MemoryGame">
        <li>Memory Game</li>
      </Link>
      <Link to="/ToggleVisible">
        <li>Toggle visible</li>
      </Link>
      <Link to="/Hackathon">
        <li>"Hackathon"</li>
      </Link>
      <Link to="/ClassButtons">
        <li>ClassButtons</li>
      </Link>
      <Link to="/PropStyleButton">
        <li>PropStyleButton</li>
      </Link>
      <Link to="/ToDo">
        <li>ToDo-list</li>
      </Link>
    </ul>
  );
}

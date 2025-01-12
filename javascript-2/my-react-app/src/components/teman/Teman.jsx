import React, { useState } from "react";
import "./Teman.css";

export default function Teman() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <h1>Temaväxling i React</h1>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          Växla till {theme === "light" ? "Mörkt" : "Ljust"} läge
        </button>
      </header>
      <main className="content">
        <p>
          Detta är en enkel demonstration av att växla mellan teman i React.
        </p>
      </main>
    </div>
  );
}

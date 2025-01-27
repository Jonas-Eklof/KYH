import React, { useState } from "react";
import "./Theme.css";

function Theme() {
  const [theme, setTheme] = useState("darkMode");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "darkMode" ? "lightMode" : "darkMode"));
  };

  return (
    <div
      className={` ${theme} text-2xl flex flex-col gap-4 font-bold pt-8  w-screen text-center h-full`}
    >
      Theme container
      <div className="buttons">
        <button className="mr-4" onClick={toggleTheme}>
          Växla till {theme === "lightMode" ? "Mörkt" : "Ljust"} läge
        </button>
      </div>
    </div>
  );
}

export default Theme;

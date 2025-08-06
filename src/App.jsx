import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import Amaan from "./Amaan";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="app-wrapper">
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀️ " : "🌙 "}
      </button>
      <Welcome />
      <Amaan />
      <About />
      <Contact />
    </div>
  );
}

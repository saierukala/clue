import React, { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p>This is a {darkMode ? "dark" : "light"} mode example.</p>
    </div>
  );
}

export default DarkModeToggle;

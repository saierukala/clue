import React, { useState } from "react";

function HideAndView() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Hide and View Example</h1>
      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "View"}</button>
      {isVisible && (
        <p>This is the content you can {isVisible ? "hide" : "view"}.</p>
      )}
    </div>
  );
}

export default HideAndView;

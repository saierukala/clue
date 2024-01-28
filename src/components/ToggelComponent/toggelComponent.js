import React, { useState } from "react";

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Component</button>
      {isVisible && <p>This component is visible.</p>}
    </div>
  );
}

export default ToggleComponent;

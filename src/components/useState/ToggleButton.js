import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="comp">
      <p>Toggle: {isOn ? "ON" : "OFF"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "ToggleToggleON" : "ToggleToggleOFF"}
      </button>
    </div>
  );
}

export default ToggleButton;

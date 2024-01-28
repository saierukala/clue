import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>Selected color: {color}</p>
    </div>
  );
}

export default ColorPicker;

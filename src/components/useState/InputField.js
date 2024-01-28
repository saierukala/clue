import React, { useState } from "react";

function InputField() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="comp">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default InputField;

import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const updateCount = (newText) => {
    setText(newText);
    setCount(newText.length);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => updateCount(e.target.value)} />
      <p>Character Count: {count}</p>
    </div>
  );
}

export default CharacterCounter;

import React, { useState } from "react";

function DynamicList() {
  const [items, setItems] = useState([]);
  const [itemText, setItemText] = useState("");

  const addItem = () => {
    if (itemText.trim() !== "") {
      setItems([...items, itemText]);
      setItemText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;

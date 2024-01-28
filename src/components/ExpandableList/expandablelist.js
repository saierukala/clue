import React, { useState } from "react";

function ExpandableList({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ul className="expandable-list">
      {items.map((item, index) => (
        <li key={index}>
          <button
            className="expand-button"
            onClick={() => toggleExpansion(index)}
          >
            {item.title} - {expandedIndex === index ? "Collapse" : "Expand"}
          </button>
          {expandedIndex === index && <p>{item.content}</p>}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const listItems = [
    { title: "Item 1", content: "Content for Item 1 goes here." },
    { title: "Item 2", content: "Content for Item 2 goes here." },
    // Add more list items as needed
  ];

  return (
    <div>
      <h1>Expandable List Example</h1>
      <ExpandableList items={listItems} />
    </div>
  );
}

export default ExpandableList;

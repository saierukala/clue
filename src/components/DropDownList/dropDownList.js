import React, { useState } from "react";

function DropdownList() {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1>Dropdown List Example</h1>
      <label>Select an option: </label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
}

export default DropdownList;

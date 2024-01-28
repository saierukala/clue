import React, { useState } from "react";

const countryCapitalPairs = [
  { country: "USA", capital: "Washington, D.C." },
  { country: "Canada", capital: "Ottawa" },
  { country: "United Kingdom", capital: "London" },
  { country: "France", capital: "Paris" },
  { country: "Germany", capital: "Berlin" },
  // Add more country-capital pairs as needed
];

function CountryCapitalDropdown() {
  const [selectedPair, setSelectedPair] = useState(null);

  const handleSelect = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelectedPair(countryCapitalPairs[selectedIndex - 1]);
  };

  return (
    <div>
      <h1>Country-Capital Dropdown</h1>
      <select onChange={handleSelect}>
        <option value="">Select a country</option>
        {countryCapitalPairs.map((pair, index) => (
          <option key={index} value={pair.country}>
            {pair.country}
          </option>
        ))}
      </select>
      {selectedPair && (
        <div>
          <p>Country: {selectedPair.country}</p>
          <p>Capital: {selectedPair.capital}</p>
        </div>
      )}
    </div>
  );
}

export default CountryCapitalDropdown;

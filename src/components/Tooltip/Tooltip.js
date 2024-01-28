import React, { useState } from "react";

function Tooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tooltip-container">
      <button
        className="tooltip-button"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover for Tooltip
      </button>
      {showTooltip && <div className="tooltip">This is a tooltip.</div>}
    </div>
  );
}

export default Tooltip;

import React, { useState } from "react";

function SeeMore({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="seeMore">
      {isExpanded ? children : null}
      <div className="seeMore-button">
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default SeeMore;

import React, { useState } from "react";
import "../../Styles/seeMore.css";
function SeeMore({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="seeMore-component">
      <div className={isExpanded ? "seeMore active" : "seeMore collapsed"}>
        {children}
      </div>
      <div className="seeMore-button">
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default SeeMore;

import React, { useState } from "react";
import "../../Styles/seeMore.css";
function SeeMore({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="seeMore-component">
      <div className={isExpanded ? "seeMore more" : "seeMore less"}>
        {children}
      </div>
      <div className="seeMore-button">
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Se mindre" : "Se mer"}
        </button>
      </div>
    </div>
  );
}

export default SeeMore;

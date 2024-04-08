// LifelineToggle.js
import React from "react";

export default function LifelineToggle({ showLifeline, toggleLifeline }) {
  return (
    <div
      type="button"
      className="quiz-close"
      onClick={toggleLifeline}
    >
      {showLifeline ? "Close" : "Use LifeLine"}
    </div>
  );
}

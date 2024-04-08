// QuizFooter.js
import React from "react";
import "../../scss/QuizPage.scss"

export default function QuizFooter() {
  return (
    <div className="quiz-footer">
      <h4 className="quiz-h">
        Your Score :{" "}
        <span style={{ color: "white", fontWeight: "700" }}>0</span>
      </h4>
    </div>
  );
}

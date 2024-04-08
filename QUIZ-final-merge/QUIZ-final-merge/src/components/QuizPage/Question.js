// Question.js
import React from "react";

export default function Question({ question, page }) {
  return (
    <>
      <div className="quiz-que-number">
        Question <span className="quiz-lite">{page}</span>/
        <span className="quiz-bold">20</span>
      </div>
      <h3 className="que">{question}</h3>
    </>
  );
}

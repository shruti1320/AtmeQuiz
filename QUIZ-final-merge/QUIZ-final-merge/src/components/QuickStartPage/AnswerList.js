import React from "react";
import Answer from "./Answer";
import "../../scss/QuickStartPage.scss"

const AnswerList = ({ buttonColor, buttonTextColor, handleButtonClick, questionSet }) => {


  const answers = ["New Zealand", "New Zealand", "New Zealand", "New Zealand"];

  return (
    <ul className="quiz-answer-list">
      {answers.map((text, index) => (
        <Answer
          key={index}
          text={text}
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          handleClick={handleButtonClick}
        />
      ))}
    </ul>
  );
};

export default AnswerList;

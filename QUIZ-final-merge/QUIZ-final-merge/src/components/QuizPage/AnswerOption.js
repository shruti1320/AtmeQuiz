import React from "react";

export default function AnswerOption({
  option,
  index,
  handleButtonClick,
  disabledButtons,
  buttonStates,
  disabledFlip,
  disabledFifty,
  incorrectOptions,
}) {
  const firstTwoIncorrectOptions = incorrectOptions.slice(0, 2);
  const isInFirstTwoIncorrect = firstTwoIncorrectOptions.includes(option);

  var isCorrectAnswer = localStorage.getItem("correctAnswerCount") || 0;
  var isNotCorrectAnswer = localStorage.getItem("incorrectAnswerCount") || 0;

  const handleClick = (index) => {
    handleButtonClick(index + 1);
    if (option.isCorrectAnswer) {
      isCorrectAnswer = +isCorrectAnswer + 1;
      localStorage.setItem("correctAnswerCount", isCorrectAnswer);
    } else {
      isNotCorrectAnswer = +isNotCorrectAnswer + 1;
      localStorage.setItem("incorrectAnswerCount", isNotCorrectAnswer);
    }
  };

  return (
    <li className={`quiz-answers`}>
      <button
        className={`quiz-button  
        ${disabledFlip ? "quiz-animation" : ""}

        ${disabledFifty && isInFirstTwoIncorrect ? "quizCard-fifty50" : ""}
     
        ${
          buttonStates[index + 1]
            ? option.isCorrectAnswer
              ? "quiz-answer-correct"
              : "slide quiz-answer-incorrect"
            : ""
        }`}
        onClick={() => handleClick(index)}
        disabled={disabledButtons}
      >
        {option.answer}
      </button>
    </li>
  );
}

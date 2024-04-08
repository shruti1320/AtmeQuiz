// Answer.js
import React from 'react';
import "../../scss/QuickStartPage.scss"

export default function Answer({ text, buttonColor, buttonTextColor, handleClick }) {
  return (
    <li className='quiz-answers'>
      <button className='quiz-button ' style={{ backgroundColor: buttonColor, color: buttonTextColor }} onClick={handleClick}>{text}</button>
    </li>
  );
}

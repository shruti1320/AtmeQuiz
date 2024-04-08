// Question.js
import React from 'react';

export default function Question({queNumber}) {
  
  return (
    <div className='quiz-body-question'>
      <div className='quiz-q-heading'>
        <div><span>{queNumber}</span><span>/</span><span><strong>2</strong></span></div>
        <div className='quiz-text'> Question </div>
      </div>
    </div>
  );
}

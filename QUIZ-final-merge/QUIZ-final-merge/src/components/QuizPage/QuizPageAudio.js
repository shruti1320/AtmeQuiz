import React from 'react'
import "../../scss/QuizPage.scss"

export default function QuizPageAudio() {
  return (
    <div>
       <audio className="quiz-audio" autoPlay>
        <source src="https://images.atmequiz.com/audio/Quiz.wav" />
      </audio>
    </div>
  )
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function QuizHeader({ disabledFreeze, handleTimeFreezeClick }) {
  const initialSeconds = 60;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timeOver, setTimeOver] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setTimeOver(false);
  };

  let storedCorrectAnswers = localStorage.getItem("correctAnswerCount");
  let storedIncorrectAnswers = localStorage.getItem("incorrectAnswerCount");

  if (storedCorrectAnswers === null) {
    storedCorrectAnswers = 0;
  }

  if (storedIncorrectAnswers === null) {
    storedIncorrectAnswers = 0;
  }

  const handleContinue = () => {
    navigate("/win");
  };

  useEffect(() => {
    let interval;
    if (!disabledFreeze) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            setSeconds(0);
            setTimeOver(true);
            localStorage.clear();
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [initialSeconds, disabledFreeze]);

  const dashLength = (seconds / initialSeconds) * 283;

  return (
    <div className="quiz-header">
      <div className="quiz-card-que-timer">
        <div className="quiz-card-question-correct">{storedCorrectAnswers}</div>
        <div>
          <div>
            <div className="timer">
              <svg
                className="timer-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="timer-circle">
                  <circle
                    className="timer-path"
                    cx="50"
                    cy="50"
                    r="45"
                  ></circle>
                  <path
                    id="base-timer-path-remaining"
                    strokeDasharray={`${dashLength} 283`}
                    className={`timer-remaining ${
                      seconds <= 15 && seconds > 10
                        ? "orange"
                        : seconds <= 10
                        ? "red"
                        : ""
                    }`}
                    d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "
                  ></path>
                </g>
              </svg>
              <span className="timer-label">
                <span className="timer-inner">{seconds}</span>
                <div className="time-second "></div>
              </span>
            </div>
          </div>
        </div>
        <div className="quiz-card-question-incorrect">
          {storedIncorrectAnswers}
        </div>
      </div>

      {timeOver && (
        <div
          className="modal"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="false"
          data-bs-scroll="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <img
                  alt="Get More Coins"
                  fetchpriority="high"
                  width="70"
                  height="74"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/wrong_coinsBox.svg"
                  style={{ color: "transparent" }}
                />
                <button
                  onClick={closeModal}
                  type="button"
                  className=" btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{
                    top: "0px",
                    position: "absolute",
                    right: "0px",
                    margin: "12px",
                  }}
                ></button>
                <h2
                  className="heading"
                  style={{
                    fontSize: "34px",
                    color: "#ff5050",
                    paddingTop: "0px",
                  }}
                >
                  Oops!
                </h2>
                <p className="pa">
                  You don't have enough coins to play this contest.
                </p>
                <div className="bonusModal_listCheck">
                  <button
                    className="bonusModal_reportBtn"
                    onClick={handleContinue}
                  >
                    <img
                      alt="Get More Coins"
                      fetchpriority="high"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="https://images.atmequiz.com/img/videoIcon.svg"
                      style={{ color: "transparent" }}
                    />
                    Continue
                  </button>
                </div>
                <p style={{ marginTop: "8px", lineHeight: "18px" }}>
                  Click on video ad to get 100 reward coins.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

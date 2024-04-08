import React, { useState } from "react";
import "../../scss/QuizPage.scss";
import coin from "../../images/coin-icon.jpg";
import "../../scss/LifelineOffcanvas.scss";

export default function Lifeline({
  showLifeline,
  handleFiftyFiftyClick,
  handleFlipQuestionClick,
  handleTimeFreezeClick,
  disabledFifty,
  disabledFlip,
  disabledFreezePer,
  disabledFiftyPer,
}) {
  const [showReport, setShowReport] = useState(false);

  const toggleReport = () => {
    setShowReport(!showReport);
  };
  const handleReportClose = () => {
    setShowReport(false);
  };

  const [fiftyCanvas, setFiftyCanvas] = useState(false);
  const [freezeCanvas, setFreezeCanvas] = useState(false);
  const [flipCanvas, setFlipCanvas] = useState(false);

  const toogleFiftyCanvas = () => {
    setFiftyCanvas(true);
    setFreezeCanvas(false);
    setFlipCanvas(false);
  }

  const toogleFreezeCanvas = () => {
    setFiftyCanvas(false);
    setFlipCanvas(false);
    setFreezeCanvas(true);
  }

  const toogleFlipCanvas = () => {
    setFiftyCanvas(false);
    setFreezeCanvas(false);
    setFlipCanvas(true);
  }

console.log(fiftyCanvas, freezeCanvas, flipCanvas,  " ====================== ")
  return (
    <div
      className="lifeline "
      style={{ display: showLifeline ? "flex" : "none" }}
    >
      <ul className="lifeline-wrapper" style={{ display: "flex" }}>
        <div>
          <ul className="lifeline-ul">
            <li
              className={`lifeline-li ${
                disabledFiftyPer ? "lifeline-disabled" : ""
              }`}
              onClick={() => {
                toggleReport();
                // toogleFreezeCanvas();
                toogleFiftyCanvas();
                // toogleFlipCanvas();
                // handleFiftyFiftyClick();
              }}
            >
              <div className="lifeline-list">
                <img
                  alt="Audience Poll"
                  title="Audience Poll"
                  fetchpriority="high"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/fifty-50.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <span style={{ fontSize: "12px" }}></span>
              <span style={{ fontSize: "11px" }}> 50:50</span>
            </li>

            <li
              className={`lifeline-li ${
                disabledFreezePer ? "lifeline-disabled" : ""
              }`}
              onClick={() => {
                toggleReport();
                toogleFreezeCanvas();
                // toogleFiftyCanvas();
                // toogleFlipCanvas();
                // handleTimeFreezeClick();
              }}
              // onClick={handleTimeFreezeClick}
            >
              <div className="lifeline-list">
                <img
                  alt="Audience Poll"
                  title="Audience Poll"
                  fetchpriority="high"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/freeze-timer.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <span style={{ fontSize: "12px" }}></span>
              <span style={{ fontSize: "11px" }}>Freeze Timer</span>
            </li>
            <li
              className={`lifeline-li ${
                disabledFlip ? "lifeline-disabled" : ""
              }`}
              onClick={() => {
                toggleReport();
                // toogleFreezeCanvas();
                // toogleFiftyCanvas();
                toogleFlipCanvas();
                // handleFlipQuestionClick();
              }}
              // onClick={handleFlipQuestionClick}
            >
              <div className="lifeline-list">
                <img
                  alt="Audience Poll"
                  title="Audience Poll"
                  fetchpriority="high"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/flip-question.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <span style={{ fontSize: "12px" }}></span>
              <span style={{ fontSize: "11px" }}>Flip Question</span>
            </li>
          </ul>
        </div>
      </ul>

      {showReport && (
        <div className="popup-inner">
          <div className="popup-wrapper">
            <div className="lifeline-icon">
              <img
                src="https://images.atmequiz.com/img/fifty-50.svg"
                alt=""
                style={{ height: "36px", width: "36px" }}
              />
            </div>
            <p className="popup-close" onClick={handleReportClose}></p>
            <h2 className="h2text">Use {fiftyCanvas? "50:50" : freezeCanvas ? " Freeze Timer" : flipCanvas ? " Flip Question" : ""} Lifeline</h2>
            <p className="ptexts">
              The  {fiftyCanvas? "50:50" : freezeCanvas ? " Freeze Timer" : flipCanvas ? " Flip Question" : ""} will be paused for 30 seconds to allow more time to
              answer the question.
            </p>
            <div className="popup-btns">
              <p className="popup-btn" onClick={() => {setShowReport(false); 
               if (fiftyCanvas) {
                handleFiftyFiftyClick();
            } else if (freezeCanvas) {
                handleTimeFreezeClick();
            } else if (flipCanvas) {
                handleFlipQuestionClick();
            }
              }}>
                Use for free
              </p>
                
             
              <span className="or">OR</span>
              <p className="popup-btn2 popup-blue">
                Use For 20
                <img
                  alt=""
                  src={coin}
                  style={{ height: "16px", width: "16px", marginLeft: "6px" }}
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

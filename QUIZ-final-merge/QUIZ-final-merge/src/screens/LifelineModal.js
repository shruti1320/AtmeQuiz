import React, { useState } from "react";
import "../scss/LifelineModal.scss";
import coin from "../images/coin-icon1.png";

export default function LifelineModal() {
  const [showReport, setShowReport] = useState(false);

  const toggleReport = () => {
    setShowReport(!showReport);
  };
  const handleReportClose = () => {
    setShowReport(false);
  };

  return (
    <div className="box-c">
      <button className="btn btn-primary" type="button" onClick={toggleReport}>
        Toggle bottom offcanvas
      </button>
      {showReport && (
        <div className="popup-inner">
          <div className="popup-wrapper">
            <div className="lifeline-icon">
              <img
                src="	https://images.atmequiz.com/img/fifty-50.svg"
                alt=""
                style={{ height: "36px", width: "36px" }}
              />
            </div>
            <a className="popup-close" onClick={handleReportClose}></a>
            <h2 className="h2text">Use 50:50 Lifeline</h2>
            <p className="ptexts">
              The 50-50 will be paused for 30 seconds to allow more time to
              answer the question.
            </p>
            <div className="popup-btns">
              <a className="popup-btn">Use for free</a>
              <span className="or">OR</span>
              <a className="popup-btn2 popup-blue">
                Use For 20
                <img
                  src={coin}
                  style={{ height: "16px", width: "16px", marginLeft: "6px" }}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

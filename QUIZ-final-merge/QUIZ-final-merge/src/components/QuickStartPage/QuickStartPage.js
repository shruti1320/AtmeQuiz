import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Question from "./Question";
import AnswerList from "./AnswerList";
import "../../scss/QuickStartPage.scss";
import QuizHeader from "./QuickHeader";
import ListSection from "../Login/ListSection";
import GoogleAd from "../GoogleAd";

export default function QuickStartPage() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    document.querySelector(".quiz-button").classList.toggle("slide");
  };

  return (
    <div className="page-container">
      <GoogleAd />
      <QuizHeader />
      <div>
        <div className="quiz-card-body">
          <Question />
          <h3 className="quiz-que">
            ‘Ansett’ is the name of the domestic airline of which of the
            following countries?
          </h3>
          <AnswerList
            // buttonColor={buttonColor}
            // buttonTextColor={buttonTextColor}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
      <div className="fun-fact">
        <h4
          className="fact-heading"
          style={{ fontSize: "16px", fontFamily: "system-ui" }}
        >
          #Fun Fact
        </h4>
        <p className="fact" style={{ paddingBottom: "0px" }}>
          The first match was played between Royal Challengers Bangalore (RCB)
          and KKR in 2008.
        </p>
      </div>
      <ListSection />
    </div>
  );
}

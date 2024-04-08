import React from "react";
import "../scss/ContestRulePage.scss";
import Header from "../components/Header/Header";

export default function ContestRulePage() {
  return (
    <>
      <Header />
      <div className="page-container">
        <div className="rule_container">
          <h1 className="rule_heading">Contest Rules!</h1>
          <ul className="rule-ul" style={{ marginTop: "24px" }}>
            <li className="rule-li">
              The winners for each quiz will be declared based on the scores
              they obtain during the participation in the quiz.
            </li>
            <li className="rule-li">
              There will be a fixed time for declaring the winners of each quiz.
            </li>
            <li className="rule-li">
              You will have overall 60 seconds to solve as many questions from
              20 questions in the quiz.
            </li>
            <li className="rule-li">
              There will be 4 options given below each question and one will be
              the correct answer out of them.
            </li>
            <li className="rule-li">
              Each right answer fetches you 25 points.
            </li>
            <li className="rule-li">
              Each wrong answer deducts 10 points from your score.
            </li>
            <li className="rule-li">
              Do not forget to use the lifelines in case you are stuck during
              the contest.
            </li>
            <li className="rule-li">
              Remember users can use each lifeline once during each contest. Use
              a given amount of coins from your coin bank or watch an ad for a
              few seconds to use the lifeline for free!
            </li>
            <li className="rule-li">
              You would have 4 different lifelines to use:
              <ul>
                <li className="rule-ll">
                  50:50 – On using it, two incorrect answers will be eliminated
                  from the screen.
                </li>
                <li className="rule-ll">
                  Freezer Time – A pause for the ongoing timer will take place
                  for 30 seconds while allowing the users to get more time to
                  answer the question.
                </li>
                <li className="rule-ll">
                  Audience Poll – You can use this option to choose the right
                  answer out of 4 options by using the intelligence of the smart
                  audience.
                </li>
                <li className="rule-ll">
                  Flip Question – A new question will replace the question
                  currently showing on the screen.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

import React from "react";
import HomePage from "./screens/HomePage";
import JoinQuiz from "./screens/JoinQuiz";
import SearchPage from "./screens/SearchPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../src/components/Login/LoginPage";
import backgroundImage from "../src/images/bg_quiz.jpg";
import PlayNow from "./screens/PlayNow";
import QuickStartPage from "./screens/QuickStartPage";
import QuizPage from "../src/components/QuizPage/QuizPage";
import ContestRulePage from "./screens/ContestRulePage";
import CoinHistory from "./screens/CoinHistory";
import ReportIssue from "./components/Header/reportIssueOffCanva/ReportIssue";

import YourScore from "./screens/YourScore";

function App() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.05,
          zIndex: 1,
        }}
      ></div>
      <div className="home">
        <Routes>
          <Route exact path="/" element={<QuickStartPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/playNow" element={<PlayNow />} />
          <Route exact path="/rules" element={<ContestRulePage />} />
          <Route exact path="/quiz/:id" element={<QuizPage />} />
          <Route exact path="/coinHistory" element={<CoinHistory />} />
          <Route exact path="/home/playbtn/:id" element={<JoinQuiz />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/reportissue" element={<ReportIssue />} />
          <Route exact path="/win" element={<YourScore/>} />
         
       
        </Routes>
      </div>
    </div>
  );
}

export default App;

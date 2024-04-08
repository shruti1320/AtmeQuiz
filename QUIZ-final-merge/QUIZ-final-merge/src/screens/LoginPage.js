import React from "react";
import "../scss/LoginPage.scss";
import CustomOffcanvas from "../components/Header/Offcanvas";

export default function LoginPage() {
  return (
    <div>
      <div>
      </div>
      <div className="login-screen">
        <h3 className="login-text" style={{ fontWeight: "700" }}>
          Login now & Play Quiz
        </h3>
        <p className="login-play-text"> Play Quizzes and win Coins</p>
        <button className="login-google-button">
          <span className="login-google-text">
            <img
              alt="coin"
              src="https://images.atmequiz.com/img/googleLogin.svg"
              style={{ height: "36px", width: "36px", color: "transparent" }}
            />
            Login
          </span>
        </button>
        <p className="login-play-text">
          Don’t have an account?
          <span className="login-signup"> Sign Up</span>
        </p>
      </div>
      <div className="list-section list-container">
        <h2 className="list-heading">Play Quiz and Win Coins!</h2>
        <ul className="list-point">
          <li className="list-line">
            Get coins on the completion of each quiz.
          </li>
          <li className="list-line">
            Upgrade your skills with our top quizzes.
          </li>
          <li className="list-line">
            We have many top trending categories like Cricket, World, India,
            Business, loan, insurance & many more!
          </li>
          <li className="list-line">
            Millions of quiz admirer like you showed trust on us.
          </li>
          <li className="list-line">
            Challenge lakhs of players from across the world!
          </li>
        </ul>
      </div>
    </div>
  );
}

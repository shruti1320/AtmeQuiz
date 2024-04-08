import React from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import "../../scss/LoginPage.scss";

function LoginSection() {
  const navigate = useNavigate(); 
  const { id } = useParams();
  const handleLoginClick = () => {
    window.open(
        `https://atme-quiz.onrender.com/auth/google/callback`,
        "_self"
    );

      // navigate(`/quiz/${id}`)
      localStorage.clear();
  };

  return (
    <div className="login-screen">
      <h3 className="login-text" style={{ fontWeight: "700" }}>
        Login now & Play Quiz
      </h3>
      <p className="login-play-text"> Play Quizzes and win Coins</p>
      <button className="login-google-button" onClick={handleLoginClick}>
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
        Don’t have an account? <span className="login-signup"> Sign Up</span>
      </p>

     
    </div>
  );
}

export default LoginSection;

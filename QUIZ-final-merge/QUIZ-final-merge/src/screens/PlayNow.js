import React, { useState } from "react";
import "../scss/PlayNow.scss";
import CoinStack from "../components/PlayNow/CoinStack";
import GoogleAd from "../components/GoogleAd";
import ListSection from "../components/Login/ListSection";
import { useNavigate } from "react-router";

export default function PlayNow() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleQuiz = () => {
    navigate("/home")
  }

  return (
    <div className="play-container">
      <div className="play-box">
        <CoinStack />
        <h1 className="play-heading">You have got 0 coins</h1>
        <p className="play-text">
          Check out more quizzes to test your skills and keep grabbing more
          coins!
        </p>
        <button
          type="button"
          className="btn btn-primary ani shine"
          // onClick={openModal}
          onClick={handleQuiz}
        >
          Play Now
        </button>
      </div>
      <GoogleAd />
      <ListSection />


    </div>
  );
}

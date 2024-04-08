import React, { useEffect, useState } from "react";
import cricket from "../../images/cricket1.png";
import coin from "../../images/coin-icon1.png";
import "../../scss/PlayAndWin.scss";
import GoogleAd from "../GoogleAd";
import { fetchParticularContestdata } from "../../services";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../footer/Footer";

export default function PlayAndWin() {
  const [contestData, setContestData] = useState(null);
  const { id } = useParams(); // Get the id from URL params

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchParticularContestdata(id); // Fetch data based on id
        setContestData(data);
      } catch (error) {
        console.error("Error fetching contest data:", error);
      }
    };
    fetchData();
  }, [id]);

  const navigate = useNavigate();

  const loginNavigation = () => {
    navigate(`/login/${id}`);
  };

  return (
    <div className="home">
      <Header showBackButton={true}  backRoute="/home"/>

      <div className="box-c">
        <div className="box">
          <div className="imagediv">
            <div className="imageee imageeeanimation">
              <div className="imgstyle">
                <img
                  alt=""
                  src={contestData?.quizImage}
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
              <h3 className="spantext" style={{ color: "#fff" }}>
                {contestData && contestData.name
                  ? contestData.name
                  : "Loading..."}
              </h3>
            </div>
          </div>
          <h2 style={{ fontSize: "20px", color: "#fff" }}>
            {contestData && contestData.winningCoins
              ? `Play and Win ${contestData.winningCoins}`
              : "Loading..."}
            <img alt="" src={coin} style={{ height: "19px", width: "19px" }} />
          </h2>
          <p className="ptext" style={{ color: "#b6b3ff" }}>
            You’ve got 60 seconds to answer all questions. Answer as many
            questions as you can. Entry fee will be{" "}
            {contestData && contestData.entryCoins
              ? `Play and Win ${contestData.entryCoins}`
              : "Loading..."}
            <span className="spanimg">
              <img
                alt=""
                src={coin}
                style={{ width: "16px", height: "16px" }}
              />
            </span>
          </p>
          <p className="mb-16 cstmtext" style={{ color: "#b6b3ff" }}>
            join and save the coins you win! Its free & safe!
          </p>
        </div>

        <a
          className="playNow_btn playNow_animated playNow_shine"
          style={{ textDecoration: "none" }}
          // href="/login"
          onClick={loginNavigation}
        >
          Join Quiz
        </a>
        <button className="playNow_btn playNow_animated playNow_blue">
          Play as Guest
        </button>

        <GoogleAd />
        <div className="playNow_twobtn">
          <button className="playNow_btn1 playNow_animated playNow_blue">
            View Prize
          </button>
          <a
            href="/contest-rules"
            className="playNow_btn2 playNow_animated playNow_blue"
          >
            Contest Rules
          </a>
        </div>

        <Footer/>
      </div>
    </div>
  );
}

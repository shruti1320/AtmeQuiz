import React, { useEffect, useState } from "react";
import "../../../scss/CategoriesCard.scss";
import cricket from "../../../images/cricket1.png";
import coin from "../../../images/coin-icon1.png";
import { Link, useNavigate } from "react-router-dom";
import { fetchCategoriesWisedata } from "../../../services";
import Footer from "../../footer/Footer";

export default function CategoryCard({ activeCategory }) {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);

  const handleClick = (id) => {
    navigate(`/home/playbtn/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategoriesWisedata(activeCategory);
        setCardData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, [activeCategory]);

  return (
    <div>
      <div className="maindiv">
        {cardData?.map((card) => (
          <div key={card._id} className="mainbox">
            <div className="cardcontent">
              <div className="imgclass">
                <img
                  alt=""
                  src={card.quizImage}
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
              <div className="gametitle">
                <span className="text">
                  <span style={{ textAlign: "left", marginRight: "150px" }}>
                    {card.name}
                  </span>
                  <h3 className="head">
                    Play and Win {card.winningCoins}
                    <img
                      alt=""
                      src={coin}
                      style={{
                        height: "19px",
                        width: "19px",
                        marginLeft: "5px",
                      }}
                    />
                  </h3>
                </span>
                <p className="text2" style={{ marginTop: "-15px" }}>
                  Winner announcement @ 5:30 pm
                </p>
              </div>
              <span className="textlive">live</span>
            </div>

            <div className="card-footer">
              <p className="color" style={{ marginBottom: "6px" }}>
                <span style={{ marginRight: "8px" }}>
                  <span className="text3">Entry: {card.entryCoins}</span>
                  <img
                    src={coin}
                    alt=""
                    className="imgstyle"
                    style={{
                      height: "16px",
                      width: "16px",
                      color: "transparent",
                    }}
                  />
                  <strong className="color1">500</strong>
                  <span style={{ marginLeft: "3px" }}>Users Playing</span>
                </span>
              </p>
              <Link
                className="btn-style"
                to={`/home/playbtn/${card.id}`}
                onClick={() => handleClick(card.id)}
              >
                Play
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

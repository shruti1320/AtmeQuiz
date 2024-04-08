import React, { useState } from "react";
import backgroundImage from "../images/bg_quiz.jpg";
import "../scss/HomePage.scss";
import Categories from "../components/homeScreen/categoryOption/Categories";
import CategoryCard from "../components/homeScreen/categoryCard/CatgoryCard";
// import ReportIssue from "../components/homeScreen/reportIssueOffCanva/ReportIssue";
import GoogleAd from "../components/GoogleAd";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.04,
          zIndex: 1,
        }}
      ></div> */}
      <div className="home">
        <Header />
        <div className="home page">
          <GoogleAd />
          <Categories />
          <CategoryCard />
          <Footer />
        </div>
      </div>
    </div>
  );
}

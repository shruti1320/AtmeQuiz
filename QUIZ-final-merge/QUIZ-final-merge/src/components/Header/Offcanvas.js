import React, { useState,useEffect } from "react";
import "../../scss/HomePage.scss";
import "../../scss/Offcanvas.scss";
import "../../scss/ReportIssue.scss";
import male from "../../images/male-user-avatar.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import { useNavigate } from "react-router-dom";
import ReportIssue from "./reportIssueOffCanva/ReportIssue";
import axios from 'axios';
const CustomOffcanvas = () => {
  const [showReport, setShowReport] = useState(false);

  const navigate = useNavigate();

  const toggleReport = () => {
    setShowReport(!showReport);
  };

  const handleContestRuleClick = () => {
    navigate("/rules");
  };


  const [user, setUser] = useState(null);
 
	const getUser = async () => {
		try {
			const url = `https://atme-quiz.onrender.com/auth/login/success`;
      console.log(url,'url--------')
			const { data } = await axios.get(url, { withCredentials: true });
      console.log(data,'data')
			setUser(data.user._json);
      
		} catch (err) {
			console.log(err);
		}
	};
  console.log(user,'user$$$$$$$$$$$')
	useEffect(() => {
		getUser();
	}, []);

  return showReport ? (
    <ReportIssue toggleReport={toggleReport} />
  ) : (
    <div
    className={`offcanvas offcanvas-Header text-white`}
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style={{ top: "0px", width: "370px" }}
      data-bs-scroll="true"
      data-bs-backdrop="false"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          <img src={male} alt="/" />
        </h5>
        <div className=" text-white user">
          <h3>
            <span className=" header_userDetails">{user?user:'Guest'}</span>
          </h3>
          <div className="header_contenteditable">
            <span>Play Quiz & earn coins</span>
          </div>
          <a
            href="/login"
            className="header_btn header_b"
            style={{ textDecoration: "none" }}
          >
            SIGN IN
          </a>
        </div>
        <button
          type="button"
          className="btn-close ms-auto btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style={{ marginTop: "-80px" }}
        ></button>
      </div>

      <div
        className=" bg "
        style={{
          borderTop: "1px solid #4248b2",
          margin: "0px",
          paddingTop: "0px",
        }}
      >
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
            onClick={handleContestRuleClick}
          >
            <div className="nav_icon ">
              <i
                className="bi bi-bar-chart-line-fill"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <a
              href="/rules"
              style={{
                fontWeight: "500",
                color: "#ffffffba",
                textDecoration: "none",
              }}
            >
              {" "}
              Contest Rules
            </a>
          </div>
        </div>
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-database"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <a
              href="/"
              style={{
                fontWeight: "500",
                color: "#ffffffba",
                textDecoration: "none",
              }}
            >
              {" "}
              Coin History
            </a>
          </div>
        </div>
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-chat-square-text"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <a
              href="/"
              style={{
                fontWeight: "500",
                color: "#ffffffba",
                textDecoration: "none",
              }}
            >
              Blogs
            </a>
          </div>
        </div>
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-person"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <a
              href="/"
              style={{
                fontWeight: "500",
                color: "#ffffffba",
                textDecoration: "none",
              }}
            >
              About Us
            </a>
          </div>
        </div>
        <div className="menu_items ">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-chat-left"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <a
              href="/"
              style={{
                fontWeight: "500",
                color: "#ffffffba",
                textDecoration: "none",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="menu_items">
          <div
            className="nav_item my-2 "
            style={{ display: "flex", alignItems: "center" }}
            type="button"
            onClick={toggleReport}
          >
            <div className="nav_icon text-white">
              <i
                className="bi bi-flag"
                style={{ height: "21px", width: "23px" }}
              ></i>
            </div>
            <a
              style={{
                fontWeight: "500",
                color: "#ffffffba",
                textDecoration: "none",
              }}
            >
              Report an Issue
            </a>
          </div>
        </div>

        <div className="offcanvas_connect">
          <div className="contact_text text-white">
            <span> Connect with us </span>
          </div>
          <div className="contact_wrap text-white">
            <div className="contact_icon_cover">
              <a href="https://www.facebook.com/Atmegame">
                <img
                  src="https://images.atmequiz.com/img/facebook-white-icon.svg"
                  style={{ width: "12px", height: "23px" }}
                  alt=""
                />
              </a>
            </div>
            <div className="contact_icon_cover">
              <a href="https://twitter.com/ATMEGAME">
                <img
                  src="https://images.atmequiz.com/img/tw-white-icon.svg"
                  style={{ width: "22px", height: "17px" }}
                  alt=""
                />
              </a>
            </div>
            <div className="contact_icon_cover">
              <a href="https://www.instagram.com/atmegame">
                <img
                  src="https://images.atmequiz.com/img/instagram-white-icon.svg"
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
              </a>
            </div>
            <div className="contact_icon_cover">
              <a href="https://in.pinterest.com/atmequiz">
                <img
                  src="	https://images.atmequiz.com/img/pin-white-icon.svg"
                  style={{ width: "20px", height: "26px" }}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOffcanvas;

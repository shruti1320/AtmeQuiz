import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LottieAnimation from "./LottieAnimation";
import logo from "../../images/logo.jpg";
import "../../scss/Navbar.scss";
import CoinAnimation from "./CoinAnimation";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";

const CustomNavbar = ({ handleShow, showBackButton,handleBack }) => {
  const navigate = useNavigate();

  // const handleBack = () => {
  //   navigate("/home");
  // };
  const handleCoinHistoryClick = () => {
    navigate("/coinHistory"); // Navigate to the Contest Rule page
  };

  const backHome=()=>{
    navigate("/home")
  }
  return (
    <Navbar className="header" style={{padding:"0px", marginBottom:"12px"}}>
      <Container>
        {showBackButton && (
          <Nav.Link
            style={{ color: "white" }}
            className="text-white"
            onClick={handleBack}
          >
            <i className="bi bi-arrow-left" style={{ fontSize: "30px" }} />
          </Nav.Link>
        )}
        {!showBackButton && (
          <Nav.Link
            onClick={handleShow}
            style={{ color: "white" }}
            className="text-white"
          >
            <i
              className="bi bi-filter-left"
              aria-hidden="true"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              style={{ fontSize: "35px" }}
            ></i>
          </Nav.Link>
        )}

        <Nav.Link className="me-auto">
          <a href="/" className="logo" onClick={backHome}>
            <img
              src={logo}
              alt=""
              style={{ height: "34px", width: "132px", marginTop: "2px" }}
              
            />
          </a>
        </Nav.Link>

        <Nav>
          <div
            className="coin"
            style={{ display: "flex", alignItems: "center" }}
            onClick={handleCoinHistoryClick}
          >
            <div style={{ marginRight: "5px", marginLeft: "-4px" }}>
              <CoinAnimation />
            </div>
            <div
              className="text-white d-flex flex-column"
              style={{ textAlign: "left" }}
            >
              <div style={{ marginBottom: "-8px" }}>0</div>
              <div style={{ fontSize: "11px" }} className="text-white">
                Coins
              </div>
            </div>
          </div>

          <div className="lottie">
            <LottieAnimation />
          </div>
        </Nav>
      </Container>
      
    </Navbar>
  );
};

export default CustomNavbar;

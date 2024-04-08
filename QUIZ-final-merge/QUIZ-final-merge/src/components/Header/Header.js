import React from "react";
import CustomNavbar from "./Navbar";
import CustomOffcanvas from "./Offcanvas";
import "../../scss/Header.scss";
import { useNavigate } from "react-router";

const Header = ({ handleShow, showBackButton,backRoute }) => {

  const naviagate=useNavigate();
  const handleBack = () => {
    naviagate(backRoute);
  };
  
  return (
    <div>
      <CustomNavbar
        showBackButton={showBackButton}
        handleShow={handleShow}
        handleBack={handleBack}
      />
      <CustomOffcanvas />
    </div>
  );
};

export default Header;

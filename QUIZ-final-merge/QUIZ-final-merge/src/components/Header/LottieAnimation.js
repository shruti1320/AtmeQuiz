import React from "react";
import Lottie from "react-lottie";
import bell from "../../json/white bell.json"

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bell,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    
    <Lottie
      style={{ color: "white" }}
      options={defaultOptions}
      height={25}
      width={25}
      className="me-auto"
    />
  );
};

export default LottieAnimation;

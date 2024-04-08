import React from "react";
import Lottie from "react-lottie";
import trophy from "../../json/Trophy.json";

const WinTrophy = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: trophy, // Pass your imported animation data here
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};

export default WinTrophy;

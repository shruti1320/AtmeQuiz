import React from "react";
import Lottie from "react-lottie";
import coinStack from "../../json/coin stack.json";

export default function CoinStack() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coinStack,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie
        style={{ color: "white" }}
        options={defaultOptions}
        height={150}
        width={150}
        className="me-auto"
      />
    </div>
  );
}

import React from 'react'
import Lottie from "react-lottie";
import coin from "../../json/coin.json"

export default function CoinAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coin,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div>
      <Lottie
      style={{ color: "white" }}
      options={defaultOptions}
      height={25}
      width={25}
      className="me-auto"
    />
    </div>
  )
}

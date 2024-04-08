// CoinHistory.js
import React from "react";
import "../scss/CoinHistory.scss";
import CoinHistoryItem from "../components/CoinHistory/CoinHistoryItem";

export default function CoinHistory() {
  return (
    <div className="page-container">
      <div className="coin-history-container">
        <h1 style={{ paddingBottom: "10px", fontSize: "22px", fontWeight: "700" }}>
          Coins History
        </h1>
        <CoinHistoryItem />
        <CoinHistoryItem />
        <CoinHistoryItem />
        <CoinHistoryItem />
        <CoinHistoryItem />
        <CoinHistoryItem />
      </div>
    </div>
  );
}

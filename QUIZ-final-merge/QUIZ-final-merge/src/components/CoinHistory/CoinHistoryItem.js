// CoinHistoryItem.js
import React from 'react';
import coin from '../../images/coin-icon.jpg';
import icon from '../../images/icon.webp';

export default function CoinHistoryItem() {
  return (
    <div className="coin-history-list">
      <div className="coin-history-image">
        <img src={icon} alt="" style={{ width: "54px", verticalAlign: "middle" }} />
      </div>
      <div className="coin-history-name">
        <h4 style={{ fontSize: "17px", fontWeight: "500" }}>
          Reward Coins
        </h4>
        <span style={{ fontWeight: "400", fontSize: "14px", color: "hsla(0, 0%, 100%, .6)" }}>
          April 1st 2024
        </span>
      </div>
      <div style={{ width: "27%", textAlign: "right" }}>
        <span className="coin-badge">Earned</span>
        <div style={{ marginTop: "4px" }}>
          <img src={coin} alt="" style={{ width: "16px", height: "16px", marginRight: "4px", fontSize: "16px", verticalAlign: "right" }} />
          0
        </div>
      </div>
    </div>
  );
}

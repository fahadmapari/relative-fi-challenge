import React from "react";
import iconImage from "../assets/bitcoinsv.png";
import Pairs from "./Pairs";

const AssetCard = () => {
  return (
    <div className="asset-card">
      <div className="asset-icon">
        <img className="asset-icon-image" src={iconImage} alt="icon" />
      </div>
      <p className="label">BITCOIN (BTC)</p>
      <div className="amount-container">
        $31,812.80 <span className="change-indicator positive">+10</span>
      </div>
      <p className="label">Price</p>
      <div className="amount-container">$60,000</div>
      <p className="label">TVL</p>

      <Pairs />
      <p className="label">Popular Pairs</p>
    </div>
  );
};

export default AssetCard;

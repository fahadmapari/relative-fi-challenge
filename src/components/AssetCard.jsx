import React from "react";
import Pairs from "./Pairs";

const AssetCard = ({ asset }) => {
  return (
    <div className="asset-card">
      <div className="asset-icon">
        <img className="asset-icon-image" src={asset.assetIcon} alt="icon" />
      </div>
      <p className="label">{asset.assetName}</p>
      <div className="amount-container">
        {asset.price}{" "}
        <span
          className={`change-indicator ${
            asset.priceChange < 0 ? "negative" : "positive"
          }`}
        >
          {asset.priceChange >= 0 && "+"}
          {asset.priceChange}%
        </span>
      </div>
      <p className="label">Price</p>
      <div className="amount-container">{asset.tvl}</div>
      <p className="label">TVL</p>

      <Pairs pairs={asset.popularPairs} />
      <p className="label">Popular Pairs</p>
    </div>
  );
};

export default AssetCard;

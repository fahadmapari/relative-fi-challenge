import React from "react";
import pair1 from "../assets/Ethereum.png";
import pair2 from "../assets/Binance Coin.png";
import pair3 from "../assets/Bitcoin SV.png";

const Pairs = () => {
  return (
    <div className="amount-container pair-container">
      <div className="pair">
        <img src={pair1} alt="" />
      </div>

      <div className="pair">
        <img src={pair2} alt="" />
      </div>

      <div className="pair">
        <img src={pair3} alt="" />
      </div>
    </div>
  );
};

export default Pairs;

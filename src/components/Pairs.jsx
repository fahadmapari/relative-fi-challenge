import React from "react";


const Pairs = ({pairs}) => {
  
  return (
    <div className="amount-container pair-container">
      {pairs.map(((pair, index) => (
        <div className="pair" key={index}>
          <img src={pair} alt="icon" />
        </div>
      )))}

    </div>
  );
};

export default Pairs;

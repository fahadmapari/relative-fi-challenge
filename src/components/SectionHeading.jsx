import React from "react";
import icon from "../assets/activity.png";

const SectionHeading = () => {
  return (
    <div className="section-heading">
      <img className="section-heading-icon" src={icon} alt="section icon" />
      <p className="section-heading-text">Trending Assets</p>
    </div>
  );
};

export default SectionHeading;

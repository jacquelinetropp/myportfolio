import React from "react";

import "./skills.styles.scss";

const skillsCard = ({ image, text }) => (
  <div className="flip-card">
    <div className="flip-card-outer"></div>
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={image} alt="icon" className="img" />
      </div>
      <div className="flip-card-back">
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default skillsCard;

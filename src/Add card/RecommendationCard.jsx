import React from "react";
import "./RecommendationCard.css";

const RecommendationCard = ({ image, title, rate, price }) => {
  return (
     <div className="recommendation-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h4>{title}</h4>
        <div className="bolds">₹ {rate}/hr</div>
        <div className="bold">₹ {price}</div>
      </div>
    </div>
  );
};

export default RecommendationCard;

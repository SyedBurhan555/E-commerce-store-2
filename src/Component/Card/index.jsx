import React from "react";
import "./index.css";

const Card = ({ title, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt="productimage" />
      <div className="card-detail">
        <p>{title}</p>
        <p>
          $<span>{price}</span>
        </p>
      </div>
      <h6 className="title">{title}</h6>
    </div>
  );
};

export default Card;

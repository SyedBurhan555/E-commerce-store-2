import React from "react";
import { NavLink } from "react-router-dom";
import './FeatureCard.css';
import CurrencyFormat from "../../Helpers/CurrencyFormat";

const FeaturedCard = (curElem) => {

    const {image,name,price,id,category} = curElem
// console.log(curElem.image)


  return (
    <NavLink to={`/singleproduct/${id}`} style={{textDecoration:'none',color:'black'}}>
    <div className="Featured-card">
      <img src={image} alt="productimage" />
      <div className="featured-card-detail">
        <p>{name}</p>
        <p className="feature-card-price">{<CurrencyFormat price={price}/>}
        </p>
      </div>
      <h6 className="featured-card-title">{category}</h6>
    </div>
    </NavLink>
  );
};

export default FeaturedCard;

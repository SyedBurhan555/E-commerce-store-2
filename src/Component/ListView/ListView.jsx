import React from "react";
import "./ListView.css";
import { NavLink } from "react-router-dom";
import CurrencyFormat from "../../Helpers/CurrencyFormat";

const ListView = ({ product }) => {
  return (
    <div>
      {product.map((curelem) => {
        const { id, name, image, price, description } = curelem;
        return (
          <NavLink to={`/singleproduct/${id}`} style={{textDecoration:'none',color:'black'}}>
          <div className="list-view" key={id}>
            <div className="list-row">
              <img src={image} alt="" />
              <div className="list-detial">
                <h3>{name}</h3>
                <p className="list-price">{<CurrencyFormat price={price}/>}</p>
                <p>
                {description}
                </p>
                <button className="list-btn">Read More</button>
              </div>
            </div>
          </div>
           </NavLink>
        );
      })}
    </div>
  );
};

export default ListView;

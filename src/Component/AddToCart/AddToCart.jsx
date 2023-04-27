import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartGlobal } from "../../Context/CartContext";

const AddToCart = ({ product }) => {

  const {AddToCart} = useCartGlobal();

  const { id, colors = [], stock } = product;
  const [maincolor, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  
  return (
    <>
      <div className="product-color">
        <span className="color">Color:</span>
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ background: curColor }}
              className={maincolor === curColor ? "light active" : "light"}
              onClick={() => setColor(curColor)}
            >
              {maincolor === curColor ? (
                <i class="fas fa-check" style={{ color: "#555" }}></i>
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="quantity">
        <small onClick={() => setDecrease()}>-</small>
        <small>{amount}</small>
        <small onClick={() => setIncrease()}>+</small>
      </div>
      <NavLink to="/cart" className="product-btn" onClick={()=>AddToCart(id,maincolor,amount,product)}>
        Add to Cart
      </NavLink>
    </>
  );
};

export default AddToCart;

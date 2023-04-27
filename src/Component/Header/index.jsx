import React from "react";
import "./index.css";
import logo from "../../assest/logo.png";
import { Link } from "react-router-dom";
import { useCartGlobal } from "../../Context/CartContext";

export const itemTotalFunction = (cart) => {
  const cartAmount = cart.map((curElem) => curElem.amount);
  const initialValue = 0;
  const addValue = cartAmount.reduce((a, b) => a + b, initialValue);
  return addValue;
};

const Header = () => {
  const { cart } = useCartGlobal();

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="product">
            <li>Product</li>
          </Link>
          <Link to="/cart">
            <i className="far fa-shopping-cart">{itemTotalFunction(cart)}</i>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

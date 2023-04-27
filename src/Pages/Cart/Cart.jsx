import React from "react";
import "./Cart.css";
import { useCartGlobal } from "../../Context/CartContext";
import CurrencyFormat from "../../Helpers/CurrencyFormat";
import { Link } from "react-router-dom";
import { itemTotalFunction } from "../../Component/Header";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const {isAuthenticated,user} = useAuth0()
  const {
    total_amount,
    cart,
    shipping_fee,
    removeItem,
    clearCart,
    increamentPro,
    decreamentPro,
  } = useCartGlobal();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        <h1 style={{ fontWeight: 400 }}>Your Cart is Empty</h1>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="profile">
        {
          isAuthenticated && <>
          <img src={user.profile} alt={user.name} className="profile-pic" />
          <span>{user.name}</span>
          </>
        }
      </div>
      <h1>Cart Items:{itemTotalFunction(cart)}</h1>
      <div className="cart-item-heading">
        <h5>ITEM</h5>
        <h5>PRICE</h5>
        <h5>QUANTITY</h5>
        <h5>SUBTOTAL</h5>
        <h5>REMOVE</h5>
      </div>
      <hr />
      {cart.map((curLem) => {
        const { image, price, maincolor, amount, id, name } = curLem;
        return (
          <div  key={id}>
            <div className="cart-products">
              <div className="cart-title">
                <img src={image} alt="" className="item-image" />
                <div>
                  <small>{name}</small>
                  {/* <small>{max}</small> */}
                  <br />
                  <div style={{ alignItems: "center", display: "flex" }}>
                    <small>color:</small>
                    <button
                      style={{
                        background: maincolor,
                        borderRadius: 12,
                        width: 15,
                        height: 15,
                        margin: "2px 0 0 2px",
                        border: "none",
                      }}
                    ></button>
                  </div>
                </div>
              </div>
              <p>
                <CurrencyFormat price={price} />
              </p>
              <div className="quantity">
                <small onClick={() => decreamentPro(id)}>-</small>
                <small>{amount}</small>
                <small onClick={() => increamentPro(id)}>+</small>
              </div>
              <h3>
                <CurrencyFormat price={price * amount} />
              </h3>
              <i className="fas fa-trash" onClick={() => removeItem(id)}></i>
            </div>
            <hr />
                        </div>
        );
      })}
      <div className="cart-buttons">
        <Link className="con-shopping" to="/product">
          Continue Shopping
        </Link>
        <button className="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <div className="cart-summary">
        <div className="cart-row">
          <div className="cart-price">
            <h5>SubTotal</h5>
            <h5>Shipping Fee:</h5>
            <h5>Order Total</h5>
          </div>
          <div className="cart-total">
            <h5>
              <CurrencyFormat price={total_amount} />
            </h5>
            <h5>
              <CurrencyFormat price={shipping_fee} />
            </h5>
            <h5>
              <CurrencyFormat price={shipping_fee + total_amount} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

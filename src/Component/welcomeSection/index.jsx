import React from "react";
import "./index.css";
import mainImage from "../../assest/hero.jpg";

const welcomeSection = ({title}) => {
  return (
    <div className="welcome-container">
      <div className="welcome-row">
        <div className="welcome-left-sec">
          <h4>WELCOME TO</h4>
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nostrum corrupti dolor eligendi veritatis aut. Quae quibusdam
            praesentium, nostrum at esse tempora
          </p>
          <button className="welcome-btn">Shop Now</button>
        </div>
        <div className="welcome-right-sec">
          <img src={mainImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default welcomeSection;

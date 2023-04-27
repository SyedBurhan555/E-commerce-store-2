import React from "react";
import "./index.css";

const ServiceSection = () => {
  return (
    <div className="service-section">
      <div className="row">
        <div className="service-col-1">
          <i class="fal fa-truck"></i>
          <h5>Super Fast and Free delivery</h5>
        </div>
        <div>
          <div className="service-col-2">
            <i class="fal fa-shield-cross"></i>
            <h5>non Contact Shipping</h5>
          </div>
          <div className="service-col-2">
            <i class="fas fa-hand-holding-usd"></i>
            <h5>Money Back Guaranteed</h5>
          </div>
        </div>
        <div className="service-col-1">
          <i class="far fa-lock"></i>
          <h5>Super Secure Payment System</h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

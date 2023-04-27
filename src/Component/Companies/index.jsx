import React from "react";
import "./index.css";
import company1 from "../../assest/logo-coca-cola.png";
import company2 from "../../assest/logo-godrej.png";
import company3 from "../../assest/logo-oppo.png";
import company4 from "../../assest/logo-paypal.png";
import company5 from "../../assest/logo-philips.png";

const Companies = () => {
  return (
    <div className="companies">
      <h4 className="companies-title">Trusted By 1000+ Companies</h4>
      <div className="companies-names">
        <img src={company1} alt="companyname" />
        <img src={company2} alt="companyname" />
        <img src={company3} alt="companyname" />
        <img src={company4} alt="companyname" />
        <img src={company5} alt="companyname" />
      </div>
    </div>
  );
};

export default Companies;

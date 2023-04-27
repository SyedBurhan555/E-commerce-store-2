import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="get-started">
      <div className="started-content">
        <p>
          Ready to get started <br />
          Talk to us today
        </p>
        <button className="btn">GET STARTED</button>
      </div>
    </div>
      <div className="footer-row">
        <div className="footer-col-1">
          <h3 className="footer-title">Syed Burhan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit Quae, voluptate.
          </p>
        </div>
        <div className="footer-col-2">
          <p className="footer-title">Subcribe to get important updates</p>
          <form>
            <input type="email" placeholder="Enter Email" required />
            <button className="footer-btn">Subcribe</button>
          </form>
        </div>
        <div className="footer-col-3">
          <h3 className="footer-title">Follow us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/" target="blank">
              <i className="fab fa-facebook"></i>
            </a>
            <i className="fab fa-instagram"></i>
            <a
              href="https://www.youtube.com/channel/UCkoFtb0uun6h6gxMU6kEBzA"
              target="blank"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-col-4">
          <h3 className="footer-title">Call us</h3>
          <span>03101087932</span>
        </div>
      </div>
      <hr />
      <div className="terms-condition">
        <p>@ SyedBurhan. All Right Reserved</p>
        <h3>
          PRIVACY <br />
          TERMS & CONDITION
        </h3>
      </div>
    </div>
  );
};

export default Footer;

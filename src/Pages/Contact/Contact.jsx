import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-us">
      <h1>Feel Free to Contact Us</h1>
      <div className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3181272651796!2d67.13250371561055!3d24.88712805031594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eafe2ecc311%3A0x8213daf29adc6923!2sShahrah-e-Faisal%20Rd%2C%20Faisal%20Cantonment%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1667559153996!5m2!1sen!2s"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form method="POST" action="https://formspree.io/f/mlekrleg">
        <input
          type="text"
          placeholder="name"
          required
          autoComplete="off"
          name="UserName"
        />
        <input
          type="email"
          placeholder="Email"
          required
          autoComplete="off"
          name="Email"
        />
        <textarea
          placeholder="message"
          name="Message"
          required
          cols="30"
          rows="10"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;

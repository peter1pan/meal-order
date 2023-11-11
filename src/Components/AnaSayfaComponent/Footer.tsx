import React from "react";
import "./StyleScss/_footer.scss";
import logo from "./img/logopng.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <i className="fa-brands fa-instagram fa-2xl"></i>
        <i className="fa-brands fa-facebook-f fa-2xl"></i>
        <i className="fa-brands fa-pinterest-p fa-2xl"></i>
      </div>
      <div className="logo-image-div">
        <img className="logo-image" src={logo} alt="" />
      </div>
      <div>
        <span>Food Delivery © 2014 - 2023</span>
      </div>
    </div>
  );
};

export default Footer;

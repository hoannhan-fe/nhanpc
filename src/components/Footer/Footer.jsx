import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  const handleFacebookIconClick = () => {
    // Chuyển hướng đến URL Facebook cụ thể
    window.location.href = "https://www.facebook.com/NguyenHoanNhan.Support/";
  };
  const handleTwitterIconClick = () => {
    // Chuyển hướng đến URL Facebook cụ thể
    window.location.href = "https://twitter.com/elonmusk";
  };
  const handleLinkedinIconClick = () => {
    // Chuyển hướng đến URL Facebook cụ thể
    window.location.href = "https://www.linkedin.com/in/nh%E1%BA%ABn-nguy%E1%BB%85n-kh%E1%BA%A3i-ho%C3%A0n-7ab6a2307/";
  };
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" onClick={handleFacebookIconClick} />
            <img src={assets.twitter_icon} alt="" onClick={handleTwitterIconClick}/>
            <img src={assets.linkedin_icon} alt="" onClick={handleLinkedinIconClick}/>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+84 9889 54542</li>
            <li>contact NguyenHoanNhan.nnn@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright Hoan Nhan 2024 Web ReactJS - All Right Reserved
      </p>
    </div>
  );
}
export default Footer;

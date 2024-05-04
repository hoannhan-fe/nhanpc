// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from './img/img1.png'
import "./Header.css";
const Header = () => {


  const handleViewMenuClick = () => {
    window.location.href = "/#explore-menu";
  };
  return (
    <div className="header">
      <div className="header-img"><img src={img1} alt="" /></div>
      <div className="header-contents">
        <h2>Explore our PC components</h2>
        <p>
          Choose from a variety of PC components including top-quality products
          and expertise. Our mission is to meet your needs and enhance your
          usage experience, providing a memorable experience with leading PC
          components.
        </p>
        <button onClick={handleViewMenuClick}>View menu</button>
      </div>
    </div>
  );
};

export default Header;

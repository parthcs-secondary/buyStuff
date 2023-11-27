import React from "react";
import "../styles/Navigationbar.css";
const Navigationbar = () => {
  return (
    <div className="wrapper-nav">
      <div>Logo</div>
      <div className="menu-list-div">
        <ul className="menu-list">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Unisex</li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="user-icon">
          <img src="" alt="user-icon" />
        </div>
        <div className="cart">
          <img src="" alt="cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;

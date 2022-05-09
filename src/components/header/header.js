import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <span className="header-title">Portfolio.</span>
        <div>
          <ul className="navigation-list" role="navigation">
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

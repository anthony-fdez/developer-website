import React from "react";
import "./header.css";

const Header = () => {
  const scrollTo = ({ elementId }) => {
    const section = document.querySelector(`#${elementId}`);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <span className="header-title">Portfolio.</span>
        <div>
          <ul className="navigation-list" role="navigation">
            <li onClick={() => scrollTo({ elementId: "work" })}>Work</li>
            <li onClick={() => scrollTo({ elementId: "about" })}>About</li>
            <li onClick={() => scrollTo({ elementId: "contact" })}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

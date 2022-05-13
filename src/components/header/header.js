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
        <nav>
          <ul className="navigation-list" role="navigation">
            <li>
              <button
                className="navigation_button"
                onClick={() => scrollTo({ elementId: "work" })}
              >
                Work
              </button>
            </li>
            <button
              className="navigation_button"
              onClick={() => scrollTo({ elementId: "about" })}
            >
              About
            </button>
            <button
              className="navigation_button"
              onClick={() => scrollTo({ elementId: "contact" })}
            >
              Contact
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

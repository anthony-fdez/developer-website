import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <a href="mailto:anthonyfdez23@gmail.com" target="_blank" rel="noreferrer">
        anthonyfdez23@gmail.com
      </a>
      <a
        target="_blank"
        href="https://github.com/anthony-fdez"
        rel="noreferrer"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        href="https://github.com/anthony-fdez/developer-website"
        rel="noreferrer"
      >
        See the source code for this page
      </a>
    </div>
  );
};

export default Contact;

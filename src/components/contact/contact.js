import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact</h1>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:anthonyfdez23@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              anthonyfdez23@gmail.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/anthony-fdez"
              target="_blank"
              rel="noreferrer"
            >
              anthony-fdez
            </a>
          </li>
        </ul>
        <br></br>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://github.com/anthony-fdez/developer-website"
          rel="noreferrer"
        >
          See the source code for this page.
        </a>
      </div>
    </div>
  );
};

export default Contact;

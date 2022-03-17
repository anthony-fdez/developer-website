import React, { useState } from "react";
import Modal from "../../../helpers/modal/modal";
import styles from "./basketballCenter.module.css";

const BasketballCenter = () => {
  const [isLearnMoreModalShown, setIsLearnMoreModalShown] = useState(false);

  const handleCloseLearnMoreModal = () => {
    setIsLearnMoreModalShown(false);
  };

  const modal = () => {
    return (
      <Modal
        isOpen={isLearnMoreModalShown}
        handleClose={handleCloseLearnMoreModal}
      >
        <div>
          <h1>This is the modal</h1>
        </div>
      </Modal>
    );
  };

  return (
    <div className="project-container">
      {modal()}
      <div className="project-image-container">
        <img
          className="project-image"
          alt="Basketball Center Logo"
          src="./BBALL_CENTER.png"
        />
      </div>
      <div className="project-info-container">
        <h2>Basketball Center</h2>
        <p>
          Basketball Center is a mobile app built to help basketball fans to
          stay up to date with everything in the league
        </p>
        <button onClick={() => setIsLearnMoreModalShown(true)}>
          Learn More
        </button>
        {/* <div className="appstore-link-container">
          <i className="fab fa-apple fa-2x"></i>
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/basketball-center/id1588423237"
            rel="noreferrer"
          >
            View on AppStore
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default BasketballCenter;

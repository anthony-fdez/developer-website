import React, { useState } from "react";
import styles from "./protypist.module.css";
import Modal from "../../../helpers/modal/modal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Images
import icon from "./screenshots/protypist.png";
import image1 from "./screenshots/1.png";
import image2 from "./screenshots/2.png";
import image3 from "./screenshots/3.png";
import image4 from "./screenshots/4.png";
import image5 from "./screenshots/5.png";

const Protypist = () => {
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
        <div className={styles.modal_header}>
          <h1>ProTypist</h1>
          <button onClick={() => setIsLearnMoreModalShown(false)}>Close</button>
        </div>

        <div className={styles.modal_body}>
          <Swiper slidesPerView="auto" spaceBetween={10}>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src={image1}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src={image2}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src={image3}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src={image4}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src={image5}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <br></br>
        <h2>
          About <a href="https://protypist.app">ProTypist</a>
        </h2>
        <br></br>

        <p>
          ProTypist is a fully featured typing game. With a multiplayer mode,
          custom games, quotes, top most common words in 7 languages and
          multiple themes.
        </p>
        <br></br>
        <h2>Technologies Used</h2>
        <br></br>
        <h3>Front End / App:</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>SocketIO Client</li>
          <li>Google Analytics</li>
        </ul>
        <br></br>
        <h3>Back End:</h3>
        <ul>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB / Mongoose</li>
          <li>SocketIO</li>
          <li>Rest API</li>
        </ul>
        <br></br>
        <h2>Sourse Code</h2>
        <div className="appstore-link-container">
          <i className="fab fa-github fa-2x"></i>
          <a
            target="_blank"
            href="https://github.com/anthony-fdez/protypist"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </Modal>
    );
  };

  return (
    <div>
      <div className="project-container">
        {modal()}
        <div className="project-image-container">
          <img
            className="project-image"
            alt="Basketball Center Logo"
            src={icon}
          />
        </div>
        <div className="project-info-container">
          <h2>ProTypist</h2>
          <p>
            ProTypist is a fully featured typing game, with a multiplayer mode
            and lots of other features
          </p>
          <button onClick={() => setIsLearnMoreModalShown(true)}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Protypist;

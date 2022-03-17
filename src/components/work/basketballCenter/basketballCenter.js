import React, { useState } from "react";
import Modal from "../../../helpers/modal/modal";
import styles from "./basketballCenter.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Images
import image1 from "./screenshots/1.png";
import image2 from "./screenshots/2.png";
import image3 from "./screenshots/3.png";
import image4 from "./screenshots/4.png";
import image5 from "./screenshots/5.png";
import image6 from "./screenshots/6.png";
import image7 from "./screenshots/7.png";
import image8 from "./screenshots/8.png";

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
        <div className={styles.modal_header}>
          <h1>B-Ball</h1>
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
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src={image6}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src={image7}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.image}
                alt="Basketball Center screenshot 1"
                src={image8}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <br></br>
        <h2>About Basketball Center</h2>
        <p>
          Basketball Center is a full stack application built for Android and
          IOS, it provides stats, real time and historical information about
          players and teams. All the NBA games stats are updated real time as
          well. It also has a chat built in per game, allowing users to interact
          with other people and discuss the game>
        </p>
        <br></br>
        <h2>Technologies Used</h2>
        <br></br>
        <h3>Front End / App:</h3>
        <ul>
          <li>React Native for both the IOS and Android app</li>
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
          <li>Expo push notifications</li>
          <li>Rest API</li>
        </ul>
        <br></br>
        <h2>Download App</h2>
        <div className="appstore-link-container">
          <i className="fab fa-apple fa-2x"></i>
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/basketball-center/id1588423237"
            rel="noreferrer"
          >
            View on AppStore
          </a>
        </div>
        <div className="appstore-link-container">
          <i className="fa-brands fa-google-play fa-2x"></i>{" "}
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.basketballCenter.anthony&hl=en_US&gl=US"
            rel="noreferrer"
          >
            View on Google Play Store
          </a>
        </div>
        <br></br>
        <p>
          As of right now the source code for Basketball Center is closed source
        </p>
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
      </div>
    </div>
  );
};

export default BasketballCenter;

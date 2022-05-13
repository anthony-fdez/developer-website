import React, { useState } from "react";
import styles from "./jj.module.css";
import Modal from "../../../helpers/modal/modal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Images
import icon from "./screenshots/icon.webp";
import image1 from "./screenshots/1.png";
import image2 from "./screenshots/2.png";
import image3 from "./screenshots/3.png";
import image4 from "./screenshots/4.png";

const JJ = () => {
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
          <h1>JJ BILLING SERVICES</h1>
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
          </Swiper>
        </div>
        <div className={styles.modal_content_container}>
          <br></br>
          <h2>
            About{" "}
            <a href="https://jjbillingservices.com">JJ BILLING SERVICES</a>
          </h2>

          <br></br>

          <p>...</p>
          <br></br>
          <h2>Technologies Used</h2>
          <br></br>
          <h3>Front End / App:</h3>
          <ul>
            <li>NextJs</li>
            <li>React</li>
            <li>Redux</li>
            <li>Google Analytics</li>
          </ul>
          <br></br>
          <h3>Back End:</h3>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB / Mongoose</li>
            <li>Rest API</li>
          </ul>
          <br></br>
          <br></br>
          <p>
            I did this project for a client as a freelancer and I no longer own
            the project, thus I can't share the source code.
          </p>
        </div>
      </Modal>
    );
  };

  return (
    <div>
      <div className="project-container">
        {modal()}
        <div
          style={{ backgroundColor: "black" }}
          className="project-image-container"
        >
          <img
            className="project-image"
            alt="Basketball Center Logo"
            src={icon}
          />
        </div>
        <div className="project-info-container">
          <h2>JJ BILLING SERVICES</h2>
          <p>...</p>
          <button onClick={() => setIsLearnMoreModalShown(true)}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JJ;

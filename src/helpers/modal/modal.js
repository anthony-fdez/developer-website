import React, { useEffect } from "react";
import styles from "./modal.module.css";

const Modal = ({ isOpen, handleClose, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "scroll";
  }, [isOpen]);

  return (
    <>
      <div className={isOpen ? styles.dark_bg_on : styles.dark_bg_off}></div>
      <div className={isOpen ? styles.modal_open : styles.modal_closed}>
        <button onClick={() => handleClose()}>Close</button>
        {children}
      </div>
    </>
  );
};

export default Modal;

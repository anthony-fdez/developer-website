import React from "react";
import "./work.css";

// Projects
import BasketballCenter from "./basketballCenter/basketballCenter";
import Protypist from "./protypist/protypist";
import JJ from "./jj/jj";

const Work = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>My Work</h1>

      <br></br>
      <br></br>

      <BasketballCenter />
      <br></br>
      <Protypist />
      <br></br>
      <JJ />
    </>
  );
};

export default Work;

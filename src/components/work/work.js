import React from "react";
import "./work.css";

const Work = () => {
  return (
    <div>
      <br></br>
      <div className="project-container">
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
            Basketball Center is a mobile app where you can get all kind of
            information about Basketball, there is historic data on every player
            playing currently on the NBA league. There is also information about
            teams, news about teams and players, and live data on every game.
            There is also a game chat feature to keep the users engaged chatting
            while beging able to see all the game stats and plays in real time.
            And many more features that if you are a Basketball fan you'll love
            :)
          </p>
          {/* <div>
            <h3>Technologies Used:</h3>
            <ul className="technologies-used">
              <li>
                <a
                  target="_blank"
                  href="https://reactnative.dev/"
                  rel="noreferrer"
                >
                  React Native
                </a>{" "}
                (App Itself)
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://nodejs.org/en/"
                  rel="noreferrer"
                >
                  NodeJs
                </a>{" "}
                (server)
              </li>
              <li>
                <a target="_blank" href="https://socket.io/" rel="noreferrer">
                  Socket.io
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.mongodb.com/"
                  rel="noreferrer"
                >
                  MongoDb
                </a>{" "}
                (database)
              </li>
            </ul>
          </div> */}
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
        </div>
      </div>
    </div>
  );
};

export default Work;

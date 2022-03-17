import React, { useEffect, useState } from "react";
import "./notFound404.css";
import { useNavigate } from "react-router";

const NotFound404 = () => {
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className={isLoaded ? "LOADED" : "NOT-LOADED"}>
      <div className="not-found-404">
        <div>
          <h1>404 Not Found</h1>
          <p>The page you are looking for does not exist</p>
          <br></br>
          <button
            onClick={() => navigate(-1)}
            variant="outline-primary"
            className="not-found-404-back-button"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;

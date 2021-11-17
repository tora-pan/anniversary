import React from "react";
import "./card.styles.css";
const Card = ({ front, comment, img }) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <h1>{front}</h1>
          <p>{comment}</p>
          <span className="info">i</span>
          <div className="answer">
            <div className="fill">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

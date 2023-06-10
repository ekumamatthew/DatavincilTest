import React from "react";

import "../styles/scoreCard.css";

function ScoreCard({ name, sex, age, job }) {
  return (
    <div className="cardbody">
      <div className="imageDiv">
        <img className="image" alt="human" src="/images/face.jpg" />
      </div>
      <div className="bodyText">
        <p className="headText">INTERNSHALA</p>
        <div className="details">
          <p>
            Name: <span>{name}</span>
          </p>
          <p>
            Sex: <span>{sex}</span>
          </p>
          <p>
            Age: <span>{age}</span>
          </p>
          <p>
            Job: <span>{job}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;

import React from "react";
import "../styles/ScoreCard2.css";
function ScoreCard2() {
  return (
    <div className="Ai">
      <div className="header">
        <button>live rating</button>
        <p className="headerText">Human Vs AI</p>
        <button>activity</button>
      </div>

      <div className="comparison">
        <img className="img" alt="human" src="/images/face.jpg" />
        <div className="comparisonText">
          <p>Values</p>
          <p className="values">4 : 7</p>
        </div>
        <img className="img" alt="Ai" src="/images/AiFace.jpg" />
      </div>

      <div className="footer">
        <button>click</button>
        <button>view</button>
        <button>submit</button>
        <button>cancel</button>
      </div>
    </div>
  );
}

export default ScoreCard2;

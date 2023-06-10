import React from "react";
import ScoreCard2 from "./ScoreCard2";
import ScoreTable from "./ScoreTable";
import "../styles/card.css";
import ScoreCard from "./ScoreCard";

function Card() {
  return (
    <div className="card">
      <ScoreCard
        name={"Jane Doe"}
        sex={"female"}
        age={"25"}
        job={"Front-end Dev"}
      />
      <ScoreTable />
      <ScoreCard2 />
    </div>
  );
}

export default Card;

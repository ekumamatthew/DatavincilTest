import React from "react";
import GraphIndex from "./graph";
import ScoreCardIndex from "./scoreCard";
import Table from "./table/table";
import "./styles/main.css";
import AssesmentNote from "./AssesmentNote";

function MainIndex() {
  return (
    <div className="indexPage">
      <AssesmentNote />
      <ScoreCardIndex />
      <GraphIndex />
      <Table />
    </div>
  );
}

export default MainIndex;

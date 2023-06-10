import React, { useState, useEffect } from "react";
import { UserData } from "../jsonFile";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import "../styles/graphs/graph.css";

function GraphIndex() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Job",
        data: UserData.map((data) => data.jobs),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="graphs">
      <div style={{ width: 400, height: 200 }}>
        <p>Bar Chart Of Jobs againt Year</p>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 400, height: 200 }}>
        <p>Line Chart/Graph Of Jobs againt Year</p>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 400, height: 200 }}>
        <p>Pie Chart Of Jobs againt Year</p>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default GraphIndex;

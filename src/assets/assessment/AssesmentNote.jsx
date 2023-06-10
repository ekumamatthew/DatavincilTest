import React from "react";

function AssesmentNote() {
  return (
    <div>
      <strong>Name: Ekuma Matthew Ude</strong>
      <p>
        <strong>description: </strong>
        <i>
          A simple design showing a score card, graphical representation of data
          using PieChart, BarChart, and Line Graph. <br />
          Also, a table showing user information which can be filtered with the
          following paramaters, <br />
          -First name
          <br /> -Fast name <br /> -Email <br /> -Date
        </i>
      </p>
      <p>
        <strong>Assignment:</strong>
        <i>
          Build a React / Vue UI interface mockup based on some examples shared.
          Attached below are a few examples that can serve as reference, they do
          not need to be exact. What we are looking for is <br />
          - atleast 2 scorecards,
          <br />
          - one graph and
          <br />- one table with two filters. One for date range and the other
          can be any other dimension that is used
        </i>
      </p>
      <p>
        <strong>Note: </strong>
        <i>
          {" "}
          Its is responsive to only
          <strong>mobile screens and desktop screen</strong>
        </i>
      </p>
      <p>
        <strong>tools: </strong> <br />
        <i>
          -React (vite)
          <br /> -Package Manager (Yarn) <br />
          -CSS. **although I could use other framework like bootstrap tailwind,
          SASS etc.
          <br /> -Chart.Js
        </i>
      </p>
      <p>
        <strong>Challenge:</strong>{" "}
        <i>
          I was unable to access any of the example file to see an illustration
          of a design or funtionality required. The example was not clickable in
          the Assignment
        </i>
      </p>
    </div>
  );
}

export default AssesmentNote;

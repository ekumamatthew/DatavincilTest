import React from "react";
import { scores } from "../jsonFile";
import "../styles/ScoreTable.css";

function ScoreTable() {
  return (
    <div className="scoreTable ">
      {scores.map((score) => {
        return (
          <table className="table">
            <tr border="1px">
              <td colSpan="100%">Name: {score.name}</td>
            </tr>
            <tr>
              <td colSpan="2">Age: {score.age}</td>
              <td colSpan="3">sex: {score.sex}</td>
            </tr>
            <tr>
              <td colSpan="3">id: {score.id}</td>
              <td colSpan="3">RefNo: {score.refNo}</td>
            </tr>
            <tr className="textHead">
              <th>S/N</th>
              <th>Subject</th>
              <th>Exam %</th>
              <th>Test %</th>
              <th>Total score %</th>
            </tr>

            {score.subject.map((course, index) => {
              return (
                <>
                  <div className="scroll"></div>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{course.course}</td>
                    <td>{course.examScore}</td>
                    <td>{course.testScore}</td>
                    <td>{course.total}</td>
                  </tr>
                </>
              );
            })}
          </table>
        );
      })}
    </div>
  );
}

export default ScoreTable;

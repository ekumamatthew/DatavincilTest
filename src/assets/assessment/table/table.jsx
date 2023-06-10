import React, { useState } from "react";
import { tableData } from "../jsonFile";
import "../styles/table/table.css";

function Table() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <p className="headText">Table Filtering with search and date</p>

      <div>
        <div className="inputs">
          <input
            className="text"
            type="text"
            placeholder="search contact eg. first name, last name, email, phone,"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className=" date"
            type="date"
            placeholder="date"
            onChange={(e) => setSearch(e.target.value).replaceAll(" ", "")}
          />
        </div>
        <div>
          <table className="maintable">
            <thead className="tableHead">
              <tr className="headRow">
                <th>First Name</th>
                <th>Last Name</th>
                <th className="email">Email</th>
                <th>Gender</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {tableData
                .filter((data) => {
                  return search.toLowerCase() === ""
                    ? data
                    : data.first_name.toLowerCase().includes(search) |
                        data.last_name.toLowerCase().includes(search) |
                        data.date.includes(search) |
                        data.email.toLowerCase().includes(search);
                })
                .map((data) => (
                  <>
                    <tr key={data.id} className="bodyRow">
                      <td>{data.first_name}</td>
                      <td>{data.last_name}</td>
                      <td className="email">{data.email}</td>
                      <td>{data.gender}</td>
                      <td>{data.date}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;

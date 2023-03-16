import React from "react";
import { Link } from "react-router-dom";

export default function Manager(props) {
  return (
    <div>
      <table id="table">
        <tr>
          <th>N.O</th>
          <th>Full Name</th>
          <th>Visited</th>
          <th>Number of products</th>
        </tr>
        {props.workers.map((val) => {
          return (
            <tr>
              <td>{val.number}</td>
              <td>{val.fullName}</td>
              <td>{val.visit}</td>
              <td>{val.putInPlace}</td>
            </tr>
          );
        })}
      </table>
      <Link to={"/"}>
        <button>Log Out</button>
      </Link>
    </div>
  );
}

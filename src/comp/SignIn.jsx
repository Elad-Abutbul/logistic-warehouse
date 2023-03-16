import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const [num, setNum] = useState("");
  const nav = useNavigate();
  const valid = (val, index) => {
    if (num == 99999) {
      nav("/manager");
    } else if (val.number == num) {
      nav(`/workerCard/${val.fullName}/${index}`);
      props.workers[index].visit++;
    } 
  };
  return (
    <div>
      <input
        type="text"
        placeholder="N.O"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.workers.map((val, index) => {
            valid(val, index);
          });
        }}
      >
        go
      </button>
    </div>
  );
}

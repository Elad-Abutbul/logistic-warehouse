import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [number, setNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [forkLift, setForkLift] = useState(false);
  const nav = useNavigate();
  const valid = () => {
    if (props.workers.find((val) => val.number == number)) {
      alert("number exixt")
    } else if (number == "" || !Number(number) || number.length < 5) {
      alert("the number must be with 5 digits.");
    } else if (
      fullName.length < 4 ||
      !fullName.includes(" ") ||
      !/^[A-Za-z\s]*$/.test(fullName)
    ) {
      alert("the name must contain minimum 4 characters with spaces. ");
    } else if (forkLift == undefined) {
      alert("forkLift?");
    } else {
      props.getWorker(number, fullName, forkLift);
      nav("/signIn");
    }
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="N.O"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <h4>ForkLift license?</h4>
      <div>
        <input
          type="radio"
          name="radio"
          onChange={() => {
            setForkLift(true);
          }}
        />
        yes
        <input
          id="radioNo"
          type="radio"
          name="radio"
          checked
          onChange={() => {
            setForkLift(false);
          }}
        />
        no
      </div>
      <button onClick={valid}>create</button>
    </div>
  );
}

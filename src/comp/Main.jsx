import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const nav = useNavigate();
  return (
    <div className="form">
      <button
        onClick={() => {
          nav("/signIn");
        }}
      >
        SignIn
      </button>
      <button
        onClick={() => {
          nav("/signUp");
        }}
      >
        SignUp
      </button>
    </div>
  );
}

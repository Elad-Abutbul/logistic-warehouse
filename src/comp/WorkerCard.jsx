import React from "react";
import { Link } from "react-router-dom";
export default function WorkerCard(props) {
  return (
    <div>
      <h2>welcome {props.val.fullName}</h2>
      <div className="details">
        <h3>details:</h3>
        <h4>Full Name: {props.val.fullName}</h4>
        <h4>N.O: {props.val.number}</h4>
        <h4>ForkLift:{props.val.forkLift ? "yes" : "no"}</h4>
      </div>
      <h4>list of product:</h4>
      {props.val.prodArr.map((val, indexProd) => {
        return (
          props.val.prodArr[indexProd].condicion == false && (
            <div className="productMap">
              <h3>N.O:{val.number} </h3>
              <h3>Name: {val.color}</h3>
              <h3>Need forklift truck: {val.forkLift ? "yes" : "no"}</h3>
              <button
                onClick={() => props.updateProduct(indexProd, props.index)}
              >
                Update
              </button>
            </div>
          )
        );
      })}
      <Link to={"/"}>
        <button>log out</button>
      </Link>
    </div>
  );
}

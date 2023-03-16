import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./comp/Main";
import SignIn from "./comp/SignIn";
import SignUp from "./comp/SignUp";
import WorkerCard from "./comp/WorkerCard";
import { useState } from "react";
import Manager from "./comp/Manager";
function App() {
  const [workers, setWorkers] = useState([]);
  const getWorker = (number, fullName, forkLift) => {
    //מכניס כל מי שנרשם למערך
    setWorkers([...workers, new Worker(number, fullName, forkLift)]);
  };
  const updateProduct = (indexProd, indexList) => {
    if (
      workers[indexList].forkLift == false &&
      workers[indexList].prodArr[indexProd].forkLift
    ) {
      alert("need a forkLift");
    } else {
      workers[indexList].prodArr[indexProd].condicion = true;
      workers[indexList].putInPlace++;
      setWorkers([...workers]);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Logistic Garage</h1>
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/signIn" element={<SignIn workers={workers} />} />
          <Route path="/signUp" element={<SignUp getWorker={getWorker} workers={workers} />} />
          {workers.map((val, index) => {
            return (
              <Route
                path={`/workerCard/${val.fullName}/${index}`}
                element={
                  <WorkerCard
                    val={val}
                    index={index}
                    updateProduct={updateProduct}
                  />
                }
              />
            );
          })}
          <Route path="manager" element={<Manager workers={workers} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
class Product {
  condicion = false;
  constructor(number, forkLift, color) {
    this.number = number;
    this.forkLift = forkLift;
    this.color = color;
  }
}
class Worker {
  visit = 0;
  putInPlace = 0;
  prodArr = [
    new Product(11122, false, "green"),
    new Product(22554, false, "green"),
    new Product(66698, true, "blue"),
    new Product(78544, false, "red"),
    new Product(69875, false, "red"),
  ];
  constructor(number, fullName, forkLift) {
    this.number = number;
    this.fullName = fullName;
    this.forkLift = forkLift;
  }
}

export default App;

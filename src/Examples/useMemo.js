import React, { useState, useMemo, useEffect } from "react";
import "./App.css";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;

  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored],
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("styles changed");
  }, [styles]);

  return (
    <div className="App">
      <h1 style={styles}>Number : {computed}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        ADD
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        SUB
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
    </div>
  );
}

export default App;

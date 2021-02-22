import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");
  useEffect(() => {
    //   setRenderCount((prev) => prev + 1);
    renderCount.current++;
    console.log(inputRef.current.value);
  });
  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div className="App">
      <h1>Renders: {renderCount.current}</h1>
      <h2>Prev:{prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>
    </div>
  );
}

export default App;

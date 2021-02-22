import React, { useEffect, useState } from "react";
import "./App.css";

function useLogger(value) {
  useEffect(() => {
    console.log("value changed: ", value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}
function App() {
  const input = useInput("");

  useLogger(input.value);
  return (
    <div className="App ">
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      <input type="text" {...input.bind} />
      <button className="btn btn-warning" onClick={() => input.clear()}>
        Clear
      </button>
      <h1>{input.value}</h1>
    </div>
  );
}

export default App;

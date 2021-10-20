// import logo from './logo.svg';
import React from "react";

import "./counter.css";

function Counter() {
  const [counter, setCounter] = React.useState(0);
  const handelIncrement = (value) => {
    setCounter(counter + value);
  };
  const handelDecrement = (value) => {
    setCounter(counter - value);
  };
  const handelMultiple = (value) => {
    setCounter(counter * 2);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handelIncrement(1)}>Add</button>
      <button onClick={() => handelDecrement(1)}>Reduce</button>
      <button onClick={() => handelMultiple(1)}>Multiply*2</button>
    </div>
  );
}

export { Counter };

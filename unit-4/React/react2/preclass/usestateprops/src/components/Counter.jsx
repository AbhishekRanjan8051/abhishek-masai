// import logo from './logo.svg';
import React from "react";
import "../App.css";

function Counter() {
  const [counter, setCounter] = React.useState(5);
  const handelIncrement = (value) => {
    setCounter(counter + value);
  };
  const handelDecrement = (value) => {
    setCounter(counter - value);
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handelIncrement(1)}>Add</button>
      <button onClick={() => handelDecrement(1)}>Reduce</button>
    </>
  );
}

export { Counter };

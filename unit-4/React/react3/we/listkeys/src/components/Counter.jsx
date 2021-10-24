import React from "react";
import "./counter.css";

function Counter() {
  const [counter, setCounter] = React.useState(0);
  if (counter % 2 === 0) {
    return (
      <div className="countereven">
        <h1>Count is Even</h1>
        <h1>Counter:{counter}</h1>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click
        </button>
      </div>
    );
  }
  return (
    <div className="counterodd">
      <h1>Count is Odd</h1>
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
export { Counter };

import { useState } from "react";
function Counter({ value }) {
  const [count, setCount] = useState(value);

  const handleClick = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Couter</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          handleClick(1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          handleClick(-1);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export { Counter };

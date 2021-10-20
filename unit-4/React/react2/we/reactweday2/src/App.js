// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // let count = 1;
  return (
    <div className="App">
      <h1>Couter</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default App;

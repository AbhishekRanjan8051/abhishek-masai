import "./App.css";
import React from "react";
import { Counter } from "./components/Counter";

function App() {
  const [showCounter, setshowCounter] = React.useState();
  return (
    <div className="App">
      <h1>Abhishek Ranjan</h1>
      {showCounter && <Counter />}
      <br />
      <button
        onClick={() => {
          setshowCounter(!showCounter);
        }}
      >
        Show
      </button>
    </div>
  );
}

export default App;

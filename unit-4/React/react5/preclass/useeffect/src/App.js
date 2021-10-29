import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  console.log("1");
  React.useEffect(() => {
    console.log("inside effect");
  }, []);
  console.log("2");

  return (
    <div className="App">
      <h1>Abhishek Ranjan</h1>
      <h3>count:- {count}</h3>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;

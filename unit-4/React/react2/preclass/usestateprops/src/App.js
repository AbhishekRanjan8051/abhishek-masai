// import logo from './logo.svg';
import React from "react";
import { Counter } from "./components/Counter";

import { Task } from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Task></Task>
    </div>
  );
}

export default App;

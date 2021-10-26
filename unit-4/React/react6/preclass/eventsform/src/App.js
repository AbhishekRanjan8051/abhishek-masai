import "./App.css";
import React from "react";
import { Form } from "./components/Form";
import { Condition } from "./components/Condition";
import { UseRef } from "./components/UseRef";

function App() {
  return (
    <div className="App">
      <h1>Abhishek Ranjan</h1>
      <Form></Form>
      <Condition></Condition>
      <UseRef></UseRef>
    </div>
  );
}

export default App;

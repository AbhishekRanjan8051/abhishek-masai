import "./App.css";
// import { Form } from "./components/Form";
import { Mouse } from "./components/Mouse";
import { Ref } from "./components/Ref";
import { Scroll } from "./components/Scroll";

function App() {
  return (
    <div className="App">
      <p>Abhishek Ranjan</p>

      <button
        onClick={(e) => {
          console.log(e);
        }}
      >
        Click Me
      </button>
      <br />
      <br />

      <Mouse></Mouse>
      <Ref></Ref>
      {/* <Form></Form> */}
      <Scroll></Scroll>
    </div>
  );
}

export default App;

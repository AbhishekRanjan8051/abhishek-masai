import "./App.css";
import { Mouse } from "./components/Mouse";
import { Ref } from "./components/Ref";

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
    </div>
  );
}

export default App;

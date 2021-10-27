import "./App.css";
import { Mouse } from "./components/Mouse";

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
    </div>
  );
}

export default App;

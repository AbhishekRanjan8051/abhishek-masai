// import logo from "./logo.svg";
// import "./App.css";
import { Button } from "./components/Button";
function App() {
  return (
    <div>
      <h3>hello Abhishek Ranjan</h3>
      <p>welcome to react session</p>

      <Button age={21} name="abhishek" />
      <Button age={22} name="arpit" />
      <Button age={19} name="ranjan" />
    </div>
  );
}

export default App;

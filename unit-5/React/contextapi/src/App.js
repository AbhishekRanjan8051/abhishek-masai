// import logo from './logo.svg';
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <h1>Abhishek Ranjan</h1>
      <LoginForm></LoginForm>

      <Status />
    </div>
  );
}

export default App;

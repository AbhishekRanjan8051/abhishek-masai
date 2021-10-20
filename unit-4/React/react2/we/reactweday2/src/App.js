// import logo from './logo.svg';
import "./App.css";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div>
      <Counter value={0}></Counter>
      <Todo></Todo>
    </div>
  );
}

export default App;

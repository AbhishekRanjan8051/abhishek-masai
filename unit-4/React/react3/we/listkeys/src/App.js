// import logo from './logo.svg';
import "./App.css";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";
function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <Counter></Counter>
    </div>
  );
}

export default App;

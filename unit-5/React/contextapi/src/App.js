// import logo from './logo.svg';
import "./App.css";
import { Form } from "./components/Form";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("tryingg to submit");
  };
  return (
    <div className="App">
      <h1>Abhishek Ranjan</h1>
      <Form onSubmit={onSubmit} title="Abhishek">
        <input placeholder="name" />
      </Form>
    </div>
  );
  
}

export default App;

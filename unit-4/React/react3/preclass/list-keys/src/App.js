// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { List } from "./components/List";
import {Form} from "./components/Form";

function App() {
  const [auth, setAuth] = React.useState(false);

  const handleLogin = () => {
    setAuth(true);
  };
  // if (!auth) {
  //   return (
    
  //     <>
  //       <div>
  //         User not loged in, please <button onClick={handleLogin}>LOGIN</button>
  //       </div>
  //     </>
  //   );
  // }
  return !auth?( <div>
          User not loged in, please <button onClick={handleLogin}>LOGIN</button>
        </div>): (
    <div className="App">
      <List></List>
      <Form></Form>
    </div>
  );
}

export default App;

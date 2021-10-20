import "./App.css";
import { Join } from "./components/Join";
import { Setting } from "./components/Setting";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";
import { Search } from "./components/Search";
import { Help } from "./components/Help";
import { Home } from "./components/Home";
import { Download } from "./components/Download";

function App() {
  return (
    <div id="gridmp">
      <Join></Join>
      <Setting></Setting>
      <Login></Login>
      <Contact></Contact>
      <Search></Search>
      <Help></Help>
      <Home></Home>
      <Download></Download>
    </div>
  );
}

export default App;

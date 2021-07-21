import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar prop={{Login,Signup,Home}} />
      </div>
    </Router>
  );
}

export default App;

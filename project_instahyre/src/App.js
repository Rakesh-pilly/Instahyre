import {Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="App">
        <Navbar  />
      </div>
    </Router>



  );
}

export default App;

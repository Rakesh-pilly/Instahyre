// projects
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Customers from './components/Customers.js';
import Navbar from "./components/Navbar"
export default function App() {
  return (

    <Router>
    <div className="App">
      <Navbar prop={{Customers}} />
    </div>
  </Router>
  
  );
}






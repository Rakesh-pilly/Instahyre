import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Navbar = ({prop}) => {
    return (
        <div>
            <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
    </ul>
    <Switch>
              <Route exact path='/' component={prop.Home}></Route>
              <Route exact path='/login' component={prop.Login}></Route>
              <Route exact path='/signup' component={prop.Signup}></Route>
              <Route exact path='/Customers' component={prop.Customers}></Route>
              
            </Switch>
        </div>
    )
}

export default Navbar

import React, { useState } from 'react'
import {Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Navcandidate from "./Navcandidate"
import Home from "./Home";


const Navbar = () => {
  const [signup,setSignup] = useState('');
  const [login,setLogin] = useState('');
  console.log('refreshed')
  const handleSignup = (x) => {
    setSignup(x);
  }
  const handleLogin = (x) => {
    setLogin(x);
  }
  
  

  let l = localStorage.getItem('login');
  let s = localStorage.getItem('signup');
console.log(l,s)
    if(!l && !s){
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
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/login' render={() => <Login prop={(x) => handleLogin(x)}  title={`Props through render`} />}></Route>
              <Route exact path='/signup' render={() => <Signup prop={(x) => handleSignup(x)}  title={`Props through render`} />}></Route>
              
              
            </Switch>
      
        </div>
    )

    }
    else{
      if(l){
        return <Navcandidate token={'login'} />
      }
      if(s){
        return <Navcandidate token={[(x) => handleLogin(x),(x) => handleSignup(x)]}/>
      }
    }
    
}



export default Navbar

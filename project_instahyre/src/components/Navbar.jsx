import React, { useState } from 'react'
import {Route, Link, Switch } from "react-router-dom";

import styled from 'styled-components'

import Login from "./Login";
import Signup from "./Signup";
import Navcandidate from "./Navcandidate"
import Home from "./Home";

import OpportunityViews from './Opportunities/OpportunityViews'
import Opportunities from './Opportunities/Opportunities';

const Div = styled.div`
  display:grid;
  align-items: center;
  height: 50px ;
  background: #414654;
  position:sticky;
  z-index:100;
  top:0;
  width:94vw;
  grid-template-columns:auto auto;
  justify-content:space-between;
  overflow: hidden;
 
  padding-right:3vw;
  padding-left:3vw;

  ul{
    display:flex;
   
    
  }
  li{
    
    list-style-type:none;
    margin-left: 1rem;
    
  
   
  }
  a{
    display:block;
    color:white;
    text-decoration:none;
  }
  img{
    width:88px;
    height:18px;
  }
  li:hover{
    opacity:0.7;
  }

`

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

          <Div>
            <div>
              <img src = "https://static.instahyre.com/images/logos/logo.png" alt= 'logo' />
            </div>

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
      <li>
        <Link to="/Opportunities">Oppturnities</Link>
      </li>
      <li>
        <Link to="/OpportunityViews">OpportunityViews</Link>
      </li>
     
    </ul>

    </div>
    </Div>
    <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/login' render={() => <Login prop={(x) => handleLogin(x)}  title={`Props through render`} />}></Route>
              <Route exact path='/signup' render={() => <Signup prop={(x) => handleSignup(x)}  title={`Props through render`} />}></Route>
              <Route exact path='/Opportunities' render={()=><Opportunities prop={x=>handleSignup(x)} title={`props through render`} />}></Route>
              <Route exact path='/OpportunityViews' render={()=><OpportunityViews prop={x=>handleSignup(x)} title={`props through render`} />}></Route>
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

// oppturnities


export default Navbar

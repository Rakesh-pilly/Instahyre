import React from "react";
import styled from "styled-components";

import { FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Loginwrapper = styled.div`
input:focus{
    outline:none;
    border:1px solid rgb(5,145,204);
  }
  a {
    text-decoration: none;
    color: rgb(0, 146, 208);
  }
  * {
    font-weight: bold;
    font-size: 1.1vw;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
  }
  width: 25%;
  margin: auto;
`;
const Head = styled.div`
  h1 {
    font-size: x-large;
  }
  margin-bottom: 50px;
`;
const Signinoption = styled.div`
  color: white;
  div {
    border-radius: 5px;
    display: grid;
    grid-template-columns: 13% 85%;
    align-items: center;
    height: 40px;
  }
  div:nth-child(1) {
    background-color: rgb(0, 123, 182);
    border: 1px solid rgb(0, 98, 146);
  }
  div:nth-child(1):hover{
      background-color:rgb(0, 98, 146);
  }
  div:nth-child(2) {
    background-color: rgb(221, 75, 57);
    border: 1px solid rgb(177, 60, 46);
  }
  div:nth-child(2):hover{
    background-color:rgb(177, 60, 46);
}
`;
const Or = styled.div`
  display: flex;
  div:nth-child(2) {
    width: fit-content;
    padding: 0px 20px;
  }
  hr {
    border: 1px solid grey;
    background-color: grey;
  }
`;
const Loginform = styled.form`
  color: rgb(74, 80, 86);
  label {
    display: flex;
    justify-content: flex-start;
  }
  input {
    height: 35px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 3px;
  }
  button {
    background-color: rgb(2, 191, 160);
    border: none;
    border-bottom: 3px solid rgb(2, 154, 130);
    border-radius: 3px;
    color: white;
    padding: 10px 0px;
  }
  button:hover {
    background-color: rgb(2, 159, 130);
  }
`;

const Login = () => {
  return (
    <Loginwrapper>
      <Head>
        <h1>Login</h1>
        <p>
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </Head>
      <Signinoption>
        <div>
          <FaLinkedinIn
            style={{
              fontSize: "30px",
              marginBottom: "0px",
              color: "white",
              borderRight: "1px solid rgb(0,98,146)",
            }}
          />{" "}
          Sign in with LinkedIn
        </div>
        <div>
          <FaGoogle
            style={{
              fontSize: "30px",
              marginBottom: "0px",
              padding: "5px 0px",
              backgroundColor: "white",
              color: "black",
              borderTopLeftRadius:"3px",
              borderBottomLeftRadius:"3px"
            }}
          />
          Sign in with Google
        </div>
      </Signinoption>
      <Or>
        <div>
          <hr />
        </div>
        <div>OR</div>
        <div>
          <hr />
        </div>
      </Or>
      <Loginform>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Login</button>
      </Loginform>
      <p>
        <a href="/">Forgot password?</a>
      </p>
    </Loginwrapper>
  );
};

export default Login;

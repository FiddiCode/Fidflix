import React, { useState, useContext } from 'react'
import './login.scss'
import axios from 'axios';
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const navigate=useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    console.log(dispatch)
      login({ email, password }, dispatch);
      // const response = await axios.post("auth/login", { email, password });
      // const data = await response.data;
  };

  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
          {/* <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo missing' /> */}
          <img src='./images/fidflix-logo.png' alt='logo missing' height={"125px"} width={"250px"}/>

        </div>
      </div>

      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type='email' placeholder='Email or Phone Number' onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button className='loginButton' onClick={handleLogin}>Sign In</button>
          <span>New to Fidflix? <b style={{cursor:"pointer",color:"maroon"}} onClick={()=>navigate("/register")}>Sign up now.</b></span>
          <small>This page is protected by google reCAPTCHA to ensure you're not a bot.<b>Learn more</b></small>
        </form>


      </div>
    </div>
  )
}

export default Login;
import React from 'react'
import './Login.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddTransport() {

const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const navigate = useNavigate();
const submit = () => {
  
  axios.post('http://localhost:3001/user/login', {
    email,password
  })
  .then(function (response) {
    if(response){
        localStorage.setItem('token', response.data.token);
        navigate('/menu');
    }
  })
  .catch(function (error) {
    alert('Something went wrong!');
    return error;
  });

  

  setEmail(() => "");
  setPassword(() => "");

}

  return (
          <>
        <div className='hed'>
    <a href='/signup'><button className='logout'>Signup</button></a>
    </div>
<div>
	    <div className="formm" data-testid = "AddForm">
      <div className="title">Welcome</div>
      <div className="subtitle">Login</div>

      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" "
        value={email} onChange={(event) => {
          setEmail(event.target.value);}}
           />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Email</label>
      </div>

      <div className="input-container ic2">
        <input id="password" className="input" type="text" placeholder=" "
        value={password} onChange={(event) => {
          setPassword(event.target.value);}} />
        <div className="cut cut-short"></div>
        <label for="password" className="placeholder">Password</label>
      </div>
      
      <div data-testid="SubmitToAdd">
      <button type="text" className="submitt" onClick={function(event){ submit()}}>Login</button>
      </div>
    </div>

    

    </div>
      
      </>
  )
  }

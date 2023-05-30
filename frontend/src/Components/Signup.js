import React from 'react'
import './AddTransport.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddTransport() {

const [name,setName]= useState("");
const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const [role,setRole]= useState("");
const navigate = useNavigate();
const submit = () => {
  
  axios.post('http://localhost:3001/user/signup', {
    name,email,password,role
  })
  .then(function (response) {

  alert("Name: " + name +
  "\nEmail: " + email +
  "\nPassword: " + password +
  "\nRole: " + role+
  "\nAdded to Database!"
  );
    navigate('/login');

  })
  .catch(function (error) {
    alert('Something went wrong!');
    return error;
  });

  

  setName(() => "");
  setEmail(() => "");
  setPassword(() => "");
  setRole(() => "");

}

  return (
          <>
<div>
<div className='hed'>
    <a href='/login'><button className='logout'>Login</button></a>
    </div>

	    <div className="form" data-testid = "AddForm">
      <div className="title">Welcome</div>
      <div className="subtitle">Regster yourself and become a Transporter</div>
      <div className="input-container ic1">
        <input id="name" className="input" type="text" placeholder=" " value={name} onChange={(event) => {
        setName(event.target.value);}} />
        <div className="cut"></div>
        <label for="name" className="placeholder">Name</label>
      </div>

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

<div className="input-container ic2">
  <select id="role" className="input" value={role} onChange={(event) => {
    setRole(event.target.value);
  }}>
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
  <div className="cut cut-short"></div>
  <label htmlFor="role" className="placeholder">Role</label>
</div>

      <div data-testid="SubmitToAdd">
      <button type="text" className="submit" onClick={function(event){ submit()}}>Register</button>
      </div>
    </div>

    

    </div>
      
      </>
  )
  }

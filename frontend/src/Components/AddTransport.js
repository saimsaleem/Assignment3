import React from 'react'
import './AddTransport.css'
import axios from 'axios'
import { useState } from 'react'

export default function AddTransport() {

const [type,setType]= useState("");
const [route,setRoute]= useState("");
const [seats,setSeats]= useState("");
const [price,setPrice]= useState("");
const [image,setImage]= useState("");
const submit = () => {

  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    token: token,
  };

  axios.post('http://localhost:3001/transport/addTransport', {
    type,route,seats,price,image,
  } , { headers })
  .then(function (response) {

  alert("Type: " + type +
  "\nRoute: " + route +
  "\nSeats: " + seats +
  "\nPrice: " + price +
  "\nImages: " + image+
  "\nAdded to Database!"
  );
    return response;

  })
  .catch(function (response) {
    console.log(response);
  });

  

  setType(() => "");
  setRoute(() => "");
  setSeats(() => "");
  setPrice(() => "");
  setImage(() => "");

}

  return (
          <>
<div>
<div className="subMenu" data-testid="SubMenu">
  <div className="submenutitle">Back to Main Menu</div>
          <div >
        <a href='/'><button className="menubtn">Menu</button></a>
          </div>
    </div>

	    <div className="form" data-testid = "AddForm">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's add new Transport!</div>
      <div className="input-container ic1">
        <input id="type" className="input" type="text" placeholder=" " value={type} onChange={(event) => {
        setType(event.target.value);}} />
        <div className="cut"></div>
        <label for="type" className="placeholder">Vehicle Type</label>
      </div>

      <div className="input-container ic2">
        <input id="route" className="input" type="text" placeholder=" " 
        value={route} onChange={(event) => {
          setRoute(event.target.value);}}/>
        <div className="cut"></div>
        <label for="route" className="placeholder">Route</label>
      </div>

      <div className="input-container ic2">
        <input id="seats" className="input" type="text" placeholder=" "
        value={seats} onChange={(event) => {
          setSeats(event.target.value);}}
           />
        <div className="cut cut-short"></div>
        <label for="seats" className="placeholder">Seating Capacity</label>
      </div>

      <div className="input-container ic2">
        <input id="price" className="input" type="text" placeholder=" "
        value={price} onChange={(event) => {
          setPrice(event.target.value);}} />
        <div className="cut cut-short"></div>
        <label for="price" className="placeholder">Price</label>
      </div>

      <div className="input-container ic2">
        <input id="image" className="input" type="text" placeholder=" " 
        value={image} onChange={(event) => {
          setImage(event.target.value);}}/>
        <div className="cut cut-short"></div>
        <label for="image" className="placeholder" >Images</label>
      </div>
      <div data-testid="SubmitToAdd">
      <button type="text" className="submit" onClick={function(event){ submit()}}>Add to Transports</button>
      </div>
    </div>

    

    </div>
      
      </>
  )
  }

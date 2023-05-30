import React from 'react'
import './UpdateTransport.css';
import axios from 'axios';
import { useState} from 'react';
import Sidebar from './Sidebar';

export default function UpdateTransport(){

  const [id,setId] = useState("");
  const [type,setType]= useState("");
  const [route,setRoute]= useState("");
  const [seats,setSeats]= useState("");
  const [price,setPrice]= useState("");
  const [image,setImage]= useState("");
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    token: token,
  };

    return (
    <>
    <Sidebar/>
<div class="updatepage">

    <div className="searchbox" data-testid="SearchBox">
      <label>Search Transport</label>

      <input id="type" className="searchbar" route="text" placeholder="Enter Name" value={type} onChange={(event) => {setType(event.target.value);}} />

      <button className="searchbtn" onClick={() =>
         {
          axios.get(`http://localhost:3001/transport/findTransport/${type}`, {headers}).then((response) => {
          setId(response.data.transport._id);  
          setRoute(response.data.transport.route); 
          setSeats(response.data.transport.seats); 
          setPrice(response.data.transport.price); 
          setImage(response.data.transport.image); }).catch((err) => 
          {
          alert("No Data Found!");
          });;
        }

      }>Search</button>

    </div>

    <div className="cardd">
                  <h4 className='image'> <img src= {image} width="260px" height="150px" alt=''></img></h4>
                </div>
    

    <div class="subMenuu">
  <div class="submenutitle">Back to Main Menu</div>
          <div >
        <a href='/'><button class="menubtnnn">Menu</button></a>
        
          </div>
    </div>
    
    <div class="form" data-testid = "UpdateForm">
      <div class="title">Update Transport</div>
      <div class="input-container ic1">
        <input id="name" class="input" type="text" placeholder=" " value={type} onChange={(event) => {
        setType(event.target.value);}} />
        <div class="cut"></div>
        <label for="name" class="placeholder">Vehicle Name</label>
      </div>

      <div class="input-container ic2">
        <input id="route" class="input" type="text" placeholder=" " value={route} onChange={(event) => {
        setRoute(event.target.value);}} />
        <div class="cut"></div>
        <label for="route" class="placeholder">Vehicle Route</label>
      </div>

      <div class="input-container ic2">
        <input id="seats" class="input" type="text" placeholder=" " value={seats} onChange={(event) => {
        setSeats(event.target.value);}} />
        <div class="cut cut-short"></div>
        <label for="seats" class="placeholder">Seating Capacity</label>
      </div>

      <div class="input-container ic2">
        <input id="price" class="input" type="text" placeholder=" " value={price} onChange={(event) => {
        setPrice(event.target.value);}} />
        <div class="cut cut-short"></div>
        <label for="price" class="placeholder">Price</label>
      </div>

      <div class="input-container ic2">
        <input id="image" class="input" type="text" placeholder=" " value={image} onChange={(event) => {
        setImage(event.target.value);}} />
        <div class="cut cut-short"></div>
        <label for="image" class="placeholder" >Images</label>
      </div>

          <div data-testid="Updatebtn">
      <button type="text" class="submit" onClick = {() =>

        {
          const data = {type,route,seats,price,image};
          axios.put(`http://localhost:3001/transport/updateTransport/${id}`, data ,{headers}).then((response) => 
          {
            alert("Transport Updated");
            window.location.reload(false);
          }).catch((err) => 
          {
          console.error(err);
          });

        }

      }>Update</button>
      </div>
    </div>
    
    
    </div>
    
    </>
      )
  }

import React from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import './TransportMenu.css';

export default function TransportMenu() {
let image = "";
  useEffect(()=>{

    getUser();

  async function getUser (){
    try {
      const response = await axios.get(`https://api.github.com/users/${'saimsaleem'}`, {
        headers: {
          Authorization: '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'
        }
      });
  
      const user = response.data;
      const imageUrl = user.avatar_url;
      const imgElement = document.getElementById("myImage");
      imgElement.src = imageUrl;

      const usernameUrl = user.login;
      const usernameElement = document.getElementById("username");
      usernameElement.innerHTML = usernameUrl;
  
    } catch (error) {
      console.error('Error retrieving user:', error);
    }
  }
    
  },[]);

  const token = localStorage.getItem('token');
    return (
            <>
        
<div data-testid="MenuT">
<div className='hed'>
    <a href='/login'><button className='logout' onClick={()=>{
      localStorage.removeItem('token');
    }}>Logout</button></a>

<div >
<h1  className='titlee'>𝚃𝚁𝙰𝙽𝚂𝙿𝙾𝚁𝚃𝙴𝚁</h1>
</div>
</div>
<body>
  <div className='github'>
    <h4>Developer Github</h4>
    <img id="myImage" src="" alt="My Image"/>
    <h4 id='username'></h4>
  </div>

    <nav className="navMenu">
      <a data-testid="Add" href="/AddTransport">Add <br/>Transport</a>
      <a data-testid="View"  href="/DisplayTransport">View <br/>Transport</a>
      <a data-testid="Update"  href="/UpdateTransport">Update <br/>Transport</a>
      <a data-testid="Delete"  href="/DisplayTransport">Delete <br/>Transport</a>
      <div className="dot"></div>
    </nav>
  </body>
</div>
        </>
    )
    }

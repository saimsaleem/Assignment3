import React from 'react';
import './TransportMenu.css';

export default function TransportMenu() {
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

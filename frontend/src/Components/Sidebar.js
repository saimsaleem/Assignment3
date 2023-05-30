import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav-menu">
        <a href='/'><li className="nav-item">Home</li></a>
        <a href='/AddTransport'><li className="nav-item">Add</li></a>
        <a href='/DisplayTransport'><li className="nav-item">View</li></a>
        <a href='/UpdateTransport'><li className="nav-item">Update</li></a>
      </ul>
    </div>
  );
}

export default Sidebar;

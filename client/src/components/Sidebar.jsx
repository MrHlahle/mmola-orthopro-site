import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>MMOLA Orthopro</h2>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

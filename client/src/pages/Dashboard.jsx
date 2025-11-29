import React from "react";
import Sidebar from "../components/Sidebar";
import "./PageLayout.css";

const Dashboard = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <h1>Welcome to your Dashboard</h1>
        <p>You are logged in!</p>
      </div>
    </div>
  );
};

export default Dashboard;

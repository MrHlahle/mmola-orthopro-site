import React from "react";
import Sidebar from "../components/Sidebar";
import "./PageLayout.css";

const Applications = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <h1>Patient Applications</h1>
        <p>(We will add the database list in step B)</p>
      </div>
    </div>
  );
};

export default Applications;

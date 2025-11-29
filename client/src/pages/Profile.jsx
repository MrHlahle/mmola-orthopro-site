import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./PageLayout.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <h1>Your Profile</h1>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;

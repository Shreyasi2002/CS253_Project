import React from "react";
import { GetCurrentUser, LogoutAuth } from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';

import './Profile.css'

import { Avatar } from 'rsuite'
import { getNameInitials } from "../misc/NameInitials";

const ProfileDisplay = () => {
    let navigate = useNavigate();
    const logOut = () => {
        LogoutAuth();
        navigate("/login")
      };
  const currentUser = GetCurrentUser();
  return (
      <div className="container-profile">
          <Avatar style={{ background: '#004299' }} className="avatar">
          { getNameInitials(currentUser.fullname) }
          </Avatar>
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Name:</strong> {currentUser.fullname}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.role &&
          currentUser.role.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
          <button onClick={logOut}>Logout</button>
    </div>
  );
};
export default ProfileDisplay;
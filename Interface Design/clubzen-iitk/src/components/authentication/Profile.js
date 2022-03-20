import React from "react";
import {GetCurrentUser, LogoutAuth} from "../../services/auth.service";
const ProfileDisplay = () => {
    const logOut = () => {
        LogoutAuth();
      };
  const currentUser = GetCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
          <button onClick={logOut}>Logout</button>
    </div>
  );
};
export default ProfileDisplay;
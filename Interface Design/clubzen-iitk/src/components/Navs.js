import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { GetCurrentUser } from "../services/auth.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "./Links.styled";

import "./Navs.css";

var LINKS = [
  { to: "/councils", text: "Councils" },
  { to: "/fests", text: "Festivals" },
  { to: "/clubs", text: "Clubs" },
//   { to: "/news", text: "News & Feed" },
  { to: "/calendar", text: "Calendar" },
];

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


const Navs = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
      const user = GetCurrentUser();
      if (user) {
        setCurrentUser(user);
      }
    }, []);
    const location = useLocation();
    return (
      <header>
        <div id="myNav" className="overlay">
          <p className="closebtn" onClick={closeNav}>
            &times;
          </p>
          <ul className="overlay-content">
            {LINKS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.text}</NavLink>
              </li>
            ))}
            {currentUser ? (
              <>
                <li>
                  <NavLink
                    to="/news"
                    className={"/news" === location.pathname ? "active" : ""}
                  >
                    News & Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={"/profile" === location.pathname ? "active" : ""}
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={"/login" === location.pathname ? "active" : ""}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <nav className="nav">
          <h3 className="nav-logo">
            <NavLink to="/">ClubZen IITK</NavLink>
          </h3>
          <ul className="nav-items">
            {LINKS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={item.to === location.pathname ? "active" : ""}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
            {currentUser ? (
              <>
                <li>
                  <NavLink
                    to="/news"
                    className={"/news" === location.pathname ? "active" : ""}
                  >
                    News & Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={"/profile" === location.pathname ? "active" : ""}
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={"/login" === location.pathname ? "active" : ""}
                >
                  Login
                </NavLink>
              </li>
            )}
            <li className="icon-menu">
              <FontAwesomeIcon icon={faBars} onClick={openNav} />
            </li>
          </ul>
        </nav>
      </header>
    );
};
  
export default Navs;

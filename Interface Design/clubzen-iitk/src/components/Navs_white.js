import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink1, NavLink } from "./Links.styled";

import "./Navs_white.css";
import { GetCurrentUser } from "../services/auth.service";

const LINKS = [
  { to: "/councils", text: "Councils" },
  { to: "/fests", text: "Festivals" },
  { to: "/clubs", text: "Clubs" },
  { to: "/news", text: "News & Feed" },
  { to: "/calendar", text: "Calendar" },
];

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const NavsWhite = () => {
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
                  to="/forum"
                  className={"/forum" === location.pathname ? "active" : ""}
                >
                  Forum
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
      <nav className="nav-white">
        <h3 className="nav-logo-white">
          <NavLink1 to="/">ClubZen IITK</NavLink1>
        </h3>
        <ul className="nav-items-white">
          {LINKS.map((item) => (
            <li key={item.to}>
              <NavLink1
                to={item.to}
                className={item.to === location.pathname ? "active" : ""}
              >
                {item.text}
              </NavLink1>
            </li>
          ))}
          {currentUser ? (
            <>
              <li>
                <NavLink1
                  to="/forum"
                  className={"/forum" === location.pathname ? "active" : ""}
                >
                  Forum
                </NavLink1>
              </li>
              <li>
                <NavLink1
                  to="/profile"
                  className={"/profile" === location.pathname ? "active" : ""}
                >
                  Profile
                </NavLink1>
              </li>
            </>
          ) : (
            <li>
              <NavLink1
                to="/login"
                className={"/login" === location.pathname ? "active" : ""}
              >
                Login
              </NavLink1>
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

export default NavsWhite;

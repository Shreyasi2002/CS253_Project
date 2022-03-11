import React from "react";
import { useLocation } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink1, NavLink } from "./Links.styled";

import "./Navs_white.css";

const LINKS = [
  { to: "/councils", text: "Councils" },
  { to: "/fests", text: "Festivals" },
  { to: "/clubs", text: "Clubs" },
  { to: "/news", text: "News & Feed" },
  { to: "/calendar", text: "Calendar" },
  { to: "/forum", text: "Forum" },
];

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const overlay = (
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
    </ul>
  </div>
);

const NavsWhite = () => {
  const location = useLocation();
  return (
    <header>
      {overlay}
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
          <li className="icon-menu">
            <FontAwesomeIcon icon={faBars} onClick={openNav} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavsWhite;

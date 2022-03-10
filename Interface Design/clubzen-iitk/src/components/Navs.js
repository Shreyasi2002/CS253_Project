import React from "react";
import { useLocation } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "./Links.styled";

import "./Navs.css";

const LINKS = [
  { to: "/councils", text: "Councils" },
  { to: "/fests", text: "Festivals" },
  { to: "/clubs", text: "Clubs" },
  { to: "/news", text: "News & Feed" },
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

const Navs = () => {
  const location = useLocation();
  return (
    <>
      {overlay}
      <header>
        <nav className="nav">
          <h3 className="nav-logo">
            <NavLink to="/">ClubZen IITK</NavLink>
          </h3>
          <ul className="nav-items">
            {LINKS.map((item) => (
              <li key={item.to} className="menu-nav" id="navigation">
                <NavLink
                  to={item.to}
                  className={item.to === location.pathname ? "active" : ""}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
            <li className="icon-menu">
              <FontAwesomeIcon icon={faBars} onClick={openNav} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navs;

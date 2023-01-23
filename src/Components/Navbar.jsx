import React from "react";
import "../Styles/Navbar.css";
import "../Util/Navbar.js";
import logo from "../Assets/Images/hex-logo-dark.png";
import Dropdown from "./Dropdown";
export default function Navbar() {
  return (
    <div id="navbar" className="navbar-container">
      <a href="/" id="logo-link" className="home-link">
        <img id="logo" src={logo} alt="Vetle's Logo" />
        <span>Hexy-Web</span>
      </a>
      <Dropdown />
      <div id="navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item slide">
            <a className="navbar-link" href="#top-home">
              Home
            </a>
          </li>
          <li className="navbar-item slide">
            <a className="navbar-link" href="#top-about">
              About
            </a>
          </li>
          <li className="navbar-item slide">
            <a className="navbar-link" href="#top-portfolio">
              Portfolio
            </a>
          </li>
          <li className="navbar-item slide">
            <a className="navbar-link" href="#top-contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

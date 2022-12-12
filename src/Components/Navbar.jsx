import React from "react";
import "../Assets/Styles/Navbar.css";
import "../Util/Navbar.js";
import logo from "../Assets/Images/hex-logo-dark.png";
export default function Navbar() {
  return (
    <div id="navbar" className="navbar-container">
      <a href="/" id="logo-link" className="home-link">
        <img id="logo" src={logo} alt="Vetle's Logo" />
        <span>Hexy-Web</span>
      </a>
      <button
        type="button"
        id="navbar-toggle"
        aria-controls="navbar-menu"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div id="navbar-menu" aria-labelledby="navbar-toggle">
        <ul className="navbar-links">
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

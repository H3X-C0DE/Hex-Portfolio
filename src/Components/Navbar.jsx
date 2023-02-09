import React from "react";
import "../Styles/Navbar.css";
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
            <a className="navbar-link active" href="#home">
              Hjem
            </a>
          </li>
          <li className="navbar-item slide">
            <a className="navbar-link" href="#about">
              Om&nbsp;Meg
            </a>
          </li>
          <li className="navbar-item slide">
            <a className="navbar-link" href="#cv">
              Cv
            </a>
          </li>
          <li className="navbar-item slide">
            <a className="navbar-link" href="#portfolio">
              Portefølje
            </a>
          </li>
          <li className="navbar-item slide">
            <a className="navbar-link" href="#contact">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

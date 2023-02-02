import React from "react";
import { useState, useRef, useEffect } from "react";
import "../Styles/Navbar.css";

export default function Dropdown({ toggled, onClick }) {
  const dropdownRef = useRef(null);
  const [isToggled, toggle] = useState(toggled);
  const callback = () => {
    toggle(!isToggled);
  };
  // Closes Dropdown menu when mousedown is detected outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        toggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="menu-container" ref={dropdownRef}>
      {/* <button onClick={buttonOnClick} className=""> */}
      <span>
        {/* <i className="fa-solid fa-burger"></i> */}
        <label htmlFor="burgerCheck" className="fa-solid fa-burger"></label>
        <input
          id="burgerCheck"
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
        />
      </span>
      {/* </button> */}
      <nav className={`menu ${isToggled ? "active" : "inactive"}`}>
        <ul>
          <li>
            <a className="navbar-link" href="#top-home">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#top-about">
              About
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#top-cv">
              Cv
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#top-portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#top-contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

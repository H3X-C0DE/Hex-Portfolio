import React from "react";
import { useState, useRef, useEffect } from "react";
import "../Styles/Navbar.css";

export default function Dropdown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  // Closes Dropdown menu when mousedown is detected outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);
  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>
          <i className="fa-solid fa-burger"></i>
        </span>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
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
          <li className="navbar-item slide">
            <a className="navbar-link" href="#top-cv">
              Cv
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#top-portfolio">
              Portfolio
            </a>
          </li>
          <li className="last-li">
            <a className="navbar-link" href="#top-contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

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

  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "cv", "portfolio", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: 0,
        about: document.querySelector("#about").offsetTop - 50,
        cv: document.querySelector("#cv").offsetTop - 50,
        portfolio: document.querySelector("#portfolio").offsetTop - 50,
        contact: document.querySelector("#contact").offsetTop - 50,
      };

      const scrollPosition = window.pageYOffset;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];

        if (scrollPosition >= sectionOffsets[section]) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="menu-container" ref={dropdownRef}>
      {/* <button onClick={buttonOnClick} className=""> */}
      <span>
        {/* <i className="fa-solid fa-burger"></i> */}
        <label htmlFor="burgerCheck" className="fa-solid fa-burger">
          <span>burger menu</span>
        </label>
        <input
          id="burgerCheck"
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
        />
      </span>
      {/* </button> */}
      <nav className={`menu ${isToggled ? "isOpen" : "isClosed"}`}>
        <ul className="navbar-list">
          {sections.map((section) => (
            <li
              className={`navbar-item-menu ${
                activeSection === section ? "active-menu" : ""
              }`}
              key={section}
            >
              <a className="navbar-link" href={`#${section}`}>
                {section === "home" ? "Hjem" : ""}
                {section === "about" ? "Info" : ""}
                {section === "cv" ? "Cv" : ""}
                {section === "portfolio" ? "Portefølje" : ""}
                {section === "contact" ? "Kontakt" : ""}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

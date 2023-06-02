import React, { useState, useRef, useEffect, useMemo } from "react";
import "../Styles/Navbar.css";

export default function Dropdown({ toggled }) {
  const dropdownRef = useRef(null);
  const [isToggled, toggle] = useState(toggled);
  const callback = () => {
    toggle(!isToggled);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        toggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const [activeSection, setActiveSection] = useState("home");

  // Wrap the initialization of the 'sections' array in useMemo()
  const sections = useMemo(
    () => ["home", "about", "cv", "portfolio", "contact"],
    []
  );
  const NAVBAR_HEIGHT = 50;

  useEffect(() => {
    const handleScroll = () => {
      let sectionOffsets = {
        home: 0,
        about: document.querySelector("#about").offsetTop - NAVBAR_HEIGHT,
        cv: document.querySelector("#cv").offsetTop - NAVBAR_HEIGHT,
        portfolio:
          document.querySelector("#portfolio").offsetTop - NAVBAR_HEIGHT,
        contact: document.querySelector("#contact").offsetTop - NAVBAR_HEIGHT,
      };
      // Adjust offsetTop value for 'contact' section on mobile devices
      if (window.innerWidth <= 768) {
        sectionOffsets = {
          ...sectionOffsets,
          contact:
            document.querySelector("#contact").offsetTop - NAVBAR_HEIGHT - 450, // Adjust this value to match the correct offsetTop value on mobile devices
        };
      }
      // console.log(sectionOffsets);

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
  }, [sections]);

  const sectionText = {
    home: "Hjem",
    about: "Info",
    cv: "Cv",
    portfolio: "Portefølje",
    contact: "Kontakt",
  };
  return (
    <div className="menu-container" ref={dropdownRef}>
      <span>
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
                {sectionText[section]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

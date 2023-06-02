import React, { useState, useEffect, useMemo } from "react";
import "../Styles/Navbar.css";
import logo from "../Assets/Images/hex-logo-dark.png";
import Dropdown from "./Dropdown";
const NAVBAR_HEIGHT = 50;
const NAVBAR_BOTTOM = 600;
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useMemo(
    () => ["home", "about", "cv", "portfolio", "contact"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: 0,
        about: document.querySelector("#about").offsetTop - NAVBAR_HEIGHT,
        cv: document.querySelector("#cv").offsetTop - NAVBAR_HEIGHT,
        portfolio:
          document.querySelector("#portfolio").offsetTop - NAVBAR_HEIGHT,
        contact: document.querySelector("#contact").offsetTop - NAVBAR_BOTTOM,
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
  }, [sections]);

  const sectionText = {
    home: "Hjem",
    about: "Info",
    cv: "Cv",
    portfolio: "Portefølje",
    contact: "Kontakt",
  };
  return (
    <div id="navbar" className="navbar-container">
      <a href="/" id="logo-link" className="home-link">
        <img id="logo" src={logo} alt="Vetle's Logo" />
        <span>Hexy-Web</span>
      </a>
      <Dropdown />
      <div id="navbar-menu">
        <ul className="navbar-list">
          {sections.map((section) => (
            <li
              className={`navbar-item ${
                activeSection === section ? "active" : ""
              }`}
              key={section}
            >
              <a className="navbar-link" href={`#${section}`}>
                {sectionText[section]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

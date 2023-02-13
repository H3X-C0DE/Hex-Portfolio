import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../Assets/Images/hex-logo-dark.png";
import Dropdown from "./Dropdown";
export default function Navbar() {
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
                {section === "home" ? "Hjem" : ""}
                {section === "about" ? "Info" : ""}
                {section === "cv" ? "Cv" : ""}
                {section === "portfolio" ? "Portefølje" : ""}
                {section === "contact" ? "Kontakt" : ""}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

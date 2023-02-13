import React from "react";
import Social from "./Social";
import "../Styles/HeroSection.css";
import PfpToggle from "./misc/pfpToggle";
export default function HeroSection() {
  return (
    <div id="home" className="main-container">
      <div className="container">
        <div className="banner-container">
          <div className="banner"></div>
          <div className="pfp-container">
            <div className="spinner">
              <div className="spinner-content">
                <PfpToggle />
              </div>
            </div>
          </div>
        </div>
        <div className="info-container">
          <h1 className="name">Vetle Tessem</h1>
          <h2 className="under-title">&lt; Front-End Student /&gt;</h2>
        </div>
        <Social />
      </div>
    </div>
  );
}

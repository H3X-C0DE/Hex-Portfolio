import React from "react";
import Social from "./Social";
import pfp from "../Assets/Images/vetle.jpg";
export default function HeroSection() {
  return (
    <div id="top-home" className="main-container">
      <div className="container">
        <div className="banner-container">
          <div className="banner"></div>
          <div className="pfp-container">
            <div className="spinner">
              <div className="spinner-content">
                <img
                  id="avatar"
                  className="pfp"
                  src={pfp}
                  alt="picture of Vetle's face"
                />
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

import React from "react";
import { Link } from "react-router-dom";
// import Social from "../Components/Social";
import "../Styles/HeroSection.css";
import "../Styles/404.css";
import AnimatedBg from "../Components/misc/AnimatedBg";

export default function HeroSection() {
  return (
    <div id="home" className="main-container">
      <div className="container">
        <div className="banner-container"></div>
        <div className="info-container">
          <h1 className="noPage-title">404</h1>
          {/* <h2 className="under-title">&lt; Could not find the page! /&gt;</h2> */}
          <h2>&lt; Could not find the page! /&gt;</h2>
          <Link className="goBack404" to="/">
            {" "}
            Go Back{" "}
          </Link>
        </div>
      </div>
      <AnimatedBg />
    </div>
  );
}

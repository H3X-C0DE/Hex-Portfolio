import React from "react";
// import { Link } from "react-router-dom";
// import Social from "../Components/Social";
import "../Styles/HeroSection.css";
import AnimatedBg from "../Components/misc/AnimatedBg";
import Navbar from "../Components/Navbar";
import Projects from "../Components/AllProjects";

// ---------------------------------------------------------------------------
// TODO: Need to make a unique project file for this page.
// TODO: Add additional work like drawings, photography etc into its own categories.
// TODO: make a new navbar unique for this page.
// TODO: (optional) make a dropdown link on existing navbar.
// ---------------------------------------------------------------------------

export default function HeroSection() {
  return (
    <>
      <Navbar />

      <Projects />
      {/* <Link className="goBack404" to="/">
        {" "}
        Go Back{" "}
      </Link> */}
      <AnimatedBg />
    </>
  );
}

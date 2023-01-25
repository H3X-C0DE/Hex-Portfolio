//TODO: add Contact from.
//TODO: add / convert javascript functions.
import React from "react";
import "../Styles/App.css";
import HeroSection from "../Components/HeroSection";
import AnimatedBg from "../Components/misc/AnimatedBg";
import About from "../Components/About";
import Projects from "../Components/Projects";
// import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cv from "../Components/Cv";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Cv />
      <Projects />
      {/* <Contact /> */}
      <Footer />
      <AnimatedBg />
    </>
  );
}

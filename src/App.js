//TODO: add Navbar & Contact from.
//TODO: add / convert javascript functions.
//TODO: Clean up or split Css file into smaller style files and add them to separate folder.
// import logo from "./logo.svg";
import "./App.css";

// import Navbar from "./Components/Contact";
import HeroSection from "./Components/HeroSection";
import AnimatedBg from "./Components/AnimatedBg";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// import Social from "./Components/Social";
// import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <HeroSection />
      <About />
      <Projects />
      {/* <Contact /> */}
      <AnimatedBg />
    </div>
  );
}

export default App;

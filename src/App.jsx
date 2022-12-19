//TODO: add Navbar & Contact from.
//TODO: add / convert javascript functions.
import "./App.css";

// import Navbar from "./Components/Contact";
import HeroSection from "./Components/HeroSection";
import AnimatedBg from "./Components/AnimatedBg";
import About from "./Components/About";
import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      {/* <Contact /> */}
      <AnimatedBg />
    </div>
  );
}

export default App;

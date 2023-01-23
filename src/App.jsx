//TODO: add Contact from.
//TODO: add Cv from.
//TODO: add / convert javascript functions.
import "./Styles/App.css";

import HeroSection from "./Components/HeroSection";
import AnimatedBg from "./Components/misc/AnimatedBg";
import About from "./Components/About";
import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cv from "./Components/Cv";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Cv />
      <Projects />
      {/* <Contact /> */}
      <Footer />
      <AnimatedBg />
    </div>
  );
}

export default App;

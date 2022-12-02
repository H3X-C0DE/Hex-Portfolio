import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/nav";
import Gretting from "./components/gretting";
function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gretting />
      </header>
    </div>
  );
}

export default App;

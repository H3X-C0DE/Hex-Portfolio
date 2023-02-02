//TODO: add Contact from.
//TODO: add Cv from.
//TODO: add / convert javascript functions.
import "./Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
import NoPage from "./pages/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

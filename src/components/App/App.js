import Navbar from "../NavBar/Navbar";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

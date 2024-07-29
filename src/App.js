import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

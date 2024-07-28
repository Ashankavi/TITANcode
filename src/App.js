import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Experts from "./Components/Experts";
import Talks from "./Components/Talks";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";

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
        </Routes>
        <Experts />
        <Talks />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
